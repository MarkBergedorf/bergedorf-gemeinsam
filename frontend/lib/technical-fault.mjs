// Local preparation only. No transport, storage, device detection or attachments.
export const faultRecipient='bergedorf.gemeinsam@outlook.de';
export const faultSubject='Technische Störung – Bergedorf gemeinsam';
// Our conservative link policy, not a universal browser/email-client limit.
export const mailtoPreparationLimit=2000;
export const faultIntro='Funktioniert etwas auf unserer Website nicht richtig? Bitte beschreiben Sie das Problem möglichst genau. Ihre Angaben helfen uns, den Fehler nachzuvollziehen und zu beheben.';
export const confidentialNotice='Bitte achten Sie darauf, dass Screenshots und Videos keine Passwörter, privaten Nachrichten, Kontodaten oder sonstigen vertraulichen Informationen enthalten. Entfernen oder verdecken Sie solche Angaben vor dem Versand.';
export const attachmentNotice='Bitte fügen Sie Ihren Screenshot oder Ihr Video im geöffneten E-Mail-Programm als Anhang hinzu. Die Website überträgt diese Dateien nicht automatisch.';
export const faultChoices={device:['Windows-PC','MacBook','iPhone','Samsung Galaxy','Anderes Smartphone','Tablet','Anderes Gerät','Nicht bekannt'],os:['Windows 11','macOS','iOS','Android','Linux','Anderes Betriebssystem','Nicht bekannt'],browser:['Google Chrome','Safari','Mozilla Firefox','Microsoft Edge','Anderer Browser','Nicht bekannt'],webapp:['Ja','Nein','Nicht bekannt'],settings:['Werbeblocker','VPN','Privater beziehungsweise Inkognito-Modus','Browsererweiterungen','Besondere Sicherheitseinstellungen','Keine','Nicht bekannt']};
export function berlinDateTime(now=new Date()){
 const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(x=>[x.type,x.value]));
 return {date:`${p.year}-${p.month}-${p.day}`,time:`${p.hour}:${p.minute}`};
}
export function emptyFault(url='',now=new Date()){return {url,description:'',steps:'',...berlinDateTime(now),device:'',deviceDetails:'',os:'',osDetails:'',browser:'',browserDetails:'',webapp:'',settings:[],settingsDetails:'',attachments:'',contactEmail:''}}
export function toggleFaultSetting(previous,choice,checked){if(!checked)return previous.filter(x=>x!==choice);if(['Keine','Nicht bekannt'].includes(choice))return [choice];return [...new Set([...previous.filter(x=>!['Keine','Nicht bekannt'].includes(x)),choice])]}
export function validateFault(d){const e={};if(!d.url?.trim())e.url='Bitte die betroffene Websiteadresse angeben.';else{try{const u=new URL(d.url);if(!['http:','https:'].includes(u.protocol)||u.username||u.password||/[\r\n]/.test(d.url))throw Error();}catch{e.url='Bitte eine vollständige http://- oder https://-Adresse ohne Zugangsdaten angeben. Die Hash-Route darf enthalten bleiben.'}}
 if(!d.description?.trim())e.description='Bitte beschreiben Sie das Problem.';
 if(d.date&&(!/^\d{4}-\d{2}-\d{2}$/.test(d.date)||!Number.isFinite(Date.parse(d.date))||new Date(d.date).toISOString().slice(0,10)!==d.date))e.date='Bitte ein gültiges Datum angeben oder das freiwillige Feld leeren.';
 if(d.time&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(d.time))e.time='Bitte eine gültige Uhrzeit angeben oder das freiwillige Feld leeren.';
 if(d.contactEmail&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.contactEmail))e.contactEmail='Bitte eine gültige E-Mail-Adresse angeben oder das freiwillige Feld leeren.';return e;
}
const given=s=>s!==''?s:'Nicht angegeben';
const detail=(choice,extra)=>given(choice)+(extra!==''?'\nErgänzende Angabe: '+extra:'');
export function faultBody(d){return `Technische Fehlermeldung – Bergedorf gemeinsam\n\n1. Betroffene Websiteadresse:\n${given(d.url)}\n\n2. Beschreibung des Fehlers:\n${given(d.description)}\n\n3. Schritte zur Reproduktion:\n${given(d.steps)}\n\n4. Datum und Uhrzeit:\nDatum: ${given(d.date)}\nUngefähre Uhrzeit: ${given(d.time)}\nZeitzone für diese Angaben: Europe/Berlin\n\n5. Verwendetes Gerät:\n${detail(d.device,d.deviceDetails)}\n\n6. Betriebssystem:\n${detail(d.os,d.osDetails)}\n\n7. Browser:\n${detail(d.browser,d.browserDetails)}\nAls installierte Web-App geöffnet: ${given(d.webapp)}\n\n8. Besondere Einstellungen:\n${detail(d.settings.length?d.settings.join(', '):'',d.settingsDetails)}\n\n9. Screenshot beziehungsweise Video:\n${given(d.attachments)}\nDateien bitte selbst im E-Mail-Programm anhängen; die Website hat keine Dateien angehängt.\n\nZusätzliche Kontaktangabe:\n${given(d.contactEmail)}\n\nDiese Nachricht wurde lokal vorbereitet. Versand und Anhänge müssen durch die meldende Person im eigenen E-Mail-Programm erfolgen.`}
export function faultCopyText(d){return `An: ${faultRecipient}\nBetreff: ${faultSubject}\n\n${faultBody(d)}`}
const encoded=s=>encodeURIComponent(s.replace(/\r\n|\r|\n/g,'\n').replace(/\n/g,'\r\n'));
export function faultEmail(d){const short=`mailto:${faultRecipient}?subject=${encoded(faultSubject)}`,full=short+'&body='+encoded(faultBody(d));return {href:full.length<=mailtoPreparationLimit?full:short,fullBodyIncluded:full.length<=mailtoPreparationLimit,body:faultBody(d),copyText:faultCopyText(d)}}
export async function copyFaultText(clipboard,text){if(typeof clipboard?.writeText!=='function')throw Error('clipboard unavailable');await clipboard.writeText(text)}
