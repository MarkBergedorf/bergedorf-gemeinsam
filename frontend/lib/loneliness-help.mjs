import offers from './loneliness-help.json' with {type:'json'};
export const lonelinessHelpOffers=offers;
export const lonelinessHelpKinds=[...new Set(offers.flatMap(o=>o.kind))].sort((a,b)=>a.localeCompare(b,'de'));
export const lonelinessHelpSituations=[
 {id:'start',label:'Ich fühle mich einsam und weiß nicht, wo ich anfangen soll.',ids:['begleiter','spdi','telefonseelsorge','kiss'],note:'Allgemeine Gesprächs- und Beratungszugänge; keine individuelle Diagnose oder Vermittlung.'},
 {id:'talk',label:'Ich möchte mit jemandem sprechen.',ids:['telefonseelsorge','begleiter','spdi'],note:'Telefonische und psychosoziale Zugänge; Erreichbarkeit und Zuständigkeit bitte beim Anbieter prüfen.'},
 {id:'people',label:'Ich möchte neue Menschen kennenlernen.',ids:['begleiter-gruppen','kiss','caritas'],note:'Gruppen- und Selbsthilfezugänge; konkrete Termine und freie Plätze sind nicht zugesichert.'},
 {id:'interests',label:'Ich suche Menschen mit ähnlichen Interessen.',ids:['kiss','begleiter-gruppen'],note:'Die Übersicht bestätigt keine bestimmte Interessengruppe oder deren aktuellen Platzstand.'},
 {id:'first-visit',label:'Ich traue mich nicht, allein irgendwo hinzugehen.',ids:['begleiter-gruppen','drk','senioren','kiss'],note:'Fragen Sie den Anbieter vorab, ob ein erster Besuch begleitet oder vorbereitet werden kann; die Website leistet keine Begleitung.'},
 {id:'home',label:'Ich kann meine Wohnung kaum verlassen.',ids:['drk','pflege','spdi','hospiz','koerperberatung'],note:'Nur beim einzelnen Eintrag bestätigte Hausbesuchsangaben beachten. Eine telefonische Erreichbarkeit bedeutet keinen Hausbesuch.'},
 {id:'not-fit',label:'Ich habe ein Angebot besucht, mich dort aber nicht wohlgefühlt.',ids:['begleiter','kiss','telefonseelsorge'],note:'Ein einzelner ungeeigneter Besuch schließt andere Zugänge nicht aus; eine passende Alternative kann der jeweilige Anbieter klären.'},
 {id:'work',label:'Ich bin berufstätig und fühle mich trotzdem einsam.',ids:['begleiter','kiss','telefonseelsorge'],note:'Ein spezialisiertes Bergedorfer Arbeitsplatzangebot ist in dieser Übersicht nicht bestätigt.'},
 {id:'care',label:'Ich pflege einen Angehörigen und habe kaum noch soziale Kontakte.',ids:['pflege','kiss','hospiz'],note:'Zuständigkeit, Entlastungsangebote und aktuelle Gruppen bitte direkt erfragen.'},
 {id:'single-parent',label:'Ich bin alleinerziehend.',ids:['familie','kiss','sozial'],note:'Die Einträge bieten Orientierung zu Familie und Beratung; kein bestimmter Gruppenplatz wird zugesagt.'},
 {id:'new',label:'Ich bin neu in Bergedorf.',ids:['caritas','begleiter-gruppen','kiss','sozial'],note:'Die Auswahl ist kein vollständiger Willkommens- oder Stadtteilservice.'},
 {id:'bereavement',label:'Ich habe einen nahestehenden Menschen verloren.',ids:['hospiz','telefonseelsorge','spdi'],note:'Trauerangebote und Beratungszugänge unterscheiden sich; Aufnahme und Termine bitte direkt beim Anbieter klären.'},
 {id:'health',label:'Ich lebe mit gesundheitlichen Einschränkungen.',ids:['koerperberatung','eutb','pflege','spdi','hospiz'],note:'Keine medizinische Einschätzung; bei akuter Gefahr gelten die Hinweise im Bereich Hilfe.'},
 {id:'meaning',label:'Ich möchte eine sinnvolle Aufgabe übernehmen.',ids:['begleiter-gruppen','senioren','kiss'],note:'Für aktuelle freiwillige Einsatzmöglichkeiten ist die Freiwilligenagentur Bergedorf ein bestehender direkter Zugang.'},
 {id:'volunteer',label:'Ich möchte mich ehrenamtlich engagieren.',ids:['begleiter-gruppen','senioren'],note:'Die Plattform vermittelt nicht. Aktuelle Einsatzmöglichkeiten direkt bei der Freiwilligenagentur prüfen.',link:{label:'Freiwilligenagentur Hamburg-Bergedorf',href:'https://www.freiwilligen-agentur-bergedorf.de/freiwillige/come-and-take-part/'}},
 {id:'concern',label:'Ich mache mir Sorgen um einen anderen Menschen.',ids:['spdi','telefonseelsorge','senioren','pflege'],note:'Bei akuter Lebensgefahr sofort 112; die Website ist kein Krisendienst.'},
 {id:'professional',label:'Ich benötige professionelle Unterstützung.',ids:['spdi','begleiter','familie','jpd','opfer','kodrobs','eutb','koerperberatung','sozial'],note:'Wählen Sie Zuständigkeit und Aufnahmebedingungen nach dem konkreten Anliegen direkt mit dem Anbieter.'}
];
export function lonelinessHelpSituation(id){return lonelinessHelpSituations.find(x=>x.id===id)||null;}
const normalize=value=>String(value).normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
export function filterLonelinessHelp({query='',kind='',freeOnly=false,homeOnly=false}={}){
 const words=normalize(query).trim().split(/\s+/).filter(Boolean);
 return offers.filter(o=>(!kind||o.kind.includes(kind))&&(!freeOnly||o.free===true)&&(!homeOnly||o.homeVisit===true)&&words.every(w=>normalize([o.name,o.provider,o.support,o.area,o.address,...o.kind].join(' ')).includes(w)));
}
export function lonelinessHelpText(id){return ['hilfe','t7-5'].includes(id)?offers.map(o=>[o.name,o.provider,o.support,o.area,...o.kind].join(' ')).join(' '):'';}
