# Auftrag 7 – Abschlussprüfung der ersten Entwicklungsphase

Stand: 14. November 2026. Geprüfter Ausgangscommit: `d7f1277d62ac0eb3f55c2fe54e19c3ee33f71116` (veröffentlichter Stand der Aufträge 1–6).

## Ergebnis und Abnahmegrenze

Die erste Entwicklungsphase ist technisch geprüft und redaktionell erschlossen. **Eine uneingeschränkte wissenschaftliche, historische oder inhaltliche Vollabnahme wird nicht erklärt.** Alle vorgesehenen Themenansichten besitzen Texte; einzelne Ursprungsbehauptungen, historische Zeitfolgen, konkrete Angebotsmerkmale und zusätzliche Funktionen sind weiterhin offen. Diese Unterscheidung bleibt auf der Website und in den Prüfregistern sichtbar.

Dieser Bericht dokumentiert den geprüften Stand vor Veröffentlichung. Die endgültige Commit-ID und der tatsächlich beobachtete Deployment-/Live-Status werden zusätzlich in der Abschlussantwort genannt. Der zugehörige Commit ist über die [Dateihistorie dieses Berichts](https://github.com/MarkBergedorf/bergedorf-gemeinsam/commits/main/docs/einsamkeit/auftrag7.md) nachvollziehbar. Veröffentlicht wird über den bestehenden GitHub-Pages-Workflow, nach vollständigem Test, Build und Synchronisierung; keine andere Hosting-Version wird bearbeitet.

## Tatsächlicher Umfang

| Bestand | Anzahl / Bedeutung |
| --- | --- |
| Hauptthemen | 18 |
| Unterthemen unmittelbar darunter | 109 |
| Weitere Themenknoten in der dritten Themenebene | 12 |
| Themenansichten insgesamt | 139, einschließlich der 18 Hauptthemen; somit 121 nachgeordnete Themenansichten |
| Zusätzliche Stadtteil-Detailansichten | 14 |
| Historische Erfassungsposten / Detailansichten | 104, keine Zahl nachgewiesen geschlossener Gaststätten |
| Historische Datensatztypen | 31 Standortdatensätze, 3 Adresskomplexe, 70 unlokalisierte Recherchehinweise |
| Historische Evidenzklassen | 14 mit extern geprüftem historischem Beleg, 29 Archivbelege, 61 Zeitzeugen-/Recherchehinweise; nicht jede Einzelangabe eines Datensatzes dadurch bestätigt |
| Historische Bildnummern / Medienobjekte | 88 Bildnummern in 85 gemeinsamen Medienobjekten; Varianten und Vorschaubilder sind keine zusätzlichen Orte oder unabhängigen Belege |
| Vollständiges ursprüngliches Zeilenregister | 2.550 nicht leere Originalzeilen aus allen fünf Berichten, darunter 2.301 Inhaltszeilen |
| Zusätzliche Konzeptschwerpunkte | 281 |
| Fachtextabsätze / davon Forschungsabsätze | 814 / 105 |
| Gemeinsames redaktionelles Quellenregister | 149 Einträge; gemischte Quellentypen, keine Zahl wissenschaftlicher Studien |
| Hilfszugänge / Termine | 18 datierte Hilfszugänge; 9 erhaltene Termin-/Planungs-/Archiveinträge |

Die Sonderseitenübersicht selbst kommt hinzu. Thematische Ansichten und Detaildatensätze dürfen nicht zusammengerechnet und als Zahl eigenständiger wissenschaftlicher Artikel oder realer Einrichtungen bezeichnet werden. Historische Namensfolgen, Umfeldaufnahmen und Erinnerungen werden nicht als zusätzliche geschlossene Kneipen gezählt.

## Änderungen in diesem Auftrag

1. Die beiden bestehenden, ausschließlich lokalen Kommentar-Testformulare wurden mit eindeutiger Themenkennung und sichtbarer Zuordnung zu Thema 3 beziehungsweise 9 ergänzt. Jede Eingabe bleibt in ihrem eigenen React-Zustand. Es gibt keine gemeinsame Liste, keine öffentliche Kommentarliste und keine persistente Kommentarablage.
2. Beide Formulare verweisen auf Datenschutz, Moderation und Teilnahmeregeln. Die spätere redaktionelle Prüfung/Freigabe wird ausdrücklich benannt. Der Hinweis umfasst eigene und fremde Kontaktdaten, Namen, Gesundheitsdaten und sonstige vertrauliche Angaben. Automatische Formularvervollständigung ist ausgeschaltet; das ersetzt keinen allgemeinen Schutz vor Browsererweiterungen oder Betriebssystemfunktionen.
3. Leere Überschriften „Inhaltliche Schwerpunkte“ werden nur noch ausgegeben, wenn tatsächlich zugehöriger Inhalt oder ein notwendiger redaktioneller Hinweis existiert. Vorhandene Schwerpunkte bleiben erhalten.
4. Der Quellenhinweis wird nach der tatsächlichen Quellenart erläutert. Institutionelle Angaben werden nicht aufgrund einer technischen Quellen-ID als wissenschaftliche Veröffentlichungen bezeichnet. Alle bisherigen Einzelquellen und Texte bleiben erhalten.
5. Die Terminübersicht erhält einen sichtbaren Nachprüfungshinweis: Die vier vorhandenen Planungsdaten für Forum/Dialogforen 2027 sind im aktuell gelesenen Veranstaltertext nicht erneut bestätigt. Die früheren Planungsdaten werden nicht gelöscht oder zu gültigen Einladungen aufgewertet. Der Januar-Datumswiderspruch bleibt offen.
6. Der öffentliche Quellenbereich verlinkt auf diesen aktuellen Abschlussbericht. Ältere datierte Berichte werden erhalten und nicht nachträglich umgeschrieben.

## Nachweis der beiden Kommentarprüfungen

| Prüffall | Thema 3: Kennenlernen | Thema 9: Begegnungsstätte |
| --- | --- | --- |
| Stabile interne Zuordnung | `kennenlernen` | `begegnungsstaette` |
| Grenze | 250 UTF-16-Zeicheneinheiten | 500 UTF-16-Zeicheneinheiten |
| Leere Eingabe / ausschließlich Leerraum | Zurückgewiesen | Zurückgewiesen |
| Genau an der Grenze | Lokale Prüfung erfolgreich | Lokale Prüfung erfolgreich |
| Weitere Tastatureingabe an der Grenze | Native `maxlength`-Grenze hält 250 | Native `maxlength`-Grenze hält 500 |
| Überlänge über browserseitige Testbefüllung | 251 zurückgewiesen, kein Erfolgshinweis | 501 zurückgewiesen, kein Erfolgshinweis |
| Unicode | 125 zweieinheitige Emoji passen, weitere Einheit abgewiesen | 250 zweieinheitige Emoji passen, weitere Einheit abgewiesen |
| Zähler | Sichtbar, mit Eingabe aktualisiert, `aria-live` | Sichtbar, mit Eingabe aktualisiert, `aria-live` |
| Fehlerbehandlung | Beschriftung, Beschreibung, `aria-invalid`, Fehler mit `role=alert`, Fokus zurück zum Feld | Entsprechend getrennte IDs und eigener Fehlerstatus |
| Gültige Eingabe | Ausdrücklich keine Einreichung, Speicherung oder Veröffentlichung | Ausdrücklich keine Einreichung, Speicherung oder Veröffentlichung |
| Verwerfen | Feld und Prüfergebnis zurückgesetzt | Feld, Zähler und Prüfergebnis zurückgesetzt |
| Wechsel zum anderen Thema | Dort leeres eigenes Feld | Dort leeres eigenes Feld |
| Zurück / Vorwärts | Verlassene Eingabe wird verworfen | Verlassene Eingabe wird verworfen |
| Tastatur | Erreichbares Textfeld und Prüfknopf | Tab vom Feld zum Prüfknopf; Enter löst lokale Prüfung aus |
| Schmale Ansicht | Prüfung erfolgreich, vertikale Schaltflächen | Prüfung erfolgreich, vertikale Schaltflächen |

Die Zeichenzählung stimmt mit der nativen HTML-Längenbegrenzung überein; Symbole können mehrere Einheiten zählen. Das wird erklärt. Die JavaScript-Prüfung weist Überlänge auch dann zurück, wenn die native Eingabebegrenzung bei einem Test umgangen wird. Ein erfolgreicher Test wird nicht als redaktionell akzeptierter Kommentar bezeichnet.

Die vorhandenen Unterseiten 3.8 und 9.12 erschließen jeweils denselben fachlichen Testtyp wie ihr Hauptthema; die Prüfung bestätigt dort 250 beziehungsweise 500. Sie erzeugen keine weiteren Kommentararten oder Listen. Bei Ansichtswechseln werden Eingabekomponenten mit einem neuen Routenschlüssel angelegt. Keine produktive Übermittlung, Datenbank, E-Mail, Cookie-/Webstorage-Ablage oder Veröffentlichung wurde aktiviert. Es wurde kein Backend für Kommentare entwickelt. Die bestehenden Validatoren sind reine lokale Funktionen; die Formulare unterbinden das normale Absenden. Kommentare werden nicht in URLs übernommen.

Eine spätere produktive Anbindung ist ein eigener Auftrag: serverseitige Themen- und Längenprüfung, geschützter Eingang, redaktionelle Rollen und Freigabe, Zugriffsschutz, Missbrauchsschutz, nachvollziehbare Entscheidungen, Aufbewahrung/Löschung und angepasste Datenschutzinformationen sind dann erforderlich. Die lokale Validierung ersetzt diese Prozesse nicht.

## Navigation, Bedienung und Darstellung

### Browserprüfung der Vorschau

- Alle **139 Themenansichten** und **28 zunächst verlinkten Details** wurden aus der tatsächlichen Kartenstruktur erschlossen: 167 verschiedene Ansichten. Ihre Zielüberschriften stimmen mit den jeweiligen Kartentiteln überein. Keine leeren Linkziele, fehlenden Fachansichten oder fehlenden Rückwege wurden gefunden.
- Zusätzlich wurden nach Aktivierung des beschrifteten Recherchefilters **alle 104 historischen Detailansichten** im Browser aufgerufen. Alle besitzen Überschrift, Artikel und Rücksprung. Der Standardfilter zeigt 14 extern belegte Datensätze; er versteckt die übrigen Hinweise nicht endgültig.
- Die **139 Themenkarten wurden sämtlich per Tastatur aktiviert**, jeweils von ihrer richtigen Elternansicht aus, und das Ziel wurde anhand der erwarteten Überschrift geprüft. Karten sind echte Links, keine verschiebbaren Ordner. Ein gezielter Mausklick zur Lebensphasenkarte führte ebenfalls zur richtigen Adresse. Schnelle automatisierte Mausklickfolgen lieferten vereinzelt Zeitüberschreitungen beziehungsweise noch nicht aktualisierte Überschriften; der erneute gezielte Aufruf und die vollständige Tastaturprüfung waren erfolgreich. Das wird nicht als Nachweis einer ungetesteten vollständigen Maus-/Gerätematrix ausgegeben.
- Breadcrumbs, kanonische Elternadressen, alle Kinderzuordnungen und begründete Querverweise sind zusätzlich vollständig in den Datenprüfungen kontrolliert. Für jedes Thema besteht ein gültiger Anschluss; ungültige Routen zeigen „Thema nicht gefunden“ und einen Rückweg zur Übersicht.
- Browser-Zurück/Vorwärts wurde zwischen den beiden Kommentaransichten praktisch geprüft. Die Routen sind direkte, teilbare Hash-Adressen ohne Sitzungsschlüssel. Suchanfragen stehen als kodierter Parameter in der Adresse; Kommentartexte nicht.
- Die Suche „Hausbesuch“ liefert fünf vorhandene Themen, einschließlich der praktischen Hilfe und persönlicher Kontaktwege. Die Tests prüfen außerdem Suchtreffer in Forschungs-, Organisations- und historischen Texten sowie leere Trefferlisten.
- Die Artikelnavigation setzt beim gewählten Abschnitt „Messung und Intervention“ den Fokus auf die zugehörige H2. Die lange Artikelstruktur mit Inhaltsnavigation und Quellenbereich bleibt erhalten.
- Die unmittelbare Hilfe ist von der Übersicht aus prominent verlinkt und in den Hilfsansichten vor der Themensuche platziert. Keine Einreichung als vermeintlich verfügbare Hilfe dargestellt.

### Bildschirmgrößen

| CSS-Viewportbreite | Tatsächliche Prüfung | Ergebnis |
| --- | --- | --- |
| 1363 px | Desktop-Browser, Themen-/Detailnavigation, Formulare, Quellen und Plattformbereiche | Lesbare Artikel/Karten, bedienbare getrennte Formulare, sichtbarer Tastaturfokus |
| 681 px | Alle 167 oben genannten Ansichten, Browserzoom 200 % | Kein horizontaler Dokumentüberlauf |
| 340 px | Alle 167 Ansichten, Browserzoom 400 %; beide Formulare zusätzlich ausgefüllt und geprüft | Kein horizontaler Dokumentüberlauf; Schaltflächen untereinander, Zähler und Ergebnisse erreichbar |

Diese Prüfung kontrolliert responsive CSS und Reflow im Chromium-Browser. Sie ist **keine Prüfung auf einem physischen Smartphone**, keine Betriebssystem-/Touchgeräte-Matrix und keine vollständige WCAG-Zertifizierung. Die Höhen wurden durch den Browserzoom verkleinert; 340 px ist die tatsächlich gemessene CSS-Breite, keine behauptete Gerätesimulation. Browserzoom wurde anschließend zurückgesetzt.

Beschriftungen, echte Link-/Button-/Formularelemente, Überschriftenhierarchie, Breadcrumb-Auszeichnung, Tastaturfokus und Status-/Fehlerhinweise wurden geprüft. Eine vollständige Prüfung mit mehreren Screenreadern, Kontrast-/Vergrößerungseinstellungen und realen assistiven Geräten bleibt offen. Die bestehende Funktion zum Verschieben der gesamten Seitenansicht auf freien Hintergrundflächen ist unverändert; Themen oder Ordner besitzen keine Drag-and-drop-Bearbeitung.

## Redaktioneller Gesamtvergleich und Belege

Der neue [Gesamtabgleich](auftrag7-gesamtabgleich.json) führt alle 2.550 Ursprungszeilen mit ID, Datei/Fundstelle, SHA-256 des unveränderten Wortlauts, vorhandenen Zielartikeln und weiterhin erforderlichen Prüfungen. Hinzu kommen alle 281 Konzeptschwerpunkte, alle 139 Themenpfade und Quellenreferenzen sowie die historischen Datensätze. Es gibt keine strukturelle Fehlzuordnung oder fehlende Zielansicht im Audit. Alle bisherigen Abgleichdateien aus Aufträgen 1–6 bleiben erhalten.

**Ein SHA-256-Abgleich oder eine thematische Verknüpfung ist keine Bestätigung jeder Tatsachenbehauptung.** Der neue Abgleich setzt deshalb keine Originalzeile pauschal auf „Tatsache verifiziert“. Die ursprünglichen Aussagen bleiben mit ihren Gegenständen auffindbar; unbelegte Einzelangaben werden nicht durch plausible Ergänzungen ersetzt. [Fortgeschriebene Prüffragen P01–P19](auftrag7-offene-punkte.json) unterscheiden den inzwischen geklärten Umfang und verbleibende Aufgaben, statt die alten Register stillschweigend als erledigt auszugeben.

### Wissenschaft

Alle 105 Forschungsabsätze besitzen gültige Verweise auf vorhandene Originalnachweise. Methoden und Aussagegrenzen stehen an den Quellen. Die Kontrolle prüft insbesondere die Trennung von subjektiver Einsamkeit, Isolation und Alleinleben, Beobachtung und Intervention, durchschnittlichem Effekt und individueller Prognose, Besucherzahl und nachhaltiger Beziehung. Die einschlägigen Kausalitätsformulierungen zu Gesundheit, Sterblichkeit, Demenz, Arbeit, Gaststätten, Umwelt und KI machen die Grenzen ausdrücklich sichtbar.

Erneut abgeglichen wurden unter anderem das zugängliche Originalabstract von Hickin et al. (31 eingeschlossene Studien, 28 in der Metaanalyse, Heterogenität) und die ursprüngliche Befriending-Übersicht von Siette et al. Keine pauschale Wirkungsgarantie für Besuchsangebote und kein individueller Kausalnachweis daraus. Primärzugänge: [Hickin, Universitätsrepositorium](https://discovery.ucl.ac.uk/id/eprint/10135088/) und [Siette, Originalpublikation](https://doi.org/10.1136/bmjopen-2016-014304).

Der vorhandene 90-Prozent-Maßstab bleibt eine politische Forderung nach tatsächlicher regelmäßiger, freiwilliger, spontaner Nutzung aus eigener Initiative. Er ist kein validiertes wissenschaftliches Messinstrument. Es wurde **kein Fragebogen, keine Umfrage und kein weiteres Formular** eingerichtet. Literaturauswahl und zuvor dokumentierte Lesetiefe bleiben transparent; es wird keine neue systematische Vollrecherche oder Volltextlektüre sämtlicher Quellen behauptet.

### Historische Sammlung

Alle 104 Datensätze wurden auf die dokumentierten Nutzungsphasen, Quellenverbindungen, offenen Angaben und Bildverweise kontrolliert; alle 88 Bildnummern bleiben erschlossen. Insbesondere werden Sander Krug und Sander Treff, alte/neue Engel-Standorte, Bahnhofsklause und Bahnhofsgaststätten sowie Nordmann und Fahrrad Mai nicht gleichgesetzt. Abrissantrag und Genehmigung beim Rastro sind kein gesichertes Betriebsschließungsdatum. Namensfolgen und spätere Raumverwendungen werden nicht zu zusätzlichen Schließungen umgedeutet. Das 2004-Ereignis der Kogge bleibt an den damaligen Feuerwehrbericht gebunden; dessen erneuter Abruf war gesperrt, also keine neue Volltextbestätigung behauptet.

61 Datensätze beruhen auf Erinnerungen/Recherchehinweisen. Auch extern belegte Datensätze besitzen offene Zeitfolgen und aktuelle Nutzungsfragen. Kein Nachweis belegt allein durch einen historischen Ort, dass dessen Verlust bei bestimmten Menschen Einsamkeit verursacht hat. Die historische Forschungsfrage und die politische Bewertung bleiben davon getrennt. Medienzuordnung, Sachbeschreibungen, Freigabestatus und vorhandene öffentliche Dateien sind geprüft; private Erlaubniskorrespondenz wird nicht veröffentlicht. Die früher dokumentierte Grenze der Rechts- und Motivprüfung bleibt erhalten.

### Organisationen, Politik und Termine

Institutionelle Existenz, konkrete Kooperation und vorgeschlagener Partner bleiben getrennt. Geprüfte Namen werden nicht mit einer bestätigten Rolle in jeder Auftaktminute gleichgesetzt. Die Bundesstrategie, Allianz, Koalitionsprogramm, zivilgesellschaftliche Hamburger Planung, Antrag, Verwaltungsbericht und nachgewiesene Teilumsetzung bleiben unterschiedliche Status. Die politische negative Bewertung unzureichender Förderung und des KörberHauses ist als Position von Bergedorf gemeinsam erkennbar; sie ersetzt keine Besucherstatistik.

Die offiziellen KörberHaus-Seiten zu [Öffnungszeiten](https://koerberhaus.de/besuchen/oeffnungszeiten) und [Frei Raum](https://koerberhaus.de/mitmachen) wurden erneut gelesen: Der vorhandene offene, kostenlose Zugang und die unterschiedlichen Haus-/Cafézeiten bleiben berücksichtigt. Es wurde keine beleglose Besucherzusammensetzung ergänzt. Die [aktuelle BgEH-Seite](https://stiftung.bergedorf-bille.de/bgeh) stützt die November-Ankündigung und den vorgesehenen Strategieprozess, bestätigt im gelesenen Text jedoch nicht erneut die vier erhaltenen konkreten Planungsdaten 2027. Der sichtbare Warnhinweis trägt dem Rechnung. Vergangene Termine bleiben Archiv und erscheinen nicht als bevorstehend.

## Technische Quellenlinkprüfung

[Linkprüfprotokoll](auftrag7-linkpruefung.json): **212 eindeutige HTTPS-Links** aus allen redaktionellen Quellenregistern, historischen Belegen und Medienherkünften, Hilfszugängen, Terminen und dem politischen Begegnungsstättenbeitrag wurden mit GET und Lesen von höchstens 512 Antwortbytes geprüft.

- 163 Antworten HTTP 200.
- 32 Antworten HTTP 403.
- 9 Antworten HTTP 503.
- 6 Abrufe ohne abgeschlossene Antwort.
- 2 vorgeschaltete Antworten HTTP 203.
- Keine 404-/410-Antwort im Prüflauf.

Die 49 nicht als HTTP 200 abgeschlossenen Abrufe bleiben mit ihrer URL einzeln im Protokoll offen. 200 bedeutet technische Erreichbarkeit, **keine vollständige Bestätigung des Seiteninhalts**. Ebenso belegt eine Sperre oder ein Timeout keine Löschung und keine falsche Quellenangabe. Such-/Verlagsauszüge werden nicht als gelesene Volltexte umetikettiert. Keine Umgehung von Zugriffsschutz. Alle externen Angebote der übrigen Bürgerplattform wurden damit nicht weltweit vollständig inhaltlich neu geprüft.

## Erhaltung und Regression

Alle bestehenden Fachtexte und Daten bleiben bytegleich zum Ausgangsstand: Hierarchie, historische Sammlung, wissenschaftliche Quellen, Hilfsdaten, politische Forderungen einschließlich zehn Erfolgskriterien, Betriebskonzept und 18 Hausordnungsgrundsätze, Datenschutz und deaktivierte Unterstützerregistrierung. Die notwendigen Änderungen betreffen vier Ansichtsdateien der Sonderseite; keine Kürzung vorhandener Fachtexte.

Ein neuer Regressionstest vergleicht sämtliche übrigen bisherigen Dateien unter `frontend/app`, `frontend/pages` und `frontend/lib` byteweise mit dem veröffentlichten Ausgangscommit. Die bisherigen Tests zu Navigation, Formularen, Sicherheit, historischen Karten, Verzeichnis, öffentlichen Lesedaten und deaktivierten Schreibwegen laufen vollständig mit. Praktisch aufgerufen wurden Start, Anliegen, Erfahrungsberichte, Geschichte, Politik, Verzeichnis, Organisationen, Anmeldung, Datenschutz und Moderation; die vorhandenen Ansichten bleiben lesbar. Eine vollständige Prüfung aller externen Kartendienste oder nicht freigeschalteter Backendabläufe wird nicht behauptet.

**Private Sites-Version 99 blieb unverändert:** keine entsprechende Veröffentlichung, Bearbeitung oder administrative Änderung. Öffentliche Kommentar-, Registrierungs-, Vermittlungs- und sonstige Schreibfunktionen bleiben deaktiviert. Die politische Unterstützerregistrierung bleibt getrennt von diesen lokalen Kommentarprüfungen und wurde nicht freigeschaltet.

## Verbleibende Aufgaben nach Phase 1

- Autorisierte November-Aufzeichnung/Folien, genaue Sprecherrollen, Teilnehmer-/Abstimmungszahlen und einzelne Studienidentitäten beschaffen und mit den Originalzeilen abgleichen.
- Preis-/Konferenzdaten, SAIWIR/Datenbank, Miller & Willi, Januar-/Septemberangaben und die vier 2027-Planungsdaten eindeutig klären. Bekanntheit eines ähnlich klingenden Projekts ersetzt keine Identifizierung.
- Historische Anschriften, Betriebs-/Nutzungsfolgen, tatsächliche Schließungen und heutige Nutzung nach den 104 individuellen offenen Datensätzen weiter erforschen; keine vollständige historische Tatsachenabnahme.
- Repräsentative Nutzung, längerfristige Wirkungen und tatsächliche soziale Beziehungen wissenschaftlich evaluieren. Die Plattform richtet dafür jetzt keine Datenerhebung ein.
- Lokale Versorgung, reale Zugangsmerkmale, freie Plätze, Kosten und Wochenend-/Feiertagslücken in allen 14 Stadtteilen weiter prüfen.
- Die bereits in Auftrag 6 ausdrücklich offenen Zusatzleistungen bleiben offen: eigener Veranstaltungskartenbereich, umfassendere Angebotsfilter nach Zeiten/Zielgruppen/Barrierefreiheit, druckoptimierter Angebotsauszug und geprüfte mehrsprachige Kerninformationen. Vorhandene Hilfsfilter und historische Karten sind kein Ersatz für diese gesonderten Funktionen.
- Vollständige Geräte-/Screenreaderprüfung und weitergehende Barrierefreiheitsprüfung durchführen; vorliegende Reflowprüfung ist keine Zertifizierung.
- Produktive Kommentare oder andere öffentliche Schreibfunktionen erst in einem gesonderten Auftrag mit sicherem Backend und Freigabeprozessen entwickeln. Keine Aktivierung durch diesen Abschluss.

## Reproduzierbare Prüfungen

- `node scripts/einsamkeit/auftrag7-audit.mjs`: vollständiger Bestands-/Referenz-/Zuordnungsabgleich, keine strukturellen Fehler.
- `python scripts/einsamkeit/auftrag7-links.py`: datiertes Linkprotokoll; Ergebnis abhängig vom tatsächlichen externen Antwortstand.
- `pnpm --dir frontend run build`: regulärer Produktionsbuild und vorhandene Dist-Prüfung.
- `pnpm --dir frontend test`: **233 Tests bestanden**, keine Fehler oder übersprungenen Tests, einschließlich fünf neuer Gesamt-/Sicherheits-/Regressionstests.
- `node scripts/sync-pages.mjs`: Synchronisierung und byteweiser Vergleich aller erzeugten Pages-Dateien mit `frontend/dist`.

Bekannte Buildhinweise betreffen die Größe des Hauptbundles und die vorhandene zur Laufzeit aufgelöste Leaflet-CSS-Datei. Sie wurden nicht als verschwunden ausgegeben. Die Dist-Prüfung kontrolliert 263 Ausgabedateien und die bestehende statische Konfiguration. Vor der Veröffentlichung müssen lokaler geprüfter Git-Tree und übertragener GitHub-Tree übereinstimmen; anschließend wird der bestehende Pages-Workflow und die öffentliche Fassung kontrolliert.
