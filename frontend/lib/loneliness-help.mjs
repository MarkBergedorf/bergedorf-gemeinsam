import offers from './loneliness-help.json' with {type:'json'};
export const lonelinessHelpOffers=offers;
export const lonelinessHelpKinds=[...new Set(offers.flatMap(o=>o.kind))].sort((a,b)=>a.localeCompare(b,'de'));
const normalize=value=>String(value).normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
export function filterLonelinessHelp({query='',kind='',freeOnly=false,homeOnly=false}={}){
 const words=normalize(query).trim().split(/\s+/).filter(Boolean);
 return offers.filter(o=>(!kind||o.kind.includes(kind))&&(!freeOnly||o.free===true)&&(!homeOnly||o.homeVisit===true)&&words.every(w=>normalize([o.name,o.provider,o.support,o.area,o.address,...o.kind].join(' ')).includes(w)));
}
export function lonelinessHelpText(id){return ['hilfe','t7-5'].includes(id)?offers.map(o=>[o.name,o.provider,o.support,o.area,...o.kind].join(' ')).join(' '):'';}
