'use client';
import {Activity} from 'react';
import {useRoute,RouteOverride,adminReadingSession,openAdminReading,returnToAdministration} from './navigation';
import {useWorkspace} from './workspace';
// @ts-ignore shared route parser
import {parseRoute} from '../lib/navigation.mjs';
// @ts-ignore shared association resolver
import {relatedContribution,adminReadingHref} from '../lib/admin-reading.mjs';
// @ts-ignore shared safe reader return
import {safeListReturn} from '../lib/navigation.mjs';
export function AdminReadingLink({href,label='Betroffenen Beitrag öffnen',prominent=false}:{href:string,label?:string,prominent?:boolean}){const target=adminReadingHref(href);return target?<a className={prominent?'primary admin-reading-link':'admin-reading-link'} href={target} onClick={e=>{e.preventDefault();e.stopPropagation();openAdminReading(target)}}>{label}</a>:null}
// Activity keeps the original administration component and input state mounted.
// Its effects (including dirty guards) are paused while the reader is visible.
export function AdminReadingHost({children}:{children:React.ReactNode}){useRoute();const {state}=useWorkspace();const session=typeof window!=='undefined'&&state.permissions?.canAdmin?adminReadingSession():null;return <><Activity mode={session?'hidden':'visible'}><RouteOverride.Provider value={session?parseRoute(session.origin):null}>{children}</RouteOverride.Provider></Activity>{session&&<>{children}</>}</>}
export function RelatedContributionLink({state,item}:{state:any,item:any}){const target=relatedContribution(state,item);return target?<p className="related-contribution"><AdminReadingLink href={target.href} label={['Meldung','Kommentarmeldung'].includes(item?.kind)?'Gemeldeten Beitrag öffnen':'Betroffenen Beitrag öffnen'}/></p>:null}
function useAdminReading(enabled:boolean){const route=useRoute();return {active:enabled&&typeof window!=='undefined'&&!!adminReadingSession(),route};}
export function AdminReadingOverviewLink({href='#beitraege'}:{href?:string}){return <a href={href}>Zur Beitragsübersicht</a>}
export function CloseAdminReadingView(){return <button className="outline small" onClick={returnToAdministration}>Zur Verwaltung zurückkehren</button>}
// Global position above the site header: overview link for contribution views;
// other reading views expose the same-window administration return here.
export function AdminReadingReturn({enabled}:{enabled:boolean}){const {active,route}=useAdminReading(enabled);if(!active)return null;const article=route.page==='beitrag'||route.page==='verwaltung'&&route.tab==='lesefassung';return article?<div className="admin-reading-overview"><AdminReadingOverviewLink href={safeListReturn(route.params.from)}/></div>:<aside className="admin-reading-return" aria-label="Rückkehr zum Verwaltungsvorgang"><CloseAdminReadingView/></aside>}
// Positioned immediately before ArticleContent, never alongside a duplicate link.
export function AdminReadingArticleNavigation({enabled,fallbackHref}:{enabled:boolean,fallbackHref?:string}){const {active}=useAdminReading(enabled);return active?<div className="admin-reading-inline"><CloseAdminReadingView/></div>:fallbackHref?<AdminReadingOverviewLink href={fallbackHref}/>:null}
