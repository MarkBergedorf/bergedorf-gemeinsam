import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {tourismCategories,tourismItems,tourismMarkers,tourismCheckedOn,filterTourismItems} from '../lib/tourism-data.mjs';
import {parseRoute} from '../lib/navigation.mjs';

test('tourism directory has all 12 requested categories and stable unique records',()=>{
  assert.equal(tourismCategories.length,12);
  assert.equal(new Set(tourismCategories.map(x=>x.id)).size,12);
  assert.equal(new Set(tourismItems.map(x=>x.id)).size,tourismItems.length);
  for(const item of tourismItems){
    assert.ok(item.name&&item.description&&item.place,item.id);
    assert.ok(item.source?.url?.startsWith('https://'),item.id);
    assert.equal(item.checkedOn,tourismCheckedOn,item.id);
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
  assert.equal(filterTourismItems({categoryIds:['unterkunft']}).length,14); // 12 primary entries plus two cross-listed lodging offers
  assert.ok(filterTourismItems({query:'Moorfleet'}).some(x=>x.id==='eichbaumsee'));
  assert.ok(filterTourismItems({query:'Vierländer',categoryIds:['rad']}).some(x=>x.id==='kirchentour'));
  assert.ok(filterTourismItems({freeOnly:true}).length>0);
  assert.equal(filterTourismItems({query:'does-not-exist'}).length,0);
  assert.equal(parseRoute('#tourismus').page,'tourismus');
});
