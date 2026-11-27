import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const privacy=readFileSync(new URL('../pages/privacy.tsx',import.meta.url),'utf8');
const css=readFileSync(new URL('../pages/privacy.css',import.meta.url),'utf8');

test('Auftrag 32.1: alle 18 Datenschutzbereiche sind direkt verlinkt und eindeutig gegliedert',()=>{
 const ids=[...privacy.matchAll(/<section id="datenschutz-([^"]+)"/g)].map(x=>x[1]);
 const links=[...privacy.matchAll(/href=\{`#datenschutz-\$\{id\}`\}/g)];
 assert.equal(ids.length,18);
 assert.equal(new Set(ids).size,18);
 assert.equal(links.length,1);
 for(const term of ['Verantwortlicher und Kontakt','Hosting durch GitHub Pages','Benutzerkonto und Firebase Authentication','Lokale Browserdaten und Einstellungen','Karten und externe Kartendienste','Kontaktaufnahme per E-Mail','Meldung technischer Störungen','Lokal vorbereitete Meldungen','Betroffenenrechte','Datenschutzaufsicht','Stand: 27. November 2026'])assert(privacy.includes(term),term);
 assert(css.includes('.privacy-toc'));
 assert.match(css,/@media\s*\(max-width:\s*700px\)/);
});

test('Auftrag 32.1: vorhandene Betriebsgrenzen und offene Einwilligungsnachweise werden klar benannt',()=>{
 for(const term of [
  'keine angeschlossene Datenbank für öffentliche Beiträge',
  'nicht in einem serverseitigen Einwilligungsprotokoll',
  'Textversion und Zeitstempel',
  'Die rechtliche Bewertung und ein geeigneter Nachweisprozess sind noch offen',
  'derzeit nicht eingerichtet',
  'Petitionen, Unterstützungslisten',
  'keine Interessenbekundungen entgegen',
  'Eine Zahlungsfunktion, GoFundMe-Anbindung oder Kampagne ist auf dieser Website nicht eingerichtet',
  'Firebase wird erst nach dem ausdrücklichen Öffnen des Dienstes initialisiert',
  'Firebase Authentication ausschließlich in US-Rechenzentren',
  'OpenFreeMap',
  'Cloudflare'
 ])assert(privacy.includes(term),term);
});
