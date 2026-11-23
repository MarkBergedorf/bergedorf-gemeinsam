import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('PR 68 entfernt genau die sechs beauftragten Besuchertexte und erhält Themenhilfe und Funktionen',()=>{
 const directory=readFileSync('app/directory.tsx','utf8');
 assert(!directory.includes('Redaktionell zusammengestellte Profile sind keine bestätigten Selbstdarstellungen oder Kooperationen.'));
 assert(!directory.includes('Der gemeinsame Recherchebestand wird ergänzt; Vollständigkeit ist noch nicht geprüft.'));
 assert(directory.includes("organisations?'Organisationen stellen sich vor':'Bergedorfer Verzeichnis'"));
 assert(directory.includes('Organisationen und Einrichtungen durchsuchen'));

 const history=readFileSync('app/history-entry.tsx','utf8');
 assert(!history.includes('Die Ortsseiten ergänzen die Artikel um die Geschichte einzelner Orte und Gebiete.'));
 assert(history.includes('<HistoricalDirectoryEntry/>'));

 const lonely=readFileSync('app/loneliness.tsx','utf8');
 for(const removed of ['Informationen verstehen, Orientierung finden und Begegnung mitgestalten: Hier entsteht der Themenbereich zu Einsamkeit und Gemeinschaft im Bezirk Bergedorf.','Dieser Themenbereich wird redaktionell aufgebaut.','Die Themenstruktur mit 18 Hauptthemen, 109 Unterthemen und 12 weiteren Themenknoten ist angelegt.'])assert(!lonely.includes(removed),removed);
 assert(lonely.includes("'Wählen Sie ein Thema oder suchen Sie gezielt nach einem Begriff.'"));
 assert(lonely.includes('lonelinessGroups.map(group=>'));

 const news=readFileSync('app/news.tsx','utf8');
 assert(!news.includes('Alle Medienlinks öffnen nach der bestehenden externen Linkbestätigung in einem neuen Tab.'));
 assert(news.includes('<LocalNews dedicated/>'));
 assert(news.includes('<PressDiscussionPreparation/>'));
});
