import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const read=(path)=>readFile(new URL(path,import.meta.url),'utf8');

test('umfangreiche Suchbereiche sind standardmäßig kompakt und behalten aktive Filter erkennbar',async()=>{
 const events=await read('../app/events.tsx');
 const tourism=await read('../app/tourism.tsx');
 const directory=await read('../app/directory.tsx');
 const contributions=await read('../app/contributions.tsx');
 const history=await read('../app/history-places.tsx');
 assert.match(events,/<details className="event-filter-advanced">/);
 for(const label of ['Zeitraum','Von<input type="date"','Bis<input type="date"','Veranstaltungsart','Stadtteil \/ Veranstaltungsort','Teilnahmegebühr'])assert.ok(events.includes(label),label);
 assert.match(events,/Weitere Suchfilter anzeigen\{activeAdvancedFilters>0&&' \('\+activeAdvancedFilters\+' aktiv\)'\}/);
 assert.match(events,/activeFilterLabels\.join\(' · '\)/);
 assert.match(tourism,/<details className="tourism-topic-filters"><summary>Themen auswählen \(\{selected.size\} von \{tourismCategories.length\}\)<\/summary>/);
 assert.match(tourism,/<details className="tourism-map-category-filter"><summary>Kartenkategorien \(\{mapKinds.size\} von \{tourismMapCategories.length\}\)<\/summary><fieldset className="tourism-map-filters">/);
 assert.match(directory,/<details className="directory-advanced-filters">/);
 for(const label of ['Stadtteil<select','Örtliche Bezeichnung<QuarterFilter','Kategorie<CategorySelect','Sortierung<select'])assert.ok(directory.includes(label),label);
 assert.match(directory,/activeAdvancedFilters\?` \(\$\{activeAdvancedFilters\} ausgewählt\)`/);
 assert.match(contributions,/<details className="reader-advanced-filters">/);
 assert.match(contributions,/<label>Beiträge durchsuchen<input type="search"/);
 assert.match(contributions,/Filter zurücksetzen/);
 assert.match(contributions,/activeAdvancedFilters\?` \(\$\{activeAdvancedFilters\} ausgewählt\)`/);
 assert.match(history,/<details className="gazetteer-advanced-filters">/);
 for(const label of ['Heutiger Stadtteil<select','Art des Ortes oder Gebiets<select'])assert.ok(history.includes(label),label);
 assert.match(history,/activeFilters\?` \(\$\{activeFilters\} ausgewählt\)`/);
});
