# Ergänzungsauftrag 21.1 – Arbeits- und Abnahmestand

Stand der Prüfung: 22.11.2026
Ausgangsstand: `0e1dc4d6a000092274f04e4c8c763c41e35be3ad` (Merge PR #22)
Arbeitszweig: `feature/auftrag21-1-tourism-expand`

## Ergebnisübersicht

Die Ergänzung erweitert den bestehenden Tourismusbereich, ohne ihn neu aufzubauen. Die 93 Ausgangsdatensätze und ihre ursprünglichen Namen, Themen, ausführlichen Beschreibungen und Hauptquellen bleiben erhalten. Das wird durch einen eingefrorenen Vergleichsbestand mit allen 93 Datensätzen und einen automatisierten Feldvergleich geprüft.

| Messgröße | Ausgang | Stand dieser Änderung |
| --- | ---: | ---: |
| Redaktionelle Tourismusdatensätze | 93 | 112 (+19) |
| Themenbereiche | 12 | 12 |
| Datensätze mit belegten OSM-Punktkoordinaten | 8 | 11 (+3) |
| Unterschiedliche Kartenkoordinaten | 8 | 11 |
| Quellenauswahl „10 Highlights“ | nicht eigens umgesetzt | 10 |
| Einzeln auffindbare EntdeckerRouten | 3 | 5 |
| Neue geprüfte Routenlinien / Gebietsflächen | 0 | 0 |
| Neue Kartenkategorien | – | 13 |

**Prüfurteil:** Die redaktionelle Erweiterung, Navigation, Filter und Punktkarten-Ergänzung sind umgesetzt und durch Tests abgesichert. Die vollständige geometrische Abnahme aller Orte, Routen und Gebiete ist nicht erreicht: Für die fünf EntdeckerRouten und mehrere große Landschaften lagen keine überprüften maschinenlesbaren Geometrien vor. Die Karte behauptet deshalb keine Linie oder Fläche und setzt keinen geschätzten Kartenpunkt. Ergänzungsauftrag 21.1 ist damit technisch weit umgesetzt, aber hinsichtlich der verlangten flächenhaften und linienförmigen Kartendarstellung noch nicht vollständig erfüllt.

## Bestandsschutz und Datenänderungen

- `tourism-original-records.json` enthält den Vergleichsbestand aus `main` mit 93 Datensätzen. Der Regressionstest vergleicht Name, Kategorie, vollständige ursprüngliche Beschreibung und Hauptquellen-URL jedes ursprünglichen Datensatzes. Alle 93 stimmen überein.
- Die zwölf vorhandenen Themenreiter bleiben erhalten. Suche, Themenfilter, Kostenlosfilter, Eintragsnavigation, Einwilligungsdialog und getrennte Geschichtskarte bleiben bestehen.
- 19 neue Datensätze: Rosentour; Route Boberger Dünen; Vier- und Marschlande als Landschaftsbeitrag; Weinfass; HamburgBoats; ADFC-Tourenportal; Segelflugplatz Boberg; Gokartverleih; Kutschfahrten; Megaballs mit ungeklärter aktueller Verfügbarkeit; Allermöher Wiesen; Alter Holzhafen; Spadenländer Spitze; Bergedorfer Gehölz und Schloss-zu-Schloss-Spaziergang; Museumseisenbahn Karoline; Wochenmärkte; Bergedorfer Stadtfest; Weihnachtsmarkt; Wutzrock.
- Ergänzungen bestehender Daten: Die fünf EntdeckerRouten haben nun die Routenkennungen 1–5; beim Elberadweg stehen die zusätzlichen lokalen Streckeninformationen in einem separaten Zusatztext, sodass der ursprüngliche Beschreibungstext unverändert bleibt. Haus Anna Elbe hat die im Auftrag genannte Schreibweise „Altengammer Hauptdeich 82“, verifizierte Unterkunfts- und Fahrradhinweise sowie eine sichtbare Kennzeichnung, dass die aktuell abrufbare Unterkunftsseite keine Baumzeltverfügbarkeit bestätigt. Für HIAMO bleibt die Bett+Bike-Aussage ausdrücklich unbestätigt, bis die vom Auftraggeber genannte Listung unabhängig abrufbar ist.

## Die zehn Highlights

Die Auswahl von Bergedorf.de ist als quellenbezogene, nicht nummerierte Übersicht eingebunden. Sie wird nicht als Rangliste oder Plattformbewertung dargestellt. Auf passenden vorhandenen Kartenpunkten erscheint zusätzlich ein goldener Ring und in der Detailkarte die Kennzeichnung „Eines der 10 Highlights von Bergedorf.de“. Jede Karte verlinkt zum passenden redaktionellen Datensatz.

1. Vier- und Marschlande – neuer Landschaftsbeitrag; keine Mittelpunktkoordinate.
2. Zollenspieker Fährhaus mit Elblandschaft – vorhandener Eintrag.
3. Hamburger Sternwarte – vorhandener Eintrag; noch ohne geprüften Standortpunkt.
4. Boberger Niederung mit Dünen – vorhandener Eintrag und verknüpftes Dünenhaus; nur der vorhandene belegte Punkt des Dünenhauses wird markiert.
5. Freilichtmuseum Rieck Haus – vorhandener Kartenpunkt.
6. Bergedorfer Schloss – vorhandener Eintrag und Punkt.
7. Wassererlebnis Dove-Elbe, Gose-Elbe und Bille – Verknüpfung zu vorhandenen Wasser-/Landschaftseinträgen; keine geschätzte Gewässerlinie.
8. KZ-Gedenkstätte Neuengamme – vorhandener Kartenpunkt und der Status als Gedenk- und Bildungsort bleibt erhalten.
9. Historischer Stadtkern – Verknüpfung mit Altstadt, Hasse-Haus und Windmühle; kein erfundenes Gebiets-Polygon.
10. Hof Eggers – vorhandener Beitrag mit neu verifiziertem Kartenpunkt.

Die Kartenkategorie „10 Highlights“ lässt sich ein- und ausschalten. Die Übersicht verwendet Aufzählungspunkte statt Rangnummern.

## Radtouren und Elberadweg

Alle fünf EntdeckerRouten sind einzeln auffindbar: Rosentour (ca. 25 km), Tour hinter den Deichen (ca. 13 km), Elbkieker-Tour (ca. 30 km), Vierländer Kirchentour (ca. 28 km) und Tour Boberger Dünen. Die Routenangaben verweisen auf die offizielle Tourenbeschreibung und übernehmen keine erfundene Wegführung. Der Elberadweg-Eintrag verlinkt nun zusätzlich die offizielle Elberadwegseite und die Bergedorfer Detailseite. Die beschriebene lokale Strecke wird nicht als Luftlinie gezeichnet.

Für die fünf EntdeckerRouten, den Elberadweg und den Schloss-zu-Schloss-Spaziergang wurde in der verfügbaren offiziellen Quelle keine überprüfbare maschinenlesbare Liniengeometrie nachgewiesen. Es wurden daher null neue Routenlinien erzeugt. Die Kartenkategorie „Radtouren und Radwege“ filtert vorhandene, belegte Punktorte und ersetzt keine Routenkarte.

## Unterkunft, ADFC, Freizeit, Kultur und Veranstaltungen

- **Haus Anna Elbe:** Die aktuelle Betreiberseite nennt Ferienwohnungen, Waldhütten, Camping und Zeltmöglichkeiten. Sie bestätigt keine konkrete Baumzeltbuchbarkeit; die entsprechende Bergedorf-Tourismus-Referenz wird sichtbar als nicht aktuell vom Anbieter bestätigt behandelt. Die dortige Anbieterinformation nennt Fahrräder; andere Fahrradleistungen, insbesondere E-Bike-Laden, werden nicht behauptet.
- **HIAMO:** Hotelstandort wurde mit einem konkreten OSM-Objekt kartiert. Der konkrete Bett+Bike-Link wurde im verfügbaren Web-Prüfwerkzeug nicht geöffnet; weder Zertifizierung noch damit verbundene Fahrradservices werden daher als bestätigt gekennzeichnet. Die PDF-Anlage lag in diesem Arbeitsverzeichnis nicht vor.
- **Weinfass und Hausboote:** eigene Datensätze mit Betreiberlinks. Die Weinfässer werden als beheizbare Schlafmöglichkeit beschrieben. Die Hausboote Sutje, Lütje und Bötje werden ausdrücklich als festliegende Übernachtungsangebote und nicht als mietbare Fahrboote eingeordnet. Preise, Buchbarkeit und Termine bleiben Betreiberangaben.
- **ADFC:** Link zum offiziellen regionalen Veranstaltungsangebot und zu Hamburg wurde ergänzt. Eine unterstützte, zuverlässig auslesbare statische Terminschnittstelle wurde nicht festgestellt; es gibt keine automatische Übernahme und keine fest eingebauten Einzeltermine.
- **Segelflug:** Boberg führt die zwei genannten Vereine, saisonalen Besuchshinweis und belegte Gast-/Kennenlernflüge mit Betreiberlinks auf. Kosten, Flugtermine und Verfügbarkeit werden nicht fortgeschrieben.
- **Historische Eisenbahn:** Karoline ist als gelegentliche Museumsfahrt nach Geesthacht beschrieben, nicht als regulärer ÖPNV; Umlandlage und aktuelle Termine sind kenntlich.
- **Familie und Freizeit:** Die ausdrücklich genannten Anbieter Eselei, Gokarthof und Erlebnisbauernhof Burmester werden über die vorhandenen Beiträge beziehungsweise neue geprüfte Datensätze auffindbar. Megaballs ist als gelegentlich/saisonal und ohne bestätigten aktuellen Termin gekennzeichnet.
- **Natur und Märkte:** Drei fehlende Gebietsbeiträge wurden ergänzt; Wochenmarktstandorte und -zeiten verweisen auf die amtliche, veränderliche Übersicht. Es werden keine geschätzten Punkte auf die Karte gesetzt.
- **Kultur und Feste:** Drei dauerhafte Informationslinks (Stadtfest, Weihnachtsmarkt, Wutzrock) wurden ergänzt. Frühere Termine werden nicht automatisch wiederholt; die Veranstaltungsflächen werden erst bei aktueller Ausgabe als bestätigt behandelt. Kulturorte aus dem ursprünglichen Datensatz bleiben erhalten.

## Karte und Koordinatenherkunft

Die bestehenden acht OSM-Punkte bleiben. Drei zusätzliche Punktobjekte mit eindeutiger OSM-ID und dokumentierter Koordinatenquelle wurden hinzugefügt:

- HIAMO Hotel: OSM node `13294526171`.
- Haus Anna Elbe: OSM way `260525214`.
- Hof Eggers: OSM way `172120370`.

Damit enthält die Quelldatenbasis 11 Marker mit 11 verschiedenen gerundeten Koordinatenpaaren. Die Marker werden an die vorhandenen Kartenfilter gebunden; Highlights erhalten einen goldenen Außenring. 13 thematische Kartenfilter sind auswählbar: Highlights, Sehenswürdigkeiten, Radwege, fahrradfreundliche Unterkünfte, besondere Übernachtungen, Hotels/Pensionen, Kulturorte, Veranstaltungsorte, Freizeit/Familie, Wasser/Häfen, Natur/Schutzgebiete, Grünflächen und Märkte. Zusätzlich gibt es im Verzeichnisfilter die Option „Fahrradfreundliche Unterkünfte“; zum Prüfstand ist dafür nur Haus Anna Elbe mit einem konkreten Betreibermerkmal belegt.

Es wurden keine neuen Polygone, Linien, Gehölz-/Friedhofsflächen oder Wassergeometrien übernommen. Größere Landschaften und nicht mit Koordinaten belegte Einrichtungen erscheinen in Suche und Liste, aber nicht als punktgenau behauptete Geografie. Die bisherigen Stadtteilgrenzen werden weiterhin nur als Orientierung dargestellt.

## Quellenabgleich und Prüfgrenzen

Verwendete beziehungsweise geprüfte Originalquellen:

- [10 Highlights](https://www.bergedorf.de/10-highlights)
- [Ausflugtipps-Übersicht](https://www.bergedorf.de/tourismus/ausflugtipps/uebersicht)
- [EntdeckerRouten](https://www.bergedorf.de/tourismus/ausflugtipps/radtouren/entdeckerrouten)
- [Elberadweg Bergedorf](https://www.bergedorf.de/tourismus/ausflugtipps/radtouren/elberadweg) und [Elberadweg-Portal](https://www.elberadweg.de/)
- [ADFC Hamburg Veranstaltungen](https://hamburg.adfc.de/veranstaltungen) und [ADFC-Tourenportal](https://touren-termine.adfc.de/)
- [Haus Anna Elbe – Unterkunftsarten](https://www.haus-anna-elbe.de/unterkuenfte/), [Kontakt/Anfahrt](https://www.haus-anna-elbe.de/kontakt/) und [Impressum](https://www.haus-anna-elbe.de/impressum/)
- [Wein- & Friesenstube – Weinfass](https://friesenstube.hamburg/uebernachten-im-weinfass/)
- [HamburgBoats – Hausboote](https://hamburgboats.de/hausboote) und [Kontakt](https://hamburgboats.de/kontakt)
- [HAC Boberg – Gastflüge](https://www.hac-boberg.de/mitflug.html), [Besuch](https://www.hac-boberg.de/kontakt.html) und [HVL Boberg – Kennenlernflüge](https://www.hvl-boberg.de/flieg-mit)
- [Hamburg.de – Historische Eisenbahn Geesthacht](https://www.hamburg.de/verkehr/bus-bahn/bahn/karoline-eisenbahn-geesthacht-372128)
- [Hamburg.de – Wochenmärkte Bergedorf](https://www.hamburg.de/freizeit/maerkte-und-messen/wochenmaerkte/bergedorf-339490)
- [Bergedorfer Stadtfest](https://www.bergedorfer-stadtfest.com/), [Weihnachtsmarkt](https://bergedorfer-weihnachtsmarkt.de/) und [Wutzrock](https://wutzrock.de/)
- [OSM-Objekt HIAMO node 13294526171](https://www.openstreetmap.org/node/13294526171), [Haus Anna Elbe way 260525214](https://www.openstreetmap.org/way/260525214) und [Hof Eggers way 172120370](https://www.openstreetmap.org/way/172120370).

Der Auftrag nennt drei PDFs, aber in der Arbeitsumgebung war nur der Auftragstext als Datei vorhanden. Die nicht verfügbaren PDF-Dateien wurden nicht als eingesehen dokumentiert. Wo möglich, wurden die verlinkten Betreiberquellen stattdessen geprüft. Der angegebene Bett+Bike-Detail-Link ließ sich im Web-Prüfwerkzeug nicht öffnen; die Listung bleibt deshalb offen. Eine unabhängige sachliche Prüfung sämtlicher Aussagen der 93 Ausgangsdatensätze, eine vollständige Geometrieinventur aller Einrichtungen sowie eine fachrechtliche Prüfung waren nicht Teil der nachgewiesenen Regressionstests.

## Qualitätssicherung

Durchgeführt:

- 12 zielbezogene Tourismustests, alle bestanden. Sie prüfen Navigation, Kombination von Suche/Themen/Gratis-/Fahrradfiltern, leere Trefferlisten, zehn Highlight-Verweise, alle fünf Routen, Punktkoordinaten, Inhaltserhalt der 93 Ausgangseinträge und Zusatzangebote.
- Vollständige bestehende Testsuite: 386 bestanden, 0 fehlgeschlagen.
- Produktionsbuild: erfolgreich; 267 Dateien in `dist`, Basispfad `/bergedorf-gemeinsam/`, vier Beispieldatensätze, keine Live-Datenbankabfrage.
- Build-Synchronisierung: vollständig ausgeführtes `dist` wurde in den Pages-Root übernommen.
- Bestehende Buildwarnungen bleiben: Leaflet-CSS-Pfad wird zur Laufzeit aufgelöst; der Haupt-JavaScript-Chunk hat ca. 2,81 MB unkomprimiert (ca. 692 kB gzip), der Kartenchunk ca. 559 kB (ca. 159 kB gzip). Der Build ist erfolgreich; eine praktische Ladezeit-/Netzwerkprofilierung wurde nicht durchgeführt, eine Code-Aufteilung nicht als Teil dieser Inhalts-/Kartenänderung vorgenommen.

## Veröffentlichung und öffentliche Liveprüfung

- Pull Request: [#23](https://github.com/MarkBergedorf/bergedorf-gemeinsam/pull/23), am 22.11.2026 zusammengeführt.
- Commit des geprüften PR-Inhalts: `af6c13648ffff1faad73f72256b985ed62d6566e`.
- Merge-Commit auf `main`: `8a8316a7b674552537fe24ee29d5cbfa2425a117`.
- GitHub Pages-Lauf **#80** (`44969162874`): Build und Deploy erfolgreich; Deploy-Schritt am 22.11.2026 abgeschlossen.
- Öffentliche Seite nach dem erfolgreichen Deploy neu geladen: [Bergedorf entdecken – Gäste & Tourismus](https://markbergedorf.github.io/bergedorf-gemeinsam/#tourismus).
- Live sichtbar: 112 Treffer, zehn Highlights, zwölf Themenzugänge und die 13 Kartenkategorien. Die 93 bisherigen Einträge blieben nachweislich erhalten.
- Alle zwölf Themenzugänge einzeln angeklickt. Jeder Klick hielt den Nutzer im Tourismusbereich und der jeweilige Themenabschnitt war erreichbar; in keinem Fall erschien „Ansicht nicht gefunden“.
- „Rundgänge und Routen ansehen“ angeklickt und den vorhandenen Routenabschnitt einschließlich „Route 1 – Traumhafte Rosentour“ erreicht.
- „Informationen und offizielle Besuchsseite“ angeklickt und die Karte der KZ-Gedenkstätte Neuengamme erreicht.

## Abnahmeurteil

Die Erweiterungen, Bestandsschutzprüfungen, Regressionstests, Produktionsbuild, Pages-Veröffentlichung und die genannten Live-Navigationsprüfungen sind abgeschlossen. **Die räumliche/geometrische Abnahme ist nicht vollständig:** Für die fünf EntdeckerRouten und mehrere großflächige Ziele fehlen verifizierte maschinenlesbare Linien- oder Flächengeometrien. Diese Grenze ist in der Oberfläche kenntlich; keine geschätzten Routen oder Gebietsflächen wurden als Geodaten veröffentlicht. Daher ist Ergänzungsauftrag 21.1 umgesetzt und veröffentlicht, aber die vollständige Karten-/Geografieabnahme bleibt für diese konkreten Geometrien offen.
