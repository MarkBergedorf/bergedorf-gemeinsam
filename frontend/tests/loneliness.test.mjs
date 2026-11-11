import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {lonelinessTopics,lonelinessGroups,lonelinessIndex,buildTopicIndex,resolveLonelinessPath,lonelinessParentHref,lonelinessBreadcrumbs,searchLoneliness,lonelinessSearchHref} from '../lib/loneliness.mjs';
import {parseRoute} from '../lib/navigation.mjs';
test('Alle 18 beauftragten Hauptthemen unverändert und genau einer visuellen Gruppe zugeordnet',()=>{
 const expected=['Einsamkeit verstehen','Warum entsteht Einsamkeit?','Was ist ein gesundes Kennenlernen?','Einsamkeit in unterschiedlichen Lebensphasen und Lebenssituationen','Einsamkeit und Gesundheit','Was kann ich selbst gegen Einsamkeit tun?','Hilfe, Beratung und Unterstützung finden','Begegnung und Gemeinschaft im Alltag','Wie gründe ich eine Begegnungsstätte, die von allen Gruppen der Gesellschaft besucht wird?','Einsamkeit in Bergedorf – Stadtteile und örtliche Lebensbedingungen','Organisationen, Einrichtungen und Netzwerke','Menschen erreichen, die bisher keine Angebote nutzen','Wissenschaft, Forschung und Wirksamkeit','Das Hamburger Bündnis gegen Einsamkeit','Politik, Strategien und öffentliche Verantwortung','Digitale Beziehungen, Medien und neue Technologien','Veranstaltungen, Projekte und Mitwirkung','Quellen, Dokumentation und Transparenz'];
 assert.deepEqual(lonelinessTopics.map(n=>n.title),expected);assert.equal(lonelinessGroups.length,4);assert.equal(lonelinessIndex.length,138);
 for(const n of lonelinessTopics){assert.equal(lonelinessGroups.filter(g=>g.id===n.group).length,1);assert(n.description.trim());assert(n.children.length>0);assert.equal(n.content,'');}
});
test('Jede veröffentlichte Adresse lässt sich direkt auflösen, falsche Pfade werden nicht umgedeutet',()=>{
 for(const node of lonelinessIndex){const route=parseRoute(node.href);assert.equal(route.page,'einsamkeit');assert.equal(resolveLonelinessPath(route.parts.slice(1)).id,node.id);assert.equal(lonelinessParentHref(node),'#einsamkeit'+(node.path.length>1?'/'+node.path.slice(0,-1).join('/'):''));}
 for(const path of [[],['nicht-vorhanden'],['hilfe','nicht-vorhanden'],['gesundheit','hilfe']])assert.equal(resolveLonelinessPath(path),null);
 const p=readFileSync('app/platform.tsx','utf8');assert(p.includes("page==='einsamkeit'?<LonelinessPage/>"));assert(p.includes("onClick={()=>go('#einsamkeit')}"));assert(p.includes("aria-current={page==='einsamkeit'?'page':undefined}"));
});
test('Rekursive Unterebenen, vollständige Pfade und Eltern-Zurücklinks sind auch für tiefe Bäume vorbereitet',()=>{
 const index=buildTopicIndex([{id:'a',title:'A',children:[{id:'b',title:'B',children:[{id:'c',title:'C',children:[{id:'d',title:'D'}]}]}]}]);
 const leaf=resolveLonelinessPath(parseRoute('#einsamkeit/a/b/c/d').parts.slice(1),index);assert.equal(leaf.title,'D');assert.equal(lonelinessParentHref(leaf),'#einsamkeit/a/b/c');
 assert.deepEqual(lonelinessBreadcrumbs(leaf).map(c=>c.href),['#einsamkeit','#einsamkeit/a','#einsamkeit/a/b','#einsamkeit/a/b/c','#einsamkeit/a/b/c/d']);
 let current=leaf;for(const wanted of ['C','B','A']){current=resolveLonelinessPath(parseRoute(lonelinessParentHref(current)).parts.slice(1),index);assert.equal(current.title,wanted)}assert.equal(lonelinessParentHref(current),'#einsamkeit');
 assert.throws(()=>buildTopicIndex([{id:'a',children:[{id:'a'}]}]));assert.throws(()=>buildTopicIndex([{id:'a/b'}]));
});
test('Lokale Suche: Titel, Kurzbeschreibung und realer Inhalt; keine erfundenen Ergebnisse',()=>{
 assert(searchLoneliness('UNTERSTÜTZUNG').some(n=>n.id==='hilfe'));assert(searchLoneliness('soziale Isolation').some(n=>n.id==='verstehen'));assert.equal(searchLoneliness('nieveröffentlichterartikelxyz').length,0);assert.equal(searchLoneliness('   ').length,0);
 const custom=buildTopicIndex([{id:'test',title:'Echt',description:'Kurzbeschreibung',content:'Dokumentierter Artikeltext',children:[]}]);assert.equal(searchLoneliness('Artikeltext',custom).length,1);assert.equal(searchLoneliness('nichtvorhanden',custom).length,0);
 assert.equal(parseRoute(lonelinessSearchHref('Bündnis & Politik')).params.q,'Bündnis & Politik');assert.equal(lonelinessSearchHref(''),'#einsamkeit');
});
test('Navigation nutzt bestehende Browser-Historie, aktive Hilfe und zugängliches Suchformular',()=>{
 const s=readFileSync('app/loneliness.tsx','utf8');for(const token of ['href="#einsamkeit/hilfe"','aria-label="Themenpfad"','lonelinessParentHref(node)','aria-current="page"','role="search"','role="status"','Thema nicht gefunden','Der redaktionelle Inhalt zu diesem Thema wird noch ergänzt.'])assert(s.includes(token));
 assert(s.includes('navigate(lonelinessSearchHref(draft),{scroll:false})'));assert(!/history\.(replaceState|pushState)|location\.replace/.test(s));
 for(const f of ['app/loneliness.tsx','lib/loneliness.mjs'])assert(!/fetch\(|localStorage|sessionStorage|indexedDB|XMLHttpRequest|WebSocket|sendBeacon/.test(readFileSync(f,'utf8')));
 const nav=readFileSync('app/navigation.tsx','utf8');assert(nav.includes("options.replace?'replaceState':'pushState'"));assert(nav.includes("window.addEventListener('popstate'"));
});
test('Redaktionelle Bestandsaufnahme erfasst alle Originalzeilen und kennzeichnet Prüfstatus und Aussagegrenzen',()=>{
 const base='../docs/einsamkeit/',registry=JSON.parse(readFileSync(base+'quellenregister.json','utf8')),records=readFileSync(base+'bestandsaufnahme.jsonl','utf8').trim().split('\n').map(l=>JSON.parse(l));
 assert.equal(registry.sources.length,5);assert.equal(records.length,registry.nonEmptySourceLines);assert.equal(new Set(records.map(r=>r.id)).size,records.length);
 for(const source of registry.sources){const rows=records.filter(r=>r.datei===source.id);assert(rows.length>0);assert(rows.every(r=>r.original.trim()&&r.quellabschnitt&&Number(r.fundstelle.split(' ')[1])<=source.totalLines));assert.equal(createHash('sha256').update(JSON.stringify(rows.map(r=>[Number(r.fundstelle.split(' ')[1]),r.original]))).digest('hex'),source.nonEmptyLinesSha256);}
 for(const r of records){assert.equal(r.pruefstatus,'inhaltlich_geprueft');assert.equal(r.tatsachenVerifiziert,false);if(r.zeilenrolle==='inhalt'){assert.equal(r.bearbeitungsstand,'thematisch_zugeordnet_quellenpruefung_offen');assert.equal(r.quellenpruefung,'ausstehend');assert(r.zuordnungen.length)}else assert(['gliederung','kontext','formatierung'].includes(r.zeilenrolle));for(const id of r.zuordnungen)assert(lonelinessIndex.some(n=>n.id===id));assert(r.zuordnungsbegruendung);}

 assert(!readFileSync('lib/loneliness.mjs','utf8').includes('bestandsaufnahme.jsonl'));
});
