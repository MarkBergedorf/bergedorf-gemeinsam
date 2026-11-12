import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
const baseline='5152c0081f3566504c3c8e527e40b204a2a0d85d';
const sentence=['Individuelle Originalbeitrags-URLs und Urheber','sind nicht vollständig geklärt.'].join(' ');
test('Drei sichtbare Themenkarten nutzen dasselbe bestehende historische Verzeichnis',()=>{
 const card=readFileSync('app/historical-directory-entry.tsx','utf8');
 assert(card.includes('href="#einsamkeit/stadtteile/t10-6"'));
 assert(card.includes('Historische Kneipen, Gaststätten und Begegnungsorte'));
 assert(card.includes('Entdecken Sie frühere Bergedorfer Kneipen, Gastwirtschaften, Cafés und andere Begegnungsorte – mit historischen Fotos, Zeitungsartikeln, Werbeanzeigen und persönlichen Erinnerungen.'));
 for(const file of ['platform.tsx','history-entry.tsx','loneliness.tsx'])assert(readFileSync('app/'+file,'utf8').includes('<HistoricalDirectoryEntry/>'));
 assert(readFileSync('app/loneliness.tsx','utf8').includes("isRoot||['begegnung','stadtteile'].includes(node?.id)"));
 const css=readFileSync('app/globals.css','utf8');assert(css.includes('.historical-directory-entry:focus-visible'));assert(css.includes('padding:clamp(20px,4vw,32px)'));
});
test('Nur beanstandete Quellenbezeichnung geändert; alle 88 Bilder, Quellenlinks und 104 Orte erhalten',()=>{
 const file='frontend/lib/historical-media-4.json';
 const old=JSON.parse(execFileSync('git',['show',baseline+':'+file]));
 const actual=JSON.parse(readFileSync('lib/historical-media-4.json','utf8'));
 const expected=old.map(m=>({...m,source:m.source.replace('Bereitgestelltes Bildarchiv; Sammlung Bergedorfer Fotos – von damals bis heute. '+sentence,'Historische Bildsammlung Ronald Hartmann – Bergedorfer Fotos von damals bis heute.')}));
 assert.deepEqual(actual,expected);assert.equal(actual.flatMap(m=>m.numbers).length,88);
 const places=readFileSync('lib/historical-places-4.json');assert.equal(JSON.parse(places).length,104);
 assert(places.equals(execFileSync('git',['show',baseline+':frontend/lib/historical-places-4.json'])));
});
test('Öffentlich ausgelieferte Dateien enthalten den beanstandeten Satz nicht',()=>{
 const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(p+'/'+e.name):[p+'/'+e.name]);
 for(const p of walk('dist').filter(p=>/\.(js|json|html|css|txt)$/.test(p)))assert(!readFileSync(p,'utf8').includes(sentence),p);
});
