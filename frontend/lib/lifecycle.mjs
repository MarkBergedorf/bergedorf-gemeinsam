import {addCalendarMonths,berlinDate,deletionDecision} from './rules.mjs';
export const privacyRetentionNotice='Wir speichern Ihre Anfrage und die zugehörige Bearbeitung bis zur abschließenden Klärung. Anschließend bewahren wir den Vorgang noch sechs Monate auf und löschen ihn danach.';
export const deletionLimits='Die Inhalte werden aus dem aktiven Anwendungsbestand entfernt. Die sofortige Löschung aus externen Exporten, Anbieter-Sicherungen und Plattformprotokollen ist derzeit nicht nachgewiesen. Eine vollständige Löschung aus sämtlichen Speichern wird deshalb nicht bestätigt.';
export function subtractDays(date,days=14){addCalendarMonths(date,0);const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-days);return d.toISOString().slice(0,10)}
export function neverSubmitted(d,s){return !d.published&&!d.publishedAt&&!d.firstPublishedAt&&!d.submittedAt&&!d.everSubmitted&&!d.history?.length&&!s.cases.some(c=>c.target===d.id&&c.kind==='Inhaltsprüfung')&&d.review==='Entwurf'}
const civil=v=>v?(/^\d{4}-\d{2}-\d{2}$/.test(v)?v:berlinDate(v)):null;
export function lifecycleDates(start,months){if(!start)return null;const startedOn=civil(start),deleteOn=addCalendarMonths(startedOn,months);return {startedOn,warnOn:subtractDays(deleteOn),deleteOn}}
export function guestIsEmpty(s,g){const owner=x=>[x.ownerId,x.actor,x.reporter,x.participantId].includes(g.id);return !(s.documents||[]).some(owner)&&!(s.comments||[]).some(c=>c.status!=='gelöscht'&&owner(c))&&!(s.reactions||[]).some(owner)&&!(s.cases||[]).some(c=>c.status!=='erledigt'&&owner(c))&&!(s.requests||[]).some(r=>r.status==='offen'&&owner(r))&&!(s.suggestions||[]).some(r=>r.status!=='gelöscht'&&owner(r))&&!(s.erasureJobs||[]).some(j=>j.actor===g.id&&j.filesStatus!=='verified');}
export function lifecyclePlan(s,now=new Date().toISOString()){
 const today=berlinDate(now),plans=[];const add=(kind,id,start,months,extra={})=>{const dates=lifecycleDates(start,months);plans.push({kind,id,...dates,...extra,due:!!dates&&dates.deleteOn<=today})};
 for(const d of s.documents||[])if(neverSubmitted(d,s))add('draft',d.id,d.updated||d.created,3,{actor:d.ownerId,title:d.draft?.title||'Entwurf'});
 for(const g of s.guestProfiles||[])if(g.kind==='guest')add('guest',g.id,g.lastLoginAt||g.created,6,{actor:g.id,title:'Gastprofil',eligible:guestIsEmpty(s,g)});
 for(const c of s.cases||[]){if(c.kind==='Datenschutzanfrage'){add('privacy',c.id,c.status==='erledigt'&&c.finalClarified===true?c.completedOn:null,6,{status:c.status});}else if(['Meldung','Kommentarmeldung','Beschwerde','Einspruch'].includes(c.kind))add('case',c.id,c.status==='erledigt'?(c.closedOn||c.closedAt):null,6,{status:c.status});}
 for(const c of s.comments||[])if(c.kind==='geschichte'&&c.publishedAt&&c.status!=='gelöscht')add('history-comment',c.id,c.date||c.publishedAt,6,{paused:deletionDecision({...c,kind:'geschichte-kommentar'},today)!=='delete'});
 for(const v of s.suggestions||[])if(v.status!=='gelöscht')add('suggestion',v.id,v.date||v.created,6);
 for(const r of s.deletionReceipts||[])add('receipt',r.documentId,r.deletedAt,6);
 return plans;
}
export const representationMethods=['Originalwebseite und veröffentlichte Vertretungsangabe abgeglichen','Dokumentnachweis separat geprüft','Rückbestätigung über offiziellen Organisationskontakt','Erfundene getrennte Testprüfung'];
const refs=['target','parent','comment','documentId','contributionId','suggestionId','caseId','evidenceFor'];
function associated(s,rootIds){const ids=new Set(rootIds);let more=true;while(more){more=false;for(const key of ['comments','requests','suggestions','cases','files','notifications'])for(const x of s[key]||[])if(x.id&&!ids.has(x.id)&&refs.some(k=>ids.has(x[k]))){ids.add(x.id);more=true}}return ids}
function purgeLinked(s,ids,{comments=true}={}){for(const key of ['requests','suggestions','cases','reactions','audit','notifications','support',...(comments?['comments']:[])])if(Array.isArray(s[key]))s[key]=s[key].filter(x=>!ids.has(x.id)&&!refs.some(k=>ids.has(x[k])));}
function queueFiles(s,files,now){if(!files.length)return;s.erasureJobs||=[];for(const f of files)if(f.key&&!s.erasureJobs.some(j=>j.key===f.key&&j.filesStatus!=='verified'))s.erasureJobs.push({id:f.id,key:f.key,created:now,filesStatus:'pending',backupStatus:'not-verifiable'});}
// Receipts contain no free text; the restore guard uses a global privacy revision.
export function eraseContribution(s,id,now,{receipt=true,authorId=''}={}){
 const d=s.documents.find(x=>x.id===id);if(!d)return false;const ids=associated(s,[id]);const complaint=d.hadComplaint===true||s.cases.some(c=>ids.has(c.id)&&['Meldung','Kommentarmeldung','Beschwerde','Einspruch'].includes(c.kind));
 const files=(s.files||[]).filter(f=>ids.has(f.id)||ids.has(f.parent));queueFiles(s,files,now);s.files=s.files.filter(f=>!files.includes(f));s.documents=s.documents.filter(x=>x.id!==id);purgeLinked(s,ids);
 if(receipt&&complaint){s.deletionReceipts||=[];s.deletionReceipts.push({authorId:d.ownerId||authorId,documentId:id,deletedAt:now});}
 s.privacyRevision=(s.privacyRevision||0)+1;
 // Free-text metadata in linked actions was removed above. Do not edit unrelated contributions.
 return true;
}
function markPrivacyChange(s){s.privacyRevision=(s.privacyRevision||0)+1;}
function expireItem(s,item,kind,now){const ids=associated(s,[item.id]);const keepCases=s.cases.filter(c=>ids.has(c.id)).map(c=>({...Object.fromEntries(['id','kind','target','parent','targetType','status','created','closedAt','closedOn','reporter','ownerId'].filter(k=>c[k]!==undefined).map(k=>[k,c[k]])),reason:'',decision:'',nextAction:'Zugehöriger Inhalt fristgerecht gelöscht; offenen Vorgang gesondert bearbeiten.',contentErasedAt:now}));const files=s.files.filter(f=>ids.has(f.id)||ids.has(f.parent));queueFiles(s,files,now);s.files=s.files.filter(f=>!files.includes(f));purgeLinked(s,ids,{comments:kind!=='comment'});s.cases.push(...keepCases);if(kind==='comment'){const keep={id:item.id,parent:item.parent,kind:item.kind,date:item.date,publishedAt:item.publishedAt,status:'gelöscht',body:'',decision:'',conflict:false,request:item.request||'keiner',permanent:false};const i=s.comments.findIndex(x=>x.id===item.id);if(i>=0)s.comments[i]=keep;}else{s.suggestions.push({id:item.id,parent:item.parent,date:item.date,status:'gelöscht',change:'',benefit:'',decision:''});}markPrivacyChange(s);}
function queueWarning(s,p,now,uuid){s.notifications||=[];const key='retention:'+p.kind+':'+p.id+':'+p.deleteOn;if(s.notifications.some(n=>n.dedupeKey===key))return false;const reason=p.kind==='draft'?`Der Entwurf „${p.title}“ ist zur Löschung am ${p.deleteOn} vorgesehen. Speichern Sie ihn erneut oder reichen Sie ihn zur Prüfung ein, um diese Entwurfslöschung zu verhindern.`:`Ihr leeres Gastprofil ist zur Löschung am ${p.deleteOn} vorgesehen. Eine erneute erfolgreiche Anmeldung startet die Inaktivitätsfrist neu.`;s.notifications.push({id:uuid(),dedupeKey:key,event:'Löschwarnung',actor:p.actor,target:p.id,reason,deleteOn:p.deleteOn,status:'vorgemerkt',transport:'nicht angeschlossen',created:now});return true;}
export function runLifecycle(s,now,uuid){const today=berlinDate(now);let deleted=0,warnings=0;for(const p of lifecyclePlan(s,now)){
 if(['draft','guest'].includes(p.kind)&&p.warnOn<=today&&!p.due&&(p.kind!=='guest'||p.eligible))warnings+=+queueWarning(s,p,now,uuid);
 if(!p.due)continue;
 if(p.kind==='draft'){const d=s.documents.find(x=>x.id===p.id);if(d&&neverSubmitted(d,s)&&lifecycleDates(d.updated||d.created,3)?.deleteOn<=today)deleted+=+eraseContribution(s,d.id,now,{receipt:false});}
 if(p.kind==='guest'){const g=(s.guestProfiles||[]).find(x=>x.id===p.id);if(g&&guestIsEmpty(s,g)&&lifecycleDates(g.lastLoginAt||g.created,6)?.deleteOn<=today){s.guestProfiles=s.guestProfiles.filter(x=>x.id!==g.id);for(const c of s.cases||[])if(c.status==='erledigt')for(const key of ['ownerId','reporter','participantId'])if(c[key]===g.id)delete c[key];for(const k of ['participantSessions','accountLinks'])if(s[k])s[k]=s[k].filter(x=>x.participantId!==g.id);s.notifications=(s.notifications||[]).filter(n=>n.actor!==g.id);markPrivacyChange(s);deleted++;}}
 if(p.kind==='case'||p.kind==='privacy'){const c=s.cases.find(x=>x.id===p.id);if(c?.status==='erledigt'&&(p.kind!=='privacy'||c.finalClarified)){const ids=associated(s,[c.id]);const files=s.files.filter(f=>ids.has(f.id)||ids.has(f.parent));queueFiles(s,files,now);s.files=s.files.filter(f=>!files.includes(f));purgeLinked(s,ids);markPrivacyChange(s);deleted++;}}
 if(p.kind==='history-comment'&&!p.paused){const c=s.comments.find(x=>x.id===p.id);if(c&&deletionDecision({...c,kind:'geschichte-kommentar'},today)==='delete'){expireItem(s,c,'comment',now);deleted++;}}
 if(p.kind==='suggestion'){const v=s.suggestions.find(x=>x.id===p.id);if(v&&addCalendarMonths(v.date||civil(v.created))<=today){expireItem(s,v,'suggestion',now);deleted++;}}
 if(p.kind==='receipt'){const count=s.deletionReceipts.length;s.deletionReceipts=s.deletionReceipts.filter(r=>r.documentId!==p.id||addCalendarMonths(civil(r.deletedAt))>today);if(s.deletionReceipts.length!==count)s.privacyRevision=(s.privacyRevision||0)+1;}
 }
 // A new save/login/submission makes an old pending warning obsolete, not delivered.
 for(const n of s.notifications||[])if(n.event==='Löschwarnung'&&n.status==='vorgemerkt'&&!lifecyclePlan(s,now).some(p=>p.id===n.target&&p.deleteOn===n.deleteOn&&(p.kind!=='guest'||p.eligible)))n.status='gegenstandslos';
 return {deleted,warnings};
}
export function scrubRepresentation(s,d,p,now){
 const dispute=p.dispute===true;if(dispute&&(!String(p.disputeReason||'').trim()||!String(p.necessity||'').trim()))throw Error('Konkreten Vertretungsstreit und Erforderlichkeit dokumentieren.');
 if(dispute){d.representationDispute={open:true,reason:String(p.disputeReason).slice(0,1000),necessity:String(p.necessity).slice(0,1000),at:now};return;}
 const evidence=[];for(const f of [d.draft,d.published,...(d.history||[]).map(h=>h.fields)])if(f?.authority){evidence.push(f.authority);f.authority='';}
 if(evidence.some(t=>d.decision?.includes(t)))d.decision='';const files=s.files.filter(f=>f.parent===d.id&&f.purpose==='representation');queueFiles(s,files,now);s.files=s.files.filter(f=>!files.includes(f));
 for(const x of [...s.cases,...s.audit,...(s.notifications||[])])if(x.target===d.id)for(const k of ['reason','decision'])if(evidence.some(t=>x[k]?.includes(t)))x[k]='';
 d.representationDispute={open:false};s.privacyRevision=(s.privacyRevision||0)+1;d.evidencePurgedAt=now;d.representation={status:'test-'+p.status,checked:now,method:p.method,result:p.status,simulated:true};
}
// This is an in-memory sanitization plan, never persisted as an ID archive.
export function applyPrivacyToSnapshot(snapshot,before,current){
 const s=structuredClone(snapshot),removed=new Set();for(const key of ['documents','comments','requests','suggestions','cases','files','notifications'])for(const old of before[key]||[]){const next=(current[key]||[]).find(x=>x.id===old.id);if(old.id&&(!next||old.status!=='gelöscht'&&next.status==='gelöscht'||next&&next.contentErasedAt!==old.contentErasedAt&&next.contentErasedAt))removed.add(old.id);}
 for(const d of s.documents||[])if(removed.has(d.id))eraseContribution(s,d.id,new Date().toISOString(),{receipt:false});purgeLinked(s,associated(s,[...removed]));s.files=(s.files||[]).filter(f=>!removed.has(f.id)&&!removed.has(f.parent));
 for(const d of current.documents||[])if(d.evidencePurgedAt){const old=s.documents.find(x=>x.id===d.id);if(old){scrubRepresentation(s,old,{status:d.representation?.result||'rejected',method:d.representation?.method||representationMethods[1]},d.evidencePurgedAt);old.representation=structuredClone(d.representation);}}
 const deletedGuests=new Set((before.guestProfiles||[]).filter(g=>!(current.guestProfiles||[]).some(n=>n.id===g.id)).map(g=>g.id));for(const key of ['guestProfiles','participantSessions','accountLinks'])if(Array.isArray(s[key]))s[key]=s[key].filter(x=>!deletedGuests.has(x.id)&&!deletedGuests.has(x.participantId));
 for(const c of s.cases||[])for(const key of ['ownerId','reporter','participantId'])if(deletedGuests.has(c[key]))delete c[key];s.privacyRevision=current.privacyRevision||0;s.deletionReceipts=structuredClone(current.deletionReceipts||[]);s.erasureJobs=structuredClone(current.erasureJobs||[]);delete s.restoreExclusions;return s;
}
export function assertRestoreAllowed(snapshot,guard){if(!guard||!Number.isSafeInteger(guard.privacyRevision)||guard.status!=='current-protected-export')throw Error('Aktuelle geschützte Löschsperre erforderlich; Wiederherstellung bleibt isoliert gesperrt.');if((snapshot.privacyRevision||0)<guard.privacyRevision)throw Error('Sicherung liegt vor einer Löschung. Nicht wiederherstellen; aktuellen bereinigten Sicherungsstand verwenden.');return true;}
