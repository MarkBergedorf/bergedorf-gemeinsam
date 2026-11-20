# Arbeitsauftrag 18 – Prüf- und Umsetzungsbericht

Stand: 20. November 2026 (Europe/Berlin)

**Ergänzung:** Der ergänzende Live-Abnahmebericht [Arbeitsauftrag 18 – ergänzende Abnahme und offene Prüfungen](ergaenzung-arbeitsauftrag18-abnahme-2026-11-20.md) aktualisiert die hier festgehaltenen Zahlen, Live-Befunde und offenen Punkte. Bei abweichendem Status gilt der ergänzende Bericht; dieser Bericht bleibt als historischer A18-Stand erhalten.

## Auftrag und Ausgangsstand

Geprüft wurde das bestehende Repository `MarkBergedorf/bergedorf-gemeinsam`. Ausgangsbranch `main`, Stand `ea53f448b891035e263501c9055a7baac56cb2e2`. A18 wurde als PR #6 aus `auftrag18-qa` (Kopf `b5977ffa0c17b2331c6a3621a15cf3b602bac9f7`) am 20.11.2026 in `main` zusammengeführt; Merge-Commit `a4ec911ef3280a2799551d667e47a2b9fe06dcec`. GitHub Pages Workflow #61 (`44741566499`) für den Merge-Commit ist erfolgreich abgeschlossen. PR #4 zu Arbeitsauftrag 17 war bereits am 19.11.2026 zusammengeführt; Pages-Läufe #59 und #60 waren für die Folgecommits erfolgreich.

A18-17 wurde mit dem tatsächlichen Merge-, Pages- und Live-Prüfstand in `docs/mietkosten/auftrag17.md` sowie in der Statuskorrektur zu Arbeitsauftrag 16/17 abgeglichen. Die frühere offene Veröffentlichungsaussage ist als historisch markiert. Ein älterer lokaler Reflow-Nachweis wird ausdrücklich nicht als Live-Mobilprüfung ausgegeben.

## Tatsächlich geänderte Dateien

- `frontend/app/platform.tsx` – „Über uns“ nur aus der oberen Hauptnavigation gefiltert; Seitenroute, Footer und direkte Adresse bleiben bestehen.
- `frontend/app/contributions.tsx` – Singular/Plural der Beispielzahl, getrennte Bürgerbeitragszählung und Beispieletikett berichtigt.
- `frontend/app/app-installation.tsx` – Hinweis an die öffentliche statische GitHub-Pages-Testfassung angepasst.
- `frontend/lib/participation.mjs` – öffentliche Themen und redaktionelle Inhalte beschrieben; künftige Beteiligung, Abwesenheitsregel und Uploadgrenzen klargestellt.
- `frontend/lib/press-discussions.mjs` – Stadtteilzeitung Lohbrügge und Hinz&Kunzt in die bestehende Medienauswahl aufgenommen.
- `frontend/app/credits-page.tsx`, `frontend/app/map-legend.tsx`, `frontend/app/legal-pages.tsx`, `frontend/lib/map-privacy-info.mjs` – Wappenhinweis ohne behauptete amtliche Erlaubnis; Kartenanbieter und Lizenzen auf den produktiven OpenFreeMap-/OpenMapTiles-/OSM-Stand ausgerichtet; frühere OSMF-Kacheln als historisch bezeichnet; Testbetrieb und Backendgrenzen verdeutlicht.
- `frontend/app/support.tsx` – die wirkungslose Schaltfläche „Finanzstand aktualisieren“ durch eine zutreffende Anzeige zum statischen Testbestand ersetzt.
- `frontend/tests/auftrag18-regression.test.mjs`, `frontend/tests/fixtures/auftrag18.mjs` sowie bestehende Preservations-/Regressionstests – sieben gezielte A18-Regressionen ergänzt und überholte Erwartungen der historischen Medienauswahl aktualisiert.
- `docs/mietkosten/auftrag17.md`, `docs/abschluss-auftrag16-17-2026-11-19.md` – A18-17-Status und Live-Prüfgrenzen berichtigt.

Die bereits vorhandenen Inhalte und Funktionen der Website, einschließlich der 51 Mietkostenabschnitte, acht Themenzugänge, 88 historischen Bildnummern, Karten, Profile und Formulare, wurden nicht entfernt.

## Teil A – Verbindliche Korrekturen

| Punkt | Ergebnis |
|---|---|
| A1 | Erledigt. Oberes Menü filtert nur `ueber`; Route `#ueber` und Footer-Link bleiben erhalten. Regressionstest ergänzt. |
| A2 | Erledigt. Beispielzahl verwendet Singular bei 1 und Plural sonst; Bürgerbeiträge und Beispiele werden getrennt benannt. Vier Beispiele bleiben als erfunden gekennzeichnet. |
| A3 | Erledigt für die geprüften öffentlichen Hinweise: Installationsseite und Informationsseiten nennen die öffentliche statische Testfassung; legitime Verweise auf die getrennte private Entwicklungsumgebung bleiben als solche abgegrenzt. |
| A4 | Erledigt im geprüften Quellen-, Kartenlegenden-, Datenschutz- und Zustimmungsbestand: OpenFreeMap Liberty, OpenMapTiles/OSM-Daten, ODbL, LGV/ALKIS und DL-DE-BY-2.0; frühere OSMF-Kacheln sind historisch markiert. Quelle und Lizenztexte wurden mit den offiziellen OSM-, OpenMapTiles- und GovData-Seiten abgeglichen. |
| A5 | Erledigt. Wikimedia-Commons-Herkunftslink und dauerhafte Seitenversion bleiben; eine amtliche Erlaubnis wird nicht behauptet. § 5 UrhG wurde anhand des amtlichen Gesetzestextes geprüft; daraus wird keine weitergehende wappenrechtliche Freigabe abgeleitet. |
| A6 | Erledigt. Öffentliche Seite sagt, dass produktive Einreichungen, Meldungen, Einsprüche und automatische Moderation nicht angeschlossen sind; E-Mail-Kontakt sowie Regeln und geplantes Konzept bleiben. |
| A7 | Erledigt. Sieben-Tage-Regel und Abwesenheitsvorrang werden ausdrücklich dem späteren Einreichungsbetrieb zugeordnet. |
| A8 | Erledigt. Allgemeine Beiträge haben keinen Upload; lokale Vorbereitungsformulare übertragen, veröffentlichen oder speichern Dateien nicht serverseitig. Eine spätere produktive Übermittlung erfordert separate Freigabe. |
| A9 | Erledigt. Über-Seite umfasst Nachrichten, Veranstaltungen, Einsamkeit/Begegnung, Mietkosten/Grundsicherung und Organisationsprofile; redaktioneller Bestand und vier Beispiele sind von künftigen Einreichungen getrennt. |

## Teil B – Hauptbereiche und Inhalte

| Bereich | Prüfergebnis und Grenze |
|---|---|
| B1 Startseite | Quellcode und Regressionen bestätigen vier fiktive Beispiele, getrennte redaktionelle Bereiche und den Themenzugang. Vollständiger visueller Durchgang aller Startseitenlinks steht noch aus. |
| B2 Anliegen | Such-/Beitragslogik und Beispieltrennung sind durch vorhandene Tests abgedeckt; eine neue manuelle Formulareinreichung wurde nicht durchgeführt. |
| B3 Erfahrungsberichte | Sortier-/Filterlogik und Kommentargrenze bleiben durch vorhandene Tests abgedeckt; praktischer End-to-End-Durchgang steht aus. |
| B4 Geschichte/Erinnerungen | Bestehende Tests bestätigen 88 Bildnummern, Rechteangaben, Prüfsummen und 139 Einsamkeitsansichten. Sechs Ortsbezüge bleiben in der Quelldokumentation. Externe Einzelnachweise wurden in dieser Runde nicht sämtlich erneut abgerufen. |
| B5 Politik | Bestehende Regressionen erhalten die Inhalte und Navigationsstruktur. Eine vollständige neue Prüfung aller amtlichen Ausschussbezeichnungen, Ausnahmen und sechs externen Gruppenlinks steht aus. |
| B6 Verzeichnis | Rohbestand: 69 redaktionelle Datensätze. Nach Gruppierung werden 66 Leserprofile angezeigt; alle Rohdatensätze haben Koordinaten. Zählweisen und drei untergeordnete Angebotsdatensätze sind im Ergänzungsbericht aufgeschlüsselt. |
| B7 Organisationen/Karten | Kartenmodell: 67 Standortpunkte, 60 verschiedene Koordinatenpaare, kein Datensatz ohne Koordinate. Gemeinsame Adressen und mehrere Standorte sind berücksichtigt. Die Live-Karte, Filter, Stationenauswahl, Popup und Entladen wurden teilweise geprüft; keine vollständige geografische oder alle Kartenvarianten umfassende Abnahme. |
| B8 Nachrichten | Quellstand und Tests führen sieben Medien. Live-Presseauswahl weiterhin nur fünf; PR #8 / Pages-Lauf #63 änderten das Root-Bundle nicht. Siehe Ergänzungsbericht; Veröffentlichung der gebauten Root-Assets noch offen. |
| B9 Veranstaltungen | Vorhandene Tests prüfen Berlin-Zeit, Zeitfilter, vergangene und künftige Veranstaltungen, Kosten-/Stadtteilfilter und stabile Links. Quellenabruf des einzelnen Veranstaltungstermins wurde in dieser Runde nicht erneut durchgeführt. |
| B10 Einsamkeit | Vorhandene Tests prüfen 139 Ansichten, Querverweise, Quellenzuordnungen und 88 historische Bildnummern. Eine vollständige Live-Abnahme der Karten, Suche und jeder einzelnen Unterseite steht aus. |
| B11 Mietkosten | Inhalt und Datenmodell enthalten weiterhin 51 Abschnitte, 33 Korrekturpositionen, acht Themenzugänge, Tabellen und Suche. Live-Prüfung am 20.11.2026 nach A18-Deployment: Desktopseite geladen; in schmaler Browseransicht bei ca. 337 CSS-Pixel effektiver Dokumentbreite kein horizontaler Seitenüberlauf; Navigation geöffnet; „Genossenschaftsanteile“ ergab 4 Treffer; die Kapitelübersicht enthielt alle 51 Kapitel; Direktaufruf von Kapitel 51 funktionierte. Ein früherer Live-Durchgang hatte drei Tabellen-Wrapper mit je ca. 293 px Breite als horizontal bedienbar beobachtet; dieser Tabellen-Scroll wurde nach A18 nicht erneut betätigt. URL-Wechsel beim Klick auf Kapitel 1 war nicht zuverlässig beobachtbar. Die schmale Darstellung wurde per Browserzoom erzeugt, nicht mit einem physischen Mobilgerät oder nativer Geräteemulation. |

## Teil C – Rechtliche und organisatorische Seiten

| Punkt | Ergebnis |
|---|---|
| C1 Impressum | Betreiber-, Anschrift-, E-Mail- und Redaktionsangaben blieben erhalten. Die aktuelle Seitenfassung nennt den öffentlichen Testbetrieb. Vollständige Rechtsprüfung sämtlicher Anwendbarkeitstatbestände und Betreiberpflichten ist nicht durch eine anwaltliche Prüfung ersetzt. |
| C2 Teilnahmeregeln | Detaillierte Regeln und Aufbewahrungsfristen bleiben bestehen; Status als späterer Betrieb und fehlendes Backend sind kenntlich. Praktische Löschläufe sind nicht aktiviert und daher nicht end-to-end prüfbar. |
| C3 Bildnachweise/Karten | Wappen-/Schlossquellen, historische Sammlung und Kartenlizenzen bleiben verlinkt; Anbietertext aktualisiert. Nicht alle externen Einzelquellen wurden erneut abgerufen. |
| C4 Unterstützung | Finanzstruktur bleibt; falsche Aktualisierungsschaltfläche entfernt. Unterstützungsauszahlung und endgültige Restmittelrückzahlung wurden nicht praktisch ausgelöst oder rechtlich abschließend geprüft. Zahlungsfunktionen bleiben deaktiviert. |
| C5 Datenschutz | Öffentlicher statischer Betrieb, nicht angeschlossene Funktionen, künftige Verarbeitung und getrennte Kartenfreigaben sind abgeglichen. Externe Datenschutzangaben wurden für die Kartenquellen mit den Anbieterhinweisen verglichen. Kein vollständiges Datenschutzgutachten. |
| C6 Moderation | Aktive Backendfunktionen von geplantem Drei-Meldungen-Konzept getrennt; E-Mail-Kontakt bleibt. Rechtsmeldungen sind textlich abgegrenzt; keine vollständige Einzelfall-Rechtsberatung. |
| C7 Barrierefreiheit | Öffentliche Testfassung und Grenzen produktiver Funktionen werden beschrieben. Bestehende Teilprüfungen werden nicht als WCAG-Konformitätserklärung ausgegeben. Vollständige manuelle WCAG-2.2-AA-Prüfung bleibt offen. |
| C8 Quellenverzeichnisse | Bestehende automatisierte Quellen- und Katalogtests liefen mit; eine manuelle Prüfung jedes gerenderten Verweises und jeder Quelldatei wurde nicht abgeschlossen. |

## Teil D – technische Funktionen

| Punkt | Ergebnis |
|---|---|
| D1 Navigation | Alle elf vorgesehenen thematischen Hauptziele, acht Fußbereichsseiten sowie „Alle Beiträge“ wurden auf der Live-Seite angeklickt; Zurück/Vorwärts/Neuladen behielten den Hash. Live-Fehler: „Über uns“ wird entgegen A1 weiterhin oben angezeigt. PR #8 / Pages #63 aktualisierten das Root-Bundle nicht. Sprunglink und einzelne Tastaturpfade sind geprüft; vollständige Tastatur-/Screenreader-Abnahme bleibt offen. |
| D2 Suche/Filter | Automatisierte Modell- und URL-Tests für Mietratgeber, Veranstaltungen, Nachrichten, Beiträge, Verzeichnis und Einsamkeit bestanden. Live geprüft wurden nur Mietkosten-Suche und Themenzugänge, nicht jeder Filter in jeder Oberfläche. |
| D3 Geografie | Bestehende Daten-/Kartenregressionen bleiben bestanden; amtliche Stadtteil-, Wohngebiets- und historische Ortsabgrenzungen wurden in dieser Runde nicht vollständig neu mit amtlichen Quellen abgeglichen. |
| D4 Karten | Karten- und Ladefreigabe-Regressionen bestanden; vollständige praktische Prüfung der 14 Stadtteile, Wohngebiete, Oberbillwerder, fünf Stationen, Marker, Cluster, Ablehnung/Entladen und Speicherung auf Desktop und Mobil bleibt offen. |
| D5 Formulare | Presse- und Bezirksamtsformulare teilweise live geprüft; synthetische Daten wurden nicht gesendet und anschließend verworfen. Live-Pressemenü fehlte zwei der sieben Quellmedien. Bezirksamts-Fotoerklärung ließ sich im UI-Test nicht erzeugen, obwohl das Datum sichtbar war; Ursache nicht abschließend geklärt. Vollständiger manueller Durchgang bleibt offen. |
| D6 Störungsmeldung | Live Pflichtfehler, Geräte-/OS-/Browserauswahl, Ausschluss widersprüchlicher Auswahlwerte, Speichern beim Schließen/Öffnen und Verwerfen geprüft; synthetische Eingaben verworfen. Clipboard-/Mailclient und vollständige Tastaturprüfung nicht durchgeführt, um Clipboard zu erhalten und keine Mailanwendung auszulösen. |
| D7 Alle Beiträge | Vier Testbeispiele und getrennte redaktionelle Inhalte sind erhalten. Vollständiger praktischer Durchgang aller Filter-/Sortier-/Rücksprungkombinationen wurde nicht abgeschlossen. |

## Teil E – rechtliche, Datenschutz- und redaktionelle Kontrolle

- E1: Der amtliche § 5 UrhG sowie die für die Kartenquellen relevanten OSM-/OpenMapTiles-Lizenzinformationen und DL-DE-BY-2.0 wurden auf den vorliegenden Text bezogen. Eine vollständige Rechtsprüfung sämtlicher Angaben zu Mietrecht, Datenschutz, Persönlichkeitsrecht, Medienrecht, Zahlungs- und Speicherpflichten wurde nicht erneut durchgeführt und bleibt als fachliche Endprüfung offen.
- E2: Offizielle Quellenhinweise für UrhG, OpenStreetMap/ODbL und GovData wurden abgerufen. Ein vollständiger HTTP-/Sachbezugstest aller Website- und Profilquellen ist offen; bestehende Quellen-Regressionen liefen.
- E3: Quellcode und Build-Prüfung zeigen keine neu aktivierte Registrierung, Backend-Einreichung, Zahlungsabwicklung oder serverseitige Uploadfunktion. Build-Ausgabe nennt `liveDatabaseRead:false`, `privateDocuments:0` und `liveRecords:0`.
- E4: Produktionsprüfung umfasst 266 Builddateien; der Verifier meldete 0 Live-Datensätze. Private Zahlungsbelege oder private Dateien wurden nicht in den Build übernommen. Ein unabhängiger vollständiger Geheimnis-/Personendaten-Scan der Quellhistorie ist nicht Teil dieses Ergebnisses.
- E5: Desktop-/Schmalbreiten-Liveprüfung für den Mietkostenratgeber sowie ausgewählte öffentliche Karten-, Formular- und Dialogpfade sind erfolgt. Weitere Geräte-, Bild-/Galerie-, Screenreader- und Tastaturprüfungen bleiben offen. Die schmale Ansicht wurde über Browserzoom statt auf einem physischen Smartphone hergestellt.

## Teil F – Build, Tests, PR und Veröffentlichung

- Automatisierte Tests: **353 bestanden, 0 fehlgeschlagen, 0 übersprungen**; darin sind 7 neue A18-Regressionsprüfungen enthalten.
- Produktionsbuild: erfolgreich. `verify-dist` bestätigte 266 Dateien, Basispfad `/bergedorf-gemeinsam/`, `noindex`, 4 Beispiele, 69 redaktionelle Einträge, 0 Live-Datensätze. Bestehende Vite-Warnungen: große JavaScript-Bundles (2,72 MB/558 kB unkomprimiert) und zur Laufzeit aufzulösendes `/bergedorf-gemeinsam/assets/leaflet.css`.
- `git diff --check`: bestanden.
- PR #6 wurde zusammengeführt und veröffentlicht (Merge-Commit `a4ec911ef3280a2799551d667e47a2b9fe06dcec`; GitHub Pages Lauf #61 erfolgreich). Die öffentliche Website wurde nach diesem Deployment live geladen; die Live-Abnahme und ihre Grenzen stehen unter B11 und A18-17. PR-Statuschecks wurden von GitHub nicht bereitgestellt (`combined status: no checks`); lokale Tests und Build sind oben getrennt ausgewiesen.

## A18-17 – Arbeitsauftrag 17 abschließen

- PR #4 ist zusammengeführt; GitHub Pages führte erfolgreiche Deployments aus.
- Die veröffentlichte Mietkostenseite wurde am 20.11.2026 am Desktop und in einer schmalen Browseransicht geprüft. Kein horizontaler Seitenüberlauf; Suche, acht Themenzugänge, Navigation und Kapitelübersicht sichtbar.
- Dokumentation in `docs/mietkosten/auftrag17.md` aktualisiert; frühere widersprüchliche Veröffentlichungsaussagen und Handlungsanweisungen als historisch kenntlich gemacht. Die Desktop-/Live-Schmalbreitenbefunde wurden hier ergänzt.
- Schmale Liveprüfung ist vom früheren lokalen Reflow-Test unterschieden. Kein physisches Smartphone getestet.
- Status: Die Website und Mietkosten-Dokumentation sind veröffentlicht. Nachträgliche UI-Prüfungen bestätigten URL-Wechsel und Tastaturfokus bei Klick auf Kapitel 1, Suche/Trefferlink, Kapitel 51 sowie den horizontalen Tabellen-Scroll. Die Kapitelnavigation/Tabellen wurden nicht auf einem physischen Smartphone geprüft. Diese Ergänzung korrigiert die frühere Aussage, der Kapitel-1-Wechsel sei unzuverlässig.

## Noch offene Prüfungen

1. Die fehlenden geprüften Root-Builddateien zum Draft PR #9 ergänzen; nach Merge/Pages den oberen Menüpunkt und alle sieben Pressemedien live nachprüfen.
2. Vollständige manuelle Filter-, Such-, Verlinkungs- und Formularabnahme über alle Bereiche.
3. Vollständige geografische Abnahme aller Kartenvarianten sowie Netzwerkprüfung vor Kartenfreigabe.
4. Weitere Geräte/Browser, native Mobil- oder Geräteemulation und vollständige Tastatur-/Screenreader-/WCAG-Prüfung.
5. Vollständige erneute externe Quellen- und Rechtsprüfung, insbesondere Mietrecht, DSGVO und einzelne historische/amtliche Quellen.
6. Ursache des sichtbaren Datums-/Validierungswiderspruchs der Live-Fotoerklärung klären; vollständige Druck-, Scan- und Offline-PDF-Prüfung.
7. Clipboard-/Mailclientprüfung, ohne Nutzerdaten zu überschreiben oder eine Nachricht zu versenden.

Ein nicht ausgeführter Test wird hier nicht als bestanden bewertet.
