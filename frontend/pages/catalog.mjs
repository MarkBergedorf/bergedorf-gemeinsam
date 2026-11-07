import state from './public-state.json' with {type:'json'};
// Public reader projection only; never bundle the internal research catalog.
export const directoryResearch=state.editorialEntries;
export function editorialEntry(s,id){const key=String(id||'').replace(/^editorial-/,'');return (s.editorialEntries||directoryResearch).find(r=>r.id===key)||null;}
export function editorialVisible(s,id){return !!editorialEntry(s,id)&&s.settings.areas.verzeichnis?.status!=='inactive';}
