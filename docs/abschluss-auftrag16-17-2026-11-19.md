# Abschluss- und Zwischenstatus – Arbeitsaufträge 16 und 17

Stand: 19. November 2026 (Europe/Berlin). Dieses Nachtragsprotokoll ergänzt die älteren Vorbereitungsberichte. Es ersetzt deren damaligen Veröffentlichungsstatus; frühere Aussagen über noch offene Freigaben beziehen sich auf den Stand vor dem ausdrücklichen Ergänzungsauftrag.

## Statuskorrektur und Live-Abnahme · 20. November 2026

Die im folgenden älteren Abschnitt beschriebene fehlende Gestaltung ist durch den anschließenden cache-sicheren Asset-Stand behoben. Die zuvor bestätigte Live-Sichtprüfung am Desktop zeigte die gestaltete Website mit Titel, Navigation und Mietkostenratgeber. Am 20.11.2026 wurde der veröffentlichte Mietkostenratgeber zusätzlich in einer schmalen Live-Browseransicht bei 400 % Zoom geprüft: 337 CSS-Pixel Inhalts- und Scrollbreite ohne horizontalen Seitenüberlauf; die Navigation ließ sich öffnen, die Suche nach „Genossenschaftsanteile“ lieferte vier Abschnitte und das Inhaltsverzeichnis zeigte alle 51 Kapitel. Tabellen bleiben in ihren horizontal bedienbaren Inhaltscontainern. Das ist eine schmale Live-Browseransicht und kein Test mit einem physischen Smartphone.

Diese Abnahme betrifft die gestaltete Live-Darstellung und die genannten Mietkostenfunktionen. Sie ersetzt keine vollständige manuelle Abnahme sämtlicher Karten, Formulare, Filter, Verlinkungen und Geräteklassen aus Arbeitsauftrag 16 und 18. Die im älteren Abschnitt notierte Browserblockade und die damals fehlende Gestaltung beschreiben ausschließlich den Stand vor dem cache-sicheren Deployment und sind überholt.

## GitHub-Integration und veröffentlichter Stand

- Pull Request #4 (Arbeitsauftrag 17) ist mit Merge-Commit `7908363213a23f942ed92e34b9019dba05e8e0f9` in `main` zusammengeführt.
- Pull Request #5 (Arbeitsauftrag 16) ist mit Merge-Commit `5daf1769602dbb58b41fc623d33c27343f54d76b` in `main` zusammengeführt.
- Nach den Integrationsprüfungen wurden die korrigierten, frisch benannten Produktionsassets veröffentlicht. Aktueller geprüfter Hauptbranch- und Veröffentlichungscommit: `615173fcdd4f71eb32b2c4928eb69079dffad292`.
- GitHub Pages Workflow-Lauf [#44628427897](https://github.com/MarkBergedorf/bergedorf-gemeinsam/actions/runs/44628427897) für diesen Commit: abgeschlossen, Ergebnis `success`.
- Die Dateien im GitHub-Commitbaum wurden mit den lokal erzeugten Produktionsdateien verglichen; insbesondere der große JavaScript-Build und die Stylesheet-Blobs haben übereinstimmende Git-Blob-Hashes.

## Erneute Integrationsprüfungen

- Vollständige Testausführung nach Zusammenführung: **346 bestanden, 0 fehlgeschlagen, 0 übersprungen**.
- Produktionsbuild und Synchronisierung der Pages-Dateien erfolgreich. Die erzeugte Website führt `noindex`, enthält vier als Beispiele gekennzeichnete Beiträge und keine Live-Datensätze. Bestehende Warnungen über große JavaScript-Bündel bleiben.
- Die lokale Produktionsdatei wurde mit der Projektbasis `/bergedorf-gemeinsam/` gebaut. Registrierung, Backend-Speicherung, automatische Weiterleitung und produktive Interaktionen wurden nicht aktiviert.

## Live-Sichtprüfung – beobachteter Stand und Grenze

Die veröffentlichte URL wurde im Browser geöffnet; Titel, Hauptnavigation und die Mietkosten-Navigation wurden geladen. In der Verzeichniskarte wurde die ausdrücklich genehmigte OpenFreeMap-Zustimmung erteilt. Das Live-Dokument zeigte Karten-Attribution und Einrichtungsmarkierungen.

Bei der Live-Sichtprüfung erschien die Seite im Browser jedoch ohne die erwartete Gestaltung. Die Stylesheet-Elemente waren im beobachteten Dokument vorhanden, im Browser jedoch nicht als geladen ausgewiesen. Ein weiterer Versuch, den Seiteninhalt zu untersuchen, wurde durch die Browser-Sicherheitsrichtlinie blockiert. Deshalb ist die tatsächliche Darstellung der Karte und des Mietkostenratgebers nach dem letzten Deployment **nicht vollständig visuell bestätigt**. Es wird kein erfolgreicher visueller Mobil- oder Desktop-Abnahmetest behauptet. Der erfolgreiche GitHub-Pages-Lauf belegt den Deploymentlauf, aber allein keine fehlerfreie Browserdarstellung.

Damit sind Zusammenführung, Build, Tests und Deployment ausgeführt; die verlangte abschließende Live-Abnahme bleibt wegen des beobachteten Darstellungsproblems und der danach gesperrten Browserprüfung offen. Erforderlich ist eine erneute Sichtprüfung und gegebenenfalls Fehlerkorrektur, bevor die Aufgaben als vollständig visuell abgenommen gelten.

## Fachliche Prüfumfänge und Grenzen

- Arbeitsauftrag 16 enthält die vorbereiteten Änderungen für alle drei Kartenrenderer, 14 Stadtteilpolygone und -beschriftungen, Ortslagen, Oberbillwerder und fünf S-Bahn-Stationen. Die vorhandenen Interaktionen und Anbieterfreigaben sind durch Tests abgedeckt. Die Kacheln wurden in der freigegebenen Live-Sitzung angefordert; die Beschriftungsqualität und alle Funktionen konnten in der veröffentlichten Darstellung wegen des oben genannten Problems nicht zuverlässig abgenommen werden. Die Referenz „Gescanntes Dokument 159.pdf“ liegt im derzeitigen Upload und Repository nicht vor; der Vergleich mit diesem PDF konnte in dieser Übergabe nicht erneut vorgenommen werden.
- Arbeitsauftrag 17 wurde mit den 51 ursprünglichen Abschnitten, den 33 Korrekturpositionen, Tabellen, Quellen, acht Themenzugängen, Suche und Kapitelverknüpfungen übernommen. Die vorbestehende Quellen- und Rechtsstandsdokumentation einschließlich ihrer ausdrücklichen Grenzen bleibt erhalten. Die vollständige Prüfung der veröffentlichten Darstellung, Suche und Verknüpfungen nach diesem Deployment ist wegen der Browserblockade noch offen.
- Der vorherige Projektbericht verzeichnete 334 Tests vor der Integration. Der hier genannte integrierte Teststand von 346 Tests ist die spätere vollständige Ausführung nach Zusammenführung beider Arbeitsaufträge.

## Nächster Prüfpunkt

Die Testwebsite kann unter https://markbergedorf.github.io/bergedorf-gemeinsam/ angesehen werden. Für den vollständigen Abschluss sind nach Behebung bzw. Klärung der fehlenden Gestaltung die Liveansichten an breiter und schmaler Breite, die Kartenbeschriftungen und Interaktionen sowie die Mietkosten-Suche, acht Themenzugänge und Kapitelverknüpfungen erneut praktisch zu kontrollieren.
