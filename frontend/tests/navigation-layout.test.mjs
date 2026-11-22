import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {navigationTabLayout} from '../lib/navigation-tab-layout.mjs';

const extraLabels=['Nachrichten aus Bergedorf','Aktuelle Veranstaltungen in Bergedorf','Einsamkeit in Bergedorf','Mietkosten & Grundsicherung','Bergedorf entdecken (Gäste & Tourismus)'];

test('Desktop-Hauptnavigation zeigt alle zwölf unveränderten Ziele in einer geneigten Reihe',async()=>{
 const component=await readFile(new URL('../app/site-header.tsx',import.meta.url),'utf8');
 const data=await readFile(new URL('../lib/data.ts',import.meta.url),'utf8');
 const css=await readFile(new URL('../app/globals.css',import.meta.url),'utf8');
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
 const boot=await readFile(new URL('../public/assets/navigation-boot.css',import.meta.url),'utf8');
 for(const label of ['Start','Anliegen & Verbesserungen','Erfahrungsberichte','Geschichte und Erinnerungen','Politik','Verzeichnis','Organisationen stellen sich vor'])assert.ok(data.includes(`short:'${label}'`),label);
 for(const label of extraLabels)assert.ok(component.includes(label),label);
 assert.ok(component.includes("sections.filter(s=>s.id!=='ueber'&&s.short!=='Über uns')"));
 assert.ok(component.includes('aria-current={page===item.id?\'page\':undefined}'));
 assert.ok(component.includes('className="nav-tab-slot"'));
 assert.ok(component.includes('navigationTabLayout(widths,width)'));
 assert.ok(html.includes('%BASE_URL%assets/navigation-boot.css'));
 assert.match(boot,/\.site-header\.navigation-compact nav\s*\{\s*display:\s*block\s*!important\s*;\s*\}/);
 assert.ok(css.includes('transform:rotate(-30deg)'));
 assert.ok(css.includes('transform-origin:left bottom'));
 assert.ok(css.includes('@media(max-width:1023px)'));
 assert.ok(css.includes('.site-header nav.open{display:block;}'));
 assert.ok(css.includes('min-height:48px'));
});

test('Parallelogramm-Tabs passen bei üblichen Desktopbreiten in eine Reihe ohne Überlauf',()=>{
 // Conservative 12px Arial widths for the unchanged labels, plus rendering allowance.
 const widths=[24,147,111,172,39,70,173,131,208,121,139,220];
 for(const available of [1280,1366,1440]){
  const layout=navigationTabLayout(widths,available);
  assert.ok(layout,`no fitting row at ${available}px`);
  assert.equal(layout.slotWidths.length,12);
  assert.ok(layout.totalWidth<=available);
  assert.ok(layout.fontSize>=9);
 }
});
