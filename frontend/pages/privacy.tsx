import React from 'react';
import {firebaseAuthConfigured} from '../app/firebase-auth';
import './privacy.css';

const sections=[
 ['verantwortlicher','Verantwortlicher und Kontakt'],
 ['geltungsbereich','Geltungsbereich und Nutzung'],
 ['hosting','Hosting durch GitHub Pages'],
 ['firebase','Benutzerkonto und Firebase Authentication'],
 ['browserdaten','Lokale Browserdaten und Einstellungen'],
 ['karten','Karten und externe Kartendienste'],
 ['externe-links','Externe Links und amtliche Informationsangebote'],
 ['email','Kontaktaufnahme per E-Mail'],
 ['stoerungen','Meldung technischer Störungen'],
 ['lokale-meldungen','Lokal vorbereitete Meldungen und Foto-Rechteerklärungen'],
 ['redaktion','Redaktionelle Inhalte und Einrichtungsangaben'],
 ['deaktivierte-funktionen','Derzeit deaktivierte Beteiligungs- und Petitionsfunktionen'],
 ['finanzen','Finanztransparenz und externe Unterstützungsangebote'],
 ['empfaenger','Empfänger und internationale Datenübermittlungen'],
 ['speicherfristen','Speicher- und Löschfristen'],
 ['rechte','Ihre Betroffenenrechte'],
 ['aufsicht','Beschwerderecht und Datenschutzaufsicht'],
 ['aktualisierung','Aktualisierungsstand'],
] as const;

const ExternalLink=({href,children}:{href:string;children:React.ReactNode})=><a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;

export function PagesPrivacy(){return <>
  <p>Diese Hinweise beschreiben die aktuell erreichbare öffentliche Website. Öffentliche Inhalte sind ohne Benutzerkonto zugänglich. Ein Konto ist freiwillig und schaltet keine Schreib-, Moderations- oder Verwaltungsrechte frei.</p>
  <nav className="privacy-toc" aria-label="Inhaltsverzeichnis der Datenschutzerklärung"><h2>Inhaltsverzeichnis</h2><ol>{sections.map(([id,title])=><li key={id}><a href={`#datenschutz-${id}`}>{title}</a></li>)}</ol></nav>

  <section id="datenschutz-verantwortlicher"><h2>1. Verantwortlicher und Kontakt</h2>
    <address>Mark Petersen<br/>Fritz-Lindemann-Weg 3 A<br/>21031 Hamburg<br/><a href="mailto:bergedorf.gemeinsam@outlook.de">bergedorf.gemeinsam@outlook.de</a></address>
    <p>Sie können Datenschutzanliegen an diese Kontaktadresse richten. Dafür benötigen Sie kein Plattformkonto.</p>
  </section>

  <section id="datenschutz-geltungsbereich"><h2>2. Geltungsbereich und Nutzung</h2>
    <p>Diese Erklärung gilt für die öffentliche Website „Bergedorf gemeinsam“ unter <ExternalLink href="https://markbergedorf.github.io/bergedorf-gemeinsam/">markbergedorf.github.io/bergedorf-gemeinsam/</ExternalLink>. Eine gesonderte private Arbeitsfassung ist davon zu unterscheiden.</p>
    <p>Die Website stellt statische redaktionelle Inhalte bereit. Es gibt keine angeschlossene Datenbank für öffentliche Beiträge, Kommentare, Reaktionen, Petitionen oder Arbeitsgruppen. Angaben, die ein Formular lokal vorbereitet, werden nicht an einen Website-Server gesendet. Technische Abrufe, freiwillige Kartenaufrufe, Kontonutzung und E-Mail-Kontakt werden in den folgenden Abschnitten beschrieben. Die Website nimmt keine automatische Standortbestimmung vor.</p>
  </section>

  <section id="datenschutz-hosting"><h2>3. Hosting durch GitHub Pages</h2>
    <p>Die Website wird als statische Seite über GitHub Pages ausgeliefert. GitHub protokolliert bei einem Besuch die IP-Adresse zu Sicherheitszwecken, auch wenn Sie nicht bei GitHub angemeldet sind. Für die Auslieferung werden außerdem technische Verbindungsdaten verarbeitet, insbesondere die angeforderte Datei und Browserinformationen. Ohne diese Daten kann die Website nicht übertragen werden.</p>
    <p>Die Bereitstellung und Sicherheit der Website liegen in unserem berechtigten Interesse (Art. 6 Abs. 1 Buchst. f DSGVO). GitHub nennt GitHub, Inc. in den USA und GitHub B.V. in den Niederlanden als Rechtsträger seiner Dienste. GitHub beschreibt Verarbeitungen in verschiedenen Ländern, darunter den USA, und nennt Standardvertragsklauseln sowie seine Teilnahme am EU-US-, UK- und Schweiz-US-Datenschutzrahmen. Im US-Handelsministerium-Register ist GitHub als Teilnehmer für Nicht-Personalverwaltungsdaten aufgeführt. Diese Anbieterangaben beschreiben die Transferinstrumente; sie bestätigen keine ausschließliche Speicherung in der EU.</p>
    <p>Eine feste Frist für Besucher-IP-Protokolle dieser GitHub-Pages-Seite ist in den geprüften allgemeinen Anbieterinformationen nicht angegeben. GitHub nennt Zweck, gesetzliche Pflichten, Streitbeilegung und Durchsetzung von Vereinbarungen als Kriterien für die Aufbewahrung.</p>
    <p><ExternalLink href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection">GitHub Pages: Datenerhebung</ExternalLink> · <ExternalLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub: Datenschutz und internationale Übermittlungen</ExternalLink> · <ExternalLink href="https://www.dataprivacyframework.gov/participant/6174">US-Handelsministerium: GitHub im Data Privacy Framework Register</ExternalLink></p>
  </section>

  <section id="datenschutz-firebase"><h2>4. Benutzerkonto und Firebase Authentication</h2>
    {firebaseAuthConfigured?<>
      <p>Die freiwillige Kontoanmeldung verwendet Firebase Authentication von Google LLC. Privatpersonen können einen passwortlosen E-Mail-Link oder E-Mail-Adresse und Passwort nutzen; Organisationskonten melden sich mit E-Mail-Adresse und Passwort an. Eine Anmeldung mit Google wird auf dieser Website nicht angeboten. Öffentliche Inhalte bleiben ohne Konto lesbar.</p>
      <p>Bei Kontoregistrierung und Anmeldung verarbeitet Firebase die E-Mail-Adresse, Anmelde- und Bestätigungsdaten sowie je nach gewähltem Verfahren das Passwort oder den angeforderten Link. Für Sicherheit und Missbrauchsschutz verarbeitet Firebase außerdem IP-Adressen und Browserkennungen. Google gibt an, dass Firebase Authentication ausschließlich in US-Rechenzentren betrieben wird. Google LLC ist im EU-US Data Privacy Framework für Nicht-Personalverwaltungsdaten als aktiv aufgeführt. Firebase ordnet Authentication den Google-Cloud-Plattformbedingungen zu; die zugehörigen Datenschutzbedingungen regeln Googles Verarbeitung im Auftrag. <ExternalLink href="https://firebase.google.com/support/privacy">Firebase: Datenschutz, Verarbeitungsorte und Speicherfristen</ExternalLink> · <ExternalLink href="https://firebase.google.com/terms">Firebase: Dienstbedingungen</ExternalLink> · <ExternalLink href="https://cloud.google.com/terms/data-processing-addendum">Google Cloud: Datenschutz-Addendum</ExternalLink> · <ExternalLink href="https://www.dataprivacyframework.gov/participant/5780">US-Handelsministerium: Google LLC im Data Privacy Framework Register</ExternalLink></p>
      <p>Vor dem Öffnen des Anmeldedienstes zeigt die Website einen Hinweis zur Datenverarbeitung. Die Registrierung und der passwortlose Kontozugang erfordern eine zusätzliche Bestätigung. Firebase wird erst nach dem ausdrücklichen Öffnen des Dienstes initialisiert. Diese Bestätigungen werden nicht in einem serverseitigen Einwilligungsprotokoll mit Textversion und Zeitstempel gespeichert. Daher ist ein dauerhafter, vom Betreiber geführter Nachweis des konkreten Einwilligungsvorgangs derzeit nicht eingerichtet. Die rechtliche Bewertung und ein geeigneter Nachweisprozess sind noch offen.</p>
      <p>Die Anmeldung bleibt standardmäßig auf die aktuelle Browser-Registerkarte beschränkt. Nur wenn Sie „Auf diesem Gerät angemeldet bleiben“ auswählen, kann Firebase die Anmeldung geräte- und browserlokal bis zur Abmeldung speichern. Auf gemeinsam genutzten Geräten sollte diese Auswahl nicht verwendet werden. Passwörter werden nicht auf einem Website-Server gespeichert. Die Anwendung hat keine eigene Firebase-Datenbank; ein Konto verleiht keine Teilnahme-, Veröffentlichungs-, Moderations- oder Verwaltungsrechte.</p>
      <p>Sie können sich abmelden oder Ihr Konto über die Kontoseite löschen. Weitere Datenschutzrechte können Sie auch ohne Anmeldung per E-Mail ausüben. Firebase gibt an, Authentifizierungs-IP-Protokolle einige Wochen zu speichern und sonstige Authentifizierungsdaten nach Anforderung der Kontolöschung innerhalb von bis zu 180 Tagen aus aktiven Systemen und Sicherungen zu entfernen. Das sind Anbieterangaben; eine eigene Kontrolle aller Google-Systeme ist nicht möglich.</p>
    </>:<p>In dieser technischen Testfassung ist Firebase nicht konfiguriert. Anmeldung und Registrierung sind dort nicht aktiviert.</p>}
  </section>

  <section id="datenschutz-browserdaten"><h2>5. Lokale Browserdaten und Einstellungen</h2>
    <p>Die Anwendung speichert einzelne Bedienzustände wie Scrollposition, Kartenmittelpunkt, Zoomstufe, ausgewählte Filter oder die Kartenfreigabe lokal im Browser beziehungsweise im Browserverlauf. Sitzungsbezogene Werte liegen im Sitzungsspeicher. Die Option „Auf diesem Gerät angemeldet bleiben“ verwendet für die Authentifizierung lokale Browserspeicherung. Such- und Filterwerte können im Teil der Adresse nach dem Zeichen # stehen; dieser Fragmentteil wird beim üblichen HTTP-Abruf nicht an den Hostingserver übermittelt.</p>
    <p>Die Werte dienen der von Ihnen gewählten Darstellung und Navigation. Sie werden nicht als Nutzerprofil an ein Website-Backend gesendet. Die Browserwiederherstellung kann Sitzungsdaten erhalten; deshalb wird keine sofortige Löschung sämtlicher Werte beim Schließen zugesagt. Website-Daten und Verlauf lassen sich über die Einstellungen Ihres Browsers löschen. Sitzungsspeicher und Verlauf sind keine Cookies.</p>
  </section>

  <section id="datenschutz-karten"><h2>6. Karten und externe Kartendienste</h2>
    <p>Interaktive Organisations-, Verzeichnis-, Geschichts- und Standortkarten verwenden OpenFreeMap mit OpenMapTiles- und OpenStreetMap-Daten. Eine Karte wird erst nach einer gesonderten Zustimmung für den jeweiligen Kartenbereich geladen. Sie können ablehnen; die zugehörigen Listen bleiben ohne Kartenfreigabe nutzbar. Organisations- und Geschichtskarten haben getrennte Freigaben. Mit „Karte entladen“ widerrufen Sie die Freigabe für den betroffenen Bereich und entfernen die Kartenebene. Bereits übermittelte Daten oder Anbieterprotokolle werden dadurch nicht zurückgeholt oder rückwirkend gelöscht.</p>
    <p>Beim Laden erhält der Kartendienst die dafür notwendigen Verbindungsdaten und den angefragten Kartenausschnitt. OpenFreeMap nennt reguläre Zugriffsprotokolle ohne IP-Adresse, eine Löschung nach sieben Tagen sowie höchstens 30 Tage für IP-Protokolle bei Sicherheitsvorfällen. Der Anbieter nennt Cloudflare als Auslieferungsdienst; Cloudflare kann technische Verbindungsdaten einschließlich IP-Adressen verarbeiten. Anbieterangaben zu OpenFreeMap beschreiben nicht automatisch Cloudflare-Protokolle oder Sicherungskopien. Es erfolgt keine automatische Standortbestimmung und es werden keine Texte aus Formularen an den Kartendienst gesendet.</p>
    <p>Die Freigabe der Kartenabrufe beruht auf Ihrer Einwilligung. Die Website speichert die Auswahl für die laufende Sitzung lokal und führt dafür keine Tracking-Cookies ein. Die Karten können durch Wechsel innerhalb der Website genutzt werden, bis die Freigabe widerrufen oder die Sitzung beendet wird. Kartensoftware, Kartenstil und Bezirksgrenzen werden aus den Website-Dateien geladen. OpenStreetMap-Mitwirkende werden als Datenquelle genannt.</p>
    <p><ExternalLink href="https://openfreemap.org/privacy/">OpenFreeMap: Datenschutz</ExternalLink> · <ExternalLink href="https://openfreemap.org/tos/">OpenFreeMap: Nutzungsbedingungen</ExternalLink> · <ExternalLink href="https://www.cloudflare.com/privacypolicy/">Cloudflare: Datenschutz</ExternalLink> · <ExternalLink href="https://www.openstreetmap.org/copyright">OpenStreetMap: Urheberrecht und Datenquelle</ExternalLink></p>
  </section>

  <section id="datenschutz-externe-links"><h2>7. Externe Links und amtliche Informationsangebote</h2>
    <p>Externe Links öffnen eigenständige Websites. Erst wenn Sie einen solchen Link auswählen, wird eine Verbindung zum jeweiligen Anbieter hergestellt; dieser verarbeitet dann technische Verbindungsdaten nach seinen eigenen Hinweisen.</p>
    <p>Die Schaltfläche zum Öffnen einer Satellitenansicht in Google Maps zeigt vorher ein eigenes Hinweisfenster. „Ablehnen“, Schließen oder Escape öffnet den Dienst nicht. Bei „Zustimmen“ wird Google Maps in einem neuen Tab oder – abhängig vom Gerät – in einer App geöffnet. Dabei werden der ausgewählte Kartenmittelpunkt und eine passende Zoomstufe im Link übermittelt. Es wird keine Google-Karte auf dieser Website eingebettet und keine dauerhafte Google-Freigabe gespeichert. Die Bestätigung betrifft nur das Öffnen und ersetzt keine erforderliche Einwilligung oder Datenschutzeinstellung beim externen Anbieter.</p>
    <p>Der amtliche Sitzungskalender des Bezirksamts Bergedorf wird ebenfalls nicht eingebettet. Beim Öffnen rufen Sie dessen eigenständige Website auf. Bei einer früheren Prüfung setzte diese externe Kalenderseite ein Sitzungscookie. Für Zweck und Speicherdauer ist deren Betreiber verantwortlich; unsere Linkbestätigung ist keine allgemeine Einwilligung für externe Websites.</p>
    <p><ExternalLink href="https://policies.google.com/privacy?hl=de">Google: Datenschutzerklärung</ExternalLink> · <ExternalLink href="https://sitzungsdienst-bergedorf.hamburg.de/bi/si010_e.asp">Amtlicher Sitzungskalender</ExternalLink></p>
  </section>

  <section id="datenschutz-email"><h2>8. Kontaktaufnahme per E-Mail</h2>
    <p>Wenn Sie an <a href="mailto:bergedorf.gemeinsam@outlook.de">bergedorf.gemeinsam@outlook.de</a> schreiben, verarbeiten wir Ihre Absenderadresse, Nachrichteninhalte, technische Nachrichtenangaben und mitgesendete Anhänge, um Ihr Anliegen zu bearbeiten. Bitte senden Sie nur Angaben, die für Ihre Anfrage erforderlich sind. E-Mails werden nicht automatisch als Bürgerbeiträge veröffentlicht.</p>
    <p>Allgemeine Korrespondenz bearbeiten wir auf Grundlage unseres berechtigten Interesses an der Beantwortung von Anfragen (Art. 6 Abs. 1 Buchst. f DSGVO). Für gesetzlich vorgeschriebene Bearbeitung von Datenschutzanträgen gilt Art. 6 Abs. 1 Buchst. c DSGVO in Verbindung mit Art. 12 ff. DSGVO. Art. 6 Abs. 1 Buchst. b DSGVO kommt nur in Betracht, wenn die konkrete Anfrage einen Vertrag oder vorvertragliche Maßnahmen betrifft.</p>
    <p>Das Projektpostfach wird mit Outlook.com von Microsoft genutzt. Microsoft nennt Microsoft Ireland Operations Limited als Rechtsträger für eigene Verantwortlichkeiten im Europäischen Wirtschaftsraum. Der Anbieter beschreibt internationale Verarbeitung, auch in den USA, und nennt Standardvertragsklauseln sowie das Data Privacy Framework. Eine ausschließlich europäische Speicherung dieses Postfachs wird nicht zugesichert. Ein Microsoft-365-Geschäftskundenvertrag wird nicht als vorhanden vorausgesetzt. <ExternalLink href="https://www.microsoft.com/de-de/privacy/privacystatement">Microsoft: Datenschutz und internationale Verarbeitung</ExternalLink></p>
    <p>Nachrichten werden so lange aufbewahrt, wie sie für die Bearbeitung, erforderliche Rückfragen oder einen konkret begründeten rechtlichen Nachweiszweck benötigt werden. Tatsächlich einschlägige gesetzliche Aufbewahrungspflichten bleiben maßgeblich. Es gibt keine zugesagte pauschale Löschfrist oder automatische Löschung aller Nachrichten.</p>
  </section>

  <section id="datenschutz-stoerungen"><h2>9. Meldung technischer Störungen</h2>
    <p>Die Funktion „Technische Störung melden“ öffnet eine lokale Eingabehilfe. Sie trägt die aktuelle Seitenadresse und einen Zeitvorschlag ein. Gerät, Betriebssystem, Browser, Erweiterungen, Screenshots oder Videos werden nicht automatisch ausgelesen oder aufgenommen. Ihre Eingaben bleiben im Arbeitsspeicher der geöffneten Ansicht und werden nicht an einen Website-Server übertragen. Beim Neuladen oder Verlassen können sie verloren gehen.</p>
    <p>Wenn Sie „Kopieren“ wählen, wird der jeweilige Text in die Zwischenablage geschrieben; die Website liest deren Inhalt nicht aus. Ein mailto-Link öffnet lediglich Ihr E-Mail-Programm mit Empfänger und Betreff, gegebenenfalls auch Nachrichtentext. Es erfolgt kein automatischer Versand. Erst wenn Sie die E-Mail selbst versenden, erhalten wir die mitgeteilten Angaben. Bitte entfernen Sie unnötige Angaben über andere Personen, vertrauliche Inhalte und Zugangsdaten.</p>
  </section>

  <section id="datenschutz-lokale-meldungen"><h2>10. Lokal vorbereitete Meldungen und Foto-Rechteerklärungen</h2>
    <p>Bei der lokalen Eingabehilfe für Meldungen an das Bezirksamt Bergedorf bleiben Problembeschreibung, Ortsangaben, freiwillige Kontaktdaten, bis zu drei Fotos und Angaben für eine Foto-Rechteerklärung ausschließlich im Arbeitsspeicher der geöffneten Ansicht. Es gibt dabei keine Übermittlung, serverseitige Speicherung, automatische Weiterleitung oder öffentliche Veröffentlichung.</p>
    <p>Fotos werden lokal verarbeitet. Für die Druckansicht kann eine skalierte JPEG-Kopie ohne ursprüngliche EXIF- und GPS-Metadaten erstellt werden; sichtbare persönliche Angaben im Bild werden dadurch nicht automatisch entfernt. Erklärungsscans bleiben unverändert und getrennt von Sachverhaltsfotos. Beim Drucken oder Speichern als PDF verlassen die Angaben diese Website und werden auf Ihrem Gerät abgelegt. Eine dort gespeicherte Kopie müssen Sie selbst schützen und bei Bedarf löschen.</p>
    <p>Die Eingabehilfe ist kein produktiver Empfangs- oder Weiterleitungsdienst. Es werden keine Dokumente an das Bezirksamt geschickt. Eine Größen- oder Formatprüfung bestätigt weder Sicherheit noch Unterschrift, Rechteinhaberschaft oder amtliche Zusammenarbeit.</p>
  </section>

  <section id="datenschutz-redaktion"><h2>11. Redaktionelle Inhalte und Einrichtungsangaben</h2>
    <p>Die Website enthält redaktionelle Texte, Angaben zu Einrichtungen, Geschichtsinhalte sowie Literatur- und Quellenhinweise. Orts- und Angebotsangaben werden als redaktionelle Informationen dargestellt; sie sind keine Zusage des Anbieters zu Öffnungszeiten, Zugänglichkeit oder aktuell freien Plätzen. Erfundene Beispiele sind entsprechend gekennzeichnet.</p>
    <p>Die Website veröffentlicht derzeit keine öffentlichen Einreichungen, Kommentare oder Reaktionen. E-Mail-Nachrichten werden nicht automatisch übernommen. Die beschriebenen lokalen Eingabehilfen übertragen keine Texte oder Fotos an die Website.</p>
  </section>

  <section id="datenschutz-deaktivierte-funktionen"><h2>12. Derzeit deaktivierte Beteiligungs- und Petitionsfunktionen</h2>
    <p>Petitionen, Unterstützungslisten, öffentliche Beitragseinreichungen, Kommentare, Reaktionen, digitale Arbeitsgruppen, geschützte Gruppenbereiche und zugehörige Schreib- und Verwaltungsfunktionen sind nicht aktiviert. Die 18 Projektideen im Bereich „Einsamkeit in Bergedorf“ sind statische Informationen; sie sind keine bestehenden Arbeitsgruppen oder Kooperationen und nehmen keine Interessenbekundungen entgegen.</p>
    <p>Vor einer späteren Aktivierung von Funktionen, die personenbezogene Daten erheben oder veröffentlichen, werden die tatsächliche Datenverarbeitung, erforderliche Schutzmaßnahmen und diese Datenschutzhinweise geprüft und angepasst. Es wird keine personenbezogene Arbeitsgruppenverwaltung behauptet.</p>
  </section>

  <section id="datenschutz-finanzen"><h2>13. Finanztransparenz und externe Unterstützungsangebote</h2>
    <p>Eine Zahlungsfunktion, GoFundMe-Anbindung oder Kampagne ist auf dieser Website nicht eingerichtet. Es werden keine Zahlungsdaten erhoben, keine Unterstützerlisten übernommen und keine GoFundMe-Inhalte eingebettet. Ein externer Anbieterlink stellt erst beim Öffnen eine Verbindung zu dessen Website her; dort gelten dessen eigene Datenschutzinformationen.</p>
    <p><ExternalLink href="https://www.gofundme.com/de-de/c/privacy">GoFundMe: Datenschutzinformationen</ExternalLink></p>
  </section>

  <section id="datenschutz-empfaenger"><h2>14. Empfänger und internationale Datenübermittlungen</h2>
    <p>Für die Bereitstellung und optionale Nutzung der Website erhalten die jeweils eingebundenen Anbieter nur die für den konkreten Abruf notwendigen Daten. Dazu gehören GitHub Pages für die Website, Google LLC für Firebase Authentication nach ausdrücklichem Öffnen, OpenFreeMap und dessen Auslieferungsdienst für freigegebene Karten, Microsoft für eingehende und versandte E-Mails sowie ein externer Anbieter, wenn Sie dessen Link öffnen.</p>
    <p>Bei Firebase Authentication erfolgt die Verarbeitung nach Anbieterangabe in den USA. GitHub, Microsoft, Cloudflare und Google beschreiben ebenfalls internationale Datenverarbeitung. Die Anbieterinformationen nennen je nach Dienst Data Privacy Framework und/oder Standardvertragsklauseln. Die konkrete Anwendbarkeit und Reichweite hängt vom jeweiligen Anbieter, Dienst und Datenfluss ab; eine ausschließlich europäische Verarbeitung wird für diese Dienste nicht zugesagt.</p>
  </section>

  <section id="datenschutz-speicherfristen"><h2>15. Speicher- und Löschfristen</h2>
    <p>Die Website führt keine serverseitige Datenbank mit öffentlichen Beiträgen, Kommentaren, Petitionsanmeldungen oder Arbeitsgruppendaten. Lokale Eingaben werden nicht auf einen Website-Server übertragen und gehen beim Verlassen oder Neuladen der Ansicht verloren. Browser kann Sitzungszustände wiederherstellen; Website-Daten und Verlauf können Sie in den Einstellungen des Browsers löschen.</p>
    <p>E-Mail-Nachrichten werden nach Ende des Bearbeitungs- und Rückfragebedarfs gelöscht, soweit kein konkret einschlägiger Nachweis- oder Aufbewahrungsgrund besteht. Für GitHub- und externe Anbietersysteme gelten deren eigene Speicher- und Löschangaben. Firebase Authentication: IP-Protokolle einige Wochen; sonstige Authentifizierungsdaten laut Google bis zu 180 Tage nach Kontolöschung aus aktiven Systemen und Sicherungen. Eine sofortige Löschung aus sämtlichen externen Protokollen oder Sicherungen wird nicht zugesagt.</p>
  </section>

  <section id="datenschutz-rechte"><h2>16. Ihre Betroffenenrechte</h2>
    <ul>
      <li><strong>Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über die Sie betreffenden personenbezogenen Daten und die in Art. 15 genannten Informationen verlangen.</li>
      <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Sie können unrichtige Daten berichtigen und unvollständige Daten vervollständigen lassen.</li>
      <li><strong>Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung verlangen, wenn eine gesetzliche Voraussetzung erfüllt ist.</li>
      <li><strong>Einschränkung (Art. 18 DSGVO):</strong> Sie können unter den gesetzlichen Voraussetzungen eine Einschränkung der Verarbeitung verlangen.</li>
      <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Dieses Recht gilt, wenn die gesetzlichen Voraussetzungen erfüllt sind, insbesondere für bestimmte automatisierte Verarbeitungen auf Grundlage einer Einwilligung oder eines Vertrags.</li>
      <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Gegen eine Verarbeitung auf Grundlage berechtigter Interessen können Sie aus Gründen Ihrer besonderen Situation widersprechen. Bei Direktwerbung wäre ein Widerspruch jederzeit möglich; Direktwerbung wird hier nicht betrieben.</li>
      <li><strong>Widerruf (Art. 7 Abs. 3 DSGVO):</strong> Eine Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.</li>
      <li><strong>Beschwerde (Art. 77 DSGVO):</strong> Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren.</li>
    </ul>
    <p>Richten Sie Ihr Anliegen an die oben genannte E-Mail-Adresse. Ein Benutzerkonto ist nicht erforderlich. Wir beantworten Anträge grundsätzlich innerhalb eines Monats. Bei einer gesetzlich zulässigen Verlängerung informieren wir Sie innerhalb dieser Frist mit Begründung. Eine automatisierte Entscheidung mit rechtlicher oder ähnlich erheblicher Wirkung einschließlich Profiling ist auf dieser Website nicht eingerichtet.</p>
  </section>

  <section id="datenschutz-aufsicht"><h2>17. Beschwerderecht und Datenschutzaufsicht</h2>
    <p>Sie können sich bei einer Aufsichtsbehörde beschweren, insbesondere bei der für Hamburg zuständigen Behörde:</p>
    <address>Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br/>Ludwig-Erhard-Straße 22, 7. Obergeschoss<br/>20459 Hamburg<br/>Telefon: <a href="tel:+4940428544040">040 428 54-4040</a><br/>E-Mail: <a href="mailto:mailbox@datenschutz.hamburg.de">mailbox@datenschutz.hamburg.de</a></address>
    <p><ExternalLink href="https://datenschutz-hamburg.de/">HmbBfDI: offizielle Website</ExternalLink> · <ExternalLink href="https://datenschutz-hamburg.de/service-information/beschwerde-oder-hinweis-einreichen">Beschwerde oder Hinweis einreichen</ExternalLink></p>
  </section>

  <section id="datenschutz-aktualisierung"><h2>18. Aktualisierungsstand</h2>
    <p>Stand: 27. November 2026. Diese Erklärung beschreibt den zu diesem Zeitpunkt tatsächlich vorgesehenen Betrieb der öffentlichen Website. Änderungen an Datenverarbeitungen oder neuen Funktionen können eine Aktualisierung erforderlich machen.</p>
    <p><ExternalLink href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679">Datenschutz-Grundverordnung</ExternalLink> · <ExternalLink href="https://www.gesetze-im-internet.de/ttdsg/__25.html">§ 25 TDDDG</ExternalLink></p>
  </section>
</>}
