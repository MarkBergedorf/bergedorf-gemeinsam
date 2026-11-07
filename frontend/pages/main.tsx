import React from 'react';import {PagesPrivacy} from './privacy';import {createRoot} from 'react-dom/client';
import '../app/globals.css';import './pages.css';
import Platform,{SiteHeader,SiteFooter} from '../app/platform';
import {WorkspaceProvider} from '../app/workspace';
import {useRoute} from '../app/navigation';
function PagesLegal({privacy=false}:{privacy?:boolean}){return <section className="section page-content narrow"><h1>{privacy?'Datenschutz der statischen Testfassung':'Impressum'}</h1>{privacy?<PagesPrivacy/>:<><p>Privater Betreiber der Bürgerplattform „Bergedorf gemeinsam“:</p><address>Mark Petersen<br/>Fritz-Lindemann-Weg 3 A<br/>21031 Hamburg<br/><a href="mailto:bergedorf.gemeinsam@outlook.de">bergedorf.gemeinsam@outlook.de</a></address><p>Verantwortlich für die journalistisch-redaktionellen Inhalte: Mark Petersen, Anschrift wie oben.</p></>}<a href="#start">Zur Startseite</a></section>}
function App(){const route=useRoute();return <><aside className="pages-test-banner">Statische Testfassung · Anmeldung, Beiträge und Interaktionen benötigen ein Backend. Keine öffentliche Freigabe erfolgt.</aside>{['impressum','datenschutz'].includes(route.page)?<><SiteHeader page={route.page}/><main id="main" tabIndex={-1}><PagesLegal privacy={route.page==='datenschutz'}/></main><SiteFooter/></>:<Platform/>}</>}
createRoot(document.getElementById('root')!).render(<WorkspaceProvider><App/></WorkspaceProvider>);
