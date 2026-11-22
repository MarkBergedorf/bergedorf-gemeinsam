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
  assert.equal(tourismMarkers.length,11);
  for(const id of ['hiamo','haus-anna-elbe','hof-eggers'])assert.ok(tourismMarkers.some(x=>x.id===id&&x.coordinateSource.startsWith('https://www.openstreetmap.org/')),id);
});

test('supplementary tourism records are searchable and the 12 original tabs remain intact',async()=>{
  for(const id of ['weinfass','hamburgboats','adfc-touren','segelflugplatz-boberg','karoline','wochenmaerkte-bergedorf','bergedorfer-stadtfest','bergedorfer-weihnachtsmarkt','wutzrock','allermoeher-wiesen','alter-holzhafen','spadenlaender-spitze','bergedorfer-gehoelz'])assert.ok(tourismItems.some(x=>x.id===id),id);
  assert.equal(tourismCategories.length,12);
  assert.ok(filterTourismItems({query:'Baumzelt'}).some(x=>x.id==='haus-anna-elbe'));
  assert.deepEqual(filterTourismItems({categoryIds:['unterkunft'],bikeFriendlyOnly:true}).map(x=>x.id),['haus-anna-elbe']);
  const page=await readFile(new URL('../app/tourism.tsx',import.meta.url),'utf8');
  assert.match(page,/10 Highlights in Bergedorf/);
  assert.match(page,/keine Rangfolge/);
  assert.match(page,/Kartenkategorien/);
  assert.match(page,/tourismMapKinds/);
  assert.match(page,/document\.querySelector\(`\[data-tourism-id=/);
});
