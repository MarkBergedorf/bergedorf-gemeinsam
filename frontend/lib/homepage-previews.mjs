import {gazetteerById,placePageHref} from './gazetteer.mjs';
import {tourismById} from './tourism-data.mjs';

const historicalPlace=gazetteerById('die-reit');
const touristPlace=tourismById('schloss');

// These cards are derived from the same editorial records used on their full pages.
export const homepageDiscoveryPreviews=[
 {id:'history-'+historicalPlace.id,kind:'Geschichte und Erinnerungen',title:historicalPlace.name,body:historicalPlace.overview[0].text,place:historicalPlace.districts.join(' · '),href:placePageHref(historicalPlace.id)},
 {id:'tourism-'+touristPlace.id,kind:'Bergedorf entdecken',title:touristPlace.name,body:touristPlace.description,place:touristPlace.place,checkedOn:touristPlace.checkedOn,href:'#tourismus/'+touristPlace.id}
];
