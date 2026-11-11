// Only confirmed topics belong in this public tree. Source inventory is editorial,
// deliberately outside the frontend bundle. Add children only from the agreed concept.
export const lonelinessRoute='#einsamkeit';
export const lonelinessGroups=[
 {id:'wissen',title:'Wissen und Zusammenhänge'},
 {id:'kontakte',title:'Kontakte, Begegnungen und praktische Hilfe'},
 {id:'bergedorf',title:'Bergedorf und gesellschaftliches Engagement'},
 {id:'verantwortung',title:'Bündnis, Politik und Dokumentation'}
];
const topic=(id,title,description,group)=>({id,title,description,group,content:'',children:[]});
export const lonelinessTopics=[
 topic('verstehen','Einsamkeit verstehen','Hier ist Raum für Begriffe, unterschiedliche Erfahrungen und die Abgrenzung zu Alleinsein und sozialer Isolation.','wissen'),
 topic('ursachen','Warum entsteht Einsamkeit?','Dieser Themenbereich ist für persönliche, gesellschaftliche und örtliche Zusammenhänge vorgesehen.','wissen'),
 topic('kennenlernen','Was ist ein gesundes Kennenlernen?','Hier sollen Fragen zu freiwilligem, respektvollem Kennenlernen und zwischenmenschlichen Beziehungen behandelt werden.','kontakte'),
 topic('lebenssituationen','Einsamkeit in unterschiedlichen Lebensphasen und Lebenssituationen','Ein eigener Zugang für die unterschiedlichen Lebensphasen und Lebenssituationen der Menschen.','wissen'),
 topic('gesundheit','Einsamkeit und Gesundheit','Hier werden die Fragen zum Zusammenhang von Einsamkeit und Gesundheit redaktionell aufgearbeitet.','wissen'),
 topic('selbst-aktiv-werden','Was kann ich selbst gegen Einsamkeit tun?','Dieser Bereich ist für persönliche Handlungsmöglichkeiten und erste Schritte zu Kontakten vorgesehen.','kontakte'),
 topic('hilfe','Hilfe, Beratung und Unterstützung finden','Der direkte Einstieg für Menschen, die Kontakte, Beratung oder Unterstützung suchen. Geprüfte Anlaufstellen werden noch ergänzt.','kontakte'),
 topic('begegnung','Begegnung und Gemeinschaft im Alltag','Hier sollen Möglichkeiten für Begegnungen, Nachbarschaft und gemeinsame Aktivitäten zusammenkommen.','kontakte'),
 topic('begegnungsstaette','Wie gründe ich eine Begegnungsstätte, die von allen Gruppen der Gesellschaft besucht wird?','Ein eigener Themenbereich für die Planung einer offenen Begegnungsstätte und die dafür zu klärenden Voraussetzungen.','kontakte'),
 topic('stadtteile','Einsamkeit in Bergedorf – Stadtteile und örtliche Lebensbedingungen','Dieser Bereich richtet den Blick auf die Stadtteile und die örtlichen Lebensbedingungen im Bezirk Bergedorf.','bergedorf'),
 topic('netzwerke','Organisationen, Einrichtungen und Netzwerke','Hier ist die redaktionelle Übersicht zu Organisationen, Einrichtungen und ihrer Zusammenarbeit vorgesehen.','bergedorf'),
 topic('menschen-erreichen','Menschen erreichen, die bisher keine Angebote nutzen','Dieser Themenbereich ist für Zugangswege, Ansprache und bislang nicht erreichte Menschen vorgesehen.','bergedorf'),
 topic('forschung','Wissenschaft, Forschung und Wirksamkeit','Hier sollen wissenschaftliche Grundlagen und die Prüfung der Wirksamkeit von Maßnahmen nachvollziehbar werden.','wissen'),
 topic('buendnis','Das Hamburger Bündnis gegen Einsamkeit','Ein eigener Zugang zu den noch zu prüfenden Informationen über das Hamburger Bündnis und seinen Prozess.','verantwortung'),
 topic('politik','Politik, Strategien und öffentliche Verantwortung','Hier werden politische Zuständigkeiten, Strategien und öffentliche Verantwortung thematisch eingeordnet.','verantwortung'),
 topic('digital','Digitale Beziehungen, Medien und neue Technologien','Dieser Bereich ist für digitale Kontakte, Medien und neue Technologien vorgesehen.','wissen'),
 topic('mitwirkung','Veranstaltungen, Projekte und Mitwirkung','Hier sollen überprüfte Informationen zu Veranstaltungen, Projekten und Möglichkeiten der Mitwirkung stehen.','bergedorf'),
 topic('quellen','Quellen, Dokumentation und Transparenz','Hier wird die Grundlage für nachvollziehbare Quellen, redaktionelle Prüfungen und einen transparenten Projektstand geschaffen.','verantwortung')
];
export function buildTopicIndex(topics=lonelinessTopics){
 const entries=[];const seen=new Set();
 function walk(nodes,parents=[]){for(const node of nodes){if(!node.id||node.id.includes('/')||seen.has(node.id))throw Error('Ungültige oder doppelte Themen-ID');seen.add(node.id);const path=[...parents.map(p=>p.id),node.id];const entry={...node,path,parents,href:lonelinessRoute+'/'+path.map(encodeURIComponent).join('/')};entries.push(entry);walk(node.children||[],[...parents,entry]);}}
 walk(topics);return entries;
}
export const lonelinessIndex=buildTopicIndex();
export function resolveLonelinessPath(parts=[],index=lonelinessIndex){return index.find(n=>n.path.length===parts.length&&n.path.every((p,i)=>p===parts[i]))||null;}
export function lonelinessParentHref(node){return node?.parents.at(-1)?.href||lonelinessRoute;}
export function lonelinessBreadcrumbs(node){return [{title:'Einsamkeit in Bergedorf',href:lonelinessRoute},...(node?[...node.parents,node].map(n=>({title:n.title,href:n.href})):[])];}
const normalize=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('de');
export function searchLoneliness(query,index=lonelinessIndex){const words=normalize(query).trim().split(/\s+/).filter(Boolean);return words.length?index.filter(n=>{const text=normalize([n.title,n.description,n.content].join(' '));return words.every(w=>text.includes(w));}):[];}
export function lonelinessSearchHref(query){const q=String(query||'').trim().slice(0,300);return lonelinessRoute+(q?'?'+new URLSearchParams({q}).toString():'');}
