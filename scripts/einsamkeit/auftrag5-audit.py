from pathlib import Path
import json,hashlib,collections
R=Path(__file__).resolve().parents[2];L=R/'frontend/lib';D=R/'docs/einsamkeit'
A=json.loads((L/'loneliness-articles-5.json').read_text());S=json.loads((L/'loneliness-sources-5.json').read_text());topics=json.loads((L/'loneliness-topics.json').read_text());idx={}
def walk(ns,parents=[]):
 for n in ns:
  path=parents+[n['id']];idx[n['id']]={**n,'path':path,'href':'#einsamkeit/'+'/'.join(path)};walk(n['children'],path)
walk(topics)
rows=[json.loads(x) for x in (D/'bestandsaufnahme.jsonl').read_text().splitlines() if x.strip()]
out=[]
for r in rows:
 targets=[i for i in r['zuordnungen'] if i in A]
 if not targets:continue
 out.append({'id':r['id'],'datei':r['datei'],'fundstelle':r['fundstelle'],'originalSha256':hashlib.sha256(r['original'].encode()).hexdigest(),'originalVerweis':'bestandsaufnahme.jsonl#'+r['id'],'zeilenrolle':r['zeilenrolle'],'ausarbeitung':[{'artikel':i,'href':idx[i]['href'],'abschnitte':[s['id'] for s in A[i]['sections']]} for i in targets],'status':'Themenanliegen redaktionell ausgearbeitet; ursprüngliche Einzelangabe nur im belegten Umfang übernommen','originalaussageVerifiziert':False,'offeneEinzelpruefungen':r['erforderlichePruefungen'],'offenePrueffragen':r['offenePrueffragen']})
coverage={'stand':'2026-11-14','basisCommit':'938878994cd8c0b678c927549e2b5676ada88f3d','definition':'Vollständiger Zeilen-/Themenabgleich der in der verbindlichen redaktionellen Zuordnung den Hauptthemen 11–16 zugewiesenen Originalzeilen. Abschnitte erschließen Themenanliegen; sie bestätigen nicht automatisch jede ursprüngliche Einzelbehauptung. Unbelegte Angaben bleiben gekennzeichnete Aufbereitungen oder offene Prüfaufträge.','artikel':len(A),'quellenNeu':len(S),'zeilen':out,'schwerpunkte':[{'artikel':i,'scope':n['scope'],'abschnitte':[s['id'] for s in A[i]['sections']]} for i,n in idx.items() if i in A]}
(D/'auftrag5-abdeckung.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2)+'\n')
# Latest global status supplement; never overwrite the dated Auftrag-6 snapshot.
allA={}
for f in L.glob('loneliness-articles*.json'):allA.update(json.loads(f.read_text()))
globalStatus={'stand':'2026-11-14','basisCommit':coverage['basisCommit'],'definition':'Aktueller Veröffentlichungsstatus ergänzt den unveränderten datierten Gesamtabgleich aus Auftrag 6. Alle Originalfelder und frühere Prüfentscheidungen bleiben erhalten. Ausarbeitung ist keine pauschale Tatsachenverifikation.','ansichten':len(idx),'fachtexte':sum(i in allA for i in idx),'ohneFachtext':[i for i in idx if i not in allA],'quellzeilen':len(rows),'themen':[{'id':i,'href':n['href'],'veroeffentlicht':i in allA,'offeneEinzelbelege':'Siehe auftragsbezogene Abdeckungen und Original-Prüffragen; keine pauschale Verifizierung.'} for i,n in idx.items()],'fortgeltenderGesamtabgleich':'auftrag6-gesamtabgleich.json','neuerEinzelabgleich':'auftrag5-abdeckung.json'}
(D/'gesamtstatus-nach-auftrag5.json').write_text(json.dumps(globalStatus,ensure_ascii=False,indent=2)+'\n')
print({'artikel':len(A),'zeilen':len(out),'quellen':len(S),'gesamt':globalStatus['fachtexte'],'offeneAnsichten':globalStatus['ohneFachtext']})
