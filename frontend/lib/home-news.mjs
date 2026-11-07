export const newsRoute='#start/nachrichten';
export const newsTarget='home-local-news';
export function focusHomeNews(document){const section=document.getElementById(newsTarget);if(!section)return false;section.focus({preventScroll:true});section.scrollIntoView({block:'start'});return true}
