import {canonicalReactions,prunePrivateAudit} from './reactions.mjs';
import {applyPrivacyToSnapshot} from './lifecycle.mjs';
import {defaults,InputError} from './workspace.mjs';
import {sha256} from './backup.mjs';
const storeId='main';
const key=row=>JSON.stringify([row.collection,row.record_id]);
export const canonical=value=>JSON.stringify(stable(value));
function stable(value){if(Array.isArray(value))return value.map(stable);if(value&&typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(k=>[k,stable(value[k])]));return value}
export function splitWorkspace(state,owner=''){
 state={...state,reactions:canonicalReactions(state.reactions,owner)};const rows=[];
 function add(collection,id,position,value,parent='',actor=''){rows.push({collection,record_id:String(id),position,payload:JSON.stringify(value),parent_id:parent||'',owner_id:actor||''})}
 for(const [collection,items] of Object.entries(state)){
  if(collection==='revision')continue;
  if(collection==='settings'){for(const [id,value] of Object.entries(items))add('$settings',id,0,value);continue;}
  if(!Array.isArray(items)){add('$root',collection,0,items);continue;}
  // Preserve even empty collections and unknown future root fields.
  add('$arrays',collection,0,true);
  const seen=new Map();
  for(const [position,item] of items.entries()){
   const natural=item.id??(collection==='reactions'?JSON.stringify([item.parent,item.version,item.actor||owner]):String(position));
   const occurrence=seen.get(natural)||0;seen.set(natural,occurrence+1);const id=JSON.stringify([natural,occurrence]);
   if(collection==='documents'){
    const data={...item},slots={};
    for(const slot of ['draft','published','history'])if(Object.hasOwn(item,slot)){
     slots[slot]=true;delete data[slot];
     if(slot==='history'&&Array.isArray(item[slot]))for(const [i,version] of item[slot].entries())add('$versions',JSON.stringify([id,slot,i]),i,{slot,index:i,value:version},id,item.ownerId||owner);
     else add('$versions',JSON.stringify([id,slot]),0,{slot,value:item[slot]},id,item.ownerId||owner);
    }
    add(collection,id,position,{data,slots},'',item.ownerId||owner);
   }else add(collection,id,position,item,item.parent||item.comment||'',item.ownerId||item.actor||(collection==='comments'?owner:''));
  }
 }
 return rows;
}
export function joinWorkspace(rows,revision){
 const state={revision},active=rows.filter(r=>!r.deleted);
 for(const row of active.filter(r=>r.collection==='$root'))state[row.record_id]=JSON.parse(row.payload);
 state.settings={};for(const row of active.filter(r=>r.collection==='$settings'))state.settings[row.record_id]=JSON.parse(row.payload);
 for(const row of active.filter(r=>r.collection==='$arrays'))state[row.record_id]=[];
 for(const row of active.filter(r=>!r.collection.startsWith('$')).sort((a,b)=>a.position-b.position)){
  let item=JSON.parse(row.payload);
  if(row.collection==='documents'){
   const {data,slots}=item;item=data;if(slots.history)item.history=[];
   for(const v of active.filter(r=>r.collection==='$versions'&&r.parent_id===row.record_id).sort((a,b)=>a.position-b.position)){
    const {slot,index,value}=JSON.parse(v.payload);if(slot==='history'&&index!==undefined)item.history[index]=value;else item[slot]=value;
   }
  }
  (state[row.collection]||=[]).push(item);
 }
 return state;
}
export async function loadWorkspace(db){
 const [meta,records,legacy]=await db.batch([
  db.prepare('SELECT * FROM workspace_store WHERE id=?').bind(storeId),
  db.prepare('SELECT * FROM workspace_records WHERE deleted=0'),
  db.prepare('SELECT value FROM private_workspace WHERE id=?').bind('owner-test')
 ]);
 const control=meta.results[0],old=legacy.results[0];
 if(control?.mode==='records')return {state:joinWorkspace(records.results,control.revision),mode:'records',control,rows:records.results,persisted:true};
 return {state:old?JSON.parse(old.value):defaults(),mode:'legacy',legacy:old?.value,control,rows:records.results,persisted:!!old};
}
function upsert(db,row,revision,token){
 return db.prepare('INSERT INTO workspace_records(collection,record_id,position,payload,owner_id,parent_id,revision,deleted) SELECT ?,?,?,?,?,?,?,0 WHERE (SELECT write_token FROM workspace_store WHERE id=?)=? ON CONFLICT(collection,record_id) DO UPDATE SET position=excluded.position,payload=excluded.payload,owner_id=excluded.owner_id,parent_id=excluded.parent_id,revision=excluded.revision,deleted=0').bind(row.collection,row.record_id,row.position,row.payload,row.owner_id,row.parent_id,revision,storeId,token);
}
export async function saveRecordWorkspace(db,loaded,state,action){
 const token=crypto.randomUUID(),now=new Date().toISOString(),owner=(await db.prepare('SELECT owner FROM private_access WHERE id=?').bind('owner').first())?.owner||'';
 const next=splitWorkspace(state,owner),before=new Map(loaded.rows.map(r=>[key(r),r])),after=new Set(next.map(key));
 const statements=[db.prepare('UPDATE workspace_store SET revision=?,write_token=?,updated=? WHERE id=? AND revision=? AND mode=?').bind(state.revision,token,now,storeId,loaded.state.revision,'records')];
 for(const row of loaded.rows)if(!after.has(key(row))){if(row.collection==='reactions'||(state.privacyRevision||0)!==(loaded.state.privacyRevision||0))statements.push(db.prepare('DELETE FROM workspace_records WHERE collection=? AND record_id=? AND (SELECT write_token FROM workspace_store WHERE id=?)=?').bind(row.collection,row.record_id,storeId,token));else statements.push(db.prepare("UPDATE workspace_records SET deleted=1,payload='null',owner_id='',parent_id='',revision=? WHERE collection=? AND record_id=? AND (SELECT write_token FROM workspace_store WHERE id=?)=?").bind(state.revision,row.collection,row.record_id,storeId,token));}
 for(const row of next){const old=before.get(key(row));if(!old||['position','payload','owner_id','parent_id'].some(k=>old[k]!==row[k]))statements.push(upsert(db,row,state.revision,token));}
 if((state.privacyRevision||0)!==(loaded.state.privacyRevision||0)){
  statements.push(db.prepare('DELETE FROM workspace_records WHERE deleted=1 AND (SELECT write_token FROM workspace_store WHERE id=?)=?').bind(storeId,token));
  const legacy=await db.prepare('SELECT value FROM private_workspace WHERE id=?').bind('owner-test').first();if(legacy){const clean=applyPrivacyToSnapshot(JSON.parse(legacy.value),loaded.state,state);statements.push(db.prepare('UPDATE private_workspace SET value=?,updated=? WHERE id=? AND (SELECT write_token FROM workspace_store WHERE id=?)=?').bind(JSON.stringify(clean),now,'owner-test',storeId,token));}
 }
 statements.push(db.prepare('INSERT INTO private_audit(action,created) SELECT ?,? WHERE (SELECT write_token FROM workspace_store WHERE id=?)=?').bind(action,now,storeId,token));
 statements.push(db.prepare("UPDATE private_workspace SET value=json_set(value,'$.reactions',json('[]'),'$.audit',json(coalesce((SELECT json_group_array(json(j.value)) FROM json_each(private_workspace.value,'$.audit') j WHERE coalesce(json_extract(j.value,'$.action'),'')<>'react'),'[]'))) WHERE id='owner-test' AND json_valid(value) AND (SELECT write_token FROM workspace_store WHERE id=?)=? AND (json_array_length(value,'$.reactions')>0 OR EXISTS(SELECT 1 FROM json_each(private_workspace.value,'$.audit') j WHERE json_extract(j.value,'$.action')='react'))").bind(storeId,token));
 statements.push(db.prepare("DELETE FROM workspace_records WHERE collection='reactions' AND deleted=1 AND (SELECT write_token FROM workspace_store WHERE id=?)=?").bind(storeId,token));
 statements.push(prunePrivateAudit(db,now));
 const result=await db.batch(statements);return result[0].meta.changes===1;
}
export async function migrateWorkspace(db,expectedHash){
 const old=await db.prepare('SELECT value FROM private_workspace WHERE id=?').bind('owner-test').first();
 if(!old||await sha256(old.value)!==expectedHash)throw new InputError('Gesicherter Ausgangsstand stimmt nicht mehr überein. Neue Sicherung erforderlich.',409);
 const owner=await db.prepare('SELECT owner FROM private_access WHERE id=?').bind('owner').first();if(!owner?.owner)throw new InputError('Ausdrückliche Eigentümerzuordnung fehlt',503);
 if(await db.prepare('SELECT id FROM workspace_store WHERE id=?').bind(storeId).first())throw new InputError('Speicherumstellung wurde bereits eingerichtet',409);
 const state=JSON.parse(old.value);state.reactions=canonicalReactions(state.reactions,owner.owner);const rows=splitWorkspace(state,owner.owner);
 if(canonical(joinWorkspace(rows,state.revision))!==canonical(state))throw new InputError('Datensatzzerlegung würde Informationen verändern',500);
 const token=crypto.randomUUID(),now=new Date().toISOString();
 const statements=[db.prepare('INSERT INTO workspace_store(id,mode,revision,baseline_revision,baseline_hash,write_token,updated) SELECT ?,?,?,?,?,?,? WHERE (SELECT value FROM private_workspace WHERE id=?)=?').bind(storeId,'records',state.revision,state.revision,expectedHash,token,now,'owner-test',old.value),...rows.map(row=>upsert(db,row,state.revision,token))];
 const result=await db.batch(statements);if(result[0].meta.changes!==1)throw new InputError('Ausgangsstand wurde gleichzeitig geändert',409);
 const loaded=await loadWorkspace(db);if(canonical(loaded.state)!==canonical(state))throw new InputError('Rückleseprüfung der Umstellung fehlgeschlagen',500);
 return {mode:'records',revision:state.revision,records:rows.length,baselineUnchanged:true,verified:true};
}
export async function rollbackWorkspace(db,expectedRevision){
 const control=await db.prepare('SELECT * FROM workspace_store WHERE id=?').bind(storeId).first();
 if(!control||control.mode!=='records'||control.revision!==expectedRevision||control.revision!==control.baseline_revision)throw new InputError('Rückkehr würde neuere Änderungen ausblenden. Zuerst neuen Stand sichern und gezielt abgleichen.',409);
 const old=await db.prepare('SELECT value FROM private_workspace WHERE id=?').bind('owner-test').first();if(!old||await sha256(old.value)!==control.baseline_hash)throw new InputError('Rückkehrstand stimmt nicht mehr überein',409);
 const r=await db.prepare('UPDATE workspace_store SET mode=?,updated=? WHERE id=? AND mode=? AND revision=? AND baseline_revision=?').bind('legacy',new Date().toISOString(),storeId,'records',expectedRevision,expectedRevision).run();
 if(r.meta.changes!==1)throw new InputError('Gleichzeitige Änderung verhindert Rückkehr',409);
 return {mode:'legacy',revision:expectedRevision,baselineUnchanged:true};
}

// Clear inactive record copies too when the current mode is legacy. The active JSON CAS gates every update.
export function scrubInactiveRecords(db,loaded,state){
 if((state.privacyRevision||0)===(loaded.state.privacyRevision||0))return [db.prepare("DELETE FROM workspace_records WHERE collection='reactions' AND (SELECT value FROM private_workspace WHERE id='owner-test')=?").bind(JSON.stringify(state))];
 if(!loaded.rows?.length)return [];
 const cleaned=applyPrivacyToSnapshot(joinWorkspace(loaded.rows,loaded.state.revision),loaded.state,state),after=new Map(splitWorkspace(cleaned).map(r=>[key(r),r])),statements=[];
 for(const old of loaded.rows){const row=after.get(key(old));if(!row)statements.push(db.prepare("DELETE FROM workspace_records WHERE collection=? AND record_id=? AND (SELECT value FROM private_workspace WHERE id='owner-test')=?").bind(old.collection,old.record_id,JSON.stringify(state)));else if(row.payload!==old.payload)statements.push(db.prepare("UPDATE workspace_records SET payload=?,owner_id=?,parent_id=? WHERE collection=? AND record_id=? AND (SELECT value FROM private_workspace WHERE id='owner-test')=?").bind(row.payload,row.owner_id,row.parent_id,old.collection,old.record_id,JSON.stringify(state)));}
 return statements;
}
