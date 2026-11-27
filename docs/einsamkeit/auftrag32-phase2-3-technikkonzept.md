# Technikkonzept Arbeitsauftrag 32 – Phasen 2 und 3

**Stand:** 27. November 2026  
**Status:** lokale Planung; keine produktive Datenbank, Rules oder Beteiligungsfunktion aktiviert  
**Voraussetzung:** Die öffentliche Wiederherstellung wurde nach Betreiberangabe unabhängig im Livebrowser bestätigt. Diese Bestätigung ersetzt keine erneute Prüfung der Firebase-Anmeldung.

## 1. Zweck und Grenzen

Dieses Konzept beschreibt eine spätere, eng begrenzte Beteiligungsfunktion für die 18 statischen Projektideen im Themenbereich „Einsamkeit in Bergedorf“:

- Phase 2: freiwillige Interessenbekundungen und selbstständige Bildung von Arbeitsgruppen.
- Phase 3: geschlossene digitale Arbeitsbereiche mit Konzeptentwürfen, Aufgaben und Fortschrittsständen.

Die Website bleibt zunächst eine statische GitHub-Pages-Anwendung. Die vorhandenen Firebase-Authentication-Funktionen bestätigen Benutzerkonten, stellen aber weder Rollen noch Projekt- oder Gruppendaten bereit. Die bestehenden Hinweise „Backend noch nicht angeschlossen“ und die gesperrten Schreibfunktionen bleiben unverändert. Dieses Dokument aktiviert nichts.

Firestore wäre ein optionaler, direkt vom Browser erreichbarer Datenbestand. Der Zugriff wäre deshalb vollständig durch Firestore Security Rules zu schützen. Es gibt dabei keinen geheimen Schlüssel im Frontend und keinen vertrauenswürdigen Anwendungsserver, der clientseitige Aussagen nachträglich bestätigen könnte. Die Regeln müssten vor jeder produktiven Verbindung geschlossen beginnen und mit dem Emulator getestet sein.

Die Plattform stellt die technische Infrastruktur bereit. Eine Gruppe wird nur von ihren Beteiligten gegründet, koordiniert und moderiert. Der Betreiber übernimmt weder Suche nach Teilnehmenden noch Gruppenleitung, persönliche Vermittlung, Projektberatung oder laufende Konfliktlösung. Seine unvermeidbaren Betreiberaufgaben – Datenschutzanfragen, technische Sicherheit, Sperrung akuter Missbrauchsfälle, Auskunft/Löschung und Kommunikation über Störungen – bleiben davon getrennt und brauchen einen realistischen Zuständigkeits- und Reaktionsweg.

## 2. Bezug zu Authentication

Die vorhandene Authentifizierung liegt in `frontend/app/firebase-auth.tsx` und wird erst nach ausdrücklichem Öffnen des Kontodienstes initialisiert. Eine spätere Firestore-Verbindung soll denselben Firebase-App- und Benutzerkontext verwenden. Sie darf ebenfalls erst geöffnet werden, wenn die betroffene Person die Beteiligungsfunktion ausdrücklich aufruft.

Für eine Interessenbekundung oder Gruppenarbeit wären mindestens folgende Bedingungen erforderlich:

1. `request.auth != null`.
2. Das Firebase-ID-Token weist eine bestätigte E-Mail-Adresse aus (`email_verified == true`). Ein bloßes UI-Häkchen oder eine selbst übermittelte E-Mail-Angabe reicht nicht.
3. Jede Person darf nur ihr eigenes Interessen- und Einwilligungsdokument lesen oder verändern.
4. Eine bestätigte E-Mail verleiht keinerlei Gruppen-, Organisations-, Moderations- oder Betreiberrolle.
5. Der im vorhandenen Anmeldebildschirm auswählbare Kontotyp „Organisation“ ist nur eine Auswahl im Frontend. Er bestätigt weder eine juristische Person noch deren Vertretungsbefugnis und darf keine Berechtigung erzeugen.

Cloud Firestore und Firebase Authentication werden nicht durch bloße Installation des SDK miteinander abgesichert. Die Firestore Rules müssen die UID des Authentifizierungstokens bei jedem Zugriff mit der passenden Eigentümerschaft oder aktiven Gruppenmitgliedschaft abgleichen.

## 3. Vorgeschlagenes Datenmodell

Die Projektbeschreibungen und Projekttitel bleiben zunächst ausschließlich in `frontend/lib/loneliness-projects.mjs`. Sie werden nicht als zweite, veränderliche Projektliste in Firestore gespiegelt. Die dortigen 18 IDs bilden eine feste Allowlist:

`projekt-einsamkeitslotsen`, `projekt-begleitung-erster-besuch`, `projekt-begegnungsstaetten-zukunft`, `projekt-soziale-isolation-erreichen`, `projekt-sowieso-da-orte`, `projekt-hilfswegweiser`, `projekt-mittleres-lebensalter`, `projekt-arbeitsplatz`, `projekt-plauderbaenke`, `projekt-supermaerkte`, `projekt-nahverkehr`, `projekt-ehrenamt-teilhabe`, `projekt-soziale-hilfen-rezept`, `projekt-kommunale-strategie`, `projekt-oeffentlichkeitsarbeit`, `projekt-finanzierung`, `projekt-stadtteile`, `projekt-wirksamkeit`.

| Pfad | Zweck und Minimalfelder | Zugriffsgrenze |
| --- | --- | --- |
| `users/{uid}/interests/{projectId}` | Freiwillige Interessenbekundung; Projekt-ID, gewünschte Beteiligungsform aus fester Auswahlliste, Status, Schema-/Hinweisversion, Serverzeit | Nur betroffene UID; keine Liste anderer Interessierter |
| `consentEvents/{eventId}` | Separates, versioniertes Ereignis je Zweck: `granted` oder `withdrawn`, UID, Zweck, Hinweisversion/-Hash, Serverzeit | Nur eigene Erfassung; danach unveränderbar; Aufbewahrung und Löschgrundlage vor Produktivstart rechtlich offen |
| `groups/{groupId}` | Projekt-ID, Gruppentitel, kurzer Zweck, Status, Ersteller-UID, aktuelle Koordinations-UID, Schema-Version und Zeitstempel | Nur aktive Mitglieder und eng begrenzte Plattformverwaltung; keine öffentliche Mitgliederliste |
| `groups/{groupId}/members/{uid}` | Mitgliedschaft, Gruppenrolle `coordinator` oder `member`, Beitritts-/Austrittsstatus, Zeitstempel | Betroffene Person und aktive Gruppenkoordination |
| `groups/{groupId}/joinRequests/{uid}` | Beitrittsanfrage ohne Freitext; gewünschte Rolle nur aus fester Liste, Status und Zeitstempel | Antragstellende Person sowie Koordination genau dieser Gruppe |
| `groups/{groupId}/workItems/{itemId}` | Konzeptabschnitt, Aufgabe oder Meilenstein; Titel, Klartextinhalt, Status, Fälligkeitsdatum nur falls erforderlich, Zeitstempel | Aktive Mitglieder der Gruppe; Bearbeitung nach festem Rollenmodell |
| `abuseReports/{reportId}` | Strukturierte Meldung mit Meldegrund, Gruppen-/Datensatzreferenz und Zeitstempel; keine unnötigen Freitexte | Meldende Person und ausdrücklich berechtigte Plattformverwaltung; kein Zugriff für andere Gruppen |
| `platformStaff/{uid}` | Kleine, manuell gepflegte Liste ausdrücklich berechtigter Betreiberkonten | Schreibzugriff niemals aus dem Webclient; Zuordnung nur durch vertrauenswürdige Projektverwaltung |

**Nicht im ersten Schritt vorgesehen:** öffentliche Teilnehmerlisten, öffentlicher Gruppenfinder, direkte Nachrichten, Dateiuploads, Gesundheits-/Diagnosedaten, ausführliche Profile, automatisch veröffentlichte Gruppenfortschritte, Anwesenheits- oder Nutzungsanalysen sowie unmoderierte öffentliche Kommentare.

Die erste Version sollte keine Kontaktadresse in Firestore duplizieren. Firebase Auth bleibt Identitätsquelle; E-Mail-Adressen werden nicht in Gruppen- oder Interessenlisten kopiert. Die Gruppen verwenden allenfalls einen frei gewählten Anzeigenamen, nicht zwingend den Klarnamen. Ein Anzeigename gilt nicht als Identitäts- oder Organisationsnachweis.

## 4. Gruppenbildung, Rollen und Organisationen

### 4.1 Interessenbekundung

Eine Person wählt eine Projektidee und eine begrenzte Beteiligungsform aus, etwa „mitarbeiten“, „selbst koordinieren“, „Organisation vertreten“ oder „zunächst beobachten“. Es gibt kein Feld „Warum sind Sie einsam?“ und keine Abfrage von Gesundheits- oder Krisendaten. Die Interessensbekundung bleibt privat. Sie wird nicht automatisch an andere Interessierte verteilt und löst keine persönliche Vermittlung aus.

### 4.2 Selbstorganisierte Gruppe

Eine Gruppe wird nur angelegt, wenn eine verifizierte Person freiwillig die Koordination übernimmt und die Gruppenbedingungen bestätigt. Das Anlegen des Gruppendokuments und der ersten Mitgliedschaft als `coordinator` muss in einer atomaren Transaktion geschehen. Ein partieller Zustand „Gruppe ohne verantwortliche Koordination“ darf nicht entstehen.

Weitere Personen stellen einen Beitrittsantrag. Die Koordination nimmt ihn an oder lehnt ihn ab. Die Mitgliedschaft wird erst nach Annahme aktiv. Der Antragsteller kann die eigene Anfrage zurückziehen. Koordinatoren können keine Betreiberrechte vergeben.

Eine Gruppe soll mindestens eine Koordination und eine selbst gewählte Vertretung/Übergabeoption besitzen. Vor dem Ausscheiden der letzten Koordination muss eine aktive Mitgliedsperson die Rolle übernehmen; andernfalls wird die Gruppe geschlossen und der Beitritt gesperrt. Diese Voraussetzung ist eine technische Verfügbarkeitsbedingung und keine Zusage, dass der Betreiber einspringt.

### 4.3 Rollen

| Rolle | Rechte | Ausdrücklich nicht enthalten |
| --- | --- | --- |
| `member` | Geschlossenen Arbeitsbereich lesen, freigegebene Konzept-/Aufgabeninhalte bearbeiten, eigene Mitgliedschaft beenden | Andere aufnehmen, Rollen vergeben, fremde Gruppen sehen, Inhalte veröffentlichen |
| `coordinator` | Beitrittsanfragen der eigenen Gruppe entscheiden, Gruppenarbeitsstand verwalten, Mitglieder bei Regelverstößen aus der eigenen Gruppe entfernen, Übergabe organisieren | Betreiber-/Plattformrechte, Zugriff auf andere Gruppen, Firebase-Konten verwalten |
| Organisationsvertretung | Teilnahme als einzelne authentifizierte Person; optionale, geprüfte Zugehörigkeit zu einem verifizierten Organisationseintrag | Kein Sonderzugriff allein wegen der Organisation oder der UI-Auswahl „Organisation“ |
| Plattformverwaltung | Technische Sperrung, notwendige Missbrauchs-/Datenschutzbearbeitung und begrenzte Administration | Keine laufende Projektleitung und keine automatische Einsicht in sämtliche privaten Gruppeninhalte |

Plattformrollen dürfen nicht über Firestore-Clientdaten, Gruppenzugehörigkeit, Kontotyp oder frei editierbare Custom Claims vergeben werden. Firebase Custom Claims werden laut Firebase ausschließlich durch eine privilegierte Serverumgebung mit Admin SDK gesetzt. Cloud Functions/Serverbetrieb sind nicht Teil der Spark-only-Vorbereitung. Deshalb sieht der Entwurf vorläufig ein enges `platformStaff/{uid}`-Dokument vor, das Nutzer nicht lesen oder schreiben können und das nur von einer vertrauenswürdigen Betreiberperson in der Projektverwaltung geändert werden kann. Auch das braucht ein protokolliertes Vergabeverfahren und muss in Rules-Tests abgesichert werden.

Organisationen können sich nicht selbst als „verifiziert“ kennzeichnen. Ein Organisationseintrag sollte erst nach einer nachvollziehbaren Bestätigung durch eine befugte Kontaktperson angelegt werden. Die Plattform benötigt dafür eine minimale Prüfquelle, ein Prüfdatum und eine widerrufbare Statusangabe. Solange die dafür nötige manuelle Prüfung und Zuständigkeit nicht festgelegt ist, kann eine Person zwar freiwillig angeben, dass sie eine Organisation vertritt; die Website darf diese Angabe aber nicht als bestätigte Kooperation, Vertretungsmacht oder Zusage veröffentlichen.

## 5. Security-Rules-Anforderungen

Die spätere Rules-Datei muss den Zugriff zunächst vollständig verweigern. Nur ausdrücklich benannte Sammlungen und Felder werden freigegeben. Ein übergreifendes `allow read, write: if request.auth != null` oder „Testmodus“ ist ausgeschlossen.

Verbindliche Regeln für den Entwurf:

- Authentifizierung und E-Mail-Verifikation werden bei jedem personenbezogenen Zugriff geprüft.
- Jede Dokumentform besitzt eine feste Feld-Allowlist, Datentypen, Wertebereiche und enge Text-/Arraygrenzen. Unbekannte Felder werden abgewiesen.
- `uid`, `projectId`, Rollen, Statuswechsel und Eigentümerschaft werden aus `request.auth.uid`, Allowlist und existierenden Dokumenten abgeleitet, nicht aus einer UI-Auswahl übernommen.
- Ein Nutzer kann keine eigene Gruppenmitgliedschaft als `coordinator` erstellen. Die Erstanlage von Gruppe und erster Koordination wird atomar validiert; weitere Rollenwechsel verlangen die bisherige Koordination und eine bereits aktive Zielmitgliedschaft.
- Gruppenarbeitsdaten können ausschließlich von aktiven Mitgliedern der zugehörigen Gruppe gelesen werden. Beitrittsanträge bleiben bis zur Annahme für andere Mitglieder verborgen.
- Das Beenden einer Mitgliedschaft kann nur die eigene Person auslösen; Koordinatoren können nur Mitglieder ihrer eigenen Gruppe bearbeiten. Die letzte Koordination darf sich nicht ohne Übergabe entfernen.
- Einwilligungsereignisse können nicht überschrieben oder von einem Webclient gelöscht werden. Ein Widerruf ist ein separates Ereignis mit eigenem serverseitigen Zeitstempel. Ob und wie lange der minimale Nachweis nach Konto-/Datenlöschung aufbewahrt werden darf, bleibt eine offene rechtliche Festlegung.
- `platformStaff`-Dokumente sind für Webclients weder lesbar noch veränderbar. Jede Regel, die sie zur Rechteprüfung heranzieht, muss in positiven und negativen Emulatorfällen geprüft werden.
- Jede nicht ausdrücklich freigegebene Sammlung, insbesondere Storage-/Uploadpfade und unbekannte künftige Pfade, bleibt gesperrt.
- Firestore Rules ersetzen keine serverseitige Anti-Spam- oder Ratenbegrenzung. Regeln können Werte und Berechtigungen prüfen, aber keine zuverlässige Betreiberwarteschlange oder Moderationsreaktion bereitstellen.

## 6. Datenschutz, Einwilligung und Lebenszyklus

Eine Interessenbekundung und die spätere Gruppenmitgliedschaft sind getrennte Zwecke und erhalten getrennte, verständliche Hinweise. Die betroffene Person muss sehen, welche Daten für welchen Gruppenbereich sichtbar werden und dass der Betreiber keine Vermittlung oder Begleitung übernimmt. Ein erneutes Häkchen im bestehenden Kontoformular ersetzt diese zweckbezogene Entscheidung nicht.

Ein technischer Datensatz könnte Zweckkennung, konkrete Text-/Versionskennung, Hash der angezeigten Fassung, UID und einen mit `serverTimestamp` gesetzten Zeitpunkt enthalten. Der Datensatz wäre append-only und nach einer Änderung nicht still überschreibbar. Das ist eine technische Protokollierung; sie beweist für sich allein nicht, dass eine bestimmte Seite tatsächlich angezeigt oder verstanden wurde. Ein direkter Client kann ohne vertrauenswürdigen Server eine gültig aussehende Selbstbestätigung erzeugen. Die dauerhafte Einwilligungsprotokollierung ist daher nicht als gelöst zu behandeln und die rechtliche Beweis- und Aufbewahrungsfrage bleibt vor Freischaltung offen.

Vorgesehene Selbstbedienung vor produktivem Start:

1. **Auskunft/Export:** eigene Interessen, Einwilligungsereignisse, Mitgliedschaften, Beitrittsanfragen und eigene Aufgaben strukturiert herunterladen.
2. **Widerruf:** Interesse zurückziehen, Beitrittsanfrage löschen, Gruppe verlassen und zweckbezogene weitere Verarbeitung stoppen.
3. **Löschung:** zunächst Gruppenrolle übergeben oder Gruppe schließen; eigene Interessen und nicht mehr benötigte persönliche Referenzen entfernen; anschließend erst Firebase-Auth-Konto löschen.
4. **Verifikation:** jede Löschung durch erneute Abfrage bestätigen und teilweise Fehlschläge sichtbar anzeigen; Auth darf nicht zuerst gelöscht werden, wenn danach die Firestore-Bereinigung nicht mehr möglich ist.
5. **Betroffenenanfragen:** einen dokumentierten Betreiberweg für Auskunft, Berichtigung, Widerspruch, Einschränkung und Löschung vorsehen.

Firestore löscht beim Entfernen eines Dokuments nicht automatisch dessen Unterkollektionen. Das Datenmodell muss deshalb jeden Löschpfad aufzählen, einschließlich Gruppenmitgliedschaften, Anfragen, Aufgabenbezügen und Einwilligungsnachweisen. TTL, automatische Backups, PITR, Restore und Löschfunktionen mit kostenpflichtigen Serverdiensten werden in dieser Spark-only-Vorbereitung nicht benutzt. Für den verbleibenden Aufbewahrungszeitraum in Anbietersicherungen ist die Anbieterdokumentation gesondert zu berücksichtigen.

## 7. Missbrauchsschutz und Betriebsgrenzen

Für den ersten möglichen Produktivumfang gelten als Designgrenzen:

- nur bestätigte Konten; keine anonymen Schreibzugriffe;
- geschlossene Gruppen, kein öffentlicher Gruppenfinder und keine wiederverwendbaren Einladungsschlüssel;
- keine direkten Nachrichten und keine Datei-Uploads;
- Beitrittsanfragen nur als strukturierte Auswahl ohne freie Kontakt-/Bedarfsbeschreibung;
- kurze Titel-/Textfelder, feste Statuswerte und paginierte Abfragen;
- keine permanenten Echtzeit-Listener für komplette Gruppen-/Aufgabenbestände; Aktualisierung bewusst und gezielt;
- Meldemöglichkeit mit vordefinierten Gründen, Koordination pro Gruppe und ein technisch gesperrter globaler Notfallweg;
- Sperrung muss Zugriffe sofort stoppen können, ohne Datenbank- oder Tarifwechsel.

Firestore Rules können unberechtigte Dokumentzugriffe verhindern, aber nicht zuverlässig die Häufigkeit legitimer Schreibvorgänge einer kompromittierten, bestätigten Person begrenzen. App Check, CAPTCHA oder ein serverseitiger Rate-Limiter brauchen eine gesonderte Prüfung von Kosten, Datenschutz, Barrierefreiheit und Spark-Kompatibilität. Kein Schutzmechanismus wird hier als aktiviert dargestellt.

Der Betrieb darf erst beginnen, wenn tatsächlich feststeht, wer Gruppenberichte entgegennimmt, welche Reaktionsfrist gilt, wie eine akute Sperrung funktioniert und welche Daten für diese Prüfung eingesehen werden. Eine technische „Melden“-Schaltfläche ohne zuständige Bearbeitungsperson wäre kein ausreichender Schutz. Das Betreiberziel „keine zusätzliche Personalbetreuung der Einzelprojekte“ bleibt bestehen; gesetzliche Betreiberpflichten und notwendige Mindestreaktionen auf Sicherheits-/Datenschutzvorfälle lassen sich damit nicht abschaffen.

## 8. Spark-Kontingente und Abfragebudget

Die offizielle Firestore-Preisseite weist aktuell je Projekt ein kostenloses Firestore-Kontingent mit 1 GiB Speicher, 50.000 Dokument-Lesevorgängen pro Tag, 20.000 Schreibvorgängen pro Tag, 20.000 Löschvorgängen pro Tag und 10 GiB ausgehendem Transfer pro Monat aus. Sie nennt TTL-Löschungen, PITR, Backups, Restores und Klone als Funktionen ohne kostenloses Kontingent. Firebase beschreibt für Spark, dass nach Überschreiten eines kostenlosen Produktkontingents die Nutzung dieses Produkts bis zum Ende des betreffenden Kalendermonats abgeschaltet werden kann. Der genaue aktuelle Projektstatus und die Firestore-Standortwahl sind nicht aus der Konsole bestätigt.

Die erste Implementierung sollte daher auf ein kleines, messbares Budget ausgelegt sein:

- höchstens 25 Datensätze je paginierter Ansicht;
- nur explizite Einzelabrufe oder kurze, gruppenbezogene Listen; keine projektweite Abfrage aller Interessen;
- keine Echtzeit-Abonnements auf alle Gruppen oder Nutzer;
- keine Dateidaten in Firestore;
- festgelegte Grenzen für Gruppen, Mitglieder, Texte und aktive Arbeitsobjekte, die vor Emulator-/Lasttests konkret werden;
- dokumentierter manueller Blick auf den Firestore-Nutzungsmonitor und ein Abschaltverfahren;
- sichtbare statische Ausfallansicht, falls Firestore wegen Kontingent, Regeln oder Anbieterstatus nicht verfügbar ist.

Das sind Gestaltungsgrenzen, keine Zusicherung, dass Kontingente nie überschritten werden. Die Rules können außerdem eigene Dokumentzugriffsaufrufe ausführen; reale Kosten-/Quota-Projektionen müssen anhand der konkreten Abfragen geprüft werden. Das Cloud-Billing-Konto darf nicht verknüpft werden. Blaze, kostenpflichtige Dienste und produktive Aktivierung bleiben außerhalb dieses Auftrags.

## 9. Emulator- und Freigabetestplan

Im aktuellen Repository wurden bei der Bestandsaufnahme weder `firebase.json`, `firestore.rules`, Firestore-Indizes noch Firebase Emulator- bzw. Rules-Unit-Testabhängigkeiten gefunden. Deshalb gibt es noch keine Rules, die seriös als sicher bewertet oder durch einen Firestore-Emulator bestätigt werden könnten. Die nächste lokale technische Etappe ist eine isolierte Emulator-Konfiguration mit ausschließlich synthetischen UIDs und Daten. Sie darf keine produktive Projektkonfiguration enthalten oder verwenden.

Vor jeder späteren Produktiventscheidung muss die Rules-Suite mindestens folgende Fälle mit Emulator und `@firebase/rules-unit-testing` abdecken:

| Bereich | Muss erfolgreich sein | Muss abgewiesen werden |
| --- | --- | --- |
| Identität | verifiziertes Konto liest eigene Interessen | abgemeldet, unverifiziert oder fremde UID liest/schreibt Interessen |
| Projekt-Allowlist | Interessenbekundung für eine der 18 IDs | unbekannte ID, manipulierte ID oder zusätzliches Feld |
| Einwilligung | neue Version als eigenes unveränderbares Ereignis | Überschreiben, Rückdatieren, fremde UID oder Rollen-/Zweckfälschung |
| Gruppe | atomare Anlage mit Ersteller als erster Koordination | Gruppe ohne Mitglied, Selbsternennung als Koordinator oder nicht aktive ID |
| Mitgliedschaft | aktive Mitglieder lesen genau ihren Gruppenraum | Außenstehende lesen Gruppe, Mitgliederliste, Aufgaben oder Dokumente |
| Beitritt | Koordination der richtigen Gruppe entscheidet Anfrage | andere Gruppen oder Antragsteller selbst aktiviert Mitgliedschaft |
| Rollenwechsel | bisherige Koordination übergibt an bestehendes Mitglied | Rolle wird von Mitglied selbst erhöht; letzte Koordination verlässt ohne Übergabe |
| Arbeitsdaten | aktive Mitglieder erstellen/ändern zulässige Felder | Fremdgruppe, unbekannter Status, zu lange Inhalte, fremde UID-Zuweisung |
| Organisationsangabe | zulässige, geprüfte Organisationsreferenz | selbst gesetztes Prüfkennzeichen oder privilegierte Organisationsrechte |
| Betreiberverwaltung | ausdrücklich berechtigte UID führt eng definierte Administration aus | Client ändert/liest `platformStaff`; normaler Nutzer setzt Adminflag |
| Widerruf/Löschung | eigene Anfrage und Mitgliedschaft werden beendet | fremde Daten werden gelöscht oder geschützte Nachweise still überschrieben |
| Notfallstopp | ausgeschaltete Beteiligungsfunktion verweigert weitere Schreibzugriffe | Änderung der Sperre durch Client oder Umgehung über unbekannten Pfad |

Zusätzlich sind Feldgrenzen, Query-Filter, atomare Mehrfachschreibvorgänge, Rules-Dokumentzugriffsbudgets, Löschung über sämtliche Collections und simulierte Kontingent-/Netzwerkausfälle zu prüfen. Emulator-Ergebnisse ersetzen nicht die anschließende getrennte Browserprüfung mit Testkonto; sie dürfen ausschließlich synthetische Daten verwenden.

## 10. Entscheidungstore vor einer späteren Aktivierung

Vor einer produktiven Verbindung müssen nacheinander vorliegen:

1. Emulator-Konfiguration und nachweislich geschlossene Firestore Rules;
2. bestandene positive und negative Rules-Tests für alle vorstehenden Rollenfälle;
3. dokumentierte, getestete Auskunfts-, Widerrufs-, Lösch- und Gruppenübergabepfade;
4. verifizierbarer Einwilligungsablauf mit klarer Rechtsgrundlage und festgelegter Nachweisaufbewahrung;
5. geprüfter Standort, Vertrags-/Datenschutzinformation und aktualisierte Besucherinhalte;
6. verantwortliche freiwillige Gruppenkoordination sowie benannte technische Betreiberzuständigkeit für Missbrauch, Sperren und Datenschutzanfragen;
7. getestete Ausfallbehandlung und ein begrenztes Abfrage-/Speicherbudget;
8. gesonderte Freigabe für die Aktivierung der produktiven Datenbank und Beteiligungsfunktionen.

Bis dahin bleiben Datenbank, Rules, Firebase-Konfiguration und Phase-2/3-Oberflächen unverändert. Der Spark-Tarif bleibt bestehen; es werden keine personenbezogenen Arbeitsgruppenangaben erhoben.

## 11. Quellen und offene Punkte

Offizielle Firebase-Quellen, geprüft am 27. November 2026:

- [Cloud Firestore: Preise, kostenloses Kontingent und kostenpflichtige Funktionen](https://firebase.google.com/docs/firestore/pricing)
- [Firebase-Tarife Spark und Blaze: Kontingentüberschreitung und automatische Tarifwechsel](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans)
- [Firebase Security Rules: Unit-Tests mit dem Local Emulator Suite](https://firebase.google.com/docs/rules/unit-tests)
- [Cloud Firestore: Dokumente und Unterkollektionen löschen](https://firebase.google.com/docs/firestore/manage-data/delete-data)
- [Firebase Authentication: Custom Claims und Rollen](https://firebase.google.com/docs/auth/admin/custom-claims)
- [Firestore Emulator: Grenzen gegenüber Produktion](https://firebase.google.com/docs/emulator-suite/connect_firestore)

Offen bleiben insbesondere Standort und Projektressourcen in der Firebase-Konsole, rechtliche Grundlage und Aufbewahrungsdauer des Einwilligungsnachweises, Zulässigkeit des geplanten Gruppenbetriebs, Organisationsprüfung, Mindestalter/Schutzkonzept, Moderationszuständigkeit und die Frage, wie technisch belastbare Ratenbegrenzung ohne kostenpflichtigen Backenddienst erreicht werden kann.
