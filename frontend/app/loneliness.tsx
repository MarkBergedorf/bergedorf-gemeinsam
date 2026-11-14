'use client';
import {LonelinessEvents,LonelinessConnections,LonelinessPlatformLinks,LonelinessSourceRegister} from './loneliness-final';
import {EncounterTopicLinks,EncounterArticleEntry} from './encounter-policy';
import {HistoricalDirectoryEntry} from './historical-directory-entry';
import {useEffect,useRef,useState} from 'react';
import {ArrowRight,ArrowLeft,Search,HeartHandshake,BookOpen} from 'lucide-react';
import {useRoute,navigate} from './navigation';
import {lonelinessRoute,lonelinessGroups,lonelinessTopics,lonelinessIndex,resolveLonelinessPath,lonelinessParentHref,lonelinessBreadcrumbs,searchLoneliness,lonelinessSearchHref} from '../lib/loneliness.mjs';

import {lonelinessArticles} from '../lib/loneliness-articles.mjs';
import {LonelinessHelp,LonelinessUrgentHelp} from './loneliness-help';
import {LonelinessArticle,LonelinessCommentPreview} from './loneliness-article';

import {HistoricalCollection,DistrictCards,MeetingComment} from './loneliness-local';
import {resolveLocalView} from '../lib/loneliness-local.mjs';
function topicDescription(topic:any){return topic.id==='hilfe'?'Orientierung und überprüfte Zugänge zu Beratung, Gesprächen und praktischer Unterstützung in Bergedorf.':topic.description}
function TopicCards({topics}:{topics:any[]}){return <div className="loneliness-cards">{topics.map(topic=><a key={topic.id} className="loneliness-card" href={topic.href||lonelinessIndex.find(n=>n.id===topic.id)?.href}><h3 className="loneliness-card-title">{topic.title}</h3><span>{topicDescription(topic)}</span><span className="loneliness-card-link">Thema öffnen <ArrowRight aria-hidden="true" size={18}/></span></a>)}</div>}
export function LonelinessPage(){
 const route=useRoute(),path=route.parts.slice(1),node=resolveLonelinessPath(path),isRoot=path.length===0,q=(route.params.q||'').slice(0,300),[draft,setDraft]=useState(q),heading=useRef<HTMLHeadingElement>(null);
 const {place,district,invalid:invalidDetail,title:detailTitle,href:detailHref,parent:detailParent}=resolveLocalView(node?.id,route.params),detail=place||district;
 const pathKey=path.join('/')+(route.params.ort||route.params.stadtteil||'');
 useEffect(()=>{setDraft(q)},[q]);
 useEffect(()=>{heading.current?.focus({preventScroll:true})},[pathKey]);
 const crumbs=[...lonelinessBreadcrumbs(node),...(detail?[{title:detailTitle,href:detailHref}]:[])],results=searchLoneliness(q);
 return <div className="section page-content loneliness-page">
 <nav className="loneliness-breadcrumbs" aria-label="Themenpfad"><ol>{crumbs.map((c,i)=><li key={c.href}>{i>0&&<span aria-hidden="true">›</span>}{i===crumbs.length-1&&(isRoot||node)?<span aria-current="page">{c.title}</span>:<a href={c.href}>{c.title}</a>}</li>)}</ol></nav>
 {!isRoot&&<a className="loneliness-back" href={detail||invalidDetail?detailParent:lonelinessParentHref(node)}><ArrowLeft aria-hidden="true" size={18}/> {detail||invalidDetail?'Zurück zu „'+node?.title+'“':node?.parents.length?'Zurück zu „'+node.parents.at(-1).title+'“':'Zurück zur Themenübersicht'}</a>}
 <header className="loneliness-intro"><div className="eyebrow">WISSEN · BEGEGNUNG · MITEINANDER</div><h1 ref={heading} tabIndex={-1}>{isRoot?'Einsamkeit in Bergedorf':detail?detailTitle:node?.title||'Thema nicht gefunden'}</h1><p>{isRoot?'Informationen verstehen, Orientierung finden und Begegnung mitgestalten: Hier entsteht der Themenbereich zu Einsamkeit und Gemeinschaft im Bezirk Bergedorf. Wählen Sie ein Thema oder suchen Sie gezielt nach einem Begriff.':detail?(place?'Standortgeschichte: Quellen, Erinnerungen und offene Fragen getrennt nachvollziehen.':district.intro):node?topicDescription(node):'Unter dieser Adresse ist kein Thema vorhanden. Über die Themenübersicht und die Suche finden Sie die verfügbaren Inhalte.'}</p></header>
 {isRoot&&<div className="loneliness-entry"><a className="loneliness-help" href="#einsamkeit/hilfe"><HeartHandshake aria-hidden="true" size={30}/><span><strong>Ich suche Kontakte oder Unterstützung</strong><span>Direkt zum Bereich Hilfe, Beratung und Unterstützung</span></span><ArrowRight aria-hidden="true"/></a><a className="loneliness-search-jump" href={lonelinessSearchHref('')} onClick={e=>{e.preventDefault();document.getElementById('loneliness-search')?.focus();document.getElementById('loneliness-search')?.scrollIntoView({block:'center'})}}><Search aria-hidden="true"/> Zur Themensuche</a></div>}
 {node&&node.path[0]==='hilfe'&&<LonelinessHelp key={pathKey} id={node.id}/>}
 {node&&['lebenssituationen','gesundheit','selbst-aktiv-werden','begegnung','begegnungsstaette','stadtteile'].includes(node.path[0])&&<p className="loneliness-direct-help"><a href="#einsamkeit/hilfe">Direkt zu Beratung, Gesprächsangeboten und praktischer Unterstützung</a></p>}
 {node&&node.path[0]==='gesundheit'&&<LonelinessUrgentHelp/>}
 {isRoot&&<EncounterArticleEntry/>}
 {['begegnung','stadtteile'].includes(node?.id)&&<HistoricalDirectoryEntry/>}
 <section className="loneliness-search" aria-labelledby="loneliness-search-heading"><h2 id="loneliness-search-heading">Themensuche</h2><form role="search" aria-label="Einsamkeitsthemen durchsuchen" onSubmit={e=>{e.preventDefault();navigate(lonelinessSearchHref(draft),{scroll:false})}}><label htmlFor="loneliness-search">Vorhandene Themen durchsuchen</label><div><input id="loneliness-search" type="search" value={draft} maxLength={300} onChange={e=>setDraft(e.target.value)} placeholder="Zum Beispiel: Begegnung oder Unterstützung"/><button type="submit"><Search aria-hidden="true" size={18}/> Suchen</button></div></form><p>Die Suche berücksichtigt nur tatsächlich vorhandene Überschriften, Kurzbeschreibungen und redaktionelle Texte.</p>
 {q&&<section className="loneliness-results" aria-labelledby="loneliness-results-heading"><h3 id="loneliness-results-heading">Suchergebnisse für „{q}“</h3><p role="status">{results.length} {results.length===1?'Thema gefunden':'Themen gefunden'}.{results.length===0?' Versuchen Sie einen anderen Suchbegriff.':''}</p><ul>{results.map(result=><li key={result.href}><a href={result.href}>{result.title}</a><p className="loneliness-result-path">{lonelinessBreadcrumbs(result).map(c=>c.title).join(' › ')}</p><p>{topicDescription(result)}</p></li>)}</ul><a href={lonelinessRoute}>Suche zurücksetzen und alle Themen anzeigen</a></section>}
 </section>
 {isRoot?<><aside className="loneliness-status"><BookOpen aria-hidden="true"/><div><strong>Dieser Themenbereich wird redaktionell aufgebaut.</strong><p>Die Themenstruktur mit 18 Hauptthemen, 109 Unterthemen und 12 weiteren Themenknoten ist angelegt. Die Hauptthemen 1 bis 10 sowie 17 und 18 sind redaktionell ausgearbeitet; die Hauptthemen 11 bis 16 sind weiterhin offen. Die Texte unterscheiden wissenschaftliche Belege, institutionelle Angaben und politische Positionen. Eine Auswahl überprüfter Hilfszugänge ist direkt erreichbar. Historische Standortgeschichten und gekennzeichnete Recherchehinweise sind erschlossen. Nicht freigegebene Bilddateien werden nicht veröffentlicht. Veranstaltungen, Beteiligung und Quellenstandards sind ergänzt; der Gesamtprüfbericht dokumentiert verbleibende Ausarbeitungen und Einzelnachweise. Die Übersicht ersetzt keine persönliche Beratung. Bergedorf gemeinsam ist eine private, unabhängige Bürgerplattform und keine offizielle Seite des Hamburger Bündnisses gegen Einsamkeit.</p></div></aside>{lonelinessGroups.map(group=><section className="loneliness-group" key={group.id} aria-labelledby={'loneliness-group-'+group.id}><div className="loneliness-group-heading"><span aria-hidden="true">{String(lonelinessGroups.indexOf(group)+1).padStart(2,'0')}</span><h2 id={'loneliness-group-'+group.id}>{group.title}</h2></div><TopicCards topics={lonelinessTopics.filter(t=>t.group===group.id)}/></section>)}</>:node?<>
 {!detail&&!invalidDetail&&node.children.length>0&&<section className="loneliness-group" aria-labelledby="loneliness-children-heading"><h2 id="loneliness-children-heading">{node.parents.length?'Weitere Themen':'Unterthemen'}</h2><TopicCards topics={node.children.map((c:any)=>lonelinessIndex.find(n=>n.id===c.id))}/></section>}
 {invalidDetail?<p role="alert">Unter dieser Adresse ist kein Standort beziehungsweise Stadtteil vorhanden. Der Zurück-Link führt zur Übersicht.</p>:district?<LonelinessArticle id={'district-'+district.id} article={district}/>:!place&&lonelinessArticles[node.id]&&<LonelinessArticle id={node.id}/>}
 {(node.id==='t10-6'||node.sharedCollection)&&!invalidDetail&&<HistoricalCollection key={pathKey} place={place||undefined}/>}
 {node.id==='t10-2'&&!detail&&!invalidDetail&&<DistrictCards/>}
 {['begegnungsstaette','t9-12'].includes(node.id)&&<MeetingComment key={pathKey}/>}
 {!detail&&!invalidDetail&&<section className="loneliness-topic-body" aria-labelledby="loneliness-content-heading"><h2 id="loneliness-content-heading">Inhaltliche Schwerpunkte</h2>{!lonelinessArticles[node.id]&&<p className="loneliness-editorial-note">Der redaktionelle Inhalt zu diesem Thema wird noch ergänzt. Die folgende Übersicht beschreibt den Themenumfang; es ist noch kein vollständiger Fachartikel veröffentlicht.</p>}{node.scope?.length>0&&<ul>{node.scope.map((point:string,i:number)=><li key={i}>{point}</li>)}</ul>}{node.content&&<p>{node.content}</p>}{node.sharedCollection&&<p>Das gemeinsame historische Verzeichnis oben erschließt belegte Standortgeschichten und gekennzeichnete offene Recherchehinweise. Die unterschiedlichen thematischen Zugänge verwenden dieselben Stammdaten. Ein Zusammenhang zwischen dem Verlust von Begegnungsorten und individueller Einsamkeit wird nicht als bewiesen vorausgesetzt.</p>}{node.plannedCommentMaxLength&&!lonelinessArticles[node.id]&&<p>Für dieses Thema ist später ein moderierter Kommentarbereich mit höchstens {node.plannedCommentMaxLength} Zeichen pro Kommentar vorgesehen. Die Kommentarfunktion ist derzeit nicht freigeschaltet.</p>}</section>}
 {['mitwirkung','t17-1','t17-3'].includes(node.id)&&!detail&&!invalidDetail&&<LonelinessEvents/>}
 {['mitwirkung','t17-6'].includes(node.id)&&<LonelinessPlatformLinks/>}
 {node.id==='quellen'&&<LonelinessSourceRegister/>}
 {!detail&&!invalidDetail&&<LonelinessConnections node={node}/>}
 {node.id==='t2-7'&&<EncounterTopicLinks/>}
 {['kennenlernen','t3-8'].includes(node.id)&&<LonelinessCommentPreview key={pathKey}/>}
 {node.related?.length>0&&<section className="loneliness-group"><h2>Verwandte Themen</h2><TopicCards topics={node.related.map((id:string)=>lonelinessIndex.find(n=>n.id===id)).filter(Boolean)}/></section>}
 </>:null}
 </div>;
}
