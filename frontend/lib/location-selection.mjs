// One concrete ID, shared by profile requests, single-marker clicks and popup choices.
// Opening/zooming a group does not call select, so it cannot invent a selection.
export function createLocationSelection(points){const byId=new Map(points.map(p=>[p.id,p]));let id='';return {get id(){return id},select(next){const point=byId.get(next);if(!point)return null;id=next;return point},clear(){id=''}}}
