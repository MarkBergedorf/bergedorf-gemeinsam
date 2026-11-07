export const commentFilters=['Offen','Freigegeben','Zurückgehalten','Alle'];
export function commentStatus(comment){if(comment.status==='sichtbar')return 'Freigegeben';if(comment.status==='zurückgehalten')return 'Zurückgehalten';if(comment.status==='gelöscht')return 'Gelöscht';return 'Offen'}
export function matchesCommentFilter(comment,filter){return filter==='Alle'||commentStatus(comment)===filter}
