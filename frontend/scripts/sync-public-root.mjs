import {cp,readdir} from 'node:fs/promises';
import {resolve,join} from 'node:path';

const source=resolve('dist');
const target=resolve('..');
for(const entry of await readdir(source)){
  await cp(join(source,entry),join(target,entry),{recursive:true,force:true});
}
console.log('GitHub-Pages-Root mit geprüftem dist-Inhalt aktualisiert; nicht erzeugte Dateien bleiben erhalten.');
