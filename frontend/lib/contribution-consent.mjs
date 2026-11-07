export const consentText='Ich willige ausdrücklich ein, dass meine in diesem Beitrag enthaltenen eigenen Gesundheitsangaben und politischen Meinungen gespeichert, zur Beitragsprüfung verwendet und nach Freigabe öffentlich angezeigt werden. Diese Einwilligung kann ich für die Zukunft widerrufen.';
export const consentTextVersion='2026-10-30-v1';
export const fieldsKey=fields=>JSON.stringify(Object.keys(fields||{}).sort().map(k=>[k,fields[k]]));
export function validConsent(receipt,fields){return !!(receipt?.granted===true&&!receipt.withdrawnAt&&receipt.text===consentText&&receipt.textVersion===consentTextVersion&&receipt.actor&&receipt.at&&receipt.fieldsKey===fieldsKey(fields))}
export function publicConsent(doc){const c=doc?.publishedConsent;return validConsent(c,doc?.published)&&c.publicationId===doc.publicationId?{granted:true,text:c.text,textVersion:c.textVersion,publicationId:c.publicationId}:null}
export const publicationKey=doc=>doc?.publicationId||`${doc?.version||0}:${doc?.publishedAt||''}`;
export const reportReasons=[
'Gesundheitsangaben oder private politische Überzeugungen einer anderen erkennbaren Person',
'Veröffentlichung anderer personenbezogener Daten ohne Berechtigung',
'Zweifel an der angezeigten Einwilligung oder Zuordnung zum Verfasser',
'Beleidigung, Bedrohung oder Belästigung',
'Menschenverachtende oder gewaltverherrlichende Inhalte',
'Falsche Tatsachenbehauptungen oder irreführende Darstellung',
'Verletzung von Urheber- oder Bildrechten',
'Werbung oder Spam',
'Sonstiger Verstoß'];
export function checkedReasons(reasons){if(!Array.isArray(reasons)||!reasons.length||reasons.some(r=>!reportReasons.includes(r)))throw Error('Bitte mindestens einen gültigen Meldegrund auswählen.');return [...new Set(reasons)]}
