import test from 'node:test';
import assert from 'node:assert/strict';
import { initializeApp, applicationDefault, deleteApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { processAccountDeletion } from '../scripts/participation-deletion.mjs';

const projectId = process.env.GCLOUD_PROJECT;
assert.equal(projectId, 'demo-bergedorf-gemeinsam', 'This test must run only against the synthetic Firebase emulator project.');
const app = initializeApp({ credential: applicationDefault(), projectId }, 'deletion-test-' + Date.now());
const db = getFirestore(app);
const auth = getAuth(app);

test('Löschaufträge verarbeiten, wiederaufnehmen und Auth erst nach erfolgreichem UID-Scan löschen', async () => {
  const account = await auth.createUser({ email: 'deletion-' + Date.now() + '@example.test', password: 'synthetic-test-password' });
  const uid = account.uid;
  const requestId = 'request-' + Date.now();
  const groupId = 'group-' + requestId;
  await db.doc('accountDeletionRequests/' + requestId).set({ uid, status: 'requested', createdAt: new Date() });
  await db.doc('users/' + uid + '/interests/project').set({ uid, projectId: 'synthetic', status: 'active' });
  await db.doc('groups/' + groupId).set({ createdBy: uid, coordinatorUid: uid, status: 'forming', listed: true, seeking: 'members' });
  await db.doc('groups/' + groupId + '/members/' + uid).set({ role: 'coordinator', status: 'active' });
  await db.doc('groups/' + groupId + '/workItems/task').set({ createdBy: uid, assigneeUid: uid, title: 'Synthetic shared task' });
  await db.doc('consentEvents/event-' + uid).set({ uid, purpose: 'synthetic', decision: 'granted' });
  await db.doc('abuseReports/report-' + uid).set({ reporterUid: uid, reason: 'synthetic' });
  await db.doc('platformAdminActions/action-' + uid).set({ actorUid: uid, action: 'synthetic' });
  const choices = { consent: 'anonymize', reports: 'anonymize', sharedContent: 'anonymize' };

  await assert.rejects(processAccountDeletion({ db, auth, requestId, choices, failAfterChunks: true }), /Simulierter Abbruch/);
  assert.equal((await db.doc('accountDeletionJobs/' + requestId).get()).get('status'), 'verifying');
  assert.equal((await auth.getUser(uid)).uid, uid, 'Auth account must remain present after interruption.');
  await assert.rejects(processAccountDeletion({ db, auth, requestId, choices: { ...choices, reports: 'delete' } }), /dieselben dokumentierten/);

  await assert.rejects(processAccountDeletion({ db, auth, requestId, choices, failAfterAuthDelete: true }), /nach Auth-Löschung/);
  await assert.rejects(auth.getUser(uid), error => error.code === 'auth/user-not-found');
  const result = await processAccountDeletion({ db, auth, requestId, choices });
  assert.equal(result.status, 'complete');
  assert.equal(await db.doc('users/' + uid + '/interests/project').get().then(s => s.exists), false);
  assert.equal(await db.doc('accountDeletionRequests/' + requestId).get().then(s => s.exists), false);
  assert.equal((await db.doc('groups/' + groupId).get()).get('status'), 'closed');
  assert.equal((await db.doc('groups/' + groupId + '/workItems/task').get()).get('createdBy'), 'former-participant');
  assert.equal((await db.doc('consentEvents/event-' + uid).get()).get('uid'), 'former-participant');
  assert.equal((await db.doc('abuseReports/report-' + uid).get()).get('reporterUid'), 'former-participant');
  const job = await db.doc('accountDeletionJobs/' + requestId).get();
  assert.equal(job.get('status'), 'complete');
  assert.equal(job.get('uid'), undefined);
  assert.deepEqual(job.get('choices'), choices);
  assert.equal((await db.collection('accountDeletionJobs/' + requestId + '/operations').get()).empty, true);
  await assert.rejects(auth.getUser(uid), error => error.code === 'auth/user-not-found');
});

test.after(async () => { await deleteApp(app); });
