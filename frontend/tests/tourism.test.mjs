import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {tourismCategories,tourismItems,tourismMarkers,tourismHighlights,tourismMapCategories,tourismMapKinds,filterTourismItems} from '../lib/tourism-data.mjs';
import {parseRoute} from '../lib/navigation.mjs';

test('tourism directory has all 12 requested categories and stable unique records',()=>{
  assert.equal(tourismCategories.length,12);
  assert.equal(new Set(tourismCategories.map(x=>x.id)).size,12);
  assert.equal(new Set(tourismItems.map(x=>x.id)).size,tourismItems.length);
  for(const item of tourismItems){
    assert.ok(item.name&&item.description&&item.place,item.id);
    assert.ok(item.source?.url?.startsWith('https://'),item.id);
    assert.match(item.checkedOn,/^2026-11-\d{2}$/,item.id);
  }
});

test('tourism entries cover all 14 borough districts without fabricated map coordinates',()=>{
  const all=tourismItems.map(x=>`${x.name} ${x.place} ${x.address||''}`).join('\n').toLocaleLowerCase('de');
  for(const place of ['bergedorf','lohbrügge','billwerder','moorfleet','neuallermöhe','allermöhe','spadenland','tatenberg','ochsenwerder','reitbrook','curslack','neuengamme','kirchwerder','altengamme']){
    assert.ok(all.includes(place),`missing district ${place}`);
  }
  assert.ok(tourismMarkers.length>0);
  for(const item of tourismMarkers){
    assert.ok(Number.isFinite(item.lat)&&Number.isFinite(item.lon),item.id);
    assert.match(item.coordinateSource,/openstreetmap\.org\/(?:node|way|relation)\//,item.id);
  }
});

test('tourism feature is linked into navigation and preserves map consent and existing sections',async()=>{
  const platform=await readFile(new URL('../app/platform.tsx',import.meta.url),'utf8');
  const page=await readFile(new URL('../app/tourism.tsx',import.meta.url),'utf8');
  assert.match(platform,/import \{TourismPage\} from '\.\/tourism'/);
  assert.match(platform,/page==='tourismus'\?<TourismPage\/>/);
  assert.match(platform,/onClick=\{\(\)=>go\('#tourismus'\)\}>Bergedorf entdecken/);
  assert.match(page,/useMapPrivacy\('openfreemap'/);
  assert.match(page,/Promise\.all\(\[import\('leaflet'\),import\('\.\.\/lib\/history-tiles\.mjs'\)\]\)/);
  assert.match(page,/Erst nach Ihrer Zustimmung/);
  assert.match(page,/Koordinatenquelle/);
  assert.match(platform,/page==='politik'&&route\.tab==='begegnungsorte'/);
  assert.match(platform,/page==='geschichte'&&route\.tab==='orte'/);
  assert.match(platform,/page==='veranstaltungen'\?<EventsPage\/>/);
});


test('tourism search, category and free filters combine and return empty states correctly',()=>{
  assert.equal(filterTourismItems({categoryIds:['unterkunft']}).length,16); // 14 Ausgangsangebote plus Weinfass und Hausboot
  assert.ok(filterTourismItems({query:'Moorfleet'}).some(x=>x.id==='eichbaumsee'));
  assert.ok(filterTourismItems({query:'Vierländer',categoryIds:['rad']}).some(x=>x.id==='kirchentour'));
  assert.ok(filterTourismItems({freeOnly:true}).length>0);
  assert.equal(filterTourismItems({query:'does-not-exist'}).length,0);
  assert.equal(parseRoute('#tourismus').page,'tourismus');
});

test('all 93 original tourism records retain their names, categories, descriptions and main sources',async()=>{
  const baseline=JSON.parse(await readFile(new URL('./fixtures/tourism-original-records.json',import.meta.url),'utf8'));
  const current=new Map(tourismItems.map(item=>[item.id,item]));
  assert.equal(baseline.length,93);
  for(const original of baseline){
    const item=current.get(original.id);
    assert.ok(item,`original record missing: ${original.id}`);
    assert.equal(item.name,original.name,original.id);
    assert.equal(item.category,original.category,original.id);
    assert.equal(item.description,original.description,original.id);
    assert.equal(item.source.url,original.source,original.id);
  }
  assert.ok(tourismItems.length>baseline.length,'new records must extend the directory');
  for(const item of tourismItems.filter(x=>!baseline.some(old=>old.id===x.id)))assert.equal(item.checkedOn,'2026-11-22',item.id);
});

test('the ten source-selected highlights are traceable and linked to existing records',()=>{
  assert.equal(tourismHighlights.length,10);
  assert.deepEqual(tourismHighlights.map(x=>x.id),['vier-marschlande-highlight','zollenspieker','sternwarte','boberger-niederung','rieckhaus','schloss','dove-elbe','gedenkstaette','altstadt','hof-eggers']);
  for(const highlight of tourismHighlights){
    assert.ok(highlight.itemIds.length>0,highlight.id);
    for(const id of highlight.itemIds)assert.ok(tourismItems.some(x=>x.id===id),`${highlight.id} -> ${id}`);
  }
  assert.equal(tourismItems.find(x=>x.id==='gedenkstaette').tone,'gedenkort');
  assert.ok(tourismMapCategories.some(x=>x.id==='highlights'&&x.label==='10 Highlights'));
});

test('four GÖP nature trail records preserve flyer facts and use separately sourced OSM route lines',async()=>{
  const expected=[
    ['duenenweg-boberg',3.6,'ca. 1,5 Stunden','Schmetterling','#f58220','goep_Flyer_D_nenweg_Final.pdf'],
    ['moorweg-boberg',2.7,'ca. 1 Stunde','Vogel','#e3d500','goep_Flyer_Moorweg_tempor_r_Final.pdf'],
    ['terrassenweg-boberg',3.3,'ca. 1,5 Stunden','Blume','#e83e9b','goep_Flyer_Terassenweg_Final.pdf'],
    ['wiesenweg-boberg',4.6,'ca. 2 Stunden','Hase','#2478d4','goep_Flyer_Wiesenweg_Final.pdf'],
  ];
  const page=await readFile(new URL('../app/tourism.tsx',import.meta.url),'utf8');
  assert.equal(tourismItems.filter(x=>x.natureTrail).length,4);
  for(const [id,length,duration,symbol,color,pdf] of expected){
    const item=tourismItems.find(x=>x.id===id);
    assert.ok(item,`missing ${id}`);
    assert.equal(item.routeLengthKm,length,id);
    assert.equal(item.routeDuration,duration,id);
    assert.equal(item.routeSymbol,symbol,id);
    assert.equal(item.routeColor,color,id);
    assert.match(item.source.url,new RegExp(pdf.replaceAll('.','\\.')));
    assert.ok(item.categoryLinks.includes('natur')&&item.categoryLinks.includes('familie'));
    assert.ok(item.mapKinds.includes('trails'));
    assert.equal(item.lat,undefined,`${id}: do not invent a point`);
    assert.equal(item.lon,undefined,`${id}: do not invent a point`);
    assert.match(item.routeGeometryStatus,/OSM-Wanderwegrelation/i,id);
    assert.ok(item.additionalSources.some(x=>x.url.startsWith('https://www.openstreetmap.org/relation/')),id);
    assert.equal(item.checkedOn,'2026-11-22',id);
  }
  const moor=tourismItems.find(x=>x.id==='moorweg-boberg');
  assert.ok(moor.additionalSources.some(x=>x.url.includes('boberger-niederung-165636')));
  assert.match(moor.description,/Unterberg/);
  assert.match(page,/OpenStreetMap-Wanderwegrelationen wurden mit den GÖP-Karten auf Seite 2 abgeglichen/);
  assert.match(page,/GÖP-Originalkarte visuell abgeglichen/);
});

test('separately sourced GÖP hiking relations have full multi-line geometry, route labels, popups, and independent visibility',async()=>{
  const geo=JSON.parse(await readFile(new URL('../public/assets/goep-naturwege-boberg.geojson',import.meta.url),'utf8'));
  assert.equal(geo.type,'FeatureCollection');
  assert.match(geo.attribution,/OpenStreetMap-Mitwirkende, ODbL 1\.0/);
  const expected=new Map([['duenenweg-boberg',3502],['moorweg-boberg',2684],['terrassenweg-boberg',3269],['wiesenweg-boberg',4314]]);
  assert.equal(geo.features.length,4);
  for(const feature of geo.features){
    const p=feature.properties;
    assert.ok(expected.has(p.id),p.id);
    assert.equal(feature.geometry.type,'MultiLineString',p.id);
    assert.ok(feature.geometry.coordinates.length>=14,p.id);
    assert.ok(feature.geometry.coordinates.every(line=>line.length>=2),p.id);
    assert.equal(p.lineLengthMeters,expected.get(p.id),p.id);
    assert.equal(p.osmOperator,'Naturschutzverband GÖP',p.id);
    assert.equal(p.route,'hiking',p.id);
    assert.equal(p.network,'lwn',p.id);
    assert.match(p.osmRelationUrl,/openstreetmap\.org\/relation\//,p.id);
    assert.equal(p.geometrySource,'OpenStreetMap route relation; checked against GÖP original route map page 2',p.id);
    assert.ok(feature.geometry.coordinates.flat(2).every(Number.isFinite),p.id);
    assert.ok(feature.geometry.coordinates.some(line=>line.some(([lon,lat])=>lon===p.labelPosition[0]&&lat===p.labelPosition[1])),`${p.id}: label anchored to a route vertex`);
  }
  const wiesen=geo.features.find(x=>x.properties.id==='wiesenweg-boberg');
  assert.equal(wiesen.properties.publishedLengthKm,4.6);
  assert.equal(wiesen.properties.lineLengthMeters,4314);
  const moor=geo.features.find(x=>x.properties.id==='moorweg-boberg');
  assert.equal(moor.properties.osmUpdated,'2025-07-14T11:25:08Z');
  const page=await readFile(new URL('../app/tourism.tsx',import.meta.url),'utf8');
  assert.match(page,/assets\/goep-naturwege-boberg\.geojson/);
  assert.match(page,/L\.circleMarker\(\[p\.labelPosition\[1\],p\.labelPosition\[0\]\]/);
  assert.match(page,/bindTooltip\(`\$\{p\.symbol\} · \$\{p\.name\}`/);
  assert.match(page,/routeLayer\.bindPopup\(box\)/);
  assert.match(page,/visibleGopRoutes/);
  assert.match(page,/fitBounds\(route\.getBounds\(\)/);
  assert.match(page,/Weg auf der Karte zeigen/);
  assert.match(page,/Linienlänge der OpenStreetMap-Relation/);
  assert.match(page,/aktuelle Zugangssperrung/);
});

test('all five EntdeckerRouten are separate records without invented route lines',()=>{
  assert.deepEqual(tourismItems.filter(x=>x.routeNumber).map(x=>x.routeNumber).sort(),[1,2,3,4,5]);
  for(const id of ['rosentour','tatenberg-route','elbkiekertour','kirchentour','boberg-route'])assert.ok(tourismItems.some(x=>x.id===id),id);
  assert.equal(tourismItems.find(x=>x.id==='rosentour').routeLengthKm,25);
  assert.ok(tourismItems.filter(x=>['rosentour','boberg-route','kirchentour','tatenberg-route','elbkiekertour'].includes(x.id)).every(x=>!x.routeGeoJSON));
  assert.ok(tourismItems.find(x=>x.id==='elberadweg').additionalSources.some(x=>x.url==='https://www.elberadweg.de/'));
});

test('tourism map categories filter marked locations and keep coordinate evidence mandatory',()=>{
  assert.ok(tourismMapCategories.length>=12);
  assert.ok(tourismMapCategories.some(x=>x.id==='special-stays'));
  assert.ok(tourismMapKinds(tourismItems.find(x=>x.id==='weinfass')).includes('special-stays'));
  assert.ok(tourismMapKinds(tourismItems.find(x=>x.id==='gedenkstaette')).includes('highlights'));
  assert.ok(tourismItems.filter(x=>x.geometryType==='area').every(x=>!Number.isFinite(x.lat)&&!Number.isFinite(x.lon)));
  assert.equal(tourismMarkers.length,21);
  for(const id of ['hiamo','haus-anna-elbe','hof-eggers'])assert.ok(tourismMarkers.some(x=>x.id===id&&x.coordinateSource.startsWith('https://www.openstreetmap.org/')),id);
});

test('supplementary tourism records are searchable and the 12 original tabs remain intact',async()=>{
  for(const id of ['weinfass','hamburgboats','adfc-touren','segelflugplatz-boberg','karoline','wochenmaerkte-bergedorf','bergedorfer-stadtfest','bergedorfer-weihnachtsmarkt','wutzrock','allermoeher-wiesen','alter-holzhafen','spadenlaender-spitze','bergedorfer-gehoelz'])assert.ok(tourismItems.some(x=>x.id===id),id);
  assert.equal(tourismCategories.length,12);
  assert.ok(filterTourismItems({query:'Baumzelt'}).some(x=>x.id==='haus-anna-elbe'));
  assert.deepEqual(filterTourismItems({categoryIds:['unterkunft'],bikeFriendlyOnly:true}).map(x=>x.id),['haus-anna-elbe','hiamo']);
  const page=await readFile(new URL('../app/tourism.tsx',import.meta.url),'utf8');
  assert.match(page,/10 Highlights in Bergedorf/);
  assert.match(page,/keine Rangfolge/);
  assert.match(page,/Kartenkategorien/);
  assert.match(page,/tourismMapKinds/);
  assert.match(page,/document\.querySelector\(`\[data-tourism-id=/);
});

test('official Boberg soil trail data is bundled locally with its verified geometry, stations, and license',async()=>{
  const geo=JSON.parse(await readFile(new URL('../public/assets/bodenlehrpfad-boberg.geojson',import.meta.url),'utf8'));
  assert.equal(geo.type,'FeatureCollection');
  const routes=geo.features.filter(x=>x.properties.objektart==='route');
  const stations=geo.features.filter(x=>x.properties.objektart==='tafel');
  assert.equal(routes.length,3);
  assert.deepEqual(routes.map(x=>x.properties.typ).sort(),['Dünenweg','Moorweg','Terrassenweg']);
  assert.ok(routes.every(x=>x.geometry.type==='MultiLineString'&&x.properties.lehrpfad==='Boberg'));
  assert.equal(stations.length,10);
  assert.deepEqual(stations.map(x=>x.properties.punkt_bez),['1','2','3','4','5','6','7','8','9','10']);
  assert.ok(stations.every(x=>x.geometry.type==='Point'&&x.properties.titel&&x.properties.kurztext&&x.properties.link_artikel));
  assert.ok(geo.features.every(x=>x.properties.lizenz==='Datenlizenz Deutschland – Namensnennung 2.0'));
  assert.match(geo.attribution,/Freie und Hansestadt Hamburg/);
  const course=tourismItems.find(x=>x.id==='bodenlehrpfad-boberg');
  assert.ok(course&&course.mapKinds.includes('trails'));
  assert.ok(course.additionalSources.some(x=>x.url==='https://api.hamburg.de/datasets/v1/bodenlehrpfade/collections'));
  assert.ok(course.status.includes('14.04.2015'));
  assert.equal(tourismMapCategories.find(x=>x.id==='trails').label,'Themenwege und Lehrpfade');
  const page=await readFile(new URL('../app/tourism.tsx',import.meta.url),'utf8');
  assert.match(page,/fetch\(`\$\{import\.meta\.env\.BASE_URL\}assets\/bodenlehrpfad-boberg\.geojson`\)/);
  assert.match(page,/historyTiles\(L,[^;]*\{baseUrl:import\.meta\.env\.BASE_URL\}\)/);
  assert.match(page,/L\.geoJSON\(trailGeoJSON/);
  assert.match(page,/Station \$\{p\.punkt_bez\}: \$\{p\.titel\}/);
  assert.match(page,/Erläuterung bei Hamburg\.de öffnen/);
  const background=await readFile(new URL('../lib/history-tiles.mjs',import.meta.url),'utf8');
  assert.match(background,/baseUrl=''\}\=\{\}/);
  assert.match(background,/assetRoot=baseUrl\?new URL\(baseUrl,location\.href\)\.href:'\/';/);
});

test('new tourism additions preserve the 112-entry base, separate verified offers from unknown access, and document both rounds',async()=>{
  const additions=['maler-lackierer-museum','reitbrooker-muehle','geschichtskontor','kuenstlerhaus-bergedorf','white-cube-bergedorf','hansa-filmstudio','swingolf-hamburg','golf-lounge-moorfleet','minigolf-gruenes-zentrum','drachenlabyrinth','boberger-reitverein','erlebnisbauernhof-burmester-reiten','milchhof-reitbrook','ackerperlen','biohof-sommerfeld','vier-marschlande-querbeet','tatenberger-schleuse','schoepfwerke-vier-marschlande','kiebitzbrack','bodenlehrpfad-boberg','grosse-bergedorfer-runde','vierlaender-volks-schuetzenfest','vierlaender-erdbeerfest'];
  for(const id of additions)assert.ok(tourismItems.some(x=>x.id===id),`missing 21.2 entry ${id}`);
  const round=tourismItems.find(x=>x.id==='grosse-bergedorfer-runde');
  assert.equal(round.routeLengthKm,7);assert.equal(round.routeStations.length,13);assert.ok(!round.routeGeoJSON);
  assert.ok(round.additionalSources.some(x=>x.url==='https://www.entdeckerrouten.org/download-vum-route-6/'));
  const milk=tourismItems.find(x=>x.id==='milchhof-reitbrook');
  assert.match(milk.description,/nicht bestätigt/);
  assert.ok(tourismItems.find(x=>x.id==='hiamo').bikeFriendly);
  assert.deepEqual(tourismItems.find(x=>x.id==='hiamo').bikeFeatures,['Listung auf der Bett+Bike-Unterkunftsplattform','Fahrradverleih und E-Bike-Verleih','Kooperation mit einer Fahrradwerkstatt','Lunchpakete','kostenfreies WLAN']);
  const originals=JSON.parse(await readFile(new URL('./fixtures/tourism-original-records.json',import.meta.url),'utf8'));
  for(const item of tourismItems.filter(x=>!originals.some(old=>old.id===x.id)))assert.equal(item.checkedOn,'2026-11-22',item.id);
});

test('all 112 tourism entries published at the start of Ergänzungsauftrag 21.2 keep their full baseline fields',async()=>{
  const baseline=JSON.parse(await readFile(new URL('./fixtures/tourism-112-records.json',import.meta.url),'utf8'));
  assert.equal(baseline.length,112);
  const current=new Map(tourismItems.map(item=>[item.id,item]));
  for(const old of baseline){
    const item=current.get(old.id);
    assert.ok(item,`original published entry missing: ${old.id}`);
    assert.equal(item.name,old.name,old.id);
    assert.equal(item.category,old.category,old.id);
    assert.equal(item.description,old.description,old.id);
    assert.equal(item.source.url,old.source,old.id);
  }
});
