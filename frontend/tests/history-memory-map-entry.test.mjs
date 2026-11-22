import test from 'node:test';
import assert from 'node:assert/strict';
import {historyMemoryPlaces,historyPoints,historyEntrySeedFromMap,withHistoryEntrySeed} from '../lib/history.mjs';
import {historyCreateHref,historyEntryContext} from '../lib/history-navigation.mjs';

const memory=(id,placeId,fields={})=>({id,kind:'geschichte',origin:'reader',entryContext:{area:'geschichte',historyMemoryPlaceId:placeId},version:1,published:{title:id,historyType:'memory',historyLat:'53.48',historyLon:'10.21',...fields}});

test('Erinnerungen mit ausdrücklich gleicher Erinnerungsort-ID werden gruppiert und gezählt',()=>{
 const places=historyMemoryPlaces([memory('a','mem-place-0001'),memory('b','mem-place-0001')]);
 assert.equal(places.length,1);assert.equal(places[0].entries.length,2);assert.equal(places[0].memoryPlaceId,'mem-place-0001');
});

test('Nähe oder identische Koordinaten verschmelzen verschiedene Orte nicht',()=>{
 const places=historyMemoryPlaces([memory('a','mem-place-0001'),memory('b','mem-place-0002',{historyLat:'53.48001',historyLon:'10.21001'}),memory('c','mem-place-0003')]);
 assert.equal(places.length,3);assert.deepEqual(places.map(p=>p.entries.length),[1,1,1]);
});

test('Beiträge ohne gemeinsame Ort-ID bleiben einzeln, auch bei identischen Koordinaten',()=>{
 const places=historyMemoryPlaces([memory('a',''),memory('b','')]);
 assert.equal(places.length,2);assert.deepEqual(places.map(p=>p.id),['legacy:a','legacy:b']);
});

test('Zählung bleibt dynamisch und schließt Entwürfe, Beispiele, zurückgezogene und verborgene Beiträge aus',()=>{
 const approved=Array.from({length:100},(_,i)=>memory('released-'+i,'mem-place-0001'));
 const excluded=[{...memory('draft','mem-place-0001'),published:null}, {...memory('example','mem-place-0001'),origin:'example'}, {...memory('hidden','mem-place-0001'),hidden:true}, {...memory('withdrawn','mem-place-0001'),withdrawn:true}];
 assert.equal(historyMemoryPlaces([...approved,...excluded])[0].entries.length,100);
 assert.equal(historyPoints([...approved,...excluded]).length,100);
});

test('Kartenlink übergibt zulässige Koordinaten, Erinnerungsart und Orts-ID in den bestehenden Einstieg',()=>{
 const href=historyCreateHref('#geschichte?historyType=memory',{historyLat:'53.48',historyLon:'10.21',historyMemoryPlaceId:'mem-place-0001',historyStreet:'Bergstraße',historyNumber:'3',historyCity:'Hamburg'});
 const [path,query]=href.split('?');const params=new URLSearchParams(query);
 assert.equal(path,'#meine/neu/geschichte');assert.equal(params.get('historyType'),'memory');assert.equal(params.get('historyLat'),'53.48');assert.equal(params.get('historyLon'),'10.21');assert.equal(params.get('historyMemoryPlaceId'),'mem-place-0001');
 assert.deepEqual(historyEntryContext({area:'geschichte',...Object.fromEntries(params)}),{area:'geschichte',historyType:'memory',from:'#geschichte?historyType=memory',historyLat:'53.48',historyLon:'10.21',historyMemoryPlaceId:'mem-place-0001',historyStreet:'Bergstraße',historyNumber:'3',historyCity:'Hamburg'});
});

test('Entwurfsübergabe ergänzt die Kartenauswahl, überschreibt aber keine spätere Ortskorrektur',()=>{
 const context={area:'geschichte',historyLat:'53.48',historyLon:'10.21',historyMemoryPlaceId:'mem-place-0001',historyType:'memory'};
 assert.deepEqual(withHistoryEntrySeed({},context),{historyType:'memory',historyLat:'53.48',historyLon:'10.21'});
 assert.deepEqual(withHistoryEntrySeed({historyLat:'53.49',historyLon:'10.22',title:'Meine Erinnerung'},context),{historyType:'memory',historyLat:'53.49',historyLon:'10.22',title:'Meine Erinnerung'});
 assert.equal(historyEntrySeedFromMap({historyLat:'53.1',historyLon:'10.2'}),null);
});
