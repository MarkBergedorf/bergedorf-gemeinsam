import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {withoutPr68CopyCleanup} from './pr68-copy-cleanup.mjs';
const changes=JSON.parse(readFileSync(new URL('./auftrag22-authorized-changes.json',import.meta.url),'utf8'));
export function withoutAuftrag22(path,value){
 const relative=path.replace(/^frontend\//,'');
 if(relative==='app/platform.tsx'){
  const before=execFileSync('git',['show','037c1d6ecd25b2a7cc72e65bfde798dca81dfc62:frontend/app/platform.tsx'],{encoding:'utf8',maxBuffer:20e6});
  const currentHome=value.slice(value.indexOf('export function HomeContent('),value.indexOf('export function SiteFooter('));
  const baseHome=before.slice(before.indexOf('export function HomeContent('),before.indexOf('export function SiteFooter('));
  if(!currentHome||!baseHome||!value.includes("import {homepageTopics,homepageMaps} from '../lib/homepage-access.mjs';"))throw new Error('Auftrag-29-Startseitenblock nicht eindeutig erkannt');
  value=value.replace(currentHome,baseHome).replace("// @ts-ignore shared static navigation inventory\n",'').replace("import {homepageTopics,homepageMaps} from '../lib/homepage-access.mjs';\n",'');
 }
 for(const change of changes.filter(c=>c.path===relative).toReversed()){
  const at=value.indexOf(change.after);
  if(at<0||(change.before&&value.indexOf(change.after,at+1)>=0))throw new Error(`Auftrag-22-Rücknahme nicht eindeutig: ${relative}`);
  value=value.slice(0,at)+change.before+value.slice(at+change.after.length);
 }
 return withoutPr68CopyCleanup(relative,value);
}
