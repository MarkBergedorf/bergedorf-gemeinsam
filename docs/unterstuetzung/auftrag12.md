# Arbeitsauftrag 12: Unterstützung, GoFundMe-Vorbereitung und öffentliche Finanztransparenz

Stand: 15. November 2026. Arbeitsaufträge 1 bis 11 und deren Nummerierung bleiben erhalten.

## Ausgangsstand und Umfang

Repository: https://github.com/MarkBergedorf/bergedorf-gemeinsam

Seite: https://markbergedorf.github.io/bergedorf-gemeinsam/#unterstuetzung

Geprüfter Hauptbranch vor der Umsetzung: `d511cdf3481d5ec4edd6b407979bc8a60a2b3f28` (abschließende Dokumentation von Arbeitsauftrag 11). Der Branch wurde mit `git fetch` geprüft. Vor der Veröffentlichung wird der erwartete Hauptbranch erneut kontrolliert und mit einer Commit-Lease aktualisiert.

Bereits vorhanden waren die Kostenplanung für zwei Kalenderjahre, bestätigte Jahresaggregate in ganzzahligen Cent, Anfangsbestand und automatische Jahresüberträge, Finanzierungsbedarf, Anbieter- und Datenschutzeinstellungen, Pausierung bei gedecktem Bedarf, manuelle Pause und endgültige Einstellung. Die vollständigen bisherigen Regeln zu Zweckbindung, Unabhängigkeit, kostenfreier Nutzung, fehlender eigener Vergütung, Nichtgemeinnützigkeit, fehlenden Zuwendungsbestätigungen und anteiliger Rückzahlung bei endgültiger Einstellung bleiben bestehen.

## Öffentliche Ergänzungen

Die erste zentrale Kennzahl ist die Summe der bestätigten Brutto-Unterstützungseingänge. Daneben stehen getrennt verbleibende zweckgebundene Mittel, Zahlungsgebühren, Rückzahlungen an Unterstützer und bezahlte Plattformausgaben ohne Gebühren. Abrechnungszeitraum und letztes vollständiges Abgleichdatum sowie die Bestandsformel werden ausgewiesen. Fehlende Angaben heißen ausdrücklich „Noch nicht bestätigt“; sie werden nicht durch 0 Euro ersetzt.

Die neue Ausgabenaufstellung ist öffentlich ohne Konto erreichbar. Ihre Datenstruktur umfasst Zahlungs- und Rechnungsdatum, Leistung, öffentlich zulässigen Lieferanten, Rechnungsbetrag, tatsächlich aus Unterstützungsmitteln finanzierten Anteil, privaten Anteil, Finanzierungsart, Kategorie, betriebliche Notwendigkeit, geprüften Beleglink, Zahlungs-/Nachweisstatus sowie Veröffentlichungs- und Korrekturdatum. Die Ansicht ist für spätere freigegebene Nachweise umgesetzt. Es wurden keine echten Belege oder Finanzbeträge geliefert und keine erfundenen Einträge veröffentlicht.

Die bestehende Kostenplanung und die zusammengefassten Jahrestabellen bleiben erhalten. GoFundMe ist als gewünschter externer Anbieter ausdrücklich benannt. Die Seite erklärt verständlich Zweck, privaten Betreiber, kostenlose Nutzung, Unabhängigkeit und Transparenz als Grundlage einer späteren Facebook-Vorstellung. Ein Facebook-Beitrag oder öffentlicher Zahlungsaufruf ist damit nicht erstellt oder veröffentlicht.

## Ein Finanzmodell und kontrollierter Abgleich

`frontend/lib/support-finance.mjs` bleibt die maßgebliche Finanzberechnung. `frontend/lib/support-evidence.mjs` ergänzt Nachweise; das Erfassen eines Belegentwurfs erzeugt keine zusätzliche Geldbuchung und verändert keine Jahressumme.

Für jedes Zahlungsjahr müssen die aus Unterstützung finanzierten Beleganteile exakt mit dem bestätigten Jahresaggregat „weitere Kosten“ übereinstimmen. Zahlungsgebühren sind als Belegkategorie ausgeschlossen und werden ausschließlich in der vorhandenen Gebührenspalte abgezogen. Teilfinanzierungen verwenden nur den tatsächlichen Unterstützungsanteil. Private Vorfinanzierung und spätere Erstattung schreiben dieselbe Ausgabenkennung fort; als Zahlungsdatum gilt bei der Erstattung der tatsächliche Abfluss aus Unterstützungsmitteln, nicht nochmals die private Vorfinanzierung.

Rechnungs- und Zahlungsprüfwerte verhindern eine zweite Erfassung derselben Rechnung beziehungsweise desselben finanzierten Zahlungsvorgangs. Diese internen SHA-256-Prüfwerte werden nicht öffentlich projiziert. Korrekturen verlangen eine Begründung. Frühere veröffentlichte Angaben zu Leistung, Rechnungssumme, finanziertem Anteil, Zahlungs-/Belegdatum, Lieferant, Kategorie, Finanzierungsart und Erforderlichkeit bleiben als Korrekturhistorie nachvollziehbar.

Tatsächlich erhaltene Gutschriften zu Plattformkosten sind ein zusätzlicher optionaler Jahreswert `costCredits` mit sachlicher Grundlage, getrennt von Rückzahlungen an Unterstützer. Sie erhöhen den Bestand, ohne die Brutto-Unterstützungseingänge zu erhöhen. Gutschriftbelege sind an eine vorhandene Ausgabe gebunden; ihre kumulierten finanzierten Anteile dürfen den Originalanteil nicht übersteigen. Sie erscheinen im Jahr des tatsächlichen Eingangs. Die erweiterte Bestandsformel lautet bei solchen Gutschriften: Anfang + Bruttoeingänge − Unterstützer-Rückzahlungen − Gebühren − weitere Kosten + Kostengutschriften. Die bestehende Formel ohne Gutschriften bleibt ansonsten unverändert. Im Plan angerechnete bezahlte Kosten werden nach Gutschriften mindestens mit null angesetzt; darüber hinausgehende Gutschriften stehen im Bestand für die Finanzierung zur Verfügung.

Eine öffentliche Belegfreigabe verlangt vollständige Übereinstimmung aller Jahreswerte. Änderungen an Aggregaten oder Belegentwürfen machen die bisherige Belegfreigabe ungültig; die öffentlichen Einzelbelege werden bis zur erneuten ausdrücklichen Freigabe ausgeblendet. Die zentrale Finanzübersicht verwendet weiterhin die bestätigten Jahresaggregate. Es gibt keine zweite Finanzdatenbank.

## Belegverwaltung: vorbereitet, produktiv gesperrt

**Eine produktiv nutzbare Belegverwaltung ist nicht abgeschlossen.** GitHub Pages bietet in diesem Projekt kein geschütztes Backend und keinen geschützten Originalspeicher. Die vorhandene öffentliche Konfiguration bleibt `apiBase:null`, `publicReadsApproved:false`, `writesEnabled:false`. Es wurden weder neue Zugänge noch schwächere Berechtigungen geschaffen.

Die Metadatenverwaltung und Vorschau sind innerhalb der vorhandenen, ausschließlich für den tatsächlichen Betreiber freigegebenen Finanzverwaltung vorbereitet. Dieselbe serverseitige Prüfung verlangt Betreiberidentität, Adminrolle und Wiederherstellungsberechtigung; ein fremder Admin, Autor, Leser oder anonymer Aufruf ist nicht berechtigt. Getrennte Testfinanzen bleiben vom echten Finanzstand getrennt. In der öffentlichen Pages-Fassung gibt es keine aktive Verwaltungs- oder Uploadverbindung.

Vorbereitete Schritte: Metadaten erfassen, vorhandenen Entwurf laden, begründet berichtigen, öffentlichen Inhalt prüfen, jede geprüfte Dokumentkopie ansehen und den gesamten Nachweisbestand ausdrücklich freigeben. Die Freigabe bleibt deaktiviert, solange `evidenceStorage.verified` nicht durch einen späteren geschützten Infrastrukturprozess bestätigt ist. Es gibt in dieser Umsetzung keine Aktion, die diese Voraussetzung freischaltet. Der Versuch einer Belegveröffentlichung ohne sie wird serverseitig zurückgewiesen.

Kein Original wurde angefordert, hochgeladen, kopiert oder in Git/Git-Historie/Build abgelegt. Der vorhandene öffentliche Datei-Upload wird nicht zur Finanzablage verwendet. In dieser Änderung gibt es keinen Datei-Upload für Finanzunterlagen.

### Vorgeschriebener späterer Dokumentprozess

1. Original und Zahlungsnachweis außerhalb des öffentlichen Repositorys und Builds in einer geschützten, berechtigten, gesicherten Ablage erfassen. Keine privaten Originalpfade, Kundennummern oder personenbezogenen Zahlungsreferenzen in öffentlichen Textfeldern.
2. Separate Veröffentlichungskopie herstellen. Private Adressen, Telefon-/E-Mail-Daten, Konten/IBAN, Referenzen, Kundenkennungen, Zugangsdaten, Drittdaten und sonstige unnötige Angaben tatsächlich entfernen.
3. Metadaten, versteckte Textebenen, Anlagen, technische Geheimnisse und Dateinamen prüfen. Eine darübergelegte Fläche genügt nicht. Die öffentliche Datei muss neu erzeugte, flache, metadatenfreie Bilddaten enthalten, aus denen entfernte Originalinhalte nicht wiedergewonnen werden können.
4. In dieser Vorbereitung akzeptiert der Freigabeweg ausschließlich eine separat geprüfte PNG-Kopie unter `/assets/finance-evidence/<SHA-256>.png`, die im vertrauenswürdigen Veröffentlichungsmanifest mit korrektem Prüfsummenwert und den Prüfmerkmalen redactionVerified, metadataStripped und flattened geführt ist. Fremde URLs, PDFs, Originaldateinamen und Pfadmanipulationen sind ausgeschlossen. Das Manifest wird nicht durch das öffentliche Formular erzeugt. Es enthält derzeit keine echten Dokumente.
5. Neun einzelne Kontrollen bestätigen: getrenntes Original, irreversibel bereinigte Kopie, entfernte Metadaten, entfernte verborgene Inhalte, entfernte Anlagen, neutraler Dateiname, zulässige öffentliche Angaben, zusätzlicher tatsächlicher Zahlungs-/Jahresabgleich und ausdrückliche Freigabe. Der künftige geschützte Prozess muss die tatsächlichen Dateibytes prüfen; gesetzte Flags allein ersetzen diese Prüfung nicht.
6. Vollständige öffentliche Vorschau einschließlich des Bildes ansehen, Jahresaggregate abgleichen, ausdrücklich freigeben. Nur die öffentliche Feld-Whitelist verlässt die private Verwaltung. Private Prüfschlüssel, Originalreferenzen, Auditdaten und Testbestand bleiben ausgeschlossen.

Ein automatisches Schwärzungswerkzeug, eine Originalablage, ein Dateibyte-Prüfservice und deren produktiver Betrieb wurden nicht eingerichtet. Diese Infrastruktur und organisatorische Zuständigkeiten sind vor einer tatsächlichen Belegannahme gesondert zu implementieren und zu prüfen.

## GoFundMe: geprüfte Grundlagen und offene Aktivierung

**Keine konkrete Kampagnenadresse wurde übermittelt oder in diesem Auftrag eingerichtet.** Der übermittelte Link `https://www.gofundme.com/?utm_source=chatgpt.com` führt zur Anbieterstartseite. Auf der Informationsseite ist die allgemeine Anbieterwebsite ohne den Trackingparameter ausdrücklich als Anbieterinformation, nicht als Kampagne, verlinkt. Es wurde keine Kampagnenadresse erfunden und keine andere Kampagne ausgewählt. Ob außerhalb dieses Projekts eine Kampagne existiert, ist nicht verifiziert.

Die künftige GoFundMe-Anbieterkonfiguration lehnt die allgemeine Startseite ab. Sie verlangt einen konkreten HTTPS-Kampagnenpfad auf dem exakten GoFundMe-Host und gesondert bestätigte Freigabe-, Empfänger-, Plattformzweck-, Identitäts-/Bank-, Gebühren-/Bedingungs- und Datenschutz-/Abgleichprüfungen. Die bisherige allgemeine Anbieterkonfiguration bleibt erhalten; GoFundMe wurde nicht durch einen anderen Dienst ersetzt.

Am 15. November 2026 anhand offizieller Anbieterquellen geprüft:

- [Preise für Deutschland](https://www.gofundme.com/de-de/c/pricing): keine Einrichtungsgebühr, Transaktionsgebühr 2,9 % + 0,25 € je Zahlung einschließlich Mehrwertsteuer für private Sammlungen in Deutschland. Freiwillige zusätzliche Beiträge an GoFundMe sind davon zu unterscheiden und keine Plattform-Einnahme. Die tatsächliche Abrechnung ist maßgeblich, kein pauschaler Gebührenansatz als bestätigte Ist-Zahl.
- [Unterstützte Länder](https://support.gofundme.com/hc/en-gb/articles/360001972748-Countries-supported-on-GoFundMe): Deutschland ist aufgeführt; die empfangende Person muss die tatsächlichen Auszahlungsvoraussetzungen des Landes erfüllen. Dies bestätigt keine konkrete Kampagne oder Bankprüfung.
- [Aktuelle Nutzungsbedingungen](https://www.gofundme.com/de-de/c/terms): Regeln für private Organisatoren/Empfänger, richtige Angaben, zweckentsprechende Mittelverwendung und erforderliche Verifikation beachten. Die konkrete Zulässigkeit dieses noch nicht eingerichteten Vorhabens bleibt vor Aktivierung zu prüfen. Auszahlungsverzögerungen sind nach den Bedingungen möglich; feste Verfügbarkeit wird nicht zugesichert.
- [Überweisungen einrichten](https://support.gofundme.com/hc/de-de/articles/360001992767-So-richtest-du-%C3%9Cberweisungen-ein): Identitäts-/Bankangaben und Verifikation erforderlich; laut Hilfe können Einzelzahlungen bis zu fünf Geschäftstage Verarbeitung und eingeleitete Auszahlungen zwei bis fünf Geschäftstage benötigen. Keine Garantie einer bestimmten Verfügbarkeit und kein Nachweis, dass eine öffentliche Kampagnensumme schon dem Bankkonto gutgeschrieben wurde.
- [Gebühren und Abrechnung](https://support.gofundme.com/hc/de-de/articles/203604424-Erfahre-mehr-%C3%BCber-GoFundMe-Geb%C3%BChren): tatsächliche Gebühren sind in der Überweisungsaufschlüsselung sichtbar. Kein GoFundMe-Pro-Bericht oder eine nur für gemeinnützige Organisationen bestimmte API wird ungeprüft auf die private Kampagne übertragen.
- [Datenschutz](https://www.gofundme.com/de-de/c/privacy), Aktualisierung 17. August 2026: Anbieter beschreibt internationale Verarbeitung einschließlich USA sowie Standardvertragsklauseln. Vor Aktivierung sind konkret betroffene Daten, Empfänger, Rechtsgrundlagen, Aufbewahrung, Betroffeneninformationen und gegebenenfalls Übermittlungsgrundlagen für das tatsächlich verwendete Setup zu dokumentieren.
- [Öffentlich verborgene Namen](https://support.gofundme.com/hc/de-de/articles/203687114-Auf-der-Spendenaufrufseite-anonym-spenden): Name kann öffentlich verborgen werden; Organisator, Mitorganisatoren und Begünstigte können den Namen und gegebenenfalls E-Mail-Adresse weiterhin sehen. Keine vollständige Anonymität. Die eigene Website übernimmt keine Unterstützerliste, Einzelbeträge oder Zahlungsnachrichten.
- [§ 10b EStG](https://www.gesetze-im-internet.de/estg/__10b.html): Die bestehende Trennung zwischen privater Unterstützung und steuerbegünstigter Zuwendung bleibt erhalten. Keine Zuwendungsbestätigung, keine Behauptung pauschaler Steuerfreiheit des privaten Betreibers.

Es ist keine geeignete Schnittstelle für dieses konkrete Projekt autorisiert oder konfiguriert. Keine API-Anbindung, kein Scraping und keine automatische Zahlungserkennung wurden eingerichtet. Geplant ist manueller Abgleich: bestätigte Bruttoeingänge und tatsächliche Gebühren aus verlässlichen Anbieterunterlagen, ausgeführte Rückzahlungen, tatsächliche Bankauszahlungen und Unterstützungsmittel-Zahlungen für Plattformkosten kontrollieren; Auszahlungen nicht nochmals als Einnahme buchen. Öffentliche Kampagnensumme, bestätigte Einnahmen und Bankverfügbarkeit sauber trennen. Die Möglichkeit und Vollständigkeit der tatsächlich verfügbaren Kampagnenunterlagen muss am späteren eingerichteten Konto geprüft werden.

**Zahlungslink bewusst deaktiviert. Keine GoFundMe-Kampagne angelegt/aktiviert, kein produktiver Zahlungsaufruf, keine wiederkehrenden Abbuchungen, kein Facebook-Beitrag, keine kostenpflichtigen Dienste beauftragt.**

## Datenschutz- und Bestandsschutzkontrolle

Die Datenschutzerklärung wurde ausschließlich um den tatsächlichen Vorbereitungsstand ergänzt: keine Verbindung zu GoFundMe vor Öffnen eines externen Links, keine eingebetteten Anbieterinhalte, keine Übernahme personenbezogener Unterstützerdaten und keine produktive Belegannahme. Die vorhandenen Datenschutztexte und Rechte bleiben erhalten.

Ein automatisierter Bestandsschutzvergleich prüft sämtliche vor Auftrag 12 vorhandenen Dateien unter app/lib/pages gegen den Ausgangscommit. Ausnahmen werden nur über exakt rücknehmbare, dokumentierte Änderungen an support.tsx, support-admin.tsx, support-finance.mjs, privacy.tsx und dem generierten öffentlichen Finanzstatus zugelassen. Alle anderen Bytes bleiben gleich. Die älteren Bestandsschutzprüfungen verwenden dieselben exakten Rücknahmen zusätzlich zu den bereits dokumentierten Ergänzungen der Aufträge 8–11. Keine pauschalen Ausschlüsse für ganze Bereiche.

Quellenidentitäten, offene Einzelnachweise und wissenschaftliche Einschränkungen in den vorhandenen Fachbereichen bleiben unverändert. Diese Veröffentlichung enthält keine uneingeschränkte wissenschaftliche Vollabnahme.

## Tests, Build und Darstellung

- 278 automatisierte Tests bestanden, 0 fehlgeschlagen. Darunter 15 neue Finanztransparenz-/Sicherheits-/Bestandsschutzfälle mit mehreren Unterfällen: unbestätigte Beträge, Centrechnung, Gebühren/Rückzahlungen, Teilfinanzierung, private Vorfinanzierung, Dubletten, unmögliche und zukünftige Daten, Pflichtkontrollen, sichere Pfade, öffentliche Feldprojektion, Rechte, echter/Testbestand, Korrekturhistorie, Gutschriften über Jahresgrenzen, negative Bestände und GoFundMe-Aktivierungssperren.
- Produktionsbuild erfolgreich. Verifikation: 263 Ausgabedateien, base `/bergedorf-gemeinsam/`, HTML noindex aktiv, vier gekennzeichnete Beispiele, 69 redaktionelle Verzeichniseinträge, keine angebundenen Livebeiträge. Bestehende Warnungen zu großen JavaScript-Chunks und Leaflet-CSS-Auflösung bleiben als technische Optimierung offen; Build und vorhandene Kartenprüfungen bestehen.
- GitHub-Pages-Ausgabe mit `scripts/sync-pages.mjs` aus dem Produktionsbuild erzeugt. Keine privaten Finanzdokumente enthalten.
- Vorab im Browser: Desktop bei 1363 CSS-Pixeln, Dokumentbreite 1348; schmale Ansicht durch 400 % Browserzoom bei 340 CSS-Pixeln, Dokumentbreite 337. Kein horizontaler Dokumentüberlauf. Bestehende breite Finanztabellen bleiben in ihrem beschrifteten, per Tastatur erreichbaren Scrollbereich. Die schmale Prüfung ist ein tatsächlicher Browser-Reflowtest, kein Test auf einem physischen Mobiltelefon.
- Finanzstand-Aktualisieren bedienbar; keine Zahlungs- oder Uploadfelder auf der öffentlichen Unterstützungsseite; sichtbare Sperrhinweise korrekt.

## Veröffentlichungsnachweis und Livekontrolle

**Veröffentlicht und live geprüft.**

- Erstveröffentlichung: `2bbf7e2b3393ae5c375ef97745ecc5da4035436a`, exakt geprüfter Produktionsbaum `e1ec71424daaefe932792e614d8e01a5bda033bd`.
- Erster GitHub-Pages-Lauf: [43769342214](https://github.com/MarkBergedorf/bergedorf-gemeinsam/actions/runs/43769342214), Build, Deployment und Statusmeldung erfolgreich.
- Bei der Sichtprüfung festgestellte und behobene Darstellungskorrektur: Das Pfeilsymbol an den neuen externen Links erschien im Prüf-Browser als fehlendes Zeichen. Es wurde durch die lesbare Beschriftung „(extern)“ ersetzt. Danach erneut alle 278 Tests bestanden, Produktionsbuild und Pages-Synchronisierung erfolgreich.
- **Endgültig veröffentlichter Anwendungscode: `19ebedf2321914f83dcc8219bd8db731a282e306`.** Produktionsbaum: `c0fe8fa752cb9214bd56293502c0ed383be30b0c`.
- **GitHub-Pages-Lauf der Korrektur: [43769912050](https://github.com/MarkBergedorf/bergedorf-gemeinsam/actions/runs/43769912050), abgeschlossen mit `success`.**
- Tatsächlich geladene Live-JavaScriptdatei nach erneutem Laden: `/bergedorf-gemeinsam/assets/index-NUhol6ws.js`; sie entspricht dem korrigierten Produktionsbuild.
- Tatsächlich geöffnete Adresse: https://markbergedorf.github.io/bergedorf-gemeinsam/#unterstuetzung

Erneute Livekontrolle nach der Korrektur: bestätigte Bruttoeingänge als erste Kennzahl; Gebühren, Rückzahlungen, Plattformausgaben und Bestand getrennt; fehlende Finanzdaten ausdrücklich unbestätigt; keine erfundenen Nullbeträge oder öffentlichen Belege. GoFundMe-Vorbereitung und lesbare Quellenlinks vorhanden. Zahlungslink und öffentlicher Belegupload fehlen weiterhin bewusst. Die Seite verwendet keine Zahlungs-, Registrierungs- oder Belegannahmeformulare. Kein unbeabsichtigter Zahlungsaufruf und keine neue öffentliche Datenerfassung wurden aktiviert.

Desktop: 1363 CSS-Pixel, Dokumentbreite und scrollWidth jeweils 1348. Schmaler Reflow nach der Korrektur: 340 CSS-Pixel, Dokumentbreite und scrollWidth jeweils 337; kein überlaufendes Element außerhalb der vorhandenen Finanz-Tabellenscrollbereiche. Kennzahlen umbrechen lesbar. Mobiles Menü zuvor live geöffnet und geschlossen; alle elf bisherigen Hauptmenüpunkte vorhanden. Der Finanz-Tabellenscrollbereich ist weiterhin beschriftet und mit tabindex 0 per Tastatur erreichbar; seine innere Tabellenbreite betrug bei der schmalen Prüfung 441 gegenüber 299 CSS-Pixeln im Scrollbereich. Der Desktopzoom wurde nach der Prüfung zurückgesetzt. Kein physisches Mobilgerät getestet.

Interne Links zur ergänzten Datenschutzerklärung und zurück sowie zum Impressum live aufgerufen. Die Aktualisierungsschaltfläche funktioniert, ohne bestätigte Zahlungen zu erfinden. Alle elf bisherigen Hauptbereiche live über ihre vorhandene Navigation geöffnet: Start, Anliegen, Erfahrungsberichte, Geschichte, Politik, Verzeichnis, Organisationen, Über uns, Nachrichten, Veranstaltungen und Einsamkeit. Die Seitenüberschriften wurden jeweils kontrolliert. Der umfassende Inhalts- und Funktionsbestandsschutz stützt sich zusätzlich auf die 278 automatisierten Tests und den bytegenauen Quellvergleich; eine neue vollständige wissenschaftliche Einzelprüfung sämtlicher Fachtexte wurde nicht vorgenommen.

Keine Anwendungsfehler in den erfassten Browser-Fehlermeldungen nach der finalen Livekontrolle. Browser-Erweiterungsmeldungen wurden dabei von Anwendungsfehlern unterschieden.

Prüfbilder der veröffentlichten Korrekturfassung:

- [Desktop: erste Finanzkennzahlen](auftrag12-live-desktop.jpg)
- [Schmale Ansicht: hervorgehobener Bruttoeingang](auftrag12-live-schmal.jpg)
- [GoFundMe-Vorbereitung mit korrigierten externen Quellenlinks](auftrag12-live-gofundme.jpg)

Der abschließende Dokumentationscommit ergänzt ausschließlich diesen Bericht und die drei Prüfbilder. Der geprüfte Anwendungscode und der Produktionsbuild bleiben dabei unverändert. Die endgültige Commit-ID einschließlich der Dokumentation wird im Abschluss genannt und ist über die Repository-Historie nachvollziehbar.

## Noch erforderliche Voraussetzungen

1. Geschützte Original- und Zahlungsnachweisablage, getrennte Veröffentlichungspipeline, echte Dateibyte-/Metadatenprüfung, Zugriffs-/Backup-/Löschkonzept und zuständiger Freigabeprozess.
2. Tatsächliche abgeglichene Finanzunterlagen und aktuelle Kostenplanung. Fehlende Beträge bleiben unbestätigt.
3. Gesonderte Freigabe zur Einrichtung einer GoFundMe-Kampagne; dann tatsächliche Kampagne, richtiger Empfänger und Plattformzweck, Identitäts-/Bankprüfung, private Zulässigkeit, Gebühren/Auszahlungen, ausreichende Abrechnungen und Datenschutz konkret prüfen.
4. Tatsächliche Datenarten, Empfänger, Übermittlungsgrundlagen, Aufbewahrungsfristen und Löschverfahren vor erster Datenerfassung dokumentieren und technisch durchsetzen.
5. Separat freigegebene Aktivierung eines produktiven Zahlungswegs und Prüfung der Pausierung auch auf der externen Kampagnenseite. Erst danach ein freigegebener Zahlungsaufruf oder Facebook-Beitrag mit echten Links.

Die Informations- und Transparenzseite kann unabhängig davon veröffentlicht werden. Die produktive Belegverwaltung und die GoFundMe-Aktion werden nicht als bereits betriebsbereit gemeldet.
