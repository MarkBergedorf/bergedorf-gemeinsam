import originalArticles from './loneliness-articles.json' with {type:'json'};
import originalSources from './loneliness-sources.json' with {type:'json'};
import newArticles from './loneliness-articles-3.json' with {type:'json'};
import newSources from './loneliness-sources-3.json' with {type:'json'};
import {lonelinessHelpText} from './loneliness-help.mjs';
const articles={...originalArticles,...newArticles},sources={...originalSources,...newSources};
export {articles as lonelinessArticles,sources as lonelinessSources};
export function lonelinessArticleText(id){const a=articles[id];return a?[a.intro,lonelinessHelpText(id),...a.sections.flatMap(s=>[s.title,...s.paragraphs.map(p=>p.text)])].join(' '):'';}
// Same UTF-16 units as textarea maxlength. No storage or network side effects.
export const lonelinessCommentLimit=250;
export function validateLonelinessComment(value){
 if(typeof value!=='string'||!value.trim())return 'Bitte geben Sie einen Kommentartext ein.';
 if(value.length>lonelinessCommentLimit)return 'Bitte kürzen Sie den Text auf höchstens 250 Zeichen.';
 return '';
}
