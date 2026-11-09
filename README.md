# Bergedorf gemeinsam – öffentliche statische Testfassung

Die vollständigen bearbeitbaren Frontendquellen stehen unter **frontend/**. Die GitHub-Pages-Ausgabe liegt am Repository-Stamm; sie wird ausschließlich aus diesen Quellen erzeugt. **Keine manuellen Änderungen an den gebauten Dateien in assets/, index.html oder 404.html.**

## Regulärer Build

Voraussetzungen: Node.js mindestens 22.13 (geprüft mit 24.22.1), pnpm 11.25.0 gemäß packageManager, Netzwerkzugang zur Paketinstallation. Abhängigkeiten und exakte Auflösung: frontend/package.json und frontend/pnpm-lock.yaml. Keine API-Schlüssel oder Umgebungsgeheimnisse für die statische Fassung erforderlich.

```sh
cd frontend
pnpm install --frozen-lockfile
pnpm run build
pnpm test
cd ..
node scripts/sync-pages.mjs
```

`build` erzeugt die bereinigten öffentlichen Beispieldaten, führt **Vite 8 / React / TSX** aus und prüft die statische Ausgabe einschließlich noindex und deaktivierten Berechtigungen. Der Datengenerator verwendet die mitgeführten identischen Modelle unter frontend/lib; kein Zugriff auf die private Sites-Datenbank oder einen externen Backend-Quellordner. Der Synchronisierungsschritt übernimmt nur die erzeugten Website-Dateien in den Stamm. Erst nach Prüfung committen/pushen. GitHub Pages stellt den Stamm von main wie bisher bereit; es gibt keinen stündlichen Sitzungsplanworkflow.

## Struktur

- frontend/app: TSX-Komponenten, Navigation, Karten und Dialoge.
- frontend/pages: statischer Einstieg, vollständige Datenschutzerklärung, öffentlicher Katalog und gesperrter Backendadapter.
- frontend/lib: Modelle, Filter, Kartenlogik, Ortsverzeichnis und redaktionelle Inhalte.
- frontend/public: lokal ausgelieferte Bilder, Kartenschriften, Stile und Lizenzdateien.
- frontend/vendor: mitgeführtes CSS.
- frontend/tests, frontend/scripts: Tests, Daten-/Buildprüfung.
- scripts/sync-pages.mjs: Übernahme der regulären Ausgabe.
- docs: Wiederherstellungsnachweis und Prüfbericht.

## Betriebsgrenzen

Die öffentliche Fassung bleibt **noindex** und ohne öffentliche Anmeldung, Schreibzugriffe oder Verwaltungsberechtigungen. Dargestellte Verwaltungs-/Formularquellen aktivieren keinen Serverdienst. Private Datenbanken und operative Nutzerdaten sind nicht enthalten. Backendbetrieb benötigt einen gesonderten Auftrag und Sicherheitsprüfung. Die private Sites-Version 99 bleibt unverändert.

Die automatische Sitzungsplan-Aktualisierung ist weiterhin deaktiviert. Der vorhandene Plan wird als Muster mit einem ausschließlich dort angezeigten diagonalen Hinweis erhalten; der externe Sitzungskalender bleibt unabhängig nutzbar. Maßgeblicher neuer Sachstand: [Antwort der Verfahrensbetreuung vom November 2026](docs/SITZUNGSKALENDER-SACHSTAND-2026-11.md). Die Anfrage ist beantwortet, die technische Klärung vorerst abgeschlossen. Ohne neue tragfähige Grundlage wird die automatische Aktualisierung nicht weiterverfolgt. Eine erneute inhaltliche Befassung ist spätestens Anfang 2029 vorgesehen, sofern der Betreiber nichts anderes bestimmt; daraus entsteht keine automatische Prüfung oder Erinnerung.

## Synchronisierung mit dem vorherigen öffentlichen Stand

Ausgangspunkt: 6493384a722c8f125542fd58198fead8c98ccd31. Die zuvor nur in Produktionsdateien vorhandenen providerbezogenen Datenschutzabfragen, getrennten Tab-Freigaben, Google-Öffnung nach Zustimmung, aktuellen Kurztexte, Dialogstile und vollständige Datenschutzerklärung wurden in die bearbeitbaren Komponenten übernommen. Vor Ergänzung des Hinweises war die normalisierte JavaScript-Syntaxstruktur des regulären Neubaus gleich dem veröffentlichten Stand; Karten-CSS und sämtliche übrigen statischen Dateien wurden abgeglichen. Siehe docs/source-restoration.json.
