import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {publicAssetUrl} from '../lib/public-asset-url.mjs';

test('Kartenassets bleiben im GitHub-Pages-Projektpfad',()=>{
 const base='https://markbergedorf.github.io/bergedorf-gemeinsam/';
 assert.equal(publicAssetUrl('assets/history-liberty.json','/bergedorf-gemeinsam/',base),base+'assets/history-liberty.json');
 assert.equal(publicAssetUrl('/assets/map-fonts/noto-sans-400.css','/bergedorf-gemeinsam/',base),base+'assets/map-fonts/noto-sans-400.css');
 assert.equal(publicAssetUrl('assets/history-liberty.json','/',base),'https://markbergedorf.github.io/assets/history-liberty.json');
});

test('Basispfade ohne abschließenden Schrägstrich bleiben Verzeichnisse',()=>{
 assert.equal(publicAssetUrl('assets/bergedorf-boundary.geojson','/bergedorf-gemeinsam','https://markbergedorf.github.io/bergedorf-gemeinsam/'),'https://markbergedorf.github.io/bergedorf-gemeinsam/assets/bergedorf-boundary.geojson');
});

test('alle OpenFreeMap-Renderer verwenden den konfigurierten Vite-Basispfad',async()=>{
 const files=['history-map.tsx','organisation-map.tsx','organisation-location.tsx','historical-encounters-map.tsx','tourism.tsx'];
 for(const file of files){
  const source=await readFile(new URL('../app/'+file,import.meta.url),'utf8');
  assert.match(source,/historyTiles\(L,[\s\S]{0,180}?baseUrl:import\.meta\.env\.BASE_URL/ ,file);
 }
 const history=await readFile(new URL('../app/history-map.tsx',import.meta.url),'utf8');
 assert.equal((history.match(/publicAssetUrl\('assets\/bergedorf-(?:boundary|stadtteile)\.geojson'/g)||[]).length,2);
 for(const file of ['history-location.tsx','organisation-location.tsx','organisation-map.tsx']){
  const source=await readFile(new URL('../app/'+file,import.meta.url),'utf8');
  assert(source.includes("publicAssetUrl('assets/bergedorf-"),file);
 }
});
