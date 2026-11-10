// Browser-session-only test rules. No network, persistence or public submission endpoint.
export const pressDiscussionEnabled=false;
export const pressTestEnabled=true;
export const pressMedia=['Bergedorfer Zeitung','Bille Wochenblatt','Hamburger Abendblatt','Hamburger Morgenpost (MOPO)','BILD-Zeitung'];
export const bergedorfConfirmation='Ich bestätige, dass sich der ausgewählte Pressebericht auf eine Angelegenheit des Bezirks Bergedorf bezieht oder Bergedorf nachweisbar mitbetrifft.';
export const pressScopeOptions=[['direct','Unmittelbares Bergedorfer Thema'],['shared','Übergeordnetes Thema mit Auswirkungen auf Bergedorf']];
export const readingOptions=[['online','Digital – auf einer Internetseite oder in einer E-Paper-Ausgabe'],['print','Gedruckt – in einer Zeitung aus Papier']];
export const pressAreas=['Bezirkspolitik und Bezirksversammlung','Bezirksamt und Verwaltung','Stadtteilentwicklung und Stadtplanung','Wohnen und Wohnungsbau','Straßen und Verkehr','Öffentlicher Nahverkehr','Radverkehr und Fußverkehr','Schulen und Bildung','Kitas und Kinderbetreuung','Gesundheit und medizinische Versorgung','Pflege und soziale Einrichtungen','Soziales und gesellschaftliche Teilhabe','Kinder, Jugendliche und Familien','Seniorinnen und Senioren','Barrierefreiheit und Inklusion','Umwelt, Natur und Klimaschutz','Grünflächen und öffentliche Anlagen','Wirtschaft und Gewerbe','Handel und Einzelhandel','Arbeitsplätze und Beschäftigung','Kultur und Veranstaltungen','Sport und Freizeit','Sicherheit und öffentliche Ordnung','Feuerwehr und Rettungsdienste','Historische Angelegenheiten und Denkmalschutz','Weitere Angelegenheiten des Bezirks','Sonstiges'];
export const pressFields=[
 {name:'medium',label:'Medium / Zeitung',type:'select',options:pressMedia,required:true},
 {name:'publishedOn',label:'Erscheinungsdatum',type:'date',required:true},
 {name:'headline',label:'Originalüberschrift',required:true},
 {name:'author',label:'Autorin oder Autor',required:true,placeholder:'Name meist unter der Überschrift oder am Ende des Artikels. Falls keiner angegeben ist: Nicht angegeben.'},
 {name:'edition',label:'Ausgabe der Zeitung',requiredFor:'print',hint:'Zum Beispiel die Regionalausgabe und die Nummer der Zeitung. Zusammen mit Datum, Seitenzahl und Überschrift muss der Artikel eindeutig zugeordnet werden können.'},
 {name:'page',label:'Seitenzahl',requiredFor:'print'},
 {name:'url',label:'Direkter Link zum Artikel',type:'url',requiredFor:'online',hint:'Direkte Adresse des Artikels oder einer eindeutig zugeordneten E-Paper-Artikelansicht. Eine Verlagsstartseite oder allgemeine Ausgabenübersicht genügt nicht.'},
 {name:'department',label:'Rubrik oder Ressort',placeholder:'Zum Beispiel: Lokales, Bergedorf, Politik, Verkehr oder Wirtschaft. Die Rubrik steht häufig über der Überschrift oder im Zeitungskopf.'},
 {name:'description',label:'Ausführliche Beschreibung des Themas',type:'textarea',required:true,min:200,max:2000},
 {name:'facts',label:'Sachverhalt',hint:'Worum geht es in dem Zeitungsbericht? Sachlich in eigenen Worten wiedergeben.',type:'textarea',required:true,min:150,max:2500},
 {name:'bergReference',label:'Konkreter Bezug zu Bergedorf',hint:'Welche konkrete Angelegenheit des Bezirks ist betroffen?',type:'textarea',required:true,min:100,max:1500},
 {name:'opinion',label:'Eigene Meinung',hint:'Ihre persönliche Bewertung, klar getrennt vom Sachverhalt.',type:'textarea',required:true,min:100,max:2500},
 {name:'question',label:'Diskussionsfrage',hint:'Worüber möchten Sie mit anderen diskutieren? Auch kurze Fragen sind zulässig.',type:'textarea',required:true,max:500},
 {name:'impact',label:'Welche konkreten Auswirkungen hat das übergeordnete Thema auf Bergedorf?',hint:'Ausführlich beschreiben, wie und wodurch Bergedorf betroffen ist. Ein allgemeiner Hamburg-Bezug reicht nicht.',type:'textarea',requiredFor:'shared',min:150,max:2000},
 {name:'areaOther',label:'Erläuterung bei „Sonstiges“',type:'textarea',requiredFor:'Sonstiges',min:100,max:1500}
];
export const proposalFields=[
 {name:'name',label:'Name des Mediums',required:true},
 {name:'website',label:'Offizielle Website',type:'url',required:true},
 {name:'offerType',label:'Art des Presseangebots',required:true,placeholder:'Zum Beispiel: Lokalzeitung, Nachrichtenmagazin oder redaktionelles Onlineangebot'},
 {name:'frequency',label:'Erscheinungsweise',required:true,placeholder:'Zum Beispiel: täglich, wöchentlich oder monatlich'},
 {name:'printEdition',label:'Gedruckte Ausgabe vorhanden',type:'select',options:['Ja','Nein'],required:true},
 {name:'coversBergedorf',label:'Berichtet das Medium über Bergedorf?',type:'select',options:['Ja','Nein'],required:true},
 {name:'reason',label:'Begründung, weshalb es aufgenommen werden sollte',type:'textarea',required:true,hint:'Bitte beschreiben Sie die regelmäßige Erscheinungsweise, redaktionelle Verantwortung, öffentliche Zugänglichkeit und tatsächliche Berichterstattung über Bergedorf.'}
];
const value=x=>typeof x==='string'?x.trim():'';
export const textLength=x=>typeof x==='string'?x.length:0;
export function berlinToday(now=new Date()){return new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(now)}
export function canonicalArticleUrl(raw){try{const u=new URL(value(raw));if(!['https:','http:'].includes(u.protocol)||u.username||u.password||!u.hostname.includes('.')||u.hostname.endsWith('.localhost'))return '';u.hash='';for(const key of [...u.searchParams.keys()])if(/^utm_/i.test(key)||['fbclid','gclid','mc_cid','mc_eid'].includes(key.toLowerCase()))u.searchParams.delete(key);u.searchParams.sort();return u.href}catch{return ''}}
export function isDirectArticleUrl(raw){const canonical=canonicalArticleUrl(raw);if(!canonical)return false;try{const u=new URL(canonical),path=decodeURIComponent(u.pathname).replace(/^\/+|\/+$/g,'').toLowerCase();const articleQuery=[...u.searchParams].some(([k,v])=>/^(article|articleid|storyid|docid|document|id|p)$/i.test(k)&&v.trim());if(articleQuery)return true;return !!path&&!/^(?:index\.(?:html?|php|asp)|home|start|hamburg|bergedorf|news|nachrichten|epaper|e-paper|digital|service|suche|search|regional(?:\/hamburg)?|hamburg\/bergedorf|themen|tags?)$/.test(path)&&!/^titles\//.test(path)&&!/^.*\/(?:page|seite)\/\d+$/.test(path)}catch{return false}}
export function pressFieldActive(f,d={}){return !f.requiredFor||f.requiredFor===d.sourceType||f.requiredFor===d.scope||f.requiredFor===d.area}
function fieldErrors(fields,d){const errors={};for(const f of fields){if(!pressFieldActive(f,d))continue;const v=value(d[f.name]),n=textLength(d[f.name]),required=!!f.required||!!f.requiredFor;if(required&&!v)errors[f.name]='Bitte dieses Pflichtfeld ausfüllen.';else if(v&&f.min&&n<f.min)errors[f.name]=`Bitte mindestens ${f.min} Zeichen eingeben (aktuell ${n}).`;else if(f.max&&n>f.max)errors[f.name]=`Bitte auf höchstens ${f.max} Zeichen kürzen (aktuell ${n}).`;if(f.options&&v&&!f.options.includes(d[f.name]))errors[f.name]='Bitte einen gültigen Eintrag aus der Liste auswählen.';}return errors}
export function validatePressDiscussion(d={},today=berlinToday()){const errors=fieldErrors(pressFields,d);
 if(!readingOptions.some(([key])=>key===d.sourceType))errors.sourceType='Bitte auswählen, wie Sie den Zeitungsartikel gelesen haben.';
 if(!pressMedia.includes(d.medium))errors.medium='Bitte eine der fünf angebotenen Zeitungen auswählen.';
 if(!pressScopeOptions.some(([key])=>key===d.scope))errors.scope='Bitte die Art des Bergedorf-Bezugs auswählen.';
 if(!pressAreas.includes(d.area))errors.area='Bitte einen betroffenen Bereich Bergedorfs aus der Liste auswählen.';
 if(d.bergConfirmed!==true)errors.bergConfirmed='Bitte den konkreten Bezug zum Bezirk Bergedorf ausdrücklich bestätigen.';
 const date=value(d.publishedOn);if(date){if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||Number.isNaN(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date)errors.publishedOn='Bitte ein gültiges Erscheinungsdatum eingeben.';else if(date>today)errors.publishedOn='Das Erscheinungsdatum darf nicht in der Zukunft liegen.';}
 if(d.sourceType==='online'&&value(d.url)&&!isDirectArticleUrl(d.url))errors.url='Bitte einen gültigen direkten Artikel-Link angeben. Verlagsstartseiten, Rubrikseiten und allgemeine Ausgabenübersichten genügen nicht.';
 return {valid:!Object.keys(errors).length,errors};
}
export function validateMediaProposal(d={}){const errors=fieldErrors(proposalFields,d);if(value(d.website)&&!canonicalArticleUrl(d.website))errors.website='Bitte eine gültige offizielle HTTP-/HTTPS-Website ohne Zugangsdaten angeben.';if(d.coversBergedorf==='Nein')errors.coversBergedorf='Für eine Aufnahme muss das Medium tatsächlich über Bergedorfer Angelegenheiten berichten.';return {valid:!Object.keys(errors).length,errors};}
const normalized=x=>value(x).normalize('NFKC').toLocaleLowerCase('de').replace(/\s+/g,' ');
// Candidate lookup only: metadata matches are never proof of identity or publication approval.
export function pressArticleKeys(d={}){const keys=[],url=canonicalArticleUrl(d.url);if(url)keys.push('url:'+url);if([d.medium,d.publishedOn,d.headline].every(x=>value(x)))keys.push('metadata:'+JSON.stringify([normalized(d.medium),d.publishedOn,normalized(d.headline)]));if(d.sourceType==='print'&&[d.medium,d.publishedOn,d.headline,d.edition,d.page].every(x=>value(x)))keys.push('print:'+JSON.stringify([normalized(d.medium),d.publishedOn,normalized(d.edition),normalized(d.page),normalized(d.headline)]));return keys}
export function findPressArticleCandidates(d,articles=[]){const keys=new Set(pressArticleKeys(d));return articles.filter(a=>pressArticleKeys(a.source||a).some(key=>keys.has(key)))}
export const pressLifecycle={initial:'draft',submit:'pending_review',publishRequires:['authenticated_author','server_validation','berg_reference_review','manual_moderator_approval'],edit:'pending_review',publicVersion:'last_manually_approved_revision',articleRelation:'articleId',auditFields:['id','articleId','authorId','submittedAt','revisions[].id','revisions[].createdAt','revisions[].actorId','revisions[].source','revisions[].description','revisions[].facts','revisions[].bergReference','revisions[].scope','revisions[].impact','revisions[].bergConfirmed','revisions[].opinion','revisions[].question','revisions[].reviewedAt','revisions[].reviewedBy','revisions[].decision','publishedRevisionId']};
