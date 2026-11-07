// Quellengeprüfte redaktionelle Ortsauswahl; keine Grenz- oder Punktgeometrien abgeleitet.
export const gazetteerEntries=[
  {
    "id": "gauert",
    "name": "Gauert",
    "type": "quarter",
    "kindLabel": "Ortsbezeichnung mit historischem Bezug",
    "districts": [
      "Ochsenwerder"
    ],
    "location": "Historische örtliche Bezeichnung in Ochsenwerder; kein zusätzlicher amtlicher Stadtteil.",
    "overview": [
      {
        "text": "Der Spieker am Gauerter Hauptdeich gehört zur örtlichen Geschichte. Die Hamburger Stadtteilbeschreibung erläutert seine frühere Funktion als Speicher.",
        "sources": [
          "ochsen"
        ]
      },
      {
        "text": "Die Ortsgeschichte dokumentiert eine Distriktschule am Gauert im Jahr 1736. Das belegt eine damalige örtliche Untergliederung, kein heutiges Stadtteilgebiet.",
        "sources": [
          "gauert-schule"
        ]
      },
      {
        "text": "Der Ent- und Bewässerungsverband verwendet den Namen Gauert weiterhin für eine örtliche Gebietseinteilung. Das belegt eine heutige Namensverwendung, jedoch weder eine eigene amtliche Stadtteilstellung noch die Gleichheit heutiger Verbandsgebiete mit historischen Ortsgrenzen.",
        "sources": [
          "verband-heute"
        ]
      }
    ],
    "historicalAffiliation": "Historischer Ortsbezug in Ochsenwerder; kein eigenständiger heutiger Stadtteil.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "ochsen",
        "label": "Ochsenwerder",
        "publisher": "Freie und Hansestadt Hamburg",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/ochsenwerder-371896",
        "locator": "Abschnitt zum Spieker"
      },
      {
        "id": "gauert-schule",
        "label": "Geschichte des Kirchspiels Ochsenwerder",
        "publisher": "Simone Vollstädt, Vier- & Marschlande Regionalmagazin Nr. 3 (1/2014), online 20.02.2017",
        "url": "https://vum-magazin.de/2017/02/20/ochsenwerder/",
        "locator": "Absatz zur Schulgeschichte ab 1736"
      },
      {
        "id": "verband-heute",
        "label": "Gremien und benannte Gewässerbezirke",
        "publisher": "Ent- und Bewässerungsverband der Marsch- und Vierlande",
        "url": "https://www.entundbe.de/verband/gremien",
        "locator": "Vertrauensleute im Gewässerbezirk Ochsenwerder; heutige Verwendung des Namens, keine amtliche Stadtteilgrenze; geprüft am 01.11.2026"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "Historischer Ortsbezug in Ochsenwerder; kein eigenständiger heutiger Stadtteil.",
    "openQuestions": [],
    "changes": "",
    "selectionRole": "current"
  },
  {
    "id": "die-hohe",
    "name": "Die Hohe",
    "type": "area",
    "kindLabel": "Landschaftlicher Gebietsteil",
    "districts": [
      "Reitbrook"
    ],
    "location": "Teilgebiet des heutigen Naturschutzgebiets Die Reit, keine Siedlung.",
    "overview": [
      {
        "text": "Die Hohe wurde 2011 in das Naturschutzgebiet einbezogen. Ihre heutige Gestalt wurde durch Uferveränderungen und Aufspülungen geprägt.",
        "sources": [
          "pep"
        ]
      },
      {
        "text": "Der räumliche Abgleich der amtlichen Schutzgebietsflächen mit den aktuellen Stadtteilgrenzen ergibt die heutige Zugehörigkeit zu Reitbrook. Die im Pflegeplan genannte Gemarkung Allermöhe bleibt eine davon getrennte Katasterangabe.",
        "sources": [
          "stadtteil",
          "nsg"
        ]
      }
    ],
    "historicalAffiliation": "Seit 2011 Teil des erweiterten Naturschutzgebiets Die Reit.",
    "cadastre": "Allermöhe, ausdrücklich als Gemarkung im Pflegeplan bezeichnet.",
    "aliases": [],
    "parent": "die-reit",
    "spatialKind": "area",
    "sources": [
      {
        "id": "pep",
        "label": "Pflege- und Entwicklungsplan für das Naturschutzgebiet Die Reit",
        "publisher": "Hamburg, Behörde für Umwelt und Energie; IUS Weibel & Ness / Astrid Jaschke",
        "url": "https://www.hamburg.de/resource/blob/173036/3663fd888ae0f0388973190414e4eb9a/pep-text-data.pdf#page=31",
        "locator": "Kapitel 2, gedruckte Seite 28 / PDF-Seite 31; Zusammenfassung, gedruckte Seite 9"
      },
      {
        "id": "stadtteil",
        "label": "ALKIS – Verwaltungsgrenzen Hamburg",
        "publisher": "Freie und Hansestadt Hamburg, Landesbetrieb Geoinformation und Vermessung (LGV)",
        "url": "https://api.hamburg.de/datasets/v1/verwaltungsgrenzen/collections/stadtteile/items?f=json&bbox=10.08,53.46,10.13,53.50&limit=30",
        "locator": "Feature 81: Reitbrook, Stadtteilschlüssel 02608; GeoJSON-Geometrie"
      },
      {
        "id": "nsg",
        "label": "Naturschutzgebiete in Hamburg",
        "publisher": "Freie und Hansestadt Hamburg, Behörde für Umwelt, Klima, Energie und Agrarwirtschaft",
        "url": "https://api.hamburg.de/datasets/v1/naturschutzgebiete/collections/nr_f_naturschutzgebiet/items?f=json&bbox=10.08,53.46,10.13,53.50&limit=30",
        "locator": "Features 3049 und 3062: Die Reit; Datenstand 21.03.2025"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Die heutige Stadtteilzuordnung Reitbrook ist durch Abgleich der amtlichen Schutzgebietsflächen mit den aktuellen ALKIS-Stadtteilgeometrien belegt. Die Gemarkung Allermöhe bezeichnet hier keine Zugehörigkeit zum heutigen Stadtteil Allermöhe. Eigene historische Teilgebietsgrenzen sind nicht digitalisiert.",
    "ambiguous": true,
    "timeframe": "Seit 2011 Teil des erweiterten Naturschutzgebiets Die Reit.",
    "openQuestions": [
      "Die historische Teilgebietsgrenze der Hohe ist hier nicht als eigene Geometrie hinterlegt."
    ],
    "changes": "Die heutige Stadtteilzuordnung Reitbrook ist durch Abgleich der amtlichen Schutzgebietsflächen mit den aktuellen ALKIS-Stadtteilgeometrien belegt. Die Gemarkung Allermöhe bezeichnet hier keine Zugehörigkeit zum heutigen Stadtteil Allermöhe. Eigene historische Teilgebietsgrenzen sind nicht digitalisiert."
  },
  {
    "id": "die-reit",
    "name": "Die Reit",
    "type": "area",
    "kindLabel": "Landschafts- und Naturschutzgebiet",
    "districts": [
      "Reitbrook"
    ],
    "location": "Landschaftsname und Naturschutzgebiet am Zusammenfluss von Dove- und Gose-Elbe.",
    "overview": [
      {
        "text": "Das Schutzgebiet besteht seit 1973 und wurde 2011 erweitert. Der Pflegeplan unterscheidet mehrere Gebietsteile.",
        "sources": [
          "pep"
        ]
      },
      {
        "text": "Abgrabungen, Gewässeranlage und frühere Nutzung prägten die Landschaft vor ihrer heutigen naturschutzfachlichen Entwicklung.",
        "sources": [
          "pep"
        ]
      },
      {
        "text": "Der räumliche Abgleich der amtlichen Schutzgebietsflächen mit den aktuellen Stadtteilgrenzen ergibt die heutige Zugehörigkeit zu Reitbrook. Die im Pflegeplan genannte Gemarkung Allermöhe bleibt eine davon getrennte Katasterangabe.",
        "sources": [
          "stadtteil",
          "nsg"
        ]
      }
    ],
    "historicalAffiliation": "Unterschutzstellung 1973, Erweiterung 2011.",
    "cadastre": "Reitbrook: Reit, Gose-Elbe-Wiese und Kleiner Brook. Allermöhe: Die Hohe.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "pep",
        "label": "Pflege- und Entwicklungsplan für das Naturschutzgebiet Die Reit",
        "publisher": "Hamburg, Behörde für Umwelt und Energie; IUS Weibel & Ness / Astrid Jaschke",
        "url": "https://www.hamburg.de/resource/blob/173036/3663fd888ae0f0388973190414e4eb9a/pep-text-data.pdf#page=31",
        "locator": "Kapitel 2, gedruckte Seite 28 / PDF-Seite 31; Zusammenfassung, gedruckte Seite 9"
      },
      {
        "id": "stadtteil",
        "label": "ALKIS – Verwaltungsgrenzen Hamburg",
        "publisher": "Freie und Hansestadt Hamburg, Landesbetrieb Geoinformation und Vermessung (LGV)",
        "url": "https://api.hamburg.de/datasets/v1/verwaltungsgrenzen/collections/stadtteile/items?f=json&bbox=10.08,53.46,10.13,53.50&limit=30",
        "locator": "Feature 81: Reitbrook, Stadtteilschlüssel 02608; GeoJSON-Geometrie"
      },
      {
        "id": "nsg",
        "label": "Naturschutzgebiete in Hamburg",
        "publisher": "Freie und Hansestadt Hamburg, Behörde für Umwelt, Klima, Energie und Agrarwirtschaft",
        "url": "https://api.hamburg.de/datasets/v1/naturschutzgebiete/collections/nr_f_naturschutzgebiet/items?f=json&bbox=10.08,53.46,10.13,53.50&limit=30",
        "locator": "Features 3049 und 3062: Die Reit; Datenstand 21.03.2025"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Die heutige Stadtteilzuordnung Reitbrook ist durch Abgleich der amtlichen Schutzgebietsflächen mit den aktuellen ALKIS-Stadtteilgeometrien belegt. Die Gemarkung Allermöhe bezeichnet hier keine Zugehörigkeit zum heutigen Stadtteil Allermöhe. Eigene historische Teilgebietsgrenzen sind nicht digitalisiert.",
    "ambiguous": true,
    "timeframe": "Unterschutzstellung 1973, Erweiterung 2011.",
    "openQuestions": [
      "Die historische Teilgebietsgrenze der Hohe ist hier nicht als eigene Geometrie hinterlegt."
    ],
    "changes": "Die heutige Stadtteilzuordnung Reitbrook ist durch Abgleich der amtlichen Schutzgebietsflächen mit den aktuellen ALKIS-Stadtteilgeometrien belegt. Die Gemarkung Allermöhe bezeichnet hier keine Zugehörigkeit zum heutigen Stadtteil Allermöhe. Eigene historische Teilgebietsgrenzen sind nicht digitalisiert."
  },
  {
    "id": "kaelbersteert",
    "name": "Kälbersteert",
    "type": "historical",
    "kindLabel": "Ortsbezeichnung und historischer Wohnplatz",
    "districts": [
      "Neuengamme"
    ],
    "location": "Historischer Wohnplatz am Neuengammer Hinterdeich.",
    "overview": [
      {
        "text": "Das Verzeichnis von 1925 führt den Wohnplatz beim Neuengammer Hinterdeich. Darüber hinaus wird hier keine Ortschronik behauptet.",
        "sources": [
          "1925"
        ]
      },
      {
        "text": "Der Ent- und Bewässerungsverband verwendet den Namen Kälbersteert weiterhin für eine örtliche Gebietseinteilung. Das belegt eine heutige Namensverwendung, jedoch weder eine eigene amtliche Stadtteilstellung noch die Gleichheit heutiger Verbandsgebiete mit historischen Ortsgrenzen.",
        "sources": [
          "verband-heute"
        ]
      }
    ],
    "historicalAffiliation": "1925 als Wohnplatz in Neuengamme verzeichnet.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "1925",
        "label": "Die Gemeinden und Straßen des hamburgischen Staatsgebiets, Stand Anfang Oktober 1925",
        "publisher": "Statistische Mitteilungen, 5. Sonderheft; herausgegeben von Prof. Dr. Sköllin, Direktor des Statistischen Landesamts; Digitalisat der SUB Hamburg",
        "url": "https://eimsbuettel-geschichte.de/f/e/Strassen/Hamburger_Strassennamen_SUB_komprimiert.pdf#page=22",
        "locator": "Gedruckte Seite 19, PDF-Seite 22: Neuengamme; Kirchwärder; Ost Krauel"
      },
      {
        "id": "verband-heute",
        "label": "Gremien und benannte Gewässerbezirke",
        "publisher": "Ent- und Bewässerungsverband der Marsch- und Vierlande",
        "url": "https://www.entundbe.de/verband/gremien",
        "locator": "Vertrauensleute im Gewässerbezirk Neuengamme; heutige Verwendung des Namens, keine amtliche Stadtteilgrenze; geprüft am 01.11.2026"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "1925 als Wohnplatz in Neuengamme verzeichnet.",
    "openQuestions": [],
    "changes": "",
    "selectionRole": "current"
  },
  {
    "id": "fuenfhausen",
    "name": "Fünfhausen",
    "type": "quarter",
    "kindLabel": "Stadtteilübergreifende Ortslage",
    "districts": [
      "Kirchwerder",
      "Ochsenwerder"
    ],
    "location": "Ortslage und Siedlungsschwerpunkt im Raum Kirchwerder und Ochsenwerder.",
    "overview": [
      {
        "text": "Der Ortskern ist Gegenstand des gemeinsamen Bebauungsplans Kirchwerder 17 / Ochsenwerder 8. Die Wohnsiedlungsentwicklung seit den 1920er Jahren ist in der Planbegründung beschrieben.",
        "sources": [
          "fuenf"
        ]
      },
      {
        "text": "1925 erscheint Fünfhausen als Wohnplatz der damaligen Bauerschaft Warwisch.",
        "sources": [
          "1925"
        ]
      }
    ],
    "historicalAffiliation": "1925 als Wohnplatz der Bauerschaft Warwisch verzeichnet; heutiger Planungsbezug stadtteilübergreifend.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "fuenf",
        "label": "Bebauungsplan Kirchwerder 17 / Ochsenwerder 8 – Begründung",
        "publisher": "Freie und Hansestadt Hamburg",
        "url": "https://www.daten-hamburg.de/infrastruktur_bauen_wohnen/bebauungsplaene/pdfs/bplan_begr/Kirchwerder17-Ochsenwerder8.pdf",
        "locator": "PDF-Seite 1, Abschnitt 2; PDF-Seite 3, Abschnitt 3.4"
      },
      {
        "id": "1925",
        "label": "Die Gemeinden und Straßen des hamburgischen Staatsgebiets, Stand Anfang Oktober 1925",
        "publisher": "Statistische Mitteilungen, 5. Sonderheft; herausgegeben von Prof. Dr. Sköllin, Direktor des Statistischen Landesamts; Digitalisat der SUB Hamburg",
        "url": "https://eimsbuettel-geschichte.de/f/e/Strassen/Hamburger_Strassennamen_SUB_komprimiert.pdf#page=22",
        "locator": "Gedruckte Seite 19, PDF-Seite 22: Neuengamme; Kirchwärder; Ost Krauel"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Der Ortsname bezeichnet keinen eigenen Stadtteil. Der Planumgriff ist nicht automatisch die Grenze der gesamten umgangssprachlichen Ortslage.",
    "ambiguous": true,
    "timeframe": "1925 als Wohnplatz der Bauerschaft Warwisch verzeichnet; heutiger Planungsbezug stadtteilübergreifend.",
    "openQuestions": [
      "Der Ortsname bezeichnet keinen eigenen Stadtteil. Der Planumgriff ist nicht automatisch die Grenze der gesamten umgangssprachlichen Ortslage."
    ],
    "changes": "Der Ortsname bezeichnet keinen eigenen Stadtteil. Der Planumgriff ist nicht automatisch die Grenze der gesamten umgangssprachlichen Ortslage."
  },
  {
    "id": "lange-grove",
    "name": "Lange Grove",
    "type": "historical",
    "kindLabel": "Historische Deichbezeichnung",
    "districts": [
      "Neuengamme"
    ],
    "location": "Bezeichnung eines historischen Deichabschnitts am heutigen Neuengammer Hauptdeich.",
    "overview": [
      {
        "text": "Ein Gedenkstein erinnert an den Deichbruch von 1771. Nach dem Bruch wurde der Deich im Bogen geschlossen; die gerade Linie entstand wieder bei den Hochwasserschutzarbeiten nach 1962.",
        "sources": [
          "lange"
        ]
      }
    ],
    "historicalAffiliation": "1771 Deichbruch; Neuordnung der Deichlinie nach 1962.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [
      "Grove, Lange"
    ],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "lange",
        "label": "Die Deiche und das Wasser, 14.02.2022",
        "publisher": "Bernd Reinert, Bergedorf Blog der SUB Hamburg",
        "url": "https://blogs.sub.uni-hamburg.de/bergedorf/?p=10994",
        "locator": "Absätze zum Gedenkstein an der Langen Grove"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "1771 Deichbruch; Neuordnung der Deichlinie nach 1962.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "achterdeich",
    "name": "Achterdeich",
    "type": "historical",
    "kindLabel": "Historische Deichbezeichnung",
    "districts": [
      "Neuengamme"
    ],
    "location": "Historische weitere Bezeichnung des Neuengammer Hinterdeichs und seines örtlichen Zusammenhangs.",
    "overview": [
      {
        "text": "Das Verzeichnis von 1925 verweist von Achterdeich auf den Neuengammer Hinterdeich. Es belegt damit eine Bezeichnung, kein eigenständiges Dorf.",
        "sources": [
          "1925"
        ]
      }
    ],
    "historicalAffiliation": "1925 in Neuengamme verzeichnet.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [
      "Neuengammer Hinterdeich"
    ],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "1925",
        "label": "Die Gemeinden und Straßen des hamburgischen Staatsgebiets, Stand Anfang Oktober 1925",
        "publisher": "Statistische Mitteilungen, 5. Sonderheft; herausgegeben von Prof. Dr. Sköllin, Direktor des Statistischen Landesamts; Digitalisat der SUB Hamburg",
        "url": "https://eimsbuettel-geschichte.de/f/e/Strassen/Hamburger_Strassennamen_SUB_komprimiert.pdf#page=22",
        "locator": "Gedruckte Seite 19, PDF-Seite 22: Neuengamme; Kirchwärder; Ost Krauel"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "1925 in Neuengamme verzeichnet.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "borghorst",
    "name": "Borghorst",
    "type": "quarter",
    "kindLabel": "Historische Ortslage",
    "districts": [
      "Altengamme"
    ],
    "location": "Historische Ortslage in Altengamme mit Bezügen zum Borghorster Brack und zur Mühle.",
    "overview": [
      {
        "text": "Das Brack ist auf einer Karte von 1771 eingezeichnet. Sein Entstehungsdatum ist unbekannt; die Kartennennung ist kein Gründungsdatum des Ortes.",
        "sources": [
          "borghorst"
        ]
      },
      {
        "text": "Die Borghorster Mühle gehört zu den historischen Bauwerken des Stadtteils.",
        "sources": [
          "altengamme"
        ]
      }
    ],
    "historicalAffiliation": "Historischer Ortsbezug in Altengamme; Brack spätestens 1771 kartiert.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "borghorst",
        "label": "Borghorster Brack",
        "publisher": "Hamburg, Umweltbehörde",
        "url": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/boden-und-geologie/geologie/geologie-in-hamburg/geotourismus/geotope-im-hamburger-raum/borghorster-brack-168458",
        "locator": "Beschreibung des Geotops und historische Karte von 1771"
      },
      {
        "id": "altengamme",
        "label": "Altengamme",
        "publisher": "Freie und Hansestadt Hamburg",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/altengamme-371324",
        "locator": "Abschnitt zur Borghorster Mühle"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "Historischer Ortsbezug in Altengamme; Brack spätestens 1771 kartiert.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "billwerder",
    "name": "Billwerder",
    "type": "district",
    "kindLabel": "Amtlicher Stadtteil",
    "districts": [
      "Billwerder"
    ],
    "location": "Heutiger amtlicher Stadtteil des Bezirks Bergedorf und Teil der Marschlande.",
    "overview": [
      {
        "text": "Das Dorf entwickelte sich entlang der Bille als langgestreckte Marschsiedlung. Die Hamburger Darstellung nennt eine Erwähnung von 1162; das ist kein belegtes Gründungsjahr.",
        "sources": [
          "billwerder"
        ]
      },
      {
        "text": "Hamburg erwarb den Ort 1395. Spätere Gebietsabgaben veränderten seine Ausdehnung; die heutige Stadtteilfläche ist nicht mit dem historischen Dorfgebiet gleichzusetzen.",
        "sources": [
          "billwerder"
        ]
      }
    ],
    "historicalAffiliation": "Historische Marschsiedlung; heute amtlicher Stadtteil.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [
      "Billwärder an der Elbe (bis 1949)"
    ],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "billwerder",
        "label": "Billwerder",
        "publisher": "Freie und Hansestadt Hamburg",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/billwerder-371444",
        "locator": "Geschichte und Siedlungsform"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": false,
    "timeframe": "Historische Marschsiedlung; heute amtlicher Stadtteil.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "tatenberg",
    "name": "Tatenberg",
    "type": "district",
    "kindLabel": "Amtlicher Stadtteil",
    "districts": [
      "Tatenberg"
    ],
    "location": "Heutiger amtlicher Stadtteil in den Marschlanden an der Dove-Elbe.",
    "overview": [
      {
        "text": "Die Hamburger Stadtteilgeschichte nennt 1315 die Schreibweise Tadekenberghe und 1395 den Erwerb durch Hamburg.",
        "sources": [
          "tatenberg"
        ]
      }
    ],
    "historicalAffiliation": "1315 erwähnt; 1395 durch Hamburg erworben.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [
      "Tadekenberghe"
    ],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "tatenberg",
        "label": "Tatenberg",
        "publisher": "Freie und Hansestadt Hamburg",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/tatenberg-372042",
        "locator": "Geschichte: Tadekenberghe und Erwerb durch Hamburg"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": false,
    "timeframe": "1315 erwähnt; 1395 durch Hamburg erworben.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "bille-siedlung",
    "name": "Bille-Siedlung",
    "type": "quarter",
    "kindLabel": "Wohnsiedlung",
    "districts": [
      "Moorfleet"
    ],
    "location": "Nachkriegssiedlung in Moorfleet; Teile bestehen nach Sanierung weiter.",
    "overview": [
      {
        "text": "Die Siedlung entstand in den 1950er Jahren auf aufgespültem Boden. Später nachgewiesene Schadstoffbelastungen führten zu Sanierungsmaßnahmen und zum Abriss großer Teile.",
        "sources": [
          "bille"
        ]
      },
      {
        "text": "Andere Abschnitte wurden nach Bodenaustausch wieder bewohnt. Die Siedlung ist deshalb nicht insgesamt verschwunden.",
        "sources": [
          "bille"
        ]
      }
    ],
    "historicalAffiliation": "Nachkriegsgründung; später Belastungsuntersuchung und Sanierung. Kein eigener Stadtteil.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "bille",
        "label": "Geschichte der Bille-Siedlung",
        "publisher": "Hamburg, Umweltbehörde",
        "url": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/boden-und-geologie/bodenschutz/bodenlehrpfad/bodenlehrpfad-bille-siedlung/bodenlehrpfad-bille-siedlung-hintergrund-167256",
        "locator": "Abschnitte zu Siedlungsbau, Belastung und Sanierung"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "Nachkriegsgründung; später Belastungsuntersuchung und Sanierung. Kein eigener Stadtteil.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "reitbrook",
    "name": "Reitbrook",
    "type": "district",
    "kindLabel": "Amtlicher Stadtteil",
    "districts": [
      "Reitbrook"
    ],
    "location": "Heutiger amtlicher Stadtteil zwischen Dove- und Gose-Elbe, Teil der Marschlande.",
    "overview": [
      {
        "text": "Die Hamburger Darstellung nennt 1162 die Bezeichnung Ragit. Nach wechselnden Herrschaftsverhältnissen kam Reitbrook 1768 endgültig an Hamburg.",
        "sources": [
          "reitbrook"
        ]
      }
    ],
    "historicalAffiliation": "1162 als Ragit erwähnt; endgültiger Übergang an Hamburg 1768.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [
      "Ragit"
    ],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "reitbrook",
        "label": "Reitbrook",
        "publisher": "Freie und Hansestadt Hamburg",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/reitbrook-371948",
        "locator": "Geschichte: Ragit, Herrschaftswechsel und Gottorper Vertrag"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": false,
    "timeframe": "1162 als Ragit erwähnt; endgültiger Übergang an Hamburg 1768.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "overhaken",
    "name": "Overhaken",
    "type": "quarter",
    "kindLabel": "Historische Elbinsel und Ortslage",
    "districts": [
      "Ochsenwerder"
    ],
    "location": "Historische Elbinsel und örtliche Bezeichnung am nördlichen Elbufer; außerdem Name einer Gemarkung.",
    "overview": [
      {
        "text": "Nach der Gemeindechronik Seevetals gehörte Overhaken bis 1937 zu Over. Die schon 1692 bestehende Fährverbindung wurde nach der Sturmflut 1962 eingestellt.",
        "sources": [
          "over"
        ]
      },
      {
        "text": "Die Untersuchung zum Hohendeicher See benennt Overhaken ausdrücklich als eine der Gemarkungen am See.",
        "sources": [
          "see"
        ]
      }
    ],
    "historicalAffiliation": "Bis 1937 zu Over gehörig; Fähre nach 1962 eingestellt.",
    "cadastre": "Eigene Gemarkung Overhaken; diese ist nicht mit dem Stadtteil Ochsenwerder gleichzusetzen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "over",
        "label": "Over – Geschichte des Ortes",
        "publisher": "Gemeinde Seevetal",
        "url": "https://www.seevetal.de/portal/seiten/over-910000775-20200.html",
        "locator": "Absätze zu den Elbinseln bis 1937 und zur Fährverbindung Over–Overhaken"
      },
      {
        "id": "see",
        "label": "Hohendeicher See – Nutzungen, Zustand und Maßnahmenvorschläge, 2021",
        "publisher": "Freie und Hansestadt Hamburg",
        "url": "https://www.hamburg.de/resource/blob/1020262/210d9dca32906ee9372bf6d75cce17f4/d-hohendeicher-see-nutzungsstudie-2021-data.pdf",
        "locator": "Kapitel 5, gedruckte Seite 149, Abbildung 66"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Die Ortslage wird dem Raum Ochsenwerder zugeordnet. Die historischen Inselgrenzen und die heutige Gemarkungsgrenze sind nicht als deckungsgleich belegt.",
    "ambiguous": true,
    "timeframe": "Bis 1937 zu Over gehörig; Fähre nach 1962 eingestellt.",
    "openQuestions": [
      "Die Ortslage wird dem Raum Ochsenwerder zugeordnet. Die historischen Inselgrenzen und die heutige Gemarkungsgrenze sind nicht als deckungsgleich belegt."
    ],
    "changes": "Die Ortslage wird dem Raum Ochsenwerder zugeordnet. Die historischen Inselgrenzen und die heutige Gemarkungsgrenze sind nicht als deckungsgleich belegt."
  },
  {
    "id": "overwerder",
    "name": "Overwerder",
    "type": "quarter",
    "kindLabel": "Historische Elbinsel und Ortslage",
    "districts": [
      "Ochsenwerder",
      "Kirchwerder"
    ],
    "location": "Historische Elbinsel und heutige örtliche Bezeichnung im Raum Ochsenwerder / Kirchwerder.",
    "overview": [
      {
        "text": "Overwerder gehörte nach der Gemeindechronik Seevetals bis 1937 zu Over.",
        "sources": [
          "over"
        ]
      },
      {
        "text": "Das Straßen- und Gebietsverzeichnis unterscheidet beim Overwerder Bogen Abschnitte mit unterschiedlicher Stadtteilzuordnung. Ein Straßenname allein legt deshalb keine eindeutige Ortsgrenze fest.",
        "sources": [
          "strassen"
        ]
      }
    ],
    "historicalAffiliation": "Bis 1937 zu Over gehörig.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "over",
        "label": "Over – Geschichte des Ortes",
        "publisher": "Gemeinde Seevetal",
        "url": "https://www.seevetal.de/portal/seiten/over-910000775-20200.html",
        "locator": "Absätze zu den Elbinseln bis 1937 und zur Fährverbindung Over–Overhaken"
      },
      {
        "id": "strassen",
        "label": "Straßen- und Gebietsverzeichnis Hamburg, 2011, 2. Auflage",
        "publisher": "Statistisches Amt für Hamburg und Schleswig-Holstein",
        "url": "https://www.statistischebibliothek.de/mir/servlets/MCRFileNodeServlet/HHHeft_derivate_00000169/1221-12-2011-2Aufl.pdf",
        "locator": "Gedruckte Seite 127 / PDF-Seite 127: Overwerder Bogen; historische Ausgabe 2011, keine aktuelle Grenzgeometrie"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Räumlicher Zusammenhang Ochsenwerder / Kirchwerder; eine heutige metergenaue Grenze der Ortsbezeichnung ist nicht belegt. Die Straßenquelle hat den Stand 2011.",
    "ambiguous": true,
    "timeframe": "Bis 1937 zu Over gehörig.",
    "openQuestions": [
      "Räumlicher Zusammenhang Ochsenwerder / Kirchwerder; eine heutige metergenaue Grenze der Ortsbezeichnung ist nicht belegt. Die Straßenquelle hat den Stand 2011."
    ],
    "changes": "Räumlicher Zusammenhang Ochsenwerder / Kirchwerder; eine heutige metergenaue Grenze der Ortsbezeichnung ist nicht belegt. Die Straßenquelle hat den Stand 2011."
  },
  {
    "id": "oortkaten",
    "name": "Oortkaten",
    "type": "area",
    "kindLabel": "Orts- und Gebietsbezeichnung",
    "districts": [
      "Ochsenwerder"
    ],
    "location": "Örtliche Bezeichnung in Ochsenwerder mit Hafen-, Straßen- und früherem Bahnhofsbezug.",
    "overview": [
      {
        "text": "Die Erschließung über den Oortkatenweg und die Anbindung an den damaligen Bahnhof beschäftigten 1924 die örtliche Berichterstattung. Die SUB-Darstellung erläutert auch die damalige Diskussion über die Schreibweise.",
        "sources": [
          "oort"
        ]
      }
    ],
    "historicalAffiliation": "Straßen- und Bahnhofsbezug 1924 belegt; weiterhin örtliche Bezeichnung.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "oort",
        "label": "Die neue Straße in Ochsenwärder, 03.06.2024",
        "publisher": "Bernd Reinert, Bergedorf Blog der SUB Hamburg",
        "url": "https://blogs.sub.uni-hamburg.de/bergedorf/?p=14225",
        "locator": "Absätze zum Oortkatenweg und Bahnhof, Bezüge auf die Bergedorfer Zeitung 1924"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "Straßen- und Bahnhofsbezug 1924 belegt; weiterhin örtliche Bezeichnung.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "warwisch",
    "name": "Warwisch",
    "type": "quarter",
    "kindLabel": "Ehemalige Bauerschaft und heutige Ortslage",
    "districts": [
      "Kirchwerder"
    ],
    "location": "Örtliche Bezeichnung in Kirchwerder; historisch eine Bauerschaft.",
    "overview": [
      {
        "text": "Das Verzeichnis von 1925 führt Warwisch als Bauerschaft. Der Wohnplatz Wraust war dieser Untergliederung zugeordnet.",
        "sources": [
          "1925"
        ]
      },
      {
        "text": "Der Ent- und Bewässerungsverband verwendet den Namen Warwisch weiterhin für eine örtliche Gebietseinteilung. Das belegt eine heutige Namensverwendung, jedoch weder eine eigene amtliche Stadtteilstellung noch die Gleichheit heutiger Verbandsgebiete mit historischen Ortsgrenzen.",
        "sources": [
          "verband-heute"
        ]
      }
    ],
    "historicalAffiliation": "1925 Bauerschaft der damaligen Landgemeinde Kirchwärder.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "1925",
        "label": "Die Gemeinden und Straßen des hamburgischen Staatsgebiets, Stand Anfang Oktober 1925",
        "publisher": "Statistische Mitteilungen, 5. Sonderheft; herausgegeben von Prof. Dr. Sköllin, Direktor des Statistischen Landesamts; Digitalisat der SUB Hamburg",
        "url": "https://eimsbuettel-geschichte.de/f/e/Strassen/Hamburger_Strassennamen_SUB_komprimiert.pdf#page=22",
        "locator": "Gedruckte Seite 19, PDF-Seite 22: Neuengamme; Kirchwärder; Ost Krauel"
      },
      {
        "id": "verband-heute",
        "label": "Gremien und benannte Gewässerbezirke",
        "publisher": "Ent- und Bewässerungsverband der Marsch- und Vierlande",
        "url": "https://www.entundbe.de/verband/gremien",
        "locator": "Vertrauensleute im Gewässerbezirk Kirchwerder; heutige Verwendung des Namens, keine amtliche Stadtteilgrenze; geprüft am 01.11.2026"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "1925 Bauerschaft der damaligen Landgemeinde Kirchwärder.",
    "openQuestions": [],
    "changes": "",
    "selectionRole": "current"
  },
  {
    "id": "wraust",
    "name": "Wraust",
    "type": "historical",
    "kindLabel": "Ortsbezeichnung und historischer Wohnplatz",
    "districts": [
      "Kirchwerder"
    ],
    "location": "Historischer Wohnplatz im Kirchwerder Zusammenhang.",
    "overview": [
      {
        "text": "1925 ist Wraust als Wohnplatz der Bauerschaft Warwisch aufgeführt. Der Quellenbefund reicht hier zunächst für diese Zuordnung, nicht für eine weitergehende Ortschronik.",
        "sources": [
          "1925"
        ]
      },
      {
        "text": "Der Ent- und Bewässerungsverband verwendet den Namen Wraust weiterhin für eine örtliche Gebietseinteilung. Das belegt eine heutige Namensverwendung, jedoch weder eine eigene amtliche Stadtteilstellung noch die Gleichheit heutiger Verbandsgebiete mit historischen Ortsgrenzen.",
        "sources": [
          "verband-heute"
        ]
      }
    ],
    "historicalAffiliation": "1925 Wohnplatz in der Bauerschaft Warwisch, Landgemeinde Kirchwärder.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": "warwisch",
    "spatialKind": "area",
    "sources": [
      {
        "id": "1925",
        "label": "Die Gemeinden und Straßen des hamburgischen Staatsgebiets, Stand Anfang Oktober 1925",
        "publisher": "Statistische Mitteilungen, 5. Sonderheft; herausgegeben von Prof. Dr. Sköllin, Direktor des Statistischen Landesamts; Digitalisat der SUB Hamburg",
        "url": "https://eimsbuettel-geschichte.de/f/e/Strassen/Hamburger_Strassennamen_SUB_komprimiert.pdf#page=22",
        "locator": "Gedruckte Seite 19, PDF-Seite 22: Neuengamme; Kirchwärder; Ost Krauel"
      },
      {
        "id": "verband-heute",
        "label": "Gremien und benannte Gewässerbezirke",
        "publisher": "Ent- und Bewässerungsverband der Marsch- und Vierlande",
        "url": "https://www.entundbe.de/verband/gremien",
        "locator": "Vertrauensleute im Gewässerbezirk Kirchwerder; heutige Verwendung des Namens, keine amtliche Stadtteilgrenze; geprüft am 01.11.2026"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "1925 Wohnplatz in der Bauerschaft Warwisch, Landgemeinde Kirchwärder.",
    "openQuestions": [],
    "changes": "",
    "selectionRole": "current"
  },
  {
    "id": "howe",
    "name": "Howe",
    "type": "quarter",
    "kindLabel": "Ehemalige Bauerschaft und heutige Ortslage",
    "districts": [
      "Kirchwerder"
    ],
    "location": "Örtliche Bezeichnung in Kirchwerder; historisch eine Bauerschaft.",
    "overview": [
      {
        "text": "Das Verzeichnis von 1925 nennt Howe als Bauerschaft der damaligen Landgemeinde Kirchwärder. Daraus folgt kein früherer eigenständiger amtlicher Stadtteil.",
        "sources": [
          "1925"
        ]
      },
      {
        "text": "Der Ent- und Bewässerungsverband verwendet den Namen Howe weiterhin für eine örtliche Gebietseinteilung. Das belegt eine heutige Namensverwendung, jedoch weder eine eigene amtliche Stadtteilstellung noch die Gleichheit heutiger Verbandsgebiete mit historischen Ortsgrenzen.",
        "sources": [
          "verband-heute"
        ]
      }
    ],
    "historicalAffiliation": "1925 Bauerschaft der Landgemeinde Kirchwärder.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "1925",
        "label": "Die Gemeinden und Straßen des hamburgischen Staatsgebiets, Stand Anfang Oktober 1925",
        "publisher": "Statistische Mitteilungen, 5. Sonderheft; herausgegeben von Prof. Dr. Sköllin, Direktor des Statistischen Landesamts; Digitalisat der SUB Hamburg",
        "url": "https://eimsbuettel-geschichte.de/f/e/Strassen/Hamburger_Strassennamen_SUB_komprimiert.pdf#page=22",
        "locator": "Gedruckte Seite 19, PDF-Seite 22: Neuengamme; Kirchwärder; Ost Krauel"
      },
      {
        "id": "verband-heute",
        "label": "Gremien und benannte Gewässerbezirke",
        "publisher": "Ent- und Bewässerungsverband der Marsch- und Vierlande",
        "url": "https://www.entundbe.de/verband/gremien",
        "locator": "Vertrauensleute im Gewässerbezirk Kirchwerder; heutige Verwendung des Namens, keine amtliche Stadtteilgrenze; geprüft am 01.11.2026"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "1925 Bauerschaft der Landgemeinde Kirchwärder.",
    "openQuestions": [],
    "changes": "",
    "selectionRole": "current"
  },
  {
    "id": "riepenburg",
    "name": "Riepenburg",
    "type": "quarter",
    "kindLabel": "Historischer Burg- und Domänenstandort",
    "districts": [
      "Kirchwerder"
    ],
    "location": "Historischer Burgstandort am Kirchwerder Mühlendamm, später Domäne.",
    "overview": [
      {
        "text": "Die Hamburger Stadtteilbeschreibung behandelt die ehemalige Burg. Das Verzeichnis von 1925 bezeichnet Riepenburg als Domäne in der Bauerschaft Zollenspieker.",
        "sources": [
          "kirch",
          "1925"
        ]
      },
      {
        "text": "Der Ent- und Bewässerungsverband verwendet den Namen Riepenburg weiterhin für eine örtliche Gebietseinteilung. Das belegt eine heutige Namensverwendung, jedoch weder eine eigene amtliche Stadtteilstellung noch die Gleichheit heutiger Verbandsgebiete mit historischen Ortsgrenzen.",
        "sources": [
          "verband-heute"
        ]
      }
    ],
    "historicalAffiliation": "Ehemalige Burg; 1925 Domäne der Bauerschaft Zollenspieker.",
    "cadastre": "Keine zusätzliche Gemarkungszuordnung aus diesen Belegen übernommen.",
    "aliases": [],
    "parent": null,
    "spatialKind": "site",
    "sources": [
      {
        "id": "kirch",
        "label": "Kirchwerder",
        "publisher": "Freie und Hansestadt Hamburg",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/kirchwerder-371572",
        "locator": "Abschnitt zur Riepenburg"
      },
      {
        "id": "1925",
        "label": "Die Gemeinden und Straßen des hamburgischen Staatsgebiets, Stand Anfang Oktober 1925",
        "publisher": "Statistische Mitteilungen, 5. Sonderheft; herausgegeben von Prof. Dr. Sköllin, Direktor des Statistischen Landesamts; Digitalisat der SUB Hamburg",
        "url": "https://eimsbuettel-geschichte.de/f/e/Strassen/Hamburger_Strassennamen_SUB_komprimiert.pdf#page=22",
        "locator": "Gedruckte Seite 19, PDF-Seite 22: Neuengamme; Kirchwärder; Ost Krauel"
      },
      {
        "id": "verband-heute",
        "label": "Gremien und benannte Gewässerbezirke",
        "publisher": "Ent- und Bewässerungsverband der Marsch- und Vierlande",
        "url": "https://www.entundbe.de/verband/gremien",
        "locator": "Vertrauensleute im Gewässerbezirk Kirchwerder; heutige Verwendung des Namens, keine amtliche Stadtteilgrenze; geprüft am 01.11.2026"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Historischer Standort, kein flächenhafter Stadtteil. Für den früheren Burggrundriss ist hier noch keine geprüfte Standortgeometrie hinterlegt; deshalb kein scheinbar exakter Kartenpunkt.",
    "ambiguous": true,
    "timeframe": "Ehemalige Burg; 1925 Domäne der Bauerschaft Zollenspieker.",
    "openQuestions": [
      "Historischer Standort, kein flächenhafter Stadtteil. Für den früheren Burggrundriss ist hier noch keine geprüfte Standortgeometrie hinterlegt; deshalb kein scheinbar exakter Kartenpunkt."
    ],
    "changes": "Historischer Standort, kein flächenhafter Stadtteil. Für den früheren Burggrundriss ist hier noch keine geprüfte Standortgeometrie hinterlegt; deshalb kein scheinbar exakter Kartenpunkt.",
    "selectionRole": "current"
  },
  {
    "id": "krauel",
    "name": "Krauel",
    "type": "quarter",
    "kindLabel": "Flur- und Siedlungsname",
    "districts": [
      "Kirchwerder"
    ],
    "location": "Übergeordneter Name für West-Krauel und Ost-Krauel am Elbufer.",
    "overview": [
      {
        "text": "Die beiden Teile hatten unterschiedliche Zugehörigkeiten: Im Quellenbericht zu 1923 erscheint West-Krauel als Teil Neuengammes, Ost-Krauel als eigene Gemeinde der Landherrenschaft Bergedorf.",
        "sources": [
          "krauel"
        ]
      },
      {
        "text": "Die heutige Übersicht ordnet beide Teile dem Stadtteil Kirchwerder zu, unterscheidet dabei aber die Gemarkungen Neuengamme und Ost-Krauel.",
        "sources": [
          "krauelwiki"
        ]
      }
    ],
    "historicalAffiliation": "1923 unterschiedliche Gemeindezugehörigkeiten beider Teile belegt.",
    "cadastre": "West-Krauel: Gemarkung Neuengamme. Ost-Krauel: eigene Gemarkung; siehe Untereinträge.",
    "aliases": [],
    "parent": null,
    "spatialKind": "area",
    "sources": [
      {
        "id": "krauel",
        "label": "Das „Cantus“-Jubiläum: mit Sonderzug und Prügeln, 15.05.2023",
        "publisher": "Bernd Reinert, Bergedorf Blog der SUB Hamburg",
        "url": "https://blogs.sub.uni-hamburg.de/bergedorf/?p=12362",
        "locator": "Erster Textabsatz: Krauel sowie Ost- und West-Krauel im Jahr 1923"
      },
      {
        "id": "krauelwiki",
        "label": "Krauel – Übersicht mit Literaturhinweisen",
        "publisher": "Wikipedia-Autoren; Sekundärquelle",
        "url": "https://de.wikipedia.org/w/index.php?title=Krauel&oldid=239697186",
        "locator": "Einleitung und Geschichte; weiterführende Literatur: Otto Beneke, Der Krauel, 1875, S. 1–20"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "1923 unterschiedliche Gemeindezugehörigkeiten beider Teile belegt.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "west-krauel",
    "name": "West-Krauel",
    "type": "area",
    "kindLabel": "Teilgebiet des Krauels",
    "districts": [
      "Kirchwerder"
    ],
    "location": "Westlicher Teil des Flur- und Siedlungszusammenhangs Krauel.",
    "overview": [
      {
        "text": "Im historischen Zusammenhang von 1923 war West-Krauel Teil Neuengammes. Die heutige Stadtteilzuordnung Kirchwerder und die Gemarkung Neuengamme sind davon getrennte Angaben.",
        "sources": [
          "krauel",
          "krauelwiki"
        ]
      }
    ],
    "historicalAffiliation": "1923 als Teil Neuengammes beschrieben.",
    "cadastre": "Neuengamme; heutiger Stadtteil laut recherchierter Übersicht Kirchwerder.",
    "aliases": [
      "West Krauel"
    ],
    "parent": "krauel",
    "spatialKind": "area",
    "sources": [
      {
        "id": "krauel",
        "label": "Das „Cantus“-Jubiläum: mit Sonderzug und Prügeln, 15.05.2023",
        "publisher": "Bernd Reinert, Bergedorf Blog der SUB Hamburg",
        "url": "https://blogs.sub.uni-hamburg.de/bergedorf/?p=12362",
        "locator": "Erster Textabsatz: Krauel sowie Ost- und West-Krauel im Jahr 1923"
      },
      {
        "id": "krauelwiki",
        "label": "Krauel – Übersicht mit Literaturhinweisen",
        "publisher": "Wikipedia-Autoren; Sekundärquelle",
        "url": "https://de.wikipedia.org/w/index.php?title=Krauel&oldid=239697186",
        "locator": "Einleitung und Geschichte; weiterführende Literatur: Otto Beneke, Der Krauel, 1875, S. 1–20"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "1923 als Teil Neuengammes beschrieben.",
    "openQuestions": [],
    "changes": ""
  },
  {
    "id": "ost-krauel",
    "name": "Ost-Krauel",
    "type": "area",
    "kindLabel": "Teilgebiet des Krauels",
    "districts": [
      "Kirchwerder"
    ],
    "location": "Östlicher Teil des Krauels; Name einer eigenen Gemarkung.",
    "overview": [
      {
        "text": "Ost-Krauel gelangte 1768 endgültig an Hamburg. Im Quellenbericht zu 1923 wird es als eigene Gemeinde in der Landherrenschaft Bergedorf beschrieben.",
        "sources": [
          "krauelwiki",
          "krauel"
        ]
      }
    ],
    "historicalAffiliation": "Endgültiger Übergang an Hamburg 1768; 1923 eigene Gemeinde der Landherrenschaft Bergedorf.",
    "cadastre": "Eigene Gemarkung Ost-Krauel; heutiger Stadtteil laut recherchierter Übersicht Kirchwerder.",
    "aliases": [
      "Ost Krauel"
    ],
    "parent": "krauel",
    "spatialKind": "area",
    "sources": [
      {
        "id": "krauelwiki",
        "label": "Krauel – Übersicht mit Literaturhinweisen",
        "publisher": "Wikipedia-Autoren; Sekundärquelle",
        "url": "https://de.wikipedia.org/w/index.php?title=Krauel&oldid=239697186",
        "locator": "Einleitung und Geschichte; weiterführende Literatur: Otto Beneke, Der Krauel, 1875, S. 1–20"
      },
      {
        "id": "krauel",
        "label": "Das „Cantus“-Jubiläum: mit Sonderzug und Prügeln, 15.05.2023",
        "publisher": "Bernd Reinert, Bergedorf Blog der SUB Hamburg",
        "url": "https://blogs.sub.uni-hamburg.de/bergedorf/?p=12362",
        "locator": "Erster Textabsatz: Krauel sowie Ost- und West-Krauel im Jahr 1923"
      }
    ],
    "checked": "2026-11-01",
    "ambiguity": "Keine belegte metergenaue Abgrenzung dieser Ortsbezeichnung hinterlegt.",
    "ambiguous": true,
    "timeframe": "Endgültiger Übergang an Hamburg 1768; 1923 eigene Gemeinde der Landherrenschaft Bergedorf.",
    "openQuestions": [],
    "changes": ""
  }
];
