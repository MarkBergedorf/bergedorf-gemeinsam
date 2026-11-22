import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('Druckansicht zeigt Website-Kopf und unterdrückt keine Inhaltsüberschriften',async()=>{
 const css=await readFile(new URL('../app/globals.css',import.meta.url),'utf8');
 const header=await readFile(new URL('../app/site-header.tsx',import.meta.url),'utf8');
 const platform=await readFile(new URL('../app/platform.tsx',import.meta.url),'utf8');
 const events=await readFile(new URL('../app/events.tsx',import.meta.url),'utf8');
 assert.match(css,/\.site-header\{display:block!important/);
 assert.match(css,/\.site-header nav\{display:block!important/);
 assert.match(css,/\.site-header nav>\.primary-nav-list[^}]*flex-wrap:wrap!important/);
 assert.match(css,/\.nav-tab-label>span\{display:inline!important/);
 assert.match(css,/footer\.site-footer[^}]*display:none!important/);
 assert.doesNotMatch(css,/@media print\{header,footer/);
 assert.match(header,/aria-label=\{item\.label\}/);
 assert.match(platform,/className="site-footer"/);
 assert.match(events,/<header className="events-intro">/);
 assert.match(events,/<h1 id="events-heading">\{overviewTitle\}<\/h1>/);
 assert.match(css,/\.events-page>header[^}]*display:block!important/);
});
