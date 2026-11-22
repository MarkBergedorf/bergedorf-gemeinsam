import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';

const root=join(process.cwd(),'..');

test('GitHub-Pages-Einstiege sind synchronisiert und das veröffentlichte Bundle ist syntaktisch vollständig',()=>{
 const index=readFileSync(join(root,'index.html'));
 const notFound=readFileSync(join(root,'404.html'));
 assert.deepEqual(notFound,index,'index.html und 404.html müssen denselben Produktionsstand referenzieren');
 const html=index.toString('utf8');
 const scripts=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+\.js)"/g)].map(match=>match[1]);
 const styles=[...html.matchAll(/<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+\.css)"/g)].map(match=>match[1]);
 assert(scripts.length>0,'Kein Produktions-JavaScript referenziert');
 assert(styles.length>0,'Kein Produktions-Stylesheet referenziert');
 for(const asset of [...scripts,...styles])assert(existsSync(join(root,asset.replace(/^\/bergedorf-gemeinsam\//,''))),`Fehlendes Pages-Asset: ${asset}`);
 for(const script of scripts)execFileSync(process.execPath,['--check',join(root,script.replace(/^\/bergedorf-gemeinsam\//,''))],{stdio:'pipe'});
});
