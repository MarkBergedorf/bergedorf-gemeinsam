"""Deterministic assembly of all 51 chapters and 33 requested corrections.
Original user documents remain in docs; only stated replacements are applied.
"""
import re,json,html,pathlib,hashlib
from urllib.parse import urlsplit,urlunsplit,parse_qsl,urlencode
ROOT=pathlib.Path(__file__).resolve().parent.parent
original=(ROOT/'docs/mietkosten/grundlagen/ratgeber-original.md').read_text()
corrections=(ROOT/'docs/mietkosten/grundlagen/korrekturauftrag.md').read_text()
def clean(s):
 s=re.sub(r'\[image\]\(https://www.google.com/s2/favicons[^\n]+\)\s*\n[^\n]+\n', '',s)
 s=html.unescape(s).replace('\xa0',' ').replace('&#x20;','').replace('\\- ','- ')
 def url(m):
  u=urlsplit(m.group(0));q=[(k,v)for k,v in parse_qsl(u.query)if not k.startswith('utm_')]
  return urlunsplit((u.scheme,u.netloc,u.path,urlencode(q),u.fragment))
 return '\n'.join(line.rstrip() for line in re.sub(r'https?://[^\s)]+',url,s).splitlines()).strip()
original=clean(original);corrections=clean(corrections)
parts=list(re.finditer(r'^## \*\*(\d+)\. (.+?)\*\*\s*$',original,re.M));assert len(parts)==51
sections={int(m[1]):{'number':int(m[1]),'title':m[2],'markdown':original[m.end():parts[i+1].start() if i+1<len(parts)else original.index('# **Zusammenfassung:')].strip()}for i,m in enumerate(parts)}
# Remove only standalone group headings, retained as the eight navigable themes.
bridges={}
for n in [25,30,37]:
 chunks=re.split(r'\n# \*\*',sections[n]['markdown'],maxsplit=1)
 if len(chunks)>1:bridges[n]=chunks[1].split('**',1)[1].strip()
 sections[n]['markdown']=chunks[0].strip()
intro=original[:parts[0].start()];tail=original[original.index('# **Zusammenfassung:'):]
changes=list(re.finditer(r'^## \*\*Änderung (\d+) – (.+?)\*\*\s*$',corrections,re.M));assert len(changes)==33
items={int(m[1]):{'number':int(m[1]),'title':m[2],'body':re.split(r'\n# \*\*Teil ',corrections[m.end():changes[i+1].start()if i+1<len(changes)else corrections.index('# **Teil G')])[0].strip()}for i,m in enumerate(changes)}
placements={1:0,2:6,3:6,4:7,5:8,6:11,7:12,8:12,9:13,10:14,11:15,12:23,13:23,14:25,15:17,16:18,17:28,18:27,19:29,20:20,21:30,22:30,23:19,24:31,25:24,26:35,27:41,28:42,29:45,30:48,31:49,32:52,33:52}
mat=[]
def text(n):
 b=items[n]['body'];markers=['**Folgenden Text einfügen:**','**Ersatztext:**','**Anschließend folgenden Text ergänzen:**']
 marker=next(x for x in markers if x in b);return b.split(marker,1)[1].strip()
def body(n):return sections[n]['markdown']
def setbody(n,s):sections[n]['markdown']=s.strip()
def once(s,a,b):
 assert s.count(a)==1,(a,s.count(a));return s.replace(a,b,1)
def insert_after(chapter,anchor,addition):setbody(chapter,once(body(chapter),anchor,anchor+'\n\n'+addition))
for n in range(1,34):
 target=placements[n];mat.append({'change':n,'title':items[n]['title'],'section':target,'result':'eingearbeitet','href':'#mietkosten/abschnitt/'+str(target)if 0<target<52 else '#mietkosten/einleitung'if target==0 else '#mietkosten/redaktion'})
 if n==1:intro += '\n\n'+text(n)
 elif n==2:insert_after(6,'Die Überschreitung der 150-Prozent-Grenze bedeutet deshalb nicht in jedem Fall, dass der darüberliegende Mietbetrag endgültig ausgeschlossen ist.',text(n))
 elif n==3:setbody(6,body(6)+'\n\n'+text(n))
 elif n==4:setbody(7,body(7)+'\n\n'+text(n))
 elif n==5:insert_after(8,'Diese Sechsmonatsfrist ist keine ausnahmslose Höchstgrenze.',text(n))
 elif n==6:
  s=body(11);a=s.index('### **Tod eines Haushaltsmitglieds**');b=s.index('### **Betreuung von Kindern',a);setbody(11,s[:a]+text(n)+'\n\n'+s[b:])
 elif n==7:
  s=body(12);s=re.sub(r'^\| 688,80 €[^\n]+', '| 688,80 € | Genau 20 % | Grenzfall: Die Fachanweisung enthält zwei sich überschneidende Vorgaben. Die erste ordnet bis einschließlich 20 % ausdrücklich eine generelle Unwirtschaftlichkeit an. |',s,flags=re.M)
  add=items[n]['body'].split('**Unmittelbar nach der Tabelle folgenden Text einfügen:**',1)[1].strip();anchor='Diese Tabelle beschreibt ausschließlich';idx=s.index(anchor);setbody(12,s[:idx]+add+'\n\n'+s[idx:])
 elif n==8:
  s=body(12);a='### **Die Hamburger 36-Monats-Regel**';setbody(12,once(s,a,text(n)+'\n\n'+a))
 elif n==9:
  s=body(13);a='Die Fachanweisung enthält eine wichtige Klarstellung:';setbody(13,once(s,a,text(n)+'\n\n'+a))
 elif n==10:insert_after(14,'Die vollständige Amortisation würde bei gleichbleibender Ersparnis 80 Monate dauern.',text(n))
 elif n==11:insert_after(15,'Dabei sind Angebote mit vergleichbarem Leistungsumfang gegenüberzustellen. Maßgeblich soll das günstigste geeignete Angebot sein, sofern die Kosten plausibel erscheinen.',text(n))
 elif n==12:
  s=body(23);a=s.index('### **Genossenschaftsanteile**');b=s.index('### **Doppelte Mietkosten**',a);setbody(23,s[:a]+text(n)+'\n\n'+s[b:])
 elif n==13:
  setbody(23,body(23)+'\n\n'+text(n));insert_after(23,'- Gebühren im Zusammenhang mit Genossenschaften','- Mietrechtlich zulässige Vertragsausfertigungsgebühren, sofern eine entsprechende Zahlungspflicht tatsächlich besteht.')
 elif n==14:insert_after(25,'Dabei sind insbesondere die gesetzlichen Anspruchsvoraussetzungen, vorhandenes Einkommen, verwertbares Vermögen und die maßgeblichen Zuständigkeitsregelungen zu berücksichtigen.',text(n))
 elif n==15:insert_after(17,'- Möbelentsorgung',text(n))
 elif n==16:
  s=body(18);setbody(18,s[:s.index('Die Verfahren sind auch')]+text(n))
 elif n==17:
  s=body(28);a='### **Die Entscheidung**';setbody(28,once(s,a,text(n)+'\n\n'+a))
 elif n==18:insert_after(27,'Die für bereits fällige Monate nachzuzahlenden Beträge waren unmittelbar an den Vermieter zu zahlen.',text(n))
 elif n==19:
  s=body(29);a='### **Entscheidung zu den Ausnahmen**';setbody(29,once(s,a,text(n)+'\n\n'+a))
 elif n==20:
  s=body(20);a='Nach Ziffer 8.2.1 können';setbody(20,once(s,a,text(n)+'\n\n'+a))
 elif n==21:
  s=body(30);a='Die älteren Entscheidungen betreffen';setbody(30,once(s,a,text(n)+'\n\n'+a))
 elif n==22:
  rows=re.findall(r'^\| (BSG,|SG |LSG )[^\n]+',items[n]['body'],re.M)
  for line in items[n]['body'].splitlines():
   if line.startswith('| ')and any(k in line for k in ['BSG, B','SG Hamburg, S','LSG Hamburg, L','SG Karlsruhe, S']):
    c=[x.strip()for x in line.strip('|').split('|')];ak=re.search(r'(?:B \d+ AS \d+/\d+ R|S \d+ AS \d+/\d+|L \d+ AS \d+/\d+ D)',c[0])[0]
    s=body(30);lines=s.splitlines();count=0
    for i,l in enumerate(lines):
     if l.startswith('|')and ak in l:
      cells=l.split('|');cells[-2]=' '+c[-1]+' ';lines[i]='|'.join(cells);count+=1
    assert count==1,ak;setbody(30,'\n'.join(lines))
 elif n==23:
  s=body(19);a='### **Worauf kommt es rechtlich an?**';setbody(19,once(s,a,text(n)+'\n\n'+a))
 elif n==24:
  s=body(31);a='Dabei sind insbesondere folgende Fragen zu beantworten:';setbody(31,once(s,a,text(n)+'\n\n'+a))
 elif n==25:insert_after(24,'Bei einem Wohnungswechsel können unterschiedliche Grundsicherungsträger beteiligt sein.',text(n))
 elif n==26:setbody(35,body(35)+'\n\n'+text(n))
 elif n in [27,28,29,30,31]:setbody(target,text(n))
 elif n==32:
  a='## **Quellen und weiterführende Rechtsgrundlagen**';tail=once(tail,a,text(n)+'\n\n'+a)
 elif n==33:tail+='\n\n'+text(n)
# Additional verified mandatory corrections to the source documents.
intro=intro.replace('Die ausführlich dargestellte 150-Prozent-Mietobergrenze betrifft die Grundsicherung für Arbeitsuchende nach dem Zweiten Buch Sozialgesetzbuch (SGB II).','Die 150-Prozent-Begrenzung während der Karenzzeit gilt im SGB II nach § 22 Absatz 1 Satz 6 und auch im SGB XII nach § 35 Absatz 1 Satz 7. Beide Rechtskreise werden eigenständig geprüft.')
intro=intro.replace('Insbesondere darf die seit dem 1. Juli 2026 geltende 150-Prozent-Grenze des § 22 Absatz 1 Satz 6 SGB II nicht ohne eigene gesetzliche Prüfung auf das SGB XII übertragen werden.','Seit dem 1. Juli 2026 enthält das SGB XII eine eigene entsprechende Regelung. Nach § 35 Absatz 1 Satz 8 SGB XII können bei unabweisbaren Aufwendungen oder Haushaltsgemeinschaften mit Kindern höhere Kosten anerkannt werden. Die Sonderfälle des § 42a SGB XII sind zusätzlich zu beachten.')
intro=intro.replace('Die Hamburger Zahlenbeispiele und die dargestellten Gerichtsentscheidungen zur neuen 150-Prozent-Grenze beziehen sich deshalb ausdrücklich auf den Rechtskreis des SGB II.','Die hier erläuterten Gerichtsentscheidungen zur neuen Grenze betreffen das SGB II. Die Hamburger Richtwerte sind dagegen in den örtlichen Vorgaben beider Rechtskreise enthalten; Zahlenbeispiele ersetzen keine individuelle Berechnung.')
# Abs. 1 SGB XII has a different sentence numbering and household concept.
setbody(6,body(6)+'''\n\n### **Eigenständige Regelung im SGB XII**

§ 35 Absatz 1 Satz 7 SGB XII begrenzt die Anerkennung grundsätzlich ebenfalls auf das Eineinhalbfache der abstrakt angemessenen Unterkunftsaufwendungen. Satz 8 eröffnet während der Karenzzeit eine Ermessensentscheidung bei Unabweisbarkeit oder Haushaltsgemeinschaften mit Kindern. Im SGB II verwendet das Gesetz dagegen den Begriff Bedarfsgemeinschaft. Die Tatbestände und Satznummern dürfen nicht vertauscht werden.

§ 35 Absatz 1 Satz 9 SGB XII enthält eigene Vorschriften zur Quadratmeterpreisobergrenze und zur Mietpreisbremse. Die Information durch den Sozialhilfeträger regelt Absatz 2; Kostensenkung, Wirtschaftlichkeit und Schutz nach einem Todesfall regelt Absatz 3. § 42a Absatz 1 Satz 2 nimmt bestimmte dort bezeichnete Wohnformen von § 35 Absatz 1 Sätzen 2 bis 9 aus. Deshalb gilt die Karenzzeit-/150-Prozent-Darstellung nicht pauschal für jede besondere Wohnform der Grundsicherung im Alter und bei Erwerbsminderung.

Quellen: [§ 35 SGB XII](https://www.gesetze-im-internet.de/sgb_12/__35.html), [§ 35a SGB XII](https://www.gesetze-im-internet.de/sgb_12/__35a.html), [§ 42a SGB XII](https://www.gesetze-im-internet.de/sgb_12/__42a.html).
''')
s=body(37);s=s.replace('Die 150-Prozent-Grenze des § 22 Absatz 1 Satz 6 SGB II darf deshalb nicht ohne Prüfung auf sämtliche Leistungsberechtigte nach dem SGB XII übertragen werden.','Seit dem 1. Juli 2026 enthält § 35 Absatz 1 Satz 7 SGB XII ebenfalls eine eigene 150-Prozent-Begrenzung; Satz 8 erlaubt in der Karenzzeit höhere Aufwendungen im Einzelfall bei Unabweisbarkeit oder Haushaltsgemeinschaften mit Kindern. Das ist eigenständig zu prüfen und nicht nur eine Übertragung des SGB II. Für bestimmte Wohnformen gelten nach § 42a Absatz 1 Satz 2 Ausnahmen.');setbody(37,s)
setbody(42,body(42)+'\n\nIm SGB XII steht die entsprechende Begrenzung in § 35 Absatz 1 Satz 7; Ausnahmen regelt Satz 8. Wohnungswechsel sind eigenständig nach § 35a Absatz 2 zu prüfen, besondere Wohnformen nach § 42a. Die Entscheidung erfolgt durch den Sozialhilfeträger, nicht das Jobcenter.')
setbody(37,body(37)+'''\n\n### **Eigenständige Regeln zu Wohnungswechsel, Schulden und Verfahren**

§ 35a Absatz 2 SGB XII verlangt die Unterrichtung vor Abschluss eines neuen Unterkunftsvertrags. Für höhere als angemessene Aufwendungen nach einem Umzug ist die vorherige Zusicherung maßgeblich. Wohnungsbeschaffungs-, Umzugs-, Kautions- und Genossenschaftskosten sind nach den eigenen Voraussetzungen der vorherigen Zustimmung zu prüfen; Kautionen und Anteile sollen als Darlehen gewährt werden. Die Zuständigkeitsaufteilung des § 22 Absatz 6 SGB II darf dabei nicht ungeprüft als Wortlaut des SGB XII ausgegeben werden.

Im SGB XII regelt § 36 die Sicherung der Unterkunft bei Schulden. Die Information zu unangemessenen Kosten folgt § 35 Absatz 2, der Kostensenkungsschutz Absatz 3. § 39 SGB II ist keine Vorschrift für sämtliche Sozialhilfebescheide. Ob ein Rechtsbehelf dort aufschiebend wirkt, ist nach §§ 86a und 86b SGG sowie dem konkreten Bescheid zu prüfen. Ein erstmals zu niedrig bewilligter Bedarf wird durch einen Widerspruch allein auch dort nicht zu einer höheren Auszahlung.

Hamburg veröffentlicht für das SGB XII eine eigene Arbeitshilfe mit Stand 22. Mai 2026; sie enthält ebenfalls die 36-Monats-Betrachtung, die sprachliche Überschneidung bei genau 20 Prozent und gesonderte Umzugs-/Renovierungsregeln. Die ältere Arbeitshilfe ersetzt nicht den seit Juli 2026 geltenden Gesetzestext.

Quellen: [Hamburger Vorgaben SGB XII](https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/rechtliche-grundlagen/infoline/fachliche-vorgaben-und-hinweise/sgb-xii-sozialhilfe/fa-sgbxii-35-kdu-20240101-45746), [§ 35a SGB XII](https://www.gesetze-im-internet.de/sgb_12/__35a.html), [§ 36 SGB XII](https://www.gesetze-im-internet.de/sgb_12/__36.html), [§ 86a SGG](https://www.gesetze-im-internet.de/sgg/__86a.html).
''')
# No general 50 m² rule for all Hamburg rental housing; preserve all model rows.
setbody(5,body(5).replace('Für die abstrakte Angemessenheitsberechnung werden in Hamburg bei einer Person regelmäßig 50 Quadratmeter zugrunde gelegt.','Die Hamburger Fachanweisungen nennen 50 Quadratmeter für eine Person im besonderen Regelungsbereich bestimmter Wohnungen des 1. Förderwegs. Das ist keine allgemeine Wohnflächenobergrenze für alle Mietwohnungen. Die folgende Modellrechnung veranschaulicht die Kostenbetrachtung; sie setzt keine zusätzliche allgemeine 50-Quadratmeter-Regel in Kraft.'))
setbody(39,body(39).replace('Die in Hamburg regelmäßig zugrunde gelegten 50 Quadratmeter dienen der abstrakten Angemessenheitsberechnung.','Die in den Hamburger Vorgaben genannten 50 Quadratmeter für eine Person gehören zu Sonderregeln für bestimmte Wohnungen des 1. Förderwegs. Für die allgemeine Kostenprüfung sind die maßgeblichen Bruttokaltmietrichtwerte und besonderen Bedarfe entscheidend.'))
setbody(6,body(6).replace('Dass eine Wohnung beispielsweise größer als die abstrakt zugrunde gelegten 50 Quadratmeter ist','Dass eine Wohnung beispielsweise größer als 50 Quadratmeter ist'))
setbody(27,body(27).replace('Dies galt vorläufig für den Zeitraum','Dies galt vorläufig und unter Rückforderungsvorbehalt für den Zeitraum'))
setbody(28,body(28)+'''\n\n### **Keine allgemeine Regel zum Inkrafttreten**

Die dargestellte Begründung zu § 48 SGB X ist die Auffassung des Sozialgerichts Hamburg im konkreten Eilverfahren. Aus der bloßen Bekanntheit einer bevorstehenden Gesetzesänderung folgt kein allgemeiner Rechtssatz, dass ihr späteres Inkrafttreten niemals eine wesentliche Änderung sein könne. Die Rechtmäßigkeit einer Bescheidänderung muss nach dem jeweiligen Sachverhalt und der einschlägigen Vorschrift geprüft werden.
''')
setbody(30,body(30).replace('Insbesondere kann eine treuwidrige Verzögerung einer Entscheidung über einen rechtzeitig gestellten Antrag im Einzelfall rechtlich relevant sein.','Nach BSG, B 14 AS 7/09 R, ist eine vorherige Zusicherung nicht erforderlich, wenn eine fristgerecht mögliche Entscheidung über einen rechtzeitig gestellten Antrag treuwidrig verzögert wurde. Das beseitigt nicht die weiteren Anspruchsvoraussetzungen. Im entschiedenen Fall ging es um erneute Bescheidung; daraus folgt keine pauschale Vollerstattung aller geltend gemachten Kosten.'))
# Keep the older editorial note as history, expressly update the checked edition.
tail=tail.replace('Dieser Ratgeber gibt die am 18. November 2026 überprüfbare Rechtslage','Historischer redaktioneller Hinweis zur Ausgangsfassung vom 18. November 2026: Dieser Ratgeber beschrieb die damals überprüfbare Rechtslage').replace('Dieser Ratgeber berücksichtigt die bis zum 18. November 2026 geprüften','Die Ausgangsfassung berücksichtigte die bis zum 18. November 2026 geprüften')
setbody(23,body(23).replace('sowie die vorgesehenen Abtretungsunterlagen.','sowie die vorgesehenen unterschriebenen Abtretungsunterlagen und die schriftliche Kenntnisnahme der Genossenschaft.'))
setbody(20,body(20)+'\n\n### **Dreistufige Prüfung der Einzugsrenovierung**\n\nNach BSG, B 4 AS 49/07 R, sind die Herstellung der Bewohnbarkeit, die Ortsüblichkeit einer notwendigen Einzugsrenovierung mangels nennenswert verfügbarer renovierter Wohnungen im unteren Wohnungsmarktsegment und die angemessene Kostenhöhe zu prüfen. Eine mietvertragliche Pflicht ist dafür nicht zwingend. Das ist von der Prüfung wirksamer Schönheitsreparaturpflichten beim Auszug zu unterscheiden.')
setbody(4,body(4)+"""\n\n### **Hamburger Zuschläge: persönliche und örtliche Voraussetzungen**

Die Fachanweisungen beider Rechtskreise unterscheiden in Ziffer 3 mehrere Zuschläge zum maßgeblichen Grundwert:

| Voraussetzung | Zuschlag und wichtige Grenzen |
| --- | --- |
| Wohnungslosigkeit, unmittelbar nachweisbar drohende Wohnungslosigkeit oder Frauenhaus | Bis 15 Prozent; nach mindestens sechs Monaten vergeblicher Suche bis 30 Prozent unter den Verwaltungsvoraussetzungen. Bei mindestens sechsmonatiger öffentlich-rechtlicher Unterbringung mit minderjährigem Kind wird vergebliche Suche unter den genannten Voraussetzungen vermutet. |
| Dauerhafte Erkrankung, Behinderung oder besondere Lebensumstände | Bis 10 Prozent, etwa wegen notwendiger Mehrfläche, Nähe zu Versorgung/Unterstützung oder stark eingeschränkter Wohnungsauswahl; Nachweise erforderlich. Dauerhaft bedeutet grundsätzlich mindestens zwölf Monate. |
| Gemeinsam ausgeübtes Sorgerecht mit Betreuung auch unter der Woche | Bis 15 Prozent unter den Voraussetzungen der Ziffer 3.3; bloße Wochenend- oder Ferienaufenthalte genügen nicht. |
| Wohnung in einem in Anlage 3 ausdrücklich aufgeführten Stadtteil | Bis 10 Prozent; nicht pauschal für den gesamten Bezirk oder jeden Stadtteil. |

Die Zuschläge der Ziffern 3.2 bis 3.4 können unter den jeweiligen Voraussetzungen nebeneinander auftreten und werden jeweils vom Grundwert berechnet. Der Zuschlag nach Ziffer 3.1 wird nicht neben anderen Zuschlägen gewährt. Die Prüfung betrifft die konkrete Bedarfs- beziehungsweise Einsatzgemeinschaft; ein einzelner Zuschlag nach Ziffer 3.2 wird nicht mehrfach gewährt.

Wichtig für Bergedorf: Bezirk und amtlicher Stadtteil sind zu unterscheiden. Der Stadtteil Bergedorf selbst steht nicht in Anlage 3. Aus dem Bezirk gehören dort unter anderem Allermöhe, Altengamme, Kirchwerder, Neuengamme, Ochsenwerder, Reitbrook, Spadenland und Tatenberg dazu. Maßgeblich ist die vollständige amtliche Anlage, nicht eine pauschale Bezirkszuordnung.

Die besonderen Flächenwerte 50/60/75/90/105/120 Quadratmeter und zusätzlich 15 Quadratmeter je weiterer Person betreffen nach Ziffer 2.1 bestimmte Wohnungen des 1. Förderwegs. Für andere Wohnungen folgt daraus keine allgemeine starre Wohnflächenhöchstgrenze. Bei besonderem Bedarf enthalten diese Förderwohnungsregeln zusätzliche Flächenmöglichkeiten; maßgeblich sind die konkrete Wohnungsart und Berechtigung.

Quellen: Hamburger Fachanweisung SGB II, Ziffern 2.1 und 3 sowie Anlage 3; eigene SGB-XII-Arbeitshilfe, entsprechende Abschnitte. Beide Stand 22. Mai 2026. Zuschläge ändern nicht eigenständig die bundesgesetzlichen Karenzzeitvoraussetzungen.
""")
setbody(37,body(37)+"""\n\n### **Karenzzeit im SGB XII eigenständig berechnen**

§ 35 Absatz 1 SGB XII beginnt die einjährige Karenzzeit mit dem Monat des erstmaligen Leistungsbezugs. Volle Monate einer Unterbrechung verlängern sie. Eine neue Karenzzeit setzt grundsätzlich drei Jahre ohne Leistungen nach den dort bezeichneten Kapiteln des SGB XII oder nach dem SGB II voraus. Bei SGB-II-Bezug in den letzten zwei Jahren vor Leistungen nach dem Dritten oder Vierten Kapitel wird bereits verbrauchte SGB-II-Karenzzeit nach der gesetzlichen Vorgabe berücksichtigt. Ein Wechsel des Leistungsträgers eröffnet daher nicht automatisch ein vollständig neues Schutzjahr.
""")
setbody(35,body(35)+"""\n\n### **Frist und wirksame Einlegung**

Die Klagefrist beträgt nach einem Widerspruchsverfahren grundsätzlich einen Monat nach Bekanntgabe des Widerspruchsbescheids (§ 87 SGG). Bei Bekanntgabe im Ausland gelten grundsätzlich drei Monate. Fehlt eine ordnungsgemäße Rechtsbehelfsbelehrung, ist § 66 SGG maßgeblich; dort ist grundsätzlich eine Jahresfrist geregelt. Für die konkrete Fristberechnung sind Bekanntgabe und die gesetzlichen Einzelregelungen zu prüfen.

Ein gewöhnlicher E-Mail-Text erfüllt die gesetzlich vorgeschriebene Form eines Widerspruchs nicht automatisch. § 84 SGG nennt schriftliche, zugelassene elektronische beziehungsweise schriftformersetzende Wege und die Einlegung zur Niederschrift. Bei knapper Frist einen nachweisbar zulässigen Übermittlungsweg verwenden. Bei Mietrückständen oder drohendem Wohnungsverlust ist zusätzlich die Eilbedürftigkeit zu prüfen.
""")
tail=tail.replace('SGB II, SGB X und SGG','SGB II, SGB XII, SGB X und SGG')
# Parser outputs React blocks rather than evaluating HTML from source documents.
def blocks(md):
 lines=md.strip().splitlines();out=[];i=0
 while i<len(lines):
  line=lines[i].strip()
  if not line or line=='---':i+=1;continue
  if line.startswith('|'):
   rows=[]
   while i<len(lines)and lines[i].strip().startswith('|'):
    cells=[c.strip()for c in lines[i].strip().strip('|').split('|')]
    if not all(re.fullmatch(r':?-+:?',c.replace(' ',''))for c in cells):rows.append(cells)
    i+=1
   out.append({'type':'table','rows':rows});continue
  h=re.match(r'^(#{1,6})\s+(.*)',line)
  if h:out.append({'type':'heading','level':len(h[1]),'text':h[2]});i+=1;continue
  listmatch=re.match(r'^(?:[-*]|\d+\\?\.)\s+(.+)',line)
  if listmatch:
   kind='ol'if re.match(r'^\d',line)else'ul';values=[]
   while i<len(lines):
    m=re.match(r'^(?:[-*]|\d+\\?\.)\s+(.+)',lines[i].strip())
    if not m:break
    values.append(m[1]);i+=1
   out.append({'type':kind,'items':values});continue
  buf=[line];i+=1
  while i<len(lines)and lines[i].strip()and not re.match(r'^(?:#|\||[-*] |\d+\\?\. )',lines[i].strip()):buf.append(lines[i].strip());i+=1
  out.append({'type':'p','text':' '.join(buf)})
 return out
for s in sections.values():s['blocks']=blocks(s['markdown'])
obj={'checked':'2026-11-19','sourceDate':'2026-11-18','intro':blocks(intro),'sections':[{k:v for k,v in s.items()if k!='markdown'}for s in sections.values()],'bridges':{str(k):blocks(v)for k,v in bridges.items()},'tail':blocks(tail),'changes':mat}
(ROOT/'frontend/lib/rent-guide-data.json').write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n')
(ROOT/'docs/mietkosten/ratgeber-zusammengefuehrt.md').write_text(intro+'\n\n'+'\n\n'.join('## '+str(n)+'. '+s['title']+'\n\n'+s['markdown']for n,s in sections.items())+'\n\n'+tail+'\n')
(ROOT/'docs/mietkosten/zuordnung-51-33.json').write_text(json.dumps({'sections':[{'number':s['number'],'title':s['title'],'href':'#mietkosten/abschnitt/'+str(s['number'])}for s in sections.values()],'changes':mat},ensure_ascii=False,indent=2)+'\n')
print('51 Abschnitte, 33 Änderungen assembliert; zusätzliche rechtliche Korrekturen angewandt.')
