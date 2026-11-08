import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {copyInstallationAddress,detectMobileInstallation,mobileInstallationChoices,installationSources,publicWebsiteAddress} from '../lib/mobile-installation.mjs';
const iphone='Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 ';
const android='Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 ';
for(const [name,ua,choice,browser] of [
 ['Safari',iphone+'Version/18.6 Mobile/15E148 Safari/604.1','iphone-safari','other'],
 ['iOS Chrome',iphone+'CriOS/140.0 Mobile/15E148 Safari/604.1','iphone-other','other'],
 ['iOS Edge',iphone+'EdgiOS/140.0 Version/18.6 Mobile/15E148 Safari/604.1','iphone-other','other'],
 ['iOS Firefox',iphone+'FxiOS/140 Mobile/15E148 Safari/604.1','iphone-other','other'],
 ['Instagram in-app',iphone+'Version/18.6 Safari/604.1 Instagram 300','iphone-other','other'],
 ['Android Chrome',android+'Chrome/140.0 Mobile Safari/537.36','android-chrome','other'],
 ['Samsung',android+'Chrome/140.0 Mobile Safari/537.36 SamsungBrowser/28.0','android-other','samsung'],
 ['Edge',android+'Chrome/140.0 Mobile Safari/537.36 EdgA/140.0','android-other','edge'],
 ['Firefox',android+'Firefox/140.0','android-other','firefox'],
 ['WebView','Mozilla/5.0 (Linux; Android 15; Pixel; wv) Chrome/140.0','android-other','other'],
 ['Opera',android+'Chrome/140.0 OPR/90.0','android-other','other'],
 ['unknown','','','other'],
 ['desktop Chrome','Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/140.0 Safari/537.36','','other'],
])test('Guide suggestion: '+name,()=>assert.deepEqual(detectMobileInstallation(ua),{choice,browser}));
test('iPad desktop-style UA only suggests iOS when touch capabilities agree',()=>{
 const ua='Mozilla/5.0 (Macintosh; Intel Mac OS X) Version/18.6 Safari/605.1.15';
 assert.equal(detectMobileInstallation(ua,5).choice,'iphone-safari');
 assert.equal(detectMobileInstallation(ua,0).choice,'');
});
test('Manual choices cover four mobile routes; official HTTPS sources and public address',()=>{
 assert.deepEqual(mobileInstallationChoices.map(x=>x[0]),['iphone-safari','iphone-other','android-chrome','android-other']);
 assert.equal(publicWebsiteAddress,'https://markbergedorf.github.io/bergedorf-gemeinsam/');
 for(const url of Object.values(installationSources))assert.equal(new URL(url).protocol,'https:');
 assert.equal(new URL(installationSources.chrome).searchParams.get('co'),'GENIE.Platform=Android');
});
test('Existing desktop controller, native prompt flow and fallback remain byte-identical',()=>{
 const current=readFileSync(new URL('../app/app-installation.tsx',import.meta.url),'utf8');
 const baseline=readFileSync(new URL('./fixtures/app-installation-desktop-baseline.tsx',import.meta.url),'utf8');
 const controller=s=>s.slice(s.indexOf(' const instructionsId='),s.indexOf(' return <section'));
 assert.equal(controller(current),controller(baseline));
 const legacy=s=>s.slice(s.indexOf('<div id={instructionsId} className="installation-help">'),s.indexOf('<p role="status">'));
 assert.equal(legacy(current),legacy(baseline));
 assert.ok(current.includes('onClick={mobile?()=>changeHelp(!help):install}'));
 assert.ok(current.includes("{mobile?'App-Installationsanleitung':'Als App installieren'}"));
});

test('Copy writes exactly the public URL and waits for browser confirmation',async()=>{
 let copied,confirm;
 const pending=copyInstallationAddress({writeText:value=>{copied=value;return new Promise(resolve=>{confirm=resolve})}});
 assert.equal(copied,publicWebsiteAddress);
 let finished=false;pending.then(()=>{finished=true});await Promise.resolve();assert.equal(finished,false);
 confirm();await pending;assert.equal(finished,true);
});
test('Missing or denied clipboard rejects so the UI can offer manual copy',async()=>{
 await assert.rejects(copyInstallationAddress(undefined),/unavailable/);
 await assert.rejects(copyInstallationAddress({writeText:async()=>{throw new Error('denied')}}),/denied/);
});
