import {detailHref} from './navigation.mjs';
// Standorte werden ausschließlich aus veröffentlichten Einrichtungsdaten übernommen.
export const checkedMapPoint=r=>Number.isFinite(r?.lat)&&Number.isFinite(r?.lon)&&Math.abs(r.lat)<=90&&Math.abs(r.lon)<=180&&!!r.coordinateSource;
export function directoryMapModel(entries,from='#organisation'){
 const points=[],seen=new Set(),locatedIds=new Set();
 function add(record,parent){if(!checkedMapPoint(record)||seen.has(record.id))return;seen.add(record.id);locatedIds.add(parent.id);points.push({...record,listId:parent.id,title:record.locationTitle?record.title+' · '+record.locationTitle:record.title,href:detailHref(record.href,from)})}
 for(const entry of entries){
  if(entry.ownMatch===false&&entry.matchedOffers?.length){for(const offer of entry.matchedOffers)add(offer,entry);}
  else {add(entry,entry);for(const offer of entry.offers||[])if(offer.parentId&&(offer.lat!==entry.lat||offer.lon!==entry.lon))add(offer,entry);}
 }
 return {points,total:entries.length,located:locatedIds.size,pointCount:points.length,unlocated:entries.filter(r=>!locatedIds.has(r.id))};
}
export function listRevealPlan(entries,id,shown=12){const index=entries.findIndex(r=>r.id===id||r.offers?.some(o=>o.id===id));if(index<0)return null;return {id:entries[index].id,shown:Math.max(shown,Math.ceil((index+1)/12)*12)}}
export function selectedBounds(points){const values=points.filter(checkedMapPoint);return values.length?[[Math.min(...values.map(r=>r.lat)),Math.min(...values.map(r=>r.lon))],[Math.max(...values.map(r=>r.lat)),Math.max(...values.map(r=>r.lon))]]:null}
// Minimal rectangle calculated from /assets/bergedorf-boundary.geojson (LGV),
// only a viewport fallback when that polygon cannot be fetched; never a location.
export const districtBounds=[[53.3950302, 10.0510308], [53.5264135, 10.3252768]];
let pending='';
const storage=()=>{try{return globalThis.sessionStorage}catch{return null}};
export function pendingMapFocus(){try{return storage()?.getItem('bg-map-focus')||pending}catch{return pending}}
export function clearMapFocus(){pending='';try{storage()?.removeItem('bg-map-focus')}catch{}}
export function requestMapFocus(id){pending=id;try{storage()?.setItem('bg-map-focus',id)}catch{};if(typeof window!=='undefined')window.dispatchEvent(new CustomEvent('bg-map-focus',{detail:{id}}))}

// The Leaflet effect receives a serializable projection, including semantic WC
// and location-precision metadata. Do not drop these at the UI boundary.
export function mapRenderEntries(entries){return entries.filter(checkedMapPoint).map(r=>({id:r.id,listId:r.listId||r.id,title:r.title,address:r.address,category:r.category,href:r.href,lat:r.lat,lon:r.lon,coordinateSource:r.coordinateSource,wheelchairToilet:r.wheelchairToilet===true,mapPointScope:r.mapPointScope||'',locationChecked:r.locationChecked||'',wcHostId:r.wcHostId||'',wcHostKind:r.wcHostKind||'',wcHostName:r.wcHostName||'',toiletAccess:r.toiletAccess||null}))}
