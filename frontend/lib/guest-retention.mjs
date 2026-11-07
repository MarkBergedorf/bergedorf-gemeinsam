// Prepared trusted adapter, NOT exposed by the private guest-login endpoint.
// Requires the prepared participant schema. No migration, registration or mail is run here.
import {guestIsEmpty,lifecycleDates} from './lifecycle.mjs';import {berlinDate} from './rules.mjs';
export async function guestRetentionCandidates(db,state,now){const rows=(await db.prepare("SELECT id,kind,created,last_login FROM participants WHERE kind='guest'").all()).results;return rows.map(r=>({id:r.id,kind:r.kind,lastLoginAt:r.last_login,created:r.created,...lifecycleDates(r.last_login||r.created,6),eligible:guestIsEmpty(state,r)})).filter(g=>g.eligible&&g.warnOn<=berlinDate(now));}
export async function removeInactiveGuest(db,loaded,guest,now){
 const dates=lifecycleDates(guest.lastLoginAt||guest.created,6);if(!dates||guest.kind!=='guest'||!guestIsEmpty(loaded.state,guest)||dates.deleteOn>berlinDate(now))return false;
 // All statements share the same D1 transaction; successful login and workspace edits invalidate this predicate.
 const gate=loaded.mode==='records'?"EXISTS(SELECT 1 FROM workspace_store WHERE id='main' AND mode='records' AND revision=?)":"EXISTS(SELECT 1 FROM private_workspace WHERE id='owner-test' AND value=?) AND NOT EXISTS(SELECT 1 FROM workspace_store WHERE mode='records')";
 const version=loaded.mode==='records'?loaded.state.revision:loaded.legacy;
 const check="EXISTS(SELECT 1 FROM participants WHERE id=? AND kind='guest' AND last_login IS ?) AND "+gate;
 const args=[guest.id,guest.lastLoginAt||null,version];
 const result=await db.batch([
 db.prepare('DELETE FROM participant_sessions WHERE participant_id=? AND '+check).bind(guest.id,...args),
 db.prepare('DELETE FROM participants WHERE id=? AND '+check).bind(guest.id,...args)
 ]);return result[1].meta.changes===1;
}
