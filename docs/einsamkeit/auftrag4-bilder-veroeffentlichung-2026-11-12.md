# Auftrag 4 – historische Bilder und direkte Quellen

Ausgangspunkt: `9c575ce848b17b64370ad8aa3fba544e8f7dfcf3`.

## Änderung

Alle 88 nummerierten Bildfassungen aus `Bergedorf_Alle_88_Bilder_EIN_Download.zip` werden lokal ausgeliefert. Die großen JPEG-Fassungen sind SHA-256-identisch zum bereitgestellten Ein-Download-Archiv; dieses enthält bereits konvertierte JPEG-Kopien, keine Behauptung einer Identität zu früheren Originaldateien. Zusätzlich bestehen 88 verkleinerte JPEG-Vorschauen. Drei Motivpaare bleiben unter den bisherigen 85 Medienobjekten zusammengeführt; alle Bildnummern und Varianten bleiben sichtbar.

Ronald Hartmann hat am 11. November 2026 der Nutzung der 88 Bilder seiner Sammlung für die nicht kommerzielle Website zugestimmt. Dies wird gemeinsam im historischen Bildsammlungsabschnitt dokumentiert. Zusätzliche individuelle Rechtefragen bleiben rechtlich unberührt. Seine private E-Mail wird nicht veröffentlicht.

Jeder historische Einzelbeitrag enthält „Historische Fotos und Quellen“ mit der zugeordneten Galerie, den bestehenden Originalnachweisen, Fundstellen und Quellenbegrenzungen. Beiträge ohne konkret zugeordnetes Bild weisen darauf hin und zeigen ihre vorhandenen schriftlichen Quellen. Galerien sind zunächst geschlossen; Bildknoten werden erst beim Öffnen erzeugt. Vorschauen sind lazy geladen, die unveränderten großen Bildfassungen per Link in einem neuen Tab erreichbar. Die gemeinsame Bildsammlung erschließt auch Einzelhandelsmotive und allgemeine Stadtansichten.

Alle 104 historischen Erfassungsposten einschließlich ihrer Adressen, Phasen, Suchnamen, Belegzuordnungen und Beziehungen bleiben bytegleich erhalten. Die 88 Bildnummern sind keine 88 eigenständigen Betriebe. Motivbeschreibungen, Datierungsgrenzen, ursprüngliche Archivpfade und Prüfsummen bleiben erhalten. Auch B027 bleibt ein Bild mit mehreren Belegzuordnungen, und Bahnhofsgaststätten werden nicht mit Bahnhofsklause gleichgesetzt.

Überholte Zukunftsankündigungen in den früheren Fachartikeln sind gezielt auf den bestehenden Stand aktualisiert. Sämtliche Ersetzungen sind in `auftrag4-aktualisierte-hinweise.json` dokumentiert; ein Test weist nach, dass der übrige Artikeltext unverändert blieb.

## Dateien

- `frontend/app/loneliness-local.tsx`: Galerie, direkte Quellenabschnitte und gemeinsame Sammlungserlaubnis.
- `frontend/lib/historical-media-4.json`: freigegebene Dateien und Vorschauen für jede Variante; historische Metadaten erhalten.
- `frontend/lib/loneliness-articles.json`: ausschließlich dokumentierte überholte Entwicklungshinweise aktualisiert.
- `frontend/public/assets/historical/`: 88 Archivfassungen und 88 Vorschauen.
- `frontend/tests/loneliness-*.test.mjs`: angepasste Rechte-/Bestandserwartungen, Dateiprüfsummen und gezielte Erhaltungstests.
- `docs/einsamkeit/auftrag4-veroeffentlichte-bilder.json`: Dateizuordnung und SHA-256 je Bildnummer.
- `docs/einsamkeit/auftrag4-aktualisierte-hinweise.json`: genaue Textänderungen.
- Produktionsausgabe: regulärer Vite-Build und `scripts/sync-pages.mjs`, keine manuellen Änderungen an generierten Dateien.

## Prüfungen und Grenzen

Alle 88 großen Dateien werden gegen die bereits dokumentierten Archivprüfsummen geprüft; Vorschaudateien sind vorhanden. Der Standortbestand und sämtliche historischen Motivangaben werden gegen den Ausgangscommit geprüft. Die bestehende Testsuite bleibt maßgeblich. Das historische `auftrag4-bildpruefung.json` bleibt als zeitgebundener früherer Prüfstand mit damals null öffentlichen Bildern erhalten; die aktuelle Dateiliste steht separat in `auftrag4-veroeffentlichte-bilder.json`.

Der Produktionsbuild bewahrt `noindex`, vier Beispieldatensätze, 69 redaktionelle Verzeichniseinträge und null operative Nutzerdatensätze. Öffentliche Schreibfunktionen, Karten, Installation, die Themenhierarchie und die private Sites-Version 99 werden nicht geändert.

Eine lokale Browserausführung ist durch die verfügbare Umgebung blockiert (Chromium: Unix-Socket nicht erlaubt; Cloud-Browser erreicht den lokalen Server nicht). Eine echte Smartphoneprüfung ist deshalb nicht bestätigt. Die Browserdarstellung und Auslieferung werden nach der GitHub-Pages-Veröffentlichung gesondert kontrolliert. Die große Dateiübertragung erfolgt mit Abgleich der von GitHub bestätigten Git-Blob-SHAs vor dem Aktualisieren von main.
