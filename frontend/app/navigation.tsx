'use client';
import {historyOrigin} from '../lib/history-navigation.mjs';
import {createContext,useContext,useEffect,useState,useRef} from 'react';
export const RouteOverride=createContext<any>(null);
let adminReading:any=null;
export function adminReadingSession(){return adminReading&&history.state?.bgAdminRead===adminReading.token?adminReading:null}
export function openAdminReading(hash:string){initializeNavigation();if(!location.hash.startsWith('#verwaltung')||location.hash.startsWith('#verwaltung/lesefassung'))return navigate(hash);adminReading={origin:location.hash,index,scroll:window.scrollY,focus:document.activeElement,token:crypto.randomUUID(),hadDirty:!!dirty.size};navigate(hash,{preserve:true});}
export function returnToAdministration(){const s=adminReadingSession();if(!s)return navigate('#verwaltung');if(!warn())return;dirty.clear();history.go(s.index-index);}
function restoreAdminScroll(){const s=adminReading;if(s&&location.hash===s.origin&&!adminReadingSession())requestAnimationFrame(()=>requestAnimationFrame(()=>{s.focus?.isConnected&&s.focus.focus?.({preventScroll:true});window.scrollTo({top:s.scroll,behavior:'instant'})}));}

// @ts-ignore pure parser
import {parseRoute,listState,listHash} from '../lib/navigation.mjs';
let currentHash='',index=0,installed=false,restoring=false;const dirty=new Set<symbol>();
const warn=()=>!dirty.size||window.confirm('Nicht gespeicherte Eingaben gehen beim Ansichtswechsel verloren. Trotzdem wechseln?');
export function confirmLeave(){if(!warn())return false;dirty.clear();return true}
function storedScroll(hash:string){try{return Number(sessionStorage.getItem('bg-scroll:'+hash)||0)}catch{return 0}}
let restoringScroll=false,scrollTimer:any;
function rememberPosition(){if(restoringScroll||typeof window==='undefined')return;const y=window.scrollY||0;history.replaceState({...history.state,bgScroll:y},'');try{sessionStorage.setItem('bg-scroll:'+location.hash,String(y))}catch{}}
export function restorePosition(){if(typeof window==='undefined')return;const target=history.state?.bgScroll??storedScroll(location.hash);if(!target){window.scrollTo({top:0,behavior:'instant'});return}restoringScroll=true;const begin=Date.now();const apply=()=>{window.scrollTo({top:target,behavior:'instant'});if(Date.now()-begin<1600&&Math.abs(window.scrollY-target)>2){setTimeout(apply,60)}else restoringScroll=false};requestAnimationFrame(()=>requestAnimationFrame(apply));}
function notify(){window.dispatchEvent(new Event('bg-navigation'))}
export function navigate(hash:string,options:{replace?:boolean,scroll?:boolean,preserve?:boolean,restore?:boolean}={}){hash=hash.startsWith('#')?hash:'#'+hash;if(adminReadingSession()&&/^#verwaltung(?:[/?]|$)/.test(hash)&&!hash.startsWith('#verwaltung/lesefassung')&&!options.preserve){returnToAdministration();return}if(hash===location.hash){if(options.restore)restorePosition();return}rememberPosition();const viewChange=hash.split('?')[0]!==location.hash.split('?')[0];if(viewChange&&!options.preserve&&!warn())return;if(viewChange&&!options.preserve)dirty.clear();if(!options.replace)index++;history[options.replace?'replaceState':'pushState']({...history.state,bgIndex:index,bgAdminRead:options.preserve?adminReading?.token:history.state?.bgAdminRead,bgSaved:null,bgScroll:options.restore?storedScroll(hash):options.scroll===false?(window.scrollY||0):0,bgFrom:location.hash,bgMapView:viewChange?null:history.state?.bgMapView},'',hash);currentHash=hash;notify();if(options.restore)restorePosition();else if(options.scroll!==false)window.scrollTo({top:0,behavior:'instant'});}
export function initializeNavigation(){if(installed)return;installed=true;currentHash=location.hash;index=history.state?.bgIndex??0;history.replaceState({...history.state,bgIndex:index},'');if('scrollRestoration' in history)history.scrollRestoration='manual';window.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(rememberPosition,80)},{passive:true});window.addEventListener('pagehide',rememberPosition);restorePosition();
 window.addEventListener('beforeunload',e=>{if(dirty.size||adminReadingSession()?.hadDirty){e.preventDefault();e.returnValue=''}});
 window.addEventListener('popstate',()=>{const next=history.state?.bgIndex;if(restoring){restoring=false;return}const viewChange=location.hash.split('?')[0]!==currentHash.split('?')[0];const enteringRetainedReader=adminReading&&history.state?.bgAdminRead===adminReading.token&&currentHash===adminReading.origin;if(viewChange&&!enteringRetainedReader&&dirty.size&&!warn()){if(typeof next==='number'&&next!==index){restoring=true;history.go(index-next)}else history.replaceState({...history.state,bgIndex:index},'',currentHash);return}if(viewChange&&!enteringRetainedReader)dirty.clear();index=next??index;currentHash=location.hash;notify();restoreAdminScroll();restorePosition()});
 document.addEventListener('click',e=>{const a=(e.target as Element).closest?.('a[href^="#"]') as HTMLAnchorElement|null;if(!a||a.target&&a.target!=='_self'||e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let hash=a.getAttribute('href')!;if(/^#geschichte\/(?:orte(?:[/?]|$)|artikel\/)/.test(hash)&&!new URLSearchParams(hash.split('?')[1]||'').has('from')&&location.hash.startsWith('#geschichte'))hash+=(hash.includes('?')?'&':'?')+'from='+encodeURIComponent(historyOrigin(location.hash));if(document.getElementById(hash.slice(1)))return;e.preventDefault();navigate(hash)});
 // Native hash assignment from retained information pages is adopted without adding a second entry.
 window.addEventListener('hashchange',()=>{if(restoring)return;if(location.hash===currentHash)return;if(!warn()){history.replaceState({...history.state,bgIndex:index},'',currentHash);return}dirty.clear();currentHash=location.hash;index++;history.replaceState({...history.state,bgIndex:index},'');notify()});
}
export function useRoute(){const override=useContext(RouteOverride);const [route,setRoute]=useState(()=>parseRoute(installed?currentHash:''));useEffect(()=>{initializeNavigation();const sync=()=>setRoute(parseRoute(location.hash));sync();window.addEventListener('bg-navigation',sync);return()=>window.removeEventListener('bg-navigation',sync)},[]);return override||route}
export function registerUnsaved(){const key=Symbol();dirty.add(key);return()=>{dirty.delete(key)}}
export function useDirty(changed:boolean){useEffect(()=>changed?registerUnsaved():undefined,[changed]);}

// Adopt fresh server values only while a form is clean. A refresh must keep
// local edits, including edits in a different panel during another panel's save.
export function useServerDraft<T>(value:T){const [draft,setDraft]=useState(value),snapshot=JSON.stringify(value),previous=useRef(snapshot);useEffect(()=>{const before=previous.current;setDraft(current=>JSON.stringify(current)===before?value:current);previous.current=snapshot},[snapshot]);useDirty(JSON.stringify(draft)!==snapshot);return [draft,setDraft] as const}

// Canonical address after first successful save: same visited view, now with its persisted id.
export function addressSaved(path:string,message:string){dirty.clear();currentHash='#'+path;history.replaceState({...history.state,bgIndex:index,bgSaved:message},'',currentHash);notify()}

export function useListState(){const route=useRoute(),typing=useRef(false);useEffect(()=>{const end=()=>{typing.current=false};window.addEventListener('popstate',end);return()=>window.removeEventListener('popstate',end)},[]);const values=listState('#'+route.parts.map(encodeURIComponent).join('/')+(route.query?'?'+route.query:''));function update(patch:any,typed=false){const next=listHash(location.hash,patch);navigate(next,{replace:typed&&typing.current,scroll:false});typing.current=typed}return {values,update,endTyping:()=>{typing.current=false},hash:'#'+route.parts.map(encodeURIComponent).join('/')+(route.query?'?'+route.query:'')}}
