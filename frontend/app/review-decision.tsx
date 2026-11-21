'use client';
import {useRef,useState} from 'react';
import {useDirty} from './navigation';

// publicRelease is server-owned deployment configuration; changing the hosting
// audience must update it in the release procedure. This component changes neither.
export function ReviewDecision({doc,call,busy,publicRelease=false}:{doc:any,call:(action:string,payload:any)=>Promise<any>,busy:boolean,publicRelease?:boolean}){
 const [reason,setReason]=useState(''),[material,setMaterial]=useState(false),[currentnessDecision,setCurrentnessDecision]=useState(''),[currentnessReason,setCurrentnessReason]=useState(''),[status,setStatus]=useState('');
 const dialog=useRef<HTMLDialogElement>(null),trigger=useRef<HTMLButtonElement>(null),pending=useRef(false);
 useDirty(!!reason);
 function close(){dialog.current?.close();trigger.current?.focus()}
 async function save(decision:'approve'|'reject'){
  if(busy||pending.current||decision==='reject'&&!reason.trim()||decision==='approve'&&doc.draftCurrentness?.isCurrentTopic===true&&!['confirm','deny'].includes(currentnessDecision)||currentnessDecision==='deny'&&!currentnessReason.trim())return;
  pending.current=true;
  if(decision==='approve')close();
  try{const r=await call('review',{id:doc.id,decision,reason,material,currentnessDecision:doc.draftCurrentness?.isCurrentTopic===true?currentnessDecision:'deny',currentnessReason});if(r){setReason('');setCurrentnessReason('');setStatus(decision==='approve'?(publicRelease?'Freigegeben':'Privat freigegeben')+' · Fassung '+r.state.documents.find((d:any)=>d.id===doc.id)?.version+'.':r.message)}}finally{pending.current=false}
 }
 return <><label>Entscheidungsbegründung zur Beitragsprüfung · bei Freigabe freiwillig<textarea value={reason} onChange={e=>setReason(e.target.value)} maxLength={2000}/></label>
 {doc.draftCurrentness?.isCurrentTopic!==true&&<p className="currentness-review-status">Verfasserangabe zur Aktualität: Nein (Standardeinstellung). Dieser Beitrag erhält dadurch keine Startseitenberechtigung.</p>}{doc.draftCurrentness?.isCurrentTopic===true&&<fieldset className="currentness-review"><legend>Gesonderte redaktionelle Aktualitätsentscheidung</legend><p>Verfasserangabe: Ja{doc.draftCurrentness.eventDate?' · Ereignis/Entwicklung: '+doc.draftCurrentness.eventDate:''}</p><p><strong>Begründung:</strong> {doc.draftCurrentness.reason}</p><label>Ist die Aktualitätskennzeichnung sachlich bestätigt?<select value={currentnessDecision} onChange={e=>setCurrentnessDecision(e.target.value)}><option value="">Bitte gesondert entscheiden</option><option value="confirm">Ja, bestätigen</option><option value="deny">Nein, ablehnen</option></select></label>{currentnessDecision==='deny'&&<label>Begründung der abweichenden Aktualitätsentscheidung<textarea maxLength={2000} value={currentnessReason} onChange={e=>setCurrentnessReason(e.target.value)}/></label>}<p>Eine Ablehnung der Aktualitätskennzeichnung verhindert nicht die Freigabe des übrigen Beitrags.</p></fieldset>}
 {doc.published&&<label className="check"><input type="checkbox" checked={material} onChange={e=>setMaterial(e.target.checked)}/>Wesentliche Inhaltsänderung ausdrücklich bestätigt; startet den Aktualitätszeitraum neu und erfordert erneute Zustimmung.</label>}
 <p id="revision-reason-hint">Bitte begründen Sie, was überarbeitet werden soll.</p>
 <div className="button-row"><button ref={trigger} className="primary" disabled={busy||doc.draftCurrentness?.isCurrentTopic===true&&(!['confirm','deny'].includes(currentnessDecision)||currentnessDecision==='deny'&&!currentnessReason.trim())} onClick={()=>dialog.current?.showModal()}>Beitragsfassung freigeben</button><button className="outline revision-request" aria-describedby="revision-reason-hint" disabled={!reason.trim()||busy} onClick={()=>save('reject')}>Überarbeitung anfordern</button></div>
 <p className="local-status" role="status" aria-live="polite">{status}</p>
 <dialog ref={dialog} className="external-link-dialog review-confirmation" aria-labelledby="review-confirm-heading" aria-describedby="review-confirm-description" onCancel={e=>{e.preventDefault();close()}}><div className="dialog-inner"><h2 id="review-confirm-heading">Beitragsfassung freigeben?</h2><p id="review-confirm-description">{publicRelease?'Mit der Freigabe wird diese Beitragsfassung öffentlich für die Leser der Website sichtbar.':'Mit der Freigabe wird diese Beitragsfassung für die Leser der Website sichtbar. In der aktuellen privaten Vorschau sind das ausschließlich zugangsberechtigte Personen.'}</p><div className="button-row"><button autoFocus className="outline" onClick={close}>Abbrechen</button><button className="primary" disabled={busy} onClick={()=>save('approve')}>OK – freigeben</button></div></div></dialog></>;
}
