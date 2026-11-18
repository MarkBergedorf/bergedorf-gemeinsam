"""Render the existing typographic identity; no official crest or generated emblem."""
from pathlib import Path
from subprocess import check_output
from PIL import Image, ImageDraw, ImageFont, PngImagePlugin
root=Path(__file__).resolve().parents[1]
serif=check_output(['fc-match','-f','%{file}','Liberation Serif'],text=True)
sans=check_output(['fc-match','-f','%{file}','Liberation Sans'],text=True)
scale=2
im=Image.new('RGB',(1200*scale,630*scale),'#285a48')
d=ImageDraw.Draw(im)
def centered(text,y,size,font,color='#f8f9f5'):
 f=ImageFont.truetype(font,size*scale)
 box=d.textbbox((0,0),text,font=f)
 d.text(((1200*scale-(box[2]-box[0]))/2,y*scale-box[1]),text,font=f,fill=color)
d.rounded_rectangle((44*scale,38*scale,1156*scale,592*scale),radius=18*scale,outline='#b38c49',width=2*scale)
centered('Unabhängige Bürgerplattform',88,29,sans)
centered('Bergedorf',173,133,serif)
centered('gemeinsam',318,133,serif)
d.line((545*scale,490*scale,655*scale,490*scale),fill='#b38c49',width=3*scale)
centered('Für Hamburg-Bergedorf',525,29,sans)
im=im.resize((1200,630),Image.Resampling.LANCZOS)
info=PngImagePlugin.PngInfo();info.add_text('Title','Bergedorf gemeinsam – Unabhängige Bürgerplattform');info.add_text('Description','Wortmarke in den bestehenden Plattformfarben, ohne amtliches Wappen.')
out=root/'frontend/public/assets/social/bergedorf-gemeinsam-vorschau-v1.png'
out.parent.mkdir(parents=True,exist_ok=True)
im.save(out,optimize=True,pnginfo=info)
print(out.relative_to(root),im.size,out.stat().st_size)
