const directoryCopy='Redaktionell zusammengestellte Profile sind keine bestätigten Selbstdarstellungen oder Kooperationen. Der gemeinsame Recherchebestand wird ergänzt; Vollständigkeit ist noch nicht geprüft.';
const historyCopy='Die Ortsseiten ergänzen die Artikel um die Geschichte einzelner Orte und Gebiete. Historische Darstellungen und persönliche Erinnerungen bleiben voneinander unterscheidbar. Auch einschneidende und belastende Ereignisse gehören zur belegten Geschichte.';
const lonelinessIntro='Informationen verstehen, Orientierung finden und Begegnung mitgestalten: Hier entsteht der Themenbereich zu Einsamkeit und Gemeinschaft im Bezirk Bergedorf. Wählen Sie ein Thema oder suchen Sie gezielt nach einem Begriff.';
const lonelinessStatus='<aside className="loneliness-status"><BookOpen aria-hidden="true"/><div><strong>Dieser Themenbereich wird redaktionell aufgebaut.</strong><p>Die Themenstruktur mit 18 Hauptthemen, 109 Unterthemen und 12 weiteren Themenknoten ist angelegt. Alle 18 Hauptthemen mit insgesamt 139 Themenansichten sind redaktionell ausgearbeitet. Offene Einzelbelege und Forschungsfragen bleiben ausdrücklich gekennzeichnet. Die Texte unterscheiden wissenschaftliche Belege, institutionelle Angaben und politische Positionen. Eine Auswahl überprüfter Hilfszugänge ist direkt erreichbar. Historische Standortgeschichten und gekennzeichnete Recherchehinweise sind erschlossen. Nicht freigegebene Bilddateien werden nicht veröffentlicht. Veranstaltungen, Beteiligung und Quellenstandards sind ergänzt; der Gesamtprüfbericht dokumentiert verbleibende Ausarbeitungen und Einzelnachweise. Die Übersicht ersetzt keine persönliche Beratung. Bergedorf gemeinsam ist eine private, unabhängige Bürgerplattform und keine offizielle Seite des Hamburger Bündnisses gegen Einsamkeit.</p></div></aside>';
const newsCopy='<p className="news-external-note">Alle Medienlinks öffnen nach der bestehenden externen Linkbestätigung in einem neuen Tab. Es gelten die Bedingungen des jeweiligen Verlags. Die Nachrichten werden dort gelesen; diese Seite übernimmt keine fremden Artikel und umgeht keine Bezahlschranken.</p>';

/** Restores only PR #68's six approved copy removals for older byte-preservation comparisons. */
export function withoutPr68CopyCleanup(file,value){
 const wasBuffer=Buffer.isBuffer(value);let source=wasBuffer?value.toString('utf8'):String(value);
 const path=file.replaceAll('\\','/');
 if((path.endsWith('/app/directory.tsx')||path==='app/directory.tsx')&&!source.includes(directoryCopy))source=source.replace("</p>{values.category==='wheelchair-toilets'",`</p><p>${directoryCopy}</p>{values.category==='wheelchair-toilets'`);
 if((path.endsWith('/app/history-entry.tsx')||path==='app/history-entry.tsx')&&!source.includes(historyCopy))source=source.replace('</p><label>Geschichte und Literatur durchsuchen<input',`</p><p>${historyCopy}</p><label>Geschichte und Literatur durchsuchen<input`);
 if(path.endsWith('/app/loneliness.tsx')||path==='app/loneliness.tsx'){
  if(!source.includes(lonelinessIntro))source=source.replace("'Wählen Sie ein Thema oder suchen Sie gezielt nach einem Begriff.'",`'${lonelinessIntro}'`);
  source=source.replace('{isRoot?<>{lonelinessGroups.map(group=>',`{isRoot?<>${lonelinessStatus}{lonelinessGroups.map(group=>`);
 }
 if((path.endsWith('/app/news.tsx')||path==='app/news.tsx')&&!source.includes('Alle Medienlinks öffnen nach der bestehenden externen Linkbestätigung'))source=source.replace('</section>\n\n <PressDiscussionPreparation/>',`</section>\n ${newsCopy}\n <PressDiscussionPreparation/>`);
 return wasBuffer?Buffer.from(source):source;
}
