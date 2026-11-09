'use client';
import type {ReactNode} from 'react';
import {installationSources,iphoneInstallationSources} from '../lib/mobile-installation.mjs';
function Source({href,children}:{href:string,children:ReactNode}){return <a href={href} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">{children} ↗</a>}
function ShareSymbol(){return <svg className="install-help-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M8 8H5v13h14V8h-3M12 15V2M8 6l4-4 4 4"/></svg>}
export function IphoneBrowserHelp({browser,onSafari}:{browser:string,onSafari:()=>void}){
 return <div className="install-help-guide">
  {browser==='chrome'?<><h3>iPhone mit Google Chrome</h3><ol>
   <li>Öffnen Sie die Websiteadresse oben direkt in Google Chrome.</li>
   <li><ShareSymbol/> Tippen Sie rechts neben der Adressleiste auf „Teilen“.</li>
   <li>Wählen Sie „Zum Startbildschirm hinzufügen“.</li>
   <li>Prüfen Sie Namen und Angaben zur Website und bestätigen Sie mit „Hinzufügen“.</li>
  </ol><p><a href="googlechromes://markbergedorf.github.io/bergedorf-gemeinsam/">Google Chrome öffnen</a></p><p><Source href={iphoneInstallationSources.chrome}>Google: Verknüpfungen auf iPhone und iPad</Source></p></>:
  browser==='firefox'?<><h3>iPhone mit Mozilla Firefox</h3><ol>
   <li>Öffnen Sie die Websiteadresse oben direkt in Firefox für iOS.</li>
   <li><ShareSymbol/> Tippen Sie in der Adressleiste auf das Teilen-Symbol.</li>
   <li>Wählen Sie im Teilen-Menü „Zum Startbildschirm hinzufügen“.</li>
   <li>Prüfen Sie den vorgeschlagenen Namen und tippen Sie oben rechts auf „Hinzufügen“.</li>
  </ol><p><a href="firefox://open-url?url=https%3A%2F%2Fmarkbergedorf.github.io%2Fbergedorf-gemeinsam%2F">Mozilla Firefox öffnen</a></p><p><Source href={iphoneInstallationSources.firefox}>Mozilla: Webseiten-Verknüpfung mit Firefox für iOS</Source></p></>:
  browser==='edge'?<><h3>iPhone mit Microsoft Edge</h3><p>Unterstützende iPhone-Browser können Websites über die Teilen-Funktion zum Home-Bildschirm hinzufügen. Für Edge ist die genaue aktuelle iPhone-Menüführung in den geprüften Microsoft-Hinweisen nicht ausreichend beschrieben.</p><ol>
   <li>Öffnen Sie die Websiteadresse oben direkt in Edge.</li>
   <li>Prüfen Sie die verfügbare Funktion in Ihrer Edge-Version anhand der offiziellen Hilfe. Eine bestimmte Menüfolge oder erfolgreiche Installation können wir hierfür nicht zusichern.</li>
   <li>Ist kein passender Weg verfügbar, können Sie die Safari-Alternative unten nutzen.</li>
  </ol><p><a href="microsoft-edge-https://markbergedorf.github.io/bergedorf-gemeinsam/">Microsoft Edge öffnen</a></p><p><Source href={iphoneInstallationSources.edge}>Microsoft: Offizielle Hilfe für die Edge-App</Source></p></>:
  <><h3>iPhone mit einem sonstigen Browser</h3><ol>
   <li>Öffnen Sie die Websiteadresse oben direkt im gewünschten Browser.</li>
   <li>Prüfen Sie im Browsermenü oder in der Teilen-Ansicht, ob eine Funktion zum Hinzufügen zum Home-Bildschirm angeboten wird.</li>
   <li>Falls vorhanden, folgen Sie dem angezeigten Dialog. Bestätigen Sie erst nach Prüfung der Websiteadresse und des Namens.</li>
  </ol><p>Die Installationsmöglichkeiten hängen vom Browser und seiner Version ab. Die Funktion ist nicht für jeden Browser zugesichert. Fehlt sie, können Sie die Safari-Alternative unten verwenden.</p></>}
  <p>Fehlt der genannte Eintrag in Ihrer Version, nutzen Sie die offizielle Browser-Hilfe oder die Safari-Alternative. Ab iOS 16.4 können auch andere Browser das Hinzufügen zum Home-Bildschirm anbieten.</p>
  <p><strong>Web-App oder Verknüpfung?</strong> Eine Verknüpfung öffnet die Website im Browser. Eine Web-App öffnet sie in einem eigenen Fenster. Unsere Website ist für den Web-App-Modus vorbereitet; was eingerichtet wird, hängt von iOS und Browser ab. Falls „Als Web-App öffnen“ angeboten wird, können Sie dies aktivieren. Diese Anleitung löst selbst keine Installation aus und bestätigt keinen Installationserfolg.</p>
  <p><Source href={iphoneInstallationSources.webkit}>Apple WebKit: Home-Bildschirm aus anderen Browsern</Source></p>
  <details><summary>Alternativ über Safari installieren</summary><p>Wenn Ihre App das Öffnen in einem externen Browser anbietet, können Sie dort Safari wählen, sofern angeboten. Andernfalls:</p><ol><li>Mit „Websiteadresse kopieren“ die Adresse oben kopieren.</li><li>Safari auf Ihrem iPhone öffnen.</li><li>Die Adresse in die Adressleiste einfügen und öffnen.</li><li>In Safari diese Installationshilfe öffnen und „iPhone – Safari“ auswählen.</li></ol><button type="button" className="outline" onClick={onSafari}>Safari-Anleitung anzeigen</button><p>Diese Schaltfläche zeigt die Schritte hier an; sie öffnet Safari nicht automatisch.</p><p><Source href={installationSources.apple}>Offizielle Safari-Anleitung von Apple</Source></p></details>
 </div>
}
