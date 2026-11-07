export const backendConfiguration=Object.freeze({apiBase:null,publicReadsApproved:false,writesEnabled:false});
export const unavailableMessage='Diese Funktion benötigt das noch nicht angeschlossene Backend. In dieser statischen Testfassung werden keine Eingaben gespeichert oder versendet.';
export function createBackendClient(config=backendConfiguration){
 return Object.freeze({
  async readPublished(){if(!config.publicReadsApproved||!config.apiBase)throw Error('Öffentliche Read-API noch nicht freigegeben');const base=new URL(config.apiBase);if(base.protocol!=='https:')throw Error('HTTPS-Backend erforderlich');const r=await fetch(new URL('public/snapshot',base.href.endsWith('/')?base:new URL(base.href+'/')),{credentials:'omit'});if(!r.ok)throw Error('Öffentliche Lesedaten nicht verfügbar');return r.json();},
  async write(){throw Error(unavailableMessage)},
 });
}
