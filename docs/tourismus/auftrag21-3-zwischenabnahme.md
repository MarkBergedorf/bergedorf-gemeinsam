# Ergänzungsauftrag 21.3 – Zwischenabnahme Geodaten und Dateneinträge

**Prüfdatum:** 22. November 2026  
**Ergebnis:** Vier GÖP-Routen sind als einzeln auswählbare Kartenlinien umgesetzt; Live-Abnahme folgt nach Veröffentlichung. Keine amtliche Vermessung oder Vor-Ort-Prüfung behauptet.

## Ausgangsstand

- Repository: `MarkBergedorf/bergedorf-gemeinsam`
- vorheriger Abnahme-Stand: `fc3956bb89933e58a76e40a0da5c70b10c0d51cc`; der vorausgehende Karten-/Metadaten-Support wurde mit PR #27 in `main` übernommen (Merge-Commit `e84296e13e6e8d89fb8859990c6e5587009727d0`).
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

## Geografische Linien – umgesetzt mit klar begrenztem Nachweis

Die vier Linien stammen aus den vollständigen OpenStreetMap-Wanderweg-Relationen für die GÖP-Routen. Die Relationen nennen den Naturschutzverband GÖP als Betreiber und wurden am 22.11.2026 direkt über die OSM-API abgerufen. Ihre Wegegeometrien wurden mit den farbigen Routen auf Seite 2 der jeweiligen GÖP-Originalfaltblätter visuell verglichen. Drei Verläufe liegen im Bildabgleich sehr eng an der Flyerlinie; beim Moorweg ist im nördlichen Korridor eine kleine Abweichung sichtbar. Das ist ein visueller Kartenvergleich, keine amtliche Koordinatenvermessung, kein Nachweis jedes Wegbelags und keine Begehung.

| Route | OSM-Relation / Version / letzter Änderungsstand | digitale Linienlänge | GÖP-Flyer | Ergebnis / Vorbehalt |
|---|---|---:|---:|---|
| Dünenweg | 120910 / 5 / 03.07.2010 | 3.502 m | 3,6 km | Verlauf visuell passend; keine amtliche Vermessung |
| Moorweg | 120253 / 19 / 14.07.2025 | 2.684 m | 2,7 km | Verlauf visuell verglichen; kleine Abweichung im nördlichen Korridor; aktuelle Umleitung/Zugänge vor Ort nicht verifiziert |
| Terrassenweg | 140415 / 11 / 27.06.2025 | 3.269 m | 3,3 km | Verlauf visuell passend; OSM-Name enthält Schreibfehler „Terassenweg“, öffentliche Bezeichnung folgt dem GÖP-Flyer |
| Wiesenweg | 120861 / 8 / 31.10.2023 | 4.314 m | 4,6 km | Verlauf visuell passend; 286 m Differenz zu Flyerangabe, beide Werte bleiben getrennt ausgewiesen |

Die Kilometerangaben aus dem GÖP-Flyer und die aus der digitalen Relation berechneten Linienlängen sind unterschiedliche Messstände und werden nicht gleichgesetzt. Das Projekt verwendet OSM-Geometrie unter ODbL 1.0 und weist OpenStreetMap-Mitwirkende als Quelle aus. Die bestehenden drei BUKEA-Linien und zehn Tafelpunkte bleiben getrennt und unverändert in `bodenlehrpfad-boberg.geojson` erhalten.

## Kartenfunktionen und Bedienablauf

Die vier Wege sind als eigene GeoJSON-MultiLineString-Features in `frontend/public/assets/goep-naturwege-boberg.geojson` eingebunden. Auf der Karte haben sie die Flyerfarbe, eine dauerhafte Symbol-/Namensbeschriftung und ein Popup mit Flyerwert, digitaler Linienlänge, Quelle, Originalfaltblatt und Rücksprung zum Listeneintrag. Jeder Weg kann unabhängig ein- und ausgeblendet werden; zusätzlich wird die bestehende Themenkategorie „Themenwege und Lehrpfade“ berücksichtigt. Die Routeneinträge bieten „Weg auf der Karte zeigen“ und führen den Kartenausschnitt an die Linie.

Die bestehenden 135 touristischen Datensätze sowie die bisherigen Quellen, Beschreibungen, Kategorien, BUKEA-Geometrien, Kategorien und Tafelpunkte werden nicht ersetzt. Die Regressionstests prüfen weiterhin die ursprünglichen Baselines und zusätzlich vier neue Routenfeatures. Die vorherige Aussage, die Routen würden noch nicht als Linien angezeigt, ist damit überholt.

## Moorweg: aktuelle Einschränkung

Das GÖP-Faltblatt zeigt ausdrücklich eine nördliche Umleitung im Bereich Unterberg. Die aktuell abrufbare BUKEA-Seite bestätigt, dass die Sanierung weiterläuft, der Zugang am Parkplatz Unterberg gesperrt ist, der Zugang über den Parkplatz Walter-Hammer-Weg möglich ist und der Fußweg an den Bahngleisen benutzt werden soll. Die Pressemitteilung der BUKEA vom 10. Juni 2026 nennt ein voraussichtliches Ende der Sanierung Ende 2027.

Der live angezeigte Routenlayer weist auf Flyerumleitung und BUKEA-Zugangshinweis hin. Die aktuelle reale Beschilderung und der genaue Übereinstimmungsgrad jedes Moorwegabschnitts mit der gegenwärtig freigegebenen Führung wurden nicht vor Ort kontrolliert. Daher darf die 2,7-km-Flyerangabe nicht als vor Ort bestätigte Länge der aktuellen Umleitung verstanden werden.

## Umgesetzte Dateien

- `frontend/public/assets/goep-naturwege-boberg.geojson`: vier vollständige OSM-Routenrelationen mit Geometrie, Routenfarben/-symbolen, OSM-Metadaten, Lizenzattribution, Flyerwerten und getrennten digitalen Linienlängen.
- `frontend/app/tourism.tsx`: Laden und Zeichnen der Routen, unabhängige Auswahl, Labels, sichere DOM-Popups, Fit-to-route und Listenverknüpfung; BUKEA-Layer separat belassen.
- `frontend/app/globals.css`: Darstellung der Routenauswahl und Labels.
- `frontend/lib/tourism-data.mjs`: vier Datensätze um Relation, Quellen, Längenabweichung und Prüfgrenzen ergänzt.
- `frontend/tests/tourism.test.mjs`: Regressionen für Geometrie, Lizenz/Attribution, Relationen, Labels, Popups, Ein-/Auswahl, Kartenausschnitt und Bestandsschutz.
- `index.html`, `404.html`, `assets/` und Pages-Root-GeoJSON: mit dem Produktionsbuild synchronisierte GitHub-Pages-Dateien; HTML verweist auf die aktuellen gehashten Bundles.

## Prüfungen

- `pnpm test`: **391 bestanden, 0 fehlgeschlagen**.
- `pnpm build`: **erfolgreich** (2.339 Module); Dist-Verifikation und Pages-Root-Synchronisierung erfolgreich. 269 Builddateien im Pages-Root; HTML verweist auf aktuelle Bundles; Noindex bleibt gesetzt.
- `git diff --check`: **erfolgreich**.
- Buildwarnungen bestehen weiter: Laufzeitpfad für `leaflet.css` sowie große JavaScript-Chunks (`history-tiles` ca. 558,63 kB, Hauptbundle ca. 2.846,01 kB). In diesem Auftrag wurde keine Performanceoptimierung vorgenommen.
- Geometrie-Overlay auf den vier Originalflyer-Karten wurde lokal geprüft. Das ist ein visueller Quellenabgleich, keine geodätische Feldabnahme.
- Pages-Lauf #64 (`44982697942`) für PR #28 war erfolgreich. Der erste öffentliche Livecheck zeigte die neue Seite mit 139 Einträgen, allen vier Linien, vier Labels und Karten-Popups. Dabei wurden die Labels im Bezirksüberblick als überlappend erkannt. Diese konkrete Live-Abweichung wurde nicht als bestanden gewertet: Labelanker auf Linienknoten ergänzt, Test ergänzt und Produktionsbuild erneut erstellt; die veröffentlichte Regression dieses Fixes steht noch aus.

## Abnahmebewertung

Die GÖP-Linien sind nun als einzelne, aus Operator-Wanderwegrelationen bezogene und mit den Flyern visuell abgeglichene Kartenlayer implementiert. Die Daten-/UI-Regressionen bestehen. Die Basisfunktionen und Linien waren öffentlich sichtbar; der erste Livecheck fand jedoch die überlappenden Labels und löste daher eine Korrektur aus. Die vollständige Abnahme bleibt bis zum erneuten öffentlichen Check dieser Korrektur offen. Auch danach bleiben die ausdrücklich bezeichneten Grenzen offen: keine amtliche Vermessung oder Begehung, die aktuelle Moorwegführung vor Ort nicht geprüft, sowie die ausgewiesene Längendifferenz des Wiesenwegs.

## Veröffentlichungsnachweis

- PR #28: https://github.com/MarkBergedorf/bergedorf-gemeinsam/pull/28; zusammengeführt mit `ccac44814411e2cc83e0b07efd7a365f2ee696fd`.
- GitHub Pages #64, Lauf `44982697942`: erfolgreich.
- Öffentlicher Stand #28: 139 Treffer; vier Routeinträge, vier Linienlabels und GeoJSON verfügbar. Der Livecheck beanstandete sichtbare Labelüberlappung im Bezirksüberblick.
- Der Labelanker-Fix und sein Regressionstest sind gebaut. PR und Liveprüfung für diese Nachbesserung werden nachgetragen.

## Verwendete Quellen

- GÖP/Loki-Schmidt-Stiftung: die vier verlinkten Originalfaltblätter sowie [GÖP-Wegekonzept Boberger Niederung](https://goep.hamburg/naturschutz/boberger_niederung.php).
- BUKEA Hamburg: [Sperrung, Zugang und Sanierung Boberg](https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/boden-und-geologie/altlasten/untersuchungen-boberg/boberger-niederung-165636) und [Sanierungsstand 10.06.2026](https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/aktuelles/pressemeldungen/dioxinbelastung-in-der-boberger-niederung-sanierung-schreitet-im-zeitplan-voran-1184160).
- OpenStreetMap-Daten: Hamburger Extract mit Geofabrik-Zeitstand 21.11.2026, abgerufen für den lokalen Vergleich; Quelle attribuiert Geofabrik/© OpenStreetMap contributors, Lizenz ODbL. Keine daraus abgeleitete Route wurde veröffentlicht.
