// Read-only export. Service access has no visitor identity and needs a separate secret.
const headers={'Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow','X-Content-Type-Options':'nosniff'};
const json=(value,status=200)=>Response.json(value,{status,headers});
export const quoteIdentifier=name=>'"'+name.replaceAll('"','""')+'"';
export async function sha256(value){const bytes=typeof value==='string'?new TextEncoder().encode(value):value;return [...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function authorized(req,env,ctx){
 if(ctx?.role==='admin'&&ctx.canRestoreOwner)return true;
 const key=req.headers.get('X-Private-Export-Key');
 if(env.PRIVATE_MAINTENANCE_ENABLED!=='explicitly-enabled'||!env.PRIVATE_EXPORT_KEY||!key||key.length>256)return false;
 return await sha256(key)===await sha256(env.PRIVATE_EXPORT_KEY);
}
export async function exportDatabase(db){
 const schema=(await db.prepare("SELECT type,name,tbl_name,sql FROM sqlite_master WHERE sql IS NOT NULL ORDER BY type,name").all()).results.filter(r=>!r.name.startsWith('sqlite_')&&!r.name.startsWith('_cf_'));
 const tables=schema.filter(r=>r.type==='table');
 // D1 batch is one transaction: all application tables belong to the same snapshot.
 const hasSequence=!!await db.prepare("SELECT name FROM sqlite_master WHERE name='sqlite_sequence'").first();
 const rows=await db.batch([...tables.map(t=>db.prepare('SELECT * FROM '+quoteIdentifier(t.name))),...(hasSequence?[db.prepare('SELECT * FROM sqlite_sequence')]:[])]);
 return {format:'bergedorf-d1-v1',schema,tables:tables.map((t,i)=>({name:t.name,rows:rows[i].results})),sequences:hasSequence?rows.at(-1).results:[],excluded:'Cloudflare internals; service credentials and provider configuration are not application records.'};
}
export async function exportObjects(bucket){
 if(!bucket)throw Error('Dateispeicher fehlt');
 const objects=[];let cursor;
 do{const page=await bucket.list({limit:1000,cursor,include:['httpMetadata','customMetadata']});for(const o of page.objects)objects.push({key:o.key,size:o.size,etag:o.etag,uploaded:o.uploaded.toISOString(),httpMetadata:o.httpMetadata||{},customMetadata:o.customMetadata||{},storageClass:o.storageClass});cursor=page.truncated?page.cursor:undefined;}while(cursor);
 return objects.sort((a,b)=>a.key.localeCompare(b.key));
}
/** @param {{role:string, canRestoreOwner?:boolean}|null} ctx */
export async function backupRead(req,env,ctx=null){
 if(!await authorized(req,env,ctx))return json({error:'Geschützter Sicherungszugang erforderlich'},403);
 if(req.method!=='GET')return json({error:'Sicherungszugang ist ausschließlich lesend'},405);
 if(!env.DB)return json({error:'Datenbank fehlt'},503);
 const url=new URL(req.url),part=url.searchParams.get('part')||'database';
 try{
  if(part==='deletion-guard'){
   const mode=await env.DB.prepare("SELECT mode,revision FROM workspace_store WHERE id='main'").first();let state;
   if(mode?.mode==='records'){const row=await env.DB.prepare("SELECT payload FROM workspace_records WHERE collection='$root' AND record_id='privacyRevision' AND deleted=0").first();state={privacyRevision:row?JSON.parse(row.payload):0,revision:mode.revision};}
   else{const row=await env.DB.prepare("SELECT value FROM private_workspace WHERE id='owner-test'").first();state=row?JSON.parse(row.value):{};}
   return json({format:'bergedorf-deletion-guard-v1',status:'current-protected-export',privacyRevision:state.privacyRevision||0,revision:state.revision||0,generatedAt:new Date().toISOString(),notice:'Nur für isolierte Wiederherstellung. Alte Sicherungen vor einer Löschung sind gesperrt. Keine Bestätigung der Löschung aus Anbieter-Sicherungen.'});
  }
  if(part==='database'){const data=await exportDatabase(env.DB);return json({data,sha256:await sha256(JSON.stringify(data))});}
  if(part==='objects')return json({objects:await exportObjects(env.BUCKET)});
  if(part==='object'){
   if(!env.BUCKET)return json({error:'Dateispeicher fehlt'},503);
   const key=url.searchParams.get('key');if(!key||key.length>1024)return json({error:'Ungültiger Objektschlüssel'},400);
   const object=await env.BUCKET.get(key);if(!object)return json({error:'Datei nicht gefunden'},404);
   const bytes=await object.arrayBuffer();return new Response(bytes,{headers:{...headers,'Content-Type':'application/octet-stream','X-Content-SHA256':await sha256(bytes)}});
  }
  return json({error:'Unbekannter Sicherungsteil'},400);
 }catch{return json({error:'Sicherung konnte nicht vollständig gelesen werden'},503)}
}
