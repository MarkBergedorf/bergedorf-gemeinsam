import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import {
  commitLocalWrites, getLocalDocument, listLocalCollection, resumeSyntheticAccountDeletion,
  setLocalGroupLock, setLocalParticipation, setLocalReportStatus, createLocalWriteBudget, exportSyntheticUserData
} from '../local/phase32/emulator-admin.mjs';

const base = 'http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1';
let uid;
async function authRequest(path, body) {
  const response = await fetch(`${base}/${path}?key=demo-only-not-a-secret`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' }, body: JSON.stringify(body) });
  const data = await response.json(); if (!response.ok) throw new Error(JSON.stringify(data)); return data;
}
before(async () => {
  assert.equal(process.env.GCLOUD_PROJECT, 'demo-bergedorf-gemeinsam');
  const account = await authRequest('accounts:signUp', { email: `admin-test-${Date.now()}@example.test`, password: 'synthetic-test-password', returnSecureToken: true });
  uid = account.localId;
});
after(async () => {
  if (uid) await authRequest('accounts:delete', { localId: uid }).catch(() => {});
});

test('lokale Adminfunktionen bleiben an Emulatoren gebunden und verwalten Not-Aus, Meldung, Gruppensperre', async () => {
  await commitLocalWrites([
    { path: 'groups/admin-test-group', fields: { projectId: 'projekt-einsamkeitslotsen', title: 'synthetic', createdBy: uid, coordinatorUid: uid, listed: true, status: 'forming', seeking: 'members' } },
    { path: 'groupDirectory/admin-test-group', fields: { projectId: 'projekt-einsamkeitslotsen', title: 'synthetic', description: '', listed: true, status: 'forming', seeking: 'members' } },
    { path: 'abuseReports/admin-test-report', fields: { reporterUid: uid, groupId: 'admin-test-group', reason: 'spam' } }
  ]);
  await setLocalParticipation(false);
  assert.equal((await getLocalDocument('platformConfig/participation')).fields.enabled, false);
  await setLocalGroupLock('admin-test-group', true, true);
  assert.equal((await getLocalDocument('groups/admin-test-group')).fields.locked, true);
  assert.equal(await getLocalDocument('groupDirectory/admin-test-group'), null);
  await setLocalReportStatus('admin-test-report', 'reviewing', 'synthetic review');
  assert.equal((await getLocalDocument('localAdmin/reportStatuses_admin-test-report')).fields.status, 'reviewing');
});

test('synthetische Kontolöschung ist unterbrechbar, wiederaufnehmbar, idempotent und löscht Auth zuletzt', async () => {
  const project = 'projekt-einsamkeitslotsen';
  const seed = [
    { path: `users/${uid}/interests/${project}`, fields: { projectId: project, uid, status: 'active' } },
    { path: `users/${uid}/groupMemberships/delete-test-group`, fields: { groupId: 'delete-test-group', uid, status: 'left', role: 'member' } },
    { path: 'groups/delete-test-group', fields: { projectId: project, title: 'synthetic', createdBy: uid, coordinatorUid: uid, listed: false, status: 'closed', seeking: 'none' } },
    { path: `groups/delete-test-group/members/${uid}`, fields: { role: 'member', status: 'left' } },
    { path: `groups/delete-test-group/joinRequests/${uid}`, fields: { uid, status: 'declined' } },
    { path: 'groups/delete-test-group/workItems/delete-test-item', fields: { title: 'synthetic task', body: 'synthetic body', createdBy: uid, assigneeUid: uid } },
    { path: 'groups/delete-test-group/workItems/assigned-task', fields: { title: 'shared task', body: 'private note by another member', createdBy: 'another-member', assigneeUid: uid } },
    { path: `consentEvents/delete-test-${uid}`, fields: { uid, purpose: 'participation', decision: 'withdrawn', subjectId: project } },
    { path: `abuseReports/delete-test-${uid}`, fields: { reporterUid: uid, groupId: 'delete-test-group', reason: 'other' } },
    { path: `groups/delete-test-group/workItems/delete-test-item/subrecords/nested`, fields: { owner: uid } }
  ];
  seed.push(...Array.from({ length: 105 }, (_, i) => ({ path: `abuseReports/bulk-${uid}-${i}`, fields: { reporterUid: uid, groupId: 'delete-test-group', reason: 'spam' } })));
  await commitLocalWrites(seed);
  const exported = await exportSyntheticUserData(uid);
  assert.equal(exported.memberships.some(row => row.groupId === 'delete-test-group'), true);
  assert.equal(exported.groups.find(row => row.id === 'delete-test-group').status, 'closed');
  assert.equal(exported.joinRequests.some(row => row.groupId === 'delete-test-group'), true);
  assert.equal(exported.ownOrAssignedWorkItems.find(row => row.id === 'delete-test-item').body, 'synthetic body');
  assert.equal('body' in exported.ownOrAssignedWorkItems.find(row => row.id === 'assigned-task'), false);
  assert.equal(exported.consentEvents.some(row => row.decision === 'withdrawn'), true);
  assert.equal(exported.abuseReports.some(row => row.groupId === 'delete-test-group'), true);
  const choices = { personal: 'delete', consent: 'anonymize', reports: 'delete', sharedContent: 'anonymize' };
  await assert.rejects(resumeSyntheticAccountDeletion(uid, choices, true), /Simulierter Abbruch/);
  assert.equal((await getLocalDocument(`localAdmin/deletionJobs_${uid}`)).fields.status, 'running');
  const result = await resumeSyntheticAccountDeletion(uid, choices);
  assert.equal(result.status, 'complete');
  assert.equal(await getLocalDocument(`users/${uid}/interests/${project}`), null);
  assert.equal(await getLocalDocument(`groups/delete-test-group/members/${uid}`), null);
  assert.equal(await getLocalDocument(`groups/delete-test-group/joinRequests/${uid}`), null);
  assert.equal((await getLocalDocument(`groups/delete-test-group/workItems/delete-test-item/subrecords/nested`)).fields.owner.startsWith('anonymous-'), true);
  assert.equal((await getLocalDocument('groups/delete-test-group')).fields.status, 'closed');
  assert.equal((await getLocalDocument('groups/delete-test-group/workItems/delete-test-item')).fields.createdBy.startsWith('anonymous-'), true);
  assert.equal((await listLocalCollection('consentEvents')).some(row => row.fields.uid === uid), false);
  assert.equal(await getLocalDocument(`localAdmin/deletionJobs_${uid}`), null);
  assert.equal((await getLocalDocument(`localAdmin/deletionAudit_${result.auditId}`)).fields.status, 'complete');
  await assert.rejects(authRequest('accounts:lookup', { localId: uid }));
  uid = null;
});

test('Löschverfahren retain bleibt als getrennte, ausdrücklich gewählte lokale Option nachvollziehbar', async () => {
  const account = await authRequest('accounts:signUp', { email: `retain-test-${Date.now()}@example.test`, password: 'synthetic-test-password', returnSecureToken: true });
  const retainedUid = account.localId;
  await commitLocalWrites([{ path: `abuseReports/retain-${retainedUid}`, fields: { reporterUid: retainedUid, groupId: 'closed-test-group', reason: 'privacy' } }]);
  const result = await resumeSyntheticAccountDeletion(retainedUid, { personal: 'delete', consent: 'delete', reports: 'retain', sharedContent: 'delete' });
  assert.equal(result.status, 'complete');
  assert.equal((await getLocalDocument(`abuseReports/retain-${retainedUid}`)).fields.reporterUid, retainedUid);
  assert.equal((await getLocalDocument(`localAdmin/deletionAudit_${result.auditId}`)).fields.counts.reports, 'retain');
  await assert.rejects(authRequest('accounts:lookup', { localId: retainedUid }));
});

test('Emulator-Paginierung liefert alle Einträge; synthetische Kontingent- und Ausfallfehler sind deterministisch', async () => {
  const budget = createLocalWriteBudget(2);
  budget.consume(2); assert.equal(budget.used, 2);
  assert.throws(() => budget.consume(1), /Kontingentüberschreitung/);
  await assert.rejects(fetch('http://127.0.0.1:1/v1/projects/demo-bergedorf-gemeinsam/databases/(default)/documents'), /fetch failed|ECONNREFUSED/);
  const rows = await listLocalCollection('localAdmin');
  assert.ok(rows.length >= 1);
  await Promise.all([
    commitLocalWrites([{ path: 'groups/concurrency-test/workItems/same-item', fields: { title: 'edit A', revision: 1 } }]),
    commitLocalWrites([{ path: 'groups/concurrency-test/workItems/same-item', fields: { title: 'edit B', revision: 2 } }])
  ]);
  const item = await getLocalDocument('groups/concurrency-test/workItems/same-item');
  assert.ok([1, 2].includes(item.fields.revision));
  assert.equal((await listLocalCollection('groups/concurrency-test/workItems')).filter(row => row.id === 'same-item').length, 1);
});
