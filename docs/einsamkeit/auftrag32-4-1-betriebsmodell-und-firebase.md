# Arbeitsauftrag 32.4.1 – Betriebsmodell, Datenschutzentwürfe und Firebase-Vorbereitung

Stand: 27. November 2026
Status: Arbeitsentwurf zur Betreiberentscheidung und externen Rechtsprüfung; keine Produktionsfreigabe

## Technischer Stand und Abgrenzung

Die Website-Erweiterungen können veröffentlicht werden, während Beteiligung gesperrt bleibt. Eine spätere Nutzung erfordert sowohl das Build-Flag VITE_PARTICIPATION_ENABLED als auch den Firestore-Datensatz platformConfig/participation mit enabled=true. Die fehlende Firestore-Freigabe betrifft nicht die Veröffentlichung des statischen, gesperrten Website-Codes.

Die vorhandene Firebase-Web-App-Konfiguration in frontend/.env.production verweist auf das bestehende Projekt bergedorf-gemeinsam und dient der vorhandenen Firebase-Authentication. Diese Web-App-Werte sind öffentliche Browserkonfiguration. frontend/firebase.json verweist auf firestore.rules und firestore.indexes.json. Eine produktive Datenbank, Datenbankregion, Rules-/Index-Bereitstellung oder IAM-Rollen sind im Repository nicht nachgewiesen. Der aktuelle Console-Zustand kann aus Git allein nicht verifiziert werden.

Die Betreiber-CLI nutzt Application Default Credentials auf einem vertrauenswürdigen Rechner. Das Admin SDK umgeht Firestore Security Rules und authentifiziert sich über Google IAM. Deshalb ersetzen die Client-Regeln keine minimalen IAM-Berechtigungen. Es gibt keinen Serverdienst, keine Functions, keinen Speicher für Anhänge und keinen kostenpflichtigen Überwachungsdienst.

## Vorgeschlagenes Startmodell

1. Teilnahme ist zunächst nur für volljährige Personen vorgesehen. Die bestätigte E-Mail-Adresse bestätigt den Zugriff auf ein Postfach, nicht Alter oder bürgerliche Identität.
2. Teilnahme setzt ein bestehendes Konto mit bestätigter E-Mail-Adresse voraus.
3. Eine Gruppenbeschreibung wird nur nach freiwilliger Einzelentscheidung der Gruppe und Bestätigung der konkret angezeigten Beschreibung öffentlich.
4. Es gibt kein öffentliches Mitgliederverzeichnis. Interne Mitglieder, Anfragen und Arbeitsbereiche sind nur berechtigten Gruppenmitgliedern zugänglich.
5. Es gibt keine privaten Direktnachrichten und keine Datei- oder Bildanhänge.
6. Gesundheitsdaten werden nicht gezielt abgefragt. Angaben über Gesundheit, intime Lebensumstände, politische Meinung, Religion oder andere sensible Umstände sind nicht einzutragen. Freie Texteingaben können solche Angaben dennoch unbeabsichtigt enthalten.
7. Eine bloße Selbstauskunft als Vereins- oder Organisationsvertretung begründet weder ein verifiziertes Organisationskonto noch besondere Rechte.
8. Gruppen organisieren Inhalte, Termine, Aufgaben und interne Koordination selbst. Betreiberrechte dienen nur notwendigen technischen, datenschutzrechtlichen und sicherheitsbezogenen Aufgaben.
9. Die Plattform weist keine besonderen politischen oder organisatorischen Rechte zu.

**Entscheidungsvorschlag zur Altersgrenze:** Vor jeder Teilnahme eine ausdrückliche Erklärung „Ich bin mindestens 18 Jahre alt“ einholen. Die E-Mail-Bestätigung darf nicht als Altersnachweis bezeichnet werden. Eine Ausweisprüfung ist nicht vorgesehen. Falls eine belastbarere Prüfung erforderlich ist, darf kein Start erfolgen, bis eine verhältnismäßige Methode festgelegt und geprüft wurde.

## Entwurf – Teilnahmebedingungen

**Arbeitsfassung, nicht veröffentlichungsreif ohne Betreiber- und Rechtsprüfung**

### Zweck und Teilnahme

Die Arbeitsgruppen unterstützen die eigenständige Zusammenarbeit an den auf der Plattform dargestellten Projektideen für Bergedorf. Die Teilnahme ist freiwillig und setzt ein persönliches Konto mit bestätigter E-Mail-Adresse sowie die bestätigte Volljährigkeit voraus. Die E-Mail-Bestätigung belegt nur den Zugriff auf das Postfach.

### Gruppen und Inhalte

Arbeitsgruppen organisieren ihre interne Zusammenarbeit selbst. Eine freiwillig veröffentlichte Gruppenbeschreibung ist öffentlich; interne Mitglieder, Beitrittsanfragen, Aufgaben und Arbeitsinhalte sind nicht öffentlich. Es gibt keine privaten Nachrichten und keine Dateianhänge. Gruppenmitglieder geben interne Inhalte nicht außerhalb der Gruppe weiter, soweit keine gesetzliche Pflicht oder ein erforderlicher Schutz- oder Rechtsdurchsetzungsfall entgegensteht.

Bitte veröffentlichen Sie keine Angaben über Gesundheit, intime Lebensumstände, Kontaktdaten oder sensible Informationen über andere Personen. Verwenden Sie keine privaten Namen, E-Mail-Adressen, Telefonnummern oder Anschriften in öffentlichen Beschreibungen. Eine Selbstauskunft verleiht keine Vertretungs-, Moderations- oder Betreiberrechte.

### Verhalten und Maßnahmen

Unzulässig sind rechtswidrige Inhalte, Drohungen, Beleidigungen, gezielte Herabwürdigung, diskriminierende Angriffe, Veröffentlichung fremder personenbezogener Daten, Spam, missbräuchliche Meldungen und Störung der Gruppenarbeit. Sachliche Kritik und unterschiedliche Meinungen bleiben zulässig.

Eine Meldung kann eine Prüfung und vorläufige technische Sperrung auslösen. Eine Sperrung ist keine abschließende Feststellung eines Regelverstoßes. Je nach Lage kann der Betreiber Inhalte verbergen, eine Gruppe oder ein Konto vorübergehend sperren und die betroffene Person kontaktieren. Entscheidungen werden soweit möglich begründet; dringende Sicherheitsmaßnahmen können zunächst ohne vorherige Anhörung erfolgen.

### Austritt, Widerruf und Beendigung

Die Teilnahme kann beendet werden. Die Einwilligung in eine freiwillige Veröffentlichung kann für die Zukunft widerrufen werden. Der Widerruf macht eine bereits erfolgte rechtmäßige Verarbeitung nicht rückwirkend ungeschehen. Bei Kontolöschung werden personenbezogene Verknüpfungen gemäß dem freigegebenen Lösch- und Aufbewahrungskonzept behandelt. Gemeinsame Inhalte werden nach der noch zu beschließenden Löschungs- oder Anonymisierungsregel bearbeitet.

## Entwurf – Arbeitsgruppen- und Verhaltensregeln

- Bearbeiten Sie Inhalte gemeinschaftlich und sachbezogen. Kennzeichnen Sie Aufgabenstatus und Zuständigkeit verständlich.
- Veröffentlichen Sie nur eine kurze, zweckbezogene Gruppenbeschreibung; sie enthält keine Namen, Kontaktdaten, Gesundheitsangaben oder internen Inhalte.
- Veröffentlichen Sie keine Screenshots oder Inhalte aus geschützten Bereichen. Führen Sie Mitgliederlisten nicht außerhalb der Plattform.
- Erheben oder sammeln Sie keine Angaben über Gesundheit, Diagnosen, Pflegebedarf, politische Meinung, Religion, Herkunft, sexuelle Orientierung oder andere sensible Merkmale.
- Verwenden Sie die Plattform nicht zur Werbung, politischen Profilbildung oder Erstellung personenbezogener Listen.
- Klären Sie Aufgabenverteilung und Meinungsverschiedenheiten innerhalb der Gruppe. Koordination ist keine Betreiber- oder Moderationsbefugnis.
- Melden Sie Sicherheits- und Datenschutzprobleme über den Betreiberkontakt. Verwenden Sie Meldungen nicht zur Sanktionierung abweichender Meinungen.
- Der Betreiber greift nur für technische Sicherheit, Datenschutz, Rechtsbefolgung oder Durchsetzung dieser Regeln ein.

## Entwurf – Ergänzung der Datenschutzerklärung

**Vor Einsatz sind Rechtsgrundlage, Datenbankregion, Google-Vertragsstatus und tatsächliche Löschabläufe zu ergänzen und extern zu prüfen.**

### Verantwortlichkeit und Zwecke

Verantwortlicher ist der im bestehenden Impressum genannte Betreiber von „Bergedorf gemeinsam“. Die Beteiligungsfunktionen dienen der Verwaltung freiwilliger Interessen, Gruppenmitgliedschaften und Beitrittsanfragen, der geschützten Zusammenarbeit an Aufgaben und Arbeitsinhalten, der Bearbeitung von Meldungen sowie Auskunfts- und Löschanfragen.

### Verarbeitete Daten und Sichtbarkeit

Verarbeitet werden Firebase-Authentifizierungskennung und bestätigte E-Mail-Adresse, selbst angegebene Interessen, Mitgliedschaften und Anfragen, freiwillige Gruppenbeschreibungen, gemeinsame Aufgaben und Inhalte, Einwilligungsentscheidungen, Meldungen sowie notwendige administrative Status- und Sicherheitsnachweise. Es gibt keine privaten Nachrichten oder Anhänge. Sensible Angaben sollen nicht eingegeben werden; Freitext kann sie dennoch enthalten.

Interessen, Mitgliedschaften, Beitrittsanfragen und Einwilligungsinformationen sind dem angemeldeten Konto zugeordnet. Interne Gruppeninhalte sind nur aktiven Mitgliedern und erforderlichen Betreiberpersonen für Sicherheits- oder Datenschutzaufgaben zugänglich. Eine Gruppenbeschreibung wird nur nach gesonderter freiwilliger Veröffentlichung öffentlich angezeigt. Ein öffentliches Mitgliederverzeichnis gibt es nicht.

### Empfänger, Region und Rechtsgrundlage

Die bestehende Anmeldung verwendet Firebase Authentication im bestehenden Projekt. Für Firestore sind Projektzuordnung und Region im aktuellen Repository nicht festgelegt; eine Datenbank wurde hier nicht produktiv bereitgestellt. Vor Freischaltung sind die konkrete Firestore-Region, die anwendbaren Google-Vertragsbedingungen, Auftragsverarbeitung und Übermittlungsgrundlage anhand der dann geltenden Unterlagen zu prüfen.

Die Rechtsgrundlage ist für jede Datenkategorie gesondert festzulegen. Eine pauschale Einwilligung soll nicht als Ersatz für diese Prüfung dienen. Vor Aktivierung sind Zweck, Rechtsgrundlage, Einwilligungstext und Nachweisführung für Interessen, Gruppenbeitritt, öffentliche Gruppenbeschreibung und Zusammenarbeit getrennt zu prüfen.

### Rechte und Löschung

Auskunfts-, Berichtigungs-, Löschungs-, Einschränkungs- und Widerspruchsanfragen können an den im bestehenden Datenschutzbereich genannten Kontakt gerichtet werden. Die Betreiberverwaltung bearbeitet Anfragen manuell. Bei einer Löschanfrage bleibt das Authentifizierungskonto bis zum abgeschlossenen Bereinigungs- und Verifikationslauf bestehen. Eine Löschung in der Anwendungsdatenbank belegt nicht automatisch die sofortige Entfernung aus Anbieter-Backups oder Plattformlogs; das tatsächliche Verhalten muss transparent beschrieben werden.

## Einwilligungs-, Widerrufs- und Meldeverfahren

### Vorgeschlagene Einwilligungsabläufe

- Beteiligungsbereich erst nach bestätigter E-Mail-Adresse öffnen.
- Vor dem ersten Speichern eine verständliche Zweckinformation mit Versionsstand anzeigen.
- Interessenbekundung, Gruppenbeitritt und öffentliche Gruppenbeschreibung getrennt behandeln; keine vorangekreuzten Felder.
- Bei öffentlicher Beschreibung unmittelbar vor Speicherung den konkreten Veröffentlichungstext bestätigen lassen.
- Zweck, Informationsversion, Entscheidung und Zeitpunkt speichern. Ein Browser-Häkchen allein ist kein vollständiger dauerhafter Einwilligungsnachweis.
- Widerruf über das Konto ermöglichen und ein Widerrufsereignis speichern. Folgen für gemeinsame Inhalte richten sich nach der beschlossenen Aufbewahrungsregel.

### Vorgeschlagenes Meldeverfahren

Eine Meldung erhebt nur die Kennung des betroffenen Inhalts, eine begrenzte Kategorie und eine kurze Begründung. Die meldende Person wird nicht öffentlich angezeigt. Statusfolge: eingegangen, in Prüfung, Maßnahme ergriffen oder geschlossen. Dringende Meldungen werden markiert. Eine automatische Ausblendung allein wegen mehrerer Meldungen wird zum Start nicht empfohlen: Anzahl oder unterschiedliche Konten beweisen nicht, dass unterschiedliche reale Personen gemeldet haben.

### Vorgeschlagene Auskunft und Löschung

Die Kontoseite bietet einen vollständigen paginierten Datenexport und eine Löschanfrage. Die Betreiberverwaltung listet offene Vorgänge, bearbeitet sie nach dokumentierten Kategorieentscheidungen und prüft nach der Bereinigung nochmals erkennbare UID-Verknüpfungen. Auth wird erst nach erfolgreicher Prüfung gelöscht. Bei Restverknüpfungen oder Fehlern bleibt das Konto bestehen; der Vorgang bleibt wiederaufnehmbar.

## Vorschlag für Löschung und Aufbewahrung

Dies sind Entscheidungsvorschläge, noch keine aktivierte Betriebsregel:

| Datenkategorie | Vorschlag |
| --- | --- |
| Interessen und Beitrittsanfragen | Bei Widerruf oder Kontolöschung löschen; Einwilligungsnachweise nach gesonderter Frist behandeln. |
| Gruppenmitgliedschaft | Bei Austritt beenden; Kontolöschung entfernt die UID-Zuordnung. |
| Gemeinsame Aufgaben und Arbeitsinhalte | Bei Kontolöschung standardmäßig Autoren-/Zuständigkeits-UID anonymisieren, Inhalt nur bei begründetem Gruppeninteresse fortführen; andernfalls löschen. Spätestens sechs Monate nach Gruppenschließung entfernen, sofern keine dokumentierte notwendige Ausnahme beschlossen wird. |
| Öffentliche Gruppenbeschreibung | Bei Widerruf aus dem Verzeichnis entfernen; bei Gruppenschließung ebenfalls entfernen. |
| Einwilligungsereignisse | Minimaler Nachweis; vorgeschlagene Löschung sechs Monate nach Ende der Beteiligung, nach Rechtsprüfung. |
| Missbrauchsmeldungen | Nur erforderliche Angaben; vorgeschlagene Löschung sechs Monate nach dokumentiertem Abschluss. Offene Fälle bleiben bis zum Abschluss gesperrt. |
| Löschaufträge | Während der Bearbeitung UID-gebunden; nach Abschluss UID und Arbeitsplan entfernen. Ein nicht personenbezogener Abschlussvermerk ohne Freitext bleibt vorgeschlagen sechs Monate. |
| Betreiber-Audit | Keine Inhaltskopien und keine unnötigen Identifikatoren; vorgeschlagene Frist sechs Monate. |

**Offene Rechtsfrage:** Fristen müssen anhand konkreter Zwecke, möglicher Rechtsansprüche, Datenminimierung und tatsächlicher Google-Sicherungs-/Protokollverarbeitung geprüft werden.

## Datenschutz-Folgenabschätzungs-Vorprüfung

Geplant sind Konten mit bestätigter E-Mail-Adresse, Interessen, Gruppenmitgliedschaften, geschützte Bereiche, gemeinsame Aufgaben und Betreiberprozesse für Auskunft, Meldungen und Löschungen. Projektideen können sensible persönliche Umstände berühren. Die Plattform erhebt solche Daten nicht gezielt, kann unbeabsichtigte Freitexteingaben jedoch nicht vollständig verhindern.

Vorgeschlagene Risikominderungen: Teilnahme ab 18 Jahren; keine gezielten Fragen zu sensiblen Merkmalen; begrenzte Textfelder und Melde-/Entfernungsverfahren; standardmäßig geschlossene Rules; UID-Begrenzung und bestätigte Auth; minimierte öffentliche Felder; keine Mitgliedslisten, Direktnachrichten oder Anhänge; bewusst gewählte Datenbankregion; Admin SDK nur mit ADC und minimalen Rollen; manuelle Kontingentprüfung und Not-Aus; wiederaufnehmbare Auskunfts- und Löschverfahren.

Diese Vorprüfung schließt eine Datenschutz-Folgenabschätzung nicht abschließend aus. Vor echten Daten ist mit Datenschutzberatung zu prüfen, ob voraussichtlich ein hohes Risiko im Sinne von Art. 35 DSGVO vorliegt und eine vollständige Folgenabschätzung erforderlich ist. Rechtsgrundlage, Einwilligungsnachweise, konkrete Region, Auftragsverarbeitung, Drittlandtransfer und Umgang mit unbeabsichtigt eingegebenen sensiblen Daten bleiben offen. Bis zur Klärung keine produktive Freischaltung.

## TypeScript-Prüfung und Fehlerkategorien

Der vollständige Projektcheck meldete zunächst 102 Diagnosen. Davon betrafen 19 die fehlende Vite-Client-Typdeklaration für import.meta.env; frontend/vite-env.d.ts ergänzt diese und reduziert die Gesamtzahl auf **83**. Ein erfolgreicher Vite-Produktionsbuild ist möglich; der projektweite TypeScript-Check ist damit aber nicht fehlerfrei.

- **Konfigurationsproblem, behoben:** fehlende Vite-Client-Typen für ImportMeta; das war kein Beleg für fehlerhaftes Laufzeitverhalten.
- **Typisierungsprobleme ohne festgestellte Funktionsbeeinträchtigung:** 25 TS7053 (dynamischer Schlüsselzugriff), 15 TS7006 (impliziter any-Typ), 6 TS18046 (unknown nicht eingegrenzt), 1 TS7034 und 1 TS7005 (impliziter Array-/any-Typ). Diese Diagnosen betreffen u. a. redaktionelle Artikel-, Kartendaten- und Formular-Komponenten.
- **Statische Quell-/API-Typabweichungen, bis zur gezielten Prüfung als Programmierfehler zu behandeln:** 13 TS2345, 8 TS2554, 8 TS2339, 4 TS2322, 1 TS2353 und 1 TS18047. Betroffene bestehende Bereiche sind Geschichts-/Tourismuskarten, Meldeformulare, Artikel und Verzeichnis-Komponenten. Der TypeScript-Bericht allein belegt nicht, dass jede betroffene Funktion im Browser tatsächlich ausfällt; diese Stellen brauchen gezielte Quellprüfung und passende Tests.
- **Arbeitsgruppenplattform sicherheits- und funktionsrelevant:** im aktuellen Check keine TypeScript-Diagnose in firebase-account.tsx, firebase-auth.tsx, participation/firestore-client.ts, loneliness-projects.tsx oder den neuen Betreiberdateien. Ein gezielter Emulator-Browserlauf fand jedoch eine Firestore-Abfrage, deren Limit nicht zu den Security Rules passte. Die Kontoansichten und der Export für Interessen sind jetzt auf das Regel-Limit 18 abgestimmt. Authentifizierter Kontoabruf besteht danach im Emulator.

Die verbleibenden 83 Diagnosen liegen außerhalb des geänderten Beteiligungsablaufs. Sie bleiben als separate bestehende Typkorrekturen dokumentiert; unbeteiligte Website-Bereiche wurden nicht ohne sachlichen Bezug umgeschrieben. Die Beteiligungscodepfade wurden zusätzlich durch Emulator- und Browserprüfungen funktional abgesichert.

## Firebase-Konfiguration: Stand und spätere Anleitung

### Im Repository vorhanden

- Projektkennung der bestehenden Web-App: bergedorf-gemeinsam.
- Vorhandene Firebase Authentication für die Website.
- Vorbereitete Dateien firestore.rules und firestore.indexes.json.
- Emulatoren für Auth und Firestore in frontend/firebase.json.
- Beteiligungsflag standardmäßig ausgeschaltet.
- Betreiber-CLI mit ADC; Emulator- und demo-Projekte werden abgewiesen.

### Nicht im Repository nachgewiesen

- Ob im Projekt bereits eine Firestore-Datenbank besteht.
- Datenbank-ID und -Region.
- Produktionsbereitstellung von Rules und Indizes.
- Derzeitige IAM-Rollen und Dienstkonten.
- Aktuelle Kontingentnutzung oder Warnwerte.
- Ob der Standort der Default-Datenbank noch gewählt werden kann.

Firebase dokumentiert, dass sich der Firestore-Standort nach Bereitstellung nicht ändern lässt. Vor dem Erstellen ist die Region zu prüfen und zu entscheiden. Firebase Console → Databases & Storage → Firestore → Data zeigt vorhandene Datenbanken und deren Regionen. Keine Datenbank anlegen, bevor diese Entscheidung und die gesonderte Aktivierungsfreigabe vorliegen.

### Schritte für eine spätere, gesondert freigegebene Bereitstellung

1. Firebase Console-Projekt bergedorf-gemeinsam öffnen und Projekt-ID mit der vorhandenen Website-Konfiguration abgleichen.
2. Firestore → Data öffnen. Nur ablesen, ob eine Datenbank existiert, ihre ID und Region notieren. Keine Datenbank erstellen oder Region ändern.
3. Authentication → Users öffnen und nur prüfen, dass Anmeldung und Beteiligung zum selben Projekt gehören. Keine Nutzer ändern oder exportieren.
4. Project settings → General öffnen und Projekt-ID sowie bestehende Web-App bestätigen. Keine neuen Admin-Schlüssel erzeugen.
5. IAM & Admin → IAM prüfen. Für einen späteren Operatorzugang getrennt und nur bei tatsächlichem Bedarf Cloud Datastore User (roles/datastore.user) für Firestore und Firebase Authentication Admin (roles/firebaseauth.admin) für Kontoverwaltung erwägen. Keine Owner- oder Editor-Rolle für gewöhnliche Verwaltung vergeben. Rollen mit Sicherheitsperson prüfen, weil das Admin SDK Firestore-Regeln umgeht.
6. Vor jeder Bereitstellung Pull Request, Rules und Indizes prüfen. Erst nach separater Freigabe die Dateien aus frontend/ im bestehenden Projekt bereitstellen. Zielprojekt muss bergedorf-gemeinsam sein.
7. Firestore → Rules prüfen, dass keine Testregeln aktiv sind. Unter Indexes warten, bis erforderliche Indizes bereit sind. Zunächst nur synthetische Tests nutzen.
8. Firestore → Usage regelmäßig öffnen und Lese-, Schreib-, Lösch- und Speicherverbrauch prüfen. Keine kostenpflichtige Monitoring-Integration einrichten. Bei Auffälligkeit Beteiligung deaktivieren.
9. Not-Aus bleibt bis zur Freigabe unangetastet. Später kann das Operator-Menü die Einstellung enabled=false setzen. Danach Status prüfen und die Aktion dokumentieren.
10. Vor einer späteren Aktivierung beide Sperren kontrollieren. Diese Anleitung aktiviert weder Firestore noch Beteiligungsfunktionen.

Firebase zeigt Firestore-Nutzungsdaten in der Console. Kostenlose Nutzung und genaue Limits hängen vom Produkt und Plan ab und können sich ändern; die Werte der Console zum Entscheidungszeitpunkt sind maßgeblich. Projekt bleibt auf Spark; Billing wird nicht verknüpft und kein kostenpflichtiger Dienst eingeschaltet.

## Direkt beantwortbare Betreiberentscheidungen

1. **Alter:** Genügt die Erklärung „mindestens 18 Jahre“ mit Schutzkonzept? Vorschlag: Selbsterklärung, keine Ausweiskopie; Datenschutzberatung prüft, ob dies genügt.
2. **Öffentliche Gruppenbeschreibung:** Gesonderte, widerrufbare Freigabe mit Textvorschau? Vorschlag: Ja.
3. **Gemeinsame Inhalte bei Kontolöschung:** anonymisieren, löschen oder Einzelfallentscheidung? Vorschlag: UID anonymisieren, Gruppe arbeitsfähig halten; Inhalte spätestens sechs Monate nach Gruppenschließung entfernen.
4. **Einwilligungs- und Auditnachweise:** sechs Monate nach Beteiligungsende? Vorschlag: minimale Nachweise, dann löschen; Datenschutzberatung bestätigt/ändert.
5. **Meldungsaufbewahrung:** sechs Monate nach Abschluss? Vorschlag: Ja, nur nötige Angaben.
6. **Meldungsreaktion:** Zuständigkeit und Vertretung? Vorschlag: feste Betreiberzuständigkeit plus Vertretung; Dringendes unverzüglich, sonst Sichtung innerhalb eines Werktags.
7. **Firebase-Standort:** welche konkrete EU-Region ist akzeptabel? Erst nach Prüfung auswählen; nach Anlegen nicht änderbar.
8. **Rechtsprüfung:** wer bestätigt Rechtsgrundlage, Texte, Google-Verträge, Drittlandtransfer und die Entscheidung zur vollständigen Folgenabschätzung?
9. **Kontingente:** welche internen Warn-/Abschaltwerte gelten? Vorschlag: konservative Werte deutlich unter Planlimits und zunächst wöchentliche manuelle Prüfung.

Keine Antwort schaltet Firestore oder Beteiligungsfunktionen automatisch frei.

## Primärquellen

- Firebase: [Firestore-Standorte](https://firebase.google.com/docs/firestore/locations) – Standort nach Bereitstellung nicht änderbar.
- Firebase: [Firestore-Nutzung und Abrechnung](https://firebase.google.com/docs/firestore/pricing).
- Firebase: [Firestore-IAM](https://firebase.google.com/docs/firestore/security/iam).
- Firebase: [Security Rules verwalten und bereitstellen](https://firebase.google.com/docs/rules/manage-deploy).
- Firebase: [Admin SDK einrichten](https://firebase.google.com/docs/admin/setup/) und [Admin SDK umgeht Security Rules](https://firebase.google.com/docs/firestore/security/insecure-rules).
- EUR-Lex: [Datenschutz-Grundverordnung, Art. 35](https://eur-lex.europa.eu/eli/reg/2016/679/oj).
