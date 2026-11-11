# Einsamkeit in Bergedorf – redaktionelle Kontrollgrundlage

Stand: 11. November 2026. Arbeitsauftrag 1 von 7 ist inhaltlich noch nicht vollständig abgeschlossen.

## Verfügbare und fehlende Unterlagen

Die fünf im Quellenregister bezeichneten Projektdateien wurden vollständig eingelesen. B5 bezeichnet sich als Ergänzungs- und Prüfliste zu den vier Berichten B1–B4. Die fünfte Datei ist daher keine weitere Veranstaltungsquelle. Diese Texte enthalten auch Themenvorschläge und ungeprüfte Wiedergaben; sie sind keine unabhängigen Nachweise der darin genannten Tatsachen.

Nicht auffindbar ist die **vollständige bereits vereinbarte Gesamtkonzeption mit 18 Hauptthemen, sämtlichen Unterthemen, weiteren Ebenen und deren Kurzbeschreibungen**. Sie ist für die vollständige Übernahme der Hierarchie und die endgültige redaktionelle Zuordnung erforderlich. Die Berichte enthalten andere Gliederungen und ersetzen diese Konzeption nicht. Die im Auftrag genannte Beispielhierarchie ist kein Beleg für eine vollständige vereinbarte Untergliederung.

## Bestandsaufnahme und offene Zuordnung

`bestandsaufnahme.jsonl` enthält verlustfrei jede nicht leere Zeile der fünf gelieferten Texte als eigenen Datensatz: 2.550 Datensätze. Erfasst sind Originalwortlaut, Datei, genaue ursprüngliche Zeilennummer und Quellabschnitt. Auch Überschriften, Einleitungen, Einschränkungen, historische Beispiele, Beteiligte, politische Vorgänge und Terminangaben bleiben erhalten. Zusammengehörige Absätze können anhand aufeinanderfolgender Zeilennummern gelesen werden. Leerzeilen sind keine Themen und wurden ausgelassen. Datensatzanzahl ist ausdrücklich **keine Anzahl eigenständiger Themen oder Artikel**.

Jeder Datensatz hat die Felder `hauptthema`, `unterthema`, `weitereEbene`, `bearbeitungsstand` und `quellenpruefung`. Die Zielzuordnungen sind derzeit ausdrücklich `null`; sie werden nicht durch Vermutungen ersetzt. Die Statuscodes sind im Quellenregister erläutert. Noch keine Dubletten zusammenführen oder Einzelaspekte streichen. Diese Bestandsaufnahme ist die Grundlage für die spätere vollständige Themenzuordnung, nicht deren abgeschlossene Fassung.

Die zwei zusätzlichen Hauptthemen sind im öffentlichen Themenmodell ausdrücklich als eigene Themen vorhanden: `kennenlernen` (Was ist ein gesundes Kennenlernen?) und `begegnungsstaette` (Wie gründe ich eine Begegnungsstätte, die von allen Gruppen der Gesellschaft besucht wird?). Quelle ist Arbeitsauftrag 1, Abschnitt 2, Punkte 3 und 9. Unterthemen und weitere Ebenen sind auch dort noch nicht übernehmbar; redaktioneller Inhalt und Quellenprüfung stehen aus. Die übrigen 16 Hauptthemen stammen ebenfalls wortgetreu aus Abschnitt 2 dieses Arbeitsauftrags.

## Technische Grundlage

- `frontend/lib/loneliness.mjs`: bestätigte 18 Hauptthemen, vier rein visuelle Gruppen, rekursiv erweiterbares Themenmodell, stabile Pfade, Breadcrumbs und lokale Suche.
- `frontend/app/loneliness.tsx`: eigenständige Übersicht und Themenansichten, Suchformular, echter Hilfezugang, Elternlinks und sichtbarer redaktioneller Status.
- `#einsamkeit` und `#einsamkeit/<themen-id>`: direkt aufrufbare Hash-Routen auf GitHub Pages. Nach Ergänzung echter Unterthemen erweitert sich der Pfad auf beliebig viele Ebenen. IDs nach Veröffentlichung nicht umbenennen; bei redaktionellen Umbenennungen nur Titel ändern.
- Redaktionelle Bestandsaufnahme bleibt außerhalb des Frontend-Bundles. Die Suche durchsucht ausschließlich das öffentliche Themenmodell einschließlich tatsächlich ergänzter redaktioneller Texte, keine noch nicht veröffentlichten Berichtspunkte.
- Keine öffentliche Schreibfunktion, Registrierung, Formulardatenübermittlung, dauerhafte Eingabespeicherung oder automatische Hintergrundprüfung wird hinzugefügt.

Die kurzen Kartenbeschreibungen erläutern vorläufig nur den vorgesehenen Themenumfang; sie sind keine übernommenen Kurzbeschreibungen der fehlenden Gesamtkonzeption und keine Fachartikel. Noch keine geprüften Hilfsangebote, wissenschaftlichen Erkenntnisse, Zahlen, historischen Orte oder Veranstaltungen veröffentlicht. Im Hilfebereich wird dies ausdrücklich erklärt. Bestehende Verzeichnis- und Organisationsseiten sind lediglich als bestehende Navigation verlinkt, ohne Eignungsversprechen.

## Nächster erforderlicher redaktioneller Schritt

Die vollständige vereinbarte Gesamtkonzeption bereitstellen. Dann jeden Berichtspunkt zuordnen, ergänzende Aspekte und Dubletten prüfen, bestätigte Unterthemen mit stabilen IDs übernehmen und die vollständige Zuordnung kontrollieren. Tatsachen, Namen, historische Angaben und Veranstaltungsdaten anschließend anhand der Originalquellen prüfen. Erst danach können diese Inhalte als geprüfte Artikel erscheinen.

## Prüfung und Veröffentlichung

Navigation, rekursive Pfadauflösung, Breadcrumbs, Elternlinks, Suche, unbekannte Adressen und die Vollständigkeit der zeilenweisen Bestandsaufnahme werden durch die ergänzten Frontendtests geprüft. Browserprüfung und konkrete Veröffentlichungsergebnisse werden nach Abschluss in `pruefung.md` dokumentiert. Eine veröffentlichte technische Grundstruktur bedeutet nicht, dass die fehlende redaktionelle Gesamtkonzeption ersetzt oder der gesamte Auftrag abgeschlossen wäre.
