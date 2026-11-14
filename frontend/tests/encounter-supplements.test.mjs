import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
import ts from 'typescript';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {parseRoute} from '../lib/navigation.mjs';
const data=JSON.parse(readFileSync('lib/encounter-supplements.json'));
const sources=JSON.parse(readFileSync('lib/encounter-science-sources.json'));
const require=createRequire(import.meta.url);let route=parseRoute('#politik/begegnungsorte/wissenschaft');
const code=ts.transpileModule(readFileSync('app/encounter-supplements.tsx','utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText;
const components={};new Function('require','exports',code)(p=>p.endsWith('.css')?{}:p==='./navigation'?{useRoute:()=>route}:require(p),components);
test('Drei direkt erreichbare Ergänzungen rendern vollständig mit eindeutigen Abschnitten und gültigen Quellen',()=>{
 const sourceIds=new Set(sources.map(s=>s.id));assert.equal(sourceIds.size,sources.length);
 for(const [key,page] of Object.entries(data)){
  route=parseRoute('#politik/begegnungsorte/'+key);assert.equal(route.id,key);
  const html=renderToStaticMarkup(React.createElement(components.EncounterSupplementArticle));
  assert(html.includes('<h1>'+page.title+'</h1>'));assert.equal(new Set(page.sections.map(s=>s.id)).size,page.sections.length);
  for(const s of page.sections){assert(html.includes('id="encounter-extra-'+s.id+'"'));for(const ref of s.refs)assert(sourceIds.has(ref),ref);for(const p of s.paragraphs)assert(html.includes(p.replaceAll('&','&amp;').replaceAll('>','&gt;').replaceAll('<','&lt;').replaceAll('"','&quot;').replaceAll("'",'&#x27;')),s.id);}
  assert(!/<form|<input|<textarea/.test(html));assert(html.includes('href="#einsamkeit/stadtteile/t10-6"'));assert(html.includes('href="#einsamkeit"'));
 }
});
test('Forschung trennt A bis O, acht Ebenen, Wiederkehr und relative Änderung',()=>{
 const f=data.forschung.sections;assert.deepEqual(f.filter(s=>s.id.startsWith('bereich-')).map(s=>s.id),Array.from('abcdefghijklmno',x=>'bereich-'+x));
 assert.equal(f.find(s=>s.id==='ebenen').items.length,8);assert.equal(f.find(s=>s.id==='nutzungsziel').items.length,6);
 const text=JSON.stringify(f);for(const t of ['20 auf 18 Prozent','zwei Prozentpunkte','Einwilligung zur Forschung ist keine Eintrittskarte','gesamten Wohnbevölkerung ab 18','nur einmal','ein- bis zweimal wöchentlich'])assert(text.includes(t),t);
});
test('Ursprünglicher politischer Artikel, Betriebskonzept und gesamter bisheriger redaktioneller Datenbestand bleiben bytegleich',()=>{
 for(const f of ['app/encounter-policy.tsx','lib/encounter-operating-concept.json',...execFileSync('git',['ls-tree','-r','--name-only','e4a3272','frontend/lib'],{encoding:'utf8'}).split('\n').filter(p=>p.endsWith('.json')).map(p=>p.slice(9))])assert(readFileSync(f).equals(execFileSync('git',['show','e4a3272:frontend/'+f],{maxBuffer:16e6})),f);
});
test('Navigation zeigt ausdrückliche Fortschreibung und sichere direkte Unterrouten',()=>{
 const html=renderToStaticMarkup(React.createElement(components.EncounterExpansionNavigation));for(const t of ['vier eigenständige Teams','jährliche Nutzung','abweichenden älteren Formulierungen Vorrang','/forschung?abschnitt=nutzungsziel'])assert(html.includes(t),t);
 const p=readFileSync('app/platform.tsx','utf8');assert(p.includes("route.id?<EncounterSupplementArticle/>"));assert(p.includes("!route.id&&<EncounterExpansionNavigation/>"));
 const s=readFileSync('app/encounter-supplements.tsx','utf8');assert(!/fetch\s*\(|sendBeacon|localStorage|sessionStorage|indexedDB/.test(s));
});
