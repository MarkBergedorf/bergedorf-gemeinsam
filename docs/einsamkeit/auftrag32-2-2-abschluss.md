# Arbeitsauftrag 32.2.2 – technischer Abschlussstand

**Stand:** 27. November 2026  
**Ausgangsstand:** PR #84, Branch `feat/auftrag-32-2-1-security-ui`, Head `0b05124e6ddd5b98b475051e1be31d3f3bdab22a`  
**Arbeitsumgebung:** Firebase Auth- und Firestore-Emulatoren, ausschließlich synthetische Konten und Datensätze  
**Produktivstatus:** Firestore nicht aktiviert; Firebase Spark beibehalten; keine produktiven Beteiligungsdaten erhoben

Dieser Vermerk aktualisiert den früheren Zwischenstand in `auftrag32-2-1-fortschritt.md`. Dessen Aussagen, Kontolöschung, Browser-E2E und Export seien noch nicht umgesetzt oder geprüft, beschreiben den damaligen Stand und sind durch die nachfolgend dokumentierten lokalen Arbeiten überholt. Das gilt nicht für die dort genannten offenen rechtlichen und betrieblichen Entscheidungen.

## Technisch umgesetzt

- **Wiederaufnehmbarer synthetischer Kontolöschlauf:** Der lokale Emulator-Operator verarbeitet Datensätze und UID-Referenzen über eine begrenzte Sammlung bekannter Hauptkollektionen, rekursive Unterkollektionen und Nutzer-Unterpfade. Der Lauf speichert Checkpoints in Batches mit höchstens 100 Schreiboperationen und kann nach einer Unterbrechung mit derselben Strategie fortgesetzt werden. Die gespeicherte Auswahl für sensible Datensätze muss beim Fortsetzen übereinstimmen.
- **Getrennte Verfahren:** Für Einwilligungsereignisse, Arbeitsinhalte, Meldungen und weitere UID-haltige Datensätze lassen sich lokal Löschen, Anonymisieren/Neuverschlüsseln UID-haltiger Pfade oder unveränderte Aufbewahrung simulieren. Die Aufbewahrungsvariante erhält den UID-Bezug ausdrücklich und ist keine bestätigte rechtliche Löschlösung. Keine dieser Varianten ist als produktive Standardentscheidung festgelegt.
- **Gruppenbereinigung:** Mitgliedschaftsspiegel, Beitrittsanfragen, Interessen, frühere Mitgliedschaften, Rollen- und Aufgabenreferenzen sowie Unterkollektionen werden erfasst. Die Koordination wird an eine aktive Stellvertretung bzw. ein aktives Mitglied übertragen; wenn keine Nachfolge vorhanden ist, wird die Gruppe geschlossen und aus dem Verzeichnis entfernt. Geschlossene Gruppen verlieren Arbeitsbereichszugriff. Gruppenbeitritte, Spiegel und Statusänderungen bleiben zwischen den betroffenen Dokumenten konsistent.
- **Reihenfolge und Nachweis:** Das synthetische Auth-Konto wird erst deaktiviert und gelöscht, nachdem die Datenbereinigung und Referenzprüfung erfolgreich abgeschlossen wurden. Der lokale Lauf schreibt einen Abschlussvermerk ohne UID und entfernt den Arbeitscheckpoint nach erfolgreicher Fertigstellung.
- **Erweiterter lokaler Export:** Er umfasst alle Ergebnisseiten und ermittelt persönliche Referenzen auch aus früheren Mitgliedschaften, geschlossenen Gruppen und früheren Beitrittsanfragen. Enthalten sind eigene Interessen, Mitgliedschafts-/Rollenhistorie, eigene Anfragen, selbst erstellte oder zugewiesene Arbeitsinhalte, Einwilligungs- und Widerrufsereignisse und eigene Missbrauchsmeldungen. Bei zugewiesenen Inhalten fremder Urheberschaft werden fremder Inhalt und Urheberidentität nicht freigegeben. Der lokale Operator-Leser ist auf die lokale Emulatorvorschau beschränkt und kein produktiver Export-Endpunkt.
- **Lokale Betreiberfunktionen:** Strukturierte Meldungen erhalten Bearbeitungsstatus; synthetische Konten können deaktiviert, einzelne Gruppen gesperrt und Verzeichniseinträge entfernt werden. Eine globale Beteiligungssperre und administrative Maßnahmen werden lokal protokolliert. Client-Regeln erlauben keine Selbstvergabe von Plattformrechten.
- **Lokale Browserstrecke:** Playwright mit lokal bereitgestelltem Chromium startet Emulatoren und Vorschau an `127.0.0.1` innerhalb derselben Entwicklungsumgebung. Die Prüfung umgeht keine Browser-Sicherheit und veröffentlicht keinen lokalen Dienst. `@sparticuz/chromium` wird als Testlaufzeit genutzt.

Die unveränderten Sicherheits- und Funktionsverbesserungen aus PR #84 bleiben erhalten. Firestore-Regeln schützen unter anderem Gruppenrollen, Verzeichniskonsistenz, private Mitgliedschaften, geschlossene Gruppen und atomare Einwilligungs-/Interessenänderungen.

## Automatisiert getestet

- `pnpm run test:phase32:browser`: **4 Betreiber-/Lösch-Emulatorprüfungen bestanden** sowie der Playwright-Dreikontenablauf. Die Löschtests enthalten mehr als 100 Meldungsdatensätze, einen absichtlich unterbrochenen Lauf, Wiederaufnahme, die getrennte Aufbewahrungsoption, UID-Referenzprüfung, Unterkollektionen und Auth-Löschung erst nach erfolgreicher Prüfung.
- Playwright-Ablauf mit drei synthetischen Konten: Registrierung/Anmeldung, Interesse und Widerruf, Gruppe anlegen und veröffentlichen, Verzeichnis finden, Beitrittsanfrage und Aufnahme, gemeinsamer Arbeitsinhalt und Aufgabenverteilung, unberechtigter Drittzugriff, Datenexport, Stellvertretung und Koordinationsübergabe, Austritt, Gruppenschließung, Spiegelstatus und Kontolöschung.
- Der Ablauf prüfte zusätzlich Bildschirmflächen von **1363 × 936**, **768 × 1024** und **390 × 844** Pixeln auf horizontalen Überlauf. Das ist eine automatisierte Layout-/Breitenprüfung, keine vollständige visuelle Geräteabnahme.
- `pnpm run test:phase32`: **18 Firestore-/Auth-Emulator-Szenarien bestanden**.
- `pnpm test`: **455 Regressionstests bestanden**. Der abschließende vollständige Lauf wurde nach dem Build sequenziell ausgeführt.
- `pnpm run build`: erfolgreich. Das Produktionsartefakt enthielt 284 Dateien, sechs JavaScript-Dateien bestanden `node --check`; 283 Manifest-/Root-Dateien wurden bytegenau abgeglichen. Referenzierte Produktionsdateien und Basispfad wurden geprüft.
- Der Build-Verifier bestätigt ausdrücklich, dass `frontend/local/phase32/` nicht im Pages-Artefakt vorkommt. Die lokale Beteiligungswerkstatt wird daher durch diesen Build nicht in die öffentliche Website aufgenommen.
- `git diff --check`: erfolgreich.

### Simulierte Ausfälle und Grenzen der Simulation

Der Emulatorlauf testet einen beschränkten Schreibbudget-Fehler, einen nicht erreichbaren lokalen Netzwerkport, Wiederaufnahme nach absichtlicher Unterbrechung, doppelte Anfragevermeidung und gleichzeitige Schreibvorgänge. Eine Wiederaufnahme löscht keine bereits verarbeiteten Dokumente erneut; Anfragedokumente werden nicht doppelt erzeugt.

Diese Fälle simulieren Client-/Emulatorfehler. Sie sind keine Messung produktiver Firestore-Kontingente und keine Prüfung eines echten Anbieter-Ausfalls. Simultane Schreibvorgänge belegen, dass keine zusätzlichen doppelten Dokumente entstehen; eine Versionssperre oder Konfliktwarnung gegen das Überschreiben konkurrierender Änderungen ist damit nicht nachgewiesen und bleibt technisch offen.

## Im Browser erfolgreich geprüft

Der lokale Browserablauf lief über das lokale Vorschauprogramm und die Emulatoren. Alle drei synthetischen Konten durchliefen ihre vorgesehenen Aktionen; der Zugriff des nicht berechtigten dritten Kontos auf einen geschützten Arbeitsbereich wurde abgewiesen. Die drei genannten Viewport-Maße blieben ohne horizontalen Überlauf.

Es fand keine produktive Firebase-Anmeldung, keine E-Mail-Zustellung, kein produktives Konto-Löschen und keine Änderung an der öffentlichen Website oder am Firebase-Projekt statt.

## Noch technisch offen

- Konflikterkennung bzw. Schutz vor verlorenen Änderungen bei konkurrierender Bearbeitung desselben Arbeitsinhalts.
- Produktive Ende-zu-Ende-Prüfung der Firebase-Kontofunktionen ist nicht Gegenstand der lokalen Emulatorprüfung.
- Emulatorbasierte Netzwerk-, Budget- und Unterbrechungssimulation ersetzt keinen realen Kontingent- oder Verfügbarkeitstest; produktive Kontingente wurden nicht ausgeschöpft.
- Vollständige visuelle Tablet-/Smartphone-Abnahme auf echten Geräten oder Browsern wurde nicht vorgenommen. Geprüft wurden automatisierte Viewportbreiten.
- Eine produktive, über den Emulator hinausgehende Missbrauchserkennung, Ratenbegrenzung, Überwachung und Notfallorganisation ist nicht belegt.

## Organisatorisch zu entscheiden

- Wer Meldungen im Betrieb entgegennimmt und innerhalb welcher Fristen handelt.
- Wer Moderations- und Notfallsperren auslösen darf und wie Vertretung und Eskalation funktionieren.
- Wie Organisationen und Koordinationsrollen nachgewiesen werden.
- Altersgrenzen, Schutzkonzept und Vorgehen bei gefährdenden Inhalten.
- Verfahren zur Bearbeitung von Auskunfts-, Berichtigungs-, Widerrufs- und Löschanfragen.
- Ob und wie Arbeitsgruppen ihre Selbstorganisation gewährleisten, solange der Betreiber keine Projektbetreuung stellt.

## Rechtlich zu klären

- Rechtsgrundlagen und konkrete Einwilligungstexte für die vorgesehenen Verarbeitungen.
- Zulässigkeit und Dauer der Aufbewahrung von Einwilligungs- und Widerrufsnachweisen.
- Auswahl zwischen Löschen, Anonymisieren oder Aufbewahren je Datenkategorie sowie Bedingungen für eine spätere Wiederherstellung.
- Datenschutzrechtliche Einordnung von Gruppeninhalten, Meldungen und personenbezogenen Referenzen.
- Vertragsbedingungen und datenschutzrechtliche Rollen im Firebase-Betrieb.

## Für eine produktive Aktivierung noch erforderlich

Vor der produktiven Freischaltung müssen die rechtlichen und organisatorischen Entscheidungen dokumentiert und die daraus folgende Lösch-/Exportpolitik festgelegt werden. Danach sind produktionsgeeignete, minimale Berechtigungen und Admin-Verfahren, Schutz vor Missbrauch und Kontingentausschöpfung, Monitoring/Notfallabläufe, Datenschutzinformation und Einwilligungsnachweis sowie produktive Sicherheits- und Browserprüfungen zu überprüfen. Außerdem muss die Betreiberseite ausdrücklich entscheiden, die Beteiligungsfunktionen freizuschalten.

Bis dahin bleibt die Werkstatt lokal und emulatorbasiert. Der Firebase-Spark-Tarif bleibt bestehen; Firestore wurde nicht aktiviert. Es wurden weder kostenpflichtige Dienste eingerichtet noch reale Gruppen-/Kontodaten erhoben oder gelöscht.
