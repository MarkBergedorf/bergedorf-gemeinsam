export const newsRoute='#nachrichten';
export const newsTarget='home-local-news';
export function focusHomeNews(document){const section=document.getElementById(newsTarget);if(!section)return false;section.focus({preventScroll:true});section.scrollIntoView({block:'start'});return true}

export function legacyNewsRedirect(hash=''){const [path,...query]=hash.split('?');return path==='#start/nachrichten'?newsRoute+(query.length?'?'+query.join('?'):''):null}
