# Arbeitsauftrag 32.3 – Vorbereitung einer begrenzten Produktivfreigabe

**Stand:** 27. November 2026  
**Ausgangsstand:** PR #84, Merge-Commit `d8b33fb5a59f6ad5e5474a03baec24430cd392e6`  
**Arbeitsmodus:** ausschließlich lokale Auth-/Firestore-Emulatoren und synthetische Konten  
**Produktivstatus:** keine Firestore-Aktivierung, keine Beteiligungsdaten, keine Tarifänderung

Dieser Vermerk ergänzt `auftrag32-2-2-abschluss.md`. Der Konfliktschutz und die in diesem Auftrag beschriebenen lokalen Vorbereitungen aktualisieren die dort dokumentierte Lücke. Sie sind keine rechtliche Freigabe und keine Freischaltung.

## 1. Versionskonflikte gemeinsamer Arbeitsinhalte

Jeder neue Arbeitsinhalt erhält `version: 1`. Änderungen erfolgen in einer Firestore-Transaktion, vergleichen die Version des beim Öffnen angezeigten Datensatzes und erhöhen sie bei Erfolg genau um eins. Die Rules weisen Versionssprünge, Rückschritte und Updates mit einer veralteten Version zurück. Bei Konflikt bleibt der nicht gespeicherte Formularentwurf erhalten. Erst nach ausdrücklicher Betätigung kann die Person den aktuellen Stand neu laden; die Oberfläche weist darauf hin, dass dies den vorherigen Entwurf ersetzt.

Ein Playwright-Ablauf hält Konto B im Browser angemeldet und meldet Konto A währenddessen in einer zweiten Firebase-SDK-App gegen denselben Auth- und Firestore-Emulator an. A speichert eine neuere Version. B versucht anschließend mit der alten Version zu speichern, erhält die Konfliktwarnung, behält seinen Entwurf und kann A's aktuellen Stand laden. Danach speichert B eine neue Änderung. Diese Prüfung nutzt keine zwei Tabs desselben Chromium-Prozesses und keine produktiven Firebase-Endpunkte.

## 2. Zielarchitektur innerhalb der bestehenden Website

Es wird keine zweite Website und kein paralleles Konto eingeführt. Die vorhandene Website bleibt statische GitHub-Pages-Anwendung. Die 18 Projektideen bleiben die feste Inhaltsquelle. Spätere Links von einer Projektidee würden in derselben Website in den Beteiligungsbereich mit vorausgewählter Projekt-ID führen. Navigation und Kontodienst werden in die bestehende Gestaltung integriert.

| Bereich | Produktionsvorschlag | Zugriff und Grenze |
| --- | --- | --- |
| Identität | Bestehendes Firebase Authentication-Projekt und vorhandene Konten, gleiche Firebase-UID; verifizierte E-Mail als Mindestvoraussetzung | Authentifizierung ist keine Organisationsprüfung und verleiht keine Gruppen- oder Betreiberrolle |
| Interessen | `users/{uid}/interests/{projectId}` plus unveränderliches Ereignis je Einwilligungszweck | Nur eigene UID; keine globale Liste interessierter Personen |
| Verzeichnis | `groupDirectory/{groupId}` mit freiwillig veröffentlichtem, feldbegrenztem Kurztext | Öffentlich lesbar; keine UIDs, Kontaktangaben oder Mitgliederlisten |
| Gruppe | `groups/{groupId}`, `members/{uid}`, `joinRequests/{uid}`, `workItems/{itemId}` | Aktive Gruppenmitgliedschaft, festgelegte Rollen, serverseitige Rules-Prüfung jeder Abfrage/Änderung |
| Persönlicher Bereich | Meine Interessen, Gruppen/Rollen (auch frühere), Anfragen, eigene/zugewiesene Aufgaben, Einwilligungsereignisse, Export- und Beendigungswege | In Produktion ausschließlich Firebase-Client-SDK mit UID-eigenen, paginierten Abfragen und erforderlichen Reverse-Index-Dokumenten; kein Emulator-Admin-Leser |
| Missbrauchsmeldung | Strukturierte Meldekategorien und begrenzte Referenz auf Gruppe/Inhalt | Nur meldende Person und befugte Plattformbearbeitung; Zugriff der Gruppe auf Meldungen bleibt ausgeschlossen |
| Plattformschalter | `platformConfig/participation.enabled`, standardmäßig `false`; jede Beteiligungs-Rule prüft diesen Zustand | Änderung nie durch Webnutzer; bei `false` keine Beteiligungszugriffe |

Der lokale persönliche Bereich benutzt für die vollständige historische Vorschau aktuell den localhost-gebundenen Emulator-Admin-Leser. Dieser Weg darf nicht in den öffentlichen Bundle gelangen. Eine produktive Oberfläche braucht einen getrennten Client-Gateway mit geeigneten eigenen Indexen/Anfragen. Die bestehenden `verify-dist`-Prüfungen müssen lokale Dateien weiterhin aus dem Pages-Artefakt ausschließen.

### Privilegierte Funktionen und Spark-Grenze

Firestore Security Rules können eigene Daten, Mitgliedschaften und erlaubte Gruppenaktionen kontrollieren. Sie sind keine vertrauenswürdige Plattformverwaltung. Firebase dokumentiert, dass privilegierte Server-/Admin-SDKs Firestore Rules umgehen. Deshalb dürfen Admin-SDK, Operator-Token und Servicekontoschlüssel weder im Browser noch in Git eingecheckt werden.

Kontolöschung über geschlossene Gruppen, bereichsübergreifender Export, Wiederherstellung und Missbrauchsprüfung, Kontosperre, Gruppensperre, globale Notabschaltung, Organisationsnachweis sowie Vergabe einer Plattformrolle benötigen vertrauenswürdige Betreiberzugriffe. Solange Spark verbindlich ist und keine kostenpflichtigen Dienste freigegeben sind, ist die sichere Zwischenlösung eine manuell gestartete, dokumentierte Operator-Prozedur auf einem berechtigten Administrationsgerät mit kurzlebiger Anwendungssitzung/ADC, minimalen IAM-Rechten, Vorschau der betroffenen Datensätze, expliziter Bestätigung und Auditvermerk. Keine Zugangsdaten werden auf Pages bereitgestellt. Firebase weist für Cloud Functions produktive Bereitstellung einen Blaze-Tarif voraus; ein solcher Server wird daher nicht stillschweigend eingeführt.

Wenn eine verlässliche automatisierte Betreiberverwaltung oder belastbare serverseitige Ratenbegrenzung vor öffentlichem Start nötig ist, ist Spark-only ein Architekturhindernis. Dann muss ein separat zu prüfender kostenfreier Betreiberprozess gefunden oder eine spätere ausdrückliche Kostenentscheidung getroffen werden. Ein Client-Not-Aus allein ist kein Schutz gegen einen berechtigten missbräuchlichen Client.

### Schutz- und Verbrauchsgrenzen

- Jede Datenbankregel startet geschlossen. Das produktive `enabled` bleibt `false`, bis die Freigabeprozesse abgeschlossen sind.
- Keine öffentlichen Mitgliederlisten, Direktnachrichten, Anhänge, Gesundheits-/Krisenangaben oder offenen Kommentare im ersten Umfang.
- Verzeichnis nur per Opt-in, mit Feld-Allowlist, Textgrenzen, höchstens 25 Ergebnisse je Seite. Private Arbeitsdaten bleiben auf aktive Mitglieder begrenzt.
- Keine globalen Echtzeit-Listener; bewusste Abrufe, kurze Gruppenlisten, einheitliche Paginierung und kleine Dokumente.
- Die offizielle Preisübersicht nennt für Firestore im Spark-Kontingent derzeit 1 GiB Speicherung, 50.000 Lesevorgänge/Tag, 20.000 Schreibvorgänge/Tag und 20.000 Löschvorgänge/Tag (neben einem Transferkontingent). Diese Limits sind kein Verfügbarkeitsversprechen. Bei Überschreitung kann die Nutzung des Produkts bis zur nächsten Kontingentperiode aussetzen.
- Nutzung muss in der Firebase-Konsole beobachtet werden. Ohne serverseitige Begrenzung kann ein bestätigtes Konto viele legitime Schreibvorgänge auslösen; Rules verhindern unberechtigte Datenzugriffe, aber keine verlässliche globale Missbrauchs- oder Verbrauchsbegrenzung.
- Keine Firestore-Datenbank, Indexe oder produktive Beteiligung wurden in diesem Auftrag aktiviert.

## 3. Betreiber- und Gruppenaufgaben

| Selbstorganisierte Gruppe | Plattformbetreiber |
| --- | --- |
| Mitglieder freiwillig aufnehmen; eigene Stellvertretung/Koordination führen | Technische Konfiguration und Sicherheit der Plattform |
| Projekte, Aufgaben, Termine, Partnersuche und Finanzierung selbst planen | Datenschutz-/Auskunfts-/Löschanfragen über einen benannten Weg bearbeiten |
| Interne Konflikte bearbeiten und bei fehlender Koordination schließen/übergeben | Strukturierte Missbrauchsmeldungen sichten, bei Bedarf Inhalt/Gruppe technisch sperren |
| Inhalte datensparsam halten und selbst veröffentlichen/entfernen | Sicherheitsvorfälle, Ausfälle und Notabschaltung dokumentieren |

Die Plattformbetreiberrolle beinhaltet keine laufende Projektleitung, Teilnehmendenvermittlung oder persönliche Gruppenbetreuung. Eine öffentliche Funktion braucht dennoch eine konkret benannte Person und Vertretung für unvermeidbare Betreibermaßnahmen. Ohne diese Kapazität sollte die Beteiligungsfunktion geschlossen bleiben. Als Vorschlag: eine einfache Meldebox ohne Erwartung einer Sofort-/24-Stunden-Bearbeitung, ein veröffentlichter Reaktionsweg, benannte Vertretung und eine klare Möglichkeit, die Plattformfunktion bis zur Bearbeitung vollständig abzuschalten. Die tatsächliche Frist und Zuständigkeit sind organisatorisch zu beschließen.

## 4. Datenschutz- und Betriebsentscheidungsvorlage

Die folgenden Punkte trennen geltende Rechtsanforderungen von noch zu bewertenden Fragen und Gestaltungsvorschlägen. Das Dokument stellt keine Rechtsberatung oder abschließende rechtliche Einordnung dar.

| Thema | Belegte Anforderung / offene Frage | Empfehlung zur Betreiberentscheidung |
| --- | --- | --- |
| Zweck und Rechtsgrundlage | Für jeden bestimmten Verarbeitungszweck ist eine Rechtsgrundlage zu dokumentieren. Einwilligung muss, sofern darauf gestützt, nachweisbar sein und widerrufen werden können. Art. 7 DSGVO regelt Nachweis und Widerruf; Art. 17 enthält Löschrechte samt Ausnahmen. | Bevorzugt zweckbezogene getrennte Vorgänge: Interessenbekundung, optionale öffentliche Gruppenbeschreibung, Mitgliederarbeitsbereich. Für jeden Zweck Rechtsgrundlage, erforderliche Felder und Löschfall festlegen; keine pauschale Sammelzustimmung.
| Einwilligungsnachweis | Wenn Einwilligung Rechtsgrundlage ist, liegt der Nachweis beim Verantwortlichen. Weder Technik noch Rechtsgrundlage schreiben ohne Fallprüfung eine unbegrenzte Speicherung vor. | Ereignis minimal halten: UID/Bezug, Zweck, Text-/Hinweisversion oder Hash, Entscheidung und serverseitiger Zeitpunkt. Keine unnötige IP-/User-Agent-Aufzeichnung. Pro Zweck Retentions-/Anonymisierungsweg festlegen. Bis dahin keine produktive Erhebung.
| Löschen, Anonymisieren, Aufbewahren | Die zulässige Behandlung hängt von Zweck, Rechtsgrundlage, Aufbewahrungspflichten und Rechte Dritter ab. Gemeinsame Gruppeninhalte enthalten ggf. personenbezogene Referenzen mehrerer Personen. | Kategorien getrennt entscheiden: Kontoprofil/Interesse löschen; persönliche Aufgabenbezüge entfernen/neutralisieren; gemeinsame Inhalte mit Rechte-/Kontextprüfung erhalten oder anonymsieren; Einwilligungsbelege nicht automatisch aufbewahren. Kein produktives `retain` ohne konkrete Rechtsgrundlage und Frist.
| Altersgrenze/Schutz | DSGVO Art. 8 betrifft die Einwilligung bei direkt Kindern angebotenen Diensten, soweit Verarbeitung auf Einwilligung gestützt ist; für Deutschland nennt die DSGVO dort 16 Jahre. Das ist keine allgemeine Altersgrenze für jede Verarbeitung und keine allgemeine Mindestteilnahmegrenze. Schutzkonzept und konkreter Betrieb sind offen. | Für eine erste begrenzte Einführung Minderjährige ausschließen, bis Altersprüfung, Schutzkonzept, Meldewege und rechtliche Einordnung tragfähig sind. Diese Altersgrenze wäre eine Betreiberentscheidung, keine Behauptung einer gesetzlichen Pflicht. Keine Geburtsdaten erheben, sofern sie nicht nachweislich erforderlich sind.
| Organisationen | Kontotyp/Email beweist weder juristische Person noch Vertretungsbefugnis. Welche Organisationen zugelassen und wie sie geprüft werden, ist offen. | Start mit Einzelkonten und Gruppen, ohne besondere Organisationsrechte. Organisationsvertretung nur nach manuellem Nachweisprozess; keine automatische Rechtevergabe aufgrund Selbstauswahl.
| Transparenz/Teilnahmeregeln | Datenschutzhinweise, Dienstbeschreibung und Verfahrenswege müssen dem tatsächlichen Betrieb entsprechen. Anwendbarkeit der Impressumspflicht nach DDG §5 und Zugriff/Speicherung auf Endgeräten nach TDDDG §25 sind konkret zu prüfen. | Öffentliche Datenschutzerklärung und Teilnahmebedingungen vor Start an exakt aktivierte Felder, Firebase-Flüsse, Kontakt- und Aufbewahrungswege anpassen. Bestehende Hinweise dürfen nicht eine noch deaktivierte oder anders konfigurierte Funktion beschreiben.
| Firebase-Rollen/Vertrag/Standort | Firebase beschreibt Google grundsätzlich als Auftragsverarbeiter in diesem Verhältnis; DPA/Terms, konkrete Dienstbedingungen, Projektkonfiguration, Region und Unterauftragsverarbeiter müssen trotzdem für das tatsächlich verwendete Projekt bewertet werden. | Datenschutzinformation und erforderliche Vertragsunterlagen/Region vor der Aktivierung prüfen. Firestore-Region im Projekt ist hier nicht durch Konsolennachweis bestätigt.
| Auskunft/Widerruf/Löschung | Zugriff auf eigene aktuelle Daten kann Rules-seitig UID-begrenzt werden. Daten aus geschlossenen Gruppen, globale Einwilligungsereignisse und Löschung nach Kontoentfernung brauchen einen sicheren Rückverweis-/Operatorprozess. | Vor Start getestete Anfragenstrecke und Fristen, Verantwortliche, Vertretung, Export und nachweisbare Ausführung festlegen. Ohne vertrauenswürdige Betreiberumgebung keine „vollautomatische vollständige Löschung“ versprechen.
| Meldungen/Moderation | Die Plattform kann sich nicht auf Selbstorganisation berufen, um erforderliche Betreiberpflichten zu ignorieren. Konkrete Pflichten und Bearbeitungsfristen sind nach Plattform-/Dienstmodell rechtlich zu bewerten. | Minimale strukturierte Meldung, keine freie sensible Schilderung, klare Zuständigkeit und Eskalation. Administratoren können eine Gruppe/einen Verzeichniseintrag sperren; jede Maßnahme erhält Zeit, Grundkategorie und Bearbeitungsstatus.
| Folgenabschätzung | DSGVO Art. 35 verlangt eine Datenschutz-Folgenabschätzung, wenn eine Verarbeitung voraussichtlich ein hohes Risiko verursacht. Ob das hier zutrifft, ist noch festzustellen. | Dokumentierte DPIA-Vorprüfung erstellen; bei festgestelltem hohen Risiko die Folgenabschätzung vor Start durchführen. Nicht pauschal als bereits erforderlich oder erledigt bezeichnen.
| Endgerätespeicher | TDDDG §25 behandelt Speicherung/Abruf auf Endeinrichtungen; notwendige Ausnahmen sind an konkrete Voraussetzungen gebunden. Firebase Auth kann persistenten Browser-Speicher verwenden. | Auth-Persistenz und notwendige lokale Speicherung je Funktion prüfen, Cookie-/Speicherhinweise aktualisieren und erforderliche Wahlmöglichkeiten umsetzen. Keine Aussage über Anwendbarkeit der Ausnahme ohne Einzelfallprüfung.

**Mögliche Einwilligungsstruktur (zur rechtlichen Prüfung, nicht veröffentlichungsfertig):** getrennte Schalter für private Interessensbekundung/Arbeitsbereich und freiwillige Veröffentlichung eines Gruppen-Kurztextes. Die Oberfläche nennt jeweils Zweck, Sichtbarkeit, Widerruf, Aufbewahrung, erforderliche Kontoangaben und die Tatsache, dass Gruppen selbstorganisiert und nicht durch den Betreiber betreut werden. Ein Pflichttext darf keine Wahlfreiheit vortäuschen.

## 5. Begrenzte Einführungsphasen

### Phase 0 – abgeschlossenes lokales Vorbereitungsziel

Synthetische Konten, Emulatorregeln und lokale Betreiberwerkstatt. Nicht öffentlich verlinkt, kein echter Firebase-Datensatz, kein produktiver Einwilligungsnachweis.

### Phase 1 – empfohlener erster öffentlicher Umfang (noch gesperrt)

Nach Entscheidungen und separater Freigabe: Interessenbekundung; freiwilliges Gruppenverzeichnis; Gruppe erstellen und Beitrittsanfragen; beschränkter geschützter Bereich mit Konzept-/Aufgabenfeldern; selbstständige Beendigung; strukturierte Meldungen. Keine Anhänge, privaten Direktnachrichten, öffentlichen Mitgliederlisten, sensiblen Angaben oder automatischen Projektbetreuung. Das ist ein funktionsfähiger Kern statt einer Vollplattform.

Vor dieser Phase müssen Kosten-/Quota-, Datenschutz-, Lösch-, Betreiber- und Missbrauchsprozesse sowie die Vertrauensgrenze der Adminaktionen abschließend vorbereitet sein. Nach der derzeitigen Freigabe darf die Produktivdatenbank dennoch nicht aktiviert werden.

### Phase 2 – erst nach Erfahrungsprüfung

Auf Grundlage von Nutzung, Meldungen und Betriebsaufwand einzelne weitere Funktionen bewerten, etwa organisatorische Verknüpfungen oder zusätzliche Projektfortschrittswerkzeuge. Nur nach gesonderter Zweck-/Datenschutzprüfung und ohne automatische Erweiterung von Datensammlung oder Sichtbarkeit.

## 6. Abschließende Freigabeübersicht

| Kategorie | Stand |
| --- | --- |
| Technisch abgeschlossen | Lokaler Emulatorbetrieb; versionierter Arbeitsinhalt; Rollen/Anfragen/Verzeichnis, Export-/Löschsimulation, Betreiberwerkzeuge und Not-Aus aus PR #84; persönliche Vorschau; Architektur- und Entscheidungsvorlage in diesem Dokument. |
| Automatisiert geprüft | 455 Regressionstests; 18 Auth-/Firestore-Rules-Szenarien; 4 Betreiber-/Lösch-Emulatorprüfungen; Playwright-E2E mit drei Konten (einschließlich parallel angemeldeter A/B, veraltetem Versionsstand, Entwurfserhalt und Neuladen); Viewportbreiten 1363, 768 und 390 px; Produktionsbuild mit 284 Dateien, 6 JavaScript-Syntaxprüfungen, 283 Manifest-/Root-Datei-Abgleichen. |
| Im lokalen Browser erfolgreich geprüft | Der vollständige Beteiligungsablauf lief mit Auth- und Firestore-Emulatoren. Unerlaubter Zugriff durch C wurde abgewiesen. Das einzig zugelassene 404 ist die erwartete erste Emulator-Abfrage eines noch nicht bestehenden Lösch-Checkpoints; andere HTTP-Fehler lassen den Browserlauf fehlschlagen. Dies ist keine produktive Auth-Anmeldung oder öffentliche Beteiligungsseite. |
| Noch technisch erforderlich | Vor Produktion: produktiver UID-sicherer persönlicher Gateway statt Emulator-Admin-Leser; vertrauenswürdige Adminprozedur, Replay-/Rate-/Quota-Überwachung, konkrete Region/Rules/Indexe, Produktionsnahe End-to-End-/Not-Aus-Übung. Keine dieser Änderungen wird in diesem Auftrag produktiv aktiviert. |
| Betreiberentscheidung erforderlich | Verantwortliche Person plus Vertretung, Meldereaktionsweg/-frist, Freigabe des Startumfangs und Alters-/Organisations-/Moderationsregeln. |
| Rechtlich zu klären | Rechtsgrundlagen je Zweck, Retention/Einwilligungsbelege, Löschung vs. Anonymisierung gemeinsamer Inhalte, Firebase-DPA/Region/Rollen, DDG/TDDDG, Teilnahmebedingungen, Minderjährigenschutz und DPIA-Vorprüfung. |
| Firebase-Konfiguration | Nach späterer Freigabe: zulässige Web-Origin/Redirect-Konfiguration, Firestore-Region/Indexes/Rules, Auth-E-Mail-Verifikation und Spark-Kontingentbeobachtung. Bis dahin keine neue produktive Konfiguration. |
| Für Produktivfreigabe nötig | Abgeschlossene Rechts-/Organisationsentscheidungen, zugänglicher Auskunfts-/Löschweg, erprobte minimale Betreiber-/Notfallprozedur ohne öffentliches Admin-Geheimnis, Rules-/Browser-/Abfrageprüfung, passende Datenschutzhinweise/Teilnahmeregeln, gesonderte Aktivierungsfreigabe und danach kontrollierte Erstfreischaltung. |

## 7. Rechtsquellen und technische Herstellerquellen

Geprüft am **27. November 2026**. Die Quellen belegen die unten benannten gesetzlichen bzw. Produktangaben; sie entscheiden nicht automatisch deren Anwendbarkeit auf den konkreten Betrieb.

- [DSGVO, insbesondere Art. 6, 7, 8, 17, 30, 32 und 35](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=de)
- [DDG § 5 – Allgemeine Informationspflichten](https://www.gesetze-im-internet.de/ddg/__5.html)
- [TDDDG § 25 – Schutz der Privatsphäre bei Endeinrichtungen](https://www.gesetze-im-internet.de/tdddg/__25.html)
- [Firestore Preis- und Nutzungskontingente](https://firebase.google.com/docs/firestore/pricing)
- [Firebase Spark-/Blaze-Tarife und Kontingente](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans)
- [Firebase Security Rules und Emulator](https://firebase.google.com/docs/rules)
- [Firestore Server-Clientbibliotheken und IAM](https://firebase.google.com/docs/firestore/security/iam)
- [Cloud Functions Tarifvoraussetzungen](https://firebase.google.com/docs/functions/quotas-pricing)
- [Firebase Datenverarbeitungsbedingungen](https://firebase.google.com/terms/data-processing-terms)
- [Firebase Datenschutz und Verantwortlichkeiten](https://firebase.google.com/support/privacy)
