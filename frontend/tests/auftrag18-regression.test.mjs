import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {pressMedia} from '../lib/press-discussions.mjs';

const read=path=>readFileSync(path,'utf8');
test('A1: Über uns fehlt nur oben; Footer und #ueber bleiben erreichbar',()=>{
 const platform=read('app/platform.tsx');
 assert(platform.includes("sections.filter(s=>s.id!=='ueber'):[]).map(s=>"));
 assert(platform.includes("['ueber','Über uns']"));
 assert(platform.includes("page==='ueber'?<AboutPage/>"));
});
test('A2/A9: Bürgerbeitragszahl und Beispielzahl sind getrennt und grammatisch',()=>{
 const contributions=read('app/contributions.tsx');
 assert(contributions.includes("exampleCount===1?'Beispielbeitrag':'Beispielbeiträge'"));
 assert(contributions.includes('passende freigegebene Bürgerbeiträge'));
 assert(contributions.includes('ALS BEISPIEL FREIGEGEBEN'));
 const about=read('lib/participation.mjs');
 for(const phrase of ['aktuellen Bergedorfer Nachrichten','Veranstaltungen','Einsamkeit und Begegnung','Mietkosten und Grundsicherung','eigenständigen Organisationsprofilen','Produktive öffentliche Einreichungen'])assert(about.includes(phrase),phrase);
});
test('A3: Installationshinweis beschreibt öffentliche statische Testfassung',()=>{
 const source=read('app/app-installation.tsx');
 assert(source.includes('Diese öffentliche statische Testfassung benötigt keine Anmeldung'));
 assert(!source.includes('Die private Vorschau erfordert weiterhin einen berechtigten Sites-Zugang'));
});
test('A4/A5: Kartenquellen korrigiert und Wappen-Quelllink erhalten',()=>{
 const source=read('app/credits-page.tsx'),privacy=read('lib/map-privacy-info.mjs');
 for(const phrase of ['OpenFreeMap','OpenMapTiles','OpenStreetMap','ODbL','LGV','ALKIS','Wikimedia Commons'])assert(source.includes(phrase),phrase);
 assert(source.includes('sourceLinks.crest'));
 assert(source.includes('Dauerhafte dokumentierte Seitenversion des Wappens'));
 assert(source.includes('wird nicht behauptet'));
 assert(privacy.includes('Historischer OpenStreetMap-Kacheldienst'));
 assert(privacy.includes('"name": "OpenFreeMap"'));
});
test('A6–A8: Beteiligung, Moderation und Uploads bleiben als künftig gesperrt beschrieben',()=>{
 const participation=read('lib/participation.mjs'),legal=read('app/legal-pages.tsx'),workspace=read('app/workspace.tsx');
 assert(participation.includes('produktive Beitragseinreichungen sind derzeit nicht angeschlossen'));
 assert(participation.includes('Eine spätere produktive Dateiübermittlung wäre gesondert freizugeben'));
 assert(legal.includes('derzeit nicht aktiviert'));
 assert(legal.includes('derzeit nicht aktiviert'));
 assert(workspace.includes('Backend noch nicht angeschlossen'));
});
test('B8: alle sieben Nachrichtenmedien stehen auch in der lokalen Presseauswahl',()=>{
 assert.deepEqual(pressMedia,['Bergedorfer Zeitung','Bille Wochenblatt','Stadtteilzeitung Lohbrügge','Hamburger Abendblatt','Hamburger Morgenpost (MOPO)','BILD-Zeitung','Hinz&Kunzt']);
});
test('Supportseite behauptet keine Aktualisierung eines statischen Bestands',()=>{
 const source=read('app/support.tsx');
 assert(source.includes('Angezeigt wird der veröffentlichte statische Testbestand'));
 assert(!source.includes('Finanzstand aktualisieren'));
});
