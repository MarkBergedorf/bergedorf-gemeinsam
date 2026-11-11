# Einsamkeit in Bergedorf – Konzeption und redaktionelle Kontrolle

Stand: 11. November 2026. Fortsetzung von Arbeitsauftrag 1 ab Commit `4e56b894f132e598c9a81c9738c85a6e8b5f7fd6`.

## Verbindliche Struktur vollständig übernommen

Die zuvor fehlende Gesamtkonzeption ist nun vorhanden und unverändert in `gesamtkonzeption.md` gesichert. Quelle: bereitgestellte Datei „Bergedorf_gemeinsam_Einsamkeit_Gesamtkonzeption.md“, konzeptioneller Stand 11. November 2026. Sie enthält genau **18 Hauptthemen, 108 Unterthemen und 12 weitere Themenknoten**, insgesamt **138 navigierbare Themenansichten**. Die 12 Knoten liegen unter 2.4, 2.5 und 14.3; sie sind nicht zwölf unterschiedliche Hierarchietiefen. Keine Aufzählung innerhalb eines Themenumfangs wurde eigenmächtig zu zusätzlichen Artikeln oder Themenknoten erklärt.

Titel, Nummern, Elternzuordnungen und sämtliche Aufzählungspunkte der Konzeption sind im öffentlichen Modell `frontend/lib/loneliness-topics.json` enthalten. Die Aufzählungen beschreiben den geplanten Themenumfang; sie sind keine fertig recherchierten Fachartikel. Die 18 bereits veröffentlichten Hauptthemen-IDs und die vier Darstellungsgruppen bleiben bestehen. Neue IDs `t2-5` usw. richten sich nach der verbindlichen Konzeptnummer und bleiben bei späteren Titeländerungen unverändert. Jeder Knoten hat eine eigene vollständige Pfadadresse, Einführung und verlinkte übergeordnete Stationen.

Die bestehenden Gestaltungselemente bleiben erhalten: Farben, Typografie, Hilfeeinstieg, Suchbereich und Themenkarten. Die Karten stehen wie in der PDF-Referenz in zwei Spalten, unter 600 Pixeln einspaltig. Beschreibungen ersetzen die bisherigen internen Platzhalterformulierungen. Lange Pfade dürfen innerhalb ihrer Beschriftungen umbrechen. Unterthemen stehen in den Themenansichten vor der redaktionellen Schwerpunktübersicht.

## Historische Orte und geplante Kommentare

Die Zweige 2.5 und 10.6 verweisen auf dieselbe künftig nutzbare Sammlung `historische-begegnungsorte`. Es sind **noch keine historischen Ortsdatensätze** angelegt. Ein späterer Datensatz erhält eine kanonische ID und Quellen; thematische Zugänge und Standortarten referenzieren ihn, statt unabhängige Kopien zu erzeugen. Querverweise verbinden 2.4 mit 10.5 sowie 2.5/2.5.5 mit 10.6/10.2. Betriebsnamen, Standorte, Zeiträume, Schließungen und Nutzungsänderungen müssen in Arbeitsauftrag 4 belegt und unterschieden werden. Keine Kausalbehauptung zum Verlust von Begegnungsorten aus ungeprüften Erinnerungen ableiten.

Für Themen 3/3.8 ist die spätere Kommentargrenze von 250 Zeichen und für 9/9.12 die Grenze von 500 Zeichen im Modell dokumentiert. **Keine Kommentarfunktion aktiviert.** Entwicklung lokaler Tests und Moderationsabläufe bleibt Arbeitsauftrag 7 vorbehalten. Keine Übermittlung, Speicherung, Registrierung oder produktive Einreichung wird hinzugefügt.

## Quellensicherung unverändert, fachliche Zuordnung teilweise fortgeschrieben

Alle 2.550 nicht leeren Quellzeilen der fünf Berichte bleiben mit unveränderten IDs, Dateiangaben, Zeilennummern, Quellabschnitten und Originaltexten erhalten. Die ursprünglichen Prüfsummen im Quellenregister bleiben unverändert und werden getestet. Leerzeilen sind keine Themen; Zeilenanzahlen dürfen nicht als Anzahl eigenständiger Themen oder geprüfter Artikel ausgegeben werden.

**408 Quellzeilen wurden inhaltlich gelesen und thematisch zugeordnet; 2.142 Quellzeilen sind noch offen.** Keine vollständige fachliche Zuordnung behaupten. Der Stand je Datei:

| Datei | Thematisch zugeordnete Quellzeilen | Noch offene Quellzeilen |
| --- | ---: | ---: |
| B1 – Eingefügter Text(7).txt | 270 | 10 |
| B2 – Eingefügter Text (2).txt | 30 | 482 |
| B3 – Eingefügter Text (3).txt | 8 | 356 |
| B4 – Eingefügter Text (4).txt | 98 | 1.018 |
| B5 – Eingefügter Text (5).txt | 2 | 276 |

Bei B1 sind alle 270 nummerierten Einzelpunkte zugeordnet. Die zehn übrigen Zeilen enthalten Überschriften, Einleitungen und übergreifende redaktionelle Einschränkungen; sie bleiben als Kontext erhalten und sind noch nicht gesondert zugeordnet. Bei B2 wurden Punkte 285–314 aus Abschnitt O, bei B3 die acht Aussagen aus Abschnitt 17, bei B4 die vollständigen Abschnitte 40–50 einschließlich ihrer Überschriften, bei B5 die Ergänzungspunkte 131 und 137 bearbeitet. Die Abgrenzung ist bewusst explizit; andere Stellen wurden nicht pauschal aus Stichwörtern als erledigt markiert.

`zuordnungsentscheidungen.json` hält jede Entscheidung mit Konzeptnummern und Begründung fest. `bestandsaufnahme.jsonl` enthält dafür Haupt-/Unterthema, gegebenenfalls weitere Ebene und zusätzliche thematische Zugänge. Unterschiedliche Aussagen werden nicht gelöscht; mehrere Quellstellen können dieselbe kanonische Themenansicht referenzieren. Persönliche Erfahrungen, historische Zahlen, Widersprüche, politische Bewertungen und Terminvorschläge bleiben in ihrem Originalwortlaut erhalten. Das ist thematische Einordnung, **keine Tatsachenprüfung oder redaktionelle Freigabe**.

`zuordnung-offen.json` listet sämtliche noch offenen IDs je Datei vollständig auf. Ihre exakten Aussagen und Fundstellen bleiben im Zeilenregister lesbar. Insbesondere die übrigen Abschnitte B2, B3, B4 und B5 benötigen weitere inhaltliche Einzelzuordnung. Die Prüfung aller wissenschaftlichen, historischen, institutionellen und politischen Angaben sowie von Namen und Terminen steht noch aus. B5 ist eine Ergänzungs-/Prüfliste zu vier Berichten, kein zusätzlicher unabhängiger Veranstaltungsbeleg.

Die zwei zusätzlich vereinbarten Hauptthemen sind unabhängig von Quellbericht-Dubletten vollständig in der Konzeption erfasst: Hauptthema 3 mit acht Unterthemen, Hauptthema 9 mit zwölf Unterthemen. Ihre Herkunft und Aufzählungen sind anhand der Konzeptnummer und der dokumentierten Konzeptzeile nachprüfbar.

## Technische Grundlage und weiterer Bedarf

`frontend/lib/loneliness.mjs` baut den rekursiven Index und die Pfade aus dem Themenmodell auf. Das Modell unterstützt auch weitere Ebenen und spätere Artikelknoten. Bestehende Adressen `#einsamkeit/<hauptthema>` bleiben gültig; beispielsweise lautet ein neuer Tiefenlink `#einsamkeit/ursachen/t2-5/t2-5-1`. Das bestehende Hash-Routing verwaltet Browser-Zurück/Vorwärts. Die Suche umfasst alle 138 tatsächlich angelegten Titel, Kurzbeschreibungen und später ergänzten redaktionellen Inhalte; keine nicht veröffentlichten Quellberichte werden als fertige Artikel durchsucht.

Noch offen sind die restliche fachliche Quellenzuordnung, sämtliche Primärquellenprüfungen, wissenschaftliche Fachartikel, historische Einzelrecherchen und verifizierte Hilfsangebote. Die öffentliche Einstiegsseite nennt die jetzt vorhandene Struktur korrekt und kennzeichnet die offenen Inhaltsarbeiten. Private unabhängige Trägerschaft und die Abgrenzung zum Hamburger Bündnis bleiben ausdrücklich sichtbar.

Vorheriger Dokumentationsstand: `archiv-grundstruktur.md` und `pruefung-grundstruktur.md`. Aktueller technischer Prüfstand: `pruefung.md`. Bestehende Websitebereiche und private Sites-Version 99 bleiben unangetastet.
