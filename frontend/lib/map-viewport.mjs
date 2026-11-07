import {minimumMapZoom,constrainMapView,mapPanBounds} from './map-constraints.mjs';
// Leaflet's pan:false resize changes its pixel center. Keep the geographic
// center and zoom while the CSS height changes or a retained map reappears.
export function resizeMapViewport(map,viewport){const center=map.getCenter(),zoom=map.getZoom();map.invalidateSize({pan:false});map.setView(center,zoom,{animate:false});viewport.apply()}
// Installed by the real map; tests use a map adapter, not a browser or rendering engine.
export function createMapViewport(map,maximumZoom){let active=false;return {get active(){return active},apply(){if(active)return;active=true;try{const s=map.getSize();map.setMinZoom(minimumMapZoom(s.x,s.y));map.setMaxBounds(mapPanBounds(s.x,s.y));const c=map.getCenter(),v=constrainMapView({lat:c.lat,lon:c.lng,zoom:map.getZoom()},s.x,s.y,maximumZoom);if(v&&(Math.abs(c.lat-v.lat)>1e-10||Math.abs(c.lng-v.lon)>1e-10||map.getZoom()!==v.zoom))map.setView([v.lat,v.lon],v.zoom,{animate:false})}finally{active=false}}}}
