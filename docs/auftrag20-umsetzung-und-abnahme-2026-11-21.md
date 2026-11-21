# Arbeitsauftrag 20 – Umsetzung und Abnahme

Prüfstand: 21. November 2026. Dieses Dokument bezieht sich ausschließlich auf die Karte **„Geschichte und Erinnerungen“**.

## Umgesetzt

- Die Geschichtskarte erhält eine eigene Erweiterung des vorhandenen OpenFreeMap-/OpenMapTiles-Stils. Zusätzliche benannte OSM-Klassen für Spielplätze, Sport, Bildung, Gemeinschaft, Gastronomie, Badeorte, Denkmäler und weitere Orientierungspunkte werden ab hoher Vergrößerung berücksichtigt. Die Änderung wird nur beim Renderer der Geschichtskarte aktiviert; Organisationskarte und Standortvorschau verwenden weiterhin die bisherige Stil-Positivliste.
- Ein lokaler, statisch eingebundener Auszug des Hamburger Digitalen Grünplans deckt 364 überprüft innerhalb der Bezirksgrenze liegende Datensätze mit Eigentum `FHH` oder `BWVI - HNG` ab: 72 Spielplätze, 17 Sportplätze, 71 Parkanlagen, 180 weitere Grün- und Schutzflächen sowie 24 Wanderwege. Die 369 vom Datensatz für Bezirk 6 gelieferten Objekte wurden einzeln räumlich geprüft. Vier privat ausgewiesene Datensätze wurden nicht übernommen. Ein weiterer Datensatz (`006536`, „Grunewaldstraße - Lehmkoppel“) liegt laut Koordinaten außerhalb der Bergedorfer Bezirksgrenze und wurde ausgeschlossen.
- Die Kategorien Spielplätze, Sportplätze, Parkanlagen, weitere Grünflächen und Wanderwege können oberhalb der Karte einzeln ein- und ausgeblendet werden. Marker werden nach Bildschirmabstand gruppiert. Popups enthalten die Bezeichnung, Kategorie, Bezirkseinordnung, Datenstatus und den Herkunftslink. Grünplan-Punkte zeigen berechnete Punkte innerhalb der jeweiligen Flächen beziehungsweise Linien, keine Eingänge. Die Karte behauptet keine jederzeitige Zugänglichkeit.
- Am Pool/Glaeßweg sind Fußballplatz und Spielplatz als zwei getrennte Zusatzpunkte vorhanden. Grundlage sind die OSM-Polygone [Way 274149714](https://www.openstreetmap.org/way/274149714) (`leisure=pitch`, `sport=soccer`) und [Way 393033532](https://www.openstreetmap.org/way/393033532) (`leisure=playground`). Die je Polygon berechneten Schwerpunkte liegen bei ca. 53.48607° N, 10.21116° E und 53.48600° N, 10.21148° E. Der Spielplatzname „Am Pool 15a“ folgt der vom Auftraggeber beschriebenen Ortszuordnung; der OSM-Datensatz selbst enthält nur den Typ, keinen Namen. Die getrennten Flächen, nicht Google-Kartengrafiken, sind die Geometriegrundlage.
- Das vorhandene historische Verzeichnis mit 104 Datensätzen wird direkt von der Geschichtskarte verlinkt. Die Quelldatei weist bei allen 104 Einträgen `coordinates: null` aus. Es werden deshalb keine historischen Treffpunktkoordinaten erfunden oder ungeprüft aus heutigen Adressen abgeleitet. Vorhandene, freigegebene Beitragsmarkierungen und deren Links bleiben zusätzlich erhalten.
- Die Marker für freigegebene Geschichten, die Bezirksgrenze, das KörberHaus und vorhandene Zoom-/Entladefunktionen bleiben erhalten. Der Quelltext der anderen Karten aktiviert die neuen POI-Klassen nicht.

## Datenabgleich und Grenzen

- Quelle für Grünflächen: [Hamburger Digitaler Grünplan – Verzeichnis öffentlicher Grünanlagen](https://api.hamburg.de/datasets/v1/gruenplan/collections/verzeichnis_oeffentlicher_gruenanlagen/items?f=json), Abfrage `bezirk = '6'`, Abruf 21.11.2026. Lizenz: Datenlizenz Deutschland Namensnennung 2.0. Die Rohantwort enthielt 369 Treffer; die Karte übernimmt nur FHH-/BWVI-HNG-Eigentum und im Bezirk liegende Geometriepunkte.
- Die räumliche Prüfung verwendete die vorhandenen 14 LGV-Stadtteilpolygone. Bei sieben Grünplanobjekten stimmen das im Grünplan geführte Stadtteil und das Stadtteilpolygon am berechneten Flächenpunkt nicht überein. Das Popup zeigt deshalb sowohl den Grünplan-Stadtteil als auch – bei Abweichung – den Stadtteil des dargestellten Flächenpunkts; die sieben Fälle sind im GeoJSON-Metadatensatz dokumentiert.
- Im verwendeten Grünplan-Abzug gibt es nach der veröffentlichten Stadtteilangabe keine Objekte für Spadenland. Das ist eine Datenlücke dieses Datensatzes, kein Beleg für das Fehlen von Einrichtungen. Die OSM-Kartengrundlage kann dort weiterhin benannte POIs darstellen.
- Die neuen POI-Bezeichnungen von Schule, Kita, Bibliothek, Gemeinschaft, Gastronomie usw. stammen aus dem vorhandenen OpenMapTiles-Vektorkartensatz. Der Auftrag führt keine vollständige amtliche Inventur dieser Klassen durch; ihr Umfang hängt vom OSM-Datenstand, der Erfassung und Zoomstufe ab. Sie sind nicht Teil der fünf Hamburger Grünplan-Filter.
- OSM-Daten werden unter ODbL mit den bestehenden Kartenattributionen verwendet. Die zusätzlichen GeoJSON-Punkte sind lokal im Seitenpaket enthalten; sie erzeugen keinen eigenen externen Kartenabruf. Kartenkacheln und POI-Labels werden weiterhin erst nach der vorhandenen Freigabe geladen.
- Die OSM-/OpenFreeMap-Stiländerung erweitert nur benannte POI-Beschriftungen und verwendet die vorhandene Kollisionsvermeidung. Sie macht keine historische Nutzung oder den aktuellen Bestand einer ehemaligen Gaststätte geltend.

## Prüfungen

- **Automatisierte Tests:** `pnpm test` – 374 bestanden, 0 fehlgeschlagen. Neue Prüfungen validieren Kartenstil-Scope, Datensatzanzahl und Kategorien, die zwei OSM-Flächen, Clustererhalt, Verweis auf das historische Verzeichnis und Laden der lokalen Ortsdaten erst nach Kartenfreigabe.
- **Produktionsbuild:** `pnpm build` – erfolgreich. Dist-Prüfung meldete 267 Dateien, Basispfad `/bergedorf-gemeinsam/`, `noindex` aktiv, kein Live-Datenbankzugriff und keine Live-Datensätze. Der Build meldet weiterhin die vorhandene Warnung zu `assets/leaflet.css` sowie große JavaScript-Chunks (558,61 kB und 2.732,22 kB minifiziert). Es wurde kein neues Backend oder Tracking ergänzt.
- **Praktischer OSM-Quellenabgleich:** Die OSM-Karte und API-Geometrien der zwei Flächen am Glaeßweg wurden abgefragt. Auf der OSM-Karte waren die Fußball- und Spielplatzfläche getrennt zu erkennen; beide API-Wege haben die getrennten Freizeit-Tags.
- **Praktische Bedienung der veröffentlichten Karte:** noch offen, bis der PR zusammengeführt und ein Pages-Lauf erfolgreich ist. Insbesondere Schalter, Cluster-Popups, Bildschirmbreiten und tatsächliche öffentliche Auslieferung müssen anschließend live kontrolliert werden; automatisierte Tests ersetzen diese Abnahme nicht.

## Geänderte Dateien

- `frontend/app/history-map.tsx`
- `frontend/app/history-map-legend.tsx`
- `frontend/app/globals.css`
- `frontend/lib/history-tiles.mjs`
- `frontend/lib/map-orientation.mjs`
- `frontend/public/assets/history-infrastructure.geojson`
- `frontend/tests/history-infrastructure.test.mjs`
- `frontend/tests/fixtures/map-orientation-authorized-changes.json`
- `docs/auftrag20-umsetzung-und-abnahme-2026-11-21.md`
- die durch den Produktionsbuild erzeugten Dateien im GitHub-Pages-Root (`index.html`, `404.html`, `assets/*`)

## Veröffentlichungsstatus

PR, Merge-Commit, GitHub-Pages-Lauf und öffentliche Live-Abnahme werden nach dem Review ergänzt. Bis dahin ist Arbeitsauftrag 20 nicht als veröffentlicht oder vollständig live abgenommen zu bewerten.
