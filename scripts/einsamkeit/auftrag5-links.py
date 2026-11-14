import json,pathlib,urllib.request,concurrent.futures,time
r=pathlib.Path(__file__).resolve().parents[2];urls=set()
for p in (r/'frontend/lib').glob('loneliness-sources-5.json'):
 for s in json.loads(p.read_text()).values():
  if s.get('url','').startswith('https://'):urls.add(s['url'])
def check(u):
 try:
  req=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'},method='GET')
  with urllib.request.urlopen(req,timeout=12) as z:z.read(512);return {'url':u,'status':z.status,'final':z.url,'result':'erreichbar; Inhalt nicht pauschal verifiziert'}
 except Exception as e:return {'url':u,'status':getattr(e,'code',None),'result':str(e),'offen':'Erreichbarkeit manuell nachprüfen; technische Sperre oder Zeitüberschreitung ist kein Beweis einer falschen Quelle.'}
with concurrent.futures.ThreadPoolExecutor(max_workers=16) as ex:results=list(ex.map(check,sorted(urls)))
out={'stand':'2026-11-14','methode':'GET mit Lesen von höchstens 512 Antwortbytes; technische Erreichbarkeit, keine vollständige Inhaltsprüfung. Sperren und Timeouts werden nicht als gelöschte Quellen ausgegeben.','geprueft':len(results),'erreichbar':sum(x.get('status')==200 for x in results),'results':results}
(r/'docs/einsamkeit/auftrag5-linkpruefung.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items() if k!='results'}),flush=True)
