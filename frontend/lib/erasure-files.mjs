import {loadWorkspace,saveRecordWorkspace,scrubInactiveRecords} from './workspace-store.mjs';
// Only a trusted server handler invokes this. A failed object deletion remains visible and retryable.
export async function processErasureFiles(db,bucket){
 const loaded=await loadWorkspace(db);if(!(loaded.state.erasureJobs||[]).some(j=>j.filesStatus!=='verified'))return {pending:0,verified:0};
 const state=structuredClone(loaded.state);let verified=0;
 for(const job of state.erasureJobs){if(job.filesStatus==='verified')continue;if(!bucket){job.error='Dateispeicher nicht angeschlossen; Dateilöschung ungeprüft.';continue;}try{await bucket.delete(job.key);if(await bucket.head(job.key))throw Error();job.filesStatus='verified';job.verifiedAt=new Date().toISOString();delete job.key;delete job.error;verified++;}catch{job.error='Datei konnte nicht nachweislich gelöscht werden; erneut prüfen.';}}
 state.revision++;let saved;if(loaded.mode==='records')saved=await saveRecordWorkspace(db,loaded,state,'erasure-files');else{const r=await db.batch([db.prepare("UPDATE private_workspace SET value=?,updated=? WHERE id='owner-test' AND value=? AND NOT EXISTS(SELECT 1 FROM workspace_store WHERE mode='records')").bind(JSON.stringify(state),new Date().toISOString(),loaded.legacy),...scrubInactiveRecords(db,loaded,state)]);saved=r[0].meta.changes===1;}
 return {verified:saved?verified:0,pending:state.erasureJobs.filter(j=>j.filesStatus!=='verified').length,conflict:!saved};
}
