import {hamburgBounds} from './map-constraints.mjs';
// Viewport is presentation state only; no participant data is persisted here.
export function mapViewKey(hash){const [path,query='']=hash.split('?'),p=new URLSearchParams(query);p.delete('shown');return 'bg-map-view:'+path.replace(/\/(liste|karte)$/,'')+'?'+p.toString()}
export function validMapView(value){return !!value&&Number.isFinite(value.lat)&&Number.isFinite(value.lon)&&value.lat>=hamburgBounds[0][0]&&value.lat<=hamburgBounds[1][0]&&value.lon>=hamburgBounds[0][1]&&value.lon<=hamburgBounds[1][1]&&Number.isFinite(value.zoom)&&value.zoom>=8&&value.zoom<=19}

// Schema 2 discards old viewport states affected by viewport-inside-Hamburg limits.
export const mapViewSchema=2;
export function restoreMapView(historyState,saved,key,hash){const local=historyState?.bgMapView;if(validMapView(local)&&local.schema===mapViewSchema&&local.key===key)return local;const previous=historyState?.bgFrom||'',query=previous.split('?')[1]||'',from=new URLSearchParams(query).get('from');const sibling=/^#(?:verzeichnis|organisation)(?:\/(?:liste|karte))?(?:\?|$)/.test(previous)&&mapViewKey(previous)===key;if((from===hash||sibling)&&validMapView(saved)&&saved.schema===mapViewSchema&&saved.key===key)return saved;return null}
