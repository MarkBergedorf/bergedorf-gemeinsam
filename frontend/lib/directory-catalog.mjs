import {withToilets} from './toilets.mjs';
// Existing reader-visible editorial entries. Source checking and reader release are independent.
const museum='https://www.bergedorfer-museumslandschaft.de/service';
const koerber='https://koerberhaus.de/raeume-finden';
export const directoryResearch=/* @__PURE__ */ withToilets(makeDirectoryCatalog());
function makeDirectoryCatalog(){const quarterAssignments={"koerber": {"quarterId": "bergedorf-sued", "quarterChecked":"2026-10-19", "quarterSource": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/themen/freizeit-kultur/koerberhaus-56652", "quarterLocator": "Absatz: Das KörberHaus ist Teil des RISE-Fördergebietes Bergedorf-Süd", "placeClarification": "Die amtliche Projektseite ordnet das KörberHaus ausdrücklich dem RISE-Fördergebiet Bergedorf-Süd zu."}, "bg-klinikum-hamburg": {"quarterId": "boberg", "quarterChecked":"2026-10-19", "quarterSource": "https://www.bg-kliniken.de/klinikum-hamburg/ueber-uns/bg-klinikum-hamburg/aktuelles/detail/neuer-chefarzt-der-radiologie-am-bg-klinikum/", "quarterLocator": "Artikel vom 13.09.2022: radiologische Abteilung in Boberg", "placeClarification": "Der Klinikträger bezeichnet den Standort ausdrücklich als Boberg; daraus wird keine Quartiersgrenze abgeleitet."}};const visits={"schloss": {"details": {"Öffnungszeiten": "Dienstag bis Sonntag 11–17 Uhr. Heiligabend, Weihnachten, Silvester, Neujahr und Karfreitag geschlossen; sonst feiertags geöffnet. Vor Besuch aktuelle Hinweise prüfen.", "Barrierefreiheit": "Laut Museum nicht barrierefrei: Ausstellungen nur über Treppen erreichbar; auch auf der Ausstellungsebene mehrere Stufen.", "Haus- / Besucherordnung": "In den geprüften offiziellen Service- und Besuchsseiten sowie der gezielten Suche nicht gefunden. Daraus folgt nicht, dass keine Ordnung existiert. Vor Besuch beim Museum klären."}, "sources": [{"label": "Öffnungszeiten und Barrierefreiheit · Preise & Zeiten, Abschnitt BERGEDORF MUSEUM", "url": "https://www.bergedorfer-museumslandschaft.de/service/preise-zeiten", "locator": "BERGEDORF MUSEUM → Öffnungszeiten sowie Absatz nach Eintrittspreisen"}, {"label": "Besucherservice und Saalvermietung · Service", "url": "https://www.bergedorfer-museumslandschaft.de/service", "locator": "Ihre Fragen zu den Museen; Vermietungen"}]}, "koerber": {"details": {"Öffnungszeiten": "Montag bis Samstag 7–22 Uhr; bei entsprechenden Veranstaltungen länger. Sonn- und feiertags geschlossen. Empfang Montag bis Freitag 8:30–18 Uhr. Einzelne Einrichtungen im Haus haben eigene Zeiten.", "Barrierefreiheit": "Ebenerdige, treppenfreie Eingänge; Aufzüge, Rollstuhl-Toiletten und taktiles Leitsystem laut Anbieter. Assistenzhunde erlaubt. Unterstützungsbedarf und Rollstuhlplätze vorab mit dem Veranstaltenden klären.", "Hausordnung": "Offizielle Hausordnung vorhanden, Stand September 2025. Bitte lesen Sie die Originalfassung vor Ihrem Besuch."}, "sources": [{"label": "Öffnungszeiten des KörberHauses und Empfangs", "url": "https://koerberhaus.de/besuchen/oeffnungszeiten", "locator": "Öffnungszeiten → KörberHaus"}, {"label": "Barrierefreier Besuch · Mobilität, Sehen und Hören", "url": "https://koerberhaus.de/besuchen/barrierefreiheit", "locator": "Barrierefreies Miteinander → Mobilität; Sehen; Hören"}, {"label": "Hausordnung des KörberHauses", "url": "https://koerberhaus.de/besuchen/hausordnung", "locator": "Hausordnung; Link Hausordnung KörberHaus"}, {"label": "Hausordnung · September 2025 · PDF, Seite 1", "url": "https://koerberhaus.de/media/pages/medien/669e1c7cf9-1775831123/hausordnung_koerberhaus_2025.pdf", "locator": "PDF-Seite 1, HAUSORDNUNG; Bitte beachten Sie diese Regeln; Weitere Hinweise"}]}};return [
{id:'schloss',relatedIds:['schlosspark'],coordinateSource:"https://www.openstreetmap.org/relation/2201357",coordinateNote:'OpenStreetMap/Nominatim: exakter Gebäude-/Einrichtungspunkt und Straße/Hausnummer am 18.10.2026 erneut abgeglichen. OpenStreetMap-Mitwirkende, ODbL.',origin:'editorial',title:'Bergedorf Museum im Schloss',place:'Bergedorf',category:'Museen & Geschichte',address:'Bergedorfer Schlossstraße 4, 21029 Hamburg',lat:53.4896553,lon:10.2126303,description:'Öffentlicher Museumsstandort und Anlaufstelle für Fragen zu Ausstellungen und Angeboten.',details:{'Besucherservice':'040 42891-2509','Aktuelle Zeiten':'Direkt beim Museum prüfen','Kontakt':'museum@bergedorf.hamburg.de','Barrierefreiheit':'Bedarf beim Besucherservice klären'},source:museum,extraSource:'https://www.bergedorfer-museumslandschaft.de/ausstellungen/stadtlandfluss',booking:museum},
{id:'schloss-saal',coordinateSource:"https://www.openstreetmap.org/relation/2201357",coordinateNote:'OpenStreetMap/Nominatim: exakter Gebäude-/Einrichtungspunkt und Straße/Hausnummer am 18.10.2026 erneut abgeglichen. OpenStreetMap-Mitwirkende, ODbL.',entityType:'Raumangebot',parentName:'Bergedorfer Schloss',origin:'editorial',title:'Saal im Bergedorfer Schloss',place:'Bergedorf',category:'Räume & Veranstaltungsorte',address:'Bergedorfer Schlossstraße 4, 21029 Hamburg',lat:53.4896553,lon:10.2126303,description:'Der Museumsservice nennt die Vermietung eines Saals für öffentliche Veranstaltungen.',details:{'Kapazität':'Nicht verifiziert','Ausstattung / Küche / Toiletten':'Nicht verifiziert','Zugänglichkeit':'Mit Vermietung klären','Preise / Bedingungen':'Anfrage erforderlich; hier nicht verifiziert','Vermietung':'040 42891-2911 · museum@bergedorf.hamburg.de'},source:museum,extraSource:'',booking:museum},
{id:'koerber',coordinateSource:"https://www.openstreetmap.org/way/1134643315",coordinateNote:'OpenStreetMap/Nominatim: exakter Gebäude-/Einrichtungspunkt und Straße/Hausnummer am 18.10.2026 erneut abgeglichen. OpenStreetMap-Mitwirkende, ODbL.',origin:'editorial',title:'KörberHaus',place:'Bergedorf',category:'Begegnungsstätten',address:'Holzhude 1, 21029 Hamburg',lat:53.4871527,lon:10.2086727,description:'Öffentlicher Treffpunkt für Austausch, Kultur und Engagement. Einzelne Angebote und Termine direkt beim Haus prüfen.',details:{'Zugang':'Laut Anbieter ebenerdige Eingänge und Aufzüge','Toiletten':'Rollstuhl-Toiletten laut Anbieter','Kontakt für Zugänglichkeit':'barrierefrei@koerberhaus.de','Aktuelle Angebote':'Programm beim Anbieter'},source:'https://koerber-stiftung.de/die-stiftung/koerberhaus/',extraSource:'',booking:'https://koerberhaus.de/'},
{id:'koerber-101',coordinateSource:"https://www.openstreetmap.org/way/1134643315",coordinateNote:'OpenStreetMap/Nominatim: exakter Gebäude-/Einrichtungspunkt und Straße/Hausnummer am 18.10.2026 erneut abgeglichen. OpenStreetMap-Mitwirkende, ODbL.',entityType:'Raumangebot',parentName:'KörberHaus',origin:'editorial',title:'KörberHaus · Raum 101',place:'Bergedorf',category:'Räume & Veranstaltungsorte',address:'Holzhude 1, 21029 Hamburg',lat:53.4871527,lon:10.2086727,description:'Raum für Gruppenformate; Vergabevoraussetzungen der Körber-Stiftung beachten.',details:{'Kapazität':'Detailseite: bis 40 Plätze in Reihen; Stiftungsübersicht nennt 30. Vor Buchung klären.','Größe':'ca. 57 m²','Ausstattung':'Musikanlage, Yoga-Matten, mobile Spiegelwand laut Detailseite','Zugänglichkeit':'Allgemein barrierearmer Zugang; individuellen Bedarf klären','Küche / Toiletten':'Raumspezifische Angaben nicht verifiziert','Preisstand':'Detailseite: 50 € halber / 100 € ganzer Tag; aktuell bestätigen lassen','Bedingungen':'Vergaberegeln; Anfrage laut Detailseite spätestens acht Wochen vorher','Anfrage':'info@koerberhaus.de'},source:koerber,extraSource:'https://koerber-stiftung.de/projekte/shared-civic-spaces/',booking:koerber},
{id:'bv-kontakt',entityType:'Geschäftsstelle am Rathausstandort',lat:53.4871757,lon:10.2203659,coordinateSource:"https://www.openstreetmap.org/way/237975218",coordinateNote:'OSM-Rathauspunkt: identische belegte Anschrift Wentorfer Straße 38. OpenStreetMap-Mitwirkende, ODbL.',origin:'editorial',title:'Kontakt zur Bezirksversammlung Bergedorf',place:'Bergedorf',category:'Politik & öffentliche Einrichtungen',address:'Wentorfer Straße 38, 21029 Hamburg',description:'Externe Einrichtung der Freien und Hansestadt Hamburg. Geschäftsstelle für Fragen zur Bezirksversammlung, kein Kontakt der Bürgerplattform.',details:{'Telefon':'040 42891-2480','E-Mail':'bezirksversammlung@bergedorf.hamburg.de','Öffnungszeiten / Zugänglichkeit':'Nicht verifiziert'},source:'https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/bezirksversammlung',extraSource:'',booking:'https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/bezirksversammlung',externalAuthority:true}
,
 {
  "id": "bezirksamt",
  "origin": "editorial",
  "title": "Bezirksamt Bergedorf · Rathaus",
  "place": "Bergedorf",
  "category": "Behörden & Dienststellen",
  "address": "Wentorfer Straße 38, 21029 Hamburg",
  "description": "Bezirksverwaltung; zentrale Auskunft zu Zuständigkeiten und Dienststellen.",
  "source": "https://www.bergedorf.de/ueber-uns/politik-und-verwaltung/bezirksamt",
  "details": {
   "Telefon": "040 42828-0 / 115",
   "E-Mail": "bezirksamt@bergedorf.hamburg.de"
  },
  "website": "https://www.bergedorf.de/ueber-uns/politik-und-verwaltung/bezirksamt",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "lat": 53.4871757,
  "lon": 10.2203659,
  "coordinateSource": "https://www.openstreetmap.org/way/237975218",
  "coordinateNote": "OpenStreetMap/Nominatim: veröffentlichte Straße und Hausnummer sowie passender Einrichtungs- oder Gebäude-Punkt am 18.10.2026 abgeglichen; keine Interpolation. ODbL.",
  "version": 1
 },
 {
  "id": "sdz",
  "origin": "editorial",
  "title": "Soziales Dienstleistungszentrum Bergedorf",
  "place": "Bergedorf",
  "category": "Soziale Anlaufstellen",
  "address": "Weidenbaumsweg 21, 21029 Hamburg",
  "description": "Dienststelle für soziale Leistungen. Wohngeld, Wohnberechtigungsschein, Wohnungsnotfälle und Elterngeld sind Angebote dieser Dienststelle, keine eigenständigen Organisationen.",
  "source": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/themen/soziales/soziales-dienstleistungszentrum-1110310",
  "details": {
   "Telefon": "115",
   "E-Mail": "sdz-bergedorf@bergedorf.hamburg.de",
   "Standort": "Eingang C, 2. Obergeschoss",
   "Öffnungszeiten": "Mo und Do 8–16 Uhr; Di und Fr 8–13 Uhr. Einzelne Leistungen haben abweichende Sprechzeiten; vorher prüfen.",
   "Weitere Beratung": "Pflegestützpunkt und Beratung für körperbehinderte Menschen – siehe Originalquelle."
  },
  "website": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/themen/soziales/soziales-dienstleistungszentrum-1110310",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "lat": 53.4889256,
  "lon": 10.2070102,
  "coordinateSource": "https://www.openstreetmap.org/node/13931748301",
  "coordinateNote": "OpenStreetMap/Nominatim: veröffentlichte Straße und Hausnummer sowie passender Einrichtungs- oder Gebäude-Punkt am 18.10.2026 abgeglichen; keine Interpolation. ODbL.",
  "version": 1
 },
 {
  "id": "hamburg-service",
  "origin": "editorial",
  "title": "Hamburg Service vor Ort · Bergedorf Einwohnerangelegenheiten",
  "place": "Bergedorf",
  "category": "Behörden & Dienststellen",
  "address": "Weidenbaumsweg 21, 21029 Hamburg",
  "description": "Personalausweise, Reisepässe und Meldeangelegenheiten. Besuch nur mit Termin.",
  "source": "https://www.hamburg.de/service/info/111106397/",
  "details": {
   "Telefon": "115",
   "E-Mail": "e.bergedorf@hamburgservice.de",
   "Standort": "Eingang A, Raum 3.01.1",
   "Öffnungszeiten": "Mo–Di 10–18 Uhr; Mi–Do 7:30–14 Uhr; Fr 7–12 Uhr. Nur mit Termin.",
   "Zugänglichkeit": "Quelle meldet außer Betrieb befindliche Fahrstühle (Hinweisstand 10.11.2025). Vor Besuch aktuellen Stand erfragen."
  },
  "website": "https://www.hamburg.de/service/info/111106397/",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "lat": 53.4889256,
  "lon": 10.2070102,
  "coordinateSource": "https://www.openstreetmap.org/node/13931748301",
  "coordinateNote": "OpenStreetMap/Nominatim: veröffentlichte Straße und Hausnummer sowie passender Einrichtungs- oder Gebäude-Punkt am 18.10.2026 abgeglichen; keine Interpolation. ODbL.",
  "version": 1
 },
 {
  "id": "jugendamt",
  "origin": "editorial",
  "title": "Jugendamt Bergedorf",
  "place": "Bergedorf",
  "category": "Soziale Anlaufstellen",
  "address": "Weidenbaumsweg 21, 21029 Hamburg",
  "description": "Jugend- und Familienhilfe; Allgemeiner Sozialer Dienst mit Beratung und Hilfen zur Erziehung. Zuständige Abteilung und Termin bitte vorab erfragen.",
  "source": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/bezirksamt/dezernat-soziales-56022",
  "details": {
   "Telefon": "040 42891-3519",
   "E-Mail": "Jugendamt@bergedorf.hamburg.de"
  },
  "website": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/bezirksamt/dezernat-soziales-56022",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "lat": 53.4889256,
  "lon": 10.2070102,
  "coordinateSource": "https://www.openstreetmap.org/node/13931748301",
  "coordinateNote": "OpenStreetMap/Nominatim: veröffentlichte Straße und Hausnummer sowie passender Einrichtungs- oder Gebäude-Punkt am 18.10.2026 abgeglichen; keine Interpolation. ODbL.",
  "version": 1
 },
 {
  "id": "gesundheitsamt",
  "origin": "editorial",
  "title": "Gesundheitsamt Bergedorf",
  "place": "Lohbrügge",
  "category": "Behörden & Dienststellen",
  "address": "Herzog-Carl-Friedrich-Platz 1, 21031 Hamburg",
  "description": "Öffentlicher Gesundheitsdienst mit Gesundheitsvorsorge, Begutachtung und Infektionsschutz.",
  "source": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/themen/gesundheit/gesundheitsaufsicht-56610",
  "details": {
   "Infektionsschutz": "040 42891-2227 · infektionsschutz@bergedorf.hamburg.de",
   "Medizinalwesen": "040 42891-2220 · medizinalwesen@bergedorf.hamburg.de",
   "Standort": "3. Obergeschoss"
  },
  "website": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bergedorf/themen/gesundheit/gesundheitsaufsicht-56610",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "lat": 53.4907796,
  "lon": 10.2069472,
  "coordinateSource": "https://www.openstreetmap.org/node/5496859744",
  "coordinateNote": "OpenStreetMap/Nominatim: veröffentlichte Straße und Hausnummer sowie passender Einrichtungs- oder Gebäude-Punkt am 18.10.2026 abgeglichen; keine Interpolation. ODbL.",
  "version": 1
 },
 {
  "id": "standesamt",
  "origin": "editorial",
  "title": "Standesamt Bergedorf · Haus im Park",
  "place": "Bergedorf",
  "category": "Behörden & Dienststellen",
  "address": "Gräpelweg 8, 21029 Hamburg",
  "description": "Personenstandswesen, Urkunden und Eheschließungen.",
  "source": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bezirksthemen/standesamt/bergedorf-56416",
  "details": {
   "Telefon": "040 42828-0",
   "E-Mail": "standesamt@bergedorf.hamburg.de",
   "Sprechzeiten": "Mo und Do 8–12 Uhr; Fr 8–12 Uhr ohne Anmeldung zur Eheschließung. Di nur mit Termin; Mi geschlossen. Terminabsprache empfohlen."
  },
  "website": "https://www.hamburg.de/politik-und-verwaltung/bezirke/bezirksthemen/standesamt/bergedorf-56416",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "lat": 53.4890342,
  "lon": 10.2186546,
  "coordinateSource": "https://www.openstreetmap.org/node/12185447303",
  "coordinateNote": "OpenStreetMap/Nominatim: veröffentlichte Straße und Hausnummer sowie passender Einrichtungs- oder Gebäude-Punkt am 18.10.2026 abgeglichen; keine Interpolation. ODbL.",
  "version": 1
 },
 {
  "id": "jobcenter", "authorityLabel":"Externe gemeinsame Einrichtung der Freien und Hansestadt Hamburg und der Bundesagentur für Arbeit",
  "origin": "editorial",
  "title": "Jobcenter team.arbeit.hamburg · Standort Bergedorf",
  "place": "Lohbrügge",
  "category": "Soziale Anlaufstellen",
  "address": "Ludwig-Rosenberg-Ring 41, 21031 Hamburg",
  "description": "Existenzsicherung sowie Beratung und Vermittlung für Arbeitsuchende im Zuständigkeitsbereich des Jobcenters. Persönliche Beratung nach Terminvereinbarung.",
  "source": "https://team-arbeit-hamburg.de/standorte/bergedorf/",
  "details": {
   "Telefon": "040 23959 222",
   "Infothek": "Mo, Di, Do, Fr 8:30–11:30 Uhr; Mi geschlossen. Persönliche Beratung mit Termin.",
   "Kontakt": "KontaktCenter über die offizielle Standortseite"
  },
  "website": "https://team-arbeit-hamburg.de/standorte/bergedorf/",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "lat": 53.4918771,
  "lon": 10.2083785,
  "coordinateSource": "https://www.openstreetmap.org/node/5098336887",
  "coordinateNote": "OpenStreetMap/Nominatim: veröffentlichte Straße und Hausnummer sowie passender Einrichtungs- oder Gebäude-Punkt am 18.10.2026 abgeglichen; keine Interpolation. ODbL.",
  "version": 1
 },
 {
  "id": "amtsgericht",
  "origin": "editorial",
  "title": "Amtsgericht Hamburg-Bergedorf",
  "place": "Bergedorf",
  "category": "Behörden & Dienststellen",
  "address": "Ernst-Mantius-Straße 8, 21029 Hamburg",
  "description": "Örtliches Amtsgericht. Zuständigkeit, Sprechzeiten und Terminbedarf für das konkrete Verfahren beim Gericht prüfen.",
  "source": "https://justiz.hamburg.de/gerichte/amtsgericht-hamburg/gerichte-und-segmente/amtsgericht-hamburg-bergedorf/kontakt-636832",
  "details": {
   "Telefon": "115"
  },
  "website": "https://justiz.hamburg.de/gerichte/amtsgericht-hamburg/gerichte-und-segmente/amtsgericht-hamburg-bergedorf/kontakt-636832",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "version": 1,
  "lat": 53.4902057,
  "lon": 10.2106651,
  "coordinateSource": "https://www.openstreetmap.org/relation/2885847",
  "coordinateNote": "OpenStreetMap/Nominatim: Einrichtungsobjekt und exakte amtlich veröffentlichte Straße/Hausnummer am 18.10.2026 abgeglichen; ODbL."
 },
 {
  "id": "finanzamt-ias",
  "origin": "editorial",
  "title": "Finanzamt Hamburg-Ost · Informations- und Annahmestelle Bergedorf",
  "place": "Lohbrügge",
  "category": "Behörden & Dienststellen",
  "address": "Ludwig-Rosenberg-Ring 41, 21031 Hamburg",
  "description": "Außenstelle des Finanzamts Hamburg-Ost für Informationen und Annahme von Steuerunterlagen. Das Finanzamt selbst hat seinen Hauptstandort außerhalb des Bezirks.",
  "source": "https://www.hamburg.de/service/info/11440867/",
  "details": {
   "Telefon": "115",
   "E-Mail": "fahamburgost@finanzamt.hamburg.de",
   "Sprechzeiten": "Mo–Di 8–14 Uhr; Do 8–17 Uhr. Mi und Fr geschlossen.",
   "Standort": "4. Obergeschoss",
   "Postanschrift": "Nordkanalstraße 22, 20097 Hamburg"
  },
  "website": "https://www.hamburg.de/service/info/11440867/",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "version": 1,
  "lat": 53.4918771,
  "lon": 10.2083785,
  "coordinateSource": "https://www.openstreetmap.org/node/5098336887",
  "coordinateNote": "OpenStreetMap/Nominatim: veröffentlichte Straße und Hausnummer sowie passender Einrichtungs- oder Gebäude-Punkt am 18.10.2026 abgeglichen; keine Interpolation. ODbL."
 },
 {
  "id": "arbeitsagentur", "authorityLabel":"Externe Dienststelle der Bundesagentur für Arbeit",
  "origin": "editorial",
  "title": "Agentur für Arbeit Hamburg-Bergedorf",
  "place": "Lohbrügge",
  "category": "Behörden & Dienststellen",
  "address": "Johann-Meyer-Straße 55, 21031 Hamburg",
  "description": "Arbeitsvermittlung, Berufsberatung und Leistungen der Arbeitsagentur. Persönliche Vorsprache möglichst mit Termin; aktuelle Notfall- und Servicehinweise auf der Standortseite prüfen.",
  "source": "https://www.arbeitsagentur.de/vor-ort/hamburg/hamburg-bergedorf",
  "details": {
   "Telefon": "0800 4555500 / 040 72576-0",
   "Postanschrift": "Agentur für Arbeit Hamburg-Bergedorf, 20070 Hamburg"
  },
  "website": "https://www.arbeitsagentur.de/vor-ort/hamburg/hamburg-bergedorf",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "version": 1,
  "lat": 53.4905778,
  "lon": 10.2063575,
  "coordinateSource": "https://www.openstreetmap.org/node/2270862605",
  "coordinateNote": "OpenStreetMap/Nominatim: Einrichtungsobjekt und exakte amtlich veröffentlichte Straße/Hausnummer am 18.10.2026 abgeglichen; ODbL."
 },
 {
  "id": "jba", "authorityLabel":"Externe Jugendberufsagentur – gemeinsames Beratungsangebot öffentlicher Stellen",
  "origin": "editorial",
  "title": "Jugendberufsagentur Hamburg-Bergedorf",
  "place": "Lohbrügge",
  "category": "Behörden & Dienststellen",
  "address": "Johann-Meyer-Straße 55, 21031 Hamburg",
  "description": "Gemeinsame Anlaufstelle für junge Menschen bei Fragen zu Ausbildung, Beruf und Studium. Eigenes Beratungsangebot am gemeinsamen Dienststellenstandort.",
  "source": "https://jba-hamburg.de/de/kontakt/jba-standorte/jba-hamburg-bergedorf",
  "details": {
   "Telefon": "040 42828 3333 / Berufsberatung 0800 4555500",
   "Öffnungszeiten": "Mo–Fr 8–12 Uhr; Do zusätzlich 15:30–17 Uhr. Termin online vereinbaren."
  },
  "website": "https://jba-hamburg.de/de/kontakt/jba-standorte/jba-hamburg-bergedorf",
  "entityType": "Dienststellenstandort",
  "externalAuthority": true,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18",
  "version": 1,
  "lat": 53.4906525,
  "lon": 10.2065766,
  "coordinateSource": "https://www.openstreetmap.org/node/2270862604",
  "coordinateNote": "OpenStreetMap/Nominatim: Einrichtungsobjekt und exakte amtlich veröffentlichte Straße/Hausnummer am 18.10.2026 abgeglichen; ODbL."
 },
 {
  "id": "altenpension-philipps",
  "title": "Altenpension Philipps",
  "place": "Bergedorf",
  "category": "Stationäre Pflege",
  "address": "Wentorfer Straße 70–72, 21029 Hamburg",
  "description": "Vollstationäre Pflege und Betreuung; zusätzlich Tagespflege am Standort.",
  "website": "https://www.bei-philipps.de/",
  "source": "https://www.bei-philipps.de/kontakt",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.bei-philipps.de/kontakt"
   },
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.bei-philipps.de/"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/vollstationaere-pflegeeinrichtungen-hamburg14"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Vollstationäre Pflegeeinrichtung",
  "details": {
   "Telefon": "040 7219405",
   "E-Mail": "stephan.philipps@t-online.de",
   "Träger / Betreiber": "Altenpension Philipps GmbH & Co. KG"
  },
  "lat": 53.487891,
  "lon": 10.228288,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_VOLLSTATIONAERE_PFLEGEEINRICHTUNGEN_4",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "elim-bergedorf",
  "title": "ELIM Seniorencentrum Bergedorf",
  "place": "Bergedorf",
  "category": "Stationäre Pflege",
  "address": "Am Güterbahnhof 9, 21035 Hamburg",
  "description": "Stationäre pflegerische und soziale Betreuung; besondere Wohngruppen für Menschen mit Demenz.",
  "website": "https://elim-diakonie.de/elim-seniorencentrum-bergedorf/",
  "source": "https://elim-diakonie.de/elim-seniorencentrum-bergedorf/",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://elim-diakonie.de/elim-seniorencentrum-bergedorf/"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/vollstationaere-pflegeeinrichtungen-hamburg14"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Vollstationäre Pflegeeinrichtung",
  "details": {
   "Telefon": "040 692070-0",
   "E-Mail": "esc-bergedorf@elim-diakonie.de",
   "Träger / Betreiber": "Stiftung Freie Ev. Gemeinde in Norddeutschland"
  },
  "lat": 53.484448,
  "lon": 10.199131,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_VOLLSTATIONAERE_PFLEGEEINRICHTUNGEN_14",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "malteserstift-johannes",
  "title": "Malteserstift St. Johannes XXIII.",
  "place": "Lohbrügge",
  "category": "Stationäre Pflege",
  "address": "Bornbrook 7–11, 21031 Hamburg",
  "description": "Vollstationäre Pflege, Kurzzeitpflege, Demenzbetreuung und ALS-Pflege. Betreutes Wohnen ist ein zusätzliches Angebot am Standort.",
  "website": "https://www.malteser.de/wohnen-pflegen/malteserstift-st-johannes-xxiii.html",
  "source": "https://www.malteser.de/wohnen-pflegen/malteserstift-st-johannes-xxiii.html",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.malteser.de/wohnen-pflegen/malteserstift-st-johannes-xxiii.html"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/vollstationaere-pflegeeinrichtungen-hamburg14"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Vollstationäre Pflegeeinrichtung",
  "details": {
   "Telefon": "040 238010-0",
   "E-Mail": "johannes-hamburg@malteser.org",
   "Träger / Betreiber": "Malteser Pflegeeinrichtungen Hamburg gGmbH"
  },
  "lat": 53.506181,
  "lon": 10.195992,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_VOLLSTATIONAERE_PFLEGEEINRICHTUNGEN_69",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "carl-kellinghusen",
  "title": "Seniorenzentrum Dr. Carl Kellinghusen",
  "place": "Bergedorf",
  "category": "Stationäre Pflege",
  "address": "Saarstraße 2, 21029 Hamburg",
  "description": "Vollstationäre Pflege, Kurzzeitpflege und zusätzliche Betreuung.",
  "website": "https://www.geschwister-jensen.de/seniorenzentrum-dr-carl-kellinghusen/",
  "source": "https://www.geschwister-jensen.de/seniorenzentrum-dr-carl-kellinghusen/",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.geschwister-jensen.de/seniorenzentrum-dr-carl-kellinghusen/"
   },
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.geschwister-jensen.de/ueber-uns-kontakt/"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/vollstationaere-pflegeeinrichtungen-hamburg14"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Vollstationäre Pflegeeinrichtung",
  "details": {
   "Telefon": "040-72108-0",
   "E-Mail": "info@carl-kellinghusen.de",
   "Träger / Betreiber": "Senioren-Zentren Geschwister Jensen GmbH"
  },
  "lat": 53.487405,
  "lon": 10.223671,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_VOLLSTATIONAERE_PFLEGEEINRICHTUNGEN_72",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "pflegen-wohnen-moosberg",
  "title": "PFLEGEN & WOHNEN MOOSBERG",
  "place": "Lohbrügge",
  "category": "Stationäre Pflege",
  "address": "Moosberg 3, 21033 Hamburg",
  "description": "Stationäre Pflege und Betreuung; besondere Angebote für Menschen mit demenziellen Erkrankungen.",
  "website": "https://www.pflegenundwohnen.de/de/standorte/moosberg",
  "source": "https://www.pflegenundwohnen.de/de/standorte/moosberg",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.pflegenundwohnen.de/de/standorte/moosberg"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/vollstationaere-pflegeeinrichtungen-hamburg14"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Vollstationäre Pflegeeinrichtung",
  "details": {
   "Telefon": "040-2022-2752",
   "E-Mail": "moosberg@pflegenundwohnen.de",
   "Träger / Betreiber": "PFLEGEN & WOHNEN HAMBURG GmbH"
  },
  "lat": 53.498824,
  "lon": 10.178484,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_VOLLSTATIONAERE_PFLEGEEINRICHTUNGEN_75",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "georg-behrmann",
  "title": "Georg-Behrmann-Stiftung – Wohneinrichtung",
  "place": "Bergedorf",
  "category": "Stationäre Pflege",
  "address": "Justus-Brinckmann-Straße 60, 21029 Hamburg",
  "description": "Vollstationäre Pflege und Betreuung. Servicewohnen und ambulanter Pflegedienst sind weitere Angebote der Stiftung.",
  "website": "https://www.georg-behrmann-stiftung.de/wohneinrichtung/",
  "source": "https://www.georg-behrmann-stiftung.de/wohneinrichtung/",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.georg-behrmann-stiftung.de/wohneinrichtung/"
   },
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.georg-behrmann-stiftung.de/impressum/"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/vollstationaere-pflegeeinrichtungen-hamburg14"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Vollstationäre Pflegeeinrichtung",
  "details": {
   "Telefon": "040-724184-0",
   "E-Mail": "info@georg-behrmann-stiftung.de",
   "Träger / Betreiber": "Georg-Behrmann-Stiftung"
  },
  "lat": 53.484821,
  "lon": 10.234319,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_VOLLSTATIONAERE_PFLEGEEINRICHTUNGEN_84",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "st-klara",
  "title": "Seniorenzentrum St. Klara",
  "place": "Bergedorf",
  "category": "Stationäre Pflege",
  "address": "Reinbeker Weg 50, 21029 Hamburg",
  "description": "Vollstationäre Pflege, Kurzzeitpflege und zusätzliche Betreuung.",
  "website": "https://www.geschwister-jensen.de/seniorenzentrum-st-klara/",
  "source": "https://www.geschwister-jensen.de/seniorenzentrum-st-klara/",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.geschwister-jensen.de/seniorenzentrum-st-klara/"
   },
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.geschwister-jensen.de/ueber-uns-kontakt/"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/vollstationaere-pflegeeinrichtungen-hamburg14"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Vollstationäre Pflegeeinrichtung",
  "details": {
   "Telefon": "040-72101-0",
   "E-Mail": "info@st-klara.de",
   "Träger / Betreiber": "Senioren-Zentren Geschwister Jensen GmbH"
  },
  "lat": 53.491064,
  "lon": 10.221986,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_VOLLSTATIONAERE_PFLEGEEINRICHTUNGEN_85",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "cura-bergedorf",
  "title": "CURA SeniorenCentrum Bergedorf",
  "place": "Bergedorf",
  "category": "Stationäre Pflege",
  "address": "Gojenbergsweg 30, 21029 Hamburg",
  "description": "Stationäre Pflege, Kurzzeit- und Verhinderungspflege. Servicewohnen und ambulante Pflege sind zusätzliche Angebote.",
  "website": "https://www.wirpflegen.de/seniorencentrum-bergedorf",
  "source": "https://www.wirpflegen.de/seniorencentrum-bergedorf",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.wirpflegen.de/seniorencentrum-bergedorf"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/vollstationaere-pflegeeinrichtungen-hamburg14"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Vollstationäre Pflegeeinrichtung",
  "details": {
   "Telefon": "040-897256-0",
   "E-Mail": "info.hamburg-bergedorf@wirpflegen.de",
   "Träger / Betreiber": "Cura Seniorencentrum Bergedorf GmbH"
  },
  "lat": 53.482095,
  "lon": 10.228529,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Avollstationaere_pflegeeinrichtungen&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_VOLLSTATIONAERE_PFLEGEEINRICHTUNGEN_88",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "bg-klinikum-hamburg",
  "title": "BG Klinikum Hamburg",
  "place": "Lohbrügge",
  "category": "Krankenhaus",
  "address": "Bergedorfer Straße 10, 21033 Hamburg",
  "description": "Akutversorgung und Rehabilitation für schwerverletzte und berufserkrankte Menschen.",
  "website": "https://www.bg-kliniken.de/klinikum-hamburg/",
  "source": "https://www.bg-kliniken.de/klinikum-hamburg/anfahrt-und-kontakt/",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.bg-kliniken.de/klinikum-hamburg/anfahrt-und-kontakt/"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/krankenhaeuser-hamburg16"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Agesundheit_krankenhaeuser&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Krankenhaus",
  "details": {
   "Telefon": "040 7306-0",
   "E-Mail": "mail@bgk-hamburg.de",
   "Träger / Betreiber": "freigemeinnützig"
  },
  "lat": 53.506709,
  "lon": 10.179014,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Agesundheit_krankenhaeuser&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_GESUNDHEIT_KRANKENHAEUSER_6",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "praxis-klinik-bergedorf",
  "title": "Praxis-Klinik Bergedorf",
  "place": "Lohbrügge",
  "category": "Krankenhaus",
  "address": "Alte Holstenstraße 2 + 16, 21031 Hamburg",
  "description": "Privates Krankenhaus für Wirbelsäulenchirurgie, Orthopädie und Hernienchirurgie. Aufnahme und OP-Zentrum: Haus 16; Bettenstation: Haus 2.",
  "website": "https://www.praxis-klinik-bergedorf.de/",
  "source": "https://www.praxis-klinik-bergedorf.de/kontakt/",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.praxis-klinik-bergedorf.de/kontakt/"
   },
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.praxis-klinik-bergedorf.de/krankenhaus/unsere-fachgebiete/"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/krankenhaeuser-hamburg16"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Agesundheit_krankenhaeuser&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Krankenhaus",
  "details": {
   "Telefon": "040 72575-0",
   "E-Mail": "verwaltung@praxis-klinik-bergedorf.de",
   "Träger / Betreiber": "privat"
  },
  "lat": 53.494094,
  "lon": 10.206431,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Agesundheit_krankenhaeuser&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_GESUNDHEIT_KRANKENHAEUSER_15",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "bethesda-bergedorf",
  "title": "AGAPLESION BETHESDA KRANKENHAUS BERGEDORF",
  "place": "Bergedorf",
  "category": "Krankenhaus",
  "address": "Glindersweg 80, 21029 Hamburg",
  "description": "Akutkrankenhaus mit mehreren Fachabteilungen, Geburtshilfe, Geriatrie und zentraler Notaufnahme.",
  "website": "https://www.klinik-bergedorf.de/",
  "source": "https://www.klinik-bergedorf.de/ueber-uns/kontakt",
  "sources": [
   {
    "label": "Offizielle Standort- und Kontaktseite",
    "url": "https://www.klinik-bergedorf.de/ueber-uns/kontakt"
   },
   {
    "label": "Amtlicher Datensatz und Lizenz",
    "url": "https://suche.transparenz.hamburg.de/dataset/krankenhaeuser-hamburg16"
   },
   {
    "label": "Amtliche Standortkoordinaten (WFS)",
    "url": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Agesundheit_krankenhaeuser&SRSNAME=EPSG:4326"
   }
  ],
  "entityType": "Krankenhaus",
  "details": {
   "Telefon": "040 72554-0",
   "E-Mail": "info@bkb.info",
   "Träger / Betreiber": "freigemeinnützig"
  },
  "lat": 53.486232,
  "lon": 10.235959,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser?REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&typename=de.hh.up%3Agesundheit_krankenhaeuser&SRSNAME=EPSG:4326",
  "coordinateNote": "Amtliche WFS-Geometrie; serverseitige SRS-Ausgabe EPSG:4326, keine Schätzung; Quelle: Freie und Hansestadt Hamburg, Sozialbehörde. Datenlizenz Deutschland Namensnennung 2.0. Feature-ID: DE.HH.UP_GESUNDHEIT_KRANKENHAEUSER_22",
  "origin": "editorial",
  "version": 1,
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-bergedorf",
  "title": "Freiwillige Feuerwehr Bergedorf",
  "place": "Bergedorf",
  "category": "Feuerwehr",
  "address": "Chrysanderstraße 2d, 21029 Hamburg",
  "description": "Brandschutz und technische Hilfeleistung; Spüren und Messen bei Gefahrstoffen.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/bergedorf/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/bergedorf/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/bergedorf/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2941",
   "E-Mail": "info@ff-bergedorf.de",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.48707636816796,
  "lon": 10.216012786193916,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-bille",
  "title": "Freiwillige Feuerwehr Bille",
  "place": "Bergedorf",
  "category": "Feuerwehr",
  "address": "Chrysanderstraße 2d, 21029 Hamburg",
  "description": "Brandschutz und technische Hilfeleistung; besondere Fernmeldeaufgaben und Brandschutzerziehung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/bille/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/bille/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/bille/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2947",
   "E-Mail": "info@ff-bille.de",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.48707636816796,
  "lon": 10.216012786193916,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-nettelnburg",
  "title": "Freiwillige Feuerwehr Nettelnburg",
  "place": "Bergedorf",
  "category": "Feuerwehr",
  "address": "Nettelnburger Str. 48, 21035 Hamburg",
  "description": "Brandschutz und technische Hilfeleistung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/nettelnburg/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/nettelnburg/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/nettelnburg/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2942",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.47742303484544,
  "lon": 10.188953549664618,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-lohbruegge",
  "title": "Freiwillige Feuerwehr Lohbrügge",
  "place": "Lohbrügge",
  "category": "Feuerwehr",
  "address": "Lohbrügger Markt 3, 21031 Hamburg",
  "description": "Brandschutz und technische Hilfeleistung; Spüren und Messen bei Gefahrstoffen.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/lohbruegge/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/lohbruegge/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/lohbruegge/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2943",
   "E-Mail": "info@ff-lohbruegge.de",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.49524631291225,
  "lon": 10.20642430358655,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-boberg",
  "title": "Freiwillige Feuerwehr Boberg",
  "place": "Lohbrügge",
  "category": "Feuerwehr",
  "address": "Am Langberg 76, 21033 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und Deichverteidigung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/boberg/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/boberg/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/boberg/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2944",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.51480971503149,
  "lon": 10.16004922420432,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-curslack",
  "title": "Freiwillige Feuerwehr Curslack",
  "place": "Curslack",
  "category": "Feuerwehr",
  "address": "Curslacker Deich 177a, 21039 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/curslack/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/curslack/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/curslack/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2951",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.44989923645204,
  "lon": 10.221671576786996,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-altengamme",
  "title": "Freiwillige Feuerwehr Altengamme",
  "place": "Altengamme",
  "category": "Feuerwehr",
  "address": "Gammer Weg 49, 21039 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/altengamme/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/altengamme/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/altengamme/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2952",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.43194026894164,
  "lon": 10.274620648858733,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-neuengamme",
  "title": "Freiwillige Feuerwehr Neuengamme",
  "place": "Neuengamme",
  "category": "Feuerwehr",
  "address": "Neuengammer Hausdeich 217, 21039 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/neuengamme/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/neuengamme/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/neuengamme/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2953",
   "E-Mail": "info@ff-neuengamme.de",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.445048077479925,
  "lon": 10.228799113683264,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-krauel",
  "title": "Freiwillige Feuerwehr Krauel",
  "place": "Kirchwerder",
  "category": "Feuerwehr",
  "address": "Kirchwerder Marschbahndamm, 21037 Hamburg",
  "description": "Brandschutz und technische Hilfeleistung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/krauel/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/krauel/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/krauel/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2954",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.40200189770299,
  "lon": 10.220944737231099,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-kirchwerder-sued",
  "title": "Freiwillige Feuerwehr Kirchwerder-Süd",
  "place": "Kirchwerder",
  "category": "Feuerwehr",
  "address": "In de Wisch 29, 21037 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/kirchwerder-sued/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/kirchwerder-sued/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/kirchwerder-sued/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2955",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.40920114681338,
  "lon": 10.157546751365013,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-kirchwerder-nord",
  "title": "Freiwillige Feuerwehr Kirchwerder-Nord",
  "place": "Kirchwerder",
  "category": "Feuerwehr",
  "address": "Kirchwerder Hausdeich 127, 21037 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/kirchwerder-nord/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/kirchwerder-nord/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/kirchwerder-nord/"
   },
   {
    "label": "Früherer Standort im Feuerwehr-Geodatensatz · nicht der aktuelle Kartenpunkt",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   },
   {"label": "Feuerwehr: Einweihung des Neubaus 2023", "url": "https://www.feuerwehr-hamburg.de/2023/09/aus-dem-aeltesten-ins-neueste-feuerwehrhaus-hamburgs/", "locator": "25.09.2023, Neubau am Kirchwerder Hausdeich 127"},
   {"label": "Bauherr: Neubau und aufgegebener Altbau", "url": "https://www.sprinkenhof.de/projekte/freiwillige-feuerwehr-kirchwerder-nord", "locator": "Bildunterschriften und Abschnitt Neubau nach modernen Feuerwehr-Anforderungen"},
   {"label": "Kartierter Neubau · Gebäudegrundriss", "url": "https://www.openstreetmap.org/way/1300078286", "locator": "Freiwillige Feuerwehr Kirchwerder Nord, Gebäude, OSM-Stand 22.10.2026"},
   {"label": "Amtliches Luftbild 2026 · LGV Hamburg", "url": "https://geodienste.hamburg.de/wms_dop_zeitreihe_unbelaubt?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&LAYERS=dop_zeitreihe_unbelaubt&STYLES=&SRS=EPSG%3A4326&BBOX=10.1905%2C53.43725%2C10.1926%2C53.43855&WIDTH=1000&HEIGHT=1000&FORMAT=image%2Fjpeg&TIME=2026", "locator": "DOP Zeitreihe unbelaubt, Jahrgang 2026; Gebäudeabgleich am 22.10.2026"}
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2956",
   "E-Mail": "info@ff-kirchwerder-nord.de",
   "Standort": "Neubau am Kirchwerder Hausdeich 127. Der frühere Standort Norderquerweg 1 wird nicht als aktuelle Wache kartiert.",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 2,
  "lat": 53.4378998,
  "lon": 10.1916459,
  "coordinateNote": "Gebäudepunkt des kartierten Neubaus, OSM way/1300078286 (Nominatim-Punkt innerhalb des Gebäudegrundrisses), kein geschätzter Punkt und keine bestätigte Eingangslage. Abgleich 22.10.2026: offizielle Feuerwehranschrift Kirchwerder Hausdeich 127, Neubau-/Altbaunachweis des Bauherrn, bereitgestelltes Gebäudefoto und amtliches LGV-Luftbild 2026. Der bisherige WFS-Punkt am Norderquerweg 1 gehört zum früheren Gebäude und wird nicht verwendet. © OpenStreetMap-Mitwirkende, ODbL; Luftbild: Freie und Hansestadt Hamburg, LGV, dl-de/by-2-0.",
  "coordinateSource": "https://www.openstreetmap.org/way/1300078286",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-22"
 },
 {
  "id": "institution-ff-warwisch",
  "title": "Freiwillige Feuerwehr Warwisch",
  "place": "Kirchwerder",
  "category": "Feuerwehr",
  "address": "Durchdeich 62, 21037 Hamburg",
  "description": "Technische Hilfeleistung, Bergung, Energieversorgung und Beleuchtung von Einsatz- und Arbeitsstellen.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/warwisch/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/warwisch/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/warwisch/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2957",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.44421108749484,
  "lon": 10.127218447587122,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-reitbrook",
  "title": "Freiwillige Feuerwehr Reitbrook",
  "place": "Reitbrook",
  "category": "Feuerwehr",
  "address": "Vorderdeich 128, 21037 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/reitbrook/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/reitbrook/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/reitbrook/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2963",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.46861607578706,
  "lon": 10.150559837396779,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-hohendeich",
  "title": "Freiwillige Feuerwehr Hohendeich",
  "place": "Ochsenwerder",
  "category": "Feuerwehr",
  "address": "Ochsenwerder Elbdeich 325, 21037 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/hohendeich/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/hohendeich/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/hohendeich/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2964",
   "E-Mail": "kontakt@ff-hohendeich.de",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.44107403369957,
  "lon": 10.113058650696725,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-neudorf",
  "title": "Freiwillige Feuerwehr Neudorf",
  "place": "Ochsenwerder",
  "category": "Feuerwehr",
  "address": "Elversweg 46b, 21037 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/neudorf/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/neudorf/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/neudorf/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2965",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.47203044223097,
  "lon": 10.072831044749288,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-spadenland",
  "title": "Freiwillige Feuerwehr Spadenland",
  "place": "Spadenland",
  "category": "Feuerwehr",
  "address": "Ruschorter Hauptdeich 1, 21037 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/spadenland/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/spadenland/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/spadenland/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2966",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.48636112374481,
  "lon": 10.054415185853152,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-moorfleet",
  "title": "Freiwillige Feuerwehr Moorfleet",
  "place": "Moorfleet",
  "category": "Feuerwehr",
  "address": "Sandwisch 83, 22113 Hamburg",
  "description": "Brandschutz und technische Hilfeleistung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/moorfleet/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/moorfleet/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/moorfleet/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2967",
   "E-Mail": "mail@feuerwehr-moorfleet.de",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.51207919269407,
  "lon": 10.087160287097642,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Punktstandort der amtlichen WFS-FeatureCollection, EPSG:4326; Adresse mit Originalprofil abgeglichen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-fuenfhausen",
  "title": "Freiwillige Feuerwehr Fünfhausen",
  "place": "Kirchwerder",
  "category": "Feuerwehr",
  "address": "Durchdeich 62, 21037 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und rettungsdienstliche Erstversorgung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/fuenfhausen/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/fuenfhausen/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/fuenfhausen/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2968",
   "E-Mail": "info@ff-fuenfhausen.de",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.44421108749484,
  "lon": 10.127218447587122,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Gemeinsamer Standort Durchdeich 62: Beide aktuellen Originalprofile bestätigen diese Adresse. Koordinate des amtlichen Warwisch-Features; WFS-Fünfhausen-Alteintrag Sülzbrackring 52 verworfen. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-ff-allermoehe",
  "title": "Freiwillige Feuerwehr Allermöhe-Billwerder",
  "place": "Allermöhe",
  "category": "Feuerwehr",
  "address": "Allermöher Deich 33, 21037 Hamburg",
  "description": "Brandschutz, technische Hilfeleistung und Wasserrettung.",
  "website": "https://www.feuerwehr-hamburg.de/dienststellen/allermoehe/",
  "source": "https://www.feuerwehr-hamburg.de/dienststellen/allermoehe/",
  "sources": [
   {
    "label": "Originalprofil Freiwillige Feuerwehr Hamburg",
    "url": "https://www.feuerwehr-hamburg.de/dienststellen/allermoehe/"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:freiwillige_feuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Freiwillige Feuerwehr",
  "details": {
   "Telefon (kein Notruf)": "040 / 42851-2961",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchs- oder Sprechzeiten übernommen. Im Notfall 112; Wehrtelefon ist kein Notruf."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.4832276,
  "lon": 10.1174159,
  "coordinateSource": "https://www.openstreetmap.org/way/1056879372",
  "coordinateNote": "OpenStreetMap-Objekt über Nominatim; exakter Abgleich Straße, Hausnummer und Postleitzahl mit amtlicher Kontaktanschrift. Keine Interpolation. ODbL; OpenStreetMap-Mitwirkende.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-f26",
  "title": "Feuer- und Rettungswache Bergedorf (F26)",
  "place": "Lohbrügge",
  "category": "Feuerwehr",
  "address": "Sander Damm 2, 21031 Hamburg",
  "description": "Feuer- und Rettungswache der Feuerwehr Hamburg. Zuständig für Bergedorf, Neuallermöhe, Vier- und Marschlande, Lohbrügge sowie angrenzende Gebiete.",
  "website": "https://www.feuerwehr.hamburg/furw26-815512",
  "source": "https://www.feuerwehr.hamburg/furw26-815512",
  "sources": [
   {
    "label": "Originalprofil Feuerwehr Hamburg",
    "url": "https://www.feuerwehr.hamburg/furw26-815512"
   },
   {
    "label": "Amtliche Standortdaten Feuerwehr Hamburg",
    "url": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:berufsfeuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson"
   }
  ],
  "entityType": "Berufsfeuerwehr und Rettungsdienst",
  "details": {
   "Telefon (kein Notruf)": "040 42851-2600",
   "E-Mail": "furwbergedorf@feuerwehr.hamburg.de",
   "Besuchs- / Sprechzeiten": "Keine allgemeinen Besuchszeiten übernommen. Im Notfall 112."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.49122308764698,
  "lon": 10.203628396599381,
  "coordinateSource": "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=de.hh.up:berufsfeuerwehr&SRSNAME=EPSG:4326&OUTPUTFORMAT=application/geo%2Bjson",
  "coordinateNote": "Amtlicher WFS-Punktstandort, EPSG:4326; Adresse stimmt mit Originalprofil überein. Freie und Hansestadt Hamburg, Feuerwehr Hamburg; Datenlizenz Deutschland Namensnennung 2.0.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-polizei-pk43",
  "title": "Polizeikommissariat 43",
  "place": "Lohbrügge",
  "category": "Polizei",
  "address": "Ludwig-Rosenberg-Ring 57, 21031 Hamburg",
  "description": "Polizeidienststelle der Polizei Hamburg für Bergedorf.",
  "website": "https://www.hamburg.de/service/info/11269446/",
  "source": "https://www.hamburg.de/service/info/11269446/",
  "sources": [
   {
    "label": "Amtliche Kontakt- und Außenstellenübersicht PK 43",
    "url": "https://www.hamburg.de/service/info/11269446/"
   }
  ],
  "entityType": "Polizeikommissariat",
  "details": {
   "Telefon (kein Notruf)": "040 4286-54310",
   "E-Mail": "pk43@polizei.hamburg.de",
   "Besuchs- / Sprechzeiten": "Tag und Nacht erreichbar; E-Mails nur während normaler Bürostunden gelesen. Im Notfall 110."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.4913496,
  "lon": 10.2039898,
  "coordinateSource": "https://www.openstreetmap.org/way/154286862",
  "coordinateNote": "OpenStreetMap-Objekt über Nominatim; exakter Abgleich Straße, Hausnummer und Postleitzahl mit amtlicher Kontaktanschrift. Keine Interpolation. ODbL; OpenStreetMap-Mitwirkende.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-polizei-curslack-neuengamme",
  "title": "Polizeiposten Curslack-Neuengamme",
  "place": "Curslack",
  "category": "Polizei",
  "address": "Curslacker Deich 165a, 21039 Hamburg",
  "description": "Bürgernaher Polizeiposten beziehungsweise Außenstelle des Polizeikommissariats 43. Erreichbarkeit vor dem Besuch beim Kommissariat erfragen.",
  "website": "https://www.hamburg.de/service/info/11269446/",
  "source": "https://www.hamburg.de/service/info/11269446/",
  "sources": [
   {
    "label": "Amtliche Kontakt- und Außenstellenübersicht PK 43",
    "url": "https://www.hamburg.de/service/info/11269446/"
   }
  ],
  "entityType": "Standort des Polizeikommissariats 43",
  "details": {
   "Telefon (kein Notruf)": "040 4286-54310",
   "E-Mail": "pk43@polizei.hamburg.de",
   "Besuchs- / Sprechzeiten": "Nicht durchgehend an sieben Tagen rund um die Uhr geöffnet; aktuelle Erreichbarkeit über PK43. Im Notfall110."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.448044,
  "lon": 10.2244925,
  "coordinateSource": "https://www.openstreetmap.org/way/236193860",
  "coordinateNote": "OpenStreetMap-Objekt über Nominatim; exakter Abgleich Straße, Hausnummer und Postleitzahl mit amtlicher Kontaktanschrift. Keine Interpolation. ODbL; OpenStreetMap-Mitwirkende.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-polizei-altengamme",
  "title": "Polizeiposten Altengamme",
  "place": "Altengamme",
  "category": "Polizei",
  "address": "Gammer Weg 30, 21039 Hamburg",
  "description": "Bürgernaher Polizeiposten beziehungsweise Außenstelle des Polizeikommissariats 43. Erreichbarkeit vor dem Besuch beim Kommissariat erfragen.",
  "website": "https://www.hamburg.de/service/info/11269446/",
  "source": "https://www.hamburg.de/service/info/11269446/",
  "sources": [
   {
    "label": "Amtliche Kontakt- und Außenstellenübersicht PK 43",
    "url": "https://www.hamburg.de/service/info/11269446/"
   }
  ],
  "entityType": "Standort des Polizeikommissariats 43",
  "details": {
   "Telefon (kein Notruf)": "040 4286-54310",
   "E-Mail": "pk43@polizei.hamburg.de",
   "Besuchs- / Sprechzeiten": "Nicht durchgehend an sieben Tagen rund um die Uhr geöffnet; aktuelle Erreichbarkeit über PK43. Im Notfall110."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.429991,
  "lon": 10.2745824,
  "coordinateSource": "https://www.openstreetmap.org/way/261943752",
  "coordinateNote": "OpenStreetMap-Objekt über Nominatim; exakter Abgleich Straße, Hausnummer und Postleitzahl mit amtlicher Kontaktanschrift. Keine Interpolation. ODbL; OpenStreetMap-Mitwirkende.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-polizei-kirchwerder-warwisch",
  "title": "Polizeiposten Kirchwerder-Warwisch",
  "place": "Ochsenwerder",
  "category": "Polizei",
  "address": "Ochsenwerder Elbdeich 337, 21037 Hamburg",
  "description": "Bürgernaher Polizeiposten beziehungsweise Außenstelle des Polizeikommissariats 43. Erreichbarkeit vor dem Besuch beim Kommissariat erfragen.",
  "website": "https://www.hamburg.de/service/info/11269446/",
  "source": "https://www.hamburg.de/service/info/11269446/",
  "sources": [
   {
    "label": "Amtliche Kontakt- und Außenstellenübersicht PK 43",
    "url": "https://www.hamburg.de/service/info/11269446/"
   }
  ],
  "entityType": "Standort des Polizeikommissariats 43",
  "details": {
   "Telefon (kein Notruf)": "040 4286-54310",
   "E-Mail": "pk43@polizei.hamburg.de",
   "Besuchs- / Sprechzeiten": "Nicht durchgehend an sieben Tagen rund um die Uhr geöffnet; aktuelle Erreichbarkeit über PK43. Im Notfall110."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.4408534,
  "lon": 10.1150178,
  "coordinateSource": "https://www.openstreetmap.org/way/518341339",
  "coordinateNote": "OpenStreetMap-Objekt über Nominatim; exakter Abgleich Straße, Hausnummer und Postleitzahl mit amtlicher Kontaktanschrift. Keine Interpolation. ODbL; OpenStreetMap-Mitwirkende.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-polizei-ochsenwerder-moorfleet",
  "title": "Polizeiposten Ochsenwerder-Moorfleet",
  "place": "Ochsenwerder",
  "category": "Polizei",
  "address": "Gauerter Hauptdeich 73, 21037 Hamburg",
  "description": "Bürgernaher Polizeiposten beziehungsweise Außenstelle des Polizeikommissariats 43. Erreichbarkeit vor dem Besuch beim Kommissariat erfragen.",
  "website": "https://www.hamburg.de/service/info/11269446/",
  "source": "https://www.hamburg.de/service/info/11269446/",
  "sources": [
   {
    "label": "Amtliche Kontakt- und Außenstellenübersicht PK 43",
    "url": "https://www.hamburg.de/service/info/11269446/"
   }
  ],
  "entityType": "Standort des Polizeikommissariats 43",
  "details": {
   "Telefon (kein Notruf)": "040 4286-54310",
   "E-Mail": "pk43@polizei.hamburg.de",
   "Besuchs- / Sprechzeiten": "Nicht durchgehend an sieben Tagen rund um die Uhr geöffnet; aktuelle Erreichbarkeit über PK43. Im Notfall110."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.4603341,
  "lon": 10.0708976,
  "coordinateSource": "https://www.openstreetmap.org/way/256350838",
  "coordinateNote": "OpenStreetMap-Objekt über Nominatim; exakter Abgleich Straße, Hausnummer und Postleitzahl mit amtlicher Kontaktanschrift. Keine Interpolation. ODbL; OpenStreetMap-Mitwirkende.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-polizei-zollenspieker",
  "title": "Polizeiposten Zollenspieker",
  "place": "Kirchwerder",
  "category": "Polizei",
  "address": "Auf dem Sülzbrack 4, 21037 Hamburg",
  "description": "Bürgernaher Polizeiposten beziehungsweise Außenstelle des Polizeikommissariats 43. Erreichbarkeit vor dem Besuch beim Kommissariat erfragen.",
  "website": "https://www.hamburg.de/service/info/11269446/",
  "source": "https://www.hamburg.de/service/info/11269446/",
  "sources": [
   {
    "label": "Amtliche Kontakt- und Außenstellenübersicht PK 43",
    "url": "https://www.hamburg.de/service/info/11269446/"
   }
  ],
  "entityType": "Standort des Polizeikommissariats 43",
  "details": {
   "Telefon (kein Notruf)": "040 4286-54310",
   "E-Mail": "pk43@polizei.hamburg.de",
   "Besuchs- / Sprechzeiten": "Nicht durchgehend an sieben Tagen rund um die Uhr geöffnet; aktuelle Erreichbarkeit über PK43. Im Notfall110."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.4013969,
  "lon": 10.175229,
  "coordinateSource": "https://www.openstreetmap.org/way/312377135",
  "coordinateNote": "OpenStreetMap-Objekt über Nominatim; exakter Abgleich Straße, Hausnummer und Postleitzahl mit amtlicher Kontaktanschrift. Keine Interpolation. ODbL; OpenStreetMap-Mitwirkende.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 },
 {
  "id": "institution-polizei-allermoehe",
  "title": "Polizeiaußenstelle Allermöhe",
  "place": "Neuallermöhe",
  "category": "Polizei",
  "address": "Walter-Rudolphi-Weg 32, 21035 Hamburg",
  "description": "Bürgernaher Polizeiposten beziehungsweise Außenstelle des Polizeikommissariats 43. Erreichbarkeit vor dem Besuch beim Kommissariat erfragen.",
  "website": "https://www.hamburg.de/service/info/11269446/",
  "source": "https://www.hamburg.de/service/info/11269446/",
  "sources": [
   {
    "label": "Amtliche Kontakt- und Außenstellenübersicht PK 43",
    "url": "https://www.hamburg.de/service/info/11269446/"
   }
  ],
  "entityType": "Standort des Polizeikommissariats 43",
  "details": {
   "Telefon (kein Notruf)": "040 4286-54310",
   "E-Mail": "pk43@polizei.hamburg.de",
   "Besuchs- / Sprechzeiten": "Nicht durchgehend an sieben Tagen rund um die Uhr geöffnet; aktuelle Erreichbarkeit über PK43. Im Notfall110."
  },
  "origin": "editorial",
  "version": 1,
  "lat": 53.4896785,
  "lon": 10.1593119,
  "coordinateSource": "https://www.openstreetmap.org/way/249672016",
  "coordinateNote": "OpenStreetMap-Objekt über Nominatim; exakter Abgleich Straße, Hausnummer und Postleitzahl mit amtlicher Kontaktanschrift. Keine Interpolation. ODbL; OpenStreetMap-Mitwirkende.",
  "readerStatus": "released",
  "sourceStatus": "checked",
  "checked": "2026-10-18"
 }
,
{
 "id": "st-petri-pauli",
 "title": "St. Petri und Pauli · evangelisch-lutherische Kirchengemeinde",
 "place": "Bergedorf",
 "address": "Bergedorfer Schloßstraße 5, 21029 Hamburg",
 "category": "Kirchen und christliche Gemeinden",
 "description": "Kirchengemeinde mit Gottesdiensten, Kirchenmusik sowie Angeboten für Kinder, Jugendliche und Senioren.",
 "website": "https://stpetriundpauli-bergedorf.de/joomla/",
 "source": "https://www.nordkirche.de/adressen/institutionen/detailansicht/institution/st-petri-und-pauli",
 "sources": [
  {
   "url": "https://www.nordkirche.de/adressen/institutionen/detailansicht/institution/st-petri-und-pauli",
   "label": "Nordkirche · Kirche St. Petri und Pauli",
   "locator": "Kirchenanschrift und Gemeindekontakt"
  },
  {
   "url": "https://stpetriundpauli-bergedorf.de/joomla/kontakt",
   "label": "Gemeinde · Kirchenbüro",
   "locator": "Kirchenbüro: Anschrift, Telefon und Öffnungszeiten; Navigation Gemeindeleben und Musik"
  }
 ],
 "details": {
  "Telefon": "040 7214460",
  "E-Mail": "info@stpetriundpauli-bergedorf.de",
  "Kirchenbüro": "Bergedorfer Schloßstraße 2, 21029 Hamburg; vom Kirchenstandort zu unterscheiden.",
  "Bürozeiten": "Dienstag 10–13 Uhr; Donnerstag 15–18 Uhr. Aktuelle Änderungen auf der Gemeindeseite prüfen."
 },
 "origin": "editorial",
 "readerStatus": "released",
 "sourceStatus": "checked",
 "checked": "2026-10-19",
 "entityType": "Religiöse Gemeinde / Standort",
 "version": 1,
 "lat": 53.488948,
 "lon": 10.2116538,
 "coordinateSource": "https://www.openstreetmap.org/node/2485144443",
 "coordinateNote": "OpenStreetMap/Nominatim, gezielte Suche der zuvor belegten Anschrift, Straße und Hausnummer stimmen überein; keine Schätzung oder Interpolation. Abgleich 19.10.2026. OpenStreetMap-Mitwirkende, ODbL."
},
{
 "id": "gnadenkirche",
 "title": "Christus-Kirchengemeinde Lohbrügge · Gnadenkirche",
 "place": "Lohbrügge",
 "address": "Schulenburgring 168, 21031 Hamburg",
 "category": "Kirchen und christliche Gemeinden",
 "description": "Kirchenstandort der evangelisch-lutherischen Christus-Kirchengemeinde Hamburg-Lohbrügge.",
 "website": "https://www.christus-kirchengemeinde-lohbruegge.de/",
 "source": "https://www.kirche-hamburg.de/gemeinden/ansicht/500-ev-luth-christus-kirchengemeinde-hamburg-lohbruegge",
 "sources": [
  {
   "url": "https://www.kirche-hamburg.de/gemeinden/ansicht/500-ev-luth-christus-kirchengemeinde-hamburg-lohbruegge",
   "label": "Kirche Hamburg · Christus-Kirchengemeinde Lohbrügge",
   "locator": "Gemeindekontakt und die beiden zugehörigen Kirchenstandorte"
  },
  {
   "url": "https://www.christus-kirchengemeinde-lohbruegge.de/",
   "label": "Christus-Kirchengemeinde · Gemeindebüro und Angebote",
   "locator": "Herzlich willkommen: Zusammenschluss 2019; Gemeindebüro und Bürozeiten; Unsere Kirchen"
  }
 ],
 "details": {
  "Telefon Gemeindebüro": "040 7386521",
  "E-Mail Gemeindebüro": "buero@chkgl.de",
  "Zugehörigkeit": "Die beiden Kirchen sind Standorte derselben Christus-Kirchengemeinde; keine zwei unabhängigen Organisationen.",
  "Gemeindebüro": "Schulenburgring 168, 21031 Hamburg. Besuchszeiten nicht geprüft.",
  "Bürozeiten": "Gemeindebüro Schulenburgring 168: Montag und Freitag 10–12 Uhr, Mittwoch 17–18:30 Uhr. Vor Besuch aktuelle Änderungen prüfen.",
  "Organisation": "Ein Standort der Christus-Kirchengemeinde Hamburg-Lohbrügge; gemeinsames Organisationsprofil mit den beiden Kirchenstandorten."
 },
 "origin": "editorial",
 "readerStatus": "released",
 "sourceStatus": "checked",
 "checked": "2026-10-19",
 "entityType": "Religiöse Gemeinde / Standort",
 "version": 1,
 "lat": 53.5083215,
 "lon": 10.1873187,
 "coordinateSource": "https://www.openstreetmap.org/way/83134293",
 "coordinateNote": "OpenStreetMap/Nominatim, gezielte Suche der zuvor belegten Anschrift, Straße und Hausnummer stimmen überein; keine Schätzung oder Interpolation. Abgleich 19.10.2026. OpenStreetMap-Mitwirkende, ODbL.",
 "parentId": "christus-kirchengemeinde-lohbruegge",
 "parentName": "Christus-Kirchengemeinde Hamburg-Lohbrügge"
},
{
 "id": "erloeserkirche",
 "title": "Christus-Kirchengemeinde Lohbrügge · Erlöserkirche",
 "place": "Lohbrügge",
 "address": "Lohbrügger Kirchstraße 9, 21033 Hamburg",
 "category": "Kirchen und christliche Gemeinden",
 "description": "Kirchenstandort der evangelisch-lutherischen Christus-Kirchengemeinde Hamburg-Lohbrügge.",
 "website": "https://www.christus-kirchengemeinde-lohbruegge.de/",
 "source": "https://www.kirche-hamburg.de/gemeinden/ansicht/500-ev-luth-christus-kirchengemeinde-hamburg-lohbruegge",
 "sources": [
  {
   "url": "https://www.kirche-hamburg.de/gemeinden/ansicht/500-ev-luth-christus-kirchengemeinde-hamburg-lohbruegge",
   "label": "Kirche Hamburg · Christus-Kirchengemeinde Lohbrügge",
   "locator": "Gemeindekontakt und die beiden zugehörigen Kirchenstandorte"
  },
  {
   "url": "https://www.christus-kirchengemeinde-lohbruegge.de/",
   "label": "Christus-Kirchengemeinde · Gemeindebüro und Angebote",
   "locator": "Herzlich willkommen: Zusammenschluss 2019; Gemeindebüro und Bürozeiten; Unsere Kirchen"
  }
 ],
 "details": {
  "Telefon Gemeindebüro": "040 7386521",
  "E-Mail Gemeindebüro": "buero@chkgl.de",
  "Zugehörigkeit": "Die beiden Kirchen sind Standorte derselben Christus-Kirchengemeinde; keine zwei unabhängigen Organisationen.",
  "Gemeindebüro": "Schulenburgring 168, 21031 Hamburg. Besuchszeiten nicht geprüft.",
  "Bürozeiten": "Gemeindebüro Schulenburgring 168: Montag und Freitag 10–12 Uhr, Mittwoch 17–18:30 Uhr. Vor Besuch aktuelle Änderungen prüfen.",
  "Organisation": "Ein Standort der Christus-Kirchengemeinde Hamburg-Lohbrügge; gemeinsames Organisationsprofil mit den beiden Kirchenstandorten."
 },
 "origin": "editorial",
 "readerStatus": "released",
 "sourceStatus": "checked",
 "checked": "2026-10-19",
 "entityType": "Religiöse Gemeinde / Standort",
 "version": 1,
 "lat": 53.4973363,
 "lon": 10.2013736,
 "coordinateSource": "https://www.openstreetmap.org/way/233021988",
 "coordinateNote": "OpenStreetMap/Nominatim, gezielte Suche der zuvor belegten Anschrift, Straße und Hausnummer stimmen überein; keine Schätzung oder Interpolation. Abgleich 19.10.2026. OpenStreetMap-Mitwirkende, ODbL.",
 "parentId": "christus-kirchengemeinde-lohbruegge",
 "parentName": "Christus-Kirchengemeinde Hamburg-Lohbrügge"
},
{
 "id": "st-marien-bergedorf",
 "title": "St. Marien · katholische Gemeinde Bergedorf",
 "place": "Bergedorf",
 "address": "Sichter 2, 21029 Hamburg",
 "category": "Kirchen und christliche Gemeinden",
 "description": "Katholische Gemeinde mit Gottesdiensten, Kirchenmusik und Gruppenangeboten für verschiedene Altersgruppen.",
 "website": "https://pfarrei-heilige-elisabeth.de/gemeinden/st-marien/",
 "source": "https://pfarrei-heilige-elisabeth.de/gemeinden/st-marien/",
 "sources": [
  {
   "url": "https://pfarrei-heilige-elisabeth.de/gemeinden/st-marien/",
   "label": "Pfarrei Heilige Elisabeth · St. Marien",
   "locator": "Gemeindeanschrift, Pfarrbüro und Gemeindeleben; Abschnitte Kinder, Jugendliche, Familien, Senioren, Kirchenmusik"
  }
 ],
 "details": {
  "Telefon Pfarrbüro": "040 7216000",
  "E-Mail": "bergedorf@pfarrei-heilige-elisabeth.de",
  "Pfarrbüro / Postanschrift": "Reinbeker Weg 8, 21029 Hamburg; nicht die Anschrift der Kirche.",
  "Gottesdienste": "Die Gemeinde veröffentlicht Gottesdiensttermine im Elisablatt. Prüfen Sie dort die aktuellen Angaben.",
  "Kartenstandort": "Die belegte Gemeindeanschrift Sichter 2 ist in OpenStreetMap als Gemeindehaus erfasst. Der Punkt bezeichnet das Gemeindegebäude, nicht einen behaupteten Kircheneingang."
 },
 "origin": "editorial",
 "readerStatus": "released",
 "sourceStatus": "checked",
 "checked": "2026-10-19",
 "entityType": "Religiöse Gemeinde / Standort",
 "version": 1,
 "lat": 53.4882807,
 "lon": 10.2171016,
 "coordinateSource": "https://www.openstreetmap.org/way/237976190",
 "coordinateNote": "OpenStreetMap/Nominatim, gezielte Suche der zuvor belegten Anschrift, Straße und Hausnummer stimmen überein; keine Schätzung oder Interpolation. Abgleich 19.10.2026. OpenStreetMap-Mitwirkende, ODbL."
},
{
 "id": "st-nicolai-altengamme",
 "title": "St. Nicolai zu Altengamme",
 "place": "Altengamme",
 "address": "Kirchenstegel 11, 21039 Hamburg",
 "category": "Kirchen und christliche Gemeinden",
 "description": "Evangelisch-lutherische Kirchengemeinde mit Kirche, Gottesdiensten und Gemeindeveranstaltungen im Pfarrsprengel Kirche in Vierlanden.",
 "website": "https://www.kirche-altengamme.de/",
 "source": "https://www.kirche-hamburg.de/gemeinden/ansicht/2845-ev-luth-kirchengemeinde-st-nicolai-zu-altengamme-im-pfarrsprengel-kirche-in-vierlanden",
 "sources": [
  {
   "url": "https://www.kirche-hamburg.de/gemeinden/ansicht/2845-ev-luth-kirchengemeinde-st-nicolai-zu-altengamme-im-pfarrsprengel-kirche-in-vierlanden",
   "label": "Kirche Hamburg · St. Nicolai zu Altengamme",
   "locator": "Gemeindeanschrift, Kontakt und zugehörige Kirche"
  },
  {
   "url": "https://serviceportal.kirche-hamburg.de/gemeinden/st-nicolai-zu-altengamme.html",
   "label": "Kirchliches Serviceportal · St. Nicolai",
   "locator": "Gemeindeanschrift und Abschnitte Gottesdienste / Veranstaltungen"
  }
 ],
 "details": {
  "Telefon": "040 7235236",
  "E-Mail": "kontakt@kirche-altengamme.de",
  "Kartenstandort": "Markiert wird die veröffentlichte Gemeindeanschrift Kirchenstegel 11, nicht ein geschätzter Kircheneingang."
 },
 "origin": "editorial",
 "readerStatus": "released",
 "sourceStatus": "checked",
 "checked": "2026-10-19",
 "entityType": "Kirchengemeinde · Gemeindeadresse",
 "version": 1,
 "lat": 53.4290894,
 "lon": 10.2700679,
 "coordinateSource": "https://www.openstreetmap.org/way/260989173",
 "coordinateNote": "OpenStreetMap/Nominatim, gezielte Suche der zuvor belegten Anschrift, Straße und Hausnummer stimmen überein; keine Schätzung oder Interpolation. Abgleich 19.10.2026. OpenStreetMap-Mitwirkende, ODbL."
},
{
 "id": "kocatepe-bergedorf",
 "title": "Kocatepe Camii · DITIB-Gemeinde Bergedorf",
 "place": "Bergedorf",
 "address": "Stuhlrohrstraße 21, 21029 Hamburg",
 "category": "Moscheen und muslimische Gemeinden",
 "description": "Moschee und örtliche DITIB-Gemeinde. Das Hamburger Landesinstitut führt sie als religiösen Lernort. Besuchsmöglichkeiten bitte vorab mit der Gemeinde klären.",
 "website": "https://www.ditib.de/default.php?13=&abc=H&filter=alphabet&id=13&lang=de",
 "source": "https://www.ditib.de/default.php?13=&abc=H&filter=alphabet&id=13&lang=de",
 "sources": [
  {
   "url": "https://www.ditib.de/default.php?13=&abc=H&filter=alphabet&id=13&lang=de",
   "label": "DITIB · Gemeindeverzeichnis",
   "locator": "Eintrag HAMBURG-Bergedorf: Stuhlrohrstraße 21, Telefon"
  },
  {
   "url": "https://li.hamburg.de/qualitaetsentwicklung-von-unterricht-und-schule/faecher-lernbereiche/gesellschaft/religion/religioese-lernorte-hamburg/kocatepe-camii-650644",
   "label": "Landesinstitut Hamburg · Kocatepe Camii",
   "locator": "Kocatepe Camii (DITIB): Standort und Gemeinde-E-Mail; Straße dort verkürzt als Stuhlrohr 21 angegeben"
  }
 ],
 "details": {
  "Telefon": "040 7240619",
  "E-Mail": "vorstand.bergedorf@ditib-nord.de",
  "Besuchshinweis": "Keine bestätigten Besuchs- oder Führungszeiten angegeben. Bitte vorher erfragen."
 },
 "origin": "editorial",
 "readerStatus": "released",
 "sourceStatus": "checked",
 "checked": "2026-10-19",
 "entityType": "Religiöse Gemeinde / Standort",
 "version": 1,
 "lat": 53.4869578,
 "lon": 10.2069724,
 "coordinateSource": "https://www.openstreetmap.org/way/536759578",
 "coordinateNote": "OpenStreetMap/Nominatim, gezielte Suche der zuvor belegten Anschrift, Straße und Hausnummer stimmen überein; keine Schätzung oder Interpolation. Abgleich 19.10.2026. OpenStreetMap-Mitwirkende, ODbL."
},
{"id": "schifffahrtslinie-serrahn", "title": "Bergedorfer Schifffahrtslinie – Schiffsanleger am Serrahn", "place": "Bergedorf", "category": "Schifffahrt & Fähren", "address": "Bergedorfer Hafen, Serrahnstraße · Wassertreppen 1–3, 21029 Hamburg", "entityType": "Schiffsanleger", "lat": 53.4886693, "lon": 10.2090276, "coordinateSource": "https://www.openstreetmap.org/node/9659748670", "description": "Schifffahrten ab dem Bergedorfer Hafen. Die Anbieterinformation nennt bei Hamburgfahrten Sandtorhöft als Ziel; maßgeblich ist die jeweils gebuchte Fahrt.", "details": {"Anleger": "Der Kartenpunkt zeigt den Schiffsanleger am Serrahn, nicht das Verkaufsbüro in der Alten Holstenstraße 64.", "Fahrten und Charter": "Strecke, Abfahrt und Saison bitte beim Anbieter prüfen. „Unser Revier“ beschreibt Chartermöglichkeiten und ist kein regulärer Fahrplan.", "Telefon": "040 736 756 90", "E-Mail": "info@bergedorfer-schifffahrtslinie.de"}, "source": "https://barkassenfahrt.de/", "website": "https://barkassenfahrt.de/", "sources": [{"label": "Anleger und getrennte Büroanschrift", "url": "https://barkassenfahrt.de/kontakt/", "locator": "HEIMATHAFEN → Anleger, Wassertreppen 1–3"}, {"label": "Charterfahrtgebiet · kein Linienfahrplan", "url": "https://barkassenfahrt.de/charter/unser-revier/"}], "origin": "editorial", "readerStatus": "released", "sourceStatus": "checked", "checked": "2026-10-19", "version": 1, "coordinateNote": "Am 19.10.2026 mit Originalquelle und einzelner OSM-Geometrie abgeglichen. OpenStreetMap-Mitwirkende, ODbL. Expliziter Fähr-/Schiffsanleger in OSM; nicht Büro, Bushaltestelle oder Gegenanleger."},{"id": "elbfaehre-zollenspieker", "title": "Elbfähre Zollenspieker–Hoopte", "place": "Kirchwerder", "category": "Schifffahrt & Fähren", "address": "Zollenspieker Hauptdeich 148, 21037 Hamburg", "entityType": "Fähranleger auf Hamburger Seite", "lat": 53.3979822, "lon": 10.1833599, "coordinateSource": "https://www.openstreetmap.org/node/252599332", "description": "Fährverbindung über die Elbe zwischen Zollenspieker und Hoopte. Der Kartenpunkt zeigt den Hamburger Anleger, nicht den gegenüberliegenden Anleger in Hoopte.", "details": {"Aktueller Fährbetrieb": "Fahrtzeiten, Saisonpausen und kurzfristige Betriebshinweise bitte unmittelbar beim Betreiber prüfen."}, "source": "https://erlebnis-reederei.de/faehrbetrieb-2/", "website": "https://erlebnis-reederei.de/faehrbetrieb-2/", "origin": "editorial", "readerStatus": "released", "sourceStatus": "checked", "checked": "2026-10-19", "version": 1, "coordinateNote": "Am 19.10.2026 mit Originalquelle und einzelner OSM-Geometrie abgeglichen. OpenStreetMap-Mitwirkende, ODbL. Expliziter Fähr-/Schiffsanleger in OSM; nicht Büro, Bushaltestelle oder Gegenanleger."},{"id": "gruenes-zentrum", "title": "Grünes Zentrum Lohbrügge", "place": "Lohbrügge", "category": "Parkanlagen", "address": "Zwischen Korachstraße und Wilhelm-Leuschner-Straße, Hamburg-Lohbrügge", "locationTitle": "Weggabelung in der Parkanlage", "entityType": "Parkanlage", "lat": 53.5069776, "lon": 10.2029667, "coordinateSource": "https://www.openstreetmap.org/node/2288320291", "description": "Grünanlage in Lohbrügge-Nord mit Wiesen, Bäumen und Spazierwegen. Die offizielle Beschreibung nennt den Ziegelteich als Mittelpunkt.", "details": {"Kartenpunkt": "Orientierungspunkt an einer kartierten Weggabelung innerhalb der Parkanlage; kein Gebäude und keine Verwaltungsanschrift.", "Besuch": "Aktuelle Hinweise zu Anlage und Wegen bitte in der offiziellen Beschreibung prüfen."}, "source": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/parkanlagen/gruenes-zentrum-lohbruegge-275384", "website": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/parkanlagen/gruenes-zentrum-lohbruegge-275384", "quarterId": "lohbruegge-nord", "quarterChecked": "2026-10-19", "quarterSource": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/parkanlagen/gruenes-zentrum-lohbruegge-275384", "quarterLocator": "Einleitung: Großwohnsiedlung Lohbrügge-Nord und dazugehörige Grünanlage", "sources": [{"label": "Belegte Quartierszuordnung", "url": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/parkanlagen/gruenes-zentrum-lohbruegge-275384", "locator": "Einleitung: Lohbrügge-Nord"}, {"label": "Kartierte Parkanlage", "url": "https://www.openstreetmap.org/relation/2204980"}, {"label": "Weggabelung · zwei verbundene Parkwege", "url": "https://www.openstreetmap.org/way/219692449"}], "origin": "editorial", "readerStatus": "released", "sourceStatus": "checked", "checked": "2026-10-19", "version": 1, "coordinateNote": "Am 19.10.2026 mit Originalquelle und einzelner OSM-Geometrie abgeglichen. OpenStreetMap-Mitwirkende, ODbL. Bestehender Knoten zweier Fußwege innerhalb der kartierten Parkfläche."},{"id": "schlosspark", "title": "Bergedorfer Schlosspark / Schlossgarten", "place": "Bergedorf", "category": "Parkanlagen", "address": "Bergedorfer Schlossgarten, 21029 Hamburg", "locationTitle": "Parkzugang am nordwestlichen Rand", "entityType": "Parkanlage", "lat": 53.4906383, "lon": 10.2114332, "coordinateSource": "https://www.openstreetmap.org/node/3105548771", "description": "Parkanlage rund um das Bergedorfer Schloss mit Bäumen, Gewässern und Wegen. Park und Museum sind unterschiedliche Angebote; das vorhandene Schlossprofil bleibt verknüpft.", "details": {"Kartenpunkt": "Kartierter Fußweg am nordwestlichen Parkrand. Der Punkt dient als Zugang und Orientierung, nicht als Mittelpunkt des gesamten Parks."}, "source": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/parkanlagen/bergedorfer-schlosspark3-274976", "website": "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/parkanlagen/bergedorfer-schlosspark3-274976", "relatedIds": ["schloss"], "sources": [{"label": "Schlossgarten · kartierte Parkfläche", "url": "https://www.openstreetmap.org/relation/410134"}, {"label": "Fußweg am Parkrand", "url": "https://www.openstreetmap.org/way/258362592"}], "origin": "editorial", "readerStatus": "released", "sourceStatus": "checked", "checked": "2026-10-19", "version": 1, "coordinateNote": "Am 19.10.2026 mit Originalquelle und einzelner OSM-Geometrie abgeglichen. OpenStreetMap-Mitwirkende, ODbL. Gemeinsamer Knoten von Fußweg und kartierter Parkgrenze."},{"id": "cafe-chrysander", "title": "Café Chrysander", "place": "Bergedorf", "category": "Gastronomie", "address": "Chrysanderstraße 61, 21029 Hamburg", "entityType": "Café", "lat": 53.4896203, "lon": 10.2152816, "coordinateSource": "https://www.openstreetmap.org/way/457971158", "description": "Café im Bergedorfer Schlosspark neben der Rollschuhbahn. Der Betreiber nennt Chrysanderstraße 61 und weist auf die Lage gegenüber Hausnummer 22 hin.", "details": {"Telefon": "040 380 736 57", "Aktuelle Angebote und Öffnungszeiten": "Bitte auf der Betreiberwebsite prüfen. Für Navigation nennt der Betreiber die gegenüberliegende Hausnummer 22 als Orientierung; der Kartenpunkt zeigt das Café mit Hausnummer 61."}, "source": "https://www.cafe-chrysander.de/kontakt/", "website": "https://www.cafe-chrysander.de/", "sources": [{"label": "Aktuelle Öffnungszeiten beim Café", "url": "https://www.cafe-chrysander.de/%C3%B6ffnungszeiten/"}], "relatedIds": ["schlosspark"], "origin": "editorial", "readerStatus": "released", "sourceStatus": "checked", "checked": "2026-10-19", "version": 1, "coordinateNote": "Am 19.10.2026 mit Originalquelle und einzelner OSM-Geometrie abgeglichen. OpenStreetMap-Mitwirkende, ODbL. OSM/Nominatim-Gebäudepunkt; Name, Straße und Hausnummer 61 stimmen mit Betreiberkontakt überein."}].map(r=>({...r,...quarterAssignments[r.id],details:{...r.details,...visits[r.id]?.details},sources:[...(r.sources||[]),...(visits[r.id]?.sources||[]),...(quarterAssignments[r.id]?[{label:"Belegte Quartierszuordnung",url:quarterAssignments[r.id].quarterSource,locator:quarterAssignments[r.id].quarterLocator}]:[])],readerStatus:'released',sourceStatus:'checked',checked:r.checked||'2026-10-18'}));}

// Edits are stored once in the private workspace and applied before either reader view.
export function editorialEntry(s,id){const key=String(id||'').replace(/^editorial-/,''),base=directoryResearch.find(r=>r.id===key);if(!base)return null;return {...base,...s.settings.researchEdits?.[key],...s.settings.researchStatus?.[key],id:key,version:s.settings.researchEdits?.[key]?.version||base.version||1};}
export function editorialVisible(s,id){const r=editorialEntry(s,id);return !!r&&s.settings.areas.verzeichnis.status!=='inactive'&&s.settings.areas.organisation.status!=='inactive'&&r.readerStatus==='released';}
