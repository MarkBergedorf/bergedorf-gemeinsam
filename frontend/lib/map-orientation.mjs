import {stations} from './stations.mjs';
// Existing ALKIS polygons and DB station records are reused, never copied to a
// second maintained gazetteer. Polygon symbols use the renderer's interior point.
export const orientationThresholds={district:10,quarter:12,station:12,planning:12,detail:15};
export const planningLabel={name:'Oberbillwerder',kind:'Planungsgebiet',lon:10.162,lat:53.5005,source:'https://www.hamburg.de/politik-und-verwaltung/behoerden/behoerde-fuer-stadtentwicklung-und-wohnen/themen/stadtentwicklung/bauleitplanung/flaechennutzungsplan/f10-19-oberbillwerder-56866',positionNote:'Redaktioneller Beschriftungsanker innerhalb des in der Planungsquelle beschriebenen Bereichs; keine amtliche Koordinate oder Gebietsgrenze.'};
const names=['coalesce',['get','name:de'],['get','name_de'],['get','name'],''];
const collection=features=>({type:'FeatureCollection',features});
export function orientationStyle(original,districts,{extendedPlaces=false}={}){
 const style=structuredClone(original),features=(districts?.features||[]).filter(f=>f.properties?.stadtteil_name&&f.geometry?.type==='MultiPolygon');
 const official=[...new Set(features.map(f=>f.properties.stadtteil_name))];
 const replaced=[...official,planningLabel.name];
 for(const layer of style.layers){
  if(layer['source-layer']==='place'&&layer.type==='symbol'){
   layer.filter=['all',...(layer.filter?[layer.filter]:[]),['!', ['in',names,['literal',replaced]]]];
   if(layer.id==='label_other'){
    layer.minzoom=orientationThresholds.quarter;
    layer.layout={...layer.layout,'text-size':['interpolate',['linear'],['zoom'],12,14,15,17],'text-padding':8,'text-allow-overlap':false,'text-ignore-placement':false};
    layer.paint={...layer.paint,'text-color':'#34483d','text-halo-color':'#ffffff','text-halo-width':2};
   }
  }
  // These stations already have exact DB-backed anchors below. Remove only
  // their matching provider labels, not roads, transit lines or other POIs.
  if(layer['source-layer']==='poi'&&layer.type==='symbol'){
   const additions=extendedPlaces?['playground','park','garden','school','kindergarten','college','university','library','community_centre','social_centre','arts_centre','sports_centre','pitch','stadium','swimming_pool','bathing_place','cafe','restaurant','pub','bar','fast_food','kiosk','monument','memorial','bridge','marketplace']:[];
   const expand=part=>Array.isArray(part)?(part[0]==='in'&&part[1]?.[1]==='subclass'&&part[2]?.[0]==='literal'?['in',part[1],['literal',[...new Set([...part[2][1],...additions])]]]:part.map(expand)):part;
   layer.filter=['all',...(layer.filter?[expand(layer.filter)]:[]),['!', ['in',names,['literal',stations.map(s=>s.name.replace('Hamburg-',''))]]]];
  }
 }
 const font=['Noto Sans Regular'];
 const symbol=(id,source,minzoom,maxzoom,field,size,color)=>({id,type:'symbol',source,minzoom,maxzoom,layout:{'text-field':field,'text-font':font,'text-size':size,'text-padding':8,'text-max-width':12,'text-allow-overlap':false,'text-ignore-placement':false},paint:{'text-color':color,'text-halo-color':'#ffffff','text-halo-width':2,'text-halo-blur':.5}});
 style.sources['bg-district-orientation']={type:'geojson',data:collection(features)};
 style.sources['bg-planning-orientation']={type:'geojson',data:collection([{type:'Feature',properties:{label:planningLabel.name+'\n'+planningLabel.kind},geometry:{type:'Point',coordinates:[planningLabel.lon,planningLabel.lat]}}])};
 style.sources['bg-station-orientation']={type:'geojson',data:collection(stations.map(s=>({type:'Feature',properties:{label:'S '+s.name.replace('Hamburg-','')},geometry:{type:'Point',coordinates:[s.lon,s.lat]}})))};
 style.layers.push(symbol('bg-district-names','bg-district-orientation',10,15,['get','stadtteil_name'],['interpolate',['linear'],['zoom'],10,14,13,18,15,20],'#263d31'),symbol('bg-planning-name','bg-planning-orientation',12,16,['get','label'],14,'#654d35'),symbol('bg-station-names','bg-station-orientation',12,16,['get','label'],14,'#146943'));
 return style;
}
