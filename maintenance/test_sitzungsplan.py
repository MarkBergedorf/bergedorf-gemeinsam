import unittest,importlib.util,tempfile,datetime,json
from unittest.mock import patch
spec=importlib.util.spec_from_file_location('plan','maintenance/update-sitzungsplan.py');p=importlib.util.module_from_spec(spec);spec.loader.exec_module(p)
NOW=datetime.datetime(2026,11,6,tzinfo=datetime.timezone.utc)
def item(n='22-0521',title='Sitzungsplan 2026',date='2025-10-10'):
 return dict(name='bezirk-bergedorf-drucksache-'+n.replace('.','-'),notes=title,author='Gremienbetreuung Bergedorf',state='active',private=False,extras=[dict(key='number',value=n),dict(key='publishing_date',value=date)],resources=[dict(url='https://sitzungsdienst-bergedorf.hamburg.de/bi/vo020.asp?VOLFDNR=1009087')])
class PlanTests(unittest.TestCase):
 def test_current_and_next_year_and_corrections(self):
  rows=[item(),item('22-0521.01','Sitzungsplan 2026 - korrigierte Fassung','2025-11-25'),item('22-0998','Sitzungsplan 2027','2026-10-01'),item('21-1','Sitzungsplan 2025','2024-10-01')]
  a=p.candidates(rows,2026);self.assertEqual(len(a),3);self.assertEqual(a[0]['year'],2027);self.assertEqual(a[1]['number'],'22-0521.01');self.assertEqual(a[2]['number'],'22-0521')
 def test_retry_transient_service_error_once_without_bypass(self):
  from urllib.error import HTTPError
  with patch.object(p,'fetch_once',side_effect=[HTTPError(p.API,503,'Service Unavailable',{},None),b'ok']) as f,patch.object(p.time,'sleep'):
   self.assertEqual(p.fetch(p.API),b'ok');self.assertEqual(f.call_count,2)
  with patch.object(p,'fetch_once',side_effect=HTTPError(p.API,403,'Forbidden',{},None)) as f,patch.object(p.time,'sleep'):
   with self.assertRaises(HTTPError):p.fetch(p.API)
   self.assertEqual(f.call_count,1)
 def test_null_description(self):
  self.assertEqual(p.candidates([item(title=None)],2026),[])
 def test_meeting_agenda_is_not_plan(self):
  self.assertEqual(p.candidates([item(title='Tagesordnungspunkte: Sitzungsplan 2026')],2026),[])
 def test_no_inferred_approval(self):self.assertEqual(p.candidates([item()],2026)[0]['status'],'Beschlussstatus nicht nachgewiesen')
 def test_draft_label(self):self.assertEqual(p.candidates([item(title='Sitzungsplan-Entwurf 2026')],2026)[0]['status'],'Entwurf')
 def test_wrong_publisher(self):
  a=item();a['author']='Unofficial';self.assertEqual(p.candidates([a],2026),[])
 def test_incomplete_search(self):
  with self.assertRaises(ValueError):p.search(lambda u:json.dumps(dict(success=True,result=dict(count=1,results=[]))).encode())
 def test_pagination(self):
  calls=[]
  def get(u):calls.append(u);return json.dumps(dict(success=True,result=dict(count=2,results=[item()]))).encode()
  self.assertEqual(len(p.search(get)),2);self.assertIn('start=1',calls[1])
 def test_attachments(self):
  e=p.candidates([item()],2026)[0];a=p.attachments('<a href="getfile.asp?id=7">Kalender Entwurf 2026</a><a href="https://evil.example/a.pdf">Sitzungsplan 2026</a>',e);self.assertEqual(len(a),1);self.assertIn('id=7',a[0][0])
 def test_source_url_and_redirect_safety(self):
  for u in ['http://sitzungsdienst-bergedorf.hamburg.de/a','https://sitzungsdienst-bergedorf.hamburg.de.evil.org/a','https://user@sitzungsdienst-bergedorf.hamburg.de/a','https://127.0.0.1/a']:
   with self.assertRaises(ValueError):p.official(u)
 def test_newer_attachment_in_same_paper(self):
  e=p.candidates([item(title='Sitzungsplan 2027')],2026)[0]
  a=p.attachments('<a href="old.pdf">Kalender Entwurf 2027_Stand 23.09.2026</a><a href="new.pdf">Kalender Entwurf 2027_Stand 29.10.2026</a>',e)
  self.assertTrue(a[0][0].endswith('/new.pdf'));self.assertEqual(p.stand(a[0][1]),'2026-10-29')
 def test_no_attachment_fails(self):
  with self.assertRaises(ValueError):p.attachments('<html>Wartung</html>',p.candidates([item()],2026)[0])
 def test_print_form_is_official_and_only_public_numeric_document_parameters(self):
  e=p.candidates([item()],2026)[0]
  html='<form method="post" action="do027.asp"><input type="hidden" name="DOLFDNR" value="123"><input type="hidden" name="options" value="4"><input type="submit" value="Drucksache"></form>'
  url,body=p.print_request(html,e);self.assertTrue(url.endswith('/do027.asp'));self.assertIn(b'DOLFDNR=123',body)
  with self.assertRaises(ValueError):p.print_request(html.replace('do027.asp','https://evil.example/print'),e)
  with self.assertRaises(ValueError):p.print_request(html.replace('value="123"','value="unknown-token"'),e)
 def test_html_is_not_pdf(self):
  with self.assertRaises(ValueError):p.pdf_text(b'<html>Error</html>')
 def test_success_and_source_failure_clear_old_manifest(self):
  def get(u):
   if '/package_search?' in u:return json.dumps(dict(success=True,result=dict(count=1,results=[item()]))).encode()
   if 'vo020' in u:return b'<a href="getfile.asp?id=7">Sitzungsplan 2026</a>'
   return b'%PDF-Test'
  with tempfile.TemporaryDirectory() as d,patch.object(p,'pdf_text',return_value='Kalender 2026 Entwurf'):
   m=p.update(d,get,NOW);self.assertEqual(m['status'],'ok');self.assertEqual(m['entries'][0]['documents'][0]['status'],'Entwurf')
   def failed(u):
    if 'vo020' in u:raise OSError('HTTP Error 503: Service Unavailable')
    return get(u)
   m=p.update(d,failed,NOW);self.assertEqual(m['status'],'error');self.assertEqual(m['entries'][0]['documents'],[]);self.assertIn('503',m['errors'][0]['message'])
if __name__=='__main__':unittest.main()
