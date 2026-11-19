import guide from './rent-guide-data.json' with {type:'json'};
export {guide};
export const rentTopics=[
 {id:'miete',title:'Welche Miete wird übernommen?',description:'Mietrichtwerte, Bruttokaltmiete, Heizkosten, Wohnungsgröße und Zuschläge.',sections:[1,2,3,4,5]},
 {id:'karenzzeit',title:'Karenzzeit und Mietobergrenzen',description:'150-Prozent-Regel, Ausnahmen und der Unterschied zwischen Bleiben und Umziehen.',sections:[6,7,8]},
 {id:'bleiben',title:'Kann ich in meiner Wohnung bleiben?',description:'Kostensenkung, Gesundheit, Behinderung, Pflege und soziale Bindungen.',sections:[9,10,11]},
 {id:'wirtschaftlichkeit',title:'Wann ist ein Umzug unwirtschaftlich?',description:'Hamburger 36-Monats-Prüfung, 20-Prozent-Regel und vollständige Rechenbeispiele.',sections:[12,13,14]},
 {id:'umzug',title:'Wer bezahlt meinen Umzug?',description:'Eigenhilfe, Unternehmen, mehrtägige Komplettumzüge, Verpacken und Montage.',sections:[15,16,17,18,19]},
 {id:'renovierung',title:'Renovierung und weitere Wohnkosten',description:'Handwerker, Kaution, Genossenschaftsanteile, Doppelmiete und Zuständigkeiten.',sections:[20,21,22,23,24,25]},
 {id:'urteile',title:'Urteile und Rechtsprechung',description:'Kassel, Stade, Hamburg, München und weitere Entscheidungen mit ihren Grenzen.',sections:[26,27,28,29,30]},
 {id:'handeln',title:'Was kann ich konkret tun?',description:'Nachweise, Zusicherungen, Widerspruch, Klage und dringender Eilrechtsschutz.',sections:[31,32,33,34,35,36,37]}
];
export const rentValues=[['1 Person',574],['2 Personen',697.8],['3 Personen',860.25],['4 Personen',1036.8],['5 Personen',1480.5],['6 Personen',1668],['Jede weitere Person',208.5]];
export const rentHref={overview:'#mietkosten/uebersicht',chapter:n=>'#mietkosten/abschnitt/'+n,topic:id=>'#mietkosten/thema/'+id,sources:'#mietkosten/quellen',faq:'#mietkosten/fragen'};
export function rentNavigationTarget(hash){const [path]=hash.split('?');const parts=path.replace(/^#/,'').split('/');if(parts[0]!=='mietkosten')return null;if(parts[1]==='abschnitt'&&/^\d+$/.test(parts[2]||'')&&guide.sections.some(s=>s.number===+parts[2]))return 'rent-section-'+(+parts[2]);if(parts[1]==='thema'&&rentTopics.some(t=>t.id===parts[2]))return 'rent-topic-'+parts[2];return ({einleitung:'rent-original-intro',redaktion:'rent-editorial',uebersicht:'rent-overview',quellen:'rent-sources',fragen:'rent-faq'})[parts[1]]||'rent-title'}
const normalize=s=>s.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss');
export function searchRentGuide(query){const words=normalize(query.trim()).split(/\s+/).filter(Boolean);if(!words.length)return [];return guide.sections.filter(s=>{const text=normalize(s.title+' '+JSON.stringify(s.blocks));return words.every(w=>text.includes(w))}).map(s=>({number:s.number,title:s.title,href:rentHref.chapter(s.number)}))}
