#!/usr/bin/env python3
"""Official-source-only scheduled snapshot. No visitor data, credentials or third-party proxy.
Run from repository root: python3 maintenance/update-sitzungsplan.py --output sitzungsplan
Exit 1 on incomplete discovery; still writes a fail-closed status manifest.
"""
import argparse, datetime as dt, hashlib, json, os, re, subprocess, tempfile
import urllib.parse as up, urllib.request as ur, urllib.error as ue, time
from html.parser import HTMLParser
from pathlib import Path
API='https://suche.transparenz.hamburg.de/api/3/action/package_search'
HOST='sitzungsdienst-bergedorf.hamburg.de'
PORTAL='https://suche.transparenz.hamburg.de/dataset/'
MAX=20*1024*1024

def official(url):
    u=up.urlsplit(url)
    if u.scheme!='https' or u.hostname not in (HOST,'suche.transparenz.hamburg.de') or u.port not in (None,443) or u.username or u.password:
        raise ValueError('Nicht zugelassene amtliche Quelle')
    return url

class Redirect(ur.HTTPRedirectHandler):
    def redirect_request(self,req,fp,code,msg,headers,newurl):
        official(newurl)
        return super().redirect_request(req,fp,code,msg,headers,newurl)

def fetch_once(url,data=None):
    official(url)
    with ur.build_opener(Redirect()).open(ur.Request(url,data=data,headers={'User-Agent':'Bergedorf-gemeinsam-Sitzungsplan/1.0 (public official documents)'}),timeout=60) as r:
        official(r.url)
        b=r.read(MAX+1)
        if len(b)>MAX: raise ValueError('Dokument überschreitet Größenlimit')
        return b

def fetch(url,data=None):
    for attempt in range(2):
        try:return fetch_once(url,data)
        except (ue.HTTPError,TimeoutError,ue.URLError) as e:
            retry=(isinstance(e,ue.HTTPError) and e.code in (502,503,504)) or isinstance(e,TimeoutError) or (isinstance(e,ue.URLError) and isinstance(e.reason,TimeoutError))
            if attempt or not retry:raise
            time.sleep(2)

def search(get=fetch):
    results=[]; start=0
    while True:
        url=API+'?'+up.urlencode({'q':'Sitzungsplan AND Bergedorf','rows':100,'start':start,'sort':'id asc'})
        j=json.loads(get(url))
        if not j.get('success'): raise ValueError('Amtliche Metadatensuche meldet keinen Erfolg')
        batch=j['result']['results']; results+=batch; start+=len(batch)
        if start>=j['result']['count']:return results
        if not batch or start>2000:raise ValueError('Metadatensuche unvollständig')

def candidates(results,year):
    out=[]
    for d in results:
        title=(d.get('notes') or '').strip()
        m=re.match(r'^(?:Änderung\s+)?Sitzungsplan(?:-Entwurf|entwurf)?\s+(20\d\d)\b',title,re.I)
        if d.get('author')!='Gremienbetreuung Bergedorf' or not m or int(m[1])<year or d.get('state')!='active' or d.get('private') or not re.fullmatch(r'bezirk-bergedorf-drucksache-[\w-]+',d.get('name','')):continue
        ex={e['key']:e['value'] for e in d.get('extras',[])}
        if ex.get('latestVersion')=='false':continue
        contexts=[r['url'] for r in d.get('resources',[]) if re.fullmatch(r'https://sitzungsdienst-bergedorf\.hamburg\.de/bi/vo020\.asp\?VOLFDNR=\d+',r.get('url',''),re.I)]
        if len(contexts)!=1: raise ValueError('Originalquelle nicht eindeutig: '+d['name'])
        date=ex.get('publishing_date','')[:10];dt.date.fromisoformat(date)
        out.append(dict(id=d['name'],title=title,year=int(m[1]),number=ex.get('number',''),publicationDate=date,sourceUrl=PORTAL+d['name'],contextUrl=contexts[0],status='Entwurf' if 'entwurf' in title.lower() else 'Beschlussstatus nicht nachgewiesen',documents=[]))
    out.sort(key=lambda d:(-d['year'],d['publicationDate'],d['number']),reverse=False)
    # Keep base plans AND all later corrections: a one-meeting amendment is not a replacement annual table.
    return sorted(out,key=lambda d:(d['year'],d['publicationDate'],tuple(int(x) for x in re.findall(r'\d+',d['number']))),reverse=True)

class Links(HTMLParser):
    def __init__(self):super().__init__();self.links=[];self.link=None
    def handle_starttag(self,tag,attrs):
        if tag=='a':self.link=[dict(attrs).get('href',''),'']
    def handle_data(self,data):
        if self.link:self.link[1]+=data
    def handle_endtag(self,tag):
        if tag=='a' and self.link:self.links.append(self.link);self.link=None

def attachments(html,entry):
    p=Links();p.feed(html);found={}
    for href,label in p.links:
        label=' '.join(label.split());u=up.urljoin(entry['contextUrl'],href)
        if not re.search(r'sitzungsplan|kalender',label,re.I):continue
        if up.urlsplit(u).hostname!=HOST:continue
        if not re.search(r'\.pdf(?:\?|$)|getfile\.asp(?:\?|$)',u,re.I):continue
        official(u);found[u]=label
    if not found:raise ValueError('Keine eindeutig bezeichnete Sitzungsplan-/Kalender-PDF-Anlage im amtlichen Original gefunden')
    return sorted(found.items(),key=lambda x:stand(x[1]) or '',reverse=True)

def stand(text):
    m=re.search(r'Stand[: _]*(\d{2})[. _]?(\d{2})[. _]?(20\d{2})',text,re.I)
    if not m:return None
    try:return dt.date(int(m[3]),int(m[2]),int(m[1])).isoformat()
    except ValueError:return None

class PrintForms(HTMLParser):
    def __init__(self):super().__init__();self.current=None;self.forms=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='form':self.current={'action':a.get('action',''),'method':a.get('method','get').lower(),'fields':{},'print':False}
        if tag=='input' and self.current:
            if a.get('type','').lower()=='hidden':self.current['fields'][a.get('name','')]=a.get('value','')
            if a.get('type','').lower()=='submit' and a.get('value')=='Drucksache':self.current['print']=True
    def handle_endtag(self,tag):
        if tag=='form' and self.current:self.forms.append(self.current);self.current=None

def print_request(html,entry):
    parser=PrintForms();parser.feed(html)
    forms=[f for f in parser.forms if f['print'] and f['method']=='post' and up.urljoin(entry['contextUrl'],f['action'])=='https://'+HOST+'/bi/do027.asp']
    if len(forms)!=1:raise ValueError('Amtlicher PDF-Druckzugang nicht eindeutig')
    fields=forms[0]['fields']
    if set(fields)!={'DOLFDNR','options'} or any(not re.fullmatch(r'\d+',v) for v in fields.values()):raise ValueError('Unbekannte Parameter des amtlichen PDF-Druckzugangs')
    return 'https://'+HOST+'/bi/do027.asp',up.urlencode(fields).encode()

def pdf_text(data):
    if not data.startswith(b'%PDF-'):raise ValueError('Original ist kein PDF')
    with tempfile.TemporaryDirectory() as t:
        p=Path(t)/'original.pdf';p.write_bytes(data)
        r=subprocess.run(['pdftotext','-layout',str(p),'-'],capture_output=True,timeout=20,check=True)
        return r.stdout.decode('utf-8')

def collect_entry(entry,out,get=fetch):
    entry['documents']=[]
    try:
            raw=get(entry['contextUrl'])
            try:html=raw.decode('utf-8')
            except UnicodeDecodeError:html=raw.decode('cp1252')
            try:files=[(url,label,None) for url,label in attachments(html,entry)]
            except ValueError:
                # Some later changes are standalone official notices, without a new annual table.
                if not re.search(r' - |^Änderung',entry['title']):raise
                url,body=print_request(html,entry)
                files=[(url,entry['title']+' · amtlicher PDF-Ausdruck',body)]
            for url,label,body in files:
                data=get(url,body) if body else get(url);text=pdf_text(data)
                if not re.search(r'\b'+str(entry['year'])+r'\b',text):raise ValueError('Planjahr im PDF nicht bestätigt')
                name=hashlib.sha256(data).hexdigest()+'.pdf'
                tmp=out/(name+'.tmp');tmp.write_bytes(data);os.replace(tmp,out/name)
                entry['documents'].append(dict(title=label,documentDate=stand(label) or stand(text),originalUrl=entry['contextUrl'] if body else url,file=name,sha256=name[:-4],status='Entwurf' if re.search('entwurf',label+' '+text,re.I) else entry['status']))
    except Exception as e:return dict(url=entry['contextUrl'],message=type(e).__name__+': '+str(e))
    entry['documents'].sort(key=lambda d:d.get('documentDate') or '',reverse=True)
    return None

def update(output,get=fetch,today=None):
    today=today or dt.datetime.now(dt.timezone.utc); out=Path(output);out.mkdir(parents=True,exist_ok=True)
    m=dict(schema=1,checkedAt=today.isoformat(),expiresAt=(today+dt.timedelta(hours=3)).isoformat(),status='error',entries=[],errors=[],source='Freie und Hansestadt Hamburg, Bezirksversammlung Bergedorf',license='Datenlizenz Deutschland Namensnennung 2.0')
    try:
        m['entries']=candidates(search(get),today.year)
        if not m['entries']:raise ValueError('Kein Sitzungsplan für das laufende oder ein späteres Jahr amtlich nachgewiesen')
        # Fetch all relevant contexts: missing amendments must not leave an old plan labelled current.
        for entry in m['entries']:
            error=collect_entry(entry,out,get)
            if error:m['errors'].append(error)
        for entry in m['entries']:entry['documents'].sort(key=lambda d:d.get('documentDate') or '',reverse=True)
        if not m['errors']:m['status']='ok'
    except Exception as e:m['errors'].append(dict(url=API,message=type(e).__name__+': '+str(e)))
    tmp=out/'manifest.json.tmp';tmp.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n');os.replace(tmp,out/'manifest.json')
    print(json.dumps({'status':m['status'],'entries':len(m['entries']),'errors':m['errors']},ensure_ascii=False))
    return m

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--output',required=True);args=p.parse_args()
    raise SystemExit(0 if update(args.output)['status']=='ok' else 1)
