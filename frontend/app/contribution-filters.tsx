'use client';
// @ts-ignore central geographic labels
import {placeLabel} from '../lib/places.mjs';
import {useWorkspace} from './workspace';
import {gazetteerEntries,placeTypeLabel} from '../lib/gazetteer.mjs';
import {HistoryGeographicFilters} from './history-geography';
import {QuarterFilter} from './content-fields';
// @ts-ignore shared categories
import {contributionCategories} from '../lib/contribution-filters.mjs';
// @ts-ignore shared places
import {officialPlaces} from '../lib/places.mjs';
export function ContributionFilters({area,values,update}:{area:string,values:any,update:(patch:any)=>void}){const {state}=useWorkspace();return <>{area==='geschichte'?<HistoryGeographicFilters values={values} update={update}/>:<><label>Stadtteil<select value={values.place} onChange={e=>update({place:e.target.value,quarter:''})}><option value="">Alle Stadtteile und bezirksweiten Themen</option>{officialPlaces().map((v:string)=><option value={v} key={v}>{placeLabel(v)}</option>)}</select></label><label>Örtliche Bezeichnung<QuarterFilter place={values.place} value={values.quarter} onChange={v=>update({quarter:v})}/></label></>}<label>Kategorie<select value={values.category} onChange={e=>update({category:e.target.value})}><option value="">Alle Kategorien</option>{contributionCategories(state,area).map((c:any)=><option key={c.id} value={c.id}>{c.label}</option>)}</select></label><label>Sortierung<select value={values.sort} onChange={e=>update({sort:e.target.value})}><option value="new">Erste Freigabe: neueste zuerst</option><option value="old">Erste Freigabe: älteste zuerst</option><option value="name">Titel A–Z</option><option value="name-desc">Titel Z–A</option>{area==='geschichte'&&<option value="time">Historische Zeitfolge</option>}</select></label></>}
