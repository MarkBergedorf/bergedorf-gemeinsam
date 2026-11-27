import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, createUserWithEmailAndPassword, onAuthStateChanged, reload, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { collection, connectFirestoreEmulator, deleteDoc, doc, getDoc, getDocs, limit, query, serverTimestamp, setDoc, where, writeBatch, getFirestore, orderBy, startAfter, updateDoc, type QueryDocumentSnapshot } from 'firebase/firestore';
import { lonelinessProjects } from '../../lib/loneliness-projects.mjs';
import './style.css';

const PROJECT = 'demo-bergedorf-gemeinsam';
const NOTICE = 'local-preview-v1';
const GROUP_STATUSES = [['seeking-members', 'Interessierte Mitwirkende gesucht'], ['seeking-coordinator', 'Koordination gesucht'], ['forming', 'Arbeitsgruppe in Gründung'], ['established', 'Arbeitsgruppe gegründet'], ['concept', 'Projektkonzept in Bearbeitung'], ['partners', 'Kooperationspartner gesucht'], ['funding', 'Finanzierung in Vorbereitung'], ['planned', 'Umsetzung geplant'], ['started', 'Umsetzung begonnen'], ['completed', 'Projekt abgeschlossen'], ['paused', 'Projekt ruht']];
const WORK_KINDS = [['concept', 'Projektkonzept'], ['task', 'Aufgabe'], ['milestone', 'Zeitplanung / Meilenstein'], ['resource', 'Ressourcenplanung'], ['funding', 'Finanzierung'], ['partner', 'Kooperationspartner'], ['decision', 'Entscheidung / Fortschritt']];
const TYPES = [
  ['interested', 'Ich interessiere mich für dieses Projekt'], ['participate', 'Ich möchte aktiv mitarbeiten'],
  ['foundGroup', 'Ich möchte eine Arbeitsgruppe gründen'], ['coordinate', 'Ich würde Koordinationsaufgaben übernehmen'],
  ['expertise', 'Ich möchte fachliche Kenntnisse einbringen'], ['organization', 'Ich möchte als Organisationsvertretung mitwirken'],
  ['follow', 'Ich möchte die Entwicklung zunächst verfolgen']
];
const app = initializeApp({ apiKey: 'demo-only-not-a-secret', authDomain: 'localhost', projectId: PROJECT, appId: '1:000000000000:web:demo' }, 'phase32-local-demo');
const auth = getAuth(app);
const store = getFirestore(app);
if (!['localhost', '127.0.0.1'].includes(location.hostname) || !location.pathname.includes('/local/phase32/')) {
  throw new Error('Die lokale Vorschau darf nur auf localhost unter /local/phase32/ ausgeführt werden.');
}
connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
connectFirestoreEmulator(store, '127.0.0.1', 8080);

async function setVerifiedInEmulator(user: User) {
  const response = await fetch('http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:update?key=demo-only-not-a-secret', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' }, body: JSON.stringify({ localId: user.uid, emailVerified: true })
  });
  if (!response.ok) throw new Error('Das synthetische Konto konnte im lokalen Auth-Emulator nicht bestätigt werden.');
  await reload(user);
  await user.getIdToken(true);
  await reload(user);
}

function Preview() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
  const [projectId, setProjectId] = useState(lonelinessProjects[0].id);
  const [selected, setSelected] = useState<string[]>(['interested']);
  const [publishGroup, setPublishGroup] = useState(false);
  const [groups, setGroups] = useState<any[]>([]); const [groupId, setGroupId] = useState('');
  const [groupCursor, setGroupCursor] = useState<QueryDocumentSnapshot | null>(null); const [moreGroups, setMoreGroups] = useState(false);
  const [members, setMembers] = useState<any[]>([]); const [groupRecord, setGroupRecord] = useState<any>(null); const [groupIsListed, setGroupIsListed] = useState(false);
  const [requests, setRequests] = useState<any[]>([]); const [items, setItems] = useState<any[]>([]);
  const [title, setTitle] = useState(''); const [description, setDescription] = useState('');
  const [seeking, setSeeking] = useState('members');
  const [taskTitle, setTaskTitle] = useState(''); const [taskBody, setTaskBody] = useState(''); const [workKind, setWorkKind] = useState('task'); const [groupStatus, setGroupStatus] = useState('forming');
  const [reportReason, setReportReason] = useState('spam'); const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => onAuthStateChanged(auth, account => setUser(account)), []);

  async function refreshDirectory() {
    const q = query(collection(store, 'groupDirectory'), where('listed', '==', true), where('projectId', '==', projectId), limit(25));
    const result = await getDocs(q);
    setGroups(result.docs.map(s => ({ id: s.id, ...s.data() })));
    setGroupCursor(result.docs.at(-1) || null); setMoreGroups(result.size === 25);
  }
  async function loadMoreGroups() {
    if (!groupCursor) return;
    const q = query(collection(store, 'groupDirectory'), where('listed', '==', true), where('projectId', '==', projectId), startAfter(groupCursor), limit(25));
    const result = await getDocs(q);
    setGroups(current => [...current, ...result.docs.map(s => ({ id: s.id, ...s.data() }))]);
    setGroupCursor(result.docs.at(-1) || groupCursor); setMoreGroups(result.size === 25);
  }
  useEffect(() => { refreshDirectory().catch(() => setGroups([])); }, [projectId]);

  async function authAction(register: boolean) {
    if (!email.trim() || password.length < 6) throw new Error('Für das synthetische Konto E-Mail und mindestens sechs Zeichen eingeben.');
    const credential = register ? await createUserWithEmailAndPassword(auth, email.trim(), password) : await signInWithEmailAndPassword(auth, email.trim(), password);
    await setVerifiedInEmulator(credential.user);
    setMessage('Synthetisches Konto ist im lokalen Auth-Emulator angemeldet.');
  }
  async function saveInterest() {
    if (!user?.emailVerified) throw new Error('Bitte zuerst ein synthetisches Konto anmelden.');
    if (!selected.length) throw new Error('Bitte mindestens eine Beteiligungsform auswählen.');
    await setDoc(doc(store, `users/${user.uid}/interests/${projectId}`), { projectId, types: selected, status: 'active', noticeVersion: NOTICE, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    await setDoc(doc(store, `consentEvents/${user.uid}-${projectId}-${Date.now()}`), { uid: user.uid, purpose: 'participation', noticeVersion: NOTICE, decision: 'granted', occurredAt: serverTimestamp() });
    setMessage('Interessen-Auswahl und Demo-Einwilligungsereignis wurden lokal gespeichert.');
  }
  async function createGroup() {
    if (!user?.emailVerified || !title.trim()) throw new Error('Bitte anmelden und einen Gruppentitel eingeben.');
    if (publishGroup && /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\+?[0-9][0-9 ()/-]{6,}[0-9]/i.test(`${title} ${description}`)) throw new Error('Für das öffentliche Verzeichnis bitte Gruppenbeschreibung ohne E-Mail-Adresse oder Telefonnummer formulieren.');
    const id = `demo-${user.uid.slice(0, 8)}-${Date.now().toString(36)}`;
    const batch = writeBatch(store);
    batch.set(doc(store, `groups/${id}`), { projectId, title: title.trim().slice(0, 80), description: description.trim().slice(0, 500), status: 'forming', createdBy: user.uid, coordinatorUid: user.uid, listed: false, seeking, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), schemaVersion: 1 });
    batch.set(doc(store, `groups/${id}/members/${user.uid}`), { role: 'coordinator', status: 'active', joinedAt: serverTimestamp() });
    await batch.commit();
    if (publishGroup) {
      const publishBatch = writeBatch(store);
      publishBatch.update(doc(store, `groups/${id}`), { listed: true, updatedAt: serverTimestamp() });
      publishBatch.set(doc(store, `groupDirectory/${id}`), { projectId, title: title.trim().slice(0, 80), description: description.trim().slice(0, 280), status: 'forming', seeking, listed: true, updatedAt: serverTimestamp() });
      publishBatch.set(doc(store, `consentEvents/${user.uid}-${id}-listing-${Date.now()}`), { uid: user.uid, purpose: 'public-group-listing', noticeVersion: NOTICE, decision: 'granted', occurredAt: serverTimestamp() });
      await publishBatch.commit();
    }
    localStorage.setItem('phase32-local-group', id); localStorage.setItem('phase32-local-group-listed', String(publishGroup)); setGroupId(id); setTitle(''); setDescription(''); setPublishGroup(false);
    await refreshDirectory(); await openGroup(id); setMessage(publishGroup ? 'Arbeitsgruppe erstellt und nach ausdrücklicher Auswahl im lokalen Demo-Verzeichnis veröffentlicht.' : 'Arbeitsgruppe erstellt. Sie bleibt privat und ist nur der eigenen Mitgliedschaft zugänglich.');
  }
  async function askToJoin(id: string) {
    if (!user?.emailVerified) throw new Error('Bitte zuerst ein synthetisches Konto anmelden.');
    await setDoc(doc(store, `groups/${id}/joinRequests/${user.uid}`), { uid: user.uid, status: 'pending', createdAt: serverTimestamp() });
    setMessage('Beitrittsanfrage ist privat an die Gruppenkoordination gerichtet.');
  }
  async function openGroup(id: string) {
    setGroupId(id);
    if (!user) throw new Error('Bitte zuerst ein synthetisches Konto anmelden.');
    const member = await getDoc(doc(store, `groups/${id}/members/${user.uid}`));
    if (!member.exists() || member.data().status !== 'active') throw new Error('Dieser Gruppenarbeitsbereich ist nur für aktive Mitglieder zugänglich.');
    const [memberDocs, itemDocs] = await Promise.all([
      getDocs(query(collection(store, `groups/${id}/members`), limit(25))),
      getDocs(query(collection(store, `groups/${id}/workItems`), orderBy('updatedAt', 'desc'), limit(25)))
    ]);
    const currentMember = memberDocs.docs.find(snapshot => snapshot.id === user.uid);
    if (!currentMember || currentMember.data().status !== 'active') throw new Error('Dieser Gruppenarbeitsbereich ist nur für aktive Mitglieder zugänglich.');
    const requestDocs = await (['coordinator', 'deputy'].includes(currentMember.data().role)
      ? getDocs(query(collection(store, `groups/${id}/joinRequests`), where('status', '==', 'pending'), limit(25)))
      : Promise.resolve(null));
    /* Keep private member identifiers inside the already-closed group. */
    setMembers(memberDocs.docs.map(s => ({ id: s.id, ...s.data() })));
    setRequests(requestDocs?.docs.map(s => ({ id: s.id, ...s.data() })) || []);
    setItems(itemDocs.docs.map(s => ({ id: s.id, ...s.data() })));
    const group = await getDoc(doc(store, `groups/${id}`));
    if (group.exists()) { setGroupRecord(group.data()); setGroupStatus(group.data().status); setGroupIsListed(group.data().listed === true); }
  }
  async function decideJoin(uid: string, accepted: boolean) {
    if (!groupId || !user) return;
    const batch = writeBatch(store);
    batch.update(doc(store, `groups/${groupId}/joinRequests/${uid}`), { status: accepted ? 'accepted' : 'declined', decidedAt: serverTimestamp() });
    if (accepted) batch.set(doc(store, `groups/${groupId}/members/${uid}`), { role: 'member', status: 'active', joinedAt: serverTimestamp() });
    await batch.commit(); await openGroup(groupId); setMessage(accepted ? 'Mitglied wurde aufgenommen.' : 'Anfrage wurde abgelehnt.');
  }
  async function addTask() {
    if (!groupId || !user || !taskTitle.trim()) return;
    const id = `item-${Date.now().toString(36)}`;
    await setDoc(doc(store, `groups/${groupId}/workItems/${id}`), { kind: workKind, title: taskTitle.trim().slice(0, 120), body: taskBody.trim().slice(0, 3000), status: 'open', createdBy: user.uid, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    setTaskTitle(''); setTaskBody(''); await openGroup(groupId);
  }
  async function changeGroupStatus() {
    if (!groupId) return;
    const nextSeeking = groupStatus === 'seeking-coordinator' ? 'coordinator' : groupStatus === 'seeking-members' ? 'members' : groupRecord?.seeking || 'none';
    const batch = writeBatch(store);
    batch.update(doc(store, `groups/${groupId}`), { status: groupStatus, seeking: nextSeeking, updatedAt: serverTimestamp() });
    if (groupIsListed) batch.update(doc(store, `groupDirectory/${groupId}`), { status: groupStatus, seeking: nextSeeking, updatedAt: serverTimestamp() });
    await batch.commit();
    if (groupRecord) setGroupRecord({ ...groupRecord, status: groupStatus, seeking: nextSeeking });
    await refreshDirectory(); setMessage('Gruppenstatus lokal aktualisiert.');
  }
  async function toggleGroupListing() {
    if (!user || !groupId || !groupRecord) return;
    const batch = writeBatch(store);
    if (!groupIsListed) {
      const publicText = `${groupRecord.title} ${groupRecord.description.slice(0, 280)}`;
      if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\+?[0-9][0-9 ()/-]{6,}[0-9]/i.test(publicText)) throw new Error('Vor einer Veröffentlichung bitte E-Mail-Adresse oder Telefonnummer aus der Gruppenbeschreibung entfernen.');
      batch.update(doc(store, `groups/${groupId}`), { listed: true, updatedAt: serverTimestamp() });
      batch.set(doc(store, `groupDirectory/${groupId}`), { projectId: groupRecord.projectId, title: groupRecord.title, description: groupRecord.description.slice(0, 280), status: groupRecord.status, seeking: groupRecord.seeking, listed: true, updatedAt: serverTimestamp() });
      batch.set(doc(store, `consentEvents/${user.uid}-${groupId}-listing-${Date.now()}`), { uid: user.uid, purpose: 'public-group-listing', noticeVersion: NOTICE, decision: 'granted', occurredAt: serverTimestamp() });
    } else {
      batch.update(doc(store, `groups/${groupId}`), { listed: false, updatedAt: serverTimestamp() });
      batch.delete(doc(store, `groupDirectory/${groupId}`));
      batch.set(doc(store, `consentEvents/${user.uid}-${groupId}-listing-${Date.now()}`), { uid: user.uid, purpose: 'public-group-listing', noticeVersion: NOTICE, decision: 'withdrawn', occurredAt: serverTimestamp() });
    }
    await batch.commit(); setGroupIsListed(!groupIsListed); setGroupRecord({ ...groupRecord, listed: !groupIsListed }); await refreshDirectory();
  }
  async function changeMemberRole(uid: string, role: 'deputy' | 'member') {
    if (!groupId) return;
    await updateDoc(doc(store, `groups/${groupId}/members/${uid}`), { role });
    await openGroup(groupId);
  }
  async function handoffCoordinator(uid: string) {
    if (!user || !groupId || uid === user.uid) return;
    const target = members.find(member => member.id === uid);
    if (!target) throw new Error('Zielmitglied wurde in der Gruppe nicht gefunden.');
    if (target.role !== 'coordinator') await updateDoc(doc(store, `groups/${groupId}/members/${uid}`), { role: 'coordinator' });
    const batch = writeBatch(store);
    batch.update(doc(store, `groups/${groupId}`), { coordinatorUid: uid, updatedAt: serverTimestamp() });
    batch.update(doc(store, `groups/${groupId}/members/${user.uid}`), { role: 'deputy' });
    await batch.commit(); await openGroup(groupId); setMessage('Koordination wurde im Emulator an das gewählte Mitglied übergeben.');
  }
  async function leaveGroup() {
    if (!user || !groupId) return;
    await deleteDoc(doc(store, `groups/${groupId}/members/${user.uid}`));
    setGroupId(''); setMembers([]); setItems([]); setRequests([]); setMessage('Mitgliedschaft wurde im lokalen Emulator beendet. Eine Koordination muss vorher übertragen werden.');
  }
  async function withdrawInterest() {
    if (!user) return;
    const batch = writeBatch(store);
    batch.update(doc(store, `users/${user.uid}/interests/${projectId}`), { status: 'withdrawn', updatedAt: serverTimestamp() });
    batch.set(doc(store, `consentEvents/${user.uid}-${projectId}-${Date.now()}`), { uid: user.uid, purpose: 'participation', noticeVersion: NOTICE, decision: 'withdrawn', occurredAt: serverTimestamp() });
    await batch.commit();
    setMessage('Interesse wurde zurückgezogen und ein lokales Widerrufsereignis angelegt.');
  }
  async function exportOwnData() {
    if (!user) return;
    const [interestDocs, consentDocs] = await Promise.all([
      getDocs(collection(store, `users/${user.uid}/interests`)),
      getDocs(query(collection(store, 'consentEvents'), where('uid', '==', user.uid), limit(100)))
    ]);
    const payload = { scope: 'Nur eigene lokale Demo-Daten; keine vollständige Löschbestätigung', interests: interestDocs.docs.map(s => ({ id: s.id, ...s.data() })), consentEvents: consentDocs.docs.map(s => ({ id: s.id, ...s.data() })) };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'bergdorf-gemeinsam-demo-export.json'; link.click(); URL.revokeObjectURL(url);
    setMessage('Export eigener Interessen und Einwilligungsereignisse wurde heruntergeladen. Gruppenmitgliedschaften sind in diesem lokalen Export noch nicht enthalten.');
  }
  async function reportGroup() {
    if (!user || !groupId) return;
    await setDoc(doc(store, `abuseReports/${user.uid}-${groupId}-${Date.now()}`), { reporterUid: user.uid, groupId, reason: reportReason, createdAt: serverTimestamp() });
    setMessage('Strukturierte Testmeldung ist lokal angelegt. Im Produktivbetrieb wären Empfänger und Reaktionsweg vor Aktivierung festzulegen.');
  }
  async function run(action: () => Promise<void>) { setBusy(true); setMessage(''); try { await action(); } catch (error) { setMessage(error instanceof Error ? error.message : 'Die lokale Aktion ist fehlgeschlagen.'); } finally { setBusy(false); } }

  return <main>
    <header><p className="eyebrow">BERGEDORF GEMEINSAM · ENTWICKLUNGSVORSCHAU</p><h1>Lokale Gruppenwerkstatt</h1><p>Nur synthetische Daten in Auth- und Firestore-Emulatoren. Diese getrennte Vorschau ist nicht in der öffentlichen Website verlinkt oder aktiviert.</p></header>
    <aside role="note"><strong>Keine produktive Verbindung:</strong> Demo-Projekt {PROJECT}; Emulatoren 127.0.0.1:9099 und :8080. Keine echten Kontakt-, Gesundheits- oder Krisendaten eingeben. Die Demo-Einwilligung ist kein rechtlicher Nachweis.</aside>
    <section><h2>1. Synthetisches Testkonto</h2>{user ? <p>Angemeldet: {user.email} · E-Mail bestätigt im Emulator <button onClick={() => run(async () => { await signOut(auth); setMessage('Abgemeldet.'); })}>Abmelden</button></p> : <><label>E-Mail im Emulator<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="demo@example.test" /></label><label>Passwort<input type="password" value={password} onChange={e => setPassword(e.target.value)} /></label><button disabled={busy} onClick={() => run(() => authAction(true))}>Synthetisches Konto anlegen</button><button disabled={busy} className="secondary" onClick={() => run(() => authAction(false))}>Konto anmelden</button></>}</section>
    <section><h2>2. Projekt und Beteiligung</h2><label>Projektidee<select value={projectId} onChange={e => setProjectId(e.target.value)}>{lonelinessProjects.map(project => <option value={project.id} key={project.id}>{project.title}</option>)}</select></label><fieldset><legend>Mehrfachauswahl</legend>{TYPES.map(([value, label]) => <label className="check" key={value}><input type="checkbox" checked={selected.includes(value)} onChange={e => setSelected(old => e.target.checked ? [...old, value] : old.filter(item => item !== value))} />{label}</label>)}</fieldset><button disabled={busy || !user} onClick={() => run(saveInterest)}>Interessen-Auswahl lokal speichern</button><button className="secondary" disabled={busy || !user} onClick={() => run(withdrawInterest)}>Interesse widerrufen</button><button className="secondary" disabled={busy || !user} onClick={() => run(exportOwnData)}>Eigene Daten exportieren</button><p>Diese Auswahl ist nur für das angemeldete Konto lesbar; es gibt keine öffentliche Personenliste.</p></section>
    <section><h2>3. Arbeitsgruppen finden</h2><p>Öffentlich im Demo-Verzeichnis erscheinen nur Gruppen, die ihre Veröffentlichung ausdrücklich gewählt haben. Keine Namen, E-Mail-Adressen oder Mitgliederlisten.</p><button className="secondary" onClick={() => run(refreshDirectory)}>Gruppen neu laden</button>{groups.length ? <><ul>{groups.map(group => <li key={group.id}><strong>{group.title}</strong> · {group.status} · {group.seeking === 'members' ? 'sucht Mitwirkende' : group.seeking === 'coordinator' ? 'sucht Koordination' : 'sucht derzeit niemanden'}<p>{group.description}</p>{group.id !== groupId && <button onClick={() => run(() => askToJoin(group.id))}>Beitritt anfragen</button>}<button className="secondary" onClick={() => run(() => openGroup(group.id))}>Arbeitsbereich öffnen</button></li>)}</ul>{moreGroups && <button className="secondary" onClick={() => run(loadMoreGroups)}>Weitere Gruppen laden</button>}</> : <p>Für dieses Projekt sind im Emulator noch keine freiwillig veröffentlichten Gruppen vorhanden.</p>}</section>
    <section><h2>4. Selbstorganisierte Gruppe gründen</h2><label>Gruppentitel<input value={title} onChange={e => setTitle(e.target.value)} maxLength={80} placeholder="Zum Beispiel: Konzeptgruppe …" /></label><label>Kurzbeschreibung für den geschützten Bereich<input value={description} onChange={e => setDescription(e.target.value)} maxLength={500} placeholder="Keine Kontaktdaten oder sensiblen Angaben" /></label><label>Wen sucht die Gruppe?<select value={seeking} onChange={e => setSeeking(e.target.value)}><option value="members">Mitwirkende</option><option value="coordinator">Koordination</option><option value="none">Niemanden</option></select></label><label className="check"><input type="checkbox" checked={publishGroup} onChange={e => setPublishGroup(e.target.checked)} />Gruppentitel und gekürzte Kurzbeschreibung freiwillig im öffentlichen Gruppenverzeichnis anzeigen. Keine Personen- oder Kontaktdaten.</label><button disabled={busy || !user} onClick={() => run(createGroup)}>Gruppe lokal gründen</button><p>Sie übernehmen im Test die Koordination. Echte Projektbetreuung durch den Betreiber ist nicht vorgesehen.</p></section>
    {groupId && <section><h2>5. Geschützter Arbeitsbereich <small>{groupId}</small></h2><button className="secondary" onClick={() => run(() => openGroup(groupId))}>Ansicht aktualisieren</button>{groupRecord?.coordinatorUid === user?.uid && <><h3>Gruppenstatus</h3><label>Status<select value={groupStatus} onChange={e => setGroupStatus(e.target.value)}>{GROUP_STATUSES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label><button onClick={() => run(changeGroupStatus)}>Status speichern</button><h3>Veröffentlichung im Gruppenverzeichnis</h3><button className="secondary" onClick={() => run(toggleGroupListing)}>{groupIsListed ? 'Eintrag aus Verzeichnis entfernen' : 'Eintrag freiwillig veröffentlichen'}</button></>}{requests.length > 0 && <><h3>Beitrittsanfragen</h3><ul>{requests.map(item => <li key={item.id}>Synthetischer Nutzer {item.uid.slice(0, 8)} · {item.status} <button onClick={() => run(() => decideJoin(item.uid, true))}>Annehmen</button><button className="secondary" onClick={() => run(() => decideJoin(item.uid, false))}>Ablehnen</button></li>)}</ul></>}{groupRecord?.coordinatorUid === user?.uid && <><h3>Mitglieder und Rollen</h3><ul>{members.map(member => <li key={member.id}>Synthetischer Nutzer {member.id.slice(0, 8)} · {member.role} {member.id !== user?.uid && <><button onClick={() => run(() => handoffCoordinator(member.id))}>Koordination übergeben</button>{member.role === 'member' && <button className="secondary" onClick={() => run(() => changeMemberRole(member.id, 'deputy'))}>Stellvertretung setzen</button>}{member.role === 'deputy' && <button className="secondary" onClick={() => run(() => changeMemberRole(member.id, 'member'))}>Stellvertretung beenden</button>}</>}</li>)}</ul></>}<button className="secondary" onClick={() => run(leaveGroup)}>Eigene Mitgliedschaft beenden</button><h3>Projektkonzept, Aufgaben und Fortschritt</h3><label>Arbeitsbereich<select value={workKind} onChange={e => setWorkKind(e.target.value)}>{WORK_KINDS.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label><label>Titel<input value={taskTitle} onChange={e => setTaskTitle(e.target.value)} maxLength={120} /></label><label>Gemeinsame Notizen / Maßnahmen / Aufgabenbeschreibung<textarea value={taskBody} onChange={e => setTaskBody(e.target.value)} maxLength={3000} rows={4} placeholder="Keine personenbezogenen Gesundheits- oder Krisendaten eingeben." /></label><button onClick={() => run(addTask)}>Eintrag speichern</button><ul>{items.map(item => <li key={item.id}>{item.title} · {item.status} · {item.kind}</li>)}</ul><label>Meldungsgrund<select value={reportReason} onChange={e => setReportReason(e.target.value)}><option value="spam">Spam</option><option value="harassment">Belästigung</option><option value="privacy">Datenschutz</option><option value="other">Sonstiger Grund</option></select></label><button className="secondary" onClick={() => run(reportGroup)}>Strukturierte Testmeldung speichern</button><p>Keine Direktnachrichten oder Datei-Uploads. Der Export und die Meldung sind lokale Vorbereitung, keine vollständigen Produktivverfahren.</p></section>}
    {message && <p className="message" role="status">{message}</p>}
  </main>;
}

createRoot(document.getElementById('root')!).render(<Preview />);
