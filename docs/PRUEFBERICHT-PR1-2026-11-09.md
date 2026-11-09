# PR Nr. 1 – technische Fertigstellung, 9. November 2026

## Ausgang und Umfang

Ausgang main: `03028bf76f0c12b518131d378d58aec80750f7ec`.
Vorhandener PR-Quellcommit: `65c6164ed548fb33a90222aa5504654fd2cdf6b0`.
Der vorhandene Quellcode wurde unverändert übernommen. Die einzige fachliche Änderung gegenüber main sind die drei zusätzlichen Textlinks in `frontend/app/iphone-browser-help.tsx`. Die im PR dokumentierten Schemas bleiben erhalten; es wurden keine Links erneut angelegt und keine weiteren Funktionen geändert.

## Ausführung und Ergebnisse

- Node.js 24.22.1, pnpm 11.25.0.
- `pnpm install --frozen-lockfile`: erfolgreich, Lockdatei unverändert.
- `pnpm run build`: erfolgreich; vorhandene Warnung wegen JavaScript-Chunks über 500 kB, kein Fehler.
- `pnpm test`: 53 bestanden, 0 fehlgeschlagen, 0 übersprungen.
- `node scripts/sync-pages.mjs`: erfolgreich; alle 87 Ausgabedateien stimmen mit frontend/dist überein.
- Zweiter regulärer Build: alle 87 Dateien per SHA-256 bytegleich.
- Buildprüfung: noindex, korrekter Projekt-Unterpfad, 404-Einstieg, vier Beispiele, 69 redaktionelle Einträge, keine Live-Datensätze und keine aktivierten Schreibrechte.
- Vorhandene Regressionstests bestätigen Safari-/Android-Anleitungen und Kopierablauf bytegleich sowie Erhalt des PC-Installationsablaufs. Die gesamte übrige Frontendquelle ist gegenüber main unverändert.
- Sämtliche bestehenden statischen Dateien außer den erzeugten JavaScript-Dateien und HTML-Einstiegen sind bytegleich zum Ausgang. Dies umfasst CSS, Bilder, Kartenressourcen, Icons und Manifest.

## Produktionsänderungen

`index.html`, `404.html`, `assets/index-BKixz_pE.js` und `assets/leaflet-src-bpTZ4LnR.js` werden regulär erzeugt. Die vorherigen Hash-Dateien `assets/index-NmeDPR6a.js` und `assets/leaflet-src-1-xL7q2P.js` entfallen durch den Synchronisierungsschritt. Keine manuelle Bearbeitung kompilierter Dateien.

## Prüfgrenzen und Auslieferungsnachweis

Kein echter iPhone-Hardwaretest und keine praktische Übergabe an installierte iOS-Browser. Die URL-Schemata werden aus dem bestehenden PR übernommen. Keine neue vollständige Mehrbrowser-, Screenreader- oder Backendprüfung; die vorhandenen 53 Frontendtests sind kein Nachweis aller ursprünglichen Backendfunktionen. Die private Sites-Version 99 wurde nicht aufgerufen oder verändert; keine Datenbank- oder Sitzungsplan-Automatikänderung.

Merge-Commit, GitHub-Pages-Bereitstellung und Prüfung der tatsächlich ausgelieferten Website werden nach dem Merge im Abschlussbericht dokumentiert. Dieser Bericht behauptet noch keine erfolgte Veröffentlichung.
