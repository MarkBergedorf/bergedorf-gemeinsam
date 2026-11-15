import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import ts from 'typescript';
import {encounterNavigationTarget,encounterOverviewHref} from '../lib/encounter-navigation.mjs';
const paths=['#politik/begegnungsorte','#politik/begegnungsorte/wissenschaft','#politik/begegnungsorte/betrieb','#politik/begegnungsorte/forschung','#einsamkeit/stadtteile/t10-6','#einsamkeit'];
const selectors=['#encounter-policy-heading','#encounter-supplement-heading','#encounter-supplement-heading','#encounter-supplement-heading','.loneliness-intro h1','.loneliness-intro h1'];
function compile(file,require){const exports={};new Function('require','exports',ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText)(require,exports);return exports}
for(const [i,path] of paths.entries())test('Renderabhängiger Fokus und Scrollen: '+path,()=>{
 let effect,cleanup,queue=[],cancelled=new Set(),serial=0,selected=null,route={path},focused=0,scrolled=0;
 const target={focus(o){assert.deepEqual(o,{preventScroll:true});focused++},scrollIntoView(o){assert.deepEqual(o,{block:'start',behavior:'instant'});scrolled++}};
 const old={location:globalThis.location,document:globalThis.document,requestAnimationFrame:globalThis.requestAnimationFrame,cancelAnimationFrame:globalThis.cancelAnimationFrame};
 Object.assign(globalThis,{location:{hash:path},document:{querySelector(s){assert([selectors[i],'#encounter-supplement-heading','#encounter-overview-heading'].includes(s));return selected}},requestAnimationFrame(fn){const id=++serial;queue.push([id,fn]);return id},cancelAnimationFrame(id){cancelled.add(id)}});
 const flush=()=>{const pending=queue;queue=[];for(const [id,fn] of pending)if(!cancelled.has(id))fn()};
 try{
  const c=compile('app/encounter-navigation.tsx',p=>p==='react'?{useLayoutEffect(fn){effect=fn}}:p==='./navigation'?{useRoute:()=>route}:p.endsWith('encounter-navigation.mjs')?{encounterNavigationTarget,encounterOverviewHref}:p.endsWith('.css')?{}:{});
  c.EncounterNavigationFocus();cleanup=effect();assert.equal(focused,0);flush();assert.equal(focused,0,'Kein Fokus vor Zielrendering');selected=target;flush();assert.equal(focused,1);assert.equal(scrolled,1);assert.equal(target.tabIndex,-1);
  cleanup();c.EncounterNavigationFocus();cleanup=effect();flush();flush();assert.equal(focused,2,'Wiederholter Aufruf stellt Ziel erneut sichtbar');
  cleanup();c.EncounterNavigationFocus();cleanup=effect();location.hash=encounterOverviewHref;flush();flush();assert.equal(focused,2,'Überholtes Renderziel darf neue Navigation nicht überschreiben');
  route={path:encounterOverviewHref};c.EncounterNavigationFocus();cleanup=effect();flush();flush();assert.equal(focused,3);assert.equal(scrolled,3);
 }finally{cleanup?.();Object.assign(globalThis,old)}
});
test('Übersichtsanker, Abschnittslinks und unveränderte fremde Routen',()=>{
 assert.equal(encounterNavigationTarget(encounterOverviewHref),'#encounter-overview-heading');
 assert.equal(encounterNavigationTarget(paths[2]+'?abschnitt=teams'),'#encounter-extra-teams');
 for(const path of ['#geschichte','#start','#einsamkeit/stadtteile','#einsamkeit/hilfe','#verwaltung'])assert.equal(encounterNavigationTarget(path),null);
});
test('Keine Rückkehrabhängigkeit vom Verlauf oder Datenerfassung; mobile Navigation bleibt sichtbar',()=>{
 const ui=readFileSync('app/encounter-navigation.tsx','utf8');assert(ui.includes('href={encounterOverviewHref}'));assert(!/history\.back|history\.go|fetch\(|localStorage|sessionStorage/.test(ui));
 const css=readFileSync('app/encounter-supplements.css','utf8');assert(css.includes('.encounter-expansion nav,.encounter-supplement nav{display:block}'));assert(css.includes('min-height:44px'));assert(css.includes(':focus-visible'));
});
