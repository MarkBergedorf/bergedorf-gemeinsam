import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

const expectedProject = 'demo-bergedorf-gemeinsam';
if (process.env.GCLOUD_PROJECT !== expectedProject || !process.env.FIRESTORE_EMULATOR_HOST || !process.env.FIREBASE_AUTH_EMULATOR_HOST) {
  throw new Error('Lokaler Browser-Smoke-Test benötigt ausschließlich beide Emulatoren des Demo-Projekts.');
}
const child = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--base', '/', '--host', '127.0.0.1', '--port', '5179', '--strictPort'], { stdio: 'ignore' });
try {
  let page;
  for (let i = 0; i < 40; i++) {
    if (child.exitCode !== null) throw new Error(`Vite wurde vor dem lokalen Smoke-Test beendet (${child.exitCode}).`);
    try {
      page = await fetch('http://127.0.0.1:5179/local/phase32/index.html');
      if (page.ok) break;
    } catch {}
    await delay(250);
  }
  if (!page?.ok) throw new Error('Lokale Emulator-Vorschau war unter /local/phase32/index.html nicht erreichbar.');
  const html = await page.text();
  if (!html.includes('Lokale Gruppenwerkstatt') || !html.includes('noindex')) throw new Error('Lokale HTML-Vorschau ist unvollständig oder ohne noindex.');
  const module = await fetch('http://127.0.0.1:5179/local/phase32/main.tsx');
  const source = await module.text();
  if (!module.ok || !source.includes('connectFirestoreEmulator') || !source.includes('connectAuthEmulator')) throw new Error('Vorschau-JavaScript lädt nicht oder verbindet nicht beide Emulatoren.');
  console.log('Lokale Vorschau-HTTP-Smoke-Test erfolgreich: HTML und transformiertes Emulator-JavaScript sind erreichbar.');
} finally {
  child.kill('SIGTERM');
}
