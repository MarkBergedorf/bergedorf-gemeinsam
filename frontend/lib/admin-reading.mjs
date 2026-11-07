import {exampleRecord,isRetiredExampleDocument} from './examples.mjs';
import {directoryCatalog} from './directory.mjs';
// Only resolve known relations from the current server-projected state. A link
// does not confer access; hidden/unreleased documents use the existing admin gate.
export function relatedContribution(state,item){
 const seen=new Set();
 function find(id){if(typeof id!=='string'||!id||seen.has(id))return null;seen.add(id);
  const doc=(state.documents||[]).find(d=>d.id===id)||exampleRecord(state,id);
  if(doc){const visible=doc.published&&!doc.hidden&&!doc.withdrawn&&!isRetiredExampleDocument(doc);return {id,title:doc.published?.title||doc.draft?.title||id,href:(visible?'#beitrag/':'#verwaltung/lesefassung/')+encodeURIComponent(id)}}
  const entry=directoryCatalog(state).find(r=>r.id===id);if(entry)return{id,title:entry.title,href:'#organisation/eintrag/'+encodeURIComponent(id)};
  const linked=[...(state.comments||[]),...(state.requests||[]),...(state.suggestions||[]),...(state.cases||[])].find(r=>r.id===id);
  if(linked)return find(linked.parent)||find(linked.target)||find(linked.comment);
  return null;
 }
 return find(item?.parent)||find(item?.documentId)||find(item?.target)||find(item?.id);
}
export function adminReadingHref(href){const [path,query='']=href.split('?');if(!/^#(?:beitraege$|beitrag\/|organisation\/eintrag\/|verwaltung\/lesefassung\/)/.test(path))return '';const p=new URLSearchParams(query);p.set('adminRead','1');return path+'?'+p.toString()}
