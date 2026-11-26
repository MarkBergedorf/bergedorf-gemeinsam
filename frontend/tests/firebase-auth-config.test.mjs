import test from 'node:test';
import assert from 'node:assert/strict';
import {hasFirebaseAuthConfig,firebaseAuthRequiredConfigKeys} from '../lib/firebase-auth-config.mjs';
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
 for(const action of ['createUserWithEmailAndPassword','sendEmailVerification','signInWithEmailAndPassword','sendPasswordResetEmail','signOut','verifyBeforeUpdateEmail','updatePassword','deleteUser'])assert(auth.includes(action),action);
 assert(account.includes('emailVerified'));
 assert.match(account,/minLength=\{mode==='register'\?12:undefined\}/);
 assert.match(account,/minLength=\{12\} required value=\{newPassword\}/);
 assert(account.includes('E-Mail-Adresse bestätigen'));
 assert(!/canAuthor|canAdmin|canModerate|setCustomUserClaims|customClaims/.test(auth+account));
 assert(!/localStorage|document\.cookie/.test(auth));
});

test('Kompakte mobile Navigation bietet Anmelden, Registrieren, Konto und Abmelden',()=>{
 const header=readFileSync(new URL('../app/site-header.tsx',import.meta.url),'utf8');
 const css=readFileSync(new URL('../app/globals.css',import.meta.url),'utf8');
 for(const label of ['Anmelden','Registrieren','Mein Konto','Abmelden'])assert(header.includes(label),label);
 assert.match(css,/@media\(max-width:1023px\)[^}]*mobile-auth-links/);
});
