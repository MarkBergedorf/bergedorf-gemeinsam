# Arbeitsauftrag 32.2.1 – technischer Zwischenstand

**Stand:** 27. November 2026  
**Basis:** zusammengeführter PR #83, Commit `91e3d7daac94b2042bc932c2353c5fe917f71db9`  
**Status dieses Nachtrags:** lokale Sicherheits- und Funktionskorrekturen, noch nicht veröffentlicht  
**Produktions-Firestore:** nicht aktiviert; Spark bleibt unverändert

## Änderungen in der lokalen Arbeitsfassung

Die öffentliche Website und die produktive Firebase-Konfiguration wurden nicht geändert. Alle Änderungen liegen in der nicht in die öffentliche App eingebundenen lokalen Phase-32-Vorschau und deren Emulator-Rules.

- **Koordination:** Eine aktive Gruppe kann die Hauptkoordination nicht ohne atomare Nachfolge verlassen. Eine Gruppe kann stattdessen im selben Batch geschlossen, aus dem Verzeichnis entfernt und die letzte Mitgliedschaft beendet werden. Geschlossene Gruppen gewähren keine Arbeitsbereichsrechte.
- **Verzeichnis:** Gruppenstatus, Projekt, Titel, öffentlicher Kurztext und Suchstatus müssen im selben Firestore-Commit mit dem Verzeichniseintrag übereinstimmen. Widerruf entfernt den Eintrag atomar. Für eine Gruppe kann ein eigener öffentlicher Kurztext vom geschützten Arbeitsbereich getrennt werden.
- **Mitgliedschaft:** Gruppenkennungen werden per `crypto.randomUUID()` erzeugt. Eine private Übersicht der eigenen Gruppenmitgliedschaften wird im Nutzer-Unterpfad atomar mit der Mitgliedschaft gespiegelt; dadurch kann die lokale Vorschau Gruppen nach erneutem Login wieder anzeigen.
- **Einwilligung:** Interessenbekundung und Einwilligungsereignis werden gemeinsam gespeichert. Eine widerrufene Interessenbekundung lässt sich nur mit einem neuen, atomar verknüpften Zustimmungsereignis reaktivieren. Ereignisse bleiben für gewöhnliche Nutzeraktionen unveränderbar.
- **Zugriffsgrenzen:** Arbeitsbereichszugriffe verlangen bestätigte E-Mail und aktive Mitgliedschaft. Beitrittsanfragen sind auf existierende, freiwillig veröffentlichte, offene Gruppen begrenzt. Betreiberkonten erhalten über Client-Rules keinen Zugriff auf private Gruppeninhalte; Meldungen bleiben auf meldende Person und ausdrücklich eingetragene Plattformverwaltung beschränkt.
- **Lokale Oberfläche:** eigene Interessen, Gruppenmitgliedschaften und Beitrittsanfragen werden angezeigt; Anfragen können zurückgenommen werden. Interessen lassen sich auswählen und erneut speichern. Arbeitsinhalte unterstützen Änderung, Status, Zuständigkeit und Fälligkeitsdatum. Für Verzeichnis, Mitgliedschaften, Anfragen und Arbeitsinhalte gibt es paginierte Abrufe. Die vorhandene Projektwerkstatt ist aus dem Arbeitsbereich verlinkt. Die Organisationsauswahl ist ausdrücklich nur eine Interessenangabe und verleiht keine Sonderrechte.
- **Export:** die lokale Vorschau erstellt einen paginierten JSON-Export mit Auth-Kontoangabe, eigenen Interessen, Gruppenrollen, eigenen Anfragen, selbst erstellten oder zugewiesenen Arbeitsinhalten, Einwilligungsereignissen und eigenen strukturierten Meldungen. Der Export lädt keine fremden Mitgliederlisten oder beliebigen Gruppeninhalte mit herunter.

Die Organisationsvertretung ist weiterhin nicht überprüft und erhält keine besonderen Rollen. Strukturierte Meldungen und der globale Not-Aus sind vorbereitet; eine personelle Betreiberzuständigkeit, Reaktionsfrist, belastbare Ratenbegrenzung und technische Überwachung sind nicht implementiert.

## Prüfstand

- **18 Firestore-/Auth-Emulator-Szenarien bestanden**, darunter atomare Zustimmung, Wiederaufnahme nach Widerruf, unberechtigte Beitrittsanfragen, Koordinationsübergabe und Schließung, Verzeichnis-Konsistenz, Authentifizierungsprüfung und Not-Aus.
- **455 bestehende Regressionstests bestanden.**
- **Produktionsbuild erfolgreich.** Das Artefakt enthielt 284 Dateien; 283 Einträge des Integritätsmanifests wurden geprüft, sechs JavaScript-Dateien auf Syntax und alle referenzierten Produktionsdateien geprüft. Die Phase-32-Vorschau blieb aus dem Pages-Artefakt ausgeschlossen.
- Der lokale Vorschau-Smoke-Test aus PR #83 ist ein HTTP-/Datei-Smoke-Test, kein Nachweis eines vollständigen Bedienungsablaufs.
- Ein vollständiger Browser-E2E-Ablauf mit drei Konten und drei Ansichtsgrößen wurde in dieser Arbeitsfassung **nicht** bestätigt. Der cloudbasierte Browser konnte `127.0.0.1:5173` aus seiner isolierten Umgebung nicht erreichen und blockierte anschließend den Zugriff auf die lokale URL. Deshalb werden weder Registrierung/Beitritt im Browser noch Tablet-/Smartphone-Darstellung als geprüft ausgegeben.
- Es wurden keine Firebase-Produktionsdaten geändert und keine Testmail versandt. Der Emulator-Test legte ein synthetisches Auth-Emulator-Konto an und löschte es anschließend wieder. Es wurden keine kostenpflichtigen Dienste eingerichtet.

## Offene Aufgaben und technische Grenzen

1. **Kontolöschung ist noch nicht implementiert.** Die Regeln halten Einwilligungsereignisse unveränderbar; Arbeitsinhalte und Meldungen enthalten außerdem Verknüpfungen zu Urheber-/Meldekonten. Vor der vollständigen Löschroutine muss festgelegt werden, welche Nachweise zu löschen, zu anonymisieren oder rechtmäßig aufzubewahren sind. Ein Löschlauf muss dann Gruppenübergabe/-schließung, Mitgliedschaftsspiegel, Anfragen, Aufgaben-Zuordnungen, Interessen, Meldungen, Nachweise und Firebase-Auth-Konto mit wiederaufnehmbaren Statusschritten erfassen. Die rechtliche Aufbewahrungsfrage bleibt offen; diese Fassung behauptet daher keine vollständige Löschung.
2. **Export:** Die Exportfunktion ist implementiert, aber im Browser nicht bedienungsgeprüft. Geschlossene Gruppen können wegen des Zugangsschutzes nicht nachträglich ausgelesen werden. Ein exportierter Datensatz kann daher nicht als produktionsreifer Art.-15-Export gelten.
3. **Drei-Konten-Ende-zu-Ende-Prüfung:** noch offen. Erwartete Abfolge: Registrierung/Interesse/Gründung/Veröffentlichung, zweite Person fragt an und wird aufgenommen, gemeinsame Bearbeitung und Aufgabenverteilung, drittes Konto wird abgewiesen, Stellvertretung und atomare Übergabe.
4. **Spark-Kontingente:** Firestore-Emulatoren erzwingen keine Anbieterquoten. Die Regeln begrenzen Abfragegrößen und Dokumentfelder; sie können eine angemeldete Person nicht an einer großen Zahl einzeln legitimer Schreibvorgänge hindern. Unterbrechungs-, Parallelkonflikt- und Quotenabschaltungstests sowie ein getesteter Wiederanlauf fehlen.
5. **Betrieb und Recht:** rechtliche Einordnung von Einwilligung und Aufbewahrung, Organisationsnachweis, Alters-/Schutzkonzept, Betreiber- und Moderationszuständigkeit, Verträge und Verfahren bei Missbrauch bleiben offen.
6. **Bisherige offene Prüfungen** bleiben offen: gültige produktive Firebase-E-Mail-Link-Anmeldung nach PR #76, frühere Testkonten, kontobezogene Liveprüfung und Tablet-/Smartphone-Sichtprüfung.

## Vorläufige Spark-Orientierung

Die nachfolgenden Rechenwerte sind ein **Planungsmodell**, keine Messung des Firebase-Projekts. Angenommen werden höchstens 25 Datensätze je Listenabruf, keine Datei-Uploads, keine Realtime-Listener und ein leerer Seiten-Cache. Ein vollständiges erstes persönliches Übersichtsabrufen kann bis zu 18 Interessen, 25 Gruppenmitgliedschaften und 25 Beitrittsanfragen lesen (bis zu 68 Dokumente). Das Öffnen eines Koordinationsbereichs kann zusätzlich bis zu ein Gruppendokument, eine eigene Mitgliedschaft, 25 Mitgliedschaften, 25 Arbeitsinhalte und 25 Anfragen laden (bis zu 77 Dokumente). Zusammengenommen sind das bis zu 145 zurückgegebene Dokumente pro vollständigem Besuch; interne Rule-Lookups, Wiederholungen, weitere Seiten und sonstige Nutzung sind darin nicht eingerechnet.

Bei 50.000 Dokument-Lesevorgängen pro Tag entspräche diese rein rechnerische Obergrenze etwa 344 Besuchen zu je 145 Dokumenten (50.000 / 145, abgerundet). Das ist keine erwartete reale Kapazität und kein Betriebsversprechen. Ein einfaches Beispiel mit 100 Interessen-Speicherungen (200 Schreibvorgänge), 100 privaten Gruppen (300 Dokumente), Veröffentlichung derselben 100 Gruppen (300 Dokumente), 100 Beitrittsanfragen plus Annahmen (bis zu 400 Dokumente) und 100 Arbeitsinhalten (100 Dokumente) läge bei rund 1.300 Firestore-Schreibvorgängen am Tag. Diese Annahme rechnet jede Dokumentoperation einzeln und enthält keine späteren Status- oder Bearbeitungsänderungen.

Für eine grobe Speicherordnung werden 4 KiB je Arbeitsinhalt einschließlich Metadaten angesetzt. 1 GiB geteilt durch 4 KiB ergibt rund 262.000 Dokumente, bevor Indexe, sonstige Datensätze und tatsächlicher Dokument-Overhead berücksichtigt werden. Damit ist keine Anzahl von Gruppen oder Nutzern ableitbar. Emulator-Ergebnisse belegen keine reale Spark-Quote.

Firebase nennt für Cloud Firestore im kostenlosen Umfang 1 GiB gespeicherte Daten, 50.000 Dokument-Lesevorgänge pro Tag, 20.000 Schreibvorgänge pro Tag, 20.000 Löschvorgänge pro Tag und 10 GiB ausgehenden Transfer im Monat; die täglichen Quoten werden laut Dokumentation ungefähr um Mitternacht Pacific Time zurückgesetzt. Der Spark-Plan kann die jeweilige Produktnutzung bei Überschreitung bis zum nächsten Monatszyklus abschalten. Quelle: [Cloud Firestore usage and limits](https://firebase.google.com/docs/firestore/quotas) und [Firebase pricing plans](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans), geprüft am 27. November 2026. Der aktuelle Tarif und Datenbankstatus des konkreten Projekts wurde nicht über die Firebase-Konsole geprüft.

## Nachtrag vom 27. November 2026

Die früheren offenen Punkte zur lokalen Kontolöschung, zum geschlossenen-Gruppen-Export und zum Drei-Konten-Browserablauf wurden im Folgeauftrag 32.2.2 weiterentwickelt und lokal mit Emulatoren sowie Playwright geprüft. Die älteren Aussagen oben dokumentieren den damaligen Zwischenstand. Für den aktualisierten Status, die Testgrenzen und die weiterhin offenen rechtlichen und organisatorischen Entscheidungen siehe [Arbeitsauftrag 32.2.2 – technischer Abschlussstand](auftrag32-2-2-abschluss.md). Keine produktive Firestore-Aktivierung oder Datenerhebung ist damit erfolgt.
