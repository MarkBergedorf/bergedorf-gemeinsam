// Only these six views participate. Other routes keep their existing scroll behaviour.
export const encounterOverviewHref='#politik/begegnungsorte?abschnitt=uebersicht';
export const encounterReturnLabel='Zurück zur Übersicht: Begegnungsstättenkonzept und seine Ergänzungen';
export function encounterNavigationTarget(hash){
 const [path,query='']=hash.split('?'),section=new URLSearchParams(query).get('abschnitt');
 if(path==='#politik/begegnungsorte')return section==='uebersicht'?'#encounter-overview-heading':'#encounter-policy-heading';
 if(/^#politik\/begegnungsorte\/(wissenschaft|betrieb|forschung)$/.test(path))return section&&/^[a-z0-9-]+$/.test(section)?'#encounter-extra-'+section:'#encounter-supplement-heading';
 if(path==='#einsamkeit'||path==='#einsamkeit/stadtteile/t10-6')return '.loneliness-intro h1';
 return null;
}
