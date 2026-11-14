import events from './loneliness-events-6.json' with {type:'json'};
export {events as lonelinessEvents};
export function berlinDate(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
export function eventGroup(event,now=new Date()){const day=berlinDate(now);return (event.end<day||(event.endAt&&new Date(event.endAt)<=now))?'archive':event.kind==='planned'?'planned':'confirmed';}
export function eventGroups(now=new Date()){return ['confirmed','planned','archive'].map(id=>({id,events:events.filter(e=>eventGroup(e,now)===id).sort((a,b)=>id==='archive'?b.start.localeCompare(a.start):a.start.localeCompare(b.start))}));}
export const eventTopicIds=['mitwirkung','t17-1','t17-3'];
export function eventSearchText(id){return eventTopicIds.includes(id)?events.map(e=>[e.title,e.start,e.start.split('-').reverse().join('.'),e.time,e.place,e.provider,e.category].join(' ')).join(' '):'';}
