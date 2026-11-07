import {gazetteerEntries as researchedPlaces} from './gazetteer-data.mjs';
const existingPlaces=[
  {
    "id": "allermoehe",
    "name": "Allermöhe",
    "type": "district",
    "location": "Marschland am Allermöher Deich und nördlich der Dove-Elbe.",
    "districts": [
      "Allermöhe"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Allermöhe",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/allermoehe-371268",
        "locator": "Fachwerk in den Marschlanden; Früh besiedelt"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "altengamme",
    "name": "Altengamme",
    "type": "district",
    "location": "Östlichster Hamburger Stadtteil am Nordufer der Elbe; Teil der Vierlande.",
    "districts": [
      "Altengamme"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Altengamme",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/altengamme-371324",
        "locator": "Einleitung; Schmuckstücke am Deich"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "bergedorf",
    "name": "Bergedorf",
    "type": "district",
    "location": "Stadtteil mit historischem Zentrum am Serrahn und Bergedorfer Schloss.",
    "districts": [
      "Bergedorf"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Bergedorf",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/bergedorf-371382",
        "locator": "Hafen und Altstadt; Bergedorfer Schloss"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "billwerder",
    "name": "Billwerder",
    "type": "district",
    "location": "Straßen- und Marschhufendorf entlang der Bille und des Billwerder Billdeichs.",
    "districts": [
      "Billwerder"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Billwerder",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/billwerder-371444",
        "locator": "Fläche geschrumpft"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "curslack",
    "name": "Curslack",
    "type": "district",
    "location": "Vierländer Stadtteil entlang des Curslacker Deichs und der Dove-Elbe.",
    "districts": [
      "Curslack"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Curslack",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/curslack-371496",
        "locator": "Dörfliche Atmosphäre"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "kirchwerder",
    "name": "Kirchwerder",
    "type": "district",
    "location": "Ländlicher Vierländer Stadtteil mit Elbufer bei Zollenspieker.",
    "districts": [
      "Kirchwerder"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Kirchwerder",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/kirchwerder-371572",
        "locator": "Einleitung; Naturschutzgebiet Zollenspieker"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "lohbruegge",
    "name": "Lohbrügge",
    "type": "district",
    "location": "An Bergedorf angrenzender Stadtteil mit Boberger Niederung und Geesthang.",
    "districts": [
      "Lohbrügge"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Lohbrügge",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/lohbruegge-371664",
        "locator": "Lindwurm aus Beton; Kirche lädt zur Einkehr"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "moorfleet",
    "name": "Moorfleet",
    "type": "district",
    "location": "Zwischen Dove-Elbe, Andreas-Meyer-Straße und Mittlerem Landweg.",
    "districts": [
      "Moorfleet"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Moorfleet",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/moorfleet-371716",
        "locator": "Wassersportparadies"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "neuallermoehe",
    "name": "Neuallermöhe",
    "type": "district",
    "location": "Stadtteil aus den Quartieren Neuallermöhe-Ost am Grachtenplatz und Neuallermöhe-West am Fleetplatz.",
    "districts": [
      "Neuallermöhe"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil. Neuallermöhe besteht seit 2011.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Neuallermöhe",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/neuallermoehe-371774",
        "locator": "Ost und West vereint; Wohnen am Wasser"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "neuengamme",
    "name": "Neuengamme",
    "type": "district",
    "location": "Vierländer Stadtteil im Südosten Hamburgs, angrenzend unter anderem an Kirchwerder und Curslack.",
    "districts": [
      "Neuengamme"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Neuengamme",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/neuengamme-371832",
        "locator": "Einleitung; Traditionell und bürgerlich"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "ochsenwerder",
    "name": "Ochsenwerder",
    "type": "district",
    "location": "Ländlicher Stadtteil zwischen Elbdeichen und Hohendeicher See.",
    "districts": [
      "Ochsenwerder"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Ochsenwerder",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/ochsenwerder-371896",
        "locator": "Einleitung; Idyllische Bracks; Hohendeicher See"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "reitbrook",
    "name": "Reitbrook",
    "type": "district",
    "location": "Südlich von Allermöhe zwischen Gose-Elbe und Dove-Elbe.",
    "districts": [
      "Reitbrook"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Reitbrook",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/reitbrook-371948",
        "locator": "Einleitung"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "spadenland",
    "name": "Spadenland",
    "type": "district",
    "location": "Ländlicher Stadtteil an der Norderelbe mit Deichlandschaft.",
    "districts": [
      "Spadenland"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Spadenland",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/spadenland-371988",
        "locator": "Einleitung; Ruhiges Landleben"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "tatenberg",
    "name": "Tatenberg",
    "type": "district",
    "location": "Stadtteil an der Dove-Elbe mit Tatenberger Schleuse.",
    "districts": [
      "Tatenberg"
    ],
    "timeframe": "Heutiger amtlicher Stadtteil.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Tatenberg",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/tatenberg-372042",
        "locator": "Einleitung; Reger Betrieb an der Schleuse"
      }
    ],
    "ambiguity": "",
    "openQuestions": [],
    "ambiguous": false,
    "changes": ""
  },
  {
    "id": "neuallermoehe-ost",
    "name": "Neuallermöhe-Ost",
    "type": "quarter",
    "location": "Östlicher Teil Neuallermöhes um den Grachtenplatz.",
    "districts": [
      "Neuallermöhe"
    ],
    "timeframe": "Erschließung ab 1982. Bis 2011 Teil Bergedorfs, seither Teil Neuallermöhes.",
    "sources": [
      {
        "label": "Hamburg.de: Neuallermöhe",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/neuallermoehe-371774",
        "locator": "Ost und West vereint; Wohnungsknappheit führt zu Bau; Absatz zum Grachtenplatz/Fleetplatz"
      }
    ],
    "ambiguity": "Keine zusätzliche amtliche Stadtteilebene; exakte Quartiersgrenze nicht recherchiert.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Keine zusätzliche amtliche Stadtteilebene; exakte Quartiersgrenze nicht recherchiert."
  },
  {
    "id": "neuallermoehe-west",
    "name": "Neuallermöhe-West",
    "type": "quarter",
    "location": "Westlicher Teil Neuallermöhes um den Fleetplatz.",
    "districts": [
      "Neuallermöhe"
    ],
    "timeframe": "Entstanden in den 1990er-Jahren. Bis 2011 Teil Allermöhes, seither Teil Neuallermöhes.",
    "sources": [
      {
        "label": "Hamburg.de: Neuallermöhe",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/neuallermoehe-371774",
        "locator": "Ost und West vereint; Wohnungsknappheit führt zu Bau; Absatz zum Grachtenplatz/Fleetplatz"
      }
    ],
    "ambiguity": "Keine zusätzliche amtliche Stadtteilebene; exakte Quartiersgrenze nicht recherchiert.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Keine zusätzliche amtliche Stadtteilebene; exakte Quartiersgrenze nicht recherchiert."
  },
  {
    "id": "lohbruegge-nord",
    "name": "Lohbrügge-Nord",
    "type": "quarter",
    "location": "Nördlicher Wohnbereich Lohbrügges mit dem Park Grünes Zentrum.",
    "districts": [
      "Lohbrügge"
    ],
    "timeframe": "Großsiedlung ab 1961 bis Mitte der 1970er-Jahre gebaut.",
    "sources": [
      {
        "label": "Hamburg.de: Lohbrügge",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/lohbruegge-371664",
        "locator": "Altes und neues Lohbrügge; Lindwurm aus Beton"
      }
    ],
    "ambiguity": "Quartier, kein amtlicher Stadtteil; keine Grenzgeometrie.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Quartier, kein amtlicher Stadtteil; keine Grenzgeometrie."
  },
  {
    "id": "lohbruegge-sued",
    "name": "Lohbrügge-Süd",
    "type": "quarter",
    "location": "Südlicher Teilbereich Lohbrügges.",
    "districts": [
      "Lohbrügge"
    ],
    "timeframe": "Gutachten von 2015, Erläuterungsseite aktualisiert am 30.07.2025.",
    "sources": [
      {
        "label": "Bezirksamt Bergedorf: Nachverdichtung Lohbrügge-Süd",
        "url": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/themen/planen-bauen-wohnen/stadtplanung/konzepte/nachverdichtung-lohbruegge-57898",
        "locator": "Einleitung; Absatz zum Gutachten aus 2015"
      }
    ],
    "ambiguity": "Das Gutachten untersucht einen ausgewählten Teilbereich, nicht automatisch das gesamte umgangssprachliche Lohbrügge-Süd.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Das Gutachten untersucht einen ausgewählten Teilbereich, nicht automatisch das gesamte umgangssprachliche Lohbrügge-Süd."
  },
  {
    "id": "bergedorf-west",
    "name": "Bergedorf-West",
    "type": "quarter",
    "location": "Bergedorf-West liegt westlich des Bergedorfer Zentrums: zum Fördergebiet gehören das Wohngebiet um den Friedrich-Frank-Bogen im Stadtteil Bergedorf und der nördlich anschließende Bildungsstandort am Ladenbeker Furtweg in Lohbrügge. Am westlichen Rand beginnt die Kulturlandschaft Billwerder.",
    "districts": [
      "Bergedorf",
      "Lohbrügge"
    ],
    "timeframe": "RISE-Gebietsfestlegung 2019; 2025 Förderlaufzeit bis Ende 2029 verlängert.",
    "sources": [
      {
        "label": "Bezirksamt Bergedorf: Gebietsentwicklung Bergedorf-West",
        "url": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/themen/soziales/integrierte-stadtteilentwicklung/bergedorf-west-58034",
        "locator": "Absatz „Das rund 120 Hektar große Fördergebiet …“; Integriertes Entwicklungskonzept"
      },
      {
        "label": "Bezirksamt Bergedorf: IEK-Fortschreibung 2025",
        "url": "https://dokumente.hamburg.de/resource/blob/1179334/b89165f092e2a54d4f0b833307468171/bergedorf-west-zweite-zwischenbilanzierung-und-iek-fortschreibung-2025-data.pdf",
        "locator": "Abschnitt A 2, gedruckte Seite 7; Abbildung 1 Fördergebietsgrenze, gedruckte Seite 8 / PDF-Seite 8"
      }
    ],
    "ambiguity": "Die belegte Zuordnung zu beiden Stadtteilen gilt ausdrücklich dem amtlichen Fördergebiet. Umgangssprachliches Wohnquartier und Fördergebiet dürfen nicht als deckungsgleich behauptet werden.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Die belegte Zuordnung zu beiden Stadtteilen gilt ausdrücklich dem amtlichen Fördergebiet. Umgangssprachliches Wohnquartier und Fördergebiet dürfen nicht als deckungsgleich behauptet werden.",
    "meaning": "„Stadtteilübergreifend“ heißt hier: Die amtliche Fördergebietsgrenze schließt Teile von Bergedorf und Lohbrügge ein, nicht beide Stadtteile insgesamt. Das Fördergebiet ist eine Fläche für Stadtentwicklungsmaßnahmen und kein eigener Stadtteil. Die genaue Abgrenzung zeigt die Karte in der Quelle.",
    "checked": "2026-10-24"
  },
  {
    "id": "bergedorf-sued",
    "name": "Bergedorf-Süd",
    "type": "quarter",
    "location": "Zentrumsnaher Einkaufsbereich Bergedorfs mit südöstlich angrenzenden Wohngebieten.",
    "districts": [
      "Bergedorf"
    ],
    "timeframe": "Energetisches Sanierungsmanagement 2014–2017.",
    "sources": [
      {
        "label": "Hamburger Umweltbehörde: Steckbrief Bergedorf-Süd",
        "url": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/energie/erneuerbare-energien/steckbrief-bergedorf-sued-157194",
        "locator": "Lage des Quartiers; Größe; Maßnahmen"
      }
    ],
    "ambiguity": "Der Steckbrief beschreibt ein rund 35 Hektar großes energetisches Quartier; nicht ungeprüft auf andere Fördergebietsgrenzen übertragen.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Der Steckbrief beschreibt ein rund 35 Hektar großes energetisches Quartier; nicht ungeprüft auf andere Fördergebietsgrenzen übertragen."
  },
  {
    "id": "nettelnburg",
    "name": "Nettelnburg",
    "type": "quarter",
    "location": "Siedlungsgebiet im Stadtteil Bergedorf; Alt-Nettelnburg nördlich der A25.",
    "districts": [
      "Bergedorf"
    ],
    "timeframe": "2011 wurden nördlich der A25 liegende Flächen von Alt-Nettelnburg Allermöhe entnommen und Bergedorf zugeordnet.",
    "sources": [
      {
        "label": "Hamburg.de: Allermöhe",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/allermoehe-371268",
        "locator": "Einträchtiger Handel; letzter Absatz über Gebietsänderungen 2011"
      },
      {
        "label": "Wasserverband Nettelnburg: Bebauungsplan Bergedorf 68",
        "url": "https://www.nettelnburg.com/satzung/bebauungsplaene-fuer-nettelnburg/bebauungsplan-bergedorf-68/",
        "locator": "Einleitung: Plan von 1986 für Siedlungsgebiet Nettelnburg"
      }
    ],
    "ambiguity": "Nettelnburg bezeichnet auch Bahnhof und historische Siedlungsbereiche. Ohne historische Zeitangabe keine frühere Stadtteilzuordnung verwenden.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Nettelnburg bezeichnet auch Bahnhof und historische Siedlungsbereiche. Ohne historische Zeitangabe keine frühere Stadtteilzuordnung verwenden."
  },
  {
    "id": "boberg",
    "name": "Boberg",
    "type": "quarter",
    "location": "Bereich Lohbrügges mit Boberger Niederung und Boberger Dünen.",
    "districts": [
      "Lohbrügge"
    ],
    "timeframe": "1929 in der Zusammenlegung zur Gemeinde Lohbrügge genannt.",
    "sources": [
      {
        "label": "Landesbetrieb Geoinformation und Vermessung: Teilbebauungsplan TB321",
        "url": "https://suche.transparenz.hamburg.de/dataset/teilbebauungsplan-tb-321-hamburg24",
        "locator": "Beschreibung: Stadtteil Lohbrügge, Planbezirk Umgehungsstraße Boberg"
      },
      {
        "label": "Hamburg.de: Lohbrügge",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/lohbruegge-371664",
        "locator": "Boberger Niederung; Altes und neues Lohbrügge"
      }
    ],
    "ambiguity": "Boberg ist kein zusätzlicher amtlicher Stadtteil. Naturschutzgebietsgrenzen nicht gleich Quartiersgrenzen setzen.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Boberg ist kein zusätzlicher amtlicher Stadtteil. Naturschutzgebietsgrenzen nicht gleich Quartiersgrenzen setzen."
  },
  {
    "id": "sande",
    "name": "Sande",
    "type": "historical",
    "location": "Historische Orts- und Gemeindebezeichnung im heutigen Lohbrügger Zusammenhang.",
    "districts": [
      "Lohbrügge"
    ],
    "timeframe": "Um 1518 als Ortsteil genannt; Ende des 19. Jahrhunderts Großgemeinde Sande aus Sande, Lohbrügge und Ladenbek. 1929 neue Gemeinde Lohbrügge.",
    "sources": [
      {
        "label": "Hamburg.de: Geschichte Lohbrügges",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/lohbruegge-371664",
        "locator": "Absatz nach „Von der Zukunft zurück in die Vergangenheit“; Wirtschaftlicher Aufschwung; Altes und neues Lohbrügge"
      }
    ],
    "ambiguity": "Historisches Sande ist kein heutiger amtlicher Stadtteil. Keine historische Fläche auf heutige Grenzen übertragen. Exakte Jahreszahlen der Vereinigung nur nach zusätzlichem archivalischem Nachweis.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Historisches Sande ist kein heutiger amtlicher Stadtteil. Keine historische Fläche auf heutige Grenzen übertragen. Exakte Jahreszahlen der Vereinigung nur nach zusätzlichem archivalischem Nachweis."
  },
  {
    "id": "ladenbek-historisch",
    "name": "Ladenbek",
    "type": "historical",
    "location": "Historische Ortsbezeichnung im Lohbrügger Zusammenhang.",
    "districts": [
      "Lohbrügge"
    ],
    "timeframe": "Um 1518 als Ortsteil Lohbrügges genannt, Ende des 19. Jahrhunderts Bestandteil der Großgemeinde Sande.",
    "sources": [
      {
        "label": "Hamburg.de: Geschichte Lohbrügges",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/lohbruegge-371664",
        "locator": "Absatz nach „Von der Zukunft zurück in die Vergangenheit“; Wirtschaftlicher Aufschwung; Altes und neues Lohbrügge"
      },
      {
        "label": "Amtlicher Anzeiger Nr.94, 05.12.2023",
        "url": "https://www.hamburg.de/resource/blob/56862/07ed159ce6538a9f51b9d61ac235e91f/aa-auslegungsbeschluss-nov23-data.pdf",
        "locator": "Gedruckte Seite1836 / PDF-Seite13: Stellungnahme zu Grünflächen am kleinen Ladenbek-Teich nördlich der B5; weiterer Absatz Ladenbeker Furtweg"
      }
    ],
    "ambiguity": "Heute auch Gewässer- und Straßenbezüge. Historischen Ort nicht mit Bach oder Straßenverlauf gleichsetzen.",
    "openQuestions": [],
    "ambiguous": true,
    "changes": "Heute auch Gewässer- und Straßenbezüge. Historischen Ort nicht mit Bach oder Straßenverlauf gleichsetzen. Der amtliche Anzeiger nennt einen kleinen Ladenbek-Teich nördlich der B5 sowie den Ladenbeker Furtweg. Daraus folgt keine amtliche Quartiersgrenze."
  },
  {
    "id": "zollenspieker",
    "name": "Zollenspieker",
    "type": "quarter",
    "location": "Ort am Elbufer im Stadtteil Kirchwerder, rund um Fähranleger und Zollenspieker Fährhaus.",
    "districts": [
      "Kirchwerder"
    ],
    "meaning": "Örtliche Bezeichnung für den historischen Fährort; kein zusätzlicher amtlicher Stadtteil. Der Name bezieht sich auf einen Zollspeicher.",
    "timeframe": "Historischer Fährort, heute weiterhin als Ortsbezeichnung verwendet.",
    "sources": [
      {
        "label": "Hamburg.de: Stadtteil Kirchwerder",
        "url": "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/kirchwerder-371572",
        "locator": "Abschnitt „Legendäres Zollenspieker“"
      }
    ],
    "ambiguous": false,
    "changes": "Keine eigenständige Quartiersgrenze recherchiert. Naturschutzgebiet und Fährort nicht als deckungsgleich behandeln.",
    "openQuestions": [],
    "checked": "2026-10-24"
  },
  {
    "id": "hope-historisch",
    "name": "Hope / Hoop",
    "type": "historical",
    "location": "Untergegangener historischer Ort im Gebiet des heutigen Stadtteils Lohbrügge. Der Straßenname Höperfeld erinnert an den Namen.",
    "districts": [
      "Lohbrügge"
    ],
    "meaning": "Historischer Dorfname; keine heutige amtliche Gebietsbezeichnung. Er bezeichnet kein neu festgelegtes Quartier.",
    "timeframe": "Historisch überlieferter Ort; bestand bei der Bildung der Großgemeinde Lohbrügge 1929 bereits lange nicht mehr.",
    "sources": [
      {
        "label": "Universität Hamburg: Dissertation zur Geschichte und Gegenwart Lohbrügges",
        "url": "https://ediss.sub.uni-hamburg.de/bitstream/ediss/6046/1/Dissertation.pdf",
        "locator": "Abschnitt 2.1 „Vor-Geschichten: Die Dörfer und die Großgemeinde“, gedruckte Seite 33"
      }
    ],
    "ambiguous": true,
    "changes": "Die Zuordnung betrifft das heutige Lohbrügger Gebiet. Aus dem Namen wird weder eine genaue historische Fläche noch ein Kartenpunkt abgeleitet. Abweichende Gleichsetzungen mit Sande erfordern zusätzliche historische Prüfung.",
    "openQuestions": [
      "Genaue historische Ausdehnung und zeitliche Namensabgrenzung sind nicht abschließend geklärt."
    ],
    "checked": "2026-10-24"
  }
];

// Exact, stable identifiers only. Similar names are never merged heuristically.
const unionSources=(a=[],b=[])=>[...b,...a.filter(x=>!b.some(y=>y.url===x.url&&y.locator===x.locator)).map((x,i)=>({...x,id:x.id||'legacy-source-'+i,publisher:x.publisher||'Im vorhandenen Quellennachweis nicht gesondert angegeben'}))];
const indexed=new Map(existingPlaces.map(p=>[p.id,p]));
for(const p of researchedPlaces){const old=indexed.get(p.id);indexed.set(p.id,{...old,...p,sources:unionSources(old?.sources,p.sources)});}
export const gazetteerIds=researchedPlaces.map(p=>p.id);
/** @type {Array<any>} */
export const placeRecords=[...indexed.values()].map(p=>({...p,aliases:p.aliases||[],selectionRole:p.selectionRole||(p.type==='district'?'district':p.type==='historical'?'historical':'current')}));
export const canonicalPlace=id=>placeRecords.find(p=>p.id===id);
