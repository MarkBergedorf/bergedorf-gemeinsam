'use client';
import {useContext,useState} from 'react';
import {WorkspaceContext as C} from './workspace-context';
import initialState from '../pages/public-state.json';
import {unavailableMessage} from '../pages/backend-client.mjs';
import {Support} from './support';
import {ReaderList} from './contributions';
import {politicalExample,historicalSources} from '../lib/research';
import {HistoryPlaces} from './history-places';
export function BackendUnavailable(_props:any={}){return <section className="section page-content"><h1>Backend noch nicht angeschlossen</h1><p>{unavailableMessage}</p><a href="#start">Zur Startseite</a></section>}
export function WorkspaceProvider({children}:{children:React.ReactNode}){const [message,setMessage]=useState('');const blocked=async()=>{setMessage(unavailableMessage);return null};return <C.Provider value={{state:initialState,usage:null,busy:false,refresh:async()=>{},call:blocked,upload:blocked}}>{children}{message&&<aside className="pages-backend-notice" role="status">{message}</aside>}</C.Provider>}
export const useWorkspace=()=>useContext(C);
export function Workspace({page}:{page:string}){return page==='unterstuetzung'?<Support/>:<BackendUnavailable/>}
export function WorkspaceEntries({area}:{area:string}){return <ReaderList area={area}/>}
export function AreaNotice(_props:any={}){return null}
export const Composer=BackendUnavailable;
export const Cases=BackendUnavailable;
export const CommentsAdmin=BackendUnavailable;
export const BrandingAdmin=BackendUnavailable;
export const ImageUploader=BackendUnavailable;
export const SupportSimulation=BackendUnavailable;
function Link({href,children}:{href:string,children:any}){return <a href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a>}
export {PrivateMap} from './organisation-map';

export function ResearchSection({area}:{area:string}){const [query,setQuery]=useState(''),[category,setCategory]=useState(''),[map,setMap]=useState(false);if(area==='politik')return <section className="section" id="amtliche-themen"><h2>Themen und Beschlüsse der Bezirksversammlung</h2><p>Belegte Zusammenfassungen und Originalquellen. Ein angekündigtes Beratungsthema ist noch kein nachgewiesener Beschluss.</p><div className="button-row" style={{margin:'18px 0'}}><a className="outline" href="https://sitzungsdienst-bergedorf.hamburg.de/bi/si010_e.asp" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Sitzungskalender</a></div><article className="panel meeting-plan-sample"><div className="meeting-plan-watermark" role="note"><span>Automatische Aktualisierung derzeit nicht möglich. Laut Auskunft der Verfahrensbetreuung der Bezirksversammlung Bergedorf vom November 2026 ist die Einführung einer OParl-Schnittstelle für das 4. Quartal 2028 vorgesehen. Bis dahin steht der offizielle Sitzungskalender zur Verfügung.</span></div><span className="pill green">Aus offiziellen Unterlagen zusammengefasst</span><h3>{politicalExample.title}</h3><p>{politicalExample.summary}</p><div className="table-wrap"><table><tbody>{politicalExample.facts.map(([k,v])=><tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table></div>{politicalExample.sources.map(s=><p key={s.url}><Link href={s.url}>{s.label}</Link></p>)}<p className="muted">Eigene Zusammenfassung · Quelle: Freie und Hansestadt Hamburg, Bezirksversammlung Bergedorf · Datenlizenz Deutschland Namensnennung 2.0 · geprüft 18.10.2026. Keine aus Metadaten abgeleitete Abstimmung.</p></article></section>;
if(area==='geschichte')return <HistoryPlaces/>;
return null;}

