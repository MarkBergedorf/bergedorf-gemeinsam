# Zwischenauftrag Begegnungsorte – 13. November 2026

Ausgangscommit: 3e71a9b6c11426fd20cbbd0b7335efc6a60759e5.

## Umfang

Der beigefügte Zwischenauftrag (Startseitenbereinigung, neues Fachthema und politisches Anliegen) wird einschließlich der drei Ergänzungen zur Registrierung, allgemeinen Zielsetzung und verbindlichen politischen Bewertung umgesetzt. Arbeitsaufträge 5–7 werden nicht begonnen. Private Sites-Version 99 wird nicht angesprochen.

- Startseite: ausschließlich den historischen Kartenblock unter dem Einführungsbereich entfernt; danach folgen die bisherigen aktuellen Beiträge.
- Geschichtsbereich: bisherige historische Themenkarte unverändert.
- Neues Fachthema: `#einsamkeit/ursachen/t2-7`, als zusätzliche Synthese neben den unveränderten t2-4, t2-5 und t3-5. Neue Kennung 2.7. 139 Ansichten: 18 Hauptthemen, 109 Unterthemen, 12 tiefere Knoten. Die historische Konzeption und der frühere Quellenindex bleiben als Dokumentation unverändert. Der neue Fachtext verwendet die vorhandenen Forschungsquellen und neue, separat dokumentierte Anbieter-/Verwaltungsquellen.
- Politischer Beitrag: `#politik/begegnungsorte`; gesonderte redaktionelle Karte im Politikbereich und unter aktuellen politischen Themen. Kein Dokument eines erfundenen Nutzers und keine amtliche Position. Bestehende Bürger- und Beispielbeiträge sowie Sitzungsinformationen bleiben erhalten.
- Gemeinsame historische Sammlung: alle Querverweise führen zu `#einsamkeit/stadtteile/t10-6`; keine Kopie und keine Änderung historischer Bild-/Ortsdaten.

## Recherche

Quellen stehen mit Aussagegrenzen direkt im politischen Beitrag und in `frontend/lib/loneliness-sources-encounters.json`. Verifiziert wurden amtliche RISE-Darstellung zum Zentrum Bergedorf, Engagementförderrichtlinien, Aktionsplan Altersfreundliches Hamburg, Hamburger Teilhabeangebote, KörberHaus-Selbstdarstellung, Bezirksvorlage 22-0934 zum Bürgerhaus Allermöhe, Zuständigkeitsdarstellungen und §-46-LHO-Verwaltungsvorschriften.

Polnisches ELI: geltende konsolidierte Verordnung Dz. U. 2023 poz. 2014, insbesondere §§ 2–10 (Änderung 2022). Satz 70 %, Aufschlagsobergrenze 45 %; definierte Rohstoffbasis einschließlich Aufschlag, keine Quote aller Betriebskosten. Monatsprognosen der Finanzverwaltung Olsztyn dokumentieren 2026 die Anwendung. Keine pauschale Übertragbarkeit auf Hamburg und kein aus einer Fördernorm abgeleiteter Nachweis sozialer Wirkung.

Die Forschung zu alltäglichen Kontakten und gemeinsam verbrachter Zeit wird anhand der bestehenden Publikationen Sandstrom/Dunn (2014) und Hall (online 2018 / Band 2019) verknüpft. Vorhandene Armutsexpertise wird wiederverwendet. Historisches Beispiel Sander Krug folgt ausschließlich dem bestehenden belegten Datensatz. Keine erfundene Schließungsdatierung, keine behauptete flächendeckende Bestandsmessung und keine behauptete Kausalität Gaststättenverlust → Einsamkeit.

## Tatsächlicher Registrierungsstatus

**Nur vorbereitet, nicht aktiv.** GitHub Pages liefert statische Dateien. `frontend/pages/backend-client.mjs` hat `apiBase:null`, `writesEnabled:false`, keine operativen Registrierungsendpunkte. Es ist kein sicherer E-Mail-/Speicherdienst eingerichtet oder nachgewiesen. Das neue Formular hat ein deaktiviertes Fieldset, deaktivierten Submitbutton, keine Feldnamen für Übermittlung, keine action, keinen Versand-, Speicher- oder Netzwerkkode. Submit wird zusätzlich verhindert. Keine Erfassung auch im Browser. Kein aktiver Bestätigungs-, Abmelde- oder Versandlink wird vorgetäuscht.

Einwilligungen zur Unterstützung und zur einmaligen Petitionsinformation sind getrennt und leer. Unterstützung muss später ohne Petitionshinweise möglich sein. Politischer Bezug wird ausdrücklich genannt. Datenschutzerklärung beschreibt ausschließlich den aktuellen inaktiven Zustand und die vor Aktivierung nötigen Ergänzungen.

## Infrastruktur und Freischaltbedingungen

1. Eigenes HTTPS-Backend und private Datenbank mit standardmäßig verweigerten öffentlichen Lese-/Schreibrechten; keine Registrierungen in Git, statischen JSON-Dateien, Analysediensten oder Browserspeicher. Serverseitige Validierung, Größenlimits, CSRF-/Origin-Prüfung nach gewählter Architektur. Keine Schlüssel im Frontend.
2. Transaktionaler E-Mail-Dienst mit überprüfter Absenderdomain, SPF/DKIM/DMARC und serverseitiger Credential-Verwaltung. Anbieter, Speicherorte, Unterauftragnehmer, Auftragsverarbeitung und eventuelle internationale Übermittlungen vor Auswahl dokumentieren. Kein konkreter Anbieter ist bereits eingerichtet.
3. Minimales Datenmodell: interne ID, E-Mail verschlüsselt beziehungsweise geschützt, zweckgebundene Adress-Suchkennung, Forderungs-ID/-Version, getrennte boolesche Einwilligungen, unveränderlicher Einwilligungstext/-Version und Datenschutzhinweisversion, Anfragezeit, Bestätigungszeit, Status je Zweck, Widerrufszeit, Versandstatus für die eine Petition. Politische Meinung als besondere Kategorie berücksichtigen: ausdrücklich erteilte Einwilligung, Art. 6(1)(a), Art. 9(2)(a) DSGVO; keine unnötigen weiteren personenbezogenen Angaben.
4. Double-Opt-in: hochentropisches Einmaltoken, nur Hash serverseitig speichern, zeitlich begrenzen; ausgewählte Zwecke in der Nachricht klar wiedergeben. Bloßes GET durch E-Mail-Scanner darf keine Zustimmung aktivieren: ausdrückliche Bestätigung auf einer sicheren Seite mit POST vorsehen. Token nicht in Referer, Analytics oder Logs offenlegen. Bestätigung muss atomar und idempotent sein. Unbestätigte Adressen ausschließlich für angeforderte Bestätigung und erforderliche Abwehr verarbeiten; kein Unterstützerstatus, kein Petitionsversand.
5. Versandmissbrauch verhindern: serverseitige Limits pro Adresse, Ursprung und Zeitraum, Wiederhol-/Dublettenbremse, generische Antworten gegen Enumeration, Quoten und geeignete datensparsame Bot-Abwehr. Double-Opt-in allein verhindert Bestätigungsmail-Spam nicht. Fremde Wiederanmeldung darf bestätigte Zustände nicht ändern oder jemanden ohne neue ausdrückliche Auswahl für Petitionsmails freischalten.
6. Abmeldung ohne Konto: eigener sicherer Token, GET zeigt Auswahl, ausdrückliche Aktion widerruft. Getrennt Petitionshinweise abmelden oder gesamte Unterstützung samt Daten widerrufen. Opt-out muss vor Versand erneut geprüft werden. Kontakt per E-Mail zusätzlich ermöglichen. Kein erzwungener Login.
7. Einmaliger späterer Versand: konkrete Petition vorab redaktionell prüfen; Titel, Ziel, Forderung, direkter Link, Mitzeichnungsanleitung, Freiwilligkeit und Abmeldung enthalten. Nur bestätigte, zum Versandzeitpunkt nicht widerrufene Benachrichtigungseinwilligungen auswählen. Eindeutige Kampagnen-/Empfängerkennung und atomare Versandfreigabe mit Wiederholungsschutz, nicht blind nach unklarem Versandresultat erneut senden. Keine BCC-Adressliste und keine andere Kampagne. Unterstützung allein berechtigt nicht zum Versand. Registrierung ist keine rechtswirksame Petitionsmitzeichnung.
8. Verwaltung: Least-Privilege-Rollen, MFA, keine öffentliche Adressliste oder offene Exporte, Zugriffsprotokoll ohne unnötige Inhalte, Verschlüsselung bei Übermittlung und Speicherung, Rotation, Backups und Wiederherstellungsprüfung. Sicherheitsvorfälle und Betroffenenanliegen bearbeiten können.
9. Löschkonzept vor Start verbindlich festlegen: kurze Frist für unbestätigte Anmeldungen; Unterstützung und Benachrichtigung getrennt zweckgebunden bewerten; bei Widerruf oder Zweckende operative Daten löschen. Nach einmaliger Benachrichtigung kein allgemeiner Verteiler. Allenfalls erforderliche minimale Einwilligungs-/Widerrufsnachweise mit eigener begründeter Frist aufbewahren, nicht zur Kommunikation nutzen. Löschjobs und Backup-Ablauf einschließlich Restore-Sperrliste prüfen. Konkrete Fristen sind noch nicht entschieden und werden nicht als laufender Betrieb ausgegeben.
10. Datenschutz vor erster Erfassung vervollständigen: tatsächliche Empfänger/Anbieter, Verarbeitungsorte, Rechtsgrundlagen, Zweckbindung, konkrete Fristen, getrennte Widerrufsmöglichkeiten, Betroffenenrechte, Pflichtinformationen und Ansprechpartner. Erforderlichkeit einer Datenschutz-Folgenabschätzung anhand des endgültigen Umfangs prüfen.

## Erforderliche Integrationstests vor Aktivierung

Erfolg, ungültige Adresse, leere Einwilligung, Unterstützung ohne Petitionsmail, beide Zwecke, nicht vorausgewählte Checkboxen; abgelaufene/verbrauchte/manipulierte DOI-Token, Scanner-GET, parallele Bestätigung, fremde Wiederanmeldung, Wiederholungslimits; kein Versand ohne Bestätigung oder nach Widerruf; getrennte Abmeldung, vollständige Löschung und Löschjobs, Zweckende, Berechtigungsumgehung, öffentliche DB-Leseversuche, Enumeration und Token-/Adresslecks. Versand genau einmal einschließlich unklarem Providerresultat prüfen. Erst mit überprüfter produktiver Konfiguration das Formular aktivieren.

## Bestandsschutz und Testanpassungen

Die früheren 138 Knoten und ihre Inhalte werden nach Entfernen ausschließlich der neuen Kennung t2-7 mit dem bisherigen bytegleichen Hierarchiestand verglichen. Frühere Quellenregister/Konzeptionen bleiben Dokumentation ihres damaligen Standes; die neue Synthese ist über eigene Quellen und diesen Nachtrag dokumentiert. Die bisherigen Testschutzregeln werden für die ausdrücklich beauftragte Erweiterung aktualisiert, nicht entfernt. Historische Medien und Orte sowie frühere Artikel bleiben unverändert.

## Lokale Abschlussprüfung

- 142 Tests erfolgreich, keine ausgelassenen oder fehlgeschlagenen Tests.
- Regulärer Produktionsbuild erfolgreich; statische Prüfung: 263 Dateien, noindex aktiv, 4 Beispiele, 69 bestehende redaktionelle Katalogeinträge, 0 operative Datensätze. Der neue politische Beitrag wird als getrennte redaktionelle Ansicht ausgeliefert, nicht als erfundener Nutzerdatensatz.
- GitHub-Pages-Synchronisierung erfolgreich. Bestehende Buildhinweise zu Chunkgröße und zur beim Build extern aufgelösten Leaflet-CSS-Adresse bleiben Hinweise, keine fehlgeschlagenen Checks; lokale Leaflet-CSS-Datei ist in der synchronisierten Ausgabe vorhanden.
- Alle 176 historischen Bilddateien (88 Großansichten und 88 Vorschaubilder) bytegleich zum Ausgangscommit; Medien- und Orts-JSON unverändert.
- Tatsächliche Browserprüfung: Startseite, neuer politischer Beitrag, gesperrtes Formular, Fachtext, Themenhierarchie und historischer Verzeichnislink geöffnet. Neue Felder werden als deaktiviert und beide Checkboxen als leer ausgegeben. Echte Smartphoneprüfung nicht verfügbar; mobile Regeln und Umbruchverhalten im Code geprüft.
- Öffentliche Livekontrolle erfolgt nach Veröffentlichung. Ihr Ergebnis wird im Abschlussbericht mitgeteilt; dieser vor Veröffentlichung erstellte Nachweis behauptet noch keinen erfolgreichen Liveabruf.

## Geänderte Quelldateien

- frontend/app/encounter-policy.tsx (neu), encounter-policy.css (neu): politischer Text, Bewertungsmaßstab, Quellen, registrierungsfreie Vorschau und Querverweise.
- frontend/app/platform.tsx: Startseitenkarte entfernen, direkte politische Artikelroute.
- frontend/app/political-topics.tsx: eindeutig redaktionelle Themenkarte zusätzlich zu Bürger- und Beispielbeiträgen.
- frontend/app/loneliness.tsx: neuer Einstieg, Querverweise und aktualisierte Zählung.
- frontend/app/loneliness-article.tsx: zutreffendes Datum für neue Artikel, bisheriger Standard erhalten.
- frontend/lib/loneliness-topics.json: alleinige Ergänzung t2-7; vorhandener Baum erhalten.
- frontend/lib/loneliness-articles.mjs: zusätzliche Artikel- und Quellenmodule einbinden.
- frontend/lib/loneliness-articles-encounters.json und loneliness-sources-encounters.json (neu): Fachtext und neue Quellen.
- frontend/pages/privacy.tsx: inaktiven Unterstützungsbereich und Freischaltvoraussetzungen ergänzen.
- frontend/tests/encounter-policy.test.mjs und fixtures/original-hierarchy.mjs (neu): gerenderte Inhalte, sichere Sperre, Einwilligungstrennung, Hierarchiebestand und Quellen prüfen.
- frontend/tests/historical-directory-entry.test.mjs, loneliness-articles.test.mjs, loneliness-concept.test.mjs, loneliness-editorial-review.test.mjs, loneliness-places.test.mjs, loneliness-support.test.mjs, loneliness.test.mjs: Erwartungen für die beauftragte einzelne Erweiterung und Kartenverschiebung aktualisieren; vorherige Bestandsschutzprüfungen beibehalten.
- docs/BEGEGNUNGSORTE-REGISTRIERUNG-2026-11.md (neu): dieser Umsetzungs- und Freischaltnachweis.
- index.html, 404.html und versionsbezogene JS-/CSS-Bundles in assets/: ausschließlich aus dem regulären Build synchronisiert; ersetzte alte Bundles entfernt. Historische Bilddateien werden nicht verändert.
