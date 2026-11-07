export const approximateFacilityLabel='Ungefährer Anlagenstandort – genaue Lage noch nicht bestätigt';
export function mapAccuracyLabel(r){return r.mapPointScope==='building'?'WC im Gebäude · Gebäudeorientierung, kein bestätigter WC-Außeneingang':r.mapPointScope==='approximate-facility'?approximateFacilityLabel:''}
