import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';

// Normalize an A18-touched source only on its first pass through a historical
// preservation chain. Later layers receive an older intermediate snapshot.
const changed=new Set(['frontend/app/app-installation.tsx','frontend/app/contributions.tsx','frontend/app/credits-page.tsx','frontend/app/legal-pages.tsx','frontend/app/map-legend.tsx','frontend/app/platform.tsx','frontend/app/support.tsx','frontend/lib/participation.mjs','frontend/lib/press-discussions.mjs','frontend/lib/map-privacy-info.mjs']);
export function withoutAuftrag18(path,bytes){
 const key=path.startsWith('frontend/')?path:'frontend/'+path;
 if(!changed.has(key))return Buffer.from(bytes);
 const actual=readFileSync('../'+key);
 if(!Buffer.from(bytes).equals(actual))return Buffer.from(bytes);
 return Buffer.from(execFileSync('git',['show','ea53f448b891035e263501c9055a7baac56cb2e2:'+key],{maxBuffer:16e6}));
}
