import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const changes=JSON.parse(readFileSync(new URL('./support-transparency-authorized-changes.json',import.meta.url),'utf8'));
// Exact approved additions only: no blanket exclusions from preservation checks.
export function withoutSupportTransparency(path,bytes){let s=bytes.toString();for(const {before,after} of (changes[path.startsWith('frontend/')?path:'frontend/'+path]||[]).toReversed()){assert.equal(s.split(after).length-1,1,'Genau eine beauftragte Finanztransparenz-Ergänzung');s=s.replace(after,before)}return Buffer.from(s)}
