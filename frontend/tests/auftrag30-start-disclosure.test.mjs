import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {homepageTopics,homepageMaps} from '../lib/homepage-access.mjs';

const read=path=>readFileSync(new URL(path,import.meta.url),'utf8');

test('Auftrag 30 zeigt fünf native, anfangs geschlossene und unabhängig bedienbare Akkordeons',()=>{
 const platform=read('../app/platform.tsx');
 assert.equal(homepageTopics.length,4);
 assert.equal(homepageMaps.length,5);
 assert.ok(platform.includes('homepageTopics.map(topic=><details className="homepage-disclosure homepage-topic-disclosure"'));
 assert.ok(platform.includes('<details className="homepage-map-directory homepage-disclosure"'));
 assert.ok(platform.includes('<summary><h3>{topic.title}</h3><ChevronDown aria-hidden="true" size={20}/></summary>'));
 assert.ok(platform.includes('<summary><span className="homepage-map-summary"'));
 assert.ok(!/<details[^>]*\sopen(?:[\s=>])/i.test(platform),'keine der fünf Details ist mit open voreingestellt');
 assert.ok(platform.includes('homepageTopics.map(topic=>'));
 assert.ok(platform.includes('homepageMaps.map(map=>'));
});

test('Die vier Themen bleiben in derselben Reihenfolge mit unveränderten Texten und Verknüpfungen',()=>{
 assert.deepEqual(homepageTopics.map(({title,description,links})=>({title,description,links:links.map(({label,href})=>[label,href])})),[
  {title:'Geschichte entdecken',description:'Entdecke Bergedorfs Vergangenheit, historische Orte, alte Fotografien und persönliche Erinnerungen.',links:[['Geschichte und Erinnerungen','#geschichte']]},
  {title:'Bergedorf erleben',description:'Entdecke Sehenswürdigkeiten, Ausflugsziele, Spaziergänge und die Vielfalt unserer Stadtteile.',links:[['Gäste und Tourismus','#tourismus']]},
  {title:'Aktuelles erfahren',description:'Informiere dich über Nachrichten, Politik, Veranstaltungen und Entwicklungen im Bezirk.',links:[['Nachrichten aus Bergedorf','#nachrichten'],['Politik','#politik'],['Aktuelle Veranstaltungen','#veranstaltungen']]},
  {title:'Gemeinsam mitgestalten',description:'Teile deine Erfahrungen, bringe Ideen ein und mache auf Anliegen in Bergedorf aufmerksam.',links:[['Anliegen und Verbesserungen','#anliegen'],['Erfahrungsberichte','#erfahrung']]}
 ]);
 assert.deepEqual(homepageMaps.map(({title,description,href})=>[title,description,href]),[
  ['Geschichtskarte','Freigegebene Geschichtsbeiträge und persönliche Erinnerungen; mit auswählbaren öffentlichen Erholungsorten.','#geschichte?view=map'],
  ['Historische Karte der Begegnungsorte','Ehemalige Gaststätten und historische Treffpunkte in Bergedorf und Lohbrügge.','#einsamkeit/stadtteile/t10-6?ansicht=karte'],
  ['Tourismuskarte','Sehenswürdigkeiten, Ausflugsziele, Spaziergänge und kartierte Wege im Bezirk.','#tourismus/karte'],
  ['Karte des Bergedorfer Verzeichnisses','Geprüfte Standorte von Einrichtungen, Dienststellen und Angeboten im Verzeichnis.','#verzeichnis/karte'],
  ['Organisationskarte','Standorte der vorgestellten Organisationen und Einrichtungen im Bezirk.','#organisation/karte']
 ]);
 assert.ok(read('../app/platform.tsx').includes('Bergedorf auf Landkarten entdecken'));
});

test('Alle fünf direkten Kartenrouten wählen die Kartenansicht und scrollen zum tatsächlichen Ladebereich',()=>{
 const history=read('../app/history-map.tsx'),encounters=read('../app/loneliness.tsx')+read('../app/historical-encounters-map.tsx'),tourism=read('../app/tourism.tsx'),directory=read('../app/directory.tsx')+read('../app/organisation-map.tsx');
 assert.ok(history.includes("route.params.view!=='map'"));
 assert.ok(history.includes("getElementById('history-map-direct-target')?.scrollIntoView"));
 assert.ok(history.includes('id="history-map-direct-target"'));
 assert.ok(encounters.includes("route.params.ansicht==='karte'"));
 assert.ok(encounters.includes("getElementById('historical-encounters-map-direct-target')?.scrollIntoView"));
 assert.ok(encounters.includes('id="historical-encounters-map-direct-target"'));
 assert.ok(tourism.includes("route.tab==='karte')setScrollTarget('karte')"));
 assert.ok(tourism.includes("scrollTarget==='karte'?document.getElementById('tourism-map-access')"));
 assert.ok(tourism.includes('id="tourism-map-access"'));
 assert.ok(directory.includes("route.tab!=='karte'"));
 assert.ok(directory.includes("getElementById('directory-map-direct-target')?.scrollIntoView"));
 assert.ok(directory.includes('id="directory-map-direct-target"'));
});

test('Direktnavigation erhält Einwilligungsschutz und löscht keine Filter oder History-Einträge',()=>{
 for(const path of ['../app/history-map.tsx','../app/historical-encounters-map.tsx','../app/tourism.tsx','../app/organisation-map.tsx'])assert.ok(read(path).includes('useMapPrivacy'),path);
 const maps=[read('../app/history-map.tsx'),read('../app/historical-encounters-map.tsx'),read('../app/tourism.tsx'),read('../app/organisation-map.tsx')].join('\n');
 assert.ok(maps.includes('Geschichtskarte laden'));
 assert.ok(maps.includes('Historische Karte laden'));
 assert.ok(maps.includes('Touristenkarte laden'));
 assert.ok(maps.includes('Bergedorf-Karte laden'));
 assert.ok(!maps.includes('history.pushState'));
 assert.ok(read('../app/tourism.tsx').includes('[scrollTarget,query,selected,freeOnly]'));
 assert.ok(read('../app/directory.tsx').includes('filterDirectory(catalog,{query:values.q'));
});

test('Smartphone-Regeln halten Akkordeons und geöffnete Kartenkarten innerhalb der Breite',()=>{
 const css=read('../app/globals.css');
 assert.ok(css.includes('@media(max-width:600px){.homepage-orientation'));
 assert.ok(css.includes('.homepage-map-grid{grid-template-columns:1fr}'));
 assert.ok(css.includes('min-width:0'));
 assert.ok(css.includes('overflow-wrap:anywhere'));
 assert.ok(css.includes('summary:focus-visible'));
});
