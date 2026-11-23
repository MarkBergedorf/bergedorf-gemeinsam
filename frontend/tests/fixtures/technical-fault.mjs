import {withoutRentGuide} from './rent-guide.mjs';
import {withoutMapOrientation} from './map-orientation.mjs';
import {withoutPr68CopyCleanup} from './pr68-copy-cleanup.mjs';
import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const changes=JSON.parse(readFileSync(new URL('./technical-fault-authorized-changes.json',import.meta.url),'utf8'));
// Undo only the exact changes from the other reviewed tasks before checking
// the technical-fault change. Keep the three narrow preservation fixtures composable.
export function withoutTechnicalFault(path,bytes){let s=withoutRentGuide(path,withoutMapOrientation(path,bytes)).toString();for(const {before,after} of (changes[path.startsWith('frontend/')?path:'frontend/'+path]||[]).toReversed()){assert.equal(s.split(after).length-1,1,'Genau eine beauftragte technische Meldungs-Ergänzung');s=s.replace(after,before)}return withoutPr68CopyCleanup(path,Buffer.from(s))}
