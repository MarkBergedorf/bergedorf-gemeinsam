"""Add blank fillable fields while preserving the supplied authority declaration text."""
from pathlib import Path
from io import BytesIO
from reportlab.pdfgen import canvas
from pypdf import PdfReader,PdfWriter
import hashlib
root=Path(__file__).resolve().parents[1]
source=root/'frontend/public/reference/bezirksamt-urheberrecht-original.pdf'
assert hashlib.sha256(source.read_bytes()).hexdigest()=='5e48fec604b89f45204da39ade8c3493948689c627b163fdbb91ec88fd042e14'
r=PdfReader(source);page=r.pages[0];w,h=float(page.mediabox.width),float(page.mediabox.height)
stream=BytesIO();c=canvas.Canvas(stream,pagesize=(w,h))
for name,y,multi in [('Erklaerende_Person',675,False),('Organisation_optional',641,False),('Anschrift',606,True),('Publikation',571,False),('Sonstige_Angaben',536,True)]:
 c.acroForm.textfield(name=name,tooltip=name,x=299,y=y,width=220,height=29,borderWidth=0,fontName='Helvetica',fontSize=10,fieldFlags='multiline' if multi else '',maxlen=500)
c.showPage();c.save();stream.seek(0)
writer=PdfWriter();writer.append(PdfReader(stream));writer.pages[0].merge_page(page,over=False);writer.add_metadata({'/Title':'Digitale Ausfüllhilfe zur unveränderten Bezirksamts-Erklärung','/Subject':'Keine Annahmezusage; eigenhändige Unterschrift und Datum erforderlich.'})
out=root/'frontend/public/reference/bezirksamt-urheberrecht-ausfuellhilfe.pdf';writer.write(out)
check=PdfReader(out);assert len(check.pages)==1 and len(check.get_fields())==5
assert page.extract_text().strip() in check.pages[0].extract_text().strip()
print('Unveränderte Referenz und fünf digitale Felder geprüft.')
