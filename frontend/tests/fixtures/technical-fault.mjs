import {withoutRentGuide} from './rent-guide.mjs';
import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const changes=JSON.parse(readFileSync(new URL('./technical-fault-authorized-changes.json',import.meta.url),'utf8'));
// Undo only the exact two authorized additions; preserve every other byte.
export function withoutTechnicalFault(path,bytes){let s=withoutRentGuide(path,bytes).toString();for(const {before,after} of (changes[path.startsWith('frontend/')?path:'frontend/'+path]||[]).toReversed()){assert.equal(s.split(after).length-1,1,'Genau eine beauftragte technische Meldungs-Ergänzung');s=s.replace(after,before)}return Buffer.from(s)}
