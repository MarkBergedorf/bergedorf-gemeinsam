// Tab-local choices only: no identifier, cookie, account or server request.
export function createVisitChoice(key,storage,acceptedValue='yes'){
 const browserOnly=!storage;storage ||= ()=>typeof window==='undefined'?null:window.sessionStorage;
 let ready=false,value=false;const listeners=new Set();
 const get=()=>{if(browserOnly&&typeof window==='undefined')return false;if(!ready){ready=true;try{value=storage()?.getItem(key)===acceptedValue}catch{}}return value};
 const set=next=>{get();value=!!next;try{const s=storage();if(value)s?.setItem(key,acceptedValue);else s?.removeItem(key)}catch{}for(const listener of listeners)listener()};
 return {get,set,subscribe(listener){listeners.add(listener);return()=>listeners.delete(listener)}};
}
export const historyMapConsent=createVisitChoice('bg-history-map-consent',undefined,'map-privacy-v1');
export const historyMapView=createVisitChoice('bg-history-map-view');

export function resolveHistoryMapView(view,remembered=false){return view==='map'||view!=='list'&&remembered}

export const organisationMapConsent=createVisitChoice('bg-map-consent',undefined,'map-privacy-v1');
