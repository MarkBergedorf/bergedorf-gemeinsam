import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('Desktop-Hauptnavigation bleibt einzeilig, vollständig, keyboard-scrollbar und mit aktiver Seite sichtbar',async()=>{
 const platform=await readFile(new URL('../app/platform.tsx',import.meta.url),'utf8');
 const css=await readFile(new URL('../app/globals.css',import.meta.url),'utf8');
 assert.ok(platform.includes('className="primary-nav-list"'));
 assert.ok(platform.includes('aria-label="Weitere Navigationspunkte links"'));
 assert.ok(platform.includes('aria-label="Weitere Navigationspunkte rechts"'));
 assert.ok(platform.includes('aria-current={page===s.id?\'page\':undefined}'));
 assert.ok(platform.includes('sections.filter(s=>s.id!==\'ueber\'&&s.short!==\'Über uns\')'));
 for(const label of ['Nachrichten aus Bergedorf','Aktuelle Veranstaltungen in Bergedorf','Einsamkeit in Bergedorf','Mietkosten &amp; Grundsicherung','Bergedorf entdecken (Gäste &amp; Tourismus)'])assert.ok(platform.includes(label),label);
 assert.ok(css.includes('flex-wrap:nowrap'));
 assert.ok(css.includes('overflow-x:auto'));
 assert.ok(css.includes('nav-scroll-control:focus-visible'));
 assert.ok(platform.includes('el.scrollLeft+=box.right-viewport.right'));
 assert.ok(css.includes('min-height:48px'));
});
