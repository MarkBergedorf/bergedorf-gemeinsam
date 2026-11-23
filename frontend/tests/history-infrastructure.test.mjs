import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {orientationStyle} from '../lib/map-orientation.mjs';
import {clusterPoints} from '../lib/map-clusters.mjs';import {countPublicInfrastructure,publicInfrastructureCategoryLabel,publicInfrastructureFeatures} from '../lib/history-infrastructure-visibility.mjs';import historicalPlaces from '../lib/historical-places-4.json' with {type:'json'};
const read=f=>JSON.parse(readFileSync(new URL(f,import.meta.url),'utf8'));
const base=read('../public/assets/history-liberty.json'),data=read('../public/assets/history-infrastructure.geojson');
const districts=read('../public/assets/bergedorf-stadtteile.geojson');
test('Geschichtskarte erhält die erweiterten OSM-Ortsklassen; gemeinsame Karten behalten die bisherige Positivliste',()=>{
 const normal=orientationStyle(base,null),extended=orientationStyle(base,null,{extendedPlaces:true});
 const normalize=s=>s.layers.filter(l=>l['source-layer']==='poi').map(l=>JSON.stringify(l.filter));
 assert.notDeepEqual(normalize(extended),normalize(normal));
 for(const name of ['playground','pitch','school','kindergarten','library','community_centre','cafe','pub','monument','memorial'])assert(normalize(extended).join(' ').includes(name),name);
 assert.deepEqual(normalize(normal),normalize(orientationStyle(base,null)));
});
test('Hamburger Grünplan-Abzug deckt 364 räumlich bestätigte FHH/BWVI-Objekte ab und trennt Kategorien',()=>{
 assert.equal(data.metadata.officialHamburgMatched,369);assert.equal(data.features.length,366);assert.equal(data.metadata.officialIncluded,364);assert.deepEqual(data.metadata.excludedOutsideBoundary.map(x=>x[0]),['006536']);
 const counts=Object.fromEntries(['playgrounds','sports','parks','green','paths'].map(k=>[k,data.features.filter(f=>f.properties.category===k).length]));
 assert.deepEqual(counts,{playgrounds:73,sports:18,parks:71,green:180,paths:24});
 assert(data.features.filter(f=>f.id.startsWith('hamburg-gruenplan-')).every(f=>['FHH','BWVI - HNG'].includes(f.properties.ownership)));
 assert.equal(data.metadata.districtPropertyGeometryDifferences.length,7);
});

test('Die öffentliche Grünflächenanzeige schließt technische Kategorien aus und erhält belegte Erholungsorte',()=>{
 const visible=publicInfrastructureFeatures(data.features),ids=new Set(visible.map(f=>f.id));
 assert.equal(data.features.length,366);assert.equal(visible.length,190);assert.equal(data.features.length-visible.length,176);
 assert.deepEqual(countPublicInfrastructure(visible),{playgrounds:73,sports:18,parks:71,green:4,paths:24});
 const excludedGreen=data.features.filter(f=>f.properties.category==='green'&&!ids.has(f.id));
 const excludedByLabel=Object.fromEntries(['Grün an Kleingärten','Allgemeines Grün','Schutzgrün','Anderweitige Flächen'].map(label=>[label,excludedGreen.filter(f=>f.properties.categoryLabel===label).length]));
 assert.deepEqual(excludedByLabel,{'Grün an Kleingärten':52,'Allgemeines Grün':102,'Schutzgrün':7,'Anderweitige Flächen':15});
 for(const id of ['002963','002965','002869','006305','006480','005481'])assert(!ids.has('hamburg-gruenplan-'+id),id);
 for(const id of ['hamburg-gruenplan-002893','hamburg-gruenplan-002895','hamburg-gruenplan-002936','hamburg-gruenplan-003008'])assert(ids.has(id),id);
 assert.equal(publicInfrastructureCategoryLabel(visible.find(f=>f.id==='hamburg-gruenplan-002893')),'Bade- und Erholungsort');
 assert.equal(publicInfrastructureCategoryLabel(visible.find(f=>f.id==='hamburg-gruenplan-003008')),'Öffentlicher Platz');
 assert.equal(data.features.filter(f=>f.properties.category!=='green'&&!ids.has(f.id)).length,0);
});
test('Geschichtskartenfilter zeigt dynamische Zähler statt der alten Sammelzahl 180',()=>{
 const s=readFileSync(new URL('../app/history-map.tsx',import.meta.url),'utf8');
 assert(s.includes('countPublicInfrastructure(visibleInfrastructureFeatures)'));
 assert(s.includes('Weitere Grün- und Erholungsorte'));
 assert(!s.includes('Weitere Grünflächen (180)'));
 const legend=readFileSync(new URL('../app/history-map-legend.tsx',import.meta.url),'utf8');
 for(const text of ['176 Einträge','Hohendeicher See','Grachtenplatz','Der vollständige Grünplan-Abzug bleibt'])assert(legend.includes(text),text);
});

test('Jeder Hamburger Grünplan-Punkt liegt im Geodatensatz des zugeordneten Stadtteils',()=>{
 const insideRing=(pt,ring)=>{let c=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=ring[i],b=ring[j];if(((a[1]>pt[1])!==(b[1]>pt[1]))&&pt[0]<(b[0]-a[0])*(pt[1]-a[1])/(b[1]-a[1])+a[0])c=!c;}return c};
 const inFeature=(pt,g)=>{const polys=g.type==='Polygon'?[g.coordinates]:g.coordinates;return polys.some(poly=>insideRing(pt,poly[0])&&!poly.slice(1).some(r=>insideRing(pt,r)))};
 for(const f of data.features.filter(x=>x.id.startsWith('hamburg-gruenplan-'))){const matches=districts.features.filter(d=>inFeature(f.geometry.coordinates,d.geometry));assert.equal(matches.length,1,f.id);assert.equal(matches[0].properties.stadtteil_name,f.properties.district,f.id);}
});
test('Am Pool/Glaeßweg-Fußballplatz und Spielplatz sind zwei separate verlinkte OSM-Objekte',()=>{
 const field=data.features.find(f=>f.id==='osm-way-274149714'),play=data.features.find(f=>f.id==='osm-way-393033532');
 assert.equal(field.properties.category,'sports');assert.equal(field.properties.title,'Fußballplatz');
 assert.equal(play.properties.category,'playgrounds');assert.equal(play.properties.title,'Spielplatz Am Pool 15a');
 assert.match(field.properties.source,/openstreetmap.org\/way\/274149714/);assert.match(play.properties.source,/openstreetmap.org\/way\/393033532/);
 for(const f of [field,play]){const [lon,lat]=f.geometry.coordinates;assert(lat>53.4858&&lat<53.4863);assert(lon>10.2109&&lon<10.2117)}
});
test('Kategorie-Overlays gruppieren Punkte, ohne Einträge mit identischer Position zu verlieren',()=>{
 const rows=[{id:'a',lat:53.48,lon:10.21},{id:'b',lat:53.48,lon:10.21},{id:'c',lat:53.49,lon:10.22}];
 const clusters=clusterPoints(rows,p=>({x:p.lon*10000,y:p.lat*10000}),36);assert.equal(clusters.reduce((n,c)=>n+c.entries.length,0),3);
});
test('Historische Sammlung wird direkt verlinkt; ungeoreferenzierte Einträge erhalten keine erfundenen Kartenpunkte',()=>{
 assert.equal(historicalPlaces.length,104);assert.equal(historicalPlaces.filter(p=>p.coordinates).length,0);
 const s=readFileSync(new URL('../app/history-map.tsx',import.meta.url),'utf8');assert(s.includes('#einsamkeit/stadtteile/t10-6'));assert(s.includes('ohne belegten Standort keine historische Kartenmarkierung'));
});
test('Infrastrukturdatei wird erst nach Geschichtskartenfreigabe geladen und Kategorien sind nur dort schaltbar',()=>{
 const s=readFileSync(new URL('../app/history-map.tsx',import.meta.url),'utf8');
 assert(s.includes("if(!consent||!allowed||!activated||!root.current)return"));assert(s.includes("publicAssetUrl('assets/history-infrastructure.geojson',import.meta.env.BASE_URL,location.href)"));
 assert(s.includes('historyTiles(L,')&&s.includes('{extendedPlaces:true,baseUrl:import.meta.env.BASE_URL}'));
 assert(s.includes('history-infrastructure-controls'));assert(s.includes('setCategories(current=>({...current,[key]:e.target.checked}))'));
 assert(s.includes('history-infrastructure-cluster'));assert(s.includes('Grünplan-Stadtteil'));
 const org=readFileSync(new URL('../app/organisation-map.tsx',import.meta.url),'utf8');assert(org.includes('historyTiles(L,')&&!org.includes('extendedPlaces:true'));
});
