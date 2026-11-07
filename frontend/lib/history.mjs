export const memoryNotice='Hier ist Platz für positive persönliche Erinnerungen an Bergedorf. Berichte über Gewalttaten, Konflikte oder andere Ärgernisse gehören nicht in diesen Bereich. Nutzen Sie dafür den Bereich Politik.';
export const historyTypes={historical:'Geschichte – historischer Beitrag mit Quellen',memory:'Persönliche Erinnerung'};
export function historyPoint(fields={}){if(fields.historyLat===''||fields.historyLon===''||fields.historyLat==null||fields.historyLon==null)return null;const lat=Number(fields.historyLat),lon=Number(fields.historyLon);return Number.isFinite(lat)&&Number.isFinite(lon)&&lat>=53.35&&lat<=53.75&&lon>=9.7&&lon<=10.5?{lat,lon}:null}
export function historyPoints(documents=[]){return documents.filter(d=>d.kind==='geschichte'&&d.published&&!d.hidden&&!d.withdrawn&&!d.retiredExample).flatMap(d=>{const point=historyPoint(d.published);return point?[{...point,id:d.id,title:d.published.title,version:d.version,localWay:localWay(d.published)}]:[]})}

export const localWayNotice='Örtlich überlieferte Bezeichnung · keine amtliche Benennung';
export function localWay(fields={}){return fields.historyType==='memory'&&fields.localWayName?.trim()?{name:fields.localWayName,source:fields.localWaySource||'',period:fields.localWayPeriod||''}:null}
