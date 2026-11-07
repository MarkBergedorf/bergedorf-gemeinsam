import {canonicalReactions,reactionActor} from './reactions.mjs';
import {boroughActive,documentBorough} from './boroughs.mjs';
import {financeOwner,publicFinance} from './support-finance.mjs';
import {publicConsent} from './contribution-consent.mjs';
import {reviewNotice} from './participation.mjs';
import {isRetiredExampleDocument,exampleRecord,exampleDocuments} from './examples.mjs';
import {directoryResearch,editorialEntry,editorialVisible} from './directory-catalog.mjs';
import {firstApprovedAt} from './reader-select.mjs';
// Ownership is explicitly provisioned in private_access. Requests never claim an empty database.
import {InputError} from './workspace.mjs';
const cookieName='bg-private-role';
const digest=async v=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v)))).map(x=>x.toString(16).padStart(2,'0')).join('');
export async function resolveAccess(db,user,req){
 if(!user||!db)return null;
 const row=await db.prepare('SELECT owner FROM private_access WHERE id=?').bind('owner').first();
 if(!row?.owner)throw new InputError('Eigentümer ist noch nicht ausdrücklich eingerichtet. Administration erforderlich.',503);
 const owner=row.owner===user.userId;
 const token=req?.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(cookieName+'='))?.slice(cookieName.length+1);
 let mode=owner?'admin':'reader';
 if(token){const session=await db.prepare('SELECT * FROM private_sessions WHERE token=? AND userid=? AND expires>?').bind(await digest(token),user.userId,new Date().toISOString()).first();if(!session)throw new InputError('Testzugang abgelaufen. Rollenansicht neu wählen.',401);mode=session.mode;}
 return {reactionActor:user.userId,role:mode==='admin'?'admin':mode==='author'||mode==='author-other'?'author':'reader',actor:mode==='author-other'?user.userId+':test-other':user.userId,legacyOwner:row.owner,canRestoreOwner:owner,testAccess:owner,emailConfirmed:false,mode};
}
export async function changeAccess(db,user,req){
 if(!user)return Response.json({error:'Privater Zugang erforderlich'},{status:401});
 if(req.headers.get('origin')!==new URL(req.url).origin)return Response.json({error:'Fremder Ursprung'},{status:403});
 // Owner restoration uses trusted identity, never a role supplied to workspace actions.
 const owner=await db.prepare('SELECT owner FROM private_access WHERE id=?').bind('owner').first();
 if(owner?.owner!==user.userId)return Response.json({error:'Nur der private Eigentümer darf Testzugänge wählen'},{status:403});
 const {mode}=await req.json();if(!['admin','reader','author','author-other','visitor'].includes(mode))return Response.json({error:'Ungültiger Testzugang'},{status:400});
 const token=crypto.randomUUID()+crypto.randomUUID();
 await db.prepare('DELETE FROM private_sessions WHERE expires<?').bind(new Date().toISOString()).run();
 await db.prepare('INSERT INTO private_sessions(token,userid,mode,expires) VALUES(?,?,?,?)').bind(await digest(token),user.userId,mode,new Date(Date.now()+8*3600000).toISOString()).run();
 return Response.json({message:'Privater Testzugang gewechselt'},{headers:{'Set-Cookie':`${cookieName}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`,'Cache-Control':'no-store'}});
}
export const canWriteAsParticipant=ctx=>ctx?.role==='admin'||ctx?.role==='author'&&(ctx.emailConfirmed===true||ctx.testAccess===true);
export const owns=(item,ctx)=>(item.ownerId||ctx.legacyOwner)===ctx.actor;
export const visible=(s,d)=>!!(d?.published&&boroughActive(s,documentBorough(d))&&!isRetiredExampleDocument(d)&&!d.hidden&&!d.withdrawn&&s.settings.areas[d.kind]?.status!=='inactive');
export function authorize(s,action,p,ctx){
 if(action==='borough-config'&&!(ctx?.role==='admin'&&ctx?.canRestoreOwner))throw new InputError('Nur der Betreiber darf Bezirke vorbereiten und aktivieren.',403);if(action==='support-finance'&&!financeOwner(ctx))throw new InputError('Nur der Betreiber darf Finanzdaten ändern.',403);if(!ctx)return;
 if(action==='retention-request'){const c=s.comments.find(x=>x.id===p.id);if(!c||!owns(c,ctx)||isRetiredExampleDocument(s.documents.find(d=>d.id===c.parent)))throw new InputError('Für diese Aktion fehlen die Zugriffsrechte',403);}
 if(isRetiredExampleDocument(s.documents.find(d=>d.id===p.id))&&ctx.role!=='admin')throw new InputError('Dieser frühere Teststand ist ausschließlich im administrativen Testarchiv verfügbar.',403);
 if(action==='file'&&exampleRecord(s,p.parent))throw new InputError('An die vorgegebenen Beispiele können keine Dateien angehängt werden.',403);
 if(ctx.role==='admin')return;
 if(action==='organization-confirm'){const org=s.documents.find(x=>x.id===p.id);if(ctx.role!=='author'||ctx.mode==='visitor'||!org||!owns(org,ctx))throw new InputError('Nur die eigene bestätigte Organisation darf Angaben bestätigen.',403);return;}
 if(ctx.mode==='visitor'&&action!=='react')throw new InputError('Zum Schreiben ist ein bestätigter Teilnehmerzugang erforderlich.',403);
 if(['save','submit','withdraw','consent-withdraw','delete-contribution','file','comment','suggestion'].includes(action)&&!canWriteAsParticipant(ctx))throw new InputError('Zum Schreiben und Kommentieren ist ein bestätigter E-Mail-Zugang erforderlich. In der privaten Vorschau ist nur der ausdrücklich berechtigte Testzugang verfügbar.',403);
 if(action==='save'&&p.kind==='verzeichnis')throw new InputError('Verzeichniseinträge werden ausschließlich redaktionell verwaltet. Bitte eine Einrichtung vorschlagen.',403);
 const deny=()=>{throw new InputError('Für diese Aktion fehlen die Zugriffsrechte',403)};
 const d=s.documents.find(x=>x.id===p.id)||exampleRecord(s,p.id);
 if(['save','submit','withdraw','consent-withdraw','delete-contribution','file'].includes(action)){
  if(ctx.role!=='author')deny();
  const target=action==='file'?s.documents.find(x=>x.id===p.parent):d;
  if(action==='file'&&(p.area==='gestaltung'||isRetiredExampleDocument(s.documents.find(d=>d.id===p.parent))))deny();
  if((action!=='save'||p.id)&&(!target||!owns(target,ctx)))deny();return;
 }
 if(['react','comment','suggestion'].includes(action)){if(!visible(s,d)&&!(action!=='comment'&&String(p.id).startsWith('editorial-')&&editorialVisible(s,p.id)))deny();return;}
 if(action==='institution-proposal')return;
 if(action==='comment-report'){const c=s.comments.find(x=>x.id===p.id);if(!c||c.status!=='sichtbar'||c.hidden||!visible(s,s.documents.find(d=>d.id===c.parent)||exampleRecord(s,c.parent)))deny();return;}
 if(action==='case'){if(p.kind==='Einspruch'&&(ctx.role!=='author'||!d||!owns(d,ctx)))deny();if(p.id&&!visible(s,d)&&!owns(d||{},ctx)&&!editorialVisible(s,p.id))deny();return;}
 if(action==='retention-request'){const c=s.comments.find(x=>x.id===p.id);if(!c||!owns(c,ctx))deny();return;}
 deny();
}
export function project(s,ctx){
 if(!ctx||ctx===true)return s; // internal integration harness only; HTTP routes always resolve trusted access
 const out=structuredClone(s),admin=ctx.role==='admin',writer=canWriteAsParticipant(ctx);out.exampleDocuments=exampleDocuments(s);
 out.editorialEntries=directoryResearch.map(r=>editorialEntry(s,r.id)).filter(r=>admin||(s.settings.areas.verzeichnis.status!=='inactive'&&r.readerStatus==='released')).map(r=>admin?r:Object.fromEntries(Object.entries(r).filter(([k])=>!['releaseReason','editReason','decidedAt'].includes(k))));
 const publicFields=f=>f&&Object.fromEntries(Object.entries(f).filter(([k])=>!['internalContact','internalEmail','authority','districtConnection','forwardRequest'].includes(k)));
 out.documents=s.documents.filter(d=>admin||!isRetiredExampleDocument(d)&&(writer&&ctx.role==='author'&&owns(d,ctx)||visible(s,d))).map(d=>admin||writer&&ctx.role==='author'&&owns(d,ctx)?{...structuredClone(d),retiredExample:isRetiredExampleDocument(d),canEdit:!isRetiredExampleDocument(d)&&(admin||d.kind!=='verzeichnis')}:{id:d.id,districtId:documentBorough(d),kind:d.kind,origin:d.origin,isExample:!!d.isExample,published:publicFields(d.published),publicConsent:publicConsent(d),publicationId:d.publicationId,version:d.version,publishedAt:d.publishedAt,firstPublishedAt:firstApprovedAt(d),created:d.created,representation:d.representation?{status:d.representation.status,checked:d.representation.checked,lastConfirmedAt:d.representation.lastConfirmedAt}:undefined,canEdit:false});
 const readable=[...s.documents.filter(d=>visible(s,d)).map(d=>d.id),...exampleDocuments(s).map(d=>d.id),...out.editorialEntries.filter(r=>editorialVisible(s,r.id)).map(r=>'editorial-'+r.id)];
 out.comments=s.comments.filter(c=>admin||!isRetiredExampleDocument(s.documents.find(d=>d.id===c.parent))&&(readable.includes(c.parent)&&!c.hidden&&!c.hiddenByParent&&!c.manualHidden&&!c.reportHidden&&c.status==='sichtbar'||ctx.role==='author'&&owns(c,ctx))).map(c=>{const mine=owns(c,ctx),requestOpen=s.requests.some(r=>r.comment===c.id&&r.status==='offen')||c.request==='offen';const value=admin||ctx.role==='author'&&mine?structuredClone(c):Object.fromEntries(Object.entries(c).filter(([k])=>!['ownerId','decision','request'].includes(k)));return {...value,mine,requestOpen:mine&&requestOpen,canRequestRetention:mine&&c.kind==='geschichte'&&c.status==='sichtbar'&&!c.hidden&&!c.hiddenByParent&&!c.manualHidden&&!c.reportHidden&&!c.permanent&&!requestOpen&&c.request!=='abgelehnt'}});
 const unique=new Map();for(const r of canonicalReactions(s.reactions,ctx.legacyOwner))unique.set([r.parent,r.version,r.actor||ctx.legacyOwner].join('|'),r);
 out.reactions=[...unique.values()].filter(r=>admin||readable.includes(r.parent)).map(r=>({parent:r.parent,version:r.version,symbol:r.symbol,created:r.created,mine:(r.actor||ctx.legacyOwner)===reactionActor(ctx)}));
 if(!admin){for(const key of ['cases','audit','support','suggestions','guestProfiles','participantSessions','accountLinks','erasureJobs','restoreExclusions','deletionReceipts'])out[key]=[];out.requests=s.requests.filter(r=>s.comments.some(c=>c.id===r.comment&&owns(c,ctx)&&!isRetiredExampleDocument(s.documents.find(d=>d.id===c.parent))));out.files=s.files.filter(f=>readable.includes(f.parent)||out.documents.some(d=>d.id===f.parent&&d.canEdit)).map(({key,...f})=>f);out.settings={...out.settings,researchStatus:Object.fromEntries(Object.entries(out.settings.researchStatus||{}).map(([id,r])=>[id,{readerStatus:r.readerStatus,sourceStatus:r.sourceStatus}])),operatorTasks:{},researchEdits:{},previousCrests:[]};}
 if(!admin){out.settings.boroughs=Object.fromEntries(Object.entries(s.settings.boroughs||{}).filter(([,v])=>v.status==='active').map(([id,v])=>[id,{status:v.status,news:v.news}]));delete out.privacyRevision;delete out.restoreExclusions;}out.reviewNotice=reviewNotice(s);out.notifications=(s.notifications||[]).filter(n=>admin||n.actor===ctx.actor);if(!admin){out.settings.participation={earliestReviewDate:s.settings.participation?.earliestReviewDate||''};out.myCases=s.cases.filter(c=>c.ownerId===ctx.actor).map(({id,kind,target,status,decision,created,updated,decidedAt,closedAt,reopenedAt})=>({id,kind,target,status,decision,created,updated,decidedAt,closedAt,reopenedAt}));}
 out.financePublication=publicFinance(s.finance?.real);if(!financeOwner(ctx))delete out.finance;out.permissions={canManageBoroughs:ctx.role==='admin'&&ctx.canRestoreOwner,canManageFinance:financeOwner(ctx),role:ctx.role,mode:ctx.mode,canAdmin:admin,canAuthor:writer,canComment:writer,canReact:true,emailConfirmed:ctx.emailConfirmed===true,testAccess:ctx.testAccess===true,canRestoreOwner:ctx.canRestoreOwner,canParticipate:ctx.mode!=='visitor'};return out;
}
export function canReadFile(s,f,ctx){return ctx?.role==='admin'||s.settings.crest.src==='/api/assets/'+f.id||s.documents.some(d=>d.id===f.parent&&!isRetiredExampleDocument(d)&&(visible(s,d)||canWriteAsParticipant(ctx)&&ctx?.role==='author'&&owns(d,ctx)));}
