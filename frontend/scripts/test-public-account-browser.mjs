import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import chromiumBinary from '@sparticuz/chromium';
import { chromium } from '@playwright/test';
import { initializeApp, applicationDefault, deleteApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const projectId = 'demo-bergedorf-gemeinsam';
if (process.env.GCLOUD_PROJECT !== projectId || !process.env.FIRESTORE_EMULATOR_HOST || !process.env.FIREBASE_AUTH_EMULATOR_HOST) throw new Error('Dieser Browserlauf ist nur mit den lokalen Auth- und Firestore-Emulatoren zulässig.');
const app = initializeApp({ credential: applicationDefault(), projectId }, 'public-account-test-' + Date.now());
const auth = getAuth(app), db = getFirestore(app);
const email = 'public-account-' + Date.now() + '@example.test';
const user = await auth.createUser({ email, password: 'synthetic-account-password', emailVerified: true });
const groupId = 'public-account-group-' + Date.now(), taskId = 'public-account-task';
await db.doc('platformConfig/participation').set({ enabled: true });
await db.doc('users/' + user.uid + '/interests/projekt-einsamkeitslotsen').set({ projectId: 'projekt-einsamkeitslotsen', types: ['interested'], status: 'active' });
await db.doc('users/' + user.uid + '/groupMemberships/' + groupId).set({ groupId, role: 'coordinator', status: 'active' });
await db.doc('users/' + user.uid + '/joinRequests/' + groupId).set({ groupId, status: 'accepted', createdAt: FieldValue.serverTimestamp() });
await db.doc('users/' + user.uid + '/workItemRefs/' + groupId + '_' + taskId).set({ uid: user.uid, groupId, itemId: taskId, createdBy: true, assignee: true, updatedAt: FieldValue.serverTimestamp() });
await db.doc('groups/' + groupId).set({ projectId: 'projekt-einsamkeitslotsen', title: 'Synthetische Gruppe', description: 'synthetic', publicDescription: 'synthetic', status: 'forming', createdBy: user.uid, coordinatorUid: user.uid, listed: true, seeking: 'members', createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp(), schemaVersion: 1 });
await db.doc('groups/' + groupId + '/members/' + user.uid).set({ role: 'coordinator', status: 'active', joinedAt: FieldValue.serverTimestamp() });
await db.doc('groupDirectory/' + groupId).set({ projectId: 'projekt-einsamkeitslotsen', title: 'Synthetische Gruppe', description: 'synthetic', status: 'forming', seeking: 'members', listed: true, updatedAt: FieldValue.serverTimestamp() });
await db.doc('consentEvents/public-account-listing-' + user.uid).set({ uid: user.uid, purpose: 'public-group-listing', subjectId: groupId, decision: 'granted', occurredAt: FieldValue.serverTimestamp() });
await db.doc('groups/' + groupId + '/workItems/' + taskId).set({ kind: 'task', title: 'Synthetische Testaufgabe', body: 'Synthetischer Text', status: 'open', createdBy: user.uid, assigneeUid: user.uid, version: 1, updatedAt: FieldValue.serverTimestamp() });
await db.doc('consentEvents/public-account-consent-' + user.uid).set({ uid: user.uid, purpose: 'participation', subjectId: 'projekt-einsamkeitslotsen', decision: 'granted', occurredAt: FieldValue.serverTimestamp() });

const vite = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--mode', 'production', '--base', '/', '--host', '127.0.0.1', '--port', '5174', '--strictPort'], {
  stdio: 'ignore',
  env: {
    ...process.env,
    VITE_PARTICIPATION_ENABLED: 'true',
    VITE_FIREBASE_API_KEY: 'demo-only-not-a-secret',
    VITE_FIREBASE_AUTH_DOMAIN: 'localhost',
    VITE_FIREBASE_PROJECT_ID: projectId,
    VITE_FIREBASE_APP_ID: '1:000000000000:web:synthetic-account-test',
    VITE_FIREBASE_AUTH_EMULATOR_HOST: 'http://127.0.0.1:9099',
    VITE_FIRESTORE_EMULATOR_HOST: 'http://127.0.0.1:8080'
  }
});
let browser;
try {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    if (vite.exitCode !== null) throw new Error('Vite wurde vor dem Konto-Browserlauf beendet.');
    try { if ((await fetch('http://127.0.0.1:5174/')).ok) { ready = true; break; } } catch {}
    await delay(250);
  }
  if (!ready) throw new Error('Öffentliche Website-Vorschau wurde lokal nicht erreichbar.');
  browser = await chromium.launch({ executablePath: await chromiumBinary.executablePath(), headless: true, args: chromiumBinary.args });
  const page = await browser.newPage({ viewport: { width: 1363, height: 936 } });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => { throw error; });
  await page.goto('http://127.0.0.1:5174/#konto', { waitUntil: 'domcontentloaded' });
  await page.getByRole('heading', { name: 'Anmelden' }).waitFor();
  await page.getByLabel(/möchte den Anmeldedienst jetzt öffnen/).check();
  await page.getByRole('button', { name: 'Anmeldedienst öffnen' }).click();
  await page.locator('form.auth-form input[type="email"]').fill(email);
  await page.locator('form.auth-form input[type="password"]').fill('synthetic-account-password');
  await page.getByRole('button', { name: 'Mit E-Mail und Passwort anmelden' }).click();
  await page.getByRole('heading', { name: 'Mein Konto' }).waitFor();
  await page.getByRole('button', { name: 'Meine Übersicht laden' }).click();
  try { await page.getByText('Meine Interessen', { exact: true }).waitFor({ timeout: 7000 }); }
  catch { throw new Error('Beteiligungsübersicht nicht geladen. Meldungen: ' + (await page.locator('[role="alert"]').allTextContents()).join(' | ') + ' Console: ' + errors.join(' | ')); }
  await page.getByText('Einsamkeitslotsen für Bergedorf: interested · active').waitFor();
  await page.getByText('Synthetische Gruppe · coordinator · active').waitFor();
  await page.getByText(groupId + ' · accepted').waitFor();
  await page.getByText('Synthetische Testaufgabe · open').waitFor();
  await page.getByText('participation · granted').waitFor();
  await page.getByRole('button', { name: 'Interesse widerrufen' }).click();
  await page.getByRole('status').filter({ hasText: 'Interessenbekundung wurde' }).waitFor();
  await page.getByText('Einsamkeitslotsen für Bergedorf: interested · withdrawn').waitFor();
  await page.getByRole('button', { name: 'Öffentliche Gruppenbeschreibung zurückziehen' }).click();
  await page.getByRole('status').filter({ hasText: 'Gruppenbeschreibung wurde zurückgezogen' }).waitFor();
  assert.equal((await db.doc('groups/' + groupId).get()).get('listed'), false);
  assert.equal((await db.doc('groupDirectory/' + groupId).get()).exists, false);
  for (const viewport of [{ width: 1363, height: 936 }, { width: 768, height: 1024 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    await page.waitForTimeout(100);
    const dimensions = await page.evaluate(() => ({
      width: innerWidth,
      scroll: document.documentElement.scrollWidth,
      offenders: [...document.querySelectorAll('body *')].map(el => {
        const rect = el.getBoundingClientRect();
        return { tag: el.tagName, className: String(el.className || ''), right: Math.round(rect.right), width: Math.round(rect.width), src: el instanceof HTMLImageElement ? el.currentSrc : '', css: el instanceof HTMLImageElement ? getComputedStyle(el).cssText : '', text: (el.textContent || '').trim().slice(0, 60) };
      }).filter(el => el.right > innerWidth + 1).slice(0, 8)
    }));
    assert.ok(dimensions.scroll <= dimensions.width + 1, 'Kontoansicht darf bei ' + viewport.width + ' px keinen horizontalen Seitenüberlauf haben: ' + JSON.stringify(dimensions));
    await page.getByRole('heading', { name: 'Mein Konto' }).waitFor();
  }
  console.log('Kontointegration mit synthetischem Emulator-Konto erfolgreich; Interessen, Gruppen, Anfragen, Aufgaben, Einwilligungen und drei Viewports geprüft.');
} finally {
  await browser?.close();
  vite.kill('SIGTERM');
  await deleteApp(app);
}
