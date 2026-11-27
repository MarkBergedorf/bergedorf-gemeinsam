# Arbeitsauftrag 32.2 – lokale technische Umsetzung

**Stand:** 27. November 2026  
**Status:** lokale Emulator-Implementierung und Vorschau; nicht produktiv aktiviert  
**Grundlage:** `auftrag32-phase2-3-technikkonzept.md`; Arbeitsauftrag 32.2 erweitert es um ein freiwilliges, nicht personenbezogenes Gruppenverzeichnis.

## Ergebnis

Die isolierte lokale Grundlage liegt in `frontend/`. Sie benutzt das Demo-Projekt `demo-bergedorf-gemeinsam`; `.firebaserc` enthält keine produktive Projektkennung. Auth- und Firestore-Endpunkte der Vorschau sind fest auf `127.0.0.1` gebunden. Das Start- und Seed-Skript bricht ab, wenn Projektkennung oder Emulator-Host abweichen. Firestore-Zugriffe bleiben durch eine serverseitige, im Emulator geladene Regeldatei geschlossen; die Beteiligungsfunktion startet nur, wenn ein nicht durch Clientcode veränderbarer Konfigurationsdatensatz vorhanden und aktiviert ist. Fehlt er, ist der Zugriff gesperrt.

Die separate Vorschauseite liegt unter `frontend/local/phase32/` und wird nicht von der öffentlichen App importiert. Sie ist über `pnpm run phase32:preview` lokal auf `http://127.0.0.1:5173/local/phase32/index.html` erreichbar. Sie erstellt synthetische Nutzer im Auth-Emulator; die Bestätigung wird ausschließlich am Auth-Emulator simuliert. Interests, Gruppen, Mitgliedschaften, Beitrittsanfragen und Arbeitsinhalte gehen nur an den lokalen Firestore-Emulator. Der Produktionsbuild prüft zusätzlich, dass der Verzeichnisbaum `local/phase32/` nicht in das Pages-Artefakt gelangt.

Die Vorschau enthält eine Mehrfachauswahl zu allen sieben Beteiligungsformen für sämtliche 18 statischen Projekt-IDs, eigenes Interesse speichern/widerrufen, einen gefilterten Gruppenindex mit maximal 25 Einträgen, private Beitrittsanfragen, Gruppengründung mit erster Koordination, ausdrückliche optionale Veröffentlichung, Annahme/Ablehnung, Stellvertretungs- und Koordinationsübergabe, Austritt, Statuswahl, Konzept-/Aufgaben-/Ressourcen-/Finanzierungs-/Partner-/Entscheidungseinträge, strukturierte Testmeldungen sowie einen begrenzten Export eigener Interessen und Einwilligungsereignisse.

Öffentliche Gruppeneinträge enthalten ausschließlich Projekt-ID, Gruppentitel, kurze Beschreibung, Gruppenstatus, Mitwirkungssuche und Aktualisierungszeit. E-Mail-Adressen und erkennbare Telefonnummern werden in Titel/Kurzbeschreibung durch die Rules abgewiesen. Das ersetzt keine Textmoderation und erkennt nicht zuverlässig jede personenbezogene oder sensible Information. Freitexte innerhalb geschlossener Arbeitsbereiche werden begrenzt, aber nicht semantisch auf Gesundheits- oder Krisendaten untersucht; die Vorschau weist auf das Verbot solcher Eingaben hin.

## Rollen und Datengrenzen

- Firestore-Schreibzugriffe setzen eine im Token bestätigte E-Mail-Adresse voraus. Die Bestätigung allein begründet keine Gruppen- oder Verwaltungsrechte.
- Eine Gruppenkoordination wird durch die atomar angelegte erste Mitgliedschaft bestimmt. Stellvertretung und einfache Mitgliedschaft sind getrennte Rollen. Die primäre Koordination kann Rollen nur in der eigenen Gruppe ändern und die Verantwortung auf ein aktives Mitglied übertragen.
- Beitrittsanfragen sind nur für die betroffene Person und Gruppenkoordination/Stellvertretung sichtbar. Annahme und Mitgliedschaft werden atomar geschrieben.
- Gruppenräume und Mitgliedsverzeichnisse sind auf aktive Gruppenmitglieder beschränkt. Öffentliche Projektdaten werden nicht mit privaten Teilnehmerdaten vermischt.
- Der clientseitige Kontotyp „Organisation“ ist kein Organisationsnachweis. Ein verifiziertes Organisationsrollenmodell ist noch nicht implementiert; keine Nutzerangabe kann damit Sonderrechte vergeben.
- `platformStaff` kann vom Webclient weder gelesen noch verändert werden. Eine produktionsreife Betreiberverwaltung für Beschwerden und Auskunft ist nicht vorhanden.
- Einwilligungsereignisse sind im Emulator zweck- und versionsgebunden, serverzeitgestempelt und unveränderbar. Die lokale Protokollierung ist kein vollständiger rechtlicher Nachweis.

## Lokale Prüfungen

Mit `pnpm run test:phase32` startet Firebase ausschließlich mit dem Demo-Projekt und führt Emulator-Tests aus. Die derzeitigen 15 Szenarien prüfen:

1. eigene Mehrfach-Interessen, fremde UID, nicht bestätigte und abgemeldete Zugriffe;
2. Projekt-Allowlist, Feldbegrenzung und atomare Gruppengründung;
3. Zugriffsschutz für Gruppenräume, Mitglieder, Anfragen und Arbeitsinhalte;
4. private Beitrittsanfragen, Annahme mit gleichzeitiger Mitgliedschaft und Rollenwechsel;
5. Verhinderung einer unberechtigten Selbsternennung, Trennung von Stellvertretung und Hauptkoordination sowie Übergabe und Austritt nach einer Übergabe;
6. öffentliches Opt-in-Verzeichnis und Zurückweisung typischer E-Mail-/Telefonfelder;
7. unveränderbare Einwilligungsereignisse und strukturierte Missbrauchsmeldungen;
8. ausgeschalteter/fehlender Not-Aus-Schalter und begrenzte Gruppenabfragen;
9. synthetische Auth-Registrierung, Emulator-Bestätigung und anschließend erlaubte Firestore-Aktion.

`pnpm run smoke:phase32:preview` startet beide Emulatoren, legt die lokale Demo-Konfiguration über den Rules-Testzugriff an und fordert die lokale HTML-Seite sowie das transformierte Emulator-JavaScript per HTTP ab. Der Smoke-Test war erfolgreich. `pnpm test` bestand zusätzlich unverändert alle **455 bestehenden Regressionstests**. `pnpm build` war erfolgreich und `verify-dist.mjs` prüfte 283 Einträge im SHA-256-Manifest einschließlich JavaScript-Syntax, referenzierter Dateien und Ausschluss der lokalen Vorschau. Es wurden keine vorhandenen öffentlichen App-Routen oder Produktions-Firebase-Dateien geändert.

Bei den absichtlich abgewiesenen Emulatorzugriffen protokolliert der Firestore-Emulator erwartete `PERMISSION_DENIED`-Meldungen; die jeweiligen Tests erwarten genau diese Zurückweisung.

## Noch nicht abgeschlossen

Die lokale Umsetzung ist eine geprüfte technische Vorbereitung, noch keine vollständige Phase-2/3-Produktlösung. Vor jeder produktiven Verbindung fehlen mindestens:

- vollständiger Auskunfts-/Exportumfang einschließlich aller Gruppenmitgliedschaften und Arbeitsinhalte;
- robuste, transaktionssichere Kontolöschung mit Behandlung aller Unterkollektionen, Gruppenschließung oder Übergabe und verbleibenden Einwilligungsnachweisen;
- operative Bearbeitung strukturierter Meldungen, eine benannte Zuständigkeit, Reaktionsfristen und ein produktiver Sperrprozess;
- Verifikation von Organisationsvertretungen sowie Alters- und Schutzkonzept;
- belastbare Missbrauchs-/Ratenbegrenzung und Überwachung realer Spark-Kontingente; Rules begrenzen Abfragegrößen und Texte, aber nicht die Zahl legitimer Schreibvorgänge;
- vollständige Konflikt-, Netzwerkausfall- und Kontingentüberschreitungstests; Firestore-Emulatoren simulieren diese Anbietergrenzen nicht;
- fachliche und rechtliche Entscheidung zu Rechtsgrundlage, Einwilligungsnachweis, Aufbewahrung/Löschung, Verträgen, Betreiberpflichten und Textmoderation;
- erneute gültige produktive E-Mail-Link-Anmeldung nach PR #76, Status früherer Testkonten, kontobezogene Browserprüfungen und Tablet-/Smartphone-Sichtprüfung bleiben gemäß bisherigem Stand offen.

Produktives Firestore, Produktionsdaten, kostenpflichtige Dienste, Blaze und Phasen 2/3 bleiben deaktiviert. Die im Browser vorhandene produktive Authentifizierung wurde nicht verändert. Die öffentliche Website wurde durch diesen Auftrag weder neu veröffentlicht noch in ihrer Oberfläche angepasst.
