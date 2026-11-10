// Pure preparation only. No network, persistence, permissions or publication endpoint.
export const pressDiscussionEnabled=false;
export const bergedorfConfirmation='Ich bestätige, dass sich der ausgewählte Pressebericht auf eine Angelegenheit des Bezirks Bergedorf bezieht oder Bergedorf nachweisbar mitbetrifft.';
export const pressScopeOptions=[['direct','Der Bericht behandelt unmittelbar eine Angelegenheit aus dem Bezirk Bergedorf.'],['shared','Der Bericht behandelt ein übergeordnetes Thema, das Bergedorf ebenfalls betrifft.']];
export const pressFields=[
 {name:'medium',label:'Medium / Zeitung',required:true},
 {name:'publishedOn',label:'Erscheinungsdatum',type:'date',required:true},
 {name:'headline',label:'Originalüberschrift',required:true},
 {name:'author',label:'Autor oder Autorin, soweit angegeben',hint:'Wenn keine Angabe vorhanden ist, bleibt dieses Feld leer.'},
 {name:'edition',label:'Print: Ausgabe',requiredFor:'print'},
 {name:'page',label:'Print: Seitenzahl',requiredFor:'print'},
 {name:'url',label:'Online: direkter Artikel-Link',type:'url',requiredFor:'online',hint:'Bei Print ohne öffentliche URL nicht erforderlich. Keine Links zur bloßen Verlagsstartseite.'},
 {name:'department',label:'Rubrik oder Ressort, soweit angegeben'},
 {name:'description',label:'Ausführliche Beschreibung des Themas',type:'textarea',required:true,min:100},
 {name:'facts',label:'Sachverhalt',hint:'Worum geht es in dem Zeitungsbericht? Sachlich in eigenen Worten wiedergeben.',type:'textarea',required:true,min:100},
 {name:'bergReference',label:'Bezug zu Bergedorf',hint:'Welche konkrete Angelegenheit des Bezirks ist betroffen?',type:'textarea',required:true,min:100},
 {name:'opinion',label:'Eigene Meinung',hint:'Ihre persönliche Bewertung, klar getrennt vom Sachverhalt.',type:'textarea',required:true,min:30},
 {name:'question',label:'Diskussionsfrage',hint:'Worüber möchten Sie mit anderen diskutieren?',type:'textarea',required:true,min:20},
 {name:'impact',label:'Bei übergeordneten Themen: konkrete Auswirkungen auf Bergedorf',hint:'Ausführlich beschreiben, wie und wodurch Bergedorf betroffen ist. Ein allgemeiner Hamburg-Bezug reicht nicht.',type:'textarea',requiredFor:'shared',min:100}
];
const value=(x)=>typeof x==='string'?x.trim():'';
export function canonicalArticleUrl(raw){try{const u=new URL(value(raw));if(!['https:','http:'].includes(u.protocol)||u.username||u.password)return '';u.hash='';for(const key of [...u.searchParams.keys()])if(/^utm_/i.test(key)||['fbclid','gclid','mc_cid','mc_eid'].includes(key.toLowerCase()))u.searchParams.delete(key);u.searchParams.sort();return u.href}catch{return ''}}
export function validatePressDiscussion(d={}){const errors={};
 for(const f of pressFields){const v=value(d[f.name]),needed=!!f.required||!!f.requiredFor&&(f.requiredFor===d.sourceType||f.requiredFor===d.scope);if(needed&&!v)errors[f.name]='Bitte ausfüllen.';else if(v&&f.min&&v.length<f.min)errors[f.name]=`Bitte mindestens ${f.min} Zeichen ausführlich in eigenen Worten beschreiben.`;}
 if(!['online','print'].includes(d.sourceType))errors.sourceType='Online oder Print auswählen.';
 if(!pressScopeOptions.some(([key])=>key===d.scope))errors.scope='Art des Bergedorf-Bezugs auswählen.';
 if(d.bergConfirmed!==true)errors.bergConfirmed='Den konkreten Bezug zum Bezirk Bergedorf ausdrücklich bestätigen.';
 if(value(d.publishedOn)&&(!/^\d{4}-\d{2}-\d{2}$/.test(d.publishedOn)||Number.isNaN(Date.parse(d.publishedOn))||new Date(d.publishedOn).toISOString().slice(0,10)!==d.publishedOn))errors.publishedOn='Gültiges Erscheinungsdatum angeben.';
 if(value(d.url)&&!canonicalArticleUrl(d.url))errors.url='Gültigen öffentlichen HTTP-/HTTPS-Artikel-Link ohne Zugangsdaten angeben.';
 return {valid:!Object.keys(errors).length,errors};
}
const normalized=x=>value(x).normalize('NFKC').toLocaleLowerCase('de').replace(/\s+/g,' ');
// Candidate lookup only: metadata matches are never proof of identity or publication approval.
export function pressArticleKeys(d={}){const keys=[],url=canonicalArticleUrl(d.url);if(url)keys.push('url:'+url);if([d.medium,d.publishedOn,d.headline].every(x=>value(x)))keys.push('metadata:'+JSON.stringify([normalized(d.medium),d.publishedOn,normalized(d.headline)]));if(d.sourceType==='print'&&[d.medium,d.publishedOn,d.headline,d.edition,d.page].every(x=>value(x)))keys.push('print:'+JSON.stringify([normalized(d.medium),d.publishedOn,normalized(d.edition),normalized(d.page),normalized(d.headline)]));return keys}
export function findPressArticleCandidates(d,articles=[]){const keys=new Set(pressArticleKeys(d));return articles.filter(a=>pressArticleKeys(a.source||a).some(key=>keys.has(key)))}
export const pressLifecycle={initial:'draft',submit:'pending_review',publishRequires:['authenticated_author','server_validation','berg_reference_review','manual_moderator_approval'],edit:'pending_review',publicVersion:'last_manually_approved_revision',articleRelation:'articleId',auditFields:['id','articleId','authorId','submittedAt','revisions[].id','revisions[].createdAt','revisions[].actorId','revisions[].source','revisions[].description','revisions[].facts','revisions[].bergReference','revisions[].scope','revisions[].impact','revisions[].bergConfirmed','revisions[].opinion','revisions[].question','revisions[].reviewedAt','revisions[].reviewedBy','revisions[].decision','publishedRevisionId']};
