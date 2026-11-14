# Vollständige redaktionelle Auswertung der fünf Berichte

> Bearbeitungsstand Auftrag 4: [Begegnung, Gründungsleitfaden und Stadtteile](auftrag4.md), [Artikelregister](auftrag4-artikelregister.json), [446-zeiliger Abgleich](auftrag4-abdeckung.json), [historischer Abgleich](auftrag4-historischer-abgleich.json) und [Bildprüfung aller 88 Nummern](auftrag4-bildpruefung.json). Frühere Dokumentationsstände und Originale bleiben unverändert.


> Neuer Bearbeitungsstand Auftrag 3: [Lebenssituationen, Gesundheit und konkrete Hilfen](auftrag3.md), [Artikelstatus](auftrag3-artikelregister.json) und [Abdeckungsregister](auftrag3-abdeckung.json). Die früheren Dokumentationsstände bleiben unverändert nachvollziehbar.

> Bearbeitungsstand Auftrag 2: [Fachtexte, Abdeckung und offene Forschung](auftrag2.md); zeilenbezogener Nachweis in [auftrag2-abdeckung.json](auftrag2-abdeckung.json). Die folgende Dokumentation beschreibt weiterhin die unveränderte vollständige Berichtserschließung aus Auftrag 1.

Stand: 11. November 2026. Ausgangscommit: `2cdd58be5a6a3a75fc6d4081d3070c256995e16b`.

## Abschluss und Grenzen

Alle **2.550 nicht leeren Quellzeilen** aus B1–B5 wurden vollständig gelesen und inhaltlich gegen die vorhandene Gesamtkonzeption geprüft. Auch die früheren 408 Zuordnungen wurden erneut kontrolliert; 75 wurden präzisiert. Es gibt **keine fachlich unzugeordneten Inhaltszeilen**. Das bedeutet keine unabhängige Tatsachenbestätigung: wissenschaftliche Aussagen, Namen, Geschichte, Termine, Angebote, politische Angaben und rechtliche/organisatorische Vorschläge bleiben vor einer späteren Veröffentlichung anhand geeigneter Primärquellen zu prüfen. Es wurden keine wissenschaftlichen Fachartikel geschrieben und keine neuen Funktionen aktiviert.

| Bericht | Zugeordnete Inhaltszeilen | Gliederung und Kontext | Reine Formatierung | Geprüfte Zeilen |
| --- | ---: | ---: | ---: | ---: |
| B1 – Eingefügter Text(7).txt | 273 | 7 | 0 | 280 |
| B2 – Eingefügter Text (2).txt | 478 | 33 | 1 | 512 |
| B3 – Eingefügter Text (3).txt | 322 | 42 | 0 | 364 |
| B4 – Eingefügter Text (4).txt | 978 | 137 | 1 | 1.116 |
| B5 – Eingefügter Text (5).txt | 250 | 26 | 2 | 278 |
| **Gesamt** | **2.301** | **245** | **4** | **2.550** |

Die Inhaltszeilen sind keine Zählung eigenständiger Artikel oder einzigartiger Tatsachen. Ein Aufzählungspunkt kann mehrere Gesichtspunkte enthalten. 1.200 Inhaltszeilen haben zulässige Mehrfachzuordnungen mit insgesamt 1.315 zusätzlichen Verbindungen. Originale bleiben einmalig mit ihrer Quell-ID gespeichert. Einleitung, Überschriften und Zusammenfassungen werden als Kontext gesondert erschlossen. Die vier reinen Formatierungszeilen sind B2-L562 (Zählüberschrift 468), B4-L1170 (Umbruchmarke) und B5-L123/B5-L253 (Favicon-Verweise). Sie sind geprüft und erhalten, benötigen aber keinen Fachartikel.

## Unveränderte Grundlage

Sämtliche Originaltexte, IDs, Dateinamen/-kennungen, ursprünglichen Zeilennummern und Quellabschnitte sind gegenüber dem Ausgangscommit unverändert. Die fünf ursprünglichen Dateiprüfsummen sowie eine zusätzliche Prüfsumme sämtlicher Originalfelder werden automatisiert kontrolliert. Hinzugekommen sind ausschließlich redaktionelle Metadaten und Register.

Die bestehende Gesamtkonzeption und das öffentliche Themenmodell bleiben bytegleich: **18 Hauptthemen, 108 Unterthemen, 12 weitere Knoten; insgesamt 138 Themenansichten**. Gestaltung, Navigation und alle übrigen Websitebereiche sind unverändert. Private Sites-Version 99 wird nicht geöffnet oder bearbeitet.

## So werden Informationen für einen Fachartikel gefunden

1. In `artikelregister.md` den Titel oder die Konzeptnummer suchen.
2. Die dort aufgeführten IDs unter **Inhalte** führen zu direkt fachlich zugeordneten Originalzeilen; **Kontext** enthält passende Überschriften und Arbeits-/Quellenrahmen.
3. In `bestandsaufnahme.jsonl` nach der exakten ID suchen. Dort stehen unveränderter Wortlaut, ursprüngliche Datei und Fundstelle, Aussagearten, Aussageform, Zielknoten, zusätzliche Verbindungen, Begründung und erforderliche Prüfungen.
4. `artikel-quellenindex.json` bietet denselben Zugriff maschinenlesbar. `mitUnterthemen` umfasst zusätzlich alle Quellen des betreffenden Teilbaums; dadurch sind Informationen auch beim Einstieg über ein Hauptthema auffindbar.
5. `offene-prueffragen.json` hält konkrete ungeklärte Identitäts-, Datums-, Quellen- und Tatsachenfragen mit Quell-IDs fest. Diese offenen Nachweise sind keine fehlende thematische Zuordnung.

Die Zielknoten sind bestehende Themen-IDs. Keine neuen Themen oder Artikel wurden erfunden. Nicht jeder Knoten benötigt einen eigenen Punkt aus den fünf Berichten: Die zusätzlich verbindlich vereinbarten Themen und Kommentargrenzen stammen weiterhin aus der unveränderten Gesamtkonzeption.

## Aussagearten und Wiederholungen

Die Metadaten trennen insbesondere `wissenschaftliche_aussage`, `wissenschaftlicher_bezug`, `persoenliche_erfahrung`, `historische_angabe`, `politische_forderung`, `politische_bewertung`, `berichteter_politischer_stand`, `veranstaltungsnotiz`, `organisationsangabe`, `fragestellung`, `vorschlag`, `themenplanung`, `themenvorschlag`, `quellenhinweis` und redaktionellen Kontext. Mehrere Kennzeichnungen sind zulässig. `wissenschaftlicher_bezug` allein bezeichnet noch kein Studienergebnis; Themenlisten bleiben Rechercheaufträge. Die Aussageform trennt Rechercheauftrag, berichtete Aussage/Erfahrung, Vorschlag, persönliche Bewertung, Frage, Planungsangabe und Kontext.

Alle Inhaltszeilen behalten `tatsachenVerifiziert: false`. Die thematische Kontrolle darf nicht als medizinische, historische, politische, rechtliche oder terminliche Verifikation ausgegeben werden. Insbesondere sind B1/B2 Inhaltsplanungen und B5 ausdrücklich zusätzliche Themenvorschläge; B3/B4 sind Aufbereitungen von Veranstaltungsnotizen. Sie sind keine fünf unabhängigen Bestätigungen desselben Sachverhalts.

Wiederkehrende Aspekte werden gemeinsam über denselben kanonischen Themenknoten erschlossen, ohne zusätzliche Einzelheiten zu löschen. `wiederholungen.json` weist darüber hinaus 24 Gruppen mit 58 wortgleichen Vorkommen aus. Dabei wurden nur Aufzählungsnummern/-zeichen für den Vergleich entfernt. Ähnliche Formulierungen, unterschiedliche Jahresangaben, Namen und Sprecherperspektiven werden nicht automatisch gleichgesetzt. Kontext und Originale bleiben immer erhalten.

Beispiele: Die persönliche Zahl von 97 früheren Gastwirtschaften bleibt zusammen mit ihrer ausdrücklichen Einschränkung und den abweichenden Einschätzungen auffindbar. Die polnische Mahlzeiten-Erinnerung wird nicht mit dem anderen Beispiel Pottkieker verschmolzen. Preisangaben für 2026/2027 werden getrennt erhalten und nicht zu einem vermeintlich eindeutigen Termin umgeschrieben. Eine vorgeschlagene Kooperation mit Post/DHL ist keine erklärte Zusammenarbeit.

## Noch offene Nachweise

19 konkrete Prüffragen sind dokumentiert: Stiftungsname; Personennamen/Rollen; KNE/KME; Preisname/Jahrgänge; 26. November; Strategietermine; Bundeskonferenz/Aktionswoche/Barometer; Krisennetz; Miller & Willi; SAIWIR/Datenbank; Klönschnacker/HVV; Hamburger politischer Stand; historische Zählung; polnisches Beispiel; aktuelle Praxisangebote; Studien/Kausalität; amtliche Sozialraum-/Mobilitätsunterlagen; Partnerzusagen; organisatorische/Datenschutzvoraussetzungen.

Die Themenzuordnung ist jeweils möglich; Identität, Datum oder Beleglage sind damit noch nicht entschieden. Ergänzend stehen bei jeder Inhaltszeile die nach ihrer Aussageart erforderlichen Quellenprüfungen. Die 19 gebündelten Fragen ersetzen diese zeilenbezogenen Prüfaufträge nicht. Es besteht derzeit kein begründeter Bedarf, die Themenhierarchie zu ändern.

## Dateien und Reproduzierbarkeit

- `bestandsaufnahme.jsonl`: vollständiges Original- und Auswertungsregister.
- `zuordnungsentscheidungen.json`: explizite Entscheidungen für alle 2.550 Zeilen.
- `artikelregister.md` und `artikel-quellenindex.json`: Zugang pro bestehendem Themenknoten.
- `auswertungsbilanz.json` und `quellenregister.json`: differenzierte Zählung, Quellenidentität und unveränderte Prüfsummen.
- `offene-prueffragen.json`: konkret noch zu prüfende Informationen.
- `zuordnung-offen.json`: keine fachlich offenen Inhalte; Verweis auf die getrennte Tatsachenprüfung.
- `wiederholungen.json`: wortgleiche Vorkommen ohne Datenverlust.
- `zuordnung-aenderungen.json`: 75 Änderungen an früheren Zuordnungen mit Vorher/Nachher.
- `gesamtkonzeption.md`: unveränderte verbindliche Struktur.
- `archiv-teilzuordnung-2cdd58be.md`: unveränderter vorheriger Dokumentationsstand; ältere Archive bleiben erhalten.

Die nach vollständiger Lektüre festgelegten Punkt-, Abschnitts- und Zeilenentscheidungen stehen in `scripts/einsamkeit/auswertung.py`; die konkreten Prüffragen und Wiederholungserschließung in `scripts/einsamkeit/prueffragen.py`. Keine automatische Stichwortklassifikation: Abschnittsentscheidungen sind aus der Lektüre festgelegt und für fachlich unterschiedliche Aussagen zeilengenau präzisiert. Ausführung vom Repository aus: `python scripts/einsamkeit/auswertung.py`. Originalfelder werden zuvor gegen den Ausgangscommit und die ursprünglichen Prüfsummen kontrolliert; bei Abweichungen bricht der Lauf ab. Das Verfahren ist eine reproduzierbare Anwendung redaktioneller Entscheidungen, keine autonome wissenschaftliche Bewertung.

Technischer Abschlussnachweis: `pruefung.md`.

## Abschluss der ersten Entwicklungsphase – Auftrag 7

Aktueller technischer und redaktioneller Prüfstand: [Abschlussbericht Auftrag 7](auftrag7.md). Die älteren Berichte oben bleiben datierte historische Stände. Aktuell sind 18 Hauptthemen mit 139 Themenansichten ausgearbeitet; einzelne Belege und zusätzliche Funktionen bleiben ausdrücklich offen. [Fortgeschriebene Prüffragen](auftrag7-offene-punkte.json) · [Gesamtabgleich](auftrag7-gesamtabgleich.json).
