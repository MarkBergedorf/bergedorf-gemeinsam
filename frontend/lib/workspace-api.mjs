import {prunePrivateAudit} from './reactions.mjs';
import {processErasureFiles} from './erasure-files.mjs';
import {project} from './access.mjs';
import {limitedBody} from './body-limit.mjs';
import {defaults,mutate,usage,InputError} from './workspace.mjs';
import {loadWorkspace,saveRecordWorkspace,scrubInactiveRecords,canonical} from './workspace-store.mjs';
const json=(v,status=200)=>Response.json(v,{status,headers:{'Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'}});
export async function readWorkspace(db,auth){
 if(!auth)return json({error:'Privater Zugang erforderlich'},401);
 if(!db)return json({error:'Datenbank derzeit nicht verfügbar'},503);
 try{await prunePrivateAudit(db).run();const loaded=await loadWorkspace(db);return json({state:project(loaded.state,auth),usage:auth===true||auth.role==='admin'?usage(loaded.state):null,persisted:loaded.persisted,storageMode:auth===true||auth.role==='admin'?loaded.mode:undefined})}
 catch{return json({error:'Arbeitsstand konnte nicht geladen werden'},503)}
}
export async function writeWorkspace(req,db,auth,trustedFile=false,storage={}){
 if(!auth)return json({error:'Privater Zugang erforderlich'},401);
 if(req.headers.get('origin')!==new URL(req.url).origin)return json({error:'Fremder Ursprung'},403);
 if(!req.headers.get('content-type')?.startsWith('application/json'))return json({error:'JSON erforderlich'},415);
 if(+req.headers.get('content-length')>150000)return json({error:'Anfrage zu groß'},413);
 let p;
 try{const raw=new TextDecoder().decode(await limitedBody(req,150000));if(raw.length>150000)return json({error:'Anfrage zu groß'},413);p=JSON.parse(raw);if(!p||Array.isArray(p)||typeof p!=='object')throw Error()}
 catch(e){return json({error:e.status===413?'Anfrage zu groß':'Ungültige Anfrage'},e.status===413?413:400)}
 if(p.action==='file'&&!trustedFile)return json({error:'Dateien nur über den geprüften Uploadweg'},403);
 if(!db)return json({error:'Datenbank fehlt'},503);
 try{
  if(p.action==='erasure-files-run'){if(auth?.role!=='admin')return json({error:'Verwaltungszugang erforderlich'},403);const result=await processErasureFiles(db,storage.bucket);const loaded=await loadWorkspace(db);return json({state:project(loaded.state,auth),message:'Dateilöschung geprüft: '+result.verified+' bestätigt; '+result.pending+' offen. Anbieter-Sicherungen weiterhin nicht bestätigt.',persisted:true});}
  const rate=await db.prepare('SELECT COUNT(*) AS n FROM private_audit WHERE created>?').bind(new Date(Date.now()-60000).toISOString()).first();
  if(rate?.n>=100)return json({error:'Privates Testlimit: 100 Schreibaktionen pro Minute'},429);
  let loaded=await loadWorkspace(db);
  if(loaded.mode==='legacy'&&!loaded.persisted){await db.prepare('INSERT OR IGNORE INTO private_workspace(id,value,updated) VALUES(?,?,?)').bind('owner-test',JSON.stringify(defaults()),new Date().toISOString()).run();loaded=await loadWorkspace(db)}
  const state=loaded.state;
  if(p.revision!==state.revision)return json({error:'Arbeitsstand wurde zwischenzeitlich geändert. Eingabe behalten und aktuellen Stand neu laden.'},409);
  const result=mutate(state,p.action,p.payload||{},undefined,undefined,auth===true?null:auth);
  let saved;
  if(loaded.mode==='records')saved=await saveRecordWorkspace(db,loaded,result.state,p.action);
  else{
   const batch=await db.batch([
    db.prepare("UPDATE private_workspace SET value=?,updated=? WHERE id=? AND value=? AND NOT EXISTS(SELECT 1 FROM workspace_store WHERE id='main' AND mode='records')").bind(JSON.stringify(result.state),new Date().toISOString(),'owner-test',loaded.legacy),
    db.prepare('INSERT INTO private_audit(action,created) SELECT ?,? WHERE changes()=1').bind(p.action,new Date().toISOString()),
    prunePrivateAudit(db),...scrubInactiveRecords(db,loaded,result.state)
   ]);saved=batch[0].meta.changes===1;
  }
  if(!saved)return json({error:'Gleichzeitige Änderung. Eingabe behalten und aktuellen Stand neu laden.'},409);
  let receipt;
  if(p.action==='case'&&p.payload?.kind==='Meldung'){const expected=result.state.cases.find(c=>!state.cases.some(old=>old.id===c.id)&&c.kind==='Meldung'&&c.target===p.payload.id);if(!expected)throw new InputError('Kein neuer Meldungsvorgang zugeordnet. Keine Erfolgsbestätigung möglich.',503);const verified=await loadWorkspace(db),found=verified.state.cases.find(c=>c.id===expected.id);if(!found||canonical(found)!==canonical(expected))throw new InputError('Speicherung der Meldung konnte beim erneuten Lesen nicht bestätigt werden. Bitte den aktuellen Verwaltungsstand prüfen; keine Erfolgsbestätigung.',503);receipt={id:found.id,kind:found.kind,target:found.target,version:found.version,publicationId:found.publicationId,created:found.created};result.state=verified.state;}
  if((result.state.erasureJobs||[]).some(j=>j.filesStatus!=='verified')){await processErasureFiles(db,storage.bucket);result.state=(await loadWorkspace(db)).state;}
  return json({...result,...(receipt?{receipt}:{}),state:project(result.state,auth),usage:auth===true||auth.role==='admin'?usage(result.state):null,persisted:true});
 }catch(e){return json({error:e instanceof InputError?e.message:'Private Aktion fehlgeschlagen; Eingabe behalten und Arbeitsstand neu laden'},e instanceof InputError?e.status:503)}
}
