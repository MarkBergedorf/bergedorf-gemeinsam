import assert from 'node:assert/strict';import {createHash} from 'node:crypto';import {readFileSync} from 'node:fs';import {execFileSync} from 'node:child_process';
import {withoutAuftrag18} from './auftrag18.mjs';
const changes=JSON.parse(readFileSync(new URL('./map-orientation-authorized-changes.json',import.meta.url),'utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const laterTaskChanges={
 'frontend/app/history-map-legend.tsx':'148dddc40f10b8ca3e592bed92ab352aadad5c9c7540f128fd5bcc0d0a991962',
 'frontend/app/globals.css':'d5b3bbe2f6af0e01ea0676131139686358f4a3557c8f43f999b5c44660e2991a',
};
// Exact whole-file hashes for the reviewed map-only edits. Any later difference
// fails; no path is skipped by preservation tests.
export function withoutMapOrientation(path,bytes){const key=path.startsWith('frontend/')?path:'frontend/'+path;if(laterTaskChanges[key]){assert.equal(hash(bytes),laterTaskChanges[key],key+' exakt geprüfter Auftrag-26-Stand');return execFileSync('git',['show',changes.base+':'+key],{maxBuffer:16e6})}const preserved=withoutAuftrag18(key,bytes),c=changes.files[key];if(!c)return preserved;assert.equal(hash(preserved),c.after,key+' geprüfter Kartenstand');const old=execFileSync('git',['show',changes.base+':'+key],{maxBuffer:16e6});assert.equal(hash(old),c.before);return old}
