import {readFileSync} from 'node:fs';
const changes=JSON.parse(readFileSync(new URL('./auftrag22-authorized-changes.json',import.meta.url),'utf8'));
export function withoutAuftrag22(path,value){
 const relative=path.replace(/^frontend\//,'');
 for(const change of changes.filter(c=>c.path===relative).toReversed()){
  const at=value.indexOf(change.after);
  if(at<0||(change.before&&value.indexOf(change.after,at+1)>=0))throw new Error(`Auftrag-22-Rücknahme nicht eindeutig: ${relative}`);
  value=value.slice(0,at)+change.before+value.slice(at+change.after.length);
 }
 return value;
}
