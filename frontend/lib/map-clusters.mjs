// Connected components at the current Leaflet screen distance, with stable IDs.
// Different organisations at identical coordinates remain independently selectable.
export function clusterPoints(entries,project,radius=42){
 const seen=new Set(),items=[];for(const entry of entries){if(!Number.isFinite(entry.lat)||!Number.isFinite(entry.lon)||seen.has(entry.id))continue;const point=project(entry);if(!Number.isFinite(point?.x)||!Number.isFinite(point?.y))continue;seen.add(entry.id);items.push({entry,point})}
 const parent=items.map((_,i)=>i);const find=i=>parent[i]===i?i:(parent[i]=find(parent[i]));
 for(let i=0;i<items.length;i++)for(let j=i+1;j<items.length;j++)if(Math.hypot(items[i].point.x-items[j].point.x,items[i].point.y-items[j].point.y)<=radius){const a=find(i),b=find(j);if(a!==b)parent[b]=a}
 const groups=new Map();items.forEach(({entry,point},i)=>{const key=find(i);if(!groups.has(key))groups.set(key,{entries:[],points:[],lat:entry.lat,lon:entry.lon});groups.get(key).entries.push(entry);groups.get(key).points.push(point)});return [...groups.values()];
}
// A direct selection is never hidden in a nearby-number cluster. Only entries
// at the exact same verified coordinate share its popup; all IDs remain once.
export function displayClusters(entries,project,selectedId){const selected=entries.find(r=>r.id===selectedId);if(!selected)return clusterPoints(entries,project);const same=entries.filter(r=>r.lat===selected.lat&&r.lon===selected.lon),ids=new Set(same.map(r=>r.id));return [...clusterPoints(entries.filter(r=>!ids.has(r.id)),project),...clusterPoints(same,project)]}
