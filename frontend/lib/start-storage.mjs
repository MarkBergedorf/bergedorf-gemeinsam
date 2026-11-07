// Explicit planning assumptions, never measured usage or a purchased quota.
export const startStorageAssumptions=[
 {label:'Bürgerbeiträge einschließlich Fassungen',count:100,bytesEach:50000},
 {label:'Einrichtungsprofile einschließlich Quellen',count:250,bytesEach:20000},
 {label:'Gleichzeitig gespeicherte Kommentare / Vorschläge',count:1000,bytesEach:3000},
 {label:'Reaktionen',count:10000,bytesEach:300},
 {label:'Meldungen / Entscheidungen / Nachweise',count:1000,bytesEach:4000},
 {label:'Profile und Sitzungen',count:500,bytesEach:1000},
 {label:'Vorgemerkte Benachrichtigungen',count:500,bytesEach:2000}
];
export function startStoragePlan(){const logical=startStorageAssumptions.reduce((n,r)=>n+r.count*r.bytesEach,0),reserve=logical*.25;return {logical,reserve,active:logical+reserve,backupAssumption:logical*2,total:logical*3+reserve,citizenUploadGrowth:0,method:'Dezimale Bytes; angenommene logische Daten, 25 % Reserve für Wachstum/Indizes, rechnerisch zwei vollständige Sicherungsstände. Keine Messung physischer Datenbank- oder Anbieterauslastung.'}}
