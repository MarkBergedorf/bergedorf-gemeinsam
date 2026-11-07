import {createHistoryRequestScope} from './history-request-scope.mjs';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import LayerGroup from 'ol/layer/Group.js';
import {fromLonLat} from 'ol/proj.js';
import {apply} from 'ol-mapbox-style';
import 'ol/ol.css';
// The complete upstream Liberty cartography is rendered by OpenLayers, including
// line-following road names and collision handling. This only synchronizes its
// viewport with the existing Leaflet markers and editing controls.
export function historyTiles(L,onError){
 const Layer=L.Layer.extend({
  onAdd(map){
   this._requests=createHistoryRequestScope();
   this._root=L.DomUtil.create('div','history-liberty-background');
   this._root.setAttribute('aria-hidden','true');this._root.style.pointerEvents='none';
   map.getPane('tilePane').appendChild(this._root);
   this._view=new View({center:fromLonLat([map.getCenter().lng,map.getCenter().lat]),zoom:map.getZoom(),maxZoom:21});
   this._background=new Map({target:this._root,view:this._view,controls:[],interactions:[]});
   const group=new LayerGroup();this._background.addLayer(group);this._live=true;
   this._sync=()=>{const size=map.getSize(),p=map.getCenter();L.DomUtil.setPosition(this._root,map.containerPointToLayerPoint([0,0]));this._root.style.width=size.x+'px';this._root.style.height=size.y+'px';this._background.setSize([size.x,size.y]);this._view.setCenter(fromLonLat([p.lng,p.lat]));this._view.setZoom(map.getZoom());this._background.renderSync()};
   map.on('move zoom resize viewreset',this._sync);this._sync();
   apply(group,new URL('/assets/history-liberty.json',location.href).href,{webfonts:'/assets/map-fonts/{font-family}-{fontweight}{-fontstyle}.css',transformRequest:url=>this._requests.request(url)}).then(()=>{if(!this._live)return;for(const layer of group.getLayers().getArray())layer.getSource?.()?.on('tileloaderror',()=>this._live&&onError('Die Straßenkarte konnte nicht vollständig geladen werden. Punkte und Liste bleiben nutzbar.'));this._sync()}).catch(()=>this._live&&onError('Die Straßenkarte konnte nicht geladen werden. Punkte und Liste bleiben nutzbar.'));
  },
  onRemove(map){this._live=false;this._requests.close();map.off('move zoom resize viewreset',this._sync);this._background.setTarget(undefined);this._background.dispose();this._root.remove()},
  getAttribution(){return '<a href="https://openfreemap.org/" target="_blank" rel="noopener noreferrer">OpenFreeMap</a> · <a href="https://openmaptiles.org/" target="_blank" rel="noopener noreferrer">© OpenMapTiles</a> · <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap-Mitwirkende</a>'}
 });
 return new Layer();
}
