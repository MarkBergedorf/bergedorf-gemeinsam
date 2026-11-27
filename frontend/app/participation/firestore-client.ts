'use client';

import type { User } from 'firebase/auth';

const enabled = (import.meta as ImportMeta & { env: { VITE_PARTICIPATION_ENABLED?: string } }).env.VITE_PARTICIPATION_ENABLED === 'true';
const PAGE_SIZE = 25;
const NOTICE_VERSION = 'participation-v1';
const PROJECT_IDS = new Set([
  'projekt-einsamkeitslotsen', 'projekt-begleitung-erster-besuch', 'projekt-begegnungsstaetten-zukunft',
  'projekt-soziale-isolation-erreichen', 'projekt-sowieso-da-orte', 'projekt-hilfswegweiser',
  'projekt-mittleres-lebensalter', 'projekt-arbeitsplatz', 'projekt-plauderbaenke', 'projekt-supermaerkte',
  'projekt-nahverkehr', 'projekt-ehrenamt-teilhabe', 'projekt-soziale-hilfen-rezept',
  'projekt-kommunale-strategie', 'projekt-oeffentlichkeitsarbeit', 'projekt-finanzierung',
  'projekt-stadtteile', 'projekt-wirksamkeit'
]);
const PUBLIC_CONTACT_PATTERN = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\+?[0-9][0-9 ()/-]{6,}[0-9]/i;

export function participationClientEnabled() { return enabled; }
function assertParticipant(user: User) {
  if (!enabled) throw new Error('Die Beteiligungsfunktionen sind derzeit nicht freigeschaltet.');
  if (!user.emailVerified) throw new Error('Bitte bestätigen Sie zuerst Ihre E-Mail-Adresse.');
}
async function dbFor(user: User) {
  assertParticipant(user);
  const [{ getApp }, { getFirestore }] = await Promise.all([import('firebase/app'), import('firebase/firestore')]);
  return getFirestore(getApp('bergedorf-public-auth'));
}
function refId(groupId: string, itemId: string) { return `${groupId}_${itemId}`; }

/** UID-scoped access through the same Firebase Authentication app as the existing account. */
export async function loadMyParticipation(user: User) {
  const [db, sdk] = await Promise.all([dbFor(user), import('firebase/firestore')]);
  const uid = user.uid;
  const [interests, memberships, requests, refs, consents, reports] = await Promise.all([
    sdk.getDocs(sdk.query(sdk.collection(db, `users/${uid}/interests`), sdk.limit(PAGE_SIZE))),
    sdk.getDocs(sdk.query(sdk.collection(db, `users/${uid}/groupMemberships`), sdk.limit(PAGE_SIZE))),
    sdk.getDocs(sdk.query(sdk.collection(db, `users/${uid}/joinRequests`), sdk.orderBy('createdAt', 'desc'), sdk.limit(PAGE_SIZE))),
    sdk.getDocs(sdk.query(sdk.collection(db, `users/${uid}/workItemRefs`), sdk.orderBy('updatedAt', 'desc'), sdk.limit(PAGE_SIZE))),
    sdk.getDocs(sdk.query(sdk.collection(db, 'consentEvents'), sdk.where('uid', '==', uid), sdk.orderBy('occurredAt', 'desc'), sdk.limit(PAGE_SIZE))),
    sdk.getDocs(sdk.query(sdk.collection(db, 'abuseReports'), sdk.where('reporterUid', '==', uid), sdk.orderBy('createdAt', 'desc'), sdk.limit(PAGE_SIZE)))
  ]);
  const workItems = await Promise.all(refs.docs.map(async row => {
    const reference = row.data();
    const snapshot = await sdk.getDoc(sdk.doc(db, `groups/${reference.groupId}/workItems/${reference.itemId}`));
    return { ref: { id: row.id, ...reference }, item: snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null };
  }));
  return {
    interests: interests.docs.map(row => ({ id: row.id, ...row.data() })),
    memberships: memberships.docs.map(row => ({ id: row.id, ...row.data() })),
    joinRequests: requests.docs.map(row => ({ id: row.id, ...row.data() })),
    workItems,
    consentEvents: consents.docs.map(row => ({ id: row.id, ...row.data() })),
    abuseReports: reports.docs.map(row => ({ id: row.id, ...row.data() })),
    more: {
      interests: interests.size === PAGE_SIZE, memberships: memberships.size === PAGE_SIZE,
      joinRequests: requests.size === PAGE_SIZE, workItems: refs.size === PAGE_SIZE,
      consentEvents: consents.size === PAGE_SIZE, abuseReports: reports.size === PAGE_SIZE
    }
  };
}

export async function loadAllMyParticipationForExport(user: User) {
  const db = await dbFor(user);
  const sdk = await import('firebase/firestore');
  async function allPages(base: any, pageSize = PAGE_SIZE) {
    const rows: any[] = []; let cursor: any = null;
    for (;;) {
      const page = await sdk.getDocs(sdk.query(base, ...(cursor ? [sdk.startAfter(cursor)] : []), sdk.limit(pageSize)));
      rows.push(...page.docs.map(row => Object.assign({ id: row.id }, row.data())));
      if (page.size < pageSize) return rows;
      cursor = page.docs.at(-1);
    }
  }
  const uid = user.uid;
  const [interests, memberships, joinRequests, workRefs, consentEvents, abuseReports] = await Promise.all([
    allPages(sdk.collection(db, `users/${uid}/interests`)),
    allPages(sdk.collection(db, `users/${uid}/groupMemberships`)),
    allPages(sdk.query(sdk.collection(db, `users/${uid}/joinRequests`), sdk.orderBy('createdAt', 'desc'))),
    allPages(sdk.query(sdk.collection(db, `users/${uid}/workItemRefs`), sdk.orderBy('updatedAt', 'desc'))),
    allPages(sdk.query(sdk.collection(db, 'consentEvents'), sdk.where('uid', '==', uid), sdk.orderBy('occurredAt', 'desc'))),
    allPages(sdk.query(sdk.collection(db, 'abuseReports'), sdk.where('reporterUid', '==', uid), sdk.orderBy('createdAt', 'desc')))
  ]);
  const workItems = await Promise.all(workRefs.map(async ref => {
    const snapshot = await sdk.getDoc(sdk.doc(db, `groups/${ref.groupId}/workItems/${ref.itemId}`));
    if (!snapshot.exists()) return { reference: ref, item: null };
    const data = snapshot.data();
    // The authenticated UID can retrieve only its referenced record; unrelated
    // groups, work items and member data are not queried by this export.
    return { reference: ref, item: { id: snapshot.id, ...data } };
  }));
  return { exportedAt: new Date().toISOString(), account: { uid, email: user.email || null }, interests, memberships, joinRequests, workItems, consentEvents, abuseReports };
}

export async function saveParticipationInterest(user: User, projectId: string, types: string[]) {
  assertParticipant(user);
  if (!PROJECT_IDS.has(projectId) || !types.length || types.length > 7) throw new Error('Ungültige Projekt- oder Interessen-Auswahl.');
  const [db, sdk] = await Promise.all([dbFor(user), import('firebase/firestore')]);
  const interest = sdk.doc(db, `users/${user.uid}/interests/${projectId}`);
  const previous = await sdk.getDoc(interest);
  const event = sdk.doc(sdk.collection(db, 'consentEvents'));
  const batch = sdk.writeBatch(db);
  batch.set(event, { uid: user.uid, purpose: 'participation', subjectId: projectId, noticeVersion: NOTICE_VERSION, decision: 'granted', occurredAt: sdk.serverTimestamp() });
  batch.set(interest, { projectId, types, status: 'active', noticeVersion: NOTICE_VERSION, consentEventId: event.id, createdAt: previous.exists() ? previous.data().createdAt : sdk.serverTimestamp(), updatedAt: sdk.serverTimestamp() }, { merge: true });
  await batch.commit();
}

export async function withdrawParticipationInterest(user: User, projectId: string) {
  assertParticipant(user);
  if (!PROJECT_IDS.has(projectId)) throw new Error('Unbekanntes Projekt.');
  const [db, sdk] = await Promise.all([dbFor(user), import('firebase/firestore')]);
  const event = sdk.doc(sdk.collection(db, 'consentEvents'));
  const batch = sdk.writeBatch(db);
  batch.update(sdk.doc(db, `users/${user.uid}/interests/${projectId}`), { status: 'withdrawn', consentEventId: event.id, updatedAt: sdk.serverTimestamp() });
  batch.set(event, { uid: user.uid, purpose: 'participation', subjectId: projectId, noticeVersion: NOTICE_VERSION, decision: 'withdrawn', occurredAt: sdk.serverTimestamp() });
  await batch.commit();
}

export async function createParticipationGroup(user: User, projectId: string, values: { title: string; description: string; publicDescription: string; listed: boolean }) {
  assertParticipant(user);
  if (!PROJECT_IDS.has(projectId)) throw new Error('Unbekanntes Projekt.');
  const title = values.title.trim().slice(0, 80), description = values.description.trim().slice(0, 500), publicDescription = values.publicDescription.trim().slice(0, 280);
  if (!title) throw new Error('Bitte einen Gruppentitel angeben.');
  if (values.listed && PUBLIC_CONTACT_PATTERN.test(`${title} ${publicDescription}`)) throw new Error('Öffentliche Beschreibung bitte ohne E-Mail-Adresse oder Telefonnummer formulieren.');
  const [db, sdk] = await Promise.all([dbFor(user), import('firebase/firestore')]);
  const groupId = `grp-${crypto.randomUUID()}`;
  const batch = sdk.writeBatch(db);
  batch.set(sdk.doc(db, `groups/${groupId}`), { projectId, title, description, publicDescription, status: 'forming', createdBy: user.uid, coordinatorUid: user.uid, listed: values.listed, seeking: 'members', createdAt: sdk.serverTimestamp(), updatedAt: sdk.serverTimestamp(), schemaVersion: 1 });
  batch.set(sdk.doc(db, `groups/${groupId}/members/${user.uid}`), { role: 'coordinator', status: 'active', joinedAt: sdk.serverTimestamp() });
  batch.set(sdk.doc(db, `users/${user.uid}/groupMemberships/${groupId}`), { groupId, role: 'coordinator', status: 'active', joinedAt: sdk.serverTimestamp() });
  if (values.listed) {
    batch.set(sdk.doc(db, `groupDirectory/${groupId}`), { projectId, title, description: publicDescription, status: 'forming', seeking: 'members', listed: true, updatedAt: sdk.serverTimestamp() });
    batch.set(sdk.doc(sdk.collection(db, 'consentEvents')), { uid: user.uid, purpose: 'public-group-listing', subjectId: groupId, noticeVersion: NOTICE_VERSION, decision: 'granted', occurredAt: sdk.serverTimestamp() });
  }
  await batch.commit();
  return groupId;
}

export async function listPublicParticipationGroups(projectId: string) {
  if (!enabled || !PROJECT_IDS.has(projectId)) return [];
  const [{ getApp }, sdk] = await Promise.all([import('firebase/app'), import('firebase/firestore')]);
  const db = sdk.getFirestore(getApp('bergedorf-public-auth'));
  const page = await sdk.getDocs(sdk.query(sdk.collection(db, 'groupDirectory'), sdk.where('listed', '==', true), sdk.where('projectId', '==', projectId), sdk.orderBy('updatedAt', 'desc'), sdk.limit(PAGE_SIZE)));
  return page.docs.map(row => ({ id: row.id, ...row.data() }));
}

export async function requestToJoinGroup(user: User, groupId: string) {
  const [db, sdk] = await Promise.all([dbFor(user), import('firebase/firestore')]);
  const request = sdk.doc(db, `groups/${groupId}/joinRequests/${user.uid}`);
  if ((await sdk.getDoc(request)).exists()) throw new Error('Zu dieser Gruppe besteht bereits eine frühere Anfrage.');
  const batch = sdk.writeBatch(db);
  batch.set(request, { uid: user.uid, status: 'pending', createdAt: sdk.serverTimestamp() });
  batch.set(sdk.doc(db, `users/${user.uid}/joinRequests/${groupId}`), { groupId, status: 'pending', createdAt: sdk.serverTimestamp() });
  await batch.commit();
}

export async function loadActiveGroup(user: User, groupId: string) {
  const [db, sdk] = await Promise.all([dbFor(user), import('firebase/firestore')]);
  const membership = await sdk.getDoc(sdk.doc(db, `groups/${groupId}/members/${user.uid}`));
  if (!membership.exists() || membership.data().status !== 'active') throw new Error('Der geschützte Arbeitsbereich ist nur für aktive Mitglieder zugänglich.');
  const [group, members, workItems] = await Promise.all([
    sdk.getDoc(sdk.doc(db, `groups/${groupId}`)),
    sdk.getDocs(sdk.query(sdk.collection(db, `groups/${groupId}/members`), sdk.limit(PAGE_SIZE))),
    sdk.getDocs(sdk.query(sdk.collection(db, `groups/${groupId}/workItems`), sdk.orderBy('updatedAt', 'desc'), sdk.limit(PAGE_SIZE)))
  ]);
  if (!group.exists() || group.data().status === 'closed' || group.data().locked === true) throw new Error('Dieser Gruppenarbeitsbereich ist geschlossen oder vorübergehend gesperrt.');
  const requests = ['coordinator', 'deputy'].includes(membership.data().role)
    ? await sdk.getDocs(sdk.query(sdk.collection(db, `groups/${groupId}/joinRequests`), sdk.where('status', '==', 'pending'), sdk.orderBy('createdAt', 'desc'), sdk.limit(PAGE_SIZE)))
    : null;
  return { group: { id: group.id, ...group.data() }, membership: membership.data(), members: members.docs.map(row => ({ id: row.id, ...row.data() })), workItems: workItems.docs.map(row => ({ id: row.id, ...row.data() })), requests: requests?.docs.map(row => ({ id: row.id, ...row.data() })) || [] };
}

export async function saveGroupWorkItem(user: User, groupId: string, item: { id?: string; version?: number; kind: string; title: string; body: string; status: string; assigneeUid?: string | null; dueAt?: Date | null }) {
  const [db, sdk] = await Promise.all([dbFor(user), import('firebase/firestore')]);
  const work = item.id ? sdk.doc(db, `groups/${groupId}/workItems/${item.id}`) : sdk.doc(sdk.collection(db, `groups/${groupId}/workItems`));
  const assignee = item.assigneeUid || null;
  if (!item.id) {
    const batch = sdk.writeBatch(db); const version = 1;
    batch.set(work, { kind: item.kind, title: item.title.trim().slice(0, 120), body: item.body.trim().slice(0, 3000), status: item.status, assigneeUid: assignee, dueAt: item.dueAt || null, version, createdBy: user.uid, createdAt: sdk.serverTimestamp(), updatedAt: sdk.serverTimestamp() });
    writeItemRef(batch, db, sdk, groupId, work.id, user.uid, true, assignee === user.uid);
    if (assignee && assignee !== user.uid) writeItemRef(batch, db, sdk, groupId, work.id, assignee, false, true);
    await batch.commit(); return work.id;
  }
  await sdk.runTransaction(db, async transaction => {
    const current = await transaction.get(work);
    if (!current.exists()) throw new Error('Der Arbeitsinhalt wurde inzwischen entfernt.');
    const data = current.data(), version = Number(data.version || 0);
    if (version !== item.version) throw new Error('Bearbeitungskonflikt: Ein anderes Mitglied hat zwischenzeitlich gespeichert. Der eigene Entwurf bleibt erhalten.');
    transaction.update(work, { kind: item.kind, title: item.title.trim().slice(0, 120), body: item.body.trim().slice(0, 3000), status: item.status, assigneeUid: assignee, dueAt: item.dueAt || null, version: version + 1, updatedAt: sdk.serverTimestamp() });
    transaction.set(sdk.doc(db, `users/${data.createdBy}/workItemRefs/${refId(groupId, work.id)}`), { uid: data.createdBy, groupId, itemId: work.id, createdBy: true, assignee: assignee === data.createdBy, updatedAt: sdk.serverTimestamp() });
    if (assignee && assignee !== data.createdBy) transaction.set(sdk.doc(db, `users/${assignee}/workItemRefs/${refId(groupId, work.id)}`), { uid: assignee, groupId, itemId: work.id, createdBy: false, assignee: true, updatedAt: sdk.serverTimestamp() });
    if (data.assigneeUid && data.assigneeUid !== data.createdBy && data.assigneeUid !== assignee) transaction.delete(sdk.doc(db, `users/${data.assigneeUid}/workItemRefs/${refId(groupId, work.id)}`));
  });
  return work.id;
}

function writeItemRef(batch: any, db: any, sdk: any, groupId: string, itemId: string, uid: string, createdBy: boolean, assignee: boolean) {
  batch.set(sdk.doc(db, `users/${uid}/workItemRefs/${refId(groupId, itemId)}`), { uid, groupId, itemId, createdBy, assignee, updatedAt: sdk.serverTimestamp() });
}

export async function requestParticipationAccountDeletion(user: User) {
  const [db, sdk] = await Promise.all([dbFor(user), import('firebase/firestore')]);
  const existing = await sdk.getDocs(sdk.query(sdk.collection(db, 'accountDeletionRequests'), sdk.where('uid', '==', user.uid), sdk.limit(1)));
  if (!existing.empty) return existing.docs[0].id;
  const request = sdk.doc(sdk.collection(db, 'accountDeletionRequests'));
  await sdk.setDoc(request, { uid: user.uid, status: 'requested', createdAt: sdk.serverTimestamp() });
  return request.id;
}

