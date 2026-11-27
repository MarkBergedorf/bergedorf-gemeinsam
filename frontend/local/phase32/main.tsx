import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, createUserWithEmailAndPassword, onAuthStateChanged, reload, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { collection, collectionGroup, connectFirestoreEmulator, deleteDoc, doc, getDoc, getDocs, limit, query, serverTimestamp, setDoc, where, writeBatch, getFirestore, orderBy, startAfter, updateDoc, Timestamp, type QueryDocumentSnapshot } from 'firebase/firestore';
import { lonelinessProjects } from '../../lib/loneliness-projects.mjs';
import './style.css';

const PROJECT = 'demo-bergedorf-gemeinsam';
const NOTICE = 'local-preview-v1';
const GROUP_STATUSES = [['seeking-members', 'Interessierte Mitwirkende gesucht'], ['seeking-coordinator', 'Koordination gesucht'], ['forming', 'Arbeitsgruppe in Gründung'], ['established', 'Arbeitsgruppe gegründet'], ['concept', 'Projektkonzept in Bearbeitung'], ['partners', 'Kooperationspartner gesucht'], ['funding', 'Finanzierung in Vorbereitung'], ['planned', 'Umsetzung geplant'], ['started', 'Umsetzung begonnen'], ['completed', 'Projekt abgeschlossen'], ['paused', 'Projekt ruht'], ['closed', 'Arbeitsgruppe geschlossen']];
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
  const [memberCursor, setMemberCursor] = useState<QueryDocumentSnapshot | null>(null); const [requestCursor, setRequestCursor] = useState<QueryDocumentSnapshot | null>(null); const [itemCursor, setItemCursor] = useState<QueryDocumentSnapshot | null>(null);
  const [moreMembers, setMoreMembers] = useState(false); const [moreRequests, setMoreRequests] = useState(false); const [moreItems, setMoreItems] = useState(false);
  const [ownInterests, setOwnInterests] = useState<any[]>([]); const [ownMemberships, setOwnMemberships] = useState<any[]>([]); const [ownRequests, setOwnRequests] = useState<any[]>([]);
  const [ownMembershipCursor, setOwnMembershipCursor] = useState<QueryDocumentSnapshot | null>(null); const [ownRequestCursor, setOwnRequestCursor] = useState<QueryDocumentSnapshot | null>(null);
  const [moreOwnMemberships, setMoreOwnMemberships] = useState(false); const [moreOwnRequests, setMoreOwnRequests] = useState(false);
  const [title, setTitle] = useState(''); const [description, setDescription] = useState('');
  const [publicDescription, setPublicDescription] = useState('');
  const [seeking, setSeeking] = useState('members');
  const [taskTitle, setTaskTitle] = useState(''); const [taskBody, setTaskBody] = useState(''); const [workKind, setWorkKind] = useState('task'); const [groupStatus, setGroupStatus] = useState('forming');
  const [taskStatus, setTaskStatus] = useState('open'); const [assigneeUid, setAssigneeUid] = useState(''); const [dueDate, setDueDate] = useState(''); const [editingItem, setEditingItem] = useState('');
  const [reportReason, setReportReason] = useState('spam'); const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => onAuthStateChanged(auth, account => {
    setUser(account); setGroupId(''); setMembers([]); setItems([]); setRequests([]);
    if (account) loadPersonalOverview(account.uid).catch(() => { setOwnInterests([]); setOwnMemberships([]); setOwnRequests([]); });
    else { setOwnInterests([]); setOwnMemberships([]); setOwnRequests([]); }
  }), []);

  async function loadPersonalOverview(uid: string) {
    const [interests, memberships, requests] = await Promise.all([
      getDocs(query(collection(store, `users/${uid}/interests`), limit(18))),
      getDocs(query(collection(store, `users/${uid}/groupMemberships`), limit(25))),
      getDocs(query(collectionGroup(store, 'joinRequests'), where('uid', '==', uid), limit(25)))
    ]);
    setOwnInterests(interests.docs.map(s => ({ id: s.id, ...s.data() })));
    setOwnMemberships(memberships.docs.map(s => ({ id: s.id, ...s.data() })));
    setOwnRequests(requests.docs.map(s => ({ id: s.id, groupId: s.ref.parent.parent?.id, ...s.data() })));
    setOwnMembershipCursor(memberships.docs.at(-1) || null); setMoreOwnMemberships(memberships.size === 25);
    setOwnRequestCursor(requests.docs.at(-1) || null); setMoreOwnRequests(requests.size === 25);
  }
  async function loadMoreOwnMemberships(uid: string) {
    if (!ownMembershipCursor) return;
    const page = await getDocs(query(collection(store, `users/${uid}/groupMemberships`), startAfter(ownMembershipCursor), limit(25)));
    setOwnMemberships(current => [...current, ...page.docs.map(s => ({ id: s.id, ...s.data() }))]); setOwnMembershipCursor(page.docs.at(-1) || ownMembershipCursor); setMoreOwnMemberships(page.size === 25);
  }
  async function loadMoreOwnRequests(uid: string) {
    if (!ownRequestCursor) return;
    const page = await getDocs(query(collectionGroup(store, 'joinRequests'), where('uid', '==', uid), startAfter(ownRequestCursor), limit(25)));
    setOwnRequests(current => [...current, ...page.docs.map(s => ({ id: s.id, groupId: s.ref.parent.parent?.id, ...s.data() }))]); setOwnRequestCursor(page.docs.at(-1) || ownRequestCursor); setMoreOwnRequests(page.size === 25);
  }

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
    const interestRef = doc(store, `users/${user.uid}/interests/${projectId}`);
    const current = await getDoc(interestRef);
    const eventRef = doc(collection(store, 'consentEvents'));
    const batch = writeBatch(store);
    batch.set(eventRef, { uid: user.uid, purpose: 'participation', subjectId: projectId, noticeVersion: NOTICE, decision: 'granted', occurredAt: serverTimestamp() });
    batch.set(interestRef, { projectId, types: selected, status: 'active', noticeVersion: NOTICE, consentEventId: eventRef.id, createdAt: current.exists() ? current.data().createdAt : serverTimestamp(), updatedAt: serverTimestamp() });
    await batch.commit();
    await loadPersonalOverview(user.uid);
    setMessage('Interessen-Auswahl und Demo-Einwilligungsereignis wurden lokal gespeichert.');
  }
  async function createGroup() {
    if (!user?.emailVerified || !title.trim()) throw new Error('Bitte anmelden und einen Gruppentitel eingeben.');
    if (publishGroup && /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\+?[0-9][0-9 ()/-]{6,}[0-9]/i.test(`${title} ${publicDescription}`)) throw new Error('Für das öffentliche Verzeichnis bitte den öffentlichen Kurztext ohne E-Mail-Adresse oder Telefonnummer formulieren.');
    const id = `grp-${crypto.randomUUID()}`;
    const batch = writeBatch(store);
    batch.set(doc(store, `groups/${id}`), { projectId, title: title.trim().slice(0, 80), description: description.trim().slice(0, 500), publicDescription: publicDescription.trim().slice(0, 280), status: 'forming', createdBy: user.uid, coordinatorUid: user.uid, listed: false, seeking, createdAt: serverTimestamp(), updatedAt: serverTimestamp(), schemaVersion: 1 });
    batch.set(doc(store, `groups/${id}/members/${user.uid}`), { role: 'coordinator', status: 'active', joinedAt: serverTimestamp() });
    batch.set(doc(store, `users/${user.uid}/groupMemberships/${id}`), { groupId: id, role: 'coordinator', status: 'active', joinedAt: serverTimestamp() });
    await batch.commit();
    if (publishGroup) {
      const publishBatch = writeBatch(store);
      publishBatch.update(doc(store, `groups/${id}`), { listed: true, updatedAt: serverTimestamp() });
      publishBatch.set(doc(store, `groupDirectory/${id}`), { projectId, title: title.trim().slice(0, 80), description: publicDescription.trim().slice(0, 280), status: 'forming', seeking, listed: true, updatedAt: serverTimestamp() });
      publishBatch.set(doc(collection(store, 'consentEvents')), { uid: user.uid, purpose: 'public-group-listing', subjectId: id, noticeVersion: NOTICE, decision: 'granted', occurredAt: serverTimestamp() });
      await publishBatch.commit();
    }
    await loadPersonalOverview(user.uid);
    localStorage.setItem('phase32-local-group', id); localStorage.setItem('phase32-local-group-listed', String(publishGroup)); setGroupId(id); setTitle(''); setDescription(''); setPublicDescription(''); setPublishGroup(false);
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
    setMemberCursor(memberDocs.docs.at(-1) || null); setMoreMembers(memberDocs.size === 25);
    setRequestCursor(requestDocs?.docs.at(-1) || null); setMoreRequests(requestDocs?.size === 25);
    setItemCursor(itemDocs.docs.at(-1) || null); setMoreItems(itemDocs.size === 25);
    const group = await getDoc(doc(store, `groups/${id}`));
    if (group.exists()) { setGroupRecord(group.data()); setGroupStatus(group.data().status); setGroupIsListed(group.data().listed === true); }
  }
  async function loadMoreWorkItems() {
    if (!groupId || !itemCursor) return;
    const page = await getDocs(query(collection(store, `groups/${groupId}/workItems`), orderBy('updatedAt', 'desc'), startAfter(itemCursor), limit(25)));
    setItems(current => [...current, ...page.docs.map(s => ({ id: s.id, ...s.data() }))]); setItemCursor(page.docs.at(-1) || itemCursor); setMoreItems(page.size === 25);
  }
  async function loadMoreMembers() {
    if (!groupId || !memberCursor) return;
    const page = await getDocs(query(collection(store, `groups/${groupId}/members`), startAfter(memberCursor), limit(25)));
    setMembers(current => [...current, ...page.docs.map(s => ({ id: s.id, ...s.data() }))]); setMemberCursor(page.docs.at(-1) || memberCursor); setMoreMembers(page.size === 25);
  }
  async function loadMoreRequests() {
    if (!groupId || !requestCursor) return;
    const page = await getDocs(query(collection(store, `groups/${groupId}/joinRequests`), where('status', '==', 'pending'), startAfter(requestCursor), limit(25)));
    setRequests(current => [...current, ...page.docs.map(s => ({ id: s.id, ...s.data() }))]); setRequestCursor(page.docs.at(-1) || requestCursor); setMoreRequests(page.size === 25);
  }
  async function decideJoin(uid: string, accepted: boolean) {
    if (!groupId || !user) return;
    const batch = writeBatch(store);
    batch.update(doc(store, `groups/${groupId}/joinRequests/${uid}`), { status: accepted ? 'accepted' : 'declined', decidedAt: serverTimestamp() });
    if (accepted) {
      batch.set(doc(store, `groups/${groupId}/members/${uid}`), { role: 'member', status: 'active', joinedAt: serverTimestamp() });
      batch.set(doc(store, `users/${uid}/groupMemberships/${groupId}`), { groupId, role: 'member', status: 'active', joinedAt: serverTimestamp() });
    }
    await batch.commit(); await openGroup(groupId); setMessage(accepted ? 'Mitglied wurde aufgenommen.' : 'Anfrage wurde abgelehnt.');
    if (user) await loadPersonalOverview(user.uid);
  }
  async function addTask() {
    if (!groupId || !user || !taskTitle.trim()) return;
    const ref = editingItem ? doc(store, `groups/${groupId}/workItems/${editingItem}`) : doc(collection(store, `groups/${groupId}/workItems`));
    const dueAt = dueDate ? Timestamp.fromDate(new Date(`${dueDate}T23:59:59`)) : null;
    if (editingItem) await updateDoc(ref, { kind: workKind, title: taskTitle.trim().slice(0, 120), body: taskBody.trim().slice(0, 3000), status: taskStatus, assigneeUid: assigneeUid || null, dueAt, updatedAt: serverTimestamp() });
    else await setDoc(ref, { kind: workKind, title: taskTitle.trim().slice(0, 120), body: taskBody.trim().slice(0, 3000), status: taskStatus, assigneeUid: assigneeUid || null, dueAt, createdBy: user.uid, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    setTaskTitle(''); setTaskBody(''); setTaskStatus('open'); setAssigneeUid(''); setDueDate(''); setEditingItem(''); await openGroup(groupId);
  }
  function editItem(item: any) {
    setEditingItem(item.id); setTaskTitle(item.title); setTaskBody(item.body || ''); setWorkKind(item.kind); setTaskStatus(item.status);
    setAssigneeUid(item.assigneeUid || ''); setDueDate(item.dueAt?.toDate?.().toISOString().slice(0, 10) || '');
  }
  async function changeGroupStatus() {
    if (!groupId) return;
    if (groupStatus === 'closed') { await closeGroup(); return; }
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
      batch.set(doc(store, `groupDirectory/${groupId}`), { projectId: groupRecord.projectId, title: groupRecord.title, description: groupRecord.publicDescription, status: groupRecord.status, seeking: groupRecord.seeking, listed: true, updatedAt: serverTimestamp() });
      batch.set(doc(collection(store, 'consentEvents')), { uid: user.uid, purpose: 'public-group-listing', subjectId: groupId, noticeVersion: NOTICE, decision: 'granted', occurredAt: serverTimestamp() });
    } else {
      batch.update(doc(store, `groups/${groupId}`), { listed: false, updatedAt: serverTimestamp() });
      batch.delete(doc(store, `groupDirectory/${groupId}`));
      batch.set(doc(collection(store, 'consentEvents')), { uid: user.uid, purpose: 'public-group-listing', subjectId: groupId, noticeVersion: NOTICE, decision: 'withdrawn', occurredAt: serverTimestamp() });
    }
    await batch.commit(); setGroupIsListed(!groupIsListed); setGroupRecord({ ...groupRecord, listed: !groupIsListed }); await refreshDirectory();
  }
  async function changeMemberRole(uid: string, role: 'deputy' | 'member') {
    if (!groupId) return;
    const batch = writeBatch(store);
    batch.update(doc(store, `groups/${groupId}/members/${uid}`), { role });
    batch.update(doc(store, `users/${uid}/groupMemberships/${groupId}`), { role });
    await batch.commit();
    await openGroup(groupId);
  }
  async function handoffCoordinator(uid: string) {
    if (!user || !groupId || uid === user.uid) return;
    const target = members.find(member => member.id === uid);
    if (!target) throw new Error('Zielmitglied wurde in der Gruppe nicht gefunden.');
    const batch = writeBatch(store);
    if (target.role !== 'coordinator') {
      batch.update(doc(store, `groups/${groupId}/members/${uid}`), { role: 'coordinator' });
      batch.update(doc(store, `users/${uid}/groupMemberships/${groupId}`), { role: 'coordinator' });
    }
    batch.update(doc(store, `groups/${groupId}`), { coordinatorUid: uid, updatedAt: serverTimestamp() });
    batch.update(doc(store, `groups/${groupId}/members/${user.uid}`), { role: 'deputy' });
    batch.update(doc(store, `users/${user.uid}/groupMemberships/${groupId}`), { role: 'deputy' });
    await batch.commit(); await openGroup(groupId); await loadPersonalOverview(user.uid); setMessage('Koordination wurde im Emulator an das gewählte Mitglied übergeben.');
  }
  async function leaveGroup() {
    if (!user || !groupId) return;
    const batch = writeBatch(store);
    batch.delete(doc(store, `groups/${groupId}/members/${user.uid}`));
    batch.delete(doc(store, `users/${user.uid}/groupMemberships/${groupId}`));
    await batch.commit();
    setGroupId(''); setMembers([]); setItems([]); setRequests([]); await loadPersonalOverview(user.uid); setMessage('Mitgliedschaft wurde im lokalen Emulator beendet. Eine Koordination muss vorher übertragen werden.');
  }
  async function closeGroup() {
    if (!user || !groupId || groupRecord?.coordinatorUid !== user.uid) return;
    const batch = writeBatch(store);
    batch.update(doc(store, `groups/${groupId}`), { status: 'closed', listed: false, seeking: 'none', updatedAt: serverTimestamp() });
    if (groupIsListed) batch.delete(doc(store, `groupDirectory/${groupId}`));
    batch.update(doc(store, `groups/${groupId}/members/${user.uid}`), { role: 'member', status: 'left' });
    batch.delete(doc(store, `users/${user.uid}/groupMemberships/${groupId}`));
    await batch.commit();
    setGroupId(''); setMembers([]); setItems([]); setRequests([]); await loadPersonalOverview(user.uid); await refreshDirectory();
    setMessage('Arbeitsgruppe wurde geschlossen, aus dem Verzeichnis entfernt und die eigene Mitgliedschaft beendet.');
  }
  async function withdrawInterest() {
    if (!user) return;
    const eventRef = doc(collection(store, 'consentEvents'));
    const batch = writeBatch(store);
    batch.update(doc(store, `users/${user.uid}/interests/${projectId}`), { status: 'withdrawn', consentEventId: eventRef.id, updatedAt: serverTimestamp() });
    batch.set(eventRef, { uid: user.uid, purpose: 'participation', subjectId: projectId, noticeVersion: NOTICE, decision: 'withdrawn', occurredAt: serverTimestamp() });
    await batch.commit();
    await loadPersonalOverview(user.uid);
    setMessage('Interesse wurde zurückgezogen und ein lokales Widerrufsereignis angelegt.');
  }
  async function exportOwnData() {
    if (!user) return;
    async function pages(make: (last?: QueryDocumentSnapshot) => any) {
      const all: any[] = []; let last: QueryDocumentSnapshot | undefined;
      do { const page = await getDocs(make(last)); all.push(...page.docs); last = page.docs.length === 25 ? page.docs.at(-1) : undefined; } while (last);
      return all;
    }
    const [interestDocs, membershipDocs, requestDocs, consentDocs, reportDocs] = await Promise.all([
      getDocs(query(collection(store, `users/${user.uid}/interests`), limit(18))),
      pages((last) => query(collection(store, `users/${user.uid}/groupMemberships`), ...(last ? [startAfter(last)] : []), limit(25))),
      pages((last) => query(collectionGroup(store, 'joinRequests'), where('uid', '==', user.uid), ...(last ? [startAfter(last)] : []), limit(25))),
      pages((last) => query(collection(store, 'consentEvents'), where('uid', '==', user.uid), ...(last ? [startAfter(last)] : []), limit(25))),
      pages((last) => query(collection(store, 'abuseReports'), where('reporterUid', '==', user.uid), ...(last ? [startAfter(last)] : []), limit(25)))
    ]);
    const memberships = membershipDocs.map(s => ({ id: s.id, ...s.data() }));
    const items = await Promise.all(memberships.map(async membership => {
      const path = `groups/${membership.id}/workItems`;
      const [authored, assigned] = await Promise.all([
        pages((last) => query(collection(store, path), where('createdBy', '==', user.uid), ...(last ? [startAfter(last)] : []), limit(25))),
        pages((last) => query(collection(store, path), where('assigneeUid', '==', user.uid), ...(last ? [startAfter(last)] : []), limit(25)))
      ]);
      const unique = new Map([...authored, ...assigned].map(item => [item.id, item]));
      return [...unique.values()].map(item => ({ id: item.id, groupId: membership.id, ...item.data() }));
    }));
    const payload = {
      scope: 'Eigene personenbezogene Daten aus der lokalen Vorschau; gemeinschaftliche Inhalte anderer Personen sind ausgeschlossen.',
      exportedAt: new Date().toISOString(), account: { uid: user.uid, email: user.email },
      interests: interestDocs.docs.map(s => ({ id: s.id, ...s.data() })), memberships,
      joinRequests: requestDocs.map(s => ({ id: s.id, groupId: s.ref.parent.parent?.id, ...s.data() })),
      ownOrAssignedWorkItems: items.flat(),
      consentEvents: consentDocs.map(s => ({ id: s.id, ...s.data() })),
      abuseReports: reportDocs.map(s => ({ id: s.id, ...s.data() }))
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'bergdorf-gemeinsam-demo-export.json'; link.click(); URL.revokeObjectURL(url);
    setMessage('Der paginierte Export eigener Interessen, Mitgliedschaften, Anfragen, eigener oder zugewiesener Arbeitsinhalte, Einwilligungsereignisse und eigener Meldungen wurde heruntergeladen.');
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
    <section><h2>2. Projekt und Beteiligung</h2><label>Projektidee<select value={projectId} onChange={e => setProjectId(e.target.value)}>{lonelinessProjects.map(project => <option value={project.id} key={project.id}>{project.title}</option>)}</select></label><fieldset><legend>Mehrfachauswahl</legend>{TYPES.map(([value, label]) => <label className="check" key={value}><input type="checkbox" checked={selected.includes(value)} onChange={e => setSelected(old => e.target.checked ? [...old, value] : old.filter(item => item !== value))} />{label}</label>)}</fieldset><p>„Organisationsvertretung“ ist in dieser Vorschau nur eine Interessenangabe. Sie bestätigt keine Organisation und verleiht keine Sonderrechte.</p><button disabled={busy || !user} onClick={() => run(saveInterest)}>Interessen-Auswahl lokal speichern</button><button className="secondary" disabled={busy || !user} onClick={() => run(withdrawInterest)}>Interesse widerrufen</button><button className="secondary" disabled={busy || !user} onClick={() => run(exportOwnData)}>Eigene Daten exportieren</button><p>Diese Auswahl ist nur für das angemeldete Konto lesbar; es gibt keine öffentliche Personenliste.</p></section>
    {user && <section><h2>Persönliche Übersicht</h2><h3>Eigene Interessen</h3>{ownInterests.length ? <ul>{ownInterests.map(item => <li key={item.id}>{lonelinessProjects.find(project => project.id === item.id)?.title || item.id} · {item.status} · {item.types.map((type: string) => TYPES.find(([key]) => key === type)?.[1] || type).join(', ')} <button className="secondary" onClick={() => { setProjectId(item.id); setSelected(item.types); }}>Bearbeiten</button>{item.status === 'withdrawn' && <button onClick={() => { setProjectId(item.id); setSelected(item.types); run(saveInterest); }}>Erneut bestätigen</button>}</li>)}</ul> : <p>Noch keine Interessenbekundungen gespeichert.</p>}<h3>Eigene Arbeitsgruppen</h3>{ownMemberships.length ? <ul>{ownMemberships.map(item => <li key={item.id}>{item.id} · {item.role} <button onClick={() => run(() => openGroup(item.id))}>Privaten Arbeitsbereich öffnen</button></li>)}</ul> : <p>Du bist noch keiner Arbeitsgruppe zugeordnet.</p>}{moreOwnMemberships && <button className="secondary" onClick={() => run(() => loadMoreOwnMemberships(user.uid))}>Weitere eigene Gruppen laden</button>}<h3>Eigene Beitrittsanfragen</h3>{ownRequests.length ? <ul>{ownRequests.map(item => <li key={item.id}>{item.groupId} · {item.status}{item.status === 'pending' && <><button onClick={() => run(async () => { await deleteDoc(doc(store, `groups/${item.groupId}/joinRequests/${user.uid}`)); await loadPersonalOverview(user.uid); })}>Anfrage zurücknehmen</button><button className="secondary" onClick={() => run(() => openGroup(item.groupId))}>Öffentliche Gruppe ansehen</button></>}</li>)}</ul> : <p>Keine offenen oder früheren Beitrittsanfragen.</p>}{moreOwnRequests && <button className="secondary" onClick={() => run(() => loadMoreOwnRequests(user.uid))}>Weitere eigene Anfragen laden</button>}<button className="secondary" onClick={() => run(() => loadPersonalOverview(user.uid))}>Übersicht aktualisieren</button></section>}
    <section><h2>3. Arbeitsgruppen finden</h2><p>Öffentlich im Demo-Verzeichnis erscheinen nur Gruppen, die ihre Veröffentlichung ausdrücklich gewählt haben. Keine Namen, E-Mail-Adressen oder Mitgliederlisten.</p><button className="secondary" onClick={() => run(refreshDirectory)}>Gruppen neu laden</button>{groups.length ? <><ul>{groups.map(group => <li key={group.id}><strong>{group.title}</strong> · {group.status} · {group.seeking === 'members' ? 'sucht Mitwirkende' : group.seeking === 'coordinator' ? 'sucht Koordination' : 'sucht derzeit niemanden'}<p>{group.description}</p>{group.id !== groupId && <button onClick={() => run(() => askToJoin(group.id))}>Beitritt anfragen</button>}<button className="secondary" onClick={() => run(() => openGroup(group.id))}>Arbeitsbereich öffnen</button></li>)}</ul>{moreGroups && <button className="secondary" onClick={() => run(loadMoreGroups)}>Weitere Gruppen laden</button>}</> : <p>Für dieses Projekt sind im Emulator noch keine freiwillig veröffentlichten Gruppen vorhanden.</p>}</section>
    <section><h2>4. Selbstorganisierte Gruppe gründen</h2><label>Gruppentitel<input value={title} onChange={e => setTitle(e.target.value)} maxLength={80} placeholder="Zum Beispiel: Konzeptgruppe …" /></label><label>Beschreibung für den geschützten Arbeitsbereich<textarea value={description} onChange={e => setDescription(e.target.value)} maxLength={500} rows={3} placeholder="Keine sensiblen Angaben oder Kontaktdaten eingeben" /></label><label>Eigener öffentlicher Kurztext (optional)<textarea value={publicDescription} onChange={e => setPublicDescription(e.target.value)} maxLength={280} rows={2} placeholder="Nur dieser Text erscheint bei freiwilliger Veröffentlichung." /></label><label>Wen sucht die Gruppe?<select value={seeking} onChange={e => setSeeking(e.target.value)}><option value="members">Mitwirkende</option><option value="coordinator">Koordination</option><option value="none">Niemanden</option></select></label><label className="check"><input type="checkbox" checked={publishGroup} onChange={e => setPublishGroup(e.target.checked)} />Gruppentitel und den öffentlichen Kurztext freiwillig im öffentlichen Gruppenverzeichnis anzeigen. Keine Personen- oder Kontaktdaten.</label><button disabled={busy || !user} onClick={() => run(createGroup)}>Gruppe lokal gründen</button><p>Sie übernehmen im Test die Koordination. Echte Projektbetreuung durch den Betreiber ist nicht vorgesehen.</p></section>
    {groupId && <section><h2>5. Geschützter Arbeitsbereich <small>{groupId}</small></h2><button className="secondary" onClick={() => run(() => openGroup(groupId))}>Ansicht aktualisieren</button><p><a href="/materialien/einsamkeit-projektwerkstatt.html" target="_blank" rel="noreferrer">Projektwerkstatt-Materialien als Arbeitsgrundlage öffnen</a></p>{groupRecord?.coordinatorUid === user?.uid && <><h3>Gruppenstatus</h3><label>Status<select value={groupStatus} onChange={e => setGroupStatus(e.target.value)}>{GROUP_STATUSES.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label><button onClick={() => run(changeGroupStatus)}>Status speichern</button><h3>Veröffentlichung im Gruppenverzeichnis</h3><button className="secondary" onClick={() => run(toggleGroupListing)}>{groupIsListed ? 'Eintrag aus Verzeichnis entfernen' : 'Eintrag freiwillig veröffentlichen'}</button><button className="secondary" onClick={() => run(closeGroup)}>Arbeitsgruppe schließen und eigene Koordination beenden</button></>}{requests.length > 0 && <><h3>Beitrittsanfragen</h3><ul>{requests.map(item => <li key={item.id}>Synthetischer Nutzer {item.uid.slice(0, 8)} · {item.status} <button onClick={() => run(() => decideJoin(item.uid, true))}>Annehmen</button><button className="secondary" onClick={() => run(() => decideJoin(item.uid, false))}>Ablehnen</button></li>)}</ul>{moreRequests && <button className="secondary" onClick={() => run(loadMoreRequests)}>Weitere Anfragen laden</button>}</>}{groupRecord?.coordinatorUid === user?.uid && <><h3>Mitglieder und Rollen</h3><ul>{members.map(member => <li key={member.id}>Synthetischer Nutzer {member.id.slice(0, 8)} · {member.role} {member.id !== user?.uid && <><button onClick={() => run(() => handoffCoordinator(member.id))}>Koordination übergeben</button>{member.role === 'member' && <button className="secondary" onClick={() => run(() => changeMemberRole(member.id, 'deputy'))}>Stellvertretung setzen</button>}{member.role === 'deputy' && <button className="secondary" onClick={() => run(() => changeMemberRole(member.id, 'member'))}>Stellvertretung beenden</button>}</>}</li>)}</ul>{moreMembers && <button className="secondary" onClick={() => run(loadMoreMembers)}>Weitere Mitglieder laden</button>}</>}{groupRecord?.coordinatorUid !== user?.uid && <button className="secondary" onClick={() => run(leaveGroup)}>Eigene Mitgliedschaft beenden</button>}<h3>Projektkonzept, Aufgaben und Fortschritt</h3><label>Arbeitsbereich<select value={workKind} onChange={e => setWorkKind(e.target.value)}>{WORK_KINDS.map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label><label>Titel<input value={taskTitle} onChange={e => setTaskTitle(e.target.value)} maxLength={120} /></label><label>Gemeinsame Notizen / Maßnahmen / Aufgabenbeschreibung<textarea value={taskBody} onChange={e => setTaskBody(e.target.value)} maxLength={3000} rows={4} placeholder="Keine personenbezogenen Gesundheits- oder Krisendaten eingeben." /></label><label>Status<select value={taskStatus} onChange={e => setTaskStatus(e.target.value)}><option value="open">Offen</option><option value="in-progress">In Bearbeitung</option><option value="done">Erledigt</option></select></label><label>Zuständiges Mitglied<select value={assigneeUid} onChange={e => setAssigneeUid(e.target.value)}><option value="">Noch nicht zugeordnet</option>{members.filter(member => member.status === 'active').map(member => <option key={member.id} value={member.id}>Synthetischer Nutzer {member.id.slice(0, 8)}</option>)}</select></label><label>Fälligkeitsdatum<input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} /></label><button onClick={() => run(addTask)}>{editingItem ? 'Änderungen speichern' : 'Eintrag speichern'}</button>{editingItem && <button className="secondary" onClick={() => { setEditingItem(''); setTaskTitle(''); setTaskBody(''); }}>Bearbeitung abbrechen</button>}<ul>{items.map(item => <li key={item.id}>{item.title} · {item.status} · {item.kind} · Zuständig: {item.assigneeUid ? members.find(member => member.id === item.assigneeUid)?.id.slice(0, 8) : 'offen'}{item.dueAt?.toDate && ` · fällig ${item.dueAt.toDate().toLocaleDateString('de-DE')}`} <button className="secondary" onClick={() => editItem(item)}>Bearbeiten</button></li>)}</ul>{moreItems && <button className="secondary" onClick={() => run(loadMoreWorkItems)}>Weitere Arbeitsinhalte laden</button>}<label>Meldungsgrund<select value={reportReason} onChange={e => setReportReason(e.target.value)}><option value="spam">Spam</option><option value="harassment">Belästigung</option><option value="privacy">Datenschutz</option><option value="other">Sonstiger Grund</option></select></label><button className="secondary" onClick={() => run(reportGroup)}>Strukturierte Testmeldung speichern</button><p>Keine Direktnachrichten oder Datei-Uploads. Die Vorschau speichert ausschließlich synthetische Emulator-Daten.</p></section>}
    {message && <p className="message" role="status">{message}</p>}
  </main>;
}

createRoot(document.getElementById('root')!).render(<Preview />);
