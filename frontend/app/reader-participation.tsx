'use client';
import {useId} from 'react';
// @ts-ignore shared browser/server validation
import {participationText} from '../lib/content-config.mjs';

export function ParticipationTextForm({kind,value,onChange,onSubmit,busy,status,children}:{kind:'comment'|'report',value:string,onChange:(v:string)=>void,onSubmit:()=>Promise<void>,busy:boolean,status?:string,children?:React.ReactNode}){
 const id=useId(),checked=participationText(kind,value),comment=kind==='comment';
 return <form className="reader-text-form" onSubmit={e=>{e.preventDefault();if(!busy&&!checked.error)void onSubmit()}}>
 <label htmlFor={id}>{comment?'Kommentartext · ausschließlich erfundene Testdaten':'Bitte nennen Sie die betroffene Textstelle und erklären Sie konkret, warum Sie darin einen Verstoß sehen. Mindestens 100, höchstens 1.500 Zeichen.'}</label>
 <textarea id={id} rows={5} value={value} onChange={e=>onChange(e.target.value)} aria-describedby={id+'-counter'} aria-invalid={!!value&&!!checked.error} placeholder={comment?'Formulieren Sie Ihren Kommentar positiv, sachlich und höflich. Verzichten Sie auf persönliche Namen.':undefined}/>
 <p id={id+'-counter'} className={value&&checked.error?'field-error':'field-counter'}><span>Mindestens {checked.min.toLocaleString('de-DE')} Zeichen · höchstens {checked.max.toLocaleString('de-DE')} Zeichen. </span><output aria-live="polite">{checked.count.toLocaleString('de-DE')} Zeichen</output><span> · Ohne führenden und nachfolgenden Leerraum.</span>{value&&checked.error&&<strong>{checked.error}</strong>}</p>
 {children}<button className="outline participation-submit" disabled={!!checked.error||busy} type="submit">{comment?'Kommentar zur Prüfung einreichen':'Meldung intern einreichen'}</button><p className="local-status" role="status" aria-live="polite">{status}</p></form>;
}

export function PositiveReactionButtons({reactions,busy,onReact}:{reactions:any[],busy:boolean,onReact:(symbol:string)=>unknown}){return <><p className="pages-feature-note">Reaktionen sind in dieser statischen Testfassung nicht verfügbar.</p><div className="reactions">{[['up','👍','Daumen hoch'],['heart','♥','Herz'],['smile','☺','Lächeln']].map(([symbol,icon,label])=><button key={symbol} aria-label={label} aria-pressed={reactions.some((r:any)=>r.symbol===symbol&&r.mine)} disabled={true} title="Reaktionen benötigen das noch nicht angeschlossene Backend" onClick={()=>onReact(symbol)}>{icon} {reactions.filter((r:any)=>r.symbol===symbol).length}</button>)}</div></>}
