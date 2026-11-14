import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const changes=JSON.parse(readFileSync(new URL('./encounter-supplement-authorized-changes.json',import.meta.url),'utf8'));
// Only undo the two exact authorized routing additions. All other bytes remain guarded.
export function withoutEncounterSupplementNavigation(path,bytes){if(!path.endsWith('app/platform.tsx'))return bytes;let s=bytes.toString();for(const {before,after} of changes.toReversed()){assert.equal(s.split(after).length-1,1,'Genau eine beauftragte Navigationsergänzung');s=s.replace(after,before);}return Buffer.from(s);}
