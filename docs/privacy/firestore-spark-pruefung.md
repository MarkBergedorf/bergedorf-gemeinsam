# Prüfung: Firestore als kostenlose Erweiterung

**Stand:** 27. November 2026  
**Projektstatus:** nur geprüft und vorbereitet; nicht aktiviert  
**Tarifstatus:** keine Abrechnungsänderung vorgenommen

## Ergebnis

Cloud Firestore kann grundsätzlich im kostenlosen Firebase-Spark-Tarif mit einem kostenlosen Datenbankkontingent genutzt werden. Firebase nennt derzeit je Projekt genau eine dafür berechtigte Datenbank, bis zu 1 GiB gespeicherte Daten, 50.000 Dokument-Lesevorgänge pro Tag, 20.000 Schreibvorgänge pro Tag, 20.000 Löschvorgänge pro Tag und 10 GiB ausgehenden Datentransfer pro Monat. Die täglichen Kontingente werden ungefähr um Mitternacht US-Pazifikzeit zurückgesetzt. Für Cloud Firestore muss keine Abrechnung aktiviert werden, solange nur die Spark-Funktionen und deren Kontingente genutzt werden.

Das ist eine **Kontingentgrenze, keine garantierte dauerhafte Verfügbarkeit und keine allgemeine Kostengarantie für alle Firebase-Dienste**. Auf Spark wird die Nutzung eines Produkts nach Überschreiten seines kostenlosen Kontingents für den Rest des Abrechnungszeitraums unterbrochen. Einige Firestore-Funktionen sind nicht kostenlos und erfordern Abrechnung, darunter TTL-Löschungen, Point-in-Time Recovery, Backups, Wiederherstellungen und Datenbank-Klone. Diese Funktionen gehören nicht zu einer Spark-only-Lösung.

## Eignung für die offenen Projektphasen

Eine begrenzte Umsetzung von Arbeitsbereichen und Gruppen kann technisch direkt über den Firebase-Webclient und Firestore Security Rules erfolgen. Die Regeln können Authentifizierung, bestätigte E-Mail-Adressen, Eigentümerschaft und festgelegte Mitgliedschaften prüfen. Die Rules müssen vor jeder Datenverbindung vollständig entworfen, getestet und standardmäßig geschlossen sein. Die vorhandene Firebase Authentication kann dabei Identitäten bereitstellen; die Verifikation der E-Mail-Adresse allein darf jedoch keine Schreib-, Moderations- oder Verwaltungsrolle verleihen.

Sicher verwaltete Rollen brauchen eine vertrauenswürdige Zuweisung, die Benutzer nicht selbst ändern können. Firebase dokumentiert benutzerdefinierte Claims als serverseitig über die Admin SDK gesetzte Rollen. Cloud Functions und andere abrechnungspflichtige Serverfunktionen sind deshalb kein Teil der Spark-only-Variante. Als enge Alternative können privilegierte Rollen ausschließlich von einer berechtigten Betreiberperson in der Firebase-Konsole in einem gegen Client-Schreibzugriffe gesperrten Dokument gepflegt werden; das ist manuell, verlangt sorgfältige Rules und liefert keine automatisierte Moderations- oder Prüfwarteschlange.

Eine Spark-only-Implementierung kann daher allenfalls eine klar abgegrenzte Beteiligungsfunktion mit begrenztem Datenmodell, überprüften Sicherheitsregeln und manueller Betreiberverwaltung vorbereiten. Eine vollständige Plattform mit automatisierter Moderation, verlässlicher Missbrauchserkennung, serverseitigen Workflows, zeitgesteuerten Löschungen oder garantierter Weiterverarbeitung bei Spitzenlast ist damit nicht abgedeckt. Wird ein Gratis-Kontingent überschritten, muss mit einer Unterbrechung der betreffenden Funktion gerechnet werden.

## Datenstandort, Datenschutz und Löschung

Firestore unterstützt regionale und multiregionale Standorte. Der Standort der Standarddatenbank muss bei ihrer Erstellung gewählt werden und hängt teilweise von den bereits eingerichteten Standardressourcen des Google-Cloud-Projekts ab. Der konkrete aktuelle Standort und die Standardressourcen des bestehenden Projekts wurden in dieser Prüfung nicht aus einer Firebase-Konsole bestätigt. Vor einer späteren Einrichtung wären daher zunächst Projektstandort, zulässige Datenflüsse, Vertragsbedingungen und der gewünschte Datenstandort gemeinsam zu prüfen. Ein europäischer Firestore-Standort würde nicht bedeuten, dass Firebase Authentication ebenfalls ausschließlich in Europa verarbeitet wird; Google weist für Authentication US-Rechenzentren aus.

Das Löschen eines Firestore-Dokuments löscht Unterkollektionen nicht automatisch. Eine Löschfunktion für Konten oder Gruppen muss deshalb alle betroffenen Dokumente und Unterkollektionen ausdrücklich erfassen und kontrolliert löschen. TTL ist für diese Datenbank nicht als kostenlose automatische Löschlösung verfügbar. Auch die kostenlose Datenbank braucht ein überprüfbares Verfahren für Auskunft, Berichtigung, Löschung, Rollenentzug, Sicherung und Reaktion auf Missbrauch; das kostenlose Kontingent ersetzt keine Datenschutz- oder Sicherheitsprüfung.

## Vor einer möglichen Freigabe

1. In der Firebase-Konsole den vorhandenen Projekt- und Abrechnungsstatus sowie bereits angelegte Firestore-Datenbanken prüfen; nichts erstellen oder aktivieren.
2. Den Standort der Standardressourcen und einen passenden Firestore-Standort bewerten. Standortwahl und Folgen für Authentifizierungsdaten getrennt dokumentieren.
3. Das konkrete Datenmodell, Datenminimierung, Rollen, Gruppenbeitritt, Veröffentlichungsstatus, Melde-/Sperrprozess und vollständige Löschpfade festlegen.
4. Firestore Security Rules standardmäßig verweigern lassen und vor Nutzung mit positiven und negativen Rollenfällen testen. Insbesondere dürfen normale Nutzer keine Rollen oder Moderationsrechte vergeben.
5. Eine Spark-Kontingentüberwachung, eine sichtbare Ausfallbehandlung und ein manuelles Verfahren für Moderation, Betroffenenanfragen und Kontolöschung festlegen.
6. Datenschutzinformationen und erforderliche Rechtsgrundlagen, Nachweise sowie Googles Vertragsbedingungen vor dem Erheben echter Beteiligungsdaten aktualisieren und prüfen.
7. Vor einer Aktivierung oder einer Verbindung der Website mit Firestore eine gesonderte Umsetzungsentscheidung treffen. Eine Verknüpfung mit einem Cloud-Billing-Konto oder die Nutzung kostenpflichtiger Funktionen kann den Wechsel zum Blaze-Tarif auslösen.

Bis dahin bleiben die Beteiligungs- und Gruppenfunktionen deaktiviert. Es wurde weder eine Firestore-Datenbank angelegt noch eine Firebase-Konfiguration, Abrechnung, Security Rule oder Website-Verbindung geändert.

## Offizielle Firebase-Quellen

- [Firebase-Tarife: Spark und Blaze](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans)
- [Cloud Firestore: Kontingente und Abrechnung](https://firebase.google.com/docs/firestore/pricing)
- [Firestore-Speicherorte](https://firebase.google.com/docs/firestore/locations)
- [Security Rules und Firebase Authentication](https://firebase.google.com/docs/rules/rules-and-auth)
- [Firebase Custom Claims und Rollen](https://firebase.google.com/docs/auth/admin/custom-claims)
- [Firestore-Daten löschen](https://firebase.google.com/docs/firestore/manage-data/delete-data)
- [Firebase: Datenschutz und Datenverarbeitung](https://firebase.google.com/support/privacy)
