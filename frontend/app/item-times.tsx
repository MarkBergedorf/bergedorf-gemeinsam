// @ts-ignore shared timezone formatter
import {displayTime,itemTimes} from '../lib/display-time.mjs';
export function ItemTimes({item,empty=false}:{item:any,empty?:boolean}){const entries=itemTimes(item||{});return entries.length?<dl className="item-times">{entries.map(({key,label,value}:any)=><div key={key}><dt>{item?.kind==='Meldung'&&key==='publishedAt'?'Gemeldete Fassung freigegeben':label}:</dt><dd>{displayTime(value)}</dd></div>)}</dl>:empty?<p className="muted">Erstellungs-, Änderungs- und Entscheidungszeitpunkte nicht gespeichert.</p>:null}
