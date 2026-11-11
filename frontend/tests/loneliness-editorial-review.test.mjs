import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {lonelinessIndex} from '../lib/loneliness.mjs';
const dir='../docs/einsamkeit/';
const json=name=>JSON.parse(readFileSync(dir+name,'utf8'));
const rows=readFileSync(dir+'bestandsaufnahme.jsonl','utf8').trim().split('\n').map(JSON.parse),byId=new Map(rows.map(r=>[r.id,r])),stats=json('auswertungsbilanz.json'),index=json('artikel-quellenindex.json'),issues=json('offene-prueffragen.json');
test('Alle 2550 Originale einschließlich Fundstellen und Kontext bleiben gegenüber Ausgangscommit unverändert',()=>{
 const original=rows.map(r=>['id','datei','fundstelle','quellabschnitt','original'].map(k=>r[k]));
 assert.equal(createHash('sha256').update(JSON.stringify(original)).digest('hex'),'66e9bbf44608befbd601b5cced60486e0bc149a0d58d165c5806deb87b805c2c');
 assert.equal(byId.size,2550);assert.equal(rows.length,2550);for(const r of rows)assert.equal(r.pruefstatus,'inhaltlich_geprueft');
});
test('Prüfung, fachlicher Inhalt, Kontext und Formatierung werden getrennt und ohne Rest bilanziert',()=>{
 const count=role=>rows.filter(r=>r.zeilenrolle===role).length;
 assert.equal(count('inhalt'),2301);assert.equal(count('kontext')+count('gliederung'),245);assert.equal(count('formatierung'),4);assert.equal(count('inhalt')+count('kontext')+count('gliederung')+count('formatierung'),2550);
 assert.equal(stats.gepruefteQuellzeilen,2550);assert.equal(stats.fachlichZugeordneteInhaltszeilen,count('inhalt'));assert.equal(stats.fachlichUnzugeordnet,0);
 for(const r of rows.filter(r=>r.zeilenrolle==='inhalt')){assert(r.zuordnungen.length);assert.equal(r.quellenpruefung,'ausstehend');assert(r.erforderlichePruefungen.length);}
 assert(rows.every(r=>r.tatsachenVerifiziert===false));assert.equal(stats.unabhaengigTatsachenverifiziert,0);
});
test('Artikelindex enthält jede direkte Zuordnung und jeden Kontext exakt an den vorhandenen Knoten',()=>{
 assert.equal(lonelinessIndex.length,138);assert.deepEqual(Object.keys(index).sort(),lonelinessIndex.map(n=>n.id).sort());
 for(const node of lonelinessIndex){const n=index[node.id];assert.equal(n.title,node.title);assert.equal(n.conceptNumber,node.conceptNumber);for(const [role,key] of [['inhalt','direktZugeordnet'],['kontext','kontext']])assert.deepEqual(n[key],rows.filter(r=>r.zuordnungen.includes(node.id)&&(role==='inhalt'?r.zeilenrolle==='inhalt':r.zeilenrolle!=='inhalt')).map(r=>r.id));assert.equal(new Set(n.mitUnterthemen).size,n.mitUnterthemen.length);}
 for(const r of rows)for(const target of r.zuordnungen){const n=lonelinessIndex.find(n=>n.id===target);assert(n);for(const parent of n.parents)assert(index[parent.id].mitUnterthemen.includes(r.id));}
});
test('Mehrfachzuordnungen bleiben referentielle Verbindungen und verändern keine Aussage',()=>{
 const content=rows.filter(r=>r.zeilenrolle==='inhalt'),multi=content.filter(r=>r.zuordnungen.length>1);assert.equal(multi.length,1200);assert.equal(stats.inhaltlicheMehrfachzuordnungen,multi.length);assert.equal(content.reduce((n,r)=>n+r.zuordnungen.length-1,0),1315);
 for(const r of rows)assert.equal(new Set(r.zuordnungen).size,r.zuordnungen.length);
 const changes=json('zuordnung-aenderungen.json');assert.equal(changes.length,75);assert.equal(stats.vorherigeZuordnungenKontrolliert,408);for(const c of changes){assert(byId.has(c.id));assert.notDeepEqual(c.vorher,c.nachher);assert.deepEqual(c.nachher,byId.get(c.id).zuordnungen);assert(c.begruendung);}
});
test('Erfahrungen, historische Angaben, wissenschaftliche Aussagen und Vorschläge bleiben unterscheidbar',()=>{
 for(const [id,tags] of [['B4-L462',['persoenliche_erfahrung','historische_angabe']],['B4-L467',['abweichende_einschaetzung']],['B4-L87',['wissenschaftliche_aussage']],['B4-L565',['politische_bewertung']],['B4-L853',['vorschlag']],['B3-L377',['veranstaltungsnotiz']],['B5-L499',['themenvorschlag','fragestellung']]])for(const tag of tags)assert(byId.get(id).aussagearten.includes(tag),id+' '+tag);
 for(const id of ['B1-L142','B3-L74','B4-L145'])assert.equal(byId.get(id).aussageform,'berichtete_aussage');assert.equal(byId.get('B2-L225').aussageform,'vorschlag');
 assert(byId.get('B1-L55').zuordnungen.includes('t5-1'));assert(!byId.get('B1-L55').zuordnungen.includes('t5-3'));assert(byId.get('B4-L462').original.includes('97'));assert(byId.get('B4-L464').original.includes('nicht als amtlich bestätigte Statistik'));
});
test('Ungeklärte Identitäten, Jahresangaben und Quellen bleiben verlinkt prüfbedürftig',()=>{
 assert.equal(issues.length,19);assert.equal(new Set(issues.map(i=>i.id)).size,19);for(const issue of issues){assert(issue.ungeklaert&&issue.erforderlich);assert.equal(issue.fachlicheZuordnungOffen,false);assert.equal(issue.status,'primaerquellenpruefung_offen');for(const id of issue.quellzeilen){assert(byId.has(id));assert(byId.get(id).offenePrueffragen.includes(issue.id));}}
 assert(issues.find(i=>i.id==='P03').quellzeilen.includes('B3-L114'));assert(byId.get('B3-L114').original.includes('KME'));assert(byId.get('B1-L147').original.includes('KNE'));
 assert(issues.find(i=>i.id==='P05').quellzeilen.includes('B2-L554'));assert.deepEqual(json('zuordnung-offen.json').fachlichUnzugeordnet,[]);
});
test('Wortgleiche Wiederholungen bewahren alle Varianten und machen keine unabhängigen Belege daraus',()=>{
 const groups=json('wiederholungen.json').wortgleicheGruppen;assert.equal(groups.length,24);assert.equal(groups.reduce((n,g)=>n+g.quellzeilen.length,0),58);
 for(const group of groups){assert(group.quellzeilen.length>1);for(const id of group.quellzeilen){const r=byId.get(id);assert(r);assert.equal(r.original.replace(/^(?:- |\d+\\?\. )/,'').trim(),group.vergleichstext);}}
});
