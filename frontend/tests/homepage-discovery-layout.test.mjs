import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('Die drei Themenvorschauen teilen die Kartenreihe, Höhe und Linkausrichtung',async()=>{
 const home=await readFile(new URL('../app/homepage-current.tsx',import.meta.url),'utf8');
 const policy=await readFile(new URL('../app/encounter-policy.tsx',import.meta.url),'utf8');
 const css=await readFile(new URL('../app/globals.css',import.meta.url),'utf8');
 const previews=await readFile(new URL('../lib/homepage-previews.mjs',import.meta.url),'utf8');
 const history=await readFile(new URL('../lib/gazetteer-data.mjs',import.meta.url),'utf8');
 const tourism=await readFile(new URL('../lib/tourism-data.mjs',import.meta.url),'utf8');
 assert.ok(home.includes('homepage-current-grid homepage-discovery-grid'));
 assert.ok(home.includes('className="homepage-current-card"'));
 assert.ok(home.includes('<EncounterPolicyCard/>'));
 assert.ok(policy.includes('export function EncounterPolicyCard(){return <aside className="panel encounter-policy-card"'));
 assert.ok(history.includes('"name": "Die Reit"'));
 assert.ok(tourism.includes("verified('schloss','Bergedorfer Schloss & Bergedorf Museum'"));
 assert.ok(previews.includes("id:'history-'+historicalPlace.id")&&previews.includes("id:'tourism-'+touristPlace.id"));
 assert.ok(policy.includes('Bezahlbare Begegnungsorte für Bergedorf schaffen und dauerhaft fördern'));
 assert.ok(css.includes('.homepage-discovery-grid{align-items:stretch}'));
 assert.ok(css.includes('.homepage-discovery-grid>.encounter-policy-card{display:flex;flex-direction:column'));
 assert.ok(css.includes('.homepage-discovery-grid>.encounter-policy-card{display:flex;flex-direction:column;align-items:flex-start;min-width:0;gap:12px;margin:0;padding:24px;border:1px solid #d8e0d7;border-radius:10px;background:#fff}'));
 assert.ok(css.includes('.homepage-discovery-grid>.encounter-policy-card>p:last-child{margin-top:auto}'));
 assert.ok(css.includes('.homepage-current-link{margin-top:auto'));
});
