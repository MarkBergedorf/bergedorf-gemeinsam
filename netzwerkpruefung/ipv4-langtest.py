import datetime as dt,json,subprocess,tempfile
from pathlib import Path
out=Path('netzwerkergebnis');out.mkdir(exist_ok=True)
url='https://sitzungsdienst-bergedorf.hamburg.de/bi/vo020.asp?VOLFDNR=1010019'
started=dt.datetime.now(dt.timezone.utc).isoformat()
with tempfile.TemporaryDirectory() as td:
 p=Path(td)/'body'
 cmd=['curl','-4','--silent','--show-error','--proto','=https','--connect-timeout','60','--max-time','75','--max-filesize','20971520','--output',str(p),'--write-out','%{json}',url]
 r=subprocess.run(cmd,capture_output=True,text=True,timeout=80)
 try:m=json.loads(r.stdout)
 except Exception:m={}
 result={'startedAt':started,'finishedAt':dt.datetime.now(dt.timezone.utc).isoformat(),'url':url,'family':'IPv4 explicitly forced with curl -4','connectTimeoutSeconds':60,'maxTimeSeconds':75,'curlExitCode':r.returncode,'httpStatus':m.get('http_code',0),'remoteIp':m.get('remote_ip'),'timeDns':m.get('time_namelookup'),'timeTcp':m.get('time_connect'),'timeTls':m.get('time_appconnect'),'timeTotal':m.get('time_total'),'stderr':r.stderr.strip(),'bytes':p.stat().st_size if p.exists() else 0,'publication':False}
 (out/'ipv4-langtest.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
 print(json.dumps(result,ensure_ascii=False))
