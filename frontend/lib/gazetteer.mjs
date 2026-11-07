import {historicalNamePlace} from './history-geography.mjs';
import {placeRecords,canonicalPlace,gazetteerIds} from './place-records.mjs';
export const gazetteerEntries=gazetteerIds.map(canonicalPlace);
export const gazetteerById=canonicalPlace;
export const placeTypeLabel=p=>p?.kindLabel||(p?.type==='district'?'Amtlicher Stadtteil':p?.type==='historical'?'Historische Bezeichnung':p?.type==='area'?'Gebiet':'Quartier / örtliche Bezeichnung');
export const normalizePlaceSearch=s=>String(s||'').toLocaleLowerCase('de').normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/ß/g,'ss').replace(/ae/g,'a').replace(/oe/g,'o').replace(/ue/g,'u');
export function searchGazetteer(query='',district='',type=''){const q=normalizePlaceSearch(query.trim());return gazetteerEntries.filter(p=>(!district||p.districts.includes(district))&&(!type||p.kindLabel===type)&&(!q||normalizePlaceSearch([p.name,...p.aliases,p.kindLabel,...p.districts,p.historicalAffiliation,p.cadastre,p.location].join(' ')).includes(q)))}
export const extraDistricts=fields=>String(fields?.additionalDistricts||'').split('|').filter(Boolean);
export const contributionDistricts=fields=>[...new Set([fields?.place,...extraDistricts(fields)].filter(Boolean))];
export function fieldsReferToPlace(fields,id){if(!fields)return false;const p=gazetteerById(id);if(!p)return false;const ids=[fields.localPlaceId,fields.quarterId,fields.historicPlaceId].filter(Boolean);if(ids.map(x=>historicalNamePlace(x)?.id||x).includes(id)||ids.some(x=>gazetteerById(x)?.parent===id))return true;return p.type==='district'&&contributionDistricts(fields).includes(p.name)}
export function relatedPlaceIds(fields){return gazetteerEntries.filter(p=>fieldsReferToPlace(fields,p.id)).map(p=>p.id)}
export const placePageHref=id=>'#geschichte/orte/'+encodeURIComponent(id);
