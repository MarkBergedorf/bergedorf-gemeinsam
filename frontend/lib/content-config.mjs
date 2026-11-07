export const textLimits={title:50,districtConnection:1000,body:5000,problem:3000,change:1000,benefit:1500};
export const characterCount=value=>Array.from(String(value||'')).length;
export function fieldLimitError(key,value,kind){const max=key==='title'&&['organisation','verzeichnis'].includes(kind)?0:textLimits[key];return max&&characterCount(value)>max?`Höchstens ${max.toLocaleString('de-DE')} Zeichen einschließlich Leerzeichen. Der vorhandene Text bleibt erhalten; bitte kürzen Sie ihn vor dem Speichern.`:''}
const civic=[['transport','Verkehr & Mobilität'],['housing','Wohnen'],['public-space','Öffentlicher Raum'],['environment','Umwelt'],['social','Soziales'],['health','Gesundheit & Pflege'],['education','Bildung'],['culture','Kultur'],['administration','Verwaltung & Bürgerdienste'],['other','Sonstiges']];
const institutions=[['wheelchair-toilets','Rollstuhlgerechte Toiletten'],['parks','Parkanlagen'],['shipping','Schifffahrt & Fähren'],['gastronomy','Gastronomie'],['museums','Museen & Geschichte'],['rooms','Räume & Veranstaltungsorte'],['meeting','Begegnungsstätten'],['public','Politik & öffentliche Einrichtungen'],['authorities','Behörden & Dienststellen'],['social-services','Soziale Anlaufstellen'],['police','Polizei'],['fire','Feuerwehr'],['hospital','Krankenhaus'],['care','Stationäre Pflege'],['ambulatory-care','Ambulante Pflege'],['retail','Geschäfte & Einzelhandel'],['craft','Handwerk'],['services','Dienstleistungen'],['christian','Kirchen und christliche Gemeinden'],['muslim','Moscheen und muslimische Gemeinden'],['religion-other','Weitere Religionsgemeinschaften'],['other','Sonstiges']];
const records=items=>items.map(([id,label])=>({id,label,active:true}));
export const categoryDefaults={anliegen:records(civic),politik:records(civic),erfahrung:records([['everyday','Alltag im Bezirk'],...civic]),geschichte:records([['daily-history','Alltagsgeschichte'],['local-history','Ortsgeschichte'],['people','Menschen & Lebenswege'],['buildings','Gebäude & Orte'],['other','Sonstiges']]),verzeichnis:records(institutions),organisation:records(institutions)};
export const categoryArea=area=>area==='organisation'?'verzeichnis':area;
export function categoriesFor(state,area,{includeInactive=false}={}){const key=categoryArea(area);const existing=state?.settings?.categories?.[key]||categoryDefaults[key]||[];const additions=key==='verzeichnis'?(categoryDefaults[key]||[]).filter(c=>['parks','shipping','gastronomy','wheelchair-toilets','ambulatory-care','retail','craft','services'].includes(c.id)&&!existing.some(old=>old.id===c.id||old.label?.trim().toLocaleLowerCase('de-DE')===c.label.toLocaleLowerCase('de-DE'))):[];return [...existing,...additions].filter(c=>includeInactive||c.active!==false)}
export function categoryLabel(state,area,id){return categoriesFor(state,area,{includeInactive:true}).find(c=>c.id===id)?.label||''}
export function editorialCategoryId(state,label){return categoryDefaults.verzeichnis.find(c=>c.label===label)?.id||categoriesFor(state,'verzeichnis',{includeInactive:true}).find(c=>c.label===label)?.id||''}
export function normalizeCategories(old,input){if(!Array.isArray(input)||input.length>80)throw Error('Eine Kategorienliste mit höchstens 80 Einträgen ist erforderlich.');const seen=new Set();const next=input.map(c=>{if(!c||!/^[-a-z0-9]{1,60}$/.test(c.id)||seen.has(c.id)||typeof c.label!=='string'||!c.label.trim()||c.label.length>100)throw Error('Jede Kategorie benötigt eine eindeutige stabile Kennung und eine kurze Beschriftung.');seen.add(c.id);return {id:c.id,label:c.label.trim(),active:c.active!==false}});return [...next,...old.filter(c=>!seen.has(c.id)).map(c=>({...c,active:false}))]}

// Count Unicode code points after trimming boundary whitespace, identically in
// browser and server. No UTF-16 maxlength and no silent truncation.
export const participationLimits={comment:{min:150,max:2000},report:{min:100,max:1500}};
export function participationText(kind,value){
 const {min,max}=participationLimits[kind];
 if(typeof value!=='string')return {text:'',count:0,min,max,error:'Bitte geben Sie einen Text ein.'};
 const text=value.trim(),count=characterCount(text),label=kind==='comment'?'Der Kommentar':'Die Begründung der Meldung';
 const error=/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)?'Bitte entfernen Sie unzulässige Steuerzeichen.':count<min?`${label} benötigt mindestens ${min.toLocaleString('de-DE')} Zeichen. Führender und nachfolgender Leerraum zählen nicht mit.`:count>max?`${label} darf höchstens ${max.toLocaleString('de-DE')} Zeichen enthalten. Ihr Text bleibt erhalten; bitte kürzen Sie ihn.`:'';
 return {text,count,min,max,error};
}

export const citizenAreas=['anliegen','erfahrung','geschichte','politik'];
export const contributionPlaceholders={sources:'Verlinken Sie hier Quellen, die Angaben in Ihrem Beitrag belegen. Quellenlinks sind freiwillig.',problem:'Beschreiben Sie das Problem. Falls kein Problem vorliegt, schreiben Sie: Es liegt kein Problem vor.',change:'Welche Änderung wünschen oder erhoffen Sie sich durch Ihren Beitrag?',benefit:'Welchen Nutzen hat Ihr Beitrag für die Allgemeinheit im Bezirk Bergedorf?'};
export const bodyMinimum=1000;
