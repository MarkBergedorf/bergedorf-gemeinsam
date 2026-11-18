# Arbeitsauftrag 13 – Umsetzung und Prüfprotokoll

Stand: 18. November 2026. Ausgangsstand: `9989cec3796f62e6436fcd3802afcf2b53845eca` (abgeschlossener Arbeitsauftrag 12). Der Hauptbranch wurde vor der Arbeit erneut geprüft. Keine neueren Änderungen waren vorhanden.

## Freigabeumfang und tatsächlicher Zustand

Die unabhängige Plattform erhält eine **lokale Vorbereitung und Druckvorschau**. Produktiver Meldungseingang, Serverspeicherung von Eingaben oder Dateien, automatische Weiterleitung, öffentliche Fotos und automatische Behördenübermittlung sind **nicht aktiviert**. Die Erweiterung ist kein amtliches Portal und kein abgestimmtes Behördenformular. Die rechtliche und datenschutzrechtliche Freigabe des erweiterten Erklärungswortlauts steht aus. Eine uneingeschränkte wissenschaftliche Vollabnahme wird nicht behauptet.

## Anforderungsabgleich

Die folgenden 23 Prüffelder dokumentieren den sachlichen Abgleich; ihre Nummerierung ist eine Prüfgliederung, keine Wiedergabe der ursprünglichen Auftragsnummern.

| Nr. | Anforderung | Umsetzung / Grenze |
| --- | --- | --- |
| 1 | Bestehende Website vollständig erhalten | Neue Komponente ausschließlich am Profil `editorial-bezirksamt` im Organisationskatalog; Beschreibung, Kontakte, Karte und Quellen bleiben bestehen. Unveränderte Bestandsdateien durch Regressionstests abgesichert. |
| 2 | Einstieg und Dialog | „Meldung an das Bezirksamt vorbereiten“; Dialog „Meldung vorbereiten – Zuständige Stelle ermitteln“. |
| 3 | Unabhängigkeit | Ausdrücklicher Hinweis auf unabhängige Bürgerplattform, kein Auftrag des Bezirksamts, keine zugesagte Kooperation oder neue Amtskennzeichnung. |
| 4 | Kategorien | Straßen/Gehwege, Radwege, Beleuchtung, Grün/Bäume, Spielplätze, Müll, Barrierefreiheit, öffentliche Gebäude, Verkehrssicherheit, Lärm, Infrastruktur, Wasser/Abwasser, andere Anliegen. |
| 5 | Sachverhalt | Betreff, ausführliche beobachtete Tatsachen; persönliche Bewertung und gewünschte Verbesserung getrennt. Keine automatische Feststellung eines Missstands oder Rechtsverstoßes. |
| 6 | Ort | Straße, Hausnummer/Bezugspunkt, optionale PLZ, Stadtteil, genaue ergänzende Ortsbeschreibung. Keine automatische Standortabfrage. |
| 7 | Zeitpunkt | Feststellungsdatum, optionale Uhrzeit, Dauer des Problems; Datums-/Zeitprüfung. |
| 8 | Kontakt | Freiwillige Kontaktangaben für die eigene Druckfassung; ohne Fotos keine Pflicht zu Name oder Anschrift. |
| 9 | Höchstens drei Fotos | Lokale Auswahl, Vorschau, Entfernen, Reihenfolge und Beschreibung/Aufnahmeort; vierte oder identische Datei zurückgewiesen. |
| 10 | Dateien und Metadaten | JPEG/PNG/WebP, höchstens 8 MiB und 24 Megapixel je Foto; bewusste HEIC-Konvertierung außerhalb nötig. Vollständige sichtbare Kopie auf maximal 2.400 Pixel skaliert und ohne ursprüngliche EXIF/GPS als JPEG erzeugt. Original wird nicht versandt. |
| 11 | Nachvollziehbare Zuordnung | SHA-256 von Original und abgebildeter Kopie, Foto-Reihenfolge, Dokumentkennung und Angaben; Änderungen entwerten erzeugte Fassungen und Scan-Zuordnung. |
| 12 | Sachliche Druckfassung | Getrennte Meldungszusammenfassung mit Sachverhalt, Bewertung, Ort, Zeitpunkt, freiwilligen Kontakten, Fotos und ungeprüftem Meldeweg. Lange Texte werden vollständig ausgegeben. |
| 13 | Zweckgebundene Erklärung A | Einfache Nutzungsrechte für Betreiber, Bezirksamt und tatsächlich zuständige Bearbeitungskette; notwendige technische Verarbeitung und Weiterleitung; keine pauschale Veröffentlichung, zweckfremde Nutzung oder Übertragung des Urheberrechts. Juristische Eignung offen. |
| 14 | Freiwillige Alternative B | A/B als eindeutige Alternativen, **keine vorausgewählt**; A genügt für gewöhnliche zweckgebundene Bearbeitung. CC0 verlangt zusätzliche bewusste Bestätigung. |
| 15 | Standardisiertes CC0 | Ausdrückliche Anwendung durch Verweis auf unveränderten offiziellen CC0-1.0-Rechtstext, zusätzliche offizielle Erläuterungsadresse. Kein selbst erfundener Lizenztext unter CC0. Weltweite, dauerhafte, kostenlose, kommerzielle Nutzung und Bearbeitung sowie grundsätzlich nicht vorgesehene Rücknahme wirksam eingeräumter Rechte ausdrücklich erläutert. |
| 16 | Rechte Dritter | Eigene Rechte erforderlich; Persönlichkeits-, Datenschutz- und weitere Rechte bleiben bestehen. Erkennbare Personen, Kennzeichen und sensible Inhalte sind gesondert zu prüfen. |
| 17 | Fotoeinbettung | Ein bis drei tatsächlich gewählte Fotos direkt und nummeriert in der Erklärung, vollständiges Bild ohne Beschnitt; Person, konkrete Meldung, Rechtewahl, Textverweis, Ort/Datum, handschriftliches Unterschriftsfeld. |
| 18 | Druck und Unterschrift | Fotos auswählen → Erklärung erzeugen → ausdrucken → unterschreiben → einscannen → unterschriebene Erklärung hochladen. Abschnittskennungen und echte physische Druckseitenzählung; Unterschrift ist nicht durch Checkbox ersetzbar. |
| 19 | Unterschriftserinnerung | Verpflichtender Ja-/Nein-Dialog mit vorgegebenem Erinnerungstext; Nein öffnet keinen Dateiwähler, Ja öffnet nur lokale Auswahl. Keine technische Bestätigung einer echten Unterschrift. |
| 20 | Rückupload | Separat von Sachverhaltsfotos: mehrseitiges PDF/JPEG/PNG, bis zehn Dateien, 20 MiB je Datei und 24 Megapixel je Rasterbild; lokal ansehen/entfernen/neu auswählen. Originaldatei unverändert; Dateikopf und erkennbare aktive PDF-Merkmale geprüft. Keine vollständige Malware-/Signaturprüfung. |
| 21 | Behördenvorlage | Übergebene Original-PDF unverändert erhalten; gesonderte Ausfüllhilfe mit fünf digitalen Textfeldern, unverändertem Originaltext und handschriftlicher Unterschrift/Datum. Eigener Plattformentwurf bleibt getrennt. Behördenakzeptanz und Aktualität nicht nachgewiesen. |
| 22 | Tatsächliche Zuständigkeit / Status | Amtliche Quellen liefern ausdrücklich ungeprüfte Vorschläge. Unklarheit → HamburgService 115. Melde-Michel als eigenständiger offizieller Weg mit **einem Foto bis 8 MiB**, ohne erfundene Schnittstelle. Keine gesendete Meldung, kein Rechteprüfergebnis und kein Behördeneingang vorgetäuscht. Polizei 110 / Rettung 112, kein Notrufportal. |
| 23 | Schutz und Freischaltung | Nur Browser-Arbeitsspeicher; Dialogschließen erhält Eingaben, Route/Neuladen verwirft sie. Kein neuer Netzwerk-Upload, keine Registrierung, Kommentar- oder Umfragespeicherung. Produktiver Schalter gesperrt bis technische, rechtliche und datenschutzrechtliche Voraussetzungen nachgewiesen sind. |

Bei späterer öffentlicher Bereitstellung eines nachweislich freigegebenen CC0-Fotos lautet die Kennzeichnung exakt: **„Freigegeben unter CC0 1.0 Universell – freie Nutzung.“** Die Logik verlangt bestätigte Unterschrift, Fotozuordnung, Drittrechteprüfung und gesonderte redaktionelle Entscheidung. Die aktuelle Fassung veröffentlicht keine Fotos. Die unterschriebene Erklärung wird niemals als öffentliche Anlage eingebunden.

## Technische Nachweise

- 298 automatisierte Tests erfolgreich: 278 bestehende und 20 zusätzliche Tests. Abgedeckt sind A/B, ein/zwei/drei Fotos, Größen-/Formatgrenzen, Pflichtfelder, Daten-/Scan-Zuordnung, Statussperren, CC0-Kennzeichnung, HTML-Escaping/CSP, vollständige lange Drucktexte, Quellenorientierung, Original-PDF/AcroForm und unveränderte Bestandsdateien.
- Produktionsbuild erfolgreich mit festgeschriebener `pnpm-lock.yaml`; 265 Ausgabedateien, 69 redaktionelle Einträge, vier ausdrücklich markierte Beispiele, null Live-Datensätze, noindex aktiv. Bestehende Hinweise zur Bundlegröße und Leaflet-CSS bleiben; kein Buildfehler.
- `scripts/sync-pages.mjs` ergänzt um den neuen Ordner `reference`; anschließend bytegleicher Abgleich **aller** Produktionsdateien mit dem Repository-Stamm. Keine privaten Testfotos oder ausgefüllten Erklärungen in der Veröffentlichung.
- Unveränderte Originalvorlage SHA-256: `5e48fec604b89f45204da39ade8c3493948689c627b163fdbb91ec88fd042e14`.
- A/B-Druckdokumente mit ein/zwei/drei Fotos ergeben drei/vier/fünf Seiten. Maximal lange Personen-/Adress-/Bildangaben ergeben sieben Seiten. Jede physische Seite hat richtige Seitenzahl und Dokumentkennung. PDF-Bildseiten und Unterschriftsseite visuell kontrolliert. Neutrale Originalvorlage und digitale Ausfüllhilfe ebenfalls geprüft.

## Browserprüfung vor Veröffentlichung

Ausschließlich erfundene Testangaben und eigens erzeugte, entsprechend beschriftete Testbilder verwendet. Keine reale Meldung oder Rechtsfreigabe abgegeben.

- Leeres Formular erzeugt verständliche Fehler; Meldung ohne Fotos und ohne persönliche Pflichtangaben erzeugbar.
- Echtes lokales Einlesen von ein, zwei und drei Bildern; vierte Datei abgewiesen. A mit einem Foto und B mit drei Fotos erfolgreich; B ohne Folgenbestätigung verhindert. Alle eingebetteten Fotos vollständig geladen.
- Nein-Erinnerung verhindert Auswahl; Ja öffnet separate lokale Dateiauswahl. PDF und JPEG als zwei ungeprüfte Scans eingelesen, Scan entfernt. Änderung der Fotoreihenfolge entfernt Erklärung und alle Scans, Rückupload danach deaktiviert.
- Dialog schließen/erneut öffnen erhält Eingaben. Escape schließt und gibt den Fokus an den Auslöser zurück.
- Desktop: Browserbreite 1.363 CSS-Pixel; Dialog 963 Pixel, Scrollbreite 963, kein horizontaler Überlauf.
- Schmale Ansicht als 400-%-Reflow bei 340 CSS-Pixeln: Dokumentbreite 337, Dialogbreite/Scrollbreite jeweils 319 Pixel; Texte, Felder, Fotos und Bedienelemente brechen um und bleiben erreichbar. Das ist ein Browser-Reflowtest, kein Test auf physischem Smartphone.
- Drucktaste öffnet separates Dokumentfenster mit allen drei Fotos und Unterschriftsseite. Ein nativer Druckdialog war in diesem Browser nicht sichtbar; tatsächlicher Papierausdruck und nativer PDF-Speicherdialog daher **nicht abgenommen**. Ergänzend wurden die Druck-CSS-Seiten eigenständig als PDF gerendert und kontrolliert.

## Veröffentlichung und Liveprüfung

Noch ausstehend. Dieser Abschnitt wird nach tatsächlicher Veröffentlichung mit Commit und Veröffentlichungsnachweis ergänzt.

## Offene Punkte vor produktiver Freischaltung

1. Rechtsprüfung der Erklärungen A und CC0-Einbeziehung, erforderlicher persönlicher Angaben, Widerrufs-/Aufbewahrungsregeln und konkreter Empfängerrechte; behördliche Eignung der Vorlage/Ausfüllhilfe bestätigen lassen.
2. Datenschutzkonzept mit Rechtsgrundlage, Information der Betroffenen, konkreten Empfängern, Aufbewahrung/Löschung, Zugriffsbeschränkung, Betreiberprozessen und gegebenenfalls Auftragsverarbeitung.
3. Geschütztes Backend und nichtöffentlicher Dateispeicher; belastbare serverseitige Bild/PDF-Validierung, Schadcodeprüfung, Zugriffsschutz, protokollierte Zuordnung, sichere Übertragung und Löschung. Browser-Dateikopfprüfung genügt dafür nicht.
4. Tatsächliche manuelle Prüfung von Unterschrift, Vollständigkeit aller Seiten, Fotoidentität, Rechten Dritter und zuständiger Stelle vor jeder Weiterleitung; dokumentierter Behördeneingang erst nach echtem Nachweis.
5. Gesonderte redaktionelle Prüfung vor jeder öffentlichen Bildverwendung; unterschriebene Erklärungen bleiben nichtöffentlich. CC0 allein bewirkt keine Veröffentlichung.
6. Nativen Ausdruck/PDF-Speichern auf einem regulären Endgerät und physische Mobilgeräte zusätzlich prüfen; keine vollständige assistive oder rechtliche Abnahme behaupten.
7. Ausdrückliche produktive Freigabe erst nach erfolgreichem Abschluss der vorgenannten Prüfungen. Bis dahin ausschließlich lokale Vorbereitung.

Quellenprüfung: [Amtliche Quellen und CC0](quellen-pruefung-2026-11-18.md). Bestehende offene Quellenidentitäten und wissenschaftliche Nachweise aus früheren Arbeitsaufträgen wurden nicht verändert oder als erledigt erklärt.
