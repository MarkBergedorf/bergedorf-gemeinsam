# Arbeitsstand – Ergänzungsauftrag 32.1

**Stichtag:** 27. November 2026  
**Zweck:** Technische und redaktionelle Dokumentation zur Datenschutzerklärung von „Bergedorf gemeinsam“.  
**Sichtbarkeit:** Diese Datei liegt im öffentlichen GitHub-Repository. Sie enthält daher nur projektbezogene Angaben, die für die Umsetzung nachvollziehbar dokumentiert werden können. Zugangsdaten, private Kontodaten, Rohprotokolle und nicht erforderliche Sicherheitsdetails gehören nicht hierher.

## Änderungen an der Besucherinformation

Die öffentliche Erklärung befindet sich in `frontend/pages/privacy.tsx`. Sie wurde in 18 Abschnitte mit anklickbarem Inhaltsverzeichnis gegliedert. Die Inhalte unterscheiden zwischen statischen öffentlichen Seiten, lokaler Browserverarbeitung, aktiver Firebase Authentication, optionalen Kartenabrufen, externen Links und E-Mail-Kontakt.

Die bisherige öffentliche Erklärung enthielt außerdem historische Prüfnotizen, einen nicht mehr eingesetzten Rasterkartendienst und technische Anforderungen für noch nicht aktivierte Funktionen. Diese Angaben wurden aus der Besucherinformation herausgenommen. Die vorhandenen Git-Commits bleiben bestehen. Die öffentlichen Hinweise beschreiben aktuelle oder noch nicht aktive Verarbeitungen; sie stellen keine Bestätigung umfassender Rechtskonformität dar.

`frontend/index.html` verwendet nun einen neutralen Seitentitel und im Noscript-Fall den Hinweis: „Für die Nutzung dieser Webseite muss JavaScript aktiviert sein.“ Nicht angeschlossene Beteiligungs- und Schreibfunktionen werden weiterhin als solche benannt.

## Technischer Abgleich

- `frontend/app/firebase-auth.tsx`: Firebase SDK wird dynamisch geladen. `clientAuth()` und die Auth-Initialisierung werden erst nach Aufruf der ausdrücklich geöffneten Kontooberfläche gestartet. Für die Sitzungswahl sind Browser-Session- oder lokale Persistenz vorgesehen.
- `frontend/app/firebase-account.tsx`: Die Anmeldeoberfläche zeigt Hinweise zur Verarbeitung. Für Registrierung und passwortlosen Kontozugang wird eine zusätzliche Bestätigung verlangt. Die Anwendung speichert keinen dauerhaften, serverseitigen Beleg mit Einwilligungstext-Version und Zeitstempel. Firebase-Konto-Metadaten sind kein Nachweis, welche Version der Datenschutzhinweise bestätigt wurde.
- `frontend/app/map-privacy-dialog.tsx` und Kartenmodule: Karten werden nach gesonderter Zustimmung geladen; Listen bleiben zugänglich. Die Freigaben der Kartenbereiche sind getrennt und können über „Karte entladen“ widerrufen werden. Der Google-Maps-Link besitzt einen eigenen Bestätigungsdialog. Automatische Standortbestimmung ist nicht eingerichtet.
- `frontend/pages/main.tsx`: Impressum und Datenschutzerklärung sind direkt erreichbar. Die Testbanner- und Backendhinweise beziehen sich auf nicht konfigurierte beziehungsweise nicht angeschlossene Funktionen.
- Die statischen Projektideen für „Einsamkeit in Bergedorf“ nehmen keine Interessensbekundungen entgegen und erzeugen keine Gruppenverwaltung.

## Anbieterangaben am Stichtag

- GitHub Pages bestätigt, dass IP-Adressen von Besuchern aus Sicherheitsgründen protokolliert werden. GitHub beschreibt internationale Verarbeitung, Standardvertragsklauseln sowie seine DPF-Teilnahme. Der offizielle US-Handelsministerium-Eintrag für GitHub ist verlinkt; der Registereintrag ist eine Anbieter-/Teilnehmerinformation und keine Zusicherung einer ausschließlich europäischen Verarbeitung.
- Firebase erklärt, dass Authentication ausschließlich in US-Rechenzentren läuft. Die aktuelle Anbieterinformation nennt einige Wochen für IP-Protokolle und bis zu 180 Tage für die Entfernung anderer Authentifizierungsdaten nach Kontolöschung aus aktiven Systemen und Backups.
- Die Hamburger Datenschutzaufsicht veröffentlicht als Kontakt die Ludwig-Erhard-Straße 22, 20459 Hamburg, Telefon 040 428 54-4040 und mailbox@datenschutz.hamburg.de.

Die verlinkten Anbieterinformationen und Behördenkontakte wurden anhand der offiziellen Seiten abgeglichen. Maßgebliche Referenzen sind in der öffentlichen Erklärung selbst verlinkt.

## Offene Punkte

1. **Dauerhafter Einwilligungsnachweis:** Derzeit wird kein vom Betreiber kontrolliertes Protokoll von Einwilligungstext-Version, Zweck und Zeitpunkt geführt. Die Nachweisanforderung aus Art. 7 Abs. 1 DSGVO ist deshalb technisch nicht als erledigt zu behandeln. Ein möglicher Nachweisweg und seine Rechtsgrundlage, Datenminimierung, Speicherdauer, Widerrufs- und Löschabläufe müssen gesondert bewertet und ausdrücklich freigegeben werden.
2. **Rechtsgrundlage und § 25 TDDDG:** Die konkrete Einordnung des Anmeldedienstes und der lokalen Speicherzugriffe ist weiterhin einer rechtlichen Prüfung vorbehalten. Diese redaktionelle Überarbeitung ist keine Rechtsberatung und schließt die Frage nicht.
3. **Frische Browserprofilprüfung:** Eine aktuelle Netzwerk- und Cookieprüfung im frischen Profil für alle externen Karten- und Authentifizierungsabläufe ist getrennt zu dokumentieren; Quellcodeprüfung allein ersetzt diese Beobachtung nicht.
4. **Firebase-Einstellungen:** Die Kontoeinstellungen und Einschränkungen des bestehenden Projekts beruhen teilweise auf vom Betreiber übermittelten Prüfhinweisen. Diese Datei behauptet keine unabhängige Einsicht in jede aktuell gespeicherte Konsoleneinstellung.
5. **Dynamische Beteiligung:** Es gibt keine produktive Datenbank, Rollen- oder Gruppenverwaltung für diese Funktionen. Die mögliche kostenfreie Firestore-Erweiterung wird separat geprüft. Bis zu einer abgeschlossenen Prüfung und Aktivierung bleiben Firestore, bezahlte Tarife und dynamische Beteiligungsfunktionen unangetastet.

## Quellen

- GitHub Pages Datenerhebung: <https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection>
- GitHub Datenschutzerklärung: <https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement>
- US-Handelsministerium, GitHub DPF-Eintrag: <https://www.dataprivacyframework.gov/participant/6174>
- Firebase Privacy and Security: <https://firebase.google.com/support/privacy>
- Hamburger Datenschutzaufsicht: <https://datenschutz-hamburg.de/>
- DSGVO, Verordnung (EU) 2016/679: <https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679>
- § 25 TDDDG: <https://www.gesetze-im-internet.de/ttdsg/__25.html>
