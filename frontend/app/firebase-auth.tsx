'use client';
import React,{createContext,useContext,useEffect,useMemo,useState} from 'react';
import type {Auth,User} from 'firebase/auth';
// @ts-ignore shared configuration validator
import {hasFirebaseAuthConfig} from '../lib/firebase-auth-config.mjs';

type AuthValue={
 configured:boolean;ready:boolean;user:User|null;error:string;
 begin:(rememberOnDevice?:boolean)=>Promise<void>;
 signIn:(email:string,password:string)=>Promise<void>;
 register:(email:string,password:string)=>Promise<User>;
 sendEmailLink:(email:string)=>Promise<void>;
 isEmailSignInLink:()=>Promise<boolean>;
 completeEmailLink:(email:string)=>Promise<User>;
 requestReauthenticationLink:(user:User,purpose:'changePassword'|'changeEmail'|'deleteAccount')=>Promise<void>;
 pendingReauthenticationPurpose:(user?:User|null)=>'changePassword'|'changeEmail'|'deleteAccount'|null;
 reauthenticateWithEmailLink:(user:User,email:string,emailLink:string)=>Promise<'changePassword'|'changeEmail'|'deleteAccount'>;
 resetPassword:(email:string)=>Promise<void>;
 changePassword:(user:User,password:string)=>Promise<void>;
 changeEmail:(user:User,email:string,password:string)=>Promise<void>;
 changeEmailWithCurrentSession:(user:User,email:string)=>Promise<void>;
 deleteAccount:(user:User,password:string)=>Promise<void>;
 deleteAccountWithCurrentSession:(user:User)=>Promise<void>;
 signOut:()=>Promise<void>;
 sendVerification:(user:User)=>Promise<void>;
 refreshUser:(user:User)=>Promise<void>;
};
const AuthContext=createContext<AuthValue|null>(null);
type FirebaseImportMeta=ImportMeta&{env:{VITE_FIREBASE_API_KEY?:string;VITE_FIREBASE_AUTH_DOMAIN?:string;VITE_FIREBASE_PROJECT_ID?:string;VITE_FIREBASE_APP_ID?:string}};
const firebaseEnv=(import.meta as FirebaseImportMeta).env;
const authConfig={apiKey:firebaseEnv.VITE_FIREBASE_API_KEY,authDomain:firebaseEnv.VITE_FIREBASE_AUTH_DOMAIN,projectId:firebaseEnv.VITE_FIREBASE_PROJECT_ID,appId:firebaseEnv.VITE_FIREBASE_APP_ID};
export const firebaseAuthConfigured=hasFirebaseAuthConfig({VITE_FIREBASE_API_KEY:authConfig.apiKey,VITE_FIREBASE_AUTH_DOMAIN:authConfig.authDomain,VITE_FIREBASE_PROJECT_ID:authConfig.projectId,VITE_FIREBASE_APP_ID:authConfig.appId});
const configured=firebaseAuthConfigured;
const localSessionKey='bg-firebase-auth-remembered';
const rememberChoiceKey='bg-firebase-auth-remember-choice';
const emailLinkKey='bg-firebase-email-link-address';
const reauthenticationKey='bg-firebase-auth-reauthentication';
let clientAuthPromise:Promise<Auth>|null=null;
let clientAuthRemember:boolean|null=null;

async function clientAuth(rememberOnDevice?:boolean){
 if(!configured)throw Error('Firebase configuration missing');
 const appSdk=await import('firebase/app'),authSdk=await import('firebase/auth');
 if(!clientAuthPromise){
  clientAuthPromise=(async()=>{
   const app=appSdk.getApps().find(item=>item.name==='bergedorf-public-auth')||appSdk.initializeApp(authConfig,'bergedorf-public-auth');
   let remember=rememberOnDevice??false;try{if(rememberOnDevice===undefined)remember=localStorage.getItem(localSessionKey)==='1'}catch{}
   // Supplying persistence during initialization prevents Firebase's default
   // persistence fallback from inspecting additional storage mechanisms.
   clientAuthRemember=remember;
   return authSdk.initializeAuth(app,{persistence:remember?authSdk.browserLocalPersistence:authSdk.browserSessionPersistence});
  })();
 }
 const auth=await clientAuthPromise;
 if(rememberOnDevice!==undefined&&clientAuthRemember!==rememberOnDevice){await authSdk.setPersistence(auth,rememberOnDevice?authSdk.browserLocalPersistence:authSdk.browserSessionPersistence);clientAuthRemember=rememberOnDevice}
 return auth;
}

function actionUrl(hash:string){return location.origin+location.pathname+hash}
export function useFirebaseAuth(){const value=useContext(AuthContext);if(!value)throw new Error('AuthProvider missing');return value}
export function AuthProvider({children}:{children:React.ReactNode}){
 const [ready,setReady]=useState(false),[user,setUser]=useState<User|null>(null),[error,setError]=useState('');
 // Loading this provider must not initialize Firebase or restore a stored session.
 // The account service starts only after the visitor explicitly opens it.
 const [requested,setRequested]=useState(false);
 const [signOutFn,setSignOutFn]=useState<(()=>Promise<void>)|null>(null),[loadError,setLoadError]=useState('');
 useEffect(()=>{if(!configured||!requested)return;let active=true,unsubscribe=()=>{};(async()=>{try{const authSdk=await import('firebase/auth'),auth=await clientAuth();if(!active)return;setSignOutFn(()=>()=>authSdk.signOut(auth));unsubscribe=authSdk.onAuthStateChanged(auth,next=>{if(!active)return;if(next){try{const choice=sessionStorage.getItem(rememberChoiceKey);if(choice==='1')localStorage.setItem(localSessionKey,'1');else if(choice==='0')localStorage.removeItem(localSessionKey);if(choice!==null)sessionStorage.removeItem(rememberChoiceKey)}catch{}}setUser(next);setReady(true);setError('')},()=>{if(active){setUser(null);setReady(true);setError('Der Anmeldestatus konnte nicht geladen werden. Bitte laden Sie die Seite erneut.')}})}catch{if(active){setReady(true);setLoadError('Der Anmeldedienst ist derzeit nicht erreichbar. Bitte versuchen Sie es später erneut.')}}})();return()=>{active=false;unsubscribe()}},[requested]);
 const value=useMemo<AuthValue>(()=>({configured,ready,user,error:error||loadError,
  begin:async(rememberOnDevice)=>{if(!configured){setError('Die Anmeldung ist noch nicht eingerichtet.');return}try{let keep=rememberOnDevice??false;try{if(rememberOnDevice===undefined)keep=sessionStorage.getItem(rememberChoiceKey)==='1'||(sessionStorage.getItem(rememberChoiceKey)===null&&localStorage.getItem(localSessionKey)==='1');sessionStorage.setItem(rememberChoiceKey,keep?'1':'0')}catch{}await clientAuth(keep);setLoadError('');setRequested(true)}catch{setLoadError('Der Anmeldedienst konnte nicht geöffnet werden. Bitte prüfen Sie Ihre Browsereinstellungen und versuchen Sie es erneut.')}},
  signIn:async(email,password)=>{const a=await clientAuth(),sdk=await import('firebase/auth');await sdk.signInWithEmailAndPassword(a,email,password)},
  register:async(email,password)=>{const a=await clientAuth(),sdk=await import('firebase/auth');const credential=await sdk.createUserWithEmailAndPassword(a,email,password);await sdk.sendEmailVerification(credential.user,{url:actionUrl('#anmelden'),handleCodeInApp:false});return credential.user},
  sendEmailLink:async email=>{const a=await clientAuth(),sdk=await import('firebase/auth');await sdk.sendSignInLinkToEmail(a,email,{url:actionUrl('#anmelden'),handleCodeInApp:true});try{sessionStorage.setItem(emailLinkKey,email)}catch{}},
  isEmailSignInLink:async()=>{const a=await clientAuth(),sdk=await import('firebase/auth');return sdk.isSignInWithEmailLink(a,location.href)},
  completeEmailLink:async email=>{const a=await clientAuth(),sdk=await import('firebase/auth');if(!sdk.isSignInWithEmailLink(a,location.href))throw Error('Der Anmeldelink ist ungültig oder abgelaufen. Fordern Sie bitte einen neuen Link an.');const credential=await sdk.signInWithEmailLink(a,email,location.href);try{sessionStorage.removeItem(emailLinkKey);sessionStorage.removeItem(reauthenticationKey)}catch{}return credential.user},
  requestReauthenticationLink:async(account,purpose)=>{if(!account.email)throw Error('Für dieses Konto ist keine bestätigte E-Mail-Adresse verfügbar.');const a=await clientAuth(),sdk=await import('firebase/auth');await sdk.sendSignInLinkToEmail(a,account.email,{url:actionUrl('#konto'),handleCodeInApp:true});try{sessionStorage.setItem(emailLinkKey,account.email);sessionStorage.setItem(reauthenticationKey,JSON.stringify({uid:account.uid,purpose}))}catch{}},
  pendingReauthenticationPurpose:account=>{try{const value=JSON.parse(sessionStorage.getItem(reauthenticationKey)||'null');if(!value||!['changePassword','changeEmail','deleteAccount'].includes(value.purpose))return null;if(account&&value.uid!==account.uid)return null;return value.purpose}catch{return null}},
  reauthenticateWithEmailLink:async(account,email,emailLink)=>{const value=JSON.parse(sessionStorage.getItem(reauthenticationKey)||'null');if(!value||value.uid!==account.uid||!['changePassword','changeEmail','deleteAccount'].includes(value.purpose))throw Error('Die erneute Anmeldung wurde nicht in diesem Browserfenster angefordert.');if(!account.email||email.trim().toLowerCase()!==account.email.trim().toLowerCase())throw Error('Die E-Mail-Adresse muss mit der Adresse dieses Benutzerkontos übereinstimmen.');const a=await clientAuth(),sdk=await import('firebase/auth');if(!sdk.isSignInWithEmailLink(a,emailLink))throw Error('Der Bestätigungslink ist ungültig oder abgelaufen. Fordern Sie bitte einen neuen Link an.');const credential=sdk.EmailAuthProvider.credentialWithLink(email.trim(),emailLink);await sdk.reauthenticateWithCredential(account,credential);try{sessionStorage.removeItem(emailLinkKey);sessionStorage.removeItem(reauthenticationKey)}catch{}return value.purpose},
  resetPassword:async email=>{const a=await clientAuth(),sdk=await import('firebase/auth');await sdk.sendPasswordResetEmail(a,email,{url:actionUrl('#anmelden'),handleCodeInApp:false})},
  changePassword:async(account,password)=>{const sdk=await import('firebase/auth');await sdk.updatePassword(account,password)},
  changeEmail:async(account,email,password)=>{const sdk=await import('firebase/auth');const credential=sdk.EmailAuthProvider.credential(account.email||'',password);await sdk.reauthenticateWithCredential(account,credential);await sdk.verifyBeforeUpdateEmail(account,email,{url:actionUrl('#konto'),handleCodeInApp:false})},
  changeEmailWithCurrentSession:async(account,email)=>{const sdk=await import('firebase/auth');await sdk.verifyBeforeUpdateEmail(account,email,{url:actionUrl('#konto'),handleCodeInApp:false})},
  deleteAccount:async(account,password)=>{const sdk=await import('firebase/auth');const credential=sdk.EmailAuthProvider.credential(account.email||'',password);await sdk.reauthenticateWithCredential(account,credential);await sdk.deleteUser(account)},
  deleteAccountWithCurrentSession:async account=>{const sdk=await import('firebase/auth');await sdk.deleteUser(account)},
  signOut:async()=>{await signOutFn?.();try{sessionStorage.removeItem(rememberChoiceKey);sessionStorage.removeItem(emailLinkKey);sessionStorage.removeItem(reauthenticationKey);localStorage.removeItem(localSessionKey)}catch{}setUser(null);setRequested(false);setReady(false)},
  sendVerification:async account=>{const sdk=await import('firebase/auth');await sdk.sendEmailVerification(account,{url:actionUrl('#anmelden'),handleCodeInApp:false})},
  refreshUser:async account=>{const sdk=await import('firebase/auth');await sdk.reload(account);setUser(account)}
 }),[ready,user,error,loadError,signOutFn]);
 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
