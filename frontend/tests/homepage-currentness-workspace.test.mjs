import test from 'node:test';
import assert from 'node:assert/strict';
import {defaults,mutate} from '../lib/workspace.mjs';
import {project} from '../lib/access.mjs';
import {homepageCurrentItems} from '../lib/homepage-current.mjs';

const author={role:'author',actor:'synthetic-author',legacyOwner:'synthetic-author',emailConfirmed:true,mode:'author'};
const redactor={role:'admin',actor:'synthetic-editor',canRestoreOwner:true,mode:'admin'};
const fields=(title='Künstlicher Testbeitrag')=>({title,place:'Bergedorf',districtConnection:'Dieser ausschließlich künstliche Testbeitrag betrifft Bergedorf.',body:'Bergedorf '.repeat(110),problem:'Künstliche Problembeschreibung für einen lokalen Regressionstest.',change:'Künstliche Änderung für die ausschließlich lokale Prüfung.'});
function save(state,id,currentness,at,title){return mutate(state,'save',{...(id?{id}:{}),kind:'anliegen',testOnly:true,fields:fields(title),currentness},at,()=>id||'synthetic-doc',author).state}
function approve(state,decision,at,material=false,decisionReason=''){return mutate(state,'review',{id:'synthetic-doc',decision:'approve',reason:'',material,currentnessDecision:decision,currentnessReason:decisionReason},at,()=>`publication-${at}`,redactor).state}

test('Entwurf speichert Aktualitätsangabe getrennt; fehlendes Feld älterer Entwürfe bleibt Nein',()=>{
 let s=save(defaults(),null,undefined,'2026-11-20T10:00:00+01:00','Altentwurf');
 assert.deepEqual(s.documents[0].draftCurrentness,{isCurrentTopic:false,eventDate:'',reason:''});
 s=save(s,'synthetic-doc',{isCurrentTopic:true,eventDate:'2026-11-20',reason:'Neue belegte Entwicklung im Bezirk'},'2026-11-20T11:00:00+01:00','Aktueller Entwurf');
 assert.equal(s.documents[0].draftCurrentness.isCurrentTopic,true);
 assert.equal(s.documents[0].draftCurrentness.eventDate,'2026-11-20');
 assert.equal(s.documents[0].draftCurrentness.reason,'Neue belegte Entwicklung im Bezirk');
 assert.throws(()=>approve(s,'', '2026-11-20T12:00:00+01:00'),/gesondert bestätigt oder abgelehnt/);
});

test('Redaktionelle Bestätigung und Ablehnung sind getrennt von Inhaltsfreigabe',()=>{
 const current={isCurrentTopic:true,eventDate:'2026-11-20',reason:'Neue belegte Entwicklung im Bezirk'};
 let confirmed=approve(save(defaults(),null,current,'2026-11-20T10:00:00+01:00','Bestätigt'),'confirm','2026-11-20T12:00:00+01:00');
 assert.equal(confirmed.documents[0].publishedCurrentness.confirmed,true);
 assert.equal(confirmed.documents[0].publishedCurrentness.effectiveAt,'2026-11-20T12:00:00+01:00');
 const reader=project(confirmed,{role:'reader',mode:'reader',actor:'reader',legacyOwner:'owner'});
 assert.equal(reader.documents[0].publishedCurrentness.confirmed,true);
 assert.equal('draftCurrentness' in reader.documents[0],false);
 assert.equal(homepageCurrentItems(confirmed,'2026-11-21T12:00:00+01:00').some(x=>x.id==='synthetic-doc'),true);
 let denied=approve(save(defaults(),null,current,'2026-11-20T10:00:00+01:00','Abgelehnt'),'deny','2026-11-20T12:00:00+01:00',false,'Die Neuigkeit ist nicht hinreichend belegt.');
 assert.equal(denied.documents[0].published.title,'Abgelehnt');
 assert.equal(denied.documents[0].publishedCurrentness.confirmed,false);
 assert.equal(denied.documents[0].publishedCurrentness.decisionReason,'Die Neuigkeit ist nicht hinreichend belegt.');
 assert.equal(homepageCurrentItems(denied,'2026-11-21T12:00:00+01:00').some(x=>x.id==='synthetic-doc'),false);
});

test('unwesentliche Bearbeitung behält Frist und Versionenhistorie; wesentliche Freigabe startet neuen Zeitraum',()=>{
 const current={isCurrentTopic:true,eventDate:'2026-11-20',reason:'Neue belegte Entwicklung im Bezirk'};
 let s=approve(save(defaults(),null,current,'2026-11-20T10:00:00+01:00','Version eins'),'confirm','2026-11-20T12:00:00+01:00');
 const original=s.documents[0].publishedCurrentness.effectiveAt;
 s=save(s,'synthetic-doc',current,'2026-11-21T10:00:00+01:00','Version zwei');
 s=approve(s,'confirm','2026-11-21T12:00:00+01:00',false);
 assert.equal(s.documents[0].publishedCurrentness.effectiveAt,original);
 assert.equal(s.documents[0].history[0].currentness.effectiveAt,original);
 s=save(s,'synthetic-doc',current,'2026-11-22T10:00:00+01:00','Version drei');
 s=approve(s,'confirm','2026-11-22T12:00:00+01:00',true);
 assert.equal(s.documents[0].publishedCurrentness.effectiveAt,'2026-11-22T12:00:00+01:00');
});

test('redaktionelle Hervorhebung ist nur administrativ, begründet und auf höchstens 30 Tage begrenzt',()=>{
 const current={isCurrentTopic:true,eventDate:'2026-11-20',reason:'Neue belegte Entwicklung im Bezirk'};
 let s=approve(save(defaults(),null,current,'2026-10-01T10:00:00+02:00','Laufender Sachstand'),'confirm','2026-10-01T12:00:00+02:00');
 assert.throws(()=>mutate(s,'homepage-highlight',{id:'synthetic-doc',reason:'Fortsetzung',expiresOn:'2026-11-30'},'2026-11-21T12:00:00+01:00',()=> 'x',author),/Zugriffsrechte/);
 assert.throws(()=>mutate(s,'homepage-highlight',{id:'synthetic-doc',reason:'Fortsetzung der laufenden Prüfung',expiresOn:'2026-12-22'},'2026-11-21T12:00:00+01:00',()=> 'x',redactor),/innerhalb von 30 Tagen/);
 s=mutate(s,'homepage-highlight',{id:'synthetic-doc',reason:'Fortsetzung der laufenden Prüfung',expiresOn:'2026-11-30'},'2026-11-21T12:00:00+01:00',()=> 'x',redactor).state;
 assert.equal(homepageCurrentItems(s,'2026-11-21T12:30:00+01:00').some(x=>x.id==='synthetic-doc'),true);
 assert.equal(homepageCurrentItems(s,'2026-12-01T00:00:00+01:00').some(x=>x.id==='synthetic-doc'),false);
});
