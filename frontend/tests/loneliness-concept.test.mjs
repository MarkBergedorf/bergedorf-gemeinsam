import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {lonelinessTopics,lonelinessIndex,lonelinessHistoricalPlaces,resolveLonelinessPath,lonelinessBreadcrumbs,lonelinessParentHref,searchLoneliness} from '../lib/loneliness.mjs';
import {parseRoute} from '../lib/navigation.mjs';
const concept=readFileSync('../docs/einsamkeit/gesamtkonzeption.md','utf8');
const byNumber=number=>lonelinessIndex.find(n=>n.conceptNumber===number);
test('Verbindliche Konzeption: 18 Hauptthemen, 109 Unterthemen, 12 Vertiefungen nach beauftragter Ergänzung und unveränderte Titel',()=>{
 const headings=[...concept.matchAll(/^(#{2,4}) (\d+(?:\.\d+)*)(?:\.)? (.+)$/gm)];
 assert.equal(headings.length,138);assert.equal(lonelinessIndex.length,headings.length+1);
 for(const [depth,wanted] of [[1,18],[2,109],[3,12]])assert.equal(lonelinessIndex.filter(n=>n.path.length===depth).length,wanted);
 for(const [,marks,number,title] of headings){const n=byNumber(number);assert(n,number);assert.equal(n.title,title);assert.equal(n.path.length,marks.length-1);assert(n.description.trim());assert.equal(n.content,'');if(n.parents.length)assert.equal(n.parents.at(-1).conceptNumber,number.split('.').slice(0,-1).join('.'));}
 assert.deepEqual(lonelinessTopics.map(n=>n.id),['verstehen','ursachen','kennenlernen','lebenssituationen','gesundheit','selbst-aktiv-werden','hilfe','begegnung','begegnungsstaette','stadtteile','netzwerke','menschen-erreichen','forschung','buendnis','politik','digital','mitwirkung','quellen']);
 assert.equal(new Set(lonelinessIndex.map(n=>n.id)).size,139);assert.equal(new Set(lonelinessIndex.map(n=>n.href)).size,139);
});
test('Alle vereinbarten Schwerpunktpunkte verlustfrei als Themenumfang übernommen',()=>{
 let current;
 const scopes=new Map();for(const line of concept.split('\n')){const h=line.match(/^(#{2,4}) (\d+(?:\.\d+)*)(?:\.)? (.+)$/);if(h){current=h[2];scopes.set(current,[])}else if(line.startsWith('## '))current=null;else if(current&&line.startsWith('- '))scopes.get(current).push(line.slice(2).replace(/\*\*([^*]+)\*\*/g,'$1'));}
 for(const [number,scope] of scopes)assert.deepEqual(byNumber(number).scope,scope,number);
});
test('Alle echten Ebenen: Direktaufruf, vollständiger Breadcrumb und Elternlink',()=>{
 for(const n of lonelinessIndex){assert.equal(resolveLonelinessPath(parseRoute(n.href).parts.slice(1)).id,n.id);const crumbs=lonelinessBreadcrumbs(n);assert.equal(crumbs.length,n.path.length+1);assert.equal(crumbs.at(-1).href,n.href);assert.equal(crumbs.at(-2).href,lonelinessParentHref(n));for(const parent of n.parents)assert(crumbs.some(c=>c.href===parent.href&&c.title===parent.title));}
 assert.deepEqual(lonelinessBreadcrumbs(byNumber('2.5.1')).map(c=>c.title),['Einsamkeit in Bergedorf','Warum entsteht Einsamkeit?','Verschwundene Begegnungsorte in Bergedorf','Ehemalige Gastwirtschaften und Kneipen']);
 assert.equal(resolveLonelinessPath(['ursachen','t2-5','t2-4-1']),null);
});
test('Suche erreicht alle neuen Themen und zeigt keine unveröffentlichten Berichtsdetails',()=>{
 for(const n of lonelinessIndex)assert(searchLoneliness(n.title).some(result=>result.id===n.id),n.title);
 assert(searchLoneliness('Ehemalige Gastwirtschaften').some(n=>n.conceptNumber==='2.5.1'));
 assert(searchLoneliness('Wohnung kaum verlassen').some(n=>n.conceptNumber==='7.3'));
 assert(searchLoneliness('97 Gastwirtschaften').every(n=>['ursachen','stadtteile'].includes(n.path[0])));assert.equal(searchLoneliness('Cornelia Springer-Foart').length,0);
});
test('Historische Querverweise und Kommentargrenzen ohne neue öffentliche Funktionen',()=>{
 for(const n of lonelinessIndex)for(const id of n.related||[])assert(lonelinessIndex.some(v=>v.id===id));
 assert.equal(byNumber('2.5').sharedCollection,byNumber('10.6').sharedCollection);assert(byNumber('2.5').related.includes(byNumber('10.6').id));assert(byNumber('10.6').related.includes(byNumber('2.5').id));assert(lonelinessHistoricalPlaces.length>0);assert.equal(new Set(lonelinessHistoricalPlaces.map(p=>p.id)).size,lonelinessHistoricalPlaces.length);assert(lonelinessHistoricalPlaces.every(p=>p.coordinates===null));
 for(const number of ['3','3.8'])assert.equal(byNumber(number).plannedCommentMaxLength,250);for(const number of ['9','9.12'])assert.equal(byNumber(number).plannedCommentMaxLength,500);
 const s=readFileSync('app/loneliness.tsx','utf8');assert(s.includes('href="#einsamkeit/hilfe"'));assert(s.includes('Die Kommentarfunktion ist derzeit nicht freigeschaltet.'));assert(!s.includes('Die Untergliederung wird nach Abgleich'));
});
test('Lange Titel und Pfade: keine Kürzung, bestehende Kartengestaltung mit mobilen Umbrüchen',()=>{
 const s=readFileSync('app/loneliness.tsx','utf8'),css=readFileSync('app/globals.css','utf8');assert(s.includes('<h3 className="loneliness-card-title">{topic.title}</h3>'));assert(s.includes('node?.title'));assert(!/\.title\.(slice|substring)|line-clamp|text-overflow/.test(s));assert(css.includes('.loneliness-page .loneliness-breadcrumbs li{display:inline;overflow-wrap:anywhere}'));assert(css.includes('@media(max-width:600px){.loneliness-page .loneliness-cards{grid-template-columns:1fr}'));
});
test('Vollständige Quellenzuordnungen sind nachvollziehbar; offene Tatsachenprüfung ist keine fehlende Themenzuordnung',()=>{
 const dir='../docs/einsamkeit/',rows=readFileSync(dir+'bestandsaufnahme.jsonl','utf8').trim().split('\n').map(JSON.parse),decisions=JSON.parse(readFileSync(dir+'zuordnungsentscheidungen.json','utf8')),open=JSON.parse(readFileSync(dir+'zuordnung-offen.json','utf8'));
 assert.equal(rows.length,2550);assert.equal(Object.keys(decisions).length,2550);assert.deepEqual(open.fachlichUnzugeordnet,[]);
 for(const r of rows){const d=decisions[r.id];assert(d);assert.equal(r.pruefstatus,'inhaltlich_geprueft');assert.deepEqual(r.zuordnungen,d.targets.map(number=>byNumber(number).id));assert.equal(r.zuordnungsbegruendung,d.note);assert.equal(r.tatsachenVerifiziert,false);}
});
