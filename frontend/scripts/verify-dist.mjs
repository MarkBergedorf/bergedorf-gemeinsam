import {readdir,readFile,writeFile,stat} from 'node:fs/promises';import {join} from 'node:path';
const base='/bergedorf-gemeinsam/';const walk=async p=>(await Promise.all((await readdir(p,{withFileTypes:true})).map(async e=>e.isDirectory()?walk(join(p,e.name)):[join(p,e.name)]))).flat();
const html=await readFile('dist/index.html','utf8');if(!html.includes('noindex'))throw Error('noindex fehlt');
await writeFile('dist/404.html',html);await writeFile('dist/.nojekyll','');
const files=await walk('dist');
for(const f of files){if(/(?:^|\/)(?:api|db|drizzle|downloads|docs|backend)(?:\/|$)/.test(f)||/\.map$|\.sqlite$|\.zip$/.test(f))throw Error('Nicht öffentliche Datei im Pages-Artefakt: '+f);}
for(const match of html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)){if(!match[1].startsWith(base))throw Error('Falscher Basispfad '+match[1]);const p='dist/'+match[1].slice(base.length);await stat(p);}
for(const f of files.filter(f=>f.endsWith('.html'))){if(!(await readFile(f,'utf8')).includes('noindex'))throw Error('noindex fehlt '+f);}
// Sharing metadata must survive the production build and exist without JavaScript.
const preview='https://markbergedorf.github.io/bergedorf-gemeinsam/assets/social/bergedorf-gemeinsam-vorschau-v1.png';
const metaTags=s=>Object.fromEntries([...s.matchAll(/<meta (?:property|name)="([^"]+)" content="([^"]*)"\s*\/?\s*>/g)].map(m=>[m[1],m[2]]));
const expected=metaTags(await readFile('index.html','utf8'));
for(const file of ['dist/index.html','dist/404.html']){const page=await readFile(file,'utf8'),actual=metaTags(page);for(const key of ['og:type','og:site_name','og:title','og:description','og:url','og:image','og:image:width','og:image:height','og:image:alt','og:locale','twitter:card','twitter:title','twitter:description','twitter:image'])if(!actual[key]||actual[key]!==expected[key])throw Error('Vorschau-Metadaten fehlen oder abweichend: '+file+' '+key);if(actual['og:image']!==preview||actual['twitter:image']!==preview)throw Error('Falsche öffentliche Bildadresse');if(actual.robots!=='noindex, nofollow, noarchive')throw Error('Suchmaschinenschutz verändert');}
const png=await readFile('dist/assets/social/bergedorf-gemeinsam-vorschau-v1.png');if(png.subarray(0,8).toString('hex')!=='89504e470d0a1a0a'||png.readUInt32BE(16)!==1200||png.readUInt32BE(20)!==630)throw Error('Vorschaubild fehlt oder hat falsches Format/Abmessungen');
const state=JSON.parse(await readFile('pages/public-state.json','utf8'));for(const k of ['documents','comments','reactions','audit','cases','files'])if(state[k].length)throw Error('Kein Live-Datenexport erlaubt: '+k);
if(state.permissions.canAdmin||state.permissions.canAuthor||state.permissions.canReact)throw Error('Schreibrechte in Pages');
console.log(JSON.stringify({files:files.length,base,htmlNoindex:true,examples:state.exampleDocuments.length,editorialEntries:state.editorialEntries.length,liveRecords:0}));
