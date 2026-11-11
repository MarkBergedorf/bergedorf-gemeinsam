// Public hierarchy only; the editorial source inventory stays outside this bundle.
export const lonelinessRoute='#einsamkeit';
export const lonelinessGroups=[
 {id:'wissen',title:'Wissen und Zusammenhänge'},
 {id:'kontakte',title:'Kontakte, Begegnungen und praktische Hilfe'},
 {id:'bergedorf',title:'Bergedorf und gesellschaftliches Engagement'},
 {id:'verantwortung',title:'Bündnis, Politik und Dokumentation'}
];
// Versioned hierarchy from docs/einsamkeit/gesamtkonzeption.md.
export {default as lonelinessTopics} from './loneliness-topics.json' with {type:'json'};
import lonelinessTopics from './loneliness-topics.json' with {type:'json'};
// A future historical place has one canonical record, referenced from both branches.
export const lonelinessHistoricalPlaces=[];
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
