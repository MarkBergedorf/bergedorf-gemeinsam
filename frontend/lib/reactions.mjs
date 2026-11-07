// Reactions belong to authenticated accounts, not owner-issued test roles.
export const reactionActor=ctx=>ctx?.reactionActor||ctx?.actor||'legacy-test';
export function accountActor(actor,owner=''){
 const value=actor||owner||'legacy-test';
 return owner&&value===owner+':test-other'?owner:value;
}
export function canonicalReactions(items=[],owner=''){
 const unique=new Map();
 for(const item of items){const r={...item,actor:accountActor(item.actor,owner)};unique.set(JSON.stringify([r.parent,r.version,r.actor]),r);}
 return [...unique.values()];
}
// No user/contribution history is needed after withdrawal. The anonymous global
// write-rate counter is retained for 60 seconds, other private operations 24h.
export function prunePrivateAudit(db,now=new Date().toISOString()){
 return db.prepare("DELETE FROM private_audit WHERE (action='react' AND created<?) OR created<?").bind(new Date(Date.parse(now)-60000).toISOString(),new Date(Date.parse(now)-86400000).toISOString());
}
