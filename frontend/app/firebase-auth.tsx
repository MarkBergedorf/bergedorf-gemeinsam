'use client';
import React,{createContext,useContext,useEffect,useMemo,useState} from 'react';
import type {Auth,User} from 'firebase/auth';
// @ts-ignore shared configuration validator
import {hasFirebaseAuthConfig} from '../lib/firebase-auth-config.mjs';

type AuthValue={configured:boolean;ready:boolean;user:User|null;error:string;begin:()=>Promise<void>;signIn:(email:string,password:string)=>Promise<void>;register:(email:string,password:string)=>Promise<User>;resetPassword:(email:string)=>Promise<void>;changePassword:(user:User,password:string)=>Promise<void>;changeEmail:(user:User,email:string,password:string)=>Promise<void>;deleteAccount:(user:User,password:string)=>Promise<void>;signOut:()=>Promise<void>;sendVerification:(user:User)=>Promise<void>;refreshUser:(user:User)=>Promise<void>};
const AuthContext=createContext<AuthValue|null>(null);
type FirebaseImportMeta=ImportMeta&{env:{VITE_FIREBASE_API_KEY?:string;VITE_FIREBASE_AUTH_DOMAIN?:string;VITE_FIREBASE_PROJECT_ID?:string;VITE_FIREBASE_APP_ID?:string}};
const firebaseEnv=(import.meta as FirebaseImportMeta).env;
const authConfig={apiKey:firebaseEnv.VITE_FIREBASE_API_KEY,authDomain:firebaseEnv.VITE_FIREBASE_AUTH_DOMAIN,projectId:firebaseEnv.VITE_FIREBASE_PROJECT_ID,appId:firebaseEnv.VITE_FIREBASE_APP_ID};
export const firebaseAuthConfigured=hasFirebaseAuthConfig({VITE_FIREBASE_API_KEY:authConfig.apiKey,VITE_FIREBASE_AUTH_DOMAIN:authConfig.authDomain,VITE_FIREBASE_PROJECT_ID:authConfig.projectId,VITE_FIREBASE_APP_ID:authConfig.appId});
const configured=firebaseAuthConfigured;
const sessionKey='bg-firebase-auth-session';
let clientAuthPromise:Promise<Auth>|null=null;
async function clientAuth(){if(!configured)throw Error('Firebase configuration missing');if(!clientAuthPromise)clientAuthPromise=(async()=>{const appSdk=await import('firebase/app'),authSdk=await import('firebase/auth');const app=appSdk.getApps().find(item=>item.name==='bergedorf-public-auth')||appSdk.initializeApp(authConfig,'bergedorf-public-auth');const auth=authSdk.getAuth(app);await authSdk.setPersistence(auth,authSdk.browserSessionPersistence);return auth})();return clientAuthPromise}

export function useFirebaseAuth(){const value=useContext(AuthContext);if(!value)throw new Error('AuthProvider missing');return value}
export function AuthProvider({children}:{children:React.ReactNode}){
 const [ready,setReady]=useState(false),[user,setUser]=useState<User|null>(null),[error,setError]=useState('');
 const [requested,setRequested]=useState(()=>{try{return typeof window!=='undefined'&&sessionStorage.getItem(sessionKey)==='1'}catch{return false}});
 const [signOutFn,setSignOutFn]=useState<(()=>Promise<void>)|null>(null),[loadError,setLoadError]=useState('');
 useEffect(()=>{if(!configured||!requested)return;let active=true,unsubscribe=()=>{};(async()=>{try{const authSdk=await import('firebase/auth'),auth=await clientAuth();if(!active)return;setSignOutFn(()=>()=>authSdk.signOut(auth));unsubscribe=authSdk.onAuthStateChanged(auth,next=>{if(!active)return;setUser(next);setReady(true);setError('')},()=>{if(active){setUser(null);setReady(true);setError('Der Anmeldestatus konnte nicht geladen werden. Bitte laden Sie die Seite erneut.')}})}catch{if(active){setReady(true);setLoadError('Der Anmeldedienst ist derzeit nicht erreichbar. Bitte versuchen Sie es später erneut.')}}})();return()=>{active=false;unsubscribe()}},[requested]);
 const value=useMemo<AuthValue>(()=>({configured,ready,user,error:error||loadError,
  begin:async()=>{if(!configured){setError('Die Anmeldung wurde noch nicht eingerichtet.');return}try{sessionStorage.setItem(sessionKey,'1')}catch{}setLoadError('');setRequested(true)},
  signIn:async(email,password)=>{const a=await clientAuth(),sdk=await import('firebase/auth');await sdk.signInWithEmailAndPassword(a,email,password)},
  register:async(email,password)=>{const a=await clientAuth(),sdk=await import('firebase/auth');const credential=await sdk.createUserWithEmailAndPassword(a,email,password);await sdk.sendEmailVerification(credential.user,{url:location.origin+location.pathname+'#anmelden',handleCodeInApp:false});return credential.user},
  resetPassword:async email=>{const a=await clientAuth(),sdk=await import('firebase/auth');await sdk.sendPasswordResetEmail(a,email,{url:location.origin+location.pathname+'#anmelden',handleCodeInApp:false})},
  changePassword:async(account,password)=>{const sdk=await import('firebase/auth');await sdk.updatePassword(account,password)},
  changeEmail:async(account,email,password)=>{const sdk=await import('firebase/auth');const credential=sdk.EmailAuthProvider.credential(account.email||'',password);await sdk.reauthenticateWithCredential(account,credential);await sdk.verifyBeforeUpdateEmail(account,email,{url:location.origin+location.pathname+'#konto',handleCodeInApp:false})},
  deleteAccount:async(account,password)=>{const sdk=await import('firebase/auth');const credential=sdk.EmailAuthProvider.credential(account.email||'',password);await sdk.reauthenticateWithCredential(account,credential);await sdk.deleteUser(account)},
  signOut:async()=>{await signOutFn?.();try{sessionStorage.removeItem(sessionKey)}catch{}setUser(null);setRequested(false);setReady(false)},
  sendVerification:async account=>{const sdk=await import('firebase/auth');await sdk.sendEmailVerification(account,{url:location.origin+location.pathname+'#anmelden',handleCodeInApp:false})},
  refreshUser:async account=>{const sdk=await import('firebase/auth');await sdk.reload(account);setUser(account)}
 }),[ready,user,error,loadError,signOutFn]);
 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
