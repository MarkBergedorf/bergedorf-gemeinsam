'use client';
import {ArrowRight,ChevronRight,Download,Printer} from 'lucide-react';
import {lonelinessProjects,projectStatus,lonelinessFundingSources} from '../lib/loneliness-projects.mjs';
import './loneliness-projects.css';

export function LonelinessProjectDirectory(){
 return <section className="loneliness-project-directory" aria-labelledby="loneliness-projects-title">
  <h2 id="loneliness-projects-title">Gemeinsam gegen Einsamkeit – Ideen, Projekte und Mitwirkung</h2>
  <p>Einsamkeit ist eine gesellschaftliche Herausforderung, der wir gemeinsam begegnen können. In Bergedorf gibt es bereits Begegnungsmöglichkeiten, Beratungsstellen und Unterstützungsangebote. Gleichzeitig bestehen offene Fragen und Möglichkeiten, Angebote weiterzuentwickeln.</p>
  <p>Bergedorf gemeinsam stellt Informationen, Projektideen, Arbeitsmaterialien und digitale Orientierung bereit. Die eigenständige Organisation, Finanzierung und praktische Umsetzung liegt bei den beteiligten Menschen, Initiativen und verantwortlichen Organisationen. Die Plattform übernimmt keine personelle Projektorganisation.</p>
  <nav className="loneliness-project-pathways" aria-label="Schwerpunkte: gemeinsam gegen Einsamkeit"><h3>Fünf Zugänge zur Mitwirkung</h3><ol><li><a href="#einsamkeit/hilfe/t7-5">Bestehende Hilfen finden</a></li><li><a href="#einsamkeit/mitwirkung">Praxisbeispiele kennenlernen</a></li><li><a href="#einsamkeit/mitwirkung">Projektideen für Bergedorf entwickeln</a></li><li><a href="#organisation">Mitwirkende, Koordination und Organisationen</a> <span>(mögliche Beteiligung wird nicht vermittelt)</span></li><li><a href="/bergedorf-gemeinsam/materialien/einsamkeit-projektwerkstatt.html">Arbeitsmaterialien und Förderwege</a></li></ol></nav>
  <p className="loneliness-project-status-note"><strong>Aktueller Stand aller Einträge: Projektidee.</strong> Es sind für diese Verzeichnisvorhaben keine Arbeitsgruppen, Koordinationen, Kooperationen, Finanzierungen oder Umsetzungen bestätigt.</p>
  <div className="loneliness-project-actions"><a className="outline" href="/bergedorf-gemeinsam/materialien/einsamkeit-projektwerkstatt.html"><Download aria-hidden="true" size={17}/> Arbeitsmaterialien öffnen</a><a href="#einsamkeit/hilfe/t7-5">Bestehende Hilfen in Bergedorf finden <ArrowRight aria-hidden="true" size={17}/></a></div>
  <details className="loneliness-project-funding"><summary>Förderwege und Beratung – Verfügbarkeit vor Antrag prüfen</summary><ul>{lonelinessFundingSources.map(item=><li key={item.name}><strong>{item.name}:</strong> {item.detail} <a href={item.url} target="_blank" rel="noopener noreferrer">Originalquelle</a><br/><small>{item.status}</small></li>)}</ul></details>
  <ul className="loneliness-project-cards">{lonelinessProjects.map(project=><li key={project.id}><article><p className="loneliness-project-number">Projektidee {String(project.number).padStart(2,'0')}</p><h3><a href={project.href}>{project.title}<ChevronRight aria-hidden="true" size={18}/></a></h3><p>{project.description}</p><p className="loneliness-project-badge">{project.status} · keine aktive Gruppe bestätigt</p></article></li>)}</ul>
  <details className="loneliness-project-status-system"><summary>Statussystem und Bedeutung</summary><p>Ein Status wird erst weitergesetzt, wenn der entsprechende tatsächliche Entwicklungsschritt belegt ist. Das bloße Interesse einer Einzelperson ist keine gegründete Arbeitsgruppe.</p><ol>{projectStatus.map(([name,description])=><li key={name}><strong>{name}:</strong> {description}</li>)}</ol></details>
  <section className="loneliness-project-practice" aria-labelledby="loneliness-project-practice-title"><h3 id="loneliness-project-practice-title">Praxisbeispiele und Quellen aus Bielefeld</h3><p>Die Beispiele zeigen dortige kommunale beziehungsweise trägergetragene Praxis. Sie sind keine Bergedorfer Angebote oder Kooperationen und belegen für sich allein keine Wirkung.</p><ul>{lonelinessProjects[0].sources.slice(0,7).map(source=><li key={source.url}><a href={source.url.startsWith('#')?source.url:source.url} target={source.url.startsWith('http')?'_blank':undefined} rel={source.url.startsWith('http')?'noopener noreferrer':undefined}>{source.label}</a><p>{source.limit}</p></li>)}</ul></section>
  <p className="loneliness-project-participation-note">Mögliche Beteiligungsformen sind auf den Projektseiten beschrieben. Öffentliche Interessenbekundungen, Gruppenkommunikation und Projektverwaltung sind derzeit nicht aktiviert. Verwenden Sie für bestehende Angebote deren direkte Originalkontakte.</p>
 </section>;
}

const detailRows=(project:any)=>[
 ['Kurzbeschreibung',project.description],
 ['Aktueller Projektstatus',<><strong>{project.status}</strong><p>{project.currentState}</p></>],
 ['Gesellschaftliche Ausgangssituation','Einsamkeit kann in unterschiedlichen Lebenslagen auftreten und ist ein subjektives Erleben. Dieses Vorhaben ist ein möglicher gesellschaftlicher Handlungsansatz, keine Diagnose und keine Behauptung über Ursachen oder Häufigkeiten in Bergedorf.'],
 ['Konkreter Handlungsbedarf in Bergedorf',project.localNeed],
 ['Zielsetzung',project.objective],
 ['Zielgruppen',project.target],
 ['Bestehende Angebote und Ressourcen in Bergedorf',<>Der bestehende Hilfswegweiser enthält 18 ausgewählte Zugänge; außerdem gibt es Stadtteilansichten und den Bereich „Organisationen stellen sich vor“. Diese Bestände sind Ausgangspunkte zur Prüfung, keine vollständige Angebots- oder Kapazitätserhebung. <a href="#einsamkeit/hilfe/t7-5">Hilfswegweiser öffnen</a>.</>],
 ['Vergleichbare Praxisbeispiele anderer Städte','Als kommunales Beispiel wird Bielefeld anhand der unten verlinkten Originalseiten dokumentiert. Ein dortiges Angebot wird nicht als lokales Bergedorfer Angebot gezählt.'],
 ['Erkenntnisse aus dem Bielefelder Modell',project.bielefeld],
 ['Übertragbarkeit auf Bergedorf',project.transfer],
 ['Mögliche Kooperationspartner',<>{project.partners}<p>Alle genannten Stellen sind mögliche Gesprächspartner. Eine Aufnahme in diese Liste ist keine Anfrage, Zusage oder bestätigte Kooperation.</p></>],
 ['Notwendige personelle Ressourcen',project.staffing],
 ['Benötigte fachliche Qualifikationen',project.skills],
 ['Räumliche und organisatorische Ressourcen',project.space],
 ['Finanzierungsbedarf und mögliche Fördermöglichkeiten',<>{project.finance}<p>Geprüfte Förder- und Beratungswege zum Stand 27. November 2026:</p><ul>{lonelinessFundingSources.map(item=><li key={item.name}><strong>{item.name}:</strong> {item.detail} <a href={item.url} target="_blank" rel="noopener noreferrer">Originalinformation</a><br/><small>{item.status}</small></li>)}</ul><p>Ein Förderprogramm ist keine Bewilligung und die Aufnahme in diese Liste keine Antragsprüfung. Die Bedingungen müssen vor einer Entscheidung beim Fördergeber bestätigt werden.</p></>],
 ['Rechtliche, datenschutzbezogene und organisatorische Voraussetzungen',project.legal],
 ['Offene Fragestellungen',<><p>{project.open}</p><p><strong>Mögliche erste eigenständige Schritte:</strong> {project.firstSteps}</p></>],
 ['Mögliche Beteiligungsformen',<><p>Perspektivische Beteiligungswege – derzeit ohne öffentliches Formular und ohne Speicherung einer Interessenbekundung:</p><ul>{project.participation.map((item:string)=><li key={item}>{item}</li>)}</ul></>],
 ['Materialien zur Projektentwicklung',<><p>Das Materialpaket enthält ausgearbeitete Vorlagen für Projektbeschreibung, Gruppengründung, Aufgaben, Zeitplan, Protokoll, Kosten, Personal, Partner, Förderrecherche, Umsetzung, Erfolgsmessung und Rückmeldungen sowie eine Willkommenskultur-Checkliste und einen Entwurf zur freiwilligen Selbstverpflichtung.</p><a href={project.materialHref} download><Download aria-hidden="true" size={16}/> Druck- und Arbeitsmaterialien öffnen</a></>],
 ['Dokumentation des tatsächlichen Projektfortschritts',<>{project.currentState}<p>Spätere Einträge müssen Datum, verantwortliche Stelle, Belegquelle und Statuswechsel dokumentieren. Die Plattform übernimmt keine operative Koordination.</p></>],
 ['Kriterien zur Erfolgsmessung',<>{project.measures}<p>Der bezirksübergreifend vereinbarte Maßstab, dass 90 Prozent der gewonnenen Besucher langfristig regelmäßig, freiwillig und aus eigener Initiative teilnehmen, ist ein angestrebtes Ziel – kein nachgewiesener oder wissenschaftlich gesicherter Wert.</p></>],
 ['Quellen und weiterführende Informationen',<><p>Originalangaben sind nach Quellentyp und Grenzen zu lesen. Vor einer tatsächlichen Umsetzung müssen aktuelle lokale Angebote, Förderbedingungen und Zuständigkeiten erneut beim Originalanbieter geprüft werden.</p><ul>{project.sources.map((source:any)=><li key={source.url}><a href={source.url} target={source.url.startsWith('http')?'_blank':undefined} rel={source.url.startsWith('http')?'noopener noreferrer':undefined}>{source.label}</a><p><strong>{source.kind}.</strong> {source.limit}</p><small>Quellenstand: 27. November 2026.</small></li>)}</ul></>]
];

export function LonelinessProjectDetail({project}:{project:any}){
 return <article className="loneliness-project-detail" aria-labelledby="loneliness-project-heading">
  <p className="loneliness-project-badge">Projektidee {String(project.number).padStart(2,'0')} von 18 · {project.status}</p>
  <p className="loneliness-project-caveat">{project.currentState}</p>
  <section className="loneliness-project-participation-locked" aria-labelledby="participation-locked-title"><h2 id="participation-locked-title">Interesse bekunden und Arbeitsgruppe finden</h2><p>Die technische Arbeitsgruppenplattform wird vorbereitet. Interessenbekundungen, Gruppengründung, Beitrittsanfragen und geschützte Zusammenarbeit sind noch nicht freigeschaltet. Diese Seite erhebt dafür keine personenbezogenen Daten.</p><ul><li><button type="button" disabled>Interesse an diesem Projekt bekunden</button></li><li><button type="button" disabled>Bestehende Arbeitsgruppen finden</button></li><li><button type="button" disabled>Arbeitsgruppe gründen</button></li></ul><p>Projektmaterialien und die öffentlichen Informationen bleiben verfügbar. Der Betreiber organisiert oder leitet keine Projektgruppen.</p></section>
  <nav className="loneliness-project-outline" aria-label="Aufbau der Projektseite"><strong>Auf dieser Projektseite</strong><ul>{detailRows(project).map(([title],i)=><li key={String(title)}><a href={'#project-section-'+project.slug+'-'+i}>{title}</a></li>)}</ul></nav>
  {detailRows(project).map(([title,body],i)=><details className="loneliness-project-section" key={String(title)} open={i===0||i===1}>
   <summary id={'project-section-'+project.slug+'-'+i}><span>{String(i+1).padStart(2,'0')}</span>{title}</summary>
   <div className="loneliness-project-section-body">{typeof body==='string'?<p>{body}</p>:body}</div>
  </details>)}
  <p className="loneliness-project-print"><a href={project.materialHref} download><Printer aria-hidden="true" size={17}/> Druck- und Arbeitsmaterialien</a></p>
 </article>;
}
