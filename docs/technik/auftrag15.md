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

Noch ausstehend. Veröffentlichungscommit, Pages-Lauf, öffentliche HTML-/Bildantworten, externe Prüfungen und Prüfbilder werden nach tatsächlicher Veröffentlichung ergänzt. Bis dahin wird keine erfolgreiche Livevorschau behauptet.

## Externe Dienste und Cache

Die Prüfung unterscheidet vier Ebenen: (1) vorhandene statische Tags, (2) öffentlich abrufbares korrektes Bild, (3) tatsächlicher Abruf/Auswertung durch den jeweiligen Crawler, (4) tatsächlich sichtbare Vorschau im Produkt. Ein HTTP-Abruf oder eine nachgebildete Vorschau ersetzt Ebene 3/4 nicht.

Offizielle Prüfwerkzeuge: Meta Sharing Debugger und LinkedIn Post Inspector; WhatsApp, soweit tatsächlich zugänglich. Bei vorhandenen Anmelde- oder Zugriffsgrenzen werden keine Erfolge behauptet. Es werden keine Nachrichten oder öffentlichen Beiträge allein zu Testzwecken versendet. Zugängliche Neuabfragen/Cache-Erneuerungen sind nach der Veröffentlichung zu versuchen und konkret zu dokumentieren. Eine allgemeine sofortige Aktualisierung sämtlicher vorhandener Shares wird nicht zugesagt.

Technische Quellen und Grenzen: [Quellenprüfung](auftrag15-quellen.md).
