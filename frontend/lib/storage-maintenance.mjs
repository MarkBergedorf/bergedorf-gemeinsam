import {sha256} from './backup.mjs';
import {migrateWorkspace,rollbackWorkspace,loadWorkspace} from './workspace-store.mjs';
/** @param {{role:string, canRestoreOwner?:boolean}|null} ctx */
export async function maintainStorage(req,env,ctx=null){
 const supplied=req.headers.get('X-Private-Migration-Key');
 const service=!!(env.PRIVATE_MAINTENANCE_ENABLED==='explicitly-enabled'&&env.PRIVATE_MIGRATION_KEY&&supplied&&supplied.length<257&&await sha256(supplied)===await sha256(env.PRIVATE_MIGRATION_KEY));
 if(!(ctx?.role==='admin'&&ctx.canRestoreOwner)&&!service)return Response.json({error:'Geschützter Umstellungszugang erforderlich'},{status:403});
 if(req.method!=='POST'||req.headers.get('origin')!==new URL(req.url).origin)return Response.json({error:'Nur gleichursprünglicher POST erlaubt'},{status:403});
 try{
  const text=await req.text();if(text.length>1000)return Response.json({error:'Anfrage zu groß'},{status:413});
  const p=JSON.parse(text);let result;
  if(p.action==='migrate'&&/^[a-f0-9]{64}$/.test(p.baselineHash))result=await migrateWorkspace(env.DB,p.baselineHash);
  else if(p.action==='rollback'&&Number.isSafeInteger(p.revision))result=await rollbackWorkspace(env.DB,p.revision);
  else if(p.action==='status'){const s=await loadWorkspace(env.DB);result={mode:s.mode,revision:s.state.revision};}
  else return Response.json({error:'Ungültige Umstellungsaktion'},{status:400});
  return Response.json(result,{headers:{'Cache-Control':'no-store'}});
 }catch(e){return Response.json({error:e.status?e.message:'Speicherumstellung fehlgeschlagen'},{status:e.status||503})}
}
