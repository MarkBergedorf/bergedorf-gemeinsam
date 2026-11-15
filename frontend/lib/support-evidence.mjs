// Expense evidence supplements the existing annual aggregates; it never replaces them.
const id=v=>{if(typeof v!=='string'||!/^expense-[a-z0-9-]{1,60}$/.test(v))throw Error('Eine eindeutige Ausgabenkennung ist erforderlich.');return v};
const hash=v=>{if(typeof v!=='string'||!/^[a-f0-9]{64}$/.test(v))throw Error('Interne Belegkennung muss ein SHA-256-Prüfwert sein.');return v};
const amount=v=>{if(!Number.isSafeInteger(v)||v<0||v>99999999999)throw Error('Ungültiger Belegbetrag in Cent.');return v};
const text=(v,max=1500)=>{if(typeof v!=='string'||!v.trim()||v.length>max||/<\/?[a-z][^>]*>/i.test(v))throw Error('Sachliche Textangaben ohne HTML erforderlich.');return v.trim()};
const berlinDay=now=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(now));
const day=(v,now)=>{if(typeof v!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(v)||!Number.isFinite(Date.parse(v))||new Date(v).toISOString().slice(0,10)!==v||v>berlinDay(now))throw Error('Ein gültiges, nicht zukünftiges Beleg- oder Zahlungsdatum ist erforderlich.');return v};
export const evidenceCategories=['Hosting','Speicher','Datenbank','Domain','Software','Sicherheit','Wartung','Externe technische Leistung'];
export const evidenceChecks=['originalSeparated','redactedCopy','metadataRemoved','hiddenTextRemoved','attachmentsRemoved','fileNameReviewed','publicFieldsReviewed','paymentReconciled','explicitApproval'];
export function evidenceFingerprint(data){return JSON.stringify({opening:data.opening||null,years:[...(data.years||[])].sort((a,b)=>a.year-b.year).map(r=>({year:r.year,received:r.received,refunds:r.refunds,fees:r.fees,costs:r.costs,costCredits:r.costCredits||0,asOf:r.asOf}))})}
function assetFor(record,data){const path=record.publicProofPath;if(typeof path!=='string'||!/^\/assets\/finance-evidence\/[a-f0-9]{64}\.png$/.test(path))return null;return data.evidenceStorage?.publicAssets?.find(a=>a.path===path&&a.sha256===record.publicProofHash&&a.redactionVerified===true&&a.metadataStripped===true&&a.flattened===true)||null}
export function validateExpenseDraft(input={},records=[],now=new Date().toISOString()){
 const key=id(input.id),kind=input.kind==='credit'?'credit':'expense',paidOn=day(input.paidOn,now),invoiceDate=day(input.invoiceDate,now),invoiceKey=hash(input.invoiceKey),paymentKey=hash(input.paymentKey),invoiceCents=amount(input.invoiceCents),fundedCents=amount(input.fundedCents);
 if(fundedCents>invoiceCents)throw Error('Der aus Unterstützungsmitteln finanzierte Betrag darf den Rechnungsbetrag nicht übersteigen.');
 if(!evidenceCategories.includes(input.category))throw Error('Nur belegte Plattformkosten auswählen; Zahlungsgebühren gehören ausschließlich in die Gebührenspalte.');
 if(!['direct','private-reimbursement','private-only'].includes(input.fundingMode))throw Error('Finanzierungsart auswählen.');
 if(input.fundingMode==='private-only'&&fundedCents!==0)throw Error('Rein private Finanzierung darf keine Unterstützungsmittel verbrauchen.');
 if(records.some(r=>r.id!==key&&r.invoiceKey===invoiceKey))throw Error('Diese Rechnung ist bereits erfasst. Eine spätere Erstattung oder Korrektur muss denselben Ausgabeneintrag fortschreiben.');
 if(fundedCents>0&&records.some(r=>r.id!==key&&r.fundedCents>0&&r.paymentKey===paymentKey))throw Error('Dieser Zahlungsnachweis ist bereits zugeordnet. Doppelbuchung prüfen.');
 const originalExpenseId=kind==='credit'?id(input.originalExpenseId):null;
 if(kind==='credit'){
  const original=records.find(r=>r.id===originalExpenseId&&r.kind==='expense');if(!original)throw Error('Die Gutschrift benötigt eine vorhandene zugehörige Ausgabe.');
  const already=records.filter(r=>r.id!==key&&r.kind==='credit'&&r.originalExpenseId===originalExpenseId).reduce((n,r)=>n+r.fundedCents,0);
  if(fundedCents+already>original.fundedCents)throw Error('Gutschriften dürfen den aus Unterstützungsmitteln finanzierten Originalbetrag nicht übersteigen.');
 }
 return {id:key,kind,paidOn,invoiceDate,invoiceKey,paymentKey,invoiceCents,fundedCents,category:input.category,fundingMode:input.fundingMode,title:text(input.title,200),supplier:text(input.supplier,200),reason:text(input.reason),correctionNote:input.correctionNote?text(input.correctionNote):'',originalExpenseId,publicProofPath:typeof input.publicProofPath==='string'?input.publicProofPath:'',publicProofHash:input.publicProofHash||'',checks:Object.fromEntries(evidenceChecks.map(k=>[k,input.checks?.[k]===true]))};
}
function evidenceTotals(records){const byYear=new Map();for(const r of records){const y=Number(r.paidOn.slice(0,4)),totals=byYear.get(y)||{costs:0,costCredits:0};totals[r.kind==='credit'?'costCredits':'costs']+=r.fundedCents;byYear.set(y,totals)}return byYear}
export function reconcileExpenseEvidence(data,records=data.expenseDrafts||[]){const totals=evidenceTotals(records),errors=[];for(const row of data.years||[]){const r=totals.get(row.year)||{costs:0,costCredits:0};if(r.costs!==row.costs||r.costCredits!==(row.costCredits||0))errors.push('Belegsumme und bestätigte Jahresaggregate stimmen für '+row.year+' nicht überein.');totals.delete(row.year)}if(totals.size)errors.push('Für mindestens ein Zahlungsjahr fehlen bestätigte Jahresaggregate.');return {ok:!!data.opening&&(data.years||[]).length>0&&errors.length===0,errors};}
const publicRecord=(r,now,previous)=>({id:r.id,kind:r.kind,paidOn:r.paidOn,invoiceDate:r.invoiceDate,title:r.title,supplier:r.supplier,invoiceCents:r.invoiceCents,fundedCents:r.fundedCents,privateCents:r.invoiceCents-r.fundedCents,category:r.category,fundingMode:r.fundingMode,reason:r.reason,originalExpenseId:r.originalExpenseId,proofPath:r.publicProofPath,status:r.kind==='credit'?'Gutschrift abgeglichen und nachgewiesen':'Bezahlt und nachgewiesen',publishedAt:previous?.publishedAt||now,updatedAt:now,correctionNote:r.correctionNote,changes:previous?[...(previous.changes||[]),{at:previous.updatedAt,title:previous.title,fundedCents:previous.fundedCents,invoiceCents:previous.invoiceCents,paidOn:previous.paidOn,invoiceDate:previous.invoiceDate,supplier:previous.supplier,category:previous.category,fundingMode:previous.fundingMode,reason:previous.reason,note:r.correctionNote}]:[]});
export function updateExpenseEvidence(data,payload,now){const d=structuredClone(data),records=d.expenseDrafts||[];
 if(payload.operation==='expense-draft'){
  const next=validateExpenseDraft(payload.record,records,now),previous=records.find(r=>r.id===next.id);if(previous&&!next.correctionNote)throw Error('Änderungen bestehender Belege benötigen eine nachvollziehbare Korrekturbegründung.');
  d.expenseDrafts=[...records.filter(r=>r.id!==next.id),{...next,updatedAt:now}];d.expenseAudit=[...(d.expenseAudit||[]),{id:next.id,at:now,action:previous?'corrected':'drafted',reason:next.correctionNote||'Neuer Belegentwurf'}];
 }else if(payload.operation==='expense-release'){
  if(d.evidenceStorage?.verified!==true)throw Error('Geschützte Originalablage und geprüfter Veröffentlichungsprozess fehlen. Belegfreigabe bleibt gesperrt.');
  if(payload.confirmed!==true)throw Error('Die öffentliche Vorschau und den vollständigen Finanzabgleich ausdrücklich freigeben.');
  const checked=records.map(r=>validateExpenseDraft(r,records,now));
  if(checked.some(r=>evidenceChecks.some(k=>r.checks[k]!==true)||!assetFor(r,d)))throw Error('Alle Datenschutz-, Dokument-, Zahlungs- und Freigabekontrollen sowie geprüfte öffentliche PNG-Kopien sind erforderlich.');
  const reconciliation=reconcileExpenseEvidence(d,checked);if(!reconciliation.ok)throw Error(reconciliation.errors.join(' ')||'Bestätigte Finanzdaten fehlen.');
  d.expensePublication={draftFingerprint:JSON.stringify(checked),fingerprint:evidenceFingerprint(d),publishedAt:now,entries:checked.map(r=>publicRecord(r,now,d.expensePublication?.entries?.find(p=>p.id===r.id)))};
 }else throw Error('Unbekannte Belegaktion.');d.updatedAt=now;return d;
}
export function publicExpenseEvidence(data,now=new Date().toISOString()){
 const p=data?.expensePublication;if(!p)return {status:'not-published',entries:[],publishedAt:null};
 if(data.evidenceStorage?.verified!==true||p.fingerprint!==evidenceFingerprint(data))return {status:'reconciliation-required',entries:[],publishedAt:p.publishedAt||null};
 const drafts=data.expenseDrafts||[];let checked;try{checked=drafts.map(r=>validateExpenseDraft(r,drafts,now))}catch{return {status:'reconciliation-required',entries:[],publishedAt:p.publishedAt||null}}if(p.draftFingerprint!==JSON.stringify(checked)||!reconcileExpenseEvidence(data,p.entries).ok)return {status:'reconciliation-required',entries:[],publishedAt:p.publishedAt||null};
 // Re-project explicitly; private document IDs, filenames, hashes and audit records never leave here.
 const entries=p.entries.map(r=>{const draft=drafts.find(d=>d.id===r.id);if(!draft||r.proofPath!==draft.publicProofPath||!assetFor(draft,data)||evidenceChecks.some(k=>draft.checks?.[k]!==true))return null;return Object.fromEntries(['id','kind','paidOn','invoiceDate','title','supplier','invoiceCents','fundedCents','privateCents','category','fundingMode','reason','originalExpenseId','proofPath','status','publishedAt','updatedAt','correctionNote','changes'].map(k=>[k,k==='changes'?(r.changes||[]).map(c=>Object.fromEntries(['at','title','fundedCents','invoiceCents','paidOn','invoiceDate','supplier','category','fundingMode','reason','note'].map(k=>[k,c[k]]))):r[k]]))});
 if(entries.some(r=>!r))return {status:'reconciliation-required',entries:[],publishedAt:p.publishedAt||null};
 return {status:'published',entries:entries.sort((a,b)=>a.paidOn.localeCompare(b.paidOn)||a.id.localeCompare(b.id)),publishedAt:p.publishedAt};
}
export function goFundMeCampaignUrl(value){try{const u=new URL(value);return u.protocol==='https:'&&['gofundme.com','www.gofundme.com'].includes(u.hostname)&&!u.username&&!u.password&&!u.port&&!u.hash&&/^\/(?:[a-z]{2}-[a-z]{2}\/)?f\/[a-z0-9-]+\/?$/.test(u.pathname)?u.href:null}catch{return null}}
export function validateGoFundMeProvider(payload){if(!goFundMeCampaignUrl(payload.url))throw Error('Nur eine konkrete geprüfte GoFundMe-Kampagne verwenden; die Anbieterstartseite ist kein Zahlungsweg.');for(const key of ['campaignApprovalRecorded','recipientChecked','platformPurposeChecked','identityAndBankChecked','termsAndFeesChecked','privacyAndReconciliationChecked'])if(payload[key]!==true)throw Error('Gesonderte Betreiberfreigabe und tatsächliche Kampagnen-, Empfänger-, Konto-, Gebühren- und Datenschutzprüfung fehlen.');return true}
