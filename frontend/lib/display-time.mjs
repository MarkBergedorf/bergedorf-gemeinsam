const full=new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
export function displayTime(value){
 if(typeof value!=='string'||!value)return 'Nicht gespeichert';
 if(/^\d{4}-\d{2}-\d{2}$/.test(value)){const [y,m,d]=value.split('-');return `${d}.${m}.${y} (Uhrzeit nicht gespeichert)`}
 if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value)||!Number.isFinite(Date.parse(value)))return 'Kein eindeutiger Zeitpunkt gespeichert';
 return full.format(new Date(value))+' Uhr';
}
export const timeFields=[['created','Erstellt'],['updated','Geändert'],['submittedAt','Zur Prüfung eingereicht'],['firstPublishedAt','Erstmals freigegeben'],['firstApprovedAt','Erstmals freigegeben'],['publishedAt','Freigegeben'],['decidedAt','Entschieden'],['decisionAt','Entschieden'],['closedAt','Abgeschlossen'],['closedOn','Dokumentiertes Abschlussdatum'],['reopenedAt','Wieder geöffnet'],['receivedOn','Dokumentierter Eingang'],['completedOn','Dokumentierter Abschluss'],['informedOn','Information mitgeteilt'],['extensionNotifiedOn','Fristverlängerung mitgeteilt'],['sentAt','Versandt'],['verifiedAt','Geprüft'],['checked','Prüfstand'],['lastConfirmedAt','Zuletzt bestätigt'],['withdrawnAt','Zurückgezogen'],['consentWithdrawnAt','Einwilligung widerrufen'],['deletedAt','Gelöscht'],['at','Zeitpunkt']];
// Deduplicate aliases of the same event only; creation/change/decision remain distinct.
const sameInstant=(a,b)=>!!a&&!!b&&(a===b||(/T/.test(a)&&/T/.test(b)&&Number.isFinite(Date.parse(a))&&Date.parse(a)===Date.parse(b)));
export function itemTimes(item={}){
 let entries=timeFields.filter(([key])=>item[key]).map(([key,label])=>({key,label,value:item[key]}));
 if(sameInstant(item.firstPublishedAt,item.firstApprovedAt))entries=entries.filter(e=>e.key!=='firstApprovedAt');
 const first=entries.find(e=>e.key==='firstPublishedAt'||e.key==='firstApprovedAt');
 if(first&&Number(item.version)===1&&sameInstant(first.value,item.publishedAt)){
  entries=entries.filter(e=>e.key!=='publishedAt');first.label='Erste Freigabe · Fassung 1';
 }else for(const entry of entries)if(entry.key==='publishedAt'&&item.version)entry.label='Freigabe · Fassung '+item.version;
 if(item.reviewDecision?.reviewedAt&&!entries.some(e=>['decidedAt','decisionAt'].includes(e.key)&&sameInstant(e.value,item.reviewDecision.reviewedAt)))entries.push({key:'reviewedAt',label:'Prüfentscheidung',value:item.reviewDecision.reviewedAt});
 if(sameInstant(item.decidedAt,item.decisionAt))entries=entries.filter(e=>e.key!=='decisionAt');
 return entries;
}
