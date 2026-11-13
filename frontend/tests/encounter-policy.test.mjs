import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
import ts from 'typescript';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {lonelinessIndex,lonelinessTopics,resolveLonelinessPath,searchLoneliness} from '../lib/loneliness.mjs';
import {lonelinessArticles,lonelinessSources} from '../lib/loneliness-articles.mjs';
import {originalHierarchyBytes} from './fixtures/original-hierarchy.mjs';
const base='3e71a9b6c11426fd20cbbd0b7335efc6a60759e5';
const source=readFileSync('app/encounter-policy.tsx','utf8');
const code=ts.transpileModule(source.replace("import './encounter-policy.css';",''),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS}}).outputText;
const components={};new Function('require','exports',code)(createRequire(import.meta.url),components);
const html=renderToStaticMarkup(React.createElement(components.EncounterPolicyArticle));
test('Alle 138 bisherigen Themen bytegleich erhalten; genau ein direkt aufrufbarer Synthesebeitrag hinzugefügt',()=>{
 assert(originalHierarchyBytes().equals(execFileSync('git',['show',base+':frontend/lib/loneliness-topics.json'])));
 assert.equal(lonelinessIndex.length,139);assert.equal(lonelinessTopics.length,18);
 const n=resolveLonelinessPath(['ursachen','t2-7']);assert.equal(n.title,'Warum ist es heute schwierig, neue Menschen kennenzulernen?');assert.equal(n.conceptNumber,'2.7');
 assert(searchLoneliness('Sander Krug').some(n=>n.id==='t2-7'));
 const a=lonelinessArticles['t2-7'];assert.equal(a.sections.length,8);for(const s of a.sections)for(const p of s.paragraphs){assert(Array.isArray(p.refs));for(const ref of p.refs)assert(lonelinessSources[ref]);}
 for(const f of ['loneliness-articles.json','loneliness-articles-3.json','loneliness-articles-4-social.json','loneliness-articles-4-guide.json','historical-places-4.json','historical-media-4.json'])assert(readFileSync('lib/'+f).equals(execFileSync('git',['show',base+':frontend/lib/'+f],{maxBuffer:8e6})),f);
});
test('Startseite ohne historische Großkarte; getrennte redaktionelle Politiknavigation und fachliche Querverweise',()=>{
 const p=readFileSync('app/platform.tsx','utf8');assert(!p.includes('<HistoricalDirectoryEntry/>'));assert(p.includes("route.tab==='begegnungsorte'?<EncounterPolicyArticle/>"));
 assert(readFileSync('app/history-entry.tsx','utf8').includes('<HistoricalDirectoryEntry/>'));
 assert(readFileSync('app/political-topics.tsx','utf8').includes('<EncounterPolicyCard/>'));
 assert(readFileSync('app/loneliness.tsx','utf8').includes("node.id==='t2-7'&&<EncounterTopicLinks/>"));
 assert.equal(components.encounterPolicyHref,'#politik/begegnungsorte');assert.equal(components.encounterTopicHref,'#einsamkeit/ursachen/t2-7');assert(html.includes('href="#einsamkeit/stadtteile/t10-6"'));
});
test('Politische Forderung und alle zehn Bedingungen werden tatsächlich gerendert; Herkunft eindeutig',()=>{
 assert.equal(components.encounterCriteria.length,10);for(const criterion of components.encounterCriteria)assert(html.includes(criterion));
 for(const t of ['wesentlichen Teil der laufenden Kosten','allgemeine, generationenübergreifende','Augenwischerei','Eine solche Förderung bewerten wir als gescheitert.','ausschließlich das nachweisliche Erreichen','REDAKTIONELLES POLITISCHES ANLIEGEN','keine Stellungnahme einer Behörde','70 Prozent','45 Prozent','keine pauschale Erstattung'])assert(html.includes(t),t);
 assert(!html.includes('PRIVAT FREIGEGEBEN'));assert(!html.includes('ERFUNDENER TESTINHALT'));
});
test('Gerendertes Formular sicher deaktiviert: getrennte leere Einwilligungen, keine Übermittlung oder Scheinbestätigung',()=>{
 const form=html.match(/<form\b[\s\S]*?<\/form>/)[0];assert(form.includes('<fieldset disabled=""'));assert.match(form,/<button type="submit" disabled=""/);
 assert.equal((form.match(/type="checkbox"/g)||[]).length,2);assert(!/\bchecked[=\s>]/.test(form));assert(!/\b(action|method|name)=/.test(form));
 assert(form.includes('id="encounter-support-consent" required=""'));assert(!/id="encounter-petition-consent" required/.test(form));
 assert(source.includes('onSubmit={event=>event.preventDefault()}'));
 assert(!/fetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|indexedDB|serverAction/.test(source));
 for(const t of ['Vorbereitet – noch nicht aktiv.','Double-Opt-in','keine rechtswirksame Mitzeichnung','Die Unterzeichnung ist freiwillig','Ohne diese Auswahl erhalte ich keine Petitionsbenachrichtigung','öffentliche Anzeige der E-Mail-Adressen ist ausgeschlossen'])assert(html.includes(t));
});
test('Datenschutz und Freischaltkonzept decken politischen Bezug, Bestätigung, Widerruf, Löschung und einmaligen Versand ab',()=>{
 const privacy=readFileSync('pages/privacy.tsx','utf8'),plan=readFileSync('../docs/BEGEGNUNGSORTE-REGISTRIERUNG-2026-11.md','utf8');
 for(const t of ['Art. 9 Absatz 2 Buchstabe a','noch nicht aktiv','zwei getrennte','konkreten Löschfristen'])assert(privacy.includes(t));
 for(const t of ['Scanner-GET','Raten','Widerruf','Löschjobs','MFA','Einmaliger','70 %','45 %'])assert((plan+source).includes(t),t);
 assert(readFileSync('pages/backend-client.mjs','utf8').includes('writesEnabled:false'));
});
test('Standortkonzept: ausschließlich beauftragte Präzisierungen; sämtlicher übriger politischer Text bytegleich',()=>{
 const changes=JSON.parse(readFileSync('tests/fixtures/encounter-concept-authorized-changes.json','utf8'));
 let restored=source;
 const begin=restored.indexOf('export function EncounterSpatialSocialConcept()'),end=restored.indexOf('export function EncounterPolicyArticle()',begin);
 assert(begin>0&&end>begin);restored=restored.slice(0,begin)+restored.slice(end);
 restored=restored.replace('<EncounterSpatialSocialConcept/>\n','');
 for(const [before,after] of Object.entries(changes.criteria)){assert(restored.includes(after));restored=restored.replace(after,before)}
 assert(restored.includes(changes.implementation.after));restored=restored.replace(changes.implementation.after,changes.implementation.before);
 restored=restored.replace(' Die tägliche Öffnung von möglichst frühmorgens bis spätabends und die grundsätzlich jederzeit gleichzeitige gemeinsame Nutzung sind verbindlicher Bestandteil. Der zusätzliche Personal-, Energie-, Reinigungs- und Betriebsbedarf gehört von Beginn an in die öffentliche Finanzierungsplanung.','');
 restored=restored.replace(' Zu prüfen ist ausdrücklich, ob unterschiedliche gesellschaftliche Gruppen den Ort tatsächlich gleichzeitig nutzen und miteinander in Kontakt kommen; ein bloßer Wechsel voneinander getrennter Gruppenangebote reicht nicht aus.','');
 const previous=execFileSync('git',['show','8191b601474d0ecb3446372d5396e286beb25928:frontend/app/encounter-policy.tsx'],{maxBuffer:1e6}).toString();assert.equal(restored,previous);
});
test('Tägliche lange Öffnung und gleichzeitige Nutzung in den weiterhin zehn Kriterien verankert',()=>{
 assert.equal(components.encounterCriteria.length,10);
 assert.equal(components.encounterCriteria[6],'Die Begegnungsstätte muss täglich geöffnet sein, mit langen, verlässlichen Öffnungszeiten von möglichst frühmorgens bis spätabends. Sie muss an jedem Tag als selbstverständlicher Begegnungsort zur Verfügung stehen und darf nicht nur an einzelnen Wochentagen oder zu begrenzten Veranstaltungszeiten zugänglich sein.');
 for(const term of ['gleichzeitig','Seniorentage','Jugendtage','Familientage','Herkunft','sozialem Status','Behinderung'])assert(components.encounterCriteria.slice(0,2).join(' ').includes(term));
 for(const term of ['eigenständige','Umbenennung'])assert(components.encounterCriteria[0].includes(term));
 for(const term of ['100 Meter','Wegstrecke','drei Kilometern','Fußgängerfrequenz','selbstständig','Rollstühle'])assert(components.encounterCriteria[5].includes(term));
 assert(components.encounterCriteria[8].includes('dauerhaft öffentlich finanziert'));assert(components.encounterCriteria[9].includes('gleichzeitige Nutzung'));
});
test('Vollständiges räumliches und soziales Konzept ist sichtbar gerendert, keine redaktionellen Arbeitsanweisungen',()=>{
 const concept=renderToStaticMarkup(React.createElement(components.EncounterSpatialSocialConcept));
 for(const term of ['morgens vor der Arbeit','nach der Schule','nach Feierabend','Seniorentag','Jugendtag','Familientag','eigenständige','wichtigste planerische Entscheidung','Fußgängerfrequenz','Einkaufsstraßen','100 Meter','Luftlinienentfernung','barrierefrei nutzbare Wegstrecke','verkehrlichen Voraussetzungen','drei Kilometern','Kindergärten','Kindertagesstätten','Schulen','Universitäten','Hochschulen','Seniorenwohnanlagen','Pflegeeinrichtungen','Sozialwohnungen','mittleren Einkommensgruppen','wohlhabender Menschen','Haushaltsstrukturen','Öffentliche Einrichtungen','Leicht bewegliche Stühle','zusammengestellt','Bewegungsflächen','Rollstühle','Fluchtwege','Sicherheitsanforderungen','gemeinsam Zeit zu verbringen','zeitweiligem Rückzug','freiwilliger Beteiligung','Neue Besucher freundlich begrüßen','wenn dies erwünscht ist','Schüchternen','abgeschotteten Gruppen','Personalauswahl','Einarbeitung','Personalbemessung','Mitmachen statt ausschließlich konsumieren','Eigeninitiative','gegenseitige Rücksichtnahme','keine nicht vorhandenen Schulen'])assert(concept.includes(term),term);
 assert(!concept.includes('Ersetze sie'));assert(!concept.includes('bisherige Formulierung'));assert(!concept.includes('Berichte insbesondere'));
 assert.equal((concept.match(/<h3 /g)||[]).length,11);
});
