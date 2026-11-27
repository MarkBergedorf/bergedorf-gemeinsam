/* Local development helper. Never import this module from the public app entry. */
const PROJECT = 'demo-bergedorf-gemeinsam';
const RESOURCE_PROJECT = `projects/${PROJECT}`;
const FIRESTORE = 'http://127.0.0.1:8080/v1/projects/demo-bergedorf-gemeinsam/databases/(default)/documents';
const AUTH = 'http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1';

export function assertLocalDemo() {
  if (typeof location !== 'undefined' && (!['localhost', '127.0.0.1'].includes(location.hostname) || !location.pathname.includes('/local/phase32/'))) {
    throw new Error('Lokale Betreiberfunktionen sind ausschließlich in der Phase-32-Vorschau auf localhost verfügbar.');
  }
  if (PROJECT !== 'demo-bergedorf-gemeinsam' || new URL(FIRESTORE).hostname !== '127.0.0.1' || new URL(AUTH).hostname !== '127.0.0.1') throw new Error('Emulator-Endpunkt außerhalb des Demo-Projekts abgewiesen.');
}

function enc(v) {
  if (v === null) return { nullValue: null };
  if (v instanceof Date) return { timestampValue: v.toISOString() };
  if (typeof v === 'string') return { stringValue: v };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(enc) } };
  return { mapValue: { fields: Object.fromEntries(Object.entries(v).map(([k, x]) => [k, enc(x)])) } };
}
function dec(v) {
  if (!v) return null;
  if ('nullValue' in v) return null;
  if ('stringValue' in v) return v.stringValue;
  if ('booleanValue' in v) return v.booleanValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('timestampValue' in v) return v.timestampValue;
  if ('arrayValue' in v) return (v.arrayValue.values || []).map(dec);
  if ('mapValue' in v) return Object.fromEntries(Object.entries(v.mapValue.fields || {}).map(([k, x]) => [k, dec(x)]));
  return null;
}
function decodeFields(fields = {}) { return Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, dec(v)])); }
function encodeFields(fields = {}) { return Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, enc(v)])); }
function safePath(path) {
  const parts = path.split('/');
  if (!parts.length || parts.some(p => !p || p === '.' || p === '..' || p.includes('?') || p.includes('#'))) throw new Error(`Ungültiger Emulator-Dokumentpfad: ${path}`);
  return parts.map(encodeURIComponent).join('/');
}
async function request(url, init = {}) {
  assertLocalDemo();
  const response = await fetch(url, { ...init, headers: { Authorization: 'Bearer owner', ...(init.body ? { 'Content-Type': 'application/json' } : {}), ...init.headers } });
  const text = await response.text();
  if (!response.ok) throw new Error(`Lokaler Emulator antwortete ${response.status}: ${text.slice(0, 300)}`);
  return text ? JSON.parse(text) : {};
}

export async function getLocalDocument(path) {
  try { const data = await request(`${FIRESTORE}/${safePath(path)}`); return { name: data.name, fields: decodeFields(data.fields), path: path }; }
  catch (error) { if (String(error.message).includes(' 404:')) return null; throw error; }
}
export async function listLocalCollection(path) {
  let token; const all = [];
  do {
    const query = new URLSearchParams({ pageSize: '300' }); if (token) query.set('pageToken', token);
    const data = await request(`${FIRESTORE}/${safePath(path)}?${query}`);
    for (const row of data.documents || []) {
      const prefix = `${RESOURCE_PROJECT}/databases/(default)/documents/`;
      const docPath = decodeURIComponent(row.name.slice(row.name.indexOf(prefix) + prefix.length));
      all.push({ path: docPath, id: docPath.split('/').at(-1), fields: decodeFields(row.fields) });
    }
    token = data.nextPageToken;
  } while (token);
  return all;
}
export async function commitLocalWrites(writes) {
  assertLocalDemo();
  for (let i = 0; i < writes.length; i += 400) {
    const part = writes.slice(i, i + 400).map(write => write.delete
      ? { delete: `${RESOURCE_PROJECT}/databases/(default)/documents/${safePath(write.path)}` }
      : { update: { name: `${RESOURCE_PROJECT}/databases/(default)/documents/${safePath(write.path)}`, fields: encodeFields(write.fields) } });
    await request(`${FIRESTORE}:commit`, { method: 'POST', body: JSON.stringify({ writes: part }) });
  }
}
async function listChildCollections(documentPath) {
  let token; const ids = [];
  do {
    const data = await request(`${FIRESTORE}/${safePath(documentPath)}:listCollectionIds`, { method: 'POST', body: JSON.stringify({ pageSize: 100, ...(token ? { pageToken: token } : {}) }) });
    ids.push(...(data.collectionIds || [])); token = data.nextPageToken;
  } while (token);
  return ids;
}
async function allLocalDocuments() {
  const found = [];
  async function walk(collectionPath) {
    const docs = await listLocalCollection(collectionPath); found.push(...docs);
    for (const row of docs) for (const child of await listChildCollections(row.path)) await walk(`${row.path}/${child}`);
  }
  // The local Firestore emulator does not consistently expose listCollectionIds
  // at the database root. Keep this root allowlist in sync with firestore.rules;
  // nested collections are discovered recursively for each document.
  for (const root of ['platformConfig', 'platformStaff', 'users', 'consentEvents', 'groups', 'groupDirectory', 'abuseReports', 'localAdmin']) await walk(root);
  return found;
}
function containsUid(value, uid) {
  if (value === uid) return true;
  if (Array.isArray(value)) return value.some(x => containsUid(x, uid));
  if (value && typeof value === 'object') return Object.values(value).some(x => containsUid(x, uid));
  return false;
}
function redact(value, uid, token) {
  if (value === uid) return token;
  if (Array.isArray(value)) return value.map(x => redact(x, uid, token));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, x]) => [k, redact(x, uid, token)]));
  return value;
}

/**
 * Resumable local-only deletion. Personal account data is deleted; shared work,
 * consent evidence, and abuse reports get separately selectable local treatments.
 * Auth is disabled and deleted only after a fresh scan verifies no UID references.
 */
export async function resumeSyntheticAccountDeletion(uid, choices, failAfterCheckpoint = false) {
  assertLocalDemo();
  if (!/^[-A-Za-z0-9_]{1,128}$/.test(uid)) throw new Error('Ungültige synthetische UID.');
  for (const [key, value] of Object.entries(choices)) if (!['delete', 'anonymize', 'retain'].includes(value)) throw new Error(`Ungültige Löschoption für ${key}.`);
  const jobPath = `localAdmin/deletionJobs_${uid}`;
  let job = await getLocalDocument(jobPath);
  if (job && JSON.stringify(job.fields.choices) !== JSON.stringify(choices)) throw new Error('Der Löschlauf nutzt bereits gespeicherte Verfahren. Für die Wiederaufnahme müssen dieselben Verfahrensentscheidungen verwendet werden.');
  if (!job) {
    const docs = await allLocalDocuments();
    // Firestore allows orphaned subcollections whose immediate parent document
    // was never created, so users/{uid} itself is not a reliable scan anchor.
    for (const subcollection of ['interests', 'groupMemberships']) {
      const path = `users/${uid}/${subcollection}`;
      for (const row of await listLocalCollection(path)) if (!docs.some(existing => existing.path === row.path)) docs.push(row);
    }
    const matches = docs.filter(d => containsUid(d.fields, uid) || d.path.split('/').includes(uid));
    const groups = docs.filter(d => d.path.split('/').length === 2 && d.path.startsWith('groups/'));
    const paths = [];
    for (const group of groups) {
      if (group.fields.coordinatorUid !== uid) continue;
      const members = docs.filter(d => d.path.startsWith(`${group.path}/members/`) && d.fields.status === 'active' && d.id !== uid);
      const successor = members.find(x => x.fields.role === 'deputy') || members.find(x => x.fields.role === 'member');
      if (successor) {
        const retainedGroup = { ...group.fields, coordinatorUid: successor.id, updatedAt: new Date().toISOString() };
        if (retainedGroup.createdBy === uid) delete retainedGroup.createdBy;
        paths.push({ path: group.path, fields: retainedGroup });
        paths.push({ path: `${group.path}/members/${successor.id}`, fields: { ...successor.fields, role: 'coordinator' } });
        paths.push({ path: `users/${successor.id}/groupMemberships/${group.id}`, fields: { groupId: group.id, role: 'coordinator', status: 'active', joinedAt: successor.fields.joinedAt || null } });
      } else {
        const retainedGroup = { ...group.fields, coordinatorUid: null, status: 'closed', listed: false, seeking: 'none', updatedAt: new Date().toISOString() };
        if (retainedGroup.createdBy === uid) delete retainedGroup.createdBy;
        paths.push({ path: group.path, fields: retainedGroup });
        paths.push({ path: `groupDirectory/${group.id}`, delete: true });
      }
    }
    const protectedPaths = new Set(paths.map(x => x.path));
    const retainedPaths = [];
    const records = matches.filter(d => !protectedPaths.has(d.path)).flatMap(d => {
      const p = d.path.split('/');
      let category = 'personal';
      if (p[0] === 'consentEvents') category = 'consent';
      else if (p[0] === 'abuseReports') category = 'reports';
      else if (p[0] === 'groups' && p.includes('workItems')) category = 'sharedContent';
      else if (p[0] === 'localAdmin') category = 'audit';
      const choice = choices[category] || (category === 'audit' ? 'anonymize' : 'delete');
      if (choice === 'delete') return [{ path: d.path, delete: true }];
      if (choice === 'retain') { retainedPaths.push(d.path); return []; }
      const token = `anonymous-${crypto.randomUUID()}`;
      const fields = redact(d.fields, uid, token);
      if (d.path.includes(uid)) {
        const newPath = [...p.slice(0, -1), `anonymous-${crypto.randomUUID()}`].join('/');
        return [{ path: newPath, fields }, { path: d.path, delete: true }];
      }
      return [{ path: d.path, fields }];
    });
    const cleanup = [...paths, ...records];
    const jobData = { uid, status: 'running', choices, retainedPaths, completionId: crypto.randomUUID(), createdAt: new Date().toISOString(), completed: [], remaining: [], authDeleted: false };
    jobData.remaining = cleanup;
    await commitLocalWrites([{ path: jobPath, fields: jobData }]);
    job = { path: jobPath, fields: jobData };
  }
  const pending = [...(job.fields.remaining || [])];
  while (pending.length) {
    const chunk = pending.splice(0, 100);
    await commitLocalWrites(chunk);
    const completed = [...(job.fields.completed || []), ...chunk.map(x => x.path)];
    const updated = { ...job.fields, completed, remaining: pending, status: pending.length ? 'running' : 'verifying', updatedAt: new Date().toISOString() };
    await commitLocalWrites([{ path: jobPath, fields: updated }]);
    job.fields = updated;
    if (failAfterCheckpoint) throw new Error('Simulierter Abbruch nach gespeichertem Löschabschnitt; Vorgang kann sicher fortgesetzt werden.');
  }
  const afterDocs = await allLocalDocuments();
  for (const subcollection of ['interests', 'groupMemberships']) afterDocs.push(...(await listLocalCollection(`users/${uid}/${subcollection}`)));
  const retained = new Set(job.fields.retainedPaths || []);
  const leftovers = afterDocs.filter(d => d.path !== jobPath && !retained.has(d.path) && (containsUid(d.fields, uid) || d.path.includes(uid)));
  if (leftovers.length) throw new Error(`Löschung pausiert: ${leftovers.length} Dokumente enthalten noch die UID.`);
  const auditPath = `localAdmin/deletionAudit_${job.fields.completionId}`;
  const counts = { operations: job.fields.completed.length, consent: choices.consent || 'delete', reports: choices.reports || 'delete', sharedContent: choices.sharedContent || 'delete' };
  await commitLocalWrites([{ path: auditPath, fields: { status: 'auth-pending', counts, createdAt: new Date().toISOString() } }]);
  await request(`${AUTH}/accounts:update?key=demo-only-not-a-secret`, { method: 'POST', body: JSON.stringify({ localId: uid, disable: true }) }).catch(() => {});
  await request(`${AUTH}/accounts:delete?key=demo-only-not-a-secret`, { method: 'POST', body: JSON.stringify({ localId: uid }) });
  await commitLocalWrites([{ path: auditPath, fields: { status: 'complete', counts, completedAt: new Date().toISOString() } }, { path: jobPath, delete: true }]);
  return { status: 'complete', deletedDocuments: counts.operations, auditId: job.fields.completionId };
}

export async function setLocalParticipation(enabled) {
  const actionId = crypto.randomUUID(); const at = new Date().toISOString();
  await commitLocalWrites([
    { path: 'platformConfig/participation', fields: { enabled: Boolean(enabled), updatedAt: at, localOnly: true } },
    { path: `localAdmin/actions_${actionId}`, fields: { actor: 'local-operator', action: enabled ? 'participation-enabled' : 'participation-disabled', createdAt: at } }
  ]);
}
export async function setLocalGroupLock(groupId, locked, removeListing = false) {
  const group = await getLocalDocument(`groups/${groupId}`); if (!group) throw new Error('Gruppe wurde nicht gefunden.');
  const fields = { ...group.fields, locked: Boolean(locked), updatedAt: new Date().toISOString() };
  if (removeListing) Object.assign(fields, { listed: false, seeking: 'none' });
  const at = new Date().toISOString(); const actionId = crypto.randomUUID();
  const writes = [{ path: group.path, fields }, { path: `localAdmin/actions_${actionId}`, fields: { actor: 'local-operator', action: locked ? 'group-locked' : 'group-unlocked', groupId, createdAt: at } }];
  if (removeListing) writes.push({ path: `groupDirectory/${groupId}`, delete: true });
  await commitLocalWrites(writes);
}
export async function setLocalReportStatus(reportId, status, note = '') {
  if (!['received', 'reviewing', 'actioned', 'dismissed'].includes(status)) throw new Error('Ungültiger lokaler Bearbeitungsstatus.');
  const report = await getLocalDocument(`abuseReports/${reportId}`); if (!report) throw new Error('Meldung wurde nicht gefunden.');
  const at = new Date().toISOString();
  await commitLocalWrites([
    { path: `localAdmin/reportStatuses_${reportId}`, fields: { reportId, status, note: note.slice(0, 240), updatedAt: at } },
    { path: `localAdmin/actions_${crypto.randomUUID()}`, fields: { actor: 'local-operator', action: 'report-status-changed', reportId, status, createdAt: at } }
  ]);
}

export async function setLocalAccountDisabled(uid, disabled = true) {
  assertLocalDemo();
  if (!/^[-A-Za-z0-9_]{1,128}$/.test(uid)) throw new Error('Ungültige synthetische UID.');
  await request(`${AUTH}/accounts:update?key=demo-only-not-a-secret`, { method: 'POST', body: JSON.stringify({ localId: uid, disable: Boolean(disabled) }) });
  const at = new Date().toISOString();
  await commitLocalWrites([{ path: `localAdmin/actions_${crypto.randomUUID()}`, fields: { actor: 'local-operator', action: disabled ? 'synthetic-account-disabled' : 'synthetic-account-enabled', uid, createdAt: at } }]);
}

/** Export only the synthetic user's personal fields, including closed groups. */
export async function exportSyntheticUserData(uid) {
  assertLocalDemo();
  if (!/^[-A-Za-z0-9_]{1,128}$/.test(uid)) throw new Error('Ungültige synthetische UID.');
  const docs = await allLocalDocuments();
  for (const collection of ['interests', 'groupMemberships']) {
    for (const row of await listLocalCollection(`users/${uid}/${collection}`)) if (!docs.some(d => d.path === row.path)) docs.push(row);
  }
  const personal = docs.filter(d => containsUid(d.fields, uid) || d.path.split('/').includes(uid));
  const membershipRows = personal.filter(d => d.path.startsWith('groups/') && d.path.includes('/members/') && d.path.endsWith(`/members/${uid}`));
  const mirrors = personal.filter(d => d.path.startsWith(`users/${uid}/groupMemberships/`));
  const groupIds = new Set([...membershipRows.map(d => d.path.split('/')[1]), ...mirrors.map(d => d.path.split('/').at(-1))]);
  const groups = [...groupIds].map(id => {
    const row = docs.find(d => d.path === `groups/${id}`);
    return row ? { id, projectId: row.fields.projectId, title: row.fields.title, status: row.fields.status, listed: row.fields.listed === true } : { id };
  });
  const requests = personal.filter(d => d.path.startsWith('groups/') && d.path.includes('/joinRequests/') && d.fields.uid === uid).map(d => ({ id: d.id, groupId: d.path.split('/')[1], ...d.fields }));
  const ownOrAssigned = personal.filter(d => d.path.startsWith('groups/') && d.path.includes('/workItems/') && d.path.split('/').length === 4 && (d.fields.createdBy === uid || d.fields.assigneeUid === uid)).map(d => {
    const authored = d.fields.createdBy === uid;
    const allowed = ['kind', 'title', 'status', 'dueAt', 'createdAt', 'updatedAt'];
    const fields = authored ? d.fields : Object.fromEntries(allowed.filter(k => k in d.fields).map(k => [k, d.fields[k]]));
    return { id: d.id, groupId: d.path.split('/')[1], authoredByRequester: authored, ...fields };
  });
  return {
    scope: 'Eigene synthetische personenbezogene Daten; geschlossene Gruppen werden nur nach UID-eigenen Referenzen durchsucht. Vertrauliche Inhalte anderer Mitglieder sind ausgeschlossen.',
    exportedAt: new Date().toISOString(), account: { uid },
    interests: personal.filter(d => d.path.startsWith(`users/${uid}/interests/`)).map(d => ({ id: d.id, ...d.fields })),
    memberships: [...new Map([...membershipRows.map(d => ({ row: d, groupId: d.path.split('/')[1] })), ...mirrors.map(d => ({ row: d, groupId: d.path.split('/').at(-1) }))].map(({ row, groupId }) => [groupId, { groupId, ...row.fields }])).values()],
    groups, joinRequests: requests, ownOrAssignedWorkItems: [...new Map(ownOrAssigned.map(x => [`${x.groupId}/${x.id}`, x])).values()],
    consentEvents: personal.filter(d => d.path.startsWith('consentEvents/') && d.fields.uid === uid).map(d => ({ id: d.id, ...d.fields })),
    abuseReports: personal.filter(d => d.path.startsWith('abuseReports/') && d.fields.reporterUid === uid).map(d => ({ id: d.id, ...d.fields }))
  };
}

/** In the local synthetic preview only: coordinator inbox, filtered to pending rows. */
export async function listLocalPendingRequests(groupId) {
  assertLocalDemo();
  if (!/^[-A-Za-z0-9_-]{1,128}$/.test(groupId)) throw new Error('Ungültige lokale Gruppenkennung.');
  return (await listLocalCollection(`groups/${groupId}/joinRequests`)).filter(row => row.fields.status === 'pending');
}

/** Deterministic client-side quota/failure harness; never contacts production. */
export function createLocalWriteBudget(maxWrites) {
  let used = 0;
  return {
    consume(count = 1) {
      if (!Number.isInteger(count) || count < 0) throw new Error('Ungültige synthetische Schreibrate.');
      if (used + count > maxWrites) throw new Error('Simulierte lokale Kontingentüberschreitung.');
      used += count; return used;
    },
    get used() { return used; },
    reset() { used = 0; }
  };
}
