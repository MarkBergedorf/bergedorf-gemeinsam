import articles from './loneliness-articles.json' with {type:'json'};
import sources from './loneliness-sources.json' with {type:'json'};
export {articles as lonelinessArticles,sources as lonelinessSources};
export function lonelinessArticleText(id){const a=articles[id];return a?[a.intro,...a.sections.flatMap(s=>[s.title,...s.paragraphs.map(p=>p.text)])].join(' '):'';}
// Same UTF-16 units as textarea maxlength. No storage or network side effects.
export const lonelinessCommentLimit=250;
export function validateLonelinessComment(value){
 if(typeof value!=='string'||!value.trim())return 'Bitte geben Sie einen Kommentartext ein.';
 if(value.length>lonelinessCommentLimit)return 'Bitte kürzen Sie den Text auf höchstens 250 Zeichen.';
 return '';
}
