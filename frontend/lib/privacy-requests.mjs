import {privacyRetentionNotice} from './lifecycle.mjs';
import {addCalendarMonths,berlinDate} from './rules.mjs';
export function privacyControlDate(received){return addCalendarMonths(received,1)}
export function privacyCaseAction(s,action,p,ctx,now,uuid){
 if(action!=='privacy-case')return null;
 const text=(v,n=2000)=>{if(typeof(v??'')!=='string'||String(v||'').length>n)throw Error('Datenschutzangabe fehlt oder ist zu lang.');return String(v||'').trim()};
 const previous=p.id?s.cases.find(c=>c.id===p.id&&c.kind==='Datenschutzanfrage'):null;if(p.id&&!previous)throw Error('Datenschutzvorgang fehlt.');
 const receivedOn=text(p.receivedOn,10);addCalendarMonths(receivedOn,0);if(receivedOn>berlinDate(now))throw Error('Eingang darf nicht in der Zukunft liegen.');
 const reason=text(p.reason),contact=text(p.contact,300),assignment=text(p.assignment,1000),identityReason=text(p.identityReason,1000),due=text(p.due,10),extension=text(p.extensionReason,1000),extensionNotifiedOn=text(p.extensionNotifiedOn,10),completedOn=text(p.completedOn,10),decision=text(p.decision);
 if(!reason||!contact||!assignment)throw Error('Anliegen, sicherer Antwortkontakt und nachvollziehbare Zuordnung sind erforderlich.');
 if(!['offen','in Bearbeitung','Wiedervorlage','erledigt'].includes(p.status))throw Error('Bitte einen gültigen Vorgangsstatus wählen.');
 if(p.identityCheck==='additional'&&!identityReason)throw Error('Zusätzlicher Identitätsnachweis setzt begründete Zweifel voraus.');
 if(!['no-doubts','additional','verified'].includes(p.identityCheck))throw Error('Identitätsprüfung bitte einordnen.');
 if(!due)throw Error('Bitte die gesetzliche Antwortfrist nach Kalenderprüfung ausdrücklich eintragen.');addCalendarMonths(due,0);if(extensionNotifiedOn)addCalendarMonths(extensionNotifiedOn,0);if(completedOn)addCalendarMonths(completedOn,0);
 if(due>privacyControlDate(receivedOn)&&!text(p.deadlineReason,1000))throw Error('Abweichende Frist benötigt eine dokumentierte Rechts-/Kalenderbegründung.');
 if(extension&&(!extensionNotifiedOn||extensionNotifiedOn>privacyControlDate(receivedOn)||due>addCalendarMonths(receivedOn,3)))throw Error('Eine Verlängerung ist höchstens um zwei weitere Monate und mit rechtzeitiger begründeter Mitteilung zu dokumentieren.');
 if(p.status==='erledigt'&&(!completedOn||!decision||p.finalClarified!==true))throw Error('Erledigung benötigt tatsächliches Klärungsdatum, Ergebnis und die ausdrückliche Bestätigung der abschließenden Klärung mit der anfragenden Person.');
 if(completedOn>berlinDate(now)||extensionNotifiedOn>berlinDate(now))throw Error('Tatsächliche Mitteilungs- und Erledigungsdaten dürfen nicht in der Zukunft liegen.');
 const informedOn=text(p.informedOn,10);if(informedOn){addCalendarMonths(informedOn,0);if(informedOn>berlinDate(now))throw Error('Information darf nicht in der Zukunft liegen.');}if(p.status==='erledigt'&&!informedOn)throw Error('Erledigung benötigt die dokumentierte Information über die Aufbewahrung während der Bearbeitung.');if(completedOn&&completedOn<receivedOn)throw Error('Klärung darf nicht vor dem Eingang liegen.');const final=p.status==='erledigt'&&p.finalClarified===true;
 const value={...(previous||{}),id:previous?.id||uuid(),kind:'Datenschutzanfrage',target:'',reason,contact,assignment,receivedOn,due,deadlineReason:text(p.deadlineReason,1000),identityCheck:p.identityCheck,identityReason,extensionReason:extension,extensionNotifiedOn,completedOn:final?completedOn:'',finalClarified:final,informedOn,procedureNotice:privacyRetentionNotice,decision,status:p.status,created:previous?.created||now,updated:now,nextAction:p.status==='erledigt'?'Sechs Kalendermonate nach abschließender Klärung löschen':'Frist und sichere Zuordnung prüfen; manuell beantworten',assignee:previous?.assignee||'',privacyCase:true};
 if(previous)Object.assign(previous,value);else s.cases.unshift(value);
 return 'Datenschutzvorgang intern dokumentiert. Keine E-Mail versandt; Fristen und tatsächlichen Antwortversand manuell überwachen.';
}
