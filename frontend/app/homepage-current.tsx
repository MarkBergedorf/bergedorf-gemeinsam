'use client';
import {useWorkspace} from './workspace';
import {homepageCurrentItems,formatBerlinDate,eventDisplayDate,eventDisplayTime} from '../lib/homepage-current.mjs';
import {excerpt} from '../lib/excerpt.mjs';

const labels:Record<string,string>={politik:'Politisches Thema',anliegen:'Anliegen',erfahrung:'Erfahrungsbericht',geschichte:'Geschichte und Erinnerung',news:'Nachricht',bericht:'Redaktioneller Bericht',redaktion:'Redaktioneller Beitrag'};
export function HomepageCurrent(){
 const {state}=useWorkspace(),items=homepageCurrentItems(state,new Date());
 return <section className="section homepage-current" aria-labelledby="homepage-current-heading"><div className="section-heading"><div><div className="eyebrow">GEPRÜFTE UND ZEITLICH EINGEORDNETE INHALTE</div><h2 id="homepage-current-heading">Aktuelles aus Bergedorf</h2></div></div>
  {items.length?<div className="homepage-current-grid">{items.map(item=><article className="homepage-current-card" key={item.id}><div className="homepage-current-meta"><span className="homepage-current-kind">{item.type==='event'?'Veranstaltung':labels[item.kind]||'Aktuelles Thema'}</span>{item.highlighted&&<span className="homepage-current-highlight">Redaktionell hervorgehoben durch {item.status.highlightAttributedTo} · bis {formatBerlinDate(item.status.expiresOn+'T12:00:00+01:00')} · {item.status.highlightReason}</span>}</div><h3><a href={item.href}>{item.title}</a></h3><p>{excerpt(item.body,210)}</p><p className="homepage-current-place">{item.place}</p>{item.type==='event'?<p className="homepage-current-date"><strong>{eventDisplayDate(item.startsAt)} · {eventDisplayTime(item.startsAt,item.endsAt)}</strong><br/>Redaktionell geprüft am {formatBerlinDate(item.checkedOn+'T12:00:00+01:00')}. <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Veranstaltungsquelle</a></p>:<p className="homepage-current-date">Veröffentlicht am {formatBerlinDate(item.publishedAt)}{item.updatedAt&&item.updatedAt!==item.publishedAt?<> · wesentlich aktualisiert am {formatBerlinDate(item.updatedAt)}</>:null}</p>}<a className="homepage-current-link" href={item.href}>Vollständigen Beitrag ansehen →</a></article>)}</div>:<p className="homepage-current-empty">Zurzeit sind keine redaktionell bestätigten aktuellen Beiträge vorhanden.</p>}
 </section>;
}
