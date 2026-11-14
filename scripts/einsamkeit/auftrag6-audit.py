import json,pathlib,hashlib,collections
r=pathlib.Path(__file__).resolve().parents[2];d=r/'docs/einsamkeit';lib=r/'frontend/lib'
articles={}
for name in ['loneliness-articles.json','loneliness-articles-3.json','loneliness-articles-4-social.json','loneliness-articles-4-guide.json','loneliness-articles-encounters.json','loneliness-articles-6.json']:articles.update(json.loads((lib/name).read_text()))
topics=json.loads((lib/'loneliness-topics.json').read_text());idx={}
def walk(nodes,parents=[]):
 for n in nodes:
  path=parents+[n['id']];idx[n['id']]={**n,'href':'#einsamkeit/'+'/'.join(path),'root':path[0]};walk(n['children'],path)
walk(topics)
prior={}
for name in ['auftrag2-abdeckung','auftrag3-abdeckung','auftrag4-abdeckung']:
 for row in json.loads((d/(name+'.json')).read_text())['zeilen']:prior.setdefault(row['id'],[]).append({'register':name+'.json','status':row.get('bearbeitung',row.get('entscheidung','siehe Originalregister'))})
rows=[json.loads(x) for x in (d/'bestandsaufnahme.jsonl').read_text().splitlines() if x.strip()];audit=[]
for row in rows:
 targets=[{'id':i,'href':idx[i]['href'],'fachtextVeroeffentlicht':i in articles,'offen':None if i in articles else 'Fachausarbeitung fehlt; Themenstruktur allein ist kein Fachtext.'} for i in row['zuordnungen']]
 audit.append({'id':row['id'],'datei':row['datei'],'fundstelle':row['fundstelle'],'originalSha256':hashlib.sha256(row['original'].encode()).hexdigest(),'originalVerweis':'bestandsaufnahme.jsonl#'+row['id'],'zeilenrolle':row['zeilenrolle'],'zielansichten':targets,'bisherigeEinzelabgleiche':prior.get(row['id'],[]),'originalaussageVerifiziert':False,'offen':[] if row['zeilenrolle']=='formatierung' else row['erforderlichePruefungen']+['Originalaussage nicht pauschal verifiziert. Vorhandener Fachtext behandelt das Themenfeld; die vollständige Bestätigung jeder Einzelbehauptung wird dadurch nicht behauptet.'],'offenePrueffragen':row['offenePrueffragen']})
scopes=[]
for id,n in idx.items():
 for k,scope in enumerate(n.get('scope',[])):
  scopes.append({'thema':id,'punkt':k+1,'wortlaut':scope,'fachtextVeroeffentlicht':id in articles,'status':'Themenansicht ausgearbeitet; gesonderter vollständiger Einzelbelegabgleich offen' if id in articles else 'Fachausarbeitung offen','href':n['href']})
result={'stand':'2026-11-14','basisCommit':'5f1119ad5471fbc04a074b45707976589f37d8d7','definition':'Vollständiger struktureller Gesamtabgleich aller 2550 Originalzeilen mit tatsächlich gerenderten Artikeln und früheren Einzelabgleichen. Kein neuer pauschaler wissenschaftlicher oder semantischer Einzelbehauptungsnachweis. Alle weiterhin erforderlichen Prüfungen sind ausdrücklich offen. Frühere Register werden nicht überschrieben.','bilanz':{'quellzeilen':len(rows),'inhalt':sum(x['zeilenrolle']=='inhalt' for x in rows),'themenansichten':len(idx),'fachtexte':sum(i in articles for i in idx),'offeneAnsichten':sum(i not in articles for i in idx),'konzeptSchwerpunkte':len(scopes)},'hauptthemen':[{'id':t['id'],'titel':t['title'],'fachtext':t['id'] in articles,'offeneUnterseiten':[n['id'] for n in idx.values() if n['root']==t['id'] and n['id'] not in articles]} for t in topics],'zeilen':audit,'zusaetzlicheKonzeptSchwerpunkte':scopes}
(d/'auftrag6-gesamtabgleich.json').write_text(json.dumps(result,ensure_ascii=False,separators=(',',':'))+'\n')
print(json.dumps(result['bilanz']));print('Offene Ansichten:',[i for i in idx if i not in articles]);print('Quellen6:',len(json.loads((lib/'loneliness-sources-6.json').read_text())))
