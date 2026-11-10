import React from 'react';
import {LocalNews} from './local-news';
import {regionalNewsMedia} from '../lib/news-media.mjs';
import {canonicalArticleUrl} from '../lib/press-discussions.mjs';
import {PressDiscussionTestForm,MediaProposalTest} from './press-test-forms';

export function PressDiscussionPreparation(){return <section className="panel press-preparation" aria-labelledby="press-discussion-heading">
 <div className="eyebrow">BERGEDORFER PRESSETHEMEN</div><h2 id="press-discussion-heading">Presseberichte über Bergedorf diskutieren</h2>
 <p>Hier können Sie Presseberichte diskutieren, die den Bezirk Bergedorf betreffen. Auch überregionale Themen sind zulässig, wenn Sie nachvollziehbar erläutern, welche konkreten Auswirkungen sie auf Bergedorf haben. Diskussionen ohne erkennbaren Bergedorf-Bezug gehören nicht in diesen Bereich.</p>
 <div className="rule-note" id="press-preview-status"><strong>Bedienbares Testformular – keine Übermittlung oder dauerhafte Speicherung.</strong><p>Eingaben bleiben nur in der laufenden Formularsitzung im Browser. Beim Neuladen oder Verlassen der Seite gehen sie verloren. „Eingaben prüfen“ kontrolliert ausschließlich die Formularangaben; es wird nichts eingereicht oder veröffentlicht.</p></div>
 <p>Erst nach Prüfung durch die Moderation soll ein Thema veröffentlicht werden. Originalquelle, eigene Beschreibung, Sachverhalt und persönliche Meinung werden getrennt angezeigt. Zu einem bereits erfassten Artikel soll die vorhandene Diskussion gefunden und zugeordnet werden können.</p>
 <details><summary>Testformular für Pressediskussionen öffnen</summary><PressDiscussionTestForm/></details>
 <p>Bitte keine vollständigen Zeitungstexte, Artikelkopien oder Scans übernehmen. Beschreiben Sie das Thema in eigenen Worten und nennen Sie die Originalquelle. Autorenangaben dürfen nicht erfunden werden. Fehlt im Artikel tatsächlich eine Autorenangabe, tragen Sie „Nicht angegeben“ ein.</p>
 <MediaProposalTest/>
 </section>}
export function NewsPage(){return <div className="section page-content news-page"><div className="news-intro"><div className="eyebrow">INFORMIEREN & AUSTAUSCHEN</div><h1>Aktuelle Bergedorfer Nachrichten</h1><p>Nachrichten aus dem Bezirk lesen, Originalquellen finden und die spätere Diskussion über Bergedorfer Pressethemen kennenlernen.</p></div>
 <LocalNews dedicated/>
 <section aria-labelledby="hamburg-news-heading"><h2 id="hamburg-news-heading">Weitere Hamburger Nachrichtenmedien</h2><p>Digitale Zeitungsausgaben und Ausgabenübersichten direkt bei den Verlagen.</p><div className="news-media-grid">{regionalNewsMedia.map(m=><article className="panel" key={m.name}><h3>{m.name}</h3><p>{m.note}</p><a className="outline" href={m.url} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">{m.label} ↗</a></article>)}</div></section>
 <p className="news-external-note">Alle Medienlinks öffnen nach der bestehenden externen Linkbestätigung in einem neuen Tab. Es gelten die Bedingungen des jeweiligen Verlags. Die Nachrichten werden dort gelesen; diese Seite übernimmt keine fremden Artikel und umgeht keine Bezahlschranken.</p>
 <PressDiscussionPreparation/>
 </div>}
// Future display contract only: no public records, storage or submission are connected.
export function PressDiscussionContent({record}:{record:any}){const r=record.revision,s=r.source,url=canonicalArticleUrl(s.url);return <article className="panel press-discussion"><h2>{s.headline}</h2><section><h3>Originalquelle</h3><dl>{[['Medium / Zeitung',s.medium],['Erscheinungsdatum',s.publishedOn],['Autor oder Autorin',s.author||'Nicht angegeben'],['Ausgabe',s.edition],['Seitenzahl',s.page],['Rubrik oder Ressort',s.department]].filter(([,v])=>v).map(([k,v])=><React.Fragment key={k}><dt>{k}</dt><dd>{v}</dd></React.Fragment>)}</dl>{url&&<a href={url} target="_blank" rel="noopener noreferrer">Originalartikel öffnen</a>}</section>{[['Eigene Beschreibung des Themas',r.description],['Sachverhalt – eigene Wiedergabe des Presseberichts',r.facts],['Bezug zu Bergedorf',r.bergReference],['Konkrete Auswirkungen auf Bergedorf',r.impact],['Persönliche Meinung',r.opinion],['Diskussionsfrage',r.question]].filter(([,v])=>v).map(([h,t])=><section key={h}><h3>{h}</h3><p>{t}</p></section>)}<p>Eingereicht: <time dateTime={record.submittedAt}>{record.submittedAt}</time></p>{record.publicChanges?.length>0&&<details><summary>Veröffentlichte Änderungen</summary><ul>{record.publicChanges.map((v:any)=><li key={v.id}><time dateTime={v.createdAt}>{v.createdAt}</time> · {v.summary}</li>)}</ul></details>}</article>}
