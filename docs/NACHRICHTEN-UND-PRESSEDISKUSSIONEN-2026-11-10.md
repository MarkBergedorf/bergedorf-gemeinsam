# Eigenständige Nachrichtenseite und vorbereitete Pressediskussionen

Ausgangspunkt: main, cdfe71973266ada437bfe03f4b91c080a6bc5bc6. Ausschließlich öffentliche GitHub-Pages-Fassung; private Sites-Version 99 bleibt unangetastet.

## Navigation und bestehende Inhalte

Die eigenständige Route lautet `#nachrichten`, Überschrift „Aktuelle Bergedorfer Nachrichten“. Die Hauptnavigation führt dorthin und kennzeichnet die aktive Seite. `#start/nachrichten` wird sowohl vom Parser als Nachrichtenseite erkannt als auch mit History-Ersetzung nach `#nachrichten` umgeleitet; Queryparameter bleiben erhalten. Dadurch wird kein zusätzlicher Zurück-Schritt erzeugt.

Die Startseite behält ihren bisherigen Nachrichtenabschnitt vollständig. Die unveränderten Texte und beiden lokalen Medienlinks werden über `frontend/app/local-news.tsx` wiederverwendet. Auf der Nachrichtenseite heißt dessen Bereichsüberschrift „Lokale Nachrichtenmedien“. Keine Übernahme von Artikeln, Feeds, Vorschau-Bildern oder fremden Volltexten; nur Links zu Verlagsangeboten. Keine Verlagsanfragen durch die Website vor dem bewussten Öffnen eines Links. Die vorhandene globale externe Linkbestätigung bleibt unverändert, ebenso das Öffnen im neuen Tab.

## Tatsächlich überprüfte Medienadressen, 10. November 2026

| Medium | Verwendete Adresse | Prüfung und Einschränkung |
| --- | --- | --- |
| Bergedorfer Zeitung | https://www.abendblatt.de/hamburg/bergedorf/ | Bestehender Link unverändert; HTTP 200, Titel „Bergedorf - aktuelle News aus dem Hamburger Bezirk und Stadtteil“. Teilweise kostenpflichtige Inhalte. |
| Bille Wochenblatt | https://emag.hamburger-wochenblatt.de/titles/hamburgerwochenblatt/10938/ | Bestehender Link unverändert; HTTP 200, Titel „Bille Wochenblatt - 07.11.2026“. Dauerhaft aktueller Verlagseinstieg; kein selbst konstruierter Tageslink. |
| Hamburger Abendblatt | https://www.abendblatt.de/epaper/ | Offizielle E-Paper-Einstiegsseite geprüft. Sie verweist auf den Webreader und nennt die erforderliche Abonnementfreischaltung; ergänzend https://aboshop.abendblatt.de/epaper. Keine Anmeldung oder kostenpflichtige Freischaltung durchgeführt. |
| Hamburger Morgenpost | https://epaper.mopo.de/ | Auf https://www.mopo.de/ als E-Paper verlinkt, beide HTTP 200; E-Paper-Titel „MOPO E-Paper“. Zusätzlich aus der eigenen Vorschau über Linkbestätigung im neuen Tab geöffnet. Recherchewerkzeug konnte MOPO-Seiten teilweise nicht lesen; Verlagsverweis und Erreichbarkeit wurden direkt per HTTP geprüft. |
| BILD-Zeitung | https://epaper.bild.de/ | Offizieller E-Paper-Einstieg mit Ausgabenübersicht geprüft. Offizielle Angebotsseite https://angebot.bild.de/bildepaper/ verweist auf diesen Browserzugang; Regionalausgaben einschließlich Hamburg sind in den Verlagsinformationen beschrieben. Kein unverifizierter Direktlink auf eine Hamburger Tagesausgabe. Die Auswahl Hamburg erfolgt beim Verlag, kein automatischer Hamburg-Filter zugesichert. |

Kostenpflichtige Zugänge werden auf der Seite kenntlich gemacht. Es wurden weder Paywalls umgangen noch Abonnements abgeschlossen oder Ausgaben kopiert. Eine vollständige Funktionsprüfung nach kostenpflichtiger Anmeldung gehört nicht zu dieser Prüfung.

## Gesperrte Beteiligungsfunktion

Die öffentliche Seite erläutert ausschließlich die spätere Funktion und bietet eine eingeklappte, ausdrücklich gesperrte Formularvorschau. `fieldset disabled` sperrt alle Eingabe-/Auswahlelemente und den Button (zusammen 18 Elemente); es gibt kein absendbares Formular, keine Speicherung, keine öffentliche Schreibschnittstelle und keine Moderationsfreischaltung. Weder LocalStorage noch SessionStorage werden für Pressediskussionen eingerichtet. Die vorhandenen Backend- und Berechtigungsgrenzen bleiben unverändert. `pressDiscussionEnabled` ist ausdrücklich `false` und kein öffentlicher Einschalter.

Vorbereitet in `frontend/lib/press-discussions.mjs` und `frontend/app/news.tsx`:

- Medium, Erscheinungsdatum, Originalüberschrift; Autor und Ressort nur soweit angegeben, keine erfundenen Angaben.
- Online: direkter HTTP-/HTTPS-Artikel-Link; keine Seitenpflicht. Print: Ausgabe und Seitenzahl zwingend, öffentliche URL optional. Redaktion muss prüfen, dass ein Online-Link tatsächlich einen bestimmten Artikel identifiziert.
- Ausführliche eigene Themenbeschreibung, Sachverhalt, konkreter Bergedorf-Bezug, persönliche Meinung und Diskussionsfrage als getrennte Felder.
- Exakte ausdrückliche Bergedorf-Bestätigung und Auswahl zwischen unmittelbarem und übergeordnetem Thema.
- Bei übergeordnetem Thema zusätzliche ausführliche Darstellung, wie und wodurch Bergedorf betroffen ist. Ein allgemeiner Hamburg-Bezug genügt nicht. Fehlende Begründung ist unvollständig.
- Strukturelle Prüflogik als reine Funktionen; sie ersetzt keine tatsächliche Prüfung der sachlichen Richtigkeit oder des Bergedorf-Bezugs. Vorbereitete Mindestlängen: Beschreibung, Sachverhalt, Bergedorf-Bezug und übergeordnete Betroffenheit 100 Zeichen, Meinung 30, Frage 20. Diese internen Vorbereitungswerte sind bei der späteren Umsetzung überprüfbar; derzeit werden keine Eingaben angenommen.
- Nicht eingebundene Darstellungskomponente für spätere Einträge: Originalquelle, eigene Beschreibung, sachliche Wiedergabe, Bergedorf-Bezug, konkrete Auswirkungen, Meinung und Frage mit separaten Überschriften. Quellenlinks werden vor Darstellung auf HTTP/HTTPS ohne Zugangsdaten begrenzt. Texte werden als React-Text ausgegeben, kein fremdes HTML ausgeführt.

## Artikelzuordnung, Moderation und Versionen – spätere Backend-Anforderungen

Das bestehende `workspace.mjs` kennt Entwürfe, manuelle Prüfaufträge, Einreichungszeitpunkt und getrennte veröffentlichte Fassungen. Ein eigener Presseartikeltyp, eine persistente Artikelzuordnung und eine entsprechende Dublettenerkennung waren dort bislang nicht angeschlossen. Diese Änderung erweitert weder dessen Schreibaktionen noch die öffentlichen Datenbestände.

Die neue reine Kandidatensuche bereitet eine solche Zuordnung vor: normalisierte Artikel-URL ohne Fragment und bekannte Trackingparameter; identifizierende Queryparameter bleiben erhalten. Weitere Suchschlüssel sind Medium + Datum + Originalüberschrift sowie bei Print zusätzlich Ausgabe + Seite. Ergebnisse sind nur mögliche Treffer zur manuellen Prüfung; ähnliche Überschriften oder mehrere Berichte über dasselbe Ereignis beweisen keine Artikelidentität. Keine automatische Zusammenführung und keine Netzwerkabfrage zum Artikel.

Späteres Datenmodell: eigener Artikelbestand mit `articleId` und vollständigen Quellenmetadaten. Diskussionen und ihre Revisionen verweisen auf dieselbe geprüfte `articleId`; Print- und Onlineversionen können erst nach manueller Prüfung als derselbe Artikel zugeordnet werden. Änderungen an Quelldaten sind ebenfalls versioniert. Bei Wiedererkennung auf vorhandene Diskussion verweisen, statt unbemerkt eine parallele Diskussion zu veröffentlichen. Persistente Eindeutigkeit und konkurrierende Einreichungen müssen im Backend transaktional abgesichert werden.

Lebenszyklus: Entwurf → zur Prüfung eingereicht → manuell freigegeben / Änderung angefordert / zurückgehalten. Jede neue oder geänderte Fassung benötigt eine manuelle Entscheidung; die letzte ausdrücklich freigegebene Version bleibt bis dahin die öffentliche Fassung. Technisch darf nur eine berechtigte Moderationsrolle den veröffentlichten Revisionszeiger setzen. Kein automatisches Freigeben allein aufgrund bestandener Feldprüfung.

Erforderliche Zeit-/Prüfdaten werden serverseitig gesetzt: ID, Artikel-ID, interne Autor-ID, erste Einreichung (`submittedAt`, unveränderlich), Revisionen mit ID, Änderungszeitpunkt, Bearbeiter, vollständigem Quellen-/Text-/Bergedorf-Bestätigungsstand, Prüfzeitpunkt, prüfender Rolle und Entscheidung sowie `publishedRevisionId`. Öffentlich: Einreichungszeit, Änderungszeit und nachvollziehbare freigegebene Änderungshistorie; interne Identitäten, Prüfnotizen und ungeprüfte Fassungen bleiben geschützt. Keine ausgedachten Zeitstempel.

Vor einer Aktivierung gesondert umzusetzen und ausdrücklich zu beauftragen: tatsächliche Speicherung, Anmeldung und Rollenprüfung, serverseitige Validierung, manuelle Prüfung, Revisions-/Audit-Speicher, sichere Artikelzuordnung, Missbrauchsschutz, Datenschutzangaben und Aufbewahrung/Löschung, Sicherheitsprüfung und Tests. Keine Aktivierung durch diese vorbereitete Formularstruktur.

## Prüfung

Regulärer Produktionsbuild, vorhandene Tests und zusätzliche Nachrichten-/Regeltests. Regressionen sichern den bisherigen Startseiteninhalt und Sitzungsplan sowie Karten-/Datenschutz-/Installationsgrenzen ab. Neue Tests prüfen alte/neue Route, die Medienziele, Online-/Print-Pflichten, ungültige Daten und gefährliche URLs, ausdrückliche Bergedorf-Bestätigung, bedingte Betroffenheitsbegründung und konservative Dublettenkandidaten.

Desktop-Vorschau im Browser: eigenständige Seite über Hauptnavigation erreicht, alle fünf Medienzugänge und die gesperrte Formularvorschau sichtbar, externe Linkbestätigung und MOPO-Öffnung im neuen Tab geprüft. Alle Formular-/Auswahlelemente und der Button sind tatsächlich deaktiviert (zusammen 18 Elemente einschließlich Button). Keine absendbare Form vorhanden. Altes Lesezeichen `#start/nachrichten?quelle=lesezeichen` im Browser geprüft: Umleitung nach `#nachrichten?quelle=lesezeichen`, Parameter erhalten.

Responsive CSS: Medienkarten unter 900 px einspaltig, bestehende lokale Links unter 700 px einspaltig, Formularfelder und Links auf die verfügbare Breite begrenzt; zusätzliche Abstände unter 600 px. Eine tatsächliche Smartphone-Sichtprüfung ist mit den hier verfügbaren Browsersteuerungen nicht möglich. Daher keine Behauptung eines Smartphone-Hardwaretests oder einer visuell geprüften mobilen Emulation.

`noindex`, öffentliche Schreibsperre, bestehende redaktionelle Inhalte, Politik/Sitzungskalender, Karten, Datenschutz/Impressum und Installationshilfe werden nicht verändert. Produktionsdateien werden ausschließlich durch den regulären Build und `scripts/sync-pages.mjs` erzeugt.

Abschließende lokale Prüfung: 60 Tests bestanden, 0 fehlgeschlagen; regulärer Produktionsbuild erfolgreich (87 Dateien, noindex bestätigt, 4 fiktive Beispiele, 69 redaktionelle Einträge, 0 Live-Datensätze). Produktionsausgabe mit `scripts/sync-pages.mjs` vollständig synchronisiert. Bestehende Buildhinweise zu Chunkgrößen und zur zur Laufzeit aufgelösten Leaflet-CSS-Adresse bleiben unverändert.

Nachkontrolle: Die erste Veröffentlichung der Nachrichtenseite wurde öffentlich im Browser erreicht; alle fünf Linkziele mit `_blank` und die vollständige Schreibsperre wurden dort bestätigt. Die Weiterleitung wird bei jedem neuen Routenobjekt geprüft, damit auch der Wechsel von der neuen zur alten Adresse mit identischen Parametern die kanonische Adresse wiederherstellt. Dieser Randfall wurde anschließend in der Vorschau ausdrücklich mit identischen Queryparametern erfolgreich geprüft. Abschließender Build und erneut alle 60 Tests erfolgreich.
