import {writeFile,mkdir} from 'node:fs/promises';
import {defaults} from '../lib/workspace.mjs';
import {project} from '../lib/access.mjs';
const state=project(defaults(),{role:'reader',mode:'reader',actor:'static-reader',legacyOwner:'',canRestoreOwner:false});
const safe={revision:0,documents:[],exampleDocuments:state.exampleDocuments,editorialEntries:state.editorialEntries,comments:[],reactions:[],files:[],requests:[],cases:[],audit:[],support:[],suggestions:[],notifications:[],settings:{...state.settings,operatorTasks:{},researchEdits:{},plan:[],previousCrests:[]},financePublication:state.financePublication,permissions:{role:'reader',mode:'static',canAdmin:false,canAuthor:false,canComment:false,canReact:false,canParticipate:false,canRestoreOwner:false,canManageFinance:false,canManageBoroughs:false,testAccess:false,emailConfirmed:false},reviewNotice:'Statische Lesefassung: Einreichungen und Moderation benötigen das noch nicht angeschlossene Backend.'};
delete safe.settings.participation;delete safe.settings.researchStatus;
await mkdir('pages',{recursive:true});await writeFile('pages/public-state.json',JSON.stringify(safe,null,2));
console.log(JSON.stringify({examples:safe.exampleDocuments.length,editorialEntries:safe.editorialEntries.length,liveDatabaseRead:false,privateDocuments:0}));
