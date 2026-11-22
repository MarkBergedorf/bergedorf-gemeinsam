# Ergänzungsauftrag 21.3 – Abnahmebericht Geodaten, Dateneinträge und öffentliche Karte

**Prüfdatum:** 22. November 2026  
**Ergebnis:** Die vier GÖP-Routen sind einzeln auswählbar und öffentlich als getrennte Kartenlinien mit lesbaren, voneinander abgesetzten Beschriftungen sichtbar. Automatisierte Prüfung, Produktionsbuild und GitHub-Pages-Veröffentlichung von PR #35 sind erfolgreich dokumentiert. Keine amtliche Vermessung oder Vor-Ort-Prüfung behauptet.

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
- Historischer Zwischenstand nach PR #28: Pages-Lauf #64 (`44982697942`) war erfolgreich. Der erste öffentliche Livecheck zeigte 139 Einträge, vier Linien, vier Labels und Popups, erkannte jedoch überlappende Labels. Die Korrekturen aus PR #29 bis #35 und die abschließende Sichtprüfung sind unten nachgetragen.

## Abnahmebewertung

Die GÖP-Linien sind als getrennte, aus OSM-Wanderwegrelationen stammende und visuell mit den GÖP-Faltblättern abgeglichene Kartenlayer implementiert. Der erste Livecheck fand überlappende Labels; dieser historische Befund wurde mit PR #29 bis #35 bearbeitet. Die endgültige Prüfung nach PR #35 und die fachlichen Grenzen stehen im nachgetragenen Abschlussabschnitt.

## Veröffentlichungsnachweis

- PR #28: https://github.com/MarkBergedorf/bergedorf-gemeinsam/pull/28; zusammengeführt mit `ccac44814411e2cc83e0b07efd7a365f2ee696fd`.
- GitHub Pages #64, Lauf `44982697942`: erfolgreich.
- Öffentlicher Stand nach PR #28: 139 Treffer; vier Routeinträge, vier Linienlabels und GeoJSON verfügbar. Der Livecheck beanstandete Labelüberlappung im Bezirksüberblick. Dieser Befund wurde nach PR #35 erneut geprüft; siehe Abschlussabschnitt.

## Verwendete Quellen

- GÖP/Loki-Schmidt-Stiftung: die vier verlinkten Originalfaltblätter sowie [GÖP-Wegekonzept Boberger Niederung](https://goep.hamburg/naturschutz/boberger_niederung.php).
- BUKEA Hamburg: [Sperrung, Zugang und Sanierung Boberg](https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/boden-und-geologie/altlasten/untersuchungen-boberg/boberger-niederung-165636) und [Sanierungsstand 10.06.2026](https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/aktuelles/pressemeldungen/dioxinbelastung-in-der-boberger-niederung-sanierung-schreitet-im-zeitplan-voran-1184160).
- OpenStreetMap-Daten: Hamburger Extract mit Geofabrik-Zeitstand 21.11.2026, abgerufen für den lokalen Vergleich; Quelle attribuiert Geofabrik/© OpenStreetMap contributors, Lizenz ODbL. Keine daraus abgeleitete Route wurde veröffentlicht.


## Abschlussprüfung nach PR #35 – 22. November 2026

### Tatsächlicher GitHub- und Veröffentlichungsstand

Der aktuelle Hauptzweig `main` steht auf **`b7f51952cede950db5ecdd6cc492dc2db6688d41`**, dem Merge-Commit von PR #35. Die Pull Requests **#27 bis #35 sind zusammengeführt**. Die frühere Aussage, PR und abschließende Liveprüfung stünden noch aus, ist damit überholt.

| PR | Schwerpunkt | Merge-Commit |
|---:|---|---|
| #27 | Quellen, GÖP-Wegeeinträge und Geodatenstatus | `e84296e13e6e8d89fb8859990c6e5587009727d0` |
| #28 | Vier OSM-Routenlinien, Auswahl, Beschriftung und Popups | `ccac44814411e2cc83e0b07efd7a365f2ee696fd` |
| #29 | Erste Entzerrung und stabile Routenanker | `3e3e6086e7a7bd8aabb97bf70cec3250b83d58f4` |
| #30 | Zuverlässiges Rendern der Leaflet-Beschriftungen | `ce699c3af686c80315231007e9ed8b30649545dd` |
| #31 | Reparatur eines unvollständig übertragenen JavaScript-Bundles | `a559821093569489878486fc65e6167227a03497` |
| #32 | Neue gehashte Produktionsdateien gegen den fehlerhaften Cache-Stand | `07ec37be5606b866892085cd9c353d1d02368a70` |
| #33 | Routenspezifische Klassen und Abstände | `0d80a349eeff85e395bf47f211d97f8b06192289` |
| #34 | Separate innere Textelemente für die Routennamen | `b0363770caff05eee5c198aec0e11eef1b54db76` |
| #35 | Explizite Abstände der vier permanenten Leaflet-Tooltips; aktualisierter Regressionstest und synchronisierte Produktionsdateien | `b7f51952cede950db5ecdd6cc492dc2db6688d41` |

GitHub-Pages-Lauf **#92** (Run-ID `44986462648`) wurde für den aktuellen Merge-Commit am **22.11.2026 erfolgreich** abgeschlossen. Laut PR #35 bestanden `pnpm test` mit **391 Tests, 0 Fehlern** und `pnpm build`; die Produktionsdateien wurden mit **269 geprüften Dateien** im Pages-Root synchronisiert. Der PR nennt weiterhin die vorhandenen Leaflet-CSS-/CSS-Parse- und große-Bundle-Warnungen. Diese wurden durch PR #35 nicht behoben.

### Öffentliche Liveprüfung

Die veröffentlichte Tourismusseite wurde am 22.11.2026 in einer Desktop-Browseransicht geprüft. Die Karte wurde geladen und die Bezirksübersicht hergestellt.

- **Alle vier Routennamen waren gleichzeitig sichtbar und klar voneinander getrennt:** Schmetterling · Dünenweg, Vogel · Moorweg, Blume · Terrassenweg und Hase · Wiesenweg. Die farbigen Routenlinien waren sichtbar.
- **Einzelauswahl:** Der Wiesenweg wurde über seine Routen-Checkbox ausgeblendet. Seine Linie und Beschriftung verschwanden, während die Beschriftungen von Dünenweg, Moorweg und Terrassenweg sichtbar blieben. Anschließend wurde der Wiesenweg wieder eingeschaltet.
- **Routenbuttons und Popups:** Die Listenschaltflächen für Dünenweg, Moorweg, Terrassenweg und Wiesenweg öffneten jeweils ein Popup zum entsprechenden Weg. Die geprüften Popups zeigten Symbol und Namen, Flyer-Länge und digitale OSM-Länge sowie Links zur OSM-Relation, zum GÖP-Faltblatt und zum Listeneintrag.
- **Rückkehr:** Die Schaltfläche „Bezirk Bergedorf anzeigen“ stellte die Bezirksübersicht her.
- Die vier Datensätze und die Beschriftungen waren in der öffentlichen Seite vorhanden. Eine mobile Geräteansicht wurde bei dieser Prüfung nicht abgenommen.

### Bestand und Geodaten

Die öffentliche Tourismusseite zeigte weiterhin **139 Treffer**, **12 Themen** und **14 Kartenkategorien**. Die vier eigenständigen GÖP-Wege blieben als Dünenweg, Moorweg, Terrassenweg und Wiesenweg auswählbar.

Am aktuellen GitHub-Stand enthält `frontend/public/assets/bodenlehrpfad-boberg.geojson` weiterhin **13 BUKEA-Features**: **3 Linien-Features** und **10 Punkt-Features** für die Tafeln. Die Datei im Pages-Root `assets/bodenlehrpfad-boberg.geojson` stimmt inhaltlich exakt mit der Frontend-Datei überein. Die separate GÖP-Datei enthält weiterhin genau die vier benannten Routen. Die amtlichen Bodenlehrpfad-Linien und Informationstafeln bleiben somit getrennt von den GÖP-Linien.

Die bereits dokumentierten Mess- und Quellenhinweise bleiben maßgeblich: OSM-Routen sind keine amtliche Vermessung und wurden nicht vor Ort abgegangen. Beim Moorweg ist die aktuelle Umleitung samt Zugangssperrungen anhand BUKEA-Hinweisen und örtlicher Beschilderung zu beachten; eine Vor-Ort-Prüfung erfolgte hier nicht. Beim Wiesenweg stehen 4,314 km digitaler Linienlänge der Flyerangabe 4,6 km gegenüber; beide Werte bleiben getrennt ausgewiesen.

### Abschlussbewertung

Die nach PR #35 veröffentlichte Beschriftungskorrektur besteht die Desktop-Liveprüfung: Die vier Routennamen sind in der Bezirksübersicht lesbar und voneinander getrennt. Linien, Einzelauswahl, Routen-Popups und Rückkehr zur Bezirksübersicht wurden geprüft. Der Bestand mit 139 Tourismuseinträgen, zwölf Themen, 14 Kartenkategorien sowie den drei BUKEA-Linien und zehn Tafelpunkten ist am aktuellen Stand erhalten.

**Ergänzungsauftrag 21.3 ist hinsichtlich der umgesetzten, automatisiert geprüften und im Desktop-Livebetrieb sichtbaren Funktionen abgenommen.** Eine mobile Geräteprüfung, amtliche Vermessung und Vor-Ort-Prüfung der aktuellen Moorwegführung sind nicht erfolgt und werden nicht als bestanden gewertet. Die bekannte Wiesenweg-Längendifferenz bleibt dokumentiert.
