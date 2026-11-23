import {withoutSupportTransparency} from './support-transparency.mjs';
import {withoutPr68CopyCleanup} from './pr68-copy-cleanup.mjs';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const changes=JSON.parse(readFileSync(new URL('./encounter-supplement-authorized-changes.json',import.meta.url),'utf8'));
const navigationChanges=JSON.parse(readFileSync(new URL('./encounter-navigation-authorized-changes.json',import.meta.url),'utf8'));
export function withoutEncounterNavigation(path,bytes){let s=bytes.toString();for(const {before,after} of (navigationChanges[path.startsWith('frontend/')?path:'frontend/'+path]||[]).toReversed()){assert.equal(s.split(after).length-1,1,'Genau eine beauftragte Navigationskorrektur');s=s.replace(after,before)}return Buffer.from(s)}
// Only undo the two exact authorized routing additions. All other bytes remain guarded.
const eventNavigationChanges=[
 {before:'',after:"import {EventsPage} from './events';\n"},
 {before:'',after:"{districtId==='bergedorf'&&<button aria-current={page==='veranstaltungen'?'page':undefined} onClick={()=>go('#veranstaltungen')}>Aktuelle Veranstaltungen in Bergedorf</button>}"},
 {before:"page==='nachrichten'?<NewsPage/>:",after:"page==='nachrichten'?<NewsPage/>:page==='veranstaltungen'?<EventsPage/>:"}
];
export function withoutEventNavigation(path,bytes){if(!path.endsWith('app/platform.tsx'))return withoutPr68CopyCleanup(path,bytes);let s=bytes.toString();for(const {before,after} of eventNavigationChanges.toReversed()){assert.equal(s.split(after).length-1,1,'Genau eine beauftragte Veranstaltungseinbindung');s=s.replace(after,before)}return Buffer.from(s)}
export function withoutEncounterSupplementNavigation(path,bytes){bytes=withoutSupportTransparency(path,bytes);bytes=withoutEventNavigation(path,bytes);bytes=withoutEncounterNavigation(path,bytes);if(!path.endsWith('app/platform.tsx'))return bytes;let s=bytes.toString();for(const {before,after} of changes.toReversed()){assert.equal(s.split(after).length-1,1,'Genau eine beauftragte Navigationsergänzung');s=s.replace(after,before);}return withoutPr68CopyCleanup(path,Buffer.from(s));}
