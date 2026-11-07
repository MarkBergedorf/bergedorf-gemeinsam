'use client';
import {useRoute,navigate} from './navigation';
import {historyOrigin,historyReturnLabel} from '../lib/history-navigation.mjs';
export function HistoryReturn({from,fallback='#geschichte'}:{from?:string,fallback?:string}){const route=useRoute(),origin=historyOrigin(from||route.params.from,fallback);return <a className="history-return" href={origin} onClick={e=>{e.preventDefault();navigate(origin,{restore:true})}}>{historyReturnLabel(origin)}</a>}
