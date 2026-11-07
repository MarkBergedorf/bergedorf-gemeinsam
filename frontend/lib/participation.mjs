import {scrubRepresentation,representationMethods} from './lifecycle.mjs';
import {privacyCaseAction} from './privacy-requests.mjs';
import {berlinDate,addCalendarMonths} from './rules.mjs';
export const operator={name:'Mark Petersen',address:'Fritz-Lindemann-Weg 3 A',city:'21031 Hamburg',email:'bergedorf.gemeinsam@outlook.de'};
export const aboutText=[
'Bergedorf gemeinsam ist eine privat betriebene, unabhängige Bürgerplattform für den gesamten Bezirk Hamburg-Bergedorf.',
'Hier können Menschen Anliegen und Verbesserungsvorschläge einbringen, Erfahrungen teilen sowie Geschichten und Erinnerungen aus Bergedorf bewahren. Informationen zur örtlichen Politik und ein Verzeichnis von Organisationen, Einrichtungen und Angeboten ergänzen die Plattform.',
'Sachlicher Austausch, nachvollziehbare Quellen und ein respektvoller Umgang bilden die Grundlage. Die Plattform gehört weder zum Bezirksamt noch zur Bezirksversammlung und wird von keiner Partei getragen.'
];
export const policyDefaults={earliestReviewDate:'',absence:'normal',singleNotifications:true,dailySummaries:true};
export const policy=s=>({...policyDefaults,...s?.settings?.participation});
export function reviewNotice(s,now=new Date().toISOString()){
 const p=policy(s);return p.earliestReviewDate&&p.earliestReviewDate>=berlinDate(now)?`Die Prüfung neuer Beiträge ist derzeit pausiert. Ihr Beitrag kann weiterhin eingereicht werden. Eine Prüfung erfolgt frühestens ab dem ${new Date(p.earliestReviewDate+'T12:00:00Z').toLocaleDateString('de-DE',{timeZone:'Europe/Berlin'})}.`:'Eingereichte Beiträge werden in der Regel innerhalb von sieben Tagen geprüft, nach Möglichkeit früher.';
}
export const uploadNotice='Dateiuploads sind zum Start nicht vorgesehen, um den Speicherbedarf gering zu halten. Quellen können als Links angegeben werden.';
export function organisationStatus(d,now=new Date().toISOString()){
 const rep=d?.representation;if(rep?.status!=='confirmed')return {confirmed:false,lastConfirmedAt:null,overdue:false};
 const date=rep.lastConfirmedAt||rep.checked;const valid=/^\d{4}-\d{2}-\d{2}/.test(date||'');
 return {confirmed:true,lastConfirmedAt:valid?date:null,overdue:!valid||addCalendarMonths(date.slice(0,10))<=berlinDate(now)};
}
function enqueue(s,uuid,now,event,actor,target,reason='',urgent=false){
 s.notifications||=[];const p=policy(s),operatorTarget=actor==='operator';
 const channels=operatorTarget?(urgent?['einzeln']:p.absence!=='normal'?['täglich']:[...(p.singleNotifications?['einzeln']:[]),...(p.dailySummaries?['täglich']:[])]):['einzeln'];
 if(!channels.length)channels.push('nur Administration');
 for(const channel of channels)s.notifications.unshift({id:uuid(),event,actor,target,reason,channel,status:'wartend',transport:'nicht angeschlossen',created:now,path:actor==='operator'?'#verwaltung/vorgaenge':'#meine/vorgaenge',urgent});
}
export function policyAction(s,action,p,ctx,now,uuid){
 const privacyResult=privacyCaseAction(s,action,p,ctx,now,uuid);if(privacyResult!==null)return privacyResult;
 if(action==='citizen-upload-policy'){s.settings.citizenUploadsEnabled=p.enabled===true;return p.enabled?'Separate Uploadfreigabe gesetzt; Bereichsrechte und Dateiprüfungen gelten weiterhin.':'Bürgeruploads zum Start deaktiviert.';}
 if(action==='participation-settings'){
  if(!['normal','urlaub','krankheit'].includes(p.absence))throw Error('Bitte eine gültige Abwesenheit auswählen.');
  if(p.earliestReviewDate){addCalendarMonths(p.earliestReviewDate,0);}
  s.settings.participation={earliestReviewDate:p.earliestReviewDate||'',absence:p.absence,singleNotifications:p.singleNotifications===true,dailySummaries:p.dailySummaries===true};return 'Prüfdatum und Benachrichtigungseinstellungen gespeichert. Kein Versand aktiviert.';
 }
 if(action==='forwarding-decision'){
  const d=s.documents.find(x=>x.id===p.id);if(!d||d.kind!=='anliegen'||!d.draft?.forwardRequest)throw Error('Freiwilliger Weitergabewunsch fehlt.');
  if(!['in Prüfung','nicht vorgesehen','vorbereitet','weitergegeben','Rückmeldung erhalten'].includes(p.status)||!String(p.reason||'').trim())throw Error('Status und nachvollziehbare Begründung erforderlich.');
  if(['weitergegeben','Rückmeldung erhalten'].includes(p.status)&&(!String(p.recipient||'').trim()||!p.forwardedOn))throw Error('Empfänger und tatsächliches Weitergabedatum erforderlich.');
  if(p.forwardedOn)addCalendarMonths(p.forwardedOn,0);
  d.forwarding={status:p.status,reason:String(p.reason).slice(0,2000),recipient:String(p.recipient||'').slice(0,300),forwardedOn:p.forwardedOn||'',reply:String(p.reply||'').slice(0,2000),updated:now};
  enqueue(s,uuid,now,'Weitergabeentscheidung',d.ownerId||ctx?.legacyOwner,d.id,p.reason);return 'Weitergabestand intern dokumentiert. Keine Nachricht oder Weiterleitung ausgelöst; Kontaktdaten werden nicht automatisch beigefügt.';
 }
 if(action==='organization-reminders'){
  let count=0;
  for(const d of s.documents){const status=organisationStatus(d,now);if(!status.confirmed||!status.overdue)continue;
   const period=status.lastConfirmedAt||'unbekannt';if(d.representation.remindedFor===period)continue;
   enqueue(s,uuid,now,'Organisationsangaben bestätigen',d.ownerId||ctx?.legacyOwner,d.id,'Bitte prüfen und bestätigen Sie die Angaben Ihrer Organisation. Angaben möglicherweise veraltet.');
   d.representation.remindedFor=period;d.representation.reminderQueuedAt=now;count++;
  }
  return count+' fällige Profilbestätigungen intern vorgemerkt. Kein Versand; Bestätigungsdaten unverändert.';
 }
 if(action==='organization-confirm'){
  const d=s.documents.find(x=>x.id===p.id);if(!d||d.representation?.status!=='confirmed')throw Error('Zuerst muss die Vertretungsberechtigung separat bestätigt werden.');
  if(ctx?.role!=='admin'&&d.ownerId!==ctx?.actor)throw Error('Nur die eigene bestätigte Organisation darf Angaben bestätigen.');
  if(p.confirmed!==true)throw Error('Bestätigung der geprüften aktuellen Angaben erforderlich.');
  d.representation.lastConfirmedAt=now;return 'Bestätigung der Organisationsangaben gespeichert. Eine bloße Erinnerung setzt dieses Datum nicht.';
 }
 if(action==='organization-review'){
  const d=s.documents.find(x=>x.id===p.id);if(!d||!['organisation','verzeichnis'].includes(d.kind)||!String(p.reason||'').trim())throw Error('Organisationsprofil und Prüfbegründung erforderlich.');
  if(!['confirmed','rejected'].includes(p.status))throw Error('Vertretungsentscheidung fehlt.');
  if(p.status==='confirmed'&&p.evidenceChecked!==true)throw Error('E-Mail- und Vertretungsnachweis müssen tatsächlich separat geprüft sein.');
  // Current private Test access has no real email verification: never certify a real organization.
  if(!representationMethods.includes(p.method))throw Error('Bitte die tatsächlich durchgeführte Prüfart auswählen; keine Nachweiskopien in Prüfvermerke übernehmen.');scrubRepresentation(s,d,p,now);return 'Private Testentscheidung dokumentiert. Keine echte Organisationsverifizierung bestätigt.';
 }
 return null;
}
export function afterPolicyAction(s,action,p,ctx,now,uuid,target){
 const d=s.documents.find(x=>x.id===(p.id||target));
 if(action==='submit'){enqueue(s,uuid,now,'Neuer Beitrag','operator',d.id);if(d.kind==='anliegen'&&d.draft.forwardRequest&&!s.cases.some(c=>c.kind==='Weitergabe'&&c.target===d.id&&c.status!=='erledigt'))s.cases.unshift({id:uuid(),kind:'Weitergabe',target:d.id,ownerId:d.ownerId,reason:'Freiwilliger Wunsch zur Prüfung einer möglichen Weitergabe. Kein automatischer Versand.',status:'offen',nextAction:'Zuständige Stelle und Umfang prüfen',decision:'',created:now});}
 if(action==='review')enqueue(s,uuid,now,p.decision==='approve'?'Freigabe':'Überarbeitung angefordert',d.ownerId||ctx?.legacyOwner,d.id,p.reason);
 if(action==='retention-request')enqueue(s,uuid,now,'Aufbewahrungsantrag','operator',p.id);
 if(action==='comment-report'||action==='case'&&['Meldung','Einspruch'].includes(p.kind)){
  const c=s.cases[0];const reportedDocument=s.documents.find(x=>x.id===(action==='comment-report'?s.comments.find(y=>y.id===p.id)?.parent:p.id));if(reportedDocument)reportedDocument.hadComplaint=true;if(p.kind==='Einspruch'){c.ownerId=ctx?.actor;for(const previous of s.cases)if(previous.id!==c.id&&['Meldung','Kommentarmeldung','Beschwerde'].includes(previous.kind)&&(previous.target===p.id||previous.parent===p.id)&&(!p.caseId||p.caseId===previous.id)){previous.status='offen';previous.reopenedAt=now;delete previous.closedAt;delete previous.closedOn;}}c.reporter=ctx?.actor||'legacy-test';enqueue(s,uuid,now,'Beschwerde','operator',p.id,p.reason,true);
  const reportType=action==='comment-report'?'comment':'contribution';c.reportType=reportType;
  // Only server-resolved account IDs count. Different emails/devices are not proof of different humans.
  const distinct=new Set(s.cases.filter(x=>x.target===p.id&&x.reportType===reportType&&x.kind===(reportType==='comment'?'Kommentarmeldung':'Meldung')&&x.reporter).map(x=>x.reporter));
  if(distinct.size>=3){
   if(reportType==='comment'){const item=s.comments.find(x=>x.id===p.id);if(item){item.manualHidden??=!!item.hidden&&!item.reportHidden;item.hidden=true;item.reportHidden=true;enqueue(s,uuid,now,'Vorläufig ausgeblendet',item.ownerId||ctx?.legacyOwner,item.parent,'Beschwerden unterschiedlicher Teilnehmerzugänge haben eine Überprüfung ausgelöst. Dies ist keine Feststellung eines Regelverstoßes.');}}
   else {if(d){d.hidden=true;d.hiddenForReports=true;s.comments.filter(x=>x.parent===d.id).forEach(x=>x.hiddenByParent=true);enqueue(s,uuid,now,'Vorläufig ausgeblendet',d.ownerId||ctx?.legacyOwner,d.id,'Beschwerden unterschiedlicher Teilnehmerzugänge haben eine Überprüfung ausgelöst. Dies ist keine Feststellung eines Regelverstoßes.');}else if(String(p.id).startsWith('editorial-')){s.settings.researchStatus||={};const id=String(p.id).slice(10);s.settings.researchStatus[id]={...s.settings.researchStatus[id],readerStatus:'draft',releaseReason:'Vorläufige Prüfung nach drei unterschiedlichen Teilnehmermeldungen'};}else if(String(p.id).startsWith('example-')){s.settings.exampleModeration||={};s.settings.exampleModeration[p.id]={hidden:true};}}
  }
 }
 if(action==='task'&&typeof p.hide==='boolean'){
  const c=s.cases.find(x=>x.id===p.id),doc=s.documents.find(x=>x.id===(c?.parent||c?.target));
  const subject=c?.kind==='Kommentarmeldung'?s.comments.find(x=>x.id===c.target):doc;
  if(subject)enqueue(s,uuid,now,p.hide?'Vorläufig ausgeblendet':'Ausblendung aufgehoben',subject.ownerId||ctx?.legacyOwner,subject.parent||subject.id,p.decision||'Beschwerden haben eine manuelle Überprüfung ausgelöst. Eine vorläufige Ausblendung stellt keinen Regelverstoß fest.');
 }
}
