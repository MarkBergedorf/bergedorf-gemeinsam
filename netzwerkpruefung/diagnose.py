#!/usr/bin/env python3
"""Read-only diagnostics. Normal DNS/TLS; no proxy change, certificate bypass or IP substitution."""
import datetime as dt,errno,hashlib,importlib.util,ipaddress,json,os,socket,subprocess,tempfile,urllib.error,urllib.parse
from pathlib import Path
OUT=Path('netzwerkergebnis');OUT.mkdir(exist_ok=True)
TARGET='sitzungsdienst-bergedorf.hamburg.de'
CONTROL=['https://www.hamburg.de/','https://transparenz.hamburg.de/','https://suche.transparenz.hamburg.de/api/3/action/status_show','https://daten.transparenz.hamburg.de/','https://api.hamburg.de/']
HOSTS=[TARGET,'www.hamburg.de','transparenz.hamburg.de','suche.transparenz.hamburg.de','daten.transparenz.hamburg.de','api.hamburg.de']
report={'startedAt':dt.datetime.now(dt.timezone.utc).isoformat(),'dns':{},'tcp':[],'routes':[],'requests':[],'metadata':[],'fullSync':None,'publication':False}

def save():
 p=OUT/'diagnose.json.tmp';p.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');p.replace(OUT/'diagnose.json')

def command(args,timeout=20):
 try:
  r=subprocess.run(args,capture_output=True,text=True,timeout=timeout);return {'returncode':r.returncode,'stdout':r.stdout.strip(),'stderr':r.stderr.strip()}
 except Exception as e:return {'error':type(e).__name__+': '+str(e)}

def allowed(url):
 u=urllib.parse.urlsplit(url)
 if u.scheme!='https' or not(u.hostname=='hamburg.de' or u.hostname.endswith('.hamburg.de')) or u.port not in (None,443) or u.username or u.password:raise ValueError('Not an approved directly official HTTPS destination')
 return url

def classify(code,metrics,stderr):
 status=int(metrics.get('http_code') or 0)
 if code==6:return 'DNS_FAILURE'
 if code==5:return 'PROXY_DNS_FAILURE'
 if code==28:return 'TIMEOUT_AFTER_TCP_CONNECT' if metrics.get('time_connect',0)>0 else 'CONNECT_OR_DNS_TIMEOUT'
 if code==7:return 'NETWORK_ROUTE_FAILURE' if 'Network is unreachable' in stderr else 'CONNECT_FAILURE'
 if code==35:return 'TLS_HANDSHAKE_FAILURE'
 if code in (51,60):return 'TLS_CERTIFICATE_FAILURE'
 if code:return 'CURL_FAILURE_'+str(code)
 if status>=400:return 'HTTP_ERROR'
 if 300<=status<400:return 'HTTP_REDIRECT'
 if 200<=status<300:return 'HTTP_SUCCESS'
 return 'NO_HTTP_RESPONSE'

def curl(url,family='4',body=None,phase='probe',limit=15):
 allowed(url)
 with tempfile.TemporaryDirectory() as td:
  target=Path(td)/'body';headers=Path(td)/'headers'
  args=['curl','--silent','--show-error','--proto','=https','--connect-timeout','8','--max-time',str(limit),'--max-filesize','20971520','--dump-header',str(headers),'--output',str(target),'--write-out','%{json}']
  if family in ('4','6'):args+=['-'+family]
  if body is not None:args+=['--data',body.decode() if isinstance(body,bytes) else body]
  args += [url]
  r=subprocess.run(args,capture_output=True,text=True,timeout=limit+5)
  try:metrics=json.loads(r.stdout)
  except Exception:metrics={}
  b=target.read_bytes() if target.exists() else b''
  hs=headers.read_text(errors='replace') if headers.exists() else ''
  location=next((x.split(':',1)[1].strip() for x in hs.splitlines() if x.lower().startswith('location:')),None)
  item={'url':url,'method':'POST' if body is not None else 'GET','family':family,'phase':phase,'curlExitCode':r.returncode,'category':classify(r.returncode,metrics,r.stderr),'stderr':r.stderr.strip(),'httpStatus':metrics.get('http_code',0),'remoteIp':metrics.get('remote_ip'),'timeDns':metrics.get('time_namelookup'),'timeTcp':metrics.get('time_connect'),'timeTls':metrics.get('time_appconnect'),'timeTotal':metrics.get('time_total'),'bytes':len(b),'isPdf':b.startswith(b'%PDF-'),'location':location}
  report['requests'].append(item);save();print(json.dumps(item,ensure_ascii=False),flush=True)
  return item,b

def get4(url,body=None):
 for hop in range(4):
  item,b=curl(url,'4',body,'full_sync',60)
  if item['curlExitCode']:raise urllib.error.URLError(item['stderr'])
  status=int(item['httpStatus'])
  if status in (301,302,303,307,308) and item['location']:
   url=allowed(urllib.parse.urljoin(url,item['location']))
   if status in (301,302,303):body=None
   continue
  if not 200<=status<300:raise urllib.error.HTTPError(url,status,'Official HTTP response',{},None)
  return b
 raise ValueError('Too many official redirects')

# Record tool and environment facts without reading secrets or proxy values.
report['curlVersion']=command(['curl','--version'])['stdout'].splitlines()[0]
for host in HOSTS:
 row={}
 for name,family in [('A',socket.AF_INET),('AAAA',socket.AF_INET6)]:
  row[name+'Dig']=command(['dig','+time=5','+tries=1','+noall','+answer','+comments',host,name],10)
  try:row[name]=sorted({v[4][0] for v in socket.getaddrinfo(host,443,family,socket.SOCK_STREAM)})
  except socket.gaierror as e:row[name+'Error']={'errno':e.errno,'message':str(e)};row[name]=[]
 report['dns'][host]=row;save()

for name,family in [('A',socket.AF_INET),('AAAA',socket.AF_INET6)]:
 for address in report['dns'][TARGET][name]:
  if not ipaddress.ip_address(address).is_global:continue
  report['routes'].append({'address':address,'family':name,'result':command(['ip','-4' if name=='A' else '-6','route','get',address])})
  s=socket.socket(family,socket.SOCK_STREAM);s.settimeout(8)
  try:s.connect((address,443));row={'address':address,'family':name,'status':'TCP_CONNECTED'}
  except OSError as e:row={'address':address,'family':name,'status':'TCP_FAILURE','errno':e.errno,'type':type(e).__name__,'message':str(e)}
  finally:s.close()
  report['tcp'].append(row);save()

items=json.loads(Path('netzwerkpruefung/amtliche-ziele.json').read_text())
for family in ['default','4','6']:curl(items[0]['context'],family,phase='target_family_comparison')
for url in CONTROL:
 for family in ['4','6']:curl(url,family,phase='official_control')

for e in items:
 curl(e['context'],'4',phase='five_original_contexts')
 meta='https://suche.transparenz.hamburg.de/api/3/action/package_show?'+urllib.parse.urlencode({'id':e['dataset']})
 mi,raw=curl(meta,'4',phase='official_alternative_discovery')
 resources=[]
 try:
  j=json.loads(raw)
  for resource in j.get('result',{}).get('resources',[]):
   row={k:resource.get(k) for k in ('id','format','name','url','cache_url')};resources.append(row)
   for key in ('url','cache_url'):
    u=resource.get(key)
    if u and u!=e['context']:
     try:allowed(u)
     except ValueError:continue
     if u not in [a['url'] for a in e['alternatives']]:e['alternatives'].append({'url':u,'method':'GET','label':resource.get('name'),'provenance':'Current official CKAN resource '+key})
 except Exception as ex:resources.append({'error':type(ex).__name__+': '+str(ex)})
 report['metadata'].append({'dataset':e['dataset'],'resources':resources});save()
 for alt in e['alternatives']:
  result,data=curl(alt['url'],'4',alt.get('body'),phase='official_download_alternative')
  result['number']=e['number'];result['provenance']=alt['provenance'];result['label']=alt['label'];save()
  if result['isPdf'] and result['category']=='HTTP_SUCCESS':
   name=hashlib.sha256(data).hexdigest()+'.pdf';(OUT/name).write_bytes(data)

# Only attempt a complete IPv4 process if an original context really answered HTTP 2xx.
if any(r['category']=='HTTP_SUCCESS' and r['phase'] in ('five_original_contexts','target_family_comparison') and r['family']=='4' for r in report['requests']):
 spec=importlib.util.spec_from_file_location('updater','maintenance/update-sitzungsplan.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
 m=mod.update(OUT/'vollabruf-ipv4',get=get4)
 report['fullSync']={'status':m['status'],'errors':m['errors'],'documents':sum(len(e['documents']) for e in m['entries'])}
 if m['status']=='ok':
  # Repeat the exact read/validate/store process into another isolated target. No repository push or Pages call.
  second=mod.update(OUT/'wiederholungspruefung-ipv4',get=get4)
  report['repeatSync']={'status':second['status'],'errors':second['errors'],'documents':sum(len(e['documents']) for e in second['entries'])}
else:report['fullSync']={'status':'not_attempted','reason':'No successful IPv4 response from the official original context host; no reliable fix found.'}
report['finishedAt']=dt.datetime.now(dt.timezone.utc).isoformat();save()
