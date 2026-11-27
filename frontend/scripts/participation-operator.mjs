#!/usr/bin/env node
/**
 * Local operator CLI. Uses Application Default Credentials; never place service
 * account keys in this repository or the public website. This tool is not a
 * hosted backend and must only be used from a trusted operator workstation.
 */
import { initializeApp, applicationDefault, deleteApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { processAccountDeletion } from './participation-deletion.mjs';

const [command, ...args] = process.argv.slice(2);
const FIRESTORE_DATABASE_ID = '(default)';
const projectId = args.find(x => x.startsWith('--project='))?.slice('--project='.length) || process.env.GCLOUD_PROJECT;
if (!projectId || projectId.startsWith('demo-')) throw new Error('Aufruf benötigt --project=<Firebase-Projekt-ID>; Demo-Projekte werden abgewiesen.');
if (process.env.FIRESTORE_EMULATOR_HOST || process.env.FIREBASE_AUTH_EMULATOR_HOST) throw new Error('Diese Betreiber-CLI darf nicht mit Emulator-Endpunkten ausgeführt werden.');
const app = initializeApp({ credential: applicationDefault(), projectId }, `participation-operator-${process.pid}`);
const db = getFirestore(app, FIRESTORE_DATABASE_ID);
const auth = getAuth(app);

function arg(name) { return args.find(x => x.startsWith(`--${name}=`))?.slice(name.length + 3); }
function required(name) { const value = arg(name); if (!value) throw new Error(`Parameter --${name}=... fehlt.`); return value; }
function uidOk(uid) { if (!/^[A-Za-z0-9_-]{1,128}$/.test(uid)) throw new Error('Ungültige UID.'); return uid; }
function idOk(id) { if (!/^[A-Za-z0-9_-]{1,128}$/.test(id)) throw new Error('Ungültige Dokumentkennung.'); return id; }
async function confirm() {
  const rl = createInterface({ input: stdin, output: stdout });
  try { const answer = await rl.question(`Zielprojekt ${projectId} bestätigen (Projekt-ID eingeben): `); if (answer !== projectId) throw new Error('Abgebrochen: Projekt-ID stimmt nicht überein.'); }
  finally { rl.close(); }
}
async function audit(action, details = {}) {
  await db.collection('platformAdminActions').add({ actor: process.env.USER || process.env.USERNAME || 'operator', action, projectId, details, createdAt: FieldValue.serverTimestamp() });
}
async function listPages(collectionRef, pageSize = 200) {
  const rows = []; let cursor;
  for (;;) {
    let query = collectionRef.orderBy('__name__').limit(pageSize);
    if (cursor) query = query.startAfter(cursor);
    const page = await query.get(); rows.push(...page.docs);
    if (page.size < pageSize) return rows;
    cursor = page.docs.at(-1);
  }
}
async function ask(prompt) {
  const rl = createInterface({ input: stdin, output: stdout });
  try { return await rl.question(prompt); } finally { rl.close(); }
}
async function exportUser(uid) {
  uidOk(uid);
  const paths = ['interests', 'groupMemberships', 'joinRequests', 'workItemRefs'];
  const [interests, memberships, requests, workRefs, consents, reports, deletionRequests] = await Promise.all([
    ...paths.map(name => listPages(db.collection(`users/${uid}/${name}`))),
    listPages(db.collection('consentEvents').where('uid', '==', uid)),
    listPages(db.collection('abuseReports').where('reporterUid', '==', uid)),
    listPages(db.collection('accountDeletionRequests').where('uid', '==', uid))
  ]);
  const groupIds = new Set(memberships.map(x => x.id));
  const groups = await Promise.all([...groupIds].map(async groupId => {
    const group = await db.doc(`groups/${groupId}`).get();
    const membership = await db.doc(`groups/${groupId}/members/${uid}`).get();
    const joinRequest = await db.doc(`groups/${groupId}/joinRequests/${uid}`).get();
    return { groupId, group: group.exists ? { id: group.id, projectId: group.get('projectId'), title: group.get('title'), status: group.get('status') } : null, membership: membership.exists ? { id: membership.id, ...membership.data() } : null, joinRequest: joinRequest.exists ? { id: joinRequest.id, ...joinRequest.data() } : null };
  }));
  const workItems = await Promise.all(workRefs.map(async ref => {
    const groupId = ref.get('groupId'), itemId = ref.get('itemId');
    if (typeof groupId !== 'string' || typeof itemId !== 'string') return { reference: ref.data(), item: null };
    const item = await db.doc(`groups/${groupId}/workItems/${itemId}`).get();
    if (!item.exists || (item.get('createdBy') !== uid && item.get('assigneeUid') !== uid)) return { reference: ref.data(), item: null };
    return { reference: ref.data(), item: { id: item.id, ...item.data() } };
  }));
  return { exportedAt: new Date().toISOString(), projectId, account: { uid, email: (await auth.getUser(uid)).email || null }, interests: interests.map(x => ({ id: x.id, ...x.data() })), groups, joinRequests: requests.map(x => ({ id: x.id, ...x.data() })), workItems, consentEvents: consents.map(x => ({ id: x.id, ...x.data() })), abuseReports: reports.map(x => ({ id: x.id, ...x.data() })), deletionRequests: deletionRequests.map(x => ({ id: x.id, ...x.data() })) };
}

try {
  if (command === 'menu') {
    for (;;) {
      console.log(`\nBergedorf gemeinsam · Betreiberverwaltung · ${projectId}\n1 Meldungen anzeigen\n2 Löschaufträge anzeigen\n3 Löschauftrag bearbeiten\n4 Konto sperren\n5 Gruppe sperren\n6 Persönliche Auskunft exportieren\n7 Beteiligung ausschalten (Not-Aus)\n8 Kontingente in Firebase prüfen\n9 Meldungsstatus bearbeiten\n0 Beenden`);
      const choice = await ask('Auswahl: ');
      if (choice === '0') break;
      if (choice === '1') {
        const reports = await listPages(db.collection('abuseReports').orderBy('__name__'));
        for (const report of reports) {
          const status = await db.doc(`platformReportStatuses/${report.id}`).get();
          console.log(`${report.id} · ${status.exists ? status.get('status') : 'received'} · Gruppe ${report.get('groupId') || '—'}`);
        }
        if (!reports.length) console.log('Keine Meldungen vorhanden.');
      } else if (choice === '2') {
        const requests = await listPages(db.collection('accountDeletionRequests').where('status', 'in', ['requested', 'processing']));
        for (const row of requests) console.log(`${row.id} · ${row.get('status')} · UID ${row.get('uid')}`);
        if (!requests.length) console.log('Keine offenen Löschaufträge vorhanden.');
      } else if (choice === '3') {
        const requestId = await ask('Löschauftragskennung: ');
        const consent = await ask('Einwilligungsnachweise löschen oder anonymisieren (delete/anonymize): ');
        const reports = await ask('Meldungen löschen oder anonymisieren (delete/anonymize): ');
        const sharedContent = await ask('Gemeinsame Arbeitsinhalte löschen oder anonymisieren (delete/anonymize): ');
        if (![consent, reports, sharedContent].every(x => ['delete', 'anonymize'].includes(x))) { console.log('Abgebrochen: Bitte je Kategorie delete oder anonymize angeben.'); continue; }
        await confirm();
        if (await ask(`Löschauftrag ${requestId} endgültig bearbeiten? ID erneut eingeben: `) !== requestId) { console.log('Abgebrochen.'); continue; }
        const result = await processAccountDeletion({ db, auth, requestId, choices: { consent, reports, sharedContent } });
        await audit('account-deletion-complete', { requestId, operationCount: result.operationCount, decisions: { consent, reports, sharedContent } });
        console.log(`Abgeschlossen: ${result.operationCount} dokumentierte Bereinigungsschritte.`);
      } else if (choice === '4') {
        const uid = uidOk(await ask('UID des Kontos: ')); await confirm(); await auth.updateUser(uid, { disabled: true }); await audit('account-disabled', { uid }); console.log('Konto gesperrt.');
      } else if (choice === '5') {
        const groupId = idOk(await ask('Gruppenkennung: ')); const groupRef = db.doc(`groups/${groupId}`);
        if (!(await groupRef.get()).exists) { console.log('Gruppe nicht gefunden.'); continue; }
        await confirm(); const batch = db.batch(); batch.set(groupRef, { locked: true, listed: false, seeking: 'none', updatedAt: FieldValue.serverTimestamp() }, { merge: true }); batch.delete(db.doc(`groupDirectory/${groupId}`)); await batch.commit(); await audit('group-locked', { groupId, listingRemoved: true }); console.log('Gruppe gesperrt und aus dem Verzeichnis entfernt.');
      } else if (choice === '6') {
        const uid = uidOk(await ask('UID des Kontos: ')); const data = await exportUser(uid); process.stdout.write(`${JSON.stringify(data, null, 2)}\n`); await audit('personal-data-export', { uid, groups: data.groups.length, workItems: data.workItems.length });
      } else if (choice === '7') {
        await confirm(); await db.doc('platformConfig/participation').set({ enabled: false, updatedAt: FieldValue.serverTimestamp() }, { merge: true }); await audit('participation-disabled'); console.log('Not-Aus gesetzt.');
      } else if (choice === '8') {
        console.log('Kontingente werden im Firebase-Projekt-Dashboard geprüft:');
        console.log(`https://console.firebase.google.com/project/${projectId}/firestore/usage`);
        console.log('Es wird kein zusätzlicher kostenpflichtiger Überwachungsdienst verwendet.');
      } else if (choice === '9') {
        const reportId = idOk(await ask('Meldungskennung: '));
        const status = await ask('Neuer Status (received/reviewing/actioned/dismissed): ');
        if (!['received', 'reviewing', 'actioned', 'dismissed'].includes(status)) { console.log('Abgebrochen: ungültiger Status.'); continue; }
        const report = await db.doc(`abuseReports/${reportId}`).get();
        if (!report.exists) { console.log('Meldung nicht gefunden.'); continue; }
        const note = (await ask('Kurze interne Notiz (optional): ')).slice(0, 240);
        await confirm();
        await db.doc(`platformReportStatuses/${reportId}`).set({ reportId, status, note, updatedAt: FieldValue.serverTimestamp() });
        await audit('report-status-changed', { reportId, status });
        console.log('Meldungsstatus gespeichert.');
      } else console.log('Bitte eine der angezeigten Nummern eingeben.');
    }
  } else if (command === 'status') {
    const config = await db.doc('platformConfig/participation').get();
    console.log(JSON.stringify({ projectId, participationEnabled: config.exists && config.get('enabled') === true, configPresent: config.exists }, null, 2));
  } else if (command === 'export-user') {
    const uid = uidOk(required('uid')); const data = await exportUser(uid);
    process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
    await audit('personal-data-export', { uid, groups: data.groups.length, workItems: data.workItems.length });
  } else if (command === 'disable-participation') {
    await confirm();
    await db.doc('platformConfig/participation').set({ enabled: false, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    await audit('participation-disabled');
  } else if (command === 'lock-group') {
    const groupId = idOk(required('group')); const groupRef = db.doc(`groups/${groupId}`); const group = await groupRef.get();
    if (!group.exists) throw new Error('Gruppe nicht gefunden.');
    await confirm();
    const batch = db.batch(); batch.set(groupRef, { locked: true, listed: false, seeking: 'none', updatedAt: FieldValue.serverTimestamp() }, { merge: true }); batch.delete(db.doc(`groupDirectory/${groupId}`)); await batch.commit();
    await audit('group-locked', { groupId, listingRemoved: true });
  } else if (command === 'set-report-status') {
    const reportId = idOk(required('report')); const status = required('status');
    if (!['received', 'reviewing', 'actioned', 'dismissed'].includes(status)) throw new Error('Ungültiger Meldungsstatus.');
    const report = await db.doc(`abuseReports/${reportId}`).get(); if (!report.exists) throw new Error('Meldung nicht gefunden.');
    const note = (arg('note') || '').slice(0, 240); await confirm();
    await db.doc(`platformReportStatuses/${reportId}`).set({ reportId, status, note, updatedAt: FieldValue.serverTimestamp() });
    await audit('report-status-changed', { reportId, status });
  } else if (command === 'disable-user') {
    const uid = uidOk(required('uid')); await confirm(); await auth.updateUser(uid, { disabled: true }); await audit('account-disabled', { uid });
  } else if (command === 'process-deletion') {
    const requestId = idOk(required('request'));
    const choices = { consent: required('consent'), reports: required('reports'), sharedContent: required('shared-content') };
    if (![choices.consent, choices.reports, choices.sharedContent].every(x => ['delete', 'anonymize'].includes(x))) throw new Error('Für consent, reports und shared-content ist jeweils delete oder anonymize erforderlich.');
    await confirm();
    if (await ask(`Löschauftrag ${requestId} endgültig bearbeiten? ID erneut eingeben: `) !== requestId) throw new Error('Abgebrochen: Löschauftragskennung stimmt nicht überein.');
    const result = await processAccountDeletion({ db, auth, requestId, choices });
    await audit('account-deletion-complete', { requestId, operationCount: result.operationCount, decisions: choices });
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.error('Befehle: menu (empfohlen) | status | export-user --uid=UID | disable-participation | lock-group --group=ID | set-report-status --report=ID --status=received|reviewing|actioned|dismissed [--note=TEXT] | disable-user --uid=UID | process-deletion --request=ID --consent=delete|anonymize --reports=delete|anonymize --shared-content=delete|anonymize');
    process.exitCode = 2;
  }
} finally { await deleteApp(app); }
