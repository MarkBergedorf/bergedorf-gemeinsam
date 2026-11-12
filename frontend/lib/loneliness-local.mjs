import places from './historical-places-4.json' with {type:'json'};
import media from './historical-media-4.json' with {type:'json'};
import sourceRows from './historical-sources-4.json' with {type:'json'};
import districts from './loneliness-districts-4.json' with {type:'json'};
const sources=Array.isArray(sourceRows)?Object.fromEntries(sourceRows.map(s=>[s.id,s])):sourceRows;
export {places as historicalPlaces,media as historicalMedia,sources as historicalSources,districts as lonelinessDistricts};
export const historicalBase='#einsamkeit/stadtteile/t10-6';
export const districtBase='#einsamkeit/stadtteile/t10-2';
export const historicalPlaceHref=id=>historicalBase+'?'+new URLSearchParams({ort:id});
export const districtHref=id=>districtBase+'?'+new URLSearchParams({stadtteil:id});
export const historicalPlaceById=id=>places.find(p=>p.id===id)||null;
export const districtById=id=>districts.find(p=>p.id===id)||null;
export const mediaByNumber=n=>media.find(m=>m.numbers.includes(n))||null;
export const publishableMedia=items=>items.filter(m=>m.rightsStatus==='approved'&&typeof m.publicFile==='string'&&m.publicFile.startsWith('/bergedorf-gemeinsam/')&&m.alt&&m.sourceUrl&&m.credit);
const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('de');
export function filterHistoricalPlaces({query='',includeResearch=false}={}){const words=normalize(query).trim().split(/\s+/).filter(Boolean);return places.filter(p=>(includeResearch||p.evidenceLevel==='independent')&&words.every(w=>normalize([p.name,...p.aliases,p.address,p.district,p.kind,p.socialFunction,...p.phases.map(phase=>phase.period)].join(' ')).includes(w)));}
export function historicalSearchText(id){return ['t10-6','t2-5','t2-5-1','t2-5-2','t2-5-3','t2-5-4','t2-5-5','t2-5-6'].includes(id)?places.map(p=>[p.name,...p.aliases,p.address,p.socialFunction].join(' ')).join(' '):'';}
export function districtSearchText(id){return id==='t10-2'?districts.map(d=>[d.title,d.intro,...d.sections.flatMap(s=>[s.title,...s.paragraphs.map(p=>p.text)])].join(' ')).join(' '):'';}
export const meetingCommentLimit=500;
export function validateMeetingComment(v){if(typeof v!=='string'||!v.trim())return 'Bitte geben Sie einen Kommentartext ein.';return v.length>meetingCommentLimit?'Bitte kürzen Sie den Text auf höchstens 500 Zeichen.':'';}
export function resolveLocalView(nodeId,params={}){const place=nodeId==='t10-6'?historicalPlaceById(params.ort):null,district=nodeId==='t10-2'?districtById(params.stadtteil):null,invalid=Boolean((nodeId==='t10-6'&&params.ort&&!place)||(nodeId==='t10-2'&&params.stadtteil&&!district));return {place,district,invalid,title:place?.name||district?.title,href:place?historicalPlaceHref(place.id):district?districtHref(district.id):'',parent:nodeId==='t10-6'?historicalBase:districtBase};}
