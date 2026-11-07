import {documentBorough,boroughActive} from './boroughs.mjs';
import {isRetiredExampleDocument} from './examples.mjs';
export function readerDocuments(s,area='alle',query='',order='new',districtId='bergedorf'){
 return s.documents.filter(d=>documentBorough(d)===districtId&&boroughActive(s,districtId)&&!isRetiredExampleDocument(d)&&d.origin!=='example'&&!d.isExample&&d.published&&!d.hidden&&!d.withdrawn&&s.settings.areas[d.kind]?.status!=='inactive'&&(['start','alle'].includes(area)||d.kind===area)&&(!query||`${d.published.title} ${d.published.body} ${d.published.place} ${d.published.topic}`.toLowerCase().includes(query.toLowerCase()))).sort((a,b)=>order==='time'?(a.published.precision==='unbekannt'?Infinity:Number(a.published.year||Infinity))-(b.published.precision==='unbekannt'?Infinity:Number(b.published.year||Infinity))||a.id.localeCompare(b.id):String(b.publishedAt).localeCompare(String(a.publishedAt))||a.id.localeCompare(b.id));
}
// Never substitute creation/update dates for the first approval.
export function firstApprovedAt(d){
 if(d.firstPublishedAt)return d.firstPublishedAt;
 if((d.history||[]).length>=3)return null;
 const first=(d.history||[]).filter(h=>h.version===1&&h.publishedAt).map(h=>h.publishedAt).sort()[0];
 if(first)return first;
 if(d.version===1&&!(d.history||[]).length)return d.publishedAt||null;
 return null;
}
export const homepageDefaults={limit:6,order:'first-approved-desc'};
export function homepageSettings(s){return {...homepageDefaults,...s.settings.homepage}}
export function homepageDocuments(s){const config=homepageSettings(s);return readerDocuments(s).sort((a,b)=>{const x=firstApprovedAt(a),y=firstApprovedAt(b);if(!x&&!y)return a.id.localeCompare(b.id);if(!x)return 1;if(!y)return -1;return (config.order==='first-approved-asc'?x.localeCompare(y):y.localeCompare(x))||a.id.localeCompare(b.id)}).slice(0,config.limit)}

export const politicalHomepageDefaults={limit:3,order:'first-approved-desc'};
export function politicalHomepageSettings(s){return {...politicalHomepageDefaults,...s.settings.politicalHomepage}}
export function politicalDocuments(s,{home=false}={}){const config=politicalHomepageSettings(s);const docs=readerDocuments(s,'politik').sort((a,b)=>{const x=firstApprovedAt(a),y=firstApprovedAt(b);if(!x&&!y)return a.id.localeCompare(b.id);if(!x)return 1;if(!y)return -1;return (config.order==='first-approved-asc'?x.localeCompare(y):y.localeCompare(x))||a.id.localeCompare(b.id)});return home?docs.slice(0,config.limit):docs}
