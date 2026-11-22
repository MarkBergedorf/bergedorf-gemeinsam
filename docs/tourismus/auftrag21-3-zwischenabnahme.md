# Ergänzungsauftrag 21.3 – Zwischenabnahme Geodaten und Dateneinträge

**Prüfdatum:** 22. November 2026  
**Ergebnis:** Teilweise umgesetzt; keine vollständige Kartenabnahme.

## Ausgangsstand

- Repository: `MarkBergedorf/bergedorf-gemeinsam`
- geprüfter `main`-Stand vor Änderungen: `fc3956bb89933e58a76e40a0da5c70b10c0d51cc`
- Arbeitszweig: `feature/auftrag21-3-boberg-nature-trails`
- touristische Datensätze vor Ergänzung: 135; nach Ergänzung: 139 (vier neue, einzeln durchsuchbare GÖP-Wege)
- 12 Tourismusthemen und 14 Haupt-Kartenkategorien bleiben bestehen.
- Die 93 ursprünglichen Tourismuseinträge und die 112er-Baseline aus Auftrag 21.2 wurden durch die Tests auf unveränderte Namen, Beschreibungen, Kategorien und Hauptquellen geprüft.

## Quellenprüfung

Alle vier im Auftrag genannten Original-PDFs wurden direkt von der Loki-Schmidt-Stiftung abgerufen (HTTP 200), als zweiseitige Faltblätter ausgewertet und jeweils auf Seite 2 visuell geprüft. Erfasste Angaben:

| GÖP-Weg | Farbe/Symbol | Länge und Zeit | dokumentierte Orientierungspunkte |
|---|---|---|---|
| Dünenweg | Orange / Schmetterling | 3,6 km / ca. 1,5 h | Haarweide, Haarteich, Schlapshof, Im Pus, Hans-Ulrich-Höller-Weg, Walter-Hammer-Weg, Boberger Furt, Düne und Segelflugplatz |
| Moorweg | Gelb / Vogel | 2,7 km / ca. 1 h | Achtermoor, Kleiner und Großer Moorteich, Schürmoor, Weidenmoor, Unterberg, Segelflugplatz; die Karte kennzeichnet eine Umleitung |
| Terrassenweg | Pink / Blume | 3,3 km / ca. 1,5 h | Groten Heesen, Walter-Hammer-Weg, Ladenbek, Teich und Geesthang |
| Wiesenweg | Blau / Hase | 4,6 km / ca. 2 h | Billwerder Kirchenbrücke, Billwerder Kirchenstieg, Boberger See, Hundsberg, Hans-Ulrich-Höller-Weg und Bille |

Die Werte, Farben und Namen wurden in vier eigene Datensätze übertragen. Es wurden keine geschützten Fotos oder Originalgrafiken übernommen. Die Symbole stehen als Textangaben in den Datensätzen. Die vier Originalfaltblätter und die GÖP-Seite sind verlinkt.

## Moorweg: aktuelle Einschränkung

Das GÖP-Faltblatt zeigt ausdrücklich eine nördliche Umleitung im Bereich Unterberg. Die aktuell abrufbare BUKEA-Seite bestätigt, dass die Sanierung weiterläuft, der Zugang am Parkplatz Unterberg gesperrt ist, der Zugang über den Parkplatz Walter-Hammer-Weg möglich ist und der Fußweg an den Bahngleisen benutzt werden soll. Die Pressemitteilung der BUKEA vom 10. Juni 2026 nennt ein voraussichtliches Ende der Sanierung Ende 2027.

Die behördlichen Zugangsangaben und die gelbe Umleitung im Faltblatt sind damit beide dokumentiert. Ein koordinatengenauer Abgleich, ob jeder auf dem Flyer gezeichnete Umleitungsabschnitt aktuell der behördlich freigegebenen Führung entspricht, wurde nicht abgeschlossen. Die Weglänge von 2,7 km wird deshalb als Flyerangabe wiedergegeben; sie wird nicht als bestätigte Länge der aktuellen Umleitung ausgegeben.

## Trennung vom Bodenlehrpfad

`frontend/public/assets/bodenlehrpfad-boberg.geojson` enthält weiterhin unverändert 13 BUKEA-Features: drei Linien mit zusammen 491 Koordinatenstützpunkten und zehn Tafelpunkte. Die geodätisch berechneten Linienlängen sind:

| amtliches BUKEA-Feature | Länge |
|---|---:|
| Moorweg | 2.694 m |
| Terrassenweg | 3.248 m |
| Dünenweg | 3.507 m |

Diese Werte liegen nahe an den GÖP-Flyerangaben. Das ist allein kein Nachweis, dass die Bodenlehrpfad- und GÖP-Linien dieselben Abzweigungen, Einstiege oder den aktuellen Umleitungsverlauf haben. Der fachliche Identitätsabgleich wurde nicht ausreichend belegt. Darum werden die BUKEA-Linien weiter nur als Bodenlehrpfad angezeigt und nicht in GÖP-Wege umbenannt.

## Geografische Linien – offen

Für den Routenabgleich wurde ein aktueller Hamburger OSM-Extract von Geofabrik heruntergeladen und die darin enthaltenen Fußwege und Pfade im Gebiet Boberg untersucht. Eine begrenzte Overpass-Abfrage lief in Zeitüberschreitungen beziehungsweise lieferte HTTP 502/503. Der Extract liefert das örtliche Wegenetz, aber keinen geprüften Nachweis, welche zusammenhängenden OSM-Wegeabschnitte genau die vier eingezeichneten GÖP-Routen bilden. Die in einem kommerziellen Routenportal sichtbare Wiesenweg-Aufzeichnung ist keine für diesen Zweck belegte offene Geodatenquelle und wurde nicht übernommen.

Die Flyer enthalten keine maschinenlesbare Route und keine Koordinatenkontrollpunkte. In dieser Prüfung wurde keine belastbare Georeferenzierung mit Kontrollpunkten und anschließendem Abgleich jeder Abzweigung hergestellt. Daher wurden keine aus Kartenpixeln abgeleiteten oder geschätzten GÖP-Linien veröffentlicht. Für **alle vier** Wege bleiben offen:

- koordinatengenaue Geometrie, Wegabschnitte und Brückenabgleich;
- digital berechnete GÖP-Streckenlänge;
- vollständige Streckenführung und Einstiegspunkte;
- direkte Beschriftung entlang der Linie, Strecken-Popups, „gesamte Route anzeigen“ und unabhängige Auswahl auf der Livekarte;
- mobile Kartenansicht mit den neuen Routen.

Die touristische Karte weist ausdrücklich darauf hin, dass die vier GÖP-Routen noch nicht als Linien dargestellt werden. Die vier Einträge sind in der Ortsliste suchbar und verlinken die Originalfaltblätter. Es wird keine präzise Begehbarkeit suggeriert.

## Umgesetzte Dateien

- `frontend/lib/tourism-data.mjs`: vier zusätzliche GÖP-Datensätze mit Quelle, Suchbegriffen, Länge, Dauer, Symbol, Farbe, Status und Schutzgebietshinweisen. Der bestehende Eintrag „Vier markierte Wege durch die Boberger Niederung“ behält Namen, Beschreibung und Hauptquelle bytegenau bei; die GÖP-Angaben werden ergänzend eingeblendet.
- `frontend/app/tourism.tsx`: Kartenhinweis und Links zu allen vier Originalfaltblättern; ausdrückliche Trennung von den nicht gleichgesetzten BUKEA-Bodenlehrpfad-Linien; Statushinweis an den vier Karteneinträgen.
- `frontend/tests/tourism.test.mjs`: Regressionstest für vier Datensätze, Fakten/Quellen, die offene Geometrie, Moorwegwarnung und das Verbot erfundener Punktkoordinaten.

Es wurden keine bestehenden Einträge, Bilder, Bodenlehrpfadlinien, Tafelpunkte oder Kartenkategorien entfernt. Der temporär geladene OSM-Extract wurde nicht in das Repository übernommen.

## Prüfungen

- Vollständige Testsuite `pnpm test`: **390 bestanden, 0 fehlgeschlagen**.
- Produktionsbuild `pnpm build`: **erfolgreich**; Dist-Verifikation erfolgreich und vollständige Synchronisierung in den Pages-Root durch das Repo-Skript.
- Bestehende Buildwarnungen bleiben: `/bergedorf-gemeinsam/assets/leaflet.css` wurde zur Laufzeitauflösung belassen; zwei JavaScript-Chunks liegen über 500 kB (Leaflet/History-Tiles 558,63 kB und Hauptbundle 2.841,65 kB). In diesem Auftrag wurde keine Laufzeit- oder mobile Leistungsanalyse durchgeführt und keine Buildwarnung verändert.
- Der Produktionsbuild beweist nicht die visuelle Kartenabnahme.

## Abnahmebewertung

Die Quellengrundlage wurde gelesen, die veröffentlichten GÖP-Metadaten sind erfasst, vier eigenständige Tourismuseinträge sind ergänzt, die Bestandsschutztests bestehen und die BUKEA-Bodenlehrpfad-Daten bleiben getrennt erhalten. **Ergänzungsauftrag 21.3 ist nicht vollständig abgenommen.** Seine zentralen geografischen Linien- und Livekartenanforderungen bleiben offen, einschließlich der koordinatengenauen Moorweg-Umleitung. Die offene Arbeit ist keine bestandene Kartenprüfung.

## Verwendete Quellen

- GÖP/Loki-Schmidt-Stiftung: die vier verlinkten Originalfaltblätter sowie [GÖP-Wegekonzept Boberger Niederung](https://goep.hamburg/naturschutz/boberger_niederung.php).
- BUKEA Hamburg: [Sperrung, Zugang und Sanierung Boberg](https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/boden-und-geologie/altlasten/untersuchungen-boberg/boberger-niederung-165636) und [Sanierungsstand 10.06.2026](https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/aktuelles/pressemeldungen/dioxinbelastung-in-der-boberger-niederung-sanierung-schreitet-im-zeitplan-voran-1184160).
- OpenStreetMap-Daten: Hamburger Extract mit Geofabrik-Zeitstand 21.11.2026, abgerufen für den lokalen Vergleich; Quelle attribuiert Geofabrik/© OpenStreetMap contributors, Lizenz ODbL. Keine daraus abgeleitete Route wurde veröffentlicht.
