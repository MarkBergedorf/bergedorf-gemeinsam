// One canonical record per owner-approved fictional example. No invented author,
// sources, first-approval timestamp, or seed interactions. Increment the version
// on a material edit so earlier test consent is never transferred.
export const exampleLabel='Beispielbeitrag · frei erfunden';
export const exampleNotice='Dieser Beitrag veranschaulicht die Möglichkeiten der Plattform. Er beschreibt keinen nachgewiesenen tatsächlichen Vorgang.';
const record=(id,kind,published,sections=[])=>({id:'example-v8-'+id,kind,origin:'example',isExample:true,version:1,published,sections});
export const exampleRecords=[
 record('sitzgelegenheit','anliegen',{
  title:'Eine Sitzgelegenheit für eine Pause',place:'Lohbrügge',
  body:'Bei einem Spaziergang möchten Menschen gelegentlich eine Pause machen. Dieses Beispiel beschreibt den Wunsch nach einer zusätzlichen Sitzbank an einem gedachten öffentlichen Fußweg.',
  problem:'Auf dem angenommenen Wegabschnitt fehlt eine Sitzgelegenheit. Das kann längere Spaziergänge für Menschen erschweren, die zwischendurch eine Pause benötigen.',
  change:'Prüfen, ob dort eine Sitzbank mit Rückenlehne aufgestellt werden kann, ohne den Fußweg einzuengen.',
  benefit:'Eine zusätzliche Sitzgelegenheit könnte Menschen unterschiedlichen Alters ermöglichen, den Weg mit einer Ruhepause zu nutzen.'
 }),
 record('einkauf','erfahrung',{
  title:'Eine kleine Hilfestellung beim Einkauf',place:'Bergedorf',
  body:'Bei einem Einkauf fiel mir ein Gegenstand herunter. Eine andere Person hob ihn auf und reichte ihn mir zurück. Wir wechselten ein paar freundliche Worte und gingen anschließend weiter.\n\nFür mich war das eine angenehme Begegnung. Sie zeigte, wie eine kleine, unkomplizierte Hilfestellung den Alltag erleichtern kann.'
 }),
 record('treffpunkt','geschichte',{
  title:'Wie wir unseren Treffpunkt früher nannten',place:'Lohbrügge',
  body:'In meiner Erinnerung nannten wir einen kleinen Treffpunkt in unserer Nachbarschaft „die Ecke“. Ob dieser Ausdruck auch außerhalb unseres Bekanntenkreises verwendet wurde, weiß ich nicht. Eine offizielle Bezeichnung war es nach meiner damaligen Kenntnis nicht.\n\nWir trafen uns dort vor gemeinsamen Unternehmungen. Ein Schild oder eine schriftliche Quelle zu unserem Namen kenne ich nicht. Vielleicht erinnern sich andere Menschen an eine ähnliche Bezeichnung oder haben eine andere Erinnerung.'
 },[
  ['Zeitliche Einordnung','Ungefähr in den 1970er-Jahren'],
  ['Herkunft','Beispiel einer persönlichen Erinnerung'],
  ['Zusätzlicher Hinweis','Diese Erzählung ist vollständig erfunden. Sie zeigt, wie eine unbelegte Erinnerung mit ihren Unsicherheiten beschrieben werden kann.']
 ]),
 record('fahrradbuegel','politik',{
  title:'Mehr Fahrradbügel am Bergedorfer Rathaus',place:'Bergedorf',categoryId:'transport',politicalType:'citizen',
  body:'Dieses Beispiel stellt die Frage, ob am Bergedorfer Rathaus zusätzliche Fahrradabstellmöglichkeiten für Besucherinnen und Besucher öffentlicher Sitzungen sinnvoll wären.',
  proposal:'Zunächst prüfen, wie viele nutzbare Fahrradstellplätze vorhanden sind und wie stark sie an Sitzungstagen beansprucht werden. Falls sich zusätzlicher Bedarf zeigt, geeignete Standorte für weitere Fahrradbügel untersuchen.'
 },[
  ['Möglicher Nutzen','Zusätzliche Abstellmöglichkeiten könnten den Besuch mit dem Fahrrad erleichtern. Zugänge und Wege müssen dabei frei bleiben.'],
  ['Zusätzlicher Hinweis','Keine aktuelle Bestandsaufnahme, keine amtliche Eingabe und kein nachgewiesener Beschluss.']
 ])
];
export function exampleRecord(state,id){const item=exampleRecords.find(d=>d.id===id);return item?{...structuredClone(item),hidden:!!state?.settings?.exampleModeration?.[id]?.hidden,withdrawn:false}:null}
export function exampleVisible(state,doc){return !!doc?.published&&!doc.hidden&&!doc.withdrawn&&state?.settings?.areas?.[doc.kind]?.status!=='inactive'}
export function exampleDocuments(state,area='alle'){return exampleRecords.map(d=>exampleRecord(state,d.id)).filter(d=>exampleVisible(state,d)&&(['alle','start'].includes(area)||d.kind===area))}
export const exampleHref=id=>'#beitrag/'+encodeURIComponent(id);
// Retire only explicitly replaced test/example records. Check retained versions
// too, so a renamed draft cannot accidentally bring the old test back to readers.
const titleKey=value=>String(value||'').trim().replace(/\s+/g,' ').toLocaleLowerCase('de');
export function isRetiredExampleDocument(doc){if(!doc||exampleRecords.some(d=>d.id===doc.id)||!['test','example',undefined].includes(doc.origin))return false;const titles=[doc.draft?.title,doc.published?.title,...(doc.history||[]).map(h=>h.fields?.title)];return (doc.kind==='anliegen'&&titles.some(t=>titleKey(t)==='test: zusätzliche sitzbank'))||(doc.kind==='politik'&&doc.isExample&&titles.some(t=>titleKey(t)==='mehr fahrradbügel am bergedorfer rathaus'))}
