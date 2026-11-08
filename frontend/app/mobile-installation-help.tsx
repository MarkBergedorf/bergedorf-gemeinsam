'use client';
import {useId,useRef,useState} from 'react';
import {IphoneBrowserHelp} from './iphone-browser-help';
import {androidBrowserChoices,copyInstallationAddress,detectIphoneBrowser,detectMobileInstallation,iphoneBrowserChoices,installationSources,mobileInstallationChoices,publicWebsiteAddress} from '../lib/mobile-installation.mjs';

function ShareSymbol(){return <svg className="install-help-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M8 8H5v13h14V8h-3M12 15V2M8 6l4-4 4 4"/></svg>}
function MoreSymbol(){return <span className="install-help-symbol install-menu-symbol" aria-hidden="true">⋯</span>}
function Source({href,children}:{href:string,children:React.ReactNode}){return <a href={href} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">{children} ↗</a>}

export function MobileInstallationHelp({onClose}:{onClose:()=>void}){
 const id=useId(),address=useRef<HTMLInputElement>(null);
 const [detected]=useState(()=>detectMobileInstallation(typeof navigator==='undefined'?'':navigator.userAgent,typeof navigator==='undefined'?0:navigator.maxTouchPoints));
 const [choice,setChoice]=useState(detected.choice),[browser,setBrowser]=useState(detected.browser),[copyStatus,setCopyStatus]=useState('');
 const [iphoneBrowser,setIphoneBrowser]=useState(()=>detectIphoneBrowser(typeof navigator==='undefined'?'':navigator.userAgent,typeof navigator==='undefined'?0:navigator.maxTouchPoints));
 async function copyAddress(){try{await copyInstallationAddress(navigator.clipboard);setCopyStatus('Websiteadresse kopiert. Sie können sie im gewünschten Browser einfügen.')}catch{address.current?.focus();address.current?.select();setCopyStatus('Automatisches Kopieren ist hier nicht möglich. Die Adresse ist markiert. Halten Sie die Markierung gedrückt und wählen Sie „Kopieren“.')}}
 return <section className="mobile-install-help" aria-labelledby={id+'-title'}>
  <h2 id={id+'-title'}>Web-App-Installationsanleitung</h2>
  <p>{detected.choice?'Die Vorauswahl beruht auf der Browserkennung. Bitte prüfen und bei Bedarf ändern.':'Gerät oder Browser nicht eindeutig erkannt. Bitte wählen Sie die passende Anleitung.'}</p>
  <label htmlFor={id+'-device'}>Smartphone und Browser</label>
  <select id={id+'-device'} value={choice} onChange={e=>setChoice(e.target.value)}><option value="" disabled>Bitte auswählen</option>{mobileInstallationChoices.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select>
  {choice==='iphone-other'&&<><label htmlFor={id+'-iphone-browser'}>Welchen iPhone-Browser verwenden Sie?</label><select id={id+'-iphone-browser'} value={iphoneBrowser} onChange={e=>setIphoneBrowser(e.target.value)}>{iphoneBrowserChoices.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></>}
  {choice==='android-other'&&<><label htmlFor={id+'-browser'}>Welchen Android-Browser verwenden Sie?</label><select id={id+'-browser'} value={browser} onChange={e=>setBrowser(e.target.value)}>{androidBrowserChoices.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></>}
  <div className="install-help-address"><label htmlFor={id+'-address'}>Öffentliche Websiteadresse</label><input ref={address} id={id+'-address'} value={publicWebsiteAddress} readOnly autoCapitalize="none" spellCheck={false}/><button type="button" className="outline" onClick={copyAddress}>Websiteadresse kopieren</button><p role="status" aria-live="polite">{copyStatus}</p></div>

  {choice==='iphone-safari'&&<div className="install-help-guide"><h3>iPhone mit Safari</h3><ol>
   <li><h4>Website in Safari öffnen</h4><p>Öffnen Sie die Adresse oben direkt in Safari. Kommen Sie aus WhatsApp oder einem anderen Browser, kopieren Sie die Adresse, öffnen Sie Safari und fügen Sie sie dort in die Adressleiste ein.</p></li>
   <li><h4>Teilen-Funktion finden</h4><p><ShareSymbol/> <strong>Teilen direkt sichtbar:</strong> Tippen Sie auf das Quadrat mit dem Pfeil nach oben. Es kann je nach Layout oben oder unten stehen.</p><p><MoreSymbol/> <strong>Kompaktes Layout:</strong> Öffnen Sie zuerst „Mehr“ beziehungsweise „Seitenmenü“ und wählen Sie dann „Teilen“ <ShareSymbol/>.</p></li>
   <li><h4>Zum Home-Bildschirm hinzufügen</h4><p>Scrollen Sie in der Teilen-Ansicht nach unten und wählen Sie „Zu Home-Bildschirm hinzufügen“. Fehlt der Eintrag, scrollen Sie ans Ende, öffnen Sie „Aktionen bearbeiten“ und ergänzen Sie „Zu Home-Bildschirm hinzufügen“.</p></li>
   <li><h4>Hinzufügen bestätigen</h4><p>Falls angeboten, aktivieren Sie „Als Web-App öffnen“. Tippen Sie anschließend auf „Hinzufügen“. Danach erscheint das Symbol von „Bergedorf gemeinsam“ auf Ihrem Home-Bildschirm.</p></li>
  </ol><p><Source href={installationSources.apple}>Offizielle Safari-Anleitung von Apple</Source></p></div>}

  {choice==='iphone-other'&&<IphoneBrowserHelp browser={iphoneBrowser} onSafari={()=>setChoice('iphone-safari')}/>}

  {choice==='android-chrome'&&<div className="install-help-guide"><h3>Android mit Google Chrome</h3><ol>
   <li><h4>Website in Chrome öffnen</h4><p>Öffnen Sie die Adresse oben direkt in Google Chrome. Falls die Seite in einer anderen App geöffnet ist, kopieren Sie die Adresse und fügen Sie sie in Chrome ein.</p></li>
   <li><h4>Browsermenü öffnen</h4><p><MoreSymbol/> Tippen Sie auf die drei Punkte neben der Adressleiste.</p></li>
   <li><h4>Installationsfunktion wählen</h4><p>Wählen Sie „Installieren und Verknüpfung erstellen“ und anschließend „Installieren“. Je nach Version kann das Menü stattdessen „App installieren“ oder „Zum Startbildschirm hinzufügen“ anbieten. Folgen Sie der bei Ihnen angezeigten Auswahl.</p></li>
   <li><h4>Bestätigen</h4><p>Bestätigen Sie den vom Browser angezeigten Dialog. Wird lediglich „Verknüpfung erstellen“ angeboten, können Sie diese mit „Hinzufügen“ auf dem Startbildschirm ablegen; sie öffnet die Website im Browser.</p></li>
  </ol><p>Eine fehlende Installationsoption verhindert die normale Nutzung der Website im Browser nicht.</p><p><Source href={installationSources.chrome}>Google: Web-App in Chrome installieren</Source><br/><Source href={installationSources.chromeShortcut}>Google: Startbildschirm-Verknüpfung erstellen</Source></p></div>}

  {choice==='android-other'&&<div className="install-help-guide">
   {browser==='firefox'?<><h3>Android mit Firefox</h3><ol><li>Öffnen Sie die Websiteadresse oben in Firefox für Android.</li><li><MoreSymbol/> Öffnen Sie das Drei-Punkte-Menü.</li><li>Falls angeboten, wählen Sie „Installieren“. Im Dialog „Zum Startbildschirm hinzufügen?“ können Sie „Automatisch hinzufügen“ wählen oder das Symbol an die gewünschte Stelle ziehen.</li></ol><p>Fehlt diese Option in Ihrer Version, verwenden Sie bitte die offizielle Firefox-Hilfe. Die Verknüpfungen auf der Firefox-Startseite sind nicht der Startbildschirm Ihres Smartphones.</p><p><Source href={installationSources.firefox}>Mozilla: Web-Apps in Firefox für Android</Source></p></>:
    <><h3>{browser==='samsung'?'Android mit Samsung Internet':browser==='edge'?'Android mit Microsoft Edge':'Android mit einem anderen Browser'}</h3><p>Die verfügbaren Installationsfunktionen und Menünamen hängen vom Browser und seiner Version ab. Verwenden Sie für die passende Menüführung die offizielle Browser-Hilfe:</p><p>{browser==='samsung'?<Source href={installationSources.samsung}>Samsung: Hilfe zu Samsung Internet</Source>:browser==='edge'?<Source href={installationSources.edge}>Microsoft: Hilfe für die Edge-App</Source>:<>Wählen Sie Ihren Browser oben aus oder verwenden Sie die Chrome-Anleitung nach einem Browserwechsel.</>}</p><ol><li>Die Websiteadresse oben kopieren.</li><li>Google Chrome öffnen, sofern auf Ihrem Gerät vorhanden, und die Adresse einfügen.</li><li>Hier „Android – Google Chrome“ wählen und den Schritten folgen.</li></ol></>}
   <button type="button" className="outline" onClick={()=>setChoice('android-chrome')}>Chrome-Anleitung anzeigen</button>
  </div>}
  <button type="button" className="text-button" onClick={onClose}>Installationsanleitung schließen</button>
 </section>
}
