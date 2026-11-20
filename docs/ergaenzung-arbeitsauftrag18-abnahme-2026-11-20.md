# Arbeitsauftrag 18 – ergänzende Live-Abnahme und offene Prüfungen

Stand: 20. November 2026 (Europe/Berlin)

Dieser Bericht ergänzt [den ursprünglichen Prüf- und Umsetzungsbericht](abschluss-auftrag18-2026-11-20.md). Er hält den in dieser Runde tatsächlich beobachteten Live-Stand fest. Die öffentliche Seite wurde vor dem hier vorgeschlagenen Folge-Deployment geprüft; lokale Quell- und Buildbefunde sind davon getrennt. Ein Eintrag „bestanden“ gilt nur für den ausdrücklich beschriebenen Umfang.

## Ausgangsstand, Änderungen und Veröffentlichung

- Repository: `MarkBergedorf/bergedorf-gemeinsam`.
- Aktueller GitHub-`main` vor dieser Ergänzung: `c1d7f36b0a6a7e280c0e38e8252a1da7c1d6ab5b` (PR #7, Statuskorrektur). Die lokale Arbeitskopie startete noch bei `ea53f448b891035e263501c9055a7baac56cb2e2`; die Änderung wird deshalb ausdrücklich auf Basis des neueren GitHub-`main` erstellt.
- Bereits veröffentlichte A18-Arbeiten aus PR #6, Merge `a4ec911ef3280a2799551d667e47a2b9fe06dcec`, und erfolgreicher Pages-Lauf #61 bleiben anerkannt. PR #7 ist ebenfalls bereits zusammengeführt.
- Geänderter Quellcode in dieser Ergänzung: `frontend/app/platform.tsx` schließt „Über uns“ zusätzlich nach sichtbarer Beschriftung aus der Hauptnavigation aus. `frontend/scripts/sync-public-root.mjs` kopiert nach dem Build die geprüfte `frontend/dist`-Ausgabe nicht löschend in den Pages-Root; `frontend/package.json` bindet das an `pnpm build`, ein neuer Regressionstest schützt diese Buildkette. Diese drei Änderungen sind im Entwurf von PR #9 enthalten: https://github.com/MarkBergedorf/bergedorf-gemeinsam/pull/9.
- Kein Inhalt, Profil, Mietkostenkapitel, Kartenbereich oder Formular wurde gestrichen. Die bereits vorhandene Quellkorrektur auf sieben Pressemedien bleibt erhalten.
- Live-Fassung vor Folge-Deployment: `https://markbergedorf.github.io/bergedorf-gemeinsam/`. In dieser Fassung zeigte die obere Navigation dennoch „Über uns“ und die Presseauswahl nur fünf Medien. Das ausgelieferte JavaScript trug den zuvor beobachteten Namen `index-DoeXaR8M.js`; der lokale Build erzeugte `index-COiujdpu.js`. Das ist mit einer veralteten Live-Datei vereinbar und macht die erneute Prüfung nach dem Folge-Deployment zwingend. Ein erfolgreicher neuer Live-Status wird hier nicht vorweggenommen.
- PR #8 wurde am 20.11.2026 zusammengeführt (`f09e4cc5bbbb8756d21b71ffc6e6843e178db004`); GitHub Pages-Lauf #63 meldete Erfolg. Die Live-Seite lieferte danach aber weiter `index-DoeXaR8M.js`; „Über uns“ blieb oben und das Presseformular hatte fünf statt sieben Medien. Der Pages-Lauf führte Checkout, Upload artifact und Deployment aus, aber keinen Vite-Build. Ursache: GitHub Pages veröffentlichte den bereits im Root gespeicherten Ausgabestand, während A18-Quellen und Buildausgabe unter `frontend/` liegen. Der Entwurf PR #9 enthält eine lokale Build-/Root-Synchronisierung, aber noch nicht die erzeugten Root-Artefakte; er ist ausdrücklich als Draft offen und nicht mergebereit. Livekorrektur und Nachtest sind daher weiterhin offen.

## Bestandszahlen Verzeichnis und Karte

Die Abweichung entsteht durch unterschiedliche Zähleinheiten, nicht durch drei unerklärte zusätzliche Leserprofile:

| Zählung | Ergebnis | Erläuterung |
|---|---:|---|
| Rohdatensätze `directoryResearch` | 69 | Alle 69 redaktionellen Quelldatensätze haben Koordinaten. |
| Angezeigte Leserprofile nach Gruppierung | 66 | Drei Datensätze werden als Angebote/Standorte in Elternprofile eingerückt. |
| Einträge im Kartenmodell | 67 | Ein untergeordnetes Angebot hat einen zusätzlichen, abweichenden Standort; zwei weitere Kinder teilen die Koordinaten des Elternprofils. |
| Unterschiedliche Koordinatenpaare | 60 | Mehrere Profile/Standorte teilen Adressen beziehungsweise Koordinaten. Kein Datensatz ist ohne Koordinate. |

Die drei gruppierten Zuordnungen sind `editorial-schloss-saal` → `editorial-schloss` (Saal im Bergedorfer Schloss), `editorial-koerber-101` → `editorial-koerber` (Raum 101 im KörberHaus) und `editorial-erloeserkirche` → `editorial-gnadenkirche` (Erlöserkirche mit eigenem Standort). Damit ist die frühere Gegenüberstellung „66 Profile / 67 Standortpunkte“ nachvollzogen. Es wurde nichts gelöscht und keine Koordinate geändert. Die drei Datensätze sind Angebote/Standorte innerhalb der Leserprofile, keine drei zusätzlich gerenderten Profile.

Die Map-UI meldete live 67 ausgewählte Standorteinträge. Nach Gruppierung zeigte die Verzeichnisliste 66 passende Einrichtungen mit geprüftem Kartenpunkt. Die Karte zeigte Marker/Cluster, darunter WC- und S-Bahn-Symbole; eine vollständige Einzelprüfung, dass jede Einrichtung in jedem Cluster sichtbar und erreichbar ist, erfolgte nicht. Der verfügbare Gitverlauf führt `frontend/lib/toilets.mjs` erstmals als Teil eines vollständigen Quellstands vom 7. November 2026; weil die Datei als Ganzes eingeführt wurde, lässt sich daraus kein separates Aufnahmedatum jedes einzelnen Datensatzes belegen.

## Live-Abnahme nach Themen und Funktionen

### Navigation und Route

**Bestanden im beschriebenen Live-Umfang:** Die elf vorgesehenen thematischen Ziele Start, Anliegen, Erfahrungsberichte, Geschichte, Politik, Verzeichnis, Organisationen, Nachrichten, Veranstaltungen, Einsamkeit und Mietkosten wurden über ihre sichtbaren Hauptmenüschaltflächen aufgerufen. Alle acht vorgesehenen Fußbereichslinks – Impressum, Datenschutz, Teilnahmeregeln, Moderation, Nachweise, Barrierefreiheit, Unterstützung und Über uns – öffneten ihre jeweiligen Hash-Routen. „Alle Beiträge“ öffnete `#beitraege`. Zurück führte von `#beitraege` zu `#ueber`; Vorwärts stellte `#beitraege` wieder her; Neuladen erhielt `#beitraege`. Der Sprunglink setzte im vorherigen Live-Durchgang den Fokus auf `main`.

**Fehler in der veröffentlichten Version:** „Über uns“ war zusätzlich als Schaltfläche der oberen Hauptnavigation sichtbar und öffnete `#ueber`. Dies widerspricht A1. Die lokale Quelle enthält den Filter; der Unterschied zum Live-Bundle ist bis zum erneuten Deployment offen. Der Hauptmenü-Klick auf Mietkosten zeigte im ersten schnellen Durchlauf kurzfristig noch den vorherigen Hash; nach UI-Aktualisierung stimmten Hash `#mietkosten` und Mietkostenüberschrift. Ein dauerhafter Routingfehler ließ sich dabei nicht bestätigen.

**Nicht geprüft:** Jeder interne Querverweis und jede der 21 Ansichten im Sinne eines vollständigen Inhalts-/Linkaudits; Browserzustand nach jedem beliebigen Direktlink, sämtliche Tastaturpfade und alle Menü-Zustände bei nativer Mobilbedienung.

### Suche, Filter und Sortierung

**Live bestanden:** Im Verzeichnis ergab die Suche „Bethesda“ einen Treffer; ein künstlicher Nichttreffer ergab null. Der Rollstuhltoiletten-Filter zeigte vier Einträge. Eine Stationenauswahl auf der OpenFreeMap zeigte die S-Bahn Nettelnburg im Popup. In der Mietkostenseite ergab die Suche „Genossenschaftsanteile“ vier Treffer, und der Ergebnislink führte zu Kapitel 13. Suchfeld der Einsamkeitsseite war sichtbar.

**Live fehlerhaft/offen:** Die Verbindung vom Popup über „In der Liste anzeigen“ ließ keine verlässlich hervorgehobene Liste erkennen; Auswahl, Fokus und Rückverknüpfung sind nicht bestätigt. Nicht alle Kombinationen aus Suchwort, Themenbereich, Kategorie, amtlichem Stadtteil, örtlicher Bezeichnung und Sortierung wurden auf allen acht Suchoberflächen manuell erprobt. Leere, einfache und mehrere Treffer sind nur für die ausdrücklich oben genannten konkreten Beispiele belegt. Beiträge, Geschichte, Nachrichten und Veranstaltungen wurden in dieser Runde nicht vollständig durch alle Filterkombinationen geführt. Die vier fiktiven Beispiele bleiben gemäß Seite/Quellstand als Beispiele gekennzeichnet; keine echten Beiträge wurden erzeugt.

### Karten – aktueller OpenFreeMap-Stand

**Praktisch beobachtet:** Nur die aktuelle OpenFreeMap-Karte wurde in der Live-Ansicht geprüft. Vor Kartenfreigabe zeigte die UI den Ladehinweis; im DOM waren zu diesem Zeitpunkt kein Leaflet-Kartencontainer und keine Leaflet-Tiles vorhanden. Die Freigabe erläuterte den externen Abruf und die dabei übermittelte IP-Adresse/Referrer. „Ablehnen“ schloss den Dialog und ließ den Ladehinweis bestehen. Die Freigabe ließ die Karte mit OpenFreeMap/OpenMapTiles/OSM-Attribution und Leaflet-Oberfläche erscheinen. Nettelnburg-Auswahl öffnete ein Stationspopup; Marker-/Clusterzahlen, WC-Kennungen, Zoomschaltflächen und Popupdetails waren sichtbar. „Karte entladen“ entfernte den Kartencontainer und zeigte den Ladehinweis erneut. In der 340-CSS-Pixel-Ansicht war der Kartencontainer etwa 255 × 330 CSS-Pixel groß.

**Einschränkung:** Das Beobachten eines leeren Karten-DOM vor Zustimmung ist kein Netzwerk-Mitschnitt und beweist allein nicht, dass vor Zustimmung keinerlei HTTP-Anfrage versandt wurde. Es gab keinen Netzwerkprotokoll-Mitschnitt. Die Zustimmung löste im Test den nötigen OpenFreeMap-Abruf aus.

**Offen:** Keine vollständige visuelle Abnahme aller 14 Stadtteilgrenzen, Wohngebiete, Oberbillwerder-Beschriftung, Straßen, Zoomstufen oder Labelüberlagerungen. Von fünf S-Bahn-Stationen wurde Nettelnburg praktisch ausgewählt; keine vollständige Marker-/Cluster-/Doppeltstandortprüfung. Keine gesonderte Prüfung von etwaigen historischen Kartenvarianten, gespeicherten Kartenständen, mehreren gleichzeitigen Kartenfreigaben oder Karten auf einem physischen Mobilgerät. Daher ist die Kartenabnahme aus A16/A18 nicht abgeschlossen.

### Formulare

**Presse – Live:** Das lokale Testformular ließ sich öffnen. Digital/Print wechselte die sichtbaren Felder; der Test zeigte die direkte Quellen-URL im Digitalmodus und Ausgabenummer/Jahrgang im Printmodus. Die Live-Presseauswahl hatte fünf Einträge: Bergedorfer Zeitung, Bille Wochenblatt, Hamburger Abendblatt, Hamburger Morgenpost (MOPO) und BILD-Zeitung. `Stadtteilzeitung Lohbrügge` und `Hinz&Kunzt` fehlten trotz Quellstand und Tests mit sieben Einträgen. Eine leere Prüfung zeigte eine lokale Validierungsmeldung. Kein Formular wurde abgesendet. Livekorrektur erst nach ausgerollter aktueller Asset-Datei bestätigen.

**Bezirksamt – Live:** Das Formular wurde mit künstlichen Angaben und einer synthetischen PNG-Datei geprüft. Kategorie, Betreff, Beschreibung, Ortsangabe und Rechteoption A waren bedienbar. Die Fotoauswahl erzeugte eine lokale JPEG-Vorschau und meldete, dass nicht übertragen wurde. Die Fotoerklärung ließ sich nicht erzeugen: Das Datumsfeld zeigte den Wert `2026-11-20`, während die Validierung weiterhin das Datum als erforderlich meldete. Wiederholtes Setzen und Verlassen des Feldes beseitigte den Widerspruch nicht. Ursache ungeklärt; dies ist als Fehler/offener Regressionspunkt zu behandeln, keine erfolgreiche Druck-/PDF-Prüfung. Die Testdatei, Felder und alle Dateireferenzen wurden über „Lokale Angaben und Dateien verwerfen“ verworfen; die UI bestätigte, dass keine Serverkopie angelegt wurde. Es wurde nichts unterschrieben, hochgeladen, weitergeleitet oder übermittelt.

**Technische Störung – Live:** Pflichtfeld-Fehler wurden ausgelöst. Geräte-, Betriebssystem- und Browserauswahl waren bedienbar. Der Ausschluss wurde praktisch geprüft: Mit „Keine“ und „VPN“ blieb VPN als Auswahl gesetzt, ohne widersprüchliche Mehrfachauswahl. „Beim Schließen behalten“ und erneutes Öffnen erhielten die künstlichen Testangaben; der lokale Verwerfen-Schritt entfernte sie. Keine Meldung wurde versandt. Clipboard-Kopieren und Öffnen eines Mailclients wurden nicht ausgelöst, damit kein vorhandener Zwischenablageinhalt überschrieben und keine externe Mailanwendung mit Testdaten geöffnet wird. Diese Funktionen bleiben offen.

### A17 – Mietkosten und Grundsicherung

Die bestehende A17-Umsetzung und Veröffentlichung bleiben anerkannt. Live wurden 51 Abschnittsanker und die vollständige Kapitelübersicht festgestellt. Der Klick auf Kapitel 1 aus der aufgeklappten Kapitelübersicht änderte die URL auf `#mietkosten/abschnitt/1`, fokussierte Kapitel 1 und setzte es an den sichtbaren Inhaltsanfang. Ein Direktaufruf von Kapitel 51 funktionierte. Suche nach „Genossenschaftsanteile“ lieferte vier Treffer und der Ergebnislink öffnete Kapitel 13 mit Fokus. Zurück führte zu `#mietkosten`, Vorwärts wieder zu Kapitel 1; Neuladen erhielt den Abschnittsfokus. Der Tabellenwrapper war in der schmalen Live-Ansicht 293 px breit; horizontales Scrollen bewegte den Scrollwert von 0 bis zum Randwert 38. Bei etwa 337 CSS-Pixel effektiver Seitenbreite trat kein horizontaler Seitenüberlauf auf.

Die schmale Ansicht wurde durch Browserzoom auf ungefähr 340 CSS-Pixel erzeugt. Das ist ein Live-Schmalbreitentest, aber weder ein physisches Smartphone noch native Geräteemulation. Lesbarkeit und Tabellenbedienung sind somit auf dieser schmalen Browseransicht, nicht auf einem realen Mobilgerät, belegt. 51 Abschnitte, acht Themenzugänge und 33 Korrekturpositionen bleiben erhalten. Die korrigierte A17-Dokumentation unterscheidet diesen Befund vom lokalen Reflow-Test.

## Kennungsweise Abnahme nach dem bestehenden Abschlussbericht

Legende: **Bestanden** = im genannten Umfang live oder automatisiert belegt; **Fehler** = Abweichung beobachtet; **Offen** = nicht vollständig geprüft oder Ursache nicht geklärt; **Backend** = absichtlich derzeit nicht aktiv.

### B1–B11 – Inhalte und Hauptbereiche

| ID | Status und Befund |
|---|---|
| B1 Startseite | **Bestanden teilweise:** Live-Navigation geöffnet; Quellstand/Tests halten vier fiktive Beispiele ausdrücklich von echten Bürgerbeiträgen getrennt. Nicht jeder Startseitenlink manuell verfolgt. |
| B2 Anliegen | **Bestanden teilweise:** Route per Hauptnavigation geöffnet; kein echter Beitrag erstellt/gesendet. Vollständige Such-/Eingabe-/Rücknavigation offen; Backend **Backend**. |
| B3 Erfahrungsberichte | **Bestanden teilweise:** Route per Hauptnavigation geöffnet; kein echter Beitrag/Kommentar erzeugt. Alle Filter- und Sortierkombinationen offen; Interaktion **Backend**. |
| B4 Geschichte/Erinnerungen | **Bestanden teilweise:** Route per Hauptnavigation geöffnet. Vollständige 88 Bildnummern/Quellen- und jede Ortsansicht nicht erneut visuell kontrolliert; Einzelbelege offen. |
| B5 Politik | **Bestanden teilweise:** Route geöffnet. Alle Ausschussbezeichnungen und Links nicht neu vollständig sachlich geprüft; offen. |
| B6 Verzeichnis | **Bestanden teilweise:** Suche Bethesda=1, künstlicher Nichttreffer=0, Rollstuhltoilettenfilter=4. Profilzahlen im vorigen Abschnitt abgeglichen; sämtliche Filterkombinationen offen. |
| B7 Organisation/Karte | **Bestanden teilweise / offen:** aktuelle OpenFreeMap sichtbar und bedienbar; Station, Popup, Filter, Cluster und Entladen teilweise erprobt. Geografische Vollprüfung offen. |
| B8 Nachrichten | **Fehler live:** Presseformular zeigte fünf statt sieben Medien. PR #8 samt erfolgreichem Pages-Lauf #63 änderte das Live-Bundle nicht. Lokal gebaute Root-Dateien liegen nicht im Folge-PR; erneute Veröffentlichung und Live-Nachtest offen. |
| B9 Veranstaltungen | **Bestanden teilweise:** Route geöffnet. Datum-/Kosten-/Stadtteilfilter und Einzelquellen nicht vollständig live durchgespielt; offen. |
| B10 Einsamkeit | **Bestanden teilweise:** Route und Suchfeld sichtbar; 139 Ansichten sind im vorhandenen Test-/Quellnachweis belegt. Suchergebnis, alle 139 Seiten und Quellen in dieser Live-Runde nicht einzeln geprüft. |
| B11 Mietkosten | **Bestanden im beschriebenen A17-Umfang:** Kapitel 1, Direktaufruf 51, Suche, Kapitelnavigation, Fokus, History, Reload und horizontaler Tabellenscroll. Kein physisches Mobilgerät. |

### C1–C8 – Recht, Organisation und Quellen

| ID | Status und Befund |
|---|---|
| C1 Impressum | **Bestanden teilweise:** Fußbereichslink öffnete `#impressum`; Betreiberangaben wurden nicht einzeln gegen alle rechtlichen Tatbestände gutachterlich geprüft. |
| C2 Teilnahmeregeln | **Bestanden teilweise:** Fußbereichslink öffnete `#regeln`; produktive Aufbewahrungs-/Löschläufe bleiben wegen fehlendem Backend **Backend**. |
| C3 Bildnachweise/Karten | **Bestanden teilweise:** Link öffnete `#nachweise`; Karte zeigte aktuelle OpenFreeMap-/OpenMapTiles-/OSM-Attribution. Nicht alle Bildquellen erneut gegen externe Ursprünge geprüft. |
| C4 Unterstützung | **Bestanden teilweise:** Fußbereichslink öffnete `#unterstuetzung`; kein Zahlungs- oder Auszahlungsvorgang aktiv oder getestet (**Backend**). |
| C5 Datenschutz | **Bestanden teilweise:** Link öffnete `#datenschutz`; Kartenfreigabe erläuterte externen Kartenabruf. Kein Netzwerk-Mitschnitt/Datenschutzgutachten. |
| C6 Moderation | **Bestanden teilweise:** Link öffnete `#moderation`; tatsächliche Moderations- und Beschwerdeverarbeitung bleibt wegen deaktiviertem Backend **Backend**. |
| C7 Barrierefreiheit | **Bestanden teilweise / offen:** Sprunglink-Fokus und ausgewählte Dialog-/Formularpfade geprüft. Vollständige WCAG-2.2-AA-, Screenreader-, Kontrast- und Vergrößerungsprüfung offen; keine Konformität behauptet. |
| C8 Quellen | **Bestanden teilweise / offen:** Link öffnete `#nachweise`; kein Volltest aller Quellen-/Profilverweise und Dateien. Rechts-/Quellenendprüfung bleibt offen. |

### D1–D7 – Funktionen

| ID | Status und Befund |
|---|---|
| D1 Navigation | **Fehler live / größtenteils bestanden:** alle elf Themenziele, acht Fußseiten, Alle Beiträge sowie Zurück/Vorwärts/Reload geprüft. „Über uns“ erscheint fehlerhaft oben. PR #8/Pages #63 änderten die Live-Datei nicht; geprüfte Root-Datei und Nachtest fehlen noch. |
| D2 Suche/Filter | **Bestanden teilweise / offen:** Mietsuche, Verzeichnissuche/-filter und Kartenstation live erprobt. Alle Bereichs-/Kategorie-/Stadtteil-/Sortierkombinationen fehlen. |
| D3 Geografie | **Offen:** Zahlen und Gruppenmodell abgeglichen; alle 14 amtlichen Grenzverläufe, Wohngebiete und Benennungen nicht gegen externe amtliche Geodaten geprüft. |
| D4 Karten | **Bestanden teilweise / offen:** OpenFreeMap-Freigabe/Ablehnung/Entladen und einzelne interaktive Funktionen; kein Netzwerkmitschnitt und keine vollständige Geografie-/Geräteprüfung. |
| D5 Formulare | **Fehler/offen:** Live-Presseauswahl ist unvollständig; Fotoerklärungsdatum zeigt sichtbaren Wert, wird dennoch als fehlend validiert. Synthese-Foto wurde lokal verarbeitet und danach verworfen. Kein Absenden. |
| D6 Störungsmeldung | **Bestanden teilweise / offen:** Pflichtfehler, Auswahlfelder, widersprüchliche Optionen, Dialogerhalt und Verwerfen; Clipboard und Mailto-Vorbereitung nicht praktisch ausgelöst. |
| D7 Alle Beiträge | **Bestanden teilweise:** Route per sichtbarem Link geöffnet, Beispiele im Quellstand weiterhin als fiktiv getrennt. Filter-/Sortierkombinationen und Beitragsdetail-Rückwege offen. |

### E1–E5 – Recht, Datenschutz, Veröffentlichung

| ID | Status und Befund |
|---|---|
| E1 Rechtsangaben | **Offen teilweise:** frühere A18-Prüfungen zu § 5 UrhG und Kartenlizenzen bleiben wie dokumentiert anerkannt. Keine erneute Gesamtprüfung Mietrecht, Hamburger Fachanweisungen, Rechtsprechung, Datenschutz, Zahlungs-/Speicherpflichten. Keine anwaltliche Prüfung. |
| E2 externe Quellen | **Offen:** technische Erreichbarkeit und Sachbezug sämtlicher externer Quellen wurden nicht komplett neu geprüft; konkrete Einzelfunde sind in A18/B4–B5/C3/C8 ausgewiesen. |
| E3 Backendgrenzen | **Bestanden teilweise:** live wurden Anmeldung, Reaktionen und Meldung als nicht verfügbar gekennzeichnet; lokale Formulare meldeten fehlende Übermittlung. Kein unabhängiger vollständiger Netzwerk-/Backendtest. |
| E4 Produktionsdaten | **Bestanden im Buildumfang:** der vorherige `verify-dist` wies 0 Live-Datensätze und keine privaten Zahlungsbelege aus. Ein vollständiger Geheimnis-/Personendaten-Scan der Historie erfolgte nicht. |
| E5 Geräte/Accessibility | **Bestanden teilweise / offen:** Chrome-Desktop bei 1363 px sowie Live-Schmalansicht per Browserzoom; kein Smartphone, keine echte Geräteemulation, kein zweiter Browser/Screenreader, keine vollständige WCAG-Prüfung. |

## Technische Warnungen und Testbelege

- Das zuvor protokollierte Produktionsbuild war erfolgreich, hatte aber eine Warnung zu nicht beim Build aufgelöstem Leaflet-CSS und große JS-Bundles (ca. 2,72 MB bzw. 558 kB). In der Live-Kartenansicht erschienen Leaflet-Steuerung und Karte nach Zustimmung; ein unmittelbarer Funktionsausfall durch die CSS-Warnung wurde dort nicht beobachtet. Netzqualität, Ladezeit und Performance auf schwachen Mobilgeräten wurden nicht gemessen. Deshalb wurde keine riskante Bibliotheks-/Ladearchitektur geändert.
- Nach Ergänzung der Root-Synchronisierung: `pnpm test` **354 bestanden, 0 fehlgeschlagen, 0 übersprungen**. `pnpm build` erfolgreich; verify-dist meldete 266 Dateien, Basis `/bergedorf-gemeinsam/`, `noindex`, 4 Beispiele, 69 redaktionelle Rohdatensätze und 0 Live-Datensätze. Danach stimmten alle 266 `dist`-Dateien lokal bytegleich mit dem Pages-Root überein. Bestehende Buildwarnungen: Leaflet-CSS wird zur Laufzeit aufgelöst; JS-Bundles 2,72 MB/558 kB und 558 kB/159 kB gzip; Plugin-Timinghinweis.
- Der Draft PR #9 enthält die geprüfte Build-Synchronisierung, aber die beim lokalen Build erzeugten Root-Dateien fehlen. Direkt vor einem Merge/Deployment müssen `index.html`, `404.html` und die drei neuen gehashten JS-Dateien aus der geprüften `dist`-Ausgabe übernommen werden. PR-Statuschecks waren leer; das erfolgreiche Pages-Lauf #63 hatte keinen Vite-Build ausgeführt. Wegen Wegfalls des lokalen Ausführungsumfelds konnte ich die erzeugten 2,72-MB-Dateien nicht mehr in den Git-PR übertragen. PR #9 daher nicht als veröffentlichungsfertig behandeln.

## Noch offene Punkte

1. Fehlende Root-Artefakte in PR #9 ergänzen, dann aktuellen Build/Tests erneut im verfügbaren Repository-Umfeld ausführen, PR zusammenführen und Pages-Lauf abwarten; Live-Nachtest muss „Über uns“ aus dem oberen Menü entfernen und alle sieben Medienoptionen belegen.
2. Fotoerklärungs-Validierung des Datums untersuchen und korrigieren, falls sie im aktuellen Quellbuild reproduzierbar ist; danach lokales Druck-/PDF-/Scanverhalten prüfen, ohne etwas zu übermitteln.
3. Popup-zu-Liste-Markierung und vollständige Verzeichnis-, Inhalts- und Mietkosten-Suche-/Filterkombinationen.
4. Vollständige Liveprüfung aller Kartenflächen, Grenzen, Quartiere, fünf Stationen, Marker-/Clusterinteraktion und Netzwerkverhalten vor Freigabe.
5. Vollständige Formulare inklusive Zeichenlimits, Datum/Zeitzone, Kopieren und Mailto, ohne Versand oder Überschreiben der Nutzerzwischenablage.
6. Vollständige WCAG-/Screenreader-/Mehrbrowser- und physische Mobilgeräteprüfung.
7. Vollständiger Quellen- und Rechtscheck aller angeführten externen Inhalte.
8. Ursachenanalyse der bestehenden Produktionsbuildwarnungen mit Performance-Messung auf Mobilgeräten.

**Gesamtstatus:** Arbeitsauftrag 18 ist durch diese Ergänzung noch nicht vollständig abgenommen. Die konkret bestandenen Teilprüfungen sind oben als solche ausgewiesen. Die Live-Abweichungen bei Hauptnavigation und Presseformular sind trotz erfolgreichem Pages-Status #63 nicht behoben, weil das veraltete Root-Artefakt veröffentlicht wurde. PR #9 enthält zwar die Build-Synchronisierung, aber noch nicht die synchronisierten Assets und ist nicht veröffentlichungsfertig. Das lokale Ausführungsumfeld wurde während der Artefaktübertragung als nicht verfügbar beendet; die 5 erzeugten Root-Dateien konnten dadurch nicht in GitHub übertragen werden. Arbeitsauftrag 17 bleibt davon getrennt als umgesetzt und veröffentlicht anerkannt; seine in dieser Runde verlangten Zusatzprüfungen sind im A17-Abschnitt oben konkret nachgewiesen.
