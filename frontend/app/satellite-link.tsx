'use client';
import {satelliteMapUrl} from '../lib/satellite-link.mjs';
import {useMapPrivacy} from './map-privacy-dialog';
export function SatelliteLink({view}:{view?:{lat:number,lon:number,zoom:number}|null}){
 const href=satelliteMapUrl(view),privacy=useMapPrivacy('google',()=>window.open(href,'_blank','noopener,noreferrer'));
 return <div className="satellite-orientation"><button type="button" className="outline satellite-map-link" onClick={privacy.ask}>Satellitenansicht in Google Maps öffnen ↗</button><p>Externe Orientierungshilfe mit Luft- und Satellitenbildern.</p><small>Öffnet nach Ihrer Zustimmung extern: auf Smartphones je nach Gerät in der Google-Maps-App oder im Browser. Unsere Karte bleibt geöffnet.</small>{privacy.dialog}</div>
}
