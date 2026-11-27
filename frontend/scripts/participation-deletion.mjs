import { FieldValue } from 'firebase-admin/firestore';
import { createHash } from 'node:crypto';

const ROOT_COLLECTIONS = new Set(['platformConfig', 'platformStaff', 'users', 'consentEvents', 'groups', 'groupDirectory', 'abuseReports', 'accountDeletionRequests', 'accountDeletionJobs', 'platformAdminActions', 'platformReportStatuses']);
const NESTED_COLLECTION_GROUPS = ['interests', 'groupMemberships', 'joinRequests', 'workItemRefs', 'members', 'consentEvents', 'abuseReports', 'workItems'];
const VALID_DECISIONS = new Set(['delete', 'anonymize']);

function hasUid(value, uid) {
  if (value === uid) return true;
  if (Array.isArray(value)) return value.some(item => hasUid(item, uid));
  if (value && typeof value === 'object') return Object.values(value).some(item => hasUid(item, uid));
  return false;
}
function replaceUid(value, uid) {
  if (value === uid) return 'former-participant';
  if (Array.isArray(value)) return value.map(item => replaceUid(item, uid));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, replaceUid(item, uid)]));
  return value;
}
function categoryFor(path) {
  const parts = path.split('/');
  if (parts[0] === 'consentEvents') return 'consent';
  if (parts[0] === 'abuseReports') return 'reports';
  if (parts[0] === 'groups' && parts.includes('workItems')) return 'sharedContent';
  if (parts[0] === 'platformAdminActions' || parts[0] === 'platformReportStatuses') return 'operatorAudit';
  return 'personal';
}
async function scanDocuments(db, uid) {
  const found = new Map();
  async function walk(collectionRef) {
    let cursor = null;
    for (;;) {
      let query = collectionRef.orderBy('__name__').limit(250);
      if (cursor) query = query.startAfter(cursor);
      const page = await query.get();
      for (const doc of page.docs) {
        found.set(doc.ref.path, doc);
        for (const child of await doc.ref.listCollections()) await walk(child);
      }
      if (page.size < 250) break;
      cursor = page.docs.at(-1);
    }
  }
  for (const collection of await db.listCollections()) if (ROOT_COLLECTIONS.has(collection.id)) await walk(collection);
  // Collection-group scans also find orphaned subcollections without a parent document.
  for (const name of NESTED_COLLECTION_GROUPS) {
    let cursor = null;
    for (;;) {
      let query = db.collectionGroup(name).orderBy('__name__').limit(250);
      if (cursor) query = query.startAfter(cursor);
      const page = await query.get();
      for (const doc of page.docs) found.set(doc.ref.path, doc);
      if (page.size < 250) break;
      cursor = page.docs.at(-1);
    }
  }
  return [...found.values()].filter(doc => !doc.ref.path.startsWith('accountDeletionJobs/') && (doc.ref.path.split('/').includes(uid) || hasUid(doc.data(), uid)));
}
async function makePlan(db, uid, choices) {
  const docs = await scanDocuments(db, uid);
  const operations = [];
  const protectedPaths = new Set();
  const groupDocs = docs.filter(doc => doc.ref.parent.id === 'groups' && doc.ref.path.split('/').length === 2);
  for (const group of groupDocs) {
    const data = group.data();
    if (data.coordinatorUid !== uid && data.createdBy !== uid) continue;
    if (data.coordinatorUid === uid) {
      const members = await group.ref.collection('members').where('status', '==', 'active').get();
      const candidates = members.docs.filter(member => member.id !== uid);
      const successor = candidates.find(member => member.get('role') === 'deputy') || candidates.find(member => member.get('role') === 'member');
      if (successor) {
        const update = { ...data, coordinatorUid: successor.id, updatedAt: FieldValue.serverTimestamp() };
        if (data.createdBy === uid) delete update.createdBy;
        operations.push({ path: group.ref.path, action: 'set', data: update, unset: data.createdBy === uid ? ['createdBy'] : [], merge: true });
        operations.push({ path: successor.ref.path, action: 'set', data: { ...successor.data(), role: 'coordinator' } });
        operations.push({ path: `users/${successor.id}/groupMemberships/${group.id}`, action: 'set', data: { groupId: group.id, role: 'coordinator', status: 'active', joinedAt: successor.get('joinedAt') || null } });
      } else {
        const update = { ...data, coordinatorUid: null, status: 'closed', listed: false, seeking: 'none', updatedAt: FieldValue.serverTimestamp() };
        if (data.createdBy === uid) delete update.createdBy;
        operations.push({ path: group.ref.path, action: 'set', data: update, unset: data.createdBy === uid ? ['createdBy'] : [], merge: true });
        operations.push({ path: `groupDirectory/${group.id}`, action: 'delete' });
      }
      protectedPaths.add(group.ref.path);
    } else {
      const update = { ...data }; delete update.createdBy;
      operations.push({ path: group.ref.path, action: 'set', data: update, unset: ['createdBy'], merge: true });
      protectedPaths.add(group.ref.path);
    }
  }
  for (const doc of docs) {
    const path = doc.ref.path;
    if (protectedPaths.has(path) || path.startsWith('accountDeletionJobs/')) continue;
    if (path.startsWith('accountDeletionRequests/')) { operations.push({ path, action: 'delete' }); continue; }
    const category = categoryFor(path);
    const decision = choices[category] || (category === 'operatorAudit' ? 'anonymize' : 'delete');
    if (!VALID_DECISIONS.has(decision)) throw new Error(`Für ${category} fehlt eine Lösch- oder Anonymisierungsentscheidung.`);
    if (decision === 'delete' || path.split('/').includes(uid)) operations.push({ path, action: 'delete' });
    else operations.push({ path, action: 'set', data: replaceUid(doc.data(), uid) });
  }
  return operations;
}
async function commitChunk(db, operations) {
  const batch = db.batch();
  for (const op of operations) {
    const ref = db.doc(op.path);
    if (op.action === 'delete') batch.delete(ref);
    else if (op.merge) {
      const data = { ...op.data };
      for (const field of op.unset || []) data[field] = FieldValue.delete();
      batch.set(ref, data, { merge: true });
    }
    else batch.set(ref, op.data);
  }
  await batch.commit();
}

/** Resumable deletion. Stored decisions cannot change on retry; Auth is last. */
export async function processAccountDeletion({ db, auth, requestId, choices, failAfterChunks = false, failAfterAuthDelete = false }) {
  if (!/^[A-Za-z0-9_-]{1,128}$/.test(requestId)) throw new Error('Ungültige Löschauftragskennung.');
  for (const key of ['consent', 'reports', 'sharedContent']) if (!VALID_DECISIONS.has(choices[key])) throw new Error(`Für ${key} muss delete oder anonymize ausdrücklich gewählt werden.`);
  const requestRef = db.doc(`accountDeletionRequests/${requestId}`);
  const jobRef = db.doc(`accountDeletionJobs/${requestId}`);
  const request = await requestRef.get();
  let job = await jobRef.get();
  let state = job.exists ? job.data() : null;
  if (!state) {
    if (!request.exists || request.get('status') !== 'requested' || typeof request.get('uid') !== 'string') throw new Error('Kein bearbeitbarer Löschauftrag gefunden.');
    const uid = request.get('uid');
    const plan = await makePlan(db, uid, choices);
    state = { uid, status: 'preparing', choices, operationCount: plan.length, cursor: 0, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() };
    await jobRef.create(state);
  } else if (JSON.stringify(state.choices) !== JSON.stringify(choices)) throw new Error('Für die Wiederaufnahme müssen dieselben dokumentierten Löschentscheidungen verwendet werden.');

  const uid = state.uid;
  if (!uid) throw new Error('Der Auftrag ist bereits abgeschlossen und enthält keine Konto-UID mehr.');
  if (state.status === 'preparing') {
    // No account data is mutated until the complete, resumable plan is stored.
    // Rebuilding here repairs any interruption while writing that plan.
    const plan = await makePlan(db, uid, choices);
    const oldRows = await jobRef.collection('operations').get();
    for (let index = 0; index < oldRows.docs.length; index += 400) {
      const batch = db.batch();
      oldRows.docs.slice(index, index + 400).forEach(row => batch.delete(row.ref));
      await batch.commit();
    }
    for (let index = 0; index < plan.length; index += 1) await jobRef.collection('operations').doc(String(index).padStart(8, '0')).set(plan[index]);
    await jobRef.set({ status: 'running', operationCount: plan.length, cursor: 0, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    await requestRef.set({ status: 'processing', updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    state = { ...state, status: 'running', operationCount: plan.length, cursor: 0 };
  }
  let cursor = Number(state.cursor || 0);
  const total = Number(state.operationCount || 0);
  while (cursor < total) {
    const page = await jobRef.collection('operations').orderBy('__name__').startAt(String(cursor).padStart(8, '0')).limit(200).get();
    if (page.empty) throw new Error('Der gespeicherte Löschplan ist unvollständig; das Auth-Konto bleibt bestehen.');
    await commitChunk(db, page.docs.map(row => row.data()));
    cursor += page.size;
    await jobRef.set({ cursor, status: cursor === total ? 'verifying' : 'running', updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    if (failAfterChunks) throw new Error('Simulierter Abbruch nach gespeichertem Löschabschnitt; der Auftrag ist wiederaufnehmbar.');
  }
  const leftovers = await scanDocuments(db, uid);
  const unsafeLeftovers = leftovers.filter(doc => doc.ref.path !== requestRef.path && doc.ref.path !== jobRef.path);
  if (unsafeLeftovers.length) {
    await jobRef.set({ status: 'verification-failed', unresolvedCount: unsafeLeftovers.length, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    throw new Error(`Löschung pausiert: ${unsafeLeftovers.length} Verknüpfungen sind noch vorhanden (${unsafeLeftovers.slice(0, 10).map(doc => doc.ref.path).join(', ')}); Auth-Konto bleibt bestehen.`);
  }
  await jobRef.set({ status: 'auth-pending', updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  try {
    await auth.getUser(uid);
    await auth.updateUser(uid, { disabled: true });
    await auth.deleteUser(uid);
  } catch (error) {
    if (error?.code !== 'auth/user-not-found') throw error;
    // A retry after Auth deletion but before job finalization is safe.
  }
  if (failAfterAuthDelete) throw new Error('Simulierter Abbruch nach Auth-Löschung; Abschluss kann sicher fortgesetzt werden.');
  const operationRows = await jobRef.collection('operations').get();
  for (let index = 0; index < operationRows.docs.length; index += 400) {
    const batch = db.batch();
    operationRows.docs.slice(index, index + 400).forEach(row => batch.delete(row.ref));
    await batch.commit();
  }
  await requestRef.delete().catch(() => {});
  const finalRequest = await requestRef.get();
  await jobRef.set({
    status: 'complete', uid: FieldValue.delete(),
    cursor: FieldValue.delete(), completedAt: FieldValue.serverTimestamp(),
    requestRemoved: !finalRequest.exists, operationPlanRemoved: true
  }, { merge: true });
  return { status: 'complete', operationCount: total, jobId: jobRef.id };
}
