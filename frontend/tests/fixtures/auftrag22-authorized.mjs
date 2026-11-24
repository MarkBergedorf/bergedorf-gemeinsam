import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {withoutPr68CopyCleanup} from './pr68-copy-cleanup.mjs';
const changes=JSON.parse(readFileSync(new URL('./auftrag22-authorized-changes.json',import.meta.url),'utf8'));
export function withoutAuftrag22(path,value){
 const relative=path.replace(/^frontend\//,'');
 if(relative==='app/platform.tsx')value=value.replace("import {ParticipantAccess} from './firebase-account';","import {ParticipantAccess} from './participant-access';").replace("['anmelden','registrieren','konto'].includes(page)?<ParticipantAccess/>","page==='anmelden'?<ParticipantAccess/>");
 if(relative==='app/platform.tsx'){
  const before=execFileSync('git',['show','037c1d6ecd25b2a7cc72e65bfde798dca81dfc62:frontend/app/platform.tsx'],{encoding:'utf8',maxBuffer:20e6});
  const currentHome=value.slice(value.indexOf('export function HomeContent('),value.indexOf('export function SiteFooter('));
  const baseHome=before.slice(before.indexOf('export function HomeContent('),before.indexOf('export function SiteFooter('));
  if(!currentHome||!baseHome||!value.includes("import {homepageTopics,homepageMaps} from '../lib/homepage-access.mjs';"))throw new Error('Auftrag-29-Startseitenblock nicht eindeutig erkannt');
  value=value.replace(currentHome,baseHome).replace("// @ts-ignore shared static navigation inventory\n",'').replace("import {homepageTopics,homepageMaps} from '../lib/homepage-access.mjs';\n",'');
  // Auftrag 30 adds an accordion icon solely to the changed homepage block.
  value=value.replace("import {Menu,X,ArrowRight,MapPin,ChevronDown} from 'lucide-react';", "import {Menu,X,ArrowRight,MapPin} from 'lucide-react';");
 }
 for(const change of changes.filter(c=>c.path===relative).toReversed()){
  const at=value.indexOf(change.after);
  if(at<0||(change.before&&value.indexOf(change.after,at+1)>=0))throw new Error(`Auftrag-22-Rücknahme nicht eindeutig: ${relative}`);
  value=value.slice(0,at)+change.before+value.slice(at+change.after.length);
 }
 if(relative==='app/directory.tsx'){
  const effect="useEffect(()=>{if(route.tab!=='karte')return;const frame=requestAnimationFrame(()=>document.getElementById('directory-map-direct-target')?.scrollIntoView({block:'start',behavior:'instant'}));return()=>cancelAnimationFrame(frame)},[route.page,route.tab]);";
  if(value.includes(effect)){value=value.replace(effect,'');const id=' id="directory-map-direct-target"';if(value.includes(id))value=value.replace(id,'');}
 }
 return withoutPr68CopyCleanup(relative,value);
}
