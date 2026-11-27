import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import bundledChromium from '@sparticuz/chromium';
import { chromium as playwright } from '@playwright/test';
import { initializeApp, deleteApp } from 'firebase/app';
import { connectAuthEmulator, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { connectFirestoreEmulator, doc, getFirestore, runTransaction, serverTimestamp } from 'firebase/firestore';
import { getLocalDocument, listLocalCollection } from '../local/phase32/emulator-admin.mjs';

const project = 'demo-bergedorf-gemeinsam';
if (process.env.GCLOUD_PROJECT !== project || process.env.FIRESTORE_EMULATOR_HOST !== '127.0.0.1:8080') throw new Error('Browserlauf nur im lokalen Demo-Emulator erlaubt.');
const vite = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--base', '/', '--host', '127.0.0.1', '--port', '5173', '--strictPort'], { stdio: 'ignore' });
let browser;
async function saveConcurrentUserVersion(email, groupId) {
  const app = initializeApp({ apiKey: 'demo-only-not-a-secret', authDomain: 'localhost', projectId: project, appId: '1:000000000000:web:concurrent-test' }, `phase32-concurrent-${crypto.randomUUID()}`);
  try {
    const auth = getAuth(app); connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    const credential = await signInWithEmailAndPassword(auth, email, 'synthetic-password-32');
    assert.equal(credential.user.emailVerified, true, 'zweites Konto muss im Auth-Emulator bestätigt sein');
    const store = getFirestore(app); connectFirestoreEmulator(store, '127.0.0.1', 8080);
    const item = (await listLocalCollection(`groups/${groupId}/workItems`)).find(row => row.fields.title === 'Erster synthetischer Arbeitsschritt');
    assert.ok(item, 'synthetischer gemeinsamer Arbeitsinhalt muss vor dem Parallelzugriff existieren');
    await runTransaction(store, async transaction => {
      const ref = doc(store, `groups/${groupId}/workItems/${item.id}`); const current = await transaction.get(ref);
      transaction.update(ref, { body: 'Gespeicherter neuer Stand von Konto A', version: Number(current.data().version) + 1, updatedAt: serverTimestamp() });
      const userRef = doc(store, `users/${current.data().createdBy}/workItemRefs/${groupId}_${item.id}`);
      transaction.set(userRef, { uid: current.data().createdBy, groupId, itemId: item.id, createdBy: true, assignee: current.data().assigneeUid === current.data().createdBy, updatedAt: serverTimestamp() });
    });
  } finally { await deleteApp(app); }
}
try {
  let ready = false;
  for (let i = 0; i < 80; i++) {
    try { if ((await fetch('http://127.0.0.1:5173/local/phase32/')).ok) { ready = true; break; } } catch {}
    await delay(250);
  }
  if (!ready) throw new Error('Lokaler Vorschau-Server wurde unter 127.0.0.1:5173 nicht erreichbar.');
  browser = await playwright.launch({ executablePath: await bundledChromium.executablePath(), headless: true, args: bundledChromium.args });
  const context = await browser.newContext({ acceptDownloads: true, viewport: { width: 1363, height: 936 } });
  const page = await context.newPage();
  const consoleErrors = [];
  const failedResponses = [];
  page.on('pageerror', error => { throw error; });
  page.on('response', response => { if (response.status() >= 400) failedResponses.push({ status: response.status(), url: response.url() }); });
  page.on('console', message => { if (message.type() === 'error') { consoleErrors.push({ text: message.text(), location: message.location() }); console.error('browser console:', message.text(), JSON.stringify(message.location())); } });
  await page.goto('http://127.0.0.1:5173/local/phase32/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('heading', { name: 'Lokale Gruppenwerkstatt' }).waitFor();

  async function account(email, register = true) {
    await page.getByTestId('email').fill(email); await page.getByTestId('password').fill('synthetic-password-32');
    await page.getByTestId(register ? 'register' : 'login').click();
    await page.getByText(`Angemeldet: ${email}`).waitFor();
  }
  async function signOut() { await page.getByTestId('sign-out').click(); await page.getByTestId('email').waitFor(); }
  const emails = [`flow-a-${Date.now()}@example.test`, `flow-b-${Date.now()}@example.test`, `flow-c-${Date.now()}@example.test`];

  await account(emails[0]);
  await page.getByRole('button', { name: 'Interessen-Auswahl lokal speichern' }).click();
  await page.getByRole('status').filter({ hasText: 'Interessen-Auswahl' }).waitFor({ timeout: 5000 }).catch(async error => { console.error('interest status:', await page.locator('[role="status"]').allTextContents()); throw error; });
  await page.getByLabel('Gruppentitel', { exact: true }).fill('Synthetische E2E-Gruppe');
  await page.getByLabel('Beschreibung für den geschützten Arbeitsbereich').fill('synthetischer interner Inhalt');
  await page.getByLabel('Eigener öffentlicher Kurztext (optional)').fill('Synthetische Testgruppe für Begegnung');
  await page.getByLabel(/Gruppentitel und den öffentlichen Kurztext/).check();
  await page.getByRole('button', { name: 'Gruppe lokal gründen' }).click();
  await page.getByRole('status').filter({ hasText: 'Arbeitsgruppe erstellt' }).waitFor();
  const heading = page.locator('section h2').filter({ hasText: 'Geschützter Arbeitsbereich' }); await heading.waitFor();
  const groupId = await heading.locator('small').textContent(); assert.match(groupId || '', /^grp-/);
  await page.getByLabel('Titel', { exact: true }).fill('Erster synthetischer Arbeitsschritt');
  await page.getByLabel('Gemeinsame Notizen / Maßnahmen / Aufgabenbeschreibung').fill('Testnotiz ohne personenbezogene Daten');
  await page.getByRole('button', { name: 'Eintrag speichern' }).click();
  await page.getByRole('status').filter({ hasText: 'Arbeitsinhalt gespeichert' }).waitFor();
  await page.getByText('Erster synthetischer Arbeitsschritt').first().waitFor();
  await page.getByTestId('personal-area').getByText('Erster synthetischer Arbeitsschritt').waitFor();
  await page.getByTestId('personal-area').getByText(/participation · granted/).waitFor();

  await signOut(); await account(emails[1]);
  await page.getByRole('button', { name: 'Interessen-Auswahl lokal speichern' }).click();
  await page.getByRole('status').filter({ hasText: 'Interessen-Auswahl' }).waitFor();
  await page.getByRole('button', { name: 'Beitritt anfragen' }).click();
  await page.getByRole('status').filter({ hasText: 'Beitrittsanfrage' }).waitFor();
  await page.getByRole('button', { name: 'Beitritt anfragen' }).click();
  await page.getByRole('status').filter({ hasText: 'bereits offen' }).waitFor();
  await signOut(); await account(emails[0], false);
  await page.getByRole('button', { name: 'Privaten Arbeitsbereich öffnen' }).click();
  await page.getByRole('button', { name: 'Annehmen' }).click();
  await page.getByRole('status').filter({ hasText: 'Mitglied wurde aufgenommen' }).waitFor();
  await page.getByText(/Synthetischer Nutzer/).first().waitFor();

  await signOut(); await account(emails[2]);
  await page.getByRole('button', { name: 'Arbeitsbereich öffnen' }).first().click();
  await page.getByRole('status').filter({ hasText: 'nur für aktive Mitglieder' }).waitFor();
  await signOut(); await account(emails[1], false);
  await page.getByRole('button', { name: 'Privaten Arbeitsbereich öffnen' }).click();
  await page.getByTestId('work-item-edit').first().click();
  await page.getByLabel('Gemeinsame Notizen / Maßnahmen / Aufgabenbeschreibung').fill('Entwurf von Konto B bleibt erhalten');
  await saveConcurrentUserVersion(emails[0], groupId);
  await page.getByRole('button', { name: 'Änderungen speichern' }).click();
  await page.getByTestId('edit-conflict').waitFor();
  assert.equal(await page.getByLabel('Gemeinsame Notizen / Maßnahmen / Aufgabenbeschreibung').evaluate(el => el.value), 'Entwurf von Konto B bleibt erhalten');
  await page.getByRole('button', { name: 'Aktuellen Stand neu laden' }).click();
  await page.getByRole('status').filter({ hasText: 'Aktueller Gruppenstand geladen' }).waitFor();
  assert.equal(await page.getByLabel('Gemeinsame Notizen / Maßnahmen / Aufgabenbeschreibung').evaluate(el => el.value), 'Gespeicherter neuer Stand von Konto A');
  await page.getByLabel('Titel', { exact: true }).fill('B übernimmt Aufgabe');
  await page.getByLabel('Gemeinsame Notizen / Maßnahmen / Aufgabenbeschreibung').fill('gemeinsam synthetisch bearbeitet');
  // Select B by its emulator UID; member ordering is intentionally unspecified.
  const accountB = await fetch('http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:lookup?key=demo-only-not-a-secret', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' }, body: JSON.stringify({ email: [emails[1]] }) }).then(response => response.json());
  const uidB = accountB.users?.[0]?.localId; assert.ok(uidB, 'Konto B muss im Auth-Emulator auffindbar sein');
  await page.getByLabel('Zuständiges Mitglied').selectOption({ label: `Synthetischer Nutzer ${uidB.slice(0, 8)}` });
  await page.getByRole('button', { name: 'Änderungen speichern' }).click();
  await page.getByRole('status').filter({ hasText: 'Arbeitsinhalt gespeichert' }).waitFor();
  await page.getByTestId('personal-area').getByText('B übernimmt Aufgabe').waitFor();
  const downloadPromise = page.waitForEvent('download'); await page.getByRole('button', { name: 'Eigene Daten exportieren' }).click();
  const download = await downloadPromise; assert.match(download.suggestedFilename(), /export\.json/);
  await page.getByRole('button', { name: 'Interesse widerrufen' }).click();
  await page.getByRole('status').filter({ hasText: 'Widerrufsereignis' }).waitFor();
  await page.getByRole('button', { name: 'Eigene Mitgliedschaft beenden' }).click();
  await page.getByRole('status').filter({ hasText: 'Mitgliedschaft wurde' }).waitFor();

  await signOut(); await account(emails[0], false);
  await page.getByRole('button', { name: 'Privaten Arbeitsbereich öffnen' }).click();
  await signOut(); await account(emails[2], false);
  await page.getByRole('button', { name: 'Beitritt anfragen' }).click();
  await page.getByRole('status').filter({ hasText: 'Beitrittsanfrage ist privat' }).waitFor();
  await signOut(); await account(emails[0], false);
  await page.getByRole('button', { name: 'Privaten Arbeitsbereich öffnen' }).click();
  await page.getByRole('button', { name: 'Annehmen' }).click();
  await page.getByRole('status').filter({ hasText: 'Mitglied wurde aufgenommen' }).waitFor();
  await page.getByRole('button', { name: /Stellvertretung setzen/ }).click();
  await page.getByRole('status').filter({ hasText: 'Stellvertretung wurde gesetzt' }).waitFor();
  await page.getByRole('button', { name: /Koordination übergeben/ }).click();
  await page.getByRole('status').filter({ hasText: 'Koordination wurde' }).waitFor();
  await page.getByRole('button', { name: 'Eigene Mitgliedschaft beenden' }).click();
  await signOut(); await account(emails[2], false);
  await page.getByRole('button', { name: 'Privaten Arbeitsbereich öffnen' }).click();
  await page.getByRole('button', { name: 'Arbeitsgruppe schließen und eigene Koordination beenden' }).click();
  await page.getByRole('status').filter({ hasText: 'wurde geschlossen' }).waitFor();
  for (const email of emails) {
    const lookup = await fetch('http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:lookup?key=demo-only-not-a-secret', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' }, body: JSON.stringify({ email: [email] }) }).then(response => response.json());
    const uid = lookup.users?.[0]?.localId; assert.ok(uid);
    assert.equal((await getLocalDocument(`users/${uid}/groupMemberships/${groupId}`)).fields.status, 'left');
  }
  await signOut(); await account(emails[1], false);
  await page.getByTestId('account-deletion').waitFor();
  page.once('dialog', dialog => dialog.accept());
  await page.getByTestId('delete-account').click();
  await page.getByText(/Löschlauf abgeschlossen/).waitFor({ timeout: 15000 });

  for (const viewport of [{ width: 1363, height: 936 }, { width: 768, height: 1024 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    const metrics = await page.evaluate(() => ({ inner: innerWidth, scroll: document.documentElement.scrollWidth }));
    assert.ok(metrics.scroll <= metrics.inner, `Horizontaler Überlauf bei ${viewport.width}px: ${JSON.stringify(metrics)}`);
  }
  // The third synthetic account deliberately probes the private membership
  // document. Rules must deny that get; the UI reports the expected denial.
  const expectedDenials = [
    'Dieser Gruppenarbeitsbereich ist nur für aktive Mitglieder zugänglich.',
    "false for 'get' @ L200"
  ];
  // A fresh synthetic deletion intentionally probes its absent resumable-job
  // document once; the emulator's REST API returns 404 to mean "not started".
  const initialDeletionLookup = failedResponses.filter(response => response.status === 404 && response.url.startsWith('http://127.0.0.1:8080/v1/projects/demo-bergedorf-gemeinsam/databases/(default)/documents/localAdmin/deletionJobs_'));
  assert.equal(initialDeletionLookup.length, 1, `Erwartet genau eine anfängliche, lokale 404-Abfrage des Lösch-Checkpoints: ${JSON.stringify(failedResponses)}`);
  const unexpectedResponses = failedResponses.filter(response => !initialDeletionLookup.includes(response));
  assert.deepEqual(unexpectedResponses, [], `Unerwartete HTTP-Fehler: ${JSON.stringify(unexpectedResponses)}`);
  const unexpectedErrors = consoleErrors.filter(error => !expectedDenials.some(expected => error.text.includes(expected)) && !(error.text.includes('404 (Not Found)') && error.location.url === initialDeletionLookup[0].url));
  assert.deepEqual(unexpectedErrors, [], `Unerwartete Browserfehler: ${JSON.stringify(unexpectedErrors)}; HTTP: ${JSON.stringify(failedResponses)}`);
  console.log('Playwright/Emulator: Drei synthetische Konten, parallel angemeldete Konten A/B mit Versionskonflikt, Entwurfserhalt und Neuladen, Interessen/Widerruf, Gruppenliste/Anfrage/Aufnahme, Rollenübergabe, unberechtigter Zugriff, Export, Austritt, Schließung, Kontolöschung und 3 Viewports bestanden.');
} finally {
  try { await browser?.close(); } finally { vite.kill('SIGTERM'); }
}
