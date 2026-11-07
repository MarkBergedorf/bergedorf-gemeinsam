// Largest mainland polygon of LGV ALKIS Landesgrenze, retrieved 19.10.2026.
// docs/KARTENQUELLEN-V11.json and HAMBURG-GRENZE-V11.xml record the source.
// This is a navigation viewport, not an administrative boundary or a location.
export const hamburgMainlandBounds=[[53.395011,9.730131],[53.739437,10.325277]];
export const hamburgBounds=hamburgMainlandBounds.map((p,i)=>p.map((n,j)=>n+(i?1:-1)*(hamburgMainlandBounds[1][j]-hamburgMainlandBounds[0][j])*.05));
export const maxMapZoom=19;
export function projectMapPoint({lat,lon}){const sin=Math.sin(lat*Math.PI/180);return {x:(lon+180)/360*256,y:(.5-Math.log((1+sin)/(1-sin))/(4*Math.PI))*256}}
function unproject({x,y}){return {lon:x/256*360-180,lat:Math.atan(Math.sinh(Math.PI*(1-2*y/256)))*180/Math.PI}}
// Same Web Mercator/256 px tile geometry as Leaflet EPSG:3857. A quarter-step
// permits all Hamburg to fit without a full extra zoom level of empty margin.
export function minimumMapZoom(width,height){const sw=projectMapPoint({lat:hamburgBounds[0][0],lon:hamburgBounds[0][1]}),ne=projectMapPoint({lat:hamburgBounds[1][0],lon:hamburgBounds[1][1]});return Math.max(0,Math.min(maxMapZoom,Math.floor(Math.min(Math.log2(Math.max(1,width)/(ne.x-sw.x)),Math.log2(Math.max(1,height)/(sw.y-ne.y)))*4)/4))}
// Bound the CENTER, not every visible pixel: Bergedorf can stay centered even
// when a wide viewport also shows land beyond Hamburg's eastern edge.
export function constrainMapView(value,width,height,maximumZoom=maxMapZoom){if(!value||!Number.isFinite(value.lat)||!Number.isFinite(value.lon)||!Number.isFinite(value.zoom))return null;return {lat:Math.max(hamburgBounds[0][0],Math.min(hamburgBounds[1][0],value.lat)),lon:Math.max(hamburgBounds[0][1],Math.min(hamburgBounds[1][1],value.lon)),zoom:Math.max(minimumMapZoom(width,height),Math.min(maximumZoom,value.zoom))}}
// Leaflet normally limits the whole viewport inside maxBounds. Padding by half
// the widest permitted viewport keeps its native guard from recentering Bergedorf.
export function mapPanBounds(width,height){const scale=2**minimumMapZoom(width,height),sw=projectMapPoint({lat:hamburgBounds[0][0],lon:hamburgBounds[0][1]}),ne=projectMapPoint({lat:hamburgBounds[1][0],lon:hamburgBounds[1][1]}),a=unproject({x:sw.x-width/(2*scale),y:sw.y+height/(2*scale)}),b=unproject({x:ne.x+width/(2*scale),y:ne.y-height/(2*scale)});return [[a.lat,a.lon],[b.lat,b.lon]]}
export function districtOverview(bounds,width,height,padding=24){const sw=projectMapPoint({lat:bounds[0][0],lon:bounds[0][1]}),ne=projectMapPoint({lat:bounds[1][0],lon:bounds[1][1]}),zoom=Math.floor(Math.min(Math.log2(Math.max(1,width-2*padding)/(ne.x-sw.x)),Math.log2(Math.max(1,height-2*padding)/(sw.y-ne.y)))*4)/4;return {...unproject({x:(sw.x+ne.x)/2,y:(sw.y+ne.y)/2}),zoom:Math.max(minimumMapZoom(width,height),Math.min(maxMapZoom,zoom))}}
export const mapInteractionOptions={scrollWheelZoom:true,zoomSnap:.25,zoomDelta:1,maxBoundsViscosity:1,bounceAtZoomLimits:false,maxZoom:maxMapZoom};
