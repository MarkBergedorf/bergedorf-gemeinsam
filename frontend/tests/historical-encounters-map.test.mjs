import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import places from '../lib/historical-places-4.json' with {type:'json'};
import points from '../lib/historical-map-points-1.json' with {type:'json'};
import {historicalMapHref,hasHistoricalMapPoint,resolveLocalView} from '../lib/loneliness-local.mjs';

test('historical encounter map accounts for every archival record without fabricated point values',()=>{
 const siteIds=new Set(places.map(p=>p.id));
 const mapped=points.filter(p=>!p.landmark);
 assert.equal(places.length,104);
 assert.equal(mapped.length,19);
 assert.equal(mapped.filter(p=>p.lat===null||p.lon===null||!Number.isFinite(p.lat)||!Number.isFinite(p.lon)).length,0);
 assert.equal(new Set(points.map(p=>p.id)).size,points.length);
 for(const p of mapped){assert.ok(siteIds.has(p.id),`unknown historic record ${p.id}`);assert.ok(p.osm.startsWith('https://www.openstreetmap.org/'));assert.match(p.basis,/heutige|Hausnummer|Adresse|Gebäude|Einrichtung/i)}
 assert.equal(places.filter(p=>!hasHistoricalMapPoint(p.id)).length,85);
});

test('map route keeps a focused archive record in map mode and preserves its full-detail route',()=>{
 assert.equal(resolveLocalView('t10-6',{ansicht:'karte',ort:'sander-krug'}).place,null);
 assert.equal(resolveLocalView('t10-6',{ansicht:'karte',ort:'sander-krug'}).invalid,false);
 assert.equal(resolveLocalView('t10-6',{ort:'sander-krug'}).place.id,'sander-krug');
 assert.equal(historicalMapHref('sander-krug'),'#einsamkeit/stadtteile/t10-6?ansicht=karte&ort=sander-krug');
});

test('historic landmarks stay separate from business records and exclude the modern KörberHaus',()=>{
 const landmarks=points.filter(p=>p.landmark);
 assert.deepEqual(landmarks.map(p=>p.id).sort(),['alter-bahnhof-landmark','bergedorfer-schloss-landmark']);
 assert.ok(landmarks.some(p=>p.id==='alter-bahnhof-landmark'&&p.name.includes('1842')));
 assert.ok(!points.some(p=>/KörberHaus/i.test(p.id+' '+(p.name||''))));
});

test('map integration keeps the original archive view and exposes direct and reverse links',()=>{
 const page=readFileSync('app/loneliness.tsx','utf8'),archive=readFileSync('app/loneliness-local.tsx','utf8');
 assert.ok(page.includes('<HistoricalCollection key={pathKey} place={place||undefined}/>'));
 assert.ok(page.includes('<HistoricalCollectionMapView selectedId={route.params.ort||\'\'}/>'));
 assert.ok(page.includes('historicalMapHref(place.id)'));
 assert.ok(page.includes('historicalMapHref()'));
 assert.ok(archive.includes('historicalPlaces.length'));
 assert.ok(archive.includes('Historische Bildsammlung – alle 88 Abbildungen'));
});

test('historical map consent can be rejected or granted and the loaded map can be unloaded',()=>{
 const component=readFileSync('app/historical-encounters-map.tsx','utf8');
 assert(component.includes('onClick={e=>privacy.ask(e)}>Historische Karte laden'));
 assert(component.includes('onClick={()=>historyMapConsent.set(false)}>Karte entladen'));
 assert(component.includes('disabled={!consent}'));
});


test('cluster marker summaries and historic map tooltips remain readable and open within the viewport',()=>{
 const component=readFileSync('app/historical-encounters-map.tsx','utf8'),css=readFileSync('app/historical-encounters-map.css','utf8');
 assert.match(component,/cluster\.entries\.length\+' historische Einträge|\$\{cluster\.entries\.length\} historische Einträge/);
 assert.match(component,/tip\.append\(summary,count\)/);
 assert.match(component,/maxHeight:Math\.round\(window\.innerHeight\*\.65\),autoPan:true/);
 assert.match(css,/\.historic-map-tooltip\{[^}]*width:min\(260px,calc\(100vw - 48px\)\)[^}]*min-width:min\(190px,calc\(100vw - 48px\)\)/);
 const fullMapPage=readFileSync('app/history-map.tsx','utf8');
 assert.doesNotMatch(fullMapPage,/Straßenkarte: OpenFreeMap Liberty mit entlang der Straßen gesetzten Namen/);
 assert.match(fullMapPage,/<details><summary>Kartenquellen und Datenschutz/);
});
