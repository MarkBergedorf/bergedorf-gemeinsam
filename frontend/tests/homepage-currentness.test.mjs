import test from 'node:test';
import assert from 'node:assert/strict';
import {addBerlinDays,approvedEffectiveAt,currentnessDefaults,documentCurrentnessStatus,formatBerlinDate,homepageCurrentItems,validateCurrentness} from '../lib/homepage-current.mjs';

const approved=(id,kind='anliegen',effectiveAt='2026-11-20T12:00:00+01:00',extra={})=>({id,kind,districtId:'bergedorf',origin:'test',published:{title:'Neuer Sachstand '+id,body:'Eine belegte neue Entwicklung mit Bezug zu Bergedorf.',place:'Bergedorf',districtConnection:'Die Entwicklung betrifft den Bezirk Bergedorf.'},publishedAt:effectiveAt,firstPublishedAt:effectiveAt,publishedCurrentness:{isCurrentTopic:true,confirmed:true,effectiveAt,reason:'Neue belegte Entwicklung',eventDate:''},...extra});
const state=(documents=[],homepageHighlights={})=>({documents,settings:{homepageHighlights,areas:{}}});

test('Aktualitätsvorgabe ist Nein; Ja erfordert nachvollziehbaren Grund und valides optionales Datum',()=>{
 assert.deepEqual(currentnessDefaults,{isCurrentTopic:false,eventDate:'',reason:''});
 assert.deepEqual(validateCurrentness({isCurrentTopic:false}),{});
 assert.ok(validateCurrentness({isCurrentTopic:true,reason:''}).reason);
 assert.ok(validateCurrentness({isCurrentTopic:true,eventDate:'2026-02-30',reason:'Neue bestätigte Entwicklung'}).eventDate);
 assert.deepEqual(validateCurrentness({isCurrentTopic:true,eventDate:'2026-02-28',reason:'Neue bestätigte Entwicklung'}),{});
});

test('Berlin-Kalendertage behandeln Jahreswechsel und Sommerzeit ohne 24-Stunden-Drift',()=>{
 assert.equal(addBerlinDays('2026-12-28',14),'2027-01-11');
 assert.equal(addBerlinDays('2026-03-22',14),'2026-04-05');
 assert.equal(formatBerlinDate('2026-03-29T00:30:00Z'),'29.03.2026');
});

test('Fristbeginn wird nur bei Erstveröffentlichung oder bestätigter wesentlicher Änderung neu gesetzt',()=>{
 const now='2026-11-21T10:00:00+01:00';
 assert.equal(approvedEffectiveAt({alreadyPublished:false},now),now);
 assert.equal(approvedEffectiveAt({alreadyPublished:true,material:false,priorEffectiveAt:'2026-11-01T10:00:00Z',firstPublishedAt:'2026-10-01T10:00:00Z'},now),'2026-11-01T10:00:00Z');
 assert.equal(approvedEffectiveAt({alreadyPublished:true,material:true,priorEffectiveAt:'2026-11-01T10:00:00Z'},now),now);
});

test('14-Tage- und 30-Tage-Fristen laufen ab und lassen Themenbereichdaten unangetastet',()=>{
 const citizen=approved('c1'),political=approved('p1','politik');
 assert.equal(documentCurrentnessStatus(citizen,'2026-12-03T12:00:00+01:00').eligible,true);
 assert.equal(documentCurrentnessStatus(citizen,'2026-12-04T12:00:00+01:00').eligible,false);
 assert.equal(documentCurrentnessStatus(political,'2026-12-19T12:00:00+01:00').eligible,true);
 assert.equal(documentCurrentnessStatus(political,'2026-12-20T12:00:00+01:00').eligible,false);
 const expired=approved('kept','geschichte','2026-01-01T12:00:00+01:00'),before=structuredClone(expired);
 assert.equal(homepageCurrentItems(state([expired]),'2026-11-21T12:00:00+01:00').some(x=>x.id==='kept'),false);
 assert.deepEqual(expired,before,'expired content remains unchanged in its regular area');
});

test('nur veröffentlichte, sichtbare, bestätigte und Bergedorf-bezogene Nichtbeispiele erscheinen',()=>{
 const good=approved('good');
 const bad=[
  {...approved('unapproved'),published:null},
  {...approved('hidden'),hidden:true},
  {...approved('withdrawn'),withdrawn:true},
  {...approved('example'),origin:'example'},
  {...approved('fiction'),isExample:true},
  {...approved('not-confirmed'),publishedCurrentness:{...approved('x').publishedCurrentness,confirmed:false}},
  {...approved('no-topic'),publishedCurrentness:{...approved('x').publishedCurrentness,isCurrentTopic:false}},
  {...approved('no-date'),publishedCurrentness:{...approved('x').publishedCurrentness,effectiveAt:null}},
  {...approved('bad-date'),publishedCurrentness:{...approved('x').publishedCurrentness,effectiveAt:'yesterday'}},
  {...approved('other-borough'),districtId:'altona',published:{...approved('x').published,districtConnection:'Altona'}},
  {...approved('unknown-kind'),'kind':'unknown'}
 ];
 const ids=homepageCurrentItems(state([good,...bad]),'2026-12-01T12:00:00+01:00').map(x=>x.id);
 assert.deepEqual(ids,['good']);
});

test('befristete Hervorhebung braucht Grund, Zuordnung und Ablaufdatum und übersteuert nur die normale Zeitfrist',()=>{
 const old=approved('highlight','anliegen','2026-10-01T12:00:00+02:00');
 const invalid={documentId:'highlight',reason:'',attributedTo:'Redaktion',expiresOn:'2026-11-25'};
 assert.equal(documentCurrentnessStatus(old,'2026-11-21T12:00:00+01:00',invalid).eligible,false);
 const good={documentId:'highlight',reason:'Laufende Entwicklung bleibt relevant',attributedTo:'Redaktion',expiresOn:'2026-11-25'};
 assert.equal(documentCurrentnessStatus(old,'2026-11-21T12:00:00+01:00',good).eligible,true);
 assert.equal(documentCurrentnessStatus(old,'2026-11-26T00:00:00+01:00',good).eligible,false);
 assert.equal(documentCurrentnessStatus({...old,withdrawn:true},'2026-11-21T12:00:00+01:00',good).eligible,false);
});

test('höchstens sechs Beiträge; Reihenfolge stabil, neuere und hervorgehobene zuerst',()=>{
 const docs=Array.from({length:8},(_,i)=>approved('d'+i,'anliegen',`2026-11-${String(20-i).padStart(2,'0')}T12:00:00+01:00`));
 const first=homepageCurrentItems(state(docs),'2026-11-21T12:00:00+01:00');
 assert.equal(first.length,6);
 assert.deepEqual(first.map(x=>x.id),homepageCurrentItems(state(docs),'2026-11-21T12:00:00+01:00').map(x=>x.id));
 const withHighlight=homepageCurrentItems(state(docs,{d7:{documentId:'d7',reason:'Wichtige laufende Entwicklung',attributedTo:'Redaktion',expiresOn:'2026-11-25'}}),'2026-11-21T12:00:00+01:00');
 assert.equal(withHighlight[0].id,'d7');
});

test('echte, angekündigte Bergedorfer Veranstaltung wird bis zum tatsächlichen Ende gezeigt',()=>{
 const before=homepageCurrentItems(state([]),'2026-11-21T12:00:00+01:00');
 assert.equal(before.length,1);
 assert.equal(before[0].type,'event');
 assert.equal(before[0].checkedOn,'2026-11-15');
 assert.equal(homepageCurrentItems(state([]),'2026-11-25T21:00:00Z').length,0);
});
