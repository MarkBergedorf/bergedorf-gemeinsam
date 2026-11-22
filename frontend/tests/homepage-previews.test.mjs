import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {homepageDiscoveryPreviews} from '../lib/homepage-previews.mjs';
import {gazetteerById} from '../lib/gazetteer.mjs';
import {tourismById} from '../lib/tourism-data.mjs';

test('startseiten-Vorschauen stammen unverändert aus vorhandenen historischen und touristischen Einträgen',async()=>{
 const history=gazetteerById('die-reit'),tourism=tourismById('schloss');
 assert.equal(homepageDiscoveryPreviews.length,2);
 assert.deepEqual(homepageDiscoveryPreviews.map(x=>x.id),['history-die-reit','tourism-schloss']);
 assert.equal(homepageDiscoveryPreviews[0].title,history.name);
 assert.equal(homepageDiscoveryPreviews[0].body,history.overview[0].text);
 assert.equal(homepageDiscoveryPreviews[0].href,'#geschichte/orte/die-reit');
 assert.equal(homepageDiscoveryPreviews[1].title,tourism.name);
 assert.equal(homepageDiscoveryPreviews[1].body,tourism.description);
 assert.equal(homepageDiscoveryPreviews[1].checkedOn,tourism.checkedOn);
 assert.equal(homepageDiscoveryPreviews[1].href,'#tourismus/schloss');
 const component=await readFile(new URL('../app/homepage-current.tsx',import.meta.url),'utf8');
 assert.match(component,/homepageDiscoveryPreviews\.map/);
 assert.match(component,/EncounterPolicyCard/);
 assert.match(component,/Weitere Themen entdecken/);
});
