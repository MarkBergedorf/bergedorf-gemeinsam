import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const changes=JSON.parse(readFileSync(new URL('./authority-report-authorized-changes.json',import.meta.url),'utf8'));
export function withoutAuthorityReport(path,bytes){let s=bytes.toString();for(const {before,after} of (changes[path.startsWith('frontend/')?path:'frontend/'+path]||[]).toReversed()){assert.equal(s.split(after).length-1,1,'Genau eine beauftragte Meldungs-Ergänzung');s=s.replace(after,before)}return Buffer.from(s)}
