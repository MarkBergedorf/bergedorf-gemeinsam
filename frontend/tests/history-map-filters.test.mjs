import test from 'node:test';import assert from 'node:assert/strict';
import {filterContributions} from '../lib/contribution-filters.mjs';
import {historyPoints} from '../lib/history.mjs';
const make=(id,fields={})=>({id,kind:'geschichte',version:1,published:{title:id,body:'Belegte Ortsgeschichte',place:'Ochsenwerder',localPlaceId:'gauert',categoryId:'local-history',historyType:'historical',historyLat:'53.47',historyLon:'10.14',...fields}});
const docs=[make('Gauert'),make('Sande',{place:'Lohbrügge',localPlaceId:'',historicPlaceId:'lohbruegge:name:sande',title:'Erinnerung an Sande',historyType:'memory',categoryId:'daily-history'})];
for(const [name,values,ids] of [
 ['Stadtteil',{place:'Ochsenwerder'},['Gauert']],
 ['Ort',{localPlace:'gauert'},['Gauert']],
 ['Kategorie',{category:'local-history'},['Gauert']],
 ['Suchbegriff',{q:'Erinnerung an Sande'},['Sande']],
 ['Beitragsart',{historyType:'memory'},['Sande']],
 ['Keine Treffer',{q:'keine-test-treffer'},[]],
])test('Kartenpunkte verwenden dieselben gefilterten Beiträge: '+name,()=>assert.deepEqual(historyPoints(filterContributions(docs,values)).map(p=>p.id),ids));
