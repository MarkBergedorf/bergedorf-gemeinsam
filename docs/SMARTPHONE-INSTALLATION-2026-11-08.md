# Smartphone-Installationshilfe – 8. November 2026

## Ausgangspunkt und Umfang

Basis: `470c1b20e9a521fe7d83dd72b613e6568d67577d` auf `main`.
Ausschließlich die Smartphone-Installationshilfe wurde im bearbeitbaren Frontend erweitert. Keine Änderung an der privaten Sites-Version 99. Die WhatsApp-Linkvorschau bleibt eine gesonderte offene Aufgabe.

Vier manuell wechselbare Hauptanleitungen: iPhone/Safari, iPhone/anderer Browser, Android/Chrome, Android/anderer Browser. Letztere bietet Samsung Internet, Edge, Firefox und unbekannte Browser an. Safari hat nummerierte Schritte und lokal gezeichnete Teilen-/Menüsymbole. Andere iPhone-Browser erhalten den manuellen Weg über Kopieren und Safari. Samsung und Edge erhalten offizielle Hilfelinks und den optionalen manuellen Wechsel zu Chrome; ein nicht belegter Installationsmenüpfad wird nicht behauptet. Für Firefox wird die offiziell beschriebene Installation ausdrücklich nur bei vorhandener Menüoption erläutert.

Die öffentliche Websiteadresse ist sichtbar und kopierbar. Eine Erfolgsmeldung erscheint erst nach erfolgreichem Clipboard-Aufruf. Bei nicht verfügbarer oder abgelehnter Zwischenablage wird die Adresse markiert und ein manueller Kopierweg erklärt. Es werden keine Browserwechsel oder App-Installationen automatisch ausgelöst.

## Geräteerkennung und Desktop-Erhalt

Die vorhandene Darstellungsschwelle `matchMedia('(max-width: 700px)')` bleibt unverändert. Sie erkennt eine schmale Ansicht, kein physisches Smartphone. Erst innerhalb der mobilen Hilfe erfolgt eine lokale unverbindliche Vorauswahl aus Browserkennung und gegebenenfalls Touch-Fähigkeit. Erkannt werden typische iOS-Safari-, iOS-Fremdbrowser-, Android-Chrome-, Samsung-, Edge-, Firefox- und In-App-Kennungen. Unbekannte Kennungen bleiben ohne Hauptauswahl; jede Auswahl ist manuell änderbar. Die Kennung wird dafür weder gespeichert noch übertragen. Eine zuverlässige Identifikation aller Browservarianten wird nicht behauptet.

Auf breiten Ansichten bleiben Beschriftung, Klickziel `install`, Ereignisbehandlung `beforeinstallprompt`, `prompt()`, `userChoice`, Statusmeldungen, Erkennung des Standalone-Modus und bisherige Desktop-Hilfe unverändert. Ein Regressionstest vergleicht Controller und Desktop-Hilfe bytegenau mit der Ausgangskomponente in der Testfixture. Die alten Desktop-Hinweise wurden wegen des ausdrücklichen Änderungsverbots für den PC nicht redigiert; sie erscheinen nicht in der neuen Smartphone-Hilfe. Auf schmalen Ansichten öffnet der Hauptbutton stets die Anleitung, auch wenn ein Browser-Installationsangebot vorliegt.

## Tatsächlich ausgeführte technische Prüfungen

- `pnpm install --frozen-lockfile`: erfolgreich, bestehende Lockdatei unverändert.
- `pnpm run build` in `frontend/`: erfolgreich; regulärer Vite-/TSX-Build und Artefaktprüfung. 87 Produktionsdateien. Bekannte Größenwarnung für große JavaScript-Chunks, kein Buildfehler.
- `pnpm test` in `frontend/`: **43 bestanden, 0 fehlgeschlagen, 0 übersprungen**. Vorherige 25 Tests unverändert; 18 neue Tests für typische Gerätekennungen, unbekannte Kennungen, offizielle Android-URL, Desktop-Regression sowie bestätigtes/fehlgeschlagenes Kopieren.
- `node scripts/sync-pages.mjs`: reguläre Buildausgabe in den Repository-Stamm synchronisiert und byteweise abgeglichen. Keine Handänderung an kompiliertem JavaScript.
- Kein Quellcode außerhalb der Installationskomponente, neuer mobiler Hilfe, Erkennungs-/Kopierhilfe und ausschließlich dazugehöriger CSS-Regeln verändert. Karten, Datenschutzdialoge, öffentliche Datenschutzerklärung, Politikbereich, Kalender und Hintergrunddaten bleiben auf Quellcodeebene unverändert.
- `noindex`, geschlossene Schreib-/Anmeldeberechtigungen und leere Live-Datenfelder bestehen die vorhandenen automatisierten Prüfungen. Kein neuer Workflow und keine Sitzungsplan-Automatik.

## Tatsächliche Browserprüfung vor Veröffentlichung

Chrome im verfügbaren Cloud-PC-Browser, regulär gebaute Ausgabe:

- Breite PC-Ansicht: „Als App installieren“, keine neue Geräteauswahl. In einer ausschließlich lokalen Testhülle wurde ein kontrolliertes `beforeinstallprompt`-Ereignis angeboten: Klick rief `prompt()` je einmal auf; angenommene und abgebrochene `userChoice` erzeugten die bisherigen Meldungen. Dies ist ein **simulierter Ereignistest**, keine tatsächlich installierte Chrome-/Edge-App. Die Testhülle wird nicht veröffentlicht.
- Schmale eingebettete Browseransichten mit 390 und 320 Pixeln äußerer Breite: Hauptbutton, vier Anleitungen, Safari- und Chrome-Wechselschaltflächen, Samsung-/Edge-/Firefox-/unbekannte Browser, nummerierte Texte und Symbole geprüft. Ein zunächst zu schmaler Hilfebereich wurde nur mobil verbreitert. Bei 320 Pixeln für alle vier Hauptanleitungen kein horizontaler Überlauf: Dokumentbreite und nutzbare Viewportbreite jeweils 305 Pixel (15 Pixel Scrollleiste); Hilfebereich jeweils 263 Pixel Innenbreite ohne Überlauf.
- Öffnen per Tastatur und Schließen getestet; der mobile Fokus kehrt zum Hauptbutton zurück. Keine Geräteauswahl für PC in der mobilen Hilfe.
- Clipboard in der HTTP-Vorschau nicht verfügbar: tatsächlicher manueller Ersatzweg und markierte Adresse geprüft. Erfolgreiches Schreiben und die Reihenfolge der Bestätigung wurden automatisiert mit einer kontrollierten Clipboard-Schnittstelle geprüft. Erfolgreiches Kopieren auf echter Smartphone-Hardware nicht geprüft.
- Apple-, Mozilla-, Samsung- und Microsoft-Hilfeseiten im Browser erreichbar. Google-Hilfelinks führten im Cloud-Browser zur reCAPTCHA-Seite mit „ungewöhnlichen Datenverkehr aus Ihrem Computernetzwerk festgestellt“. Keine Umgehung und keine CAPTCHA-Lösung. Ihre Inhalte konnten zuvor über den Webabruf der offiziellen Dokumentation ausgewertet werden; direkte Browserkontrolle dieser beiden Links bleibt eingeschränkt.

**Nicht durchgeführt:** Installation auf echtem iPhone/Android, tatsächliche Safari-/Samsung-/Firefox-/Edge-Bedienung auf Smartphone-Hardware, native Chrome-/Edge-Installationsdialoge und Installation auf einem PC. Diese Ergebnisse werden nicht durch Breitentests oder simulierte Ereignisse ersetzt. Nicht sämtliche übrigen Websiteabläufe wurden erneut praktisch durchgespielt; deren Erhalt wird durch begrenzten Quelldiff und bestehende Regressionstests abgesichert.

## Offizielle Quellen, geprüft am 8. November 2026

- Apple, „Website in Safari auf dem iPhone in eine App verwandeln“: https://support.apple.com/de-de/guide/iphone/iphea86e5236/ios . Die versionsunabhängige Adresse zeigte im Browser iOS 27; berücksichtigt Seitenmenü/Teilen und direkt sichtbares Teilen. Für ältere kompakte Layouts bleibt „Mehr“ verständlich benannt. Der vorgeschlagene versionierte iOS-26-Webabruf und zunächst auch die allgemeine Adresse lieferten im Recherchewerkzeug `429 Too Many Requests`; die reguläre Browserprüfung der allgemeinen Adresse war anschließend erfolgreich. Über die zurückgegebene Rate-Limit-Meldung hinaus ist keine Ursache belegt.
- Google Chrome, „Web-Apps verwenden“, Plattform Android: https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=de . Installationsmenü und ausdrückliche Plattformwahl.
- Google Chrome, „Verknüpfungen für Websites erstellen“, Plattform Android: https://support.google.com/chrome/answer/15085120?co=GENIE.Platform%3DAndroid&hl=de-DE . Verknüpfung und Web-App werden unterschieden.
- Google web.dev, „Installation“: https://web.dev/learn/pwa/installation?hl=de . Varianten der Installationsmenüs abhängig vom Browser.
- Mozilla Support, „Verwendung von Web-Apps in Firefox für Android“: https://support.mozilla.org/de/kb/verwendung-von%20web-apps-in-firefox-fur-android . Aktuell angebotene offizielle Seite mit Erstellungsdatum 02.10.2020; kein Test einer bestimmten Firefox-Version auf Hardware.
- Samsung, „Samsung Internet nutzen: so geht´s“: https://www.samsung.com/de/support/apps-services/wie-nutze-ich-samsung-internet/ . Allgemeiner offizieller Hilfezugang, kein behaupteter Nachweis einer konkreten Web-App-Menüfolge.
- Microsoft, „Hilfe für die Microsoft Edge-App“: https://support.microsoft.com/de-de/edge/microsoft-edge-app-help . Allgemeiner offizieller Hilfezugang; Desktop-Anleitungen werden nicht als Android-Menüfolge ausgegeben.

## Dateien

Bearbeitet: `frontend/app/app-installation.tsx`, `frontend/app/globals.css`.
Neu: `frontend/app/mobile-installation-help.tsx`, `frontend/lib/mobile-installation.mjs`, `frontend/tests/mobile-installation.test.mjs`, `frontend/tests/fixtures/app-installation-desktop-baseline.tsx`, dieser Bericht.
Regulär neu erzeugt: `index.html`, `404.html` und die geänderten Hash-Dateien unter `assets/`.

Die Veröffentlichung und Prüfung der tatsächlich ausgelieferten Version werden im Abschlussbericht mit Commit-ID separat bestätigt. Dieser Bericht beschreibt keine bereits vorweggenommene Veröffentlichung.
