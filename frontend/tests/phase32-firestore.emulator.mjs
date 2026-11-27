import { readFile } from 'node:fs/promises';
import { before, beforeEach, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { initializeTestEnvironment, assertSucceeds, assertFails } from '@firebase/rules-unit-testing';
import { doc, setDoc, deleteDoc, getDoc, getDocs, collection, query, where, limit, serverTimestamp, writeBatch } from 'firebase/firestore';
import { initializeApp, deleteApp } from 'firebase/app';
import { connectAuthEmulator, createUserWithEmailAndPassword, deleteUser, getAuth, reload } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

const projectId = 'demo-bergedorf-gemeinsam';
let env;
const context = uid => env.authenticatedContext(uid, { email_verified: true, email: `${uid}@example.test` });
const db = uid => context(uid).firestore();
const stamp = () => serverTimestamp();
const config = async () => env.withSecurityRulesDisabled(async c => {
  await setDoc(doc(c.firestore(), 'platformConfig/participation'), { enabled: true });
});
const seedGroup = async (id = 'group-a', uid = 'coord') => env.withSecurityRulesDisabled(async c => {
  const store = c.firestore();
  await setDoc(doc(store, `groups/${id}`), {
    projectId: 'projekt-einsamkeitslotsen', title: 'Lokale Demogruppe', description: 'Synthetische Testgruppe', publicDescription: 'Synthetische Kurzbeschreibung',
    status: 'forming', createdBy: uid, coordinatorUid: uid, listed: false, seeking: 'members',
    createdAt: new Date(), updatedAt: new Date(), schemaVersion: 1
  });
  await setDoc(doc(store, `groups/${id}/members/${uid}`), { role: 'coordinator', status: 'active', joinedAt: new Date() });
  await setDoc(doc(store, `users/${uid}/groupMemberships/${id}`), { groupId: id, role: 'coordinator', status: 'active', joinedAt: new Date() });
});
const grantInterest = async (uid, project) => {
  const store = db(uid); const eventId = `evt-${uid}-${project}`; const batch = writeBatch(store);
  batch.set(doc(store, `consentEvents/${eventId}`), { uid, purpose: 'participation', subjectId: project, noticeVersion: 'local-preview-v1', decision: 'granted', occurredAt: stamp() });
  batch.set(doc(store, `users/${uid}/interests/${project}`), { projectId: project, types: ['interested'], status: 'active', noticeVersion: 'local-preview-v1', consentEventId: eventId, createdAt: stamp(), updatedAt: stamp() });
  return batch.commit();
};

before(async () => {
  assert.equal(process.env.GCLOUD_PROJECT, projectId, 'Emulator-Tests dürfen nur das Demo-Projekt verwenden');
  assert.ok(process.env.FIRESTORE_EMULATOR_HOST, 'Firestore-Emulator muss aktiv sein');
  env = await initializeTestEnvironment({ projectId, firestore: { rules: await readFile(new URL('../firestore.rules', import.meta.url), 'utf8') } });
});
beforeEach(async () => { await env.clearFirestore(); await config(); });
after(async () => { await env?.cleanup(); });

test('verifizierte Person legt eigene Interessen mit Mehrfachauswahl an; fremde UID und unbekannte Projekt-ID scheitern', async () => {
  await assertSucceeds(grantInterest('alice', 'projekt-einsamkeitslotsen'));
  await assertFails(getDoc(doc(db('bob'), 'users/alice/interests/projekt-einsamkeitslotsen')));
  await assertFails(setDoc(doc(db('alice'), 'users/alice/interests/fake-project'), { projectId: 'fake-project', types: ['interested'], status: 'active', noticeVersion: 'local-preview-v1', consentEventId: 'missing', createdAt: stamp(), updatedAt: stamp() }));
  await assertFails(setDoc(doc(db('alice'), 'users/alice/interests/projekt-hilfswegweiser'), { projectId: 'projekt-hilfswegweiser', types: ['interested'], status: 'active', noticeVersion: 'local-preview-v1', consentEventId: 'missing', createdAt: stamp(), updatedAt: stamp(), diagnosis: 'unzulässiges Feld' }));
});

test('nicht bestätigte, abgemeldete und fremde Konten können keine Interessen lesen oder schreiben', async () => {
  await assertSucceeds(grantInterest('verified', 'projekt-hilfswegweiser'));
  await assertFails(getDoc(doc(env.authenticatedContext('unverified', { email_verified: false }).firestore(), 'users/verified/interests/projekt-hilfswegweiser')));
  await assertFails(getDoc(doc(env.unauthenticatedContext().firestore(), 'users/verified/interests/projekt-hilfswegweiser')));
  await assertFails(setDoc(doc(db('intruder'), 'users/verified/interests/projekt-hilfswegweiser'), { projectId: 'projekt-hilfswegweiser', types: ['follow'], status: 'active', noticeVersion: 'local-preview-v1', createdAt: stamp(), updatedAt: stamp() }));
});

test('gruppengründung verlangt atomare erste Koordination und verweigert unzulässige Projekt- oder Felddaten', async () => {
  const store = db('creator'); const batch = writeBatch(store);
  batch.set(doc(store, 'groups/group-created'), { projectId: 'projekt-wirksamkeit', title: 'Test', description: '', publicDescription: '', status: 'forming', createdBy: 'creator', coordinatorUid: 'creator', listed: false, seeking: 'members', createdAt: stamp(), updatedAt: stamp(), schemaVersion: 1 });
  batch.set(doc(store, 'groups/group-created/members/creator'), { role: 'coordinator', status: 'active', joinedAt: stamp() });
  batch.set(doc(store, 'users/creator/groupMemberships/group-created'), { groupId: 'group-created', role: 'coordinator', status: 'active', joinedAt: stamp() });
  await assertSucceeds(batch.commit());
  await assertFails(setDoc(doc(store, 'groups/group-orphan'), { projectId: 'projekt-wirksamkeit', title: 'Test', description: '', publicDescription: '', status: 'forming', createdBy: 'creator', coordinatorUid: 'creator', listed: false, seeking: 'members', createdAt: stamp(), updatedAt: stamp(), schemaVersion: 1 }));
  await assertFails(setDoc(doc(store, 'groups/group-extra'), { projectId: 'projekt-wirksamkeit', title: 'Test', description: '', publicDescription: '', status: 'forming', createdBy: 'creator', coordinatorUid: 'creator', listed: false, seeking: 'members', createdAt: stamp(), updatedAt: stamp(), schemaVersion: 1, email: 'private@example.test' }));
});

test('Arbeitsbereiche und Mitgliederdaten bleiben für Außenstehende geschlossen', async () => {
  await seedGroup();
  await assertSucceeds(getDoc(doc(db('coord'), 'groups/group-a')));
  await assertSucceeds(getDocs(query(collection(db('coord'), 'groups/group-a/members'), limit(25))));
  await assertFails(getDoc(doc(db('visitor'), 'groups/group-a')));
  await assertFails(getDocs(collection(db('visitor'), 'groups/group-a/workItems')));
  await assertFails(getDoc(doc(db('visitor'), 'groups/group-a/members/coord')));
});

test('Beitrittsanfragen sind privat; Aufnahme braucht Koordination und atomare Mitgliedschaft', async () => {
  await seedGroup();
  await env.withSecurityRulesDisabled(async c => {
    const store = c.firestore();
    await setDoc(doc(store, 'groups/group-a'), { listed: true }, { merge: true });
    await setDoc(doc(store, 'groupDirectory/group-a'), { projectId: 'projekt-einsamkeitslotsen', title: 'Lokale Demogruppe', description: 'Synthetische Kurzbeschreibung', status: 'forming', seeking: 'members', listed: true, updatedAt: new Date() });
  });
  const joinerStore = db('joiner'); const requestBatch = writeBatch(joinerStore);
  requestBatch.set(doc(joinerStore, 'groups/group-a/joinRequests/joiner'), { uid: 'joiner', status: 'pending', createdAt: stamp() });
  requestBatch.set(doc(joinerStore, 'users/joiner/joinRequests/group-a'), { groupId: 'group-a', status: 'pending', createdAt: stamp() });
  await assertSucceeds(requestBatch.commit());
  await assertFails(getDoc(doc(db('other'), 'groups/group-a/joinRequests/joiner')));
  await assertSucceeds(getDocs(query(collection(db('coord'), 'groups/group-a/joinRequests'), where('status', '==', 'pending'), limit(25))));
  const coord = db('coord'); const batch = writeBatch(coord);
  batch.update(doc(coord, 'groups/group-a/joinRequests/joiner'), { status: 'accepted', decidedAt: stamp() });
  batch.update(doc(coord, 'users/joiner/joinRequests/group-a'), { status: 'accepted', decidedAt: stamp() });
  batch.set(doc(coord, 'groups/group-a/members/joiner'), { role: 'member', status: 'active', joinedAt: stamp() });
  batch.set(doc(coord, 'users/joiner/groupMemberships/group-a'), { groupId: 'group-a', role: 'member', status: 'active', joinedAt: stamp() });
  await assertSucceeds(batch.commit());
  await assertSucceeds(getDoc(doc(db('joiner'), 'groups/group-a')));
});

test('Direkte Beitrittsanfragen an fehlende, private oder geschlossene Gruppen werden abgewiesen', async () => {
  await seedGroup('private-group');
  await assertFails(setDoc(doc(db('visitor'), 'groups/missing-group/joinRequests/visitor'), { uid: 'visitor', status: 'pending', createdAt: stamp() }));
  await assertFails(setDoc(doc(db('visitor'), 'groups/private-group/joinRequests/visitor'), { uid: 'visitor', status: 'pending', createdAt: stamp() }));
  await env.withSecurityRulesDisabled(async c => setDoc(doc(c.firestore(), 'groups/private-group'), { status: 'closed' }, { merge: true }));
  await assertFails(setDoc(doc(db('visitor'), 'groups/private-group/joinRequests/visitor'), { uid: 'visitor', status: 'pending', createdAt: stamp() }));
});

test('Mitglieder können weder selbst Koordination noch Plattformverwaltung vergeben', async () => {
  await seedGroup();
  await env.withSecurityRulesDisabled(async c => setDoc(doc(c.firestore(), 'groups/group-a/members/member'), { role: 'member', status: 'active', joinedAt: new Date() }));
  await assertFails(setDoc(doc(db('member'), 'groups/group-a/members/member'), { role: 'coordinator', status: 'active', joinedAt: new Date() }));
  await assertFails(setDoc(doc(db('member'), 'platformStaff/member'), { admin: true }));
});

test('Koordination kann übertragen werden; die letzte Koordination kann nicht ohne Nachfolge ausscheiden', async () => {
  await seedGroup();
  await env.withSecurityRulesDisabled(async c => setDoc(doc(c.firestore(), 'groups/group-a/members/deputy'), { role: 'deputy', status: 'active', joinedAt: new Date() }));
  await assertFails(deleteDoc(doc(db('coord'), 'groups/group-a/members/coord')));
  const coord = db('coord');
  const batch = writeBatch(coord);
  batch.update(doc(coord, 'groups/group-a'), { coordinatorUid: 'deputy', updatedAt: stamp() });
  batch.update(doc(coord, 'groups/group-a/members/coord'), { role: 'member' });
  batch.update(doc(coord, 'users/coord/groupMemberships/group-a'), { role: 'member' });
  await assertSucceeds(batch.commit());
  await assertSucceeds(getDoc(doc(db('deputy'), 'groups/group-a')));
  const leavingStore = db('coord');
  const batchLeave = writeBatch(leavingStore);
  batchLeave.delete(doc(leavingStore, 'groups/group-a/members/coord'));
  batchLeave.delete(doc(leavingStore, 'users/coord/groupMemberships/group-a'));
  await assertSucceeds(batchLeave.commit());
  await assertFails(setDoc(doc(db('deputy'), 'groups/group-a/members/deputy'), { role: 'member', status: 'active' }));
});

test('Primärkoordination kann nur atomar mit Nachfolge ausscheiden oder die Gruppe schließen', async () => {
  await seedGroup('last-coordinator');
  const store = db('coord');
  await assertFails(setDoc(doc(store, 'groups/last-coordinator/members/coord'), { role: 'coordinator', status: 'left' }, { merge: true }));
  const close = writeBatch(store);
  close.update(doc(store, 'groups/last-coordinator'), { status: 'closed', listed: false, seeking: 'none', updatedAt: stamp() });
  close.update(doc(store, 'groups/last-coordinator/members/coord'), { role: 'member', status: 'left' });
  close.update(doc(store, 'users/coord/groupMemberships/last-coordinator'), { role: 'member', status: 'left' });
  await assertSucceeds(close.commit());
  await assertFails(getDoc(doc(db('coord'), 'groups/last-coordinator')));
});

test('Stellvertretung kann den primären Gruppenstatus oder die öffentliche Veröffentlichung nicht selbst ändern', async () => {
  await seedGroup();
  await env.withSecurityRulesDisabled(async c => setDoc(doc(c.firestore(), 'groups/group-a/members/deputy'), { role: 'deputy', status: 'active', joinedAt: new Date() }));
  await assertFails(setDoc(doc(db('deputy'), 'groups/group-a'), { status: 'started', updatedAt: stamp() }, { merge: true }));
  await assertFails(setDoc(doc(db('deputy'), 'groupDirectory/group-a'), { projectId: 'projekt-einsamkeitslotsen', title: 'Gruppe', description: '', status: 'forming', seeking: 'members', listed: true, updatedAt: stamp() }));
});

test('Arbeitsinhalte sind nur für Mitglieder und mit begrenzten Feldern nutzbar', async () => {
  await seedGroup();
  const valid = { kind: 'task', title: 'Nächster Schritt', body: 'Synthetischer Inhalt', status: 'open', createdBy: 'coord', assigneeUid: null, dueAt: null, createdAt: stamp(), updatedAt: stamp() };
  await assertSucceeds(setDoc(doc(db('coord'), 'groups/group-a/workItems/task-a'), valid));
  await assertFails(setDoc(doc(db('visitor'), 'groups/group-a/workItems/task-b'), { ...valid, createdBy: 'visitor' }));
  await assertFails(setDoc(doc(db('coord'), 'groups/group-a/workItems/task-c'), { ...valid, kind: 'private-message' }));
});

test('öffentliche Gruppenliste gibt nur getrennte, sparsame Felder frei', async () => {
  await seedGroup();
  const coord = db('coord');
  const publish = writeBatch(coord);
  publish.update(doc(coord, 'groups/group-a'), { listed: true, updatedAt: stamp() });
  publish.set(doc(coord, 'groupDirectory/group-a'), { projectId: 'projekt-einsamkeitslotsen', title: 'Lokale Demogruppe', description: 'Synthetische Kurzbeschreibung', status: 'forming', seeking: 'members', listed: true, updatedAt: stamp() });
  await assertSucceeds(publish.commit());
  const listed = await getDoc(doc(db('visitor'), 'groupDirectory/group-a'));
  assert.equal(listed.data().title, 'Lokale Demogruppe');
  await assertFails(setDoc(doc(coord, 'groupDirectory/group-private'), { projectId: 'projekt-einsamkeitslotsen', title: 'Leak', description: '', status: 'forming', seeking: 'members', listed: true, updatedAt: stamp(), coordinatorEmail: 'hidden@example.test' }));
  await assertFails(setDoc(doc(coord, 'groupDirectory/group-email'), { projectId: 'projekt-einsamkeitslotsen', title: 'Kontakt demo@example.test', description: '', status: 'forming', seeking: 'members', listed: true, updatedAt: stamp() }));
  await assertFails(setDoc(doc(coord, 'groupDirectory/group-phone'), { projectId: 'projekt-einsamkeitslotsen', title: 'Lokale Gruppe', description: 'Kontakt: +49 40 12345678', status: 'forming', seeking: 'members', listed: true, updatedAt: stamp() }));
  const queryResult = await getDocs(query(collection(db('visitor'), 'groupDirectory'), where('listed', '==', true), limit(25)));
  assert.equal(queryResult.size, 1);
  await assertFails(setDoc(doc(coord, 'groups/group-a'), { status: 'paused', updatedAt: stamp() }, { merge: true }));
  await assertFails(setDoc(doc(coord, 'groupDirectory/group-a'), { status: 'paused', updatedAt: stamp() }, { merge: true }));
  const unpublish = writeBatch(coord);
  unpublish.update(doc(coord, 'groups/group-a'), { listed: false, updatedAt: stamp() });
  unpublish.delete(doc(coord, 'groupDirectory/group-a'));
  unpublish.set(doc(coord, 'consentEvents/listing-withdrawal'), { uid: 'coord', purpose: 'public-group-listing', subjectId: 'group-a', noticeVersion: 'local-preview-v1', decision: 'withdrawn', occurredAt: stamp() });
  await assertSucceeds(unpublish.commit());
  await assertFails(getDoc(doc(db('visitor'), 'groupDirectory/group-a')));
});

test('Missbrauchsmeldungen verwenden feste Kategorien und bleiben für andere Nutzer geschlossen', async () => {
  await assertSucceeds(setDoc(doc(db('reporter'), 'abuseReports/report-a'), { reporterUid: 'reporter', groupId: 'group-a', reason: 'privacy', createdAt: stamp() }));
  await assertSucceeds(getDoc(doc(db('reporter'), 'abuseReports/report-a')));
  await assertFails(getDoc(doc(db('other-reporter'), 'abuseReports/report-a')));
  await assertFails(setDoc(doc(db('reporter'), 'abuseReports/report-b'), { reporterUid: 'reporter', groupId: 'group-a', reason: 'freeform', createdAt: stamp(), message: 'Freitext' }));
});

test('Einwilligungsereignisse sind versionsgebunden und unveränderbar', async () => {
  const store = db('alice'); const event = doc(store, 'consentEvents/alice-participation-v1'); const batch = writeBatch(store);
  batch.set(event, { uid: 'alice', purpose: 'participation', subjectId: 'projekt-einsamkeitslotsen', noticeVersion: 'local-preview-v1', decision: 'granted', occurredAt: stamp() });
  batch.set(doc(store, 'users/alice/interests/projekt-einsamkeitslotsen'), { projectId: 'projekt-einsamkeitslotsen', types: ['interested'], status: 'active', noticeVersion: 'local-preview-v1', consentEventId: 'alice-participation-v1', createdAt: stamp(), updatedAt: stamp() });
  await assertSucceeds(batch.commit());
  await assertFails(setDoc(event, { uid: 'alice', purpose: 'participation', subjectId: 'projekt-einsamkeitslotsen', noticeVersion: 'local-preview-v1', decision: 'withdrawn', occurredAt: stamp() }));
  await assertFails(setDoc(doc(db('bob'), 'consentEvents/bob-forged'), { uid: 'alice', purpose: 'participation', subjectId: 'projekt-einsamkeitslotsen', noticeVersion: 'local-preview-v1', decision: 'granted', occurredAt: stamp() }));
});

test('Interessen ohne atomare Zustimmung scheitern; nach Widerruf erfordert Reaktivierung eine neue Zustimmung', async () => {
  const store = db('consenter');
  const interest = doc(store, 'users/consenter/interests/projekt-wirksamkeit');
  await assertFails(setDoc(interest, { projectId: 'projekt-wirksamkeit', types: ['interested'], status: 'active', noticeVersion: 'local-preview-v1', consentEventId: 'missing-event', createdAt: stamp(), updatedAt: stamp() }));
  await assertSucceeds(grantInterest('consenter', 'projekt-wirksamkeit'));
  const eventRef = doc(store, 'consentEvents/withdraw-consent'); const withdrawal = writeBatch(store);
  withdrawal.update(interest, { status: 'withdrawn', consentEventId: eventRef.id, updatedAt: stamp() });
  withdrawal.set(eventRef, { uid: 'consenter', purpose: 'participation', subjectId: 'projekt-wirksamkeit', noticeVersion: 'local-preview-v1', decision: 'withdrawn', occurredAt: stamp() });
  await assertSucceeds(withdrawal.commit());
  await assertFails(setDoc(interest, { projectId: 'projekt-wirksamkeit', types: ['interested'], status: 'active', updatedAt: stamp() }, { merge: true }));
});

test('globaler Not-Aus sperrt Zugriff; Clients können ihn nicht umstellen', async () => {
  await seedGroup();
  await env.withSecurityRulesDisabled(async c => deleteDoc(doc(c.firestore(), 'platformConfig/participation')));
  await assertFails(getDoc(doc(db('coord'), 'groups/group-a')));
  await assertFails(setDoc(doc(db('coord'), 'platformConfig/participation'), { enabled: true }));
});

test('fehlender Konfigurationsschalter bleibt geschlossen; unlimitierte Gruppenabfragen werden verweigert', async () => {
  await seedGroup();
  await env.withSecurityRulesDisabled(async c => setDoc(doc(c.firestore(), 'platformConfig/participation'), { enabled: false }));
  await assertFails(getDoc(doc(db('coord'), 'groups/group-a')));
  await config();
  await assertFails(getDocs(collection(db('coord'), 'groups/group-a/workItems')));
  await assertSucceeds(getDocs(query(collection(db('coord'), 'groups/group-a/workItems'), limit(25))));
});

test('synthetische Registrierung und E-Mail-Bestätigung funktionieren im Auth-Emulator und reichen für eine geschützte Firestore-Aktion', async () => {
  assert.ok(process.env.FIREBASE_AUTH_EMULATOR_HOST, 'Auth-Emulator muss aktiviert sein');
  const app = initializeApp({ apiKey: 'demo-only-not-a-secret', projectId, appId: '1:000000000000:web:auth-test' }, `phase32-auth-${Date.now()}`);
  const accountAuth = getAuth(app);
  const authHost = process.env.FIREBASE_AUTH_EMULATOR_HOST;
  connectAuthEmulator(accountAuth, `http://${authHost}`, { disableWarnings: true });
  try {
    const credential = await createUserWithEmailAndPassword(accountAuth, `synthetic-${Date.now()}@example.test`, 'test-password-32');
    const verified = await fetch(`http://${authHost}/identitytoolkit.googleapis.com/v1/accounts:update?key=demo-only-not-a-secret`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' }, body: JSON.stringify({ localId: credential.user.uid, emailVerified: true })
    });
    assert.equal(verified.ok, true, await verified.text());
    await reload(credential.user);
    await credential.user.getIdToken(true);
    await reload(credential.user);
    assert.equal(credential.user.emailVerified, true);
    const firestore = getFirestore(app); connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
    const eventRef = doc(firestore, `consentEvents/auth-${credential.user.uid}`); const batch = writeBatch(firestore);
    batch.set(eventRef, { uid: credential.user.uid, purpose: 'participation', subjectId: 'projekt-wirksamkeit', noticeVersion: 'local-preview-v1', decision: 'granted', occurredAt: serverTimestamp() });
    batch.set(doc(firestore, `users/${credential.user.uid}/interests/projekt-wirksamkeit`), {
      projectId: 'projekt-wirksamkeit', types: ['interested'], status: 'active', noticeVersion: 'local-preview-v1', consentEventId: eventRef.id, createdAt: serverTimestamp(), updatedAt: serverTimestamp()
    });
    await assertSucceeds(batch.commit());
    await deleteUser(credential.user);
  } finally {
    await deleteApp(app);
  }
});
