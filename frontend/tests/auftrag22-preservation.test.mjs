import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {withoutAuftrag22} from './fixtures/auftrag22-authorized.mjs';

const baseline='991f2dcbc67410b8198ce094b3282eca21609231';

test('Arbeitsauftrag 22 ändert in bestehenden Komponenten ausschließlich exakt markierte Passagen',()=>{
 for(const file of ['app/platform.tsx','app/events.css','app/events.tsx','app/tourism.tsx','app/homepage-current.tsx','app/directory.tsx','app/history-places.tsx']){
  const actual=withoutAuftrag22(file,readFileSync(file,'utf8'));
  const expected=execFileSync('git',['show',`${baseline}:frontend/${file}`],{encoding:'utf8',maxBuffer:20e6});
  assert.equal(actual,expected,file);
 }
});
