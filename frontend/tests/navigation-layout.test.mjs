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
 assert.match(boot,/\.site-header\.navigation-measuring nav\s*\{[\s\S]*display:\s*block\s*!important\s*;/);
 assert.ok(css.includes('transform:rotate(-30deg)'));
 assert.ok(css.includes('padding:0 0 0 20px'));
 assert.ok(css.includes('justify-content:space-between'));
 assert.ok(css.includes('transform-origin:left bottom'));
 assert.ok(component.includes('header.clientWidth-parseFloat(css.paddingLeft||\'0\')-parseFloat(css.paddingRight||\'0\')'));
 assert.ok(component.includes('observer.observe(header)'));
 assert.ok(component.includes("window.addEventListener('resize',schedule)"));
 assert.ok(component.includes("window.addEventListener('orientationchange',schedule)"));
 assert.ok(component.includes("window.visualViewport?.addEventListener('resize',schedule)"));
 assert.ok(component.includes('observer.observe(document.documentElement)'));
 assert.ok(component.includes('requestAnimationFrame(()=>{frame=requestAnimationFrame'));
 assert.ok(component.includes('window.setTimeout(()=>{if(!disposed)measure()},160)'));
 assert.ok(component.includes("onKeyDown={e=>{if(e.key==='Escape'&&mobile)"));
 assert.ok(css.includes('.site-header.navigation-measuring nav{display:block;position:absolute;inset:100% 0 auto;visibility:hidden;}'));
 assert.ok(css.includes('.site-header.navigation-compact nav{display:none!important;}'));
 assert.ok(css.includes('.site-header.navigation-compact nav.open{display:block!important;}'));
 assert.ok(css.includes('.site-header.navigation-compact nav>.primary-nav-list'));
 assert.ok(!css.includes('.site-header nav{display:none;height:auto!important;}'));
 assert.ok(css.includes('min-height:48px'));
});

test('Die Umschaltung nutzt den verfügbaren Platz statt eines festen Desktopbreakpoints',()=>{
 const widths=[80,112,100,112,32,65,145,100,117,100,118,105];
 for(const viewport of [1920,1600,1366,1280]){
  const layout=navigationTabLayout(widths,viewport-20);
  assert.ok(layout,'no fitting row at viewport '+viewport+'px');
  assert.equal(layout.slotWidths.length,12);
  assert.ok(layout.totalWidth<=viewport-20);
  assert.ok(layout.fontSize>=12);
  assert.ok(layout.tabHeight>=40);
 }
 assert.equal(navigationTabLayout(widths,1024-20),null);
 assert.equal(navigationTabLayout(widths,900-20),null);
 assert.equal(navigationTabLayout(widths,768-20),null);
 assert.equal(navigationTabLayout(widths,390-20),null);
 // Shrinking from desktop switches to compact mode; growing again restores the tab row.
 assert.ok(navigationTabLayout(widths,1366-20));
 assert.equal(navigationTabLayout(widths,1024-20),null);
 assert.ok(navigationTabLayout(widths,1366-20));
});
