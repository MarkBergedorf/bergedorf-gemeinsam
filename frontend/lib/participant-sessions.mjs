// Provider-independent session store. No email provider is connected in this private Site.
// Prepared schema only: no live schema migration is performed. Existing participants tables require an explicitly reviewed update before connecting this adapter.
// Only a trusted server-side confirmation adapter may call issueParticipantSession.
const digest=async token=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token)))).map(n=>n.toString(16).padStart(2,'0')).join('');
export const participantSchema=`CREATE TABLE participants(id TEXT PRIMARY KEY,provider TEXT NOT NULL,subject TEXT NOT NULL,kind TEXT NOT NULL DEFAULT 'guest',created TEXT,last_login TEXT,UNIQUE(provider,subject)); CREATE TABLE participant_sessions(token_hash TEXT PRIMARY KEY,participant_id TEXT NOT NULL,expires TEXT NOT NULL,created TEXT NOT NULL);`;
export async function issueParticipantSession(db,verified,{remember=false,now=new Date().toISOString()}={}){
 if(!verified?.emailConfirmed||!verified.provider||!verified.subject)throw Error('Serverseitig bestätigte E-Mail-Identität erforderlich.');
 const identity=await digest(verified.provider+'\0'+verified.subject),id='participant-'+identity;
 await db.prepare('INSERT INTO participants(id,provider,subject,kind,created,last_login) VALUES(?,?,?,?,?,?) ON CONFLICT(provider,subject) DO UPDATE SET last_login=excluded.last_login').bind(id,verified.provider,verified.subject,verified.kind==='organization'?'organization':'guest',now,now).run();
 const token=crypto.randomUUID()+crypto.randomUUID(),seconds=remember?30*86400:8*3600;
 await db.prepare('INSERT INTO participant_sessions(token_hash,participant_id,expires,created) VALUES(?,?,?,?)').bind(await digest(token),id,new Date(Date.parse(now)+seconds*1000).toISOString(),now).run();
 return {participantId:id,cookie:`__Host-bg-participant=${token}; Path=/; HttpOnly; Secure; SameSite=Lax${remember?'; Max-Age='+seconds:''}`};
}
export async function verifyParticipantSession(db,request,now=new Date().toISOString()){
 const token=request.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith('__Host-bg-participant='))?.split('=')[1];if(!token)return null;
 return db.prepare('SELECT participant_id FROM participant_sessions WHERE token_hash=? AND expires>?').bind(await digest(token),now).first();
}
export async function logoutParticipant(db,request,{allDevices=false,now=new Date().toISOString()}={}){
 const current=await verifyParticipantSession(db,request,now);if(current){if(allDevices)await db.prepare('DELETE FROM participant_sessions WHERE participant_id=?').bind(current.participant_id).run();else{const token=request.headers.get('cookie').split(';').map(x=>x.trim()).find(x=>x.startsWith('__Host-bg-participant='))?.split('=')[1];await db.prepare('DELETE FROM participant_sessions WHERE token_hash=?').bind(await digest(token)).run();}}
 return '__Host-bg-participant=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0';
}
