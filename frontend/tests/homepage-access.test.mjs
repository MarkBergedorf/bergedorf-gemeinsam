import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {homepageTopics,homepageMaps} from '../lib/homepage-access.mjs';

const read=path=>readFileSync(new URL(path,import.meta.url),'utf8');

test('Auftrag 29 ergänzt Projektvorstellung und genau vier kompakte Themenzugänge mit den vorgegebenen Texten',()=>{
 const platform=read('../app/platform.tsx');
 assert.ok(platform.includes('Bergedorf gemeinsam – entdecken, informieren und mitgestalten'));
 assert.ok(platform.includes('Bergedorf gemeinsam ist eine unabhängige Bürgerplattform für den gesamten Bezirk Bergedorf. Sie verbindet Geschichte, aktuelle Informationen, Erfahrungen und Ideen, um den Bezirk besser kennenzulernen und das Miteinander zu stärken.'));
 assert.deepEqual(homepageTopics.map(({title,description})=>[title,description]),[
  ['Geschichte entdecken','Entdecke Bergedorfs Vergangenheit, historische Orte, alte Fotografien und persönliche Erinnerungen.'],
  ['Bergedorf erleben','Entdecke Sehenswürdigkeiten, Ausflugsziele, Spaziergänge und die Vielfalt unserer Stadtteile.'],
  ['Aktuelles erfahren','Informiere dich über Nachrichten, Politik, Veranstaltungen und Entwicklungen im Bezirk.'],
  ['Gemeinsam mitgestalten','Teile deine Erfahrungen, bringe Ideen ein und mache auf Anliegen in Bergedorf aufmerksam.']
 ]);
 assert.deepEqual(homepageTopics.map(topic=>topic.links.map(link=>link.href)),[
  ['#geschichte'],['#tourismus'],['#nachrichten','#politik','#veranstaltungen'],['#anliegen','#erfahrung']
 ]);
 assert.ok(platform.includes('homepageTopics.map(topic=>'));
 assert.ok(platform.includes('<HomepageCurrent/>'));
});

test('Karteninventar umfasst fünf eigenständige Besucherangebote mit direkten internen Routen',()=>{
 assert.deepEqual(homepageMaps.map(({id,title,href})=>[id,title,href]),[
  ['geschichte','Geschichtskarte','#geschichte?view=map'],
  ['begegnungsorte','Historische Karte der Begegnungsorte','#einsamkeit/stadtteile/t10-6?ansicht=karte'],
  ['tourismus','Tourismuskarte','#tourismus/karte'],
  ['verzeichnis','Karte des Bergedorfer Verzeichnisses','#verzeichnis/karte'],
  ['organisationen','Organisationskarte','#organisation/karte']
 ]);
 const platform=read('../app/platform.tsx'),tourism=read('../app/tourism.tsx'),directory=read('../app/directory.tsx'),history=read('../app/history-map.tsx'),encounters=read('../app/historical-encounters-map.tsx');
 assert.ok(platform.includes('homepageMaps.map(map=>'));
 assert.ok(platform.includes('Bergedorf auf Karten entdecken'));
 assert.ok(history.includes('HistoryListMap'));
 assert.ok(encounters.includes('HistoricalEncountersMap'));
 assert.ok(tourism.includes("route.tab==='karte'"));
 assert.ok(tourism.includes("document.getElementById('tourism-map-title')"));
 assert.ok(directory.includes("route.tab==='karte'"));
 assert.ok(directory.includes("route.tab!=='liste'"));
 assert.ok(platform.includes("page==='geschichte'&&route.tab==='orte'"));
});

test('Direktlinks bewahren die vorhandene Karteneinwilligung; nur die Kopf-Beschriftung entfällt',()=>{
 for(const path of ['../app/history-map.tsx','../app/historical-encounters-map.tsx','../app/tourism.tsx','../app/organisation-map.tsx']){
  const source=read(path);
  assert.ok(source.includes('useMapPrivacy'),path);
 }
 const header=read('../app/site-header.tsx');
 assert.ok(!header.includes('private-preview'));
 assert.ok(!header.includes('Statische Testfassung'));
 assert.ok(header.includes('Alle ${items.length} Themen öffnen'));
 assert.ok(header.includes("mobile?'Themenübersicht schließen'"));
 const banner=read('../pages/main.tsx');
 assert.ok(banner.includes('Statische Testfassung · Anmeldung, Beiträge und Interaktionen benötigen ein Backend. Keine öffentliche Freigabe erfolgt.'));
});

test('Projekt-Unterpfad, noindex, Navigation und bestehende Startseitenbereiche bleiben erhalten',()=>{
 const html=read('../index.html'),platform=read('../app/platform.tsx'),current=read('../app/homepage-current.tsx'),header=read('../app/site-header.tsx'),main=read('../pages/main.tsx');
 assert.ok(html.includes('noindex'));
 assert.ok(main.includes('<Platform/>'));
 for(const text of ['Unser Bergedorf.','Unsere Geschichten.','Unsere Möglichkeiten.','Beiträge entdecken','alle 14 amtlichen Stadtteile','<HomepageCurrent/>'])assert.ok(platform.includes(text),text);
 for(const text of ['Aktuelles aus Bergedorf','Weitere Themen entdecken'])assert.ok(current.includes(text),text);
 assert.ok(header.includes('items.map((item,index)=>'));
 assert.ok(header.includes('nav-tab-slot'));
});
