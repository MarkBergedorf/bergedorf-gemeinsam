import {readFileSync} from 'node:fs';
// The sole authorized addition is tested separately. Retain all original
// byte/hash assertions against the hierarchy with only that addition removed.
export function originalHierarchyBytes(){const topics=JSON.parse(readFileSync('lib/loneliness-topics.json','utf8'));for(const parent of topics)if(parent.id==='ursachen')parent.children=parent.children.filter(n=>n.id!=='t2-7');return Buffer.from(JSON.stringify(topics,null,2)+'\n');}
