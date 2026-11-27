# Arbeitsauftrag 32.4 – technischer Stand und Freischaltungsentscheidung

Stand: 27. November 2026

## Technisch vorbereitet

- Die Funktionen verwenden dieselbe Firebase-Authentifizierung wie das bestehende Konto. Der Zugriff auf persönliche Interessen, Mitgliedschaften, frühere Beitrittsanfragen, Einwilligungsereignisse, Meldungen und Arbeitsbeiträge ist an die bestätigte UID gebunden.
- Exportabfragen sind paginiert. Für Arbeitsinhalte verwendet der Client persönliche Referenzdokumente. Ein früheres Mitglied kann darüber einzelne selbst verfasste oder zugewiesene Inhalte abrufen, auch wenn die Gruppe geschlossen wurde; Listen vertraulicher Gruppeninhalte bleiben aktiven Mitgliedern vorbehalten.
- Arbeitsbeitrag und persönliche Referenzen werden atomar gespeichert. Die Versionsprüfung verhindert das Überschreiben zwischenzeitlicher Änderungen.
- Die Kontolöschung kann bei freigeschalteter Beteiligung nicht unmittelbar im Browser das Auth-Konto löschen. Sie erzeugt zuerst einen Löschauftrag. Die lokale Emulatorprozedur arbeitet wiederaufnehmbar, scannt UID-Referenzen und löscht das synthetische Auth-Konto erst nach der Bereinigungsprüfung. Löschung, Anonymisierung und Aufbewahrung sind im Emulator getrennte Verfahrensoptionen.
- Firestore-Regeln und erforderliche Abfrageindizes sind vorbereitet. Der fehlende Konfigurationsdatensatz sperrt alle Beteiligungszugriffe. Ein serverseitiger Not-Aus wird in den Regeln ausgewertet; die Betreiber-CLI kann ihn deaktivieren, aber nicht aktivieren.
- Die lokale Betreiberoberfläche bleibt ausschließlich auf `127.0.0.1` im Demo-Emulator. Die Produktions-Operator-CLI verwendet Application Default Credentials, verlangt eine explizite Projekt-ID und Projektbestätigung, weist Demo- und Emulatorziele ab und enthält keine Zugangsdaten. Sie kann Status lesen, Exporte erzeugen, Gruppen sperren, Meldungen bearbeiten, Konten deaktivieren und den Not-Aus setzen.
- Alle 18 öffentlichen Projektideen behalten ihre Materialien. Die Detailseiten zeigen Beteiligungswege als vorbereitet, aber gesperrt; es gibt keine Eingabefelder, die reale Interessenbekundungen speichern.
- Das Build-Flag `VITE_PARTICIPATION_ENABLED` ist standardmäßig aus. Firestore bleibt im Repository auf das Demo-Projekt konfiguriert; produktive Firestore-Aktivierung wurde nicht vorgenommen.

## Noch nicht zur öffentlichen Beteiligung freigegeben

Einige zwingende Produktionsnachweise fehlen: Eine reale Firestore-Projekt-ID und Region sind nicht in der Repositorykonfiguration hinterlegt; ein produktiver Firestore-Regelsatz wurde deshalb nicht in ein Projekt ausgerollt und dort nicht mit realen IAM-Rollen geprüft. Das Spark-Projekt wurde nicht auf die aktuelle konkrete Kosten-/Kontingentlage und die verbindlichen Firebase-Vertragsbedingungen geprüft. Die bestehende Website-Anmeldung wurde nicht in eine produktive Datenbank integriert. Es wurden weder produktive Beteiligungsdaten erhoben noch Datenbank oder Beteiligungsformulare aktiviert.

Die Betreiber-CLI ist lokale vertrauenswürdige Verwaltung, kein gehosteter Dienst. Ihr Einsatz erfordert einen Betreiberrechner mit passend berechtigtem Google-Cloud-ADC-Konto. Die CLI bearbeitet noch keine gespeicherten Löschaufträge und führt keine produktive Kontolöschung aus; der Löschvorgang ist daher für echte Konten technisch noch offen. Eine fortlaufende automatische Quotenüberwachung ist nicht enthalten; unter Spark bleibt die Überwachung über die Firebase-Konsole und die implementierten Längen-, Seiten- und Mengengrenzen vorgesehen.

## Durchgeführte Prüfungen

- Bestehende Regressionstests: **455 bestanden**.
- Firestore-/Auth-Emulator-Regeln: **20 Szenarien bestanden**, darunter eigene Daten nach Gruppenende, Referenzbereinigung nach Aufgabenentzug, UID-eigene Löschanfrage und Not-Aus.
- Lokale Betreiber- und Löschprüfungen: **4 bestanden**; synthetische Löschung unterbrochen/wiederaufgenommen, idempotent und Auth zuletzt.
- Playwright mit **drei synthetischen Konten** bestanden; Registrierung, Interessen, Gruppe, Anfrage/Aufnahme, geschützte Daten, paralleler Versionskonflikt, Export, Widerruf, Rollenübergabe, Austritt, Schließung, Löschung und drei Viewports (1363×936, 768×1024, 390×844).
- Produktionsbuild: erfolgreich; **285 Dateien**, **7 JavaScript-Dateien** mit Syntaxprüfung, **284** Manifest-/Pages-Root-Abgleiche bytegenau erfolgreich. Lokale Werkstatt und Betreiberwerkzeuge sind nicht Teil des öffentlichen Artefakts.
- `git diff --check` und Syntaxprüfung der Betreiber-CLI: erfolgreich.
- Der vollständige TypeScript-Projektcheck ist nicht sauber: Im Repository bestehen weitere Fehler in nicht geänderten Komponenten. Der während der Prüfung entdeckte Fehler in den neuen Kontoaktionen wurde behoben; der Check muss vor einer späteren Freischaltung projektweit bereinigt werden.

## Betreiberentscheidungen vor einer Freischaltung

1. Teilnahme zunächst nur für volljährige Personen bestätigen oder Start verschieben, bis ein überprüfbares Alters- und Schutzkonzept vorliegt.
2. Öffentliche Gruppenbeschreibungen und das Verzeichnis freigeben; Mitgliederdaten und Arbeitsbereiche bleiben geschützt.
3. Regeln für Gruppen, Meldungen und erforderliche Moderation sowie eine erreichbare Zuständigkeit für dringende Sicherheits- und Datenschutzfälle benennen.
4. Für Einwilligungsereignisse, Missbrauchsmeldungen, gemeinsame Arbeitsinhalte und administrative Nachweise je eine Aufbewahrungs- und Löschentscheidung treffen.
5. Vor produktiver Aktivierung die externe Datenschutz- und Vertragsprüfung abschließen, einschließlich Rechtsgrundlagen, Firebase-Vertragsbedingungen und Datenbankregion.

## Unvermeidbare Betreiberaufgaben

Der Betrieb benötigt mindestens eine zuständige Person mit Zugriff auf das berechtigte Betreiberkonto, um Sicherheitsmeldungen zu sichten, bei Bedarf Gruppen oder Nutzer zu sperren, Auskunfts- und Löschaufträge zu bearbeiten, den Not-Aus auszulösen und die Firebase-Nutzung regelmäßig auf Kontingentmissbrauch zu prüfen. Die Arbeitsgruppen selbst organisieren Inhalte, Termine, Aufgaben und Koordination. Es entsteht kein technischer Weg, der notwendige Sicherheits- und Datenschutzreaktionen ohne zuständige Betreiberperson übernehmen könnte.

## Rechts- und Organisationsfragen

Nicht als abgeschlossen bewertet sind Rechtsgrundlagen und Einwilligungstexte, Aufbewahrung von Einwilligungs- und Moderationsnachweisen, Zulässigkeit von Anonymisierungsverfahren, Datenschutz-Folgenabschätzungs-Vorprüfung, Firebase-Vertrags- und Regionsprüfung, Alters- und Schutzkonzept sowie Zuständigkeit und Reaktionsfristen für Meldungen und Datenschutzanfragen. Diese Punkte benötigen eine Entscheidung beziehungsweise externe rechtliche Prüfung vor Erhebung echter Beteiligungsdaten.

## Ergebnis

Die Website-Oberfläche und die lokalen technischen Abläufe können mit synthetischen Emulator-Daten geprüft werden. Die öffentliche Oberfläche bleibt eindeutig gesperrt und erhebt keine Beteiligungsdaten. Eine produktive Freischaltung kann aus dem vorliegenden Repositorystand noch nicht erfolgen: Dafür fehlen die produktive Löschauftragsbearbeitung, die konkrete Produktionsprojekt-/Regionskonfiguration, der projektbezogene Regel- und IAM-Nachweis sowie die genannten Betreiber- und Datenschutzentscheidungen. Firestore bleibt deaktiviert, und es wurde kein kostenpflichtiger Dienst eingerichtet.
