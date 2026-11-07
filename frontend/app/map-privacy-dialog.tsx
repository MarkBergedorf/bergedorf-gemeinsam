'use client';
import {useEffect,useId,useRef,useState} from 'react';
import {mapPrivacyInfo} from '../lib/map-privacy-info.mjs';
type Provider='openfreemap'|'openstreetmap'|'google';
export function useMapPrivacy(provider:Provider,onAgree:()=>void){
 const id=useId(),dialog=useRef<HTMLDialogElement>(null),origin=useRef<HTMLElement|null>(null),pending=useRef<(()=>void)|null>(null),[open,setOpen]=useState(false);
 const info=mapPrivacyInfo[provider];
 function decide(agree:boolean){const action=pending.current;pending.current=null;dialog.current?.close();setOpen(false);if(agree&&action)action();origin.current?.focus({preventScroll:true})}
 function ask(event?:{currentTarget:EventTarget|null}){origin.current=event?.currentTarget as HTMLElement||document.activeElement as HTMLElement;pending.current=onAgree;setOpen(true)}
 useEffect(()=>{if(open&&!dialog.current?.open)dialog.current?.showModal()},[open]);
 return {ask,dialog:<dialog ref={dialog} className="map-privacy-dialog" aria-labelledby={id+'-title'} aria-describedby={id+'-data'} onCancel={e=>{e.preventDefault();decide(false)}} onClose={()=>{if(pending.current)decide(false)}} onClick={e=>{if(e.target===e.currentTarget)decide(false)}}><div className="dialog-inner"><button type="button" autoFocus className="text-button map-privacy-close" aria-label="Datenschutzfenster schließen" onClick={()=>decide(false)}>Schließen ×</button><h2 id={id+'-title'}>Datenschutz: {info.name}</h2><p><strong>{info.purpose}</strong></p><p id={id+'-data'}>{info.data}</p><h3>Cookies</h3><p>{info.cookies}</p><p>{info.delivery}</p><p>{info.links.map(([label,url],index)=><span key={url}>{index>0?' · ':''}<a href={url} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">{label}</a></span>)} · <a href="#datenschutz" target="_blank" rel="noopener noreferrer">Unsere Datenschutzerklärung</a></p><p>{provider==='google'?'Ablehnen – Google Maps wird nicht geöffnet. Zustimmen – Google Maps wird geöffnet. Auf der Google-Website gelten deren eigene Datenschutzentscheidungen.':'Ablehnen – Die Karte bleibt ungeladen. Zustimmen – Die Karte wird geladen.'}</p><div className="map-privacy-actions"><button type="button" className="outline" onClick={()=>decide(false)}>Ablehnen</button><button type="button" className="outline" onClick={()=>decide(true)}>Zustimmen</button></div></div></dialog>};
}
