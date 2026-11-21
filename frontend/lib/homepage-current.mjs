import {eventOccurrences,eventSeriesById,berlinDate,validDate,eventZone} from './events.mjs';
import {isRetiredExampleDocument} from './examples.mjs';
import {readerDocuments} from './reader-select.mjs';

export const currentnessDefaults=Object.freeze({isCurrentTopic:false,eventDate:'',reason:''});
export const currentnessDurations=Object.freeze({politik:30,anliegen:14,erfahrung:14,geschichte:14,news:14,bericht:14,redaktion:14});

export function validateCurrentness(value={}){
 const v={...currentnessDefaults,...(value&&typeof value==='object'?value:{})},errors={};
 if(typeof v.isCurrentTopic!=='boolean')errors.isCurrentTopic='Bitte Ja oder Nein auswählen.';
 if(v.eventDate&&!validDate(v.eventDate))errors.eventDate='Bitte ein gültiges Datum angeben.';
 if(v.isCurrentTopic&&(!String(v.reason||'').trim()||String(v.reason).trim().length<10))errors.reason='Bitte beschreiben Sie die neue Entwicklung mit mindestens 10 Zeichen.';
 if(String(v.reason||'').length>2000)errors.reason='Die Beschreibung darf höchstens 2.000 Zeichen enthalten.';
 return errors;
}

export function berlinDay(value){
 if(typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value)&&validDate(value))return value;
 const date=value instanceof Date?value:new Date(value);
 return Number.isFinite(+date)?berlinDate(date):null;
}
export function addBerlinDays(day,days){
 if(!validDate(day)||!Number.isInteger(days))return null;
 const d=new Date(day+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+days);return d.toISOString().slice(0,10);
}
export function approvedEffectiveAt({alreadyPublished=false,material=false,priorEffectiveAt=null,firstPublishedAt=null},now){
 if(!alreadyPublished||material)return now;
 return priorEffectiveAt||firstPublishedAt||now;
}
function validInstant(value){return typeof value==='string'&&Number.isFinite(+new Date(value))&&/^\d{4}-\d{2}-\d{2}T/.test(value)}
function belongsToBergedorf(d){
 const district=String(d?.districtId||d?.published?.districtId||'');
 const text=[d?.published?.place,d?.published?.districtConnection,d?.published?.additionalDistricts].filter(Boolean).join(' ').toLocaleLowerCase('de');
 if(district&&district!=='bergedorf')return false;
 return district==='bergedorf'||/(bergedorf|lohbrügge|lohbruegge|allermöhe|allermoehe|billwerder|curslack|kirchwerder|moor fleet|neuallermöhe|neuallermoehe|ochsenwerder|reitbrook|spadenland|tatenberg|altengamme)/i.test(text);
}
function ageFor(d){
 if(d.kind==='politik')return 30;
 if(['anliegen','erfahrung','geschichte'].includes(d.kind))return 14;
 const kind=String(d.kind||'').toLocaleLowerCase('de');
 if(['news','bericht','redaktion','nachricht'].includes(kind))return 14;
 return null;
}
export function documentCurrentnessStatus(d,now=new Date(),highlight=null){
 const today=berlinDay(now),c=d?.publishedCurrentness,age=ageFor(d);
 if(!d?.published||d.hidden||d.withdrawn||d.origin==='example'||d.isExample||isRetiredExampleDocument(d)||!belongsToBergedorf(d)||!c?.isCurrentTopic||c.confirmed!==true||!validInstant(c.effectiveAt))return {eligible:false,reason:'missing-or-unconfirmed-prerequisite'};
 if(!today)return {eligible:false,reason:'invalid-current-date'};
 const expires=addBerlinDays(berlinDay(c.effectiveAt),age);
 const activeHighlight=!!(highlight&&highlight.documentId===d.id&&typeof highlight.reason==='string'&&highlight.reason.trim()&&typeof highlight.attributedTo==='string'&&highlight.attributedTo.trim()&&validDate(highlight.expiresOn)&&highlight.expiresOn>=today&&highlight.expiresOn<=addBerlinDays(today,30));
 if(!expires)return {eligible:false,reason:'unknown-content-type'};
 const within= today < expires;
 if(!within&&!activeHighlight)return {eligible:false,reason:'expired'};
 const happened=c.eventDate&&validDate(c.eventDate)?c.eventDate:null;
 const effectiveDate=berlinDay(c.effectiveAt);
 return {eligible:true,highlighted:activeHighlight,effectiveAt:c.effectiveAt,effectiveDate,eventDate:happened,expiresOn:activeHighlight?highlight.expiresOn:expires,reason:c.reason,highlightReason:activeHighlight?highlight.reason:'',highlightAttributedTo:activeHighlight?highlight.attributedTo:''};
}

export function eligibleHomepageDocuments(state,now=new Date()){
 const highlights=state?.settings?.homepageHighlights||{};
 const readable=new Set(readerDocuments(state).map(d=>d.id));
 return (state?.documents||[]).filter(d=>readable.has(d.id)).map(d=>({d,status:documentCurrentnessStatus(d,now,highlights[d.id])}))
  .filter(x=>x.status.eligible)
  .map(({d,status})=>({type:'document',id:d.id,kind:d.kind,title:d.published.title||'Beitrag',body:d.published.body||d.published.proposal||'',place:d.published.place||'Bergedorf',href:'#beitrag/'+encodeURIComponent(d.id),status,publishedAt:d.firstPublishedAt||d.publishedAt,updatedAt:d.publishedCurrentness?.effectiveAt,highlighted:status.highlighted}))
}
function eligibleEvents(now){
 const instant=now instanceof Date?now:new Date(now),today=berlinDate(instant);
 return eventOccurrences.filter(e=>{
  const s=eventSeriesById(e.seriesId),start=new Date(e.startsAt),end=new Date(e.endsAt);
  return s&&e.announcementStatus==='announced'&&e.district==='Bergedorf'&&validDate(e.checkedOn)&&e.checkedOn<=today&&/^https:\/\//.test(e.sourceUrl||'')&&Number.isFinite(+start)&&Number.isFinite(+end)&&+end>+instant;
 }).map(e=>{const s=eventSeriesById(e.seriesId);return {type:'event',id:e.id,kind:'Veranstaltung',title:s.title,body:s.description?.[0]||'',place:e.location,href:'#veranstaltungen/'+e.seriesId+'/'+e.date,startsAt:e.startsAt,endsAt:e.endsAt,checkedOn:e.checkedOn,sourceUrl:e.sourceUrl}});
}
export function homepageCurrentItems(state,now=new Date()){
 const items=[...eligibleHomepageDocuments(state,now),...eligibleEvents(now)];
 return items.sort((a,b)=>Number(!!b.highlighted)-Number(!!a.highlighted)||+new Date(b.updatedAt||b.publishedAt||b.startsAt)-+new Date(a.updatedAt||a.publishedAt||a.startsAt)||a.id.localeCompare(b.id)).slice(0,6);
}
export function formatBerlinDate(value){
 const d=new Date(value);if(!Number.isFinite(+d))return null;
 return new Intl.DateTimeFormat('de-DE',{timeZone:eventZone,day:'2-digit',month:'2-digit',year:'numeric'}).format(d);
}
export function eventDisplayDate(value){return new Intl.DateTimeFormat('de-DE',{timeZone:eventZone,day:'2-digit',month:'long',year:'numeric'}).format(new Date(value))}
export function eventDisplayTime(start,end){const f=new Intl.DateTimeFormat('de-DE',{timeZone:eventZone,hour:'2-digit',minute:'2-digit'});return `${f.format(new Date(start))}–${f.format(new Date(end))} Uhr`}
