import catalog from './events.json' with {type:'json'};
export const eventSeries=catalog.series,eventOccurrences=catalog.occurrences;
export const eventReviewMode='local-preview';
export const eventZone='Europe/Berlin';
export const reviewTextLimit=5000,reviewNameLimit=60;
export const ratingLabels=['Sehr schlecht','Schlecht','Mittelmäßig','Gut','Sehr gut'];
export const characters=value=>Array.from(String(value||'')).length;
export function berlinDate(now=new Date()){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:eventZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);return ['year','month','day'].map(k=>parts.find(p=>p.type===k).value).join('-')}
export function validDate(value){if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const d=new Date(value+'T12:00:00Z');return Number.isFinite(+d)&&d.toISOString().slice(0,10)===value}
export function eventCategory(event,now=new Date()){
 const start=new Date(event.startsAt),end=new Date(event.endsAt);
 if(!Number.isFinite(+start)||!Number.isFinite(+end)||+end<=+start)return 'unknown';
 if(+now>=+end)return 'past';
 if(berlinDate(start)<=berlinDate(now)&&berlinDate(end)>=berlinDate(now))return 'today';
 return +start>+now?'upcoming':'past';
}
export const categoryLabels={upcoming:'Bevorstehende Veranstaltungen',today:'Heute stattfindende Veranstaltungen',past:'Vergangene Veranstaltungen',unknown:'Zeitpunkt ungeklärt'};
export function eventHref(event){return '#veranstaltungen/'+event.seriesId+'/'+event.date}
export function eventByRoute(seriesId,date){return eventOccurrences.find(e=>e.seriesId===seriesId&&(!date||e.date===date))||null}
export function eventSeriesById(id){return eventSeries.find(s=>s.id===id)||null}
export function eventPrice(event){return event.priceEUR===null?'Preis nicht angegeben':event.priceEUR===0?'Kostenlos':new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(event.priceEUR)+' pro Person'}
export function eventDateLabel(event){return new Intl.DateTimeFormat('de-DE',{timeZone:eventZone,weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date(event.startsAt))}
export function eventTimeLabel(event){const f=new Intl.DateTimeFormat('de-DE',{timeZone:eventZone,hour:'2-digit',minute:'2-digit'});return f.format(new Date(event.startsAt))+'–'+f.format(new Date(event.endsAt))+' Uhr'}
export const eventFilterDefaults={q:'',period:'all',from:'',until:'',type:'',district:'',cost:''};
export function eventFilters(params={}){const f={...eventFilterDefaults};for(const key of Object.keys(f))if(typeof params[key]==='string')f[key]=params[key].slice(0,200);if(!['all','upcoming','today','past'].includes(f.period))f.period='all';if(!['','free','paid','unknown'].includes(f.cost))f.cost='';return f}
export function eventFilterErrors(filters){const errors={};for(const key of ['from','until'])if(filters[key]&&!validDate(filters[key]))errors[key]='Bitte ein gültiges Datum angeben.';if(!errors.from&&!errors.until&&filters.from&&filters.until&&filters.from>filters.until)errors.until='Das Enddatum muss am oder nach dem Anfangsdatum liegen.';return errors}
export function eventsHref(filters){const p=new URLSearchParams();for(const [key,value] of Object.entries(eventFilters(filters)))if(value&&value!==eventFilterDefaults[key])p.set(key,value);return '#veranstaltungen'+(p.size?'?'+p.toString():'')}
export function filterEvents(filters={},now=new Date(),entries=eventOccurrences){const f=eventFilters(filters);if(Object.keys(eventFilterErrors(f)).length)return [];const q=f.q.trim().toLocaleLowerCase('de');return entries.filter(e=>{const s=eventSeriesById(e.seriesId);return s&&(!q||[s.title,s.organizer,e.location,e.district,s.type].join(' ').toLocaleLowerCase('de').includes(q))&&(f.period==='all'||eventCategory(e,now)===f.period)&&(!f.from||berlinDate(new Date(e.endsAt))>=f.from)&&(!f.until||berlinDate(new Date(e.startsAt))<=f.until)&&(!f.type||s.type===f.type)&&(!f.district||e.district===f.district)&&(!f.cost||(f.cost==='unknown'?e.priceEUR===null:f.cost==='free'?e.priceEUR===0:typeof e.priceEUR==='number'&&e.priceEUR>0))}).sort((a,b)=>+new Date(a.startsAt)-+new Date(b.startsAt))}
export function validateEventReview(input,now=new Date()){
 input=input&&typeof input==='object'?input:{};const errors={};if(!eventSeriesById(input.seriesId))errors.seriesId='Diese Veranstaltungsreihe ist nicht vorhanden.';
 if(!/^[1-5]$/.test(String(input.rating||'')))errors.rating='Bitte eine Bewertung von einem bis fünf Sternen wählen.';
 if(typeof input.body!=='string'||characters(input.body.trim())<30)errors.body='Bitte die eigenen Erfahrungen mit mindestens 30 Zeichen beschreiben.';else if(characters(input.body)>reviewTextLimit)errors.body='Der Erfahrungsbericht darf höchstens 5.000 Zeichen enthalten.';
 if(characters(input.displayName)>reviewNameLimit)errors.displayName='Der Anzeigename darf höchstens 60 Zeichen enthalten.';
 for(const key of ['body','displayName'])if(/<\/?[a-z][^>]*>/i.test(String(input[key]||'')))errors[key]='Bitte nur einfachen Text ohne HTML-Tags eingeben.';
 if(!validDate(input.visitedOn))errors.visitedOn='Bitte ein gültiges Besuchsdatum angeben.';else if(input.visitedOn>berlinDate(now))errors.visitedOn='Das Besuchsdatum darf nicht in der Zukunft liegen.';
 if(input.participated!==true)errors.participated='Bitte die persönliche Teilnahme bestätigen. Dies bleibt eine Selbstauskunft.';
 return errors;
}
// Display contract for a future approved read API. No submission or persistence is connected.
export function approvedEventReviews(seriesId,records=catalog.publishedReviews,now=new Date()){
 if(!eventSeriesById(seriesId))return [];
 return records.filter(r=>r.seriesId===seriesId&&r.status==='approved'&&r.publicationApproved===true&&Number.isInteger(r.rating)&&r.rating>=1&&r.rating<=5&&typeof r.body==='string'&&r.body.trim()&&validDate(r.visitedOn)&&r.visitedOn<=berlinDate(now)&&typeof r.publishedAt==='string'&&Number.isFinite(+new Date(r.publishedAt))&&+new Date(r.publishedAt)<=+now);
}
export function eventReviewSummary(seriesId,records=catalog.publishedReviews,now=new Date()){const approved=approvedEventReviews(seriesId,records,now);return approved.length?{count:approved.length,average:approved.reduce((n,r)=>n+r.rating,0)/approved.length,asOf:now.toISOString()}:null}
