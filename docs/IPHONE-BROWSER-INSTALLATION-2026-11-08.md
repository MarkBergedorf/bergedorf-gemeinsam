# iPhone-Browser in der Installationshilfe – 8. November 2026

## Umfang und Ausgangspunkt

Basis ist `b22864138cb0348a79933fe21bbf0ac1932944a2`. `main` wurde vor Beginn gegen diesen Stand geprüft. Ausschließlich „iPhone – anderer Browser“ wurde erweitert. Der vollständige bearbeitbare Frontendquellcode ist weiterhin Grundlage des regulären Vite-Builds. Keine manuelle Bearbeitung kompilierter Dateien.

Neu sind die Unterauswahlen Google Chrome, Microsoft Edge, Mozilla Firefox und Sonstiger Browser. Typische `CriOS`, `EdgiOS` und `FxiOS`-Kennungen schlagen den passenden Browser vor. In-App-/unbekannte Kennungen fallen auf Sonstiger Browser zurück. Jede Auswahl kann manuell geändert werden. Die Erkennung erfolgt nur lokal und ist keine Zusicherung vorhandener Installationsfunktionen. Die Browserauswahl für Android verwendet einen getrennten Zustand.

Die Chrome- und Firefox-Anleitungen führen zuerst durch den eigenen Browser: Website öffnen, dessen Teilen-Funktion verwenden, Home-Bildschirm-Eintrag auswählen und den Dialog bestätigen. Safari ist eine zusätzliche, zunächst eingeklappte Alternative. Die öffentliche Adresse und der bisherige Kopierablauf bleiben erhalten. Web-App-Modus und Browserverknüpfung werden erläutert; ein Installationserfolg wird nicht behauptet. Auf iOS wird kein erfundener direkter Installationsaufruf angeboten.

## Belegte Möglichkeiten und Grenzen

| Browser/Thema | Grundlage | Ergebnis |
| --- | --- | --- |
| Chrome auf iPhone/iPad | Google Chrome-Hilfe, „Verknüpfungen zu Websites in Chrome erstellen“, Plattform ausdrücklich iOS: https://support.google.com/chrome/answer/15085120?co=GENIE.Platform%3DiOS&hl=de | Die Schritte werden von der offiziellen iOS-Anleitung bestätigt. Die allgemeine Adresse ohne Plattformparameter ist nicht die maßgebliche Quelle. |
| Firefox auf iOS | Mozilla Support, „Eine Verknüpfung zu einer Webseite mit Firefox für iOS erstellen“: https://support.mozilla.org/de/kb/webseiten-verknupfung-firefox-fur-ios | Eigene iOS-Anleitung, nicht die Android-Anleitung. Teilen in der Adressleiste und Bestätigung des Namens sind beschrieben. Die Seite ist von 2023 und wird weiterhin offiziell angeboten; kein praktischer Nachweis einer bestimmten aktuellen iPhone-Version. |
| Edge auf iPhone | Microsoft Support, „Hilfe für die Microsoft Edge-App“: https://support.microsoft.com/de-de/edge/microsoft-edge-app-help | Die geprüfte offizielle Hilfe beschreibt iOS, aber keine hinreichend genaue aktuelle Home-Bildschirm-Menüfolge. Deshalb keine erfundenen Untermenüs, Versionsnummern oder Zusage einer erfolgreichen Edge-Installation. Eigener Hinweis und offizieller Hilfezugang sowie Safari-Alternative. |
| Plattformunterstützung | Apple/WebKit, Brady Eidson/Jen Simmons, „Web Push for Web Apps on iOS and iPadOS“, Abschnitt „Third-party browser support for Add to Home Screen“: https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/ | Ab iOS 16.4 können andere Browser das Hinzufügen anbieten. Das bestätigt keine identische Menüführung für jede Browser-Version. |
| Web-App gegenüber Verknüpfung | Dieselbe WebKit-Veröffentlichung, Einleitung; zusätzlich „WebKit Features in Safari 26.0“, Abschnitt „Every site can be a web app on iOS and iPadOS“: https://webkit.org/blog/17333/webkit-features-in-safari-26-0/ | Eigenständige Darstellung bzw. Öffnen im Browser sind zu unterscheiden. Die bestehende Website hat bereits `display: standalone` im Manifest. Das Manifest wurde nicht geändert. Auf neueren iOS-Versionen kann die Wahl „Als Web-App öffnen“ angeboten werden. |
| Direkter Installationsaufruf | Mozilla MDN, „Making PWAs installable“, Abschnitt „Triggering the install prompt“: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#triggering_the_install_prompt | Der dort erklärte `beforeinstallprompt`-Weg wird auf iOS nicht unterstützt. Kein zusätzlicher eigener Direktinstallationsbutton. Bestehende PC-Logik unverändert. |

Alle Quellen wurden am 8. November 2026 über den Webabruf ausgewertet. Microsoft-Desktopartikel und alte Community-Antworten wurden nicht als Beleg aktueller iPhone-Menüs verwendet. Ein zunächst versuchter Microsoft-Learn-Pfad `https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/install` war über das Recherchewerkzeug nicht zugänglich: „URL … is not accessible via this tool.“ Ein weiterer Learn-Suchtreffer leitete zu MDN weiter; dies wurde nicht als eigenständige Microsoft-Herstellerbestätigung behandelt.

## Technische Prüfungen

- Vollständiger regulärer Produktionsbuild erfolgreich; vorhandene Warnung wegen großer Chunks, kein Buildfehler.
- **53 Frontendtests bestanden, 0 fehlgeschlagen, 0 übersprungen.** Vorherige 43 Tests unverändert, zehn neue Tests für iPhone-Browserkennungen, Plattformquellen, Auswahl und Erhalt der vorhandenen Anleitungen.
- Bytegenauer Vergleich der Safari-Anleitung, sämtlicher Android-Anleitungen und des Kopierablaufs mit der Ausgangsversion durch SHA-256-Regressionstest. Bestehender Desktop-Regressionstest weiterhin bestanden.
- `frontend/app/app-installation.tsx` und `frontend/app/globals.css` unverändert. Keine Änderung an PC-Prompt, Statusmeldungen, Geräteschwelle, Manifest, Karten, Datenschutzerklärung, Inhalten, Kalender oder Berechtigungen.
- Synchronisierung der regulären Build-Dateien über `node scripts/sync-pages.mjs`. Neuerzeugte Hash-Dateien sind reine Buildausgabe.
- Bestehende Prüfungen für `noindex`, Unterpfade, deaktivierte Schreib-/Anmelderechte und leere Live-Datenfelder bestanden. Keine neue GitHub-Actions-Automatik und keine Datenbankänderung.

Ein zweiter vollständiger Produktionsbuild erzeugte alle 87 Dateien bytegleich (SHA-256-Vergleich). Die tatsächlich veröffentlichte Commit-ID wird nach der Bereitstellung im Abschlussbericht genannt.

## Tatsächliche Browserprüfung vor Veröffentlichung

- Chrome-Cloud-Browser mit eingebetteter Ansicht von 390 und 320 Pixeln äußerer Breite: alle vier iPhone-Unterauswahlen wechseln unmittelbar die Anleitung. Sichtprüfung der schmalen Darstellung; kein horizontaler Überlauf. Gemessene Dokument-/Viewportbreiten: jeweils 375 bzw. 305 Pixel (15 Pixel Scrollleiste); Hilfebereich 333 bzw. 263 Pixel Innenbreite, jeweils ohne Überlauf.
- Eigene lokale Testhüllen mit kontrolliert eingesetzten iPhone-Kennungen: Chrome, Edge und Firefox wählten jeweils automatisch „iPhone – anderer Browser“ und die richtige Unterauswahl. Dies sind **simulierte Browserkennungen im Chrome-Browser**, keine realen iOS-Browser. Die lokalen Testhüllen werden nicht veröffentlicht.
- Manuelle Auswahl, nummerierte Texte, offizieller Herstellerlink und Erhalt der Safari-Alternative kontrolliert. Safari-Alternative per Eingabetaste geöffnet; der enthaltene Button zeigte die unveränderte Safari-Anleitung an.
- Kopierbutton in der lokalen HTTP-Vorschau: Clipboard nicht verfügbar; Adresse wurde markiert und der manuelle Ersatzweg angezeigt. Erfolgreiches Clipboard-Schreiben bleibt durch die unveränderten automatisierten Tests abgesichert, wurde auf Smartphone-Hardware nicht geprüft.
- Schließen der Anleitung geprüft; Fokus kehrte zum mobilen Hauptbutton zurück.

**Nicht durchgeführt:** Installation auf echter iPhone-Hardware, tatsächliche Chrome-/Edge-/Firefox-Menübedienung unter iOS, native PC-Installation oder vollständiger erneuter Durchlauf sämtlicher übrigen Websitefunktionen. Tests der Hilfe und simulierte Kennungen ersetzen diese Prüfungen nicht. Der genaue Edge-Menüweg bleibt offen. Bei neueren Browsern können sich Bezeichnungen ändern; die manuelle Auswahl und offizielle Hilfe bleiben erreichbar.

## Geänderte Quelldateien

- `frontend/app/mobile-installation-help.tsx`: iPhone-Unterauswahl und Einbindung der neuen Anleitung.
- `frontend/app/iphone-browser-help.tsx`: neue, ausschließlich iPhone-Fremdbrowser betreffende Anleitung und Safari-Alternative.
- `frontend/lib/mobile-installation.mjs`: zusätzliche iPhone-Browserkennung, Auswahlwerte und offizielle iOS-Quellen. Vorhandene Funktionen unverändert.
- `frontend/tests/iphone-installation.test.mjs` und `frontend/tests/fixtures/installation-preserved-v-b228.json`: neue gezielte Tests.
- Dieser Bericht; regulär erzeugte Produktionsdateien im Repository-Stamm.

Die private Sites-Version 99 wurde nicht angefasst. Die automatische Sitzungsplan-Aktualisierung bleibt deaktiviert. Die WhatsApp-Linkvorschau bleibt außerhalb dieses Auftrags.
