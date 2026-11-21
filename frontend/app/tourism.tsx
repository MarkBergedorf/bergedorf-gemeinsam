'use client';
import {useEffect,useMemo,useRef,useState} from 'react';
import {MapPin,Search,ExternalLink,ArrowUpRight} from 'lucide-react';
import {tourismCategories,tourismItems,tourismCheckedOn,filterTourismItems} from '../lib/tourism-data.mjs';
import {useMapPrivacy} from './map-privacy-dialog';
import {districtBounds} from '../lib/directory-map.mjs';
import {districtOverview} from '../lib/map-constraints.mjs';

const categoryLabel=(id:string)=>tourismCategories.find(x=>x.id===id)?.label||id;
const relatedIds=(item:any)=>[item.category,...(item.categoryLinks||[])];
const markerColor=(category:string)=>({sehenswuerdigkeiten:'#754c9b',natur:'#317554',rundgaenge:'#b17a24',kultur:'#315f96',unterkunft:'#9a5364',gastronomie:'#b05d27',rad:'#2d7a87',camping:'#6a7533',wasser:'#24759b',familie:'#b15378',mobilitaet:'#545d6d',praktisch:'#6b7040'}[category]||'#315f52');

function TourismMap({items,selected,focusId,onFocus}:{items:any[],selected:Set<string>,focusId:string,onFocus:(id:string)=>void}){
 const root=useRef<HTMLDivElement>(null),map=useRef<any>(null),layer=useRef<any>(null),draw=useRef<()=>void>(()=>{}),itemsRef=useRef<any[]>(items);
 itemsRef.current=items;
 const [consent,setConsent]=useState(false),[error,setError]=useState('');
 const privacy=useMapPrivacy('openfreemap',()=>setConsent(true));
 const points=items.filter(item=>Number.isFinite(item.lat)&&Number.isFinite(item.lon)&&item.coordinateSource&&relatedIds(item).some((id:string)=>selected.has(id)));
 useEffect(()=>{let live=true;let instance:any,observer:any; if(!consent||!root.current)return;
  setError('');
  Promise.all([import('leaflet'),import('../lib/history-tiles.mjs')]).then(async ([L,tileModule])=>{
   if(!live||!root.current)return;
   instance=L.map(root.current,{scrollWheelZoom:true,zoomSnap:.25,zoomDelta:1,maxZoom:19});map.current=instance;
   const view=districtOverview(districtBounds,root.current.clientWidth,root.current.clientHeight,28);
   instance.setView([view.lat,view.lon],view.zoom,{animate:false});
   tileModule.historyTiles(L,(message:string)=>live&&setError(message)).addTo(instance);
   const boundaries=await fetch('/assets/bergedorf-stadtteile.geojson').then(r=>r.ok?r.json():null).catch(()=>null);
   if(!live)return;
   if(boundaries)L.geoJSON(boundaries,{style:{color:'#285a48',weight:1.15,fillColor:'#6a8b6a',fillOpacity:.025,opacity:.82},interactive:false}).addTo(instance);
   else setError('Die lokalen Stadtteilgrenzen konnten nicht geladen werden. Kartenpunkte und Liste bleiben nutzbar.');
   const markers=L.layerGroup().addTo(instance);layer.current=markers;
   const repaint=()=>{
    if(!live)return;
    markers.clearLayers();
    const groups=new Map<string,any[]>();
    for(const item of itemsRef.current){
     if(!Number.isFinite(item.lat)||!Number.isFinite(item.lon)||!item.coordinateSource)continue;
     const key=`${item.lat.toFixed(5)}:${item.lon.toFixed(5)}`;if(!groups.has(key))groups.set(key,[]);groups.get(key)!.push(item);
    }
    for(const group of groups.values()){
     const first=group[0],node=document.createElement('div');
     for(const item of group){
      const article=document.createElement('article'),h=document.createElement('h3'),p=document.createElement('p'),a=document.createElement('a');
      h.textContent=item.name;p.textContent=`${categoryLabel(item.category)} · ${item.place}${item.address?' · '+item.address:''}`;
      a.href=item.coordinateSource;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Koordinatenquelle';
      const detail=document.createElement('a');detail.href='#tourismus-results';detail.textContent='Zum Listeneintrag';detail.addEventListener('click',event=>{event.preventDefault();onFocus(item.id);document.querySelector(`[data-tourism-id=\"${item.id}\"]`)?.scrollIntoView({behavior:'smooth',block:'center'})});
      article.append(h,p,a,detail);node.appendChild(article);
     }
     const marker=L.circleMarker([first.lat,first.lon],{radius:8,color:'#fff',weight:2,fillColor:markerColor(first.category),fillOpacity:1}).addTo(markers);
     marker.bindTooltip(group.length>1?`${group.length} Orte`:(first.shortName||first.name),{direction:'top'}).bindPopup(node,{maxWidth:330});
     
    }
   };
   draw.current=repaint;repaint();
   observer=new ResizeObserver(()=>instance.invalidateSize({pan:false}));observer.observe(root.current);
  }).catch(()=>live&&setError('Die touristische Karte konnte nicht gestartet werden. Die verlinkte Ortsliste bleibt verfügbar.'));
  return()=>{live=false;observer?.disconnect();if(map.current){map.current.remove();map.current=null;layer.current=null}draw.current=()=>{};focus.current=()=>{}};
 },[consent]);
 useEffect(()=>{draw.current()},[selected,items]);
 useEffect(()=>{if(!focusId)return;const item=items.find(x=>x.id===focusId);if(item?.coordinateSource&&Number.isFinite(item.lat)&&Number.isFinite(item.lon)){const foundMap=map.current;if(foundMap){foundMap.setView([item.lat,item.lon],Math.max(16,foundMap.getZoom()));layer.current?.eachLayer((marker:any)=>{const p=marker.getLatLng();if(Math.abs(p.lat-item.lat)<.00001&&Math.abs(p.lng-item.lon)<.00001)marker.openPopup()})}}},[focusId,items]);
 const markerCount=new Set(points.map(item=>`${item.lat.toFixed(5)}:${item.lon.toFixed(5)}`)).size;
 return <section className="tourism-map panel" aria-labelledby="tourism-map-title">
  <div className="map-heading"><div><div className="eyebrow">GEOGRAFISCHE ORIENTIERUNG</div><h2 id="tourism-map-title">Touristische Orte im Bezirk</h2></div></div>
  <p>Die Karte zeigt nur redaktionell ausgewählte Orte mit nachvollziehbarer Koordinatenquelle. Einträge ohne geprüfte Koordinaten bleiben in der Suche auffindbar, erhalten aber keinen geschätzten Kartenpunkt. Markierungen mit gleicher Position werden gemeinsam geöffnet.</p>
  {!consent?<><p>Erst nach Ihrer Zustimmung werden Kartenkacheln von OpenFreeMap geladen. Dabei werden IP-Adresse, technische Verbindungsdaten, Seitenherkunft und Kartenausschnitt an den Kartendienst übertragen. Die Liste kann ohne Karte genutzt werden.</p><button className="outline small" type="button" onClick={privacy.ask}>Touristenkarte laden</button></>:<><div className="map-toolbar"><button className="outline small" type="button" onClick={()=>{const v=districtOverview(districtBounds,root.current?.clientWidth||800,root.current?.clientHeight||420);map.current?.setView([v.lat,v.lon],v.zoom)}}>Bezirk Bergedorf anzeigen</button><button className="text-button" type="button" onClick={()=>{setConsent(false);setError('')}}>Karte entladen</button></div><div ref={root} className="private-map tourism-map-canvas" role="application" tabIndex={0} aria-label="Touristische Karte für Bergedorf mit Stadtteilgrenzen und ausgewählten Orten"/><p>{markerCount} kartierte Standorte in der aktuellen Suche und Filterauswahl; insgesamt {tourismItems.length} redaktionelle Datensätze. Stadtteilgrenzen sind eine Orientierung und keine parzellengenaue Lageaussage.</p>{error&&<p role="status">{error}</p>}</>}
  {privacy.dialog}<p className="muted">Kartengrundlage und Datenschutz: OpenFreeMap / OpenMapTiles / OpenStreetMap. Geodaten werden nur nach Zustimmung geladen. Koordinatenherkunft steht am jeweiligen Kartenpunkt.</p>
 </section>;
}

export function TourismPage(){
 const [query,setQuery]=useState(''),[selected,setSelected]=useState<Set<string>>(()=>new Set(tourismCategories.map(c=>c.id))),[freeOnly,setFreeOnly]=useState(false),[focusId,setFocusId]=useState('');
 const visible=useMemo(()=>filterTourismItems({query,categoryIds:[...selected],freeOnly}),[query,selected,freeOnly]);
 function toggle(id:string){setSelected(current=>{const next=new Set(current);next.has(id)?next.delete(id):next.add(id);return next})}
 return <div className="tourism-page">
  <section className="section page-content tourism-intro">
   <div className="eyebrow">UNABHÄNGIGE ORIENTIERUNG FÜR GÄSTE</div>
   <h1>Bergedorf entdecken – Gäste &amp; Tourismus</h1>
   <p>Sehenswürdigkeiten, Natur, Kultur, Übernachtung, Essen und Wege durch alle Teile des Bezirks – vom Bergedorfer Zentrum und Lohbrügge bis Neuallermöhe und in die Vier- und Marschlande.</p>
   <p className="tourism-note">„Bergedorf gemeinsam“ ist eine unabhängige, nicht amtliche Bürgerplattform. Diese statische Testfassung vermittelt keine Buchungen, Reservierungen, Tickets oder Zahlungen. Anbieterangaben sind einmalig am <strong>{tourismCheckedOn}</strong> geprüft und können sich ändern; maßgeblich sind die verlinkten Originalquellen.</p>
   <nav className="tourism-category-nav" aria-label="Themen im Bereich Gäste und Tourismus">{tourismCategories.map(c=><a key={c.id} href={`#tourismus-${c.id}`}>{c.short}</a>)}</nav>
  </section>
  <section className="section tourism-content">
   <div className="tourism-intro-grid">
    <article className="panel"><h2>Für den ersten Besuch</h2><p>Für einen kompakten Rundgang nennt Bergedorf-Tourismus eine etwa 3 km lange Strecke mit 12 Stationen ab Serrahn: Altstadt, Kornwassermühle, St. Petri und Pauli, Schloss, Schlossgarten und Windmühle. Innenbesuche und Öffnungszeiten separat planen.</p><a href="#tourismus-rundgaenge">Rundgänge und Routen ansehen →</a></article>
    <article className="panel"><h2>Gedenk- und Bildungsort</h2><p>Die KZ-Gedenkstätte Neuengamme ist ein eigenständiger historischer Gedenk- und Bildungsort. Sie wird hier ausdrücklich nicht als Freizeitattraktion eingeordnet.</p><a href="#tourismus-sehenswuerdigkeiten">Informationen und offizielle Besuchsseite →</a></article>
    <article className="panel"><h2>Veranstaltungen</h2><p>Es gibt keinen zweiten Kalender: Für aktuelle Termine führt dieser Bereich zum bestehenden Veranstaltungskalender von Bergedorf gemeinsam.</p><a href="#veranstaltungen">Zum Veranstaltungskalender →</a></article>
   </div>
   <TourismControls query={query} setQuery={setQuery} selected={selected} toggle={toggle} freeOnly={freeOnly} setFreeOnly={setFreeOnly} resultCount={visible.length}/>
   <TourismMap items={visible} selected={selected} focusId={focusId} onFocus={setFocusId}/>
   <div className="tourism-crosslinks"><a href="#geschichte">Geschichte und Erinnerungen</a><a href="#geschichte/orte">Orte und ihre Geschichte</a><a href="#verzeichnis">Bergedorfer Verzeichnis</a><a href="#organisation">Organisationen im Bezirk</a><a href="#veranstaltungen">Veranstaltungskalender</a></div>
   <section id="tourismus-results" className="tourism-results"><div className="tourism-results-heading"><h2>Orte und Angebote</h2><p aria-live="polite">{visible.length} passende Einträge</p></div>{tourismCategories.filter(c=>selected.has(c.id)).map(category=>{const sectionItems=visible.filter(item=>relatedIds(item).includes(category.id));if(!sectionItems.length)return null;return <section className="tourism-category-section" id={`tourismus-${category.id}`} key={category.id}><h2>{category.label}</h2>{category.id==='natur'&&<p className="tourism-caution">In Schutzgebieten nur ausgewiesene Wege nutzen und lokale Naturschutzregeln beachten. Badefreigaben, saisonale Öffnungen und aktuelle Warnungen können sich ändern.</p>}{category.id==='wasser'&&<p className="tourism-caution">Liegeplätze, Schleusen, Durchfahrtshöhen und Tiefgänge sind hier nicht als bestätigt eingetragen. Verbindliche nautische Angaben vor einer Fahrt beim zuständigen Betreiber oder der Schifffahrtsverwaltung einholen.</p>}<div className="tourism-card-grid">{sectionItems.map(item=><TourismCard key={item.id+'-'+category.id} item={item} categoryId={category.id} onFocus={()=>{setFocusId(item.id);document.getElementById('tourism-map-title')?.scrollIntoView({behavior:'smooth',block:'center'})}}/>)}</div></section>})}</section>
   {visible.length===0&&<div className="tourism-empty panel" role="status"><h2>Keine passenden Einträge</h2><p>Ändern Sie die Suche oder wählen Sie weitere Themen aus.</p></div>}
   <p className="tourism-source-note">Quellenhinweise und Aktualitätsdatum stehen an jedem Eintrag. Für die geografische Orientierung werden nur kartierte Punkte mit Koordinatenherkunft angezeigt. OpenStreetMap-Daten: © OpenStreetMap-Mitwirkende, ODbL 1.0; amtliche Schutzgebiets- und Badehinweise: Freie und Hansestadt Hamburg.</p>
  </section>
 </div>
}

function TourismControls({query,setQuery,selected,toggle,freeOnly,setFreeOnly,resultCount}:{query:string,setQuery:(s:string)=>void,selected:Set<string>,toggle:(id:string)=>void,freeOnly:boolean,setFreeOnly:(v:boolean)=>void,resultCount:number}){
 return <section className="tourism-filters panel" aria-label="Tourismusangebote filtern"><div className="tourism-filter-search"><label htmlFor="tourism-search">Suche nach Ort, Angebot oder Stadtteil</label><div className="tourism-searchbox"><Search size={19}/><input id="tourism-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Zum Beispiel Vierlande, Schloss, Rad…"/></div></div><div className="tourism-filter-row"><label className="check"><input type="checkbox" checked={freeOnly} onChange={e=>setFreeOnly(e.target.checked)}/>Nur als kostenlos gekennzeichnete Angebote</label><button className="text-button" type="button" onClick={()=>setQuery('')}>Suche leeren</button><button className="text-button" type="button" onClick={()=>{setQuery('');setFreeOnly(false);tourismCategories.forEach(c=>{if(!selected.has(c.id))toggle(c.id)})}}>Alle Filter zurücksetzen</button><span>{resultCount} Treffer</span></div><fieldset><legend>Themen auswählen</legend><div className="tourism-filter-chips">{tourismCategories.map(c=><label className="tourism-chip" key={c.id}><input type="checkbox" checked={selected.has(c.id)} onChange={()=>toggle(c.id)}/>{c.short}</label>)}</div></fieldset></section>
}

function TourismCard({item,categoryId,onFocus}:{item:any,categoryId:string,onFocus:()=>void}){
 const categoryLinks=(item.categoryLinks||[]).filter((id:string)=>id!==item.category);
 return <article data-tourism-id={item.id} className={'tourism-card'+(item.tone==='gedenkort'?' memorial-card':'')}>
  <div className="eyebrow">{item.tone==='gedenkort'?'GEDENK- UND BILDUNGSORT':item.commercial?'KOMMERZIELLER ANBIETER':categoryLabel(item.category)}</div>
  <h3>{item.name}</h3><p className="tourism-place"><MapPin size={15}/>{item.place}{item.address?' · '+item.address:''}</p>
  <p>{item.description}</p>
  {item.free&&<p className="tourism-free"><strong>Einordnung:</strong> {item.free}</p>}
  {item.outside&&<p className="tourism-caution"><strong>Geografische Einordnung:</strong> {item.outside}</p>}
  {item.barrier&&<p className="tourism-caution"><strong>Barrierefreiheit:</strong> {item.barrier}</p>}
  <p className="tourism-source"><small>Quelle: {item.source.label} · geprüft {item.checkedOn}</small></p>
  <div className="tourism-card-actions">{Number.isFinite(item.lat)&&item.coordinateSource?<button className="outline small" type="button" onClick={onFocus}>Auf der Karte zeigen</button>:<span className="tourism-no-coordinate">Kein belegter Kartenpunkt</span>}{item.href?<a href={item.href}>Zum bestehenden Bereich <ArrowUpRight size={15}/></a>:null}<a href={item.source.url} target="_blank" rel="noopener noreferrer">Originalquelle <ExternalLink size={14}/></a></div>
  {categoryLinks.length>0&&<p className="tourism-related">Auch passend: {categoryLinks.map((id:string,index:number)=><span key={id}>{index?', ':''}{categoryLabel(id)}</span>)}</p>}
 </article>
}
