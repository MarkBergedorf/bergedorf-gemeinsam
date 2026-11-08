export const publicWebsiteAddress='https://markbergedorf.github.io/bergedorf-gemeinsam/';
export const mobileInstallationChoices=[['iphone-safari','iPhone – Safari'],['iphone-other','iPhone – anderer Browser'],['android-chrome','Android – Google Chrome'],['android-other','Android – anderer Browser']];
export const androidBrowserChoices=[['samsung','Samsung Internet'],['edge','Microsoft Edge'],['firefox','Firefox'],['other','Anderer / unbekannter Browser']];
// Local, best-effort suggestion only. No persistence or network request.
export function detectMobileInstallation(userAgent='',maxTouchPoints=0){
 const inApp=/; wv\)|\bFBAN\b|\bFBAV\b|Instagram|GSA\//i.test(userAgent);
 if(/iPhone|iPad|iPod/.test(userAgent)||/Macintosh/.test(userAgent)&&maxTouchPoints>1){
  const safari=/Version\//.test(userAgent)&&/Safari\//.test(userAgent)&&!inApp&&!/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(userAgent);
  return {choice:safari?'iphone-safari':'iphone-other',browser:'other'};
 }
 if(/Android/.test(userAgent)){
  if(inApp)return {choice:'android-other',browser:'other'};
  if(/SamsungBrowser\//.test(userAgent))return {choice:'android-other',browser:'samsung'};
  if(/EdgA\//.test(userAgent))return {choice:'android-other',browser:'edge'};
  if(/Firefox\//.test(userAgent))return {choice:'android-other',browser:'firefox'};
  if(/Chrome\//.test(userAgent)&&!/OPR\//.test(userAgent))return {choice:'android-chrome',browser:'other'};
  return {choice:'android-other',browser:'other'};
 }
 return {choice:'',browser:'other'};
}
export const installationSources={
 apple:'https://support.apple.com/de-de/guide/iphone/iphea86e5236/ios',
 chrome:'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=de',
 chromeShortcut:'https://support.google.com/chrome/answer/15085120?co=GENIE.Platform%3DAndroid&hl=de-DE',
 firefox:'https://support.mozilla.org/de/kb/verwendung-von%20web-apps-in-firefox-fur-android',
 samsung:'https://www.samsung.com/de/support/apps-services/wie-nutze-ich-samsung-internet/',
 edge:'https://support.microsoft.com/de-de/edge/microsoft-edge-app-help',
};

// Resolve only after the browser has confirmed the clipboard write.
export async function copyInstallationAddress(clipboard){
 if(typeof clipboard?.writeText!=='function')throw new Error('Clipboard unavailable');
 await clipboard.writeText(publicWebsiteAddress);
}
