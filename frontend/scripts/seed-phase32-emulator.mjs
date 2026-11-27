import { initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { doc, setDoc } from 'firebase/firestore';

const expectedProject = 'demo-bergedorf-gemeinsam';
const project = process.env.GCLOUD_PROJECT;
const host = process.env.FIRESTORE_EMULATOR_HOST;
if (project !== expectedProject || host !== '127.0.0.1:8080' && host !== 'localhost:8080') {
  throw new Error('Phase-32-Vorschau verweigert Start: ausschließlich das lokale Demo-Projekt und Firestore auf Port 8080 sind erlaubt.');
}
const env = await initializeTestEnvironment({ projectId: expectedProject });
try {
  await env.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), 'platformConfig/participation'), { enabled: true });
  });
} finally {
  await env.cleanup();
}
console.log('Lokaler Beteiligungs-Not-Aus für das Demo-Projekt aktiviert; keine Produktionsverbindung.');
