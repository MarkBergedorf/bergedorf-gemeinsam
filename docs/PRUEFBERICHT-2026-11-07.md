# Sitzungsplan-Muster und dauerhaft synchroner Frontendquellcode

Ausgangscommit: `6493384a722c8f125542fd58198fead8c98ccd31`, vor Arbeitsbeginn über GitHub und lokale Repositorykopie bestätigt. Die zugehörige neue Commit-ID steht in der Git-Historie und im Abschlussbericht.

## 1. Wiederherstellung des vollständigen Frontends

Der frühere vollständige Frontendexport wurde mit der tatsächlich veröffentlichten Ausgabe abgeglichen. Sämtliche seitdem ergänzten Kartenfunktionen wurden wieder in den Quellcode übernommen: providerbezogene Dialogkomponente, getrennte versionierte Tab-Freigaben für OpenFreeMap/OSMF, vorgeschaltete Google-Entscheidung, aktuelle drei Kurztexte, Dialog-CSS sowie vollständige Datenschutzerklärung. Letztere liegt wieder als deklaratives, bearbeitbares JSX vor. Kein kompiliertes Anwendungsbundle wird als Quelldatei eingebunden oder beim Build bloß umkopiert.

Der vollständige bearbeitbare Frontendstand liegt unter `frontend/`, mit Komponenten, Modellen, öffentlichen Inhalten, Kartenstilen, Bildern, Schriften, Tests, Paketdefinition, Lockdatei und Vitekonfiguration. Frühere nur zur Übergabe benutzte Patches und private Backend-/Betriebsdaten sind keine Buildvoraussetzung. Der Datengenerator verwendet nun die identischen bereits mitgeführten Modelle `frontend/lib/workspace.mjs` und `frontend/lib/access.mjs` anstelle des außerhalb liegenden Backend-Quellordners. Die erzeugten öffentlichen Inhalte und Berechtigungen bleiben unverändert.

Vor der Sitzungsplanänderung ergab der Vergleich des regulären Neubaus mit dem veröffentlichten Hauptbundle **keine Unterschiede der normalisierten Syntaxstruktur**. Normalisiert wurden nur Quellpositionen, Kommentare, äquivalente Stringnotation, Build-Dateinamen und lexikalisch aufgelöste Minifier-Variablennamen. Nach Ergänzung des Hinweises wurde derselbe Vergleich erneut ausgeführt: Nach Herausnahme ausschließlich des angeforderten Hinweisknotens und seiner zusätzlichen Artikelklasse erneut keine Strukturunterschiede. Nachweis: `source-restoration.json`.

Der finale CSS-Regelvergleich enthält keine fehlenden oder veränderten bisherigen Regeln; hinzu kommen ausschließlich vier Sitzungsplan-Hinweisregeln. Nachweis: `css-comparison.json`.

## 2. Gewünschte Darstellung

Nur der vorhandene Sitzungsplan-Artikel erhielt die zusätzliche Klasse `meeting-plan-sample` und einen semitransparenten grauen Hinweis mit genau diesem Wortlaut:

> In Bearbeitung – Technische Klärung mit Bezirksversammlung und IT läuft.

Der Hinweis ist um −45 Grad gedreht, bleibt innerhalb dieses Artikels und passt Schriftgröße und Breite an schmale Ansichten an. `pointer-events:none` erhält die Bedienung der darunterliegenden Quellenlinks. Der Kalenderbutton liegt außerhalb der Einblendung. Alle bisherigen Artikelkinder, Texte, Tabellenangaben und Quellen sind erhalten; ein Test vergleicht den Politikabschnitt nach Entfernung ausschließlich der neuen Einblendung exakt mit dem früheren Original.

Hinweis zum vorhandenen Inhalt: Die bestehende Anzeige ist der bereits veröffentlichte Artikel zur Drucksache 22-0521 einschließlich Faktentabelle und Originalverweisen. Es wurden keine zusätzlichen Sitzungstermine erfunden, keine Inhalte des bisherigen Plans ersetzt und keine automatische Dokumentenanzeige aktiviert.

## 3. Build und Reproduzierbarkeit

Erfolgreich ausgeführt:

```sh
cd frontend
pnpm install --frozen-lockfile
pnpm run build
pnpm test
cd ..
node scripts/sync-pages.mjs
```

Zusätzlich erfolgte eine zweite saubere Arbeitskopie ohne node_modules und dist, Installation aus derselben Lockdatei und erneuter regulärer Vite-Build. Alle **87** Produktionsdateien waren danach bytegleich. Prüfsummen und Ergebnis: `reproducibility.json`. Versionen: Node.js 24.22.1, pnpm 11.25.0, Vite 8.0.13. Das Lockfile wurde nicht umgangen. Der übliche Vite-Hinweis auf große Bundles bleibt eine Warnung, kein Buildfehler.

`scripts/sync-pages.mjs` übernimmt ausschließlich den regulär erzeugten dist-Inhalt in den Repository-Stamm. Der Stamm bleibt die bestehende GitHub-Pages-Quelle. Der vollständige Frontendcode wird im selben Repository geführt; README und .gitignore schützen die Trennung von Quellen, Abhängigkeiten und Buildausgabe. Keine automatische Sitzungsplan-Aktualisierung und kein stündlicher Workflow hinzugefügt.

## 4. Technische Tests

**25 Frontendtests bestanden, 0 fehlgeschlagen, 0 übersprungen.**

- Die vorhandenen 17 Frontendtests wurden unverändert übernommen.
- Fünf Tests prüfen getrennte/versionierte Kartenfreigaben, RAM-Fallback, Anfrageabbruch und aktuelle kurze Anbieterinformationen.
- Drei zusätzliche Tests prüfen den vollständigen Erhalt des bisherigen Politikabschnitts, die Begrenzung/Bedienbarkeit des Hinweises und den selbstständigen Datenbuild ohne privaten Backend-Quellordner.
- noindex, statischer Unterpfad, lokal verfügbare Kartenressourcen, ausschließlich öffentliche Beispieldaten und geschlossene Backend-Schreibzugriffe werden durch die vorhandenen Prüfungen abgesichert.
- Keine bestehenden Tests verändert, um einen Fehler zu verdecken. Der früher dokumentierte separate Backend-Politiktestfehler wurde nicht korrigiert; diese private Backendtestsuite ist nicht Teil der statischen Frontend-Veröffentlichung und wurde hier nicht als bestanden behauptet.

Protokolle: `production-build.log` und `frontend-tests.log`.

## 5. Tatsächliche Browserprüfungen vor Veröffentlichung

Chrome-PC-Browser mit regulärer Produktionsausgabe:

- Politikbereich geöffnet, bestehende Sitzungsplantabelle und Quellen sichtbar; grauer diagonaler Wortlaut im richtigen Artikel.
- Schmale 390-Pixel-Ansicht: Hinweis vollständig innerhalb der 329 Pixel breiten Artikel-Innenfläche, keine dadurch erzeugte horizontale Überbreite; gedrehter Textbereich ca. 251 × 251 Pixel. Bestehende lange Tabelle bleibt vertikal scrollbar.
- Externer Sitzungskalender über den unveränderten Zugang und die vorhandene Linkbestätigung in einem neuen Tab geöffnet; Zieltab zeigte „Sitzungskalender“ auf der amtlichen URL. Ursprünglicher Tab blieb geöffnet.
- OpenFreeMap-Dialog mit aktuellem Kurztext geöffnet, abgelehnt, erneut geöffnet und zugestimmt; Geschichtskarten-Canvas sichtbar, Zentrum gewählt, gezoomt und entladen.
- Google-Dialog mit aktuellem Kurztext geöffnet und abgelehnt. Kein zusätzlicher Google-Aufruf für diese Prüfung ausgelöst.
- OSM-Dialog mit aktuellem Kurztext geöffnet, zugestimmt; Organisationskarte geladen, Zentrum gewählt, gezoomt und entladen.
- Öffentliche Datenschutzerklärung einschließlich Karten-Funktionsbeschreibung und Betroffenenrechten geöffnet.
- Navigation zu Start, Anliegen, Erfahrungsberichten, Verzeichnis, Über uns und Nachrichten ausprobiert. Geschichte und Politik wurden in den oben genannten Abläufen geprüft.

Die lokale Prüfvorschau ist nicht als neue Website veröffentlicht worden. Produktionsquellen enthalten keine zusätzliche Prüfinstrumentierung.

## 6. Quellen und Produktionsdateien

Neu dauerhaft im Repository: vollständiger `frontend/`-Baum, `scripts/sync-pages.mjs`, README, .gitignore und technische Nachweise unter docs/.

Gegenüber dem früheren vollständigen Export wurden zur Synchronisierung insbesondere geändert/ergänzt: `app/map-privacy-dialog.tsx`, `lib/map-privacy-info.mjs`, `app/history-map.tsx`, `app/organisation-map.tsx`, `app/satellite-link.tsx`, `lib/history-map-session.mjs`, `pages/privacy.tsx` und `app/globals.css`. Für diesen Auftrag kamen der Hinweis in `app/workspace.tsx`, seine vier CSS-Regeln, selbstständige Generatorimporte und die Tests/Dokumentation hinzu.

Die gebauten HTML-/CSS-/JavaScript-Dateien werden vollständig durch Vite erzeugt und über das Synchronisierungsskript übernommen. Die konkreten Dateinamen und Änderungen sind in der Commit-Dateiliste nachvollziehbar. Bestehende statische Karten-, Bild-, Schrift- und Inhaltsdateien bleiben erhalten. Keine Zugangstokens oder Umgebungsgeheimnisse erforderlich oder beigefügt; keine Datenbankdateien oder operativen Beiträge, Kommentare, Reaktionen oder Verwaltungsdaten veröffentlicht. Bekannte Geheimnisformate wurden geprüft, siehe `source-safety.json`; dies ist keine pauschale Garantie einer beliebigen zukünftigen Datei.

## 7. Prüfgrenzen

Keine tatsächliche Smartphonehardware, kein Google-App-Wechsel und keine vollständige Screenreader-/Mehrbrowserprüfung. Die schmale Ansicht wurde im PC-Browser geprüft. Kein erneuter Cookie-Gesamtaudit. Nicht jede einzelne Ortsseite, jeder Markerlink und jede Filterkombination wurde erneut einzeln angeklickt; die umfassende Quell-/Strukturprüfung und gezielten Browserabläufe sind von einer solchen Vollprüfung zu unterscheiden. Öffentliche Anmeldung und schreibende Funktionen bleiben deaktiviert, die private Sites-Version 99 unberührt.

Die öffentliche Bereitstellung und ihr konkreter Commit werden nach dem Commit über GitHub Pages und die tatsächlich erreichbare Seite kontrolliert; das Ergebnis steht in der Abschlussnachricht.
