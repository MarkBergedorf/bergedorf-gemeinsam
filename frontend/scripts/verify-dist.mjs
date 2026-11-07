import {readdir,readFile,writeFile,stat} from 'node:fs/promises';import {join} from 'node:path';
const base='/bergedorf-gemeinsam/';const walk=async p=>(await Promise.all((await readdir(p,{withFileTypes:true})).map(async e=>e.isDirectory()?walk(join(p,e.name)):[join(p,e.name)]))).flat();
const html=await readFile('dist/index.html','utf8');if(!html.includes('noindex'))throw Error('noindex fehlt');
await writeFile('dist/404.html',html);await writeFile('dist/.nojekyll','');
const files=await walk('dist');
for(const f of files){if(/(?:^|\/)(?:api|db|drizzle|downloads|docs|backend)(?:\/|$)/.test(f)||/\.map$|\.sqlite$|\.zip$/.test(f))throw Error('Nicht öffentliche Datei im Pages-Artefakt: '+f);}
for(const match of html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)){if(!match[1].startsWith(base))throw Error('Falscher Basispfad '+match[1]);const p='dist/'+match[1].slice(base.length);await stat(p);}
for(const f of files.filter(f=>f.endsWith('.html'))){if(!(await readFile(f,'utf8')).includes('noindex'))throw Error('noindex fehlt '+f);}
const state=JSON.parse(await readFile('pages/public-state.json','utf8'));for(const k of ['documents','comments','reactions','audit','cases','files'])if(state[k].length)throw Error('Kein Live-Datenexport erlaubt: '+k);
if(state.permissions.canAdmin||state.permissions.canAuthor||state.permissions.canReact)throw Error('Schreibrechte in Pages');
console.log(JSON.stringify({files:files.length,base,htmlNoindex:true,examples:state.exampleDocuments.length,editorialEntries:state.editorialEntries.length,liveRecords:0}));
