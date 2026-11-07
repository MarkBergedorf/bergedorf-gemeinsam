import {readdir,readFile,writeFile,mkdir,cp,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';import {resolve,join} from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url)),dist=join(root,'frontend/dist');
// Only the generated site at repository root is synchronized. Sources/docs stay intact.
for(const name of ['assets','app-icons']){await rm(join(root,name),{recursive:true,force:true});await cp(join(dist,name),join(root,name),{recursive:true})}
for(const name of ['index.html','404.html','manifest.webmanifest','.nojekyll'])await cp(join(dist,name),join(root,name));
const walk=async p=>(await Promise.all((await readdir(p,{withFileTypes:true})).map(e=>e.isDirectory()?walk(join(p,e.name)):[join(p,e.name)]))).flat();
for(const p of await walk(dist)){const rel=p.slice(dist.length+1);if(!Buffer.from(await readFile(p)).equals(Buffer.from(await readFile(join(root,rel)))))throw Error('Ausgabe nicht synchron: '+rel)}
console.log('GitHub-Pages-Ausgabe am Repository-Stamm entspricht vollständig frontend/dist.');
