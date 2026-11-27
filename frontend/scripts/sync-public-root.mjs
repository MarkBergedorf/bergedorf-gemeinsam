import {cp,readdir} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import {readFile,stat} from 'node:fs/promises';

const source=resolve('dist');
const target=resolve('..');
for(const entry of await readdir(source)){
  await cp(join(source,entry),join(target,entry),{recursive:true,force:true});
}
const manifest=JSON.parse(await readFile(join(source,'asset-integrity.json'),'utf8'));
for(const asset of manifest.assets){
  const sourceBytes=await readFile(join(source,asset.path));
  const copiedPath=join(target,asset.path);
  const copiedInfo=await stat(copiedPath).catch(()=>null);
  if(!copiedInfo?.isFile())throw Error(`Kopierte Pages-Datei fehlt: ${asset.path}`);
  const copiedBytes=await readFile(copiedPath);
  const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
  if(sourceBytes.length!==asset.bytes||digest(sourceBytes)!==asset.sha256)throw Error(`dist-Datei weicht vom Prüfsummenverzeichnis ab: ${asset.path}`);
  if(copiedBytes.length!==asset.bytes||digest(copiedBytes)!==asset.sha256)throw Error(`Kopierte Pages-Datei weicht von dist ab: ${asset.path}`);
}
console.log(`GitHub-Pages-Root verifiziert: ${manifest.assets.length} Dateien stimmen bytegenau mit dist überein.`);
