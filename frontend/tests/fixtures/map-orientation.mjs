import assert from 'node:assert/strict';import {createHash} from 'node:crypto';import {readFileSync} from 'node:fs';import {execFileSync} from 'node:child_process';
import {withoutAuftrag18} from './auftrag18.mjs';
import {withoutPr68CopyCleanup} from './pr68-copy-cleanup.mjs';
const changes=JSON.parse(readFileSync(new URL('./map-orientation-authorized-changes.json',import.meta.url),'utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const laterTaskChanges={
 'frontend/app/history-map-legend.tsx':'148dddc40f10b8ca3e592bed92ab352aadad5c9c7540f128fd5bcc0d0a991962',
 'frontend/app/globals.css':'3cd5e17c6ddb8d6271b4ae28419b74e2ecd06fb499982f42019be140ff179c4c',
 'frontend/pages/privacy.tsx':'1c87f327bbbc855535634a36dcaf1b02339ee1e708e9a4d4c7e4cb1748aed1c6',
};
// Exact whole-file hashes for the reviewed map-only edits. Any later difference
// fails; no path is skipped by preservation tests.
export function withoutMapOrientation(path,bytes){const key=path.startsWith('frontend/')?path:'frontend/'+path;if(laterTaskChanges[key]){assert.equal(hash(bytes),laterTaskChanges[key],key+' exakt geprüfter Auftrag-26-Stand');return execFileSync('git',['show',changes.base+':'+key],{maxBuffer:16e6})}let preserved=withoutAuftrag18(key,bytes);if(key==='frontend/app/organisation-map.tsx'){
 const wasBuffer=Buffer.isBuffer(preserved);if(wasBuffer)preserved=preserved.toString('utf8');const id=' id="directory-map-direct-target"';assert.equal(preserved.split(id).length-1,1,'Auftrag 30 Verzeichniskartenziel eindeutig');preserved=preserved.replace(id,'');if(wasBuffer)preserved=Buffer.from(preserved);
 }if(key==='frontend/app/history-map.tsx'){
 const wasBuffer=Buffer.isBuffer(preserved);if(wasBuffer)preserved=preserved.toString('utf8');
 const id=' id="history-map-direct-target"';assert.equal(preserved.split(id).length-1,1,'Auftrag 30 Kartenziel eindeutig');preserved=preserved.replace(id,'');
 const effect="useEffect(()=>{if(route.params.view!=='map')return;const frame=requestAnimationFrame(()=>document.getElementById('history-map-direct-target')?.scrollIntoView({block:'start',behavior:'instant'}));return()=>cancelAnimationFrame(frame)},[route.params.view,map]);";assert.equal(preserved.split(effect).length-1,1,'Auftrag 30 Direktnavigation eindeutig');preserved=preserved.replace(effect,'');
 if(wasBuffer)preserved=Buffer.from(preserved);
 }const c=changes.files[key];if(!c)return withoutPr68CopyCleanup(key,preserved);assert.equal(hash(preserved),c.after,key+' geprüfter Kartenstand');const old=execFileSync('git',['show',changes.base+':'+key],{maxBuffer:16e6});assert.equal(hash(old),c.before);return withoutPr68CopyCleanup(key,old)}
