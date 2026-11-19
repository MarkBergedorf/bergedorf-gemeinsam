# Arbeitsauftrag 15 – Quellenprüfung zu Linkvorschauen

Prüfdatum: **19. November 2026**. Recherche in Primärquellen und offizieller Produktdokumentation. Kein Login, kein Beitrag, keine Nachricht und kein Formular an soziale Dienste abgesendet. Diese Quellenprüfung ist **kein Nachweis**, dass Facebook, WhatsApp, LinkedIn oder X die neue Projektfassung bereits ausgelesen oder eine Vorschau angezeigt haben. Die tatsächlichen Projektprüfungen stehen gesondert im Umsetzungsbericht.

## Open Graph

**Open Graph Protocol:** https://ogp.me/

Die Spezifikation sieht `meta`-Angaben im HTML-`head` vor. Zu den Grundangaben gehören Titel, Typ, Bild-URL und kanonische URL. Beschreibung, Websitebezeichnung und Sprach-/Landkennung ergänzen sie. Die strukturierten Bildangaben umfassen MIME-Typ, Breite, Höhe und einen inhaltlich beschreibenden Alternativtext. Eine URL für ein Bild ersetzt weder die Bilddatei noch deren öffentlichen Abrufnachweis. Die Umsetzung als statisches HTML entspricht dem Bedarf von Diensten, die keine React-Oberfläche ausführen.

## Meta / Facebook

**A Guide to Sharing for Webmasters:**
https://developers.facebook.com/documentation/sharing/webmasters

Die offizielle Anleitung beschreibt Open-Graph-Angaben für Titel, Beschreibung und Vorschaubild. Der Sharing Debugger zeigt ausgelesene Angaben und Fehler und löst einen erneuten Abruf aus. Bildinhalte werden laut Anleitung anhand ihrer URL zwischengespeichert; für ein neues beziehungsweise geändertes Bild empfiehlt sich deshalb eine neue Bild-URL. Breite und Höhe können vorab angegeben werden. Als Bild-MIME-Typen nennt die Dokumentation unter anderem JPEG und PNG. Es ist keine fremde App-ID oder ein Facebook-SDK erforderlich, um die ausdrücklich verlangten OG-Tags hinzuzufügen; eine App-ID wird dort im Zusammenhang mit Insights beschrieben.

**Sharing best practices:**
https://developers.facebook.com/documentation/sharing/best-practices

Die abgerufene aktuelle Fassung nennt für hochauflösende Darstellung mindestens 1.080 Pixel Bildbreite und empfiehlt Vorabruf über den Debugger sowie Bildabmessungen in den OG-Tags. Sie enthält außerdem spezielle Angaben für Anzeigen und Spiele, die nicht pauschal als Regeln sämtlicher gewöhnlicher Linkvorschauen ausgegeben werden dürfen. Das im Auftrag vorgesehene Format 1.200 × 630 Pixel ist eine geeignete Projektfestlegung; eine universelle Darstellungsgarantie folgt daraus nicht.

**Meta Web Crawlers:**
https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers

`FacebookExternalHit` sammelt und speichert Angaben für geteilte Links. Die dokumentierten Anforderungen umfassen früh im Dokument stehende OG-Eigenschaften (vor dem ersten Megabyte), zeitnahen Abruf, komprimierte Antworten und sinnvolle Behandlung des `Range`-Headers. Meta beschreibt einen Testabruf mit `facebookexternalhit/1.1` und Range-Header. **Ein selbst ausgeführter Abruf mit diesem User-Agent bleibt eine Simulation, kein Beleg eines echten Meta-Crawlerabrufs.** Die Dokumentation unterscheidet Vorschaucrawler von weiteren Meta-Crawlern für andere Zwecke. Eine pauschale Freigabe aller Meta-Bots ist für diesen Auftrag nicht begründet.

**Offizielles Prüfwerkzeug:** https://developers.facebook.com/tools/debug/

Beim Rechercheabruf über den Web-Lesedienst antwortete diese Adresse mit HTTP 429. Das ist ein Werkzeug-/Abrufbefund dieses Recherchewegs, kein Beleg für eine Sperre oder Fehlkonfiguration der Projektwebsite. Eine Browserprüfung durch die Hauptumsetzung kann unabhängig davon einen aktuellen Zugangsbefund liefern. Ohne tatsächliche Debugger-Auswertung dürfen weder erfolgreicher Meta-Abruf noch Cache-Erneuerung behauptet werden.

## LinkedIn

**Make your website shareable on LinkedIn:**
https://www.linkedin.com/help/linkedin/answer/a521928

Die offizielle Hilfe verlangt OG-Titel, -Bild, -Beschreibung und -URL. Für das Sharingmodul nennt sie maximal 5 MB, mindestens 1.200 × 627 Pixel und das empfohlene Seitenverhältnis 1,91:1. Eine öffentlich geschützte oder blockierte Bilddatei kann die Übernahme verhindern. Diese Angaben beschreiben Anforderungen, nicht den bereits erfolgten Abruf des konkreten neuen Bildes.

**Use Post Inspector to refresh URL:**
https://www.linkedin.com/help/linkedin/answer/a6233775

**Prüfwerkzeug:** https://www.linkedin.com/post-inspector/

LinkedIn beschreibt den Post Inspector als Werkzeug zum erneuten Abrufen einer URL und zum Kontrollieren der Vorschau. Bereits gespeicherte alte Bilder können aus dem Cache stammen. Die dort beschriebene Aktualisierung betrifft neue Beiträge mit dieser URL; bestehende Beiträge behalten nach der Hilfe ihre alte Vorschau. Die Werkzeugadresse lieferte im Recherche-Lesedienst keinen auswertbaren Seiteninhalt. Eine praktische Auswertung der Projekt-URL wurde in dieser Quellenprüfung nicht vorgenommen.

## WhatsApp

**Linkvorschau deaktivieren:**
https://faq.whatsapp.com/445453537819972/?cms_platform=android&locale=de_DE

Die offizielle Hilfe dokumentiert die abschaltbare Linkvorschau unter Datenschutz / Erweitert. Ist diese Einstellung eingeschaltet, erzeugen gesendete Links keine Vorschau. Dies ist eine belegte Endgeräte-/Nutzereinstellung, kein diagnostizierter Grund des bislang fehlenden Projektbildes. Die Website kann diese Einstellung nicht eigenmächtig überschreiben.

**How to send media, contacts, or location – Send a link:**
https://faq.whatsapp.com/453914586839706/?cms_platform=iphone

Die offizielle Hilfe beschreibt Linkvorschauen bei Nachrichten mit einem einzelnen Link. Daraus folgt kein öffentlicher, allgemein zugänglicher WhatsApp-Debugger und keine Bestätigung des konkreten Projektergebnisses. Ohne eine tatsächlich in WhatsApp angezeigte Vorschau muss WhatsApp im Abschluss als praktisch ungeprüft oder durch die konkrete Prüfung begrenzt gekennzeichnet werden. Es wurde keine Nachricht versandt.

## Twitter / X

Die im Auftrag verlangten Angaben `twitter:card=summary_large_image`, `twitter:title`, `twitter:description` und `twitter:image` können zusätzlich zu OG umgesetzt und statisch geprüft werden. Folgende früheren offiziellen Cards-Adressen wurden aufgerufen:

- https://developer.x.com/en/docs/x-for-websites/cards/overview/summary-card-with-large-image
- https://developer.x.com/en/docs/x-for-websites/cards/overview/markup
- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image

Sie leiteten beim Rechercheabruf auf https://docs.x.com/overview weiter. Diese aktuelle Übersichtsseite liefert keine konkrete Cards-Abnahme. Aus den Weiterleitungen werden weder eine Einstellung des Features noch eine garantierte heutige Anzeige abgeleitet. Die tatsächliche Vorschau in X bleibt ohne Produktprüfung ausdrücklich ungeprüft.

## noindex, nofollow, noarchive und robots.txt

**MDN – `<meta name="robots">`:**
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/robots

Die dokumentierten Bedeutungen unterscheiden Indexierung (`noindex`), Linkverfolgung (`nofollow`) und Archivierung (`noarchive`). Ein Crawler muss die Seite zunächst abrufen können, um solche HTML-Metaanweisungen zu lesen. Meta-Robots ist deshalb keine HTTP-Zugriffssperre und kein Login-/Datenschutzmechanismus. Aus der bloßen Existenz von `noindex` lässt sich keine bereits bewiesene Ursache für eine fehlende Social-Media-Vorschau ableiten. Das tatsächliche Verhalten des jeweiligen Dienstes muss gesondert belegt werden.

**RFC 9309 – Robots Exclusion Protocol:**
https://www.rfc-editor.org/rfc/rfc9309.html

Der Standard legt die Datei unter `/robots.txt` am Origin-Root fest. Für dieses Projekt ist damit insbesondere **https://markbergedorf.github.io/robots.txt** zu prüfen; eine Datei ausschließlich unter `/bergedorf-gemeinsam/robots.txt` wäre nicht der standardmäßige REP-Ort. Der Standard unterscheidet erfolgreiche Regeln, nicht verfügbare Dateien und nicht erreichbare Server. Eine fehlende Datei ist nicht mit einer ausdrücklich blockierenden Regel gleichzusetzen. REP ist keine Zugangsautorisierung.

**Projektfolgerung:** Der vorhandene Suchmaschinen-Indexierungsschutz bleibt erhalten. Eine gezielte Ausnahme oder Änderung ist erst bei einem belegten konkreten Blockiergrund zu erwägen. HTTP-Status, Antwortheader, tatsächlich geltende Origin-Regeln und Crawlerergebnis sind getrennt zu dokumentieren. Ein offen abrufbares Bild und statische OG-Tags genügen für sich noch nicht als Nachweis einer tatsächlichen Plattformvorschau.

## Wappen / Logo und unabhängiger Charakter

**Senatskanzlei Hamburg – Hamburg-Logo, Flaggen und Wappen:**
https://www.hamburg.de/politik-und-verwaltung/behoerden/senatskanzlei/hamburg-logo-239048

Die amtliche Quelle unterscheidet geschützte Hoheitszeichen und Marken von Landesflagge und frei nutzbarem Hamburg-Symbol. Auch beim Hamburg-Symbol darf kein Eindruck behördlicher Tätigkeit entstehen. Diese Quelle betrifft die dort beschriebenen Hamburger Zeichen; ihre Beschränkungen dürfen nicht ungeprüft mit dem historischen Bergedorfer Stadtwappen gleichgesetzt werden.

**Bergedorf.de – Siegel und Wappen:**
https://www.bergedorf.de/ueber-uns/geschichte/siegel-wappen

Die lokale Darstellung ordnet das 1927 entworfene Bergedorfer Stadtwappen historisch ein und nennt seine heutige Nutzung zur Traditionspflege. Sie enthält damit **keine nachgewiesene individuelle Freigabe für das neue Vorschaubild der Plattform**. Diese Seite ist ergänzende lokale Sachinformation, keine rechtsverbindliche Genehmigungsentscheidung der Senatskanzlei.

**Umsetzungsgrenze:** Der vorhandene Projektvermerk zur nicht abschließend geklärten öffentlichen Wappenverwendung bleibt offen. Eine Wortmarke mit dem vorhandenen Projektnamen, seinen Farben und dem deutlichen Zusatz „Unabhängige Bürgerplattform“ ermöglicht eine eigenständige Vorschaugrafik ohne neue Wappennutzung. Bestehende Wappenabbildungen auf der Website werden durch diesen begrenzten Korrekturauftrag weder entfernt noch rechtlich vollabgenommen. Keine amtliche Trägerschaft oder Zusammenarbeit behaupten.
