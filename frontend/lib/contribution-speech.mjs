// Only used by the contribution information panel. Never select a network voice.
export const voiceKey=voice=>voice.voiceURI||`${voice.lang}:${voice.name}`;
export function localGermanVoices(voices){return voices.filter(v=>v.localService===true&&/^de(?:[-_]|$)/i.test(v.lang)).sort((a,b)=>{
 const score=v=>(/premium|enhanced|natural|neural|verbessert|erweitert/i.test(v.name)?100:0)+(/^de[-_]DE$/i.test(v.lang)?10:0)+(v.default?1:0);
 return score(b)-score(a)||a.name.localeCompare(b.name,'de');
})}
export function startContributionSpeech({synth,Utterance,text,voice,onFinish,onError}){
 // One complete utterance preserves the engine's sentence and paragraph prosody.
 // Do not restart on boundaries or use pause/resume timers (audible interruptions).
 const u=new Utterance(text);u.lang=voice.lang||'de-DE';u.voice=voice;u.rate=1.1;u.pitch=1;u.volume=1;
 u.onend=()=>onFinish(u);u.onerror=e=>onError(u,e.error);synth.speak(u);return u;
}
