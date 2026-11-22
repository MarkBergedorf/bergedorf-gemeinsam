'use client';
import {useEffect,useMemo,useRef,useState} from 'react';
import {MapPin,Search,ExternalLink,ArrowUpRight} from 'lucide-react';
import {tourismCategories,tourismItems,tourismHighlights,tourismMapCategories,tourismMapKinds,filterTourismItems} from '../lib/tourism-data.mjs';
import {useMapPrivacy} from './map-privacy-dialog';
import {districtBounds} from '../lib/directory-map.mjs';
import {districtOverview} from '../lib/map-constraints.mjs';

const categoryLabel=(id:string)=>tourismCategories.find(x=>x.id===id)?.label||id;
const relatedIds=(item:any)=>[item.category,...(item.categoryLinks||[])];
const markerColor=(category:string)=>({sehenswuerdigkeiten:'#754c9b',natur:'#317554',rundgaenge:'#b17a24',kultur:'#315f96',unterkunft:'#9a5364',gastronomie:'#b05d27',rad:'#2d7a87',camping:'#6a7533',wasser:'#24759b',familie:'#b15378',mobilitaet:'#545d6d',praktisch:'#6b7040'}[category]||'#315f52');

function TourismMap({items,selected,focusId,onFocus}:{items:any[],selected:Set<string>,focusId:string,onFocus:(id:string)=>void}){
 const root=useRef<HTMLDivElement>(null),map=useRef<any>(null),layer=useRef<any>(null),draw=useRef<()=>void>(()=>{}),itemsRef=useRef<any[]>(items),selectedRef=useRef<Set<string>>(selected),mapKindsRef=useRef<Set<string>>(new Set()),gopRouteLayers=useRef<Map<string,any>>(new Map()),visibleGopRoutesRef=useRef<Set<string>>(new Set());
 itemsRef.current=items;selectedRef.current=selected;
 const [consent,setConsent]=useState(false),[error,setError]=useState(''),[mapKinds,setMapKinds]=useState<Set<string>>(()=>new Set(tourismMapCategories.map(x=>x.id))),[visibleGopRoutes,setVisibleGopRoutes]=useState<Set<string>>(()=>new Set(tourismItems.filter(x=>x.natureTrail).map(x=>x.id)));
 visibleGopRoutesRef.current=visibleGopRoutes;
 const privacy=useMapPrivacy('openfreemap',()=>setConsent(true));
 const points=items.filter(item=>Number.isFinite(item.lat)&&Number.isFinite(item.lon)&&item.coordinateSource&&relatedIds(item).some((id:string)=>selected.has(id))&&tourismMapKinds(item).some((id:string)=>mapKinds.has(id)));
 useEffect(()=>{let live=true;let instance:any,observer:any,trailGeoJSON:any=null,gopGeoJSON:any=null; if(!consent||!root.current)return;
  setError('');
  Promise.all([import('leaflet'),import('../lib/history-tiles.mjs')]).then(async ([L,tileModule])=>{
   if(!live||!root.current)return;
   instance=L.map(root.current,{scrollWheelZoom:true,zoomSnap:.25,zoomDelta:1,maxZoom:19});map.current=instance;
   const view=districtOverview(districtBounds,root.current.clientWidth,root.current.clientHeight,28);
   instance.setView([view.lat,view.lon],view.zoom,{animate:false});
   tileModule.historyTiles(L,(message:string)=>live&&setError(message),{baseUrl:import.meta.env.BASE_URL}).addTo(instance);
   const boundaries=await fetch(`${import.meta.env.BASE_URL}assets/bergedorf-stadtteile.geojson`).then(r=>r.ok?r.json():null).catch(()=>null);
   if(!live)return;
   if(boundaries)L.geoJSON(boundaries,{style:{color:'#285a48',weight:1.15,fillColor:'#6a8b6a',fillOpacity:.025,opacity:.82},interactive:false}).addTo(instance);
   else setError('Die lokalen Stadtteilgrenzen konnten nicht geladen werden. Kartenpunkte und Liste bleiben nutzbar.');
   trailGeoJSON=await fetch(`${import.meta.env.BASE_URL}assets/bodenlehrpfad-boberg.geojson`).then(r=>r.ok?r.json():null).catch(()=>null);
   if(!live)return;
   if(!trailGeoJSON)setError('Die lokale Geometrie des Bodenlehrpfads konnte nicht geladen werden. Die Eintragsliste bleibt nutzbar.');
   gopGeoJSON=await fetch(`${import.meta.env.BASE_URL}assets/goep-naturwege-boberg.geojson`).then(r=>r.ok?r.json():null).catch(()=>null);
   if(!live)return;
   if(!gopGeoJSON)setError('Die lokalen GÖP-Weglinien konnten nicht geladen werden. Die Einträge und Originalfaltblätter bleiben verfügbar.');
   const markers=L.layerGroup().addTo(instance);layer.current=markers;
   const repaint=()=>{
    if(!live)return;
    markers.clearLayers();
    const groups=new Map<string,any[]>();
    for(const item of itemsRef.current){
     if(!Number.isFinite(item.lat)||!Number.isFinite(item.lon)||!item.coordinateSource||!relatedIds(item).some((id:string)=>selectedRef.current.has(id))||!tourismMapKinds(item).some((id:string)=>mapKindsRef.current.has(id)))continue;
     const key=`${item.lat.toFixed(5)}:${item.lon.toFixed(5)}`;if(!groups.has(key))groups.set(key,[]);groups.get(key)!.push(item);
    }
    for(const group of groups.values()){
     const first=group[0],node=document.createElement('div');
     for(const item of group){
      const article=document.createElement('article'),h=document.createElement('h3'),p=document.createElement('p'),a=document.createElement('a');
      h.textContent=item.name;p.textContent=`${categoryLabel(item.category)} · ${item.place}${item.address?' · '+item.address:''}`;
      a.href=item.coordinateSource;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Koordinatenquelle';
      const detail=document.createElement('a');detail.href='#tourismus-results';detail.textContent='Zum Listeneintrag';detail.addEventListener('click',event=>{event.preventDefault();onFocus(item.id);document.querySelector(`[data-tourism-id=\"${item.id}\"]`)?.scrollIntoView({behavior:'smooth',block:'center'})});
      article.append(h,p,a,detail);
      if(item.highlight){const badge=document.createElement('p');badge.textContent='Eines der 10 Highlights von Bergedorf.de';article.appendChild(badge)}
      node.appendChild(article);
     }
     const isHighlight=group.some(item=>item.highlight),marker=L.circleMarker([first.lat,first.lon],{radius:isHighlight?10:8,color:isHighlight?'#f5c84b':'#fff',weight:isHighlight?4:2,fillColor:markerColor(first.category),fillOpacity:1}).addTo(markers);
     marker.bindTooltip(group.length>1?`${group.length} Orte`:(first.shortName||first.name),{direction:'top'}).bindPopup(node,{maxWidth:330});
     
    }
    const showBobergTrail=itemsRef.current.some((item:any)=>item.id==='bodenlehrpfad-boberg'&&relatedIds(item).some((id:string)=>selectedRef.current.has(id)))&&mapKindsRef.current.has('trails');
    if(showBobergTrail&&trailGeoJSON){
     const routeColors:Record<string,string>={'Moorweg':'#9a541f','Terrassenweg':'#70469a','Dünenweg':'#16746a'};
     L.geoJSON(trailGeoJSON,{filter:(feature:any)=>feature?.properties?.lehrpfad==='Boberg',style:(feature:any)=>({color:routeColors[feature?.properties?.typ]||'#245b50',weight:5,opacity:.9}),pointToLayer:(feature:any,latlng:any)=>L.circleMarker(latlng,{radius:7,color:'#fff',weight:2,fillColor:'#1c4260',fillOpacity:1}),onEachFeature:(feature:any,routeLayer:any)=>{
      const p=feature.properties||{};
      if(p.objektart==='route')routeLayer.bindTooltip(`Bodenlehrpfad Boberg · ${p.typ}`,{sticky:true}).bindPopup(`<strong>Bodenlehrpfad Boberg – ${p.typ}</strong><br>Amtliche Weggeometrie der Freien und Hansestadt Hamburg, BUKEA.`);
      else if(p.objektart==='tafel'){
       const box=document.createElement('div'),heading=document.createElement('strong'),text=document.createElement('p'),link=document.createElement('a');
       heading.textContent=`Station ${p.punkt_bez}: ${p.titel}`;text.textContent=p.kurztext||'';link.href=String(p.link_artikel||'').replace(/^http:/,'https:');link.target='_blank';link.rel='noopener noreferrer';link.textContent='Erläuterung bei Hamburg.de öffnen';box.append(heading,text,link);routeLayer.bindPopup(box);
      }
     }}).addTo(markers);
    }
    gopRouteLayers.current=new Map();
    const activeGopIds=new Set(itemsRef.current.filter((item:any)=>item.natureTrail&&relatedIds(item).some((id:string)=>selectedRef.current.has(id))).map((item:any)=>item.id));
    if(mapKindsRef.current.has('trails')&&gopGeoJSON){
     L.geoJSON(gopGeoJSON,{filter:(feature:any)=>activeGopIds.has(feature?.properties?.id)&&visibleGopRoutesRef.current.has(feature?.properties?.id),style:(feature:any)=>({color:feature?.properties?.color||'#315f52',weight:5,opacity:.96,lineCap:'round',lineJoin:'round'}),onEachFeature:(feature:any,routeLayer:any)=>{
      const p=feature.properties||{},item=itemsRef.current.find((entry:any)=>entry.id===p.id);
      if(item)gopRouteLayers.current.set(p.id,routeLayer);
      routeLayer.bindTooltip(`${p.symbol} · ${p.name}`,{permanent:true,direction:'center',className:'tourism-route-label',opacity:1});
      const box=document.createElement('div'),heading=document.createElement('strong'),facts=document.createElement('p'),status=document.createElement('p'),osm=document.createElement('a'),flyer=document.createElement('a'),list=document.createElement('a');
      heading.textContent=`${p.symbol} · ${p.name}`;facts.textContent=`GÖP-Faltblatt: ${Number(p.publishedLengthKm).toLocaleString('de-DE')} km · ${p.duration}. Digitale Linienlänge der OpenStreetMap-Relation: ${(Number(p.lineLengthMeters)/1000).toLocaleString('de-DE',{minimumFractionDigits:2,maximumFractionDigits:2})} km.`;
      status.textContent=p.name==='Moorweg'?'Im nördlichen Abschnitt zeigt das GÖP-Faltblatt eine Umleitung. Die aktuelle Zugangssperrung und die örtliche Beschilderung der BUKEA beachten.':'Linienverlauf anhand der GÖP-Originalkarte visuell abgeglichen; OSM-Wanderwegrelation, keine amtliche Vermessung.';
      osm.href=p.osmRelationUrl;osm.target='_blank';osm.rel='noopener noreferrer';osm.textContent='OpenStreetMap-Wanderwegrelation';
      flyer.href=item?.source?.url||'#';flyer.target='_blank';flyer.rel='noopener noreferrer';flyer.textContent='GÖP-Originalfaltblatt öffnen';
      list.href='#tourismus-results';list.textContent='Zum Listeneintrag';list.addEventListener('click',event=>{event.preventDefault();if(item){onFocus(item.id);document.querySelector(`[data-tourism-id="${item.id}"]`)?.scrollIntoView({behavior:'smooth',block:'center'})}});
      box.append(heading,facts,status,osm,flyer,list);routeLayer.bindPopup(box);
     }}).addTo(markers);
    }
   };
   draw.current=repaint;repaint();
   observer=new ResizeObserver(()=>instance.invalidateSize({pan:false}));observer.observe(root.current);
  }).catch(()=>live&&setError('Die touristische Karte konnte nicht gestartet werden. Die verlinkte Ortsliste bleibt verfügbar.'));
  return()=>{live=false;observer?.disconnect();if(map.current){map.current.remove();map.current=null;layer.current=null}draw.current=()=>{};focus.current=()=>{}};
 },[consent]);
 useEffect(()=>{draw.current()},[selected,items,mapKinds,visibleGopRoutes]);
 useEffect(()=>{if(!focusId)return;const item=items.find(x=>x.id===focusId),foundMap=map.current;if(item?.natureTrail&&foundMap){const route=gopRouteLayers.current.get(focusId);if(route){setVisibleGopRoutes(current=>current.has(focusId)?current:new Set([...current,focusId]));foundMap.fitBounds(route.getBounds(),{padding:[28,28]});route.openPopup()}}else if(item?.coordinateSource&&Number.isFinite(item.lat)&&Number.isFinite(item.lon)&&foundMap){foundMap.setView([item.lat,item.lon],Math.max(16,foundMap.getZoom()));layer.current?.eachLayer((marker:any)=>{if(typeof marker.getLatLng!=='function')return;const p=marker.getLatLng();if(Math.abs(p.lat-item.lat)<.00001&&Math.abs(p.lng-item.lon)<.00001)marker.openPopup()})}},[focusId,items,visibleGopRoutes]);
 mapKindsRef.current=mapKinds;
 const markerCount=new Set(points.map(item=>`${item.lat.toFixed(5)}:${item.lon.toFixed(5)}`)).size;
 return <section className="tourism-map panel" aria-labelledby="tourism-map-title">
  <div className="map-heading"><div><div className="eyebrow">GEOGRAFISCHE ORIENTIERUNG</div><h2 id="tourism-map-title">Touristische Orte im Bezirk</h2></div></div>
  <p className="tourism-map-legend"><span><i className="tourism-map-swatch" aria-hidden="true"/> Farbiger Punkt: primäre Themenkategorie</span><span><i className="tourism-map-swatch highlight" aria-hidden="true"/> Goldener Ring: eines der 10 Highlights</span></p>
  <p>Die Karte zeigt nur redaktionell ausgewählte Orte mit nachvollziehbarer Koordinatenquelle. Einträge ohne geprüfte Koordinaten bleiben in der Suche auffindbar, erhalten aber keinen geschätzten Kartenpunkt. Markierungen mit gleicher Position werden gemeinsam geöffnet.</p>
  <div className="tourism-caution" aria-label="Vier Natur-Infowege der GÖP">
   <strong>Vier GÖP-Natur-Infowege in Boberg</strong>
   <ul>{tourismItems.filter((item:any)=>item.natureTrail).map((item:any)=><li key={item.id}><label className="tourism-route-option"><input type="checkbox" checked={visibleGopRoutes.has(item.id)} onChange={()=>setVisibleGopRoutes(current=>{const next=new Set(current);next.has(item.id)?next.delete(item.id):next.add(item.id);return next})}/><span className="tourism-route-key" aria-hidden="true" style={{backgroundColor:item.routeColor}}/><span>{item.name.replace(' – Natur-Infoweg Boberger Niederung','')} · {item.routeLengthKm.toLocaleString('de-DE')} km · {item.routeDuration} · {item.routeSymbol}</span></label> — <a href={item.source.url} target="_blank" rel="noopener noreferrer">Originalfaltblatt</a></li>)}</ul>
   <p>Die farbigen OpenStreetMap-Wanderwegrelationen wurden mit den GÖP-Karten auf Seite 2 abgeglichen und werden als getrennte Linien dargestellt. Faltblatt- und digitale Linienlängen werden separat ausgewiesen. Die Moorweg-Umleitung ist am Flyer und anhand der aktuellen BUKEA-Hinweise zu Zugang und Sperrung zu beachten. Drei amtliche BUKEA-Bodenlehrpfad-Linien und zehn Tafelpunkte bleiben als eigener, unveränderter Datensatz erhalten.</p>
  </div>
  <fieldset className="tourism-map-filters"><legend>Kartenkategorien</legend><div className="tourism-filter-chips">{tourismMapCategories.map(category=><label className="tourism-chip" key={category.id}><input type="checkbox" checked={mapKinds.has(category.id)} onChange={()=>setMapKinds(current=>{const next=new Set(current);next.has(category.id)?next.delete(category.id):next.add(category.id);mapKindsRef.current=next;return next})}/>{category.label}</label>)}</div></fieldset>
  {!consent?<><p>Erst nach Ihrer Zustimmung werden Kartenkacheln von OpenFreeMap geladen. Dabei werden IP-Adresse, technische Verbindungsdaten, Seitenherkunft und Kartenausschnitt an den Kartendienst übertragen. Die Liste kann ohne Karte genutzt werden.</p><button className="outline small" type="button" onClick={privacy.ask}>Touristenkarte laden</button></>:<><div className="map-toolbar"><button className="outline small" type="button" onClick={()=>{const v=districtOverview(districtBounds,root.current?.clientWidth||800,root.current?.clientHeight||420);map.current?.setView([v.lat,v.lon],v.zoom)}}>Bezirk Bergedorf anzeigen</button><button className="text-button" type="button" onClick={()=>{setConsent(false);setError('')}}>Karte entladen</button></div><div ref={root} className="private-map tourism-map-canvas" role="application" tabIndex={0} aria-label="Touristische Karte für Bergedorf mit Stadtteilgrenzen, ausgewählten Orten, Bodenlehrpfad und vier GÖP-Natur-Infowegen"/><p>{markerCount} belegte Punktstandorte in der aktuellen Suche und Kartenauswahl; insgesamt {tourismItems.length} redaktionelle Datensätze. Der Bodenlehrpfad Boberg wird aus drei amtlichen Wegsegmenten und zehn beschrifteten Tafelpunkten dargestellt; vier getrennt beschriftete OSM-Wanderwegrelationen zeigen die GÖP-Natur-Infowege. Für die Große Bergedorfer Runde liegt weiterhin keine geprüfte Liniengeometrie vor. Stadtteilgrenzen sind eine Orientierung und keine parzellengenaue Lageaussage.</p>{error&&<p role="status">{error}</p>}</>}
  {privacy.dialog}<p className="muted">Kartengrundlage und Datenschutz: OpenFreeMap / OpenMapTiles / OpenStreetMap. Geodaten werden nur nach Zustimmung geladen. Koordinatenherkunft steht am jeweiligen Kartenpunkt.</p>
 </section>;
}

export function TourismPage(){
 const [query,setQuery]=useState(''),[selected,setSelected]=useState<Set<string>>(()=>new Set(tourismCategories.map(c=>c.id))),[freeOnly,setFreeOnly]=useState(false),[bikeFriendlyOnly,setBikeFriendlyOnly]=useState(false),[focusId,setFocusId]=useState(''),[scrollTarget,setScrollTarget]=useState('');
 const visible=useMemo(()=>filterTourismItems({query,categoryIds:[...selected],freeOnly,bikeFriendlyOnly}),[query,selected,freeOnly,bikeFriendlyOnly]);
 function toggle(id:string){setSelected(current=>{const next=new Set(current);next.has(id)?next.delete(id):next.add(id);return next})}
 // Internal section navigation must not change the application's hash-based page route.
 function jumpTo(e:React.MouseEvent<HTMLAnchorElement>,id:string){e.preventDefault();setQuery('');setFreeOnly(false);setBikeFriendlyOnly(false);setSelected(new Set(tourismCategories.map(c=>c.id)));setScrollTarget(id)}
 useEffect(()=>{if(!scrollTarget)return;const element=scrollTarget==='gedenkstaette'?document.querySelector('[data-tourism-id="gedenkstaette"]'):document.querySelector(`[data-tourism-id="${scrollTarget}"]`)||document.getElementById('tourismus-'+scrollTarget);if(element){element.scrollIntoView({behavior:'smooth',block:'start'});setScrollTarget('')}},[scrollTarget,query,selected,freeOnly]);
 return <div className="tourism-page">
  <section className="section page-content tourism-intro">
   <div className="eyebrow">UNABHÄNGIGE ORIENTIERUNG FÜR GÄSTE</div>
   <h1>Bergedorf entdecken – Gäste &amp; Tourismus</h1>
   <p>Sehenswürdigkeiten, Natur, Kultur, Übernachtung, Essen und Wege durch alle Teile des Bezirks – vom Bergedorfer Zentrum und Lohbrügge bis Neuallermöhe und in die Vier- und Marschlande.</p>
   <p className="tourism-note">„Bergedorf gemeinsam“ ist eine unabhängige, nicht amtliche Bürgerplattform. Diese statische Testfassung vermittelt keine Buchungen, Reservierungen, Tickets oder Zahlungen. Das Prüfdatum steht jeweils am Eintrag; Betreiberangaben können sich ändern, maßgeblich sind die verlinkten Originalquellen.</p>
   <nav className="tourism-category-nav" aria-label="Themen im Bereich Gäste und Tourismus">{tourismCategories.map(c=><a key={c.id} href={`#tourismus-${c.id}`} onClick={e=>jumpTo(e,c.id)}>{c.short}</a>)}</nav>
  </section>
  <section className="section tourism-content">
   <div className="tourism-intro-grid">
    <article className="panel"><h2>Für den ersten Besuch</h2><p>Für einen kompakten Rundgang nennt Bergedorf-Tourismus eine etwa 3 km lange Strecke mit 12 Stationen ab Serrahn: Altstadt, Kornwassermühle, St. Petri und Pauli, Schloss, Schlossgarten und Windmühle. Innenbesuche und Öffnungszeiten separat planen.</p><a href="#tourismus-rundgaenge" onClick={e=>jumpTo(e,'rundgaenge')}>Rundgänge und Routen ansehen →</a></article>
    <article className="panel"><h2>Gedenk- und Bildungsort</h2><p>Die KZ-Gedenkstätte Neuengamme ist ein eigenständiger historischer Gedenk- und Bildungsort. Sie wird hier ausdrücklich nicht als Freizeitattraktion eingeordnet.</p><a href="#tourismus-sehenswuerdigkeiten" onClick={e=>jumpTo(e,'gedenkstaette')}>Informationen und offizielle Besuchsseite →</a></article>
    <article className="panel"><h2>Veranstaltungen</h2><p>Es gibt keinen zweiten Kalender: Für aktuelle Termine führt dieser Bereich zum bestehenden Veranstaltungskalender von Bergedorf gemeinsam.</p><a href="#veranstaltungen">Zum Veranstaltungskalender →</a></article>
   </div>
   <section className="tourism-highlights panel" aria-labelledby="tourism-highlights-title"><div className="eyebrow">AUSWAHL VON BERGEDORF.DE</div><h2 id="tourism-highlights-title">10 Highlights in Bergedorf</h2><p>Die folgende Auswahl übernimmt die zehn von Bergedorf.de veröffentlichten Highlights. Sie ist keine Rangfolge und keine eigenständige Bewertung von „Bergedorf gemeinsam“.</p><ul>{tourismHighlights.map(highlight=><li key={highlight.id}><a href="#tourismus-results" onClick={e=>jumpTo(e,highlight.itemIds[0])}>{highlight.title}</a>{highlight.kind==='area'?<span> · Landschafts-/Gebietsbezeichnung</span>:null}</li>)}</ul><a href="https://www.bergedorf.de/10-highlights" target="_blank" rel="noopener noreferrer">Auswahl auf Bergedorf.de öffnen →</a></section>
   <TourismControls query={query} setQuery={setQuery} selected={selected} toggle={toggle} freeOnly={freeOnly} setFreeOnly={setFreeOnly} bikeFriendlyOnly={bikeFriendlyOnly} setBikeFriendlyOnly={setBikeFriendlyOnly} resultCount={visible.length}/>
   <TourismMap items={visible} selected={selected} focusId={focusId} onFocus={setFocusId}/>
   <div className="tourism-crosslinks"><a href="#geschichte">Geschichte und Erinnerungen</a><a href="#geschichte/orte">Orte und ihre Geschichte</a><a href="#verzeichnis">Bergedorfer Verzeichnis</a><a href="#organisation">Organisationen im Bezirk</a><a href="#veranstaltungen">Veranstaltungskalender</a></div>
   <section id="tourismus-results" className="tourism-results"><div className="tourism-results-heading"><h2>Orte und Angebote</h2><p aria-live="polite">{visible.length} passende Einträge</p></div>{tourismCategories.filter(c=>selected.has(c.id)).map(category=>{const sectionItems=visible.filter(item=>relatedIds(item).includes(category.id));if(!sectionItems.length)return null;return <section className="tourism-category-section" id={`tourismus-${category.id}`} key={category.id}><h2>{category.label}</h2>{category.id==='natur'&&<p className="tourism-caution">In Schutzgebieten nur ausgewiesene Wege nutzen und lokale Naturschutzregeln beachten. Badefreigaben, saisonale Öffnungen und aktuelle Warnungen können sich ändern.</p>}{category.id==='wasser'&&<p className="tourism-caution">Liegeplätze, Schleusen, Durchfahrtshöhen und Tiefgänge sind hier nicht als bestätigt eingetragen. Verbindliche nautische Angaben vor einer Fahrt beim zuständigen Betreiber oder der Schifffahrtsverwaltung einholen.</p>}<div className="tourism-card-grid">{sectionItems.map(item=><TourismCard key={item.id+'-'+category.id} item={item} categoryId={category.id} onFocus={()=>{setFocusId(item.id);document.getElementById('tourism-map-title')?.scrollIntoView({behavior:'smooth',block:'center'})}}/>)}</div></section>})}</section>
   {visible.length===0&&<div className="tourism-empty panel" role="status"><h2>Keine passenden Einträge</h2><p>Ändern Sie die Suche oder wählen Sie weitere Themen aus.</p></div>}
   <p className="tourism-source-note">Quellenhinweise und Aktualitätsdatum stehen an jedem Eintrag. Für die geografische Orientierung werden nur kartierte Punkte mit Koordinatenherkunft angezeigt. OpenStreetMap-Daten: © OpenStreetMap-Mitwirkende, ODbL 1.0; amtliche Schutzgebiets- und Badehinweise: Freie und Hansestadt Hamburg.</p>
  </section>
 </div>
}

function TourismControls({query,setQuery,selected,toggle,freeOnly,setFreeOnly,bikeFriendlyOnly,setBikeFriendlyOnly,resultCount}:{query:string,setQuery:(s:string)=>void,selected:Set<string>,toggle:(id:string)=>void,freeOnly:boolean,setFreeOnly:(v:boolean)=>void,bikeFriendlyOnly:boolean,setBikeFriendlyOnly:(v:boolean)=>void,resultCount:number}){
 return <section className="tourism-filters panel" aria-label="Tourismusangebote filtern"><div className="tourism-filter-search"><label htmlFor="tourism-search">Suche nach Ort, Angebot oder Stadtteil</label><div className="tourism-searchbox"><Search size={19}/><input id="tourism-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Zum Beispiel Vierlande, Schloss, Rad…"/></div></div><div className="tourism-filter-row"><label className="check"><input type="checkbox" checked={freeOnly} onChange={e=>setFreeOnly(e.target.checked)}/>Nur als kostenlos gekennzeichnete Angebote</label><label className="check"><input type="checkbox" checked={bikeFriendlyOnly} onChange={e=>setBikeFriendlyOnly(e.target.checked)}/>Fahrradfreundliche Unterkünfte (belegte Anbietermerkmale)</label><button className="text-button" type="button" onClick={()=>setQuery('')}>Suche leeren</button><button className="text-button" type="button" onClick={()=>{setQuery('');setFreeOnly(false);setBikeFriendlyOnly(false);tourismCategories.forEach(c=>{if(!selected.has(c.id))toggle(c.id)})}}>Alle Filter zurücksetzen</button><span>{resultCount} Treffer</span></div><fieldset><legend>Themen auswählen</legend><div className="tourism-filter-chips">{tourismCategories.map(c=><label className="tourism-chip" key={c.id}><input type="checkbox" checked={selected.has(c.id)} onChange={()=>toggle(c.id)}/>{c.short}</label>)}</div></fieldset></section>
}

function TourismCard({item,categoryId,onFocus}:{item:any,categoryId:string,onFocus:()=>void}){
 const categoryLinks=(item.categoryLinks||[]).filter((id:string)=>id!==item.category);
 return <article data-tourism-id={item.id} className={'tourism-card'+(item.tone==='gedenkort'?' memorial-card':'')}>
  <div className="eyebrow">{item.tone==='gedenkort'?'GEDENK- UND BILDUNGSORT':item.commercial?'KOMMERZIELLER ANBIETER':categoryLabel(item.category)}</div>
  {item.highlight&&<p className="tourism-highlight-badge">Eines der 10 Highlights von <a href="https://www.bergedorf.de/10-highlights" target="_blank" rel="noopener noreferrer">Bergedorf.de</a></p>}
  <h3>{item.name}</h3><p className="tourism-place"><MapPin size={15}/>{item.place}{item.address?' · '+item.address:''}</p>
  <p>{item.description}</p>
  {item.supplementalDescription&&<p className="tourism-supplemental">{item.supplementalDescription}</p>}
  {item.routeStations?.length>0&&<details className="tourism-stations"><summary>{item.routeStations.length} Stationen der Route</summary><ol>{item.routeStations.map((station:string)=><li key={station}>{station}</li>)}</ol></details>}
  {item.bikeFriendly&&<p className="tourism-free"><strong>Fahrradangebot laut Betreiber:</strong> {item.bikeFeatures.join(', ')}.</p>}
  {item.free&&<p className="tourism-free"><strong>Einordnung:</strong> {item.free}</p>}
  {item.outside&&<p className="tourism-caution"><strong>Geografische Einordnung:</strong> {item.outside}</p>}
  {item.routeGeometryStatus&&<p className="tourism-caution"><strong>Kartenlinie:</strong> {item.routeGeometryStatus}</p>}
  {item.barrier&&<p className="tourism-caution"><strong>Barrierefreiheit:</strong> {item.barrier}</p>}
  {item.status&&item.status!=='Quelle am 21.11.2026 geprüft'&&<p className="tourism-caution"><strong>Aktualität:</strong> {item.status}</p>}
  <p className="tourism-source"><small>Quelle: {item.source.label} · geprüft {item.checkedOn}</small></p>
  {item.additionalSources?.map((entry:any)=><p className="tourism-source" key={entry.url}><small>Weitere Quelle: <a href={entry.url} target="_blank" rel="noopener noreferrer">{entry.label}</a></small></p>)}
  <div className="tourism-card-actions">{item.natureTrail?<button className="outline small" type="button" onClick={onFocus}>Weg auf der Karte zeigen</button>:Number.isFinite(item.lat)&&item.coordinateSource?<button className="outline small" type="button" onClick={onFocus}>Auf der Karte zeigen</button>:<span className="tourism-no-coordinate">{item.geometryType==='area'?'Flächengeometrie nicht verifiziert':'Kein belegter Kartenpunkt'}</span>}{item.href?<a href={item.href}>Zum bestehenden Bereich <ArrowUpRight size={15}/></a>:null}<a href={item.source.url} target="_blank" rel="noopener noreferrer">Originalquelle <ExternalLink size={14}/></a></div>
  {categoryLinks.length>0&&<p className="tourism-related">Auch passend: {categoryLinks.map((id:string,index:number)=><span key={id}>{index?', ':''}{categoryLabel(id)}</span>)}</p>}
 </article>
}
