# Arbeitsauftrag 23 – Umsetzung und Abnahme

**Projekt:** Bergedorf gemeinsam  
**Prüfstand:** 22. November 2026  
**Öffentliche Website:** https://markbergedorf.github.io/bergedorf-gemeinsam/  
**Arbeitszweig:** `feature/auftrag23-historische-begegnungsorte`

## Ergebnis in Kürze

Das bestehende historische Verzeichnis erhielt eine eigene, standardmäßig ungeladene historische Kartenansicht. Sie nutzt dieselbe Leaflet-/OpenLayers-/OpenFreeMap-Architektur und dieselbe Datenschutz-Einwilligung wie die vorhandenen Karten. Die Beschriftung nennt die heutige OpenStreetMap-Kartengrundlage ausdrücklich; sie behauptet keinen historischen Stadtplan. 19 von 31 Datensätzen vom Typ physischer Standort haben eine passende heutige Hausnummer beziehungsweise eine präzise adressierte Einrichtung auf OSM. Ihre Punkte sind Adress- oder Gebäudepositionen, keine belegten historischen Grundstücksgrenzen. Weitere 85 der 104 Ortsdatensätze bleiben in einer vollständigen, separat verlinkten Liste ohne erfundene Koordinaten.

## 30 Prüfpunkte

| Nr. | Prüfpunkt | Ergebnis |
|---:|---|---|
| 1 | GitHub-Ausgangsstand und offene PRs | Hauptzweig `main` stand bei `f6303aa025feed65fa41fa06ac7fb7bdd5dd63e6` (22.11.2026). Zu Beginn war kein offener Pull Request vorhanden. Der Repository-Code enthielt Auftrag 22; die dortigen Task-22-Änderungen wurden beibehalten. |
| 2 | Verwendete historische Quellen | Bestehende Orts-, Medien- und Quellenregister `historical-places-4.json`, `historical-media-4.json` und `historical-sources-4.json`; dazu amtliche Hamburger Informationen zum Schloss, zum Alten Bahnhof und zum Kartenblatt Bergedorf 1919 sowie adresseindeutige OSM-Gebäude-/Adressobjekte. |
| 3 | Berücksichtigte Datensätze | Alle 104 historischen Standortdatensätze bleiben erhalten: 31 `physical_site`, 70 `unlocalized_lead` und 3 `address_complex`. |
| 4 | Geografisch platzierte historische Standorte | 19 der 31 physischen Standortdatensätze sind als adressbezogene Referenzpunkte kartiert. Hinzu kommen zwei separat gekennzeichnete historische Orientierungspunkte. |
| 5 | Nicht abschließend lokalisierte Datensätze | 85: zwölf physische Standorte ohne ausreichend eindeutigen Adressabgleich sowie sämtliche 70 Recherchehinweise und drei Adress-/Gebäudekomplexe. Sie erscheinen in der Liste „Historische Orte – Standort noch nicht abschließend geklärt“. |
| 6 | Historische Kartengrundlage | Keine frei eingeblendete historische Rasterkarte. Die interaktive Karte verwendet ausdrücklich die heutige OpenFreeMap-/OpenStreetMap-Grundlage. Straßen- und Gebäudedarstellung wird nicht als historischer Zustand ausgegeben. |
| 7 | Begründung der Basiskarte | Der LGV-Katalog führt „Bergedorf 1919“ als bestellbares Kartenblatt N6NH (12,50 € je Blatt), nicht als hier nachgewiesenen offenen, georeferenzierten Kartenlayer mit passender Nachnutzungserlaubnis. Das 1593er Kartenblatt ist ebenfalls ein Katalog-/Reproduktionsangebot. Eine Lizenz und georeferenzierte Datei für die Einbindung wurden nicht festgestellt. |
| 8 | Schloss und alter Bahnhof | Bergedorfer Schloss: Adresse Bergedorfer Schloßstraße 4 und amtlicher Museumsnachweis. Alter Bahnhof: amtliche Hamburger Darstellung verortet das 1842 errichtete Gebäude am Neuen Weg; der Marker ist separat am Gebäude Alter Bahnhof Bergedorf, nicht am heutigen S-Bahn-Bahnhof gesetzt. |
| 9 | Moderne Orientierungspunkte | Das KörberHaus wurde nicht übernommen. Moderne Orte erscheinen nicht pauschal als historische Landmarken. Der Hinweis, dass ein Adressmarker eine heutige Adress-/Gebäudeposition abbildet, steht im Kartentext und in jedem Geschäftsmarker. |
| 10 | Ortstypen | Filter: Gaststätten, Geschäfte sowie Kultur und weitere Treffpunkte. Die Filtergruppen werden aus den tatsächlich vorhandenen `kind`-Angaben gebildet; Datensätze wurden nicht inhaltlich umgedeutet. |
| 11 | Mehrere Nutzungen/Cluster | Jedes Archivobjekt behält Namen, Phasen, Quellen und eigenen Detail-Link. Räumlich nahe Marker werden bei kleiner Zoomstufe visuell geclustert; der Cluster-Popup listet die Einträge einzeln. Daraus wird keine gemeinsame Betriebszeit abgeleitet. |
| 12 | Unvollständige Zeiträume | Angezeigt werden die vorhandenen Phasen- und Zeitraumtexte unverändert, einschließlich „Betriebszeit nicht vollständig gesichert“. Fehlende Eröffnungs- oder Schließungsjahre wurden nicht ergänzt. Die Karte erklärt, dass die Betriebe zu unterschiedlichen Zeiten bestanden. |
| 13 | Kartenpunkte mit freigegebenen Medien | 17 der 19 adressbezogenen Marker haben mindestens einen verbundenen, als freigegeben geführten Medieneintrag. Die Registerdatei enthält 85 Medieneinträge; die ursprünglichen Bildnummern B001–B088 bleiben davon getrennt dokumentiert. Schloss und Bahnhof sind ohne historische Sammlungsvorschau. |
| 14 | Bildzuordnung und Aussagekraft | Nur Medien mit `siteIds` zum jeweiligen Ortsdatensatz werden angezeigt. Der Popuptext nennt Titel, Aussagewert, Bildquelle und Sammlungsgutschrift; Verzeichnisfotos und Umfeldansichten werden nicht als Gebäudefoto ausgegeben. Maximal zwei Vorschauen je Ortsabschnitt; alle Bilder und Varianten bleiben im vollständigen Archiv verlinkt. |
| 15 | Bildrechte | Vorhandene Registerfreigaben bleiben maßgeblich. Es wurden keine neuen Bilder kopiert oder nachveröffentlicht. Bildnachweis und Quelle erscheinen beim Marker; Originalrechtefragen bleiben gemäß bestehendem Archivhinweis unberührt. OSM-Daten werden im Kartenbereich attribuiert. |
| 16 | Maus-Hover | Marker zeigen einen kompakten Tooltip mit Name, vorhandenem Zeitraumtext und, sofern vorhanden, einer zugeordneten freigegebenen Medienvorschau. |
| 17 | Klick, Touch und Tastatur | Leaflet-Marker unterstützen Klick und Antippen; sie sind mit Tastatur fokussierbar und tragen Titel-/Alternativbeschriftungen. Der Marker-Popup stellt denselben Standortinhalt und den Archivlink bereit. |
| 18 | Verknüpfung zum Archiv | Jeder historische Marker verlinkt direkt auf den bestehenden vollständigen Standortdatensatz samt Quellen, Phasen, offenen Fragen und Mediengalerie. |
| 19 | Rückverlinkung zur Karte | Geokodierte Detailseiten haben „Diesen adressbezogenen Standort auf der historischen Karte ansehen“. Die Kartenansicht fokussiert und öffnet den ausgewählten Marker. |
| 20 | Suche und Filter | Kartenansicht: Suche nach Name, Alias, Anschrift, Ortstyp und Stadtteil; Filter nach Stadtteil und drei Ortstypgruppen; vollständiges Zurücksetzen. Der Ortseintrag bleibt per Hash-Link direkt adressierbar. |
| 21 | Erhalt des Archivs | Keine Orts-, Medien- oder Quellenzeile wurde gelöscht oder überschrieben. Die bestehende Listen- und Bildarchivansicht bleibt erreichbar; die Kartenansicht ist zusätzlich über den Verzeichniseinstieg verlinkt. |
| 22 | Erhalt weiterer Websitebereiche | Änderungen an der Routenauflösung beschränken sich auf die Kartenansicht des Verzeichnisses und ihre Rücklinks. Die allgemeinen Geschichts- und Infrastrukturkarten sowie Task-22-Inhalte wurden nicht ausgetauscht. |
| 23 | Regressionstests | Vollständige bestehende Testsuite: **400 bestanden, 0 fehlgeschlagen**. Neue Tests prüfen Datenabdeckung, Koordinaten-/OSM-Verknüpfung, Landmark-Abgrenzung, direkte und Rücklinks sowie das erhaltene Archiv. |
| 24 | Produktionsbuild | `pnpm build` erfolgreich; 269 `dist`-Dateien geprüft und mit dem Pages-Root synchronisiert. Buildwarnungen: eine bereits im Projekt vorhandene CSS-Syntaxwarnung sowie ein großes Haupt-JavaScript-Bundle über 500 kB. |
| 25 | Pull Request | Wird nach Upload des geprüften Stands ergänzt. |
| 26 | Merge-Commit | Wird nach dem GitHub-Merge ergänzt. |
| 27 | Pages-Veröffentlichung | Workflow-Lauf und Ergebnis werden nach dem Merge ergänzt. |
| 28 | Öffentliche Live-Prüfung | Wird nach dem Pages-Lauf ergänzt; vorgesehen sind getrennte Kartenausschnitte, ein Geschäftsmarker, Schloss, Alter Bahnhof, Touch-/Tastaturzugriff und Rücklinks. |
| 29 | Verbleibende fachliche Lücken | Zwölf physische Standorte bleiben unplatziert. Insbesondere fehlen eindeutige Koordinaten für Holsteinischer Hof/Bahnhofsumfeld, Zur Sonne, Eckermann und Rastro; Hausnummernzusatz bei Mendelstraße 26 sowie die historische Zuordnung von Zu den Eichen sind offen. Die 19 Punkte referenzieren heutige Adress-/Gebäudeobjekte; historische Grundstücksflächen sind dadurch nicht belegt. |
| 30 | Zurückgestellte Einzelprüfungen | Nicht aufgelöste Kreuzungen/Mehrfachadressen, fehlende Hausnummern, alte Straßenverläufe, zusätzliche historische Karten und Einzelfragen zu Motivdatierung bleiben für weitere Belegprüfung offen. Die unveränderte Datensatzliste verlinkt jedes Detail zur Recherche. |

## Prüffundstellen

- Amtlicher LGV-Eintrag „Bergedorf 1919“: https://www.hamburg.de/politik-und-verwaltung/behoerden/behoerde-fuer-stadtentwicklung-und-wohnen/aemter-und-landesbetrieb/landesbetrieb-geoinformation-und-vermessung/produkte-und-dienstleistungen/karten-und-broschueren/n6nh-245092
- Amtlicher LGV-Eintrag „Bergedorf und Umgebung 1593“: https://www.hamburg.de/politik-und-verwaltung/behoerden/behoerde-fuer-stadtentwicklung-und-wohnen/aemter-und-landesbetrieb/landesbetrieb-geoinformation-und-vermessung/produkte-und-dienstleistungen/karten-und-broschueren/n52nh-245062
- Amtliche Hamburger Bezirksseite zum Alten Bahnhof (Neuer Weg, Baujahr 1842): https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/bergedorf-371382
- Amtliche Hamburger Seite zum Bergedorfer Schloss: https://www.hamburg.de/kultur/kultur-a-z/museen/bergedorfer-schloss-371494
- OpenStreetMap Urheberrecht und ODbL-Attribution: https://www.openstreetmap.org/copyright
- Nominatim-Nutzungsbedingungen (Einzelabfragen, höchstens 1 Anfrage je Sekunde): https://operations.osmfoundation.org/policies/nominatim/
