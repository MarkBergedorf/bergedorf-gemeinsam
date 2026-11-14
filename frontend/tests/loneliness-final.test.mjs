import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import articles from '../lib/loneliness-articles-6.json' with {type:'json'};
import sources from '../lib/loneliness-sources-6.json' with {type:'json'};
import {lonelinessArticles,lonelinessSources,lonelinessArticleText} from '../lib/loneliness-articles.mjs';
import {lonelinessIndex,lonelinessTopics,resolveLonelinessPath,lonelinessBreadcrumbs,lonelinessParentHref,searchLoneliness} from '../lib/loneliness.mjs';
import {lonelinessEvents,eventGroup,eventGroups,berlinDate} from '../lib/loneliness-events.mjs';
import {editorialConnections,themeConnections,platformConnections} from '../lib/loneliness-connections.mjs';
const baseline='5f1119ad5471fbc04a074b45707976589f37d8d7';
test('Auftrag 6: alle 14 vorhandenen Ansichten 17/18 ausgearbeitet, frühere Daten bytegleich',()=>{
 const targets=lonelinessIndex.filter(n=>['mitwirkung','quellen'].includes(n.path[0]));assert.equal(targets.length,14);assert.deepEqual(Object.keys(articles).sort(),targets.map(n=>n.id).sort());assert.equal(Object.keys(lonelinessArticles).length,97);
 for(const n of targets){const a=articles[n.id];assert.equal(a.date,'14. November 2026');assert(a.sections.length>=3);assert(lonelinessArticleText(n.id).length>700);for(const s of a.sections)for(const p of s.paragraphs){assert(p.text);assert(Array.isArray(p.refs));if(p.kind==='institution')assert(p.refs.length);for(const ref of p.refs)assert(lonelinessSources[ref],ref)}}
 for(const f of ['loneliness-topics.json','loneliness-articles.json','loneliness-articles-3.json','loneliness-articles-4-social.json','loneliness-articles-4-guide.json','loneliness-articles-encounters.json','loneliness-help.json','historical-media-4.json','historical-places-4.json','encounter-operating-concept.json'])assert(readFileSync('lib/'+f).equals(execFileSync('git',['show',baseline+':frontend/lib/'+f],{maxBuffer:8e6})),f);
 for(const f of ['frontend/app/encounter-policy.tsx','frontend/pages/privacy.tsx','frontend/app/platform.tsx'])assert(readFileSync('../'+f).equals(execFileSync('git',['show',baseline+':'+f],{maxBuffer:8e6})),f);
});
test('Termine: Berliner Datum, Archivgrenzen, Zeiträume und Planungen ohne falsche Bestätigung',()=>{
 assert.equal(berlinDate(new Date('2026-11-13T23:30:00Z')),'2026-11-14');assert.equal(berlinDate(new Date('2027-06-21T22:30:00Z')),'2027-06-22');
 assert.equal(eventGroup(lonelinessEvents.find(e=>e.id==='kommunen'),new Date('2026-11-26T12:00:00Z')),'archive');
 const e=lonelinessEvents.find(e=>e.id==='rilke');assert.equal(eventGroup(e,new Date('2026-11-28T11:00:00Z')),'confirmed');assert.equal(eventGroup(e,new Date('2026-11-28T23:01:00Z')),'archive');
 const plan=lonelinessEvents.find(e=>e.kind==='planned');assert.equal(eventGroup(plan,new Date('2026-11-14T12:00:00Z')),'planned');assert.equal(eventGroup(plan,new Date('2030-01-01T12:00:00Z')),'archive');
 const week=lonelinessEvents.find(e=>e.id==='woche2027');assert.equal(eventGroup(week,new Date('2027-06-27T10:00:00Z')),'confirmed');assert.equal(eventGroup(week,new Date('2027-06-28T10:00:00Z')),'archive');
 assert.equal(eventGroups(new Date('2026-11-14T12:00:00Z')).flatMap(g=>g.events).length,lonelinessEvents.length);
 for(const e of lonelinessEvents){assert.equal(e.checked,'2026-11-14');assert.equal(e.timezone,'Europe/Berlin');assert(e.start<=e.end);assert(sources[e.source]);assert(new URL(e.url).protocol==='https:');}
 assert(!lonelinessEvents.some(e=>/KrisenNETZ|September|Konferenz|Barometer|Januar/.test(e.title)));assert(eventGroups(new Date('2026-11-14')).find(g=>g.id==='archive').events.some(e=>e.id==='auftakt2026'));
});
test('Alle 18 Hauptthemen und sämtliche Unterseiten haben gültige begründete Querverbindungen',()=>{
 assert.equal(Object.keys(themeConnections).length,18);const incoming=new Set();
 for(const n of lonelinessIndex){assert.equal(resolveLonelinessPath(n.path).id,n.id);assert.equal(lonelinessBreadcrumbs(n).at(-1).href,n.href);assert(lonelinessParentHref(n));const links=editorialConnections(n);assert(links.length>=2,n.id);for(const l of links){assert(l.reason.length>25);assert(lonelinessIndex.some(n=>n.id===l.id));assert.notEqual(l.id,n.id);if(n.path.length===1)incoming.add(l.id)}}
 for(const t of lonelinessTopics)assert(incoming.has(t.id),t.id);assert.equal(platformConnections.length,6);assert.deepEqual(platformConnections.map(p=>p[0]),['#anliegen','#erfahrung','#geschichte','#politik','#verzeichnis','#organisation']);
});
test('Suche findet tatsächliche neue Fachtexte und Termine; keine erfundenen Funktionen',()=>{
 for(const query of ['Rilke','26.11.2026','Kuchenbudget','Transkriptionsfehler','Windhundprinzip']){const normalized=query==='26.11.2026'?'2026-11-26':query;assert(searchLoneliness(normalized).length,query)}
 const s=readFileSync('app/loneliness-final.tsx','utf8');assert(!/<form|<input|fetch\(|localStorage|sessionStorage|indexedDB|sendBeacon/.test(s));assert(s.includes('Öffentliche Einreichungen sind weiterhin deaktiviert'));assert(s.includes('Letzte Prüfung'));assert(s.includes('Ursprüngliche Planung; Durchführung nicht bestätigt.'));
 const renderer=readFileSync('app/loneliness-article.tsx','utf8');for(const label of ['Institutionelle Selbstauskunft','Persönliche Erinnerung','Auftaktaufbereitungen','Empfehlung','Politische Forderung','Angekündigtes Vorhaben','Nachgewiesene Umsetzung','Noch ungeprüft','Letzte Quellenprüfung'])assert(renderer.includes(label));
});
test('Gesamtabgleich erfasst jede der fünf Berichtszeilen und alle zusätzlichen Konzeptschwerpunkte ohne Verifikationsfiktion',()=>{
 const audit=JSON.parse(readFileSync('../docs/einsamkeit/auftrag6-gesamtabgleich.json','utf8'));const rows=readFileSync('../docs/einsamkeit/bestandsaufnahme.jsonl','utf8').trim().split('\n').map(JSON.parse);assert.equal(rows.length,2550);assert.equal(audit.zeilen.length,rows.length);assert.equal(new Set(audit.zeilen.map(r=>r.id)).size,2550);
 for(let i=0;i<rows.length;i++){const r=rows[i],a=audit.zeilen[i];assert.equal(a.id,r.id);assert.equal(a.originalSha256,createHash('sha256').update(r.original).digest('hex'));assert.equal(a.originalaussageVerifiziert,false);if(r.zeilenrolle!=='formatierung')assert(a.offen.length);for(const t of a.zielansichten){assert.equal(t.fachtextVeroeffentlicht,Boolean(lonelinessArticles[t.id]));if(!t.fachtextVeroeffentlicht)assert(t.offen)}}
 assert.equal(audit.bilanz.offeneAnsichten,42);assert.equal(audit.bilanz.konzeptSchwerpunkte,audit.zusaetzlicheKonzeptSchwerpunkte.length);assert.equal(audit.hauptthemen.length,18);
});
