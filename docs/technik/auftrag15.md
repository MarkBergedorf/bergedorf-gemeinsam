# Arbeitsauftrag 15 – Linkvorschau und Vorschaubild

Stand: 19. November 2026. Projekt: Bergedorf gemeinsam.

## Ausgangsstand und nachgewiesene Ursache

Öffentlicher Hauptbranch vor Umsetzung: `3362ee127a4f1d4901bc11d826354a005821da05` (Arbeitsauftrag 13). Die öffentliche Startseite lieferte HTTP 200 und im ursprünglichen HTML keine Open-Graph- oder Twitter-Card-Angaben. Dasselbe galt für `frontend/index.html` und die daraus erzeugte Pages-Ausgabe. Ein ausdrücklich zugeordnetes Sharingbild fehlte. Damit war die erforderliche Grundlage für eine verlässliche große Linkvorschau nicht vorhanden. Welche Daten ein einzelner Dienst zuvor tatsächlich zwischengespeichert hatte, ist damit noch nicht nachgewiesen.

Arbeitsauftrag 14 bleibt separat als Entwurf in Pull Request #3; er wird durch Auftrag 15 weder freigegeben noch zusammengeführt. Offene Voraussetzungen aus früheren Aufträgen bleiben erhalten.

## Verwendetes Bild

Öffentliche Zieladresse:

https://markbergedorf.github.io/bergedorf-gemeinsam/assets/social/bergedorf-gemeinsam-vorschau-v1.png

- PNG, RGB ohne Transparenz, **1200 × 630 Pixel**, Verhältnis etwa 1,905:1, **87.751 Bytes**.
- Vorhandene Wortmarke „Bergedorf gemeinsam“, Plattformgrün `#285a48`, helle Schrift und bestehender Goldton; deutlich „Unabhängige Bürgerplattform“ und „Für Hamburg-Bergedorf“.
- Keine neue Verwendung des historischen Wappens: Dessen öffentliche Verwendung ist bereits in `branding` als nicht abschließend geklärt dokumentiert. Eine neue konkrete Freigabe wurde nicht nachgewiesen. Das konditional beauftragte Wappen wurde deshalb im neuen Bild weggelassen; die vorhandenen Wappen der Website bleiben unverändert.
- Reproduzierbar aus der bestehenden typografischen Gestaltung mit `scripts/generate-social-preview.py` und den vorhandenen Liberation-Schriften gerendert. Keine KI-generierte Neuzeichnung eines Wappens und kein neues amtliches Symbol. Die fertige PNG-Datei liegt im Repository; der reguläre Build muss keine Bildgenerierung ausführen.
- Visuell in Originalgröße und bei 300 × 158 Pixeln geprüft: beide Namenszeilen gut lesbar, keine abgeschnittenen Zeichen. Die spätere konkrete Skalierung/Beschneidung bleibt vom Dienst abhängig.
- Neue, versionierte Bildadresse für den Bildcache; spätere Motivänderungen sollten eine neue Versionsadresse bekommen. Bestehende Dateien werden dafür nicht ersetzt.

## Eingefügte Metadaten

Statisch im `<head>` von `frontend/index.html`, vor dem Skript:

| Eigenschaft | Wert |
| --- | --- |
| `og:type` | `website` |
| `og:site_name` | Bergedorf gemeinsam |
| `og:title` | Bergedorf gemeinsam – Unabhängige Bürgerplattform |
| `og:description` | Bürgeranliegen, Erfahrungen, Geschichte, Politik, Veranstaltungen und Informationen aus dem Bezirk Hamburg-Bergedorf. Eine unabhängige Bürgerplattform. |
| `og:url` | https://markbergedorf.github.io/bergedorf-gemeinsam/ |
| `og:image` / `og:image:secure_url` | Vollständige HTTPS-Bildadresse oben |
| `og:image:type` | `image/png` |
| `og:image:width` / `og:image:height` | `1200` / `630` |
| `og:image:alt` | Bergedorf gemeinsam – Unabhängige Bürgerplattform für Hamburg-Bergedorf. Wortmarke auf grünem Hintergrund, ohne amtliches Wappen. |
| `og:locale` | `de_DE` |
| `twitter:card` | `summary_large_image` |
| `twitter:title` / `twitter:description` | Identisch mit Open Graph |
| `twitter:image` | Vollständige HTTPS-Bildadresse oben |
| `twitter:image:alt` | Bergedorf gemeinsam – Unabhängige Bürgerplattform für Hamburg-Bergedorf. |

Auch die allgemeine Description übernimmt die beauftragte Beschreibung. Der bestehende Browser-Dokumenttitel „Bergedorf gemeinsam – Statische Testfassung“ bleibt erhalten. Kein clientseitiges React-Nachladen der Sharingangaben nötig. Die Hash-Routen dieser Single-Page-Website verwenden dasselbe HTML und deshalb dieselbe websiteweite Vorschau; gesonderte Artikel-Vorschaubilder sind nicht Bestandteil dieses Auftrags.

## Bestandsschutz und geänderte Dateien

Geändert: `frontend/index.html`, ergänzende Buildkontrolle in `frontend/scripts/verify-dist.mjs`, neues Bild unter `frontend/public/assets/social/`, neuer Test `frontend/tests/social-preview.test.mjs`, Bildgenerator und Dokumentation. Die regulär generierten `index.html`, `404.html`, gehashten Produktionsdateien und das öffentliche Bild werden am Repository-Stamm synchronisiert. Die neuen Build-Hashes sind reguläre Buildausgabe; sie stellen keinen Auftrag zur funktionalen Änderung der Oberfläche dar.

**Alle vorhandenen Dateien unter `frontend/app`, `frontend/lib` und `frontend/pages` bleiben gegenüber dem veröffentlichten Ausgangsstand bytegleich.** Keine Änderung an Bürgeranliegen, Erfahrungen, Geschichte, Politik, Einsamkeit, Verzeichnissen, Nachrichten, Veranstaltungen, Unterstützung, Datenschutz oder Sicherheit. Keine neue Anmeldung, Kommentar-/Umfragespeicherung, Datenerfassung oder Behördenweiterleitung aktiviert. App-Installation unverändert.

## Produktionsprüfungen

- **305 automatisierte Tests erfolgreich:** alle 298 Tests des veröffentlichten Ausgangsstands und sieben zusätzliche Prüfungen. Die 16 noch nicht veröffentlichten Tests von Arbeitsauftrag 14 gehören weiterhin zu dessen separatem Branch.
- Neue Prüfungen: statische vollständige Tags vor JavaScript, exakter Titel/Beschreibung, Übereinstimmung zwischen Diensten, absolute HTTPS-Adresse mit Pages-Basispfad, tatsächliche PNG-Signatur/Abmessungen/Dateigröße, unveränderte Robots-Regel und Browser-Titel, bytegleicher Inhalts-/Funktionsbestand sowie ergänzte Buildkontrolle.
- Regulärer Produktionsbuild erfolgreich: **266 Ausgabedateien**, vier gekennzeichnete Beispiele, 69 redaktionelle Einträge, null Live-Datensätze, `noindex` aktiv. Bestehende Bundlegrößen-/Leaflet-CSS-Hinweise sind keine Buildfehler.
- Buildkontrolle prüft alle geforderten Tags in `dist/index.html` und `dist/404.html` sowie das tatsächlich vorhandene 1200×630-PNG. Anschließend vollständige Bytegleichheit der Produktionsausgabe mit dem Repository-Stamm durch `scripts/sync-pages.mjs` bestätigt.
- Lokale Browserkontrolle: bekannte Startseite lädt mit bisherigem Titel, vorhandenen Bereichen und neuem `og:image`; Desktop 1.363 CSS-Pixel, Dokument-Scrollbreite 1.348. Abschließende öffentliche Desktop-/Mobilkontrolle wird nach Veröffentlichung ergänzt.

## noindex, Zugriff und Crawler

**Unverändert:** `<meta name="robots" content="noindex, nofollow, noarchive">`. Kein Aufheben der Suchmaschinen-Einstellung, kein gezieltes Crawler-Override ohne nachgewiesene Notwendigkeit.

Vorherige öffentliche HTTP-Prüfung: Startseite 200, kein `X-Robots-Tag`-Header. `https://markbergedorf.github.io/robots.txt` und die projektbezogene Adresse `/bergedorf-gemeinsam/robots.txt` lieferten 404. Für die standardisierte Robots-Exclusion-Regel ist der Origin-Root maßgeblich. Damit wurde kein vorhandenes `Disallow` nachgewiesen. Ein `noindex`-Metatag ist eine Indexierungsanweisung und keine HTTP-Anmeldesperre. Ob ein einzelner Vorschaudienst die Vorschau aufgrund eigener Regeln unterdrückt, muss durch dessen tatsächliche Antwort belegt werden; es wird nicht aus dem Metatag allein abgeleitet.

HTTP-Abrufe mit einem Crawler-User-Agent sind ausschließlich **synthetische Kompatibilitätsprüfungen**. Sie belegen weder einen Abruf aus dem Netz des jeweiligen Dienstes noch dessen tatsächliche Auswertung oder Produktdarstellung. Diese Nachweise werden unten getrennt geführt.

## Veröffentlichung und öffentliche Prüfungen

**Veröffentlicht und öffentlich geprüft.**

- Veröffentlichter Anwendungs-/Metadatenstand: **`6febd4cd92e1a2b20076f0c858849828b9ae6415`**; geprüfter vollständiger Baum `faa8bd0401e8adfbd656b82f0517d202ac1fb1a7`. Entfernt erzeugter Git-Baum vor der Hauptbranch-Aktualisierung exakt mit dem lokal geprüften Baum abgeglichen. Hauptbranch per erwarteter Ausgangs-ID geschützt aktualisiert.
- GitHub-Pages-Lauf [44424478755](https://github.com/MarkBergedorf/bergedorf-gemeinsam/actions/runs/44424478755): **completed / success**, Build, Deployment und Statusmeldung erfolgreich.
- Tatsächlich geöffnete Website: https://markbergedorf.github.io/bergedorf-gemeinsam/#start
- Tatsächlich geladene Anwendung: `/bergedorf-gemeinsam/assets/index-tm7NvBRT.js`.
- Öffentliche Startseite und PNG: jeweils **HTTP 200**, vollständig bytegleich mit der geprüften Ausgabe. Bild-MIME **image/png**, Signatur und tatsächliche Abmessungen **1200×630** bestätigt; auch direkt im Browser vollständig geladen. Keine Anmeldung für Seite oder Bild.
- Normale HTTP-Abfrage und vier zusätzliche synthetische Kennungen (`facebookexternalhit`, `WhatsApp`, `LinkedInBot`, `Twitterbot`) liefern jeweils die vollständigen Tags vor JavaScript und das korrekte PNG. Diese selbst ausgeführten Abfragen sind ausdrücklich keine offiziellen Dienst-Crawlernachweise.
- Range-Prüfung: **HTTP 206**, `Content-Range: bytes 0-2717/2718`, vollständige 2.718-Byte-Seite bereits in diesem Bereich; Sharingtags im frühen Head. Kein `X-Robots-Tag`-Header nachgewiesen. Robots-Adressen weiterhin 404, der HTML-Metatag unverändert `noindex, nofollow, noarchive`.
- Rohes HTTP-Prüfprotokoll mit Antwortheadern, Tags, Hashes, Kennungen und Grenzen: [auftrag15-http-pruefung.json](auftrag15-http-pruefung.json).

Alle elf Hauptbereiche live über die vorhandene Navigation geöffnet und Überschriften kontrolliert: Start, Anliegen, Erfahrungen, Geschichte, Politik, Verzeichnis, Organisationen, Über uns, Nachrichten, Veranstaltungen und Einsamkeit. Zusätzlich Unterstützungsseite aufgerufen. Keine Fachtexte oder offenen Quellenidentitäten als neu wissenschaftlich abgenommen erklärt. Die vollständige Erhaltung stützt sich zusätzlich auf 298 Regressionstests und den bytegenauen Quellvergleich.

Desktop live: 1.363 CSS-Pixel, Dokument-Client-/Scrollbreite jeweils 1.348. Vorhandenes Schlossfoto vollständig geladen (natürliche Breite 1.600 Pixel), bestehende Gestaltung erhalten. Schmaler Reflow live: 340 CSS-Pixel, Dokument-Client-/Scrollbreite jeweils 337, kein horizontaler Überlauf. Mobiles Menü geöffnet/geschlossen, alle elf Einträge vorhanden; Zoom anschließend zurückgesetzt. Kein physisches Mobilgerät und keine vollständige Prüfung weiterer Browser/Betriebssysteme.

Prüfbilder:

- [Desktop nach Veröffentlichung](auftrag15-live-desktop.jpg)
- [Schmaler Reflow nach Veröffentlichung](auftrag15-live-schmal.jpg)
- [Externer Prüfer mit ausgelesenem Bild und nachgebildeter Vorschau](auftrag15-externer-checker.jpg) – **keine Aufnahme aus Facebook selbst**.

Der abschließende Dokumentationscommit ergänzt ausschließlich diesen Bericht, das HTTP-Protokoll und Prüfbilder. Der geprüfte Anwendungscode und die Produktionsdateien bleiben unverändert. Die endgültige Commit-ID einschließlich dieser Nachweise steht im Abschluss und in der Repository-Historie.

## Externe Dienste und Cache

Die Prüfung unterscheidet vier Ebenen: (1) vorhandene statische Tags, (2) öffentlich abrufbares korrektes Bild, (3) tatsächlicher Abruf/Auswertung durch den jeweiligen Crawler, (4) tatsächlich sichtbare Vorschau im Produkt. Ein HTTP-Abruf oder eine nachgebildete Vorschau ersetzt Ebene 3/4 nicht.

Offizielle Prüfwerkzeuge: Meta Sharing Debugger und LinkedIn Post Inspector; WhatsApp, soweit tatsächlich zugänglich. Bei vorhandenen Anmelde- oder Zugriffsgrenzen werden keine Erfolge behauptet. Es werden keine Nachrichten oder öffentlichen Beiträge allein zu Testzwecken versendet. Zugängliche Neuabfragen/Cache-Erneuerungen sind nach der Veröffentlichung zu versuchen und konkret zu dokumentieren. Eine allgemeine sofortige Aktualisierung sämtlicher vorhandener Shares wird nicht zugesagt.

Technische Quellen und Grenzen: [Quellenprüfung](auftrag15-quellen.md).


## Tatsächliche externe Prüfungen und verbleibende Grenzen

Nach dem erfolgreichen Pages-Deployment wurde die endgültige Basisadresse ohne Cache-Query in den folgenden Werkzeugen geprüft:

| Dienst / Werkzeug | Tatsächlicher Versuch und Ergebnis | Was damit offen bleibt |
| --- | --- | --- |
| **Meta Sharing Debugger** – https://developers.facebook.com/tools/debug/ | Offizielles Werkzeug geöffnet; meldet „Log into Facebook to use this tool“. Ohne Anmeldung kein Eingabefeld/kein Scrape-Ergebnis. Optionale Cookies abgelehnt. Keine Anmeldung vorgenommen. | Kein bestätigter Facebook-Crawlerabruf, kein „Scrape Again“, keine bestätigte Cache-Aktualisierung und keine tatsächliche Facebook-Produktvorschau. |
| **LinkedIn Post Inspector** – https://www.linkedin.com/post-inspector/ | Endgültige Websiteadresse eingegeben und **Inspect** ausgeführt. Anschließend Anmeldung im eingebetteten LinkedIn-Fenster; Endadresse `/post-inspector/login`. Keine Vorschau oder erfolgreiche Cache-Erneuerung erhalten. | Tatsächlicher LinkedIn-Crawler und Produktvorschau nicht bestätigt; keine Anmeldung vorgenommen. |
| **WhatsApp** | Keine Nachricht versandt und keine angemeldete WhatsApp-Produktansicht getestet. Die WhatsApp-ähnliche Darstellung im externen Prüfer ist nur eine Nachbildung. | Echte WhatsApp-Linkvorschau, persönliche Vorschau-Einstellungen und bestehender WhatsApp-Cache ungeprüft. |
| **X und weitere Dienste** | Twitter-Metadaten vorhanden, synthetischer Twitterbot-Abruf erfolgreich; kein tatsächlicher Post-/Chat-Test. | Echte Dienst-Crawler und tatsächliche Produktdarstellung ungeprüft. |
| **CachePlex Share Preview Checker** – https://www.cacheplex.com/share-preview-checker/ | Öffentliche Websiteadresse eingegeben, **Check preview** ausgeführt. Ergebnis: **HTTP 200, 0 errors, 0 warnings, 0 tips**, korrekter Titel/Beschreibung, „Image loads for crawlers“, **1200×630, 86 KB PNG**. Alle relevanten Tags in der tatsächlich zurückgegebenen Tabelle vorhanden. Bild in den nachgebildeten WhatsApp-, Facebook- und LinkedIn-Ansichten sichtbar. | Belegt eine erfolgreiche externe Auslesung und Bildprüfung durch diesen Prüfdienst, nicht die Auswertung durch Meta/LinkedIn/WhatsApp oder deren tatsächliche Oberflächen. Der Dienst bezeichnet seine Layouts selbst als Approximation und ändert keine fremden Plattform-Caches. |

Die neue Bild-URL verhindert die Wiederverwendung einer alten Datei unter derselben Bildadresse. Ein bereits gespeicherter Seiten-Cache eines sozialen Dienstes kann trotzdem alte Metadaten enthalten; ein konkreter veralteter Cacheeintrag wurde hier mangels Dienstzugriff nicht beobachtet. Es wird deshalb weder ein vorhandenes Cacheproblem als Ursache erfunden noch dessen Beseitigung behauptet. Facebook/LinkedIn benötigen für ihren abschließenden Crawler-/Cache-Nachweis eine zugängliche angemeldete Sitzung. WhatsApp muss in einer tatsächlichen App-Ansicht geprüft werden. Es wurden keine öffentlichen Posts, Nachrichten, Konten oder neuen Anmeldeverbindungen dafür angelegt.

**Abnahmestand:** Der Codefehler ist behoben, die neue Fassung tatsächlich veröffentlicht, Original-HTML und öffentliches Bild sind verifiziert und ein unabhängiger externer Abruf/Auswertung ist erfolgreich. Eine vollständige praktische Freigabe der echten Facebook-, WhatsApp- und LinkedIn-Produktvorschauen ist **noch offen**. Es gibt keinen belegten Anlass, `noindex` oder andere Sicherheitseinstellungen dafür zu lockern.

**Fortsetzung von Auftrag 14:** Pull Request #3 bleibt separat offen. Bei seiner später freigegebenen Integration muss er auf den dann aktuellen Hauptbranch abgestimmt und neu gebaut werden; die neuen Metadaten und die Bilddatei aus Auftrag 15 dürfen durch ältere generierte HTML-/Assetstände nicht zurückgesetzt werden.
