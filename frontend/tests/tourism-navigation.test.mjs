import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {tourismCategories,tourismItems,filterTourismItems} from '../lib/tourism-data.mjs';
import {parseRoute} from '../lib/navigation.mjs';

test('all twelve topic tabs stay inside tourism and target populated sections',async()=>{
  const page=await readFile(new URL('../app/tourism.tsx',import.meta.url),'utf8');
  assert.match(page,/tourismCategories\.map\(c=><a key=\{c\.id\} href=\{`#tourismus-\$\{c\.id\}`} onClick=\{e=>jumpTo\(e,c\.id\)\}>/);
  assert.match(page,/document\.getElementById\('tourismus-'\+scrollTarget\)/);
  assert.match(page,/function jumpTo\(e:React\.MouseEvent<HTMLAnchorElement>,id:string\)\{e\.preventDefault\(\);setQuery\(''\);setFreeOnly\(false\);setBikeFriendlyOnly\(false\);setSelected\(new Set\(tourismCategories\.map\(c=>c\.id\)\)\);setScrollTarget\(id\)\}/);

  for(const category of tourismCategories){
    assert.ok(tourismItems.some(item=>item.category===category.id||(item.categoryLinks||[]).includes(category.id)),`empty target: ${category.id}`);
    assert.notEqual(parseRoute(`#tourismus-${category.id}`).page,'tourismus',`hash is a router route: ${category.id}`);
    assert.ok(filterTourismItems({categoryIds:[category.id]}).length>0,`filter has no records: ${category.id}`);
  }
});

test('both tourism entry links prevent route changes and retain their destinations',async()=>{
  const page=await readFile(new URL('../app/tourism.tsx',import.meta.url),'utf8');
  assert.match(page,/<a href="#tourismus-rundgaenge" onClick=\{e=>jumpTo\(e,'rundgaenge'\)\}>Rundgänge und Routen ansehen/);
  assert.match(page,/<a href="#tourismus-sehenswuerdigkeiten" onClick=\{e=>jumpTo\(e,'gedenkstaette'\)\}>Informationen und offizielle Besuchsseite/);
  assert.match(page,/scrollTarget==='gedenkstaette'\?document\.querySelector\('\[data-tourism-id="gedenkstaette"\]'\)/);
  assert.match(page,/data-tourism-id=\{item\.id\}/);
  assert.match(page,/<a href="#veranstaltungen">Zum Veranstaltungskalender/);
});

test('tourism navigation label is explicit and all 93 sourced entries remain available alongside additions',async()=>{
  const platform=await readFile(new URL('../app/platform.tsx',import.meta.url),'utf8');
  assert.match(platform,/Bergedorf entdecken \(Gäste &amp; Tourismus\)/);
  assert.ok(tourismItems.length>93);
  const original=JSON.parse(await readFile(new URL('./fixtures/tourism-original-records.json',import.meta.url),'utf8'));
  assert.equal(original.length,93);
  for(const item of original)assert.ok(tourismItems.some(x=>x.id===item.id),`missing original record ${item.id}`);
  for(const item of tourismItems)assert.ok(item.description.length>0&&item.source.url.startsWith('https://'),item.id);
});
