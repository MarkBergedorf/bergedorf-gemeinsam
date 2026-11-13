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
