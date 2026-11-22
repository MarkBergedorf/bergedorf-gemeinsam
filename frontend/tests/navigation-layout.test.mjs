import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {navigationTabLayout} from '../lib/navigation-tab-layout.mjs';

const extraLabels=['Nachrichten aus Bergedorf','Aktuelle Veranstaltungen','Einsamkeit in Bergedorf','Mietkosten bei Grundsicherung','Gäste und Tourismus'];

test('Desktop-Hauptnavigation zeigt alle zwölf unveränderten Ziele in einer geneigten Reihe',async()=>{
 const component=await readFile(new URL('../app/site-header.tsx',import.meta.url),'utf8');
 const data=await readFile(new URL('../lib/data.ts',import.meta.url),'utf8');
 const css=await readFile(new URL('../app/globals.css',import.meta.url),'utf8');
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
 const boot=await readFile(new URL('../public/assets/navigation-boot.css',import.meta.url),'utf8');
 for(const label of ['Anliegen & Verbesserungen','Erfahrungsberichte','Geschichte und Erinnerungen','Politik','Verzeichnis','Organisationen stellen sich vor'])assert.ok(data.includes(`short:'${label}'`),label);
 for(const label of ['Startseite',...extraLabels])assert.ok(component.includes(label),label);
 for(const label of extraLabels)assert.ok(component.includes(label),label);
 assert.ok(component.includes("sections.filter(s=>s.id!=='ueber'&&s.short!=='Über uns')"));
 assert.ok(component.includes('aria-current={page===item.id?\'page\':undefined}'));
 assert.ok(component.includes('className="nav-tab-slot"'));
 assert.ok(component.includes('navigationTabLayout(widths,width)'));
 assert.ok(component.includes("lines:['Mietkosten bei','Grundsicherung']"));
 assert.ok(component.includes("lines:['Gäste und','Tourismus']"));
 assert.ok(component.includes("context.font='600 14px Arial, Helvetica, sans-serif'"));
 assert.ok(html.includes('%BASE_URL%assets/navigation-boot.css'));
 assert.match(boot,/\.site-header\.navigation-compact nav\s*\{\s*display:\s*block\s*!important\s*;\s*\}/);
 assert.ok(css.includes('transform:rotate(-30deg)'));
 assert.ok(css.includes('padding:0 0 0 20px'));
 assert.ok(css.includes('transform-origin:left bottom'));
 assert.ok(css.includes('@media(max-width:1023px)'));
 assert.ok(css.includes('.site-header nav.open{display:block;}'));
 assert.ok(css.includes('min-height:48px'));
});

test('Parallelogramm-Tabs passen mit linkem Drehungsabstand bei üblichen Desktopbreiten in eine Reihe',()=>{
 // Inner widths after reserving 20px for the rotated first tab's leftward projection.
const widths=[80,112,100,112,32,65,145,100,117,100,118,105];
 for(const available of [1245,1260,1313,1346,1405,1420]){
  const layout=navigationTabLayout(widths,available);
  assert.ok(layout,`no fitting row at ${available}px`);
  assert.equal(layout.slotWidths.length,12);
  assert.ok(layout.totalWidth<=available);
  assert.ok(layout.fontSize>=12);
  assert.ok(layout.tabHeight>=40);
 }
});
