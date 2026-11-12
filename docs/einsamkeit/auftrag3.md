# Auftrag 3: Lebenssituationen, Gesundheit und konkrete Hilfen

Redaktioneller und technischer Prüfstand: 12. November 2026. Grundlage: `5054f007abf761ef9bdbeaca5f22befff041ee1f`.

## Ausarbeitung und Umfang

Alle 25 vorhandenen Ansichten der Hauptthemen 4–7 sind ausgearbeitet: vier Hauptthemen, sechs Unterthemen zu Lebenssituationen und jeweils fünf zu Gesundheit, Selbsthilfe und Hilfesuche. Die neue Textsammlung umfasst rund 7.100 Wörter zuzüglich Einleitungen, Quellen und Hilfsdaten. Zusammen mit Auftrag 2 sind 55 Themenansichten ausgearbeitet. Die unveränderte Gesamthierarchie bleibt bei 18 Hauptthemen, 108 Unterthemen und 12 weiteren Knoten (138 Ansichten).

| Hauptthema | Fertige bestehende Ansichten | Inhaltlicher Schwerpunkt |
| --- | ---: | --- |
| 4 Lebenssituationen | 7 | Kinder/Jugendliche, junge Erwachsene, Erwerbsleben und Arbeitslosigkeit, Familien/Alleinleben, höheres Alter, weitere besondere Lebenslagen |
| 5 Gesundheit | 6 | Psychische und körperliche Befunde, Teilhabebarrieren, Pflege, professionelle Behandlung und Notfallwege |
| 6 Selbst aktiv werden | 6 | Erste Schritte, Kontaktwege, begleiteter erster Besuch, Beziehungspflege, enttäuschende Versuche |
| 7 Hilfe | 6 | Eigene Hilfesuche, professionelle Hilfe, Hausgebundenheit, anderen helfen, konkrete Hilfsübersicht |

Die besonderen Lebenslagen werden innerhalb der vereinbarten Knoten in eigenen Abschnitten behandelt: Behinderung, chronische und seltene Krankheit, Hören/Sehen/Kommunikation, Autismus und die Abgrenzung zu anderen neurodivergenten Lebenslagen, psychische Belastungen, Sucht, Migration/Flucht, neuer Wohnort, geringe Lese-/Schreibkompetenz, Armut/Schulden, Wohnungslosigkeit, queere Lebensweisen, Gewalt/Trauma, Haft/Entlassung/Angehörige in Haft und Belastungen am Lebensende. Familienabschnitte berücksichtigen Schwangerschaft, Wochenbett, kleine Kinder, Väter, Alleinerziehen, unerfüllten Kinderwunsch, familiäre Entfremdung, Angehörige im Ausland, fehlende Notfallkontakte, kranke Kinder und mehrfache Sorgeverantwortung. Gruppen werden nicht pauschal als einsam dargestellt.

## Wissenschaftliche Grundlage

`frontend/lib/loneliness-sources-3.json` ergänzt 18 wissenschaftliche Veröffentlichungen sowie zwei offizielle KBV-Versorgungsinformationen. Verifiziert wurden Publikationsidentität, bibliografische Angaben, Methoden und die für die veröffentlichten Aussagen relevanten Ergebnisse anhand von Verlagsseiten, PubMed-Datensätzen beziehungsweise Originalabstracts in institutionellen Forschungsrepositorien. Wo kein frei zugänglicher Volltext vorlag, wird keine vollständige Volltextprüfung behauptet. Die Quellenbeschreibungen nennen Studientyp und Grenzen; alle neuen Forschungsabsätze haben Quellenverweise.

Neu erschlossene Themen: longitudinale psychische Gesundheit (Mann), Kinder/Jugendliche (Loades), Schlaf (Griffin), Herz-Kreislauf-Erkrankungen (Valtorta), Demenz (Luchetti), Angehörigenpflege (Hajek), Autismus (Grace), Wohnungslosigkeit (Lachaud), Schwangerschaft/frühe Elternschaft (Kent-Marvick), Befriending (Siette), RCT-Interventionsübersichten (Hansen), sexuelle Orientierung im höheren Alter (Hsieh/Liu), Behinderung (Gómez-Zúñiga), Flucht (Nguyen), Schmerzen (Smith), Suizidalität (McClelland), ausgeprägter sozialer Rückzug (Kato) und Bewegung (Shvedko). Die 32 bisherigen Quellen bleiben bytegleich und werden bei fachlicher Eignung mit ihren bereits dokumentierten Grenzen weiterverwendet. Insgesamt enthält das gemeinsame Register 52 Quellen.

Wichtig für die Interpretation: Beobachtete Zusammenhänge sind keine individuelle Diagnose und kein automatischer Kausalnachweis. Eine Demenzprävention durch Begegnung, ein sicherer Erfolg von Besuchsdiensten und eine Verringerung von Einsamkeit allein durch Bewegungsangebote werden ausdrücklich nicht versprochen. Der Pflege-Review erfasst keine Betreuung chronisch kranker Kinder; die Autismus-Forschung wird nicht auf ADHS verallgemeinert. Die frühe Loades-Übersicht ist keine kausale Langzeitbewertung der gesamten Pandemie. Medizinische Behandlung wird nicht durch Begegnung ersetzt.

## Konkrete Hilfsübersicht

18 redaktionell überprüfte Hilfszugänge in `frontend/lib/loneliness-help.json`; Auswahl und keine vollständige örtliche Versorgungsinventur. Ein Eintrag kann mehrere Zugänge desselben Trägers bündeln. Die Gesamtübersicht ist unter `#einsamkeit/hilfe` und `#einsamkeit/hilfe/t7-5` erreichbar. Die vier situativen Einstiege zeigen passende reale Kontakte vor den Fachtexten. Aus Themen 4–6 führt ein direkter Link zur Hilfe.

| Zugang | Bestätigte Quelle / Prüfgrenze |
| --- | --- |
| Sozialpsychiatrischer Dienst Bergedorf | Bezirksamt: Aufgaben, Telefonnummer, Adresse, Zeiten, Kostenfreiheit, Hausbesuch im Aufgabenbereich |
| Pflegestützpunkt | Bezirksamt und Soziales Dienstleistungszentrum: Kontakt, Beratung, Zeiten und Eingang C; Kostenfreiheit der Beratung, keine Zusage späterer Leistungen |
| Seniorenberatung | Bezirksamt: regionale Telefonnummern und Zeiten; konkrete Beratungsadresse und Kosten bleiben zu erfragen |
| Beratung für körperbehinderte Menschen | Bezirksamt: Zuständigkeiten, Telefone, Zeiten, kostenfreie Beratung und Hausbesuche |
| DRK-Besuchsdienst | Lokaler DRK-Anbieter: Sozialstation und Besuchsangebot; örtliche Kosten nicht bestätigt |
| Hospizdienst Bergedorf | Anbieter: Begleitung, Trauerangebote, Kostenfreiheit, Kontakt und wiederkehrende Zeiten; konkrete Monatsdaten auf Originalseite prüfen |
| Der Begleiter, psychosoziale Beratung | Anbieter und Beratungsflyer: drei Standortzugänge; Beratung kostenfrei, längerfristige ASP-Leistungen getrennt |
| Offene Gruppen beim Begleiter | Anbieter: offen, in der Regel ohne Anmeldung, mögliche Ausnahmen/Kapazitätsgrenzen; konkrete Termine und Kosten erfragen |
| KISS Hamburg | Anbieter: Selbsthilfevermittlung, Träger und Telefonzeiten; kein Bergedorfer Standort behauptet, Kosten konkreter Angebote erfragen |
| Soziale Beratungsstelle Bergedorf/Billstedt | Beratungsstelle und Integrationshilfen e. V.: Wohnungsprobleme/soziale Schwierigkeiten, Träger und offene Zeiten; Anmeldung bis 12 Uhr |
| Erziehungsberatung | Zuständiges Bezirksamt: Kontakt, Zeiten, kostenlose vertrauliche Beratung; offene Zeit ausdrücklich telefonisch |
| Jugendpsychiatrischer Dienst | Zuständiges Bezirksamt: Kontakt, Aufgaben und Kostenfreiheit; keine fremden Dienstzeiten übernommen |
| KODROBS | jhj Hamburg Netzwerk: Kontakt, Zielgruppe, kostenlose Beratung und Öffnungszeiten; Minderjährigenzuständigkeit gesondert klären |
| EUTB Bergedorf | Offizielles EUTB-Register und FAQ: lokaler Kontakt, Träger, Zeiten und Kostenfreiheit |
| Opferhilfe Hamburg | Anbieter: Träger, Beratung, kostenfreier Zugang, Telefontermine und konkrete Eingangsstufe/Aufzugbreite; keine ungefragte Mailanfrage anbieten |
| mhc | Anbieter, Impressum und Barrierefreiheitsseite: allgemeiner Zugang und Fachberatungswege; Rampe/Türbreite, kein Aufzug, WC-Lage; Kosten nicht pauschal behauptet |
| Caritas Integrationszentrum | Anbieter: Anschrift, Zielgruppe, Träger, Termin per E-Mail; widersprüchliche Telefonnummern nicht übernommen |
| TelefonSeelsorge | Verifiziertes deutschsprachiges, anonymes, kostenfreies Gesprächsangebot rund um die Uhr; geschulte Ehrenamtliche, ausdrücklich keine medizinische Notfallversorgung |

Jeder Datensatz führt Name/Träger, Art und Zielgruppe, Anschrift/Einzugsgebiet, direkte Kontakte, Zeiten, Kosten, Anmeldung, Zugänglichkeit, Prüfdatum und Originalquellen. Unbestätigte Einzelmerkmale sind ausdrücklich gekennzeichnet. Die Überprüfung war eine Onlineprüfung veröffentlichter Angaben, kein Testanruf, keine individuelle Beratung, keine Zusage freier Kapazitäten und keine Vor-Ort-Prüfung. Die Metadaten `free` und `homeVisit` unterscheiden bestätigt (`true`), ausdrücklich ausgeschlossen (`false`) und unbekannt (`null`). Filter schließen unbekannte Merkmale aus, statt sie zu raten.

Akute medizinische Hilfswege sind separat sichtbar: 112 bei unmittelbarer Gefahr und 116117 bei dringenden nicht lebensbedrohlichen medizinischen Beschwerden. Grundlage sind offizielle KBV-Informationen. Professionelle örtliche Zugänge und ehrenamtliche Gesprächsangebote werden getrennt bezeichnet. Es gibt keine neue Krisenannahme oder Vermittlung durch die Plattform.

## Abgleich sämtlicher Berichtsinformationen

`auftrag3-abdeckung.json` enthält alle **578** den Teilbäumen 4–7 bereits zugeordneten Originalzeilen einschließlich Fundstellen, Aussagearten, unverändertem Wortlaut, zusätzlicher Themenverbindungen und Verweisen auf die ausgearbeiteten Zielansichten. Die vorhandene Zuordnung wurde gegen die neuen Texte kontrolliert. Der Abschnittsindex pro Zielansicht erschließt deren gesamten Text; er behauptet nicht, jeder Abschnitt sei ein Nachweis für jeden Satz der Originalzeile.

- 243 Zeilen: Themenanliegen ausgearbeitet.
- 254 Zeilen: Anliegen aus Berichten eingeordnet; ursprüngliche Veranstaltungs-/Tatsachenaussage weiterhin ungeprüft.
- 41 Zeilen: Gliederungskontext berücksichtigt.
- 40 Zeilen: zugeordnet und mit einem konkreten noch offenen Einzelnachweis dokumentiert.

Es bestehen **663** Verbindungen zu neuen Zielansichten; **82** Zeilen sind mehreren neuen Ansichten zugeordnet. Zusätzliche Verbindungen in andere Teilbäume bleiben separat erhalten. Wiederholungen werden gemeinsam erschlossen, Originale nicht gelöscht oder umgeschrieben. Eine bearbeitete Frage ist kein bestätigter historischer, politischer oder medizinischer Befund. Keine der 578 Originalaussagen erhält pauschal den Status unabhängig verifiziert. Persönliche Erfahrungen werden nicht in repräsentative Aussagen umgedeutet.

`auftrag3-artikelregister.json` dokumentiert für alle 25 Ansichten Bearbeitungsstatus, Abschnittstitel, verwendete Quellen und zugehörige Originalzeilen. Das ursprüngliche Artikelregister, der Quellenindex, die Auswertungsbilanz, alle Originaltexte und bisherigen Prüffragen bleiben unverändert; diese Ergänzung beschreibt den neuen Bearbeitungsstand.

## Noch offene Punkte

Die zehn thematischen Prüfgruppen in `auftrag3-abdeckung.json` unterscheiden ausdrücklich fehlende Belege von fehlender thematischer Behandlung:

- Jugendtrendstudie 2026: genaue Publikation und Methodik fehlen; keine Zahlen oder behauptete Trends aus dem Veranstaltungsbericht übernommen.
- Kulturistenhoch2: aktueller örtlicher Zugang, Bedingungen und Kapazität noch zu verifizieren.
- Angehörigenschulen: konkretes örtliches Kursangebot einschließlich Kosten/Betreuung nicht bestätigt.
- Berichtete Überlastung von Hilfen: keine unabhängig geprüfte lokale Versorgungsfeststellung.
- Regelmäßige Kontakt-/Telefonpartnerschaften: konkreter örtlicher Dienst und Schutzkonzept noch nicht ausreichend bestätigt.
- Fahrdienste, Finanzierung, individuelle Wege und Abend-/Wochenenderreichbarkeit: nur nach konkreter Prüfung; 15–30 Minuten kein verbindlicher Standard.
- Weitergehende Datenbank-/Karten-/Detailfiltervorschläge: keine erfundenen Koordinaten oder Barrierefreiheitsmerkmale; bestehende Karten unverändert. Gegenwärtig funktionieren lokale Suche, Unterstützungsarten und bestätigte Kosten-/Hausbesuchsfilter.
- Genannte mögliche Netzwerkpartner einschließlich Jugendberufsagentur, Ochsenzoll, Arbeitsmarkt- und Pflegeakteuren: keine unbestätigten Kooperationen behauptet.
- Vollständige Begegnungsinventur aller Stadtteile: noch keine flächendeckende Erfassung kostenfreier, aktuell zugänglicher Begegnungsangebote. Die vorhandene Auswahl ist ausdrücklich begrenzt.
- Konkrete Veranstaltungsnotizen und persönliche Erlebnisse: Originalprotokoll, Sprecherkontext und gegebenenfalls Einwilligung vor öffentlicher konkreter Wiedergabe prüfen.

Zusätzlich: Die örtliche wellcome-Seite ließ sich in der Recherche nicht vollständig abrufen (HTTP 429); Kontakt-/Kosten-/Trägerprüfung ist nicht abgeschlossen. Deshalb kein gesicherter Datensatz. Für spezielle Unterstützung nach Haft/Haftentlassung, seltene Erkrankungen und besondere Kommunikationsbedarfe ist kein eigener lokaler Spezialdienst bestätigt. Das bedeutet nicht, dass entsprechende Unterstützung nicht existiert. Caritas veröffentlicht auf derselben Seite abweichende Telefonnummern; der konsistente E-Mail-Kontakt wird verwendet. Bei der Erziehungsberatung haben amtliche Bezirksangaben Vorrang gegenüber abweichenden Kontakten/Zeiten in einem Verbandsverzeichnis. Bei der Pflegeberatung wird der aktuelle Eingang C des Sozialen Dienstleistungszentrums verwendet, keine ältere Eingang-D-Angabe.

## Technische Prüfung und Schutz des Bestands

Die neuen Daten werden mit den unveränderten bisherigen Artikel- und Quellenobjekten zusammengeführt. Navigation, Direktlinks, Breadcrumbs und Suche nutzen weiterhin dieselbe Hierarchie. Die inzwischen überholte öffentliche Hilfebeschreibung wird bei der Darstellung aktualisiert; die zugrunde liegende Konzeption und Themenstruktur bleiben bytegleich. Neue Gestaltung ist auf den Hilfsbereich innerhalb `.loneliness-page` begrenzt.

118 Frontendtests bestanden, darunter zehn neue Tests zu allen 25 Ansichten, Quellenbezügen, Direktlinks/Themenpfaden, Suchbarkeit der Hilfsstellen, vollständigem Datenschema, bestätigten Filtermerkmalen, Krisentrennung, Abdeckung aller 578 Originalzeilen und unveränderten bisherigen Artikeln/Quellen/Hierarchie. Regulärer Produktionsbuild und statische Dist-Prüfung bestanden. Der Build meldet die bereits bekannten Hinweise zur Leaflet-CSS-Auflösung und zu großen Bundles. Die GitHub-Pages-Dateien werden mit dem bestehenden `scripts/sync-pages.mjs` erzeugt.

Tatsächliche Desktop-Sicht- und Bedienprüfung: Themenübersicht, unmittelbarer Hilfeeinstieg, echte Kontaktkarten, kombinierte Filter, Tastaturbedienung der Details, Suchergebnisse, Direktaufrufe, Themenpfade, Browser-Zurück/Vorwärts und externe Bestätigung. Eine echte Smartphone-/Viewport-Sichtprüfung ist in der verfügbaren Browsersteuerung nicht möglich; mobile CSS-Umbrüche und Bedienelemente werden technisch geprüft. Keine Prüfung auf einem realen Smartphone behauptet.

Keine neuen Übermittlungen, Datenbanken, öffentlichen Kommentare, Registrierungen, laufenden Hintergrundfunktionen oder Speicherzugriffe. Die bestehenden lokalen Testformulare bleiben erhalten. Alle anderen Websitebereiche, Originaldateien und die private Sites-Version 99 bleiben unangetastet. Der tatsächliche GitHub-Pages-Veröffentlichungsstatus und die resultierende Commit-ID werden nach dem Push im Abschlussbericht mitgeteilt.
