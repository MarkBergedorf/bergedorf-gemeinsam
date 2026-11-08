import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {detectIphoneBrowser,detectMobileInstallation,iphoneBrowserChoices,iphoneInstallationSources} from '../lib/mobile-installation.mjs';
const ios='Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 ';
for(const [name,ua,expected] of [
 ['Chrome',ios+'CriOS/140.0 Mobile/15E148 Safari/604.1','chrome'],
 ['Edge',ios+'EdgiOS/140.0 Mobile/15E148 Safari/604.1','edge'],
 ['Firefox',ios+'FxiOS/140.0 Mobile/15E148 Safari/604.1','firefox'],
 ['Safari',ios+'Version/18.6 Mobile/15E148 Safari/604.1','other'],
 ['unknown',ios+'Mobile/15E148','other'],
 ['Android','Mozilla/5.0 (Linux; Android 15) Chrome/140.0','other'],
 ['desktop','Mozilla/5.0 (Windows NT 10.0) Chrome/140.0','other'],
 ['in-app',ios+'CriOS/140.0 Instagram 300','other'],
])test('iPhone suggestion: '+name,()=>assert.equal(detectIphoneBrowser(ua),expected));
test('iPhone browser selection has four explicit choices and iOS-specific sources',()=>{
 assert.deepEqual(iphoneBrowserChoices.map(x=>x[0]),['chrome','edge','firefox','other']);
 assert.equal(new URL(iphoneInstallationSources.chrome).searchParams.get('co'),'GENIE.Platform=iOS');
 assert.match(iphoneInstallationSources.firefox,/firefox-fur-ios$/);
 assert.equal(detectMobileInstallation(ios+'EdgiOS/140.0 Mobile Safari/604.1').choice,'iphone-other');
});
test('Existing Safari, all Android instructions and copy flow remain byte-identical',()=>{
 const s=readFileSync(new URL('../app/mobile-installation-help.tsx',import.meta.url),'utf8');
 const expected=JSON.parse(readFileSync(new URL('./fixtures/installation-preserved-v-b228.json',import.meta.url),'utf8'));
 const blocks={safari:s.slice(s.indexOf("  {choice==='iphone-safari'"),s.indexOf("  {choice==='iphone-other'&&<IphoneBrowserHelp")).trimEnd(),android:s.slice(s.indexOf("  {choice==='android-chrome'"),s.indexOf('  <button type="button" className="text-button" onClick={onClose}')).trimEnd(),copy:s.slice(s.indexOf(' async function copyAddress()'),s.indexOf(' return <section')).trimEnd()};
 for(const [name,text] of Object.entries(blocks))assert.equal(createHash('sha256').update(text).digest('hex'),expected[name],name);
});
