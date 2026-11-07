// Bezirke are distinct from the legacy `districts` array of Bergedorf Stadtteile.
// Sources: hamburg.de district Stadtteil lists; RäumGlG Anlage, current division since 2011.
import {districts as bergedorfPlaces} from './rules.mjs';
/** @type {Array<[string,string,string|string[]]>} */
const rows=[
 ['bergedorf','Bergedorf',bergedorfPlaces],
 ['hamburg-mitte','Hamburg-Mitte','Hamburg-Altstadt|Neustadt|St. Pauli|St. Georg|Hammerbrook|Borgfelde|Hamm|Horn|Billstedt|Billbrook|Rothenburgsort|Veddel|Kleiner Grasbrook|Steinwerder|Waltershof|Finkenwerder|Neuwerk|Wilhelmsburg|HafenCity'],
 ['altona','Altona','Altona-Altstadt|Altona-Nord|Ottensen|Bahrenfeld|Groß Flottbek|Othmarschen|Lurup|Osdorf|Nienstedten|Blankenese|Iserbrook|Sülldorf|Rissen|Sternschanze'],
 ['eimsbuettel','Eimsbüttel','Eimsbüttel|Rotherbaum|Harvestehude|Hoheluft-West|Lokstedt|Niendorf|Schnelsen|Eidelstedt|Stellingen'],
 ['hamburg-nord','Hamburg-Nord','Hoheluft-Ost|Eppendorf|Groß Borstel|Alsterdorf|Winterhude|Uhlenhorst|Hohenfelde|Barmbek-Nord|Barmbek-Süd|Dulsberg|Ohlsdorf|Fuhlsbüttel|Langenhorn'],
 ['wandsbek','Wandsbek','Eilbek|Wandsbek|Marienthal|Jenfeld|Tonndorf|Farmsen-Berne|Bramfeld|Steilshoop|Wellingsbüttel|Sasel|Poppenbüttel|Hummelsbüttel|Lemsahl-Mellingstedt|Duvenstedt|Wohldorf-Ohlstedt|Bergstedt|Volksdorf|Rahlstedt'],
 ['harburg','Harburg','Harburg|Neuland|Gut Moor|Wilstorf|Rönneburg|Langenbek|Sinstorf|Marmstorf|Eißendorf|Heimfeld|Altenwerder|Moorburg|Hausbruch|Neugraben-Fischbek|Francop|Neuenfelde|Cranz']
];
export const boroughs=rows.map(([id,name,places])=>({id,name,title:name+' gemeinsam',places:Array.isArray(places)?places:places.split('|'),source:'https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-'+id,checked:'2026-11-01'}));
export const boroughById=id=>boroughs.find(b=>b.id===id);
export const documentBorough=d=>d?.districtId||'bergedorf';
export const boroughSections=[['politik','Politik'],['erfahrung','Erfahrungsberichte'],['anliegen','Anliegen & Verbesserungen'],['nachrichten','Nachrichten aus dem Bezirk']];
export function boroughConfig(s,id){return id==='bergedorf'?{status:'active',news:[]}:s?.settings?.boroughs?.[id]||{status:'unconfigured',news:[]};}
export const boroughActive=(s,id)=>!!boroughById(id)&&boroughConfig(s,id).status==='active';
export function itemBorough(s,item){if(item?.districtId)return item.districtId;const doc=s.documents?.find(d=>d.id===(item?.parent||item?.target||item?.id));if(doc)return documentBorough(doc);const comment=s.comments?.find(c=>c.id===item?.target||c.id===item?.comment);if(comment)return itemBorough(s,comment);return item?.target?.startsWith('example-')||item?.target?.startsWith('editorial-')?'bergedorf':null;}
export const matchesBorough=(s,item,id)=>!id||itemBorough(s,item)===id;
export function checkBoroughFields(id,kind,fields){const b=boroughById(id);if(!b)throw Error('Unbekannter Bezirk.');if(id==='bergedorf')return;if(!boroughSections.some(([key])=>key===kind&&key!=='nachrichten'))throw Error('Dieser Bereich ist für zusätzliche Bezirke nicht vorgesehen.');if(fields.place&&![...b.places,'Gesamter Bezirk '+b.name].includes(fields.place))throw Error('Der gewählte Stadtteil gehört nicht zum Bezirk '+b.name+'.');if(['quarterId','historicPlaceId','localPlaceId','additionalDistricts'].some(k=>fields[k]))throw Error('Bergedorfer Ortsangaben dürfen keinem anderen Bezirk zugeordnet werden.');}
export function normalizeBoroughConfig(value,safeUrl){if(!value||!['prepared','ready','active'].includes(value.status))throw Error('Ungültiger Vorbereitungsstand.');const notes=String(value.notes||'').trim();if(notes.length>2000)throw Error('Vorbereitungsnotiz ist zu lang.');if(!Array.isArray(value.news)||value.news.length>40)throw Error('Höchstens 40 Originalbeiträge je Bezirk.');const news=value.news.map(n=>{const title=String(n.title||'').trim(),publisher=String(n.publisher||'').trim(),place=String(n.place||'');if(!title||title.length>200||!publisher||publisher.length>100||!/^\d{4}-\d{2}-\d{2}$/.test(n.checked||''))throw Error('Nachricht benötigt Titel, tatsächlichen Anbieter und Recherchedatum.');return {title,publisher,place,url:safeUrl(n.url),checked:n.checked};});if(news.some(n=>!n.url))throw Error('Originalbeitrag benötigt eine HTTPS-Adresse.');if(['ready','active'].includes(value.status)&&(!news.length||value.editorialReady!==true))throw Error('Vor einer Freischaltung müssen lokale Originalquellen recherchiert und die redaktionelle Vorbereitung bestätigt sein.');return {status:value.status,notes,news,editorialReady:value.editorialReady===true};}
