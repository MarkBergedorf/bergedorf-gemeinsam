import middleArticles from './loneliness-articles-5.json' with {type:'json'};
import middleSources from './loneliness-sources-5.json' with {type:'json'};
import finalArticles from './loneliness-articles-6.json' with {type:'json'};
import finalSources from './loneliness-sources-6.json' with {type:'json'};
import {eventSearchText} from './loneliness-events.mjs';
import originalArticles from './loneliness-articles.json' with {type:'json'};
import originalSources from './loneliness-sources.json' with {type:'json'};
import newArticles from './loneliness-articles-3.json' with {type:'json'};
import newSources from './loneliness-sources-3.json' with {type:'json'};
import social from './loneliness-articles-4-social.json' with {type:'json'};
import guide from './loneliness-articles-4-guide.json' with {type:'json'};
import socialSources from './loneliness-sources-4-social.json' with {type:'json'};
import guideSources from './loneliness-sources-4-guide.json' with {type:'json'};
import {historicalSearchText,districtSearchText} from './loneliness-local.mjs';
import {lonelinessHelpText} from './loneliness-help.mjs';
import encounters from './loneliness-articles-encounters.json' with {type:'json'};
import encounterSources from './loneliness-sources-encounters.json' with {type:'json'};
const articles={...middleArticles,...finalArticles,...encounters,...originalArticles,...newArticles,...social,...guide},sources={...middleSources,...finalSources,...encounterSources,...originalSources,...newSources,...socialSources,...guideSources};
export {articles as lonelinessArticles,sources as lonelinessSources};
export function lonelinessArticleText(id){const a=articles[id];return a?[a.intro,eventSearchText(id),lonelinessHelpText(id),historicalSearchText(id),districtSearchText(id),...a.sections.flatMap(s=>[s.title,...s.paragraphs.map(p=>p.text)])].join(' '):'';}
// Same UTF-16 units as textarea maxlength. No storage or network side effects.
export const lonelinessCommentLimit=250;
export function validateLonelinessComment(value){
 if(typeof value!=='string'||!value.trim())return 'Bitte geben Sie einen Kommentartext ein.';
 if(value.length>lonelinessCommentLimit)return 'Bitte kürzen Sie den Text auf höchstens 250 Zeichen.';
 return '';
}
