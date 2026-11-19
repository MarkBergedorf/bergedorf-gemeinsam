# Arbeitsauftrag 16 von 16 – Geografische Orientierung sämtlicher Karten

Stand: 19. November 2026. **Vorbereitete Arbeitsfassung, noch nicht veröffentlicht und noch nicht vollständig visuell abgenommen.** Die Prüfgrenzen unten sind verbindlicher Teil dieses Berichts.

## Ausgangsstand und Referenz

Öffentliche Website: https://markbergedorf.github.io/bergedorf-gemeinsam/ . Repository: https://github.com/MarkBergedorf/bergedorf-gemeinsam . Ausgangscommit: `c629dc2bc10c5773385d18c920045a37f89e8491`, einschließlich veröffentlichter Aufträge 13, 14 und 15. Arbeitsbranch: `auftrag16-kartenorientierung`. Keine Zusammenführung in `main` erfolgt.

Referenz vollständig visuell eingesehen: „Gescanntes Dokument 159.pdf“, Seite 1, SHA-256 `0720d6549968781a2d968f449d32a3e66701c9d29d8f55435cd428e2cf94cd8b`. Die Abbildung zeigt Billwerder, Lohbrügge, Neuallermöhe, Allermöhe/Nettelnburg, Bahntrasse, B5, A25, Wasser und Grünflächen. Das rot schraffierte Planungsgebiet wird nicht als allgemeines Kartenelement übernommen. Die Maßstabsangabe begründet keine bestimmte digitale Zoomstufe. Das Referenzfoto wird nicht zusätzlich öffentlich vervielfältigt.

## Vollständige Karteninventur vor den Änderungen

Quellensuche nach Leaflet-Initialisierung, Rasterkacheln, Hintergrundrenderer, Kartenimporten und Einbettungen: genau drei interaktive Kartenrenderer. Die Karten werden mehrfach verwendet; diese Fundstellen sind keine voneinander unabhängigen Grundkarten.

| Renderer / Datei | Tatsächliche Verwendungen | Bisherige Grundlage und Ansichten | Änderung und Prüfstatus |
| --- | --- | --- | --- |
| `frontend/app/history-map.tsx` – `HistoryMap`, `HistoryListMap`, `HistoryReaderMap` | Geschichtsübersicht; historische Beiträge und persönliche Erinnerungen; Detailbeiträge mit freiwilligem Punkt | Leaflet 1.9.4 für Bedienung/Marker; OpenLayers 10.11 / ol-mapbox-style 13.8 für OpenFreeMap Liberty; vorhandene Bezirksübersicht, gespeicherte Ansichten, maximal Zoom 21 | Gemeinsamer verbesserter Hintergrund; Funktions-/Filtertests erfolgreich, externe Sichtprüfung offen |
| Derselbe `HistoryMap` über `frontend/app/history-places.tsx` | Orts-/Gebietsbeiträge im historischen Ortsverzeichnis, soweit die bestehenden Voraussetzungen für eine Karte erfüllt sind | Gleicher Renderer, dieselben Freigaben und Quellen | Automatisch gleiche Verbesserung; Einzelansichten visuell offen |
| Derselbe `HistoryMap` über `frontend/app/history-location.tsx` | Autorenformular, freiwilliges Setzen/Verschieben; administrative Prüfkarte | Editor-/Prüfmodus desselben Renderers; einzelne Punkte bleiben möglich | Gleicher Hintergrund, Bearbeitungslogik unverändert; berechtigte Formular-/Reviewprüfung offen |
| `frontend/app/organisation-map.tsx` – `PrivateMap` / `LocationMap` | Organisationskarte, Verzeichniskarte über `DirectoryResults`, gezielte Standortansichten eines Organisationsprofils über vorhandene Profilzugänge | Leaflet mit OSM-Rasterkacheln; dynamische Bezirksansicht, gespeicherte Position, Cluster, Fokus, Zentrum, Stationen, maximale Vergrößerung 19 | Gemeinsamer Liberty-Hintergrund statt beschrifteter Rasterkacheln; separate erneuerte Anbieterfreigabe; Abfrage/Ablehnen lokal praktisch geprüft, eigentliche Kartenaktionen visuell offen |
| `frontend/app/organisation-location.tsx` – `OrganisationLocationMap` | Standortvorschau im Organisationsformular sowie `OrganisationLocationReview` | Leaflet mit OSM-Rasterkacheln; bisherige Übersicht Zoom 12, Standortfokus 17, Grenzen 10–19 | Derselbe Hintergrund, zusätzlich explizite OpenFreeMap-Freigabe vor dem ersten Kartenabruf; tatsächliche Bearbeitung und Vorschau visuell offen |

`profile-map-access.tsx`, `profile-map.mjs`, `directory-map.mjs`, `history-geography.tsx`, `map-constraints.mjs`, `map-viewport.mjs` und `map-view.mjs` steuern Zugang, Auswahl oder Ansicht und erzeugen keinen zusätzlichen Kartenrenderer. Satellitenzugang ist ein gesondert bestätigter externer Link, keine eingebettete Karte; unverändert. Die vorhandenen Druckvorschau-Iframes enthalten keine interaktive Grundkarte. Eine Straßenkarte wird nicht neu in bisher kartenlose Texte eingebaut.

## Ausgangsproblem und technische Entscheidung

Der vorhandene Liberty-Stil fasst kleinere Orte in `label_other` mit nur 9–10 Pixeln zusammen. Die Organisations- und Standortkarten verwenden fertig beschriftete Rasterbilder: Ein einzelner darin eingebrannter Name lässt sich weder vergrößern noch zur Vermeidung einer Doppelbeschriftung entfernen.

Deshalb verwenden nun alle drei Renderer den bereits eingebundenen OpenFreeMap-Liberty-Vektorhintergrund. Leaflet, Marker, Cluster, Popups, Filter, Auswahl, Rückkehr, Bearbeitung und gespeicherte Position bleiben bestehen. Es wird keine neue feste Ausgangsvergrößerung erzwungen. `map-constraints.mjs`, `map-viewport.mjs` und `map-view.mjs` sind unverändert. Der Wechsel des Organisations-Kacheldienstes ist ausdrücklich dokumentiert; er erfolgt nicht auf Grundlage einer alten OSM-Rasterfreigabe.

Zentrale Dateien: `frontend/lib/map-orientation.mjs` transformiert eine Kopie des vorhandenen Stils; `frontend/lib/history-tiles.mjs` lädt lokale Grundlagen und rendert sie wie bisher mit OpenLayers. Die bestehenden Abbruchsignale stoppen die Anfragen beim Entladen jeder Instanz. Der Hintergrund bleibt nicht interaktiv und verdeckt keine Leaflet-Klickflächen. `MapOrientationNotice` erklärt auf allen drei Renderern die Gebietsebenen und Quellen.

## Daten und fachliche Einordnung

- **14 amtliche Stadtteile:** Namen und unveränderte MultiPolygon-Geometrien aus der vorhandenen Datei `assets/bergedorf-stadtteile.geojson` (LGV / ALKIS, vorhandener dokumentierter Datenstand). Symbolplatzierung innerhalb der Polygone durch den Renderer, keine neu gespeicherte Liste geschätzter Stadtteilkoordinaten. Der Beschriftungsanker ist keine amtliche Ortsmitte. Es werden keine neuen Gebietsgrenzen erfunden.
- **Wohngebiete und Ortslagen:** bestehende OpenMapTiles-`place`-Daten, einschließlich `suburb`, `quarter`, `neighbourhood`, `hamlet` usw. Sie werden größer dargestellt, aber nicht automatisch zu amtlichen Stadtteilen erklärt. Bergedorf-West und Nettelnburg sollen dadurch aus dem bestehenden Datenbestand erscheinen; ihre tatsächlich sichtbare Darstellung muss noch mit echten Kacheln nachgewiesen werden.
- **Oberbillwerder:** als „Oberbillwerder / Planungsgebiet“ gekennzeichnet. Offizielle Planungsbeschreibung lokalisiert den Bereich nördlich der Bahntrasse, östlich des Mittleren Landwegs, südlich des Billwerder Billdeichs und westlich des Ladenbeker Furtwegs im Stadtteil Billwerder. Der redaktionelle Beschriftungsanker `10.162 / 53.5005` ist keine amtliche Koordinate und keine Planungsgrenze. Automatisiert anhand der vorhandenen LGV-Geometrien dem Stadtteil Billwerder zugeordnet. Kein fünfzehnter amtlicher Stadtteil wird angelegt.
- **Fünf S-Bahn-Stationen:** unveränderte vorhandene DB-Koordinaten und Quellen aus `frontend/lib/stations.mjs`; Allermöhe und Nettelnburg eingeschlossen. „S“ bezeichnet einen Stationspunkt, nicht einen geprüften Zugang, Betriebszustand oder Barrierefreiheit.
- **Historische Ortsnamen:** Register, zeitliche Zuordnungen, Quellen, Geschichtsbeiträge und mündlich überlieferte Namen unverändert. Keine Übertragung historischer Namen in eine heutige amtliche Stadtteilliste.

## Zoom-, Kollisions- und Darstellungslogik

| Ebene | Zoomschwellen | Lesbarkeit / Priorität |
| --- | --- | --- |
| Amtliche Stadtteilnamen | ab 10 bis unter 15 | 14 Pixel bei 10, 18 bei 13, 20 bei 15; weiße Kontur |
| Kleinere Orts-/Gebietsbezeichnungen (`label_other`) | ab 12; zusätzliche bestehende Regeln anderer Ortsklassen bleiben bestehen | 14 Pixel bei 12 bis 17 bei 15; weiße Kontur |
| Belegte S-Bahn-Stationsnamen | ab 12 bis unter 16 | 14 Pixel, grün, „S“; bestehende anklickbare Stationssymbole ab 16 unverändert |
| Oberbillwerder / Planungsgebiet | ab 12 bis unter 16 | 14 Pixel, zweizeilig, braun; eindeutig als Planung |
| Detailkartografie | bestehende weitere Stilregeln | Straßen, Bahnlinien, Schilder, Wasser, Grün, Gebäude und zulässige öffentliche POIs bleiben erhalten |

Alle ergänzten Ebenen verbieten Überlappung und ignorieren die Platzierungsprüfung nicht. Acht Pixel Beschriftungsabstand und zwei Pixel weiße Kontur sind eingestellt. Kleinere Kartenausschnitte haben weniger kollisionsfreien Platz und zeigen dadurch weniger Namen; es wird keine einheitliche feste Bildschirm-Zoomposition erzwungen. Die tatsächliche Wirkung bei Desktop-/Mobilbreiten bleibt visuell zu prüfen.

Doppelte Namen werden in den vorhandenen Vektor-Ortsebenen exakt für tatsächlich ersetzte amtliche Namen und Oberbillwerder ausgeschlossen. Bei fehlenden lokalen Stadtteildaten bleiben deren ursprüngliche Provider-Namen als Rückfall erhalten; Straßenkarte, Stationsnamen und Liste bleiben unabhängig nutzbar. Die fünf ergänzten Stationsnamen werden aus passenden Provider-POI-Beschriftungen herausgefiltert. Ein Wohngebietsname und eine mit „S“ ausgezeichnete gleichnamige Station bezeichnen unterschiedliche Objekte; das ist keine versehentliche doppelte Gebietskennzeichnung.

## Datenschutz, Quellen und Lizenzen

Keine Ortung, kein Tracking, keine zusätzliche personenbezogene Erhebung und kein öffentlicher Formularversand. Keine zusätzlichen externen Anbieter neben dem bereits für die Geschichtskarte eingesetzten OpenFreeMap. Organisations- und Standortkarten wechseln von OSMF-Rasterkacheln zu OpenFreeMap-Vektorkarten; damit ändert sich dort der Empfänger der erforderlichen Abrufdaten. Die Organisationsfreigabe verlangt deshalb ausdrücklich den neuen Wert `map-privacy-openfreemap-v2`; alte Werte werden nicht übernommen. Standortvorschauen verlangen zusätzlich eine eigene Anbieterentscheidung. Ablehnen, Schließen oder Escape lassen sie ungeladen. Historische Kartenfreigabe und Organisationsfreigabe bleiben getrennt.

Datenschutztexte und Anbieterlinks sind angepasst. Die bisherigen OSMF-/Fastly-Informationen bleiben als ausdrücklich historische Angaben in der Datenschutzerklärung erhalten. Die alte Symbolerklärung ist als Vergleichshilfe gekennzeichnet; nicht jedes Raster-Symbol wird durch Liberty identisch dargestellt. Produktive Freigabe von Arbeitsauftrag 13, Registrierung und sonstige Datenerfassung bleiben unverändert gesperrt. Die technische Meldung aus Auftrag 14 sowie Bild/Metadaten/noindex aus Auftrag 15 bleiben erhalten.

Tatsächlich konsultierte Primärquellen am 19.11.2026:

1. [OpenFreeMap – offizieller Quick Start](https://openfreemap.org/quick_start/): lokale angepasste Stile und vorhandene OpenLayers-Einbindung.
2. [OpenFreeMap – Datenschutz](https://openfreemap.org/privacy/): erforderliche Verbindungsdaten, keine Cookies laut Anbieter; keine Zusicherung eigener vollständiger Anbieterprotokollprüfung.
3. [OpenFreeMap – Lizenzen](https://github.com/hyperknot/openfreemap/blob/main/LICENSE.md): OpenStreetMap-Daten/ODbL, Liberty/OpenMapTiles-Stilgestaltung CC BY 4.0, Code BSD-3-Clause, Anpassungen MIT; vorhandene Lizenzdatei bleibt bestehen.
4. [OpenMapTiles – Schema](https://openmaptiles.org/docs/schema/): Ortsklassen und Bedeutung der Kartendaten.
5. [ol-mapbox-style – offizielle Dokumentation](https://openlayers.org/ol-mapbox-style/): Stilobjekt auf OpenLayers-LayerGroup, Kollisionsbehandlung.
6. [Hamburg – Billwerder](https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/billwerder-371444) sowie [amtliche räumliche Planungsbeschreibung](https://www.hamburg.de/politik-und-verwaltung/behoerden/behoerde-fuer-stadtentwicklung-und-wohnen/themen/stadtentwicklung/bauleitplanung/flaechennutzungsplan/f10-19-oberbillwerder-56866): Einordnung Oberbillwerders; kein ungeprüfter amtlicher Stadtteilstatus aus dem Projekttitel abgeleitet.
7. Vorhandene LGV-/DB-Quellenregister und Koordinatennachweise des Projekts; unverändert wiederverwendet.

## Tatsächlich ausgeführte Prüfungen

- Regulärer Produktionsbuild erfolgreich: 266 Dateien, Projektbasis `/bergedorf-gemeinsam/`, `noindex` aktiv, 69 redaktionelle Einträge, vier markierte Beispiele, null Live-Datensätze. Bestehende Warnung zu großen JavaScript-Bündeln bleibt; keine Buildfehler.
- Vollständige automatisierte Tests einschließlich neuer Kartentests: **334 Tests bestanden, null Fehler, null übersprungene Tests.** Die neuen Tests prüfen amtliche Daten, Planungszuordnung, unveränderte Stationspunkte, Zoomregeln, Kollisionskonfiguration, Ausschluss doppelter Namen, Erhalt anderer Stilebenen, Rückfall bei fehlenden Daten, neue Anbieterfreigabe, Einbindung aller Renderer und Bestandsschutz. Zusätzlich validiert die tatsächliche MapLibre-Stilspezifikation den zusammengesetzten Stil.
- Die bisherigen Bestandstests werden nicht deaktiviert. Für die exakt aufgelisteten Kartenänderungen werden vorherige/nachherige SHA-256-Werte geprüft und erst danach die ursprünglichen Bytes für ältere Bestandstests rekonstruiert. Jede zusätzliche Änderung eines solchen Dokuments lässt die Prüfung fehlschlagen.
- Lokale Produktionsvorschau erfolgreich gestartet. Verzeichniskarte aufgerufen: neue OpenFreeMap-Hinweise und Orientierungserklärung vorhanden. Neue Anbieterabfrage praktisch geöffnet; richtige Datenempfänger und gleichwertige Auswahl vorhanden. **„Ablehnen“ praktisch geprüft: Karte bleibt ungeladen und Ladeschaltfläche bleibt verfügbar.**
- Keine tatsächliche Kartenlesbarkeit, kein realer Kartenausschnitt und keine Kartenaktion nach Zustimmung als erfolgreich behauptet.

## Konkrete Blockade und zwingend verbleibende Prüfungen

Die automatische Freigabeprüfung hat den Klick auf „Zustimmen“ zur bisherigen OSM-Karte abgelehnt. Begründung: Die damit ausgelöste Übertragung von IP-Adresse, technischen Abrufdaten und Kartenausschnitt an den Anbieter sei ohne ausdrückliche Freigabe dieser Übertragung nicht ausreichend autorisiert. Die Ablehnung wurde nicht durch anderen Browser, direkte Kachelabrufe oder indirekte Aktivierung umgangen. Die Arbeit ohne externe Kartenabrufe wurde fortgesetzt.

Noch erforderlich nach ausdrücklicher Freigabe der externen Testabrufe:

1. Vorher-Bilder der bestehenden veröffentlichten OSM-/Liberty-Karten und Nachher-Bilder der vorbereiteten Karten, Desktop und schmal.
2. Referenzausschnitt Lohbrügge/Billwerder/Bergedorf-West/Neuallermöhe/Nettelnburg/Oberbillwerder; Stationsnamen, A25/B5/Bahn und Umgebung tatsächlich beurteilen. Insbesondere das Vorhandensein von Bergedorf-West und Nettelnburg in der ausgelieferten Vektorkartengrundlage überprüfen; bei Bedarf gezielt nachbessern.
3. Jede Tabellenverwendung oben einzeln praktisch prüfen, soweit öffentlich bzw. mit vorhandenem berechtigtem Zugang erreichbar. Nicht verfügbare Autoren-/Adminzugänge ausdrücklich offen lassen; keinen Zugang erfinden oder öffentliche Einreichung aktivieren.
4. Zoomen, Verschieben, Marker/Cluster/Popups, Filter, Profilzugänge/Rückkehr, Bezirks- und Einzelstandortansichten sowie Laden/Entladen praktisch regressionsprüfen.
5. Desktop, mittlere Breite, schmaler Hochkant-/Querformat-Reflow, Browserzoom und Größenwechsel; Lesbarkeit, Kollisionen und horizontaler Überlauf.
6. Erkannte Fehler korrigieren, betroffene Tests/Build wiederholen.
7. Erst nach erfolgreicher vorgeschriebener Sichtprüfung regulär zusammenführen und veröffentlichen, Pages-Lauf und tatsächliche Erreichbarkeit nachweisen und alle betroffenen Karten live erneut prüfen.

**Veröffentlichungsstatus: Nicht veröffentlicht.** Öffentlicher Hauptbranch bleibt auf dem Stand von Auftrag 14/15. Eine erfolgreiche lokale Prüfung wird nicht als Deployment oder vollständige Erledigung des Auftrags ausgegeben. Endgültiger Veröffentlichungscommit und Pages-Lauf bleiben bis dahin offen. Die lokale Sicherungscommit-ID steht in der Branchhistorie und im Chatabschluss; sie ist kein Veröffentlichungsnachweis.
