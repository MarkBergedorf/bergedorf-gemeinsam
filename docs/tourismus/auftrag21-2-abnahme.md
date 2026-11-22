# Ergänzungsauftrag 21.2 – Umsetzungs- und Abnahmebericht

**Arbeitsstand:** 22.11.2026  
**Repository:** `MarkBergedorf/bergedorf-gemeinsam`  
**Basis:** `main` vor der Umsetzung: `ad8732c` (PR #24; Veröffentlichung 21.1)  
**Öffentliche Tourismusseite:** <https://markbergedorf.github.io/bergedorf-gemeinsam/#tourismus>

> Dieser Bericht enthält den geprüften lokalen Umsetzungsstand. Pull Request, Zusammenführung, Pages-Lauf und öffentliche Live-Abnahme werden erst nach diesen Schritten mit den tatsächlich ermittelten Kennungen ergänzt. Bis dahin gelten sie ausdrücklich als offen.

## 1. Bestandsschutz und Zahlen

- Vor Ergänzungsauftrag 21.2 veröffentlichte Tourismuseinträge: **112**.
- Neue Einträge in 21.2: **23**, im aktuellen Stand insgesamt **135**.
- Bestehende Einträge wurden in einem Baseline-Test für alle 112 IDs auf Name, Themenkategorie, vollständige Beschreibung und Hauptquellen-URL verglichen. Alle Felder stimmen überein.
- Die gesonderte Ausgangsprüfung der ursprünglichen 93 Datensätze bleibt erhalten.
- Die **12 Themenbereiche** bleiben unverändert.
- Die bisherigen **13 Kartenkategorien** bleiben erhalten; „Themenwege und Lehrpfade“ ist als 14. Filter hinzugekommen.
- Die zehn bisherigen Highlights, fünf bestehenden EntdeckerRouten, Such- und Themenfilter sowie die Funktionen der übrigen Kartentypen bleiben erhalten.

## 2. Ergänzte und geprüfte Einträge

Die 23 neuen Einträge sind in die bestehenden Themenbereiche aufgenommen; Besuchs-, Buchungs- und Saisonangaben bleiben auf den tatsächlich belegten Stand begrenzt.

| Themenbereich | Neue Einträge | Einordnung |
| --- | --- | --- |
| Sehenswürdigkeiten und Geschichte | Deutsches Maler- und Lackierer-Museum; Reitbrooker Mühle; Kultur- & Geschichtskontor | Beim Museum sind Glockenhaus, Sammlung und Betreiber-Besuchsangaben verlinkt. Die Reitbrooker Mühle ist als gewerblicher Standort gekennzeichnet, nicht als öffentliches Museum. Das Geschichtskontor verweist auf Ausstellungen, Rundgänge und die Serrahn-Audiotour. |
| Kultur und Veranstaltungen | Künstlerhaus Hamburg-Bergedorf; White Cube Bergedorf; Hansa-Filmstudio | Offizielle Ausstellungs-, Programm-, Kontakt- oder Kinoseiten sind verlinkt. Vergangene Termine werden nicht als kommende Veranstaltungen ausgegeben. |
| Familie, Sport und aktive Freizeit | SwinGolf/Fußballgolf Hamburg; Golf Lounge Resort Moorfleet; Minigolf Grünes Zentrum Lohbrügge; Drachenlabyrinth „Hammonia“; Boberger Reitverein; Erlebnisbauernhof Burmester | Betreiber- oder Behördenangaben sind mit Öffnungs-, Buchungs- und Zugangsvorbehalten dargestellt. Die SwinGolf-Seite nennt Saisonende 2026 und Saisonstart 03.04.2027. Burmester ist ausdrücklich kein öffentlicher Zoo; Tagesbesuche ohne Buchung sind laut Betreiber ausgeschlossen. Vereinsunterricht ist nicht als spontane touristische Gaststunde ausgewiesen. |
| Regionale Landwirtschaft und Vernetzung | Milchhof Reitbrook; Ackerperlen; Biohof Sommerfeld; Vier- und Marschlande Querbeet | Der Milchhof ist nicht als öffentlich besichtigbarer Hof oder Hofladen ausgegeben. Ackerperlen nennt den monatlichen Offenen Garten April bis Oktober; die aktuelle Terminansicht hatte keine bevorstehenden Einträge. Der Biohof Sommerfeld bestätigt keinen Hofladen und nennt Marktverkauf in Ottensen, außerhalb Bergedorfs. Querbeet wird als Netzwerk ohne fiktiven Einzelstandort dargestellt. |
| Wasser, Infrastruktur und Natur | Tatenberger Schleuse; Schöpfwerke der Vier- und Marschlande; Naturschutzgebiet Kiebitzbrack | Die Schleuse und Schöpfwerke sind als Infrastruktur, nicht als frei zugängliche Betriebsanlagen gekennzeichnet. Kiebitzbrack ist als Schutzgebiet mit Wegegebot beschrieben; eine Gebietspolygon-Geometrie wurde nicht ergänzt. |
| Routen | Bodenlehrpfad Boberg; Große Bergedorfer Runde – „Bis zu den Sternen“ | Der Bodenlehrpfad ist mit amtlicher Linie und Tafelpunkten auf der Karte. Die Große Runde ist mit 7 km und den 13 offiziellen Stationen beschrieben. Mangels verifizierter GPX-/GeoJSON-Linie wird hierfür keine Route gezeichnet. Der vorhandene 3-km-Bergedorfer Spaziergang bleibt separat und sein offizieller GPX-Download ist verlinkt. |
| Wiederkehrende Veranstaltungen | Vierländer Volks- und Schützenfest; Vierländer Erdbeerfest am Rieck Haus | Veranstalter- beziehungsweise Behördenquellen sind verlinkt. Der Termin des Erdbeerfests 20./21.06.2026 ist als vergangen markiert; für 2027 wird kein unbestätigtes Datum behauptet. |

### Bestehende Einträge ergänzt

- **HIAMO Hotel:** Der Auftragstext gibt einen Bett+Bike-PDF-Ausdruck mit Stand 22.11.2026 wieder. Die daraus übermittelten Angaben – Plattformlistung, Fahrrad- und E-Bike-Verleih, Werkstattkooperation, Lunchpakete und kostenfreies WLAN – sind beim vorhandenen HIAMO-Datensatz ergänzt. Ein aktueller Zertifizierungszeitraum wird nicht behauptet. Die verlinkte Originalseite ist die Bett+Bike-Unterkunftsseite. Der PDF-Ausdruck selbst lag in der Arbeitsumgebung nicht als separate Datei vor; er wird deshalb nicht als von mir geöffnetes Dokument bezeichnet.
- **Bergedorfer Museumslandschaft:** Die offizielle Konzertprogrammseite ist beim bestehenden Eintrag ergänzt; Schlosskonzerte werden ohne ungeprüfte künftige Termine beschrieben.

## 3. Amtliche Geodaten: Bodenlehrpfad Boberg

Der Datensatz wurde am 22.11.2026 direkt über die OGC-API der Freien und Hansestadt Hamburg abgerufen. Die lokale Datei `frontend/public/assets/bodenlehrpfad-boberg.geojson` enthält ausschließlich Boberg-Features; eine identische Quellkopie liegt unter `assets/bodenlehrpfad-boberg.geojson`.

- **3 Wegfeatures** (MultiLineString): Moorweg, Terrassenweg und Dünenweg.
- **491 Koordinatenstützpunkte** über diese drei amtlichen Geometrien.
- **10 Tafelpunkte**, in Reihenfolge 1 bis 10, jeweils mit Titel, Kurztext und Link auf die Hamburger Erläuterungsseite.
- **13 GeoJSON-Features** insgesamt, Datei 28.037 Byte.
- Die OGC-API-Seite nennt als räumliche API-Ausgabe CRS84; der API-Katalog kennzeichnet den Standard als WGS84. Die Kartenanwendung liest `[Länge, Breite]` als GeoJSON-Koordinaten.
- Die Metadaten nennen die Erstellung des Datensatzes am **14.04.2015**. Dies wird ausdrücklich nicht als Neuvermessung 2026 ausgegeben.
- Die im Auftragstext angegebene Metadatenaktualisierung **28.10.2026** ließ sich auf der von mir abgerufenen MetaVer-Seite nicht als Aktualisierungsfeld nachvollziehen. Die Seite zeigte das Erstellungsdatum; der Transparenzportal-Eintrag listete Versionshinweise einschließlich 24.01.2026. Die Geometrien stammen in dieser Umsetzung aus dem aktuellen OGC-API-Abruf vom 22.11.2026.
- Lizenz und sichtbare Quellenangabe: **Datenlizenz Deutschland – Namensnennung 2.0**, Freie und Hansestadt Hamburg, Behörde für Umwelt und Energie. Lizenz- und Datensatzlinks stehen am Eintrag; der Quellenhinweis ist zusätzlich in den GeoJSON-Features gespeichert.
- Die Daten werden nur nach der vorhandenen Kartenfreigabe vom eigenen Pages-Host geladen. Ein neuer externer Karten- oder Trackingdienst wurde nicht eingebaut.

Die Karte zeichnet die amtliche Linie mit unterscheidbaren Farben und öffnet bei den zehn Stationen ein Popup mit Hamburger Stationstitel, Kurztext und Artikel-Link. Die neue Filterkategorie kann unabhängig von den vorhandenen Kategorien ein- und ausgeschaltet werden.

## 4. Große Bergedorfer Runde und offene Geometrien

Die offizielle EntdeckerRouten-Seite beschreibt eine 7-km-Runde mit 13 Stationen ab S-Bahn Bergedorf über Serrahn, Schloss, Sachsentor, Rathaus, Schulenbrooksbek/SkulpturenLandschaft, Sternwarte und Gehölz. Die geprüfte Routenseite führt App und Routeninformation, aber keine abrufbare GPX- oder GeoJSON-Datei für diese Runde. Deshalb bleibt sie eine textlich beschriebene und offizielle Route, keine selbst konstruierte Kartenlinie.

Die offizielle Downloadseite des kürzeren Bergedorfer Spaziergangs nennt 3 km und bietet Karte sowie GPX. Die bestehende kürzere Route und die sieben Kilometer lange Runde sind in getrennten Datensätzen und Beschreibungen geführt.

Es wurden **keine zusätzlichen Naturschutzgebiets- oder Parkflächenpolygone** gezeichnet. Für Kiebitzbrack, den Spielraum um die Reitbrooker Entwässerung und weitere großflächige Ziele fehlt in diesem Durchgang eine lokal geprüfte passende Geometrie.

## 5. Kartenpunkte und Koordinaten

- Bestehender Kartenbestand vor dieser Ergänzung: **11 belegte Punktstandorte**.
- Neue belegte Einrichtungen mit OSM-Koordinatenquelle: **10**.
- Aktueller Bestand: **21 Punktstandorte** und **21 unterschiedliche Koordinatenpaare** im touristischen Datensatz.
- Neue Punktquellen sind direkt an den betroffenen Einträgen verlinkte OSM-Objekte. Es wurde kein Punkt allein aus einer Anschrift frei geschätzt.
- Minigolf im Grünen Zentrum wurde verifiziert, aber mangels verifizierter exakter Minigolf-Geometrie nicht mit einem Punkt versehen. Das gilt ebenfalls für das Querbeet-Netzwerk und nicht einzelstandortbezogene Schöpfwerksinformationen.
- Die Karte gruppiert gleiche Koordinaten wie bisher und erhält alle zugehörigen Karten- und Listeneinträge.

## 6. Geprüfte Quellen und nicht übernommene Vorschläge

Abgerufen wurden unter anderem die Originalseiten des Maler- und Lackierer-Museums, des Kultur- & Geschichtskontors, des Künstlerhauses, White Cube, Hansa-Filmstudio, SwinGolf, Golf Lounge Resort, Ackerperlen, Milchhof Reitbrook, Biohof Sommerfeld, des Boberger Reitvereins und Erlebnisbauernhofs Burmester sowie hamburg.de/BUKEA, der EntdeckerRouten und des Vierländer Schützenvereins.

Gezielt nicht als bestätigte touristische Angebote aufgenommen:

- **Steffis Freizeitreiten:** Die Betreiberseite nennt Moorredder 9, 22359 Hamburg; der genannte Standort liegt außerhalb des Bezirks Bergedorf.
- **Minigolf Schillerufer 10:** In dieser Abnahme wurde keine aktuelle Betreiber- oder Behördenquelle gefunden, die Betrieb und Besuchsbedingungen bestätigt.
- **Haus im Park:** Eine aktuelle offizielle Programmquelle und aktuelle Spieltermine konnten nicht belegt werden; ein direkter Webseitenabruf endete mit HTTP 503. Es wurde deshalb kein aktuelles Theaterprogramm veröffentlicht.
- **Weitere örtliche Schützenfeste:** Über das Vierländer Fest hinaus wurden keine ausreichend belegten kommenden Termine oder offiziellen Veranstalterseiten für zusätzliche Feste aufgenommen. Frühere Termine wurden nicht fortgeschrieben.
- **Kiebitzbrack-Fläche:** Die amtliche Gebietsbeschreibung wurde verlinkt; eine geprüfte Download-Geometrie wurde nicht in die Kartendatei übernommen.

Eine Vollständigkeit sämtlicher touristischer Angebote im Bezirk wird nicht behauptet. Die 112 vorhandenen Einträge decken weiterhin alle 14 Stadtteile ab; die Recherche dieses Ergänzungsauftrags war auf die vorgegebenen Einrichtungen und unmittelbar einschlägige offizielle Quellen gerichtet.

## 7. Technische Änderungen und Qualitätssicherung (lokal)

Geändert beziehungsweise hinzugefügt:

- `frontend/lib/tourism-data.mjs`: 23 neue Einträge, HIAMO-Bett+Bike-Angaben, Schlosskonzertquelle und neue Kartenkategorie.
- `frontend/app/tourism.tsx`: lokales GeoJSON laden und darstellen, Tafelpunkte mit Popups, Kartenfilter- und Fokus-Reflow; lokale Kartenassets mit Vite-Basispfad laden.
- `frontend/lib/history-tiles.mjs`: optionale `baseUrl`; nur die Tourismusseite übergibt den Projektunterpfad. Andere Karten verwenden weiter den unveränderten Standard.
- `frontend/public/assets/bodenlehrpfad-boberg.geojson` und `assets/bodenlehrpfad-boberg.geojson`.
- `frontend/tests/fixtures/tourism-112-records.json`: Veröffentlichungsbaseline aller 112 Tourismuseinträge.
- `frontend/tests/tourism.test.mjs`: Bestandsschutz, Stations-/Liniendaten, Lizenz, HIAMO und Rundwege.
- `frontend/tests/fixtures/map-orientation-authorized-changes.json`: aktualisierter Whole-file-Prüfhash für die Basispfad-Erweiterung.
- `index.html`, `404.html` und drei neu erzeugte JavaScript-Dateien im Pages-Root.

Ausgeführt am 22.11.2026:

- Produktionsbuild erfolgreich, Basispfad `/bergedorf-gemeinsam/`, 268 Dateien unter `frontend/dist`; synchronisierter Pages-Root erfolgreich durch die Buildprüfung verifiziert.
- Vollständige vorhandene Testsuite einschließlich neuer Tourismus- und Geodatentests: **389 bestanden, 0 fehlgeschlagen**.
- Buildwarnungen bleiben: Leaflet-CSS-Pfad wird zur Laufzeit aufgelöst; Haupt-JavaScript-Chunk ca. 2,834 MB unkomprimiert / 699 kB gzip, Kartenchunk ca. 559 kB / 159 kB gzip. Buildfehler oder Testfehler wurden nicht festgestellt. Eine gesonderte Netzprofilierung/Ladezeitmessung ist nicht erfolgt.
- Die ersten drei buildabhängigen Tests scheiterten beim ersten vor-build Suite-Lauf, weil `dist/` noch fehlte. Nach erfolgreichem Produktionsbuild bestand die vollständige Suite beim anschließenden Lauf 389/389.

## 8. Veröffentlichung und öffentliche Abnahme

**Noch offen, bis tatsächlich geprüft:** Pull Request, Merge-Commit, Pages-Workflow, Live-Ladeprüfung der neuen Kartendatei und praktische Bedienprüfung der Tourismusseite. Diese Punkte werden nach dem Merge ergänzt; ein grüner Build allein gilt nicht als Live-Abnahme.

