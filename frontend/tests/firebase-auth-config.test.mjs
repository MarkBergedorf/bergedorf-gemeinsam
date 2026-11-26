import test from 'node:test';
import assert from 'node:assert/strict';
import {hasFirebaseAuthConfig,firebaseAuthRequiredConfigKeys} from '../lib/firebase-auth-config.mjs';
import {dailyEmailLinkQuotaMessage,isDailyEmailLinkQuotaError} from '../lib/firebase-auth-flow.mjs';
import {readFileSync} from 'node:fs';

test('Firebase Authentication bleibt bei fehlender Projektkonfiguration aus',()=>{
 assert.equal(hasFirebaseAuthConfig({}),false);
 assert.equal(hasFirebaseAuthConfig(Object.fromEntries(firebaseAuthRequiredConfigKeys.map(key=>[key,'  ']))),false);
});

test('Firebase Authentication wird nur mit allen öffentlichen Projektwerten konfiguriert',()=>{
 const values=Object.fromEntries(firebaseAuthRequiredConfigKeys.map(key=>[key,'configured-value']));
 assert.equal(hasFirebaseAuthConfig(values),true);
 for(const key of firebaseAuthRequiredConfigKeys){const incomplete={...values};delete incomplete[key];assert.equal(hasFirebaseAuthConfig(incomplete),false,key)}
});

test('Firebase-Konfiguration erfordert keine privilegierten Dienstkontodaten',()=>{
 assert.deepEqual(firebaseAuthRequiredConfigKeys,['VITE_FIREBASE_API_KEY','VITE_FIREBASE_AUTH_DOMAIN','VITE_FIREBASE_PROJECT_ID','VITE_FIREBASE_APP_ID']);
 assert.equal(firebaseAuthRequiredConfigKeys.some(key=>/PRIVATE|SECRET|SERVICE_ACCOUNT|ADMIN/i.test(key)),false);
});

test('Kontoabläufe nutzen Firebase Auth und vergeben keine Beitrags- oder Administrationsrechte',()=>{
 const auth=readFileSync(new URL('../app/firebase-auth.tsx',import.meta.url),'utf8');
 const account=readFileSync(new URL('../app/firebase-account.tsx',import.meta.url),'utf8');
 for(const action of ['createUserWithEmailAndPassword','sendEmailVerification','signInWithEmailAndPassword','sendSignInLinkToEmail','isSignInWithEmailLink','signInWithEmailLink','sendPasswordResetEmail','signOut','verifyBeforeUpdateEmail','updatePassword','deleteUser'])assert(auth.includes(action),action);
 assert(account.includes('emailVerified'));
 assert.match(account,/minLength=\{mode==='register'\?12:undefined\}/);
 assert.match(account,/minLength=\{12\} required value=\{newPassword\}/);
 assert(account.includes('E-Mail-Adresse bestätigen'));
 assert(account.includes("accessType==='private'"));
 assert(account.includes("accessType==='organization'"));
 assert(account.includes('Passwortloser E-Mail-Link'));
 assert(account.includes('Konto mit Passwort erstellen'));
 assert(account.includes('Passwort einrichten oder ändern'));
 assert(!account.includes('providerData'));
 assert(account.includes('auth/quota-exceeded'));
 assert(account.includes('dailyEmailLinkQuotaMessage'));
 assert(account.includes('Auf diesem Gerät angemeldet bleiben'));
 assert(!/canAuthor|canAdmin|canModerate|setCustomUserClaims|customClaims/.test(auth+account));
 assert(auth.includes('browserLocalPersistence')&&auth.includes('browserSessionPersistence'));
 assert(auth.includes('bg-firebase-email-link-address'));
 assert(auth.includes('EmailAuthProvider.credentialWithLink'));
 assert(auth.includes('reauthenticateWithCredential(account,credential)'));
 assert(auth.includes('requestReauthenticationLink'));
 assert(auth.includes('deleteAccountWithCurrentSession'));
 assert(account.includes('Bereits registriert: anmelden oder Passwort zurücksetzen'));
 assert(account.includes('Erneut per E-Mail-Link bestätigen'));
 assert.match(account,/disabled=\{busy\|\|!confirmDelete\}/);
});

test('Tageslimit für E-Mail-Anmeldelinks führt ausschließlich beim eindeutigen Quota-Fehler zum Passwort-Fallback',()=>{
 assert.equal(isDailyEmailLinkQuotaError({code:'auth/quota-exceeded'}),true);
 assert.equal(isDailyEmailLinkQuotaError({code:'QUOTA_EXCEEDED'}),true);
 assert.equal(isDailyEmailLinkQuotaError({code:'auth/too-many-requests'}),false);
 assert.match(dailyEmailLinkQuotaMessage,/E-Mail-Adresse und Passwort/);
 assert.match(dailyEmailLinkQuotaMessage,/sobald Firebase das Tageskontingent erneuert hat/);
 assert.doesNotMatch(dailyEmailLinkQuotaMessage,/\b(?:um|gegen)\s+\d{1,2}[:.]\d{2}\b/i);
});

test('Benachrichtigungswarteliste wird nicht in die Authentifizierung integriert',()=>{
 const auth=readFileSync(new URL('../app/firebase-auth.tsx',import.meta.url),'utf8');
 const account=readFileSync(new URL('../app/firebase-account.tsx',import.meta.url),'utf8');
 assert(!/notifyWhenAvailable|quotaWaitlist|Kontingentbenachrichtigung|warteliste/i.test(auth+account));
});

test('Kompakte mobile Navigation bietet Anmelden, Registrieren, Konto und Abmelden',()=>{
 const header=readFileSync(new URL('../app/site-header.tsx',import.meta.url),'utf8');
 const css=readFileSync(new URL('../app/globals.css',import.meta.url),'utf8');
 for(const label of ['Anmelden','Registrieren','Mein Konto','Abmelden'])assert(header.includes(label),label);
 assert.match(css,/@media\(max-width:1023px\)[^}]*mobile-auth-links/);
});

test('Wechsel der direkten Kontoroute schaltet Anmeldung und Registrierung passend um',()=>{
 const account=readFileSync(new URL('../app/firebase-account.tsx',import.meta.url),'utf8');
 assert.match(account,/useEffect\(\(\)=>\{setMode\(route\.page==='registrieren'\?'register':'login'\)\},\[route\.page\]\)/);
});

test('Datenschutzhinweis ordnet Firebase Authentication den Cloud-Bedingungen korrekt zu',()=>{
 const privacy=readFileSync(new URL('../pages/privacy.tsx',import.meta.url),'utf8');
 const setup=readFileSync(new URL('../FIREBASE_AUTH_SETUP.md',import.meta.url),'utf8');
 assert(privacy.includes('unter den Google-Cloud-Plattformbedingungen'));
 assert(privacy.includes('https://cloud.google.com/terms/data-processing-addendum'));
 assert(setup.includes('not only in notify mode'));
 assert(setup.includes('trade, business, craft, or profession'));
});
