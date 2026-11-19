import assert from 'node:assert/strict';import {createHash} from 'node:crypto';import {readFileSync} from 'node:fs';import {execFileSync} from 'node:child_process';
const changes=JSON.parse(readFileSync(new URL('./map-orientation-authorized-changes.json',import.meta.url),'utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
// Exact whole-file hashes for the reviewed map-only edits. Any later difference
// fails; no path is skipped by preservation tests.
export function withoutMapOrientation(path,bytes){const key=path.startsWith('frontend/')?path:'frontend/'+path,c=changes.files[key];if(!c)return bytes;assert.equal(hash(bytes),c.after,key+' geprüfter Kartenstand');const old=execFileSync('git',['show',changes.base+':'+key],{maxBuffer:16e6});assert.equal(hash(old),c.before);return old}
