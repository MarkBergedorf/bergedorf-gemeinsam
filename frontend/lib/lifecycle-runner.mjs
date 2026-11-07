// Adapter boundary for a future trusted scheduler. There is no public URL or configured cron.
// atomicUpdate MUST read fresh state and use a transaction/CAS; the lease is acquired by the caller.
import {runLifecycle} from './lifecycle.mjs';
export async function runLifecycleTick({atomicUpdate,lease,release},now=new Date().toISOString()){
 if(!await lease('retention'))return {status:'already-running'};
 try{return await atomicUpdate(state=>{const result=runLifecycle(state,now,()=>crypto.randomUUID());return {state,result:{...result,emailTransport:'not-connected',scheduler:'adapter-only'}}})}finally{await release('retention')}
}
