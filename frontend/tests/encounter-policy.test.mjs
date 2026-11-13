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
const code=ts.transpileModule(source.replace("import './encounter-policy.css';",''),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText;
const components={};new Function('require','exports',code)(createRequire(import.meta.url),components);
const html=renderToStaticMarkup(React.createElement(components.EncounterPolicyArticle));
function withoutUsageRefinement(value){const {before,after}=JSON.parse(readFileSync('tests/fixtures/encounter-usage-authorized-change.json','utf8'));assert(value.includes(after));return value.replace(after,before);}
function withoutPopulationExpansion(value){value=withoutUsageRefinement(value);const replacements=JSON.parse(readFileSync('tests/fixtures/encounter-population-authorized-changes.json','utf8'));for(const {before,after} of replacements.toReversed()){assert(value.includes(after),'Neue dokumentierte Ergänzung muss vorhanden sein');value=value.replace(after,before)}return value;}
function withoutOperatingExpansion(value){value=withoutPopulationExpansion(value);const replacements=JSON.parse(readFileSync('tests/fixtures/encounter-operation-authorized-changes.json','utf8'));for(const {before,after} of replacements.toReversed()){assert(value.includes(after),'Dokumentierte Ergänzung muss vorhanden sein');value=value.replace(after,before)}return value;}
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
 let restored=withoutOperatingExpansion(source);
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
 for(const term of ['morgens vor der Arbeit','nach der Schule','nach Feierabend','Seniorentag','Jugendtag','Familientag','eigenständige','wichtigste planerische Entscheidung','Fußgängerfrequenz','Einkaufsstraßen','100 Meter','Luftlinienentfernung','barrierefrei nutzbare Wegstrecke','verkehrlichen Voraussetzungen','drei Kilometern','Kindergärten','Kindertagesstätten','Schulen','Universitäten','Hochschulen','Seniorenwohnanlagen','Pflegeeinrichtungen','Sozialwohnungen','mittleren Einkommensgruppen','wohlhabender Menschen','Haushaltsstrukturen','Öffentliche Einrichtungen','Leicht bewegliche Stühle','zusammengestellt','Bewegungsflächen','Rollstühle','Fluchtwege','Sicherheitsanforderungen','gemeinsam Zeit zu verbringen','zeitweiligem Rückzug','freiwilliger Beteiligung','Neue Besucher freundlich begrüßen','wenn dies erwünscht ist','Schüchternen','abgeschotteten Gruppen','Personalauswahl','Einarbeitung','Personalbemessung','Freiwilliges Mitmachen und eigenständige Beteiligung ermöglichen','Eigeninitiative','gegenseitige Rücksichtnahme','keine nicht vorhandenen Schulen'])assert(concept.includes(term),term);
 assert(!concept.includes('Ersetze sie'));assert(!concept.includes('bisherige Formulierung'));assert(!concept.includes('Berichte insbesondere'));
 assert.equal((concept.match(/<h3 /g)||[]).length,11);
});

test('Umfassende Betriebserweiterung erhält den kompletten bisherigen politischen Quelltext bis auf dokumentierte beauftragte Änderungen',()=>{
 const previous=execFileSync('git',['show','4daec04cfe551def2323418bb2d810c058303a33:frontend/app/encounter-policy.tsx'],{maxBuffer:1e6}).toString();assert.equal(withoutOperatingExpansion(source),previous);
 const c=components.encounterCriteria;assert.equal(c.length,10);assert.equal(c[3],'Der Besuch der Begegnungsstätte ist während der gesamten täglichen Öffnungszeiten jederzeit ohne Anmeldung, Registrierung, Einladung oder vorherige Terminvereinbarung möglich.');
 assert(!html.includes('Besuche sind grundsätzlich auch spontan und ohne vorherige Anmeldung möglich.'));assert(!html.includes('Mitmachen statt ausschließlich konsumieren'));
});
const operating=JSON.parse(readFileSync('lib/encounter-operating-concept.json','utf8'));
const rendered=n=>renderToStaticMarkup(React.createElement(components.EncounterOperatingSections,{numbers:[n],level:n===24?2:3}));
const cases=[
 [3,'Besuch immer ohne Anmeldung',['während der gesamten täglichen Öffnungszeiten jederzeit ohne Anmeldung, Registrierung, Einladung oder vorherige Terminvereinbarung','vollständiger Belegung','keine allgemeine Anmeldepflicht','vom normalen Besuch klar getrennt']],
 [5,'Unbegrenzter freiwilliger Aufenthalt',['so lange bleiben, wie er möchte','keine allgemeine Aufenthaltsbegrenzung','regelmäßig Speisen oder Getränke kauft','weiterhin sitzen bleiben']],
 [5,'Freiwillige Platzfreigabe ohne Druck',['einmal freundlich gefragt','freiwillig','Ablehnung ist zu respektieren','nicht als Aufforderung, Erwartung, Druckmittel oder verpflichtende Anweisung']],
 [4,'Großzügiger gemeinsamer Saal und sichere Kapazität',['großzügiger gemeinsamer Saal','15 bis 30 Minuten','baurechtlichen Anforderungen','Barrierefreie Sanitäranlagen','Rettungswege']],
 [6,'Ausreichendes reguläres Betriebs- und Servicepersonal',['Spitzenzeiten','Reinigung und Hygiene','Krankheit, Urlaub','zusätzlich zum normalen Betriebspersonal']],
 [7,'Vier täglich besetzte eigenständige Funktionen',['Alle vier Funktionen müssen an jedem Öffnungstag besetzt sein','keinen einzigen Öffnungstag','einzigen allgemeinen Sozialarbeitsstelle']],
 [7,'Vertraute Vertretungspersonen und echte Dienstplanung',['Mindestens zwei','Vorzugsweise drei','fünf','Zeitarbeitspersonal','Dienstpläne','Krankheit, Urlaub']],
 [8,'Eine ruhige bürgernahe Polizeipräsenz ohne Fallteam',['genau einem','nicht, dass zwei oder drei','unaufdringliche Präsenz','gesetzlich vorgeschriebenen polizeilichen Aufgaben','Kooperationsvereinbarung','§ 163 StPO']],
 [9,'Eigenständige Suchtansprechperson und Beratung',['Täglich','Suchthilfe','keine zusätzliche Polizeikraft','keine allgemeine Überwachungsfunktion','Suchterkrankung allein ist kein Grund']],
 [10,'Eigenständige Hilfe bei Armut und Wohnungslosigkeit',['eigenständige','nicht einfach mit der Suchtansprechperson gleichgesetzt','Körpergeruchs','darf nicht zu einer','diskriminierenden Zugangskontrolle']],
 [11,'Toleranz- und Begegnungsbeauftragter mit geprüfter Eignung',['Täglich','Empathisch und kommunikativ','natürliche Autorität','ohne sie unter Druck zu setzen','Auswahl und Einarbeitung','freiwillig']],
 [13,'Striktes Rauchverbot',['strikt rauchfrei','keine Raucherräume','E-Zigaretten','Hausrechts']],
 [13,'Belüftung, Klimatisierung und Wartung',['Frischluftaustausch','Kühlung','Beheizung','Wartung','Raumgröße, Belegung']],
 [14,'Nur fertig gekauftes Alsterwasser als Alkohol-Ausnahme',['einzige gewünschte Ausnahme','fertig gekauftes Alsterwasser','entsprechend gekennzeichnetes Produkt','§ 9 JuSchG','§ 20 Nr. 2 GastG']],
 [14,'Kein automatischer Ausschluss alkoholisierter Menschen',['nicht allein deshalb ausgeschlossen','bloße Alkoholisierung nicht automatisch','Maßgeblich bleibt ihr Verhalten']],
 [15,'Drogenkonsum ausschließen, Menschen mit Suchterkrankung willkommen',['Konsum illegaler Drogen','Außenflächen','ausdrücklich willkommen','öffentlichen Straßenraum','Hausrecht']],
 [16,'Bettelverbot als Verhaltensregel',['Bettelverbot','konkrete Verhalten','Menschen ohne Geld','vollständig willkommen']],
 [17,'Anonyme einmalig einlösbare Gutscheine',['anonym weitergegeben und eingelöst','Ohne personenbezogene Registrierung','unbefugte Mehrfachnutzung','nicht fortlaufend erratbarem','unteilbarer Vorgang','kein','Gutscheinverkauf']],
 [18,'Diskriminierungsverbot und Verhalten statt Zuschreibung',['Vermögen','Wohnungslosigkeit','Äußerem Erscheinungsbild','Gesundheitlichen Beeinträchtigungen','konkrete Verhalten']],
 [20,'Alle Besuchs-, Personal- und Funktionsräume auf einer Ebene',['durchgehend ebenerdige, stufenlose','Erdgeschoss','Küche','Lagerflächen','Büros','Personalräume','Sanitäranlagen','keine Stufen','leicht zu reinigen']],
 [21,'Regulärer ÖPNV statt Sonderfahrten',['100 Meter','frühen Morgen und am Abend','Barrierefreie Fahrzeuge','Sonderfahrt','nicht als gleichwertige Lösung','Pflegeeinrichtung','selbstständig']],
 [22,'Freiwillige Eigeninitiative ohne Mitmachpflicht',['Niemand muss mitmachen','nicht verpflichtet','Freiwillige Eigeninitiative','geeignet, sicher und organisatorisch geregelt']],
 [23,'Versicherungsrechtliche Prüfung vor Tätigkeit',['zuständigen gesetzlichen Unfallversicherungsträger','nachträgliche Eintragung','rückwirkenden Versicherungsschutz','§ 2 Abs. 2 SGB VII','vor Beginn','datenschutzrechtlichen Anforderungen']],
 [24,'Ehrenamtliches demokratisches Gremium',['Mindestens zehn Mitglieder','Keine starre zahlenmäßige Obergrenze','OECD','Interessenkonflikten','Abberufungen','keine','hoheitlichen Befugnisse']],
 [25,'Datensparsame wissenschaftliche Erfolgskontrolle',['Besucherzahlen zu unterschiedlichen Tageszeiten','Wiederkehrende Besuche','anonymen Gutscheine','Gremiums','geeignete Untersuchungsergebnisse','nicht allein anhand des Aussehens']],
 [26,'Vollständige dauerhafte Wirtschaftsplanung',['Zentrale Standortlage','Klimatisierung','Drei eigenständige soziale Schlüsselfunktionen','Polizeipräsenz','Vertretungsregelungen','Versicherungsschutz','Gutscheinsystems','Evaluation','Verkehrsanbindung']]
];
for(const [n,label,terms] of cases)test(label,()=>{const view=rendered(n);for(const term of terms)assert(view.includes(term),label+': '+term);assert(html.includes(view));});
test('Vollständige Hausordnungsgrundsätze, alle 25 neuen Teilabschnitte und Quellverweise im tatsächlichen Artikel gerendert',()=>{
 assert.deepEqual(operating.map(s=>s.number),Array.from({length:25},(_,i)=>i+2));
 const rules=operating.find(s=>s.number===19).blocks.find(b=>b.kind==='ol');assert.equal(rules.items.length,18);const view=rendered(19);for(const rule of rules.items)assert(view.includes(rule));assert(view.includes('verhältnismäßig'));assert(view.includes('keine bereits geltende Hausordnung'));assert(html.includes('encounter-house-rules'));
 for(const section of operating){assert(html.includes(section.title));for(const block of section.blocks){if(block.kind==='p')assert(block.text.trim());for(const ref of block.refs||[])assert(html.includes('Quelle: '),ref);}}
 assert(html.includes('keine Aktivierung neuer Websitefunktionen'));assert.equal((html.match(/<form /g)||[]).length,1);assert(!/fetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|indexedDB/.test(source));
});

test('Neue politische Ergänzungen erhalten den vollständigen bisherigen Beitrag bis auf dokumentierte Änderungen',()=>{
 assert.equal(withoutPopulationExpansion(source),execFileSync('git',['show','181c6fe8b69a3bcd1a5f1ede79d1f24e080b4caa:frontend/app/encounter-policy.tsx'],{encoding:'utf8'}));
});
test('Historische Kontaktverluste als Untersuchungsauftrag mit Sammlung und Lebensgeschichten',()=>{
 for(const t of ['encounter-history-loneliness','88 Bildern','Menschen und ihre Lebensgeschichten','Scham','keine Befragung über heutige Einsamkeit','ohne verpflichtende Teilnahme'])assert(html.includes(t),t);
});
test('KörberHaus: offene Angebote, überprüfte Zeiten und negative zielbezogene Bewertung getrennt',()=>{
 for(const t of ['50 m²','kostenlos, ohne Anmeldung','Montag bis Samstag von 7 bis 22 Uhr','Sonn- und Feiertagen geschlossen','Montag bis Freitag von 10 bis 17 Uhr','ab 18 Uhr bis nach der Pause','Persönliche, nicht repräsentative Erfahrung','keine repräsentative Erhebung','als nicht ausreichend','nicht als Nachweis','https://koerberhaus.de/besuchen/oeffnungszeiten','https://koerberhaus.de/mitmachen'])assert(html.includes(t),t);
});
test('90-Prozent-Ziel misst tatsächliche regelmäßige selbst initiierte Nutzung ohne Fragenkatalog oder neue Funktion',()=>{
 const section=html.match(/<section aria-labelledby="encounter-population-target"[\s\S]*?<\/section>/)[0];
 for(const term of ['mindestens 90 Prozent der Bergedorfer Bevölkerung','tatsächlich regelmäßig, freiwillig, spontan und aus eigener Initiative','Besuchshäufigkeit','Gründe für Besuche','Entstehung und Pflege sozialer Kontakte','bei denselben Menschen','Nichtnutzer bleiben','alle 14 Stadtteile','kein bereits gemessener Wert','fehlende Evaluationsdaten'])assert(section.includes(term),term);
 assert(!/<form|<input|<button|<ol|<li|Kennen Sie|Frage [1-5]|Fragenkatalog/.test(section));
 assert(!section.includes('die die Begegnungsstätte kennen, bereits besucht haben, sie erneut besuchen möchten'));
 assert.equal(withoutUsageRefinement(source),execFileSync('git',['show','1e72976af7ab7ddc2c513a0026b692868d2d2839:frontend/app/encounter-policy.tsx'],{encoding:'utf8'}));
});
