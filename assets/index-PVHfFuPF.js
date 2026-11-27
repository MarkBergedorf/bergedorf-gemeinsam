const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-DYIOCd2V.js","assets/index.esm-DNd0K7tx.js","assets/index.esm-DH9Cs28E.js","assets/history-tiles-ZBVxNq97.js","assets/history-tiles-c_1sG1-7.css","assets/index.esm-CtlweBsQ.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ee=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},I={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=I,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,ee)}catch(e){ee(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=c(u(),1),f=Object.freeze([`VITE_FIREBASE_API_KEY`,`VITE_FIREBASE_AUTH_DOMAIN`,`VITE_FIREBASE_PROJECT_ID`,`VITE_FIREBASE_APP_ID`]);function p(e={}){return f.every(t=>typeof e[t]==`string`&&e[t].trim().length>0)}var m=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),h=o(((e,t)=>{t.exports=m()}))(),g=`modulepreload`,_=function(e){return`/bergedorf-gemeinsam/`+e},v={},y=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=_(t,n),t in v)return;v[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:g,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},b=(0,d.createContext)(null),x={BASE_URL:`/bergedorf-gemeinsam/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:`AIzaSyAIIPWNx_5AqJ1725o88r0DQTYErHtDpRc`,VITE_FIREBASE_APP_ID:`1:480976624691:web:759419b99254e27683d746`,VITE_FIREBASE_AUTH_DOMAIN:`bergedorf-gemeinsam.firebaseapp.com`,VITE_FIREBASE_PROJECT_ID:`bergedorf-gemeinsam`},S={apiKey:x.VITE_FIREBASE_API_KEY,authDomain:x.VITE_FIREBASE_AUTH_DOMAIN,projectId:x.VITE_FIREBASE_PROJECT_ID,appId:x.VITE_FIREBASE_APP_ID},C=p({VITE_FIREBASE_API_KEY:S.apiKey,VITE_FIREBASE_AUTH_DOMAIN:S.authDomain,VITE_FIREBASE_PROJECT_ID:S.projectId,VITE_FIREBASE_APP_ID:S.appId}),w=C,T=x.VITE_FIREBASE_AUTH_EMULATOR_HOST,E=`bg-firebase-auth-remembered`,D=`bg-firebase-auth-remember-choice`,O=`bg-firebase-email-link-address`,k=`bg-firebase-auth-reauthentication`,A=null,j=null;async function M(e){if(!w)throw Error(`Firebase configuration missing`);let t=await y(()=>import(`./index.esm-DYIOCd2V.js`),__vite__mapDeps([0,1])),n=await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]));A||=(async()=>{let r=t.getApps().find(e=>e.name===`bergedorf-public-auth`)||t.initializeApp(S,`bergedorf-public-auth`),i=e??!1;try{e===void 0&&(i=localStorage.getItem(E)===`1`)}catch{}j=i;let a=n.initializeAuth(r,{persistence:i?n.browserLocalPersistence:n.browserSessionPersistence});if(T){let e=new URL(T);if(typeof location>`u`||![`localhost`,`127.0.0.1`].includes(location.hostname)||![`localhost`,`127.0.0.1`].includes(e.hostname))throw Error(`Firebase-Auth-Emulator ist ausschlieÃŸlich in der lokalen Vorschau zulÃ¤ssig.`);n.connectAuthEmulator(a,T,{disableWarnings:!0})}return a})();let r=await A;return e!==void 0&&j!==e&&(await n.setPersistence(r,e?n.browserLocalPersistence:n.browserSessionPersistence),j=e),r}function N(e){return location.origin+location.pathname+e}function P(){let e=(0,d.useContext)(b);if(!e)throw Error(`AuthProvider missing`);return e}function F({children:e}){let[t,n]=(0,d.useState)(!1),[r,i]=(0,d.useState)(null),[a,o]=(0,d.useState)(``),[s,c]=(0,d.useState)(!1),[l,u]=(0,d.useState)(null),[f,p]=(0,d.useState)(``);(0,d.useEffect)(()=>{if(!w||!s)return;let e=!0,t=()=>{};return(async()=>{try{let r=await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1])),a=await M();if(!e)return;u(()=>()=>r.signOut(a)),t=r.onAuthStateChanged(a,t=>{if(e){if(t)try{let e=sessionStorage.getItem(D);e===`1`?localStorage.setItem(E,`1`):e===`0`&&localStorage.removeItem(E),e!==null&&sessionStorage.removeItem(D)}catch{}i(t),n(!0),o(``)}},()=>{e&&(i(null),n(!0),o(`Der Anmeldestatus konnte nicht geladen werden. Bitte laden Sie die Seite erneut.`))})}catch{e&&(n(!0),p(`Der Anmeldedienst ist derzeit nicht erreichbar. Bitte versuchen Sie es spÃ¤ter erneut.`))}})(),()=>{e=!1,t()}},[s]);let m=(0,d.useMemo)(()=>({configured:w,ready:t,user:r,error:a||f,begin:async e=>{if(!w){o(`Die Anmeldung ist noch nicht eingerichtet.`);return}try{let t=e??!1;try{e===void 0&&(t=sessionStorage.getItem(D)===`1`||sessionStorage.getItem(D)===null&&localStorage.getItem(E)===`1`),sessionStorage.setItem(D,t?`1`:`0`)}catch{}await M(t),p(``),c(!0)}catch{p(`Der Anmeldedienst konnte nicht geÃ¶ffnet werden. Bitte prÃ¼fen Sie Ihre Browsereinstellungen und versuchen Sie es erneut.`)}},signIn:async(e,t)=>{let n=await M();await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).signInWithEmailAndPassword(n,e,t)},register:async(e,t)=>{let n=await M(),r=await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1])),i=await r.createUserWithEmailAndPassword(n,e,t);return await r.sendEmailVerification(i.user,{url:N(`#anmelden`),handleCodeInApp:!1}),i.user},sendEmailLink:async e=>{let t=await M();await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).sendSignInLinkToEmail(t,e,{url:N(`#anmelden`),handleCodeInApp:!0});try{sessionStorage.setItem(O,e)}catch{}},isEmailSignInLink:async e=>{let t=await M();return(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).isSignInWithEmailLink(t,e)},completeEmailLink:async(e,t)=>{let n=await M(),r=await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]));if(!r.isSignInWithEmailLink(n,t))throw Error(`Der Anmeldelink ist ungÃ¼ltig oder abgelaufen. Fordern Sie bitte einen neuen Link an.`);let i=await r.signInWithEmailLink(n,e,t);try{sessionStorage.removeItem(O),sessionStorage.removeItem(k)}catch{}return i.user},requestReauthenticationLink:async(e,t)=>{if(!e.email)throw Error(`FÃ¼r dieses Konto ist keine bestÃ¤tigte E-Mail-Adresse verfÃ¼gbar.`);let n=await M();await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).sendSignInLinkToEmail(n,e.email,{url:N(`#konto`),handleCodeInApp:!0});try{sessionStorage.setItem(O,e.email),sessionStorage.setItem(k,JSON.stringify({uid:e.uid,purpose:t}))}catch{}},pendingReauthenticationPurpose:e=>{try{let t=JSON.parse(sessionStorage.getItem(k)||`null`);return!t||![`changePassword`,`changeEmail`,`deleteAccount`].includes(t.purpose)||e&&t.uid!==e.uid?null:t.purpose}catch{return null}},reauthenticateWithEmailLink:async(e,t,n)=>{let r=JSON.parse(sessionStorage.getItem(k)||`null`);if(!r||r.uid!==e.uid||![`changePassword`,`changeEmail`,`deleteAccount`].includes(r.purpose))throw Error(`Die erneute Anmeldung wurde nicht in diesem Browserfenster angefordert.`);if(!e.email||t.trim().toLowerCase()!==e.email.trim().toLowerCase())throw Error(`Die E-Mail-Adresse muss mit der Adresse dieses Benutzerkontos Ã¼bereinstimmen.`);let i=await M(),a=await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]));if(!a.isSignInWithEmailLink(i,n))throw Error(`Der BestÃ¤tigungslink ist ungÃ¼ltig oder abgelaufen. Fordern Sie bitte einen neuen Link an.`);let o=a.EmailAuthProvider.credentialWithLink(t.trim(),n);await a.reauthenticateWithCredential(e,o);try{sessionStorage.removeItem(O),sessionStorage.removeItem(k)}catch{}return r.purpose},resetPassword:async e=>{let t=await M();await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).sendPasswordResetEmail(t,e,{url:N(`#anmelden`),handleCodeInApp:!1})},changePassword:async(e,t)=>{await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).updatePassword(e,t)},changeEmail:async(e,t,n)=>{let r=await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1])),i=r.EmailAuthProvider.credential(e.email||``,n);await r.reauthenticateWithCredential(e,i),await r.verifyBeforeUpdateEmail(e,t,{url:N(`#konto`),handleCodeInApp:!1})},changeEmailWithCurrentSession:async(e,t)=>{await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).verifyBeforeUpdateEmail(e,t,{url:N(`#konto`),handleCodeInApp:!1})},deleteAccount:async(e,t)=>{let n=await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1])),r=n.EmailAuthProvider.credential(e.email||``,t);await n.reauthenticateWithCredential(e,r),await n.deleteUser(e)},deleteAccountWithCurrentSession:async e=>{await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).deleteUser(e)},signOut:async()=>{await l?.();try{sessionStorage.removeItem(D),sessionStorage.removeItem(O),sessionStorage.removeItem(k),localStorage.removeItem(E)}catch{}i(null),c(!1),n(!1)},sendVerification:async e=>{await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).sendEmailVerification(e,{url:N(`#anmelden`),handleCodeInApp:!1})},refreshUser:async e=>{await(await y(()=>import(`./index.esm-DH9Cs28E.js`),__vite__mapDeps([2,1]))).reload(e),i(e)}}),[t,r,a,f,l]);return(0,h.jsx)(b.Provider,{value:m,children:e})}var ee=[[`verantwortlicher`,`Verantwortlicher und Kontakt`],[`geltungsbereich`,`Geltungsbereich und Nutzung`],[`hosting`,`Hosting durch GitHub Pages`],[`firebase`,`Benutzerkonto und Firebase Authentication`],[`browserdaten`,`Lokale Browserdaten und Einstellungen`],[`karten`,`Karten und externe Kartendienste`],[`externe-links`,`Externe Links und amtliche Informationsangebote`],[`email`,`Kontaktaufnahme per E-Mail`],[`stoerungen`,`Meldung technischer StÃ¶rungen`],[`lokale-meldungen`,`Lokal vorbereitete Meldungen und Foto-RechteerklÃ¤rungen`],[`redaktion`,`Redaktionelle Inhalte und Einrichtungsangaben`],[`deaktivierte-funktionen`,`Derzeit deaktivierte Beteiligungs- und Petitionsfunktionen`],[`finanzen`,`Finanztransparenz und externe UnterstÃ¼tzungsangebote`],[`empfaenger`,`EmpfÃ¤nger und internationale DatenÃ¼bermittlungen`],[`speicherfristen`,`Speicher- und LÃ¶schfristen`],[`rechte`,`Ihre Betroffenenrechte`],[`aufsicht`,`Beschwerderecht und Datenschutzaufsicht`],[`aktualisierung`,`Aktualisierungsstand`]],I=({href:e,children:t})=>(0,h.jsx)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:t});function te(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`p`,{children:`Diese Hinweise beschreiben die aktuell erreichbare Ã¶ffentliche Website. Ã–ffentliche Inhalte sind ohne Benutzerkonto zugÃ¤nglich. Ein Konto ist freiwillig und schaltet keine Schreib-, Moderations- oder Verwaltungsrechte frei.`}),(0,h.jsxs)(`nav`,{className:`privacy-toc`,"aria-label":`Inhaltsverzeichnis der DatenschutzerklÃ¤rung`,children:[(0,h.jsx)(`h2`,{children:`Inhaltsverzeichnis`}),(0,h.jsx)(`ol`,{children:ee.map(([e,t])=>(0,h.jsx)(`li`,{children:(0,h.jsx)(`a`,{href:`#datenschutz-${e}`,children:t})},e))})]}),(0,h.jsxs)(`section`,{id:`datenschutz-verantwortlicher`,children:[(0,h.jsx)(`h2`,{children:`1. Verantwortlicher und Kontakt`}),(0,h.jsxs)(`address`,{children:[`Mark Petersen`,(0,h.jsx)(`br`,{}),`Fritz-Lindemann-Weg 3 A`,(0,h.jsx)(`br`,{}),`21031 Hamburg`,(0,h.jsx)(`br`,{}),(0,h.jsx)(`a`,{href:`mailto:bergedorf.gemeinsam@outlook.de`,children:`bergedorf.gemeinsam@outlook.de`})]}),(0,h.jsx)(`p`,{children:`Sie kÃ¶nnen Datenschutzanliegen an diese Kontaktadresse richten. DafÃ¼r benÃ¶tigen Sie kein Plattformkonto.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-geltungsbereich`,children:[(0,h.jsx)(`h2`,{children:`2. Geltungsbereich und Nutzung`}),(0,h.jsxs)(`p`,{children:[`Diese ErklÃ¤rung gilt fÃ¼r die Ã¶ffentliche Website â€žBergedorf gemeinsamâ€œ unter `,(0,h.jsx)(I,{href:`https://markbergedorf.github.io/bergedorf-gemeinsam/`,children:`markbergedorf.github.io/bergedorf-gemeinsam/`}),`. Eine gesonderte private Arbeitsfassung ist davon zu unterscheiden.`]}),(0,h.jsx)(`p`,{children:`Die Website stellt statische redaktionelle Inhalte bereit. Es gibt keine angeschlossene Datenbank fÃ¼r Ã¶ffentliche BeitrÃ¤ge, Kommentare, Reaktionen, Petitionen oder Arbeitsgruppen. Angaben, die ein Formular lokal vorbereitet, werden nicht an einen Website-Server gesendet. Technische Abrufe, freiwillige Kartenaufrufe, Kontonutzung und E-Mail-Kontakt werden in den folgenden Abschnitten beschrieben. Die Website nimmt keine automatische Standortbestimmung vor.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-hosting`,children:[(0,h.jsx)(`h2`,{children:`3. Hosting durch GitHub Pages`}),(0,h.jsx)(`p`,{children:`Die Website wird als statische Seite Ã¼ber GitHub Pages ausgeliefert. GitHub protokolliert bei einem Besuch die IP-Adresse zu Sicherheitszwecken, auch wenn Sie nicht bei GitHub angemeldet sind. FÃ¼r die Auslieferung werden auÃŸerdem technische Verbindungsdaten verarbeitet, insbesondere die angeforderte Datei und Browserinformationen. Ohne diese Daten kann die Website nicht Ã¼bertragen werden.`}),(0,h.jsx)(`p`,{children:`Die Bereitstellung und Sicherheit der Website liegen in unserem berechtigten Interesse (Art. 6 Abs. 1 Buchst. f DSGVO). GitHub nennt GitHub, Inc. in den USA und GitHub B.V. in den Niederlanden als RechtstrÃ¤ger seiner Dienste. GitHub beschreibt Verarbeitungen in verschiedenen LÃ¤ndern, darunter den USA, und nennt Standardvertragsklauseln sowie seine Teilnahme am EU-US-, UK- und Schweiz-US-Datenschutzrahmen. Im US-Handelsministerium-Register ist GitHub als Teilnehmer fÃ¼r Nicht-Personalverwaltungsdaten aufgefÃ¼hrt. Diese Anbieterangaben beschreiben die Transferinstrumente; sie bestÃ¤tigen keine ausschlieÃŸliche Speicherung in der EU.`}),(0,h.jsx)(`p`,{children:`Eine feste Frist fÃ¼r Besucher-IP-Protokolle dieser GitHub-Pages-Seite ist in den geprÃ¼ften allgemeinen Anbieterinformationen nicht angegeben. GitHub nennt Zweck, gesetzliche Pflichten, Streitbeilegung und Durchsetzung von Vereinbarungen als Kriterien fÃ¼r die Aufbewahrung.`}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(I,{href:`https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection`,children:`GitHub Pages: Datenerhebung`}),` Â· `,(0,h.jsx)(I,{href:`https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement`,children:`GitHub: Datenschutz und internationale Ãœbermittlungen`}),` Â· `,(0,h.jsx)(I,{href:`https://www.dataprivacyframework.gov/participant/6174`,children:`US-Handelsministerium: GitHub im Data Privacy Framework Register`})]})]}),(0,h.jsxs)(`section`,{id:`datenschutz-firebase`,children:[(0,h.jsx)(`h2`,{children:`4. Benutzerkonto und Firebase Authentication`}),C?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`p`,{children:`Die freiwillige Kontoanmeldung verwendet Firebase Authentication von Google LLC. Privatpersonen kÃ¶nnen einen passwortlosen E-Mail-Link oder E-Mail-Adresse und Passwort nutzen; Organisationskonten melden sich mit E-Mail-Adresse und Passwort an. Eine Anmeldung mit Google wird auf dieser Website nicht angeboten. Ã–ffentliche Inhalte bleiben ohne Konto lesbar.`}),(0,h.jsxs)(`p`,{children:[`Bei Kontoregistrierung und Anmeldung verarbeitet Firebase die E-Mail-Adresse, Anmelde- und BestÃ¤tigungsdaten sowie je nach gewÃ¤hltem Verfahren das Passwort oder den angeforderten Link. FÃ¼r Sicherheit und Missbrauchsschutz verarbeitet Firebase auÃŸerdem IP-Adressen und Browserkennungen. Google gibt an, dass Firebase Authentication ausschlieÃŸlich in US-Rechenzentren betrieben wird. Google LLC ist im EU-US Data Privacy Framework fÃ¼r Nicht-Personalverwaltungsdaten als aktiv aufgefÃ¼hrt. Firebase ordnet Authentication den Google-Cloud-Plattformbedingungen zu; die zugehÃ¶rigen Datenschutzbedingungen regeln Googles Verarbeitung im Auftrag. `,(0,h.jsx)(I,{href:`https://firebase.google.com/support/privacy`,children:`Firebase: Datenschutz, Verarbeitungsorte und Speicherfristen`}),` Â· `,(0,h.jsx)(I,{href:`https://firebase.google.com/terms`,children:`Firebase: Dienstbedingungen`}),` Â· `,(0,h.jsx)(I,{href:`https://cloud.google.com/terms/data-processing-addendum`,children:`Google Cloud: Datenschutz-Addendum`}),` Â· `,(0,h.jsx)(I,{href:`https://www.dataprivacyframework.gov/participant/5780`,children:`US-Handelsministerium: Google LLC im Data Privacy Framework Register`})]}),(0,h.jsx)(`p`,{children:`Vor dem Ã–ffnen des Anmeldedienstes zeigt die Website einen Hinweis zur Datenverarbeitung. Die Registrierung und der passwortlose Kontozugang erfordern eine zusÃ¤tzliche BestÃ¤tigung. Firebase wird erst nach dem ausdrÃ¼cklichen Ã–ffnen des Dienstes initialisiert. Diese BestÃ¤tigungen werden nicht in einem serverseitigen Einwilligungsprotokoll mit Textversion und Zeitstempel gespeichert. Daher ist ein dauerhafter, vom Betreiber gefÃ¼hrter Nachweis des konkreten Einwilligungsvorgangs derzeit nicht eingerichtet. Die rechtliche Bewertung und ein geeigneter Nachweisprozess sind noch offen.`}),(0,h.jsx)(`p`,{children:`Die Anmeldung bleibt standardmÃ¤ÃŸig auf die aktuelle Browser-Registerkarte beschrÃ¤nkt. Nur wenn Sie â€žAuf diesem GerÃ¤t angemeldet bleibenâ€œ auswÃ¤hlen, kann Firebase die Anmeldung gerÃ¤te- und browserlokal bis zur Abmeldung speichern. Auf gemeinsam genutzten GerÃ¤ten sollte diese Auswahl nicht verwendet werden. PasswÃ¶rter werden nicht auf einem Website-Server gespeichert. Die Anwendung hat keine eigene Firebase-Datenbank; ein Konto verleiht keine Teilnahme-, VerÃ¶ffentlichungs-, Moderations- oder Verwaltungsrechte.`}),(0,h.jsx)(`p`,{children:`Sie kÃ¶nnen sich abmelden oder Ihr Konto Ã¼ber die Kontoseite lÃ¶schen. Weitere Datenschutzrechte kÃ¶nnen Sie auch ohne Anmeldung per E-Mail ausÃ¼ben. Firebase gibt an, Authentifizierungs-IP-Protokolle einige Wochen zu speichern und sonstige Authentifizierungsdaten nach Anforderung der KontolÃ¶schung innerhalb von bis zu 180 Tagen aus aktiven Systemen und Sicherungen zu entfernen. Das sind Anbieterangaben; eine eigene Kontrolle aller Google-Systeme ist nicht mÃ¶glich.`})]}):(0,h.jsx)(`p`,{children:`In dieser technischen Testfassung ist Firebase nicht konfiguriert. Anmeldung und Registrierung sind dort nicht aktiviert.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-browserdaten`,children:[(0,h.jsx)(`h2`,{children:`5. Lokale Browserdaten und Einstellungen`}),(0,h.jsx)(`p`,{children:`Die Anwendung speichert einzelne BedienzustÃ¤nde wie Scrollposition, Kartenmittelpunkt, Zoomstufe, ausgewÃ¤hlte Filter oder die Kartenfreigabe lokal im Browser beziehungsweise im Browserverlauf. Sitzungsbezogene Werte liegen im Sitzungsspeicher. Die Option â€žAuf diesem GerÃ¤t angemeldet bleibenâ€œ verwendet fÃ¼r die Authentifizierung lokale Browserspeicherung. Such- und Filterwerte kÃ¶nnen im Teil der Adresse nach dem Zeichen # stehen; dieser Fragmentteil wird beim Ã¼blichen HTTP-Abruf nicht an den Hostingserver Ã¼bermittelt.`}),(0,h.jsx)(`p`,{children:`Die Werte dienen der von Ihnen gewÃ¤hlten Darstellung und Navigation. Sie werden nicht als Nutzerprofil an ein Website-Backend gesendet. Die Browserwiederherstellung kann Sitzungsdaten erhalten; deshalb wird keine sofortige LÃ¶schung sÃ¤mtlicher Werte beim SchlieÃŸen zugesagt. Website-Daten und Verlauf lassen sich Ã¼ber die Einstellungen Ihres Browsers lÃ¶schen. Sitzungsspeicher und Verlauf sind keine Cookies.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-karten`,children:[(0,h.jsx)(`h2`,{children:`6. Karten und externe Kartendienste`}),(0,h.jsx)(`p`,{children:`Interaktive Organisations-, Verzeichnis-, Geschichts- und Standortkarten verwenden OpenFreeMap mit OpenMapTiles- und OpenStreetMap-Daten. Eine Karte wird erst nach einer gesonderten Zustimmung fÃ¼r den jeweiligen Kartenbereich geladen. Sie kÃ¶nnen ablehnen; die zugehÃ¶rigen Listen bleiben ohne Kartenfreigabe nutzbar. Organisations- und Geschichtskarten haben getrennte Freigaben. Mit â€žKarte entladenâ€œ widerrufen Sie die Freigabe fÃ¼r den betroffenen Bereich und entfernen die Kartenebene. Bereits Ã¼bermittelte Daten oder Anbieterprotokolle werden dadurch nicht zurÃ¼ckgeholt oder rÃ¼ckwirkend gelÃ¶scht.`}),(0,h.jsx)(`p`,{children:`Beim Laden erhÃ¤lt der Kartendienst die dafÃ¼r notwendigen Verbindungsdaten und den angefragten Kartenausschnitt. OpenFreeMap nennt regulÃ¤re Zugriffsprotokolle ohne IP-Adresse, eine LÃ¶schung nach sieben Tagen sowie hÃ¶chstens 30 Tage fÃ¼r IP-Protokolle bei SicherheitsvorfÃ¤llen. Der Anbieter nennt Cloudflare als Auslieferungsdienst; Cloudflare kann technische Verbindungsdaten einschlieÃŸlich IP-Adressen verarbeiten. Anbieterangaben zu OpenFreeMap beschreiben nicht automatisch Cloudflare-Protokolle oder Sicherungskopien. Es erfolgt keine automatische Standortbestimmung und es werden keine Texte aus Formularen an den Kartendienst gesendet.`}),(0,h.jsx)(`p`,{children:`Die Freigabe der Kartenabrufe beruht auf Ihrer Einwilligung. Die Website speichert die Auswahl fÃ¼r die laufende Sitzung lokal und fÃ¼hrt dafÃ¼r keine Tracking-Cookies ein. Die Karten kÃ¶nnen durch Wechsel innerhalb der Website genutzt werden, bis die Freigabe widerrufen oder die Sitzung beendet wird. Kartensoftware, Kartenstil und Bezirksgrenzen werden aus den Website-Dateien geladen. OpenStreetMap-Mitwirkende werden als Datenquelle genannt.`}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(I,{href:`https://openfreemap.org/privacy/`,children:`OpenFreeMap: Datenschutz`}),` Â· `,(0,h.jsx)(I,{href:`https://openfreemap.org/tos/`,children:`OpenFreeMap: Nutzungsbedingungen`}),` Â· `,(0,h.jsx)(I,{href:`https://www.cloudflare.com/privacypolicy/`,children:`Cloudflare: Datenschutz`}),` Â· `,(0,h.jsx)(I,{href:`https://www.openstreetmap.org/copyright`,children:`OpenStreetMap: Urheberrecht und Datenquelle`})]})]}),(0,h.jsxs)(`section`,{id:`datenschutz-externe-links`,children:[(0,h.jsx)(`h2`,{children:`7. Externe Links und amtliche Informationsangebote`}),(0,h.jsx)(`p`,{children:`Externe Links Ã¶ffnen eigenstÃ¤ndige Websites. Erst wenn Sie einen solchen Link auswÃ¤hlen, wird eine Verbindung zum jeweiligen Anbieter hergestellt; dieser verarbeitet dann technische Verbindungsdaten nach seinen eigenen Hinweisen.`}),(0,h.jsx)(`p`,{children:`Die SchaltflÃ¤che zum Ã–ffnen einer Satellitenansicht in Google Maps zeigt vorher ein eigenes Hinweisfenster. â€žAblehnenâ€œ, SchlieÃŸen oder Escape Ã¶ffnet den Dienst nicht. Bei â€žZustimmenâ€œ wird Google Maps in einem neuen Tab oder â€“ abhÃ¤ngig vom GerÃ¤t â€“ in einer App geÃ¶ffnet. Dabei werden der ausgewÃ¤hlte Kartenmittelpunkt und eine passende Zoomstufe im Link Ã¼bermittelt. Es wird keine Google-Karte auf dieser Website eingebettet und keine dauerhafte Google-Freigabe gespeichert. Die BestÃ¤tigung betrifft nur das Ã–ffnen und ersetzt keine erforderliche Einwilligung oder Datenschutzeinstellung beim externen Anbieter.`}),(0,h.jsx)(`p`,{children:`Der amtliche Sitzungskalender des Bezirksamts Bergedorf wird ebenfalls nicht eingebettet. Beim Ã–ffnen rufen Sie dessen eigenstÃ¤ndige Website auf. Bei einer frÃ¼heren PrÃ¼fung setzte diese externe Kalenderseite ein Sitzungscookie. FÃ¼r Zweck und Speicherdauer ist deren Betreiber verantwortlich; unsere LinkbestÃ¤tigung ist keine allgemeine Einwilligung fÃ¼r externe Websites.`}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(I,{href:`https://policies.google.com/privacy?hl=de`,children:`Google: DatenschutzerklÃ¤rung`}),` Â· `,(0,h.jsx)(I,{href:`https://sitzungsdienst-bergedorf.hamburg.de/bi/si010_e.asp`,children:`Amtlicher Sitzungskalender`})]})]}),(0,h.jsxs)(`section`,{id:`datenschutz-email`,children:[(0,h.jsx)(`h2`,{children:`8. Kontaktaufnahme per E-Mail`}),(0,h.jsxs)(`p`,{children:[`Wenn Sie an `,(0,h.jsx)(`a`,{href:`mailto:bergedorf.gemeinsam@outlook.de`,children:`bergedorf.gemeinsam@outlook.de`}),` schreiben, verarbeiten wir Ihre Absenderadresse, Nachrichteninhalte, technische Nachrichtenangaben und mitgesendete AnhÃ¤nge, um Ihr Anliegen zu bearbeiten. Bitte senden Sie nur Angaben, die fÃ¼r Ihre Anfrage erforderlich sind. E-Mails werden nicht automatisch als BÃ¼rgerbeitrÃ¤ge verÃ¶ffentlicht.`]}),(0,h.jsx)(`p`,{children:`Allgemeine Korrespondenz bearbeiten wir auf Grundlage unseres berechtigten Interesses an der Beantwortung von Anfragen (Art. 6 Abs. 1 Buchst. f DSGVO). FÃ¼r gesetzlich vorgeschriebene Bearbeitung von DatenschutzantrÃ¤gen gilt Art. 6 Abs. 1 Buchst. c DSGVO in Verbindung mit Art. 12 ff. DSGVO. Art. 6 Abs. 1 Buchst. b DSGVO kommt nur in Betracht, wenn die konkrete Anfrage einen Vertrag oder vorvertragliche MaÃŸnahmen betrifft.`}),(0,h.jsxs)(`p`,{children:[`Das Projektpostfach wird mit Outlook.com von Microsoft genutzt. Microsoft nennt Microsoft Ireland Operations Limited als RechtstrÃ¤ger fÃ¼r eigene Verantwortlichkeiten im EuropÃ¤ischen Wirtschaftsraum. Der Anbieter beschreibt internationale Verarbeitung, auch in den USA, und nennt Standardvertragsklauseln sowie das Data Privacy Framework. Eine ausschlieÃŸlich europÃ¤ische Speicherung dieses Postfachs wird nicht zugesichert. Ein Microsoft-365-GeschÃ¤ftskundenvertrag wird nicht als vorhanden vorausgesetzt. `,(0,h.jsx)(I,{href:`https://www.microsoft.com/de-de/privacy/privacystatement`,children:`Microsoft: Datenschutz und internationale Verarbeitung`})]}),(0,h.jsx)(`p`,{children:`Nachrichten werden so lange aufbewahrt, wie sie fÃ¼r die Bearbeitung, erforderliche RÃ¼ckfragen oder einen konkret begrÃ¼ndeten rechtlichen Nachweiszweck benÃ¶tigt werden. TatsÃ¤chlich einschlÃ¤gige gesetzliche Aufbewahrungspflichten bleiben maÃŸgeblich. Es gibt keine zugesagte pauschale LÃ¶schfrist oder automatische LÃ¶schung aller Nachrichten.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-stoerungen`,children:[(0,h.jsx)(`h2`,{children:`9. Meldung technischer StÃ¶rungen`}),(0,h.jsx)(`p`,{children:`Die Funktion â€žTechnische StÃ¶rung meldenâ€œ Ã¶ffnet eine lokale Eingabehilfe. Sie trÃ¤gt die aktuelle Seitenadresse und einen Zeitvorschlag ein. GerÃ¤t, Betriebssystem, Browser, Erweiterungen, Screenshots oder Videos werden nicht automatisch ausgelesen oder aufgenommen. Ihre Eingaben bleiben im Arbeitsspeicher der geÃ¶ffneten Ansicht und werden nicht an einen Website-Server Ã¼bertragen. Beim Neuladen oder Verlassen kÃ¶nnen sie verloren gehen.`}),(0,h.jsx)(`p`,{children:`Wenn Sie â€žKopierenâ€œ wÃ¤hlen, wird der jeweilige Text in die Zwischenablage geschrieben; die Website liest deren Inhalt nicht aus. Ein mailto-Link Ã¶ffnet lediglich Ihr E-Mail-Programm mit EmpfÃ¤nger und Betreff, gegebenenfalls auch Nachrichtentext. Es erfolgt kein automatischer Versand. Erst wenn Sie die E-Mail selbst versenden, erhalten wir die mitgeteilten Angaben. Bitte entfernen Sie unnÃ¶tige Angaben Ã¼ber andere Personen, vertrauliche Inhalte und Zugangsdaten.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-lokale-meldungen`,children:[(0,h.jsx)(`h2`,{children:`10. Lokal vorbereitete Meldungen und Foto-RechteerklÃ¤rungen`}),(0,h.jsx)(`p`,{children:`Bei der lokalen Eingabehilfe fÃ¼r Meldungen an das Bezirksamt Bergedorf bleiben Problembeschreibung, Ortsangaben, freiwillige Kontaktdaten, bis zu drei Fotos und Angaben fÃ¼r eine Foto-RechteerklÃ¤rung ausschlieÃŸlich im Arbeitsspeicher der geÃ¶ffneten Ansicht. Es gibt dabei keine Ãœbermittlung, serverseitige Speicherung, automatische Weiterleitung oder Ã¶ffentliche VerÃ¶ffentlichung.`}),(0,h.jsx)(`p`,{children:`Fotos werden lokal verarbeitet. FÃ¼r die Druckansicht kann eine skalierte JPEG-Kopie ohne ursprÃ¼ngliche EXIF- und GPS-Metadaten erstellt werden; sichtbare persÃ¶nliche Angaben im Bild werden dadurch nicht automatisch entfernt. ErklÃ¤rungsscans bleiben unverÃ¤ndert und getrennt von Sachverhaltsfotos. Beim Drucken oder Speichern als PDF verlassen die Angaben diese Website und werden auf Ihrem GerÃ¤t abgelegt. Eine dort gespeicherte Kopie mÃ¼ssen Sie selbst schÃ¼tzen und bei Bedarf lÃ¶schen.`}),(0,h.jsx)(`p`,{children:`Die Eingabehilfe ist kein produktiver Empfangs- oder Weiterleitungsdienst. Es werden keine Dokumente an das Bezirksamt geschickt. Eine GrÃ¶ÃŸen- oder FormatprÃ¼fung bestÃ¤tigt weder Sicherheit noch Unterschrift, Rechteinhaberschaft oder amtliche Zusammenarbeit.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-redaktion`,children:[(0,h.jsx)(`h2`,{children:`11. Redaktionelle Inhalte und Einrichtungsangaben`}),(0,h.jsx)(`p`,{children:`Die Website enthÃ¤lt redaktionelle Texte, Angaben zu Einrichtungen, Geschichtsinhalte sowie Literatur- und Quellenhinweise. Orts- und Angebotsangaben werden als redaktionelle Informationen dargestellt; sie sind keine Zusage des Anbieters zu Ã–ffnungszeiten, ZugÃ¤nglichkeit oder aktuell freien PlÃ¤tzen. Erfundene Beispiele sind entsprechend gekennzeichnet.`}),(0,h.jsx)(`p`,{children:`Die Website verÃ¶ffentlicht derzeit keine Ã¶ffentlichen Einreichungen, Kommentare oder Reaktionen. E-Mail-Nachrichten werden nicht automatisch Ã¼bernommen. Die beschriebenen lokalen Eingabehilfen Ã¼bertragen keine Texte oder Fotos an die Website.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-deaktivierte-funktionen`,children:[(0,h.jsx)(`h2`,{children:`12. Derzeit deaktivierte Beteiligungs- und Petitionsfunktionen`}),(0,h.jsx)(`p`,{children:`Petitionen, UnterstÃ¼tzungslisten, Ã¶ffentliche Beitragseinreichungen, Kommentare, Reaktionen, digitale Arbeitsgruppen, geschÃ¼tzte Gruppenbereiche und zugehÃ¶rige Schreib- und Verwaltungsfunktionen sind nicht aktiviert. Die 18 Projektideen im Bereich â€žEinsamkeit in Bergedorfâ€œ sind statische Informationen; sie sind keine bestehenden Arbeitsgruppen oder Kooperationen und nehmen keine Interessenbekundungen entgegen.`}),(0,h.jsx)(`p`,{children:`Vor einer spÃ¤teren Aktivierung von Funktionen, die personenbezogene Daten erheben oder verÃ¶ffentlichen, werden die tatsÃ¤chliche Datenverarbeitung, erforderliche SchutzmaÃŸnahmen und diese Datenschutzhinweise geprÃ¼ft und angepasst. Es wird keine personenbezogene Arbeitsgruppenverwaltung behauptet.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-finanzen`,children:[(0,h.jsx)(`h2`,{children:`13. Finanztransparenz und externe UnterstÃ¼tzungsangebote`}),(0,h.jsx)(`p`,{children:`Eine Zahlungsfunktion, GoFundMe-Anbindung oder Kampagne ist auf dieser Website nicht eingerichtet. Es werden keine Zahlungsdaten erhoben, keine UnterstÃ¼tzerlisten Ã¼bernommen und keine GoFundMe-Inhalte eingebettet. Ein externer Anbieterlink stellt erst beim Ã–ffnen eine Verbindung zu dessen Website her; dort gelten dessen eigene Datenschutzinformationen.`}),(0,h.jsx)(`p`,{children:(0,h.jsx)(I,{href:`https://www.gofundme.com/de-de/c/privacy`,children:`GoFundMe: Datenschutzinformationen`})})]}),(0,h.jsxs)(`section`,{id:`datenschutz-empfaenger`,children:[(0,h.jsx)(`h2`,{children:`14. EmpfÃ¤nger und internationale DatenÃ¼bermittlungen`}),(0,h.jsx)(`p`,{children:`FÃ¼r die Bereitstellung und optionale Nutzung der Website erhalten die jeweils eingebundenen Anbieter nur die fÃ¼r den konkreten Abruf notwendigen Daten. Dazu gehÃ¶ren GitHub Pages fÃ¼r die Website, Google LLC fÃ¼r Firebase Authentication nach ausdrÃ¼cklichem Ã–ffnen, OpenFreeMap und dessen Auslieferungsdienst fÃ¼r freigegebene Karten, Microsoft fÃ¼r eingehende und versandte E-Mails sowie ein externer Anbieter, wenn Sie dessen Link Ã¶ffnen.`}),(0,h.jsx)(`p`,{children:`Bei Firebase Authentication erfolgt die Verarbeitung nach Anbieterangabe in den USA. GitHub, Microsoft, Cloudflare und Google beschreiben ebenfalls internationale Datenverarbeitung. Die Anbieterinformationen nennen je nach Dienst Data Privacy Framework und/oder Standardvertragsklauseln. Die konkrete Anwendbarkeit und Reichweite hÃ¤ngt vom jeweiligen Anbieter, Dienst und Datenfluss ab; eine ausschlieÃŸlich europÃ¤ische Verarbeitung wird fÃ¼r diese Dienste nicht zugesagt.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-speicherfristen`,children:[(0,h.jsx)(`h2`,{children:`15. Speicher- und LÃ¶schfristen`}),(0,h.jsx)(`p`,{children:`Die Website fÃ¼hrt keine serverseitige Datenbank mit Ã¶ffentlichen BeitrÃ¤gen, Kommentaren, Petitionsanmeldungen oder Arbeitsgruppendaten. Lokale Eingaben werden nicht auf einen Website-Server Ã¼bertragen und gehen beim Verlassen oder Neuladen der Ansicht verloren. Browser kann SitzungszustÃ¤nde wiederherstellen; Website-Daten und Verlauf kÃ¶nnen Sie in den Einstellungen des Browsers lÃ¶schen.`}),(0,h.jsx)(`p`,{children:`E-Mail-Nachrichten werden nach Ende des Bearbeitungs- und RÃ¼ckfragebedarfs gelÃ¶scht, soweit kein konkret einschlÃ¤giger Nachweis- oder Aufbewahrungsgrund besteht. FÃ¼r GitHub- und externe Anbietersysteme gelten deren eigene Speicher- und LÃ¶schangaben. Firebase Authentication: IP-Protokolle einige Wochen; sonstige Authentifizierungsdaten laut Google bis zu 180 Tage nach KontolÃ¶schung aus aktiven Systemen und Sicherungen. Eine sofortige LÃ¶schung aus sÃ¤mtlichen externen Protokollen oder Sicherungen wird nicht zugesagt.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-rechte`,children:[(0,h.jsx)(`h2`,{children:`16. Ihre Betroffenenrechte`}),(0,h.jsxs)(`ul`,{children:[(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`strong`,{children:`Auskunft (Art. 15 DSGVO):`}),` Sie kÃ¶nnen Auskunft Ã¼ber die Sie betreffenden personenbezogenen Daten und die in Art. 15 genannten Informationen verlangen.`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`strong`,{children:`Berichtigung (Art. 16 DSGVO):`}),` Sie kÃ¶nnen unrichtige Daten berichtigen und unvollstÃ¤ndige Daten vervollstÃ¤ndigen lassen.`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`strong`,{children:`LÃ¶schung (Art. 17 DSGVO):`}),` Sie kÃ¶nnen die LÃ¶schung verlangen, wenn eine gesetzliche Voraussetzung erfÃ¼llt ist.`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`strong`,{children:`EinschrÃ¤nkung (Art. 18 DSGVO):`}),` Sie kÃ¶nnen unter den gesetzlichen Voraussetzungen eine EinschrÃ¤nkung der Verarbeitung verlangen.`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`strong`,{children:`DatenÃ¼bertragbarkeit (Art. 20 DSGVO):`}),` Dieses Recht gilt, wenn die gesetzlichen Voraussetzungen erfÃ¼llt sind, insbesondere fÃ¼r bestimmte automatisierte Verarbeitungen auf Grundlage einer Einwilligung oder eines Vertrags.`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`strong`,{children:`Widerspruch (Art. 21 DSGVO):`}),` Gegen eine Verarbeitung auf Grundlage berechtigter Interessen kÃ¶nnen Sie aus GrÃ¼nden Ihrer besonderen Situation widersprechen. Bei Direktwerbung wÃ¤re ein Widerspruch jederzeit mÃ¶glich; Direktwerbung wird hier nicht betrieben.`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`strong`,{children:`Widerruf (Art. 7 Abs. 3 DSGVO):`}),` Eine Einwilligung kÃ¶nnen Sie jederzeit mit Wirkung fÃ¼r die Zukunft widerrufen. Die RechtmÃ¤ÃŸigkeit der Verarbeitung bis zum Widerruf bleibt unberÃ¼hrt.`]}),(0,h.jsxs)(`li`,{children:[(0,h.jsx)(`strong`,{children:`Beschwerde (Art. 77 DSGVO):`}),` Sie kÃ¶nnen sich bei einer DatenschutzaufsichtsbehÃ¶rde beschweren.`]})]}),(0,h.jsx)(`p`,{children:`Richten Sie Ihr Anliegen an die oben genannte E-Mail-Adresse. Ein Benutzerkonto ist nicht erforderlich. Wir beantworten AntrÃ¤ge grundsÃ¤tzlich innerhalb eines Monats. Bei einer gesetzlich zulÃ¤ssigen VerlÃ¤ngerung informieren wir Sie innerhalb dieser Frist mit BegrÃ¼ndung. Eine automatisierte Entscheidung mit rechtlicher oder Ã¤hnlich erheblicher Wirkung einschlieÃŸlich Profiling ist auf dieser Website nicht eingerichtet.`})]}),(0,h.jsxs)(`section`,{id:`datenschutz-aufsicht`,children:[(0,h.jsx)(`h2`,{children:`17. Beschwerderecht und Datenschutzaufsicht`}),(0,h.jsx)(`p`,{children:`Sie kÃ¶nnen sich bei einer AufsichtsbehÃ¶rde beschweren, insbesondere bei der fÃ¼r Hamburg zustÃ¤ndigen BehÃ¶rde:`}),(0,h.jsxs)(`address`,{children:[`Der Hamburgische Beauftragte fÃ¼r Datenschutz und Informationsfreiheit`,(0,h.jsx)(`br`,{}),`Ludwig-Erhard-StraÃŸe 22, 7. Obergeschoss`,(0,h.jsx)(`br`,{}),`20459 Hamburg`,(0,h.jsx)(`br`,{}),`Telefon: `,(0,h.jsx)(`a`,{href:`tel:+4940428544040`,children:`040 428 54-4040`}),(0,h.jsx)(`br`,{}),`E-Mail: `,(0,h.jsx)(`a`,{href:`mailto:mailbox@datenschutz.hamburg.de`,children:`mailbox@datenschutz.hamburg.de`})]}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(I,{href:`https://datenschutz-hamburg.de/`,children:`HmbBfDI: offizielle Website`}),` Â· `,(0,h.jsx)(I,{href:`https://datenschutz-hamburg.de/service-information/beschwerde-oder-hinweis-einreichen`,children:`Beschwerde oder Hinweis einreichen`})]})]}),(0,h.jsxs)(`section`,{id:`datenschutz-aktualisierung`,children:[(0,h.jsx)(`h2`,{children:`18. Aktualisierungsstand`}),(0,h.jsx)(`p`,{children:`Stand: 27. November 2026. Diese ErklÃ¤rung beschreibt den zu diesem Zeitpunkt tatsÃ¤chlich vorgesehenen Betrieb der Ã¶ffentlichen Website. Ã„nderungen an Datenverarbeitungen oder neuen Funktionen kÃ¶nnen eine Aktualisierung erforderlich machen.`}),(0,h.jsxs)(`p`,{children:[(0,h.jsx)(I,{href:`https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679`,children:`Datenschutz-Grundverordnung`}),` Â· `,(0,h.jsx)(I,{href:`https://www.gesetze-im-internet.de/ttdsg/__25.html`,children:`Â§ 25 TDDDG`})]})]})]})}var ne=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),re=o(((e,t)=>{t.exports=ne()})),L=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),ie=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=L()})),R=o((e=>{var t=re(),n=u(),r=ie();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for(`react.element`),h=Symbol.for(`react.transitional.element`),g=Symbol.for(`react.portal`),_=Symbol.for(`react.fragment`),v=Symbol.for(`react.strict_mode`),y=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),x=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),O=Symbol.for(`react.memo_cache_sentinel`),k=Symbol.iterator;function A(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var j=Symbol.for(`react.client.reference`);function M(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _:return`Fragment`;case y:return`Profiler`;case v:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case g:return`Portal`;case x:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?M(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}var N=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},I=[],te=-1;function ne(e){return{current:e}}function L(e){0>te||(e.current=I[te],I[te]=null,te--)}function R(e,t){te++,I[te]=e.current,e.current=t}var ae=ne(null),oe=ne(null),se=ne(null),ce=ne(null);function le(e,t){switch(R(se,t),R(oe,e),R(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}L(ae),R(ae,e)}function ue(){L(ae),L(oe),L(se)}function de(e){e.memoizedState!==null&&R(ce,e);var t=ae.current,n=Ud(t,e.type);t!==n&&(R(oe,e),R(ae,n))}function fe(e){oe.current===e&&(L(ae),L(oe)),ce.current===e&&(L(ce),$f._currentValue=ee)}var pe,me;function he(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``,me=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+pe+e+me}var ge=!1;function _e(e,t){if(!e||ge)return``;ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?he(n):``}function ve(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he(`Lazy`);case 13:return e.child!==t&&t!==null?he(`Suspense Fallback`):he(`Suspense`);case 19:return he(`SuspenseList`);case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return he(`Activity`);default:return``}}function ye(e){try{var t=``,n=null;do t+=ve(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var be=Object.prototype.hasOwnProperty,xe=t.unstable_scheduleCallback,Se=t.unstable_cancelCallback,Ce=t.unstable_shouldYield,we=t.unstable_requestPaint,Te=t.unstable_now,Ee=t.unstable_getCurrentPriorityLevel,De=t.unstable_ImmediatePriority,Oe=t.unstable_UserBlockingPriority,ke=t.unstable_NormalPriority,Ae=t.unstable_LowPriority,je=t.unstable_IdlePriority,Me=t.log,Ne=t.unstable_setDisableYieldValue,Pe=null,Fe=null;function Ie(e){if(typeof Me==`function`&&Ne(e),Fe&&typeof Fe.setStrictMode==`function`)try{Fe.setStrictMode(Pe,e)}catch{}}var Le=Math.clz32?Math.clz32:Be,Re=Math.log,ze=Math.LN2;function Be(e){return e>>>=0,e===0?32:31-(Re(e)/ze|0)|0}var Ve=256,He=262144,Ue=4194304;function We(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ge(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=We(n))):i=We(o):i=We(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=We(n))):i=We(o)):i=We(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ke(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Je(){var e=Ue;return Ue<<=1,!(Ue&62914560)&&(Ue=4194304),e}function Ye(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ze(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Le(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Qe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Le(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function $e(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function et(e,t){var n=t&-t;return n=n&42?1:tt(n),(n&(e.suspendedLanes|t))===0?n:0}function tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function rt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function it(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var at=Math.random().toString(36).slice(2),ot=`__reactFiber$`+at,st=`__reactProps$`+at,ct=`__reactContainer$`+at,lt=`__reactEvents$`+at,ut=`__reactListeners$`+at,dt=`__reactHandles$`+at,ft=`__reactResources$`+at,pt=`__reactMarker$`+at;function mt(e){delete e[ot],delete e[st],delete e[lt],delete e[ut],delete e[dt]}function ht(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[ot])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[ot]||e[ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function yt(e){e[pt]=!0}var bt=new Set,xt={};function St(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(xt[e]=t,e=0;e<t.length;e++)bt.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return be.call(Et,e)?!0:be.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function Ot(e,t,n){if(Dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(N(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[st]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[st]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(xu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[st]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,`passive`,{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=p({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=p({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(p({},Dn,{dataTransfer:0})),An=yn(p({},Sn,{relatedTarget:0})),jn=yn(p({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(p({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(p({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(p({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(p({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(p({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(p({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(p({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(p({},bn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=ln&&`CompositionEvent`in window,qn=null;ln&&`documentMode`in document&&(qn=document.documentMode);var Jn=ln&&`TextEvent`in window&&!qn,Yn=ln&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var z=!1;function er(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function tr(e,t){if(z)return e===`compositionend`||!Kn&&Qn(e,t)?(e=hn(),mn=pn=fn=null,z=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!nr[e.type]:t===`textarea`}function ir(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Dd(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ar=null,or=null;function sr(e){bd(e,0)}function cr(e){if(Ft(_t(e)))return e}function lr(e,t){if(e===`change`)return t}var ur=!1;if(ln){var dr;if(ln){var fr=`oninput`in document;if(!fr){var pr=document.createElement(`div`);pr.setAttribute(`oninput`,`return;`),fr=typeof pr.oninput==`function`}dr=fr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function mr(){ar&&(ar.detachEvent(`onpropertychange`,hr),or=ar=null)}function hr(e){if(e.propertyName===`value`&&cr(or)){var t=[];ir(t,or,e,tn(e)),sn(sr,t)}}function gr(e,t,n){e===`focusin`?(mr(),ar=t,or=n,ar.attachEvent(`onpropertychange`,hr)):e===`focusout`&&mr()}function _r(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return cr(or)}function vr(e,t){if(e===`click`)return cr(t)}function yr(e,t){if(e===`input`||e===`change`)return cr(t)}function br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var xr=typeof Object.is==`function`?Object.is:br;function Sr(e,t){if(xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!be.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Cr(n)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Or=ln&&`documentMode`in document&&11>=document.documentMode,kr=null,Ar=null,jr=null,Mr=!1;function Nr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mr||kr==null||kr!==It(r)||(r=kr,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Sr(jr,r)||(jr=r,r=Dd(Ar,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Fr={animationend:Pr(`Animation`,`AnimationEnd`),animationiteration:Pr(`Animation`,`AnimationIteration`),animationstart:Pr(`Animation`,`AnimationStart`),transitionrun:Pr(`Transition`,`TransitionRun`),transitionstart:Pr(`Transition`,`TransitionStart`),transitioncancel:Pr(`Transition`,`TransitionCancel`),transitionend:Pr(`Transition`,`TransitionEnd`)},Ir={},Lr={};ln&&(Lr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),`TransitionEvent`in window||delete Fr.transitionend.transition);function Rr(e){if(Ir[e])return Ir[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lr)return Ir[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),Hr=Rr(`transitionrun`),Ur=Rr(`transitionstart`),Wr=Rr(`transitioncancel`),Gr=Rr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),St(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Le(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ci(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,ae.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case D:return e=si(31,n,t,a),e.elementType=D,e.lanes=o,e;case _:return fi(n.children,a,o,t);case v:s=8,a|=24;break;case y:return e=si(12,n,t,a|2),e.elementType=y,e.lanes=o,e;case C:return e=si(13,n,t,a),e.elementType=C,e.lanes=o,e;case w:return e=si(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case x:s=10;break a;case b:s=9;break a;case S:s=11;break a;case T:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=si(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:ye(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:ye(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var a=32-Le(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-Le(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,B=null,V=!1,Ni=null,Pi=!1,Fi=Error(i(519));function Ii(e){throw Hi(_i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[st]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Mi=Mi.return}}function zi(e){if(e!==Mi)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&B&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=df(e)}else t===27?(t=B,Qd(e.type)?(e=uf,uf=null,B=e):B=t):B=Mi?lf(e.stateNode.nextSibling):null;return!0}function Bi(){B=Mi=null,V=!1}function Vi(){var e=Ni;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=ne(null),Wi=null,Gi=null;function Ki(e,t,n){R(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,L(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ji(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ji(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Xi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;xr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ce.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(i(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=fd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=P.S;P.S=function(e,t){tu=Te(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=ne(null);function _a(){var e=ga.current;return e===null?K.pooledCache:e}function va(e,t){t===null?R(ga,ga.current):R(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:aa._currentValue,pool:e}}var ba=Error(i(460)),xa=Error(i(474)),Sa=Error(i(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(i(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===_?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Ea(i)===t.type)?(t=a(t,n.props),Na(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case h:return n=di(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case g:return t=hi(t,e.mode,n),t.return=e,t;case E:return t=Ea(t),f(e,t,n)}if(N(t)||A(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===x)return f(e,ea(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case h:return n.key===i?l(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case E:return n=Ea(n),p(e,t,n,r)}if(N(n)||A(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===x)return p(e,t,ea(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case h:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case g:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Ea(r),m(e,t,n,r,i)}if(N(r)||A(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===x)return m(e,t,n,ea(t,r),i);Pa(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Di(i,h),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Di(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Di(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Di(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===_&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case h:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===_){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Ea(l)===r.type){n(e,r.sibling),c=a(r,o.props),Na(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===_?(c=fi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=di(o.type,o.key,o.props,null,e.mode,c),Na(c,o),c.return=e,e=c)}return s(e);case g:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=hi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Ea(o),b(e,r,o,c)}if(N(o))return v(e,r,o,c);if(A(o)){if(l=A(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ma(o),c);if(o.$$typeof===x)return b(e,r,ea(e,o),c);Pa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=pi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=da;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,m=f!==s.lane;if(m?(J&f)===f:(r&f)===f){f!==0&&f===ua&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=p({},d,f);break a;case 2:Ra=!0}}f=s.callback,f!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[f]:m.push(f))}else m={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=ne(null),Za=ne(0);function Qa(e,t){e=Wl,R(Za,e),R(Xa,t),Wl=e|t.baseLanes}function $a(){R(Za,Wl),R(Xa,Xa.current)}function eo(){Wl=Za.current,L(Xa),L(Za)}var to=ne(null),no=null;function ro(e){var t=e.alternate;R(co,co.current&1),R(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){R(co,co.current),R(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(R(co,co.current),R(to,e),no===null&&(no=e)):oo(e)}function oo(){R(co,co.current),R(to,to.current)}function so(e){L(to),no===e&&(no=null),L(co)}var co=ne(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,ho=!1,go=0,_o=0,vo=null,yo=0;function bo(){throw Error(i(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?zs:Bs,ho=!1,a=n(r,i),ho=!1,mo&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){P.H=Rs;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,_o=0,vo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&Zi(e)&&(rc=!0))}function wo(e,t,n,r){H=e;var a=0;do{if(mo&&(vo=null),_o=0,mo=!1,25<=a)throw Error(i(301));if(a+=1,fo=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=Vs,o=t(n,r)}while(mo);return o}function To(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function Eo(){var e=go!==0;return go=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,_o=go=0,vo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function Ao(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=_o;return _o+=1,vo===null&&(vo=[]),e=Ta(vo,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===x)return $i(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=O;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),U,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((uo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,Kl|=p;f=u.action,ho&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!xr(o,e.memoizedState)&&(rc=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);xr(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=H,a=Ao(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!xr((U||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||uo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=jo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function Wo(e){var t=ni(e,2);t!==null&&gu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),ho){Ie(!0);try{n()}finally{Ie(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,U,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(V){var n=K.formState;if(n!==null){a:{var r=H;if(V){if(B){b:{for(var i=B,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=lf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,H,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,H,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),U,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===ba?Sa:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=U;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=jo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();H.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&xo(r,U.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(H.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=jo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),ho){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||uo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),H.lanes|=e,Kl|=e,n)}function xs(e,t,n,r){return xr(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(J&261930)?(rc=!0,e.memoizedState=n):(e=hu(),H.lanes|=e,Kl|=e,t):(e=bs(e,n,r),xr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,Ps(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ma(c,r),mu(e)):Ns(e,t,r,mu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,ee,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},mu())}function Ds(){return $i($f)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Va(n);var r=Ha(t,e,n);r!==null&&(gu(r,t,n),Ua(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ti(e,t,n,r),n!==null&&(gu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,mu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xr(s,o))return ei(e,t,i,0),K===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return gu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=ti(e,n,r,2),t!==null&&gu(t,e,2)}function Fs(e){var t=e.alternate;return e===H||t!==null&&t===H}function Is(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}var Rs={readContext:$i,use:No,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Rs.useEffectEvent=bo;var zs={readContext:$i,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(ho){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(ho){Ie(!0);try{n(t)}finally{Ie(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,H,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=ko();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=ko(),t=K.identifierPrefix;if(V){var n=Ei,r=Ti;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,H)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),U.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return U===null?bs(n,e,t):xs(n,U.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(gu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(gu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(gu(t,e,n),Ua(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){Yr(e)}function Js(e){console.error(e)}function Ys(e){Yr(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Va(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,a,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(V)return t=to.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),Hi(_i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=_i(r,n),a=Qs(e.stateNode,r,a),Wa(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),Hi(_i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=_i(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Wa(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&s&&ki(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Sr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sr(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),$a(),oo(t)):(va(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),$a(),ao(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ia(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(io(t),(e=B)?(e=af(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(io(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(rc||Xi(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=K,r!==null&&(s=et(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ni(e,s),gu(r,e,s),nc;Ou(),t=fc(e,t,n)}else e=o.treeContext,B=lf(s.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=dc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return Qi(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ra||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ra||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Bi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:ya()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(co.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(V){if(a?ro(t):oo(t),(e=B)?(e=af(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(oo(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=fi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(ro(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ro(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=fi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Hi({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||Xi(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=K,s!==null&&(r=et(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),gu(s,e,r),nc;of(c)||Ou(),t=Tc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=lf(c.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(oo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,a,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=ya():(l=aa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ia(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,R(co,o),ic(e,t,r,n),r=V?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Zi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:le(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:de(t);break;case 4:le(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(co,co.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,V&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=ac(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=M(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ba(e,t),qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ki(t,aa,r),r!==o.cache&&Yi(t,[aa],n,!0),Ka(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=_i(Error(i(424)),t),Hi(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=lf(e.firstChild),Mi=t,V=!0,Ni=null,Pi=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Vd(se.current).createElement(n),r[ot]=t,r[st]=e,Fd(r,n,e),yt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return de(t),e===null&&V&&(r=t.stateNode=pf(t.type,t.pendingProps,se.current),Mi=t,Pi=!0,a=B,Qd(t.type)?(uf=a,B=lf(r.firstChild)):B=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=B)&&(r=nf(r,t.type,t.pendingProps,Pi),r===null?a=!1:(t.stateNode=r,Mi=t,B=lf(r.firstChild),Pi=!1,a=!0)),a||Ii(t)),de(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=So(e,t,To,null,null,n),$f._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=rf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Mi=t,B=null,e=!0)),e||Ii(t)),null;case 13:return Sc(e,t,n);case 4:return le(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Qi(t),a=$i(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(a=_a(),a===null&&(a=K,o=oa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},za(t),Ki(t,aa,a)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ki(t,aa,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Da=Ca,xa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Tu())e.flags|=8192;else throw Da=Ca,xa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Je(),e.lanes|=t,Xl|=t)}function Lc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Rc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rc(t),null;case 1:return Rc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),Rc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(Rc(t),Pc(t,a,null,r,n)):(Rc(t),Fc(t,o))):o?o===e.memoizedState?(Rc(t),t.flags&=-16777217):(Nc(t),Rc(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),Rc(t),Pc(t,a,e,r,n)),null;case 27:if(fe(t),n=se.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Rc(t),null}e=ae.current,zi(t)?Li(t,e):(e=pf(a,r,n),t.stateNode=e,Nc(t))}return Rc(t),null;case 5:if(fe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Rc(t),null}if(o=ae.current,zi(t))Li(t,o);else{var s=Vd(se.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ot]=t,o[st]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return Rc(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=se.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Mi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Ii(t,!0)}else e=Vd(e).createTextNode(r),e[ot]=t,t.stateNode=e}return Rc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ot]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rc(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(i(558))}return Rc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ot]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rc(t),a=!1}else a=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),Rc(t),null);case 4:return ue(),e===null&&Cd(t.stateNode.containerInfo),Rc(t),null;case 10:return qi(t.type),Rc(t),null;case 19:if(L(co),r=t.memoizedState,r===null)return Rc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return R(co,co.current&1|2),V&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Te()>nu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!V)return Rc(t),null}else 2*Te()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Rc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Te(),e.sibling=null,n=co.current,R(co,a?n&1|2:n&1),V&&Di(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Rc(t),t.subtreeFlags&6&&(t.flags|=8192)):Rc(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&L(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),Rc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),ue(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fe(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(co),null;case 4:return ue(),null;case 10:return qi(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&L(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ai(t),t.tag){case 3:qi(aa),ue();break;case 26:case 27:case 5:fe(t);break;case 4:ue();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:L(co);break;case 10:qi(t.type);break;case 22:case 23:so(t),eo(),e!==null&&L(ga);break;case 24:qi(aa)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){X(e,e.return,t)}}}function Gc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function W(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[st]=t}catch(t){X(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[ot]=e,t[st]=n}catch(t){X(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,zd=cp,e=Er(e),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:xl(e,n),t===null&&r&4&&W(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),el=i,tl=a}break;case 30:break;default:xl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount==`function`)try{Fe.onCommitFiberUnmount(Pe,n)}catch{}switch(n.tag){case 26:tl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||qc(n,t);var r=cl,i=ll;Qd(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),mf(n.stateNode),cl=r,ll=i;break;case 5:tl||qc(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null)if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:cl!==null&&(ll?(e=cl,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),tl||Uc(4,n,t),ul(e,t,n);break;case 1:tl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){X(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){X(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(tl||n===null||qc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(tl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[ot]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[ot]=e,yt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ot]=e,yt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(tl||n===null||qc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(tl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,a=_l,_l=_f(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){X(e,e.return,t)}nl&&(nl=!1,bl(e));break;case 4:r=_l,_l=_f(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Te()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,gl(t,e),tl=d,el=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:mf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:$c(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&W(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Kf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=_f(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Rl={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return G&2&&J!==0?J&-J:P.T===null?rt():fd()}function hu(){if(Yl===0)if(!(J&536870912)||V){var e=He;He<<=1,!(He&3932160)&&(He=262144),Yl=e}else Yl=536870912;return e=to.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,J,Yl,!1)),Xe(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(ql|=n),Gl===4&&bu(e,J,Yl,!1)),id(e))}function _u(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ke(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Te(),10<a)){if(bu(r,t,Yl,!Vl),Ge(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Ml(t,a,d);var m=(a&62914560)===a?eu-Te():(a&4194048)===a?tu-Te():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Le(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Qe(e,n,t)}function xu(){return G&6?!0:(ad(0,!1),!1)}function Su(){if(q!==null){if(Y===0)var e=q.return;else e=q,Gi=Wi=null,Oo(e),Aa=null,ja=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),K=e,q=n=li(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Ke(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Le(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,$r(),n}function wu(e,t){H=null,P.H=Rs,t===ba||t===Sa?(t=Oa(),Y=3):t===xa?(t=Oa(),Y=4):Y=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Xs(e,_i(t,e.current)))}function Tu(){var e=to.current;return e===null?!0:(J&4194048)===J?no===null:(J&62914560)===J||J&536870912?e===no:!1}function Eu(){var e=P.H;return P.H=Rs,e===null?Rs:e}function Du(){var e=P.A;return P.A=Rl,e}function Ou(){Gl=4,Vl||(J&4194048)!==J&&to.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||K===null||bu(K,J,Yl,!1)}function ku(e,t,n){var r=G;G|=2;var i=Eu(),a=Du();(K!==e||J!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,G=r,P.H=i,P.A=a,q===null&&(K=null,J=0,$r()),o}function Au(){for(;q!==null;)Nu(q)}function ju(e,t){var n=G;G|=2;var r=Eu(),a=Du();K!==e||J!==t?(ru=null,nu=Te()+500,Cu(e,t)):Hl=Ke(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(wa(o)){Y=0,Bl=null,Pu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),id(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:wa(o)?(Y=0,Bl=null,Pu(t)):(Y=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Gf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Iu(u))}break b}}Y=0,Bl=null,Fu(e,t,o,5);break;case 6:Y=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Gi=Wi=null,P.H=r,P.A=a,G=n,q===null?(K=null,J=0,$r(),Gl):0}function Mu(){for(;q!==null&&!Ce();)Nu(q)}function Nu(e){var t=Mc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Oo(t);default:Vc(n,t),t=q=ui(t,Wl),t=Mc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Fu(e,t,n,r){Gi=Wi=null,Oo(t),Aa=null,ja=0;var i=t.return;try{if(tc(e,i,t,n,J)){Gl=1,Xs(e,_i(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Xs(e,_i(n,e.current)),q=null;return}t.flags&32768?(V||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Qr,Ze(e,n,o,s,c,l),e===K&&(q=K=null,J=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(ke,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=G,G|=4;try{al(e,t,n)}finally{G=s,F.p=a,P.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=G;G|=4;try{vl(t,e);var a=Bd,o=Er(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Tr(s.ownerDocument.documentElement,s)){if(c!==null&&Dr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=wr(s,h),v=wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{G=i,F.p=r,P.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=G;G|=4;try{ol(e,t.alternate,t)}finally{G=i,F.p=r,P.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,we();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),nt(n),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot==`function`)try{Fe.onCommitFiberRoot(Pe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=nt(cu),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,ad(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot==`function`)try{Fe.onPostCommitFiberRoot(Pe,o)}catch{}return!0}finally{F.p=a,P.T=r,Hu(e,t)}}function Gu(e,t,n){t=_i(n,t),t=Qs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Xe(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=_i(n,e),n=$s(2),r=Ha(t,n,2),r!==null&&(ec(n,r,t,e),Xe(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Te()-eu?!(G&2)&&Cu(e,0):Jl|=n,Xl===J&&(Xl=0)),id(e)}function Ju(e,t){t===0&&(t=Je()),e=ni(e,t),e!==null&&(Xe(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return xe(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Le(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=Ge(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ke(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Te(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Le(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Ge(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ke(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Se(r),nt(n)){case 2:case 8:n=Oe;break;case 32:n=ke;break;case 268435456:n=je;break;default:n=ke}return r=ld.bind(null,e),n=xe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Se(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=J;return r=Ge(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Te()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){G&6?xe(De,od):sd()})}function fd(){if(rd===0){var e=ua;e===0&&(e=Ve,Ve<<=1,!(Ve&261888)&&(Ve=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[st]||null).action),o=r.submitter;o&&(t=(t=o[st]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<qr.length;gd++){var _d=qr[gd];Jr(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}Jr(zr,`onAnimationEnd`),Jr(Br,`onAnimationIteration`),Jr(Vr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Hr,`onTransitionRun`),Jr(Ur,`onTransitionStart`),Jr(Wr,`onTransitionCancel`),Jr(Gr,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),St(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),St(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),St(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),St(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,bt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=Kr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case zr:case Br:case Vr:l=jn;break;case Gr:l=Hn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[ct]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=lr;else if(rr(c))if(ur)v=yr;else{v=_r;var y=gr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=lr):v=vr;if(v&&=v(e,r)){ir(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(rr(y)||y.contentEditable===`true`)&&(kr=y,Ar=r,jr=null);break;case`focusout`:jr=Ar=kr=null;break;case`mousedown`:Mr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Mr=!1,Nr(s,n,i);break;case`selectionchange`:if(Or)break;case`keydown`:case`keyup`:Nr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else z?Qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(z||x!==`onCompositionStart`?x===`onCompositionEnd`&&z&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,z=!0)),y=Dd(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=$n(n),b!==null&&(x.data=b)))),(b=Jn?er(e,n):tr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=cn(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Ot(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ot(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,Ot(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!xt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[st]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ot(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=F.d;F.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=p({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=p({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),yt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=vt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=p({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);yt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=vt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=p({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),yt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=vt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=p({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),yt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=se.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Rt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),yt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Rt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,yt(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),yt(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),yt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,yt(a),a):(r=n,(a=hf.get(o))&&(r=p({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),yt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),yt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:x,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function np(e){return e?(e=ai,e):ai}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(gu(n,e,t),Ua(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=tt(t);var n=ni(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,dp(e,t,n,r)}finally{F.p=a,P.T=i}}function up(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,dp(e,t,n,r)}finally{F.p=a,P.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Td(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=We(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Le(o);s.entanglements[1]|=c,o&=~c}id(a),!(G&6)&&(nu=Te()+500,ad(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Td(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function fp(e){return e=tn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ee()){case De:return 2;case Oe:return 8;case ke:case Ae:return 32;case je:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,it(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,it(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=gt(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[st]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[st]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[ct]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.6`)throw Error(i(527,Rp,`19.2.6`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Pe=Bp.inject(zp),Fe=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[ct]=t.current,Cd(e),new Ip(t)}})),ae=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=R()}))(),oe=`#politik/begegnungsorte?abschnitt=uebersicht`,se=`ZurÃ¼ck zur Ãœbersicht: BegegnungsstÃ¤ttenkonzept und seine ErgÃ¤nzungen`;function ce(e){let[t,n=``]=e.split(`?`),r=new URLSearchParams(n).get(`abschnitt`);return t===`#politik/begegnungsorte`?r===`uebersicht`?`#encounter-overview-heading`:`#encounter-policy-heading`:/^#politik\/begegnungsorte\/(wissenschaft|betrieb|forschung)$/.test(t)?r&&/^[a-z0-9-]+$/.test(r)?`#encounter-extra-`+r:`#encounter-supplement-heading`:t===`#einsamkeit`||t===`#einsamkeit/stadtteile/t10-6`?`.loneliness-intro h1`:null}function le(e=``){let[t,n=``]=e.replace(/^#/,``).split(`?`),r=t.split(`/`).map(e=>{try{return decodeURIComponent(e)}catch{return``}});return r.join(`/`)===`start/nachrichten`&&r.splice(0,2,`nachrichten`),r.join(`/`)===`politik/beispiel/fahrradbuegel`&&r.splice(0,3,`beitrag`,`example-v8-fahrradbuegel`),[`speicher`,`entscheidungen`,`anforderungen`].includes(r[0])&&r.splice(0,1,`verwaltung`,r[0]),{page:r[0]||`start`,tab:r[1]||``,id:r[2]||``,parts:r,query:n,params:Object.fromEntries(new URLSearchParams(n))}}var ue={placeType:``,historyType:``,district:``,status:``,q:``,place:``,localPlace:``,historicPlace:``,quarter:``,category:``,sort:`new`,kind:`alle`,shown:12};function de(e=``){let t=le(e).params;return{placeType:(t.placeType||``).slice(0,120),historyType:[`historical`,`memory`,`unknown`].includes(t.historyType)?t.historyType:``,district:(t.district||``).slice(0,40),status:(t.status||``).slice(0,40),q:(t.q||``).slice(0,300),place:(t.place||``).slice(0,100),localPlace:(t.localPlace||``).slice(0,100),historicPlace:(t.historicPlace||``).slice(0,100),quarter:(t.quarter||``).slice(0,100),category:(t.category||``).slice(0,100),sort:[`new`,`old`,`time`,`name`,`name-desc`].includes(t.sort)?t.sort:`new`,kind:(t.kind||`alle`).slice(0,40),shown:/^\d+$/.test(t.shown||``)?Math.min(1e4,Math.max(12,+t.shown)):12}}function fe(e,t={}){let n=e.split(`?`)[0],r={...de(e),...t},i=new URLSearchParams;for(let e of Object.keys(ue))r[e]!==ue[e]&&r[e]!==``&&r[e]!=null&&i.set(e,String(r[e]));le(n).page===`geschichte`&&le(e).params.view===`map`&&i.set(`view`,`map`),le(n).page===`bezirk`&&le(e).params.preview===`1`&&i.set(`preview`,`1`),le(n).page===`geschichte`&&le(e).params.from?.startsWith(`#geschichte`)&&le(e).params.from.length<=6e3&&i.set(`from`,le(e).params.from);let a=i.toString();return n+(a?`?`+a:``)}function pe(e,t=`#beitraege`){if(typeof e!=`string`||!e.startsWith(`#`))return t;let n=le(e);return n.page===`geschichte`&&e.length<=6e3&&[``,`orte`,`artikel`].includes(n.tab)?e:[`bezirk`,`start`,`beitraege`,`verzeichnis`,`organisation`,`anliegen`,`erfahrung`,`geschichte`,`politik`].includes(n.page)&&![`eintrag`,`beispiel`].includes(n.tab)?fe(e,de(e)):t}function me(e,t,n={}){let[r,i=``]=e.split(`?`),a=new URLSearchParams(i);for(let[e,t]of Object.entries(n))t!=null&&a.set(e,String(t));return a.set(`from`,pe(t)),r+`?`+a.toString()}var he=`Hier ist Platz fÃ¼r positive persÃ¶nliche Erinnerungen an Bergedorf. Berichte Ã¼ber Gewalttaten, Konflikte oder andere Ã„rgernisse gehÃ¶ren nicht in diesen Bereich. Nutzen Sie dafÃ¼r den Bereich Politik.`,ge={historical:`Geschichte â€“ historischer Beitrag mit Quellen`,memory:`PersÃ¶nliche Erinnerung`};function _e(e={}){if(e.historyLat===``||e.historyLon===``||e.historyLat==null||e.historyLon==null)return null;let t=Number(e.historyLat),n=Number(e.historyLon);return Number.isFinite(t)&&Number.isFinite(n)&&t>=53.35&&t<=53.75&&n>=9.7&&n<=10.5?{lat:t,lon:n}:null}function ve(e=[]){return e.filter(e=>e.kind===`geschichte`&&e.published&&!e.hidden&&!e.withdrawn&&!e.retiredExample&&!e.isExample&&e.origin!==`example`).flatMap(e=>{let t=_e(e.published);return t?[{...t,id:e.id,title:e.published.title,version:e.version,historyType:e.published.historyType||``,memoryPlaceId:e.published.historyType===`memory`?ye(e.entryContext?.historyMemoryPlaceId||e.published.historyMemoryPlaceId):``,street:e.published.historyStreet||``,number:e.published.historyNumber||``,city:e.published.historyCity||``,address:[e.published.historyStreet,e.published.historyNumber,e.published.historyCity].filter(Boolean).join(` `),period:e.published.precision===`zeitspanne`?[e.published.year,e.published.endYear].filter(Boolean).join(`â€“`):e.published.year||``,localWay:Ce(e.published)}]:[]})}function ye(e){return typeof e==`string`&&/^[a-zA-Z0-9][a-zA-Z0-9._:-]{7,119}$/.test(e)?e:``}function be(e=[]){let t=new Map;for(let n of ve(e).filter(e=>e.historyType===`memory`)){let e=n.memoryPlaceId||`legacy:`+n.id;t.has(e)||t.set(e,{id:e,memoryPlaceId:n.memoryPlaceId,lat:n.lat,lon:n.lon,address:n.address,entries:[]}),t.get(e).entries.push(n)}return[...t.values()].map(e=>({...e,entries:e.entries.slice().sort((e,t)=>e.title.localeCompare(t.title,`de`))}))}function xe(e={}){let t=_e({historyLat:e.historyLat,historyLon:e.historyLon});return t?{historyType:`memory`,historyLat:String(t.lat),historyLon:String(t.lon),...typeof e.historyStreet==`string`?{historyStreet:e.historyStreet.slice(0,180)}:{},...typeof e.historyNumber==`string`?{historyNumber:e.historyNumber.slice(0,32)}:{},...typeof e.historyCity==`string`?{historyCity:e.historyCity.slice(0,80)}:{}}:null}var Se=`Ã–rtlich Ã¼berlieferte Bezeichnung Â· keine amtliche Benennung`;function Ce(e={}){return e.historyType===`memory`&&e.localWayName?.trim()?{name:e.localWayName,source:e.localWaySource||``,period:e.localWayPeriod||``}:null}function we(e,t=`#geschichte`){if(typeof e!=`string`||e.length>6e3)return t;let n=le(e);return e.startsWith(`#geschichte`)&&n.page===`geschichte`&&[``,`orte`,`artikel`].includes(n.tab)?e:t}function Te(e){let t=le(we(e));return t.tab===`orte`?`ZurÃ¼ck zum Ortsverzeichnis`:t.params.historyType===`memory`?`ZurÃ¼ck zu den persÃ¶nlichen Erinnerungen`:`ZurÃ¼ck zur Geschichte`}function Ee(e,t={}){let n=we(e),r=new URLSearchParams({historyEntry:`1`,from:n,historyType:`memory`}),i=xe(t);if(i)for(let[e,t]of Object.entries(i))r.set(e,String(t));let a=ye(t.historyMemoryPlaceId);return a&&r.set(`historyMemoryPlaceId`,a),`#meine/neu/geschichte?`+r}function De(e){if(!e||e.area!==`geschichte`)return null;let t={area:`geschichte`,historyType:[`historical`,`memory`].includes(e.historyType)?e.historyType:``,from:we(e.from)},n=xe(e);n&&Object.assign(t,n);let r=ye(e.historyMemoryPlaceId);return r&&(t.historyMemoryPlaceId=r),t}var Oe=(0,d.createContext)(null),ke=null;function Ae(){return ke&&history.state?.bgAdminRead===ke.token?ke:null}function je(e){if(Je(),!location.hash.startsWith(`#verwaltung`)||location.hash.startsWith(`#verwaltung/lesefassung`))return qe(e);ke={origin:location.hash,index:Fe,scroll:window.scrollY,focus:document.activeElement,token:crypto.randomUUID(),hadDirty:!!Re.size},qe(e,{preserve:!0})}function Me(){let e=Ae();if(!e)return qe(`#verwaltung`);ze()&&(Re.clear(),history.go(e.index-Fe))}function Ne(){let e=ke;e&&location.hash===e.origin&&!Ae()&&requestAnimationFrame(()=>requestAnimationFrame(()=>{e.focus?.isConnected&&e.focus.focus?.({preventScroll:!0}),window.scrollTo({top:e.scroll,behavior:`instant`})}))}var Pe=``,Fe=0,Ie=!1,Le=!1,Re=new Set,ze=()=>!Re.size||window.confirm(`Nicht gespeicherte Eingaben gehen beim Ansichtswechsel verloren. Trotzdem wechseln?`);function Be(){return ze()?(Re.clear(),!0):!1}function Ve(e){try{return Number(sessionStorage.getItem(`bg-scroll:`+e)||0)}catch{return 0}}var He=!1,Ue;function We(){if(He||typeof window>`u`)return;let e=window.scrollY||0;history.replaceState({...history.state,bgScroll:e},``);try{sessionStorage.setItem(`bg-scroll:`+location.hash,String(e))}catch{}}function Ge(){if(typeof window>`u`||ce(location.hash))return;let e=history.state?.bgScroll??Ve(location.hash);if(!e){window.scrollTo({top:0,behavior:`instant`});return}He=!0;let t=Date.now(),n=()=>{window.scrollTo({top:e,behavior:`instant`}),Date.now()-t<1600&&Math.abs(window.scrollY-e)>2?setTimeout(n,60):He=!1};requestAnimationFrame(()=>requestAnimationFrame(n))}function Ke(){window.dispatchEvent(new Event(`bg-navigation`))}function qe(e,t={}){if(e=e.startsWith(`#`)?e:`#`+e,Ae()&&/^#verwaltung(?:[/?]|$)/.test(e)&&!e.startsWith(`#verwaltung/lesefassung`)&&!t.preserve){Me();return}if(e===location.hash){t.restore?Ge():ce(e)&&Ke();return}We();let n=e.split(`?`)[0]!==location.hash.split(`?`)[0];n&&!t.preserve&&!ze()||(n&&!t.preserve&&Re.clear(),t.replace||Fe++,history[t.replace?`replaceState`:`pushState`]({...history.state,bgIndex:Fe,bgAdminRead:t.preserve?ke?.token:history.state?.bgAdminRead,bgSaved:null,bgScroll:t.restore?Ve(e):t.scroll===!1&&window.scrollY||0,bgFrom:location.hash,bgMapView:n?null:history.state?.bgMapView},``,e),Pe=e,Ke(),t.restore?Ge():t.scroll!==!1&&window.scrollTo({top:0,behavior:`instant`}))}function Je(){Ie||(Ie=!0,Pe=location.hash,Fe=history.state?.bgIndex??0,history.replaceState({...history.state,bgIndex:Fe},``),`scrollRestoration`in history&&(history.scrollRestoration=`manual`),window.addEventListener(`scroll`,()=>{clearTimeout(Ue),Ue=setTimeout(We,80)},{passive:!0}),window.addEventListener(`pagehide`,We),Ge(),window.addEventListener(`beforeunload`,e=>{(Re.size||Ae()?.hadDirty)&&(e.preventDefault(),e.returnValue=``)}),window.addEventListener(`popstate`,()=>{let e=history.state?.bgIndex;if(Le){Le=!1;return}let t=location.hash.split(`?`)[0]!==Pe.split(`?`)[0],n=ke&&history.state?.bgAdminRead===ke.token&&Pe===ke.origin;if(t&&!n&&Re.size&&!ze()){typeof e==`number`&&e!==Fe?(Le=!0,history.go(Fe-e)):history.replaceState({...history.state,bgIndex:Fe},``,Pe);return}t&&!n&&Re.clear(),Fe=e??Fe,Pe=location.hash,Ke(),Ne(),Ge()}),document.addEventListener(`click`,e=>{let t=e.target.closest?.(`a[href^="#"]`);if(!t||t.target&&t.target!==`_self`||e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let n=t.getAttribute(`href`);/^#geschichte\/(?:orte(?:[/?]|$)|artikel\/)/.test(n)&&!new URLSearchParams(n.split(`?`)[1]||``).has(`from`)&&location.hash.startsWith(`#geschichte`)&&(n+=(n.includes(`?`)?`&`:`?`)+`from=`+encodeURIComponent(we(location.hash))),!document.getElementById(n.slice(1))&&(e.preventDefault(),qe(n))}),window.addEventListener(`hashchange`,()=>{if(!Le&&location.hash!==Pe){if(!ze()){history.replaceState({...history.state,bgIndex:Fe},``,Pe);return}Re.clear(),Pe=location.hash,Fe++,history.replaceState({...history.state,bgIndex:Fe},``),Ke()}}))}function Ye(){let e=(0,d.useContext)(Oe),[t,n]=(0,d.useState)(()=>le(Ie?Pe:``));return(0,d.useEffect)(()=>{Je();let e=()=>n(le(location.hash));return e(),window.addEventListener(`bg-navigation`,e),()=>window.removeEventListener(`bg-navigation`,e)},[]),e||t}function Xe(){let e=Symbol();return Re.add(e),()=>{Re.delete(e)}}function Ze(e){(0,d.useEffect)(()=>e?Xe():void 0,[e])}function Qe(e){let[t,n]=(0,d.useState)(e),r=JSON.stringify(e),i=(0,d.useRef)(r);return(0,d.useEffect)(()=>{let t=i.current;n(n=>JSON.stringify(n)===t?e:n),i.current=r},[r]),Ze(JSON.stringify(t)!==r),[t,n]}function $e(){let e=Ye(),t=(0,d.useRef)(!1);(0,d.useEffect)(()=>{let e=()=>{t.current=!1};return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);let n=de(`#`+e.parts.map(encodeURIComponent).join(`/`)+(e.query?`?`+e.query:``));function r(e,n=!1){qe(fe(location.hash,e),{replace:n&&t.current,scroll:!1}),t.current=n}return{values:n,update:r,endTyping:()=>{t.current=!1},hash:`#`+e.parts.map(encodeURIComponent).join(`/`)+(e.query?`?`+e.query:``)}}var et={checked:`2026-11-19`,sourceDate:`2026-11-18`,intro:[{type:`heading`,level:1,text:`**Mietobergrenzen, Grundsicherung und das Recht, in der eigenen Wohnung zu bleiben**`},{type:`p`,text:`Umfassender Ratgeber zu Mietkosten, WohnungsgrÃ¶ÃŸe, gesundheitlichen EinschrÃ¤nkungen, Kostensenkungsverfahren, Umzugskosten und aktueller Rechtsprechung â€“ mit besonderem Schwerpunkt Hamburg.`},{type:`p`,text:`Rechts- und Recherchestand: 18. November 2026`},{type:`heading`,level:2,text:`**Einleitung: Muss man wegen der Grundsicherung seine Wohnung aufgeben?**`},{type:`p`,text:`Viele Menschen befÃ¼rchten, ihre bisherige Wohnung verlassen zu mÃ¼ssen, wenn sie Grundsicherung beziehen und die Miete Ã¼ber der vom Jobcenter festgelegten Angemessenheitsgrenze liegt.`},{type:`p`,text:`Besonders betroffen sind Menschen, die bereits seit vielen Jahren in ihrer Wohnung leben, Ã¤ltere Menschen, Menschen mit Behinderungen, chronisch Erkrankte und Personen, die einen Umzug aus eigener Kraft nicht bewÃ¤ltigen kÃ¶nnen.`},{type:`p`,text:`Dabei stellen sich zahlreiche Fragen: Darf eine alleinlebende Person weiterhin eine Drei-Zimmer-Wohnung bewohnen? Werden zusÃ¤tzliche Quadratmeter von der KostenÃ¼bernahme ausgeschlossen? Was passiert, wenn die Miete Ã¼ber der Ã¶rtlichen Grenze liegt? Wann ist ein Umzug unwirtschaftlich oder unzumutbar? Und wer bezahlt das Einpacken, den MÃ¶belaufbau, notwendige Handwerkerarbeiten und die Renovierung einer neuen Wohnung?`},{type:`p`,text:`Seit dem 1. Juli 2026 sind diese Fragen noch wichtiger geworden. Eine neue gesetzliche Bestimmung begrenzt die wÃ¤hrend der Karenzzeit grundsÃ¤tzlich anerkennungsfÃ¤higen Unterkunftskosten auf das Eineinhalbfache der Ã¶rtlichen Angemessenheitsgrenze.`},{type:`p`,text:`Mehrere Sozialgerichte haben bereits Ã¼ber die Anwendung dieser Regelung entschieden.`},{type:`p`,text:`**Die zentrale Erkenntnis lautet: Eine Ãœberschreitung der Ã¶rtlichen Mietobergrenze bedeutet nicht automatisch, dass jemand seine Wohnung verlassen muss oder dass die tatsÃ¤chlichen Mietkosten sofort gekÃ¼rzt werden dÃ¼rfen.**`},{type:`p`,text:`Das Gesetz enthÃ¤lt mehrere Schutzvorschriften. Hinzu kommen Anforderungen an die Ermittlung der Mietobergrenzen, an die Zumutbarkeit von KostensenkungsmaÃŸnahmen und an deren Wirtschaftlichkeit.`},{type:`p`,text:`Dieser Ratgeber erklÃ¤rt die geltenden Bestimmungen, die Hamburger Verwaltungspraxis und die bisher bekannten Gerichtsentscheidungen.`},{type:`p`,text:`Er bezieht sich hauptsÃ¤chlich auf die Grundsicherung fÃ¼r Arbeitsuchende nach dem SGB II. Wo andere Regelungen gelten, insbesondere bei Sozialhilfe und Grundsicherung im Alter oder bei Erwerbsminderung nach dem SGB XII, wird dies kenntlich gemacht.`},{type:`heading`,level:3,text:`**FÃ¼r welche Sozialleistungen gilt dieser Ratgeber?**`},{type:`p`,text:`Die 150-Prozent-Begrenzung wÃ¤hrend der Karenzzeit gilt im SGB II nach Â§ 22 Absatz 1 Satz 6 und auch im SGB XII nach Â§ 35 Absatz 1 Satz 7. Beide Rechtskreise werden eigenstÃ¤ndig geprÃ¼ft.`},{type:`p`,text:`Davon zu unterscheiden sind die Sozialhilfe und die Grundsicherung im Alter und bei Erwerbsminderung nach dem ZwÃ¶lften Buch Sozialgesetzbuch (SGB XII).`},{type:`p`,text:`Auch das SGB XII enthÃ¤lt gesetzliche Regelungen zur Angemessenheit der Unterkunftskosten, zur Zumutbarkeit einer Kostensenkung und zur Ãœbernahme bestimmter Kosten eines Wohnungswechsels. Diese stimmen jedoch nicht in allen Einzelheiten mit dem SGB II Ã¼berein.`},{type:`p`,text:`Seit dem 1. Juli 2026 enthÃ¤lt das SGB XII eine eigene entsprechende Regelung. Nach Â§ 35 Absatz 1 Satz 8 SGB XII kÃ¶nnen bei unabweisbaren Aufwendungen oder Haushaltsgemeinschaften mit Kindern hÃ¶here Kosten anerkannt werden. Die SonderfÃ¤lle des Â§ 42a SGB XII sind zusÃ¤tzlich zu beachten.`},{type:`p`,text:`Die hier erlÃ¤uterten Gerichtsentscheidungen zur neuen Grenze betreffen das SGB II. Die Hamburger Richtwerte sind dagegen in den Ã¶rtlichen Vorgaben beider Rechtskreise enthalten; Zahlenbeispiele ersetzen keine individuelle Berechnung.`},{type:`p`,text:`Wer Leistungen nach dem SGB XII erhÃ¤lt, muss die dort geltenden gesetzlichen Bestimmungen und die entsprechende Hamburger Fachanweisung berÃ¼cksichtigen.`}],sections:[{number:1,title:`Die gesetzlichen Grundlagen der MietkostenÃ¼bernahme`,blocks:[{type:`p`,text:`Die wichtigste Vorschrift ist Â§ 22 Sozialgesetzbuch II (SGB II).`},{type:`p`,text:`Sie regelt die sogenannten *Bedarfe fÃ¼r Unterkunft und Heizung*.`},{type:`p`,text:`GrundsÃ¤tzlich werden die tatsÃ¤chlichen Aufwendungen anerkannt, soweit sie angemessen sind.`},{type:`p`,text:`Zur Unterkunft gehÃ¶ren insbesondere die Nettokaltmiete und die kalten Betriebskosten. Heizkosten werden gesondert auf ihre Angemessenheit geprÃ¼ft.`},{type:`p`,text:`Die gesetzlichen Bestimmungen enthalten darÃ¼ber hinaus Regelungen zur Karenzzeit, zu erhÃ¶hten Unterkunftskosten, zur Kostensenkung, zum Wohnungswechsel und zur Ãœbernahme bestimmter Umzugskosten.`},{type:`p`,text:`Es muss deshalb zwischen mehreren unterschiedlichen Fragen unterschieden werden:`},{type:`ul`,items:[`Ist die Wohnung nach den Ã¶rtlichen Richtwerten angemessen?`,`Besteht eine gesetzliche Ausnahme von diesen Richtwerten?`,`Muss eine hÃ¶here Miete vorÃ¼bergehend oder weiterhin anerkannt werden?`,`Ist eine Kostensenkung mÃ¶glich und zumutbar?`,`WÃ¤re ein Wohnungswechsel wirtschaftlich?`,`Welche Kosten mÃ¼sste der LeistungstrÃ¤ger bei einem notwendigen Umzug Ã¼bernehmen?`]},{type:`p`,text:`Diese Fragen mÃ¼ssen jeweils rechtlich eigenstÃ¤ndig beantwortet werden.`},{type:`p`,text:`**Gesetzliche Grundlage:** [Â§ 22 SGB II â€“ Bedarfe fÃ¼r Unterkunft und Heizung](https://www.gesetze-im-internet.de/sgb_2/__22.html).`}]},{number:2,title:`Was bedeutet Bruttokaltmiete?`,blocks:[{type:`p`,text:`Bei der Hamburger AngemessenheitsprÃ¼fung ist grundsÃ¤tzlich die Bruttokaltmiete maÃŸgeblich.`},{type:`p`,text:`Diese setzt sich zusammen aus:`},{type:`table`,rows:[[`Bestandteil`,`BerÃ¼cksichtigung`],[`Nettokaltmiete (Grundmiete)`,`Bestandteil der Bruttokaltmiete`],[`Kalte Betriebskosten, beispielsweise Wasser, MÃ¼llabfuhr, Hausreinigung`,`Bestandteil der Bruttokaltmiete`],[`Heizkosten`,`GrundsÃ¤tzlich gesonderte PrÃ¼fung`],[`Kosten fÃ¼r zentrale Warmwasserbereitung`,`In der Regel Bestandteil der Heizkosten`],[`Haushaltsstrom`,`GrundsÃ¤tzlich aus dem Regelbedarf zu finanzieren, nicht aus der Bruttokaltmiete`]]},{type:`p`,text:`Ein Beispiel:`},{type:`table`,rows:[[`Kostenart`,`Monatlich`],[`Nettokaltmiete`,`700 â‚¬`],[`Kalte Betriebskosten`,`161 â‚¬`],[`**Bruttokaltmiete**`,`**861 â‚¬**`],[`Heizkosten`,`120 â‚¬`],[`Gesamte monatliche Wohnkosten`,`981 â‚¬`]]},{type:`p`,text:`Die fÃ¼r die Unterkunft maÃŸgebliche Bruttokaltmiete betrÃ¤gt in diesem Beispiel 861 Euro, nicht 981 Euro.`},{type:`p`,text:`Auch die 150-Prozent-Grenze bezieht sich grundsÃ¤tzlich auf die Unterkunftskosten und nicht auf eine pauschale Gesamtgrenze einschlieÃŸlich Heizkosten.`}]},{number:3,title:`Wie werden Mietobergrenzen festgelegt?`,blocks:[{type:`p`,text:`Die Mietobergrenzen werden nicht unmittelbar als feste EurobetrÃ¤ge im SGB II bestimmt.`},{type:`p`,text:`Stattdessen mÃ¼ssen die zustÃ¤ndigen GrundsicherungstrÃ¤ger ermitteln, welche Unterkunftskosten fÃ¼r Haushalte unterschiedlicher GrÃ¶ÃŸe innerhalb ihres maÃŸgeblichen Wohnungsmarktes angemessen sind.`},{type:`p`,text:`HierfÃ¼r ist grundsÃ¤tzlich ein sogenanntes *schlÃ¼ssiges Konzept* erforderlich.`},{type:`p`,text:`Die Ermittlung soll nachvollziehbar und auf einer geeigneten Datengrundlage erfolgen. Insbesondere mÃ¼ssen der Ã¶rtliche Vergleichsraum, die berÃ¼cksichtigten Wohnungen, die Erhebungsmethode und die Auswertung Ã¼berprÃ¼fbar sein.`},{type:`p`,text:`Eine zentrale rechtliche Anforderung besteht darin, dass die Werte den maÃŸgeblichen Wohnungsmarkt tatsÃ¤chlich abbilden.`},{type:`heading`,level:3,text:`**Die Berechnung in Hamburg**`},{type:`p`,text:`Hamburg verwendet nach Angaben der SozialbehÃ¶rde den Hamburger Mietenspiegel 2025 und eine Auswertung der Betriebskosten von rund 99.000 Haushalten.`},{type:`p`,text:`Dabei handelt es sich um eine eigenstÃ¤ndige Ã¶rtliche Datengrundlage.`},{type:`p`,text:`Die SozialbehÃ¶rde verÃ¶ffentlichte diese Informationen unter anderem am 28. September 2026.`},{type:`p`,text:`Damit unterscheidet sich das Hamburger Vorgehen von FÃ¤llen, in denen ein Jobcenter mangels schlÃ¼ssigen Konzepts lediglich auf die Wohngeldtabelle und einen Sicherheitszuschlag zurÃ¼ckgreift.`},{type:`p`,text:`Die bloÃŸe Verwendung von Mietspiegel- und Betriebskostendaten beweist allerdings noch nicht, dass jede Berechnung rechtlich fehlerfrei ist. Die Angemessenheitsgrenzen bleiben gerichtlich Ã¼berprÃ¼fbar.`},{type:`p`,text:`**Amtliche Informationsseite:** [Hamburger SozialbehÃ¶rde â€“ Mietobergrenzen und Berechnungsgrundlagen](https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/soziales/sozialhilfe/kosten-der-unterkunft-41098).`}]},{number:4,title:`Welche Mietobergrenzen gelten in Hamburg?`,blocks:[{type:`p`,text:`Seit dem 28. April 2026 betrÃ¤gt der regulÃ¤re Richtwert fÃ¼r einen Einpersonenhaushalt in Hamburg **574 Euro Bruttokaltmiete monatlich**.`},{type:`p`,text:`Dieser Betrag umfasst die Nettokaltmiete einschlieÃŸlich kalter Betriebskosten, jedoch ohne Heizkosten.`},{type:`p`,text:`Die Ã¶rtlichen Richtwerte sind nach HaushaltsgrÃ¶ÃŸe gestaffelt.`},{type:`p`,text:`FÃ¼r einen Einpersonenhaushalt ergibt sich folgende GegenÃ¼berstellung:`},{type:`p`,text:`RegulÃ¤rer Richtwert`},{type:`heading`,level:1,text:`**574,00 â‚¬**`},{type:`p`,text:`Monatliche Bruttokaltmiete`},{type:`p`,text:`150 % des Richtwerts`},{type:`heading`,level:1,text:`**861,00 â‚¬**`},{type:`p`,text:`Rechnerische Grenze nach der neuen gesetzlichen Regelung`},{type:`p`,text:`Stand 28. April 2026. Die 861 Euro stellen keine allgemeine oder dauerhaft garantierte Mietobergrenze dar.`},{type:`p`,text:`Die amtlichen Richtwerte sind hier verÃ¶ffentlicht:`},{type:`p`,text:`[Hamburg â€“ Amtliche Angemessenheitsgrenzen ab 28. April 2026 (PDF)](https://dokumente.hamburg.de/resource/blob/46624/dd3a3e0888e4d0eb45e3f23f6f480892/fa-sgbii-22-kdu-14-angemessenheitsgrenzen-infoblatt-data.pdf).`},{type:`p`,text:`Zu beachten ist, dass Hamburg fÃ¼r bestimmte persÃ¶nliche Lebenslagen und bestimmte Ã¶rtliche Konstellationen ZuschlÃ¤ge beziehungsweise besondere Angemessenheitsregelungen vorsieht. Daher kann im Einzelfall ein anderer maÃŸgeblicher Betrag gelten.`},{type:`heading`,level:3,text:`**Hamburger ZuschlÃ¤ge: persÃ¶nliche und Ã¶rtliche Voraussetzungen**`},{type:`p`,text:`Die Fachanweisungen beider Rechtskreise unterscheiden in Ziffer 3 mehrere ZuschlÃ¤ge zum maÃŸgeblichen Grundwert:`},{type:`table`,rows:[[`Voraussetzung`,`Zuschlag und wichtige Grenzen`],[`Wohnungslosigkeit, unmittelbar nachweisbar drohende Wohnungslosigkeit oder Frauenhaus`,`Bis 15 Prozent; nach mindestens sechs Monaten vergeblicher Suche bis 30 Prozent unter den Verwaltungsvoraussetzungen. Bei mindestens sechsmonatiger Ã¶ffentlich-rechtlicher Unterbringung mit minderjÃ¤hrigem Kind wird vergebliche Suche unter den genannten Voraussetzungen vermutet.`],[`Dauerhafte Erkrankung, Behinderung oder besondere LebensumstÃ¤nde`,`Bis 10 Prozent, etwa wegen notwendiger MehrflÃ¤che, NÃ¤he zu Versorgung/UnterstÃ¼tzung oder stark eingeschrÃ¤nkter Wohnungsauswahl; Nachweise erforderlich. Dauerhaft bedeutet grundsÃ¤tzlich mindestens zwÃ¶lf Monate.`],[`Gemeinsam ausgeÃ¼btes Sorgerecht mit Betreuung auch unter der Woche`,`Bis 15 Prozent unter den Voraussetzungen der Ziffer 3.3; bloÃŸe Wochenend- oder Ferienaufenthalte genÃ¼gen nicht.`],[`Wohnung in einem in Anlage 3 ausdrÃ¼cklich aufgefÃ¼hrten Stadtteil`,`Bis 10 Prozent; nicht pauschal fÃ¼r den gesamten Bezirk oder jeden Stadtteil.`]]},{type:`p`,text:`Die ZuschlÃ¤ge der Ziffern 3.2 bis 3.4 kÃ¶nnen unter den jeweiligen Voraussetzungen nebeneinander auftreten und werden jeweils vom Grundwert berechnet. Der Zuschlag nach Ziffer 3.1 wird nicht neben anderen ZuschlÃ¤gen gewÃ¤hrt. Die PrÃ¼fung betrifft die konkrete Bedarfs- beziehungsweise Einsatzgemeinschaft; ein einzelner Zuschlag nach Ziffer 3.2 wird nicht mehrfach gewÃ¤hrt.`},{type:`p`,text:`Wichtig fÃ¼r Bergedorf: Bezirk und amtlicher Stadtteil sind zu unterscheiden. Der Stadtteil Bergedorf selbst steht nicht in Anlage 3. Aus dem Bezirk gehÃ¶ren dort unter anderem AllermÃ¶he, Altengamme, Kirchwerder, Neuengamme, Ochsenwerder, Reitbrook, Spadenland und Tatenberg dazu. MaÃŸgeblich ist die vollstÃ¤ndige amtliche Anlage, nicht eine pauschale Bezirkszuordnung.`},{type:`p`,text:`Die besonderen FlÃ¤chenwerte 50/60/75/90/105/120 Quadratmeter und zusÃ¤tzlich 15 Quadratmeter je weiterer Person betreffen nach Ziffer 2.1 bestimmte Wohnungen des 1. FÃ¶rderwegs. FÃ¼r andere Wohnungen folgt daraus keine allgemeine starre WohnflÃ¤chenhÃ¶chstgrenze. Bei besonderem Bedarf enthalten diese FÃ¶rderwohnungsregeln zusÃ¤tzliche FlÃ¤chenmÃ¶glichkeiten; maÃŸgeblich sind die konkrete Wohnungsart und Berechtigung.`},{type:`p`,text:`Quellen: Hamburger Fachanweisung SGB II, Ziffern 2.1 und 3 sowie Anlage 3; eigene SGB-XII-Arbeitshilfe, entsprechende Abschnitte. Beide Stand 22. Mai 2026. ZuschlÃ¤ge Ã¤ndern nicht eigenstÃ¤ndig die bundesgesetzlichen Karenzzeitvoraussetzungen.`}]},{number:5,title:`Wie groÃŸ darf eine Wohnung sein?`,blocks:[{type:`p`,text:`Eine hÃ¤ufige Sorge betrifft die WohnungsgrÃ¶ÃŸe.`},{type:`p`,text:`Beispielsweise wohnt eine alleinlebende Person in einer Drei-Zimmer-Wohnung mit 65 Quadratmetern. Die Hamburger Fachanweisungen nennen 50 Quadratmeter fÃ¼r eine Person im besonderen Regelungsbereich bestimmter Wohnungen des 1. FÃ¶rderwegs. Das ist keine allgemeine WohnflÃ¤chenobergrenze fÃ¼r alle Mietwohnungen. Die folgende Modellrechnung veranschaulicht die Kostenbetrachtung; sie setzt keine zusÃ¤tzliche allgemeine 50-Quadratmeter-Regel in Kraft.`},{type:`p`,text:`Daraus folgt jedoch **keine Verpflichtung, hÃ¶chstens 50 Quadratmeter zu bewohnen**.`},{type:`p`,text:`Bei der grundsÃ¤tzlichen Bewertung der Unterkunftskosten gilt die sogenannte *Produkttheorie*.`},{type:`p`,text:`Entscheidend ist das Produkt aus angemessener WohnflÃ¤che und angemessenem Preis je Quadratmeter, das sich im maÃŸgeblichen Gesamtbetrag ausdrÃ¼ckt.`},{type:`p`,text:`Eine grÃ¶ÃŸere Wohnung kann deshalb angemessen sein, wenn ihr Quadratmeterpreis entsprechend niedriger ist.`},{type:`p`,text:`Beispiel:`},{type:`table`,rows:[[`Wohnung`,`Bruttokaltmiete`,`Vergleich mit 574 â‚¬`],[`50 mÂ², zwei Zimmer`,`550 â‚¬`,`Unter dem Richtwert`],[`65 mÂ², drei Zimmer`,`550 â‚¬`,`Ebenfalls unter dem Richtwert`],[`65 mÂ², drei Zimmer`,`650 â‚¬`,`Ãœber dem regulÃ¤ren Richtwert`],[`80 mÂ², drei Zimmer`,`570 â‚¬`,`Unter dem Richtwert`]]},{type:`p`,text:`Die Zimmerzahl oder eine grÃ¶ÃŸere tatsÃ¤chliche WohnflÃ¤che fÃ¼hren also nicht automatisch zu einer KÃ¼rzung.`},{type:`p`,text:`Bei einer 65-Quadratmeter-Wohnung werden auch nicht einfach 15 Quadratmeter von den Unterkunftskosten abgezogen.`},{type:`p`,text:`Allerdings kÃ¶nnen die tatsÃ¤chliche FlÃ¤che bei der HeizkostenprÃ¼fung und die seit Juli 2026 gesetzlich vorgesehenen besonderen Quadratmeterpreisgrenzen relevant werden.`},{type:`p`,text:`AuÃŸerdem sind bei gesundheitlichen EinschrÃ¤nkungen gegebenenfalls besondere Wohnraumbedarfe zu berÃ¼cksichtigen.`},{type:`p`,text:`**Eine grÃ¶ÃŸere Wohnung ist somit nicht automatisch eine unangemessene Wohnung.**`}]},{number:6,title:`Die neue 150-Prozent-Grenze seit dem 1. Juli 2026`,blocks:[{type:`p`,text:`Mit Wirkung zum 1. Juli 2026 wurde Â§ 22 Absatz 1 SGB II geÃ¤ndert.`},{type:`p`,text:`Seitdem gilt grundsÃ¤tzlich eine neue Obergrenze fÃ¼r die Anerkennung tatsÃ¤chlicher Unterkunftskosten wÃ¤hrend der Karenzzeit.`},{type:`p`,text:`Die Aufwendungen werden nach Â§ 22 Absatz 1 Satz 6 SGB II grundsÃ¤tzlich nicht als Bedarf anerkannt, soweit sie mehr als das Eineinhalbfache der abstrakt angemessenen Unterkunftskosten betragen.`},{type:`p`,text:`Bei einem Ã¶rtlichen Richtwert von 574 Euro entspricht das:`},{type:`p`,text:`574 â‚¬ Ã— 1,5 = 861 â‚¬`},{type:`p`,text:`Es handelt sich um eine Begrenzung wÃ¤hrend der Karenzzeit, nicht um eine ErhÃ¶hung des regulÃ¤ren Richtwerts auf 861 Euro.`},{type:`heading`,level:3,text:`**Beispiel**`},{type:`p`,text:`Eine alleinlebende Person wohnt in einer Wohnung mit 1.000 Euro Bruttokaltmiete.`},{type:`p`,text:`Der Ã¶rtliche Richtwert betrÃ¤gt 574 Euro.`},{type:`p`,text:`Die rechnerische 150-Prozent-Grenze liegt bei 861 Euro.`},{type:`p`,text:`Ohne einschlÃ¤gige Ausnahme wÃ¤ren wÃ¤hrend der Karenzzeit grundsÃ¤tzlich 861 Euro anstelle der tatsÃ¤chlichen 1.000 Euro als Unterkunftskosten anzuerkennen.`},{type:`p`,text:`Die Differenz betrÃ¤gt 139 Euro monatlich.`},{type:`p`,text:`Ob die Begrenzung im konkreten Fall rechtmÃ¤ÃŸig angewendet werden darf, hÃ¤ngt jedoch auch davon ab, ob die Ã¶rtliche Angemessenheitsgrenze ordnungsgemÃ¤ÃŸ ermittelt wurde und welche weiteren gesetzlichen Schutzvorschriften eingreifen.`},{type:`heading`,level:3,text:`**Gesetzliche Ausnahmen wÃ¤hrend der Karenzzeit**`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 7 SGB II erlaubt im Einzelfall die Anerkennung hÃ¶herer Aufwendungen, wenn diese unabweisbar sind **oder** Kinder zur Bedarfsgemeinschaft gehÃ¶ren.`},{type:`p`,text:`Die Voraussetzungen sind alternativ formuliert; sie mÃ¼ssen nicht gleichzeitig vorliegen.`},{type:`p`,text:`Das Gesetz sieht eine Einzelfallentscheidung vor. Die Ãœberschreitung der 150-Prozent-Grenze bedeutet deshalb nicht in jedem Fall, dass der darÃ¼berliegende Mietbetrag endgÃ¼ltig ausgeschlossen ist.`},{type:`heading`,level:3,text:`**Kein automatischer Anspruch auf vollstÃ¤ndige Ãœbernahme bei einer Ausnahme**`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 7 SGB II bestimmt, dass in der Karenzzeit hÃ¶here Unterkunftskosten im Einzelfall anerkannt werden kÃ¶nnen, wenn diese unabweisbar sind oder Kinder zur Bedarfsgemeinschaft gehÃ¶ren.`},{type:`p`,text:`Die beiden Voraussetzungen sind alternativ ausgestaltet. Es genÃ¼gt daher grundsÃ¤tzlich, dass eine der gesetzlichen Voraussetzungen erfÃ¼llt ist, damit eine Entscheidung Ã¼ber die Ausnahme zu prÃ¼fen ist.`},{type:`p`,text:`Das bedeutet jedoch nicht, dass das Jobcenter bei Vorliegen einer dieser Voraussetzungen automatisch sÃ¤mtliche tatsÃ¤chlichen Unterkunftskosten vollstÃ¤ndig Ã¼bernehmen muss.`},{type:`p`,text:`Die Formulierung â€žkÃ¶nnenâ€œ erÃ¶ffnet dem zustÃ¤ndigen LeistungstrÃ¤ger ein gesetzliches Ermessen.`},{type:`p`,text:`Dieses Ermessen muss rechtmÃ¤ÃŸig ausgeÃ¼bt werden. Dabei sind die konkreten UmstÃ¤nde des Einzelfalls zu berÃ¼cksichtigen. Eine Entscheidung, die wesentliche persÃ¶nliche oder wirtschaftliche UmstÃ¤nde unbeachtet lÃ¤sst, kann ermessensfehlerhaft sein.`},{type:`p`,text:`Das Sozialgericht MÃ¼nchen hat im Beschluss vom 5. Oktober 2026, S 46 AS 2499/26 ER, ausdrÃ¼cklich ausgefÃ¼hrt, dass die Vorschrift eine offene Ermessensregelung und keine allgemeine Soll-Vorschrift darstellt.`},{type:`p`,text:`Das Gericht hat in dem dort entschiedenen Fall trotz Kindern in der Bedarfsgemeinschaft keinen unmittelbaren Anspruch auf vollstÃ¤ndige Ãœbernahme der die 150-Prozent-Grenze Ã¼berschreitenden Unterkunftskosten festgestellt.`},{type:`p`,text:`In der juristischen Fachliteratur werden einzelne Fragen zur Reichweite dieses Ermessens unterschiedlich beurteilt. Eine allgemeine hÃ¶chstrichterliche KlÃ¤rung der neuen Vorschrift liegt nach dem hier zugrunde gelegten PrÃ¼fstand nicht vor.`},{type:`p`,text:`FÃ¼r Leistungsberechtigte bedeutet das: Wird ein Antrag auf Anerkennung hÃ¶herer Unterkunftskosten abgelehnt, sollte geprÃ¼ft werden, ob der LeistungstrÃ¤ger die gesetzlichen Ausnahmevoraussetzungen erkannt und sein Ermessen anhand der konkreten UmstÃ¤nde ausgeÃ¼bt hat.`},{type:`p`,text:`Auch bei einer Verringerung der Zahl der Mitglieder einer Bedarfsgemeinschaft enthÃ¤lt das Gesetz eine besondere Regelung.`},{type:`heading`,level:3,text:`**ZusÃ¤tzliche Quadratmeterpreisregelung**`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 8 SGB II sieht weitere EinschrÃ¤nkungen der Karenzzeit vor.`},{type:`p`,text:`Diese betreffen insbesondere:`},{type:`ul`,items:[`Eine wirksam bestimmte Ã¶rtliche Obergrenze fÃ¼r tatsÃ¤chliche Aufwendungen je Quadratmeter WohnflÃ¤che.`,`Unterkunftskosten aufgrund einer MiethÃ¶he, die gegen die gesetzlichen Bestimmungen zur Mietpreisbremse verstÃ¶ÃŸt.`]},{type:`p`,text:`Bei einem angenommenen VerstoÃŸ gegen die Mietpreisbremse sieht das Gesetz eine Aufforderung zur mietrechtlichen RÃ¼ge vor.`},{type:`p`,text:`Die Frage, ob Hamburg eine zusÃ¤tzliche Quadratmeterpreis-Obergrenze im Sinne dieser neuen gesetzlichen Vorschrift konkret bestimmt und anwendet, muss anhand der einschlÃ¤gigen Ã¶rtlichen Regelungen gesondert geprÃ¼ft werden.`},{type:`p`,text:`Die verÃ¶ffentlichte allgemeine Bruttokaltmietgrenze von 574 Euro beantwortet diese Frage allein nicht.`},{type:`heading`,level:3,text:`**Welche Folgen haben diese besonderen Regelungen?**`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 8 SGB II enthÃ¤lt zwei eigenstÃ¤ndige gesetzliche TatbestÃ¤nde, durch welche die grundsÃ¤tzliche Anerkennung tatsÃ¤chlicher Unterkunftskosten wÃ¤hrend der Karenzzeit eingeschrÃ¤nkt werden kann.`},{type:`p`,text:`Erstens betrifft dies eine im maÃŸgeblichen Gebiet tatsÃ¤chlich bestimmte Obergrenze fÃ¼r Unterkunftsaufwendungen je Quadratmeter WohnflÃ¤che.`},{type:`p`,text:`Liegt eine solche maÃŸgebliche Grenze vor und wird sie Ã¼berschritten, gelten die tatsÃ¤chlichen Unterkunftskosten nach MaÃŸgabe der gesetzlichen Bestimmung als unangemessen. Die allgemeinen Privilegierungen der Karenzzeit nach Satz 2 und Satz 3 gelten insoweit nicht.`},{type:`p`,text:`Dabei muss ausdrÃ¼cklich zwischen einer besonderen Quadratmeterpreisobergrenze und dem regulÃ¤ren Bruttokaltmietrichtwert unterschieden werden.`},{type:`p`,text:`Dass eine Wohnung beispielsweise grÃ¶ÃŸer als 50 Quadratmeter ist, beweist fÃ¼r sich allein noch keine Ãœberschreitung einer besonderen Quadratmeterpreisobergrenze.`},{type:`p`,text:`Zweitens erfasst die Vorschrift eine vereinbarte MiethÃ¶he, welche gegen die gesetzlichen Bestimmungen der Â§Â§ 556d bis 556g BGB verstÃ¶ÃŸt.`},{type:`p`,text:`In diesem Fall ist der zustÃ¤ndige kommunale TrÃ¤ger verpflichtet, die Mieterin oder den Mieter aufzufordern, den angenommenen VerstoÃŸ gegen die Mietpreisbremse gegenÃ¼ber dem Vermieter zu rÃ¼gen.`},{type:`p`,text:`Auch fÃ¼r diesen gesetzlich geregelten Fall entfÃ¤llt die allgemeine Privilegierung der tatsÃ¤chlichen Unterkunftskosten wÃ¤hrend der Karenzzeit im betroffenen Umfang.`},{type:`p`,text:`Eine nur vermutete Ãœberschreitung der Mietpreisbremse sollte allerdings nicht ohne PrÃ¼fung als feststehender mietrechtlicher VerstoÃŸ dargestellt werden. Die mietrechtliche ZulÃ¤ssigkeit der vereinbarten MiethÃ¶he ist anhand der einschlÃ¤gigen Vorschriften und des konkreten MietverhÃ¤ltnisses zu beurteilen.`},{type:`p`,text:`**FÃ¼r Hamburg ist festzuhalten:** Die bisher herangezogenen amtlichen Unterlagen belegen den allgemeinen Bruttokaltmietrichtwert. Eine gesonderte, wirksam bestimmte Quadratmeterpreisobergrenze im Sinne des Â§ 22 Absatz 1 Satz 8 Nummer 1 SGB II wurde durch diese PrÃ¼fung nicht nachgewiesen.`},{type:`p`,text:`Daher kann aus den bislang geprÃ¼ften Quellen kein konkreter zusÃ¤tzlicher Hamburger Quadratmeterpreisgrenzwert angegeben werden.`},{type:`heading`,level:3,text:`**EigenstÃ¤ndige Regelung im SGB XII**`},{type:`p`,text:`Â§ 35 Absatz 1 Satz 7 SGB XII begrenzt die Anerkennung grundsÃ¤tzlich ebenfalls auf das Eineinhalbfache der abstrakt angemessenen Unterkunftsaufwendungen. Satz 8 erÃ¶ffnet wÃ¤hrend der Karenzzeit eine Ermessensentscheidung bei Unabweisbarkeit oder Haushaltsgemeinschaften mit Kindern. Im SGB II verwendet das Gesetz dagegen den Begriff Bedarfsgemeinschaft. Die TatbestÃ¤nde und Satznummern dÃ¼rfen nicht vertauscht werden.`},{type:`p`,text:`Â§ 35 Absatz 1 Satz 9 SGB XII enthÃ¤lt eigene Vorschriften zur Quadratmeterpreisobergrenze und zur Mietpreisbremse. Die Information durch den SozialhilfetrÃ¤ger regelt Absatz 2; Kostensenkung, Wirtschaftlichkeit und Schutz nach einem Todesfall regelt Absatz 3. Â§ 42a Absatz 1 Satz 2 nimmt bestimmte dort bezeichnete Wohnformen von Â§ 35 Absatz 1 SÃ¤tzen 2 bis 9 aus. Deshalb gilt die Karenzzeit-/150-Prozent-Darstellung nicht pauschal fÃ¼r jede besondere Wohnform der Grundsicherung im Alter und bei Erwerbsminderung.`},{type:`p`,text:`Quellen: [Â§ 35 SGB XII](https://www.gesetze-im-internet.de/sgb_12/__35.html), [Â§ 35a SGB XII](https://www.gesetze-im-internet.de/sgb_12/__35a.html), [Â§ 42a SGB XII](https://www.gesetze-im-internet.de/sgb_12/__42a.html).`}]},{number:7,title:`Die einjÃ¤hrige Karenzzeit`,blocks:[{type:`p`,text:`GrundsÃ¤tzlich gilt ab dem erstmaligen Leistungsbezug nach dem SGB II eine Karenzzeit von einem Jahr fÃ¼r die Anerkennung der Unterkunftskosten.`},{type:`p`,text:`WÃ¤hrend dieser Zeit werden die tatsÃ¤chlichen Unterkunftskosten nach MaÃŸgabe der gesetzlichen Vorschriften grundsÃ¤tzlich anerkannt, auch wenn sie Ã¼ber den regulÃ¤ren Ã¶rtlichen Richtwerten liegen.`},{type:`p`,text:`Seit Juli 2026 ist dabei insbesondere die 150-Prozent-Regelung zu beachten.`},{type:`p`,text:`Wird der Leistungsbezug wÃ¤hrend der Karenzzeit fÃ¼r mindestens einen vollen Monat unterbrochen, verlÃ¤ngert sich die Karenzzeit um die entsprechenden vollen Monate ohne Leistungsbezug.`},{type:`p`,text:`Eine neue Karenzzeit beginnt nach der gesetzlichen Bestimmung, wenn zuvor mindestens drei Jahre keine Leistungen nach dem SGB II oder SGB XII bezogen worden sind.`},{type:`p`,text:`**Die Karenzzeit bedeutet somit weder eine unbegrenzte MietÃ¼bernahme noch eine Verpflichtung zum Umzug nach genau zwÃ¶lf Monaten.**`},{type:`p`,text:`Nach ihrem Ablauf ist gesondert zu prÃ¼fen, ob die tatsÃ¤chlichen Unterkunftskosten weiterhin anzuerkennen sind.`},{type:`heading`,level:3,text:`**Besondere Vorsicht bei einem Wohnungswechsel wÃ¤hrend der Karenzzeit**`},{type:`p`,text:`Die Karenzzeit schÃ¼tzt grundsÃ¤tzlich die Anerkennung der Unterkunftskosten nach MaÃŸgabe des Â§ 22 Absatz 1 SGB II.`},{type:`p`,text:`Bei einem Wohnungswechsel gelten jedoch zusÃ¤tzliche gesetzliche Voraussetzungen.`},{type:`p`,text:`Nach Â§ 22 Absatz 4 SGB II werden hÃ¶here als angemessene Unterkunftskosten nach einem Umzug nur dann als Bedarf anerkannt, wenn der zustÃ¤ndige kommunale TrÃ¤ger die Anerkennung vorab schriftlich zugesichert hat.`},{type:`p`,text:`Das ist insbesondere fÃ¼r Menschen wichtig, die wÃ¤hrend der Karenzzeit eine andere Wohnung anmieten wollen.`},{type:`p`,text:`**Beispiel:**`},{type:`p`,text:`Eine alleinlebende Person wohnt bisher in einer Wohnung mit 800 Euro Bruttokaltmiete.`},{type:`p`,text:`Der Ã¶rtliche Angemessenheitsrichtwert betrÃ¤gt 574 Euro.`},{type:`p`,text:`WÃ¤hrend der Karenzzeit wird die bisherige Miete nach den einschlÃ¤gigen gesetzlichen Bestimmungen berÃ¼cksichtigt.`},{type:`p`,text:`Die Person mÃ¶chte nun in eine andere Wohnung mit 750 Euro Bruttokaltmiete umziehen.`},{type:`p`,text:`Obwohl die neue Wohnung monatlich 50 Euro gÃ¼nstiger wÃ¤re als die bisherige, liegt sie weiterhin Ã¼ber dem Ã¶rtlichen Angemessenheitsrichtwert von 574 Euro.`},{type:`p`,text:`Aus der bloÃŸen Tatsache, dass die neue Wohnung gÃ¼nstiger ist und ihre Miete unterhalb der rechnerischen 150-Prozent-Grenze von 861 Euro liegt, ergibt sich kein automatischer Anspruch auf Ãœbernahme der vollen 750 Euro.`},{type:`p`,text:`FÃ¼r die Anerkennung der hÃ¶heren als angemessenen Aufwendungen nach einem Wohnungswechsel verlangt Â§ 22 Absatz 4 SGB II eine vorherige schriftliche Zusicherung.`},{type:`p`,text:`Daher muss zwischen dem Schutz der bestehenden Unterkunft und der Anmietung einer neuen Unterkunft unterschieden werden.`},{type:`p`,text:`Eine Zusicherung zur neuen Unterkunft ist auÃŸerdem von einer gesonderten Zusicherung zu Umzugs- und Wohnungsbeschaffungskosten zu unterscheiden.`},{type:`p`,text:`Beide Entscheidungen betreffen unterschiedliche gesetzliche Voraussetzungen.`},{type:`p`,text:`**Praktische Bedeutung:** Wer wÃ¤hrend der Karenzzeit umziehen mÃ¶chte, sollte vor Abschluss des neuen Mietvertrags schriftlich klÃ¤ren lassen, welche Unterkunftskosten kÃ¼nftig anerkannt werden.`},{type:`p`,text:`Diese Regelung schÃ¼tzt zugleich vor der falschen Annahme, wÃ¤hrend der Karenzzeit dÃ¼rfe grundsÃ¤tzlich jede neue Wohnung bis zur rechnerischen 150-Prozent-Grenze ohne vorherige PrÃ¼fung angemietet werden.`}]},{number:8,title:`Was geschieht nach Ablauf der Karenzzeit?`,blocks:[{type:`p`,text:`Nach der Karenzzeit gilt grundsÃ¤tzlich wieder die regulÃ¤re AngemessenheitsprÃ¼fung.`},{type:`p`,text:`Ãœbersteigen die tatsÃ¤chlichen Unterkunftskosten die angemessenen Kosten, kann der LeistungstrÃ¤ger eine Kostensenkung verlangen.`},{type:`p`,text:`Das bedeutet allerdings nicht, dass die leistungsberechtigte Person sofort umziehen muss.`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 9 SGB II sieht ausdrÃ¼cklich vor, dass unangemessene Unterkunftskosten weiterhin anzuerkennen sind, solange eine Kostensenkung nicht mÃ¶glich oder nicht zumutbar ist, in der Regel jedoch lÃ¤ngstens fÃ¼r sechs Monate.`},{type:`p`,text:`Diese Sechsmonatsfrist ist keine ausnahmslose HÃ¶chstgrenze.`},{type:`heading`,level:3,text:`**Karenzzeit und Kostensenkungsfrist sind rechtlich getrennte ZeitrÃ¤ume**`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 10 SGB II bestimmt ausdrÃ¼cklich, dass der Zeitraum der Karenzzeit nicht auf die nach Satz 9 vorgesehene Kostensenkungsfrist angerechnet wird.`},{type:`p`,text:`Das bedeutet: Die einjÃ¤hrige Karenzzeit verbraucht nicht bereits die regelmÃ¤ÃŸig sechsmonatige Frist, innerhalb derer nach Ablauf der Karenzzeit unangemessene Unterkunftskosten unter den gesetzlichen Voraussetzungen weiter anerkannt werden.`},{type:`p`,text:`Nach dem Ende der Karenzzeit muss deshalb gesondert geprÃ¼ft werden, ob und fÃ¼r welchen Zeitraum die tatsÃ¤chlichen Unterkunftskosten aufgrund des Kostensenkungsschutzes weiterhin zu berÃ¼cksichtigen sind.`},{type:`p`,text:`**Beispiel:**`},{type:`p`,text:`Eine Person bezieht erstmals Leistungen nach dem SGB II und wohnt bereits in einer Wohnung, deren Bruttokaltmiete oberhalb der Ã¶rtlichen Angemessenheitsgrenze liegt.`},{type:`p`,text:`Im ersten Jahr gelten die gesetzlichen Karenzzeitregelungen einschlieÃŸlich der seit Juli 2026 eingefÃ¼hrten EinschrÃ¤nkungen.`},{type:`p`,text:`Nach Ablauf der Karenzzeit muss die weitere Anerkennung der Unterkunftskosten nach den allgemeinen gesetzlichen Bestimmungen Ã¼berprÃ¼ft werden.`},{type:`p`,text:`Die bereits zurÃ¼ckgelegten zwÃ¶lf Monate der Karenzzeit werden nicht als sechsmonatige Kostensenkungsfrist angerechnet.`},{type:`p`,text:`Daraus folgt allerdings kein automatischer Anspruch auf eine uneingeschrÃ¤nkte MietÃ¼bernahme fÃ¼r insgesamt achtzehn Monate.`},{type:`p`,text:`Insbesondere mÃ¼ssen die Voraussetzungen der jeweiligen gesetzlichen Regelungen vorliegen.`},{type:`p`,text:`Ist eine Kostensenkung weiterhin unmÃ¶glich oder unzumutbar, kommt auch eine lÃ¤ngere Anerkennung tatsÃ¤chlicher Kosten in Betracht.`},{type:`p`,text:`Die Rechtsgrundlage hierfÃ¼r ist Â§ 22 Absatz 1 Satz 9 und Satz 10 SGB II.`},{type:`p`,text:`Kann die leistungsberechtigte Person nachweislich keine angemessene Wohnung finden oder sind ihr bestimmte KostensenkungsmaÃŸnahmen nicht zumutbar, muss dies bei der Entscheidung berÃ¼cksichtigt werden.`},{type:`p`,text:`Eine weitere Ãœbernahme tatsÃ¤chlicher Unterkunftskosten kommt unter den gesetzlichen Voraussetzungen auch Ã¼ber sechs Monate hinaus in Betracht.`},{type:`p`,text:`Entscheidend sind die konkreten UmstÃ¤nde, die geltenden gesetzlichen Regelungen und die Nachweise des Einzelfalls.`}]},{number:9,title:`Bedeutet eine Kostensenkungsaufforderung, dass man ausziehen muss?`,blocks:[{type:`p`,text:`**Nein.**`},{type:`p`,text:`Eine Kostensenkungsaufforderung ist keine mietrechtliche KÃ¼ndigung und keine gerichtliche RÃ¤umungsentscheidung.`},{type:`p`,text:`Sie betrifft die Frage, in welcher HÃ¶he das Jobcenter Unterkunftskosten als Bedarf berÃ¼cksichtigt.`},{type:`p`,text:`Das Jobcenter kann einen bestehenden Mietvertrag nicht allein durch eine Kostensenkungsaufforderung beenden.`},{type:`p`,text:`Zur Kostensenkung kommen nach dem Gesetz unterschiedliche MaÃŸnahmen in Betracht, insbesondere ein Wohnungswechsel, eine zulÃ¤ssige Untervermietung oder andere geeignete MÃ¶glichkeiten.`},{type:`p`,text:`Ein Umzug ist deshalb nicht automatisch die einzige denkbare MaÃŸnahme.`},{type:`p`,text:`Bleiben die Kosten jedoch nach Ablauf der maÃŸgeblichen Schutzfristen unangemessen und besteht kein Grund fÃ¼r ihre weitere Anerkennung, kann das Jobcenter die berÃ¼cksichtigten Unterkunftskosten begrenzen. Dann muss die leistungsberechtigte Person die Differenz gegebenenfalls selbst tragen.`},{type:`p`,text:`Ein rechtlicher Zwang zum Auszug und ein wirtschaftlicher Druck durch eine begrenzte MietÃ¼bernahme sind daher zwei unterschiedliche Sachverhalte.`}]},{number:10,title:`Gesundheitliche EinschrÃ¤nkungen und das Recht, in der bisherigen Wohnung zu bleiben`,blocks:[{type:`p`,text:`Besondere Bedeutung hat die Frage, ob einer Person eine Kostensenkung beziehungsweise ein Wohnungswechsel Ã¼berhaupt zugemutet werden kann.`},{type:`p`,text:`Hierzu kÃ¶nnen unter anderem folgende UmstÃ¤nde relevant sein:`},{type:`ul`,items:[`Schwere kÃ¶rperliche oder psychische Erkrankungen`,`Behinderungen und erhebliche MobilitÃ¤tseinschrÃ¤nkungen`,`PflegebedÃ¼rftigkeit`,`Notwendigkeit einer besonderen Wohnraumausstattung`,`Bestehende Versorgungs- und UnterstÃ¼tzungsstrukturen im Wohnumfeld`,`Ein auf die gesundheitlichen BedÃ¼rfnisse abgestimmtes Wohnumfeld`,`Hohes Alter und eine langjÃ¤hrige Verwurzelung im bisherigen Wohnraum`]},{type:`p`,text:`Diese UmstÃ¤nde mÃ¼ssen konkret begrÃ¼ndet und bewertet werden.`},{type:`p`,text:`Eine Diagnose allein fÃ¼hrt nicht automatisch zu einem dauerhaften Anspruch auf Ãœbernahme jeder beliebigen Miete. Entscheidend ist insbesondere, welche tatsÃ¤chlichen Auswirkungen eine Erkrankung oder Behinderung auf die MÃ¶glichkeit einer Kostensenkung hat.`},{type:`p`,text:`Die Hamburger Fachanweisung enthÃ¤lt unter Ziffer 6.3 besondere Regelungen zur Unzumutbarkeit von KostensenkungsmaÃŸnahmen.`},{type:`p`,text:`Insbesondere bei einer besonderen HÃ¤rte kÃ¶nnen ein Ã¤rztliches Attest und gegebenenfalls eine sozialmedizinische Beurteilung erforderlich werden.`},{type:`heading`,level:3,text:`**LangjÃ¤hriges Wohnen in derselben Wohnung**`},{type:`p`,text:`Hamburg berÃ¼cksichtigt auch bestimmte FÃ¤lle einer langjÃ¤hrigen Wohndauer.`},{type:`p`,text:`Die Fachanweisung nennt insbesondere eine Wohndauer von im Regelfall mindestens zehn Jahren in Verbindung mit weiteren Voraussetzungen, beispielsweise erheblichen kÃ¶rperlichen EinschrÃ¤nkungen oder einer bestehenden AbhÃ¤ngigkeit von nachbarschaftlicher UnterstÃ¼tzung.`},{type:`p`,text:`Unter bestimmten weiteren Voraussetzungen wird auch berÃ¼cksichtigt, wenn die langjÃ¤hrige Wohndauer bereits vor Beginn der HilfebedÃ¼rftigkeit bestand und die Bruttokaltmiete den Richtwert nur geringfÃ¼gig Ã¼berschreitet.`},{type:`p`,text:`Das zeigt: Der Zeitraum, den ein Mensch bereits in einer Wohnung lebt, kann rechtlich bedeutsam sein. Er begrÃ¼ndet jedoch fÃ¼r sich allein keinen unbegrenzten Bestandsschutz.`}]},{number:11,title:`Weitere besondere Schutzregelungen`,blocks:[{type:`p`,text:`Neben der Karenzzeit und der gesundheitlichen Zumutbarkeit gibt es weitere Konstellationen, in denen die tatsÃ¤chlichen Wohnkosten lÃ¤nger anerkannt werden kÃ¶nnen.`},{type:`heading`,level:3,text:`**Verringerung der HaushaltsgrÃ¶ÃŸe**`},{type:`p`,text:`Wenn sich die Zahl der Mitglieder einer Bedarfsgemeinschaft verringert, kÃ¶nnen besondere Ãœbergangs- und Schutzvorschriften gelten.`},{type:`heading`,level:3,text:`**Tod eines Haushaltsmitglieds**`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 11 SGB II enthÃ¤lt eine besondere Schutzregelung fÃ¼r Menschen, die nach dem Tod eines Mitglieds ihrer Bedarfs- oder Haushaltsgemeinschaft allein oder mit weniger Personen in der bisherigen Wohnung verbleiben.`},{type:`p`,text:`Die Vorschrift setzt voraus, dass die Aufwendungen fÃ¼r Unterkunft und Heizung vor dem Todesfall angemessen waren.`},{type:`p`,text:`Sind diese Voraussetzungen erfÃ¼llt, ist eine Senkung der Aufwendungen fÃ¼r die weiterhin bewohnte Unterkunft fÃ¼r die Dauer von mindestens zwÃ¶lf Monaten nach dem Sterbemonat nicht zumutbar.`},{type:`p`,text:`Der Schutzzeitraum beginnt somit nach dem Monat, in dem das Haushaltsmitglied verstorben ist.`},{type:`p`,text:`DarÃ¼ber hinaus bestimmt die Vorschrift ausdrÃ¼cklich, dass Â§ 22 Absatz 1 Satz 6 SGB II, also die neue 150-Prozent-Begrenzung, in dieser Fallkonstellation nicht anzuwenden ist.`},{type:`p`,text:`**Beispiel:**`},{type:`p`,text:`Zwei Personen leben gemeinsam in einer Wohnung, deren Unterkunfts- und Heizkosten fÃ¼r den bisherigen Haushalt angemessen sind.`},{type:`p`,text:`Eine der beiden Personen verstirbt.`},{type:`p`,text:`Durch die Verringerung der HaushaltsgrÃ¶ÃŸe kÃ¶nnte die bisherige Wohnung nach den Richtwerten fÃ¼r einen Einpersonenhaushalt als zu teuer gelten.`},{type:`p`,text:`In dieser Situation sieht das Gesetz einen besonderen Schutz der weiterhin dort wohnenden Person vor.`},{type:`p`,text:`Eine Kostensenkung ist unter den gesetzlichen Voraussetzungen fÃ¼r mindestens zwÃ¶lf Monate nach dem Sterbemonat nicht zumutbar.`},{type:`p`,text:`Die Vorschrift verhindert damit, dass unmittelbar nach einem Todesfall allein aufgrund der verringerten HaushaltsgrÃ¶ÃŸe eine Kostensenkung verlangt wird.`},{type:`p`,text:`Nach Ablauf dieses Schutzzeitraums sind weitere SchutzgrÃ¼nde, etwa gesundheitliche EinschrÃ¤nkungen oder die Unzumutbarkeit eines Wohnungswechsels, eigenstÃ¤ndig zu prÃ¼fen.`},{type:`heading`,level:3,text:`**Betreuung von Kindern und soziale Bindungen**`},{type:`p`,text:`Auch die Betreuung von Kindern, Schul- und Kindergartenbesuche sowie besondere soziale LebensumstÃ¤nde kÃ¶nnen nach der Hamburger Fachanweisung bei der Zumutbarkeit und den ZeitrÃ¤umen einer Kostensenkung berÃ¼cksichtigt werden.`},{type:`heading`,level:3,text:`**Insgesamt angemessene Bruttowarmmiete**`},{type:`p`,text:`Eine weitere Hamburger Besonderheit ist die Betrachtung der gesamten Bruttowarmmiete.`},{type:`p`,text:`Nach Ziffer 6.3 Buchstabe g der Fachanweisung soll von einer KostensenkungsmaÃŸnahme abgesehen werden, wenn die Bruttowarmmiete insgesamt angemessen ist, obwohl beispielsweise die kalten Unterkunftskosten oder die Heizkosten fÃ¼r sich betrachtet den jeweiligen Richtwert Ã¼berschreiten.`},{type:`p`,text:`Eine teurere Grundmiete kann somit unter den dort beschriebenen Voraussetzungen durch geringere Heizkosten ausgeglichen werden beziehungsweise umgekehrt.`},{type:`p`,text:`Dies ist von der allgemeinen getrennten PrÃ¼fung von Unterkunfts- und Heizkosten zu unterscheiden.`}]},{number:12,title:`Wann ist ein Umzug wirtschaftlich?`,blocks:[{type:`p`,text:`Ein besonders wichtiger Schutz vor unnÃ¶tigen Wohnungswechseln ist die gesetzliche WirtschaftlichkeitsprÃ¼fung.`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 12 SGB II bestimmt, dass eine Kostensenkung nicht verlangt werden muss, wenn sie unter BerÃ¼cksichtigung der bei einem Wohnungswechsel zu erbringenden Leistungen unwirtschaftlich wÃ¤re.`},{type:`p`,text:`Der Gedanke dahinter: Ein Umzug verursacht einmalige Ausgaben. Wenn diese Ausgaben die mÃ¶glichen Einsparungen bei der Miete Ã¼bersteigen, kann die Fortsetzung der bisherigen MietkostenÃ¼bernahme wirtschaftlicher sein.`},{type:`heading`,level:3,text:`**Unterschied zwischen Bundesgesetz und Hamburger Fachanweisung**`},{type:`p`,text:`Die WirtschaftlichkeitsprÃ¼fung beruht zunÃ¤chst auf Bundesrecht.`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 12 SGB II bestimmt, dass eine Absenkung unangemessener Unterkunftskosten nicht gefordert werden muss, wenn diese unter BerÃ¼cksichtigung der bei einem Wohnungswechsel zu erbringenden Leistungen unwirtschaftlich wÃ¤re.`},{type:`p`,text:`Die Vorschrift enthÃ¤lt selbst weder einen bundesweit einheitlichen Betrachtungszeitraum von 36 Monaten noch eine allgemeine 20-Prozent-Grenze.`},{type:`p`,text:`Diese Konkretisierungen stammen aus der Hamburger Fachanweisung.`},{type:`p`,text:`Die Hamburger Verwaltung hat damit zusÃ¤tzliche MaÃŸstÃ¤be festgelegt, anhand derer sie die Wirtschaftlichkeit von KostensenkungsmaÃŸnahmen beurteilt.`},{type:`p`,text:`Die Fachanweisung ist eine verwaltungsinterne Regelung. Sie steht rechtlich unter dem Bundesgesetz und muss dessen Anforderungen beachten.`},{type:`p`,text:`Deshalb darf aus der Hamburger 20-Prozent-Regel nicht geschlossen werden, dass dieselbe Regelung automatisch in allen anderen BundeslÃ¤ndern gilt.`},{type:`p`,text:`Umgekehrt darf auch die bundesgesetzliche Wirtschaftlichkeitsvorschrift nicht so ausgelegt werden, dass jede bisherige Miete bei einem unwirtschaftlichen Wohnungswechsel automatisch und zeitlich unbegrenzt vollstÃ¤ndig Ã¼bernommen werden mÃ¼sste.`},{type:`p`,text:`Welche Rechtsfolge im Einzelfall eintritt, hÃ¤ngt von den anwendbaren Vorschriften und den tatsÃ¤chlichen UmstÃ¤nden ab.`},{type:`p`,text:`**FÃ¼r Hamburg ist zusÃ¤tzlich entscheidend:** Die Fachanweisung sieht bei Ãœberschreitungen bis zu 20 Prozent ausdrÃ¼cklich vor, von einer individuellen Wirtschaftlichkeitsberechnung abzusehen, weil der Umzug generell als unwirtschaftlich gilt.`},{type:`heading`,level:3,text:`**Die Hamburger 36-Monats-Regel**`},{type:`p`,text:`Ziffer 6.4 der Hamburger Fachanweisung legt fÃ¼r die Verwaltungspraxis einen Betrachtungszeitraum von **36 Monaten** zugrunde.`},{type:`p`,text:`Ein Umzug gilt danach als unwirtschaftlich, wenn sich seine Kosten innerhalb dieses Zeitraums nicht amortisieren.`},{type:`p`,text:`ZusÃ¤tzlich enthÃ¤lt Hamburg eine besonders wichtige Pauschalregel:`},{type:`p`,text:`**Bei einer Ãœberschreitung der maÃŸgeblichen Angemessenheitsgrenze um bis zu 20 Prozent gelten UmzÃ¼ge nach der Hamburger Fachanweisung generell als unwirtschaftlich.**`},{type:`p`,text:`In diesen FÃ¤llen ist keine weitere individuelle Wirtschaftlichkeitsberechnung erforderlich.`},{type:`p`,text:`Bei einer Ãœberschreitung um 20 Prozent und mehr ist die Wirtschaftlichkeit im Einzelfall zu prÃ¼fen.`},{type:`p`,text:`Die Formulierungen der Fachanweisung Ã¼berschneiden sich am Wert von genau 20 Prozent. Dort ist die allgemeine Unwirtschaftlichkeitsregel ausdrÃ¼cklich bis einschlieÃŸlich 20 Prozent formuliert.`},{type:`heading`,level:3,text:`**Was bedeutet das bei 574 Euro?**`},{type:`p`,text:`Hamburger 20-Prozent-Regel fÃ¼r einen Einpersonenhaushalt`},{type:`heading`,level:1,text:`**688,80 â‚¬**`},{type:`p`,text:`574 â‚¬ Ã— 1,20 = 688,80 â‚¬ Bruttokaltmiete`},{type:`p`,text:`Bei Anwendung dieses allgemeinen Richtwerts bedeutet das:`},{type:`table`,rows:[[`Bruttokaltmiete`,`Ãœberschreitung`,`Bewertung der 20-Prozent-Regel`],[`574 â‚¬`,`0 %`,`Innerhalb des Richtwerts`],[`600 â‚¬`,`4,5 %`,`Umzug gilt als unwirtschaftlich`],[`650 â‚¬`,`13,2 %`,`Umzug gilt als unwirtschaftlich`],[`688,80 â‚¬`,`Genau 20 %`,`Grenzfall: Die Fachanweisung enthÃ¤lt zwei sich Ã¼berschneidende Vorgaben. Die erste ordnet bis einschlieÃŸlich 20 % ausdrÃ¼cklich eine generelle Unwirtschaftlichkeit an.`],[`750 â‚¬`,`30,7 %`,`Individuelle PrÃ¼fung erforderlich`],[`900 â‚¬`,`56,8 %`,`Individuelle PrÃ¼fung erforderlich`]]},{type:`heading`,level:3,text:`**Besonderheit beim Grenzwert von genau 20 Prozent**`},{type:`p`,text:`Die Hamburger Fachanweisung enthÃ¤lt bei einer Ãœberschreitung von exakt 20 Prozent eine sprachliche Ãœberschneidung.`},{type:`p`,text:`Die erste Bestimmung ordnet ausdrÃ¼cklich an, dass UmzÃ¼ge bei Ãœberschreitungen von bis zu 20 Prozent generell als unwirtschaftlich gelten.`},{type:`p`,text:`Die unmittelbar folgende Bestimmung sieht bei Ãœberschreitungen von 20 Prozent und mehr eine individuelle WirtschaftlichkeitsprÃ¼fung vor.`},{type:`p`,text:`Beide Formulierungen erfassen den Wert von genau 20 Prozent.`},{type:`p`,text:`Die erste Regelung spricht somit ausdrÃ¼cklich fÃ¼r eine generelle Unwirtschaftlichkeit auch bei genau 20 Prozent. Die zweite Regelung lÃ¤sst dagegen erkennen, dass die individuelle PrÃ¼fung bereits ab diesem Grenzwert einsetzen soll.`},{type:`p`,text:`Der Widerspruch sollte bei einer behÃ¶rdlichen Entscheidung Ã¼ber einen solchen Grenzfall berÃ¼cksichtigt und gegebenenfalls rechtlich geklÃ¤rt werden.`},{type:`p`,text:`Der mathematische Betrag von 688,80 Euro bei einem Ausgangswert von 574 Euro ist hiervon nicht betroffen.`},{type:`p`,text:`**ZusÃ¤tzliche Klarstellung:** Die Hamburger 20-Prozent-Regel ist eine Verwaltungsvorgabe zur Wirtschaftlichkeit von KostensenkungsmaÃŸnahmen. Sie darf nicht mit der bundesgesetzlichen 150-Prozent-Grenze wÃ¤hrend der Karenzzeit gleichgesetzt werden.`},{type:`p`,text:`Die beiden Regelungen haben unterschiedliche Voraussetzungen und Rechtsfolgen.`},{type:`p`,text:`Diese Tabelle beschreibt ausschlieÃŸlich die WirtschaftlichkeitsprÃ¼fung nach der verÃ¶ffentlichten Hamburger Fachanweisung, nicht eine generelle Zusage zur Anerkennung aller genannten Mieten wÃ¤hrend der Karenzzeit.`},{type:`p`,text:`**Wichtig ist auÃŸerdem:** Die Hamburger Fachanweisung stammt vom 22. Mai 2026 und damit aus der Zeit vor Inkrafttreten der neuen 150-Prozent-Regelung. Wie diese beiden Regelungskomplexe in sÃ¤mtlichen Fallkonstellationen miteinander verzahnt werden, ist anhand der verÃ¶ffentlichten Fassung nicht abschlieÃŸend geklÃ¤rt.`}]},{number:13,title:`Welche Umzugskosten berÃ¼cksichtigt Hamburg bei der Wirtschaftlichkeit?`,blocks:[{type:`p`,text:`Die Hamburger Fachanweisung nennt ausdrÃ¼cklich Berechnungswerte fÃ¼r die WirtschaftlichkeitsprÃ¼fung.`},{type:`table`,rows:[[`Kostenart`,`BehÃ¶rdlicher Berechnungsansatz`],[`Zwei zusÃ¤tzliche Bruttokaltmieten fÃ¼r die bisherige Wohnung`,`TatsÃ¤chliche beziehungsweise anzusetzende BetrÃ¤ge`],[`Mietkaution oder Genossenschaftsanteile`,`50 % des maÃŸgeblichen HÃ¶chstwertes Ã— 3 Monate`],[`Umzug in Eigenregie, Einpersonenhaushalt`,`300 â‚¬`],[`Zuschlag fÃ¼r jede weitere Person beim Eigenumzug`,`50 â‚¬`],[`Gewerblicher Umzug, zwei MÃ¶belpacker und Transporter fÃ¼r acht Stunden`,`500 â‚¬`],[`SchÃ¶nheitsreparaturen, Einpersonenhaushalt`,`300 â‚¬`],[`Zuschlag fÃ¼r jede weitere Person bei SchÃ¶nheitsreparaturen`,`66 â‚¬`],[`Auslegware, Einpersonenhaushalt`,`205 â‚¬`],[`Zuschlag fÃ¼r jede weitere Person bei Auslegware`,`51 â‚¬`]]},{type:`heading`,level:3,text:`**Warum die Berechnungspauschalen keine HÃ¶chstbetrÃ¤ge fÃ¼r einen tatsÃ¤chlichen Umzug sind**`},{type:`p`,text:`Die Hamburger Fachanweisung unterscheidet zwischen der Berechnung der Wirtschaftlichkeit eines Wohnungswechsels und der tatsÃ¤chlichen Bewilligung notwendiger Umzugskosten.`},{type:`p`,text:`Bei der Wirtschaftlichkeitsberechnung werden standardisierte BetrÃ¤ge verwendet.`},{type:`p`,text:`FÃ¼r einen gewerblichen Umzug sieht die Fachanweisung beispielsweise einen Rechenwert von 500 Euro vor, der einen Transporter und zwei MÃ¶belpacker fÃ¼r acht Stunden umfasst.`},{type:`p`,text:`Dieser Betrag bildet einen typisierten Berechnungsansatz ab.`},{type:`p`,text:`Er bedeutet nicht, dass ein gesundheitlich notwendiger, professionell organisierter Umzug unabhÃ¤ngig von seinem tatsÃ¤chlichen Umfang hÃ¶chstens 500 Euro kosten darf.`},{type:`p`,text:`Die tatsÃ¤chliche Ãœbernahme gewerblicher Umzugskosten ist gesondert nach Â§ 22 Absatz 6 SGB II und Ziffer 7.4.3 der Hamburger Fachanweisung zu beurteilen.`},{type:`p`,text:`Erforderlich ist insbesondere die PrÃ¼fung, welche Arbeiten notwendig sind, ob Eigenleistungen zumutbar sind und ob die veranschlagten Kosten angemessen erscheinen.`},{type:`p`,text:`Bei nachgewiesener fehlender FÃ¤higkeit zur Selbsthilfe kann ein professioneller Umzug erheblich umfangreicher sein als der pauschalierte achtstÃ¼ndige Rechenfall.`},{type:`p`,text:`Daraus ergibt sich eine rechtlich wichtige Unterscheidung:`},{type:`p`,text:`**Eine pauschalierte Berechnung der mÃ¶glichen Wirtschaftlichkeit ist nicht identisch mit einer Entscheidung darÃ¼ber, welchen notwendigen Leistungsumfang ein gewerbliches Umzugsunternehmen tatsÃ¤chlich erbringen muss.**`},{type:`p`,text:`Die Fachanweisung enthÃ¤lt eine wichtige Klarstellung:`},{type:`p`,text:`**Diese BetrÃ¤ge dienen ausschlieÃŸlich der Wirtschaftlichkeitsberechnung. Sie sind keine verbindlichen HÃ¶chstbetrÃ¤ge fÃ¼r die Bewilligung tatsÃ¤chlicher Umzugs- oder Renovierungskosten.**`},{type:`p`,text:`FÃ¼r die tatsÃ¤chliche LeistungsgewÃ¤hrung gelten andere Abschnitte der Fachanweisung.`},{type:`p`,text:`Insbesondere dÃ¼rfen die pauschalen 500 Euro fÃ¼r einen Umzugswagen und zwei MÃ¶belpacker nicht einfach als gesetzlich festgelegte Obergrenze fÃ¼r einen notwendigen professionellen Umzug dargestellt werden.`},{type:`p`,text:`Die Verwaltungsvorgaben sehen auÃŸerdem vor, dass die Unwirtschaftlichkeit nach einer angemessenen Zeit, regelmÃ¤ÃŸig nach etwa zwei Jahren, erneut Ã¼berprÃ¼ft werden kann, wenn sich die VerhÃ¤ltnisse verÃ¤ndert haben.`}]},{number:14,title:`Was passiert bei besonders hohen tatsÃ¤chlichen Umzugskosten?`,blocks:[{type:`p`,text:`Bei Menschen mit erheblichen gesundheitlichen EinschrÃ¤nkungen kann ein Umzug wesentlich aufwendiger sein als der pauschale Berechnungsfall eines achtstÃ¼ndigen MÃ¶beltransports.`},{type:`p`,text:`Beispielsweise kÃ¶nnen erforderlich sein:`},{type:`ul`,items:[`Ein mehrtÃ¤giger professioneller Komplettumzug`,`VollstÃ¤ndiges Verpacken und Auspacken des Hausrats`,`Demontage aller MÃ¶bel und EinrichtungsgegenstÃ¤nde`,`Transport`,`Aufbau und Montage in der neuen Wohnung`,`Befestigung notwendiger EinrichtungsgegenstÃ¤nde`,`Fachgerechter Anschluss von GerÃ¤ten`,`Notwendige Einzugs- und gegebenenfalls Auszugsrenovierung`]},{type:`p`,text:`Damit kÃ¶nnen erhebliche zusÃ¤tzliche Kosten entstehen.`},{type:`p`,text:`Ob die gesamten Aufwendungen rechtlich als notwendig anzuerkennen sind, hÃ¤ngt von ihrem konkreten Leistungsumfang ab.`},{type:`p`,text:`FÃ¼r die WirtschaftlichkeitsprÃ¼fung entsteht dabei eine zusÃ¤tzliche Frage: Hamburg verwendet pauschalierte Berechnungswerte, wÃ¤hrend der tatsÃ¤chliche Aufwand eines gesundheitlich eingeschrÃ¤nkten Menschen deutlich hÃ¶her sein kann.`},{type:`p`,text:`Die verÃ¶ffentlichte Fachanweisung enthÃ¤lt keine ausdrÃ¼ckliche allgemeine Bestimmung, wonach sÃ¤mtliche nachgewiesenen individuellen Komplettumzugskosten automatisch an die Stelle der pauschalierten BerechnungsansÃ¤tze treten.`},{type:`p`,text:`Diese Frage muss deshalb von der eigentlichen Kostenbewilligung unterschieden und gegebenenfalls im konkreten Verfahren rechtlich geprÃ¼ft werden.`},{type:`heading`,level:3,text:`**Rechenbeispiele zur Wirtschaftlichkeit**`},{type:`p`,text:`Die folgenden Berechnungen zeigen, welche monatliche Mietersparnis notwendig wÃ¤re, um unterschiedlich hohe Umzugskosten innerhalb von 36 Monaten auszugleichen.`},{type:`table`,rows:[[`Einmalige Umzugskosten`,`Erforderliche monatliche Ersparnis`],[`2.000 â‚¬`,`55,56 â‚¬`],[`5.000 â‚¬`,`138,89 â‚¬`],[`6.000 â‚¬`,`166,67 â‚¬`],[`8.000 â‚¬`,`222,22 â‚¬`],[`10.000 â‚¬`,`277,78 â‚¬`],[`12.000 â‚¬`,`333,33 â‚¬`],[`15.000 â‚¬`,`416,67 â‚¬`]]},{type:`p`,text:`Das sind mathematische Vergleichsrechnungen, keine verbindlichen behÃ¶rdlichen Berechnungen und keine nachgewiesenen Marktpreise.`},{type:`heading`,level:3,text:`**Beispiel: 12.000 Euro Umzugskosten**`},{type:`p`,text:`Angenommen, ein vollstÃ¤ndiger Umzug wÃ¼rde einschlieÃŸlich notwendiger Hilfs- und Montagearbeiten 12.000 Euro kosten.`},{type:`p`,text:`Die neue Wohnung wÃ¤re monatlich 150 Euro gÃ¼nstiger.`},{type:`p`,text:`In 36 Monaten ergÃ¤be sich eine Einsparung von:`},{type:`p`,text:`150 â‚¬ Ã— 36 = 5.400 â‚¬`},{type:`p`,text:`Den einmaligen Ausgaben von 12.000 Euro stÃ¼nden somit lediglich 5.400 Euro eingesparte Mietkosten gegenÃ¼ber.`},{type:`p`,text:`Die vollstÃ¤ndige Amortisation wÃ¼rde bei gleichbleibender Ersparnis 80 Monate dauern.`},{type:`heading`,level:3,text:`**Grenzen dieser Beispielrechnung**`},{type:`p`,text:`Die Berechnung mit 12.000 Euro einmaligen Kosten und 150 Euro monatlicher Mietersparnis verdeutlicht ausschlieÃŸlich den mathematischen Zusammenhang zwischen tatsÃ¤chlichen Ausgaben und einer mÃ¶glichen Mietersparnis.`},{type:`p`,text:`Sie zeigt, dass sich tatsÃ¤chlich anfallende Kosten in dieser HÃ¶he bei einer monatlichen Einsparung von 150 Euro erst nach 80 Monaten vollstÃ¤ndig amortisieren wÃ¼rden.`},{type:`p`,text:`Die Rechnung entspricht jedoch nicht zwangslÃ¤ufig dem Ergebnis einer behÃ¶rdlichen WirtschaftlichkeitsprÃ¼fung nach der Hamburger Fachanweisung.`},{type:`p`,text:`Hamburg verwendet hierfÃ¼r eigene pauschalierte BerechnungsansÃ¤tze.`},{type:`p`,text:`Es ist anhand der bislang geprÃ¼ften Bestimmungen nicht nachgewiesen, dass bei einem konkreten professionellen Komplettumzug sÃ¤mtliche tatsÃ¤chlich veranschlagten Kosten automatisch in voller HÃ¶he an die Stelle dieser Pauschalen treten mÃ¼ssen.`},{type:`p`,text:`Die genaue rechtliche BerÃ¼cksichtigung eines nachgewiesenen auÃŸergewÃ¶hnlichen Umzugsaufwands wÃ¤re deshalb im Einzelfall zu prÃ¼fen.`},{type:`p`,text:`Die tatsÃ¤chliche Angemessenheit eines notwendigen gewerblichen Umzugs und die Berechnung seiner Wirtschaftlichkeit bleiben zwei miteinander verbundene, aber rechtlich unterschiedliche Fragen.`},{type:`p`,text:`**Rein wirtschaftlich wÃ¤re ein solcher Umzug innerhalb der Hamburger 36-Monats-Betrachtung nicht amortisiert.**`},{type:`p`,text:`Ob die BehÃ¶rde die gesamten 12.000 Euro auch in ihrer rechtlichen WirtschaftlichkeitsprÃ¼fung berÃ¼cksichtigen muss, wÃ¤re gesondert zu beurteilen.`}]},{number:15,title:`Kann das Jobcenter einen Umzug in Eigenregie verlangen?`,blocks:[{type:`p`,text:`GrundsÃ¤tzlich geht die Hamburger Fachanweisung davon aus, dass leistungsberechtigte Menschen einen Umzug im Rahmen ihrer MÃ¶glichkeiten selbst organisieren und durchfÃ¼hren.`},{type:`p`,text:`Dazu kann nach den UmstÃ¤nden auch die UnterstÃ¼tzung durch FamilienangehÃ¶rige oder andere nahestehende Personen gehÃ¶ren.`},{type:`p`,text:`Diese Erwartung hat aber Grenzen.`},{type:`p`,text:`Kann die betroffene Person aufgrund von Alter, Behinderung, kÃ¶rperlicher Konstitution oder anderen dringenden persÃ¶nlichen GrÃ¼nden den Umzug nicht oder nicht vollstÃ¤ndig selbst durchfÃ¼hren und steht keine geeignete UnterstÃ¼tzung zur VerfÃ¼gung, sieht Hamburg ausdrÃ¼cklich die MÃ¶glichkeit eines gewerblich organisierten Umzugs vor.`},{type:`p`,text:`Die fehlende FÃ¤higkeit zur Selbsthilfe muss nachgewiesen werden.`},{type:`p`,text:`FÃ¼r die fehlende UnterstÃ¼tzung durch andere Personen genÃ¼gt nach der Fachanweisung ein schlÃ¼ssiger Vortrag.`},{type:`p`,text:`Das bedeutet beispielsweise: Wer kÃ¶rperlich nicht in der Lage ist, schwere MÃ¶bel zu tragen, darf bei der Entscheidung Ã¼ber die notwendige Umzugsorganisation nicht einfach so behandelt werden, als kÃ¶nne er die erforderlichen Arbeiten selbst erledigen.`},{type:`p`,text:`Dasselbe gilt, wenn gesundheitliche EinschrÃ¤nkungen das Verpacken, Tragen, Aufbauen oder Organisieren tatsÃ¤chlich verhindern.`},{type:`heading`,level:3,text:`**Welche Kosten gehÃ¶ren zum Eigenumzug?**`},{type:`p`,text:`Hamburg nennt insbesondere:`},{type:`ul`,items:[`Mietwagen und Treibstoff`,`Anmietung von Umzugskartons`,`Verpackungsmaterial`,`Ummeldung und Umstellung von Post- und TelekommunikationsanschlÃ¼ssen`,`Notwendige SperrmÃ¼llentsorgung, sofern eine kostenfreie LÃ¶sung aus nachvollziehbaren GrÃ¼nden nicht mÃ¶glich war`,`Ãœbliche Verpflegung mithelfender FamilienangehÃ¶riger und Bekannter, in Hamburg pauschal insgesamt 30 Euro`]},{type:`p`,text:`Bei einem erforderlichen gewerblichen Umzug verlangt die Fachanweisung grundsÃ¤tzlich drei KostenvoranschlÃ¤ge.`},{type:`p`,text:`Dabei sind Angebote mit vergleichbarem Leistungsumfang gegenÃ¼berzustellen. MaÃŸgeblich soll das gÃ¼nstigste geeignete Angebot sein, sofern die Kosten plausibel erscheinen.`},{type:`heading`,level:3,text:`**Drei Angebote bei UmzÃ¼gen â€“ besondere Regelung bei Renovierungen**`},{type:`p`,text:`Die Hamburger Fachanweisung enthÃ¤lt unterschiedliche Nachweisanforderungen fÃ¼r gewerbliche UmzÃ¼ge und notwendige Handwerkerleistungen.`},{type:`p`,text:`Bei einem gewerblich organisierten Umzug verlangt Ziffer 7.4.3 grundsÃ¤tzlich mindestens drei KostenvoranschlÃ¤ge.`},{type:`p`,text:`Die Angebote mÃ¼ssen hinsichtlich ihres Leistungsumfangs vergleichbar sein.`},{type:`p`,text:`Das ist insbesondere bei umfangreichen UmzÃ¼gen von Bedeutung, bei denen nicht nur der MÃ¶beltransport, sondern auch Verpackungs-, Demontage- und Montageleistungen angeboten werden.`},{type:`p`,text:`Ein Angebot, das lediglich den Transport enthÃ¤lt, ist nicht ohne Weiteres mit einem Angebot vergleichbar, das zusÃ¤tzlich sÃ¤mtliche notwendigen Ein- und Auspackarbeiten sowie MÃ¶belmontagen umfasst.`},{type:`p`,text:`Bei notwendigen Renovierungsdienstleistungen enthÃ¤lt Ziffer 8.3.1 eine ausdrÃ¼ckliche Sonderregelung.`},{type:`p`,text:`KÃ¶nnen nachweislich trotz entsprechender BemÃ¼hungen nicht drei KostenvoranschlÃ¤ge eingeholt werden, dÃ¼rfen unter den dort genannten Voraussetzungen auch ein oder zwei Angebote berÃ¼cksichtigt werden.`},{type:`p`,text:`Eine entsprechende ausdrÃ¼cklich formulierte Ausnahme findet sich in Ziffer 7.4.3 fÃ¼r gewerbliche UmzÃ¼ge nicht.`},{type:`p`,text:`Deshalb sind die Anforderungen beider Leistungsarten getrennt darzustellen.`},{type:`p`,text:`Das bedeutet jedoch nicht, dass jede behÃ¶rdliche Entscheidung allein wegen der Zahl vorgelegter Angebote ohne weitere EinzelfallprÃ¼fung rechtmÃ¤ÃŸig wÃ¤re.`},{type:`p`,text:`Die tatsÃ¤chliche Erreichbarkeit geeigneter Anbieter und die MÃ¶glichkeiten der betroffenen Person kÃ¶nnen fÃ¼r eine rechtliche ÃœberprÃ¼fung relevant sein.`},{type:`p`,text:`Die Bezahlung erfolgt nach der Hamburger Regelung grundsÃ¤tzlich auf Rechnungsbasis direkt an das beauftragte Umzugsunternehmen.`},{type:`p`,text:`**Rechts- und Verwaltungsgrundlage:** Â§ 22 Absatz 6 SGB II und Ziffer 7.4.3 der Hamburger Fachanweisung.`}]},{number:16,title:`Muss das Jobcenter einen mehrtÃ¤gigen Komplettumzug bezahlen?`,blocks:[{type:`p`,text:`Ein professioneller Umzug umfasst nicht zwingend nur den Transport von MÃ¶beln zwischen zwei Wohnungen.`},{type:`p`,text:`Je nach nachgewiesenem Bedarf kÃ¶nnen weitere Leistungen erforderlich sein.`},{type:`p`,text:`Dazu gehÃ¶ren insbesondere die Demontage und Montage von MÃ¶beln sowie weitere unmittelbar durch den Umzug verursachte Arbeiten.`},{type:`p`,text:`Das Gesetz enthÃ¤lt keine pauschale Vorgabe, dass ein notwendiger Umzug innerhalb von acht Stunden oder an einem einzigen Tag abgeschlossen sein muss.`},{type:`p`,text:`Auch besteht in Â§ 22 Absatz 6 SGB II keine allgemeine feste Euro-Obergrenze fÃ¼r einen gesundheitlich notwendigen gewerblichen Umzug.`},{type:`p`,text:`Die Kosten mÃ¼ssen allerdings notwendig und angemessen sein.`},{type:`p`,text:`Bei der Beurteilung kommt es insbesondere auf die persÃ¶nliche LeistungsfÃ¤higkeit, den Umfang des Umzugsguts und die tatsÃ¤chlich erforderlichen TÃ¤tigkeiten an.`},{type:`heading`,level:3,text:`**Ein vollstÃ¤ndiger Umzug kann mehrere Arbeitsschritte umfassen**`},{type:`table`,rows:[[`TÃ¤tigkeit`,`Rechtliche Beurteilung`],[`Einpacken des Hausrats`,`Bei fehlender zumutbarer Selbsthilfe im Einzelfall als notwendige Hilfe zu prÃ¼fen`],[`Demontage von SchrÃ¤nken und MÃ¶beln`,`Als unmittelbar umzugsbedingte Leistung anerkennungsfÃ¤hig`],[`Transport`,`Typische Umzugskosten`],[`Entladen und Aufstellen`,`Typische Umzugskosten`],[`Wiederaufbau von MÃ¶beln`,`Als notwendige Umzugsleistung anerkennungsfÃ¤hig`],[`Demontage und Montage einer EinbaukÃ¼che`,`Bei entsprechender Notwendigkeit anerkennungsfÃ¤hig`],[`Fachgerechter Anschluss erforderlicher GerÃ¤te`,`Im Einzelfall gesondert zu prÃ¼fen`],[`Auspacken des Hausrats`,`Bei nachgewiesenem Bedarf zu prÃ¼fen`],[`Befestigung notwendiger HÃ¤ngeschrÃ¤nke und Regale`,`Je nach Zusammenhang mit dem MÃ¶belaufbau zu prÃ¼fen`],[`Anbringen persÃ¶nlicher Dekorationen`,`Kein nachgewiesener genereller Anspruch`],[`VollstÃ¤ndige individuelle Neugestaltung der Wohnung`,`Kein nachgewiesener pauschaler Ãœbernahmeanspruch`]]},{type:`p`,text:`Die rechtliche Abgrenzung ist bedeutsam: Notwendige Umzugskosten sind nicht identisch mit allen gewÃ¼nschten Einrichtungs- und GestaltungsmaÃŸnahmen.`},{type:`p`,text:`Es muss daher konkret festgestellt werden, welche TÃ¤tigkeiten unmittelbar umzugsbedingt und notwendig sind.`}]},{number:17,title:`Gerichtsentscheidung: Sozialgericht Karlsruhe bestÃ¤tigt professionelle Umzugskosten`,blocks:[{type:`p`,text:`Ein besonders wichtiges Urteil stammt vom Sozialgericht Karlsruhe.`},{type:`p`,text:`**Sozialgericht Karlsruhe â€“ Urteil vom 1. Oktober 2024, S 12 AS 2387/22**`},{type:`p`,text:`In dem Verfahren ging es um die Ãœbernahme von 2.200 Euro fÃ¼r einen gewerblichen Umzug.`},{type:`p`,text:`Das beauftragte Unternehmen hatte unter anderem folgende Leistungen erbracht:`},{type:`ul`,items:[`Arbeitsleistungen und Transport`,`Verpackungsmaterial und Sicherungsmaterial`,`Be- und Entladen`,`Ab- und Aufbau von MÃ¶beln`,`KÃ¼chenmontage`,`MÃ¶belmontage`,`MÃ¶belentsorgung`]},{type:`heading`,level:3,text:`**Der Umzug dauerte drei Kalendertage und erforderte rund 96 Arbeitsstunden**`},{type:`p`,text:`Eine fÃ¼r die praktische Bedeutung des Urteils besonders wichtige Tatsache ist der tatsÃ¤chliche Arbeitsumfang.`},{type:`p`,text:`Der gewerblich organisierte Umzug wurde vom 29. September bis zum 1. Oktober 2022 durchgefÃ¼hrt.`},{type:`p`,text:`Er erstreckte sich damit Ã¼ber drei Kalendertage.`},{type:`p`,text:`Nach den gerichtlichen Feststellungen waren insgesamt etwa 96 Personenarbeitsstunden erforderlich.`},{type:`p`,text:`Diese Zahl bezeichnet den gesamten Arbeitsaufwand der eingesetzten Personen und darf nicht mit 96 Stunden Einsatzzeit einer einzelnen Person gleichgesetzt werden.`},{type:`p`,text:`Das Gericht stÃ¼tzte seine Feststellungen unter anderem auf einen weiteren Kostenvoranschlag und die Angaben zum tatsÃ¤chlich eingesetzten Personal.`},{type:`p`,text:`Der Umfang war unter anderem dadurch bedingt, dass der Hausrat aus dem dritten Obergeschoss der bisherigen Wohnung in das vierte Obergeschoss der neuen Wohnung transportiert werden musste.`},{type:`p`,text:`Insgesamt waren dabei sieben Stockwerke zu Ã¼berwinden.`},{type:`p`,text:`Die KlÃ¤gerin lebte mit zwei pflegebedÃ¼rftigen Kindern zusammen. Das Gericht berÃ¼cksichtigte sowohl deren gesundheitliche EinschrÃ¤nkungen als auch die persÃ¶nliche Belastung der KlÃ¤gerin.`},{type:`p`,text:`Zudem stand keine ausreichende unentgeltliche UnterstÃ¼tzung zur VerfÃ¼gung.`},{type:`heading`,level:3,text:`**Warum das Gericht professionelle Hilfe fÃ¼r notwendig hielt**`},{type:`p`,text:`Das Sozialgericht stellte ausdrÃ¼cklich fest, dass der umfangreiche Arbeitsaufwand nicht mit den tatsÃ¤chlich verfÃ¼gbaren FamilienangehÃ¶rigen und sonstigen Hilfspersonen hÃ¤tte bewÃ¤ltigt werden kÃ¶nnen.`},{type:`p`,text:`Es genÃ¼gte nicht, abstrakt auf mÃ¶gliche studentische Umzugshelfer oder gemeinnÃ¼tzige Einrichtungen zu verweisen.`},{type:`p`,text:`Entscheidend war, ob diese MÃ¶glichkeiten im konkreten Fall tatsÃ¤chlich verfÃ¼gbar, geeignet und wirtschaftlicher gewesen wÃ¤ren.`},{type:`p`,text:`DarÃ¼ber hinaus berÃ¼cksichtigte das Gericht die erforderliche Demontage und Montage der EinbaukÃ¼che einschlieÃŸlich des fachgerechten Anschlusses des Elektroherds.`},{type:`p`,text:`Die Entscheidung zeigt somit, dass auch ein mehrtÃ¤giger professioneller Umzug mit erheblichem Personalaufwand als notwendige und angemessene Leistung anerkannt werden kann.`},{type:`p`,text:`Der konkrete Umfang muss jedoch jeweils nachgewiesen werden.`},{type:`p`,text:`**Die 96 Personenarbeitsstunden sind eine gerichtliche Feststellung fÃ¼r diesen Einzelfall. Sie stellen weder einen allgemeinen Mindestbedarf noch eine gesetzliche HÃ¶chstgrenze dar.**`},{type:`p`,text:`Ebenso folgt aus der Entscheidung kein pauschaler Anspruch auf fÃ¼nf oder sechs Tage zusÃ¤tzlicher Einrichtungsarbeiten.`},{type:`p`,text:`Die rechtliche Bedeutung des Urteils besteht darin, dass der tatsÃ¤chliche, nachgewiesene Aufwand und die persÃ¶nlichen MÃ¶glichkeiten der betroffenen Person berÃ¼cksichtigt werden mÃ¼ssen.`},{type:`p`,text:`Das Gericht erkannte die gesamten 2.200 Euro als erstattungsfÃ¤hige Umzugskosten an.`},{type:`p`,text:`Die betroffene Familie befand sich in einer besonderen persÃ¶nlichen Situation. Die Mutter war erheblich gesundheitlich belastet und musste die Versorgung ihrer pflegebedÃ¼rftigen Kinder gewÃ¤hrleisten.`},{type:`p`,text:`Das Gericht berÃ¼cksichtigte diese UmstÃ¤nde bei der Frage, ob eine DurchfÃ¼hrung des Umzugs in Eigenregie zumutbar war.`},{type:`heading`,level:3,text:`**Die wirtschaftliche Betrachtung des Gerichts**`},{type:`p`,text:`Durch den Umzug sanken die monatlichen Unterkunfts- und Heizkosten von 1.014,01 Euro auf 887,90 Euro.`},{type:`p`,text:`Die Einsparung betrug 126,11 Euro monatlich.`},{type:`p`,text:`Damit amortisierten sich die 2.200 Euro Umzugskosten nach rund 17,4 Monaten.`},{type:`p`,text:`Das Gericht stellte auÃŸerdem fest, dass die beauftragte Firma im Vergleich mit anderen vorgelegten Angeboten die gÃ¼nstigste geeignete LÃ¶sung war.`},{type:`p`,text:`Die Entscheidung zeigt, dass ein gewerblicher Umzug trotz hÃ¶herer einmaliger Kosten angemessen und wirtschaftlich sein kann, insbesondere wenn Eigenleistungen nicht zumutbar sind.`},{type:`p`,text:`Sie begrÃ¼ndet aber keinen allgemeinen Anspruch auf einen Komplettumzug beliebigen Umfangs.`},{type:`p`,text:`**Fundstelle:** [SG Karlsruhe â€“ Urteil S 12 AS 2387/22 im Volltext](https://de.openlegaldata.io/case/sg-karlsruhe-2024-10-01-s-12-as-238722).`}]},{number:18,title:`Weitere Hamburger Rechtsprechung zu MÃ¶bel- und KÃ¼chenmontage`,blocks:[{type:`p`,text:`Auch Hamburger Gerichte haben sich mit der Ãœbernahme von Umzugskosten und insbesondere der Montage von EinrichtungsgegenstÃ¤nden beschÃ¤ftigt.`},{type:`p`,text:`Zu nennen sind:`},{type:`p`,text:`**Sozialgericht Hamburg â€“ S 62 AS 1988/19**`},{type:`p`,text:`und das damit zusammenhÃ¤ngende Verfahren`},{type:`p`,text:`**Landessozialgericht Hamburg â€“ L 4 AS 202/22 D vom 22. Dezember 2022.**`},{type:`heading`,level:3,text:`**Unterschiedliche Bewertungen professioneller Umzugskosten in Hamburg und Karlsruhe**`},{type:`p`,text:`Die Hamburger Entscheidungen und das Karlsruher Urteil befassen sich mit der Frage, welche Umzugskosten notwendig und angemessen sind und welche Eigen- oder Fremdhilfe von Leistungsberechtigten erwartet werden kann.`},{type:`p`,text:`Dabei bestehen teilweise unterschiedliche rechtliche Bewertungen.`},{type:`p`,text:`Das Sozialgericht Karlsruhe hat sich in seinem Urteil vom 1. Oktober 2024 ausdrÃ¼cklich mit den Hamburger Entscheidungen auseinandergesetzt.`},{type:`p`,text:`Insbesondere hat es der Annahme widersprochen, dass studentische Umzugshelfer grundsÃ¤tzlich eine gÃ¼nstigere Alternative zu einem professionellen Umzugsunternehmen darstellen.`},{type:`p`,text:`Nach Auffassung des Sozialgerichts Karlsruhe kann eine solche KostenÃ¼berlegenheit nicht allgemein unterstellt werden.`},{type:`p`,text:`Vielmehr mÃ¼ssen die tatsÃ¤chlichen UmstÃ¤nde berÃ¼cksichtigt werden.`},{type:`p`,text:`Dazu gehÃ¶ren die verfÃ¼gbaren ArbeitskrÃ¤fte, der notwendige zeitliche Umfang, die kÃ¶rperlichen Anforderungen, erforderliche Transportmittel und gegebenenfalls notwendige Facharbeiten.`},{type:`heading`,level:3,text:`**Warum studentische Helfer nicht automatisch gÃ¼nstiger sind**`},{type:`p`,text:`Ein professionelles Umzugsunternehmen kann verschiedene Leistungen in einem einzigen Auftrag erbringen.`},{type:`p`,text:`Dazu gehÃ¶ren beispielsweise:`},{type:`ul`,items:[`Transport einschlieÃŸlich Fahrzeug und Personal`,`Bereitstellung von Transport- und Sicherungsmaterial`,`Einrichtung notwendiger Halteverbotszonen`,`Abbau und Aufbau der vorhandenen MÃ¶bel`,`Transport und Montage der EinbaukÃ¼che`,`Organisation eines zeitlich abgestimmten Umzugsablaufs`]},{type:`p`,text:`Wer stattdessen einzelne Helfer beschÃ¤ftigt, muss mÃ¶glicherweise zusÃ¤tzlich Fahrzeuge, Arbeitsmaterial, Fachpersonal und weitere Dienstleistungen gesondert organisieren und bezahlen.`},{type:`p`,text:`Im Karlsruher Verfahren stellte das Gericht deshalb auf die konkreten Gesamtkosten der unterschiedlichen MÃ¶glichkeiten ab.`},{type:`p`,text:`Es beanstandete auÃŸerdem die Vorstellung, der Umzug mÃ¼sse aus wirtschaftlichen GrÃ¼nden Ã¼ber einen lÃ¤ngeren Zeitraum in Eigenregie durchgefÃ¼hrt werden, wenn dadurch zusÃ¤tzliche doppelte Mietkosten entstehen wÃ¼rden.`},{type:`p`,text:`Eine lÃ¤ngere Umzugsdauer ist somit nicht schon deshalb wirtschaftlicher, weil einzelne Helfer pro Stunde gÃ¼nstiger erscheinen.`},{type:`heading`,level:3,text:`**KÃ¼chenmontage als gesonderter Gesichtspunkt**`},{type:`p`,text:`Bei der Frage der fachgerechten KÃ¼chenmontage griff das Sozialgericht Karlsruhe dagegen auch auf AusfÃ¼hrungen aus dem Hamburger Verfahren zurÃ¼ck.`},{type:`p`,text:`Dies zeigt, dass die Entscheidungen nicht in sÃ¤mtlichen Punkten gegensÃ¤tzlich sind.`},{type:`p`,text:`Sie behandeln teilweise dieselben Rechtsfragen, gelangen aber nicht in jeder Bewertungsfrage zu identischen Ergebnissen.`},{type:`heading`,level:3,text:`**Bedeutung fÃ¼r Leistungsberechtigte**`},{type:`p`,text:`FÃ¼r die Entscheidung Ã¼ber notwendige Umzugskosten ist eine konkrete Betrachtung der tatsÃ¤chlich verfÃ¼gbaren und geeigneten MÃ¶glichkeiten erforderlich.`},{type:`p`,text:`Ein professionelles Unternehmen darf nicht allein mit dem pauschalen Hinweis abgelehnt werden, studentische Helfer seien grundsÃ¤tzlich gÃ¼nstiger.`},{type:`p`,text:`Ebenso begrÃ¼ndet die Karlsruher Entscheidung keinen allgemeinen Anspruch auf ein Umzugsunternehmen unabhÃ¤ngig von den tatsÃ¤chlichen UmstÃ¤nden.`},{type:`p`,text:`MaÃŸgeblich bleiben die notwendige Arbeitsleistung, die MÃ¶glichkeiten zur Selbsthilfe und die Angemessenheit der konkret entstehenden Kosten.`}]},{number:19,title:`Wer bezahlt umfangreiche Bohr- und Montagearbeiten?`,blocks:[{type:`p`,text:`Diese Frage ist insbesondere fÃ¼r Menschen mit Behinderungen oder erheblichen kÃ¶rperlichen EinschrÃ¤nkungen von Bedeutung.`},{type:`p`,text:`In einer vollstÃ¤ndig eingerichteten Wohnung kÃ¶nnen zahlreiche GegenstÃ¤nde fest mit WÃ¤nden oder Decken verbunden sein.`},{type:`p`,text:`Beispiele sind:`},{type:`ul`,items:[`HÃ¤ngeschrÃ¤nke in KÃ¼che und Badezimmer`,`Wandregale und sonstige Aufbewahrungssysteme`,`Garderoben und Halterungen`,`Notwendige Beleuchtungseinrichtungen`,`Befestigungssysteme fÃ¼r MÃ¶bel`,`Ausstattung zur selbststÃ¤ndigen AlltagsbewÃ¤ltigung`]},{type:`p`,text:`Bei einem Wohnungswechsel mÃ¼ssen solche EinrichtungsgegenstÃ¤nde gegebenenfalls demontiert und in der neuen Wohnung wieder befestigt werden.`},{type:`p`,text:`Der zeitliche Aufwand kann erheblich sein, insbesondere wenn unterschiedliche UntergrÃ¼nde, geeignete Befestigungsmittel und fachgerechte Montagearbeiten erforderlich sind.`},{type:`heading`,level:3,text:`**Drei getrennte Fragen bei notwendigen Bohr- und Montagearbeiten**`},{type:`p`,text:`Bei einem Wohnungswechsel kÃ¶nnen umfangreiche Montagearbeiten entstehen. Die bloÃŸe Tatsache, dass diese Arbeiten zeitaufwendig sind oder die leistungsberechtigte Person sie selbst nicht ausfÃ¼hren kann, beantwortet jedoch noch nicht abschlieÃŸend die Frage der KostenÃ¼bernahme.`},{type:`p`,text:`Rechtlich sind drei Fragen zu unterscheiden.`},{type:`p`,text:`**Erstens: Sind die Arbeiten unmittelbar durch den notwendigen Wohnungswechsel entstanden?**`},{type:`p`,text:`Hierzu kÃ¶nnen insbesondere der Abbau bisheriger MÃ¶bel, deren Transport und die erforderliche Wiederherstellung ihrer Nutzbarkeit in der neuen Wohnung gehÃ¶ren.`},{type:`p`,text:`Nicht jede bei einem Wohnungswechsel gewÃ¼nschte VerÃ¤nderung der Einrichtung ist unmittelbar umzugsbedingt.`},{type:`p`,text:`**Zweitens: Sind die Arbeiten erforderlich, damit die vorhandenen EinrichtungsgegenstÃ¤nde wieder bestimmungsgemÃ¤ÃŸ genutzt werden kÃ¶nnen?**`},{type:`p`,text:`Es ist beispielsweise zu unterscheiden, ob ein vorhandener HÃ¤ngeschrank notwendig wieder befestigt werden muss oder ob zusÃ¤tzliche dekorative GegenstÃ¤nde angebracht werden sollen.`},{type:`p`,text:`Bei der Bewertung kÃ¶nnen auch gesundheitliche und behinderungsbedingte Anforderungen an die tatsÃ¤chliche Nutzbarkeit der Wohnung relevant sein.`},{type:`p`,text:`**Drittens: Muss der zustÃ¤ndige LeistungstrÃ¤ger die erforderlichen Arbeitskosten Ã¼bernehmen?**`},{type:`p`,text:`HierfÃ¼r mÃ¼ssen die einschlÃ¤gige gesetzliche Anspruchsgrundlage, die Notwendigkeit einer professionellen DurchfÃ¼hrung und die Angemessenheit der Kosten geprÃ¼ft werden.`},{type:`p`,text:`Eine nachgewiesene gesundheitliche UnfÃ¤higkeit zur Selbsthilfe ist dabei ein wichtiger Umstand.`},{type:`p`,text:`Sie begrÃ¼ndet jedoch nicht automatisch einen Anspruch auf jede denkbare Montage- oder Einrichtungsleistung.`},{type:`p`,text:`Das Urteil des Sozialgerichts Karlsruhe vom 1. Oktober 2024 belegt, dass notwendige MÃ¶bel- und KÃ¼chenmontagen grundsÃ¤tzlich Bestandteil erstattungsfÃ¤higer professioneller Umzugskosten sein kÃ¶nnen.`},{type:`p`,text:`Es belegt hingegen keinen allgemeinen Anspruch auf eine bestimmte Anzahl von Tagen fÃ¼r Bohr- und Montagearbeiten.`},{type:`p`,text:`Ein Zeitaufwand von beispielsweise fÃ¼nf oder sechs Arbeitstagen muss deshalb anhand des konkret notwendigen Leistungsumfangs nachgewiesen werden.`},{type:`p`,text:`Die fachliche Eignung des ausfÃ¼hrenden Unternehmens und die voraussichtlichen Kosten sollten mÃ¶glichst bereits aus den KostenvoranschlÃ¤gen hervorgehen.`},{type:`heading`,level:3,text:`**Worauf kommt es rechtlich an?**`},{type:`p`,text:`Entscheidend ist nicht allein, wie viele Arbeitsstunden anfallen.`},{type:`p`,text:`Es kommt darauf an, ob die Arbeiten fÃ¼r die notwendige Wiederherstellung einer nutzbaren Wohnung erforderlich sind und ob die betroffene Person sie selbst ausfÃ¼hren kann.`},{type:`p`,text:`Dabei sind mehrere Leistungsarten zu unterscheiden:`},{type:`p`,text:`**Umzugsbedingte Montage:** Arbeiten, die unmittelbar notwendig sind, um vorhandenes Mobiliar am neuen Wohnort wieder nutzen zu kÃ¶nnen.`},{type:`p`,text:`**Renovierung:** Arbeiten, die erforderlich sind, um die neue Wohnung in einen vertragsgemÃ¤ÃŸen und bewohnbaren Zustand zu versetzen.`},{type:`p`,text:`**Behinderungsbedingte Wohnraumanpassung:** MaÃŸnahmen, die gegebenenfalls nach anderen sozialrechtlichen Vorschriften zu beurteilen sind, insbesondere wenn sie der Erleichterung der Pflege oder der selbststÃ¤ndigeren LebensfÃ¼hrung dienen.`},{type:`p`,text:`**Rein persÃ¶nliche Ausstattung:** Gestaltungs- und DekorationswÃ¼nsche, fÃ¼r die grundsÃ¤tzlich kein allgemeiner KostenÃ¼bernahmeanspruch besteht.`},{type:`p`,text:`Wird umfangreiche Montagehilfe benÃ¶tigt, sollte jede TÃ¤tigkeit konkret beschrieben werden.`},{type:`p`,text:`Eine pauschale Position wie â€žWohnung vollstÃ¤ndig einrichtenâ€œ ist weniger aussagekrÃ¤ftig als ein nach TÃ¤tigkeiten, Arbeitsstunden und Materialbedarf aufgeschlÃ¼sselter Kostenvoranschlag.`},{type:`p`,text:`Ein tatsÃ¤chlicher Bedarf von fÃ¼nf oder sechs Arbeitstagen fÃ¼r notwendige Montageleistungen wÃ¤re deshalb anhand konkreter Angebote und der erforderlichen Arbeiten nachzuweisen.`},{type:`p`,text:`Er dÃ¼rfte nicht allein deshalb als unnÃ¶tig behandelt werden, weil er erheblich Ã¼ber einem gewÃ¶hnlichen MÃ¶beltransport liegt.`},{type:`p`,text:`Eine pauschale Verpflichtung des Jobcenters zur Finanzierung jedes persÃ¶nlichen Einrichtungswunsches ergibt sich daraus nicht.`}]},{number:20,title:`Wer Ã¼bernimmt notwendige Renovierungen?`,blocks:[{type:`p`,text:`Neben den eigentlichen Umzugskosten kÃ¶nnen auch Renovierungskosten entstehen.`},{type:`p`,text:`Das gilt beispielsweise, wenn eine neue Wohnung unrenoviert Ã¼bergeben wird und vor dem Einzug Arbeiten erforderlich sind.`},{type:`p`,text:`Auch beim Auszug aus der bisherigen Wohnung kÃ¶nnen SchÃ¶nheitsreparaturen notwendig werden.`},{type:`p`,text:`Die Hamburger Fachanweisung regelt diese Kosten in Abschnitt 8.`},{type:`heading`,level:3,text:`**Einzugsrenovierung**`},{type:`heading`,level:3,text:`**Einzugsrenovierungskosten sind rechtlich von Umzugskosten zu unterscheiden**`},{type:`p`,text:`Das Bundessozialgericht hat mit Urteil vom 16. Dezember 2008, B 4 AS 49/07 R, entschieden, dass notwendige Einzugsrenovierungskosten grundsÃ¤tzlich den Unterkunftskosten nach Â§ 22 Absatz 1 SGB II zuzuordnen sind.`},{type:`p`,text:`Sie sind rechtlich nicht mit den eigentlichen Kosten des MÃ¶beltransports oder des gewerblich organisierten Umzugs gleichzusetzen.`},{type:`p`,text:`Diese Unterscheidung ist fÃ¼r die AnspruchsprÃ¼fung bedeutsam.`},{type:`p`,text:`WÃ¤hrend typische Umzugskosten insbesondere nach Â§ 22 Absatz 6 SGB II beurteilt werden, kÃ¶nnen notwendige Aufwendungen zur Herstellung eines bewohnbaren Zustands der neuen Unterkunft als Unterkunftsbedarf zu berÃ¼cksichtigen sein.`},{type:`p`,text:`Die Ãœbernahme setzt voraus, dass die Renovierung im konkreten Fall notwendig ist und die Kosten angemessen sind.`},{type:`p`,text:`Dabei ist insbesondere zu prÃ¼fen, in welchem Zustand die Wohnung Ã¼bergeben wurde, welche mietvertraglichen Verpflichtungen bestehen und ob die erforderlichen Arbeiten nach dem maÃŸgeblichen Wohnstandard angemessen sind.`},{type:`p`,text:`Die Entscheidung begrÃ¼ndet keinen allgemeinen Anspruch auf eine beliebige Renovierung oder eine hochwertige Neugestaltung der Wohnung.`},{type:`p`,text:`Sie stellt jedoch klar, dass notwendige Einzugsrenovierungskosten nicht bereits deshalb ausgeschlossen werden dÃ¼rfen, weil sie keine eigentlichen Transport- oder Umzugskosten sind.`},{type:`heading`,level:3,text:`**Bedeutung bei gesundheitlichen EinschrÃ¤nkungen**`},{type:`p`,text:`Kann eine leistungsberechtigte Person notwendige Renovierungsarbeiten wegen einer schweren Erkrankung oder Behinderung nicht selbst ausfÃ¼hren, kommt die gesonderte BerÃ¼cksichtigung notwendiger Handwerkerleistungen hinzu.`},{type:`p`,text:`FÃ¼r Hamburg enthÃ¤lt Ziffer 8.3.1 der Fachanweisung hierzu ausdrÃ¼ckliche Verwaltungsvorgaben.`},{type:`p`,text:`Die beiden Fragen mÃ¼ssen daher getrennt geprÃ¼ft werden:`},{type:`p`,text:`Erstens, ob eine notwendige Einzugsrenovierung als Unterkunftsbedarf anzuerkennen ist.`},{type:`p`,text:`Zweitens, ob die erforderliche DurchfÃ¼hrung durch einen Fachbetrieb wegen fehlender zumutbarer Selbsthilfe notwendig ist.`},{type:`p`,text:`Nach Ziffer 8.2.1 kÃ¶nnen die Kosten einer notwendigen Einzugsrenovierung Ã¼bernommen werden, wenn die maÃŸgeblichen Voraussetzungen erfÃ¼llt sind.`},{type:`p`,text:`Dazu gehÃ¶rt insbesondere, dass die Renovierung erforderlich und angemessen ist, um die Bewohnbarkeit der Unterkunft herzustellen.`},{type:`p`,text:`Hamburg orientiert sich dabei grundsÃ¤tzlich am einfachen Wohnstandard.`},{type:`p`,text:`Als Beispiele nennt die Fachanweisung:`},{type:`ul`,items:[`Raufasertapete`,`Einfachen Farbanstrich`,`Einfachen Teppichboden`,`PVC-Bodenbelag`]},{type:`p`,text:`Nicht jede Renovierung ist automatisch erforderlich.`},{type:`p`,text:`Insbesondere MaÃŸnahmen, die weit Ã¼ber Ã¼bliche SchÃ¶nheitsreparaturen hinausgehen, werden nach der Hamburger Fachanweisung regelmÃ¤ÃŸig nicht als angemessen angesehen.`},{type:`p`,text:`Dazu kÃ¶nnen beispielsweise umfangreiche bauliche Sanierungen gehÃ¶ren.`},{type:`p`,text:`**Wichtig:** Renovierungskosten, die rechtlich vom Vermieter zu tragen sind, kÃ¶nnen nicht allein deshalb auf den GrundsicherungstrÃ¤ger verlagert werden, weil die leistungsberechtigte Person Sozialleistungen bezieht.`},{type:`heading`,level:3,text:`**Auszugsrenovierung**`},{type:`p`,text:`Auch bei einer Auszugsrenovierung prÃ¼ft Hamburg die Notwendigkeit und die mietvertragliche Verpflichtung.`},{type:`p`,text:`Eine im Mietvertrag enthaltene Renovierungsklausel ist nicht automatisch wirksam.`},{type:`p`,text:`Insbesondere formularmÃ¤ÃŸige SchÃ¶nheitsreparaturklauseln bei unrenoviert Ã¼bergebenen Wohnungen kÃ¶nnen mietrechtlich unwirksam sein.`},{type:`p`,text:`Die Fachanweisung verweist deshalb bei Zweifeln auf die ÃœberprÃ¼fung durch einen Mieterverein.`},{type:`heading`,level:3,text:`**TurnusmÃ¤ÃŸige SchÃ¶nheitsreparaturen**`},{type:`p`,text:`Die Hamburger Fachanweisung berÃ¼cksichtigt auÃŸerdem SchÃ¶nheitsreparaturen wÃ¤hrend der Mietzeit, soweit eine wirksame Verpflichtung besteht und die Renovierung tatsÃ¤chlich erforderlich ist.`},{type:`p`,text:`Ein starrer Zeitablauf reicht fÃ¼r sich allein nicht aus.`},{type:`p`,text:`Die Verwaltung berÃ¼cksichtigt den tatsÃ¤chlichen Zustand der Wohnung und die entstandene Abnutzung.`},{type:`p`,text:`Als grundsÃ¤tzlichen Orientierungswert nennt die Fachanweisung grÃ¶ÃŸere ZeitabstÃ¤nde, regelmÃ¤ÃŸig etwa zehn Jahre. Im begrÃ¼ndeten Einzelfall kÃ¶nnen auch kÃ¼rzere AbstÃ¤nde erforderlich sein.`},{type:`heading`,level:3,text:`**Dreistufige PrÃ¼fung der Einzugsrenovierung**`},{type:`p`,text:`Nach BSG, B 4 AS 49/07 R, sind die Herstellung der Bewohnbarkeit, die OrtsÃ¼blichkeit einer notwendigen Einzugsrenovierung mangels nennenswert verfÃ¼gbarer renovierter Wohnungen im unteren Wohnungsmarktsegment und die angemessene KostenhÃ¶he zu prÃ¼fen. Eine mietvertragliche Pflicht ist dafÃ¼r nicht zwingend. Das ist von der PrÃ¼fung wirksamer SchÃ¶nheitsreparaturpflichten beim Auszug zu unterscheiden.`}]},{number:21,title:`Wer bezahlt die Handwerker, wenn die Person nicht selbst renovieren kann?`,blocks:[{type:`p`,text:`Diese Frage wird in Hamburg ausdrÃ¼cklich geregelt.`},{type:`p`,text:`**Ziffer 8.3.1 der Hamburger Fachanweisung sieht die Ãœbernahme notwendiger Handwerkerleistungen vor, wenn besondere persÃ¶nliche LebensumstÃ¤nde dies erforderlich machen.**`},{type:`p`,text:`Als Beispiele nennt Hamburg schwere Erkrankungen und Behinderungen.`},{type:`p`,text:`Die Voraussetzungen betreffen insbesondere zwei Punkte:`},{type:`p`,text:`Erstens muss die leistungsberechtigte Person die notwendigen Arbeiten nicht oder nicht vollstÃ¤ndig selbst ausfÃ¼hren kÃ¶nnen.`},{type:`p`,text:`Zweitens muss nachvollziehbar dargelegt werden, dass eine geeignete UnterstÃ¼tzung durch FamilienangehÃ¶rige, Freunde oder Nachbarn nicht mÃ¶glich ist.`},{type:`p`,text:`Liegen die Voraussetzungen vor, kann ein fachlich geeigneter Dienstleister beauftragt werden.`},{type:`heading`,level:3,text:`**KostenvoranschlÃ¤ge und Abrechnung**`},{type:`p`,text:`Nach der Hamburger Fachanweisung sollen in der Regel mÃ¶glichst drei KostenvoranschlÃ¤ge eingeholt werden.`},{type:`p`,text:`Bei vergleichbarem Leistungsumfang ist grundsÃ¤tzlich das gÃ¼nstigste geeignete Angebot vorzuziehen.`},{type:`p`,text:`Eine wichtige Ausnahmeregelung besteht jedoch:`},{type:`p`,text:`Wenn die betroffene Person nachweislich erfolglos versucht hat, drei KostenvoranschlÃ¤ge einzuholen, kÃ¶nnen auch ein oder zwei Angebote ausreichen, sofern die veranschlagten Kosten plausibel sind.`},{type:`p`,text:`Die Zahlung erfolgt grundsÃ¤tzlich nach DurchfÃ¼hrung und Abnahme der Arbeiten anhand einer spezifizierten Rechnung direkt an den Dienstleister.`},{type:`heading`,level:3,text:`**Gleichzeitige Einzugs- und Auszugsrenovierung**`},{type:`p`,text:`Die Fachanweisung sieht ausdrÃ¼cklich vor, dass unter den jeweiligen Voraussetzungen sowohl eine Auszugsrenovierung als auch eine Einzugsrenovierung erforderlich und Ã¼bernahmefÃ¤hig sein kÃ¶nnen.`},{type:`p`,text:`Die beiden Renovierungen dÃ¼rfen also nicht automatisch als ein einziger Kostenfall behandelt werden.`},{type:`p`,text:`Allerdings werden bestimmte Pauschalen, beispielsweise fÃ¼r Kleinbedarf, grundsÃ¤tzlich nicht doppelt anerkannt.`},{type:`p`,text:`**Amtliche Grundlage:** [Hamburger Fachanweisung, Abschnitt 8.3.1 â€“ Dienstleistungen](https://dokumente.hamburg.de/resource/blob/46622/a81471fb2df41a856600cb3507f32519/fa-sgbii-22-kdu-00-pdf-data.pdf).`}]},{number:22,title:`Welche Renovierungspauschalen nennt Hamburg?`,blocks:[{type:`p`,text:`FÃ¼r Renovierungsbedarf in einfachem Standard enthÃ¤lt die Hamburger Fachanweisung folgende Werte:`},{type:`table`,rows:[[`Position`,`Pauschale`],[`Kleinbedarf`,`30,00 â‚¬ einmalig`],[`Raufaser, Rolle 20 m Ã— 0,53 m`,`6,40 â‚¬ pro Rolle`],[`Wand- und Deckenfarbe`,`0,21 â‚¬ pro mÂ²`],[`Farbe fÃ¼r Fenster, TÃ¼ren und HeizkÃ¶rper`,`2,10 â‚¬ je Element`],[`Teppichboden oder PVC-Belag`,`4,10 â‚¬ pro mÂ²`],[`Verpflegung freiwilliger Helfer`,`30,00 â‚¬ pauschal`]]},{type:`p`,text:`Diese Material- und Aufwandspauschalen dÃ¼rfen nicht mit den Kosten eines notwendigen professionellen Handwerkereinsatzes gleichgesetzt werden.`},{type:`p`,text:`Insbesondere bei schwerer Erkrankung oder Behinderung kann gerade die Arbeitsleistung durch einen Fachbetrieb erforderlich sein.`},{type:`p`,text:`DafÃ¼r enthÃ¤lt Abschnitt 8.3.1 die gesonderten Regelungen zur DienstleistungsÃ¼bernahme.`}]},{number:23,title:`Welche weiteren Kosten kÃ¶nnen bei einem notwendigen Wohnungswechsel entstehen?`,blocks:[{type:`p`,text:`Ein Wohnungswechsel verursacht hÃ¤ufig mehr Kosten als lediglich den MÃ¶beltransport.`},{type:`p`,text:`Die Hamburger Fachanweisung und Â§ 22 SGB II enthalten unter bestimmten Voraussetzungen weitere Kostenarten.`},{type:`heading`,level:3,text:`**Mietkaution**`},{type:`p`,text:`Eine notwendige Mietkaution kann bei vorheriger Zusicherung berÃ¼cksichtigt werden.`},{type:`p`,text:`Nach Â§ 22 Absatz 6 SGB II sollen Aufwendungen fÃ¼r Mietkautionen grundsÃ¤tzlich als Darlehen erbracht werden.`},{type:`p`,text:`HierfÃ¼r ist regelmÃ¤ÃŸig der TrÃ¤ger am Ort der neuen Unterkunft zustÃ¤ndig.`},{type:`heading`,level:3,text:`**Genossenschaftsanteile**`},{type:`p`,text:`Beim Bezug einer Genossenschaftswohnung kann es erforderlich sein, GeschÃ¤ftsanteile der Wohnungsgenossenschaft zu erwerben.`},{type:`p`,text:`Notwendige Genossenschaftsanteile kÃ¶nnen nach Â§ 22 Absatz 6 SGB II und der Hamburger Fachanweisung unter den dort geregelten Voraussetzungen Ã¼bernommen werden.`},{type:`p`,text:`Sie werden in Hamburg grundsÃ¤tzlich als Darlehen gewÃ¤hrt und direkt an die Genossenschaft Ã¼berwiesen.`},{type:`p`,text:`Die Fachanweisung sieht ausdrÃ¼cklich vor, dass das Darlehen bereits vor Zustandekommen des Nutzungsvertrags gewÃ¤hrt und ausgezahlt werden soll, wenn der vorherige Erwerb der Genossenschaftsanteile Voraussetzung fÃ¼r den Vertragsabschluss ist.`},{type:`p`,text:`HierfÃ¼r verlangt Hamburg insbesondere eine konkrete Vermietungszusage fÃ¼r eine bestimmte Wohnung sowie die vorgesehenen unterschriebenen Abtretungsunterlagen und die schriftliche Kenntnisnahme der Genossenschaft.`},{type:`heading`,level:4,text:`**Hamburger Angemessenheitsgrenzen**`},{type:`table`,rows:[[`Voraussetzung`,`Angemessenheitsgrenze fÃ¼r Genossenschaftsanteile`],[`RegulÃ¤rer Fall`,`60 â‚¬ je mÂ²`],[`Anerkannt vordringlich wohnungssuchender Haushalt mit DringlichkeitsbestÃ¤tigung oder Dringlichkeitsschein`,`Bis 100 â‚¬ je mÂ²`],[`Nach der ausdrÃ¼cklich genannten FÃ¶rderrichtlinie gefÃ¶rdertes genossenschaftliches Neubauprojekt fÃ¼r vordringlich wohnungssuchende Haushalte`,`Bis 500 â‚¬ je mÂ²`]]},{type:`p`,text:`Die erhÃ¶hte Grenze von 500 Euro je Quadratmeter gilt nicht allgemein fÃ¼r jede neu gebaute Genossenschaftswohnung.`},{type:`p`,text:`Sie setzt voraus, dass das betreffende Projekt nach der in der Hamburger Fachanweisung ausdrÃ¼cklich genannten FÃ¶rderrichtlinie gefÃ¶rdert wurde.`},{type:`p`,text:`Die FÃ¶rderung ergibt sich nach der Fachanweisung unmittelbar aus dem Miet- beziehungsweise Nutzungsvertrag.`},{type:`p`,text:`Die AngemessenheitsprÃ¼fung betrifft somit nicht nur die HÃ¶he der verlangten Genossenschaftsanteile, sondern auch die jeweils erfÃ¼llten besonderen Voraussetzungen.`},{type:`p`,text:`Die DarlehensgewÃ¤hrung ist auÃŸerdem von einer endgÃ¼ltigen, nicht rÃ¼ckzahlbaren KostenÃ¼bernahme zu unterscheiden.`},{type:`heading`,level:3,text:`**Doppelte Mietkosten**`},{type:`p`,text:`Bei einem notwendigen Umzug kÃ¶nnen vorÃ¼bergehend doppelte Mietkosten entstehen.`},{type:`p`,text:`Ob und in welcher HÃ¶he sie anerkannt werden mÃ¼ssen, hÃ¤ngt insbesondere davon ab, ob sich eine zeitliche Ãœberschneidung der MietverhÃ¤ltnisse vermeiden lÃ¤sst.`},{type:`p`,text:`Die Hamburger Wirtschaftlichkeitsberechnung sieht dafÃ¼r pauschal zwei zusÃ¤tzliche Bruttokaltmieten der bisherigen Unterkunft vor.`},{type:`p`,text:`Dieser Berechnungsansatz ist von der tatsÃ¤chlichen Bewilligung einer konkret entstandenen Doppelmiete zu unterscheiden.`},{type:`heading`,level:3,text:`**Sonstige Wohnungsbeschaffungskosten**`},{type:`p`,text:`Hamburg nennt unter Ziffer 7.4.4 weitere mÃ¶gliche Kosten:`},{type:`ul`,items:[`GebÃ¼hren im Zusammenhang mit Genossenschaften`]},{type:`ul`,items:[`Mietrechtlich zulÃ¤ssige VertragsausfertigungsgebÃ¼hren, sofern eine entsprechende Zahlungspflicht tatsÃ¤chlich besteht.`,`Kosten fÃ¼r einen Dringlichkeitsschein`,`Unter besonderen Voraussetzungen Wohnungsanzeigen`,`Bestimmte unvermeidbare Abstandszahlungen`,`In AusnahmefÃ¤llen Maklerkosten, etwa bei besonders erschwerter Wohnungssuche aufgrund einer Behinderung`]},{type:`p`,text:`Auch hier bestehen keine pauschalen AnsprÃ¼che auf sÃ¤mtliche tatsÃ¤chlich entstandenen Ausgaben.`},{type:`p`,text:`Die Notwendigkeit, Angemessenheit und gegebenenfalls die vorherige Zusicherung sind jeweils gesondert zu prÃ¼fen.`},{type:`heading`,level:3,text:`**VertragsausfertigungsgebÃ¼hren**`},{type:`p`,text:`Nach Ziffer 7.4.4 der Hamburger Fachanweisung kÃ¶nnen unter den sonstigen Wohnungsbeschaffungskosten auch VertragsausfertigungsgebÃ¼hren berÃ¼cksichtigt werden, die der Mieterin oder dem Mieter gegenÃ¼ber dem Vermieter wirksam geschuldet werden.`},{type:`p`,text:`Voraussetzung ist ausdrÃ¼cklich, dass die zugrunde liegende Vereinbarung mietrechtlich zulÃ¤ssig ist.`},{type:`p`,text:`Hamburg weist darauf hin, dass Vereinbarungen Ã¼ber VertragsausfertigungsgebÃ¼hren in FormularmietvertrÃ¤gen Ã¼ber Wohnraum regelmÃ¤ÃŸig unwirksam sind.`},{type:`p`,text:`Eine vom Vermieter verlangte GebÃ¼hr ist deshalb nicht allein deshalb Ã¼bernahmefÃ¤hig, weil sie in einem Mietvertragsformular aufgefÃ¼hrt ist.`},{type:`p`,text:`ZunÃ¤chst ist zu prÃ¼fen, ob Ã¼berhaupt eine wirksame Zahlungsverpflichtung besteht.`},{type:`p`,text:`In ZweifelsfÃ¤llen sieht die Hamburger Fachanweisung die Beteiligung eines Mietervereins vor.`},{type:`p`,text:`Eine nicht wirksam geschuldete VertragsgebÃ¼hr darf nicht als notwendige Wohnungsbeschaffungskosten behandelt werden.`}]},{number:24,title:`Wer ist bei einem Umzug in eine andere Stadt zustÃ¤ndig?`,blocks:[{type:`p`,text:`Bei einem Wohnungswechsel kÃ¶nnen unterschiedliche GrundsicherungstrÃ¤ger beteiligt sein.`},{type:`heading`,level:3,text:`**Zusicherung zur neuen Miete und Zusicherung zu Umzugskosten sind unterschiedliche Entscheidungen**`},{type:`p`,text:`Bei einem Wohnungswechsel mÃ¼ssen mehrere rechtlich voneinander zu unterscheidende Fragen geklÃ¤rt werden.`},{type:`p`,text:`**Die Zusicherung zur BerÃ¼cksichtigung der neuen Unterkunftskosten** richtet sich nach Â§ 22 Absatz 4 SGB II.`},{type:`p`,text:`Hierbei geht es darum, in welchem Umfang die Aufwendungen fÃ¼r die neue Wohnung nach dem Umzug als Unterkunftsbedarf berÃ¼cksichtigt werden.`},{type:`p`,text:`ZustÃ¤ndig ist grundsÃ¤tzlich der fÃ¼r die neue Unterkunft Ã¶rtlich zustÃ¤ndige kommunale TrÃ¤ger.`},{type:`p`,text:`Davon zu unterscheiden ist **die Zusicherung zur Ãœbernahme von Wohnungsbeschaffungs- und Umzugskosten** nach Â§ 22 Absatz 6 SGB II.`},{type:`p`,text:`Hierbei geht es insbesondere um die finanziellen Aufwendungen, die durch den Wohnungswechsel selbst entstehen.`},{type:`p`,text:`FÃ¼r Wohnungsbeschaffungs- und Umzugskosten ist grundsÃ¤tzlich der bis zum Umzug Ã¶rtlich zustÃ¤ndige kommunale TrÃ¤ger zustÃ¤ndig.`},{type:`p`,text:`Bei Mietkautionen und Genossenschaftsanteilen ist dagegen grundsÃ¤tzlich der fÃ¼r die neue Unterkunft zustÃ¤ndige kommunale TrÃ¤ger maÃŸgeblich.`},{type:`p`,text:`Die schriftliche BestÃ¤tigung, dass eine neue Wohnung hinsichtlich ihrer Mietkosten angemessen ist, bedeutet deshalb nicht automatisch, dass auch sÃ¤mtliche Umzugskosten, Handwerkerleistungen oder RenovierungsmaÃŸnahmen bewilligt wurden.`},{type:`p`,text:`Umgekehrt ersetzt eine Zusicherung zu Umzugskosten keine Entscheidung Ã¼ber die Anerkennung einer hÃ¶heren als angemessenen Miete in der neuen Wohnung.`},{type:`p`,text:`FÃ¼r Betroffene ist es daher wichtig, die verschiedenen Kostenarten und erforderlichen Zusicherungen ausdrÃ¼cklich und getrennt zu beantragen.`},{type:`p`,text:`Â§ 22 Absatz 6 SGB II unterscheidet insbesondere zwischen den Umzugs- und Wohnungsbeschaffungskosten einerseits und Mietkautionen beziehungsweise Genossenschaftsanteilen andererseits.`},{type:`p`,text:`GrundsÃ¤tzlich ist fÃ¼r die Zusicherung der Umzugskosten der bis zum Umzug Ã¶rtlich zustÃ¤ndige kommunale TrÃ¤ger maÃŸgeblich.`},{type:`p`,text:`FÃ¼r die Zusicherung der Mietkaution und der Genossenschaftsanteile ist dagegen grundsÃ¤tzlich der kommunale TrÃ¤ger am Ort der neuen Unterkunft zustÃ¤ndig.`},{type:`p`,text:`Auch die Angemessenheit der neuen Unterkunft muss vor Vertragsabschluss geprÃ¼ft werden.`},{type:`p`,text:`Nach Â§ 22 Absatz 4 SGB II soll die leistungsberechtigte Person die Zusicherung zur BerÃ¼cksichtigung der Aufwendungen fÃ¼r die neue Wohnung vor dem Abschluss des Mietvertrags einholen.`},{type:`p`,text:`Bei einem nicht erforderlichen Umzug innerhalb desselben maÃŸgeblichen Vergleichsgebiets kÃ¶nnen zudem besondere Begrenzungen gelten.`},{type:`p`,text:`**Wer ohne vorherige KlÃ¤rung einen Mietvertrag unterschreibt oder ein Umzugsunternehmen verbindlich beauftragt, riskiert Streitigkeiten Ã¼ber die KostenÃ¼bernahme.**`}]},{number:25,title:`KÃ¶nnen auch Menschen ohne laufende Grundsicherungsleistungen Umzugskosten erhalten?`,blocks:[{type:`p`,text:`Die Hamburger Fachanweisung enthÃ¤lt unter Ziffer 7.4.6 ausdrÃ¼cklich die MÃ¶glichkeit einer KostenÃ¼bernahme auch ohne laufenden Leistungsbezug.`},{type:`p`,text:`Das bedeutet allerdings nicht, dass jede Person unabhÃ¤ngig von ihrer wirtschaftlichen Situation einen Anspruch auf die Finanzierung eines Umzugs hÃ¤tte.`},{type:`p`,text:`Vielmehr kann ein einmaliger, erforderlicher Bedarf dazu fÃ¼hren, dass fÃ¼r den betreffenden Zeitraum sozialrechtlich ein Leistungsanspruch zu prÃ¼fen ist.`},{type:`p`,text:`Dabei sind insbesondere die gesetzlichen Anspruchsvoraussetzungen, vorhandenes Einkommen, verwertbares VermÃ¶gen und die maÃŸgeblichen ZustÃ¤ndigkeitsregelungen zu berÃ¼cksichtigen.`},{type:`heading`,level:3,text:`**In welchem Monat wird der einmalige Bedarf berÃ¼cksichtigt?**`},{type:`p`,text:`Auch wenn eine Person keine laufenden Leistungen nach dem SGB II bezieht, kÃ¶nnen notwendige Aufwendungen im Zusammenhang mit einem Wohnungswechsel unter bestimmten Voraussetzungen einen sozialrechtlich relevanten Bedarf auslÃ¶sen.`},{type:`p`,text:`Die Hamburger Fachanweisung bestimmt fÃ¼r diese Fallkonstellation, dass die betreffenden Kosten im Monat ihrer FÃ¤lligkeit bei der Bedarfsberechnung zu berÃ¼cksichtigen sind.`},{type:`p`,text:`Damit ist die Frage einer mÃ¶glichen HilfebedÃ¼rftigkeit insbesondere anhand des Bedarfs und der anrechenbaren Mittel im maÃŸgeblichen Monat zu prÃ¼fen.`},{type:`p`,text:`Ein hoher einmaliger Aufwand fÃ¼hrt jedoch nicht automatisch zu einer Leistungsbewilligung.`},{type:`p`,text:`Auch hier mÃ¼ssen die gesetzlichen Voraussetzungen, die Notwendigkeit des Umzugs, die Angemessenheit der Kosten und die Anforderungen an eine vorherige Zusicherung berÃ¼cksichtigt werden.`},{type:`p`,text:`Bei Mietkautionen ist auÃŸerdem Â§ 551 Absatz 2 BGB zu beachten.`},{type:`p`,text:`Danach ist der Mieter bei einer als Geldsumme zu leistenden Wohnraummietsicherheit grundsÃ¤tzlich berechtigt, die Sicherheit in drei gleichen monatlichen Teilzahlungen zu leisten.`},{type:`p`,text:`Die erste Teilzahlung ist zu Beginn des MietverhÃ¤ltnisses fÃ¤llig.`},{type:`p`,text:`Diese mietrechtliche FÃ¤lligkeitsregelung kann fÃ¼r die Bestimmung des tatsÃ¤chlich bestehenden Bedarfs von Bedeutung sein.`},{type:`p`,text:`Sie darf nicht mit der gesonderten sozialrechtlichen Entscheidung Ã¼ber die darlehensweise Ãœbernahme einer Mietkaution verwechselt werden.`},{type:`p`,text:`Die Vorschrift ist deshalb vor allem fÃ¼r Personen wichtig, die ihren laufenden Lebensunterhalt grundsÃ¤tzlich selbst finanzieren kÃ¶nnen, aber mÃ¶glicherweise einen auÃŸergewÃ¶hnlich hohen einmaligen Bedarf nicht decken kÃ¶nnen.`}]},{number:26,title:`Sozialgericht Kassel â€“ Beschluss vom 14. Oktober 2026`,blocks:[{type:`p`,text:`**Aktenzeichen: S 1 AS 304/26 ER**`},{type:`p`,text:`In dem Verfahren ging es um einen Leistungsberechtigten, dessen tatsÃ¤chliche Unterkunftskosten zunÃ¤chst vollstÃ¤ndig Ã¼bernommen worden waren.`},{type:`p`,text:`Die Person befand sich noch innerhalb der Karenzzeit.`},{type:`p`,text:`Nach Inkrafttreten der neuen 150-Prozent-Regelung begrenzte der zustÃ¤ndige GrundsicherungstrÃ¤ger die anerkannten Unterkunftskosten durch einen Ã„nderungsbescheid.`},{type:`p`,text:`Der Betroffene wandte sich dagegen im gerichtlichen Eilverfahren.`},{type:`heading`,level:3,text:`**Die rechtliche BegrÃ¼ndung**`},{type:`p`,text:`Der zustÃ¤ndige TrÃ¤ger hatte die Ã¶rtliche Angemessenheitsgrenze nicht anhand eines schlÃ¼ssigen Konzepts ermittelt.`},{type:`p`,text:`Stattdessen verwendete er die Tabelle nach Â§ 12 Wohngeldgesetz und einen Sicherheitszuschlag von zehn Prozent.`},{type:`p`,text:`Das Sozialgericht Kassel stellte fest, dass diese Berechnungsgrundlage nicht ausreicht, um darauf ohne Weiteres die neue gesetzliche 150-Prozent-Grenze zu stÃ¼tzen.`},{type:`p`,text:`Dabei unterschied es zwischen der ersatzweisen Verwendung der Wohngeldtabelle bei einem fehlenden schlÃ¼ssigen Konzept und der eigentlichen Ermittlung einer Ã¶rtlichen Angemessenheitsgrenze.`},{type:`heading`,level:3,text:`**Die Entscheidung**`},{type:`p`,text:`Das Gericht ordnete die aufschiebende Wirkung der Klage gegen den Ã„nderungsbescheid an.`},{type:`p`,text:`Die MietkÃ¼rzung durfte deshalb vorlÃ¤ufig nicht vollzogen werden.`},{type:`p`,text:`Bis zu einer abschlieÃŸenden Entscheidung musste der GrundsicherungstrÃ¤ger die tatsÃ¤chlichen Unterkunftskosten weiterhin vollstÃ¤ndig berÃ¼cksichtigen.`},{type:`heading`,level:3,text:`**Reichweite der Entscheidung**`},{type:`p`,text:`Das Sozialgericht Kassel hat die gesetzliche 150-Prozent-Grenze nicht aufgehoben.`},{type:`p`,text:`Es hat ihre Anwendung unter den konkreten rechtlichen Voraussetzungen des Verfahrens beanstandet.`},{type:`p`,text:`Gegen den Beschluss wurde Beschwerde zum Hessischen Landessozialgericht eingelegt.`},{type:`p`,text:`Eine abschlieÃŸende Beschwerdeentscheidung konnte fÃ¼r den hier zugrunde gelegten Recherchestand vom 18. November 2026 nicht verifiziert werden.`},{type:`p`,text:`**Amtliche Quelle:** [Hessische Sozialgerichtsbarkeit â€“ Pressemitteilung vom 16. November 2026](https://sozialgerichtsbarkeit.hessen.de/presse/begrenzung-der-uebernahmefaehigen-unterkunftskosten).`}]},{number:27,title:`Sozialgericht Stade â€“ Beschluss vom 19. Oktober 2026`,blocks:[{type:`p`,text:`**Aktenzeichen: S 39 AS 217/26 ER**`},{type:`p`,text:`Das Sozialgericht Stade befasste sich ebenfalls mit der Anwendung der neuen 150-Prozent-Grenze.`},{type:`p`,text:`Die tatsÃ¤chlichen Unterkunfts- und Heizkosten beliefen sich im Verfahren auf 1.400 Euro monatlich.`},{type:`p`,text:`Der GrundsicherungstrÃ¤ger berÃ¼cksichtigte lediglich 1.029 Euro.`},{type:`p`,text:`Daraus entstand eine monatliche Unterdeckung von 371 Euro.`},{type:`heading`,level:3,text:`**Die rechtliche Bewertung**`},{type:`p`,text:`Das Gericht stellte darauf ab, dass die neue 150-Prozent-Grenze eine ordnungsgemÃ¤ÃŸ ermittelte abstrakte Angemessenheitsgrenze voraussetzt.`},{type:`p`,text:`Bei einem nicht behebbaren Erkenntnisausfall dÃ¼rfen die Wohngeldtabellenwerte zuzÃ¼glich zehn Prozent Sicherheitszuschlag nach Auffassung des Gerichts nicht als AusgangsgrÃ¶ÃŸe verwendet werden, um daraus durch Multiplikation mit 1,5 die gesetzliche Obergrenze zu berechnen.`},{type:`heading`,level:3,text:`**Die Entscheidung**`},{type:`p`,text:`Das Sozialgericht verpflichtete den GrundsicherungstrÃ¤ger im einstweiligen Rechtsschutz, weitere 371 Euro monatlich zu gewÃ¤hren.`},{type:`p`,text:`Dies galt vorlÃ¤ufig und unter RÃ¼ckforderungsvorbehalt fÃ¼r den Zeitraum vom 1. Juli bis zum 31. Dezember 2026, lÃ¤ngstens bis zu einer rechtskrÃ¤ftigen Hauptsacheentscheidung.`},{type:`p`,text:`Die fÃ¼r bereits fÃ¤llige Monate nachzuzahlenden BetrÃ¤ge waren unmittelbar an den Vermieter zu zahlen.`},{type:`heading`,level:3,text:`**Warum die Nachzahlung unmittelbar an den Vermieter erfolgen sollte**`},{type:`p`,text:`Die im Beschluss angeordnete direkte Zahlung an den Vermieter war mit den besonderen UmstÃ¤nden des Verfahrens verbunden.`},{type:`p`,text:`Nach den gerichtlichen Feststellungen bestanden MietrÃ¼ckstÃ¤nde. Hinzu kamen KontopfÃ¤ndungen.`},{type:`p`,text:`Vor diesem Hintergrund sollte die Nachzahlung unmittelbar der Sicherung des MietverhÃ¤ltnisses dienen.`},{type:`p`,text:`Aus dieser besonderen Zahlungsanordnung ergibt sich kein allgemeiner Rechtssatz, nach dem sÃ¤mtliche gerichtlich zugesprochenen Unterkunftsleistungen grundsÃ¤tzlich an Vermieter auszuzahlen wÃ¤ren.`},{type:`p`,text:`Ob Leistungen unmittelbar an den Vermieter oder an die leistungsberechtigte Person gezahlt werden, richtet sich nach den gesetzlichen Voraussetzungen und den UmstÃ¤nden des Einzelfalls.`},{type:`p`,text:`Insbesondere ist Â§ 22 Absatz 7 SGB II zu berÃ¼cksichtigen.`},{type:`p`,text:`Das Gericht berÃ¼cksichtigte dabei unter anderem die bestehende Mietschuldensituation.`},{type:`heading`,level:3,text:`**Weitere Bedeutung**`},{type:`p`,text:`Die Entscheidung enthÃ¤lt zusÃ¤tzliche Aussagen zum gerichtlichen Eilrechtsschutz.`},{type:`p`,text:`Insbesondere kÃ¶nnen unter bestimmten Voraussetzungen auch ZeitrÃ¤ume vor dem Eingang des gerichtlichen Eilantrags erfasst werden, wenn eine daraus entstandene Unterdeckung bis in die Gegenwart fortwirkt und weiterhin eine akute Notlage verursacht.`},{type:`p`,text:`**Quelle:** [SG Stade â€“ Beschluss S 39 AS 217/26 ER](https://urteile.ai/e/d_mb51wfmhsk/sg-stade-s-39-as-217-26-er).`}]},{number:28,title:`Sozialgericht Hamburg â€“ Beschluss vom 31. Juli 2026`,blocks:[{type:`p`,text:`**Aktenzeichen: S 49 AS 3079/26 ER**`},{type:`p`,text:`Diese Entscheidung ist fÃ¼r Hamburger Leistungsberechtigte besonders relevant.`},{type:`p`,text:`Das Jobcenter hatte zunÃ¤chst am 1. Juni 2026 eine Leistungsbewilligung erlassen.`},{type:`p`,text:`AnschlieÃŸend wurde diese Bewilligung durch einen Ã„nderungsbescheid vom 22. Juli 2026 teilweise geÃ¤ndert.`},{type:`p`,text:`Die Betroffene legte Widerspruch ein.`},{type:`heading`,level:3,text:`**Der entscheidende rechtliche Unterschied**`},{type:`p`,text:`Das Sozialgericht Hamburg befasste sich besonders mit der Frage, ob die bestehende Bewilligung nach den Vorschriften der Â§Â§ 45 und 48 SGB X geÃ¤ndert beziehungsweise zurÃ¼ckgenommen werden durfte.`},{type:`p`,text:`Dabei berÃ¼cksichtigte das Gericht, dass die gesetzliche Ã„nderung bereits am 16. April 2026 beschlossen worden war.`},{type:`p`,text:`Die gesetzliche Neuregelung war somit bereits bekannt, als der ursprÃ¼ngliche Bewilligungsbescheid am 1. Juni 2026 erlassen wurde.`},{type:`p`,text:`Nach Auffassung des Gerichts lagen deshalb die Voraussetzungen fÃ¼r eine spÃ¤tere Aufhebung nach Â§ 48 SGB X nicht vor.`},{type:`p`,text:`Auch die Voraussetzungen fÃ¼r eine RÃ¼cknahme nach Â§ 45 SGB X waren nach der summarischen PrÃ¼fung nicht erfÃ¼llt.`},{type:`heading`,level:3,text:`**ZusÃ¤tzliche BegrÃ¼ndung: RÃ¼cknahmevoraussetzungen und Ermessensausfall**`},{type:`p`,text:`Das Sozialgericht Hamburg prÃ¼fte nicht nur, ob eine wesentliche Ã„nderung der rechtlichen VerhÃ¤ltnisse nach Â§ 48 SGB X vorlag.`},{type:`p`,text:`Es untersuchte auÃŸerdem, ob die bereits erteilte Bewilligung nach Â§ 45 SGB X zurÃ¼ckgenommen werden durfte.`},{type:`p`,text:`Dabei waren auch Â§ 40 Absatz 2 Nummer 3 SGB II und Â§ 330 Absatz 2 SGB III zu berÃ¼cksichtigen.`},{type:`p`,text:`Das Gericht stellte zunÃ¤chst fest, dass die Voraussetzungen fÃ¼r eine gebundene RÃ¼cknahme nicht vorlagen.`},{type:`p`,text:`Insbesondere waren nach der gerichtlichen PrÃ¼fung keine ausreichenden Anhaltspunkte dafÃ¼r ersichtlich, dass die Leistungsberechtigte den ursprÃ¼nglichen Bewilligungsbescheid durch TÃ¤uschung, Drohung oder Bestechung erwirkt hatte.`},{type:`p`,text:`Ebenso lagen keine entsprechenden Anhaltspunkte fÃ¼r vorsÃ¤tzlich oder grob fahrlÃ¤ssig unrichtige beziehungsweise unvollstÃ¤ndige Angaben vor.`},{type:`p`,text:`Auch eine Kenntnis oder grob fahrlÃ¤ssige Unkenntnis der Rechtswidrigkeit des Bewilligungsbescheids war nach der vorlÃ¤ufigen gerichtlichen Bewertung nicht festzustellen.`},{type:`p`,text:`Dabei berÃ¼cksichtigte das Gericht, dass die Leistungsberechtigte nach den erkennbaren UmstÃ¤nden erstmals durch ein spÃ¤teres AnhÃ¶rungsschreiben auf die neue gesetzliche Regelung hingewiesen worden war.`},{type:`p`,text:`DarÃ¼ber hinaus stellte das Gericht einen Ermessensausfall fest.`},{type:`p`,text:`Das Jobcenter hatte seine Entscheidung auf die Annahme gestÃ¼tzt, zur RÃ¼cknahme verpflichtet zu sein, und keine eigenstÃ¤ndige Ermessensentscheidung getroffen.`},{type:`p`,text:`Auch aus diesem Grund hielt das Sozialgericht den angegriffenen Ã„nderungsbescheid voraussichtlich fÃ¼r rechtswidrig.`},{type:`heading`,level:3,text:`**Rechtliche Bedeutung**`},{type:`p`,text:`Die Entscheidung zeigt, dass ein Jobcenter eine bereits erteilte Leistungsbewilligung nicht allein deshalb nachtrÃ¤glich Ã¤ndern darf, weil die neue gesetzliche Mietobergrenze mÃ¶glicherweise eine niedrigere Bewilligung rechtfertigen wÃ¼rde.`},{type:`p`,text:`Vielmehr mÃ¼ssen die gesetzlichen Voraussetzungen fÃ¼r die Ã„nderung oder RÃ¼cknahme des bestehenden Verwaltungsakts erfÃ¼llt sein.`},{type:`p`,text:`Ob Â§ 45 oder Â§ 48 SGB X einschlÃ¤gig ist, hÃ¤ngt von den tatsÃ¤chlichen und rechtlichen VerhÃ¤ltnissen im Zeitpunkt der ursprÃ¼nglichen Bewilligung und den nachfolgenden Entwicklungen ab.`},{type:`p`,text:`Auch die Vorgaben zum Vertrauensschutz, zur gebundenen Entscheidung und zur ErmessensausÃ¼bung kÃ¶nnen entscheidend sein.`},{type:`p`,text:`Der Hamburger Beschluss ist deshalb fÃ¼r die Kontrolle nachtrÃ¤glicher MietkÃ¼rzungen besonders bedeutsam.`},{type:`heading`,level:3,text:`**Die Entscheidung**`},{type:`p`,text:`Das Sozialgericht ordnete die aufschiebende Wirkung des Widerspruchs gegen den Ã„nderungsbescheid an.`},{type:`p`,text:`Die KÃ¼rzung durfte damit vorlÃ¤ufig nicht vollzogen werden.`},{type:`heading`,level:3,text:`**Warum ist das besonders wichtig?**`},{type:`p`,text:`Diese Entscheidung zeigt einen weiteren rechtlichen Ansatzpunkt:`},{type:`p`,text:`**Selbst wenn eine gesetzliche Mietobergrenze grundsÃ¤tzlich anwendbar ist, muss eine nachtrÃ¤gliche Ã„nderung eines bereits erteilten Bewilligungsbescheids die gesetzlichen Voraussetzungen erfÃ¼llen.**`},{type:`p`,text:`Es geht also nicht ausschlieÃŸlich um die HÃ¶he der Miete, sondern auch um die RechtmÃ¤ÃŸigkeit des Verwaltungsverfahrens.`},{type:`p`,text:`**Quelle:** [Sozialgericht Hamburg â€“ Beschluss vom 31. Juli 2026 im Volltext](https://recht.nulegal.eu/rechtsprechung/sg-hamburg/2026-07-31/s-49-as-3079-26-er).`},{type:`heading`,level:3,text:`**Keine allgemeine Regel zum Inkrafttreten**`},{type:`p`,text:`Die dargestellte BegrÃ¼ndung zu Â§ 48 SGB X ist die Auffassung des Sozialgerichts Hamburg im konkreten Eilverfahren. Aus der bloÃŸen Bekanntheit einer bevorstehenden GesetzesÃ¤nderung folgt kein allgemeiner Rechtssatz, dass ihr spÃ¤teres Inkrafttreten niemals eine wesentliche Ã„nderung sein kÃ¶nne. Die RechtmÃ¤ÃŸigkeit einer BescheidÃ¤nderung muss nach dem jeweiligen Sachverhalt und der einschlÃ¤gigen Vorschrift geprÃ¼ft werden.`}]},{number:29,title:`Sozialgericht MÃ¼nchen â€“ Beschluss vom 5. Oktober 2026`,blocks:[{type:`p`,text:`**Aktenzeichen: S 46 AS 2499/26 ER**`},{type:`p`,text:`Nicht jedes Sozialgericht kommt zugunsten der Leistungsberechtigten zu einer vorlÃ¤ufigen Entscheidung.`},{type:`p`,text:`Das Sozialgericht MÃ¼nchen hat in einem anderen Fall die Anwendung der gesetzlichen 150-Prozent-Grenze im einstweiligen Rechtsschutz grundsÃ¤tzlich akzeptiert.`},{type:`p`,text:`Der Fall betraf eine Mutter mit insgesamt fÃ¼nf Kindern. FÃ¼r die konkrete Angemessenheitsberechnung ging das Gericht von fÃ¼nf im maÃŸgeblichen Haushalt lebenden Personen aus.`},{type:`p`,text:`Das Jobcenter setzte fÃ¼r diesen Haushalt eine abstrakt angemessene Bruttokaltmiete von 911,40 Euro an.`},{type:`p`,text:`Daraus errechnete es die 150-Prozent-Grenze:`},{type:`p`,text:`911,40 â‚¬ Ã— 1,5 = 1.367,10 â‚¬`},{type:`p`,text:`Die tatsÃ¤chliche Bruttokaltmiete betrug 1.971,40 Euro.`},{type:`heading`,level:3,text:`**ÃœberprÃ¼fung der Berechnungsgrundlage**`},{type:`p`,text:`Das Gericht verwendete im Eilverfahren die Wohngeldtabelle mit zehn Prozent Sicherheitszuschlag zur Ã¼berschlÃ¤gigen Kontrolle des vom Jobcenter angesetzten Richtwerts.`},{type:`p`,text:`Dabei ergab sich ein Vergleichswert von 962,50 Euro.`},{type:`p`,text:`Das Gericht hielt den angesetzten Ã¶rtlichen Richtwert im Eilverfahren fÃ¼r zugrunde legbar.`},{type:`heading`,level:3,text:`**Keine abschlieÃŸende gerichtliche BestÃ¤tigung des Ã¶rtlichen Angemessenheitskonzepts**`},{type:`p`,text:`Die PrÃ¼fung des Sozialgerichts MÃ¼nchen erfolgte im Rahmen des einstweiligen Rechtsschutzes.`},{type:`p`,text:`Das Gericht verwendete die Werte der Wohngeldtabelle mit einem zehnprozentigen Sicherheitszuschlag zur Ã¼berschlÃ¤gigen Kontrolle des vom Jobcenter angesetzten Ã¶rtlichen Richtwerts.`},{type:`p`,text:`Dabei hielt es den fÃ¼r die Berechnung verwendeten Wert im Eilverfahren fÃ¼r zugrunde legbar.`},{type:`p`,text:`Dies darf nicht mit einer abschlieÃŸenden gerichtlichen BestÃ¤tigung des gesamten Ã¶rtlichen Angemessenheitskonzepts gleichgesetzt werden.`},{type:`p`,text:`Die Entscheidung betrifft eine vorlÃ¤ufige gerichtliche Bewertung auf Grundlage des konkreten Verfahrens.`},{type:`p`,text:`Auch die familienbezogene Ausnahmeregelung des Â§ 22 Absatz 1 Satz 7 SGB II wurde im konkreten Fall beurteilt.`},{type:`p`,text:`Bei der Darstellung des Sachverhalts ist zu unterscheiden zwischen der Mutter mit insgesamt fÃ¼nf Kindern und den fÃ¼nf Personen, die fÃ¼r die streitige Angemessenheitsberechnung im Haushalt berÃ¼cksichtigt wurden.`},{type:`heading`,level:3,text:`**Entscheidung zu den Ausnahmen**`},{type:`p`,text:`Obwohl Kinder zur Bedarfsgemeinschaft gehÃ¶rten, leitete das Gericht daraus keinen automatischen Anspruch auf vollstÃ¤ndige Ãœbernahme der darÃ¼berliegenden Mietkosten ab.`},{type:`p`,text:`Es betrachtete Â§ 22 Absatz 1 Satz 7 SGB II als Ermessensregelung.`},{type:`p`,text:`Der Eilantrag wurde abgelehnt.`},{type:`heading`,level:3,text:`**Rechtliche Einordnung**`},{type:`p`,text:`Die MÃ¼nchner Entscheidung zeigt, dass die Anwendung der 150-Prozent-Grenze gerichtlich bestÃ¤tigt werden kann.`},{type:`p`,text:`Zugleich zeigt der Vergleich mit Kassel und Stade, dass die Gerichte unterschiedliche Ausgangssituationen und BegrÃ¼ndungen geprÃ¼ft haben.`},{type:`p`,text:`Eine abschlieÃŸende hÃ¶chstrichterliche KlÃ¤rung sÃ¤mtlicher Fragen lÃ¤sst sich aus diesen drei BeschlÃ¼ssen nicht ableiten.`},{type:`p`,text:`**Amtliche Quelle:** [Bayern.Recht â€“ SG MÃ¼nchen, S 46 AS 2499/26 ER](https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2026-N-26872).`}]},{number:30,title:`Weitere wichtige Rechtsprechung`,blocks:[{type:`p`,text:`Neben den Entscheidungen zur neuen 150-Prozent-Grenze sind folgende Verfahren fÃ¼r die Einordnung von Unterkunfts- und Umzugskosten relevant.`},{type:`table`,rows:[[`Gericht`,`Aktenzeichen`,`Inhaltliche Bedeutung`],[`Bundessozialgericht`,`B 14 AS 7/09 R, 6. Mai 2010`,`Voraussetzungen der Ãœbernahme gewerblich organisierter Umzugskosten, MÃ¶glichkeiten der Selbsthilfe, Zusicherungsvorbehalt und rechtliche Bedeutung einer verzÃ¶gerten Entscheidung Ã¼ber eine beantragte Zusicherung`],[`Bundessozialgericht`,`B 4 AS 49/07 R, 16. Dezember 2008`,`Rechtliche Einordnung notwendiger Einzugsrenovierungskosten als Unterkunftskosten nach Â§ 22 Absatz 1 SGB II; Abgrenzung zu eigentlichen Umzugskosten nach Â§ 22 Absatz 6 SGB II`],[`Bundessozialgericht`,`B 4 AS 87/12 R, 12. Dezember 2013`,`RÃ¼ckgriff auf die Wohngeldtabelle mit Sicherheitszuschlag bei nicht behebbarem Erkenntnisausfall; keine automatische BestÃ¤tigung einer darauf gestÃ¼tzten 150-Prozent-Berechnung nach der erst 2026 eingefÃ¼hrten Vorschrift`],[`Sozialgericht Hamburg`,`S 62 AS 1988/19`,`Beurteilung der Wirtschaftlichkeit von UmzÃ¼gen, alternativen Umzugshelfern und erforderlichen Leistungen einschlieÃŸlich KÃ¼chenmontage; teilweise abweichende Bewertung gegenÃ¼ber SG Karlsruhe`],[`Landessozialgericht Hamburg`,`L 4 AS 202/22 D, 22. Dezember 2022`,`Hamburger Verfahren zur Ãœbernahme von Umzugskosten und zu wirtschaftlichen Alternativen; im Karlsruher Urteil teilweise abweichend beurteilt`],[`Landessozialgericht Hamburg`,`L 4 AS 139/21, 30. Mai 2024`,`PrÃ¼fung der SchlÃ¼ssigkeit frÃ¼herer Hamburger Mietangemessenheitswerte`],[`Sozialgericht Karlsruhe`,`S 12 AS 2387/22, 1. Oktober 2024`,`Anerkennung von 2.200 Euro fÃ¼r einen mehrtÃ¤gigen gewerblichen Umzug einschlieÃŸlich MÃ¶bel- und KÃ¼chenmontage; gerichtliche Feststellungen zu rund 96 Personenarbeitsstunden und konkreter fehlender SelbsthilfemÃ¶glichkeit`]]},{type:`heading`,level:3,text:`**Bedeutung einer rechtzeitig beantragten, aber verzÃ¶gerten Zusicherung**`},{type:`p`,text:`Das Bundessozialgericht hat sich im Urteil vom 6. Mai 2010, B 14 AS 7/09 R, mit den Voraussetzungen der Ãœbernahme von Umzugskosten und dem gesetzlichen Zusicherungsvorbehalt befasst.`},{type:`p`,text:`Dabei ist insbesondere zwischen einer unterbliebenen vorherigen Beantragung und einer rechtzeitig beantragten, jedoch nicht ordnungsgemÃ¤ÃŸ beschiedenen Zusicherung zu unterscheiden.`},{type:`p`,text:`Die rechtliche Bedeutung des Zusicherungsvorbehalts darf nicht losgelÃ¶st vom Verhalten des zustÃ¤ndigen GrundsicherungstrÃ¤gers beurteilt werden.`},{type:`p`,text:`Nach BSG, B 14 AS 7/09 R, ist eine vorherige Zusicherung nicht erforderlich, wenn eine fristgerecht mÃ¶gliche Entscheidung Ã¼ber einen rechtzeitig gestellten Antrag treuwidrig verzÃ¶gert wurde. Das beseitigt nicht die weiteren Anspruchsvoraussetzungen. Im entschiedenen Fall ging es um erneute Bescheidung; daraus folgt keine pauschale Vollerstattung aller geltend gemachten Kosten.`},{type:`p`,text:`Daraus folgt allerdings kein allgemeiner Anspruch darauf, ohne vorherige Zusicherung beliebige Umzugskosten zu verursachen und anschlieÃŸend vollstÃ¤ndig erstattet zu bekommen.`},{type:`p`,text:`Die Notwendigkeit des Umzugs, die Angemessenheit der Kosten und die weiteren gesetzlichen Voraussetzungen bleiben entscheidend.`},{type:`p`,text:`FÃ¼r Leistungsberechtigte ist es deshalb wichtig, einen Antrag auf Zusicherung mÃ¶glichst frÃ¼hzeitig zu stellen und den Zeitpunkt des Antragseingangs nachweisen zu kÃ¶nnen.`},{type:`p`,text:`Eine ausbleibende behÃ¶rdliche Entscheidung sollte rechtzeitig angemahnt und bei drohendem Verlust einer konkreten WohnmÃ¶glichkeit gegebenenfalls gerichtlich Ã¼berprÃ¼ft werden.`},{type:`p`,text:`Die Ã¤lteren Entscheidungen betreffen teilweise frÃ¼here Fassungen des SGB II beziehungsweise frÃ¼here Ã¶rtliche Mietwerte.`},{type:`p`,text:`Sie dÃ¼rfen daher nicht als gerichtliche BestÃ¤tigung der seit Juli 2026 geltenden neuen 150-Prozent-Grenze verstanden werden.`},{type:`p`,text:`Insbesondere die Hamburger Entscheidung des Landessozialgerichts aus Mai 2024 bestÃ¤tigt nicht automatisch die Angemessenheit der seit April 2026 geltenden Mietobergrenzen.`},{type:`p`,text:`Die angefÃ¼hrten Entscheidungen zeigen aber, welche allgemeinen rechtlichen Anforderungen bei der Bestimmung angemessener Unterkunftskosten und bei der Finanzierung notwendiger UmzÃ¼ge eine Rolle spielen.`},{type:`p`,text:`Die Fragen zur UmzugskostenÃ¼bernahme werden im Urteil des Sozialgerichts Karlsruhe unter Bezugnahme auf die einschlÃ¤gige Bundessozialgerichtsrechtsprechung ausfÃ¼hrlich behandelt.`}]},{number:31,title:`Das Kostensenkungsverfahren richtig prÃ¼fen`,blocks:[{type:`p`,text:`Wenn das Jobcenter mitteilt, dass die bisherige Wohnung zu teuer sei, sollten zunÃ¤chst die tatsÃ¤chlichen Berechnungsgrundlagen geklÃ¤rt werden.`},{type:`heading`,level:3,text:`**Gesetzliche Informationspflicht bei unangemessenen Unterkunftskosten**`},{type:`p`,text:`Â§ 22 Absatz 1a SGB II enthÃ¤lt eine ausdrÃ¼ckliche gesetzliche Verpflichtung des zustÃ¤ndigen kommunalen TrÃ¤gers.`},{type:`p`,text:`Danach wird die Angemessenheit der Unterkunfts- und Heizkosten fÃ¼r den jeweiligen Bewilligungszeitraum geprÃ¼ft.`},{type:`p`,text:`Ãœbersteigen die tatsÃ¤chlichen Aufwendungen den abstrakt angemessenen Umfang, muss der kommunale TrÃ¤ger dies den Leistungsberechtigten mitteilen.`},{type:`p`,text:`AuÃŸerdem muss er Ã¼ber die Dauer und die Voraussetzungen informieren, unter denen unangemessene Unterkunftskosten weiterhin anerkannt werden.`},{type:`p`,text:`Diese gesetzliche Informationspflicht ist fÃ¼r Betroffene von erheblicher Bedeutung.`},{type:`p`,text:`Sie sollen erkennen kÃ¶nnen, welche Unterkunftskosten die BehÃ¶rde fÃ¼r angemessen hÃ¤lt, in welchem Umfang eine Ãœberschreitung angenommen wird und welche rechtlichen Folgen sich daraus ergeben kÃ¶nnen.`},{type:`p`,text:`Die Information muss daher inhaltlich so bestimmt sein, dass die leistungsberechtigte Person die maÃŸgebliche Kostengrenze und die Anforderungen einer mÃ¶glichen Kostensenkung nachvollziehen kann.`},{type:`heading`,level:3,text:`**Bedeutung bei fehlerhaften oder fehlenden Informationen**`},{type:`p`,text:`Eine fehlende oder unzureichende Kostensenkungsinformation kann bei der rechtlichen ÃœberprÃ¼fung einer spÃ¤teren MietkÃ¼rzung bedeutsam sein.`},{type:`p`,text:`Daraus folgt jedoch nicht, dass jede unvollstÃ¤ndige Mitteilung automatisch einen zeitlich unbegrenzten Anspruch auf vollstÃ¤ndige MietÃ¼bernahme begrÃ¼ndet.`},{type:`p`,text:`Es muss vielmehr geprÃ¼ft werden, welche Folgen der konkrete Informationsmangel fÃ¼r die MÃ¶glichkeit und Zumutbarkeit einer Kostensenkung hatte und ob die gesetzlich erforderlichen Voraussetzungen der KÃ¼rzung erfÃ¼llt sind.`},{type:`p`,text:`Leistungsberechtigte sollten entsprechende Schreiben deshalb aufbewahren.`},{type:`p`,text:`Dies gilt insbesondere fÃ¼r Mitteilungen Ã¼ber die anerkannte Mietobergrenze, den Beginn einer Kostensenkungsfrist, die HÃ¶he der kÃ¼nftig berÃ¼cksichtigten Unterkunftskosten und die BegrÃ¼ndung der behÃ¶rdlichen Entscheidung.`},{type:`p`,text:`Dabei sind insbesondere folgende Fragen zu beantworten:`},{type:`ol`,items:[`Welche Bruttokaltmiete wird tatsÃ¤chlich gezahlt?`,`Welche Ã¶rtliche Angemessenheitsgrenze verwendet das Jobcenter?`,`Welche HaushaltsgrÃ¶ÃŸe wurde berÃ¼cksichtigt?`,`Sind besondere persÃ¶nliche oder Ã¶rtliche ZuschlÃ¤ge anzuwenden?`,`LÃ¤uft noch eine Karenzzeit?`,`Ist die neue 150-Prozent-Grenze Ã¼berhaupt einschlÃ¤gig?`,`Beruht die Ã¶rtliche Mietobergrenze auf einem schlÃ¼ssigen Konzept?`,`Liegt bereits ein bestandskrÃ¤ftiger Bewilligungsbescheid vor?`,`Soll dieser Bescheid nachtrÃ¤glich geÃ¤ndert werden?`,`Bestehen gesundheitliche oder soziale GrÃ¼nde gegen eine Kostensenkung?`,`Ist eine gÃ¼nstigere geeignete Wohnung tatsÃ¤chlich verfÃ¼gbar?`,`WÃ¤re ein Wohnungswechsel unter BerÃ¼cksichtigung der damit verbundenen Leistungen wirtschaftlich?`]},{type:`p`,text:`Erst anhand dieser Informationen lÃ¤sst sich beurteilen, ob eine Kostensenkung rechtlich verlangt werden darf.`}]},{number:32,title:`Welche Nachweise kÃ¶nnen bei gesundheitlichen EinschrÃ¤nkungen erforderlich sein?`,blocks:[{type:`p`,text:`Die Hamburger Fachanweisung verlangt bei besonderer gesundheitlicher Belastung eine nachvollziehbare BegrÃ¼ndung.`},{type:`p`,text:`Je nach Einzelfall kÃ¶nnen folgende Unterlagen bedeutsam sein:`},{type:`ul`,items:[`Ã„rztliche Bescheinigungen Ã¼ber funktionelle EinschrÃ¤nkungen`,`Aussagen zur gesundheitlichen Zumutbarkeit eines Wohnungswechsels`,`Nachweise Ã¼ber eine Behinderung oder PflegebedÃ¼rftigkeit`,`Belege Ã¼ber erforderliche Hilfs- und Versorgungsstrukturen`,`Angaben zu notwendigen Eigenschaften der bisherigen oder einer neuen Wohnung`,`Nachweise Ã¼ber die fehlende FÃ¤higkeit zur Selbsthilfe`,`ErlÃ¤uterungen zur nicht verfÃ¼gbaren UnterstÃ¼tzung durch andere Personen`]},{type:`p`,text:`Entscheidend ist nicht nur die Bezeichnung einer Erkrankung.`},{type:`p`,text:`Ein aussagekrÃ¤ftiges Attest sollte vielmehr darlegen, welche konkreten TÃ¤tigkeiten nicht oder nur unter erheblichen gesundheitlichen Belastungen mÃ¶glich sind und welche Folgen ein Wohnungswechsel erwarten lÃ¤sst.`},{type:`p`,text:`Eine allgemeine ArbeitsunfÃ¤higkeitsbescheinigung beantwortet diese Fragen in der Regel nicht vollstÃ¤ndig.`}]},{number:33,title:`Wie weist man nach, dass keine geeignete gÃ¼nstigere Wohnung verfÃ¼gbar ist?`,blocks:[{type:`p`,text:`Kann eine Kostensenkung nur durch einen Wohnungswechsel erreicht werden, ist die tatsÃ¤chliche MÃ¶glichkeit einer solchen Kostensenkung relevant.`},{type:`p`,text:`DafÃ¼r kÃ¶nnen Wohnungsangebote, Bewerbungen und Absagen dokumentiert werden.`},{type:`p`,text:`Bei besonderen gesundheitlichen BedÃ¼rfnissen ist auÃŸerdem festzuhalten, weshalb bestimmte angebotene Wohnungen nicht geeignet sind.`},{type:`p`,text:`Beispielsweise kÃ¶nnen die Erreichbarkeit notwendiger Versorgung, bauliche Hindernisse oder besondere Anforderungen an die Wohnung eine Rolle spielen.`},{type:`p`,text:`Die Suche muss sich an den konkreten UmstÃ¤nden des Einzelfalls orientieren.`},{type:`p`,text:`Die bloÃŸe Behauptung, geeignete Wohnungen seien grundsÃ¤tzlich nicht verfÃ¼gbar, ersetzt allerdings keinen entsprechenden Nachweis.`}]},{number:34,title:`Welche Bedeutung haben MietrÃ¼ckstÃ¤nde und drohender Wohnungsverlust?`,blocks:[{type:`p`,text:`Wenn eine MietkÃ¼rzung dazu fÃ¼hrt, dass Mietzahlungen nicht mehr vollstÃ¤ndig geleistet werden kÃ¶nnen, kann eine zusÃ¤tzliche existenzielle Gefahr entstehen.`},{type:`p`,text:`Â§ 22 Absatz 8 SGB II ermÃ¶glicht unter bestimmten Voraussetzungen die Ãœbernahme von Schulden zur Sicherung der Unterkunft.`},{type:`p`,text:`Droht ansonsten Wohnungslosigkeit, sollen solche Schulden Ã¼bernommen werden, soweit dies gerechtfertigt und notwendig ist.`},{type:`p`,text:`Die Leistungen sollen grundsÃ¤tzlich als Darlehen erbracht werden.`},{type:`p`,text:`Die Vorschrift ist von der laufenden Anerkennung angemessener Unterkunftskosten zu unterscheiden.`},{type:`p`,text:`Eine bestehende Unterdeckung, MietrÃ¼ckstÃ¤nde oder eine drohende KÃ¼ndigung sollten deshalb unverzÃ¼glich geltend gemacht werden.`},{type:`p`,text:`Unter bestimmten Voraussetzungen kÃ¶nnen Zahlungen nach Â§ 22 Absatz 7 SGB II auch direkt an den Vermieter erfolgen.`}]},{number:35,title:`Welche Rechtsmittel bestehen gegen eine MietkÃ¼rzung?`,blocks:[{type:`p`,text:`Gegen einen belastenden Bescheid des Jobcenters kommt grundsÃ¤tzlich ein Widerspruch in Betracht.`},{type:`p`,text:`Die regulÃ¤re Widerspruchsfrist betrÃ¤gt einen Monat nach Bekanntgabe des Bescheids, sofern eine ordnungsgemÃ¤ÃŸe Rechtsbehelfsbelehrung vorliegt.`},{type:`p`,text:`Wird der Widerspruch zurÃ¼ckgewiesen, kommt eine Klage beim zustÃ¤ndigen Sozialgericht in Betracht.`},{type:`heading`,level:3,text:`**Achtung: Ein Widerspruch stoppt eine KÃ¼rzung nicht automatisch**`},{type:`p`,text:`Â§ 39 SGB II schlieÃŸt fÃ¼r bestimmte Entscheidungen die aufschiebende Wirkung eines Widerspruchs aus.`},{type:`p`,text:`Wenn die MietkÃ¼rzung unmittelbar umgesetzt wird und dadurch eine erhebliche finanzielle Notlage entsteht, kann deshalb zusÃ¤tzlich gerichtlicher Eilrechtsschutz nach Â§ 86b Sozialgerichtsgesetz erforderlich sein.`},{type:`p`,text:`Dabei sind insbesondere zwei Verfahrensarten zu unterscheiden.`},{type:`p`,text:`**Anordnung der aufschiebenden Wirkung:** Diese kommt beispielsweise bei bestimmten angegriffenen Ã„nderungs- oder Aufhebungsbescheiden in Betracht.`},{type:`p`,text:`**Einstweilige Anordnung:** Diese kann erforderlich sein, wenn vorlÃ¤ufig zusÃ¤tzliche Leistungen begehrt werden.`},{type:`p`,text:`Welche Verfahrensart zutrifft, hÃ¤ngt insbesondere von der konkreten behÃ¶rdlichen Entscheidung ab.`},{type:`p`,text:`Die Verfahren aus Kassel, Hamburg und Stade verdeutlichen die praktische Bedeutung dieser Unterscheidung.`},{type:`heading`,level:3,text:`**Welcher gerichtliche Eilantrag ist der richtige?**`},{type:`p`,text:`Â§ 86b Sozialgerichtsgesetz unterscheidet unterschiedliche Formen des einstweiligen Rechtsschutzes.`},{type:`p`,text:`**Â§ 86b Absatz 1 SGG â€“ Anordnung oder Wiederherstellung der aufschiebenden Wirkung**`},{type:`p`,text:`Diese Verfahrensart betrifft insbesondere FÃ¤lle, in denen eine belastende behÃ¶rdliche Entscheidung bereits vollzogen werden soll, obwohl sie mit einem Rechtsbehelf angegriffen wurde.`},{type:`p`,text:`Ein Beispiel ist die nachtrÃ¤gliche Ã„nderung einer bereits erteilten Leistungsbewilligung.`},{type:`p`,text:`Wenn ein Jobcenter bewilligte Unterkunftskosten durch einen Ã„nderungs- oder Aufhebungsbescheid reduziert und der Rechtsbehelf keine aufschiebende Wirkung entfaltet, kann ein entsprechender gerichtlicher Antrag erforderlich sein.`},{type:`p`,text:`Die Entscheidungen des Sozialgerichts Kassel vom 14. Oktober 2026 und des Sozialgerichts Hamburg vom 31. Juli 2026 verdeutlichen diese Verfahrensart.`},{type:`p`,text:`**Â§ 86b Absatz 2 SGG â€“ Einstweilige Anordnung**`},{type:`p`,text:`Eine einstweilige Anordnung kann in Betracht kommen, wenn eine leistungsberechtigte Person vorlÃ¤ufig zusÃ¤tzliche Leistungen benÃ¶tigt und deren GewÃ¤hrung gerichtlich durchsetzen mÃ¶chte.`},{type:`p`,text:`Dabei sind insbesondere ein Anordnungsanspruch und ein Anordnungsgrund glaubhaft zu machen.`},{type:`p`,text:`Es muss somit nicht nur ein materieller Leistungsanspruch dargelegt werden, sondern regelmÃ¤ÃŸig auch eine EilbedÃ¼rftigkeit.`},{type:`p`,text:`Eine solche kann beispielsweise bei erheblichen MietrÃ¼ckstÃ¤nden, einer akuten GefÃ¤hrdung des MietverhÃ¤ltnisses oder einer sonstigen gegenwÃ¤rtigen existenziellen Notlage relevant werden.`},{type:`p`,text:`Das Verfahren des Sozialgerichts Stade vom 19. Oktober 2026 verdeutlicht die Bedeutung einer solchen vorlÃ¤ufigen LeistungsgewÃ¤hrung.`},{type:`heading`,level:3,text:`**Entscheidend ist das konkrete Rechtsschutzziel**`},{type:`p`,text:`Die Wahl des gerichtlichen Eilverfahrens hÃ¤ngt nicht allein davon ab, dass eine Miete gekÃ¼rzt wurde.`},{type:`p`,text:`MaÃŸgeblich ist insbesondere, ob ein bestehender Bewilligungsbescheid abgeÃ¤ndert wurde oder ob zusÃ¤tzliche Leistungen begehrt werden, die bislang nicht bewilligt worden sind.`},{type:`p`,text:`Auch die konkrete Wirkung des angegriffenen Verwaltungsakts ist zu berÃ¼cksichtigen.`},{type:`p`,text:`Die unzutreffende Wahl eines Antrags sollte mÃ¶glichst vermieden werden. FÃ¼r die rechtliche PrÃ¼fung ist es deshalb wichtig, sÃ¤mtliche Bescheide, WidersprÃ¼che und behÃ¶rdlichen Mitteilungen vollstÃ¤ndig vorzulegen.`},{type:`heading`,level:3,text:`**Frist und wirksame Einlegung**`},{type:`p`,text:`Die Klagefrist betrÃ¤gt nach einem Widerspruchsverfahren grundsÃ¤tzlich einen Monat nach Bekanntgabe des Widerspruchsbescheids (Â§ 87 SGG). Bei Bekanntgabe im Ausland gelten grundsÃ¤tzlich drei Monate. Fehlt eine ordnungsgemÃ¤ÃŸe Rechtsbehelfsbelehrung, ist Â§ 66 SGG maÃŸgeblich; dort ist grundsÃ¤tzlich eine Jahresfrist geregelt. FÃ¼r die konkrete Fristberechnung sind Bekanntgabe und die gesetzlichen Einzelregelungen zu prÃ¼fen.`},{type:`p`,text:`Ein gewÃ¶hnlicher E-Mail-Text erfÃ¼llt die gesetzlich vorgeschriebene Form eines Widerspruchs nicht automatisch. Â§ 84 SGG nennt schriftliche, zugelassene elektronische beziehungsweise schriftformersetzende Wege und die Einlegung zur Niederschrift. Bei knapper Frist einen nachweisbar zulÃ¤ssigen Ãœbermittlungsweg verwenden. Bei MietrÃ¼ckstÃ¤nden oder drohendem Wohnungsverlust ist zusÃ¤tzlich die EilbedÃ¼rftigkeit zu prÃ¼fen.`}]},{number:36,title:`Muss man zuerst umziehen und anschlieÃŸend die Kosten einklagen?`,blocks:[{type:`p`,text:`Nein. Vor einem notwendigen Umzug sollten die einschlÃ¤gigen Zusicherungen und KostenÃ¼bernahmen beantragt und mÃ¶glichst schriftlich bewilligt werden.`},{type:`p`,text:`Das betrifft insbesondere:`},{type:`ul`,items:[`Die Angemessenheit der neuen Unterkunft`,`Die Ãœbernahme der Umzugskosten`,`Die Beauftragung eines professionellen Umzugsunternehmens`,`ZusÃ¤tzliche notwendige Montageleistungen`,`Notwendige RenovierungsmaÃŸnahmen`,`Mietkaution oder Genossenschaftsanteile`,`Weitere erforderliche Wohnungsbeschaffungskosten`]},{type:`p`,text:`Eine spÃ¤tere gerichtliche Erstattung bereits verauslagter Kosten kann unter bestimmten Voraussetzungen mÃ¶glich sein, wie das Karlsruher Urteil zeigt.`},{type:`p`,text:`Ein solches Verfahren ist allerdings nicht mit einer vorherigen verbindlichen KostenÃ¼bernahme gleichzusetzen.`},{type:`p`,text:`Gerade bei hohen Kosten ist es deshalb wichtig, vor einem verbindlichen Auftrag eine behÃ¶rdliche Entscheidung herbeizufÃ¼hren.`}]},{number:37,title:`Gilt das alles auch bei Sozialhilfe und Grundsicherung im Alter?`,blocks:[{type:`p`,text:`Die dargestellten Gerichtsentscheidungen zur 150-Prozent-Grenze beziehen sich auf das SGB II.`},{type:`p`,text:`Bei der Sozialhilfe und Grundsicherung im Alter beziehungsweise bei Erwerbsminderung gelten insbesondere die Vorschriften der Â§Â§ 35, 35a und 42a SGB XII.`},{type:`p`,text:`Auch dort spielen die Angemessenheit der Unterkunftskosten, besondere LebensumstÃ¤nde und die Zumutbarkeit einer Kostensenkung eine wichtige Rolle.`},{type:`p`,text:`Die gesetzlichen Einzelregelungen sind jedoch nicht durchweg identisch.`},{type:`p`,text:`Seit dem 1. Juli 2026 enthÃ¤lt Â§ 35 Absatz 1 Satz 7 SGB XII ebenfalls eine eigene 150-Prozent-Begrenzung; Satz 8 erlaubt in der Karenzzeit hÃ¶here Aufwendungen im Einzelfall bei Unabweisbarkeit oder Haushaltsgemeinschaften mit Kindern. Das ist eigenstÃ¤ndig zu prÃ¼fen und nicht nur eine Ãœbertragung des SGB II. FÃ¼r bestimmte Wohnformen gelten nach Â§ 42a Absatz 1 Satz 2 Ausnahmen.`},{type:`p`,text:`Hamburg verÃ¶ffentlicht hierfÃ¼r eine eigene Fachanweisung.`},{type:`p`,text:`Ebenso wichtig ist die Abgrenzung zu anderen Sozialleistungen:`},{type:`p`,text:`Wer ausschlieÃŸlich Krankengeld, Arbeitslosengeld I oder eine Rente bezieht, unterliegt dadurch nicht automatisch den Mietobergrenzen des Jobcenters.`},{type:`p`,text:`Erst bei einem entsprechenden Anspruch auf ergÃ¤nzende oder vollstÃ¤ndige Grundsicherungsleistungen werden die einschlÃ¤gigen Unterkunftskostenregelungen relevant.`},{type:`heading`,level:3,text:`**EigenstÃ¤ndige Regeln zu Wohnungswechsel, Schulden und Verfahren**`},{type:`p`,text:`Â§ 35a Absatz 2 SGB XII verlangt die Unterrichtung vor Abschluss eines neuen Unterkunftsvertrags. FÃ¼r hÃ¶here als angemessene Aufwendungen nach einem Umzug ist die vorherige Zusicherung maÃŸgeblich. Wohnungsbeschaffungs-, Umzugs-, Kautions- und Genossenschaftskosten sind nach den eigenen Voraussetzungen der vorherigen Zustimmung zu prÃ¼fen; Kautionen und Anteile sollen als Darlehen gewÃ¤hrt werden. Die ZustÃ¤ndigkeitsaufteilung des Â§ 22 Absatz 6 SGB II darf dabei nicht ungeprÃ¼ft als Wortlaut des SGB XII ausgegeben werden.`},{type:`p`,text:`Im SGB XII regelt Â§ 36 die Sicherung der Unterkunft bei Schulden. Die Information zu unangemessenen Kosten folgt Â§ 35 Absatz 2, der Kostensenkungsschutz Absatz 3. Â§ 39 SGB II ist keine Vorschrift fÃ¼r sÃ¤mtliche Sozialhilfebescheide. Ob ein Rechtsbehelf dort aufschiebend wirkt, ist nach Â§Â§ 86a und 86b SGG sowie dem konkreten Bescheid zu prÃ¼fen. Ein erstmals zu niedrig bewilligter Bedarf wird durch einen Widerspruch allein auch dort nicht zu einer hÃ¶heren Auszahlung.`},{type:`p`,text:`Hamburg verÃ¶ffentlicht fÃ¼r das SGB XII eine eigene Arbeitshilfe mit Stand 22. Mai 2026; sie enthÃ¤lt ebenfalls die 36-Monats-Betrachtung, die sprachliche Ãœberschneidung bei genau 20 Prozent und gesonderte Umzugs-/Renovierungsregeln. Die Ã¤ltere Arbeitshilfe ersetzt nicht den seit Juli 2026 geltenden Gesetzestext.`},{type:`p`,text:`Quellen: [Hamburger Vorgaben SGB XII](https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/rechtliche-grundlagen/infoline/fachliche-vorgaben-und-hinweise/sgb-xii-sozialhilfe/fa-sgbxii-35-kdu-20240101-45746), [Â§ 35a SGB XII](https://www.gesetze-im-internet.de/sgb_12/__35a.html), [Â§ 36 SGB XII](https://www.gesetze-im-internet.de/sgb_12/__36.html), [Â§ 86a SGG](https://www.gesetze-im-internet.de/sgg/__86a.html).`},{type:`heading`,level:3,text:`**Karenzzeit im SGB XII eigenstÃ¤ndig berechnen**`},{type:`p`,text:`Â§ 35 Absatz 1 SGB XII beginnt die einjÃ¤hrige Karenzzeit mit dem Monat des erstmaligen Leistungsbezugs. Volle Monate einer Unterbrechung verlÃ¤ngern sie. Eine neue Karenzzeit setzt grundsÃ¤tzlich drei Jahre ohne Leistungen nach den dort bezeichneten Kapiteln des SGB XII oder nach dem SGB II voraus. Bei SGB-II-Bezug in den letzten zwei Jahren vor Leistungen nach dem Dritten oder Vierten Kapitel wird bereits verbrauchte SGB-II-Karenzzeit nach der gesetzlichen Vorgabe berÃ¼cksichtigt. Ein Wechsel des LeistungstrÃ¤gers erÃ¶ffnet daher nicht automatisch ein vollstÃ¤ndig neues Schutzjahr.`}]},{number:38,title:`Darf eine alleinlebende Person eine Drei-Zimmer-Wohnung behalten?`,blocks:[{type:`p`,text:`Ja. Eine Drei-Zimmer-Wohnung ist nicht allein wegen ihrer Zimmerzahl unangemessen.`},{type:`p`,text:`Entscheidend sind grundsÃ¤tzlich die Kosten, die maÃŸgeblichen Ã¶rtlichen Angemessenheitswerte und mÃ¶gliche Besonderheiten des Einzelfalls.`}]},{number:39,title:`Darf eine alleinlebende Person auf 65 Quadratmetern wohnen?`,blocks:[{type:`p`,text:`Ja. Die in den Hamburger Vorgaben genannten 50 Quadratmeter fÃ¼r eine Person gehÃ¶ren zu Sonderregeln fÃ¼r bestimmte Wohnungen des 1. FÃ¶rderwegs. FÃ¼r die allgemeine KostenprÃ¼fung sind die maÃŸgeblichen Bruttokaltmietrichtwerte und besonderen Bedarfe entscheidend.`},{type:`p`,text:`Sie sind keine starre gesetzliche Grenze, oberhalb derer Wohnraum automatisch nicht mehr anerkannt wird.`}]},{number:40,title:`Werden zusÃ¤tzliche 15 Quadratmeter von der Miete abgezogen?`,blocks:[{type:`p`,text:`Nein. Bei der grundsÃ¤tzlichen BruttokaltmietprÃ¼fung wird nicht einfach ein Teil der Wohnung rechnerisch von der tatsÃ¤chlichen Mietzahlung abgezogen.`},{type:`p`,text:`Die maÃŸgebliche Gesamtmiete ist entscheidend. Besondere gesetzliche Quadratmeterpreisregelungen und die HeizkostenprÃ¼fung bleiben davon zu unterscheiden.`}]},{number:41,title:`Ist eine Wohnung mit 650 Euro Bruttokaltmiete in Hamburg angemessen?`,blocks:[{type:`p`,text:`Bei einem Einpersonenhaushalt liegt eine Bruttokaltmiete von 650 Euro Ã¼ber dem allgemeinen Hamburger Richtwert von 574 Euro.`},{type:`p`,text:`Die Ãœberschreitung betrÃ¤gt rund 13,2 Prozent.`},{type:`p`,text:`Damit liegt die Wohnung innerhalb der Hamburger 20-Prozent-Spanne, fÃ¼r die ein Umzug nach Ziffer 6.4 der verÃ¶ffentlichten Fachanweisung grundsÃ¤tzlich als unwirtschaftlich gilt.`},{type:`p`,text:`Diese Regelung betrifft die Wirtschaftlichkeit einer KostensenkungsmaÃŸnahme.`},{type:`p`,text:`Sie darf nicht mit der bundesgesetzlichen 150-Prozent-Grenze verwechselt werden.`},{type:`p`,text:`Ob die tatsÃ¤chlichen 650 Euro als Unterkunftsbedarf anzuerkennen sind, richtet sich nach den einschlÃ¤gigen gesetzlichen Voraussetzungen, insbesondere dem Stand der Karenzzeit, mÃ¶glichen besonderen Angemessenheitsregelungen und den Bestimmungen zur Kostensenkung.`},{type:`p`,text:`FÃ¼r den allgemeinen Hamburger Einpersonenrichtwert von 574 Euro ergibt die 20-Prozent-Berechnung einen Betrag von 688,80 Euro.`},{type:`p`,text:`Der Wert von 688,80 Euro ist deshalb ein wichtiger Bezugspunkt der Hamburger WirtschaftlichkeitsprÃ¼fung, aber keine eigenstÃ¤ndige allgemeine bundesgesetzliche Mietobergrenze.`}]},{number:42,title:`Darf die Bruttokaltmiete wÃ¤hrend der Karenzzeit 861 Euro betragen?`,blocks:[{type:`p`,text:`Bei einem fÃ¼r den Einpersonenhaushalt maÃŸgeblichen Richtwert von 574 Euro entspricht eine Bruttokaltmiete von 861 Euro dem Eineinhalbfachen dieses Wertes.`},{type:`p`,text:`Die 861 Euro sind damit die rechnerische 150-Prozent-Grenze nach Â§ 22 Absatz 1 Satz 6 SGB II.`},{type:`p`,text:`WÃ¤hrend der Karenzzeit werden tatsÃ¤chliche Unterkunftskosten nach den gesetzlichen Bestimmungen grundsÃ¤tzlich berÃ¼cksichtigt. Dabei sind insbesondere die seit dem 1. Juli 2026 geltenden EinschrÃ¤nkungen zu beachten.`},{type:`p`,text:`Wichtig ist die Unterscheidung zwischen dem Verbleib in der bisherigen Wohnung und einem Wohnungswechsel.`},{type:`p`,text:`Wer bereits in einer Wohnung wohnt, fÃ¼r die wÃ¤hrend der Karenzzeit hÃ¶here Unterkunftskosten anzuerkennen sind, befindet sich in einer anderen rechtlichen Ausgangssituation als jemand, der wÃ¤hrend der Karenzzeit eine neue Wohnung anmietet.`},{type:`p`,text:`Nach Â§ 22 Absatz 4 SGB II werden hÃ¶here als angemessene Aufwendungen nach einem Umzug nur anerkannt, wenn die zustÃ¤ndige BehÃ¶rde deren Anerkennung vorher schriftlich zugesichert hat.`},{type:`p`,text:`Es besteht daher kein automatischer Anspruch, wÃ¤hrend der Karenzzeit eine neue Wohnung mit bis zu 861 Euro Bruttokaltmiete anzumieten und ohne weitere Voraussetzungen die vollstÃ¤ndige KostenÃ¼bernahme zu erhalten.`},{type:`p`,text:`AuÃŸerdem kÃ¶nnen die besonderen Regelungen zu Quadratmeterpreisobergrenzen und zur Mietpreisbremse relevant werden.`},{type:`p`,text:`Die 861 Euro sind weder eine allgemeine dauerhafte Mietobergrenze noch eine Garantie fÃ¼r jede konkrete Fallgestaltung.`},{type:`p`,text:`Im SGB XII steht die entsprechende Begrenzung in Â§ 35 Absatz 1 Satz 7; Ausnahmen regelt Satz 8. Wohnungswechsel sind eigenstÃ¤ndig nach Â§ 35a Absatz 2 zu prÃ¼fen, besondere Wohnformen nach Â§ 42a. Die Entscheidung erfolgt durch den SozialhilfetrÃ¤ger, nicht das Jobcenter.`}]},{number:43,title:`Muss man nach sechs Monaten ausziehen?`,blocks:[{type:`p`,text:`Nein.`},{type:`p`,text:`Die gesetzliche Sechsmonatsregel betrifft grundsÃ¤tzlich die vorÃ¼bergehende weitere Anerkennung unangemessener Unterkunftskosten nach den maÃŸgeblichen Voraussetzungen.`},{type:`p`,text:`Ein automatischer Zwang zum Umzug entsteht daraus nicht.`}]},{number:44,title:`Kann das Jobcenter jemanden wegen einer zu groÃŸen Wohnung kÃ¼ndigen?`,blocks:[{type:`p`,text:`Nein. Ein Jobcenter ist nicht befugt, allein aufgrund der GrÃ¶ÃŸe einer Mietwohnung den privaten Mietvertrag zwischen Mieter und Vermieter zu kÃ¼ndigen.`},{type:`p`,text:`Es kann unter den gesetzlichen Voraussetzungen allerdings die HÃ¶he der berÃ¼cksichtigten Unterkunftskosten begrenzen.`}]},{number:45,title:`Muss man eine gÃ¼nstigere Wohnung nehmen, obwohl ein Umzug teurer wÃ¤re?`,blocks:[{type:`p`,text:`Nicht automatisch.`},{type:`p`,text:`Â§ 22 Absatz 1 Satz 12 SGB II sieht vor, dass eine Absenkung unangemessener Unterkunftskosten nicht gefordert werden muss, wenn diese unter BerÃ¼cksichtigung der bei einem Wohnungswechsel zu erbringenden Leistungen unwirtschaftlich wÃ¤re.`},{type:`p`,text:`FÃ¼r Hamburg enthÃ¤lt die Fachanweisung eine WirtschaftlichkeitsprÃ¼fung Ã¼ber 36 Monate.`},{type:`p`,text:`ZusÃ¤tzlich gelten UmzÃ¼ge bei Ãœberschreitungen der maÃŸgeblichen Angemessenheitsgrenze von bis zu 20 Prozent nach der verÃ¶ffentlichten Verwaltungsvorschrift generell als unwirtschaftlich.`},{type:`p`,text:`Bei einer Ãœberschreitung von genau 20 Prozent enthÃ¤lt die Fachanweisung zwei sprachlich Ã¼berlappende Bestimmungen.`},{type:`p`,text:`Die darÃ¼ber hinausgehende individuelle WirtschaftlichkeitsprÃ¼fung verwendet pauschalierte BerechnungsansÃ¤tze.`},{type:`p`,text:`Diese sind von den tatsÃ¤chlich notwendig werdenden Umzugskosten zu unterscheiden.`},{type:`p`,text:`Ein hoher tatsÃ¤chlicher Aufwand fÃ¼r einen professionellen Komplettumzug kann deshalb fÃ¼r die Beurteilung bedeutsam sein, ohne dass daraus automatisch folgt, dass sÃ¤mtliche tatsÃ¤chlichen Aufwendungen in der behÃ¶rdlichen 36-Monats-Berechnung vollstÃ¤ndig angesetzt werden mÃ¼ssen.`},{type:`p`,text:`Ob eine Kostensenkung verlangt werden darf, muss anhand der gesetzlichen Bestimmungen und der konkreten VerhÃ¤ltnisse beurteilt werden.`}]},{number:46,title:`Muss ein gesundheitlich eingeschrÃ¤nkter Mensch selbst MÃ¶bel transportieren?`,blocks:[{type:`p`,text:`Nicht, soweit ihm die erforderlichen Eigenleistungen nachweislich nicht mÃ¶glich oder nicht zumutbar sind.`},{type:`p`,text:`Die Hamburger Fachanweisung sieht fÃ¼r solche FÃ¤lle ausdrÃ¼cklich einen gewerblich organisierten Umzug vor.`}]},{number:47,title:`Gibt es eine gesetzliche HÃ¶chstsumme fÃ¼r einen professionellen Umzug?`,blocks:[{type:`p`,text:`Â§ 22 Absatz 6 SGB II enthÃ¤lt keine feste allgemeine Euro-Obergrenze.`},{type:`p`,text:`Notwendigkeit und Angemessenheit der Kosten mÃ¼ssen jedoch geprÃ¼ft werden.`},{type:`p`,text:`Die Hamburger Pauschale von 500 Euro fÃ¼r zwei MÃ¶belpacker und einen Transporter Ã¼ber acht Stunden ist nur ein Berechnungswert fÃ¼r die WirtschaftlichkeitsprÃ¼fung.`}]},{number:48,title:`Werden MÃ¶belmontage, KÃ¼chenaufbau und Einpackarbeiten bezahlt?`,blocks:[{type:`p`,text:`Notwendige Einpack-, Abbau-, Transport- und Montageleistungen kÃ¶nnen unter bestimmten Voraussetzungen Bestandteil erstattungsfÃ¤higer gewerblicher Umzugskosten sein.`},{type:`p`,text:`Entscheidend ist, ob die Arbeiten unmittelbar durch einen notwendigen Umzug verursacht werden, ob sie tatsÃ¤chlich erforderlich sind und ob eine DurchfÃ¼hrung durch die leistungsberechtigte Person selbst mÃ¶glich und zumutbar ist.`},{type:`p`,text:`Das Sozialgericht Karlsruhe hat im Urteil vom 1. Oktober 2024, S 12 AS 2387/22, die Kosten eines professionellen Umzugs einschlieÃŸlich MÃ¶bel- und KÃ¼chenmontage anerkannt.`},{type:`p`,text:`Der zugrunde liegende Umzug dauerte drei Kalendertage und erforderte nach den gerichtlichen Feststellungen insgesamt rund 96 Personenarbeitsstunden.`},{type:`p`,text:`Die Entscheidung belegt damit, dass auch umfangreiche professionelle Arbeitsleistungen erstattungsfÃ¤hig sein kÃ¶nnen.`},{type:`p`,text:`Sie begrÃ¼ndet allerdings keinen automatischen Anspruch auf sÃ¤mtliche persÃ¶nlichen EinrichtungswÃ¼nsche.`},{type:`p`,text:`Gerade bei Bohr- und Montagearbeiten muss unterschieden werden zwischen dem notwendigen Wiederaufbau vorhandener MÃ¶bel, einer erforderlichen Wohnraumanpassung und rein dekorativen TÃ¤tigkeiten.`},{type:`p`,text:`Die erforderlichen Arbeiten und ihre Kosten mÃ¼ssen im Einzelfall nachgewiesen werden.`}]},{number:49,title:`Werden fÃ¼nf oder sechs Tage Montagearbeit Ã¼bernommen?`,blocks:[{type:`p`,text:`Es gibt keine allgemeine gesetzliche Vorschrift, nach der notwendige Montagearbeiten eines Umzugs auf einen einzigen Arbeitstag beschrÃ¤nkt wÃ¤ren.`},{type:`p`,text:`Ob mehrere Tage professioneller Montagearbeit Ã¼bernommen werden mÃ¼ssen, richtet sich nach dem tatsÃ¤chlich notwendigen Leistungsumfang.`},{type:`p`,text:`Dazu ist insbesondere zu prÃ¼fen, welche MÃ¶bel und EinrichtungsgegenstÃ¤nde transportiert und wieder aufgebaut werden mÃ¼ssen, welche Arbeiten fachkundige Hilfe erfordern und welche Eigenleistungen der betroffenen Person mÃ¶glich und zumutbar sind.`},{type:`p`,text:`Das Sozialgericht Karlsruhe hat im Urteil vom 1. Oktober 2024 einen dreitÃ¤gigen gewerblichen Umzug mit insgesamt rund 96 Personenarbeitsstunden behandelt und die geltend gemachten Kosten unter den konkreten Voraussetzungen anerkannt.`},{type:`p`,text:`Die Entscheidung zeigt, dass ein erheblicher Zeitaufwand nicht von vornherein ausgeschlossen ist.`},{type:`p`,text:`Sie beweist jedoch keinen allgemeinen Anspruch auf fÃ¼nf oder sechs Tage professioneller Montagearbeit.`},{type:`p`,text:`Ein entsprechender Bedarf muss durch die tatsÃ¤chlich erforderlichen Arbeiten, geeignete KostenvoranschlÃ¤ge und gegebenenfalls Nachweise Ã¼ber fehlende SelbsthilfemÃ¶glichkeiten begrÃ¼ndet werden.`},{type:`p`,text:`MaÃŸgeblich ist die Notwendigkeit der Leistungen, nicht allein die gewÃ¼nschte Anzahl der Arbeitstage.`}]},{number:50,title:`Muss das Jobcenter bei Krankheit einen Maler oder Handwerker bezahlen?`,blocks:[{type:`p`,text:`Nach der Hamburger Fachanweisung kÃ¶nnen notwendige Handwerkerleistungen bei erforderlichen Renovierungen Ã¼bernommen werden, wenn die betroffene Person wegen schwerer Erkrankung, Behinderung oder vergleichbarer UmstÃ¤nde die Arbeiten nicht selbst ausfÃ¼hren kann und keine andere zumutbare Hilfe zur VerfÃ¼gung steht.`}]},{number:51,title:`Kann man einen MietkÃ¼rzungsbescheid gerichtlich Ã¼berprÃ¼fen lassen?`,blocks:[{type:`p`,text:`Ja.`},{type:`p`,text:`Neben der Berechnung der Ã¶rtlichen Angemessenheitsgrenze kÃ¶nnen insbesondere gesetzliche Ausnahmen, gesundheitliche UmstÃ¤nde, Wirtschaftlichkeit, Zumutbarkeit und die RechtmÃ¤ÃŸigkeit eines Ã„nderungsbescheids Ã¼berprÃ¼ft werden.`},{type:`p`,text:`Die Gerichtsentscheidungen aus Kassel, Stade und Hamburg zeigen verschiedene rechtliche Angriffspunkte.`}]}],bridges:{25:[{type:`p`,text:`Die neue gesetzliche Regelung hat bereits zu mehreren sozialgerichtlichen Entscheidungen gefÃ¼hrt.`},{type:`p`,text:`Dabei mÃ¼ssen zwei rechtlich unterschiedliche Fragen auseinandergehalten werden:`},{type:`p`,text:`Erstens: Darf die gesetzliche 150-Prozent-Grenze auf Grundlage der vorhandenen Ã¶rtlichen Mietwerte angewendet werden?`},{type:`p`,text:`Zweitens: Darf ein Jobcenter eine bereits erteilte Leistungsbewilligung wegen der neuen gesetzlichen Regelung nachtrÃ¤glich Ã¤ndern?`},{type:`p`,text:`Die folgenden Entscheidungen sind besonders wichtig.`}],30:[],37:[]},tail:[{type:`heading`,level:1,text:`**Zusammenfassung: Unter welchen Voraussetzungen darf man seine Wohnung behalten?**`},{type:`p`,text:`FÃ¼r die Frage, ob ein Mensch trotz Ã¼berhÃ¶hter Unterkunftskosten in seiner bisherigen Wohnung bleiben und eine weitere KostenÃ¼bernahme beanspruchen kann, sind mehrere voneinander unabhÃ¤ngige Schutzmechanismen zu berÃ¼cksichtigen.`},{type:`table`,rows:[[`Schutzmechanismus`,`Bedeutung`],[`Angemessene Bruttokaltmiete`,`Die tatsÃ¤chlichen Unterkunftskosten liegen innerhalb der maÃŸgeblichen Grenze`],[`Produkttheorie`,`Eine grÃ¶ÃŸere Wohnung ist nicht allein wegen ihrer Quadratmeterzahl unangemessen`],[`Ã–rtliche ZuschlÃ¤ge und besondere Wohnbedarfe`,`Im Einzelfall kann eine hÃ¶here Angemessenheitsgrenze maÃŸgeblich sein`],[`Karenzzeit`,`TatsÃ¤chliche Unterkunftskosten werden nach den gesetzlichen Regeln vorÃ¼bergehend geschÃ¼tzt`],[`Ausnahmen von der 150-Prozent-Grenze`,`HÃ¶here Unterkunftskosten kÃ¶nnen im Einzelfall anerkannt werden`],[`SchlÃ¼ssiges Konzept`,`Die zugrunde gelegte Ã¶rtliche Angemessenheitsgrenze muss rechtlich tragfÃ¤hig sein`],[`Kostensenkungsfrist`,`Unangemessene Kosten kÃ¶nnen vorÃ¼bergehend weiterhin anerkannt werden`],[`TatsÃ¤chliche UnmÃ¶glichkeit der Kostensenkung`,`Eine nicht realisierbare Kostensenkung darf nicht einfach unterstellt werden`],[`Gesundheitliche Unzumutbarkeit`,`Besondere Belastungen kÃ¶nnen gegen einen Wohnungswechsel sprechen`],[`LangjÃ¤hrige Wohndauer und soziale UmstÃ¤nde`,`KÃ¶nnen im Einzelfall besonderen Schutz begrÃ¼nden`],[`WirtschaftlichkeitsprÃ¼fung`,`Ein finanziell unwirtschaftlicher Umzug muss nicht verlangt werden`],[`RechtmÃ¤ÃŸigkeit des Ã„nderungsbescheids`,`Eine bestehende Bewilligung darf nur unter den gesetzlichen Voraussetzungen geÃ¤ndert werden`],[`Sozialgerichtlicher Rechtsschutz`,`Rechtswidrige KÃ¼rzungen kÃ¶nnen gerichtlich vorlÃ¤ufig oder endgÃ¼ltig korrigiert werden`]]},{type:`heading`,level:2,text:`**Das entscheidende Ergebnis**`},{type:`p`,text:`**Menschen verlieren nicht allein deshalb das Recht, in ihrer bisherigen Wohnung zu wohnen, weil sie Grundsicherung beziehen, ihre Wohnung mehr Zimmer als Ã¼blich hat oder die Miete einen Ã¶rtlichen Richtwert Ã¼berschreitet.**`},{type:`p`,text:`Ob die tatsÃ¤chlichen Unterkunftskosten weiterhin vollstÃ¤ndig Ã¼bernommen werden mÃ¼ssen, ist eine andere, eigenstÃ¤ndig zu prÃ¼fende Frage.`},{type:`p`,text:`Eine rechtmÃ¤ÃŸige Begrenzung der Mietkosten setzt voraus, dass die anwendbaren gesetzlichen Bestimmungen und die individuellen UmstÃ¤nde berÃ¼cksichtigt werden.`},{type:`p`,text:`Dabei kÃ¶nnen insbesondere gesundheitliche EinschrÃ¤nkungen, die fehlende MÃ¶glichkeit einer Kostensenkung, die Wirtschaftlichkeit eines Umzugs und die tatsÃ¤chlichen Kosten notwendiger Hilfsleistungen entscheidend sein.`},{type:`p`,text:`FÃ¼r Hamburg kommen ausdrÃ¼cklich die besonderen Vorgaben der SozialbehÃ¶rde zur Wirtschaftlichkeit, zur Unzumutbarkeit von KostensenkungsmaÃŸnahmen und zur Ãœbernahme professioneller Umzugs- und Renovierungsleistungen hinzu.`},{type:`p`,text:`Die Gerichte haben auÃŸerdem bestÃ¤tigt, dass sowohl die Berechnungsgrundlage der neuen 150-Prozent-Grenze als auch die nachtrÃ¤gliche Ã„nderung bereits erteilter Leistungsbewilligungen rechtlich Ã¼berprÃ¼ft werden kÃ¶nnen.`},{type:`p`,text:`**Eine Mietobergrenze ist deshalb nicht mit einer automatischen Verpflichtung zum Wohnungswechsel gleichzusetzen.**`},{type:`heading`,level:3,text:`**Welche rechtliche Verbindlichkeit haben die genannten Regelungen?**`},{type:`p`,text:`Bei der rechtlichen Bewertung der Unterkunftskosten sind verschiedene Arten von Rechtsquellen zu unterscheiden.`},{type:`p`,text:`**Bundesgesetze**`},{type:`p`,text:`Die gesetzlichen Bestimmungen des SGB II, SGB XII, SGB X und SGG gelten im jeweiligen Anwendungsbereich unmittelbar. Die Verwaltung ist an die geltenden Gesetze gebunden.`},{type:`p`,text:`**Hamburger Fachanweisungen**`},{type:`p`,text:`Die Hamburger Fachanweisungen konkretisieren die Verwaltungspraxis.`},{type:`p`,text:`Sie enthalten Vorgaben fÃ¼r die Bearbeitung von LeistungsfÃ¤llen und die Anwendung der gesetzlichen Vorschriften.`},{type:`p`,text:`Dabei handelt es sich jedoch nicht um Bundesgesetze. Eine Fachanweisung kann gesetzliche Voraussetzungen weder aufheben noch eigenstÃ¤ndig entgegen dem Gesetz verÃ¤ndern.`},{type:`p`,text:`Ihre Anwendung ist gerichtlich Ã¼berprÃ¼fbar.`},{type:`p`,text:`**Sozialgerichtliche Entscheidungen**`},{type:`p`,text:`Gerichtliche Entscheidungen betreffen zunÃ¤chst die jeweiligen Verfahren und Beteiligten.`},{type:`p`,text:`Sie kÃ¶nnen wichtige rechtliche MaÃŸstÃ¤be fÃ¼r andere FÃ¤lle enthalten.`},{type:`p`,text:`Insbesondere die Rechtsprechung des Bundessozialgerichts hat fÃ¼r die einheitliche Anwendung des Sozialrechts groÃŸe Bedeutung.`},{type:`p`,text:`Eine Entscheidung eines Sozialgerichts im einstweiligen Rechtsschutz ist dagegen grundsÃ¤tzlich eine vorlÃ¤ufige gerichtliche Entscheidung.`},{type:`p`,text:`Sie stellt keine automatische bundesweit verbindliche Entscheidung Ã¼ber sÃ¤mtliche vergleichbaren LeistungsfÃ¤lle dar.`},{type:`p`,text:`**Juristische Fachliteratur und VerÃ¶ffentlichungen**`},{type:`p`,text:`Juristische Kommentare, FachaufsÃ¤tze und journalistische VerÃ¶ffentlichungen kÃ¶nnen gesetzliche Regelungen und Rechtsprechung erlÃ¤utern.`},{type:`p`,text:`Sie ersetzen aber weder den geltenden Gesetzestext noch die gerichtlichen Entscheidungen.`},{type:`p`,text:`Bei unterschiedlichen rechtlichen Auffassungen muss erkennbar bleiben, ob eine Aussage unmittelbar aus dem Gesetz folgt, von einem Gericht entschieden wurde oder eine juristische Auslegung darstellt.`},{type:`heading`,level:2,text:`**Quellen und weiterfÃ¼hrende Rechtsgrundlagen**`},{type:`heading`,level:3,text:`**Gesetze**`},{type:`ol`,items:[`[Â§ 22 SGB II â€“ Bedarfe fÃ¼r Unterkunft und Heizung](https://www.gesetze-im-internet.de/sgb_2/__22.html)`,`[Â§ 45 SGB X â€“ RÃ¼cknahme eines rechtswidrigen begÃ¼nstigenden Verwaltungsakts](https://www.gesetze-im-internet.de/sgb_10/__45.html)`,`[Â§ 48 SGB X â€“ Aufhebung bei Ã„nderung der VerhÃ¤ltnisse](https://www.gesetze-im-internet.de/sgb_10/__48.html)`,`[Â§ 39 SGB II â€“ Sofortige Vollziehbarkeit](https://www.gesetze-im-internet.de/sgb_2/__39.html)`,`[Â§ 86b SGG â€“ Gerichtlicher Eilrechtsschutz](https://www.gesetze-im-internet.de/sgg/__86b.html)`,`[Â§ 35 SGB XII â€“ Bedarfe fÃ¼r Unterkunft und Heizung](https://www.gesetze-im-internet.de/sgb_12/__35.html)`]},{type:`heading`,level:3,text:`**Hamburger Verwaltungsvorschriften**`},{type:`ol`,items:[`[Hamburger SozialbehÃ¶rde â€“ Fachanweisung zu Â§ 22 SGB II](https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/rechtliche-grundlagen/infoline/fachliche-vorgaben-und-hinweise/sgb-ii-grundsicherung-fuer-arbeitsuchende/fa-sgbii-22-kdu-45744)`,`[VollstÃ¤ndige Fachanweisung vom 22. Mai 2026 (PDF)](https://dokumente.hamburg.de/resource/blob/46622/a81471fb2df41a856600cb3507f32519/fa-sgbii-22-kdu-00-pdf-data.pdf)`,`[Hamburger Angemessenheitsgrenzen ab 28. April 2026 (PDF)](https://dokumente.hamburg.de/resource/blob/46624/dd3a3e0888e4d0eb45e3f23f6f480892/fa-sgbii-22-kdu-14-angemessenheitsgrenzen-infoblatt-data.pdf)`,`[Hamburger SozialbehÃ¶rde â€“ Berechnungsgrundlagen der Mietobergrenzen](https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/soziales/sozialhilfe/kosten-der-unterkunft-41098)`]},{type:`heading`,level:3,text:`**Gerichtsentscheidungen**`},{type:`ol`,items:[`[SG Kassel, S 1 AS 304/26 ER, Beschluss vom 14.10.2026](https://sozialgerichtsbarkeit.hessen.de/presse/begrenzung-der-uebernahmefaehigen-unterkunftskosten)`,`[SG Stade, S 39 AS 217/26 ER, Beschluss vom 19.10.2026](https://urteile.ai/e/d_mb51wfmhsk/sg-stade-s-39-as-217-26-er)`,`[SG Hamburg, S 49 AS 3079/26 ER, Beschluss vom 31.07.2026](https://recht.nulegal.eu/rechtsprechung/sg-hamburg/2026-07-31/s-49-as-3079-26-er)`,`[SG MÃ¼nchen, S 46 AS 2499/26 ER, Beschluss vom 05.10.2026](https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2026-N-26872)`,`[SG Karlsruhe, S 12 AS 2387/22, Urteil vom 01.10.2024](https://de.openlegaldata.io/case/sg-karlsruhe-2024-10-01-s-12-as-238722)`,`[Tacheles Sozialhilfe e. V. â€“ Rechtsprechungsticker mit Hamburger Entscheidung](https://tacheles-sozialhilfe.de/newsticker/tacheles-rechtsprechungsticker-kw-43-2026.html)`]},{type:`heading`,level:3,text:`**Anlass der Recherche**`},{type:`ol`,items:[`[Gegen-Hartz.de â€“ Artikel von Detlef Brock vom 17. November 2026](https://www.gegen-hartz.de/urteile/grundsicherung-jobcenter-darf-miete-nicht-pauschal-deckeln-gericht-stoppt-die-150-prozent-grenze)`]},{type:`p`,text:`**Redaktioneller Hinweis:** Historischer redaktioneller Hinweis zur Ausgangsfassung vom 18. November 2026: Dieser Ratgeber beschrieb die damals Ã¼berprÃ¼fbare Rechtslage und die genannten Gerichtsentscheidungen wieder. Die Hamburger Fachanweisung hat den verÃ¶ffentlichten Stand vom 22. Mai 2026; die gesetzliche 150-Prozent-Regelung ist erst am 1. Juli 2026 in Kraft getreten. Die konkrete Verwaltungspraxis zu dieser Neuregelung ist daher nicht in allen Einzelheiten anhand dieser Fachanweisung geklÃ¤rt. Die genannten BeschlÃ¼sse im einstweiligen Rechtsschutz sind keine abschlieÃŸendeÛÞz×½›Ê×¬¢h­µç[ˆHMx $ÌMÎŒÌ[™œˆNŒÌ8 $ÌLˆZ‹ˆ‹˜ÛÜÝŽˆ‘UU‹P™\˜][™ÈÛÜÝ[™œ™ZKˆ‹œ™YÚ\Ý˜][ÛˆŽˆ“Ù™™[™H™Z][ŽÈ[Y›Ûš\ØÚH\›Z[™\™Z[˜˜\[™È[\›Ú[‹[HØ\^™Z][ˆH™\›YZY[‹ˆ‹˜XØÙ\ÜÚXš[]HŽˆ“šXÚ™\Ý0éYÝ8 $Èš]H›Ü˜Xˆ\™œ˜YÙ[‹ˆ‹˜ÚXÚÙYŽˆŒŒ‹LLKLLˆ‹œÛÝ\˜Ù\ÈŽ–ÞÈ\›ŽˆšÎ‹ËÝÝÝËZ[X™X™\˜][™Ë™KØ™\˜][™ËÝZ[X™X™\˜][™ËY\‹Z[X\™Ú\ØÚ[‹YÙ\Ù[ØÚYY\‹\ÛÞšX[K\ÞXÚX]šYKX™\™ÙYÜ™ˆ‹›X™[Žˆ“ÜšYÚ[˜[]Y[H\È[˜šY]\œÈŸKÈ\›ŽˆšÎ‹ËÝÝÝËZ[X™X™\˜][™Ë™KØ\ZÙ[Ù˜\H‹›X™[Žˆ’ÛÜÝ[™œ™ZZZ]\ˆUUˆŸWK™œ™YHŽYKšÛYUš\Ú]Ž›[KÈšYŽˆ›Ü™\ˆ‹›˜[YHŽˆ“Ü™\š[™H[X\™È‹œ›ÝšY\ˆŽˆ“Ü™\š[™H[X\™ÈKˆ‹ˆ‹šÚ[™Ž–È‘Ù]Ø[‹™\˜][™È—KœÝ\ÜŽˆ™\˜][™È˜XÚÙ]Ø[Ý˜Y][ˆÙ\ˆ™[\Ý[™[ˆ[™°é[ŽÈ[Y›Ûš\ØÚÙ\ˆ\œðí››XÚˆ‹\™Ù]Žˆ™\˜][™È˜XÚÙ]Ø[Ý˜Y][ˆÙ\ˆ™[\Ý[™[ˆ[™°é[ŽÈ[Y›Ûš\ØÚÙ\ˆ\œðí››XÚˆ‹˜Y™\ÜÈŽˆ”][S™]™\›X[›‹T]ˆ¸ $ÍŒÍH[X\™ÎÈKˆ]YÙH‹˜\™XHŽˆ’[X\™ÝÙZ]ÈÝ[™Ü[Û˜K[Y›Ûš\ØÚ\ˆYØ[™Èpí™ÛXÚ‹˜ÛÛXÝÈŽ–ÞÈ›X™[ŽˆŒÎNNLÈ‹š™YˆŽˆ[ŠÍMÎNNLÈŸWKšÝ\œÈŽˆ•[Y›Ûˆ[ËÑœˆx $ÌLŽÈKÑÈx $ÌLˆ[™M8 $ÌMÎÈZHM8 $ÌMÈZ‹ˆ‹˜ÛÜÝŽˆ’ÛÜÝ[™œ™ZH[™™\˜][XÚ]YˆÝ[œØÚ[›Ûž[Kˆ‹œ™YÚ\Ý˜][ÛˆŽˆ•\›Z[ˆ\ˆ[H\œðí››XÚ[ˆ[Y›Û™Ù\Ü°éÚˆ[˜šY]\ˆš]]]\Ù°ïÚÛXÚ[HÙZ[™H˜XÚšXÚ[ˆ\ˆKSXZ[Ù\ˆ[œY˜™X[ÛÜ\‹ˆ‹˜XØÙ\ÜÚXš[]HŽˆ‘Z[™HZ[™Ø[™ÜÜÝY™NÈ]YžYÈZ]ÌÛH0ï˜œ™Z]H]][˜šY]\‹ˆÐÈ[™ÙZ]\™H™Y[™Ý[™Ù[ˆšXÚ™\Ý0éYÝˆ‹˜ÚXÚÙYŽˆŒŒ‹LLKLLˆ‹œÛÝ\˜Ù\ÈŽ–ÞÈ\›ŽˆšÎ‹ËÛÜ™\š[™KZ[X\™Ë™KÚÛÛZÝÈ‹›X™[Žˆ“ÜšYÚ[˜[]Y[H\È[˜šY]\œÈŸKÈ\›ŽˆšÎ‹ËÛÜ™\š[™KZ[X\™Ë™KØ™\˜][™ËØ™\˜][™ÜØ[™ÙX›ÝÈ‹›X™[Žˆ“ÜšYÚ[˜[]Y[H\È[˜šY]\œÈŸKÈ\›ŽˆšÎ‹ËÛÜ™\š[™KZ[X\™Ë™KÝYX™\‹][œËÝ™\™Z[‹È‹›X™[Žˆ•°éÙ\ˆ\ˆ™\˜][™ÜÜÝ[HŸWK™œ™YHŽYKšÛYUš\Ú]Ž›[KÈšYŽˆ›ZÈ‹›˜[YHŽˆ“XYÛ\ËR\œØÚ™[PÙ[[H
ZÊH‹œ›ÝšY\ˆŽˆ“XYÛ\È\œØÚ™[Ù[[H8 $È™\˜][™È[™ÛÛ[][šZØ][ÛˆÑÛX’
Y[™ÜØ™\ØÚ°éšÝ
H‹šÚ[™Ž–È”]YY\ˆ‹™\˜][™È—KœÝ\ÜŽˆ™\˜][™ÜÞYðé™ÙH°ïˆ]YY\™HY[œØÚ[ŽÈ0ï™\ˆ[ˆ[Ù[YZ[™[ˆÛÛZÝYH\ÜÙ[™H˜XÚ™\˜][™È\™œ˜YÙ[‹ˆ‹\™Ù]Žˆ™\˜][™ÜÞYðé™ÙH°ïˆ]YY\™HY[œØÚ[ŽÈ0ï™\ˆ[ˆ[Ù[YZ[™[ˆÛÛZÝYH\ÜÙ[™H˜XÚ™\˜][™È\™œ˜YÙ[‹ˆ‹˜Y™\ÜÈŽˆ›Ü™ÝÙYÈŒŒÌÈ[X\™È‹˜\™XHŽˆ’[X\™ÝÙZ]ÈÝ[™ÜÚ[\šYH‹˜ÛÛXÝÈŽ–ÞÈ›X™[ŽˆŒÎÍÎ‹š™YˆŽˆ[ŠÍMÎÍÎŸKÈ›X™[Žˆš[™›ÐZËZ[X\™Ë™H‹š™YˆŽˆ›XZ[Îš[™›ÐZËZ[X\™Ë™HŸWKšÝ\œÈŽˆ[Ù[YZ[™\È°ï›È[ÈL8 $ÌLËx $ÑÈL8 $ÌMˆZŽÈ˜XÚ™\˜][™Ù[ˆX™[ˆZYÙ[™H™Z][ˆ]Yˆ\ˆÛÛZÝÙZ]Kˆ‹˜ÛÜÝŽˆ‘°ïˆYHÙ]ðïœØÚHZ\Ý[™ÈšXÚ™\Ý0éYÝ8 $È›Ü˜Xˆ\™œ˜YÙ[‹ˆ‹œ™YÚ\Ý˜][ÛˆŽˆ[Ù[YZ[™[ˆÛÛZÝ\ˆÜšY[Y\[™È]™[ŽÈ˜XÚ™^›ÙÙ[™[ˆ\›Z[ˆÙ\ÛÛ™\Û0é™[‹ˆ‹˜XØÙ\ÜÚXš[]HŽˆ‘\™Ù\ØÚÜÜÈ0ï™\ˆ˜[\K0ïˆÛKˆØ™\‹H[™[\™Ù\ØÚÜÜÈ\ˆ0ï™\ˆ™\[‹ÙZ[ˆ]YžYËˆ™\˜][™È[H\™Ù\ØÚÜÜÈ›Ü˜Xˆ™\™Z[˜˜\™[‹ˆÙZ[ˆÝY™[›ÜÙ\ÈÐÈ[H]\ÎÈØÚ0ïÜÙ[°ïˆ\ÈÐÈ[HKP˜ZšÙˆ›Ü™ÝÙYÈ]][˜šY]\ˆ\š0éXÚˆ‹˜ÚXÚÙYŽˆŒŒ‹LLKLLˆ‹œÛÝ\˜Ù\ÈŽ–ÞÈ\›ŽˆšÎ‹ËÛZËZ™KÚÛÛZÝÈ‹›X™[Žˆ“ÜšYÚ[˜[]Y[H\È[˜šY]\œÈŸKÈ\›ŽˆšÎ‹ËÛZËZ™KÚ[\™\ÜÝ[KÈ‹›X™[Žˆ•°éÙ\ˆŸKÈ\›ŽˆšÎ‹ËÛZËZ™KØ˜\œšY\™Yœ™ZZZ]È‹›X™[Žˆ’ÛÛšÜ™]H˜][XÚHYØ[™ÜØ™Y[™Ý[™Ù[ˆŸWK™œ™YHŽ›[šÛYUš\Ú]Ž›[KÈšYŽˆ˜Ø\š]\È‹›˜[YHŽˆ’[YÜ˜][ÛœÞ™[[H™\™ÙYÜ™ˆ‹œ›ÝšY\ˆŽˆØ\š]\Ý™\˜˜[™°ïˆ\È\ž˜š\Ý[H[X\™ÈKˆ‹ˆ‹šÚ[™Ž–È“ZYÜ˜][Ûˆ‹™\˜][™È—KœÝ\ÜŽˆ–YÙ]Ø[™\H\ØXÚÙ[™NˆÜšY[Y\[™ÈH[YË™Z0íœ™[‹˜[Z[YKÙ\Ý[™Z][™[YÜ˜][Û‹ˆ‹\™Ù]Žˆ–YÙ]Ø[™\H\ØXÚÙ[™NˆÜšY[Y\[™ÈH[YË™Z0íœ™[‹˜[Z[YKÙ\Ý[™Z][™[YÜ˜][Û‹ˆ‹˜Y™\ÜÈŽˆ[HÛÝ[œÝ˜pçÙHKŒLÌH[X\™È‹˜\™XHŽˆ™^š\šÈ™\™ÙYÜ™ˆ‹˜ÛÛXÝÈŽ–ÞÈ›X™[Žˆš^‹X™\™ÙYÜ™Ø\š]\ËZ[K[›Ü™[‹™H‹š™YˆŽˆ›XZ[Îš^‹X™\™ÙYÜ™Ø\š]\ËZ[K[›Ü™[‹™HŸWKšÝ\œÈŽˆ“šXÚ™\Ý0éYÝ8 $È\›Z[ˆ™\™Z[˜˜\™[‹ˆ‹˜ÛÜÝŽˆ‘°ïˆYHÛÛšÜ™]H™\˜][™ÈY\ˆšXÚ™\Ý0éYÝ8 $Èš]H\™œ˜YÙ[‹ˆ‹œ™YÚ\Ý˜][ÛˆŽˆ•\›Z[ˆ\ˆKSXZ[ˆYHÜšYÚ[˜[ÙZ]H™[›[\œØÚYYXÚH[Y›Û›[[Y\›ŽÈ\Ú[ˆY\ˆÙZ[™H[™ÙZÛ0éH[[Y\ˆ0ï™\››Û[Y[‹ˆ‹˜XØÙ\ÜÚXš[]HŽˆ“šXÚ™\Ý0éYÝ8 $Èš]H›Ü˜Xˆ\™œ˜YÙ[‹ˆ‹˜ÚXÚÙYŽˆŒŒ‹LLKLLˆ‹œÛÝ\˜Ù\ÈŽ–ÞÈ\›ŽˆšÎ‹ËÝÝÝË˜Ø\š]\ËZ[K[›Ü™[‹™KÚ[X\™ËÙ›XÚ[ZYÜ˜][Û‹Ø™\˜][™ËZ[YÜ˜][Û‹Ú[YÜ˜][ÛœÞ™[[KX™\™ÙYÜ™ˆ‹›X™[Žˆ“ÜšYÚ[˜[]Y[H\È[˜šY]\œÈŸWK™œ™YHŽ›[šÛYUš\Ú]Ž›[KÈšYŽˆ[Y›ÛœÙY[ÛÜ™ÙH‹›˜[YHŽˆ•[Y›Û”ÙY[ÛÜ™ÙH‹œ›ÝšY\ˆŽˆ•[Y›Û”ÙY[ÛÜ™ÙH‹šÚ[™Ž–È•[Y›Ûˆ—KœÝ\ÜŽˆ‘]]ØÚÜ˜XÚYÙ\Ë™\˜][XÚ\È[™[›Ûž[Y\ÈÙ\Ü°éÚH™[\Ý[™[ˆ[Y[ˆZ]Ù\ØÚ[[ˆZ™[˜[]XÚ[‹ˆÙZ[™HYY^š[š\ØÚH›Ý˜[™\œÛÜ™Ý[™Ëˆ‹\™Ù]Žˆ‘]]ØÚÜ˜XÚYÙ\Ë™\˜][XÚ\È[™[›Ûž[Y\ÈÙ\Ü°éÚH™[\Ý[™[ˆ[Y[ˆZ]Ù\ØÚ[[ˆZ™[˜[]XÚ[‹ˆÙZ[™HYY^š[š\ØÚH›Ý˜[™\œÛÜ™Ý[™Ëˆ‹˜Y™\ÜÈŽˆ•[Y›Ûš\ØÚ\È[™ÙX›ÝÈÙZ[ˆ0íœXÚ\ˆ™\ÝXÚÚÛÛZÝˆ‹˜\™XHŽˆ[™\ÝÙZ]]XÚ]\È™\™ÙYÜ™ˆ‹˜ÛÛXÝÈŽ–ÞÈ›X™[ŽˆŒLLHLLH‹š™YˆŽˆ[ŠÍNLLLLLOÛØZWÛ[š×ÜÛÝ\˜ÙO[[Ù[Ü™\ÜÛœÙWÚÝ[™HŸWKšÝ\œÈŽˆ”[™[HYHZ‹[ˆ[[ˆYÙ[‹ˆ‹˜ÛÜÝŽˆ’ÛÜÝ[™œ™ZKˆ‹œ™YÚ\Ý˜][ÛˆŽˆ•[Y›Ûš\ØÚÛÛZÝY\™[‹ˆ‹˜XØÙ\ÜÚXš[]HŽˆ“šXÚ™\Ý0éYÝ8 $Èš]H›Ü˜Xˆ\™œ˜YÙ[‹ˆ‹˜ÚXÚÙYŽˆŒŒ‹LLKLLˆ‹œÛÝ\˜Ù\ÈŽ–ÞÈ\›ŽˆšÎ‹ËÝÝÝË[Y›ÛœÙY[ÛÜ™ÙK™KÏÛØZWÛ[š×ÜÛÝ\˜ÙO[[Ù[Ü™\ÜÛœÙWÚÝ[™H‹›X™[Žˆ“Ù™š^šY[HÙXœÚ]H\ˆ[Y›Û”ÙY[ÛÜ™ÙHŸWK™œ™YHŽYKšÛYUš\Ú]Ž›[WX
KYVË‹‹›™]ÈÙ]
™™›]X\
OO™KšÚ[™
JWKœÛÜ

K
OO™K›ØØ[PÛÛ\\™JX
JKVÞÚY˜Ý\X™[˜XÚ°ïHZXÚZ[œØ[H[™ÙZpçÈšXÚÛÈXÚ[™˜[™Ù[ˆÛÛ˜YÎ–Ø™YÛZ]\˜ÜX[Y›ÛœÙY[ÛÜ™ÙXÚ\ÜØK›ÝN˜[Ù[YZ[™HÙ\Ü°éÚËH[™™\˜][™ÜÞYðé™ÙNÈÙZ[™H[™]šYY[HXYÛ›ÜÙHÙ\ˆ™\›Z][™Ë˜KÚY˜[ØX™[˜XÚpí˜ÚHZ]™[X[™[HÜ™XÚ[‹˜YÎ–Ø[Y›ÛœÙY[ÛÜ™ÙX™YÛZ]\˜ÜXK›ÝN˜[Y›Ûš\ØÚH[™ÞXÚÜÛÞšX[HYðé™ÙNÈ\œ™ZXÚ˜\šÙZ][™\Ý0é™YÚÙZ]š]H™Z[H[˜šY]\ˆ°ï™[‹˜KÚY˜[ÜXX™[˜XÚpí˜ÚH™]YHY[œØÚ[ˆÙ[›™[›\›™[‹˜YÎ–Ø™YÛZ]\‹YÜ\[˜Ú\ÜØØ\š]\ØK›ÝN˜Ü\[‹H[™Ù[œÝ[™^Yðé™ÙNÈÛÛšÜ™]H\›Z[™H[™œ™ZYH0é™HÚ[™šXÚYÙ\ÚXÚ\˜KÚY˜[\™\ÝØX™[˜XÚÝXÚHY[œØÚ[ˆZ]0é›XÚ[ˆ[\™\ÜÙ[‹˜YÎ–ØÚ\ÜØ™YÛZ]\‹YÜ\[˜K›ÝN˜YH0ç™\œÚXÚ™\Ý0éYÝÙZ[™H™\Ý[[]H[\™\ÜÙ[™Ü\HÙ\ˆ\™[ˆZÝY[[ˆ]œÝ[™˜KÚY˜š\œÝ]š\Ú]X™[˜XÚ˜]YHZXÚšXÚ[Z[ˆ\™Ù[™ÛÈ[žYÙZ[‹˜YÎ–Ø™YÛZ]\‹YÜ\[˜šØÙ[š[Ü™[˜Ú\ÜØK›ÝN˜œ˜YÙ[ˆÚYH[ˆ[˜šY]\ˆ›Ü˜X‹ØˆZ[ˆ\œÝ\ˆ™\ÝXÚ™YÛZ]]Ù\ˆ›Ü˜™\™Z]]Ù\™[ˆØ[›ŽÈYHÙXœÚ]HZ\Ý]ÙZ[™H™YÛZ][™Ë˜KÚY˜ÛYXX™[˜XÚØ[›ˆYZ[™HÛÚ[™ÈØ][H™\›\ÜÙ[‹˜YÎ–ØšØ›YÙXÜXÜÜ^˜ÛÙ\œ\˜™\˜][™ØK›ÝN˜\ˆ™Z[HZ[ž™[™[ˆZ[˜YÈ™\Ý0éYÝH]\Ø™\ÝXÚØ[™ØX™[ˆ™XXÚ[‹ˆZ[™H[Y›Ûš\ØÚH\œ™ZXÚ˜\šÙZ]™Y]]]ÙZ[™[ˆ]\Ø™\ÝXÚ˜KÚY˜›ÝYš]X™[˜XÚX™HZ[ˆ[™ÙX›Ý™\ÝXÚZXÚÜX™\ˆšXÚÛÚÙY°ï˜YÎ–Ø™YÛZ]\˜Ú\ÜØ[Y›ÛœÙY[ÛÜ™ÙXK›ÝN˜Z[ˆZ[ž™[™\ˆ[™ÙYZYÛ™]\ˆ™\ÝXÚØÚYpçÝ[™\™HYðé™ÙHšXÚ]\ÎÈZ[™H\ÜÙ[™H[\›˜]]™HØ[›ˆ\ˆ™]ÙZ[YÙH[˜šY]\ˆÛ0é™[‹˜KÚY˜ÛÜšØX™[˜XÚš[ˆ™\YœÝ0éYÈ[™°ïHZXÚ›Ý™[HZ[œØ[K˜YÎ–Ø™YÛZ]\˜Ú\ÜØ[Y›ÛœÙY[ÛÜ™ÙXK›ÝN˜Z[ˆÜ^šX[\ÚY\\È™\™ÙYÜ™™\ˆ\˜™Z]Ü]˜[™ÙX›Ý\Ý[ˆY\Ù\ˆ0ç™\œÚXÚšXÚ™\Ý0éYÝ˜KÚY˜Ø\™XX™[˜XÚ›YÙHZ[™[ˆ[™ÙZ0íœšYÙ[ˆ[™X™HØ][H›ØÚÛÞšX[HÛÛZÝK˜YÎ–Ø›YÙXÚ\ÜØÜÜ^˜K›ÝN˜\Ý0é™YÚÙZ][\Ý[™ÜØ[™ÙX›ÝH[™ZÝY[HÜ\[ˆš]H\™ZÝ\™œ˜YÙ[‹˜KÚY˜Ú[™ÛK\\™[X™[˜XÚš[ˆ[Z[™\žšYZ[™˜YÎ–Ø˜[Z[YXÚ\ÜØÛÞšX[K›ÝN˜YHZ[°éÙHšY][ˆÜšY[Y\[™ÈH˜[Z[YH[™™\˜][™ÎÈÙZ[ˆ™\Ý[[]\ˆÜ\[œ]ˆÚ\™YÙ\ØYÝ˜KÚY˜™]ØX™[˜XÚš[ˆ™]H[ˆ™\™ÙYÜ™‹˜YÎ–ØØ\š]\Ø™YÛZ]\‹YÜ\[˜Ú\ÜØÛÞšX[K›ÝN˜YH]\ÝØZ\ÝÙZ[ˆ›ÛÝ0é™YÙ\ˆÚ[ÛÛ[Y[œËHÙ\ˆÝYZ[Ù\šXÙK˜KÚY˜™\™X]™[Y[X™[˜XÚX™HZ[™[ˆ˜Z\ÝZ[™[ˆY[œØÚ[ˆ™\›Ü™[‹˜YÎ–ØÜÜ^˜[Y›ÛœÙY[ÛÜ™ÙXÜXK›ÝN˜˜]Y\˜[™ÙX›ÝH[™™\˜][™ÜÞYðé™ÙH[\œØÚZY[ˆÚXÚÈ]Y›˜ZYH[™\›Z[™Hš]H\™ZÝ™Z[H[˜šY]\ˆÛ0é™[‹˜KÚY˜X[X™[˜XÚX™HZ]Ù\Ý[™Z]XÚ[ˆZ[œØÚ°éšÝ[™Ù[‹˜YÎ–ØÛÙ\œ\˜™\˜][™Ø]]˜›YÙXÜXÜÜ^˜K›ÝN˜ÙZ[™HYY^š[š\ØÚHZ[œØÚ0é[™ÎÈ™ZHZÝ]\ˆÙY˜ZˆÙ[[ˆYH[ÙZ\ÙH[H™\™ZXÚ[™K˜KÚY˜YX[š[™ØX™[˜XÚpí˜ÚHZ[™HÚ[››ÛH]Y™ØX™H0ï™\›™ZY[‹˜YÎ–Ø™YÛZ]\‹YÜ\[˜Ù[š[Ü™[˜Ú\ÜØK›ÝN˜°ïˆZÝY[Hœ™Z]Ú[YÙHZ[œØ]›pí™ÛXÚÙZ][ˆ\ÝYHœ™Z]Ú[YÙ[˜YÙ[\ˆ™\™ÙYÜ™ˆZ[ˆ™\ÝZ[™\ˆ\™ZÝ\ˆYØ[™Ë˜KÚY˜›Û[Y\˜X™[˜XÚpí˜ÚHZXÚZ™[˜[]XÚ[™ØYÚY\™[‹˜YÎ–Ø™YÛZ]\‹YÜ\[˜Ù[š[Ü™[˜K›ÝN˜YH]›Ü›H™\›Z][šXÚˆZÝY[HZ[œØ]›pí™ÛXÚÙZ][ˆ\™ZÝ™ZH\ˆœ™Z]Ú[YÙ[˜YÙ[\ˆ°ï™[‹˜[šÎžÛX™[˜œ™Z]Ú[YÙ[˜YÙ[\ˆ[X\™ËP™\™ÙYÜ™˜™YŽ˜Î‹ËÝÝÝË™œ™Z]Ú[YÙ[‹XYÙ[\‹X™\™ÙYÜ™‹™KÙœ™Z]Ú[YÙKØÛÛYKX[™]ZÙK\\Ø_KÚY˜ÛÛ˜Ù\›˜X™[˜XÚXXÚHZ\ˆÛÜ™Ù[ˆ[HZ[™[ˆ[™\™[ˆY[œØÚ[‹˜YÎ–ØÜX[Y›ÛœÙY[ÛÜ™ÙXÙ[š[Ü™[˜›YÙXK›ÝN˜™ZHZÝ]\ˆX™[œÙÙY˜ZˆÛÙ›ÜLLŽÈYHÙXœÚ]H\ÝÙZ[ˆÜš\Ù[™Y[œÝ˜KÚY˜›Ù™\ÜÚ[Û˜[X™[˜XÚ™[°íYÙH›Ù™\ÜÚ[Û™[H[\œÝ0ï[™Ë˜YÎ–ØÜX™YÛZ]\˜˜[Z[YXœÜ™\˜ÛÙ›ØœØ]]˜ÛÙ\œ\˜™\˜][™ØÛÞšX[K›ÝN˜ðé[ˆÚYH\Ý0é™YÚÙZ][™]Y›˜ZYX™Y[™Ý[™Ù[ˆ˜XÚ[HÛÛšÜ™][ˆ[›YYÙ[ˆ\™ZÝZ][H[˜šY]\‹˜WNÙ[˜Ý[Ûˆ™
J^Ü™]\›ˆ™š[™
OšYOOYJ_[]˜\ˆYYOO”Ýš[™ÊJK››Ü›X[^™J‘‘
Kœ™\XÙJ×ÑXXÜš]XßKÙÝK
KÓÝÙ\Ø\ÙJ
NÙ[˜Ý[Ûˆ	
Ü]Y\žN™OXÚ[™Xœ™YSÛ›N›HLKÛYSÛ›NœHL_O^ßJ^Û]OTY
JKš[J
KœÜ]
×ÊËÊK™š[\Š›ÛÛX[ŠNÜ™]\›ˆ™™š[\ŠOOŠ]KšÚ[™š[˜ÛY\Ê
JI‰Š[ŸK™œ™YOOOHL
I‰Š\ŸKšÛYUš\Ú]OOHL
I‰šK™]™\žJO”Y
ÙK›˜[YKKœ›ÝšY\‹KœÝ\ÜK˜\™XKK˜Y™\ÜË‹‹™KšÚ[™Kš›Ú[Š
JKš[˜ÛY\Ê
JJ_Y[˜Ý[ÛˆYŠJ^Ü™]\›–Ø[™XËMXKš[˜ÛY\ÊJOÒ™›X\
OO–ÙK›˜[YKKœ›ÝšY\‹KœÝ\ÜK˜\™XK‹‹™KšÚ[™Kš›Ú[Š
JKš›Ú[Š
N˜]˜\ˆ^È‹MÈŽžÙ]N˜LËˆ›Ý™[X™\ˆŒ˜[›Î˜™]YHÛÛZÝH™[°íYÙ[ˆ\œ™ZXÚ˜\™HÜK™Z][™YHpí™ÛXÚÙZ]ÚYY\žZÛÛ[Y[‹ˆY\Ù\ˆ™Z]˜YÈ™\˜š[™]YH›Üš[™[™[ˆ[\[Y[ˆ0ï™\ˆ™\°é™\HÙ[›™[›\›™›Ü›Y[ˆ[™™\œØÚÝ[™[™HÜKÚ™HÚYHH\œÙ]™[‹ˆ\ˆ[\œÝXÚÛÛšÜ™]H[™\›š\ÜÙNÈ\ˆ][\ÝÙZ[™HÝ]\Ý\ØÚ™[YÝH]\ÜØYÙK\ÜÈÙ[›™[›\›™[ˆ]]H°ïˆ[HØÚÚY\šYÙ\ˆÙZH[Èœ°ï\‹˜ÙXÝ[ÛœÎ–ÞÚY˜\ÝÜš\ØÚ\‹]Ø[™[]N˜œ°ï\™H™Y™œ[šÝH[™ÚÝ[Y[Y\\ˆØ[™[\˜YÜ˜\Î–ÞÝ^˜Ø\ÝÝ0é[‹Û™Z\[‹ØY°ê\Ë[ž‹H[™™\™Z[œÛÚØ[H›Ý[ˆÙ[YÙ[šZ][ˆ°ïˆ]Y™[[[™ÚYY\šÙZ™[™H™YÙYÛ[™Ù[‹ˆ\È›Üš[™[™H\ÝÜš\ØÚH™\ž™ZXÚš\È\œØÚYpçÝ^Hš[\‹[ž™ZYÙ[‹™Z][™ÜØ\ZÙ[[™\š[›™\[™Ù[ˆZ][\œØÚYYXÚ[H™[YÜÝ]\Ëˆ™Z\ÜY[ÝÙZ\ÙHÚÝ[Y[Y\\ˆ][œØ]ˆØ[™\ˆÜYÈ[ˆ\ˆ[[ˆÛÝ[œÝ˜pçÙHˆ[ˆœ°ï\™[ˆ™]šYXˆ[š[™\ˆÙYXÚÝ[ˆ\ÝHŒˆ[™\È[œÈŒÎÈYHÜ[™ÙY°ïHÝYZ[™Z][™Èœ‹ˆNH›ÛˆŒŒÈ\š[›™\Zˆ[ÈšXÚYZˆ›Üš[™[™\ÈÙ\ØÚ0éˆÚY\œÜ°ïÚXÚH™]šYXœÙ][ˆ›ZX™[ˆ[HÜšYÚ[˜[][œØ]ˆ\šÙ[›˜˜\‹˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØKÝ^˜Z][H[™HZ[™\ÈÛÛšÜ™][ˆ™]šYXœÈ[°éYHpí™ÛXÚÙZ]Ù\˜YHY\Ù\ÈÚØ[™YÙ[pé0çÚYÈ]Yž\ÝXÚ[‹ˆØˆ°ïˆœ°ï\™HðéÝHZ[ˆÛZXÚÙ\YÙ\ˆ\œØ]ˆ\œ™ZXÚ˜\ˆÝ\™H[™Ù[ÚHÛÛZÝH]›Ûˆ™]›Ù™™[ˆØ\™[‹]\ÜÈÙ\ÛÛ™\[\œÝXÚÙ\™[‹ˆYHØ[[[[™È™[YÝÙY\ˆ°ïˆ[HÚØ[HY\Ù[™[ˆœ°ï\™[ˆYØ[™ÜØ™Y[™Ý[™Ù[ˆ›ØÚZ[™H[Z[šYÙHÙ\ˆ0ï™\ÚYYÙ[™H™\\œØXÚ[™È]]YÙ\ˆZ[œØ[ZÙZ]\˜Ú\™[ˆ™\›\Ý˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØW_KÚY˜ÜÛ[™KZÛÛZÝX]N˜ÜÛ[™H[Ù\Ù[šZ][™ÚYY\šÙZ™[™HÛÛZÝX\˜YÜ˜\Î–ÞÝ^˜›ÜœØÚ[™ÈHØÚØXÚ[ˆÛÞšX[[ˆš[™[™Ù[ˆ™ZYÝ\Ø[[Y[š0é™ÙHÚ\ØÚ[ˆ[0éÛXÚ[ˆ[\˜ZÝ[Û™[‹YÙZ0íœšYÚÙZ]ÙÙY°ï[™ÛÚ™Yš[™[‹ˆ[È™Yœ˜YÝ[™Ù[ˆ[™™\›]YœÙ][ˆ™\˜š[™[ˆÙ[YZ[œØ[H™\˜œ˜XÚH™Z][™œ™Z^™Z]ZÝ]š]0é[ˆZ]Ü°í°çÙ\™\ˆ™^šYZ[™ÜÛ°éKˆ\˜]\È›ÛÝÙZ[™H™\ÝHÝ[™[œ™YÙ[°ïˆZ[ž™[™HY[œØÚ[ˆ[™ÙZ[ˆ0íœXÚ\ˆÚ\šÜØ[ZÙZ]Û˜XÚÙZ\Ë˜™YœÎ–ØØÚØXÚZÛÛZÝXœ™][™ØÚY™Z]KÚ[™˜›ÜœØÚ[™ØKÝ^˜Z[ˆÚ]œ]ˆ™X™[ˆ[™\™[ˆY[œØÚ[ˆ\Ý[°éÚÝZ[™H]Y™[[Ûpí™ÛXÚÙZ]ˆ™YÙ[pé0çÚYÙH0å™™›[™ËÙ[YZ[œØ[YH0éYÚÙZ][ˆ[™Z[™H[œÜ™XÚ˜\™HØ\ÝÙX™[™H\œÛÛˆðí››™[ˆ[ÈÙ\Ý[[™ÜÝ›ÜœØÚ0éÙHÙ[YÙ[šZ][ˆ[HÙ\Ü°éÚØÚY™™[‹ˆ°ïˆYH0íœXÚH[\œÝXÚ[™ÈÚ[™ÜÛ[™HZ[˜ZYHÚ™H™\˜Xœ™Y[™ËYHpí™ÛXÚÙZ][Z[ˆHÛÛ[Y[ˆ[™YHØZœØÚZ[›XÚÙZ]ÚYY\šÛ\ˆ™YÙYÛ[™Ù[ˆÙ]™[›H\™˜\ÜÙ[‹˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØW_KÚY˜ÛÜÝ[˜]N˜ÛÜÝ[ˆ[™Ú\ØÚYXÚHYØ[™ÜÚ0ï™[˜\˜YÜ˜\Î–ÞÝ^˜YH[H›Ú™ZÝÚÝ[Y[Y\H^\\ÙHHZ[œØ[ZÙZ][™\›]]™\ØÚ™ZXš[˜[žšY[H™[˜XÚZ[YÝ[™È[™Z[™Ù\ØÚ°éšÝHZ[X™H[ÈZ]Z[˜[™\ˆ™\˜[™[™HX™[œØ™Y[™Ý[™Ù[‹ˆZ[ˆÝ]\Ý\ØÚ\ˆ\Ø[[Y[š[™È\›]XÙZ[™H\ØÚ™ZX[™È[ˆ™YH\œÛÛˆZ]Ù\š[™Ù[HZ[šÛÛ[Y[‹˜™YœÎ–Ø\›]]KÚ[™˜›ÜœØÚ[™ØKÝ^˜Z[š]Z[™\Ý™\ž™Z‹ÜZ\Ù[‹H[™Ù]°éšÙ\™Z\ÙKZ]ÛYYØ™Z]°éÙKÝ\œÙÙX°ï™[ˆ[™˜ZÛÜÝ[ˆÚ[™Ù]™[›HÛÜÝ[‹ˆ°ïˆ™YÙ[pé0çÚYÙH™\ÝXÚH°éYHÚYY\šÙZ™[™HÙ\Ø[]™[\Ý[™ËˆØˆZ[ˆÛÛšÜ™]\ˆÜ™^˜Z˜\ˆ\Ý\Ý[š[™ZÝY[\ˆ™Z\ÙH[™œ™Z]Ú[YÙ\ˆ°ïÚÛY[[™Ù[ˆH°ï™[‹ˆ\ÈYYÝY\ˆÙZ[™H›ÛÝ0é™YÙH™\™ÙYÜ™™\ˆ™Z\ËH[™YØ[™Üðï™\œÚXÚ›Ü‹˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØW_KÚY˜ÙY™™[XÚ\‹\˜][X]N˜Ù\ØÚ0éKZ[šØ]YœÜÝ˜pçÙ[ˆ[™0í™™™[XÚH]Y™[[ÛÜX\˜YÜ˜\Î–ÞÝ^˜YH[]XÚHÙXšY]Ø™\ØÚ™ZX[™È[H™[[H™\™ÙYÜ™ˆ™[›YHØÚYpçÝ[™Èœ°ï\™\ˆØ\œÝYTÝ[™ÜH[™[\™Ù[]H›0éÚ[ˆ[È[ÚXÚÛ[™ÜØ[›0éÜÙKˆ\È’TÑKQÙXšY]ÛÛ[\ˆ[™\™[H™YÙYÛ[™ËÝ[\ˆ[™œ™Z^™Z]Ý0éšÙ[‹ˆY\ÙHÚÝ[Y[Y\[ˆ™\°é™\[™Ù[ˆÚ[™ÙZ[™H°é[™Èðé]XÚ\ˆ™\›Ü™[™\ˆ™Y™œ[šÝK˜™YœÎ–ØÚ\ØÚ[‹\š\ÙXKÚ[™˜[]XÚKÝ^˜°ïˆZ[™[ˆ™[\Ý˜\™[ˆ™\™ÛZXÚÚ[™Ú]™Ù[YÙ[šZ][‹Ù]\œØÚ]‹0í™™™[XÚYðé™ÛXÚH[›™[œ°é[YKÚ[][‹˜\œšY\™Yœ™ZZZ][™\œ™ZXÚ˜\™H0å™™›[™ÜÞ™Z][ˆ›ÜˆÜH\™˜\ÜÙ[‹ˆZ[™H›ðçÙHØ\H›ÛˆÙX°éY[ˆØYÝ›ØÚšXÚØˆÜÙ\Ü°éÚHÚ[ÛÛ[Y[ˆÚ[™ˆØˆY\ÙH›Ü˜]\ÜÙ][™Ù[ˆ[ˆ[[ˆ™\™ÙYÜ™™\ˆÝYZ[[ˆ]\Ü™ZXÚ[‹›ZXZ[™HH[\œÝXÚ[™Hœ˜YÙK˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØW_KÚY˜X™[œÜÚ]X][Û™[˜]N˜[\œØÚYYXÚHX™[œÜÚ]X][Û™[ˆ[™\œðí››XÚH0ï™[˜\˜YÜ˜\Î–ÞÝ^˜Ù\ˆ[Z[ˆÛÛ[][™ÙZ[ˆ›Üš[™[™\È™]Ù\šÈ]™[ˆØ[›‹™[°íYÝ™\œÝ0é™XÚH[™›Ü›X][Ûˆ[H\œÝ[ˆ™\ÝXÚˆ\Ù\˜œÞ™Z][‹ÛÜ™ÙX\˜™Z]™\™°ïØ˜\™\ÈZ[šÛÛ[Y[‹Z[ˆÝY™[›ÜÙ\ˆÙYÈ[™ÙYZYÛ™]H™\šÙZœÝ™\˜š[™[™Ù[ˆÚ[™ÛÛšÜ™]H°ï›Y\šÛX[KˆX™[œØ[\‹\šÝ[™Ù\ˆ™Z[™\[™È\šÛ0é™[ˆšXÚ]\ØÚ[Øˆ™[X[™ÛÛZÝHÝXÚÙ\ˆØÚÚY\šYÚÙZ][ˆ\›X˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØKÝ^˜Z[™H0íœXÚH\šX[™ÈÛÛHZ\ˆÙYÙHZ][Øš[]0éÚ[™[‹Yðé™ÛXÚHÚ[][‹ZKH[™Ú]›pí™ÛXÚÙZ][‹™\œÝ0é™XÚH[ÙZ\ÙHÛÝÚYHX™[™H[™ÛØÚ[™[™™Z][ˆ°ï™[‹ˆœ™Z]Ú[YÙHÙ\Ü°éÚHZ]Y[œØÚ[ˆ™\œØÚYY[™\ˆX™[œÛYÙ[ˆpïÜÙ[ˆ]XÚ\œÛÛ™[ˆZ[˜™^šYZ[‹YHš\Ú\ˆÙZ[™H[™ÙX›ÝH™\ÝXÚ[‹ˆZ[ˆ]\ÜØÚYpçÛXÚ[\ˆÝ[[YðéÝ[ˆ\šØ™[™\È\Z[\™˜\ÜÝY\ÙHYØ[™ÜÚ0ï™[ˆšXÚ˜™YœÎ–×KÚ[™˜˜^\ØW_KÚY˜YÚ][]N˜YÚ][HÛÛZÝH[™\œðí››XÚH™YÙYÛ[™Ù[˜\˜YÜ˜\Î–ÞÝ^˜YÚ][HÛÛ[][šZØ][ÛˆØ[›ˆ\ˆ[™›Ü›X][Û‹\›Z[˜XœÝ[[][™È[™ÛÛZÝ›YÙHÙ[]Ù\™[‹ˆ\ˆYØ[™ÈÙ]Z[ˆÙYZYÛ™]\ÈÙ\°é™\˜š[™[™È[™™YY[›pí™ÛXÚÙZ][ˆ›Ü˜]\ËˆÙ\ˆZ[™[ˆ™Y™œ[šÝ]\ÜØÚYpçÛXÚÛ›[™H[šðï™YÝÝ[Y\ÙH›Ü˜]\ÜÙ][™Ù[ˆ]XÚ°ïˆ[ˆ\œÝÛÛZÝˆZ[™H\ðé›XÚH[˜[ÙÙH™ZØ[›XXÚ[™È\Ý\Ú[ˆZ[ˆ˜ZÝ\ØÚ\ˆ›ÜœØÚYË˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØKÝ^˜Z[ˆÛ›[™ZÛÛZÝ[™Z[ˆ™YÙ[pé0çÚYÙ\È\œðí››XÚ\È™Y™™[ˆÚ[™[\œØÚYYXÚHÛÛZÝ›Ü›Y[‹ˆY\Ù\ˆ™Z]˜YÈ™Z]\]ÙY\‹\ÜÈÛÞšX[H™]Ù\šÙHÙ[™\™[\œðí››XÚH™^šYZ[™Ù[ˆ™\™°é™Ù[‹›ØÚ\ÜÈYÚ][HÛÛZÝH[Z[ˆZ[™H0íœXÚH™YÙYÛ[™ÜÚ[™œ˜\ÝZÝ\ˆ\œÙ]™[‹ˆ™ZY\ÈpïÜÝH[ˆÛÛšÜ™][ˆ][™ÜÙ›Ü›Y[ˆ[™ÙYZYÛ™][ˆ][ˆ[\œÝXÚÙ\™[‹˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØW_KÚY˜[™ÙX›ÝX]N˜›Üš[™[™HÙ™™[™H[™ÙX›ÝH™\°ïÚÜÚXÚYÙ[˜\˜YÜ˜\Î–ÞÝ^˜\Èðíœ˜™\’]\È™\ØÚ™ZXÚXÚ[ÈÙ™™[™[ˆ™YÙYÛ[™ÜÛÜ°ïˆ[HÙ[™\˜][Û™[ˆ[™Ý[\™[‹ˆ\È\Ý\Ú[ˆ]\Ù°ïÚÛXÚ[ˆYH™\Ý[™Ø]Y›˜ZYHZ[žX™^šYZ[‹ˆ]\ÈY\Ù\ˆÙ[œÝ\œÝ[[™È[Z[ˆ›ÛÙ[ˆ›ØÚÙZ[™H]\ÜØYÙ[ˆ0ï™\ˆYH™Z\ÙH™Y\È[™ÙX›ÝËÜÛ[™HZ[˜ZYH[ˆðé]XÚ[ˆ™\˜[œÝ[[™Ù[ˆÙ\ˆYH›ÛÝ0é™YÙH\™°ï[™È[\ˆÛ]\ØÚ[ˆÜš]\šY[‹˜™YœÎ–ØÚ\ØÚ[‹ZÛÙ\˜™\˜KÚ[™˜[]XÚKÝ^˜YH™^š\šÜÝ›Ü›YÙH\ˆØ[šY\[™È[™\ÙZ]\[™È\È°ï™Ù\š]\Ù\È[\›píšH™\ØÚ™ZXX™[™˜[ÈZ[™[ˆÙ[™\˜][ÛœËH[™Ý[\°ï™\™Ü™ZY™[™[ˆÜ[™YH\Ø[[Y[˜\˜™Z]›Ûˆ™^š\šÜØ[]ÝY[ÚXÚÛ[™ÜØ™Z0íœ™KÐQÐH[™°éÙ\™\™Z[‹ˆY\ÙH›Üš[™[™H[™œ˜\ÝZÝ\ˆ\™ˆšXÚ0ï™\™Ø[™Ù[ˆÙ\™[‹ˆ]\Ø˜]\[[™È[™]Y\šY˜XÚÙ]ÚY\Ù[™HšY[\œ™ZXÚ[™ÈÚ[™Ù]™[›H°ï™[‹˜™YœÎ–ØÚ\ØÚ[‹X[\›[ÙZXKÚ[™˜[]XÚKÝ^˜°ïˆ™\™ÙYÜ™ˆ™Z[ˆY\Ù\ˆ[\œÝXÚ[™ÈZ[™H›ÛÝ0é™YÙK˜XÚ[œÙ[™[ˆÜš]\šY[ˆÙ\°ïH™\Ý[™Ø]Y›˜ZYHHÜÛ[™[ˆ™\ÝXÚ[‹[›Y[[™ËZ]ÛYYØÚYÛÛœÝ[^Ø[™È[™]Y™[™[ˆ™Z\Ù[‹ˆZ[™H›0éÚ[™XÚÙ[™H™\œÛÜ™Ý[™ÜÛ0ïÚÙHÚ\™\Ú[ˆY\ˆšXÚ[È™\™Z]È™\›Y\ÜÙ[™\È›ÜœØÚ[™ÜÙ\™ÙX›š\È]\ÙÙYÙX™[‹ˆYH™\›[šÝ[ˆ[œËH[™ÝYZ[™\™ZXÚHšY][ˆ\ðé›XÚHÛÛšÜ™]HYðé™ÙK˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØW_KÚY˜[™[˜]N˜[™[™ÜÛpí™ÛXÚÙZ][ˆ[™Û]\ØÚH›Ü™\[™Ø\˜YÜ˜\Î–ÞÝ^˜]\È[ˆ°ï›Y\šÛX[[ˆ\™ÙX™[ˆÚXÚ˜XÚ›ÛšYZ˜\™H™\˜™\ÜÙ\[™ÜØ[œðé™Nˆ™\›0éÜÛXÚHÙ™™[™H™Z][‹˜\œšY\™Yœ™ZYH°é[YKðïœÝYÙH™\œ›YÝ[™Ë]Y™[[Ú™HÛÛœÝ[^Ø[™Ë[˜[ÙÙH[™›Ü›X][Ûˆ[™[\œÝ0ï[™È™Z[H\œÝ[ˆ™\ÝXÚˆØˆY\ÙHXpçÛ˜ZY[ˆ›ÜˆÜÚ\šÙ[‹]\ÜÈZ]]™[™[ˆ[™š\Ú\ˆšXÚ\œ™ZXÚ[ˆY[œØÚ[ˆ0ï™\œ°ïÙ\™[‹˜™YœÎ–×KÚ[™˜˜^\ØKÝ^˜YH[˜Xš0é™ÚYÙH°ï™Ù\œ]›Ü›H›Ü™\Û]\ØÚZ[™H]Y\šYH0í™™™[XÚHš[˜[žšY\[™È[Ù[YZ[ˆYðé™ÛXÚ\‹Ù[™\˜][Û™[°ï™\™Ü™ZY™[™\ˆ™YÙYÛ[™ÜÜÝ0é[‹ˆY\ÙH›Ü™\[™È[™Z™H™]Ù\[™ÜÚÜš]\šY[ˆÚ[™[HZYÙ[œÝ0é™YÙ[ˆÛ]ZØ™Z]˜YÈÚÝ[Y[Y\ˆ\ÝÜš\ØÚHÚÝ[Y[][Û‹Ú\ÜÙ[œØÚYXÚH[\œÝXÚ[™È[™Û]\ØÚH™]Ù\[™È›ZX™[ˆ[\œØÚYYXÚH[šÝ[Û™[‹˜™YœÎ–×KÚ[™˜Z[›Ü™[™ØW_W__K™^ÈžÚ\ØÚ[‹\š\ÙHŽžØ]]ÜœÎ˜™^š\šÜØ[]™\™ÙYÜ™˜YX\ŽŒŒ‹]N˜ÙXšY]Ù[ÚXÚÛ[™È™[[H™\™ÙYÜ™˜\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÙKØ™\™ÙYÜ™‹Ý[Y[‹ÜÛÞšX[\ËÚ[YÜšY\K\ÝYZ[[ÚXÚÛ[™ËÞ™[[KX™\™ÙYÜ™‹MŒNX›XØ][ÛŽ˜[X\™Ë™KÙ\°ïLËŒLKŒŒ˜Y]Ù˜[]XÚHÙXšY]Ø™\ØÚ™ZX[™Ë°íœ™\œ\ÙHŒŒ¸ $ÌŒŽK˜[Z]][ÛœÎ˜ÙZ[™H›ÛÝ0é™YÙH]˜[X][Ûˆ]]YÙ\ˆ™YÙYÛ[™ÜÛpí™ÛXÚÙZ][‹˜ÚXÚÙY˜Œ‹LLKLLØKžÚ\ØÚ[‹ZÛÙ\˜™\ˆŽžØ]]ÜœÎ˜ðíœ˜™\’]\ØYX\ŽŒŒ‹]N˜™Y™œ[šÝ°ïˆ[HÙ[™\˜][Û™[ˆ[™Ý[\™[˜\›˜Î‹ËÚÛÙ\˜™\š]\Ë™KØX›XØ][ÛŽ˜[˜šY]\š[™›Ü›X][Û‹Ù\°ïLËŒLKŒŒ˜Y]Ù˜Ù[œÝ™\ØÚ™ZX[™È\È™YÙYÛ[™ÜÛÜ\Ë˜[Z]][ÛœÎ˜ÙZ[™H[˜Xš0é™ÚYÙHÚ\šÝ[™ÜÛY\ÜÝ[™ÈÙ\ˆ›ÛÝ0é™YÙHYØ[™ÜÜ°ï[™Ë˜ÚXÚÙY˜Œ‹LLKLLØKžÚ\ØÚ[‹X[\›[ÙZHŽžØ]]ÜœÎ˜™^š\šÜÝ™\œØ[[[[™È™\™ÙYÜ™˜YX\ŽŒŒ‹]N˜Œ‹LLÍˆØ[šY\[™Ë[Ù\›š\ÚY\[™È[™\ÙZ]\[™È\È°ï™Ù\š]\Ù\È[\›píšH8 $ÈØXÚÝ[™\›˜Î‹ËØ‹Z™KØ™\™ÙYÜ™‹ÙØÝ[Y[ËÜØ[šY\[™Ë[[Ù\›š\ÚY\[™Ë][™Y\ÙZ]\[™ËY\ËXY\™Ù\š]\Ù\ËX[\›[ÙZK\ØXÚÝ[™LŒÌŽMŒXX›XØ][ÛŽ˜0å™™™[XÚH™^š\šÜÝ›Ü›YÙKÙ\°ïLËŒLKŒŒ˜Y]Ù˜ÚÝ[Y[][Ûˆ\È]\Ø˜]]›ÜšX™[œË˜[Z]][ÛœÎ˜Z[ˆ›ÜšX™[ˆ\ÝÙZ[ˆ˜XÚÙZ\Èðé]XÚ\ˆ][™ÜÚÜš]\šY[‹˜ÚXÚÙY˜Œ‹LLKLLØ_K™^Ë‹‹—Ù‹‹žY‹‹‹‹‹–‹‹‹”Ù‹‹Ù‹‹•KY^Ë‹‹™‹‹˜™‹‹›™‹‹‹ž‹‹Ù‹‹‘Y‹‹‘NÙ[˜Ý[ÛˆÙŠJ^Û]\™–ÙWNÜ™]\›ˆÖÝš[›Ë™
JKYŠJKÙ
JKÙ
JK‹‹œÙXÝ[ÛœË™›]X\
OO–ÙK]K‹‹™Kœ\˜YÜ˜\Ë›X\
OO™K^
WJWKš›Ú[Š
N˜Y[˜Ý[ÛˆÙŠJ^Ü™]\›ˆ\[ÙˆHOXÝš[™ØYKš[J
OØš]HÙX™[ˆÚYHZ[™[ˆÛÛ[Y[\^Z[‹˜™K›[™ÝŒLØš]Hðïž™[ˆÚYH[ˆ^]Yˆ0í˜ÚÝ[œÈL™ZXÚ[‹˜˜]˜\ˆÙR”ÓÓ‹œ\œÙJÞÈšYŽˆ™\œÝZ[ˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒH‹]HŽˆ‘Z[œØ[ZÙZ]™\œÝZ[ˆ‹™\ØÜš\[ÛˆŽˆ™YÜšY™™K[\œØÚYYXÚH\™˜Z[™Ù[ˆ[™YHX™Ü™[ž[™ÈÚ\ØÚ[ˆZ[œØ[ZÙZ][Z[œÙZ[ˆ[™ÛÞšX[\ˆ\ÛÛ][Û‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆKLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒKŒH‹]HŽˆ•Ø\È™Y]]]Z[œØ[ZÙZ]È‹™\ØÜš\[ÛˆŽˆ‘Yš[š][Ûˆ›ÛˆZ[œØ[ZÙZ]ÈX™Ü™[ž[™È›Ûˆœ™Z]Ú[YÙ[H[Z[œÙZ[ˆ[™ÛÞšX[\ˆ\ÛÛ][Û‹ˆ‹œØÛÜHŽ–È‘Yš[š][Ûˆ›ÛˆZ[œØ[ZÙZ]ÈX™Ü™[ž[™È›Ûˆœ™Z]Ú[YÙ[H[Z[œÙZ[ˆ[™ÛÞšX[\ˆ\ÛÛ][Ûˆ‹‘[[Ý[Û˜[KÛÞšX[H[™^\Ý[žšY[HZ[œØ[ZÙZ]‹•›Ü°ï™\™ÙZ[™KÚYY\šÙZ™[™H[™Ú›Ûš\ØÚHZ[œØ[ZÙZ]‹•[\œØÚYYXÚH[™]šYY[H™Y0ï™›š\ÜÙH˜XÚ°éH[™ÛÛZÝ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒŸKÈšYŽˆKLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒKŒˆ‹]HŽˆ•ÚYH°ïÚXÚZ[œØ[ZÙZ][È‹™\ØÜš\[ÛˆŽˆ‘™Z[™H[[Ý[Û˜[H™\˜[™[šZ]ÈšXÚ^^YÙZ0íœ™[‹ˆ‹œØÛÜHŽ–È‘™Z[™H[[Ý[Û˜[H™\˜[™[šZ]ÈšXÚ^^YÙZ0íœ™[ˆ‹‘Z[œØ[ZÙZ]›ÝˆšY[\ˆ™ZØ[›\ˆ[™[›™\š[ˆ›Ûˆ\™\œØÚY[ˆ‹‘™Z[™H™\˜]Y[œÜ\œÛÛ™[ŽÈ\ÈÙY°ïšXÚÙXœ˜]XÚHÙ\™[ˆ‹‘™Z[™HÙYÙ[œÙZ]YÚÙZ]ÈÙ\Ù[ØÚYXÚH[œÚXÚ˜\šÙZ]‹”ØÚ[H[™ØÚÚY\šYÚÙZ][‹0ï™\ˆZ[œØ[ZÙZ]HÜ™XÚ[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŽKÈšYŽˆKLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒKŒÈ‹]HŽˆ•ÚYH[ÚXÚÙ[ÚXÚZ[œØ[ZÙZ]È‹™\ØÜš\[ÛˆŽˆ‘\œÝH[ž™ZXÚ[ˆ[™°ïÚÞYÈ]\È™^šYZ[™Ù[‹ˆ‹œØÛÜHŽ–È‘\œÝH[ž™ZXÚ[ˆ[™°ïÚÞYÈ]\È™^šYZ[™Ù[ˆ‹•™\°é™\H\Ø\[™Ù[ˆ[™[™ÜÝ›Üˆ\›™]]\ˆX›Z[™È‹”ÚXÚÙYÙ[œÙZ]YÈ™\œÝ0éšÙ[™H°ïÚÞYÜÜ›Þ™\ÜÙH‹“[™Ú°éšYÙH\ÛÛ][Ûˆ[™[\œØÚYYXÚH[™]šYY[H™\›0éY™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍ_KÈšYŽˆKM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒK‹]HŽˆ‘Z[œØ[ZÙZ][ÈÙ\Ù[ØÚYXÚH\˜]\Ù›Ü™\[™È‹™\ØÜš\[ÛˆŽˆ™Y]][™È°ïˆZ[ž™[™H[™ÛÞšX[\È\Ø[[Y[›X™[‹ˆ‹œØÛÜHŽ–È™Y]][™È°ïˆZ[ž™[™H[™ÛÞšX[\È\Ø[[Y[›X™[ˆ‹‘Ù\Ù[ØÚYXÚHZ[X™H[™ÛÞšX[H[™ÛZXÚZ]‹‘Ù\Ù[ØÚYXÚH[™Ú\ØÚYXÚH›ÛÙ[ˆ‹‘Z[œØ[ZÙZ][ÈYZˆ[È™Z[ˆš]˜]H[™Ù[YÙ[šZ]—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽ_WK˜ÛÛ˜Ù\[™HŽŒN™Ü›Ý\ŽˆÚ\ÜÙ[ˆŸKÈšYŽˆ\œØXÚ[ˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒˆ‹]HŽˆ•Ø\[H[ÝZZ[œØ[ZÙZ]È‹™\ØÜš\[ÛˆŽˆ”\œðí››XÚKÛÞšX[H[™Ù\Ù[ØÚYXÚH\œØXÚ[ˆÛÝÚYH™\°é™\[™Ù[ˆ\ˆ™YÙYÛ[™ÜÚÝ[\ˆ[ˆ™\™ÙYÜ™‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆ‹LH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹ŒH‹]HŽˆ”\œðí››XÚH[™Ú\ØÚ[›Y[œØÚXÚH\œØXÚ[ˆ‹™\ØÜš\[ÛˆŽˆ”ØÚÚY\šYÚÙZ][‹™]YHÛÛZÝH]YžX˜]Y[‹[™™Z[™HÙ[›™[›\›™\™˜Z[™Ëˆ‹œØÛÜHŽ–È”ØÚÚY\šYÚÙZ][‹™]YHÛÛZÝH]YžX˜]Y[‹[™™Z[™HÙ[›™[›\›™\™˜Z[™È‹”ÛÞšX[H[œÚXÚ\šZ][™ÜÝ›ÜˆX›Z[™È[™™\˜]Y[œÜ›Ø›[YH‹“™YØ]]™H™^šYZ[™ÜÙ\™˜Z[™Ù[‹X[™Ù[™HÙYÙ[œÙZ]YÚÙZ]™Z[™H[[Ý[Û˜[H°éH‹’ÛÛ™›ZÝH[™ÛÛZÝX˜œ°ïÚNÈ™Z[™HÚYY\šÛH™YÙYÛ[™Ù[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽL_KÈšYŽˆ‹Lˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹Œˆ‹]HŽˆ•™\°é™\[™Ù[ˆ[H\œðí››XÚ[ˆX™[ˆ‹™\ØÜš\[ÛˆŽˆ•[^YË™[›[™ËØÚZY[™ËÙ[™˜]Y\‹ˆ‹œØÛÜHŽ–È•[^YË™[›[™ËØÚZY[™ËÙ[™˜]Y\ˆ‹‘˜[Z[Y[™\°é™\[™Ù[‹[\›œØÚY[™[Z[™\žšYZ[™È‹”ØÚ[ÙXÚÙ[™YÚ[›‹Ñ[™H›Ûˆ]\Øš[[™ËÝY][H[™™\YœÛX™[ˆ‹\˜™Z]ÛÜÚYÚÙZ]\˜™Z]Ý[™°éYÚÙZ][™Z\Ý[™‹‘Ù\Ý[™Z][™[Øš[]0é—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽMßKÈšYŽˆ‹LÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹ŒÈ‹]HŽˆ‘Ù\Ù[ØÚYXÚH[™Ú\ØÚYXÚH\œØXÚ[ˆ‹™\ØÜš\[ÛˆŽˆ\›]]ÛÜÝ[ˆÛÞšX[\ˆZÝ]š]0é[‹ÛÚ™\š0éš\ÜÙKˆ‹œØÛÜHŽ–È\›]]ÛÜÝ[ˆÛÞšX[\ˆZÝ]š]0é[‹ÛÚ™\š0éš\ÜÙH‹‘™Z[™HÛÞšX[H[™œ˜\ÝZÝ\ˆ[™[Øš[]0é‹•Ø[™[›Ûˆ\˜™Z]ËH[™œ™Z^™Z]ÝZÝ\™[‹ØÚXÚ\˜™Z]ÛY[Ù™šXÙH‹‘™Z[™HÛÛœÝ[Yœ™ZYH°é[YK˜\œšY\™[‹\ÚÜš[Z[šY\[™È‹•Ø[™[Ù[YZ[œØÚYXÚ\ˆX™[œÙ›Ü›Y[ŽÈYÚ][H[™[˜[ÙÙHÛÛZÝH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽKÈšYŽˆ‹M‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹‹]HŽˆ•ÚYHX™[ˆÚXÚYHpí™ÛXÚÙZ][ˆ[HÙ[›™[›\›™[ˆ™\°é™\È‹™\ØÜš\[ÛˆŽˆ‘œ°ï\™H™YÙYÛ[™ÜÙ›Ü›Y[‹™\°é™\[™Ù[ˆ[H[YÈ[™œ˜YÙ[ˆH[ˆ›ÛÙ[ˆ™\›Ü™[™\ˆ™Y™œ[šÝKˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆ‹MLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹ŒH‹]HŽˆ‘œ°ï\ˆ0ï›XÚH™YÙYÛ[™ÜÙ›Ü›Y[ˆ‹™\ØÜš\[ÛˆŽˆ’Û™Z\[ˆ[™Ø\ÝÚ\ØÚY[ŽÈØY°ê\ÎÈ™\™Z[™NÈÙ[YZ[™Z0é\Ù\‹ˆ‹œØÛÜHŽ–È’Û™Z\[ˆ[™Ø\ÝÚ\ØÚY[ŽÈØY°ê\ÎÈ™\™Z[™NÈÙ[YZ[™Z0é\Ù\ˆ‹“˜XÚ˜\œØÚYÝ™Y™œÎÈ\˜™Z]ÙÙ[YZ[œØÚY[ŽÈÜ™™Ù[YZ[œØÚY[ˆ‹”ÜÛ[™H™YÙYÛ[™Ù[ˆ[H0í™™™[XÚ[ˆ˜][H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽÌŸKÈšYŽˆ‹MLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹Œˆ‹]HŽˆ•™\°é™\[™Ù[ˆ\ˆ™YÙYÛ[™ÜÚÝ[\ˆ‹™\ØÜš\[ÛˆŽˆ”ØÚYpçÝ[™Ù[‹[[][™ËÙpé™\H0å™™›[™ÜÞ™Z][ˆ[™™\ÝXÚÙÙ]ÛÚšZ][‹ˆ‹œØÛÜHŽ–È”ØÚYpçÝ[™Ù[‹[[][™ËÙpé™\H0å™™›[™ÜÞ™Z][ˆ[™™\ÝXÚÙÙ]ÛÚšZ][ˆ‹’ÛÜÝ[ˆ[™YØ[™ÜÚ0ï™[ŽÈYÚ][\ÚY\[™È‹“Ü™Ø[š\ÚY\HÝ]ÜÛ[™H™Y™™[ŽÈZ]ÛYYØÚY[ˆ[™[›Y[[™Ù[ˆ‹•Ø[™[\ˆÛÚœ]X\Y\™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽÍŸKÈšYŽˆ‹MLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹ŒÈ‹]HŽˆ•Ù[ÚH›ÛÙ[ˆØ[›ˆ\ˆ™\›\Ý™\˜]]\ˆ™YÙYÛ[™ÜÛÜHX™[È‹™\ØÜš\[ÛˆŽˆ•™\›\Ý›ÛˆÛÛZÝ›Ý][™[ˆ[™ÜÛ[™[ˆÙ\Ü°éÚ[‹ˆ‹œØÛÜHŽ–È•™\›\Ý›ÛˆÛÛZÝ›Ý][™[ˆ[™ÜÛ[™[ˆÙ\Ü°éÚ[ˆ‹]Y˜˜]H™]Y\ˆ™ZØ[›ØÚY[ˆ[™[™›Ü›Y[\ˆ[œÛ™]Ù\šÙH‹•[\œØÚYYHÚ\ØÚ[ˆÙ[™\˜][Û™[ˆ[™Ù[›™[›\›™Ù]ÛÚšZ][ˆ‹•Ú\ÜÙ[œØÚYXÚ\ˆ›ÜœØÚ[™ÜÜÝ[™[™Ù™™[™HÚØ[Hœ˜YÙ[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŽ_WK˜ÛÛ˜Ù\[™HŽÌKœ™[]YŽ–ÈLMH—_KÈšYŽˆ‹MH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹H‹]HŽˆ•™\œØÚÝ[™[™H™YÙYÛ[™ÜÛÜH[ˆ™\™ÙYÜ™ˆ‹™\ØÜš\[ÛˆŽˆ\[ˆœ°ï\™\ˆ™Y™œ[šÝKZ™HÝYZ[™^›ÙÙ[™HÚÝ[Y[][Ûˆ[™YH[\œÝXÚ[™È\ÝÜš\ØÚ\ˆ™\°é™\[™Ù[‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆ‹MKLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹KŒH‹]HŽˆ‘Z[X[YÙHØ\ÝÚ\ØÚY[ˆ[™Û™Z\[ˆ‹™\ØÜš\[ÛˆŽˆ‘Z[ž™[™\ž™ZXÚš\ÎÈ˜[YNÈ\ÝÜš\ØÚH[œØÚšYÈ™]šYXœÞ™Z]˜][Kˆ‹œØÛÜHŽ–È‘Z[ž™[™\ž™ZXÚš\ÎÈ˜[YNÈ\ÝÜš\ØÚH[œØÚšYÈ™]šYXœÞ™Z]˜][H‹™[YÝHØÚYpçÝ[™ÈÙ\ˆ][™Üðé™\[™ÎÈÚÝ[Y[Y\HÜ°ï™H‹‘œ°ï\™HÛÞšX[H[šÝ[ÛŽÈ]Y[[‹›ÝÜË\š[›™\[™Ù[ŽÈ]]YÙH][™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŽKœÚ\™YÛÛXÝ[ÛˆŽˆš\ÝÜš\ØÚKX™YÙYÛ[™ÜÛÜHŸKÈšYŽˆ‹MKLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹KŒˆ‹]HŽˆ‘Z[X[YÙHØY°ê\È[™Ø\Ý›Û›ÛZ\ØÚH™Y™œ[šÝH‹™\ØÜš\[ÛˆŽˆ•™\™ÛZXÚ˜\™H\ÝÜš\ØÚHÚÝ[Y[][Û‹™]šYXœÙ›Ü›H[™™\ÝXÚ\œØÚYˆ‹œØÛÜHŽ–È•™\™ÛZXÚ˜\™H\ÝÜš\ØÚHÚÝ[Y[][Û‹™]šYXœÙ›Ü›H[™™\ÝXÚ\œØÚY—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŽLËœÚ\™YÛÛXÝ[ÛˆŽˆš\ÝÜš\ØÚKX™YÙYÛ[™ÜÛÜHŸKÈšYŽˆ‹MKLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹KŒÈ‹]HŽˆ‘œ°ï\™H™\™Z[œÛÚØ[H[™Ù[YZ[œØÚYÜ°é[YH‹™\ØÜš\[ÛˆŽˆ•™\™Z[œÙØ\ÝÝ0é[‹™\™Z[œÚZ[YKÙ[YZ[œØÚYXÚÙ[]H°é[YK][™ÜÝØ[™[ˆ‹œØÛÜHŽ–È•™\™Z[œÙØ\ÝÝ0é[‹™\™Z[œÚZ[YKÙ[YZ[œØÚYXÚÙ[]H°é[YK][™ÜÝØ[™[—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŽMKœÚ\™YÛÛXÝ[ÛˆŽˆš\ÝÜš\ØÚKX™YÙYÛ[™ÜÛÜHŸKÈšYŽˆ‹MKM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹K‹]HŽˆ‘Z[X[YÙHÙ[YZ[™Z0é\Ù\ˆ[™ÙZ]\™H™Y™œ[šÝH‹™\ØÜš\[ÛˆŽˆ‘Ù[YZ[™\°é[YK˜XÚ˜\œØÚYÝ™Y™œËÙ[YZ[œØÚYÜ°é[YH[ˆÛÚ˜[›YÙ[‹[™\™H™[YÝHÜKˆ‹œØÛÜHŽ–È‘Ù[YZ[™\°é[YK˜XÚ˜\œØÚYÝ™Y™œËÙ[YZ[œØÚYÜ°é[YH[ˆÛÚ˜[›YÙ[‹[™\™H™[YÝHÜH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŽMËœÚ\™YÛÛXÝ[ÛˆŽˆš\ÝÜš\ØÚKX™YÙYÛ[™ÜÛÜHŸKÈšYŽˆ‹MKMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹KH‹]HŽˆ‘Z[X[YÙH™YÙYÛ[™ÜÛÜH˜XÚÝYZ[[ˆ‹™\ØÜš\[ÛˆŽˆ™\™ÙYÜ™‹Úœ°ïÙÙK™]X[\›píšK™\™ÙYÜ™‹UÙ\ÝÙZ]\™HÝYZ[KšY\‹H[™X\œØÚ[™Kˆ‹œØÛÜHŽ–È™\™ÙYÜ™‹Úœ°ïÙÙK™]X[\›píšK™\™ÙYÜ™‹UÙ\ÝÙZ]\™HÝYZ[KšY\‹H[™X\œØÚ[™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŽNKœÚ\™YÛÛXÝ[ÛˆŽˆš\ÝÜš\ØÚKX™YÙYÛ[™ÜÛÜH‹œ™[]YŽ–ÈLLˆ—_KÈšYŽˆ‹MKMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹Kˆ‹]HŽˆ’\ÝÜš\ØÚH[ÚXÚÛ[™È[\œÝXÚ[ˆ‹™\ØÜš\[ÛˆŽˆ‘œ°ï\™HÝ[™ÜH[™™[YÝHØÚYpçÝ[™Ù[ŽÈ™Z][šÝ[™[[][™Ëˆ‹œØÛÜHŽ–È‘œ°ï\™HÝ[™ÜH[™™[YÝHØÚYpçÝ[™Ù[ŽÈ™Z][šÝ[™[[][™È‹“™]H[Ý[™[™HÜNÈ™\°é™\[™Ù[ˆÛÞšX[\ˆ[šÝ[Û™[ˆ‹“˜XÚÙZ\Ø˜\™H™\œÛÜ™Ý[™ÜÛ0ïÚÙ[ˆ[™pí™ÛXÚH\Ø[[Y[š0é™ÙHZ]Z[œØ[ZÙZ]—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLKœÚ\™YÛÛXÝ[ÛˆŽˆš\ÝÜš\ØÚKX™YÙYÛ[™ÜÛÜHŸWK˜ÛÛ˜Ù\[™HŽŽËœÚ\™YÛÛXÝ[ÛˆŽˆš\ÝÜš\ØÚKX™YÙYÛ[™ÜÛÜH‹œ™[]YŽ–ÈLMˆ‹LLˆ—_KÈšYŽˆ‹Mˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹ˆ‹]HŽˆ•\œØXÚ[ˆÚ\ÜÙ[œØÚYXÚ[\œÝXÚ[ˆ‹™\ØÜš\[ÛˆŽˆ’[™]šYY[H[™ÝZÝ\™[H˜ZÝÜ™[‹ˆ‹œØÛÜHŽ–È’[™]šYY[H[™ÝZÝ\™[H˜ZÝÜ™[ˆ‹’ÛÜœ™[][ÛˆœËˆØ]\Ø[]0é‹‘›ÜœØÚ[™ÈH™YÙYÛ[™ÜÛÜ[ˆ[™[™œ˜\ÝZÝ\ˆ‹•[\œØÚYYHÚ\ØÚ[ˆÜ\[ŽÈ[™Ùœš\ÝYÙ\ˆØ[™[È›ÜœØÚ[™ÜÙÜ™[ž™[ˆ‹“Ù™™[™H›ÜœØÚ[™ÜÙœ˜YÙ[ˆ°ïˆ™\™ÙYÜ™ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLŸKÈšYŽˆ‹MÈ‹]HŽˆ•Ø\[H\Ý\È]]HØÚÚY\šYË™]YHY[œØÚ[ˆÙ[›™[ž[\›™[È‹™\ØÜš\[ÛˆŽˆ™YÙYÛ[™ÜÛÜKÛÜÝ[‹0í™™™[XÚ\ˆ˜][H[™\œðí››XÚHYðé™ÙNˆ›ÜœØÚ[™Ë™\™ÙYÜ™™\ˆ]Y[[ˆ[™Ù™™[™H™\Ý[™Ùœ˜YÙ[‹ˆ‹˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×KœØÛÜHŽ–È‘œ°ï\™H[™]]YÙH™YÙYÛ[™ÜÛÜH˜XÚ[œÙ[™[ˆYØ[™ÜÚÜš]\šY[ˆ™\™ÛZXÚ[‹ˆ‹’ÛÜÝ[‹[Øš[]0é™Z][™YÚ][HYðé™ÙHÙ]™[›[\œÝXÚ[‹ˆ‹™\ÝZ[™H[™ÙX›ÝH[™0íœXÚH›ÜœØÚ[™ÜÙœ˜YÙ[ˆÚXÚ˜\ˆXXÚ[‹ˆ—Kœ™[]YŽ–È‹M‹‹MH‹ËMH‹LÈ‹LMˆ—K˜ÛÛ˜Ù\[X™\ˆŽˆŒ‹ÈŸWK˜ÛÛ˜Ù\[™HŽË™Ü›Ý\ŽˆÚ\ÜÙ[ˆŸKÈšYŽˆšÙ[›™[›\›™[ˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒÈ‹]HŽˆ•Ø\È\ÝZ[ˆÙ\Ý[™\ÈÙ[›™[›\›™[È‹™\ØÜš\[ÛˆŽˆ”™\ÜZÝ›ÛÛÛZÝHÛ°ï™[‹™\˜]Y[ˆ[ÚXÚÙ[‹œ™][™ØÚY[ˆ›YÙ[ˆ[™\œðí››XÚHÜ™[ž™[ˆ™XXÚ[‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆËLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒËŒH‹]HŽˆ•Ø\È™Y]]]Ù\Ý[™\ÈÙ[›™[›\›™[È‹™\ØÜš\[ÛˆŽˆ”ÞXÚÛÙÚ\ØÚH[™ÛÞšX[ÞXÚÛÙÚ\ØÚHÜ[™YÙ[‹ˆ‹œØÛÜHŽ–È”ÞXÚÛÙÚ\ØÚH[™ÛÞšX[ÞXÚÛÙÚ\ØÚHÜ[™YÙ[ˆ‹‘ÙYÙ[œÙZ]YÙ\È[\™\ÜÙK™\ÜZÝ™\˜]Y[‹œ™Z]Ú[YÚÙZ]‹’ÛÛ[][šZØ][Û‹\œðí››XÚHÜ™[ž™[‹Z[™\›™Z[XÚÙZ]ÛÛZÝ™Y0ï™›š\ÜÙH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLMßKÈšYŽˆËLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒËŒˆ‹]HŽˆ•ÚYH™YÚ[›Z[ˆÛÛZÝÈ‹™\ØÜš\[ÛˆŽˆ‘œ™[YH[œÜ™XÚ[‹Ù\Ü°éÚØ[›0éÜÙH\šÙ[›™[‹Ù\Ü°éÚH™YÚ[›™[‹ˆ‹œØÛÜHŽ–È‘œ™[YH[œÜ™XÚ[‹Ù\Ü°éÚØ[›0éÜÙH\šÙ[›™[‹Ù\Ü°éÚH™YÚ[›™[ˆ‹–Z0íœ™[‹œ˜YÙ[ˆÝ[[‹[\™\ÜÙ[ˆ[XÚÙ[ˆ‹’ÛÛZÝH[ˆÜ\[ˆ[™™\˜[œÝ[[™Ù[‹ØÚ0ïÚ\›šZ]ÛÛ[][šZØ][ÛœÜÝ[H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLŒ_KÈšYŽˆËLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒËŒÈ‹]HŽˆ•›ÛH\œÝ[ˆÙ\Ü°éÚ\ˆ™ZØ[›ØÚY‹™\ØÜš\[ÛˆŽˆ•ÚYY\˜]Y›˜ZYH›ÛˆÛÛZÝ[ˆ[™ÚYY\šÙZ™[™H™YÙYÛ[™Ù[‹ˆ‹œØÛÜHŽ–È•ÚYY\˜]Y›˜ZYH›ÛˆÛÛZÝ[ˆ[™ÚYY\šÙZ™[™H™YÙYÛ[™Ù[ˆ‹’[\™\ÜÙH\šÙ[›™[‹™\›0éÜÛXÚÙZ]Ù[YZ[œØ[YHZÝ]š]0é[‹\Ø\[™Ù[ˆ‹’ÛÛZÝ[[ˆÚ™H]Y™š[™ÛXÚÙZ]—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒL_KÈšYŽˆËM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒË‹]HŽˆ•›Ûˆ™ZØ[›ØÚY[ˆHœ™][™ØÚY[ˆ‹™\ØÜš\[ÛˆŽˆ•™\˜]Y[‹ÙYÙ[œÙZ]YÚÙZ]°éKÙ[YZ[œØ[YH\™˜Z[™Ù[‹ˆ‹œØÛÜHŽ–È•™\˜]Y[‹ÙYÙ[œÙZ]YÚÙZ]°éKÙ[YZ[œØ[YH\™˜Z[™Ù[ˆ‹’[™H[ˆØÚÚY\šYÙ[ˆ™Z][‹™^šYZ[™ÜÝ\[‹[™Ùœš\ÝYÙH›YÙH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLŽ_KÈšYŽˆËMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒËH‹]HŽˆ”ØÚÚY\šYÚÙZ][ˆ™Z[HÙ[›™[›\›™[ˆ‹™\ØÜš\[ÛˆŽˆX›Z[™ÜØ[™ÜÝ›Ü™\™˜Z[™Ù[‹[œÚXÚ\šZ][™Ú°éšYÙH\ÛÛ][Û‹ˆ‹œØÛÜHŽ–ÈX›Z[™ÜØ[™ÜÝ›Ü™\™˜Z[™Ù[‹[œÚXÚ\šZ][™Ú°éšYÙH\ÛÛ][Ûˆ‹•[\œØÚYYXÚH\Ø\[™Ù[‹Z\ÜÝ™\œÝ0é™š\ÜÙKZ[œÙZ]YÙH™[pï[™Ù[‹Ü\[˜[œØÚ\ÜÈ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLÌŸKÈšYŽˆËMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒËˆ‹]HŽˆ‘Ü™[ž™[ˆ[™ÛÛ™›ZÝH‹™\ØÜš\[ÛˆŽˆX›Z[™ÈZÞ™\Y\™[‹Ü™[ž™[ˆ™\ÜZÝY\™[‹™Z[™\È[\™\ÜÙKˆ‹œØÛÜHŽ–ÈX›Z[™ÈZÞ™\Y\™[‹Ü™[ž™[ˆ™\ÜZÝY\™[‹™Z[™\È[\™\ÜÙH‹’ÛÛ™›ZÝÙ\Ü°éÚK™\ÜZÝ›ÛH\Ý[ž‹[™Ù\Ý[™H]\Ý\‹ØÚ]ˆ›Üˆ0ç™\™ÜšY™™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLÍ_KÈšYŽˆËMÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒËÈ‹]HŽˆ•Ú\ÜÙ[œØÚYXÚH\šÙ[›š\ÜÙH[™˜ZÝ\ØÚH0ç[™Ù[ˆ‹™\ØÜš\[ÛˆŽˆ”ÛÞšX[ÞXÚÛÙÚYKÛÛ[][šZØ][ÛœÝÚ\ÜÙ[œØÚYœ™][™ØÚYËKÐš[™[™ÜÙ›ÜœØÚ[™Ëˆ‹œØÛÜHŽ–È”ÛÞšX[ÞXÚÛÙÚYKÛÛ[][šZØ][ÛœÝÚ\ÜÙ[œØÚYœ™][™ØÚYËKÐš[™[™ÜÙ›ÜœØÚ[™È‹•[\œÝXÚH™Y[™Ý[™Ù[‹œ™Z]Ú[YÙH˜ZÝ\ØÚH0ç[™Ù[‹Ü™[ž™[ˆ[Ù[YZ[™\ˆ[\™Z[™Ù[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLÎKÈšYŽˆËN‹˜ÛÛ˜Ù\[X™\ˆŽˆŒËŽ‹]HŽˆ‘\™˜Z[™Ù[ˆ[™Ý\ž™HÛÛ[Y[\™H‹™\ØÜš\[ÛˆŽˆ‘ZYÙ[™\ˆ[Y[˜™^›ÙÙ[™\ˆÛÛ[Y[\˜™\™ZXÚˆX^ˆL™ZXÚ[ˆ›ÈÛÛ[Y[\‹[Ù\˜][Ûˆ›Üˆ™\°í™™™[XÚ[™Ëˆ‹œØÛÜHŽ–È‘ZYÙ[™\ˆ[Y[˜™^›ÙÙ[™\ˆÛÛ[Y[\˜™\™ZXÚˆX^ˆL™ZXÚ[ˆ›ÈÛÛ[Y[\‹[Ù\˜][Ûˆ›Üˆ™\°í™™™[XÚ[™È‹–[°éÚÝ\ˆÛÛž™\[Û™[ÛÚØ[\È\Ý›Ü›][\‹ÙZ[™H0í™™™[XÚHÜZXÚ\[™ÈÙ\ˆœ™Z\ØÚ[[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒMKœ[›™YÛÛ[Y[X^[™ÝŽŒLWK˜ÛÛ˜Ù\[™HŽŒLLË™Ü›Ý\ŽˆšÛÛZÝH‹œ[›™YÛÛ[Y[X^[™ÝŽŒLKÈšYŽˆ›X™[œÜÚ]X][Û™[ˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆ‹]HŽˆ‘Z[œØ[ZÙZ][ˆ[\œØÚYYXÚ[ˆX™[œÜ\Ù[ˆ[™X™[œÜÚ]X][Û™[ˆ‹™\ØÜš\[ÛˆŽˆ“X™[œÜ\Ù[‹\œðí››XÚHÚ]X][Û™[‹[\œØÚYYXÚH˜\œšY\™[ˆ[™œ˜YÙ[ˆ\ˆÛÞšX[[ˆZ[X™Kˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒH‹]HŽˆ’Ú[™\ˆ[™YÙ[™XÚH‹™\ØÜš\[ÛˆŽˆ’Ú[™\‹ØÚ0ï\‹YÙ[™XÚNÈØÚ[ÙXÚÙ[[Ø˜š[™È[™]\ÙÜ™[ž[™Ëˆ‹œØÛÜHŽ–È’Ú[™\‹ØÚ0ï\‹YÙ[™XÚNÈØÚ[ÙXÚÙ[[Ø˜š[™È[™]\ÙÜ™[ž[™È‹’YÙ[™Ü\[‹œ™Z^™Z]YÚ][HÛÛ[][šZØ][Û‹ÛÞšX[\ˆ°ïÚÞYÈ‹]\Øš[[™ÜËKÐ™\Yœðï™\™ðé™ÙKØÚ[H[™YÙ[™[™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒM_KÈšYŽˆLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒˆ‹]HŽˆ’[™ÙH\ØXÚÙ[™H‹™\ØÜš\[ÛˆŽˆ]\Øš[[™ËÝY][K™\YœÙZ[œÝYYËZYÙ[™H]\Ú[K[^YËˆ‹œØÛÜHŽ–È]\Øš[[™ËÝY][K™\YœÙZ[œÝYYËZYÙ[™H]\Ú[K[^YÈ‹•™\›\Ý›Ûˆœ™][™\ÚÜ™Z\Ù[‹\Ø\[™Ù[‹™^šYZ[™ÜØ]Y˜˜]H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒMLßKÈšYŽˆLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒÈ‹]HŽˆ‘\ØXÚÙ[™H[™\Ù\˜œÛX™[ˆ‹™\ØÜš\[ÛˆŽˆ™\YœÝ0éYÙKØÚXÚ\˜™Z]ÛY[Ù™šXÙKÙ[œÝÝ0é™YÚÙZ]ˆ‹œØÛÜHŽ–È™\YœÝ0éYÙKØÚXÚ\˜™Z]ÛY[Ù™šXÙKÙ[œÝÝ0é™YÚÙZ]‹\˜™Z]ÛÜÚYÚÙZ]\šÜ˜[šÝ[™Ëš[˜[ž™[‹™\Y›XÚ\È[Y™[—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒMMŸKÈšYŽˆM‹˜ÛÛ˜Ù\[X™\ˆŽˆ‹]HŽˆ‘˜[Z[Y[ˆ[™™^šYZ[™Ù[ˆ‹™\ØÜš\[ÛˆŽˆ[Z[›X™[‹[Z[™\žšYZ[™Ëpï\ˆ[™°é\‹[\›œØÚYˆ‹œØÛÜHŽ–È[Z[›X™[‹[Z[™\žšYZ[™Ëpï\ˆ[™°é\‹[\›œØÚY‹”ÛÜ™Ù]™\˜[ÛÜ[™Ë\™\œØÚY[‹™[›[™ËÛÛ™›ZÝKÛÛZÝ™\›\Ý‹“Y[œØÚ[ˆÚ™H˜[Z[pé™H[\œÝ0ï[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒMN_KÈšYŽˆMH‹˜ÛÛ˜Ù\[X™\ˆŽˆH‹]HŽˆ°á\™HY[œØÚ[ˆ‹™\ØÜš\[ÛˆŽˆ”Z\Ý[™™\›\ÝK[\œØ\›]]Z[™Ù\ØÚ°éšÝH[Øš[]0éˆ‹œØÛÜHŽ–È”Z\Ý[™™\›\ÝK[\œØ\›]]Z[™Ù\ØÚ°éšÝH[Øš[]0é‹’ØÚ™]YÝNÈÝ][Û°é™H[™0é\ÛXÚH›YÙNÈYÚ][H˜\œšY\™[ˆ‹‘Ù[™\˜][Û™[°ï™\™Ü™ZY™[™HÛÛZÝH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒMŒßKÈšYŽˆMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆˆ‹]HŽˆ•ÙZ]\™H™\ÛÛ™\™HX™[œÜÚ]X][Û™[ˆ‹™\ØÜš\[ÛˆŽˆ™Z[™\[™Ù[‹Ú›Ûš\ØÚH[™ÞXÚ\ØÚH\šÜ˜[šÝ[™Ù[‹ÝXÚ\šÜ˜[šÝ[™Ù[‹ˆ‹œØÛÜHŽ–È™Z[™\[™Ù[‹Ú›Ûš\ØÚH[™ÞXÚ\ØÚH\šÜ˜[šÝ[™Ù[‹ÝXÚ\šÜ˜[šÝ[™Ù[ˆ‹“ZYÜ˜][Û‹›XÚ™]^^YËÜ˜XÚKÙ\š[™ÙH\ÙKKÔØÚ™ZXšÛÛ\][žˆ‹”]YY\™HY[œØÚ[ŽÈ\›]]ÈÛÚ[™ÜËH[™Ø™XÚÜÚYÚÙZ]‹‘Ù]Ø[›ÛÙ[‹Ý˜YšY˜]Y\ˆ[™YZ™˜XÚ™[\Ý[™Ù[ˆ‹’™]ÙZ[ÈZYÙ[œÝ0é™YÙH™\YY[™È™ZH[Ü™XÚ[™[H[š[—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒMßWK˜ÛÛ˜Ù\[™HŽŒMK™Ü›Ý\ŽˆÚ\ÜÙ[ˆŸKÈšYŽˆ™Ù\Ý[™Z]‹˜ÛÛ˜Ù\[X™\ˆŽˆH‹]HŽˆ‘Z[œØ[ZÙZ][™Ù\Ý[™Z]‹™\ØÜš\[ÛˆŽˆ”ÞXÚ\ØÚH[™ðíœœ\›XÚH\Ø[[Y[š0é™ÙK›YÙKÙ\Ý[™Z]XÚHZ[œØÚ°éšÝ[™Ù[ˆ[™›Ù™\ÜÚ[Û™[H[\œÝ0ï[™Ëˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆKLH‹˜ÛÛ˜Ù\[X™\ˆŽˆKŒH‹]HŽˆ”ÞXÚ\ØÚHÙ\Ý[™Z]‹™\ØÜš\[ÛˆŽˆ‘\™\ÜÚ]™HÞ[\ÛYK[™ÜÝÚ›Ûš\ØÚ\ˆÝ™\ÜËÙ[œÝÙ\ØÚY‹ˆ‹œØÛÜHŽ–È‘\™\ÜÚ]™HÞ[\ÛYK[™ÜÝÚ›Ûš\ØÚ\ˆÝ™\ÜËÙ[œÝÙ\ØÚYˆ‹’Üš\Ù[‹ÝZ^šY[]0é[™›Ù™\ÜÚ[Û™[H[œØ[™ÙX›ÝH‹”ÞXÚÝ\˜\]]\ØÚH[\œÝ0ï[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒMÎKÈšYŽˆKLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆKŒˆ‹]HŽˆ’ðíœœ\›XÚHÙ\Ý[™Z]‹™\ØÜš\[ÛˆŽˆ’\ž‹RÜ™Z\Û]Y‹ØÚY‹Ý™\ÜÜ™XZÝ[Û™[‹Ù\Ý[™Z]Ý™\š[[‹™]ÙYÝ[™Ëˆ‹œØÛÜHŽ–È’\ž‹RÜ™Z\Û]Y‹ØÚY‹Ý™\ÜÜ™XZÝ[Û™[‹Ù\Ý[™Z]Ý™\š[[‹™]ÙYÝ[™È‹Ú›Ûš\ØÚH\šÜ˜[šÝ[™Ù[‹ÛÙÛš]]™HÙ\Ý[™Z][Y[žˆ‹‘›ÜœØÚ[™ÜÜÝ[™HÝ\˜›XÚÙZ][™ÙZ[™HÜ™[ž™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒNŸKÈšYŽˆKLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆKŒÈ‹]HŽˆ‘Ù\Ý[™Z]XÚHZ[œØÚ°éšÝ[™Ù[ˆ[™Z[X™H‹™\ØÜš\[ÛˆŽˆ“[Øš[]0éØÚY\ž‹0íœ‹KÔÙZ™Z[™\[™ËÛÛ[][šZØ][ÛœØ™YZ[°éÚYÝ[™Ù[‹ˆ‹œØÛÜHŽ–È“[Øš[]0éØÚY\ž‹0íœ‹KÔÙZ™Z[™\[™ËÛÛ[][šZØ][ÛœØ™YZ[°éÚYÝ[™Ù[ˆ‹“™]\›Ù]™\™Ù[ž‹ØÚÙ\™KÜÙ[[™HÜ˜[šÚZ][‹™ZXš[]][Û‹Û[šZË[\ÜÝ[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒNŸKÈšYŽˆKM‹˜ÛÛ˜Ù\[X™\ˆŽˆK‹]HŽˆ”›YÙH[™™]™]][™È‹™\ØÜš\[ÛˆŽˆ’0é\ÛXÚH[™Ý][Û°é™H›YÙK[™ÙZ0íœšYÙK[Y[ž‹ˆ‹œØÛÜHŽ–È’0é\ÛXÚH[™Ý][Û°é™H›YÙK[™ÙZ0íœšYÙK[Y[žˆ‹™]™]][™Ë™\ÝXÚÙY[œÝK›YÙ\Ý0ïœ[šÝK™\˜][™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒN_KÈšYŽˆKMH‹˜ÛÛ˜Ù\[X™\ˆŽˆKH‹]HŽˆ“YY^š[š\ØÚH[™›Ù™\ÜÚ[Û™[H[™H‹™\ØÜš\[ÛˆŽˆ’]\ðéžKÞXÚÛÙÚ\ØÚH™\˜][™ËÞXÚÝ\˜\YK˜XÚ0éžKˆ‹œØÛÜHŽ–È’]\ðéžKÞXÚÛÙÚ\ØÚH™\˜][™ËÞXÚÝ\˜\YK˜XÚ0éžH‹”ÛÞšX[™\˜][™ËÜš\Ù[™Y[œÝÝXÚH[™Ù]Ø[[™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒNLŸWK˜ÛÛ˜Ù\[™HŽŒMÍ™Ü›Ý\ŽˆÚ\ÜÙ[ˆŸKÈšYŽˆœÙ[œÝXZÝ]‹]Ù\™[ˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆˆ‹]HŽˆ•Ø\ÈØ[›ˆXÚÙ[œÝÙYÙ[ˆZ[œØ[ZÙZ][È‹™\ØÜš\[ÛˆŽˆ‘\œÝHØÚš]K™]YHÛÛZÝK™YÛZ][™È™Z[H\œÝ[ˆ™\ÝXÚ[™\ˆ[YØ[™ÈZ][0é\ØÚ[™[ˆ\™˜Z[™Ù[‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆ‹LH‹˜ÛÛ˜Ù\[X™\ˆŽˆ‹ŒH‹]HŽˆ‘\œÝHØÚš]H‹™\ØÜš\[ÛˆŽˆ™Y0ï™›š\ÜÙKÛÛZÝpí™ÛXÚÙZ][‹™Y™œ[šÝ]\Ýðé[‹ˆ‹œØÛÜHŽ–È™Y0ï™›š\ÜÙKÛÛZÝpí™ÛXÚÙZ][‹™Y™œ[šÝ]\Ýðé[ˆ‹•›Ü˜™\™Z][™Ë[Z[ˆ[™ÙZ[‹ÛZ[™HšY[H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒKÈšYŽˆ‹Lˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆ‹Œˆ‹]HŽˆ“™]YHÛÛZÝHš[™[ˆ‹™\ØÜš\[ÛˆŽˆ‘œ™Z^™Z]Ò[\™\ÜÙ[‹˜XÚ˜\œØÚYÜÜÝ[\‹š[[™Ëˆ‹œØÛÜHŽ–È‘œ™Z^™Z]Ò[\™\ÜÙ[‹˜XÚ˜\œØÚYÜÜÝ[\‹š[[™È‹‘Z™[˜[]XZ™Z][‹Ü\[‹YÚ][Hpí™ÛXÚÙZ][ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒßKÈšYŽˆ‹LÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆ‹ŒÈ‹]HŽˆ•[\œÝ0ï[™È™Z[H\œÝ[ˆ™\ÝXÚ‹™\ØÜš\[ÛˆŽˆ™YÛZ][™Ë][œØÚY[‹[œÜ™XÚ\™\‹ˆ‹œØÛÜHŽ–È™YÛZ][™Ë][œØÚY[‹[œÜ™XÚ\™\ˆ‹X›]Y‹ÛZ[™HÜ\[‹°ïÚÞYÜÛpí™ÛXÚÙZ][‹[œÚXÚ\šZ]—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒŸKÈšYŽˆ‹M‹˜ÛÛ˜Ù\[X™\ˆŽˆ‹‹]HŽˆ’ÛÛZÝH]Y\šY\š[[ˆ‹™\ØÜš\[ÛˆŽˆ”™YÙ[pé0çÚYÚÙZ]Ù[YZ[œØ[YH[\™\ÜÙ[‹ÙYÙ[œÙZ]YÚÙZ]ˆ‹œØÛÜHŽ–È”™YÙ[pé0çÚYÚÙZ]Ù[YZ[œØ[YH[\™\ÜÙ[‹ÙYÙ[œÙZ]YÚÙZ]‹‘[0é\ØÚ[™Ù[‹™ZØ[›ØÚY[ˆ™\YY™[‹Ü™[ž™[‹™^šYZ[™ÜÜ›YÙH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒ_KÈšYŽˆ‹MH‹˜ÛÛ˜Ù\[X™\ˆŽˆ‹H‹]HŽˆ•Ù[›ˆZ[ˆ\œÝ\ˆ™\œÝXÚšXÚ[šÝ[ÛšY\‹™\ØÜš\[ÛˆŽˆ’ÙZ[ˆ[œØÚ\ÜË™YØ]]™H\™˜Z[™Ù[‹XœØYÙ[‹[œ\ÜÙ[™H[™ÙX›ÝKˆ‹œØÛÜHŽ–È’ÙZ[ˆ[œØÚ\ÜË™YØ]]™H\™˜Z[™Ù[‹XœØYÙ[‹[œ\ÜÙ[™H[™ÙX›ÝH‹[\›˜]]™[ˆ[™›Ù™\ÜÚ[Û™[H[\œÝ0ï[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒLŸWK˜ÛÛ˜Ù\[™HŽŒNM‹™Ü›Ý\ŽˆšÛÛZÝHŸKÈšYŽˆš[™H‹˜ÛÛ˜Ù\[X™\ˆŽˆÈ‹]HŽˆ’[™K™\˜][™È[™[\œÝ0ï[™Èš[™[ˆ‹™\ØÜš\[ÛˆŽˆ“ÜšY[Y\[™È™ZH\ˆÝXÚH˜XÚ™\˜][™ËÛÛZÝ[ˆ[™[\œÝ0ï[™ËˆÛÛšÜ™]H0íœXÚH[œØ[™ÙX›ÝHÙ\™[ˆ›ØÚÙ\°ïˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆËLH‹˜ÛÛ˜Ù\[X™\ˆŽˆËŒH‹]HŽˆ’XÚ°ïHZXÚZ[œØ[H‹™\ØÜš\[ÛˆŽˆ[œÜ™XÚ\™\‹[Y›Û˜[™ÙX›ÝK™\˜][™ËÛÛZÝK™YÙYÛ[™Ë\œÝ\ˆ™\ÝXÚˆ‹œØÛÜHŽ–È[œÜ™XÚ\™\‹[Y›Û˜[™ÙX›ÝK™\˜][™ËÛÛZÝK™YÙYÛ[™Ë\œÝ\ˆ™\ÝXÚ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒŒKÈšYŽˆËLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆËŒˆ‹]HŽˆ’XÚ™[°íYÙH›Ù™\ÜÚ[Û™[H[™H‹™\ØÜš\[ÛˆŽˆ”ÞXÚÜÛÞšX[H™\˜][™ËÜš\Ù[‹Ù\Ý[™Z]ÝXÚÙ]Ø[˜]Y\‹˜[Z[YKÛÞšX[\Ëˆ‹œØÛÜHŽ–È”ÞXÚÜÛÞšX[H™\˜][™ËÜš\Ù[‹Ù\Ý[™Z]ÝXÚÙ]Ø[˜]Y\‹˜[Z[YKÛÞšX[\È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒŒŸKÈšYŽˆËLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆËŒÈ‹]HŽˆ’XÚØ[›ˆYZ[™HÛÚ[™ÈØ][H™\›\ÜÙ[ˆ‹™\ØÜš\[ÛˆŽˆ™\ÝXÚÙY[œÝK[Y›Ûœ\™\œØÚY[Øš[H[™ÙX›ÝK™YÛZ][™Ëˆ‹œØÛÜHŽ–È™\ÝXÚÙY[œÝK[Y›Ûœ\™\œØÚY[Øš[H[™ÙX›ÝK™YÛZ][™È‹“[Øš[]0é›YÙKH[™ÛÞšX[Y[œÝK[™ÙZ0íœšYÙKœ™Z]Ú[YÙHÛÛZÝH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒKÈšYŽˆËM‹˜ÛÛ˜Ù\[X™\ˆŽˆË‹]HŽˆ’XÚpí˜ÚH™[X[™[™\™[H[™[ˆ‹™\ØÜš\[ÛˆŽˆ”Ù[œÚX›\È[œÜ™XÚ[‹Z0íœ™[‹Ü™[ž™[‹™\›Z][™ËÙ[YZ[œØ[YH™\ÝXÚKˆ‹œØÛÜHŽ–È”Ù[œÚX›\È[œÜ™XÚ[‹Z0íœ™[‹Ü™[ž™[‹™\›Z][™ËÙ[YZ[œØ[YH™\ÝXÚH‹‘Z™[˜[][™›Ù™\ÜÚ[Û™[HÜš\Ù[š[™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒßKÈšYŽˆËMH‹˜ÛÛ˜Ù\[X™\ˆŽˆËH‹]HŽˆ’[œØ[™ÙX›ÝH[ˆ™\™ÙYÜ™ˆ‹™\ØÜš\[ÛˆŽˆ”ÝYZ[[™[\œÝ0ï[™ÜØ\È[\œËKÓX™[œÜÚ]X][Û‹ˆ‹œØÛÜHŽ–È”ÝYZ[[™[\œÝ0ï[™ÜØ\È[\œËKÓX™[œÜÚ]X][Ûˆ‹’ÛÜÝ[›ÜËÚ™H[›Y[[™Ë˜\œšY\™Yœ™ZK[Y›Ûš\ØÚ‹X™[™[™ÛØÚ[™[™NÈ0ï™\œ°ïHÛÛZÝH[™0å™™›[™ÜÞ™Z][ˆ‹”›È[™ÙX›ÝÛÝÙZ]™[YÝˆ°éÙ\‹[™ÙX›ÝšY[Ü\KY™\ÜÙKÑZ[žYÜÙÙXšY]ÛÛZÝ™Z][‹ÛÜÝ[‹[›Y[\™YÙ[‹˜\œšY\™Yœ™ZZZ]ÛY\šÛX[K°ï\›Z[‹]Y[H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŒÌWK˜ÛÛ˜Ù\[™HŽŒŒM‹™Ü›Ý\ŽˆšÛÛZÝHŸKÈšYŽˆ˜™YÙYÛ[™È‹˜ÛÛ˜Ù\[X™\ˆŽˆŽ‹]HŽˆ™YÙYÛ[™È[™Ù[YZ[œØÚY[H[YÈ‹™\ØÜš\[ÛˆŽˆ•™Y™œ[šÝKÙ[YZ[œØ[YHZÝ]š]0é[‹YØ[™ÜÚ0ï™[ˆ[™œ˜YÙ[ˆ\ˆ]ðéÚXÚ[ˆ]˜˜\šÙZ]›Ûˆ[™ÙX›Ý[‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŽŒH‹]HŽˆ\[ˆ›Ûˆ™YÙYÛ[™ÜÛÜ[ˆ‹™\ØÜš\[ÛˆŽˆ“˜XÚ˜\œØÚYÝ™Y™œËÝYZ[™[™[‹ØY°ê\ËØ\ÝÝ0é[‹Z]YÜÝ\ØÚKˆ‹œØÛÜHŽ–È“˜XÚ˜\œØÚYÝ™Y™œËÝYZ[™[™[‹ØY°ê\ËØ\ÝÝ0é[‹Z]YÜÝ\ØÚH‹’Ý[\ž™[™[‹šX›[ÝZÙ[‹™\™Z[™KÙ[YZ[œØÚYÜ°é[YK\šÜËÔ0é™H‹”™[YÚpíœÙKÝÙ[[œØÚ][XÚHZ[œšXÚ[™Ù[‹YÚ][H°é[YH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒKÈšYŽˆLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŽŒˆ‹]HŽˆ‘›Ü›Y[ˆ\ˆ™YÙYÛ[™È‹™\ØÜš\[ÛˆŽˆ“Ù™™[™H™Y™™[‹XZ™Z][‹œ°ïÝ0ïÚËÙ\Ü°éÚœ™Z^™Z]Ü^šY\™ðé™ÙKˆ‹œØÛÜHŽ–È“Ù™™[™H™Y™™[‹XZ™Z][‹œ°ïÝ0ïÚËÙ\Ü°éÚœ™Z^™Z]Ü^šY\™ðé™ÙH‹”ÜÜÝ[\‹\›™[‹Z™[˜[][™Ù\šÛXÚKÚÜ™X]]™HZÝ]š]0é[ˆ‹‘Ù[™\˜][Û™[°ï™\™Ü™ZY™[™H›Ú™ZÝH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒKÈšYŽˆLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŽŒÈ‹]HŽˆ•Ø\ÈXXÚZ[ˆ[™ÙX›ÝYðé™ÛXÚÈ‹™\ØÜš\[ÛˆŽˆ’ÙZ[™H›XÚZ]ÛYYØÚYÙ\ˆ[›°íYÙH[›Y[[™Ëˆ‹œØÛÜHŽ–È’ÙZ[™H›XÚZ]ÛYYØÚYÙ\ˆ[›°íYÙH[›Y[[™È‹™^˜Z˜\šÙZ]\œ™ZXÚ˜\šÙZ]˜\œšY\™Yœ™ZZZ]™YÙ[pé0çÚYÚÙZ]‹[Z[™HZ[™ZY[‹™\œÝ0é™XÚH[™›Ü›X][Û™[‹™YÜ°ï0çÝ[™Ë[KP]\ÙÜ™[ž[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒKÈšYŽˆM‹˜ÛÛ˜Ù\[X™\ˆŽˆŽ‹]HŽˆ•Ø\[HÙ\™[ˆ›Üš[™[™H[™ÙX›ÝHšXÚÙ[]È‹™\ØÜš\[ÛˆŽˆ•[˜™ZØ[›Z]™Z][‹[™\›[™Ù[‹ÛÜÝ[‹˜[ØÚH[œÜ˜XÚKˆ‹œØÛÜHŽ–È•[˜™ZØ[›Z]™Z][‹[™\›[™Ù[‹ÛÜÝ[‹˜[ØÚH[œÜ˜XÚH‹‘Ü\[˜[™ÜÝØÚ[K™YØ]]™H\™˜Z[™Ù[‹™Z[™HÝ\[™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒLŸKÈšYŽˆMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŽH‹]HŽˆ‘ÚÝ[Y[Y\H˜^\Ø™Z\ÜY[H‹™\ØÜš\[ÛˆŽˆ’Ý[\š\Ý[’ØÚ‹ÝÚYZÙ\ˆÜ›ðçÛÚKÙ[š[Ü™[˜\˜™Z]ˆ‹œØÛÜHŽ–È’Ý[\š\Ý[’ØÚ‹ÝÚYZÙ\ˆÜ›ðçÛÚKÙ[š[Ü™[˜\˜™Z]‹‘Ù[YZ[œØ[YHXZ™Z][‹[H]YZÝÙ[˜[›\ÈÛš\ØÚ\È™Z\ÜY[‹•ÙZ]\™H˜XÚ°ï˜˜\™H™YÙYÛ[™ÜÚÛÛž™\NÈÚ\šÜØ[ZÙZ]™]ÙZ[ÈZYÙ[œÈ0ï™\œ°ï™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒM_WK˜ÛÛ˜Ù\[™HŽŒŒÍ‹™Ü›Ý\ŽˆšÛÛZÝHŸKÈšYŽˆ˜™YÙYÛ[™ÜÜÝY]H‹˜ÛÛ˜Ù\[X™\ˆŽˆŽH‹]HŽˆ•ÚYHÜ°ï™HXÚZ[™H™YÙYÛ[™ÜÜÝ0éKYH›Ûˆ[[ˆÜ\[ˆ\ˆÙ\Ù[ØÚY™\ÝXÚÚ\™È‹™\ØÜš\[ÛˆŽˆ•›Ûˆ\ˆ™Y\™œÙ\›Z][™Èš\È[H]Y\šY[ˆ™]šYXŽˆÝ[™Ü[™ÙX›ÝKÛZXÚ™Z[™[™ËÜ™Ø[š\Ø][Ûˆ[™š[˜[žšY\[™Ëˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆKLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKŒH‹]HŽˆ‘Ü[™YYH[™šY[Ù][™È‹™\ØÜš\[ÛˆŽˆ“Ù™™[™H™YÙYÛ[™ÜÜÝ0éHœËˆšY[Ü\[˜™^›ÙÙ[™HZ[œšXÚ[™Ù[‹ˆ‹œØÛÜHŽ–È“Ù™™[™H™YÙYÛ[™ÜÜÝ0éHœËˆšY[Ü\[˜™^›ÙÙ[™HZ[œšXÚ[™Ù[ˆ‹‘Ù\Ù[ØÚYXÚH\˜ÚZ\ØÚ[™ËÙ[YZ[œØ[YH™Y0ï™›š\ÜÙH‹‘œ™Z]Ú[YÚÙZ]Ù[YZ[œØ[YHZÝ]š]0é[‹Ù[™\˜][Ûœðï™\™Ü™ZY™[™HÛÛZÝH‹•Ú\ÜÙ[œØÚYXÚHÜ[™YÙ[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒKÈšYŽˆKLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKŒˆ‹]HŽˆ™Y\™ˆ\›Z][ˆ‹™\ØÜš\[ÛˆŽˆ•›Üš[™[™H[™ÙX›ÝK™Z[™HÜKšXÚ\œ™ZXÚH\œÛÛ™[‹ˆ‹œØÛÜHŽ–È•›Üš[™[™H[™ÙX›ÝK™Z[™HÜKšXÚ\œ™ZXÚH\œÛÛ™[ˆ‹‘Ù]ðïœØÚH™Z][ˆ[™[™ÙX›ÝK°ï™Ù\˜™Yœ˜YÝ[™ËÛÞšX[˜][X[˜[\ÙH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŽ_KÈšYŽˆKLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKŒÈ‹]HŽˆ”Ý[™Ü[™\œ™ZXÚ˜\šÙZ]‹™\ØÜš\[ÛˆŽˆ“YÙKpçÝÙYÙK0å”•‹˜\œšY\™Yœ™ZZZ]ÚXÚ\šZ]ˆ‹œØÛÜHŽ–È“YÙKpçÝÙYÙK0å”•‹˜\œšY\™Yœ™ZZZ]ÚXÚ\šZ]‹X™[™ÕÛØÚ[™[™KšY\‹H[™X\œØÚ[™K™YÛZ][™ËÓ[Øš[]0é—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌŸKÈšYŽˆKM‹˜ÛÛ˜Ù\[X™\ˆŽˆŽK‹]HŽˆ[™ÙX›ÝH°ïˆ[\œØÚYYXÚHY[œØÚ[ˆ‹™\ØÜš\[ÛˆŽˆ“XZ™Z][‹ðïœÝYÙHÜZ\Ù[‹ÑÙ]°éšÙKÚ™HÛÛœÝ[^Ø[™Ëˆ‹œØÛÜHŽ–È“XZ™Z][‹ðïœÝYÙHÜZ\Ù[‹ÑÙ]°éšÙKÚ™HÛÛœÝ[^Ø[™È‹”ÜÛ[˜™\ÝXÚÝ[\‹š[[™Ëœ™Z^™Z]˜ZÝ\ØÚHZÝ]š]0é[ˆ‹”ZYÙH°é[YKÙ™™[™KØ™YÛZ]]H™YÙYÛ[™Ù[‹šY[˜[\ˆ[\™\ÜÙ[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍ_KÈšYŽˆKMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKH‹]HŽˆ‘ÛZXÚ™Z[™[™È[™\ÚÜš[Z[šY\[™ÜÙœ™ZZZ]‹™\ØÜš\[ÛˆŽˆ–YØ[™Ë\ÚÜš[Z[šY\[™ÜÜØÚ]‹™\š[[œÜ™YÙ[‹ÛÛ™›ZÝKˆ‹œØÛÜHŽ–È–YØ[™Ë\ÚÜš[Z[šY\[™ÜÜØÚ]‹™\š[[œÜ™YÙ[‹ÛÛ™›ZÝH‹˜\œšY\™Yœ™ZZZ]Û\™HÛÛ[][šZØ][Û‹ÛÞšX[HšY[˜[™\ØÚÙ\™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÎ_KÈšYŽˆKMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKˆ‹]HŽˆ‘š[˜[žšY\[™È[™™^˜Z˜\šÙZ]‹™\ØÜš\[ÛˆŽˆ‘Ü°ï™[™ÜËK˜][KK\œÛÛ˜[H[™™]šYXœÚÛÜÝ[ŽÈ™\œÚXÚ\[™Ëˆ‹œØÛÜHŽ–È‘Ü°ï™[™ÜËK˜][KK\œÛÛ˜[H[™™]šYXœÚÛÜÝ[ŽÈ™\œÚXÚ\[™È‹‘°íœ™\›Z][ÝY[™Ù[‹Ü[™[‹YØ[HZ[›˜ZY[‹ÛÛÜ\˜][Û™[ˆ‹”ÛÞšX[H™Z\ÙKÛÜÝ[›ÜÙH][™Ë]Y\šYHÚ\ØÚYXÚÙZ]—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŽŸKÈšYŽˆKMÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKÈ‹]HŽˆ”™XÚXÚH[™Ü™Ø[š\Ø]Üš\ØÚH›Ü˜]\ÜÙ][™Ù[ˆ‹™\ØÜš\[ÛˆŽˆ•°éÙ\™›Ü›Y[‹\Ý0é™YÚÙZ][‹˜][KÐ˜]KÐœ˜[™ØÚ]‹ˆ‹œØÛÜHŽ–È•°éÙ\™›Ü›Y[‹\Ý0é™YÚÙZ][‹˜][KÐ˜]KÐœ˜[™ØÚ]ˆ‹“X™[œÛZ][™XÚ™\œÚXÚ\[™Ù[‹Y[™Ë™\ØÚ0éYÝ[™ËÑZ™[˜[]‹‘][œØÚ]‹]\ÛÜ™[™ËÚXÚ\šZ]™\ØÚÙ\™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŽŸKÈšYŽˆKN‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKŽ‹]HŽˆ”\œÛÛ˜[[™\Ø[[Y[˜\˜™Z]‹™\ØÜš\[ÛˆŽˆ‘˜XÚÜ°éKZ™[˜[][œÜ™XÚ\œÛÛ™[‹ØÚ[[™ËÛÛ™›ZÝÛÛ\][ž‹ˆ‹œØÛÜHŽ–È‘˜XÚÜ°éKZ™[˜[][œÜ™XÚ\œÛÛ™[‹ØÚ[[™ËÛÛ™›ZÝÛÛ\][žˆ‹“Ü™Ø[š\Ø][Û™[‹Z]Ú\šÝ[™È\ˆðéÝK\Ý0é™YÚÙZ][ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŽLKÈšYŽˆKNH‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKŽH‹]HŽˆ™ZØ[›XXÚ[™È[™™\ÝXÚ\™Ù]Ú[›[™È‹™\ØÜš\[ÛˆŽˆ°å™™™[XÚÙZ]Ø\˜™Z]\œðí››XÚH[œÜ˜XÚKÙ[›ÜÜÙ[œØÚY[‹ˆ‹œØÛÜHŽ–È°å™™™[XÚÙZ]Ø\˜™Z]\œðí››XÚH[œÜ˜XÚKÙ[›ÜÜÙ[œØÚY[ˆ‹”˜^[‹Ð™\˜][™Ù[‹˜Z™\šÙZ‹YYY[‹YÚ][KØ[˜[ÙÙHØ[°éH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŽLßKÈšYŽˆKLL‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKŒL‹]HŽˆ‘]Y\šY\ˆ™]šYXˆ‹™\ØÜš\[ÛˆŽˆ°å™™›[™ÜÞ™Z][‹™YÙ[pé0çÚYÚÙZ]\œÛÛ˜[[™]\Ú[ˆ‹œØÛÜHŽ–È°å™™›[™ÜÞ™Z][‹™YÙ[pé0çÚYÚÙZ]\œÛÛ˜[[™]\Ú[‹™]Z[YÝ[™Ë]˜[X][Û‹Ù\š[™ÙH]\Û\Ý[™Ë[œ\ÜÝ[™Ë™\œÝ]YÝ[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŽMŸKÈšYŽˆKLLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKŒLH‹]HŽˆ•Ú\ÜÙ[œØÚYXÚH\šÙ[›š\ÜÙH[™˜^\Ý™\™ÛZXÚH‹™\ØÜš\[ÛˆŽˆ™YÙYÛ[™ÜÛÜ›ÜœØÚ[™ËÛÞšX[H\˜ÚZ\ØÚ[™ËšYYšYÜØÚÙ[YÚÙZ]ˆ‹œØÛÜHŽ–È™YÙYÛ[™ÜÛÜ›ÜœØÚ[™ËÛÞšX[H\˜ÚZ\ØÚ[™ËšYYšYÜØÚÙ[YÚÙZ]‹‘Ù[™\˜][Û™[‹ÚYY\šÛHÛÛZÝKÚ\šÝ[™ËÜ™[ž™[‹™\™ÛZXÚH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŽN_KÈšYŽˆKLLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŽKŒLˆ‹]HŽˆ’ÛÛ[Y[\™H[™›ÜœØÚ0éÙH‹™\ØÜš\[ÛˆŽˆ‘ZYÙ[™\ˆÛÛ[Y[\˜™\™ZXÚˆX^ˆL™ZXÚ[‹[Ù\˜][Ûˆ›Üˆ™\°í™™™[XÚ[™Ëˆ‹œØÛÜHŽ–È‘ZYÙ[™\ˆÛÛ[Y[\˜™\™ZXÚˆX^ˆL™ZXÚ[‹[Ù\˜][Ûˆ›Üˆ™\°í™™™[XÚ[™È‹–[°éÚÝÛÛž™\[Û™[ÛÚØ[\È\Ý›Ü›][\‹ÙZ[™H›ÙZÝ]™Hœ™Z\ØÚ[[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌ‹œ[›™YÛÛ[Y[X^[™ÝŽLWK˜ÛÛ˜Ù\[™HŽŒŒ™Ü›Ý\ŽˆšÛÛZÝH‹œ[›™YÛÛ[Y[X^[™ÝŽLKÈšYŽˆœÝYZ[H‹˜ÛÛ˜Ù\[X™\ˆŽˆŒL‹]HŽˆ‘Z[œØ[ZÙZ][ˆ™\™ÙYÜ™ˆ8 $ÈÝYZ[H[™0íœXÚHX™[œØ™Y[™Ý[™Ù[ˆ‹™\ØÜš\[ÛˆŽˆ”ÝYZ[K0íœXÚHX™[œØ™Y[™Ý[™Ù[‹\œ™ZXÚ˜\šÙZ][™\ˆØ[™[œ°ï\™\ˆ[™]]YÙ\ˆ™YÙYÛ[™ÜÛÜKˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆLLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLŒH‹]HŽˆ™\™ÙYÜ™ˆ[œÙÙ\Ø[]‹™\ØÜš\[ÛˆŽˆ™]°í›Ù\[™ÜÜÝZÝ\‹ÛÞšX[°é[YK™YÙYÛ[™ÜÛÜK\œ™ZXÚ˜\šÙZ]ˆ‹œØÛÜHŽ–È™]°í›Ù\[™ÜÜÝZÝ\‹ÛÞšX[°é[YK™YÙYÛ[™ÜÛÜK\œ™ZXÚ˜\šÙZ]‹’[™œ˜\ÝZÝ\‹ÚØ[H\šÙ[›š\ÜÙK›ÜœØÚ[™ÜØ™Y\™ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌLKÈšYŽˆLLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLŒˆ‹]HŽˆ”ÝYZ[™^›ÙÙ[™H[\œÝXÚ[™Ù[ˆ‹™\ØÜš\[ÛˆŽˆ™\™ÙYÜ™‹Úœ°ïÙÙK™]X[\›píšK[\›píšKš[Ù\™\‹ˆ‹œØÛÜHŽ–È™\™ÙYÜ™‹Úœ°ïÙÙK™]X[\›píšK[\›píšKš[Ù\™\ˆ‹“[ÛÜ™›Y]][˜™\™ËÜY[›[™™Z]œ›ÛÚËØÚÙ[Ù\™\ˆ‹’Ú\˜ÚÙ\™\‹™]Y[™Ø[[YK[[™Ø[[YKÝ\œÛXÚÈ‹‘ZYÙ[™H[\œÙZ][ˆ°ïˆZ[°é[YHÚYH™\™ÙYÜ™‹UÙ\Ý™][˜\™È[™Ü›ðçÛÚH™ZH™Y\™ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌLËœ™[]YŽ–È‹MKMH—_KÈšYŽˆLLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLŒÈ‹]HŽˆ•Ø\ÈÚ\™[ˆ™Y[HÝYZ[[\œÝXÚÈ‹™\ØÜš\[ÛˆŽˆ•ÛÚ‹KÐ™]°í›Ù\[™ÜÜÝZÝ\‹ZÝY[H[™œ°ï\™H™Y™œ[šÝKˆ‹œØÛÜHŽ–È•ÛÚ‹KÐ™]°í›Ù\[™ÜÜÝZÝ\‹ZÝY[H[™œ°ï\™H™Y™œ[šÝH‹°å”•‹˜\œšY\™Yœ™ZZZ]ÛÜÝ[‹™Z][‹šY[Ü\[ˆ‹‘™Z[™H[™ÙX›ÝK0í™™™[XÚ\ˆ˜][K™]Z[YÝ[™Ë]Y[[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌNKÈšYŽˆLM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒL‹]HŽˆ•šY\‹H[™X\œØÚ[™H‹™\ØÜš\[ÛˆŽˆ‘[™\›[™Ë˜Z™\šÙZ‹0é™XÚH™Y™™[‹Ü™™Ù[YZ[œØÚY[‹ˆ‹œØÛÜHŽ–È‘[™\›[™Ë˜Z™\šÙZ‹0é™XÚH™Y™™[‹Ü™™Ù[YZ[œØÚY[ˆ‹•™\™Z[™KY[œØÚ[ˆÚ™H]]ËX™[™ÕÛØÚ[™[™K™YÛZ][™Ë[Øš[H[™ÙX›ÝH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌŒŸKÈšYŽˆLMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLH‹]HŽˆ‘Ù\Ù[ØÚYXÚ\ˆØ[™[[ˆ™\™ÙYÜ™ˆ‹™\ØÜš\[ÛˆŽˆ™YÙYÛ[™ÜÚÝ[\‹Ø\ÝÝ0é[‹™\™Z[™KÙ[YZ[™[X™[‹ˆ‹œØÛÜHŽ–È™YÙYÛ[™ÜÚÝ[\‹Ø\ÝÝ0é[‹™\™Z[™KÙ[YZ[™[X™[ˆ‹”ÝYZ[Ø[™[ØÚYpçÝ[™Ù[‹Ó™]Y\°í™™›[™Ù[‹\œ™ZXÚ˜\šÙZ]™]YHZ[X™H‹•™\™ÛZXÚœ°ï\ˆ[™]]H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌKœ™[]YŽ–È‹M‹‹MKMˆ—_KÈšYŽˆLMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLˆ‹]HŽˆ’\ÝÜš\ØÚ\È™\ž™ZXÚš\È\ˆ™YÙYÛ[™ÜÛÜH‹™\ØÜš\[ÛˆŽˆ‘Z[ž™[\ZÙ[›È™[YÝ[H\ÝÜš\ØÚ[ˆÝ[™Üˆ‹œØÛÜHŽ–È‘Z[ž™[\ZÙ[›È™[YÝ[H\ÝÜš\ØÚ[ˆÝ[™Ü‹”ÝXÚH˜XÚœ°ï\™[H˜[Y[‹Ý˜pçÙKÜ[™™Z]˜][H‹•™\˜š[™[™ÈH8 '‘Ù\ØÚXÚH[™\š[›™\[™Ù[¸ '[™XœØÚš]‹H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌŽKœÚ\™YÛÛXÝ[ÛˆŽˆš\ÝÜš\ØÚKX™YÙYÛ[™ÜÛÜH‹œ™[]YŽ–È‹MH—_KÈšYŽˆLMÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLÈ‹]HŽˆ•Ø\È™Z]]H[ˆ™\™ÙYÜ™È‹™\ØÜš\[ÛˆŽˆ™\Ý[™Ø]Y›˜ZYK™Yœ˜YÝ[™ËÝYZ[™Y\™‹ÜÛ[™H™YÙYÛ[™Ëˆ‹œØÛÜHŽ–È™\Ý[™Ø]Y›˜ZYK™Yœ˜YÝ[™ËÝYZ[™Y\™‹ÜÛ[™H™YÙYÛ[™È‹‘Ù[™\˜][Û™[°ï™\™Ü™ZY™[™HÜK˜\œšY\™[ˆ[™ÛÜÝ[ˆ‹™[YÝH›ÜœØÚ0éÙK™\˜[ÛÜXÚÙZ][ŽÈÙ™™[™Hœ˜YÙ[ˆ[ÈÛÛÚHX\šÚY\™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÌÌßWK˜ÛÛ˜Ù\[™HŽŒÌ‹™Ü›Ý\Žˆ˜™\™ÙYÜ™ˆŸKÈšYŽˆ›™]Ù\šÙH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLH‹]HŽˆ“Ü™Ø[š\Ø][Û™[‹Z[œšXÚ[™Ù[ˆ[™™]Ù\šÙH‹™\ØÜš\[ÛˆŽˆ‘Z[œšXÚ[™Ù[‹[œÜ™XÚ\™\‹pí™ÛXÚH\™\ˆ[™YH\Ø[[Y[˜\˜™Z]ÚØ[\ˆ™]Ù\šÙKˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆLKLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLKŒH‹]HŽˆ“Ü™Ø[š\Ø][Û™[ˆ[™Z[œšXÚ[™Ù[ˆ‹™\ØÜš\[ÛˆŽˆ•ÛÚ˜ZÝ™\˜°é™K™\™Z[™KÝY[™Ù[‹Ù[œÝ[™K˜XÚ˜\œØÚYˆ‹œØÛÜHŽ–È•ÛÚ˜ZÝ™\˜°é™K™\™Z[™KÝY[™Ù[‹Ù[œÝ[™K˜XÚ˜\œØÚY‹”›YÙK™\˜][™Ë˜[Z[YKÒYÙ[™š[[™ËÜÜÝ[\‹œ™Z]Ú[YÙ[˜YÙ[\™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍŸKÈšYŽˆLKLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLKŒˆ‹]HŽˆ•ÛÚ[Y™[[™0íœXÚH[œÜ™XÚ\™\ˆ‹™\ØÜš\[ÛˆŽˆ‘Ù[›ÜÜÙ[œØÚY[‹ÛÚ[™ÜÝ[\›™ZY[‹™\Ø[[™Ù[‹]\ÛYZ\Ý\‹ˆ‹œØÛÜHŽ–È‘Ù[›ÜÜÙ[œØÚY[‹ÛÚ[™ÜÝ[\›™ZY[‹™\Ø[[™Ù[‹]\ÛYZ\Ý\ˆ‹”]X\Y\œÛX[˜YÙ[Y[[™˜XÚ˜\œØÚYÜ›Ú™ZÝKÙ[YZ[™YZ[œšXÚ[™Ù[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍ_KÈšYŽˆLKLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLKŒÈ‹]HŽˆ•ÙZ]\™Hpí™ÛXÚH™]Ù\šÜ\™\ˆ‹™\ØÜš\[ÛˆŽˆ”˜^[‹\ÝZÙ[‹›Ø˜Ù[\‹\˜™Z]Ý™\Ø[[™Ëˆ‹œØÛÜHŽ–È”˜^[‹\ÝZÙ[‹›Ø˜Ù[\‹\˜™Z]Ý™\Ø[[™È‹•[\›™ZY[‹Ù]Ù\šÜØÚY[‹Ú\ØÚYÛÜ™Ø[š\Ø][Û™[ˆ‹”ÜÝZ[ž™[[™[˜Z™\šÙZ‹YYY[‹™[YÚ[ÛœËKÕÙ[[œØÚ]][™ÜÙÙ[YZ[œØÚY[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍKÈšYŽˆLKM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLK‹]HŽˆ–\Ø[[Y[˜\˜™Z][™™\›™][™È‹™\ØÜš\[ÛˆŽˆ“™]Ù\šÙK\Ý0é™YÚÙZ][‹ÛÛÜ\˜][Û™[‹™\›Z][™Ë›Ú™ZÝKˆ‹œØÛÜHŽ–È“™]Ù\šÙK\Ý0é™YÚÙZ][‹ÛÛÜ\˜][Û™[‹™\›Z][™Ë›Ú™ZÝH‹‘Ü[\˜™Z]™\›YZY[‹˜XÚH[™Z™[˜[]Ø]\Ý]\ØÚ][œØÚ]ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍLŸKÈšYŽˆLKMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLKH‹]HŽˆ“Ü™Ø[š\Ø][Û™[ˆ[ˆ™\™ÙYÜ™ˆ‹™\ØÜš\[ÛˆŽˆ•™\šYš^šY\HZ[œšXÚ[™Ë[™ÙX›Ý[œÜ™XÚ\™\‹ÛÛZÝˆ‹œØÛÜHŽ–È•™\šYš^šY\HZ[œšXÚ[™Ë[™ÙX›Ý[œÜ™XÚ\™\‹ÛÛZÝ‹–Yðé™ÛXÚÙZ]ÒÛÜÝ[‹™\˜š[™[™È[H™\ÝZ[™[ˆÜ™Ø[š\Ø][ÛœÝ™\ž™ZXÚš\È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍM_WK˜ÛÛ˜Ù\[™HŽŒÌÎ™Ü›Ý\Žˆ˜™\™ÙYÜ™ˆŸKÈšYŽˆ›Y[œØÚ[‹Y\œ™ZXÚ[ˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLˆ‹]HŽˆ“Y[œØÚ[ˆ\œ™ZXÚ[‹YHš\Ú\ˆÙZ[™H[™ÙX›ÝH]™[ˆ‹™\ØÜš\[ÛˆŽˆ‘Ü°ï™H°ïˆ™Z[™[ˆYØ[™ÈH[™ÙX›Ý[‹\œðí››XÚHÛÛZÝÙYÙH[™Z[™H™\ÜZÝ›ÛH[œÜ˜XÚKˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆL‹LH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒL‹ŒH‹]HŽˆ‘Ü°ï™H™Z[™\ˆ\œ™ZXÚ˜\šÙZ]‹™\ØÜš\[ÛˆŽˆ”°ïÚÞYËØÚ[K™\˜]Y[‹Ü\[˜[™ÜÝ™Z[™H[™›Ü›X][Û‹ˆ‹œØÛÜHŽ–È”°ïÚÞYËØÚ[K™\˜]Y[‹Ü\[˜[™ÜÝ™Z[™H[™›Ü›X][Ûˆ‹\›]]Ù\Ý[™Z]Ó[Øš[]0éÜ˜XÚKÜ[™š[[™ËÙZ[ˆ[\›™]—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍŒßKÈšYŽˆL‹Lˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒL‹Œˆ‹]HŽˆ”\œðí››XÚHÛÛZÝÙYÙH‹™\ØÜš\[ÛˆŽˆ]YœÝXÚ[™HÛÞšX[\˜™Z]™\ÝXÚK™\˜]Y[œÜ\œÛÛ™[‹[™ÙZ0íœšYÙKˆ‹œØÛÜHŽ–È]YœÝXÚ[™HÛÞšX[\˜™Z]™\ÝXÚK™\˜]Y[œÜ\œÛÛ™[‹[™ÙZ0íœšYÙH‹’]\Ø\ž›YÙKÐ™]™]][™Ë˜XÚ˜\œØÚYÛZ[™HÙ\ØÚ0ïHÜ\[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍŸKÈšYŽˆL‹LÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒL‹ŒÈ‹]HŽˆ°å™™™[XÚH[™[˜[ÙÙH[™›Ü›X][Ûˆ‹™\ØÜš\[ÛˆŽˆ‘›Y\‹]\Ú0é™ÙKÙ[›ÜÜÙ[œØÚYÛYYY[‹ÛÚ˜[›YÙ[‹ˆ‹œØÛÜHŽ–È‘›Y\‹]\Ú0é™ÙKÙ[›ÜÜÙ[œØÚYÛYYY[‹ÛÚ˜[›YÙ[ˆ‹”˜^[‹\ÝZÙ[‹ÚØ[™Z][™Ù[‹0å”•‹[YÜÛÜH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍŽ_KÈšYŽˆL‹M‹˜ÛÛ˜Ù\[X™\ˆŽˆŒL‹‹]HŽˆ’ÛÛ[][šZØ][Ûˆ[™™\˜]Y[œØ]Y˜˜]H‹™\ØÜš\[ÛˆŽˆ‘Z[›Y[™ÈÝ]™\ØÚ0é][™Ëœ™Z]Ú[YÚÙZ]][œØÚ]‹Ü™[ž™[‹ˆ‹œØÛÜHŽ–È‘Z[›Y[™ÈÝ]™\ØÚ0é][™Ëœ™Z]Ú[YÚÙZ]][œØÚ]‹Ü™[ž™[ˆ‹’ÛÛ[Z]0é[™™\›0éÜÛXÚH[œÜ™XÚ\™\ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍÌŸKÈšYŽˆL‹MH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒL‹H‹]HŽˆ•Ú\šÜØ[ZÙZ]\ˆÛÛZÝÙYÙH‹™\ØÜš\[ÛˆŽˆ‘\œ™ZXÚKÓšXÚ\œ™ZXÚKY]Ù[‹[™\›š\ÜÙK\™›ÛÜÚÛÛ›ÛKˆ‹œØÛÜHŽ–È‘\œ™ZXÚKÓšXÚ\œ™ZXÚKY]Ù[‹[™\›š\ÜÙK\™›ÛÜÚÛÛ›ÛH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÍÍ_WK˜ÛÛ˜Ù\[™HŽŒÍNK™Ü›Ý\Žˆ˜™\™ÙYÜ™ˆŸKÈšYŽˆ™›ÜœØÚ[™È‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLÈ‹]HŽˆ•Ú\ÜÙ[œØÚY›ÜœØÚ[™È[™Ú\šÜØ[ZÙZ]‹™\ØÜš\[ÛˆŽˆ‘›ÜœØÚ[™ÜÛY]Ù[‹ÝYY[‹YHY\ÜÝ[™È›ÛˆZ[œØ[ZÙZ][™YH™]Ù\[™È\ˆÚ\šÜØ[ZÙZ]›ÛˆXpçÛ˜ZY[‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆLËLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLËŒH‹]HŽˆ•Ú\ÜÙ[œØÚYXÚHÜ[™YÙ[ˆ‹™\ØÜš\[ÛˆŽˆ”ÞXÚÛÙÚYKÛÞšX[ÞXÚÛÙÚYKÛÞš[ÛÙÚYKÛÞšX[\˜™Z]ˆ‹œØÛÜHŽ–È”ÞXÚÛÙÚYKÛÞšX[ÞXÚÛÙÚYKÛÞš[ÛÙÚYKÛÞšX[\˜™Z]‹”X›XÈX[Ù\Ý[™Z]ÝÚ\ÜÙ[œØÚYÝYKÔ˜][Y›ÜœØÚ[™È‹’ÛÛ[][šZØ][Û‹[[ÙÜ˜YšYH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÎŸKÈšYŽˆLËLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLËŒˆ‹]HŽˆ‘›ÜœØÚ[™È\ˆZ[œØ[ZÙZ]‹™\ØÜš\[ÛˆŽˆ“˜][Û˜[KÚ[\›˜][Û˜[H›ÜœØÚ[™ËÝ]\ÝZÙ[‹Z[œØ[ZÙZ]Ø˜\›ÛY]\‹ˆ‹œØÛÜHŽ–È“˜][Û˜[KÚ[\›˜][Û˜[H›ÜœØÚ[™ËÝ]\ÝZÙ[‹Z[œØ[ZÙZ]Ø˜\›ÛY]\ˆ‹™]°í›Ù\[™ÜÙÜ\[‹YÙ[™X™[œÜ\Ù[‹Ù\Ù[ØÚYXÚ\ˆ\Ø[[Y[š[—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÎŸKÈšYŽˆLËLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLËŒÈ‹]HŽˆ‘Z[œØ[ZÙZ]Ú\ÜÙ[œØÚYXÚY\ÜÙ[ˆ‹™\ØÜš\[ÛˆŽˆ•PÓHÛ™[[™\ÜÈØØ[KKR›Û™ËQÚY\™[TÚØ[Kˆ‹œØÛÜHŽ–È•PÓHÛ™[[™\ÜÈØØ[KKR›Û™ËQÚY\™[TÚØ[H‹™Yœ˜YÝ[™ÜÙÜ™[ž™[‹™\°éÙ[]]š]0é™YÚ[Û˜[H][‹™\™ÛZXÚ˜\šÙZ]—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÎ_KÈšYŽˆLËM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLË‹]HŽˆ•Ø\È[˜XÚÙZ\ÛXÚÙYÙ[ˆZ[œØ[ZÙZ]È‹™\ØÜš\[ÛˆŽˆ™YÙYÛ[™ËÞXÚÛÙÚ\ØÚHXpçÛ˜ZY[‹ÛÛZÝKÐ™\ÝXÚÜ›ÙÜ˜[[YKˆ‹œØÛÜHŽ–È™YÙYÛ[™ËÞXÚÛÙÚ\ØÚHXpçÛ˜ZY[‹ÛÛZÝKÐ™\ÝXÚÜ›ÙÜ˜[[YH‹‘Ù[YZ[œØÚYÝZÝ\™[H0á™\[™Ù[‹ÝYY[‹Ü\[[\œØÚYYKÜ™[ž™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÎLŸKÈšYŽˆLËMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLËH‹]HŽˆ”›Ú™ZÝHÚ\ÜÙ[œØÚYXÚ™]Ù\[ˆ‹™\ØÜš\[ÛˆŽˆ™\ÝXÚ\ž˜ZœËˆ]Y\šYH™^šYZ[™Ù[‹ˆ‹œØÛÜHŽ–È™\ÝXÚ\ž˜ZœËˆ]Y\šYH™^šYZ[™Ù[ˆ‹•ÚYY\šÙZ™[™HZ[˜ZYKÝXš™ZÝ]™HZ[œØ[ZÙZ][™Þ™Z]Ú\šÝ[™È‹X˜œ°ïÚKÛÜÝ[‹UÚ\šÜØ[ZÙZ][˜Xš0é™ÚYÙH]˜[X][Û‹™]›Ù™™[™[˜™]Z[YÝ[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÎM_KÈšYŽˆLËMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒLËˆ‹]HŽˆ”]Y[[ˆ[™›ÜœØÚ[™ÜÜÝ[™‹™\ØÜš\[ÛˆŽˆ“ÜšYÚ[˜[ÝYY[‹™]šY]ÜË[]XÚHÝ]\ÝZËÛÛ\][ž›™]ˆZ[œØ[ZÙZ]ˆ‹œØÛÜHŽ–È“ÜšYÚ[˜[ÝYY[‹™]šY]ÜË[]XÚHÝ]\ÝZËÛÛ\][ž›™]ˆZ[œØ[ZÙZ]‹‘][K]\ÜØYÙZÜ˜YZ[œØÚ°éšÝ[™Ù[‹Ù™™[™H›ÜœØÚ[™ÜÙœ˜YÙ[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒÎN_WK˜ÛÛ˜Ù\[™HŽŒÍÎ™Ü›Ý\ŽˆÚ\ÜÙ[ˆŸKÈšYŽˆ˜Y[™š\È‹˜ÛÛ˜Ù\[X™\ˆŽˆŒM‹]HŽˆ‘\È[X\™Ù\ˆ°ï™š\ÈÙYÙ[ˆZ[œØ[ZÙZ]‹™\ØÜš\[ÛˆŽˆ‘[ÝZ[™ËÝ˜]YÚY\›Þ™\ÜËX[ÙÙ›Ü™[ˆ[™™]Z[YÝ[™È[H[X\™Ù\ˆ°ï™š\ÈÙYÙ[ˆZ[œØ[ZÙZ]ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆMLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMŒH‹]HŽˆ‘[ÝZ[™È[™šY[Ù][™È‹™\ØÜš\[ÛˆŽˆ‘Ü°ï™[™Ë[š]X]Ü™[‹™]Z[YÝKÝZÝ\‹š]š[Ù\Ù[ØÚYšY[K[ÚXÚÛ[™Ëˆ‹œØÛÜHŽ–È‘Ü°ï™[™Ë[š]X]Ü™[‹™]Z[YÝKÝZÝ\‹š]š[Ù\Ù[ØÚYšY[K[ÚXÚÛ[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽßKÈšYŽˆMLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMŒˆ‹]HŽˆ“Û›[™KP]YZÝ\ÈÝ˜]YÚY\›Þ™\ÜÙ\È‹™\ØÜš\[ÛˆŽˆ[›\ÜË[Ù\˜][Û‹™Y™\šY\™[™K[™›Ü›X][Û™[‹\ÚÝ\ÜÚ[Û™[‹ˆ‹œØÛÜHŽ–È[›\ÜË[Ù\˜][Û‹™Y™\šY\™[™K[™›Ü›X][Û™[‹\ÚÝ\ÜÚ[Û™[ˆ‹XœÝ[[][™Ù[‹œ™XZÛÝ]TÙ\ÜÚ[ÛœË\™ÙX›š\ÜÙKÙ™™[™Hœ˜YÙ[‹ØÚš]H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽ_KÈšYŽˆMLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMŒÈ‹]HŽˆ‘YH™ZH›Ü™Ù\ÙZ[™[ˆX[ÙÙ›Ü™[ˆ‹™\ØÜš\[ÛˆŽˆ‘YH™ZH›Ü™Ù\ÙZ[™[ˆ[Y[™™[\Žˆ0í™™™[XÚ\ˆ˜][KØ\™H[™X™[œÛYÙ[ˆÛÝÚYH\›]][™ÛÚ™[‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆMLËLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMŒËŒH‹]HŽˆ“ÜK™YÙYÛ[™Ù[‹]X\Y\™H[™0í™™™[XÚ\ˆ˜][H‹™\ØÜš\[ÛˆŽˆ™YÙYÛ[™ÜÜÝ0é[‹ÝY[ÚXÚÛ[™Ë0é™K˜XÚ˜\œØÚY˜\œšY\™Yœ™ZZZ]\œ™ZXÚ˜\šÙZ]ˆ‹œØÛÜHŽ–È™YÙYÛ[™ÜÜÝ0é[‹ÝY[ÚXÚÛ[™Ë0é™K˜XÚ˜\œØÚY˜\œšY\™Yœ™ZZZ]\œ™ZXÚ˜\šÙZ]—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽLßKÈšYŽˆMLËLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMŒËŒˆ‹]HŽˆØ\™KÛZXÚÝ[[™Ë˜[Z[YH[™X™[œÛYÙ[ˆ‹™\ØÜš\[ÛˆŽˆ”›YÙKÔÛÜ™ÙK˜[Z[Y[‹™\œØÚYY[™HX™[œÛYÙ[‹Z[X™KÛZXÚÝ[[™Ëˆ‹œØÛÜHŽ–È”›YÙKÔÛÜ™ÙK˜[Z[Y[‹™\œØÚYY[™HX™[œÛYÙ[‹Z[X™KÛZXÚÝ[[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽM_KÈšYŽˆMLËLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMŒËŒÈ‹]HŽˆ\›]]ÛÚ™[ˆ[™ÛÞšX[HÚXÚ\šZ]‹™\ØÜš\[ÛˆŽˆ‘Z[šÛÛ[Y[‹ÛÚ™[‹ÛÜÝ[š0ï™[‹ÚXÚ\šZ]Z[X™Kˆ‹œØÛÜHŽ–È‘Z[šÛÛ[Y[‹ÛÚ™[‹ÛÜÝ[š0ï™[‹ÚXÚ\šZ]Z[X™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽMßWK˜ÛÛ˜Ù\[™HŽLŸKÈšYŽˆMM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒM‹]HŽˆ‘ÚÝ[Y[][Ûˆ\ˆ\˜™Z]ÙÜ\[ˆ‹™\ØÜš\[ÛˆŽˆ“Z]œ˜YÙ[‹Z[™ÙXœ˜XÚH[Y[‹Ù[šYÈ\œ™ZXÚHÜ\[‹ˆ‹œØÛÜHŽ–È“Z]œ˜YÙ[‹Z[™ÙXœ˜XÚH[Y[‹Ù[šYÈ\œ™ZXÚHÜ\[ˆ‹“™]Ù\šÜ\™\‹Ü™Ø[š\Ø][Û‹š[˜[žšY\[™Ë™]Z[YÝ[™ÜØ™\™Z]ØÚYÙ™™[™Hœ˜YÙ[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽN_KÈšYŽˆMMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMH‹]HŽˆ•ÙZ]\™H[ÚXÚÛ[™È‹™\ØÜš\[ÛˆŽˆ•™\˜[œÝ[[™Ù[‹X[ÙÙ›Ü™[‹˜XÚKÓÛ›[™]\›Z[™K[\™Z[™Ù[‹ˆ‹œØÛÜHŽ–È•™\˜[œÝ[[™Ù[‹X[ÙÙ›Ü™[‹˜XÚKÓÛ›[™]\›Z[™K[\™Z[™Ù[ˆ‹•™\°í™™™[XÚ[™Ù[‹[ØÚZY[™Ù[ˆ[™[\Ù][™ÜÜÝ[™—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒŸKÈšYŽˆMMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMˆ‹]HŽˆ’ÛÛZÝ[™™]Z[YÝ[™È‹™\ØÜš\[ÛˆŽˆ“Ù™š^šY[HÛÛZÝKZ[˜ZYKÜ™Ø[š\Ø][Û™[‹ÑZ[ž™[\œÛÛ™[‹\›Z[™K]Y[[‹ˆ‹œØÛÜHŽ–È“Ù™š^šY[HÛÛZÝKZ[˜ZYKÜ™Ø[š\Ø][Û™[‹ÑZ[ž™[\œÛÛ™[‹\›Z[™K]Y[[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽ_WK˜ÛÛ˜Ù\[™HŽË™Ü›Ý\Žˆ™\˜[ÛÜ[™ÈŸKÈšYŽˆœÛ]ZÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMH‹]HŽˆ”Û]ZËÝ˜]YÚY[ˆ[™0í™™™[XÚH™\˜[ÛÜ[™È‹™\ØÜš\[ÛˆŽˆ–\Ý0é™YÚÙZ][ˆ]Yˆ[™\ËK[™\ËH[™™^š\šÜÙX™[™Kš[˜[žšY\[™È[™˜XÚ›ÛšYZ˜\™HÛ]\ØÚH›ÜšX™[‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆMKLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMKŒH‹]HŽˆ[™\ÙX™[™H‹™\ØÜš\[ÛˆŽˆ[™\ÜÝ˜]YÚYK[X[ž‹ÛÛ\][ž›™]‹™\˜[œÝ[[™Ù[‹ˆ‹œØÛÜHŽ–È[™\ÜÝ˜]YÚYK[X[ž‹ÛÛ\][ž›™]‹™\˜[œÝ[[™Ù[ˆ‹‘›ÜœØÚ[™Ë°íœ™\[™È[™™\›™][™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽÌŸKÈšYŽˆMKLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMKŒˆ‹]HŽˆ’[X\™Ù\ˆ[™\ÙX™[™H‹™\ØÜš\[ÛˆŽˆ“[™\ÜÝ˜]YÚYH[È›ÜšX™[ŽÈš\Ú\šYÙHÛ]\ØÚHZÝ]š]0é[‹ˆ‹œØÛÜHŽ–È“[™\ÜÝ˜]YÚYH[È›ÜšX™[ŽÈš\Ú\šYÙHÛ]\ØÚHZÝ]š]0é[ˆ‹™Z0íœ™[‹Ù[˜]°ï™Ù\œØÚY[™œ˜YÙ[‹™\ØÚ0ïÜÙH‹‘š[˜[žšY\[™ËÛÛÜ™[šY\[™Ë[\Ù][™Ë]˜[X][Ûˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽÍ_KÈšYŽˆMKLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMKŒÈ‹]HŽˆ’[X\™Ù\ˆ™^š\šÙH[™™\™ÙYÜ™ˆ‹™\ØÜš\[ÛˆŽˆ™^š\šÜØ[]™^š\šÜÝ™\œØ[[[[™Ë]\ÜØÚ0ïÜÙKÛÞšX[[[™Ëˆ‹œØÛÜHŽ–È™^š\šÜØ[]™^š\šÜÝ™\œØ[[[[™Ë]\ÜØÚ0ïÜÙKÛÞšX[[[™È‹”ÝY[ÚXÚÛ[™Ë™Y™œ[šÝK0í™™™[XÚ\ˆ˜][K[™œ˜\ÝZÝ\‹°ï™Ù\˜™]Z[YÝ[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽÎ_KÈšYŽˆMKM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMK‹]HŽˆ”™\ÜÛÜ0ï™\™Ü™ZY™[™H™\˜[ÛÜ[™È‹™\ØÜš\[ÛˆŽˆ”ÛÞšX[\ËÙ\Ý[™Z]š[[™ËYÙ[™Ñ˜[Z[YK›YÙKˆ‹œØÛÜHŽ–È”ÛÞšX[\ËÙ\Ý[™Z]š[[™ËYÙ[™Ñ˜[Z[YK›YÙH‹”ÝY[ÚXÚÛ[™ËÛÚ™[‹[Øš[]0éÝ[\‹ÜÜ\˜™Z]ÛX\šÝÚ\ØÚY—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŸKÈšYŽˆMKMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMKH‹]HŽˆ‘š[˜[žšY\[™È[™°íœ™\[™È‹™\ØÜš\[ÛˆŽˆ°å™™™[XÚHÙ[\‹›Ú™ZÝKÝY[™Ù[‹°íœ™\œ›ÙÜ˜[[YKZ™[˜[]ˆ‹œØÛÜHŽ–È°å™™™[XÚHÙ[\‹›Ú™ZÝKÝY[™Ù[‹°íœ™\œ›ÙÜ˜[[YKZ™[˜[]‹‘]Y\šYHš[˜[žšY\[™ËZ][˜[œÜ\™[ž‹\Ý0é™YÚÙZ][ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽ_KÈšYŽˆMKMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMKˆ‹]HŽˆ”Û]\ØÚH›ÜšX™[ˆ˜XÚ›ÛšYZ[ˆ‹™\ØÜš\[ÛˆŽˆ•›Ü™Ù\ØÚYÙ[‹Ù\°ï™X[˜YÝ™\ØÚÜÜÙ[‹™YÛÛ›™[‹X™Ù\ØÚÜÜÙ[‹]˜[ZY\ˆ‹œØÛÜHŽ–È•›Ü™Ù\ØÚYÙ[‹Ù\°ï™X[˜YÝ™\ØÚÜÜÙ[‹™YÛÛ›™[‹X™Ù\ØÚÜÜÙ[‹]˜[ZY\—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽWK˜ÛÛ˜Ù\[™HŽŽ™Ü›Ý\Žˆ™\˜[ÛÜ[™ÈŸKÈšYŽˆ™YÚ][‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMˆ‹]HŽˆ‘YÚ][H™^šYZ[™Ù[‹YYY[ˆ[™™]YHXÚ›ÛÙÚY[ˆ‹™\ØÜš\[ÛˆŽˆ‘YÚ][HÛÛZÝKÛÞšX[HYYY[‹ÒKÚXÚ\šZ][™Z[X™HZ][™Ú™HYÚ][HÙ\°éKˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆM‹LH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒM‹ŒH‹]HŽˆ‘YÚ][HÛÛZÝH‹™\ØÜš\[ÛˆŽˆ”ÛÞšX[HYYY[‹Y\ÜÙ[™Ù\‹Û›[™KQÙ[YZ[œØÚY[‹YÚ][Hœ™][™ØÚY[‹ˆ‹œØÛÜHŽ–È”ÛÞšX[HYYY[‹Y\ÜÙ[™Ù\‹Û›[™KQÙ[YZ[œØÚY[‹YÚ][Hœ™][™ØÚY[ˆ‹•šY[ÙÙ\Ü°éÚKÚ[˜Ù[ˆ[™Ü™[ž™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽM_KÈšYŽˆM‹Lˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒM‹Œˆ‹]HŽˆ‘YÚ][HÛÛ[][šZØ][Ûˆ[™Z[œØ[ZÙZ]‹™\ØÜš\[ÛˆŽˆ‘Z[œØ[ZÙZ]›Ýˆ\œ™ZXÚ˜\šÙZ]ÛÞšX[\ˆ™\™ÛZXÚ]\ÙÜ™[ž[™ËÞX™\›[Ø˜š[™Ëˆ‹œØÛÜHŽ–È‘Z[œØ[ZÙZ]›Ýˆ\œ™ZXÚ˜\šÙZ]ÛÞšX[\ˆ™\™ÛZXÚ]\ÙÜ™[ž[™ËÞX™\›[Ø˜š[™È‹”]X[]0éYÚ][\ˆÛÛZÝK™\˜š[™[™ÈÛ›[™KÓÙ™›[™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽNKÈšYŽˆM‹LÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒM‹ŒÈ‹]HŽˆ‘YÚ][HÛÛZÝ™\›Z][™È‹™\ØÜš\[ÛˆŽˆ‘œ™Z^™Z]KÓ˜XÚ˜\œØÚYÜ]›Ü›Y[‹[\™\ÜÙ[™Ü\[‹ˆ‹œØÛÜHŽ–È‘œ™Z^™Z]KÓ˜XÚ˜\œØÚYÜ]›Ü›Y[‹[\™\ÜÙ[™Ü\[ˆ‹“Û›[™KKÓÙ™›[™KU™Y™™[‹][œØÚ]‹™]YËX[š\[][Ûˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŒ_KÈšYŽˆM‹M‹˜ÛÛ˜Ù\[X™\ˆŽˆŒM‹‹]HŽˆ’ðïœÝXÚH[[YÙ[žˆ[™Z[œØ[ZÙZ]‹™\ØÜš\[ÛˆŽˆ’ÒH[ÈÙ\Ü°éÚÜ\™\‹pí™ÛXÚÙZ][‹›ÜœØÚ[™ÜÜÝ[™Ü™[ž™[‹ˆ‹œØÛÜHŽ–È’ÒH[ÈÙ\Ü°éÚÜ\™\‹pí™ÛXÚÙZ][‹›ÜœØÚ[™ÜÜÝ[™Ü™[ž™[ˆ‹‘[[Ý[Û˜[HXš0é™ÚYÚÙZ]][œØÚ]ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽKÈšYŽˆM‹MH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒM‹H‹]HŽˆ‘YÚ][HZ[X™H‹™\ØÜš\[ÛˆŽˆ“Ú™HÛX\Û™KÒ[\›™]Ù[›š\ÜÙKYÚ][H˜\œšY\™Yœ™ZZZ]ˆ‹œØÛÜHŽ–È“Ú™HÛX\Û™KÒ[\›™]Ù[›š\ÜÙKYÚ][H˜\œšY\™Yœ™ZZZ]‹”\œðí››XÚH[\œÝ0ï[™È[™[˜[ÙÙH[\›˜]]™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽßWK˜ÛÛ˜Ù\[™HŽLK™Ü›Ý\ŽˆÚ\ÜÙ[ˆŸKÈšYŽˆ›Z]Ú\šÝ[™È‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMÈ‹]HŽˆ•™\˜[œÝ[[™Ù[‹›Ú™ZÝH[™Z]Ú\šÝ[™È‹™\ØÜš\[ÛˆŽˆ•™\˜[œÝ[[™Ù[‹›Ú™ZÝK[™ØYÙ[Y[[™›ÜœØÚ0éÙH°ïˆ™\ÜÙ\™H™YÙYÛ[™ÜÛpí™ÛXÚÙZ][‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆMËLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMËŒH‹]HŽˆ•™\˜[œÝ[[™Ù[ˆ[ˆ™\™ÙYÜ™ˆ‹™\ØÜš\[ÛˆŽˆ”™YÙ[pé0çÚYÙKÙZ[›X[YÙH™Y™™[‹XZ™Z][‹Ý[\‹œ™Z^™Z]ÜÜˆ‹œØÛÜHŽ–È”™YÙ[pé0çÚYÙKÙZ[›X[YÙH™Y™™[‹XZ™Z][‹Ý[\‹œ™Z^™Z]ÜÜ‹‘™ZY\YÙKX™[™[™ÛØÚ[™[™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽÍ_KÈšYŽˆMËLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMËŒˆ‹]HŽˆ”›Ú™ZÝH[™[š]X]]™[ˆ‹™\ØÜš\[ÛˆŽˆ™\ÝZ[™KÛ™]YH›Ú™ZÝK[Ý›ÜšX™[‹˜XÚ˜\œØÚYZ™[˜[]]˜[ZY\H›Ú™ZÝKˆ‹œØÛÜHŽ–È™\ÝZ[™KÛ™]YH›Ú™ZÝK[Ý›ÜšX™[‹˜XÚ˜\œØÚYZ™[˜[]]˜[ZY\H›Ú™ZÝH—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽÎKÈšYŽˆMËLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMËŒÈ‹]HŽˆ•™\˜[œÝ[[™Ù[ˆ[ˆ[X\™È[™[™\ÝÙZ]‹™\ØÜš\[ÛˆŽˆ°ï™š\ËQX[ÙÙ›Ü™[‹˜XÚH[™Û›[™]™\˜[œÝ[[™Ù[‹ˆ‹œØÛÜHŽ–È°ï™š\ËQX[ÙÙ›Ü™[‹˜XÚH[™Û›[™]™\˜[œÝ[[™Ù[ˆ‹’ÛÛ™™\™[ž™[‹ZÝ[ÛœÝÛØÚ[‹™Z\ÙH[™]\ÜØÚ™ZX[™Ù[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽKÈšYŽˆMËM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMË‹]HŽˆ”Ù[œÝZ]XXÚ[ˆ‹™\ØÜš\[ÛˆŽˆ“Z]XXÚ[‹[™[‹™YÙYÛ[™ÜÙÜ\[‹Ò[š]X]]™[ˆÜ°ï™[‹ˆ‹œØÛÜHŽ–È“Z]XXÚ[‹[™[‹™YÙYÛ[™ÜÙÜ\[‹Ò[š]X]]™[ˆÜ°ï™[ˆ‹™YÙYÛ[™ÜÜÝ0éH[™[‹Ü™Ø[š\Ø][Û™[ˆ™\›™]™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽßKÈšYŽˆMËMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMËH‹]HŽˆ’YY[ˆ[™™\˜™\ÜÙ\[™ÜÝ›ÜœØÚ0éÙH‹™\ØÜš\[ÛˆŽˆ‘™Z[™H™Y™œ[šÝK™\ÝZ[™H[™ÙX›ÝH™\˜™\ÜÙ\›‹›Ú™ZÝYY[‹ˆ‹œØÛÜHŽ–È‘™Z[™H™Y™œ[šÝK™\ÝZ[™H[™ÙX›ÝH™\˜™\ÜÙ\›‹›Ú™ZÝYY[ˆ‹”ÝYZ[™Y\™‹YØ[™ÜÚ0ï™[‹°ï™Ù\™\™˜Z[™Ù[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽŸKÈšYŽˆMËMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒMËˆ‹]HŽˆ™]Z[YÝ[™È0ï™\ˆ™\™ÙYÜ™ˆÙ[YZ[œØ[H‹™\ØÜš\[ÛˆŽˆ“[šÜÈH[›YYÙ[‹\™˜Z[™ÜØ™\šXÚ[‹Ü™Ø[š\Ø][Û™[‹™\ž™ZXÚš\Ëˆ‹œØÛÜHŽ–È“[šÜÈH[›YYÙ[‹\™˜Z[™ÜØ™\šXÚ[‹Ü™Ø[š\Ø][Û™[‹™\ž™ZXÚš\È‹“[šÜÈHÙ\ØÚXÚKÑ\š[›™\[™Ù[‹Û]ZÎÈ™YZÝ[Û™[H[Ù\˜][Ûˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽ_WK˜ÛÛ˜Ù\[™HŽÌK™Ü›Ý\Žˆ˜™\™ÙYÜ™ˆŸKÈšYŽˆœ]Y[[ˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒN‹]HŽˆ”]Y[[‹ÚÝ[Y[][Ûˆ[™˜[œÜ\™[žˆ‹™\ØÜš\[ÛˆŽˆ”]Y[[‹°ïœÝ[™[™YH[\œØÚZY[™ÈÚ\ØÚ[ˆ™[YÝ[HÚ\ÜÙ[‹\™˜Z[™Ù[‹Z[œØÚ0é[™Ù[ˆ[™[[™Ù[‹ˆ‹œØÛÜHŽ–×K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–ÞÈšYŽˆNLH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒNŒH‹]HŽˆ•Ú\ÜÙ[œØÚYXÚH]Y[[ˆ‹™\ØÜš\[ÛˆŽˆ”ÝYY[‹ÜšYÚ[˜[]Y[[‹›ÜœØÚ[™ÜÜÝ[™Z[œØÚ°éšÝ[™Ù[‹ZÝX[\ÚY\[™Ëˆ‹œØÛÜHŽ–È”ÝYY[‹ÜšYÚ[˜[]Y[[‹›ÜœØÚ[™ÜÜÝ[™Z[œØÚ°éšÝ[™Ù[‹ZÝX[\ÚY\[™È—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽMßKÈšYŽˆNLˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒNŒˆ‹]HŽˆ’\ÝÜš\ØÚH]Y[[ˆ‹™\ØÜš\[ÛˆŽˆ–™Z][™Ù[‹Y™\ÜØ°ïÚ\‹Ø\[‹\˜Ú]™K›ÝÙÜ˜YšY[‹ˆ‹œØÛÜHŽ–È–™Z][™Ù[‹Y™\ÜØ°ïÚ\‹Ø\[‹\˜Ú]™K›ÝÙÜ˜YšY[ˆ‹‘\š[›™\[™Ù[‹™]šYXœÛ˜XÚÙZ\ÙKØÚYpçÝ[™Ù[ˆ[™][™ÜÝÙXÚÙ[—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽN_KÈšYŽˆNLÈ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒNŒÈ‹]HŽˆ”Û]\ØÚH[™™Z0íœ™XÚH]Y[[ˆ‹™\ØÜš\[ÛˆŽˆ[]XÚH[\›YÙ[‹XÚÜØXÚ[‹™\ØÚ0ïÜÙK™Z0íœ™[š[™›Ü›X][Û™[‹ˆ‹œØÛÜHŽ–È[]XÚH[\›YÙ[‹XÚÜØXÚ[‹™\ØÚ0ïÜÙK™Z0íœ™[š[™›Ü›X][Û™[ˆ‹‘°íœ™\™[ØÚZY[™Ù[‹[\Ù][™ÜÜÝ[™—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽLŸKÈšYŽˆNM‹˜ÛÛ˜Ù\[X™\ˆŽˆŒN‹]HŽˆ[™ØX™[ˆH[œØ[™ÙX›Ý[ˆ‹™\ØÜš\[ÛˆŽˆ•°éÙ\‹ÛÛZÝ\œ™ZXÚ˜\šÙZ]ÛÜÝ[‹[›Y[[™Ë˜\œšY\™Yœ™ZZZ]°ï\›Z[‹ˆ‹œØÛÜHŽ–È•°éÙ\‹ÛÛZÝ\œ™ZXÚ˜\šÙZ]ÛÜÝ[‹[›Y[[™Ë˜\œšY\™Yœ™ZZZ]°ï\›Z[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽL_KÈšYŽˆNMH‹˜ÛÛ˜Ù\[X™\ˆŽˆŒNH‹]HŽˆ”™YZÝ[Û™[HZ[›Ü™[™È‹™\ØÜš\[ÛˆŽˆ™[YÝH]ØXÚKÚ\ÜÙ[œØÚYXÚ\È\™ÙX›š\Ë\œðí››XÚH\™˜Z[™Ëˆ‹œØÛÜHŽ–È™[YÝH]ØXÚKÚ\ÜÙ[œØÚYXÚ\È\™ÙX›š\Ë\œðí››XÚH\™˜Z[™È‹”Û]\ØÚHZ[œØÚ0é[™Ë›ÜœØÚYË[[™Ë™\ØÚ\ÜË[™Ù\°ïH[™ØX™H—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽLßKÈšYŽˆNMˆ‹˜ÛÛ˜Ù\[X™\ˆŽˆŒNˆ‹]HŽˆ•™\˜[ÛÜ[™È›Ûˆ™\™ÙYÜ™ˆÙ[YZ[œØ[H‹™\ØÜš\[ÛˆŽˆ”š]˜]H[˜Xš0é™ÚYÙH]›Ü›KÙZ[™H[]XÚH°éÙ\œØÚYˆ‹œØÛÜHŽ–È”š]˜]H[˜Xš0é™ÚYÙH]›Ü›KÙZ[™H[]XÚH°éÙ\œØÚY‹’ÙZ[™HÙ™š^šY[H™\™][™È\È°ï™š\ÜÙ\È‹”™YZÝ[Û‹][œØÚ]‹[Ù\˜][Û‹ZÝX[\ÚY\[™ËÛÜœ™ZÝ\™[ˆ—K˜ÛÛ[Žˆˆ‹˜Ú[™[ˆŽ–×K˜ÛÛ˜Ù\[™HŽLLWK˜ÛÛ˜Ù\[™HŽLË™Ü›Ý\Žˆ™\˜[ÛÜ[™ÈŸWX
KXÙZ[œØ[ZÙZ]YVÞÚY˜Ú\ÜÙ[˜]N˜Ú\ÜÙ[ˆ[™\Ø[[Y[š0é™ÙXKÚY˜ÛÛZÝX]N˜ÛÛZÝK™YÙYÛ[™Ù[ˆ[™˜ZÝ\ØÚH[™XKÚY˜™\™ÙYÜ™˜]N˜™\™ÙYÜ™ˆ[™Ù\Ù[ØÚYXÚ\È[™ØYÙ[Y[KÚY˜™\˜[ÛÜ[™Ø]N˜°ï™š\ËÛ]ZÈ[™ÚÝ[Y[][Û˜WNÙ[˜Ý[ÛˆŠOXÙŠ^Û]V×K[™]ÈÙ]Ù[˜Ý[ÛˆŠKOV×J^Ù›ÜŠ]HÙˆJ^ÚYŠXKšYKšYš[˜ÛY\ÊØ
_‹š\ÊKšY
J]›ÝÈ\œ›ÜŠ[™ðïYÙHÙ\ˆÜ[H[Y[‹RQ
NÛ‹˜Y
KšY
NÛ]OVË‹‹šK›X\
OO™KšY
KKšYKÏ^Ë‹‹˜K]™K\™[ÎšK™YŽ›ŠØØ
ÙK›X\
[˜ÛÙUT’PÛÛ\Û™[
Kš›Ú[ŠØ
_NÝœ\Ú
ÊKŠK˜Ú[™[Ÿ×KË‹‹šK×J__\™]\›ˆŠJK]˜\ˆ™YŠ
NÙ[˜Ý[ÛˆŠOV×KY™Š^Ü™]\›ˆ™š[™
Oœ]›[™ÝOOYK›[™Ý	‰œ]™]™\žJ
ŠOOOOYVÛ—JJ_[Y[˜Ý[ÛˆYŠJ^Ü™]\›ˆOËœ\™[Ë˜]
LJOËš™YŸÙZ[œØ[ZÙZ]Y[˜Ý[ÛˆŠJ^Ü™]\›–ÞÝ]N˜Z[œØ[ZÙZ][ˆ™\™ÙYÜ™˜™YŽ›ŸK‹‹™OÖË‹‹™Kœ\™[ËWK›X\
OOŠÝ]N™K]K™YŽ™Kš™YŸJJN–×W_]˜\ˆÙYOO”Ýš[™Ê_
K››Ü›X[^™J‘‘
Kœ™\XÙJÖ×LÌWLÍ™—KÙË
KÓØØ[SÝÙ\Ø\ÙJX
NÙ[˜Ý[ÛˆÙŠKY™Š^Û]YÙŠJKš[J
KœÜ]
×ÊËÊK™š[\Š›ÛÛX[ŠNÜ™]\›ˆ‹›[™ÝÝ™š[\ŠOOžÛ]YÙŠÙK]KK™\ØÜš\[Û‹K˜ÛÛ[ÙŠKšY
WKš›Ú[Š
JNÜ™]\›ˆ‹™]™\žJOOš[˜ÛY\ÊJJ_JN–×_Y[˜Ý[Ûˆ™ŠJ^Û]TÝš[™Ê_
Kš[J
KœÛXÙJÌ
NÜ™]\›ˆŠÊØØ
Û™]ÈT“ÙX\˜Ú\˜[\ÊÜNJKÔÝš[™Ê
N˜
_]˜\ˆY^ØÛÛ™š\›YY˜™\Ý0éYÝH[šðï™YÝ[™Ù[˜[›™Y˜[[™Ù[ˆ8 $È›ØÚÙZ[™H›ÛÝ0é™YÙHZ[›Y[™Ø\˜Ú]™N˜™\™Ø[™Ù[™H\›Z[™H[™ÚÝ[Y[][Û˜K™YOO›™]È[‘]U[YQ›Ü›X]
KQXÙ^N˜‹YYÚ][Û˜‹YYÚ]YX\Ž˜[Y\šXØ[YV›Û™N˜]\›ÜKÐ™\›[˜JK™›Ü›X]
™]È]JJØLŽŒŒ
ÌNŒ
JNÙ[˜Ý[ÛˆŠ
^Û]ÙKOJ\ÙTÝ]JJ

OO›™]È]JNÜ™]\›Š\ÙQY™™XÝ
J

OOžÛ]O\Ù][\˜[


OO
™]È]JK™M
NÜ™]\›Š
OO˜ÛX\’[\˜[
J_K×JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYš[˜[˜\šXK[X™[YžHŽ˜Û™[[™\ÜËY]™[Ë]]XÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜËY]™[Ë]]XÚ[™[Ž˜\›Z[™Nˆ™\Ý0éYÝÙ\[Ù\ˆ™\™Ø[™Ù[˜JK
šœÞ
JØÚ[™[Ž˜™YZÝ[Û™[H]\ÝØZ0­ÈÙ\°ï[HMˆ›Ý™[X™\ˆŒˆ0­È™Z]›Û™H]\›ÜKÐ™\›[‹ˆÙZ[™H]]ÛX]\ØÚH0ç™\›˜ZYH™]Y\ˆ\›Z[™H[™ÙZ[™HZYÙ[™H[›Y[[™Ëˆ›ÜˆZ[˜ZYHYHÜšYÚ[˜[ÙZ]H]Yˆ0á™\[™Ù[ˆ°ï™[‹˜JK
šœÞ
JØÚ[™[Ž˜\›™]]HXœØÚ\ÜÜ°ï[™ÎˆYHšY\ˆ[[™ÜÙ][ˆ°ïˆ›Ü[H[™X[ÙÙ›Ü™[ˆŒÈ›ZX™[ˆ[ÈÚÝ[Y[Y\\ˆœ°ï\™\ˆ[[™ÜÜÝ[™\š[[‹ˆ[HZÝY[Ù[\Ù[™[ˆ™\˜[œÝ[\^Ú[™Y\ÙHZ[ž™[\›Z[™HšXÚ\›™]]™\Ý0éYÝˆÚYHÚ[™ÙZ[™HðïYÙHZ[›Y[™ÎÈ\›Z[ˆ[™\˜Ú°ï[™ÈpïÜÙ[ˆ™Z[H°ï™š\ÈÙZÛ0éÙ\™[‹ˆ]XÚYHXÙZXÚ[™[ˆ˜[X\‹P[™ØX™[ˆ›ZX™[ˆ[™ÙZÛ0é˜JKY
JK›X\
OŠšœÞÊJÙXÝ[Û˜È˜\šXK[X™[YžHŽ˜Û™[[™\ÜËY]™[YÜ›Ý\X
ÝšYÚ[™[Ž–ÊšœÞ
JØÚY˜Û™[[™\ÜËY]™[YÜ›Ý\X
ÝšYÚ[™[ŽžY–ÝšY_JK]™]™[Ë›[™Ý	‰ŠšœÞ
JØÚ[™[Ž˜[ˆY\Ù\ˆ]\ÝØZ\ž™Z]ÙZ[™HZ[°éÙK˜JK
šœÞ
J[ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËY]™[[\ÝÚ[™[Ž™]™[Ë›X\
OŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž›‹]_JK
šœÞÊJØÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–Ø™Š‹œÝ\
K‹™[™OO[‹œÝ\Ø˜š\È
Ø™Š‹™[™
K0­È‹[YW_JK‹œÝ\OOXÙ
JOØ0­È]]H
™\˜[œÝ[\˜[™ØX™JX˜_JK
šœÞÊJØÚ[™[Ž–Û‹˜Ø]YÛÜžK0­È‹œXÙW_JK
šœÞÊJØÚ[™[Ž–Ø™\˜[ÛÜXÚˆ‹œ›ÝšY\—_JK
šœÞ
JØÚ[™[Ž›‹˜XØÙ\ÜßJKšYOOX\˜Ú]™X	‰ŠšœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜™\™Ø[™Ù[ˆ8 $ÈÙZ[ˆ™]›ÜœÝZ[™\ˆ\›Z[‹˜JK‹šÚ[™OOX[›™YØ\œÜ°ï™ÛXÚH[[™ÎÈ\˜Ú°ï[™ÈšXÚ™\Ý0éYÝ˜˜_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ›‹\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[ŽšYOOX\˜Ú]™XØÜšYÚ[˜[]Y[HÈÚÝ[Y[][Û˜˜ÜšYÚ[˜[]Y[H[™Z[˜ZYZ[™›Ü›X][Û™[˜JK0­È
šœÞ
JXÚ™YŽ˜Y–Û‹œÛÝ\˜ÙWK\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜\›Z[˜™[YØJW_JK
šœÞÊJÛX[ØÚ[™[Ž–Ø]H°ï[™Îˆ™Š‹˜ÚXÚÙY
W_JW_K‹šY
J_JW_KšY
JW_J_Y[˜Ý[ÛˆÙŠÛ›ÙN™_J^Û]Z
JNÜ™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYš[˜[˜\šXK[X™[YžHŽ˜Û™[[™\ÜËXÛÛ›™XÝ[ÛœË]]XÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜËXÛÛ›™XÝ[ÛœË]]XÚ[™[Ž˜ÙZ]\›\Ù[ŽˆÚYHY\Ù\È[XH\Ø[[Y[š0é™ÝJK
šœÞ
J[ØÚ[™[Ž›X\

ÚY™K™X\ÛÛŽJOOžÛ]Y™‹™š[™
OšYOOYJNÜ™]\›ˆÊšœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ›‹š™Y‹Ú[™[Ž›‹]_JK
šœÞ
JØÚ[™[ŽJW_KJN›[J_JW_J_Y[˜Ý[ÛˆÙŠ
^Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYš[˜[˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\]›Ü›K[[šÜØÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜË\]›Ü›K[[šÜØÚ[™[Ž˜™\˜š[™[™Ù[ˆ\ˆ°ï™Ù\œ]›Ü›XJK
šœÞ
JØÚ[™[Ž˜YH›ÛÙ[™[ˆ™\™ZXÚHÚ[™\Ø˜\‹ˆ0å™™™[XÚHZ[œ™ZXÚ[™Ù[ˆÚ[™ÙZ]\š[ˆXZÝ]šY\ÈYH[šÜÈÚ[™ÙZ[™Hœ™Z\ØÚ[[™ÈZ[™\ˆ™]Z[YÝ[™ÜÙ[šÝ[Û‹˜JK
šœÞ
J[ØÚ[™[Ž™Ù›X\

ÙK—JOOŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ™KÚ[™[ŽJK
šœÞ
JØÚ[™[Ž›ŸJW_KJJ_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜Ú[\™\ÜÝ[XÚ[™[Ž˜™\ÝZ[™HÛÛZÝ[™ØX™[ˆ[H[\™\ÜÝ[XJK0­È
šœÞ
JXÚ™YŽ˜Ù][œØÚ]˜Ú[™[Ž˜][œØÚ]˜JK0­È
šœÞ
JXÚ™YŽ˜ÜÛ]ZËØ™YÙYÛ[™ÜÛÜXÚ[™[Ž˜™YZÝ[Û™[HÛ]\ØÚH™YÙYÛ[™ÜÜÝ0é[™›Ü™\[™ØJW_JW_J_Y[˜Ý[ÛˆÙŠ
^Û]ÙKOJ\ÙTÝ]JJLJNÜ™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYš[˜[˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\ÛÝ\˜ÙK\™YÚ\Ý\˜Ú[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜË\ÛÝ\˜ÙK\™YÚ\Ý\˜Ú[™[Ž˜Ù[YZ[œØ[Y\È™YZÝ[Û™[\È]Y[[œ™YÚ\Ý\˜JK
šœÞ
JØÚ[™[Ž˜Ù[Z\ØÚH]Y[[\[ŽˆÚ\ÜÙ[œØÚY[]XÚH[\›YÙ[ˆ[™[œÝ]][Û™[H[™ØX™[‹ˆYHÛÛšÜ™]H™\Ù[™[™È[™Z™HÜ™[ž™[ˆÝZ[ˆ[H™]ÙZ[YÙ[ˆ˜XÚ^ˆZ[ˆ]Y[[œ™YÚ\Ý\™Z[˜YÈ™\Ý0éYÝÙZ[™H\°ï™\ˆ[˜]\ÙÙZ[™H™Z]\[™Ë˜JK
šœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Î‹ËÙÚ]X‹˜ÛÛKÓX\šÐ™\™ÙYÜ™‹Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ›Ø‹ÛXZ[‹ÙØÜËÙZ[œØ[ZÙZ]Ø]Y˜YÍË›Y\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜]\Ù°ï›XÚ\ˆ™X\˜™Z][™ÜËH[™›ÛÝ0é™YÚÙZ]Ø™\šXÚZ]Ù™™[™[ˆ[šÝ[˜J_JK
šœÞÊJ]Û˜Ý\N˜]Û˜˜\šXKY^[™YŽ™K˜\šXKXÛÛ›ÛÈŽ˜Û™[[™\ÜË\™YÚ\Ý\‹Y[šY\ØÛÛXÚÎŠ
OO
YJKÚ[™[Ž–ÓØš™XÝšÙ^\ÊYŠK›[™Ý˜XÚÙZ\ÙHZ]\šÝ[™[™°ïœÝ[™OØØÚYpçÙ[˜˜0í™™›™[˜_JKI‰ŠšœÞ
J[ÚY˜Û™[[™\ÜË\™YÚ\Ý\‹Y[šY\ØÚ[™[Ž“Øš™XÝ™[šY\ÊYŠK›X\

ÙKJOOŠšœÞÊJXØÚ[™[Ž–ÊšœÞÊJØÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–Ý˜]]ÜœË
žYX\‹
X_JKˆ
šœÞ
JXÚ™YŽ\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž]_JK0­ÈœX›XØ][Û—_JK
šœÞÊJØÚ[™[Ž–ØÙ\°ïHÜ[™YÙNˆ›Y]Ù_JK
šœÞÊJØÚ[™[Ž–Ø]\ÜØYÙYÜ™[ž™[Žˆ›[Z]][Ûœ×_JK
šœÞÊJØÚ[™[Ž–Ø]H°ï[™Îˆ˜ÚXÚÙYšXÚÚÝ[Y[Y\ÈÙZ[™HZÝY[H°ï[™È™Z]\]˜_JW_KJJ_JW_J_]˜\ˆVÖØ™\™ÙYÜ™‹Pš[KTÝY[™Ø]Y˜YÍK\ÝY[™Ø™\ÝZ[™HZ[œšXÚ[™ÎÈ°éÙ\š[ˆ\ˆ°ï™š\ÙÙ\ØÚ0éÜÝ[K˜˜XÚ˜\œØÚYXÚH™Y™œ[šÝH[™ÝY[™ÜÝ0éYÚÙZ]˜KØ°ï™š\ÈÙYÙ[ˆZ[œØ[ZÙZ][X\™Ø]Y˜YÍ‹X™ÙZš]š[Ù\Ù[ØÚYXÚ\È™]Ù\šÎÈÙ™š^šY[HÙ\ØÚ0éÜÝ[H™\›[šÝ˜Ý˜]YÚY\›Þ™\ÜÈ[™Z]Ú\šÝ[™ÎÈÙZ[™H™Z0íœ™H[™ÙZ[ˆ[Ù[YZ[™\ˆ™\˜][™ÜÙY[œÝ˜KØRÕU“ÓKS[™\Û™]Ù\šØ]Y˜YÍKXZÝ]›ÛXÛÛšÜ™]HÛÛÜ\˜][ÛˆZ]™ÑR\˜ÚÙ[YZ[œØ[YH˜XÚYÜÙZ[›Y[™È™[YÝ˜[™ØYÙ[Y[[™˜XÚXÚ\ˆ]\Ý]\ØÚ˜KØQÑ•È[X\™Ø]Y˜YÍKXYÙØ™\ÝZ[™\ˆÛÚ˜ZÞ\Ø[[Y[œØÚ\ÜÎÈÙZ[™H]\ØÚ[H°ï™š\ÛZ]ÛYYØÚY™Z]\]˜ÜšYÚ[˜[™\ž™ZXÚš\È\ˆ[X\™Ù\ˆZ]ÛYYÝ™\˜°é™K˜KØÒTÔÈ[X\™Ø]Y˜YÍKZÚ\ÜØ™\ÝZ[™\ˆÙ[œÝ[™^YØ[™ÎÈÙZ[ˆYÙ\ØYÝ\ˆÜ\[œ]‹˜[™›Ü›X][Ûˆ[™™\˜][™È\ˆÙ[œÝ[™K˜KØœ™Z]Ú[YÙ[˜YÙ[\ˆ™\™ÙYÜ™˜]Y˜YÍ‹Yœ™Z]Ú[YØ™\ÝZ[™\È[™ÙX›ÝÈÙZ[™H™\›Z][™È\˜ÚY\ÙHÙXœÚ]K˜œ™Z]Ú[YÙ\È[™ØYÙ[Y[[H™^š\šË˜KØÑÈ™\™ÙYÜ™˜]Y˜YÍ‹\ÜÜ™\ÝZ[™\ˆÜÜ[˜šY]\ŽÈÛÛšÜ™]HÝ\œÙHÙ\ÛÛ™\°ï™[‹˜ÜÜ[™Z™[˜[]XÚHZ]\˜™Z]˜KØ[š]™\œÚ]0é[X\™È8 $È›ÜœØÚ[™ÈH™]Ù\šÙ[˜]Y˜YÍK][šX›Üš[™[™H^\\ÙNÈZ]\˜™Z][H]›Ü›]›ÜšX™[ˆ\ˆpí™ÛXÚHÛÛÜ\˜][Û‹˜[š]™\œÚ]0é™H\œÝ[[™ÈZ[™\È›ÜœØÚ[™ÜÙ™[Ë˜KØ[X\™Ù\ˆ]\Ø™\ÝXÚ]Y˜YÍKZ]\Ø™\ÝXÚ[]XÚ\È™\ÝXÚØ[™ÙX›Ý°ïˆÙ[š[Üš[›™[ˆ[™Ù[š[Ü™[‹˜]Y™ØX™[ˆ[™YØ[™È™Z[H™\˜[ÛÜXÚ[ˆ[˜šY]\ˆ°ï™[‹˜WNÙ[˜Ý[ÛˆYŠ
^Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYš[˜[˜\šXK[X™[YžHŽ˜Û™[[™\ÜË[Ü™Ø[š\Ø][ÛœØÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜË[Ü™Ø[š\Ø][ÛœØÚ[™[Ž˜0ç™\œ°ïH[œÝ]][Û™[HZ[œÝYYÙXJK
šœÞ
JØÚ[™[Ž˜ÙZ[™H›ÛÝ0é™YÙH°ï™š\ÛZ]ÛYY\›\ÝKˆ™\ÝZ[™HZ[œšXÚ[™Ù[‹™[YÝHÛÛÜ\˜][Û™[ˆ[™pí™ÛXÚH\™\ˆÙ\™[ˆÙ]™[›™^™ZXÚ™]ˆÛÜÝ[‹0é™H[™ÛÛšÜ™]H˜\œšY\™Yœ™ZZZ]Ú[™™Z[H™]ÙZ[YÙ[ˆ[™ÙX›ÝH°ï™[‹˜JK
šœÞ
J[ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËY]™[[\ÝÚ[™[Ž•‹›X\

ÙK‹—JOOžÛ]OXY–ÝNÜ™]\›ŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž™_JK
šœÞ
JØÚ[™[ŽŠšœÞ
JÝ›Û™ØØÚ[™[Ž›ŸJ_JK
šœÞ
JØÚ[™[ŽœŸJK
šœÞ
JXÚ™YŽšK\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÜšYÚ[˜[]Y[H[™ZÝY[\ˆÛÛZÝJK
šœÞÊJØÚ[™[Ž–Ø]H°ï[™ÎˆK˜ÚXÚÙYšXÚÚÝ[Y[Y\_JW_KJ_J_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜ÛÜ™Ø[š\Ø][Û˜Ú[™[Ž˜[H™\ÝZ[™[ˆÜ™Ø[š\Ø][ÛœØ™\™ZXÚJK0­È
šœÞ
JXÚ™YŽ˜Ý™\ž™ZXÚš\ØÚ[™[Ž˜[H™\ÝZ[™[ˆ™\ž™ZXÚš\ØJK0­È
šœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]Ú[™XÚ[™[Ž˜HÛÛšÜ™][ˆ[œÞYðé™Ù[˜JW_JW_J_]˜\ˆJ‹‹™JOO™K™š[\Š
KŠOOˆHYI‰™Kš[J
HOOX	‰›‹š[™^ÙŠJOOO]
Kš›Ú[Š
Kš[J
KÙYOO™Kœ™\XÙJÊØK^ŒNWJJÐKV—JKÙË	KI˜
KÓÝÙ\Ø\ÙJ
KÙYOO™Kœ™\XÙJ×ŠÐKV—J_×ËW×JÊÊKÙË
KŠOO›Û‹Õ\\Ø\ÙJ
NÓÝÙ\Ø\ÙJ
JKYYOOžÛ]ZÙŠJNÜ™]\›ˆ˜Ú\]

KÕ\\Ø\ÙJ
JÝœÛXÙJJ_K™^Þ[œÎ˜‹ËÝÝÝËÌË›Ü™ËÌŒÜÝ™ØÚYŒZYÚŒšY]Ð›Þ˜š[˜›Û™XÝ›ÚÙN˜Ý\œ™[ÛÛÜ˜Ý›ÚÙUÚYŒ‹Ý›ÚÙS[™XØ\˜›Ý[™Ý›ÚÙS[™Z›Ú[Ž˜›Ý[™KYYOOžÙ›ÜŠ][ˆJZYŠœÝ\ÕÚ]
\šXKX
_OOX›ÛXOOX]X
\™]\›ˆLÜ™]\›ˆL_K™J˜Ü™X]PÛÛ^
JßJKJ
OOŠ\ÙPÛÛ^
J™ŠK™J™›ÜØ\™™YŠJ
ØÛÛÜŽ™KÚ^™NÝ›ÚÙUÚY›‹XœÛÛ]TÝ›ÚÙUÚYœ‹Û\ÜÓ˜[YNšOXÚ[™[Ž˜KXÛÛ“›ÙN›Ë‹‹œßKÊOOžÛ]ÜÚ^™N›LÝ›ÚÙUÚYOL‹XœÛÛ]TÝ›ÚÙUÚY™HLKÛÛÜŽœXÝ\œ™[ÛÛÜ˜Û\ÜÓ˜[YN›OXOTŠ
OÏÞßK\ÏÙÓ[X™\ŠÏÝJJŒÓ[X™\ŠÏÛ
N›ÏÝNÜ™]\›Š˜Ü™X]Q[[Y[
JÝ™ØÜ™YŽ˜Ë‹‹š™‹ÚYÏÛÏÚ™‹ÚYZYÚÏÛÏÚ™‹šZYÚÝ›ÚÙN™OÏÜÝ›ÚÙUÚYšÛ\ÜÓ˜[YN‘ŠXÚYXKJK‹‹ˆXI‰ˆSYŠÊI‰žÈ˜\šXKZY[ˆŽ˜YXK‹‹œßKË‹‹›Ë›X\

ÙKJOOŠ˜Ü™X]Q[[Y[
JK
JK‹‹\œ˜^Kš\Ð\œ˜^JJOØN–ØWWJ_JKYJK
OOžÛ]J™›ÜØ\™™YŠJ
ØÛ\ÜÓ˜[YN›‹‹‹œŸKJOOŠ˜Ü™X]Q[[Y[
J™‹Ü™YŽšKXÛÛ“›ÙNÛ\ÜÓ˜[YN‘ŠXÚYKIÓÙŠYŠJJ_XXÚYKIÙ_XŠK‹‹œŸJJNÜ™]\›ˆ‹™\Ü^S˜[YOPYŠJKŸKRYŠ\œ›ÝË[YÖØ]Ù˜LLˆNKMËMÈËMØÙ^N˜[ÌŽ[˜WKØ]Ù˜LNHL’XÙ^N˜Þ›WWJK™RYŠ\œ›ÝË\šYÚÖØ]Ù˜MHLšMÙ^N˜X^\ÌWKØ]Ù˜LLˆHÈËMÈØÙ^N˜]^ØWWJK™RYŠ\œ›ÝË]\\šYÚÖØ]Ù˜MÈÚLŒLÙ^N˜]]›ŽXWKØ]Ù˜MÈMÈMÈØÙ^N˜]šÚ^˜XWWJK™RYŠZ[[™ËL˜ÖØ]Ù˜LLLšÙ^N˜MM˜ŒWKØ]Ù˜LLÙ^N˜\ÜŒ˜Y˜WKØ]Ù˜LMŒ]‹LØLˆˆMŒØÙ^N˜\™ÚYZXWKØ]Ù˜MˆLLˆˆLˆØLˆˆˆšM˜Lˆˆ‹L•ŽXLˆˆL‹LšL˜Ù^N˜ÙXÛZL˜WKØ]Ù˜MˆŒUXLˆˆH‹LšLˆˆHˆŒM˜Ù^N˜Mœ˜LWWJK™RYŠØ[[™\‹Y^\ØÖØ]Ù˜NŒØÙ^N˜Z[Ù\Û˜WKØ]Ù˜LMˆŒØÙ^N˜ÝÍØWKØ™XÝÞ˜ØN˜ØÚY˜NZYÚ˜Nž˜˜Ù^N˜[ÚX˜WKØ]Ù˜LÈZNÙ^N˜\YÝWKØ]Ù˜NLÚŒXÙ^N˜\ØWKØ]Ù˜LLˆLÚŒXÙ^N˜L]]WKØ]Ù˜LMˆLÚŒXÙ^N˜Ú\ÛWKØ]Ù˜NMÚŒXÙ^N˜Ø™ÍÚXWKØ]Ù˜LLˆMÚŒXÙ^N˜ÌœXWKØ]Ù˜LMˆMÚŒXÙ^N˜[™WWJKRYŠÚ]œ›Û‹YÝÛ˜ÖØ]Ù˜MˆHˆˆ‹M˜Ù^N˜\[œÛWWJKYRYŠÚ]œ›Û‹\šYÚÖØ]Ù˜NHN‹M‹M‹M˜Ù^N˜]ÜXWWJKÙRYŠÝÛ›ØYÖØ]Ù˜LLˆMUŒØÙ^N˜NYÌ^XWKØ]Ù˜LŒHM]LˆˆKLˆ’XLˆˆKL‹L‹MÙ^N˜ZÛŒÚWKØ]Ù˜MÈLHHKMXÙ^N˜œœÛÌWWJKÙRYŠ^\›˜[[[šØÖØ]Ù˜LMHÚ˜Ù^N˜\NYÝWKØ]Ù˜LLMŒHØÙ^N˜Üœ˜WKØ]Ù˜LNLÝ˜LˆˆKLˆ’XLˆˆKL‹L•ŽLˆˆH‹Lš˜Ù^N˜Mž\\WWJKÙRYŠX\Z[™ÚZÙXÖØ]Ù˜LNKMMMÌŒHL‹ŽŽŒˆLKHŒˆKXMKHKHNKNLKLËÍ‹‹ˆKKŽNŒPMKHKHˆKXÌ‹ŒÈKHÈK[KLÍHKŒÍŒ˜Lˆˆ‹ŽÎKŒLˆ‹ŒLˆ‹ŒLˆKŒLÈ‹ŒL‹ŒLHËLÈ‹ŒL‹ŒLËŒˆˆL‹ŽŽLKŽKLKŽ˜L‹H‹HLËHLKÌHKÌXLˆˆKL‹ŽŽˆˆHL‹ŽŽ‹ŽŒËL‹ÍŒ˜Ù^N˜MÛ\]˜WWJKYRYŠX\\[˜ÖØ]Ù˜LŒLÌŽNLËMKLÎHLŒNLËMËŒÎNHLKÎNXLHHKLKŒŒˆÎKLÎHŒŒNLÈMŽNLÈLNHMˆÙ^N˜\ŒŒ˜WKØÚ\˜ÛXØÞ˜L˜ÞN˜LŽ˜ØÙ^N˜[ZØWWJK™RYŠY[XÖØ]Ù˜MZM˜Ù^N˜]\ŽXWKØ]Ù˜MLšM˜Ù^N˜[ZÚØWKØ]Ù˜MNZM˜Ù^N˜Y™ØX˜WWJKYRYŠš[\˜ÖØ]Ù˜MˆNLˆˆKL‹L‹MXLˆˆH‹LšM˜LˆˆHˆXLˆˆKLˆšL˜Ù^N˜MÝÞYWKØ]Ù˜MˆUŒØLHHHKLZLLHHHH]˜Ù^N˜Z]™MØWKØ™XÝÞ˜˜N˜MÚY˜L˜ZYÚ˜ž˜XÙ^N˜]YLØWWJKRYŠÙX\˜ÚÖØ]Ù˜LŒHŒKMŒÍMŒÍÙ^N˜MÜš˜WKØÚ\˜ÛXØÞ˜LXÞN˜LXŽ˜Ù^N˜ZŽMÝXWWJK™RYŠÖØ]Ù˜LNˆˆNÙ^N˜X›YŽWKØ]Ù˜MˆˆLˆL˜Ù^N˜šÍ˜WWJKYVÖØËLXXÚ°ïHZXÚZ[œØ[XKØËL˜XÚ™[°íYÙH›Ù™\ÜÚ[Û™[H[™XKØËLØXÚØ[›ˆYZ[™HÛÚ[™ÈØ][H™\›\ÜÙ[˜KØËMXÚpí˜ÚH™[X[™[™\™[H[™[˜KØËMX[H[œØ[™ÙX›ÝH[œÙZ[˜WNÙ[˜Ý[Ûˆ	Š
^Ü™]\›ŠšœÞÊJ\ÚYXØÛ\ÜÓ˜[YN˜Û™[[™\ÜË]\™Ù[˜\šXK[X™[Ž˜š[™Ù[™HYY^š[š\ØÚH[™XÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™ZHZÝ]\ˆÙY˜ZŽˆ›Ù™\ÜÚ[Û™[H[™XJK
šœÞÊJØÚ[™[Ž–Ø™ZHX™[œÙÙY˜ZˆÙ\ˆZÝ]\ˆÙ[œÝÙY°é™[™Îˆ
šœÞ
JXÚ™YŽ˜[ŒLL˜Ú[™[Ž˜LL˜JKˆ°ïˆš[™Ù[™KšXÚX™[œØ™Y›ÚXÚHYY^š[š\ØÚH™\ØÚÙ\™[‹YHšXÚš\È\ˆ°éÚÝ[ˆÜ™XÚ™Z]Ø\[ˆðí››™[Žˆ
šœÞ
JXÚ™YŽ˜[ŒLMŒLMØÚ[™[Ž˜LMŒLMØJK˜_JK
šœÞÊJØÚ[™[Ž–ØY\ÙHÙXœÚ]H\ÝÙZ[ˆÜš\Ù[™Y[œÝˆØ\[ˆÚYH™ZH[›Z][˜\™\ˆÙY˜ZˆšXÚ]YˆZ[™HKSXZ[P[ÛÜˆ
šœÞ
JXÚ™YŽ˜Î‹ËÝÝÝËŒLMŒLMË™KÙKØY\žXÚ\‹X™\™Z]ØÚYÙY[œÝœ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ù™š^šY[H[™›Ü›X][ÛˆH›ÝYˆ[™™\™Z]ØÚYÙY[œÝJK˜_JW_J_Y[˜Ý[Ûˆ\
ÚY™_J^Û]Ý—OJ\ÙTÝ]JJ
KÜ‹WOJ\ÙTÝ]JJ
KØK×OJ\ÙTÝ]JJ
KÜË×OJ\ÙTÝ]JJLJKÛWOJ\ÙTÝ]JJLJKVØ[™XËMXKš[˜ÛY\ÊJKYÖ™
JN›[O^ÈËLHŽ–Ø™YÛZ]\˜Ú\ÜØ™YÛZ]\‹YÜ\[˜[Y›ÛœÙY[ÛÜ™ÙXKËLˆŽ–ØÜXœÛÙ›ØœØÜ™\˜˜[Z[YXKËLÈŽ–ØšØ›YÙXÛÙ\œ\˜™\˜][™ØÜÜ^˜KËMŽ–ØÙ[š[Ü™[˜ÜX›YÙXÚ\ÜØ_KÏI
Ü]Y\žNÚ[™œ‹œ™YSÛ›NœËÛYSÛ›N›JK™š[\ŠOŠŸVÙWOËš[˜ÛY\ÊšY
JI‰Š\šYËš[˜ÛY\ÊšY
JJNÜ™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËZ[\ÙXÝ[Û˜˜\šXK[X™[Ž˜\™ZÝ\ˆYØ[™ÈH[\œÝ0ï[™ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜ÛÛZÝH[™[\œÝ0ï[™Èš[™[˜JK
šœÞ
JØÚ[™[Ž˜ðé[ˆÚYH[ˆZ[œÝYYË\ˆHZ™\ˆÚ]X][Ûˆ\ÜÝˆÙZ[ˆÛÛÈ[™ÙZ[™HZ[œ™ZXÚ[™È\™›Ü™\›XÚ˜JK
šœÞ
J˜]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËZ[\]Ø˜\šXK[X™[Ž˜[™]Ý[œØÚ]\Ýðé[˜Ú[™[Ž”Y‹›X\

ÙKJOOŠšœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]Ú[™KØ
ÙKÚ[™[ŽKJJ_JK
šœÞ
J	‹ßJK
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž™Ø0ç™\œ°ïH[œÞYðé™ÙH°ïˆ™\™ÙYÜ™˜˜\™ZÝHÛÛZÝH°ïˆY\Ù[ˆZ[œÝYYØJK
šœÞÊJØÚ[™[Ž–ÙØNYðé™ÙKZ[œØÚYpçÛXÚ[X\™ÝÙZ]\ˆ\™ðéž[™Ù[‹˜˜]\ÙÙ]ðéHÛÛZÝH]\È\ˆ0ç™\œÚXÚZ][œÙÙ\Ø[]N[œÞYðé™Ù[‹˜Ý[™ˆL‹ˆ›Ý™[X™\ˆŒ‹ˆÙ\°ïÝ\™[ˆ™\°í™™™[XÚHÜšYÚ[˜[[™ØX™[ŽÈÙZ[™H\Ý[œY™K›Ü‹SÜT°ï[™ÈÙ\ˆØ\^š]0éØ™\Ý0éYÝ[™Ëˆ[˜™ZØ[›HY\šÛX[HÚ[™]\Ù°ïÚÛXÚÙZÙ[›ž™ZXÚ™]˜_JK‰‰ŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËZ[Yš[\œØÚ[™[Ž–ÊšœÞÊJX™[Ú[›ÜŽ˜[\Ú]X][Û˜Ú[™[Ž–ØÙ[ÚH]\ÜØYÙH\ÜÝÙ\˜YH[HZ\Ý[Ø
šœÞÊJÙ[XÝÚY˜[\Ú]X][Û˜˜[YN˜KÛÚ[™ÙN™OO›ÊK\™Ù]˜[YJKÚ[™[Ž–ÊšœÞ
JÜ[Û˜Ý˜[YN˜Ú[™[Ž˜ÙZ[™HÚ]X][Ûˆ]\Ýðé[˜JK›X\
OOŠšœÞ
JÜ[Û˜Ý˜[YN™KšYÚ[™[Ž™K›X™[KKšY
JW_JW_JK	‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Û™[[™\ÜËZ[\Ú]X][Û‹[›ÝX›ÛN˜Ý]\ØÚ[™[Ž–Ü››ÝK›[šÉ‰ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–Ø
šœÞ
JXÚ™YŽœ›[šËš™Y‹\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Žœ›[šË›X™[JW_JW_JK
šœÞÊJX™[Ú[›ÜŽ˜[\]Y\žXÚ[™[Ž–Ø˜[YK[›YYÙ[ˆÙ\ˆZ[žYÜÙÙXšY]
šœÞ
J[œ]ÚY˜[\]Y\žX\N˜ÙX\˜Ú˜[YNX^[™ÝŒŒÛÚ[™ÙN™OO›ŠK\™Ù]˜[YJKXÙZÛ\Ž˜[H™Z\ÜY[ˆ›YÙK˜]Y\ˆÙ\ˆÚœ°ïÙÙXJW_JK
šœÞÊJX™[Ú[›ÜŽ˜[ZÚ[™Ú[™[Ž–Ø\\ˆ[\œÝ0ï[™Ø
šœÞÊJÙ[XÝÚY˜[ZÚ[™˜[YNœ‹ÛÚ[™ÙN™OOšJK\™Ù]˜[YJKÚ[™[Ž–ÊšœÞ
JÜ[Û˜Ý˜[YN˜Ú[™[Ž˜[H[\œÝ0ï[™ÜØ\[˜JKY›X\
OOŠšœÞ
JÜ[Û˜ØÚ[™[Ž™_KJJW_JW_JK
šœÞÊJX™[ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËZ[XÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙYœËÛÚ[™ÙN™OO˜ÊK\™Ù]˜ÚXÚÙY
_JK\ˆ]\Ù°ïÚÛXÚÛÜÝ[™œ™ZYHZ\Ý[™Ù[˜_JK
šœÞÊJX™[ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËZ[XÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY›ÛÚ[™ÙN™OOJK\™Ù]˜ÚXÚÙY
_JK]\Ø™\ÝXÚ[H]Y™ØX™[˜™\™ZXÚ™\Ý0éYÝ_JK
šœÞ
J]Û˜Ý\N˜]Û˜ÛÛXÚÎŠ
OOžÛŠ
KJ
KÊ
KÊLJKJLJ_KÚ[™[Ž˜š[\ˆ\°ïÚÜÙ]™[˜JW_JK‰‰ŠšœÞ
JØÚ[™[Ž˜[˜™ZØ[›HÛÜÝ[ˆ[™[˜™\Ý0éYÝH]\Ø™\ÝXÚHÙ\™[ˆ™ZHY\Ù[ˆš[\›ˆ]\ÙÙ\ØÚÜÜÙ[‹ˆ[Y›Ûš\ØÚH\œ™ZXÚ˜\šÙZ]\ÝÙZ[™H\ØYÙHÛÙ›ÜYÙ\ˆ™\˜][™ËˆYH]\ÝØZÚ\™\ˆ[HZÝY[[ˆœ›ÝÜÙ\ž\Ý[™™\˜\˜™Z]][™ÙY\ˆÙ\ÜZXÚ\›ØÚ[ˆ[˜šY]\ˆ0ï™\›Z][˜JK
šœÞÊJÜ›ÛN˜Ý]\Ø˜\šXK[]™HŽ˜Û]XÚ[™[Ž–ÙË›[™ÝØ›ÛˆN[œÞYðé™Ù[ˆ[™Ù^™ZYÝ˜˜]\ÙÙ]ðéH[œÞYðé™ÙH[™Ù^™ZYÝ˜_JKË›[™ÝOOL	‰ŠšœÞ
JØÚ[™[Ž˜ÙZ[ˆ\ÜÙ[™\ˆZ[˜YÈ[ˆY\Ù\ˆ]\ÝØZˆÙ]™[ˆÚYHš[\ˆ\°ïÚÈÙ\ˆœ˜YÙ[ˆÚYHZ[™H™\˜][™ÜÜÝ[H˜XÚZ[™[HÙYZYÛ™][ˆYØ[™ËˆYH]\ÝØZ\ÝÙZ[ˆ›ÛÝ0é™YÙ\ˆ˜XÚÙZ\È[\ˆ0íœXÚ[ˆ[™ÙX›ÝK˜JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË[Ù™™\œØÚ[™[Ž™Ë›X\
OOŠšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜Û™[[™\ÜË[Ù™™\˜Ú[™[Ž–ÊšœÞ
JØØÚ[™[Ž™K›˜[Y_JK
šœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜË[Ù™™\‹\›ÝšY\˜Ú[™[Ž™Kœ›ÝšY\ŸJK
šœÞ
JØÚ[™[Ž™KœÝ\ÜJK
šœÞ
J[ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË[Ù™™\‹XÛÛXÝØÚ[™[Ž™K˜ÛÛXÝË›X\
OOŠšœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ™Kš™Y‹Ú[™[Ž™K›X™[J_KKš™YŠJ_JK
šœÞÊJ]Z[ØØÚ[™[Ž–ÊšœÞ
JÝ[[X\žXØÚ[™[Ž˜™Z][‹YØ[™ËÛÜÝ[ˆ[™]Y[[˜JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜šY[Ü\H[™[\œÝ0ï[™ØJK
šœÞ
JØÚ[™[Ž™K\™Ù]JK
šœÞ
JØÚ[™[Ž˜[œØÚšYÈÜJK
šœÞ
JØÚ[™[Ž™K˜Y™\ÜßJK
šœÞ
JØÚ[™[Ž˜Z[žYÜÙÙXšY]JK
šœÞ
JØÚ[™[Ž™K˜\™X_JK
šœÞ
JØÚ[™[Ž˜0å™™›[™ÜËH[™ÛÛZÝ™Z][˜JK
šœÞ
JØÚ[™[Ž™KšÝ\œßJK
šœÞ
JØÚ[™[Ž˜ÛÜÝ[˜JK
šœÞ
JØÚ[™[Ž™K˜ÛÜÝJK
šœÞ
JØÚ[™[Ž˜[›Y[[™È[™™Y[™Ý[™Ù[˜JK
šœÞ
JØÚ[™[Ž™Kœ™YÚ\Ý˜][ÛŸJK
šœÞ
JØÚ[™[Ž˜˜\œšY\™Yœ™ZZZ]ÈYðé™ÛXÚÙZ]JK
šœÞ
JØÚ[™[Ž™K˜XØÙ\ÜÚXš[]_JK
šœÞ
JØÚ[™[Ž˜]H]Y[[œ°ï[™ØJK
šœÞ
JØÚ[™[Ž˜L‹ˆ›Ý™[X™\ˆŒˆ0­ÈÛ›[™\°ï[™È™\°í™™™[XÚ\ˆ[™ØX™[˜JK
šœÞ
JØÚ[™[Ž˜ÜšYÚ[˜[]Y[[˜JK
šœÞ
JØÚ[™[ŽŠšœÞ
J[ØÚ[™[Ž™KœÛÝ\˜Ù\Ë›X\
OOŠšœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ™K\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž™K›X™[J_KK\›
J_J_JW_JW_JW_KKšY
J_JW_JKY‰‰ŠšœÞ
JØÚ[™[ŽŠšœÞ
JXØÛ\ÜÓ˜[YN˜Û™[[™\ÜËY\™XÝÜžK[[šØ™YŽ˜ÙZ[œØ[ZÙZ]Ú[™KÝËMXÚ[™[Ž˜\ˆ[œðï™\œÚXÚZ][Y›Û›[[Y\›‹ÛÜÝ[ˆ[™YØ[™ÜØ™Y[™Ý[™Ù[˜J_JK
šœÞÊJØÚ[™[Ž–ØÙZ]\™H™\ÝZ[™H0ç™\œÚXÚ[Žˆ
šœÞ
JXÚ™YŽ˜Ý™\ž™ZXÚš\ØÚ[™[Ž˜™\ž™ZXÚš\ØJK[™
šœÞ
JXÚ™YŽ˜ÛÜ™Ø[š\Ø][Û˜Ú[™[Ž˜Ü™Ø[š\Ø][Û™[˜JKˆZ[ˆZ[˜YÈÜ™\Ý0éYÝ°ïˆÚXÚ[Z[ˆÙZ[™HZYÛ[™È[È[œØ[™ÙX›Ý˜_JK
šœÞ
JØÚ[™[Ž˜YH]›Ü›H™\›Z][ÙZ[™H[™œ˜YÙ[ˆ[™ÜZXÚ\ÙZ[™H[™YÙ\ÝXÚKˆ]™[ˆÚYH°ïˆ™\˜][™È[ˆ\™ZÝ[ˆÛÛZÝ[H™]ÙZ[YÙ[ˆ[˜šY]\‹˜JW_J_]˜\ˆ^Ú[œÝ]][ÛŽ˜[œÝ]][Û™[HÙ[œÝ]\ÚÝ[™\š[›™\[™Î˜\œðí››XÚH\š[›™\[™ÈÈ]Y[[˜\]YZÝ˜]\ÜØYÙH]\È[ˆ]YZÝ]Y˜™\™Z][™Ù[˜[\™Z[™Î˜˜XÚXÚH™^šYZ[™ÜÝÙZ\ÙH™YZÝ[Û™[H[\™Z[™Ø›Ü™\[™Î˜Û]\ØÚH›Ü™\[™Ø›ÜšX™[Ž˜[™ÙZðï™YÝ\È›ÜšX™[˜[YÙ\Ù]˜˜XÚÙ]ÚY\Ù[™H[\Ù][™Ø[™Ù\YY˜›ØÚ[™Ù\°ï›ÜœØÚ[™Î˜›ÜœØÚ[™ÜØ™Y[™Z[›Ü™[™Î˜Z[›Ü™[™Ø˜^\Î˜˜ZÝ\ØÚH[œ™YÝ[™Ø›ÜœØÚ[™ÜÙœ˜YÙN˜Ù™™[™H›ÜœØÚ[™ÜÙœ˜YÙX™XÚ˜™XÚXÚHÜ[™YÙX[]XÚ˜[]XÚH™^šYZ[™ÜÝÙZ\ÙH[œÝ]][Û™[H[™›Ü›X][Û˜NÙ[˜Ý[Ûˆœ
ÚY™K\XÛNJ^Û]]™–ÙWNÚYŠ[Š\™]\›ˆ[Û]VË‹‹›™]ÈÙ]
‹œÙXÝ[ÛœË™›]X\
OO™Kœ\˜YÜ˜\Ë™›]X\
OO™Kœ™YœÊJJWNÜ™]\›ŠšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜Û™[[™\ÜËX\XÛX˜\šXK[X™[Ž˜™YZÝ[Û™[\ˆ˜XÚ^Ú[™[Ž–ÊšœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜËX\XÛK[XYÚ[™[Ž›‹š[›ßJK
šœÞÊJØÛ\ÜÓ˜[YN˜Û™[[™\ÜËX\XÛKY]XÚ[™[Ž–Ø™YZÝ[Û™[\ˆÝ[™ˆ‹™]_L‹ˆ›Ý™[X™\ˆŒ˜0­È]Y[[ˆ[™›ÜœØÚ[™ÜÙÜ™[ž™[ˆ[H[™X_JK
šœÞÊJ˜]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËX\XÛK[Ý][™X˜\šXK[X™[Ž˜XœØÚš]HY\Ù\È˜XÚ^ØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜[ˆY\Ù[H^JK
šœÞ
J[ØÚ[™[Ž›‹œÙXÝ[ÛœË›X\
OOŠšœÞ
JXØÚ[™[ŽŠšœÞ
J]Û˜Ý\N˜]Û˜ÛÛXÚÎŠ
OOžÛ]YØÝ[Y[™Ù][[Y[žRY
Û™[[™\ÜË\ÙXÝ[Û‹X
ÙKšY
NÝË™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJKËœØÜ›Û[ÕšY]ÊØ›ØÚÎ˜Ý\J_KÚ[™[Ž™K]_J_KKšY
J_JW_JK‹œÙXÝ[ÛœË›X\
OOŠšœÞÊJÙXÝ[Û˜È˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\ÙXÝ[Û‹X
ÙKšYÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜË\ÙXÝ[Û‹X
ÙKšYX’[™^‹LKÚ[™[Ž™K]_JKKœ\˜YÜ˜\Ë›X\

K
OOŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\\˜YÜ˜\Û™[[™\ÜËZÚ[™X
ÙKšÚ[™Ú[™[Ž–ÊšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\\˜YÜ˜\[X™[Ú[™[ŽÙKšÚ[™_JK
šœÞÊJØÚ[™[Ž–ÙK^Kœ™YœË›X\
OOŠšœÞÊJÜ[˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXÚ]][Û˜Ú[™[Ž–Ø
šœÞÊJXÚ™YŽ˜Y–ÙWK\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜˜\šXK[X™[Ž˜]Y[Nˆ
ØY–ÙWK˜]]ÜœÊØ
ØY–ÙWKžYX\ŠØ8 $È
ØY–ÙWK]KÚ[™[Ž–ØØY–ÙWK˜]]ÜœËœÜ]

VÌKY–ÙWKžYX\‹X_JW_KJJW_JW_K
JW_KKšY
JK‹›[™ÝŒ	‰ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\™Y™\™[˜Ù\Ø˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\™Y™\™[˜Ù\ËZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜË\™Y™\™[˜Ù\ËZXY[™ØÚ[™[Ž˜]Y[[ˆ[™›ÜœØÚ[™ÜÙÜ™[ž™[˜JK
šœÞ
JØÚ[™[Ž˜YH\\È˜XÚÙZ\Ù\Ë\ˆ]ðéÚXÚÙ\°ïH[š[[™ÙZ[™HÜ™[ž™[ˆÝZ[ˆ™ZH™Y\ˆ]Y[Kˆ[œÝ]][Û™[H[™ØX™[ˆ[™™\˜[œÝ[\š[™›Ü›X][Û™[ˆÚ[™ÙZ[™HÚ\ÜÙ[œØÚYXÚ[ˆÚ\šÜØ[ZÙZ]Ø™[YÙKˆX[˜ÚH›Û^HÚ[™ÛÜÝ[œ›XÚYËˆ\ÈÙ\™[ˆÙZ[™H[š[H]]ÛX]\ØÚ›Ûˆ[ˆ™\›YÙ[ˆÙ[Y[‹˜JK
šœÞ
JÛØÚ[™[Žœ‹›X\
OOžÛ]XY–ÙWNÜ™]\›ŠšœÞÊJXØÚ[™[Ž–ÊšœÞÊJØÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–Ý˜]]ÜœË
žYX\‹
K˜_JK
šœÞ
JXÚ™YŽ\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž]_JKˆœX›XØ][Û‹˜_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜Ü[™YÙN˜JK›Y]Ù_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜Ü™[ž™[Ž˜JK›[Z]][Ûœ×_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜]H]Y[[œ°ï[™Î˜JK˜ÚXÚÙYšXÚÚÝ[Y[Y\8 $ÈÙZ[™HZÝY[H°ï[™È™Z]\]˜_JW_KJ_J_JW_JW_J_Y[˜Ý[Ûˆœ

^Û]ÙKOJ\ÙTÝ]JJ
KÛ‹—OJ\ÙTÝ]JJLJKOJ\ÙT™YŠJ[
KO[ÜÙŠJN˜Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXÛÛ[Y[™]KXÛÛ[Y[]ÜXÈŽ˜Ù[›™[›\›™[˜˜\šXK[X™[YžHŽ˜Û™[[™\ÜËXÛÛ[Y[ZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜËXÛÛ[Y[ZXY[™ØÚ[™[Ž˜ÛÛ[Y[\ˆ›Ü˜™\™Z][ˆ8 $È\ˆÚØ[H°ï[™ØJK
šœÞ
JØÚ[™[Ž˜YH0í™™™[XÚHÛÛ[Y[\™[šÝ[Ûˆ\ÝšXÚœ™ZYÙ\ØÚ[]ˆÚYHðí››™[ˆY\ˆYHZ[™ØX™H[™YHÜ™[ž™H›ÛˆL™ZXÚ[ˆ°ï™[‹ˆ\ÈÚ\™šXÚÈ0ï™\›Z][]Y\šYÙ\ÜZXÚ\Ù\ˆ™\°í™™™[XÚ˜JK
šœÞ
JØÚ[™[Ž˜Y\Ù\ˆ\ÝÙZ0íœ]\ÜØÚYpçÛXÚH[XHÈ8 '•Ø\È\ÝZ[ˆÙ\Ý[™\ÈÙ[›™[›\›™[ø 'ˆZ[™HÜ0é\™H0í™™™[XÚHZ[œ™ZXÚ[™ÈpïÜÝH›Üˆ™\°í™™™[XÚ[™È™YZÝ[Û™[Ù\°ï[™œ™ZYÙYÙX™[ˆÙ\™[‹ˆ\ÈÚXY\ˆÙZ[™H0í™™™[XÚHÛÛ[Y[\›\ÝK˜JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜Ù][œØÚ]˜Ú[™[Ž˜][œØÚ]˜JK0­È
šœÞ
JXÚ™YŽ˜Û[Ù\˜][Û˜Ú[™[Ž˜[Ù\˜][Ûˆ[™™\ØÚÙ\™[˜JK0­È
šœÞ
JXÚ™YŽ˜Ü™YÙ[˜Ú[™[Ž˜Z[˜ZY\™YÙ[˜JW_JK
šœÞÊJ›Ü›XÛ›Õ˜[Y]NˆL]]ÐÛÛ\]N˜Ù™˜Û”ÝX›Z]OžÝœ™]™[Y˜][

KŠL
KÙŠJI‰šK˜Ý\œ™[Ë™›ØÝ\Ê
_KÚ[™[Ž–ÊšœÞ
JX™[Ú[›ÜŽ˜Û™[[™\ÜËXÛÛ[Y[]^Ú[™[Ž˜ZˆÛÛ[Y[\ˆ[HÙ\Ý[™[ˆÙ[›™[›\›™[˜JK
šœÞ
J^\™XXÜ™YŽšKY˜Û™[[™\ÜËXÛÛ[Y[]^›ÝÜÎ˜[YN™KX^[™ÝŒL™\]Z\™YˆL˜\šXKZ[˜[YŽˆHXK˜\šXKY\ØÜšX™YžHŽ˜Û™[[™\ÜËXÛÛ[Y[Z[Û™[[™\ÜËXÛÛ[Y[XÛÝ[
ÊOØÛ™[[™\ÜËXÛÛ[Y[Y\œ›Ü˜˜
KÛÚ[™ÙN™OOžÝ
K\™Ù]˜[YJKŠLJ__JK
šœÞ
JÚY˜Û™[[™\ÜËXÛÛ[Y[Z[Ú[™[Ž˜ÙZ[™HZYÙ[™[ˆÙ\ˆœ™[Y[ˆ˜[Y[‹ÛÛZÝ][‹Ù\Ý[™Z]Ù][ˆÙ\ˆ[™\™[ˆ™\˜][XÚ[ˆ[™ØX™[ˆZ[™ÙX™[‹ˆYHZ[™ØX™HÚ\™™Z[H™\›\ÜÙ[ˆY\Ù\ˆ[œÚXÚ™\ÛÜ™™[‹ˆÙ^°éÙ\™[ˆY\Ù[™[ˆ™ZXÚ[™Z[šZ][ˆÚYH™ZH\ˆ0é™Ù[˜™YÜ™[ž[™È\È^™[ÎÈX[˜ÚHÞ[X›ÛH°é[ˆYZ™˜XÚ˜JK
šœÞÊJÚY˜Û™[[™\ÜËXÛÛ[Y[XÛÝ[˜\šXK[]™HŽ˜Û]XÚ[™[Ž–ÙK›[™ÝÈL™ZXÚ[˜_JKI‰ŠšœÞ
JÚY˜Û™[[™\ÜËXÛÛ[Y[Y\œ›Ü˜Û\ÜÓ˜[YN˜Û™[[™\ÜËXÛÛ[Y[Y\œ›Ü˜›ÛN˜[\Ú[™[Ž˜_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXÛÛ[Y[XXÝ[ÛœØÚ[™[Ž–ÊšœÞ
J]Û˜Ý\N˜ÝX›Z]Ú[™[Ž˜Z[™ØX™H°ï™[˜JK
šœÞ
J]Û˜Ý\N˜]Û˜ÛÛXÚÎŠ
OOžÝ

KŠLJKK˜Ý\œ™[Ë™›ØÝ\Ê
_KÚ[™[Ž˜^™\Ù\™™[˜JW_JK‰‰ˆXI‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXÛÛ[Y[\™\Ý[›ÛN˜Ý]\ØÚ[™[Ž˜YHZ[™ØX™H\™°ïYHÚØ[H^°ï[™Ëˆ\ÈÝ\™HÙZ[ˆÛÛ[Y[\ˆZ[™Ù\™ZXÚ0ï™\›Z][]Y\šYÙ\ÜZXÚ\Ù\ˆ™\°í™™™[XÚ˜JW_JW_J_Y[˜Ý[Ûˆ\

^Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝY\™XÝÜžX˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\›Ú™XÝË]]XÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜË\›Ú™XÝË]]XÚ[™[Ž˜Ù[YZ[œØ[HÙYÙ[ˆZ[œØ[ZÙZ]8 $ÈYY[‹›Ú™ZÝH[™Z]Ú\šÝ[™ØJK
šœÞ
JØÚ[™[Ž˜Z[œØ[ZÙZ]\ÝZ[™HÙ\Ù[ØÚYXÚH\˜]\Ù›Ü™\[™Ë\ˆÚ\ˆÙ[YZ[œØ[H™YÙYÛ™[ˆðí››™[‹ˆ[ˆ™\™ÙYÜ™ˆÚX\È™\™Z]È™YÙYÛ[™ÜÛpí™ÛXÚÙZ][‹™\˜][™ÜÜÝ[[ˆ[™[\œÝ0ï[™ÜØ[™ÙX›ÝKˆÛZXÚ™Z]YÈ™\ÝZ[ˆÙ™™[™Hœ˜YÙ[ˆ[™pí™ÛXÚÙZ][‹[™ÙX›ÝHÙZ]\žY[ÚXÚÙ[‹˜JK
šœÞ
JØÚ[™[Ž˜™\™ÙYÜ™ˆÙ[YZ[œØ[HÝ[[™›Ü›X][Û™[‹›Ú™ZÝYY[‹\˜™Z]ÛX]\šX[Y[ˆ[™YÚ][HÜšY[Y\[™È™\™Z]ˆYHZYÙ[œÝ0é™YÙHÜ™Ø[š\Ø][Û‹š[˜[žšY\[™È[™˜ZÝ\ØÚH[\Ù][™ÈYYÝ™ZH[ˆ™]Z[YÝ[ˆY[œØÚ[‹[š]X]]™[ˆ[™™\˜[ÛÜXÚ[ˆÜ™Ø[š\Ø][Û™[‹ˆYH]›Ü›H0ï™\›š[[]ÙZ[™H\œÛÛ™[H›Ú™ZÝÜ™Ø[š\Ø][Û‹˜JK
šœÞÊJ˜]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\]Ø^\Ø˜\šXK[X™[Ž˜ØÚÙ\œ[šÝNˆÙ[YZ[œØ[HÙYÙ[ˆZ[œØ[ZÙZ]Ú[™[Ž–ÊšœÞ
JØØÚ[™[Ž˜°ï™ˆYðé™ÙH\ˆZ]Ú\šÝ[™ØJK
šœÞÊJÛØÚ[™[Ž–ÊšœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]Ú[™KÝËMXÚ[™[Ž˜™\ÝZ[™H[™[ˆš[™[˜J_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]ÛZ]Ú\šÝ[™ØÚ[™[Ž˜˜^\Ø™Z\ÜY[HÙ[›™[›\›™[˜J_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]ÛZ]Ú\šÝ[™ØÚ[™[Ž˜›Ú™ZÝYY[ˆ°ïˆ™\™ÙYÜ™ˆ[ÚXÚÙ[˜J_JK
šœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜ÛÜ™Ø[š\Ø][Û˜Ú[™[Ž˜Z]Ú\šÙ[™KÛÛÜ™[˜][Ûˆ[™Ü™Ø[š\Ø][Û™[˜JK
šœÞ
JÜ[˜ØÚ[™[Ž˜
pí™ÛXÚH™]Z[YÝ[™ÈÚ\™šXÚ™\›Z][
XJW_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KÛX]\šX[Y[‹ÙZ[œØ[ZÙZ]\›Ú™ZÝÙ\šÜÝ]š[Ú[™[Ž˜\˜™Z]ÛX]\šX[Y[ˆ[™°íœ™\ÙYÙXJ_JW_JW_JK
šœÞÊJØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\Ý]\Ë[›ÝXÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜ZÝY[\ˆÝ[™[\ˆZ[°éÙNˆ›Ú™ZÝYYK˜JK\ÈÚ[™°ïˆY\ÙH™\ž™ZXÚš\Ý›ÜšX™[ˆÙZ[™H\˜™Z]ÙÜ\[‹ÛÛÜ™[˜][Û™[‹ÛÛÜ\˜][Û™[‹š[˜[žšY\[™Ù[ˆÙ\ˆ[\Ù][™Ù[ˆ™\Ý0éYÝ˜_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝXXÝ[ÛœØÚ[™[Ž–ÊšœÞÊJXØÛ\ÜÓ˜[YN˜Ý][™X™YŽ˜Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KÛX]\šX[Y[‹ÙZ[œØ[ZÙZ]\›Ú™ZÝÙ\šÜÝ]š[Ú[™[Ž–ÊšœÞ
JÙ‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒMßJK\˜™Z]ÛX]\šX[Y[ˆ0í™™›™[˜_JK
šœÞÊJXÚ™YŽ˜ÙZ[œØ[ZÙZ]Ú[™KÝËMXÚ[™[Ž–Ø™\ÝZ[™H[™[ˆ[ˆ™\™ÙYÜ™ˆš[™[ˆ
šœÞ
J™‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒMßJW_JW_JK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝY[™[™ØÚ[™[Ž–ÊšœÞ
JÝ[[X\žXØÚ[™[Ž˜°íœ™\ÙYÙH[™™\˜][™È8 $È™\™°ïØ˜\šÙZ]›Üˆ[˜YÈ°ï™[˜JK
šœÞ
J[ØÚ[™[Ž›]K›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–ÙK›˜[YK˜_JKK™]Z[
šœÞ
JXÚ™YŽ™K\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÜšYÚ[˜[]Y[XJK
šœÞ
Jœ˜ßJK
šœÞ
JÛX[ØÚ[™[Ž™KœÝ]\ßJW_KK›˜[YJJ_JW_JK
šœÞ
J[ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝXØ\™ØÚ[™[Žž]K›X\
OOŠšœÞ
JXØÚ[™[ŽŠšœÞÊJ\XÛXØÚ[™[Ž–ÊšœÞÊJØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ[[X™\˜Ú[™[Ž–Ø›Ú™ZÝYYHÝš[™ÊK›[X™\ŠKœYÝ\
‹
W_JK
šœÞ
JØØÚ[™[ŽŠšœÞÊJXÚ™YŽ™Kš™Y‹Ú[™[Ž–ÙK]K
šœÞ
JY‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒNJW_J_JK
šœÞ
JØÚ[™[Ž™K™\ØÜš\[ÛŸJK
šœÞÊJØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝX˜YÙXÚ[™[Ž–ÙKœÝ]\Ë0­ÈÙZ[™HZÝ]™HÜ\H™\Ý0éYÝ_JW_J_KKšY
J_JK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\Ý]\Ë\Þ\Ý[XÚ[™[Ž–ÊšœÞ
JÝ[[X\žXØÚ[™[Ž˜Ý]\ÜÞ\Ý[H[™™Y]][™ØJK
šœÞ
JØÚ[™[Ž˜Z[ˆÝ]\ÈÚ\™\œÝÙZ]\™Ù\Ù]Ù[›ˆ\ˆ[Ü™XÚ[™H]ðéÚXÚH[ÚXÚÛ[™ÜÜØÚš]™[YÝ\Ýˆ\È›ðçÙH[\™\ÜÙHZ[™\ˆZ[ž™[\œÛÛˆ\ÝÙZ[™HÙYÜ°ï™]H\˜™Z]ÙÜ\K˜JK
šœÞ
JÛØÚ[™[ŽœK›X\

ÙKJOOŠšœÞÊJXØÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–ÙK˜_JK_KJJ_JW_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\˜XÝXÙX˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\›Ú™XÝ\˜XÝXÙK]]XÚ[™[Ž–ÊšœÞ
JØÚY˜Û™[[™\ÜË\›Ú™XÝ\˜XÝXÙK]]XÚ[™[Ž˜˜^\Ø™Z\ÜY[H[™]Y[[ˆ]\ÈšY[Y™[JK
šœÞ
JØÚ[™[Ž˜YH™Z\ÜY[H™ZYÙ[ˆÜYÙHÛÛ[][˜[H™^šYZ[™ÜÝÙZ\ÙH°éÙ\™Ù]˜YÙ[™H˜^\ËˆÚYHÚ[™ÙZ[™H™\™ÙYÜ™™\ˆ[™ÙX›ÝHÙ\ˆÛÛÜ\˜][Û™[ˆ[™™[YÙ[ˆ°ïˆÚXÚ[Z[ˆÙZ[™HÚ\šÝ[™Ë˜JK
šœÞ
J[ØÚ[™[Žž]VÌKœÛÝ\˜Ù\ËœÛXÙJÊK›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽŠK\›œÝ\ÕÚ]
Ø
KK\›
K\™Ù]™K\›œÝ\ÕÚ]

OØØ›[šØ›ÚY™[™K\›œÝ\ÕÚ]

OØ›ÛÜ[™\ˆ›Ü™Y™\œ™\˜›ÚYÚ[™[Ž™K›X™[JK
šœÞ
JØÚ[™[Ž™K›[Z]JW_KK\›
J_JW_JK
šœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\\XÚ\][Û‹[›ÝXÚ[™[Ž˜pí™ÛXÚH™]Z[YÝ[™ÜÙ›Ü›Y[ˆÚ[™]Yˆ[ˆ›Ú™ZÝÙZ][ˆ™\ØÚšYX™[‹ˆ0å™™™[XÚH[\™\ÜÙ[˜™ZÝ[™[™Ù[‹Ü\[šÛÛ[][šZØ][Ûˆ[™›Ú™ZÝ™\Ø[[™ÈÚ[™\ž™Z]šXÚZÝ]šY\ˆ™\Ù[™[ˆÚYH°ïˆ™\ÝZ[™H[™ÙX›ÝH\™[ˆ\™ZÝHÜšYÚ[˜[ÛÛZÝK˜JW_J_]˜\ˆ\YOO–ÖØÝ\ž˜™\ØÚ™ZX[™ØK™\ØÜš\[Û—KØZÝY[\ˆ›Ú™ZÝÝ]\Ø
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž™KœÝ]\ßJK
šœÞ
JØÚ[™[Ž™K˜Ý\œ™[Ý]_JW_JWKØÙ\Ù[ØÚYXÚH]\ÙØ[™ÜÜÚ]X][Û˜Z[œØ[ZÙZ]Ø[›ˆ[ˆ[\œØÚYYXÚ[ˆX™[œÛYÙ[ˆ]Y™][ˆ[™\ÝZ[ˆÝXš™ZÝ]™\È\›X™[‹ˆY\Ù\È›ÜšX™[ˆ\ÝZ[ˆpí™ÛXÚ\ˆÙ\Ù[ØÚYXÚ\ˆ[™[™ÜØ[œØ]‹ÙZ[™HXYÛ›ÜÙH[™ÙZ[™H™Z]\[™È0ï™\ˆ\œØXÚ[ˆÙ\ˆ0éYšYÚÙZ][ˆ[ˆ™\™ÙYÜ™‹˜KØÛÛšÜ™]\ˆ[™[™ÜØ™Y\™ˆ[ˆ™\™ÙYÜ™˜K›ØØ[™YYKØšY[Ù][™ØK›Øš™XÝ]™WKØšY[Ü\[˜K\™Ù]KØ™\ÝZ[™H[™ÙX›ÝH[™™\ÜÛÝ\˜Ù[ˆ[ˆ™\™ÙYÜ™˜
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–Ø\ˆ™\ÝZ[™H[œÝÙYÝÙZ\Ù\ˆ[0éN]\ÙÙ]ðéHYðé™ÙNÈ]pçÙ\™[HÚX\ÈÝYZ[[œÚXÚ[ˆ[™[ˆ™\™ZXÚ8 '“Ü™Ø[š\Ø][Û™[ˆÝ[[ˆÚXÚ›Ü¸ 'ˆY\ÙH™\Ý0é™HÚ[™]\ÙØ[™ÜÜ[šÝH\ˆ°ï[™ËÙZ[™H›ÛÝ0é™YÙH[™ÙX›ÝËHÙ\ˆØ\^š]0éÙ\šX[™Ëˆ
šœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]Ú[™KÝËMXÚ[™[Ž˜[œÝÙYÝÙZ\Ù\ˆ0í™™›™[˜JK˜_JWKØ™\™ÛZXÚ˜\™H˜^\Ø™Z\ÜY[H[™\™\ˆÝ0éX[ÈÛÛ[][˜[\È™Z\ÜY[Ú\™šY[Y™[[š[™\ˆ[[ˆ™\›[šÝ[ˆÜšYÚ[˜[ÙZ][ˆÚÝ[Y[Y\ˆZ[ˆÜYÙ\È[™ÙX›ÝÚ\™šXÚ[ÈÚØ[\È™\™ÙYÜ™™\ˆ[™ÙX›ÝÙ^°é˜KØ\šÙ[›š\ÜÙH]\È[HšY[Y™[\ˆ[Ù[K˜šY[Y™[KØ0ç™\˜YØ˜\šÙZ]]Yˆ™\™ÙYÜ™˜K˜[œÙ™\—KØpí™ÛXÚHÛÛÜ\˜][ÛœÜ\™\˜
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÙKœ\™\œË
šœÞ
JØÚ[™[Ž˜[HÙ[˜[›[ˆÝ[[ˆÚ[™pí™ÛXÚHÙ\Ü°éÚÜ\™\‹ˆZ[™H]Y›˜ZYH[ˆY\ÙH\ÝH\ÝÙZ[™H[™œ˜YÙK\ØYÙHÙ\ˆ™\Ý0éYÝHÛÛÜ\˜][Û‹˜JW_JWKØ›ÝÙ[™YÙH\œÛÛ™[H™\ÜÛÝ\˜Ù[˜KœÝY™š[™×KØ™[°íYÝH˜XÚXÚH]X[YšZØ][Û™[˜KœÚÚ[×KØ°é[[XÚH[™Ü™Ø[š\Ø]Üš\ØÚH™\ÜÛÝ\˜Ù[˜KœÜXÙWKØš[˜[žšY\[™ÜØ™Y\™ˆ[™pí™ÛXÚH°íœ™\›pí™ÛXÚÙZ][˜
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÙK™š[˜[˜ÙK
šœÞ
JØÚ[™[Ž˜Ù\°ïH°íœ™\‹H[™™\˜][™ÜÝÙYÙH[HÝ[™Ëˆ›Ý™[X™\ˆŒŽ˜JK
šœÞ
J[ØÚ[™[Ž›]K›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–ÙK›˜[YK˜_JKK™]Z[
šœÞ
JXÚ™YŽ™K\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÜšYÚ[˜[[™›Ü›X][Û˜JK
šœÞ
Jœ˜ßJK
šœÞ
JÛX[ØÚ[™[Ž™KœÝ]\ßJW_KK›˜[YJJ_JK
šœÞ
JØÚ[™[Ž˜Z[ˆ°íœ™\œ›ÙÜ˜[[H\ÝÙZ[™H™]Ú[YÝ[™È[™YH]Y›˜ZYH[ˆY\ÙH\ÝHÙZ[™H[˜YÜÜ°ï[™ËˆYH™Y[™Ý[™Ù[ˆpïÜÙ[ˆ›ÜˆZ[™\ˆ[ØÚZY[™È™Z[H°íœ™\™ÙX™\ˆ™\Ý0éYÝÙ\™[‹˜JW_JWKØ™XÚXÚK][œØÚ]˜™^›ÙÙ[™H[™Ü™Ø[š\Ø]Üš\ØÚH›Ü˜]\ÜÙ][™Ù[˜K›YØ[KØÙ™™[™Hœ˜YÙ\Ý[[™Ù[˜
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž™K›Ü[ŸJK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜pí™ÛXÚH\œÝHZYÙ[œÝ0é™YÙHØÚš]N˜JKK™š\œÝÝ\×_JW_JWKØpí™ÛXÚH™]Z[YÝ[™ÜÙ›Ü›Y[˜
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜\œÜZÝ]š\ØÚH™]Z[YÝ[™ÜÝÙYÙH8 $È\ž™Z]Ú™H0í™™™[XÚ\È›Ü›][\ˆ[™Ú™HÜZXÚ\[™ÈZ[™\ˆ[\™\ÜÙ[˜™ZÝ[™[™Î˜JK
šœÞ
J[ØÚ[™[Ž™Kœ\XÚ\][Û‹›X\
OOŠšœÞ
JXØÚ[™[Ž™_KJJ_JW_JWKØX]\šX[Y[ˆ\ˆ›Ú™ZÝ[ÚXÚÛ[™Ø
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜\ÈX]\šX[ZÙ][0é]\ÙÙX\˜™Z]]H›Ü›YÙ[ˆ°ïˆ›Ú™ZÝ™\ØÚ™ZX[™ËÜ\[™Ü°ï™[™Ë]Y™ØX™[‹™Z][‹›ÝÚÛÛÛÜÝ[‹\œÛÛ˜[\™\‹°íœ™\œ™XÚ\˜ÚK[\Ù][™Ë\™›ÛÜÛY\ÜÝ[™È[™°ïÚÛY[[™Ù[ˆÛÝÚYHZ[™HÚ[ÛÛ[Y[œÚÝ[\‹PÚXÚÛ\ÝH[™Z[™[ˆ[Ý\™ˆ\ˆœ™Z]Ú[YÙ[ˆÙ[œÝ™\œ›XÚ[™Ë˜JK
šœÞÊJXÚ™YŽ™K›X]\šX[™Y‹ÝÛ›ØYˆLÚ[™[Ž–ÊšœÞ
JÙ‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒMŸJKXÚËH[™\˜™Z]ÛX]\šX[Y[ˆ0í™™›™[˜_JW_JWKØÚÝ[Y[][Ûˆ\È]ðéÚXÚ[ˆ›Ú™ZÝ›ÜØÚš]Ø
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÙK˜Ý\œ™[Ý]K
šœÞ
JØÚ[™[Ž˜Ü0é\™HZ[°éÙHpïÜÙ[ˆ][K™\˜[ÛÜXÚHÝ[K™[YÜ]Y[H[™Ý]\ÝÙXÚÙ[ÚÝ[Y[Y\™[‹ˆYH]›Ü›H0ï™\›š[[]ÙZ[™HÜ\˜]]™HÛÛÜ™[˜][Û‹˜JW_JWKØÜš]\šY[ˆ\ˆ\™›ÛÜÛY\ÜÝ[™Ø
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÙK›YX\Ý\™\Ë
šœÞ
JØÚ[™[Ž˜\ˆ™^š\šÜðï™\™Ü™ZY™[™™\™Z[˜˜\HXpçÜÝX‹\ÜÈL›Þ™[\ˆÙ]ÛÛ›™[™[ˆ™\ÝXÚ\ˆ[™Ùœš\ÝYÈ™YÙ[pé0çÚYËœ™Z]Ú[YÈ[™]\ÈZYÙ[™\ˆ[š]X]]™HZ[™ZY[‹\ÝZ[ˆ[™Ù\Ý™X\ÈšY[8 $ÈÙZ[ˆ˜XÚÙ]ÚY\Ù[™\ˆÙ\ˆÚ\ÜÙ[œØÚYXÚÙ\ÚXÚ\\ˆÙ\˜JW_JWKØ]Y[[ˆ[™ÙZ]\™°ï™[™H[™›Ü›X][Û™[˜
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜ÜšYÚ[˜[[™ØX™[ˆÚ[™˜XÚ]Y[[\[™Ü™[ž™[ˆH\Ù[‹ˆ›ÜˆZ[™\ˆ]ðéÚXÚ[ˆ[\Ù][™ÈpïÜÙ[ˆZÝY[HÚØ[H[™ÙX›ÝK°íœ™\˜™Y[™Ý[™Ù[ˆ[™\Ý0é™YÚÙZ][ˆ\›™]]™Z[HÜšYÚ[˜[[˜šY]\ˆÙ\°ïÙ\™[‹˜JK
šœÞ
J[ØÚ[™[Ž™KœÛÝ\˜Ù\Ë›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ™K\›\™Ù]™K\›œÝ\ÕÚ]

OØØ›[šØ›ÚY™[™K\›œÝ\ÕÚ]

OØ›ÛÜ[™\ˆ›Ü™Y™\œ™\˜›ÚYÚ[™[Ž™K›X™[JK
šœÞÊJØÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–ÙKšÚ[™˜_JKK›[Z]_JK
šœÞ
JÛX[ØÚ[™[Ž˜]Y[[œÝ[™ˆËˆ›Ý™[X™\ˆŒ‹˜JW_KK\›
J_JW_JWWNÙ[˜Ý[ÛˆÜ
Ü›Ú™XÝ™_J^Ü™]\›ŠšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝY]Z[˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\›Ú™XÝZXY[™ØÚ[™[Ž–ÊšœÞÊJØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝX˜YÙXÚ[™[Ž–Ø›Ú™ZÝYYHÝš[™ÊK›[X™\ŠKœYÝ\
‹
K›ÛˆN0­ÈKœÝ]\×_JK
šœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝXØ]™X]Ú[™[Ž™K˜Ý\œ™[Ý]_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\\XÚ\][Û‹[ØÚÙY˜\šXK[X™[YžHŽ˜\XÚ\][Û‹[ØÚÙY]]XÚ[™[Ž–ÊšœÞ
J˜ÚY˜\XÚ\][Û‹[ØÚÙY]]XÚ[™[Ž˜[\™\ÜÙH™ZÝ[™[ˆ[™\˜™Z]ÙÜ\Hš[™[˜JK
šœÞ
JØÚ[™[Ž˜YHXÚš\ØÚH\˜™Z]ÙÜ\[œ]›Ü›HÚ\™›Ü˜™\™Z]]ˆ[\™\ÜÙ[˜™ZÝ[™[™Ù[‹Ü\[™Ü°ï™[™Ë™Z]š]Ø[™œ˜YÙ[ˆ[™Ù\ØÚ0ïH\Ø[[Y[˜\˜™Z]Ú[™›ØÚšXÚœ™ZYÙ\ØÚ[]ˆY\ÙHÙZ]H\šXY°ïˆÙZ[™H\œÛÛ™[˜™^›ÙÙ[™[ˆ][‹˜JK
šœÞÊJ[ØÚ[™[Ž–ÊšœÞ
JXØÚ[™[ŽŠšœÞ
J]Û˜Ý\N˜]Û˜\ØX›YˆLÚ[™[Ž˜[\™\ÜÙH[ˆY\Ù[H›Ú™ZÝ™ZÝ[™[˜J_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
J]Û˜Ý\N˜]Û˜\ØX›YˆLÚ[™[Ž˜™\ÝZ[™H\˜™Z]ÙÜ\[ˆš[™[˜J_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
J]Û˜Ý\N˜]Û˜\ØX›YˆLÚ[™[Ž˜\˜™Z]ÙÜ\HÜ°ï™[˜J_JW_JK
šœÞ
JØÚ[™[Ž˜›Ú™ZÝX]\šX[Y[ˆ[™YH0í™™™[XÚ[ˆ[™›Ü›X][Û™[ˆ›ZX™[ˆ™\™°ïØ˜\‹ˆ\ˆ™]™ZX™\ˆÜ™Ø[š\ÚY\Ù\ˆZ]]ÙZ[™H›Ú™ZÝÜ\[‹˜JW_JK
šœÞÊJ˜]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ[Ý][™X˜\šXK[X™[Ž˜]Y˜˜]H\ˆ›Ú™ZÝÙZ]XÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜]YˆY\Ù\ˆ›Ú™ZÝÙZ]XJK
šœÞ
J[ØÚ[™[Ž˜\
JK›X\

ÝKŠOOŠšœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Ü›Ú™XÝ\ÙXÝ[Û‹X
ÙKœÛYÊØX
Û‹Ú[™[ŽJ_KÝš[™Ê
JJ_JW_JK\
JK›X\

Ý—KŠOOŠšœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\ÙXÝ[Û˜Ü[ŽœOOLOOLKÚ[™[Ž–ÊšœÞÊJÝ[[X\žXÚY˜›Ú™XÝ\ÙXÝ[Û‹X
ÙKœÛYÊØX
Ü‹Ú[™[Ž–ÊšœÞ
JÜ[˜ØÚ[™[Ž”Ýš[™ÊŠÌJKœYÝ\
‹
_JK_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\ÙXÝ[Û‹X›ÙXÚ[™[Ž\[ÙˆOXÝš[™ØÊšœÞ
JØÚ[™[Ž›ŸJN›ŸJW_KÝš[™Ê
JJK
šœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\›Ú™XÝ\š[Ú[™[ŽŠšœÞÊJXÚ™YŽ™K›X]\šX[™Y‹ÝÛ›ØYˆLÚ[™[Ž–ÊšœÞ
JY‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒMßJKXÚËH[™\˜™Z]ÛX]\šX[Y[˜_J_JW_J_]˜\ˆÜ^Ú[™\[™[˜^\›ˆ0ï™\œ°ï\ˆ\ÝÜš\ØÚ\ˆ˜XÚÙZ\Ø\˜Ú]™N˜™[YÈ[H™\™Z]Ù\Ý[[ˆ\˜Ú]ˆ8 $ÈÙZ]\™H°ï[™ÈÙ™™[˜^Y]Ú]™\ÜÎ˜\œðí››XÚH\š[›™\[™ÈÈ[™Ù\°ï\ˆ™XÚ\˜ÚZ[ÙZ\ØNÙ[˜Ý[ÛˆÜ
ÚYÎ™KÛÛ\XÝHL_J^Ü™]\›ŠšœÞ
J[ØÛ\ÜÓ˜[YN˜\ÝÜšXË\ÛÝ\˜ÙK[\ÝÚ[™[Ž–Ë‹‹›™]ÈÙ]
JWK›X\
OOžÛ]S™ÙWNÜ™]\›ŠšœÞÊJXØÚ[™[Ž–ÛË\›ÊšœÞÊJXÚ™YŽ›‹\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž–Û‹]K8¡¥Ø_JNŠšœÞ
JÝ›Û™ØØÚ[™[Ž›Ë]__JK‰‰ˆ]	‰ŠšœÞÊJØÚ[™[Ž–Û‹›ØØ]Ü‹0­È‹›[Z]][Ûœ×_JW_KJ_J_J_]˜\ˆXØ[[[[™È›Û˜[\X[›ˆ0­È™\™ÙYÜ™™\ˆ›ÝÜÈ8 $È›Ûˆ[X[Èš\È]]Kˆ›Û˜[\X[›ˆ][HLKˆ›Ý™[X™\ˆŒˆ\ˆ][™È\ˆ0ï™\™ÙX™[™[ˆš[\ˆ°ïˆYHšXÚÛÛ[Y\žšY[HÙXœÚ]H8 '™\™ÙYÜ™ˆÙ[YZ[œØ[x 'YÙ\Ý[[]ˆY\ÙHØ[[[[™ÜÙ\›]X›š\È\ÝYHÙ[YZ[œØ[YH][™ÜÙÜ[™YÙNÈ\ðé›XÚH[™]šYY[H™XÚYœ˜YÙ[ˆ›ZX™[ˆ™XÚXÚ[˜™\°ï˜Ù[˜Ý[Ûˆ\
ÚYÎ™_J^Û]ZÙ™š[\ŠO™Kš[˜ÛY\ÊšY
JKÛ‹—OJ\ÙTÝ]JJLJKOU™

NÜ™]\›ˆ›[™ÝÊšœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜\ÝÜšXËYØ[\žXÛ•ÙÙÛN™OOœŠK˜Ý\œ™[\™Ù]›Ü[ŠKÚ[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–Ø\ÝÜš\ØÚH›ÝÜË[ž™ZYÙ[ˆ[™]Y[[ˆ[œÙZ[ˆ
œ™YXÙJ
K
OO™JÝ˜\šX[Ë›[™Ý
KX˜š[[™Ù[ŠX_JK
šœÞ
JØÚ[™[Ž˜š[[[Y\›ˆ[™[Ý]ž[Ü™[™Ù[ˆ›ZX™[ˆ\š[[‹ˆ[Y™[]Y›˜ZY[ˆÚ[™[ÈÛÛÚH™\ØÚšYX™[‹ˆZ[™HÜ›ðçØ[œÚXÚ0í™™›™]ÚXÚ™Z[H[šÛXÚÙ[ˆ[ˆZ[™[H™]Y[ˆX‹˜JK‰‰ŠšœÞ
J]˜ØÛ\ÜÓ˜[YN˜\ÝÜšXË[YYXKYÜšYÚ[™[Ž›X\
OOŠšœÞÊJšYÝ\™XØÚ[™[Ž–ÚKš[˜ÛY\ÊJI‰™K˜\šX[Ë›X\
OŠšœÞÊJXÚ™YŽœX›XÑš[K\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜˜\šXK[X™[Ž›[X™\ŠØ0­È
ÙK˜[
Ø8 $ÈÜ›ðçØ[œÚXÚ0í™™›™[˜Ú[™[Ž–ÊšœÞ
J[YØÜÜ˜Î[X›˜Z[[›[X™\ŠØ0­È
ÙK˜[ØY[™Î˜^žXJK
šœÞÊJÜ[˜ØÚ[™[Ž–Ý›[X™\‹0­ÈÜ›ðçØ[œÚXÚ0í™™›™[ˆ8¡¥Ø_JW_K›[X™\ŠJK
šœÞÊJšYØØ\[Û˜ØÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–ÙK›[X™\œËš›Ú[ŠÈ
K0­ÈK]W_JKK™\ØÜš\[ÛˆOOYK]I‰ŠšœÞ
JØÚ[™[Ž™K™\ØÜš\[ÛŸJK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜]Y\[™Î˜JKK™][™×_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜]\ÜØYÙ]Ù\˜JKK™]šY[˜ÙW_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜]Y[N˜JKKœÛÝ\˜ÙKKœÛÝ\˜ÙU\›	‰ŠšœÞ
JXÚ™YŽ™KœÛÝ\˜ÙU\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜]Y[[žYØ[™È8¡¥ØJW_JK
šœÞ
JØÚ[™[Ž™K˜Ü™Y]JW_JW_KKšY
J_JW_JN›[Y[˜Ý[Ûˆ
ÜXÙN™_J^Û]Ý—OJ\ÙTÝ]JJ
KÜ‹WOJ\ÙTÝ]JJLJKOUY
Ü]Y\žN[˜ÛYT™\ÙX\˜ÚœŸJNÜ™]\›ˆOÊšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜\ÝÜšXË\XÙX˜\šXK[X™[Ž˜\ÝÜš\ØÚHÝ[™ÜÙ\ØÚXÚXÚ[™[Ž–ÊšœÞ
JØÛ\ÜÓ˜[YN˜\ÝÜšXË\Ý]\ØÚ[™[ŽœÜÙK™]šY[˜ÙS]™[_JK
šœÞ
JØÚ[™[Ž˜Z[ˆ][œØ]ˆ°ï™[YH™[YÝ[ˆ[™™\šXÚ][ˆ][™Ù[ˆY\Ù\ÈÝ[™ÜÈ™^šYZ[™ÜÝÙZ\ÙH[ˆ[™ÙZÛ0é[ˆÝ[™ÜÚ[ÙZ\Ëˆ\ˆ°ïœÝ]\È™\Ý0éYÝ]\ÜØÚYpçÛXÚYH™]ÙZ[È™^™ZXÚ™][ˆ]\ÜØYÙ[‹˜JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜Ý[™ÜÈ[œØÚšYJK
šœÞ
JØÚ[™[Ž™K˜Y™\ÜßJK
šœÞ
JØÚ[™[Ž˜ÙXšY]JK
šœÞ
JØÚ[™[Ž™K™\ÝšXÝJK
šœÞ
JØÚ[™[Ž˜ÜÝ\JK
šœÞ
JØÚ[™[Ž™KšÚ[™JK
šœÞ
JØÚ[™[Ž˜ÙZ]\™H˜[Y[ˆÈÝXÚ˜\šX[[˜JK
šœÞ
JØÚ[™[Ž™K˜[X\Ù\Ëš›Ú[Š0­È
_ÙZ[™HÙZ]\™[ˆÙ\ÚXÚ\[ˆ˜[Y[‹˜JW_JK
šœÞ
J˜ØÚ[™[Ž˜0ç™\›YY™\H[™™[YÝHÙ\ØÚXÚXJK
šœÞ
JØÚ[™[Ž™KœÛØÚX[[˜Ý[ÛŸJK
šœÞ
JÛØÛ\ÜÓ˜[YN˜\ÝÜšXË\\Ù\ØÚ[™[Ž™Kœ\Ù\Ë›X\

K
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž™K›˜[Y_JK
šœÞ
JØÚ[™[ŽŠšœÞ
JÝ›Û™ØØÚ[™[Ž™Kœ\š[ÙJ_JK
šœÞ
JØÚ[™[Ž™KœÝ][Y[JK
šœÞÊJÛX[ØÚ[™[Ž–ØZ[›Ü™[™ÎˆKœÝ]\Ëœ™\XÙP[
Ø
W_JK
šœÞ
JÜÚYÎ™KœÛÝ\˜Ù\ß×KÛÛ\XÝˆLJW_K
J_JK
šœÞ
J˜ØÚ[™[Ž˜™\°é™\[™È[™]]YÙ\ˆÙ[›š\ÜÝ[™JK
šœÞ
JØÚ[™[Ž™K˜[œÚ][ÛŸJK
šœÞ
JØÚ[™[Ž™K˜Ý\œ™[\Ù_JK
šœÞ
JØÚ[™[Ž˜]Y[[œ°ï[™ÎˆL‹ˆ›Ý™[X™\ˆŒ‹ˆÙZ[™H›Ü‹SÜT°ï[™Ëˆ]\ÈZ[™\ˆØÚYpçÝ[™ÈÙ\™[ˆÙZ[™H[™]šYY[[ˆZ[œØ[ZÙZ]Ù›ÛÙ[ˆX™Ù[Z]]˜JK
šœÞ
J˜ØÚ[™[Ž˜Ù™™[™H™XÚ\˜ÚYœ˜YÙ[˜JK
šœÞ
J[ØÚ[™[Ž™K›Ü[”]Y\Ý[ÛœË›X\

K
OOŠšœÞ
JXØÚ[™[Ž™_K
J_JK
šœÞ
J˜ØÚ[™[Ž˜\ÝÜš\ØÚH›ÝÜÈ[™]Y[[˜JK
šœÞ
J\ÚYÎ™Kš[XYÙ\ßJKYKš[XYÙ\Ë›[™Ý	‰ŠšœÞ
JØÚ[™[Ž˜°ïˆY\Ù[ˆ™Z]˜YÈYYÝ[H0ï™\™ÙX™[™[ˆ\˜Ú]ˆ›ØÚÙZ[™HÛÛšÜ™]YÙ[Ü™™]HX˜š[[™È›Ü‹ˆYH›Üš[™[™[ˆØÚšYXÚ[ˆ˜XÚÙZ\ÙH[™\š[›™\[™Ù[ˆ›ÛÙ[ˆ[›Z][˜\‹˜JK
šœÞ
JØØÚ[™[Ž˜˜XÚÙZ\ÙH[™ÜšYÚ[˜[[™Ý[[˜JK
šœÞ
JÜÚYÎ™KœÛÝ\˜Ù\ßJK
šœÞ
J[ØÚ[™[Ž™Kœ™\Ü™YœË›X\

K
OOŠšœÞÊJXØÚ[™[Ž–ÙK™š[Kˆ\œ˜^Kš\Ð\œ˜^JK›[™\ÊOÙK›[™\Ëš›Ú[Š
N™K›[™\ËˆKœÝ]\×_K
J_JKKœ™[]Y›[™ÝŒ	‰ŠšœÞÊJÙXÝ[Û˜ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™\šÛ°ïHÝ[™ÜH[™X™Ü™[ž[™Ù[˜JK
šœÞ
J[ØÚ[™[Ž™Kœ™[]Y›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ‘™
KšY
KÚ[™[Ž“Ù™š[™
OšYOOYKšY
OË›˜[Y_JK8 $ÈKœ™[][Û—_KKšY
J_JW_JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ”KÚ[™[Ž˜\°ïÚÈ[H\ÝÜš\ØÚ[ˆ™\ž™ZXÚš\ØJK0­È
šœÞ
JXÚ™YŽ˜ÙÙ\ØÚXÚXÚ[™[Ž˜Ù\ØÚXÚH[™\š[›™\[™Ù[˜JW_JW_JNŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜\ÝÜšXËXÛÛXÝ[Û˜˜\šXK[X™[YžHŽ˜\ÝÜšXËXÛÛXÝ[Û‹ZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜\ÝÜšXËXÛÛXÝ[Û‹ZXY[™ØÚ[™[Ž˜\ÝÜš\ØÚH™YÙYÛ[™ÜÛÜH8 $ÈÙ[YZ[œØ[Y\È™\ž™ZXÚš\ØJK
šœÞ
JØÚ[™[Ž˜Ý[™ÜÙ\ØÚXÚ[ˆZ]]Y\[ˆ]Y[[ˆÝZ[ˆ™X™[ˆ]\Ù°ïÚÛXÚ[™Ù\°ï[ˆ\š[›™\[™Ù[ˆ[™™XÚ\˜ÚZ[ÙZ\Ù[‹ˆZ[ˆ\ÝÜš\ØÚ\ˆ˜XÚÙZ\È™\Ý0éYÝÙY\ˆ[H™]šYXœÜ\Ù[ˆ›ØÚZ[™HØÚYpçÝ[™ÈÙ\ˆ]]YÙH][™Ëˆ˜[Y[œÝÙXÚÙ[°é[ˆšXÚ[È\ðé›XÚHÜKˆÙ™™[™H[œØÚšY[ˆ[™pí™ÛXÚHYZ™˜XÚ][™Ù[ˆ›ZX™[ˆÙZÙ[›ž™ZXÚ™]˜JK
šœÞÊJØÚ[™[Ž–ÓÙ™š[\ŠOO™K™]šY[˜ÙS]™[OOX[™\[™[
K›[™Ý^\›ˆ™[YÝHÝ[™ÜÙ\ØÚXÚ[ˆ0­ÈÙ›[™Ý][œðé™HZ[œØÚYpçÛXÚ[™ÙZÛ0é\ˆÝ[™ÜÚ[ÙZ\ÙKˆY\ÙH˜Z\ÝÙZ[™HÝ]\ÝZÈÙ\ØÚÜÜÙ[™\ˆ™]šYX™K˜_JK
šœÞ
JX™[Ú[›ÜŽ˜\ÝÜšXË\ÙX\˜ÚÚ[™[Ž˜\ÝÜš\ØÚH˜[Y[‹Ý˜pçÙ[‹ÜØ\[ˆ[™™Z]°é[YHÝXÚ[˜JK
šœÞ
J[œ]ÚY˜\ÝÜšXË\ÙX\˜Ú\N˜ÙX\˜Ú˜[YNÛÚ[™ÙN™OO›ŠK\™Ù]˜[YJKX^[™ÝŒŒJK
šœÞÊJX™[ØÛ\ÜÓ˜[YN˜\ÝÜšXËXÚXÚØ›ÞÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙYœ‹ÛÚ[™ÙN™OOšJK\™Ù]˜ÚXÚÙY
_JK]XÚ\˜Ú]˜™[YÙK\œðí››XÚH\š[›™\[™Ù[ˆ[™[™ÙZÛ0éH™XÚ\˜ÚZ[ÙZ\ÙH[ž™ZYÙ[˜_JK
šœÞÊJÜ›ÛN˜Ý]\ØÚ[™[Ž–ØK›[™Ý\ÜÙ[™H][œðé™X_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXØ\™ØÚ[™[Ž˜K›X\
OOŠšœÞÊJXØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXØ\™™YŽ‘™
KšY
KÚ[™[Ž–ÊšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜\ÝÜšXË\Ý]\ØÚ[™[ŽœÜÙK™]šY[˜ÙS]™[_JK
šœÞ
JØØÚ[™[Ž™K›˜[Y_JK
šœÞ
JÜ[˜ØÚ[™[Ž™K˜Y™\ÜßJK
šœÞÊJÜ[˜ØÚ[™[Ž–ÙKšÚ[™0­ÈK™\ÝšXÝ_JK
šœÞ
JÜ[˜ØÚ[™[Ž˜Ý[™ÜÙ\ØÚXÚH[™°ïœÝ[™0í™™›™[ˆ8¡¤˜JW_KKšY
J_JKXK›[™Ý	‰ŠšœÞ
JØÚ[™[Ž˜ÙZ[™H\ÜÙ[™[ˆZ[°éÙKˆ°ï™[ˆÚYHYHØÚ™ZXÙZ\ÙHÙ\ˆ™^šYZ[ˆÚYHÙZÙ[›ž™ZXÚ™]H™XÚ\˜ÚZ[ÙZ\ÙHZ[‹˜JK
šœÞ
JØÚ[™[Ž˜YH0ï™\›YY™\H˜Z›ÛˆMÈÙ\ØÚÜÜÙ[™[ˆØ\ÝÚ\ØÚY[ˆ\ÝZ[™H\œðí››XÚH™\Ý[™Ø]Y›˜ZYKÙZ[™H™\šYš^šY\HÝ]\ÝZËˆYH0ï™\™ÙX™[™[ˆš[[[Y\›ˆÚ[™[ˆ[°éÚÝÙ\ØÚÜÜÙ[™[ˆØ[\šY[ˆYðé™ÛXÚˆ™ZH[Ý]œX\™H›ZX™[ˆÙ[YZ[œØ[HÙY°ïÈÝ[™Ü][œðé™HÙ\™[ˆY\˜ÚšXÚ™\šY[˜XÚ˜JK
šœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜ÙÙ\ØÚXÚXÚ[™[Ž˜[H™\ÝZ[™[ˆ™\™ZXÚÙ\ØÚXÚH[™\š[›™\[™Ù[˜J_JK
šœÞÊJÙXÝ[Û˜È˜\šXK[X™[Ž˜\ÝÜš\ØÚHš[Ø[[[[™ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜\ÝÜš\ØÚHš[Ø[[[[™È8 $È[HX˜š[[™Ù[˜JK
šœÞ
JØÚ[™[Ž›JKØØ\ÝÝ0é[ˆ[™™YÙYÛ[™ÜÛÜXÙ\ØÚ0éH[™Z[ž™[[™[ÝYH[™ÙX°éYX[œÚXÚ[˜K›X\

K
OOŠšœÞÊJÙXÝ[Û˜ØÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž™_JK
šœÞ
J\ÚYÎšÙ™š[\ŠOOžÛ]YK˜\šX[ÖÌK˜\˜Ú]™T]ÖÌKœÛXÙJŠNÜ™]\›ŠOOXLØÌN›OOXMÌŽŒ
OOO]JK›X\
OO™KšY
_JW_KJJW_JW_J_Y[˜Ý[Ûˆœ

^Ü™]\›ŠšœÞÊJÙXÝ[Û˜È˜\šXK[X™[YžHŽ˜\ÝšXÝËZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜\ÝšXÝËZXY[™ØÚ[™[Ž˜[HMÝYZ[H\È™^š\šÜØJK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXØ\™ØÚ[™[Žš™›X\
OOŠšœÞÊJXØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXØ\™™YŽ”™
KšY
KÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž™K]_JK
šœÞ
JÜ[˜ØÚ[™[Ž™Kš[›ßJK
šœÞ
JÜ[˜ØÚ[™[Ž˜ÝYZ[[œÚXÚ0í™™›™[ˆ8¡¤˜JW_KKšY
J_JW_J_Y[˜Ý[Ûˆ

^Û]ÙKOJ\ÙTÝ]JJ
KÛ‹—OJ\ÙTÝ]JJLJKOJ\ÙT™YŠJ[
KO[ÒÙ
JN˜Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXÛÛ[Y[™]KXÛÛ[Y[]ÜXÈŽ˜™YÙYÛ[™ÜÜÝY]X˜\šXK[X™[YžHŽ˜YY][™ËXÛÛ[Y[ZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜YY][™ËXÛÛ[Y[ZXY[™ØÚ[™[Ž˜ÛÛ[Y[\ˆ\ˆ™YÙYÛ[™ÜÜÝ0éH8 $ÈÚØ[H\ÝZ[™ØX™XJK
šœÞ
JØÚ[™[Ž˜š\ÈHL™ZXÚ[ˆ\ÜÙ[ˆÚXÚÚØ[°ï™[‹ˆ\ÈÚXÙZ[™H0ç™\›Z][™Ë]Y\šYHÜZXÚ\[™ËZ[œ™ZXÚ[™ÈÙ\ˆ™\°í™™™[XÚ[™Ëˆ™Z[H™\›\ÜÙ[ˆ\ˆ[œÚXÚÚ\™YHZ[™ØX™H™\ÛÜ™™[‹˜JK
šœÞ
JØÚ[™[Ž˜Y\Ù\ˆ\ÝÙZ0íœ]\ÜØÚYpçÛXÚH[XHH8 '•ÚYHÜ°ï™HXÚZ[™H™YÙYÛ[™ÜÜÝ0éKYH›Ûˆ[[ˆÜ\[ˆ\ˆÙ\Ù[ØÚY™\ÝXÚÚ\™ø 'ˆZ[™HÜ0é\™H0í™™™[XÚHZ[œ™ZXÚ[™ÈpïÜÝH›Üˆ™\°í™™™[XÚ[™È™YZÝ[Û™[Ù\°ï[™œ™ZYÙYÙX™[ˆÙ\™[‹ˆ\ÈÚXY\ˆÙZ[™H0í™™™[XÚHÛÛ[Y[\›\ÝK˜JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜Ù][œØÚ]˜Ú[™[Ž˜][œØÚ]˜JK0­È
šœÞ
JXÚ™YŽ˜Û[Ù\˜][Û˜Ú[™[Ž˜[Ù\˜][Ûˆ[™™\ØÚÙ\™[˜JK0­È
šœÞ
JXÚ™YŽ˜Ü™YÙ[˜Ú[™[Ž˜Z[˜ZY\™YÙ[˜JW_JK
šœÞÊJ›Ü›XÛ›Õ˜[Y]NˆL]]ÐÛÛ\]N˜Ù™˜Û”ÝX›Z]OžÝœ™]™[Y˜][

KŠL
KÙ
JI‰šK˜Ý\œ™[Ë™›ØÝ\Ê
_KÚ[™[Ž–ÊšœÞ
JX™[Ú[›ÜŽ˜YY][™ËXÛÛ[Y[Ú[™[Ž˜ZˆÛÛ[Y[\ˆ[HÜ°ï™[™ÜÛZ]˜Y[˜JK
šœÞ
J^\™XXÜ™YŽšKY˜YY][™ËXÛÛ[Y[›ÝÜÎ˜[YN™KX^[™ÝL™\]Z\™YˆL˜\šXKZ[˜[YŽˆHXK˜\šXKY\ØÜšX™YžHŽ˜YY][™ËZ[YY][™ËXÛÝ[
ÊOØYY][™ËY\œ›Ü˜˜
KÛÚ[™ÙN™OOžÝ
K\™Ù]˜[YJKŠLJ__JK
šœÞ
JÚY˜YY][™ËZ[Ú[™[Ž˜ÙZ[™HZYÙ[™[ˆÙ\ˆœ™[Y[ˆ˜[Y[‹ÛÛZÝ][‹Ù\Ý[™Z]Ù][ˆÙ\ˆ[™\™[ˆ™\˜][XÚ[ˆ[™ØX™[ˆZ[™ÙX™[‹ˆÙ^°éÙ\™[ˆYH™ZXÚ[™Z[šZ][ˆ\ÈZ[™ØX™Y™[ÎÈX[˜ÚHÞ[X›ÛH°é[ˆYZ™˜XÚ˜JK
šœÞÊJÚY˜YY][™ËXÛÝ[˜\šXK[]™HŽ˜Û]XÚ[™[Ž–ÙK›[™ÝÈL™ZXÚ[˜_JKI‰ŠšœÞ
JÚY˜YY][™ËY\œ›Ü˜›ÛN˜[\Ú[™[Ž˜_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXÛÛ[Y[XXÝ[ÛœØÚ[™[Ž–ÊšœÞ
J]Û˜Ý\N˜ÝX›Z]Ú[™[Ž˜Z[™ØX™H°ï™[˜JK
šœÞ
J]Û˜Ý\N˜]Û˜ÛÛXÚÎŠ
OOžÝ

KŠLJKK˜Ý\œ™[Ë™›ØÝ\Ê
_KÚ[™[Ž˜^™\Ù\™™[˜JW_JK‰‰ˆXI‰ŠšœÞ
JÜ›ÛN˜Ý]\ØÚ[™[Ž˜YHÚØ[H^°ï[™È\Ý\™›ÛÜ™ZXÚˆ\ÈÝ\™HšXÚÈZ[™Ù\™ZXÚ0ï™\›Z][]Y\šYÙ\ÜZXÚ\Ù\ˆ™\°í™™™[XÚ˜JW_JW_J_]˜\ˆ\YOO‹ÙØ\Ý™\Ý]\˜[ØY°ê_ØY™_Û™Z\_Ø\ÝÙŸÚØ[˜\‹ÚK\Ý
JOØØ\ÝÝ0é[˜‹ÙÙ\ØÚ0éÙ]Ù\˜™_Y[ŸZ\ØØY°êKÚK\Ý
JOØÙ\ØÚ0éX˜Ý[\ˆ[™ÙZ]\™H™Y™œ[šÝXÙ[˜Ý[Ûˆ
ÜÙ[XÝYY™OXJ^Û]J\ÙT™YŠJ[
KJ\ÙT™YŠJ[
KJ\ÙT™YŠJ[
KOJ\ÙT™YŠJ

OOžßJKOJ\ÙT™YŠJÜÙ[XÝYY™K]Y\žN˜\ÝšXÝ˜[XØ]YÛÜžN˜[XJKÛË×OJ\ÙTÝ]JJ
KÛWOJ\ÙTÝ]JJ[X
KÙ‹OJ\ÙTÝ]JJ[X
KÛK×OJ\ÙTÝ]JJ
K×Ë—OJ\ÙTÝ]JJ
NØK˜Ý\œ™[^ÜÙ[XÝYY™K]Y\žN›Ë\ÝšXÝ›Ø]YÛÜžN™ŸNÛ]J\ÙTÞ[˜Ñ^\›˜[ÝÜ™JJZKœÝXœØÜšX™KZK™Ù]

OOˆLJK[JÜ[™œ™Y[X\

OO›ZKœÙ]
L
JNÊ\ÙQY™™XÝ
J

OOžÛ]OHLËÎÚYŠJXŸ]˜Ý\œ™[
J\™]\›ˆJ

OOš[\Ü
‹ÛXY›]\Ü˜ËMÖLÑ×ÓšœØ
K[ŠOO˜ÊK™Y˜][JJK[Š\Þ[˜ÈÏOžÚYŠY_]˜Ý\œ™[
\™]\›ŽÛÏXË›X\
˜Ý\œ™[Ë‹‹“ÚKX^›ÛÛNŒŒÙ^X›Ø\™ˆLJK‹˜Ý\œ™[[ÎÛ]^šJËŒ
KO[Ë™Ù]Ú^™J
KQJ‹KžKžJNÛËœÙ]šY]ÊÙ›]›Û—Kž›ÛÛKØ[š[X]NˆL_JK˜\J
NÛ]X]ØZ]J

OOš[\Ü
‹Ú\ÝÜžK][\ËV•žœNMËšœØ
K×Ýš]W×ÛX\\ÊÌËJJNÚYŠYJ\™]\›ŽÙ‹š\ÝÜžU[\ÊËO™I‰™Ê
KÙ^[™YXÙ\ÎˆLK˜\ÙU\›˜Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØJK˜YÊÊNÛ]XË›^Y\‘Ü›Ý\

K˜YÊÊNÜ‹˜Ý\œ™[\Û]O[™]ÈX\
Ù›X\
OO–ÙKšYWJJNÙ[˜Ý[Ûˆ

^Ü˜ÛX\“^Y\œÊ
NÛ]OXK˜Ý\œ™[SY™š[\ŠOžÚYŠ›[™X\šÊ\™]\›ˆLÛ][K™Ù]
šY
NÚYŠ[Š\™]\›ˆLNÛ]VÛ‹›˜[YK‹‹›‹˜[X\Ù\Ë‹˜Y™\ÜË‹šÚ[™‹™\ÝšXÝKš›Ú[Š
KÓØØ[SÝÙ\Ø\ÙJX
NÜ™]\›ŠYKœ]Y\ž_‹š[˜ÛY\ÊKœ]Y\žKÓØØ[SÝÙ\Ø\ÙJX
JJI‰ŠK™\ÝšXÝOOX[X‹™\ÝšXÝOOYK™\ÝšXÝ
I‰ŠK˜Ø]YÛÜžOOOX[X\
‹šÚ[™
OOOYK˜Ø]YÛÜžJ_JKYOO›Ëœ›Ú™XÝ
ÙK›]K›Û—KË™Ù]›ÛÛJ
JNÙ›ÜŠ]ˆÙˆšJ‹Î
J^Û]YØÝ[Y[˜Ü™X]Q[[Y[
]˜
NÝ˜Û\ÜÓ˜[YOX\ÝÜšXË[X\\Ü\Û]YØÝ[Y[˜Ü™X]Q[[Y[
]˜
NÛ‹˜Û\ÜÓ˜[YOX\ÝÜšXË[X\]ÛÛ\Ù›ÜŠ]HÙˆ‹™[šY\Ê^ÚYŠK›[™X\šÊ^Û]OYØÝ[Y[˜Ü™X]Q[[Y[
ÙXÝ[Û˜
KOYØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KÏYØÝ[Y[˜Ü™X]Q[[Y[

KÏYØÝ[Y[˜Ü™X]Q[[Y[
X
NÚYŠK^ÛÛ[YK›˜[YKË^ÛÛ[YK˜˜\Ú\ÊØ0­ÈÜšY[Y\[™ÜÜ[šÝÙZ[™HZÝY[HZ[œšXÚ[™ØËš™YYKœÛÝ\˜ÙKË\™Ù]XØ›[šØËœ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ë^ÛÛ[X[]XÚHÙ\ØÚXÚÚ[™›Ü›X][Ûˆ8¡¥ØK˜\[™
KËÊK˜\[™
JK‹™[šY\Ë›[™ÝOOLI‰ˆ[‹˜Ú[›Ù\Ë›[™Ý
^Û]YØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KYØÝ[Y[˜Ü™X]Q[[Y[
Ü[˜
NÝ^ÛÛ[YK›˜[YK‹^ÛÛ[YK˜˜\Ú\Ë‹˜\[™
Š_XÛÛ[Y_[]O[K™Ù]
KšY
NÚYŠZJXÛÛ[YNÛ]OYØÝ[Y[˜Ü™X]Q[[Y[
ÙXÝ[Û˜
KÏYØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KÏYØÝ[Y[˜Ü™X]Q[[Y[

KÏYØÝ[Y[˜Ü™X]Q[[Y[
ÛX[
KYØÝ[Y[˜Ü™X]Q[[Y[
X
NÛË^ÛÛ[ZK›˜[YKË^ÛÛ[ZK˜Y™\ÜÊØ0­È
ÚKšÚ[™
Ø0­È
ÚK™\ÝšXÝË^ÛÛ[XØ\Y\[™Îˆ]]YÙ\ˆY™\ÜÜ[šÝÈ\ÝÜš\ØÚHÙX°éYY›0éÚHšXÚ[˜Xš0é™ÚYÈ™[YÝˆ
ÙK˜˜\Ú\ÊØ0­È
ÚKœ\Ù\Ë›X\
OO™Kœ\š[Ù
Kš›Ú[ŠÈ
Kš™YQ™
KšY
K^ÛÛ[XÝ[™ÜÙ\ØÚXÚK]Y[[ˆ[™š[\ˆ0í™™›™[ˆ8¡¤˜K˜\[™
ËËË
NÛ]OU™
Ù™š[\ŠOO™KœÚ]RYÏËš[˜ÛY\ÊKšY
JJNÙ›ÜŠ]HÙˆKœÛXÙJŠJ^Û]YØÝ[Y[˜Ü™X]Q[[Y[
šYÝ\™X
KYØÝ[Y[˜Ü™X]Q[[Y[
[YØ
KYØÝ[Y[˜Ü™X]Q[[Y[
šYØØ\[Û˜
NÚYŠ‹œÜ˜ÏYK˜\šX[ÖÌK[X›˜Z[‹˜[YK˜[‹›ØY[™ÏX^žX‹^ÛÛ[YK]JØ0­È
ÙK™]šY[˜ÙJØ0­È
ÙK˜Ü™Y]˜\[™
‹ŠKKœÛÝ\˜ÙU\›
^Û]YØÝ[Y[˜Ü™X]Q[[Y[
X
NÛ‹š™YYKœÛÝ\˜ÙU\›‹\™Ù]XØ›[šØ‹œ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜‹^ÛÛ[Xš[]Y[H8¡¥Ø˜\[™
Š_XKš[œÙ\™Y›Ü™J
_ZYŠ˜\[™
JK‹™[šY\Ë›[™ÝOOLI‰ˆ[‹˜Ú[›Ù\Ë›[™Ý
^Û]OYØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KYØÝ[Y[˜Ü™X]Q[[Y[
Ü[˜
NÚYŠK^ÛÛ[ZK›˜[YK^ÛÛ[ZKœ\Ù\Ë›X\
OO™Kœ\š[Ù
Kš›Ú[ŠÈ
K‹˜\[™
K
KVÌJ^Û]OYØÝ[Y[˜Ü™X]Q[[Y[
[YØ
NÙKœÜ˜Ï]VÌK˜\šX[ÖÌK[X›˜Z[K˜[]VÌK˜[K›ØY[™ÏX^žX‹˜\[™
J___[]O\‹™[šY\Ë›[™ÝOOLOÜ‹™[šY\Ë›X\
OO™K›[™X\šÏÙK›˜[YN›K™Ù]
KšY
OË›˜[YJK™š[\Š›ÛÛX[ŠKš›Ú[Š
N˜	Ü‹™[šY\Ë›[™ÝH\ÝÜš\ØÚHZ[°éÙH[ˆY\Ù\ˆ°éXÚYŠ‹™[šY\Ë›[™ÝŒJ^Û]OYØÝ[Y[˜Ü™X]Q[[Y[

NÙK^ÛÛ[ZKœ™\[™
JNÛ]YØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KOYØÝ[Y[˜Ü™X]Q[[Y[
Ü[˜
NÜ‹^ÛÛ[ZKK^ÛÛ[XX\šÙ\ˆ[šÛXÚÙ[‹[H[HZ[°éÙHH0í™™›™[˜‹˜\[™
‹J_[]O\‹™[šY\ËœÛÛYJOšYOOYKœÙ[XÝYY
KÏXË›X\šÙ\ŠÜ‹›]‹›Û—KÝ]NšK[šKÙ^X›Ø\™ˆLXÛÛŽ˜Ë™]’XÛÛŠØÛ\ÜÓ˜[YN˜\ÝÜšXØ[Y[˜ÛÝ[\œË\[˜
Ê‹™[šY\ËœÛÛYJOO™K›[™X\šÊOØ[™X\šØ˜
K[œ‹™[šY\Ë›[™ÝŒOÔÝš[™Ê‹™[šY\Ë›[™Ý
N˜8¥á˜XÛÛ”Ú^™N–ÌÎÎKXÛÛ[˜ÚÜŽ–ÌNKNW_J_JNÜË˜š[™ÛÛ\
‹Ù\™XÝ[ÛŽ˜]]ØÝXÚÞNˆLÜXÚ]N‹ŽMŸJKË˜š[™Ü\
ÛX^ÚYŒÍŒX^ZYÚ“X]›X^
MX]›Z[ŠX]œ›Ý[™
Ú[™ÝËš[›™\’ZYÚ
‹ŠKX]œ›Ý[™
Ë™Ù]Ú^™J
KžJ‹ŒÍJJJK]]Ô[ŽˆL]]Ô[”Y[™Î–Ì_JKË˜YÊ
KI‰œË›Ü[”Ü\

__ZYŠK˜Ý\œ™[Z

KË›ÛŠ›ÛÛY[™[Ý™Y[™
KK˜Ý\œ™[œÙ[XÝYY
^Û]OSY™š[™
OO™KšYOOXK˜Ý\œ™[œÙ[XÝYY
NÙI‰›ËœÙ]šY]ÊÙK›]K›Û—KM‹Ø[š[X]NˆL_J_\Ï[™]È™\Ú^™SØœÙ\™\Š

OO”šJË
JKË›ØœÙ\™J˜Ý\œ™[
_JK›ÚY
K˜Ø]Ú


OO™I‰™ÊYH\ÝÜš\ØÚHØ\HÛÛ›HšXÚÙ[Y[ˆÙ\™[‹ˆ\È›ÛÝ0é™YÙH™\ž™ZXÚš\È›ZX™\™°ïØ˜\‹˜
JK

OOžÙOHLKÏË™\ØÛÛ›™XÝ

KÉ‰ŠË›Ù™Š
KËœ™[[Ý™J
JK‹˜Ý\œ™[[[‹˜Ý\œ™[[[_KØ‹×JK
\ÙQY™™XÝ
J

OOžÚK˜Ý\œ™[

_KÛË‹WJNÛ]ÏVË‹‹›™]ÈÙ]
Y™š[\ŠOOˆYK›[™X\šÊK›X\
OO“Ù™š[™
OšYOOYKšY
OË™\ÝšXÝ
K™š[\Š›ÛÛX[ŠJWKœÛÜ

NÜ™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜\ÝÜšXË[X\\Ú[˜\šXK[X™[YžHŽ˜\ÝÜšXØ[[X\ZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜\ÝÜšXØ[[X\ZXY[™ØÚ[™[Ž˜\ÝÜš\ØÚHØ\H8 $ÈZ[X[YÙH™YÙYÛ[™ÜÛÜH[ˆ™\™ÙYÜ™˜JK
šœÞ
JØÚ[™[Ž˜Y\ÙHØ\HÚÝ[Y[Y\\ÝÜš\ØÚHÝ[™ÜH›ÛˆØ\ÝÝ0é[‹Ù\ØÚ0é[ˆ[™ÙZ]\™[ˆ™YÙYÛ[™ÜÛÜ[ˆ[H™^š\šÈ™\™ÙYÜ™‹ˆYH\™Ù\Ý[[ˆZ[œšXÚ[™Ù[ˆ™\Ý[™[ˆH[\œØÚYYXÚ[ˆ™Z][ˆ[™Ú[™šXÚ[È]]YÙH[™ÙX›ÝHH™\œÝZ[‹˜JK
šœÞÊJØÛ\ÜÓ˜[YN˜\ÝÜšXË[X\X˜\ÙK[›ÝXÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜]]YÙHØ\[™Ü[™YÙH
Ü[”Ý™Y]X\
KÙZ[ˆÝY[ˆZ[™\È\ÝÜš\ØÚ[ˆ˜Z™\Ë˜JKX\šÚY\HÙ\ØÚ0éÜÝ[™ÜH™ZYÙ[ˆYH]]YÙHY™\ÜÙH™^šYZ[™ÜÝÙZ\ÙHÙX°éY\ÜÚ][Ûˆ[H0ï™\›YY™\[ˆÝ˜pçÙ[›˜[Y[ˆ[™\ˆ]\Û[[Y\‹ˆYH\ÝÜš\ØÚHÙX°éYY›0éÚH\Ý[Z]šXÚ[˜Xš0é™ÚYÈ˜XÚÙ]ÚY\Ù[‹ˆšXÚ]\Ü™ZXÚ[™ÚØ[\ÚY\˜˜\™HZ[°éÙHÝZ[ˆ[[ˆ[ˆZ[™\ˆZYÙ[™[ˆ\ÝK˜_JK
šœÞ
JØÚ[™[Ž˜YH[]XÚ[ˆ[X\™Ù\ˆØ\[Ù\šÙH[[[ˆ™\™ÙYÜ™™\ˆØ\[˜›0é\ˆ›ÛˆNLNKX™\ˆZ[™HÙ™™[ˆ]˜˜\™HÙ[Ü™Y™\™[žšY\HÜ[™YÙHØ[]˜XÚ][™ÜÙ\›]X›š\ÈYpçÈÚXÚ°ïˆY\ÙH[\Ù][™ÈšXÚ™\ÝÝ[[‹ˆ\Ú[ˆÚ\™ÙZ[ˆ\ÝÜš\ØÚ\ˆØ\[š[\™Ü[™›Ü™Ù]0é\ØÚ˜JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜\ÝÜšXË[X\Yš[\œØÚ[™[Ž–ÊšœÞÊJX™[ØÚ[™[Ž–Ø\ÝÜš\ØÚH˜[Y[‹Ý˜pçÙ[ˆ[™ÜØ\[ˆÝXÚ[˜
šœÞ
J[œ]Ý\N˜ÙX\˜Ú˜[YN›ËÛÚ[™ÙN™OOœÊK\™Ù]˜[YJKX^[™ÝŒMŒJW_JK
šœÞÊJX™[ØÚ[™[Ž–ØÝYZ[
šœÞÊJÙ[XÝÝ˜[YN›ÛÚ[™ÙN™OOJK\™Ù]˜[YJKÚ[™[Ž–ÊšœÞ
JÜ[Û˜Ý˜[YN˜[XÚ[™[Ž˜[HÙXšY]XJKË›X\
OOŠšœÞ
JÜ[Û˜Ý˜[YN™KÚ[™[Ž™_KJJW_JW_JK
šœÞÊJX™[ØÚ[™[Ž–ØÜÝ\
šœÞÊJÙ[XÝÝ˜[YN™‹ÛÚ[™ÙN™OOœ
K\™Ù]˜[YJKÚ[™[Ž–ÊšœÞ
JÜ[Û˜Ý˜[YN˜[XÚ[™[Ž˜[HÜÝ\[˜JK
šœÞ
JÜ[Û˜ØÚ[™[Ž˜Ø\ÝÝ0é[˜JK
šœÞ
JÜ[Û˜ØÚ[™[Ž˜Ù\ØÚ0éXJK
šœÞ
JÜ[Û˜ØÚ[™[Ž˜Ý[\ˆ[™ÙZ]\™H™Y™œ[šÝXJW_JW_JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™HÛX[ÛÛXÚÎŠ
OOžÜÊ
KJ[X
K
[X
_KÚ[™[Ž˜š[\ˆ\°ïÚÜÙ]™[˜JW_JK
šœÞÊJÜ›ÛN˜Ý]\ØÚ[™[Ž–ÓY™š[\ŠOO™K›[™X\šßÙœÛÛYJOšYOOYKšY	‰Š[ßÝ›˜[YK‹‹˜[X\Ù\Ë˜Y™\ÜËšÚ[™™\ÝšXÝKš›Ú[Š
KÓØØ[SÝÙ\Ø\ÙJX
Kš[˜ÛY\ÊËÓØØ[SÝÙ\Ø\ÙJX
JJI‰ŠOOX[X™\ÝšXÝOO[
I‰ŠOOX[X\
šÚ[™
OOOYŠJJK›[™ÝØ\[™Z[°éÙH[HZÝY[[ˆ]\ÜØÚš]È[YÙX[™ÜÜ[šÝHÙ\™[ˆ™ZHÙ\š[™Ù[HXœÝ[™Ù[YZ[œØ[HÙpí™™›™]˜_JKI‰ŠšœÞÊJÜ›ÛN˜Ý]\ØÚ[™[Ž–ÛK[šÝH[™™\ž™ZXÚš\È›ZX™[ˆ]˜˜\‹˜_JK
šœÞÊJ]˜ÚY˜\ÝÜšXØ[Y[˜ÛÝ[\œË[X\Y\™XÝ]\™Ù]Û\ÜÓ˜[YN˜\ÝÜšXË[X\XÛÛ›ÛØÚ[™[Ž–ØÊšœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜^X]Û˜ÛÛXÚÎŠ
OO›ZKœÙ]
LJKÚ[™[Ž˜Ø\H[Y[˜JNŠšœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™XÛÛXÚÎ™OOž˜\ÚÊJKÚ[™[Ž˜\ÝÜš\ØÚHØ\HY[˜JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™X\ØX›YˆX‹ÛÛXÚÎŠ
OOŠOO™JÌJKÚ[™[Ž˜Ø\H™]HY[˜JK
šœÞ
JXÚ™YŽ˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËØÛÜ\šYÚ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ø\[™][Žˆ0ªHÜ[”Ý™Y]X\SZ]Ú\šÙ[™H8¡¥ØJW_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜\ÝÜšXØ[Y[˜ÛÝ[\œË[X\™YŽ›ÛN˜\XØ][Û˜˜\šXK[X™[Ž˜[\˜ZÝ]™H\ÝÜš\ØÚHØ\H›Ûˆ™\™ÙYÜ™˜JK™X[ÙË
šœÞ
JØÚ[™[Ž˜X\šÙ\ˆÚ[™Z]X]\Ë™\°ï[™È[™\Ý]\ˆ\œ™ZXÚ˜\‹ˆZ[ˆX\šÙ\ˆ™ZYÝ˜[Y[‹0ï™\›YY™\H[œØÚšY™Z]˜][X[™ØX™[‹Ý[™ÜÝ]\È[™[ˆ[šÈ\ˆ›ÛÝ0é™YÙ[ˆÝ[™ÜÙ\ØÚXÚK˜JW_J_Y[˜Ý[ÛˆÜ
ÜÙ[XÝYY™OXJ^Û]SÙ™š[\ŠOOˆS
KšY
JNÜ™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜\ÝÜšXËXÛÛXÝ[Ûˆ\ÝÜšXËXÛÛXÝ[Û‹[X\]šY]ØÚ[™[Ž–ÊšœÞÊJ˜]˜ØÛ\ÜÓ˜[YN˜\ÝÜšXË]šY]Ë]XœØ˜\šXK[X™[Ž˜\ÝÜš\ØÚ\È™\ž™ZXÚš\Îˆ[œÚXÚ[˜Ú[™[Ž–ÊšœÞ
JXÚ™YŽ’Y

K˜\šXKXÝ\œ™[Ž˜YÙXÚ[™[Ž˜\ÝÜš\ØÚHØ\XJK
šœÞ
JXÚ™YŽ’Y

Kœ™\XÙJØ[œÚXÚZØ\X
KÚ[™[Ž˜›ÛÝ0é™YÙ\È™\ž™ZXÚš\È[™š[\˜Ú]˜JW_JK
šœÞ
JÜÙ[XÝYY™_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜\ÝÜšXË][›ØØ]Y˜\šXK[X™[YžHŽ˜\ÝÜšXË][›ØØ]YZXY[™ØÚ[™[Ž–ÊšœÞÊJ˜ÚY˜\ÝÜšXË][›ØØ]YZXY[™ØÚ[™[Ž–Ø\ÝÜš\ØÚHÜH8 $ÈÝ[™Ü›ØÚšXÚXœØÚYpçÙ[™ÙZÛ0é
›[™Ý
X_JK
šœÞ
JØÚ[™[Ž˜Y\ÙHZ[°éÙH›ZX™[ˆ›ÛÝ0é™YÈ\š[[‹ˆ°ïˆÚYHYYÝ›ØÚÙZ[™H[œ™ZXÚ[™™[YÝKY™\ÜÙZ[™]]YÙHØ\[œÜÚ][Ûˆ›Ü‹ˆZ[ˆÝ˜pçÙ[›˜[YHÙ\ˆZ[ˆ™\™ZXÚÚ[ÙZ\ÈÝ\™HšXÚ[ˆZ[™HØÚZ[˜˜\ˆÙ[˜]YHÛÛÜ™[˜]H[YÙ]Ø[™[˜JK
šœÞ
J[ØÚ[™[Ž›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ‘™
KšY
KÚ[™[Ž™K›˜[Y_JK8 %K˜Y™\ÜË0­ÈKšÚ[™0­ÈK™\ÝšXÝ_KKšY
J_JK
šœÞ
JØÚ[™[Ž˜]XÚYHNHY™\ÜØ™^›ÙÙ[ˆX\šÚY\[ˆÝ[™Ü][œðé™H™ZYÙ[ˆZ[™H]]YÙHY™\ÜËHÙ\ˆÙX°éY\ÜÚ][Û‹ÙZ[™H[˜Xš0é™ÚYÈ™]ÚY\Ù[™H\ÝÜš\ØÚHÜ[™Ý0ïÚÜÙÜ™[ž™KˆYHØ\[›X\šÙ\ˆ™[›™[ˆY\ÙHZ[œØÚ°éšÝ[™ÈZ[ž™[‹˜JW_JW_J_Y[˜Ý[ÛˆÜ
J^Ü™]\›ˆKšYOOX[™XØÜšY[Y\[™È[™0ï™\œ°ïHYðé™ÙHH™\˜][™ËÙ\Ü°éÚ[ˆ[™˜ZÝ\ØÚ\ˆ[\œÝ0ï[™È[ˆ™\™ÙYÜ™‹˜™K™\ØÜš\[ÛŸY[˜Ý[Ûˆœ
ÝÜXÜÎ™_J^Ü™]\›ŠšœÞ
J]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXØ\™ØÚ[™[Ž™K›X\
OOŠšœÞÊJXØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXØ\™™YŽ™Kš™YŸ™‹™š[™
OšYOOYKšY
OËš™Y‹Ú[™[Ž–ÊšœÞ
JØØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXØ\™]]XÚ[™[Ž™K]_JK
šœÞ
JÜ[˜ØÚ[™[Ž—Ü
J_JK
šœÞÊJÜ[˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXØ\™[[šØÚ[™[Ž–Ø[XH0í™™›™[ˆ
šœÞ
J™‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒNJW_JW_KKšY
J_J_Y[˜Ý[Ûˆ\

^Û]OVYJ
KYKœ\ËœÛXÙJJK\Š
K]›[™ÝOOLÉ‰ÌOOOXZ]Ú\šÝ[™Ø	‰ÌWOOOX›Ú™ZÝXØJÌ—JN›[O]›[™ÝOOLOJKœ\˜[\Ëœ_
KœÛXÙJÌ
KÛË×OJ\ÙTÝ]JJJKÏJ\ÙT™YŠJ[
K[ËšYOOXLM˜	‰™Kœ\˜[\Ë˜[œÚXÚOOXØ\XO\ÜŠØZ]Ú\šÝ[™ØJN›[ÜXÙN™‹\ÝšXÝœ[˜[Y›K]N™Ë™YŽ—Ë\™[ŸO\Y
ËšYKœ\˜[\ÊKOYŸ]š›Ú[ŠØ
JÊKœ\˜[\Ë›ÜKœ\˜[\ËœÝYZ[
NÊ\ÙQY™™XÝ
J

OOžÜÊJ_KØWJK
\ÙQY™™XÝ
J

OOžØË˜Ý\œ™[Ë™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJ_KØ—JK
\ÙQY™™XÝ
J

OOžÚYŠ[
\™]\›ŽÛ]O\™\]Y\Ý[š[X][Û‘œ˜[YJ

OO™ØÝ[Y[™Ù][[Y[žRY
\ÝÜšXØ[Y[˜ÛÝ[\œË[X\Y\™XÝ]\™Ù]
OËœØÜ›Û[ÕšY]ÊØ›ØÚÎ˜Ý\™Z]š[ÜŽ˜[œÝ[JJNÜ™]\›Š
OO˜Ø[˜Ù[[š[X][Û‘œ˜[YJJ_KÛ—JNÛ]\ÖË‹‹šŠJKÝ]N˜›Ú™ZÝYY[˜™YŽ˜ÙZ[œØ[ZÙZ]ÛZ]Ú\šÝ[™ØKÝ]Nœ‹]K™YŽœ‹š™YŸWN–Ë‹‹šŠŠK‹‹žOÖÞÝ]N™Ë™YŽ—ßWN–×WKÏWÙŠJNÜ™]\›ŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[Û™[[™\ÜË\YÙXÚ[™[Ž–ÊšœÞ
J˜]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËXœ™XYÜ[XœØ˜\šXK[X™[Ž˜[Y[œ˜YÚ[™[ŽŠšœÞ
JÛØÚ[™[Žž›X\

K
OOŠšœÞÊJXØÚ[™[Ž–ÝŒ	‰ŠšœÞ
JÜ[˜È˜\šXKZY[ˆŽ˜YXÚ[™[Ž˜8 .˜JKOO^›[™ÝLI‰Š_ŠOÊšœÞ
JÜ[˜È˜\šXKXÝ\œ™[Ž˜YÙXÚ[™[Ž™K]_JNŠšœÞ
JXÚ™YŽ™Kš™Y‹Ú[™[Ž™K]_JW_KKš™YŠJ_J_JKZI‰ŠšœÞÊJXØÛ\ÜÓ˜[YN˜Û™[[™\ÜËX˜XÚØ™YŽœØÙZ[œØ[ZÙZ]ÛZ]Ú\šÝ[™Øž_OÝŽ›YŠŠKÚ[™[Ž–ÊšœÞ
J‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒNJKØ\°ïÚÈH8 '”›Ú™ZÝYY[¸ 'ž_OØ\°ïÚÈH8 '˜
ÛË]JØ8 '›Ëœ\™[Ë›[™ÝØ\°ïÚÈH8 '˜
Û‹œ\™[Ë˜]
LJK]JØ8 '˜\°ïÚÈ\ˆ[Y[°ï™\œÚXÚ_JK
šœÞÊJXY\˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËZ[›ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜ÒTÔÑSˆ0­È‘QÑQÓ•S‘È0­ÈRURSS‘T˜JK
šœÞ
JXÜ™YŽ˜ËX’[™^‹LKÚ[™[ŽœÜ‹]NšOØZ[œØ[ZÙZ][ˆ™\™ÙYÜ™˜žOÙÎ›Ë]_[XHšXÚÙY[™[˜JK
_ËšYOOXLM˜
I‰ŠšœÞ
JßJK
šœÞ
JØÚ[™[ŽœÜ‹™\ØÜš\[ÛŽšOØðé[ˆÚYHZ[ˆ[XHÙ\ˆÝXÚ[ˆÚYHÙ^šY[˜XÚZ[™[H™YÜšY™‹˜žOÙØÝ[™ÜÙ\ØÚXÚNˆ]Y[[‹\š[›™\[™Ù[ˆ[™Ù™™[™Hœ˜YÙ[ˆÙ]™[›˜XÚ›ÛšYZ[‹˜œš[›Î›×Ü
ŠN˜[\ˆY\Ù\ˆY™\ÜÙH\ÝÙZ[ˆ[XH›Üš[™[‹ˆ0ç™\ˆYH[Y[°ï™\œÚXÚ[™YHÝXÚHš[™[ˆÚYHYH™\™°ïØ˜\™[ˆ[š[K˜JW_JKËšYOOXLM˜	‰ˆ[	‰ˆ^I‰ˆ[I‰ŠšœÞÊJ\ÚYXØÛ\ÜÓ˜[YN˜\ÝÜšXË[X\\]ZXÚËXXØÙ\ÜØ˜\šXK[X™[YžHŽ˜\ÝÜšXË[X\\]ZXÚËZXY[™ØÚ[™[Ž–ÊšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜\ÝÜšXË[X\\]ZXÚËZXY[™ØÚ[™[Ž˜\ÝÜš\ØÚHØ\H\ˆ™YÙYÛ[™ÜÛÜXJK
šœÞ
JØÚ[™[Ž˜YHØ\H™ZYÝYH™[YÝ[ˆ\ÝÜš\ØÚ[ˆÝ[™ÜH[™ÙZHÜšY[Y\[™ÜÜ[šÝKˆYH]]YÙHÝ˜pçÙ[šØ\HY[\ˆ\ˆÙ[ÙÜ˜Yš\ØÚ[ˆZ[›Ü™[™ÎÈÙZ]\™HZ[°éÙHÚ™H™[YÝHÙ[˜]YHYÙH›ZX™[ˆ[H™\ž™ZXÚš\Ë˜JW_JK
šœÞ
JXØÛ\ÜÓ˜[YN˜Ý][™X™YŽ’Y

KÚ[™[Ž˜\ÝÜš\ØÚHØ\H[ž™ZYÙ[˜JK
šœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]ÜÝYZ[KÝLM˜Ú[™[Ž˜›ÛÝ0é™YÙ\È™\ž™ZXÚš\È[ž™ZYÙ[ˆ8¡¤ØJW_JK	‰›ËšYOOXLM˜	‰ŠšœÞ
JÜÜÙ[XÝYY™Kœ\˜[\Ë›ÜJKI‰ŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËY[žXÚ[™[Ž–ÊšœÞÊJXØÛ\ÜÓ˜[YN˜Û™[[™\ÜËZ[™YŽ˜ÙZ[œØ[ZÙZ]Ú[™XÚ[™[Ž–ÊšœÞ
JÙ‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒÌJK
šœÞÊJÜ[˜ØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜XÚÝXÚHÛÛZÝHÙ\ˆ[\œÝ0ï[™ØJK
šœÞ
JÜ[˜ØÚ[™[Ž˜\™ZÝ[H™\™ZXÚ[™K™\˜][™È[™[\œÝ0ï[™ØJW_JK
šœÞ
J™‹È˜\šXKZY[ˆŽ˜YXJW_JK
šœÞÊJXØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\ÙX\˜ÚZ[\™YŽ™Š
KÛÛXÚÎ™OOžÙKœ™]™[Y˜][

KØÝ[Y[™Ù][[Y[žRY
Û™[[™\ÜË\ÙX\˜Ú
OË™›ØÝ\Ê
KØÝ[Y[™Ù][[Y[žRY
Û™[[™\ÜË\ÙX\˜Ú
OËœØÜ›Û[ÕšY]ÊØ›ØÚÎ˜Ù[\˜J_KÚ[™[Ž–ÊšœÞ
J‹È˜\šXKZY[ˆŽ˜YXJK\ˆ[Y[œÝXÚX_JW_JK‰‰›‹œ]ÌOOOX[™X	‰ŠšœÞ
J\ÚY›‹šYKŠK‰‰–ØX™[œÜÚ]X][Û™[˜Ù\Ý[™Z]Ù[œÝXZÝ]‹]Ù\™[˜™YÙYÛ[™Ø™YÙYÛ[™ÜÜÝY]XÝYZ[XKš[˜ÛY\Ê‹œ]ÌJI‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜËY\™XÝZ[Ú[™[ŽŠšœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]Ú[™XÚ[™[Ž˜\™ZÝH™\˜][™ËÙ\Ü°éÚØ[™ÙX›Ý[ˆ[™˜ZÝ\ØÚ\ˆ[\œÝ0ï[™ØJ_JK‰‰›‹œ]ÌOOOXÙ\Ý[™Z]	‰ŠšœÞ
J	‹ßJKI‰ŠšœÞ
J‹ßJKØ™YÙYÛ[™ØÝYZ[XKš[˜ÛY\ÊËšY
I‰ŠšœÞ
Jœ‹ßJKËšYOOXZ]Ú\šÝ[™Ø	‰ŠšœÞ
J\ßJKËšYOOXMËL˜	‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜËY\™XÝZ[Ú[™[ŽŠšœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]ÛZ]Ú\šÝ[™ØÚ[™[Ž˜N›Ú™ZÝYY[ˆZ]Ý]\Ë™\ÜÛÝ\˜Ù[ˆ[™Ù™™[™[ˆ›Ü˜]\ÜÙ][™Ù[ˆ[œÙZ[˜J_JK[	‰ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\ÙX\˜Ú˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\ÙX\˜ÚZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜË\ÙX\˜ÚZXY[™ØÚ[™[Ž˜[Y[œÝXÚXJK
šœÞÊJ›Ü›XÜ›ÛN˜ÙX\˜Ú˜\šXK[X™[Ž˜Z[œØ[ZÙZ]Ý[Y[ˆ\˜ÚÝXÚ[˜Û”ÝX›Z]™OOžÙKœ™]™[Y˜][

KYJ™ŠÊKÜØÜ›ÛˆL_J_KÚ[™[Ž–ÊšœÞ
JX™[Ú[›ÜŽ˜Û™[[™\ÜË\ÙX\˜ÚÚ[™[Ž˜›Üš[™[™H[Y[ˆ\˜ÚÝXÚ[˜JK
šœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J[œ]ÚY˜Û™[[™\ÜË\ÙX\˜Ú\N˜ÙX\˜Ú˜[YN›ËX^[™ÝŒÌÛÚ[™ÙN™OOœÊK\™Ù]˜[YJKXÙZÛ\Ž˜[H™Z\ÜY[ˆ™YÙYÛ[™ÈÙ\ˆ[\œÝ0ï[™ØJK
šœÞÊJ]Û˜Ý\N˜ÝX›Z]Ú[™[Ž–ÊšœÞ
J‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒNJKÝXÚ[˜_JW_JW_JK
šœÞ
JØÚ[™[Ž˜YHÝXÚH™\°ïÚÜÚXÚYÝ\ˆ]ðéÚXÚ›Üš[™[™H0ç™\œØÚšY[‹Ý\ž˜™\ØÚ™ZX[™Ù[ˆ[™™YZÝ[Û™[H^K˜JKI‰ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\™\Ý[Ø˜\šXK[X™[YžHŽ˜Û™[[™\ÜË\™\Ý[ËZXY[™ØÚ[™[Ž–ÊšœÞÊJØÚY˜Û™[[™\ÜË\™\Ý[ËZXY[™ØÚ[™[Ž–ØÝXÚ\™ÙX›š\ÜÙH°ïˆ8 '˜K8 '_JK
šœÞÊJÜ›ÛN˜Ý]\ØÚ[™[Ž–ÔË›[™ÝË›[™ÝOOLOØ[XHÙY[™[˜˜[Y[ˆÙY[™[˜˜Ë›[™ÝOOLØ™\œÝXÚ[ˆÚYHZ[™[ˆ[™\™[ˆÝXÚ™YÜšY™‹˜˜_JK
šœÞ
J[ØÚ[™[Ž”Ë›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ™Kš™Y‹Ú[™[Ž™K]_JK
šœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜË\™\Ý[\]Ú[™[ŽšŠJK›X\
OO™K]JKš›Ú[Š8 .ˆ
_JK
šœÞ
JØÚ[™[Ž—Ü
J_JW_KKš™YŠJ_JK
šœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]Ú[™[Ž˜ÝXÚH\°ïÚÜÙ]™[ˆ[™[H[Y[ˆ[ž™ZYÙ[˜JW_JW_JKOÊšœÞ
J‘œ˜YÛY[ØÚ[™[ŽY‹›X\
OOŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYÜ›Ý\˜\šXK[X™[YžHŽ˜Û™[[™\ÜËYÜ›Ý\X
ÙKšYÚ[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYÜ›Ý\ZXY[™ØÚ[™[Ž–ÊšœÞ
JÜ[˜È˜\šXKZY[ˆŽ˜YXÚ[™[Ž”Ýš[™ÊY‹š[™^ÙŠJJÌJKœYÝ\
‹
_JK
šœÞ
J˜ÚY˜Û™[[™\ÜËYÜ›Ý\X
ÙKšYÚ[™[Ž™K]_JW_JK
šœÞ
JœÝÜXÜÎ˜Ù‹™š[\ŠO™Ü›Ý\OOYKšY
_JW_KKšY
J_JNœÊšœÞ
JÜÜ›Ú™XÝœŸJN›ÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–È[	‰ˆ^I‰ˆ[I‰›‹˜Ú[™[‹›[™ÝŒ	‰ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYÜ›Ý\˜\šXK[X™[YžHŽ˜Û™[[™\ÜËXÚ[™[‹ZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜËXÚ[™[‹ZXY[™ØÚ[™[Ž›‹œ\™[Ë›[™ÝØÙZ]\™H[Y[˜˜[\[Y[˜JK
šœÞ
JœÝÜXÜÎ›‹˜Ú[™[‹›X\
OO™™‹™š[™
OšYOOYKšY
J_JW_JKOÊšœÞ
JÜ›ÛN˜[\Ú[™[Ž˜[\ˆY\Ù\ˆY™\ÜÙH\ÝÙZ[ˆÝ[™Ü™^šYZ[™ÜÝÙZ\ÙHÝYZ[›Üš[™[‹ˆ\ˆ\°ïÚËS[šÈ°ï\ˆ0ç™\œÚXÚ˜JNœÊšœÞ
JœÚY˜\ÝšXÝX
ÜšY\XÛNœJNˆ[	‰ˆY‰‰œ™–Û‹šYI‰ŠšœÞ
JœÚY›‹šYJK
‹šYOOXLM˜‹œÚ\™YÛÛXÝ[ÛŠI‰ˆ[I‰ˆ[	‰ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜\ÝÜšXËXÛÛXÝ[Û‹\›Ý]XÚ[™[Ž–ÊšœÞ
JÜXÙN™Ÿ›ÚYKŠK‰‰“
‹šY
OÊšœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ’Y
‹šY
KÚ[™[Ž˜Y\Ù[ˆY™\ÜØ™^›ÙÙ[™[ˆÝ[™Ü]Yˆ\ˆ\ÝÜš\ØÚ[ˆØ\H[œÙZ[ˆ8¡¤˜J_JN›[_JK‹šYOOXLL˜	‰ˆ^I‰ˆ[I‰ŠšœÞ
JœßJKØ™YÙYÛ[™ÜÜÝY]XKLL˜Kš[˜ÛY\Ê‹šY
I‰ŠšœÞ
JßKŠK[	‰ˆ^I‰ˆ[I‰Š‹œØÛÜOË›[™ÝŒ‹˜ÛÛ[‹œÚ\™YÛÛXÝ[ÛŸ\™–Û‹šYJI‰ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜË]ÜXËX›ÙX˜\šXK[X™[YžHŽ˜Û™[[™\ÜËXÛÛ[ZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ÚY˜Û™[[™\ÜËXÛÛ[ZXY[™ØÚ[™[Ž˜[š[XÚHØÚÙ\œ[šÝXJK\™–Û‹šYI‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYY]ÜšX[[›ÝXÚ[™[Ž˜\ˆ™YZÝ[Û™[H[š[HY\Ù[H[XHÚ\™›ØÚ\™ðéžˆYH›ÛÙ[™H0ç™\œÚXÚ™\ØÚ™ZX[ˆ[Y[[Y˜[™ÎÈ\È\Ý›ØÚÙZ[ˆ›ÛÝ0é™YÙ\ˆ˜XÚ\ZÙ[™\°í™™™[XÚ˜JK‹œØÛÜOË›[™ÝŒ	‰ŠšœÞ
J[ØÚ[™[Ž›‹œØÛÜK›X\

K
OOŠšœÞ
JXØÚ[™[Ž™_K
J_JK‹˜ÛÛ[	‰ŠšœÞ
JØÚ[™[Ž›‹˜ÛÛ[JK‹œÚ\™YÛÛXÝ[Û‰‰ŠšœÞ
JØÚ[™[Ž˜\ÈÙ[YZ[œØ[YH\ÝÜš\ØÚH™\ž™ZXÚš\ÈØ™[ˆ\œØÚYpçÝ™[YÝHÝ[™ÜÙ\ØÚXÚ[ˆ[™ÙZÙ[›ž™ZXÚ™]HÙ™™[™H™XÚ\˜ÚZ[ÙZ\ÙKˆYH[\œØÚYYXÚ[ˆ[X]\ØÚ[ˆYðé™ÙH™\Ù[™[ˆY\Ù[™[ˆÝ[[Y][‹ˆZ[ˆ\Ø[[Y[š[™ÈÚ\ØÚ[ˆ[H™\›\Ý›Ûˆ™YÙYÛ[™ÜÛÜ[ˆ[™[™]šYY[\ˆZ[œØ[ZÙZ]Ú\™šXÚ[È™]ÚY\Ù[ˆ›Ü˜]\ÙÙ\Ù]˜JK‹œ[›™YÛÛ[Y[X^[™Ý	‰ˆ\™–Û‹šYI‰ŠšœÞÊJØÚ[™[Ž–Ø°ïˆY\Ù\È[XH\ÝÜ0é\ˆZ[ˆ[Ù\šY\\ˆÛÛ[Y[\˜™\™ZXÚZ]0í˜ÚÝ[œÈ‹œ[›™YÛÛ[Y[X^[™Ý™ZXÚ[ˆ›ÈÛÛ[Y[\ˆ›Ü™Ù\ÙZ[‹ˆYHÛÛ[Y[\™[šÝ[Ûˆ\Ý\ž™Z]šXÚœ™ZYÙ\ØÚ[]˜_JW_JKØZ]Ú\šÝ[™ØMËLXMËLØKš[˜ÛY\Ê‹šY
I‰ˆ^I‰ˆ[I‰ŠšœÞ
J‹ßJKØZ]Ú\šÝ[™ØMËM˜™]Ù\šÙXLKMXKš[˜ÛY\Ê‹šY
I‰ŠšœÞ
JÙ‹ßJKØ™]Ù\šÙXLKMXKš[˜ÛY\Ê‹šY
I‰ŠšœÞ
JY‹ßJK‹šYOOX]Y[[˜	‰ŠšœÞ
JÙ‹ßJK[	‰ˆ^I‰ˆ[I‰ŠšœÞ
JÙ‹Û›ÙN›ŸJK‹šYOOX‹MØ	‰ŠšœÞ
J[‹ßJKØÙ[›™[›\›™[˜ËNKš[˜ÛY\Ê‹šY
I‰ŠšœÞ
JœßKŠK‹œ™[]YË›[™ÝŒ	‰ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Û™[[™\ÜËYÜ›Ý\Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™\Ø[™H[Y[˜JK
šœÞ
JœÝÜXÜÎ›‹œ™[]Y›X\
OO™™‹™š[™
OšYOOYJJK™š[\Š›ÛÛX[Š_JW_JW_JN›[_J_]˜\ˆœXK]Û‹[œ]^\™XKÙ[XÝÜ[Û‹X™[Ý[[X\žK]Z[ËX[ÙËYœ˜[YKšY[Ë]Y[ËØ[˜\Ë[YËÝ™ËØÛÛ[Y]X›WN››Ý
ØÛÛ[Y]X›OH™˜[ÙH—JKÙ˜YÙØX›OHYH—KÜ›ÛOH˜]Ûˆ—KÜ›ÛOH›[šÈ—KÜ›ÛOH›Y[Z][H—KÜ›ÛOH^›Þ—KÜ›ÛOHœÛY\ˆ—KÜ›ÛOH™X[ÙÈ—KÙ]K[›Ë\YÙKY˜Y×K›XY›]XÛÛZ[™\‹œš]˜]K[X\XK‹ËK‹K™KÛÙKÜ[‹ÛX[Ý›Û™Ë‹[K›ØÚÜ][ÝKX›XÙ[˜Ý[ÛˆÜ
KŠ^Û][‹™ØÝ[Y[NÝž^ÚO\‹˜Ø\™]ÜÚ][Û‘œ›ÛTÚ[ËŠK
_XØ]ÚßZYŠOË›Ù™œÙ]›ÙOË››ÙU\OOOLÊ^Û]ZK›Ù™œÙ]›ÙKOZK›Ù™œÙ]Ï[‹^ÛÛ[Ë›[™ÝÏ\‹˜Ü™X]T˜[™ÙOËŠ
NÚYŠÊ^Ù›ÜŠ]ˆÙ–ØKLKWJZYŠJ[ÊJ]ž^ÜËœÙ]Ý\
‹ŠKËœÙ][™
‹ŠÌJNÙ›ÜŠ]ˆÙˆË™Ù]ÛY[™XÝÊ
JZYŠO[‹›YLKI‰™O[‹œšYÚ
ÌKI‰[‹ÜLKI‰[‹˜›ÝÛJÌKJ\™]\›ˆLXØ]Úß_\™]\›ˆL_[]NÝž^ØO\‹˜Ø\™]˜[™ÙQœ›ÛTÚ[ËŠK
_XØ]ÚßZYŠOËœÝ\ÛÛZ[™\Ë››ÙU\OOOLÊ^Û]XKœÝ\ÛÛZ[™\‹OXKœÝ\Ù™œÙ]Ï[‹^ÛÛ[Ë›[™ÝÏ\‹˜Ü™X]T˜[™ÙOËŠ
NÚYŠÊ^Ù›ÜŠ]ˆÙ–ÚKLKWJZYŠJ[ÊJ]ž^ÜËœÙ]Ý\
‹ŠKËœÙ][™
‹ŠÌJNÙ›ÜŠ]ˆÙˆË™Ù]ÛY[™XÝÊ
JZYŠO[‹›YLKI‰™O[‹œšYÚ
ÌKI‰[‹ÜLKI‰[‹˜›ÝÛJÌKJ\™]\›ˆLXØ]Úß_\™]\›ˆL_\™]\›ˆ‹˜Ø\™]ÜÚ][Û‘œ›ÛTÚ[‹˜Ø\™]˜[™ÙQœ›ÛTÚ[ÈLNˆH[‹\™Ù]Ë˜ÛÜÙ\ÝËŠ
_Y[˜Ý[ÛˆÜ
K‹Š^ÚYŠYOË˜ÛÜÙ\ÝK˜ÛÜÙ\Ý
œ
_™Ù]Ù[XÝ[ÛËŠ
OËš\ÐÛÛ\ÙYOOHL_[X™\‹š\Ñš[š]JŠI‰“[X™\‹š\Ñš[š]JŠI‰”Ü
‹‹
J\™]\›ˆLNÙ›ÜŠ]YNÛ‰‰›ˆOO]™ØÝ[Y[˜›ÙI‰›ˆOO]™ØÝ[Y[™ØÝ[Y[[[Y[Û[‹œ\™[[[Y[
^Û]O]™Ù]ÛÛ\]YÝ[JŠNÚYŠÊ]]ßØÜ›ÛÝ™\›^JKË\Ý
K›Ý™\™›ÝÖJI‰›‹œØÜ›ÛZYÚ›‹˜ÛY[ZYÚÊ]]ßØÜ›ÛÝ™\›^JKË\Ý
K›Ý™\™›ÝÖ
I‰›‹œØÜ›ÛÚY›‹˜ÛY[ÚY
\™]\›ˆL_\™]\›ˆLY[˜Ý[ÛˆÜ
J^Û]ÙØÝ[Y[OYK]™ØÝ[Y[[[Y[[[OLO[[ÏV×KÏJ‹ŠOOžÙK˜Y]™[\Ý[™\Š‹ŠKËœ\Ú
Ý‹—J_NÙ[˜Ý[ÛˆÊ
^Ýž^ÜË˜Ø\\™Y	‰œ‹\™Ù]š\ÔÚ[\Ø\\™OËŠ‹šY
I‰œ‹\™Ù]œ™[X\ÙTÚ[\Ø\\™J‹šY
_XØ]Úß_Y[˜Ý[Ûˆ

^ÜË˜XÝ]™I‰ŠOYKœ\™›Ü›X[˜ÙK››ÝÊ
JÍLO\‹\™Ù]
KÊ
K[[‹˜Û\ÜÓ\Ýœ™[[Ý™JYÙKY˜YËXXÝ]™XYÙKY˜YË\™XYX
_\ÊÚ[\™ÝÛ˜OžÚYŠJœÚ[\•\HOOX[Ý\ÙX˜]ÛˆOOLš\Ôš[X\žOOOHL_PÜ
\™Ù]K˜ÛY[˜ÛY[JJJ^Ü^ÚYœÚ[\’Y˜ÛY[N˜ÛY[KØÜ›Û™KœØÜ›ÛK\™Ù]\™Ù]XÝ]™NˆLKØ\\™YˆL_Kœ™]™[Y˜][

NÝž^Ý\™Ù]œÙ]Ú[\Ø\\™OËŠœÚ[\’Y
K‹˜Ø\\™YHH]\™Ù]œÙ]Ú[\Ø\\™_XØ]Úß__KØØ\\™NˆL\ÜÚ]™NˆL_JKÊÚ[\›[Ý™XOžÚYŠœÚ[\•\HOOX[Ý\ÙX
\™]\›ŽÚYŠ\Š^Û‹˜Û\ÜÓ\ÝÙÙÛJYÙKY˜YË\™XYXÜ
\™Ù]K˜ÛY[˜ÛY[JJNÜ™]\›ŸZYŠœÚ[\’YOO\‹šY
\™]\›ŽÚYŠ˜]ÛœÈOOLJ^Û

NÜ™]\›Ÿ[]O]˜ÛY[K\‹žKO]˜ÛY[\‹žÚYŠ\‹˜XÝ]™J^ÚYŠX]˜XœÊJO“X]˜XœÊJI‰“X]˜XœÊJOMŠ^Û

NÜ™]\›ŸZYŠX]˜XœÊJOŠ\™]\›ŽÜ‹˜XÝ]™OHL‹˜Û\ÜÓ\Ý˜Y
YÙKY˜YËXXÝ]™X
KK™Ù]Ù[XÝ[ÛËŠ
OËœ™[[Ý™P[˜[™Ù\ÏËŠ
_]œ™]™[Y˜][

KKœØÜ›ÛÊÝÜœ‹œØÜ›ÛZK™Z]š[ÜŽ˜[œÝ[J_KØØ\\™NˆL\ÜÚ]™NˆL_JNÙ›ÜŠ]HÙ–ØÚ[\\Ú[\˜Ø[˜Ù[ÜÝÚ[\˜Ø\\™X›\˜J\ÊKL
NÜÊÚ[\›Ý]OOžÙKœ™[]Y\™Ù]OO[[	‰›

_KL
KÊÙ^YÝÛ˜OOžÙKšÙ^OOOX\ØØ\X	‰›

_KL
NÛ]OJ
OOžÝšY[‰‰›

_NÜ™]\›ˆ˜Y]™[\Ý[™\Šš\ÚXš[]XÚ[™ÙXJKÊÛXÚØOžÝ™]Z[Œ	‰ŠI‰Š˜ÛÛ\ÜÙY]ËŠ
Kš[˜ÛY\ÊJ_\™Ù]OOXJI‰™Kœ\™›Ü›X[˜ÙK››ÝÊ
OI‰Šœ™]™[Y˜][

KœÝÜ[[YYX]T›ÜYØ][ÛŠ
JKOLO[[
_KL
K

OOžÛ

NÙ›ÜŠ]ÙˆÊYKœ™[[Ý™Q]™[\Ý[™\Š‹‹
NÝœ™[[Ý™Q]™[\Ý[™\Šš\ÚXš[]XÚ[™ÙXJ__Y[˜Ý[Ûˆ

^Û]ÙKOJ\ÙTÝ]JJL
NÜ™]\›Š\ÙQY™™XÝ
J

OOžÝž^Ý
ØØ[ÝÜ˜YÙK™Ù]][J™Ë\YÙKY˜YØ
HOOXÙ™˜
_XØ]Úß_K×JK
\ÙQY™™XÝ
J

OO™OÝÜ
Ú[™ÝÊN›ÚYÙWJK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜YÙKY˜YË\Ù][™ØÚ[™[Ž–ÊšœÞÊJX™[ØÛ\ÜÓ˜[YN˜ÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY™KÛÚ[™ÙN™OOžÝ
K\™Ù]˜ÚXÚÙY
NÝž^ÛØØ[ÝÜ˜YÙKœÙ]][J™Ë\YÙKY˜YØK\™Ù]˜ÚXÚÙYØÛ˜˜Ù™˜
_XØ]Úß__JKÙZ]H\˜ÚšYZ[ˆ™]ÙYÙ[˜_JK
šœÞ
JÛX[ØÚ[™[Ž˜]Yˆœ™ZY[ˆ[\™Ü[™›0éÚ[ˆYH[šÙHX]\Ý\ÝH[[ˆ[™˜XÚØ™[ˆÙ\ˆ[[ˆšYZ[‹ˆ^H[™™YY[™[[Y[H›ZX™[ˆ]\ÙÙ[›Û[Y[‹˜JW_J_]˜\ˆ\SX]”KÍ‹SX]œÚ[Š\
KÜSX]˜ÛÜÊ\
NÙ[˜Ý[ÛˆÜ
KÛZ[‘›Û›LL‹X^›ÛœLMX’ZYÚšOMØ\˜OLY[™Ñ˜XÝÜŽ›ÏKŒßO^ßJ^ÚYŠP\œ˜^Kš\Ð\œ˜^JJ_YK›[™ÝS[X™\‹š\Ñš[š]J
_L
\™]\›ˆ[Ù›ÜŠ]Ï\ŽÜÏ[ŽÜÏSX]œ›Ý[™

ËKŒJJŒL
KÌL
^Û]\ËÜ‹ÏYK›X\
OO“X]˜ÙZ[
X]›X^
JJ›ŠÜÊ›ÊJKXË›X\
OO“X]˜ÙZ[
J“Ü
ÚJ‘
ØJJKO[œ™YXÙJ
K
OO™JÝ
NÚYŠO]
^Û]OSX]˜ÙZ[
X]›X^
‹‹˜Ë›X\
OO™J‘
ÚJ“Ü
JJÎ
NÜ™]\›žÙ›ÛÚ^™NœËX’ZYÚšK˜\ÙUÚYÎ˜ËÛÝÚYÎ›Ý[ÚYKZYÚ™___\™]\›ˆ[]˜\ˆ\^ØÜ™\ÝžÜÜ˜Î˜Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËØ™\™ÙYÜ™‹œÝ™Ø[˜™\™ÙYÜ™™\ˆØ\[ˆZ]™ZHZXÚ[ˆ]YˆÜ°ï™[H™ZX™\™ØÛÝ\˜ÙN˜Î‹ËØÛÛ[[ÛœËÚZÚ[YYXK›Ü™ËÝÚZÚKÑš[N‘UWÒ[X\™ËP™\™ÙYÜ™—ÐÓÐKœÝ™ØšYÚÎ˜Ù[YZ[™œ™ZH]]]Z\ÙZ]NÈ0í™™™[XÚHØ\[™\Ù[™[™ÈšXÚXœØÚYpçÙ[™ÙZÛ0éÚXÚÙY˜Œ‹LLLNK˜XÚÙÜ›Ý[™žÙ[˜X›YˆLÜXÚ]N‹Œß_NÙ[˜Ý[Ûˆœ

^Û]OUÊ
OËœÝ]KœÙ][™ÜË˜Ü™\Ý\˜Ü™\ÝÜ™]\›ŠšœÞ
J[YØÜÜ˜Î™KœÜ˜Ë[™K˜[J_Y[˜Ý[Ûˆ\
ÜYÙN™K\›Z\ÜÚ[ÛœÎ^ßK\ÝšXÝY›X™\™ÙYÜ™˜J^Û]T

KÚKWOJ\ÙTÝ]JJLJKÛË×OJ\ÙTÝ]JJ›ÚY
KÏJ\ÙRY
J
KJ\ÙT™YŠJ[
KOJ\ÙT™YŠJ[
KJ\ÙT™YŠJ[
K[OOX™\™ÙYÜ™˜OVË‹‹œÔÜË™š[\ŠOO™KšYOOXYX™\˜	‰™KœÚÜOOX0ç™\ˆ[œØ
K›X\
OOŠÚY™KšYX™[™KšYOOXÝ\ØÝ\ÙZ]X™KœÚÜ[™\Î™KšYOOX[›YYÙ[˜ÖØ[›YYÙ[ˆ	˜™\˜™\ÜÙ\[™Ù[˜N™KšYOOXÙ\ØÚXÚXÖØÙ\ØÚXÚH[™\š[›™\[™Ù[˜N™KšYOOXÜ™Ø[š\Ø][Û˜ÖØÜ™Ø[š\Ø][Û™[˜Ý[[ˆÚXÚ›Ü˜N›ÚY\™Ù]™KšYJJN–×K‹‹œÖÞÚY˜˜XÚšXÚ[˜X™[˜˜XÚšXÚ[ˆ]\È™\™ÙYÜ™˜[™\Î–Ø˜XÚšXÚ[ˆ]\Ø™\™ÙYÜ™˜K\™Ù]“_KÚY˜™\˜[œÝ[[™Ù[˜X™[˜ZÝY[H™\˜[œÝ[[™Ù[˜[™\Î–ØZÝY[X™\˜[œÝ[[™Ù[˜K\™Ù]˜Ý™\˜[œÝ[[™Ù[˜KÚY˜Z[œØ[ZÙZ]X™[˜Z[œØ[ZÙZ][ˆ™\™ÙYÜ™˜[™\Î–ØZ[œØ[ZÙZ][˜™\™ÙYÜ™˜K\™Ù]˜ÙZ[œØ[ZÙZ]KÚY˜ZY]ÛÜÝ[˜X™[˜ZY]ÛÜÝ[ˆ™ZHÜ[™ÚXÚ\[™Ø[™\Î–ØZY]ÛÜÝ[ˆ™ZXÜ[™ÚXÚ\[™ØK\™Ù]˜ÛZY]ÛÜÝ[˜KÚY˜Ý\š\Û]\ØX™[˜ðéÝH[™Ý\š\Û]\Ø[™\Î–ØðéÝH[™Ý\š\Û]\ØK\™Ù]˜ÝÝ\š\Û]\ØWN–×WKÏ[K›X\
OO™KšY
Kš›Ú[Š
KÏZOØ[Y[°ï™\œÚXÚØÚYpçÙ[˜˜[H	ÛK›[™ÝH[Y[ˆ0í™™›™[˜Ê\ÙQY™™XÝ
J

OOžÛ]OY‹˜Ý\œ™[]K˜Ý\œ™[ÚYŠY_]
\™]\›ŽÚYŠ[K›[™Ý
^ÜÊ[
NÜ™]\›Ÿ[]YØÝ[Y[˜Ü™X]Q[[Y[
Ø[˜\Ø
K™Ù]ÛÛ^
™
NÚYŠ[Š^ÜÊ[
NÜ™]\›Ÿ[]J
OOžÛ]YÙ]ÛÛ\]YÝ[JJKO]˜ÛY[ÚY\\œÙQ›Ø]
‹œY[™ÓY
K\\œÙQ›Ø]
‹œY[™ÔšYÚ
NÛ‹™›ÛXŒM\šX[[™]XØKØ[œË\Ù\šY˜Û]OZÜ
K›X\
OO“X]›X^
‹‹ŠK›[™\ßÙK›X™[JK›X\
OO›‹›YX\Ý\™U^
JKÚY
JJÌM
KJNÜÊOO™I‰˜I‰™K™›ÛÚ^™OOOXK™›ÛÚ^™I‰™KÝ[ÚYOOXKÝ[ÚY	‰™KšZYÚOOXKšZYÚOOO[[	‰˜OOO[[ÙN˜J_KOLOHLKÏV×KÏJ
OOžÚI‰˜Ø[˜Ù[[š[X][Û‘œ˜[YJJKO\™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÚO\™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÚOL_Š
_J_JKË™›Ü‘XXÚ
Ú[™ÝË˜ÛX\•[Y[Ý]
KË›[™ÝLÙ›ÜŠ]HÙ–ÌMÌŒLJ[Ëœ\Ú
Ú[™ÝËœÙ][Y[Ý]


OOžØ_Š
_KJJ_NÜŠ
NÛ][™]È™\Ú^™SØœÙ\™\ŠÊNÜ™]\›ˆ›ØœÙ\™J
K›ØœÙ\™JJK›ØœÙ\™JØÝ[Y[™ØÝ[Y[[[Y[
KÚ[™ÝË˜Y]™[\Ý[™\Š™\Ú^™XÊKÚ[™ÝË˜Y]™[\Ý[™\ŠÜšY[][Û˜Ú[™ÙXÊKÚ[™ÝËš\ÝX[šY]ÜÜË˜Y]™[\Ý[™\Š™\Ú^™XÊKØÝ[Y[™›ÛÏËœ™XYK[Š

OOžØ_Ê
_JK

OOžØOHL™\ØÛÛ›™XÝ

KË™›Ü‘XXÚ
Ú[™ÝË˜ÛX\•[Y[Ý]
KI‰˜Ø[˜Ù[[š[X][Û‘œ˜[YJJKÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Š™\Ú^™XÊKÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\ŠÜšY[][Û˜Ú[™ÙXÊKÚ[™ÝËš\ÝX[šY]ÜÜËœ™[[Ý™Q]™[\Ý[™\Š™\Ú^™XÊ__KÙ×JK
\ÙQY™™XÝ
J

OOžÛÈO[[	‰šI‰˜JLJ_KÛËWJNÙ[˜Ý[ÛˆŠJ^ÜYJJKJLJ_\™]\›ŠšœÞÊJXY\˜Ü™YŽKÛ\ÜÓ˜[YN˜Ú]KZXY\˜
ÊÏOO]›ÚYØ˜]šYØ][Û‹[YX\Ý\š[™Ø›ÏOO[[Ø˜]šYØ][Û‹XÛÛ\XÝ˜
KÚ[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜XY\‹Z[›™\˜Ú[™[Ž–ÊšœÞÊJXØÛ\ÜÓ˜[YN˜œ˜[™™YŽ›OOX™\™ÙYÜ™˜ØÜÝ\˜Ø™^š\šËØ
Û‹˜\šXK[X™[ŽŠ[ŠŠOË›˜[Y_™\™ÙYÜ™˜
JØÙ[YZ[œØ[H8 $È[˜Xš0é™ÚYÙH°ï™Ù\œ]›Ü›XÚ[™[Ž–ÛOOX™\™ÙYÜ™˜	‰ŠšœÞ
JœßJK
šœÞÊJÜ[˜ØÚ[™[Ž–Ð[ŠŠOË›˜[Y_™\™ÙYÜ™˜
šœÞ
JÝ›Û™ØØÚ[™[Ž˜Ù[YZ[œØ[XJK
šœÞ
JÛX[ØÚ[™[Ž˜[˜Xš0é™ÚYÙH°ï™Ù\œ]›Ü›XJW_JW_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜XY\‹XXÝ[ÛœØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ›OOX™\™ÙYÜ™˜ØØ™Z]˜YYÙX˜Ø™^š\šËØ
ÛŠØØ[›YYÙ[˜Ú[™[Ž›OOX™\™ÙYÜ™˜Ø[H™Z]°éÙX˜™Z]°éÙH[H™^š\šØJK‹\Ù\ÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JXØÛ\ÜÓ˜[YN˜\ÚÝÜ\ÚYÛš[‹[[šØ™YŽ˜ÚÛÛØÚ[™[Ž˜YZ[ˆÛÛØJK
šœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜XY\‹\ÚYÛ›Ý]ÛÛXÚÎŠ
OOœ‹œÚYÛ“Ý]

KÚ[™[Ž˜X›Y[[˜JW_JNŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JXØÛ\ÜÓ˜[YN˜\ÚÝÜ\ÚYÛš[‹[[šØ™YŽ˜Ø[›Y[[˜Ú[™[Ž˜[›Y[[˜JK
šœÞ
JXØÛ\ÜÓ˜[YN˜\ÚÝÜ\ÚYÛš[‹[[šØ™YŽ˜Ü™YÚ\ÝšY\™[˜Ú[™[Ž˜™YÚ\ÝšY\™[˜JW_JK˜Ø[]]Ü‰‰ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜ÛYZ[™XÚ[™[Ž˜YZ[™H™Z]°éÙH	ˆ[ðï™™XJK
šœÞ
JXØÛ\ÜÓ˜[YN˜š[X\žHÛX[™YŽ™OOOXÙ\ØÚXÚXÑYJ\[ÙˆÚ[™ÝÏ˜XØÙÙ\ØÚXÚX›ØØ][Û‹š\Ú
N˜ÛYZ[™KÛ™]KØ[›YYÙ[˜
ÊOOX™\™ÙYÜ™˜Ø˜Ù\ÝšXÝX
ÛŠKÚ[™[Ž˜™Z]˜YÈ\œÝ[[˜JW_JK˜Ø[YZ[‰‰ŠšœÞ
JXØÛ\ÜÓ˜[YN˜YZ[‹[[šØ™YŽ˜Ý™\Ø[[™ØÚ[™[Ž˜YZ[š\Ý˜][Û˜JK
šœÞÊJ]Û˜Ü™YŽ›Û\ÜÓ˜[YN˜Y[K]ÙÙÛX˜\šXK[X™[Ž—Ë˜\šXKXÛÛ›ÛÈŽ˜Ë˜\šXKY^[™YŽšKÛÛXÚÎŠ
OO˜JZJKÛ’Ù^QÝÛŽ™OOžÙKšÙ^OOOX\ØØ\X	‰šI‰ŠJLJK˜Ý\œ™[Ë™›ØÝ\Ê
J_KÚ[™[Ž–ÚOÊšœÞ
J™‹È˜\šXKZY[ˆŽ˜YXJNŠšœÞ
J™‹È˜\šXKZY[ˆŽ˜YXJK
šœÞ
JÜ[˜ØÚ[™[Ž—ßJW_JW_JW_JK
šœÞ
J˜]˜ÚY˜Ë˜\šXK[X™[Ž˜]\˜]šYØ][Û˜Û\ÜÓ˜[YNšOØÜ[˜˜Û’Ù^QÝÛŽ™OOžÙKšÙ^OOOX\ØØ\X	‰šI‰ŠJLJK˜Ý\œ™[Ë™›ØÝ\Ê
J_KÚ[™[ŽŠšœÞÊJ]˜Ü™YŽ™‹Û\ÜÓ˜[YN˜š[X\žK[˜]‹[\Ý
ÊÏØ\Ë\™XYX˜
KÝ[N›ÏÞÚZYÚ›ËšZYÚ
ØN›ÚYÚ[™[Ž–ÛK›X\

ŠOOžÛ][ÏËœÛÝÚYÖÛ—OÏÌMLO[ÏË˜˜\ÙUÚYÖÛ—OÏÌMÍNÜ™]\›ŠšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜˜]‹]X‹\ÛÝÝ[NžÝÚYœŠØ›^˜\Ú\ÎœŠØZYÚŠÏËšZYÚÏÌML
JØKÚ[™[ŽŠšœÞ
J]Û˜È˜\šXK[X™[Ž›X™[Ý[N›ÏÞÝÚYšJØZYÚ›ËX’ZYÚ
Ø›ÛÚ^™N›Ë™›ÛÚ^™JØN›ÚY˜\šXKXÝ\œ™[Ž™OOO]šYØYÙX›ÚYÛÛXÚÎŠ
OOŠ\™Ù]
KÚ[™[ŽŠšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜˜]‹]X‹[X™[˜\šXKZY[ˆŽ˜YXÚ[™[ŽŠ›[™\ßÝ›X™[JK›X\

K
OOŠšœÞ
JÜ[˜ØÚ[™[Ž™_K
J_J_J_KšY
_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜[Øš[KX]][[šÜØÚ[™[Žœ‹\Ù\ÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜ÚÛÛØÚ[™[Ž˜YZ[ˆÛÛØJK
šœÞ
J]Û˜ÛÛÛXÚÎŠ
OOœ‹œÚYÛ“Ý]

KÚ[™[Ž˜X›Y[[˜JW_JNŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜Ø[›Y[[˜Ú[™[Ž˜[›Y[[˜JK
šœÞ
JXÚ™YŽ˜Ü™YÚ\ÝšY\™[˜Ú[™[Ž˜™YÚ\ÝšY\™[˜JW_J_JW_J_JW_J_]˜\ˆœVØÝ˜pçÙ[ˆ[™ÙZÙYÙX˜YÙYÙXÝ˜pçÙ[˜™[]XÚ[™ØÜ°ï˜[›YÙ[ˆ[™°é[YXÜY[0é™X™\œØÚ]][™È[™pï˜\œšY\™Yœ™ZZZ]0å™™™[XÚHÙX°éYH[™Z[œšXÚ[™Ù[˜™\šÙZœÜÚXÚ\šZ]0é›X™[0éÝYÝ[™ØØÚ0é[ˆ[ˆ0í™™™[XÚ\ˆ[™œ˜\ÝZÝ\˜Ø\ÜÙ\ˆ[™XØ\ÜÙ\˜[™\™H[›YYÙ[˜KXÎ‹ËØÜ™X]]™XÛÛ[[ÛœË›Ü™ËÜX›XÙÛXZ[‹Þ™\›ËÌKŒÛYØ[ÛÙK™XœXÎ‹ËØÜ™X]]™XÛÛ[[ÛœË›Ü™ËÜX›XÙÛXZ[‹Þ™\›ËÌKŒÙYY™X\^ÜÝÜÎŒËÝÐž]\ÎŽ
ŒL
ŒLØØ[ž]\ÎŒŒ
ŒL
ŒLØØ[”YÙ\ÎŒL^[ÎŒMŸKXŒ‹LLKLNœ^ÜÝXÝ\™N˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÙKØ™\™ÙYÜ™‹Ø™^š\šÜØ[]Ø™^š\šÜØ[]ÜÝZÝ\‹MMNN\ÝšXÝ˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÙKØ™\™ÙYÜ™‹Ø™^š\šÜØ[]Ù^™\›˜]]Ú\ØÚYX˜]Y[‹][]Ù[MMŒŽZXÚ[˜Î‹ËÝÝÝËš[X\™Ë™KÝ™\šÙZ‹ÛY[K[ZXÚ[Ø˜\N˜Î‹ËÝÝÝËš[X\™Ë™KÝ™\šÙZ‹ÛY[K[ZXÚ[Ù˜\K[Y[[ZXÚ[NLÍNL˜™\ÜÛœÚXš[]N˜Î‹ËÝÝÝËš[X\™Ë™KÝ™\šÙZ‹ÛY[K[ZXÚ[Ù˜\KLŒMÛX[š[™Î˜Î‹ËÝÝÝËœÝY™Z[šYÝ[™Ëš[X\™ËÜÝYØ]X™\šÙZ]Ý™\œØÚ]][™Ë[Y[[‹ØYÚ[™Î˜Î‹ËÝÝÝËš˜K™KÜÝÙ\[™Ë[Y[[˜Ø]\Ž˜Î‹ËÝÝÝËš[X\™ÝØ\ÜÙ\‹™KÚÛÛZÝKœX™\™ÙYÜ™ˆÙ[YZ[œØ[H\ÝZ[™H[˜Xš0é™ÚYÙH°ï™Ù\œ]›Ü›KˆÚ\ˆÝZ[ˆšXÚ[H]Y˜YÈ\È™^š\šÜØ[]È™\™ÙYÜ™‹ˆÚ\ˆ[\œÝ0ï™[ˆÚYHX™ZK[ˆÙYZYÛ™][ˆ[œÜ™XÚ\™\ˆ°ïˆZˆ[›YYÙ[ˆHš[™[‹ˆYH[ØÚZY[™È[™™X\˜™Z][™ÈYYÙ[ˆ™ZH\ˆ™]ÙZ[È\Ý0é™YÙ[ˆÝ[K˜œXX™[ˆÚYHYH\šÛ0é[™È›ÛÝ0é™YÈÙ[\Ù[‹YH\š[ˆÙ[˜[›[ˆ][™ÜÜ™XÚH\Z[[™\ÈÚÝ[Y[ZYÙ[š0é™YÈ[\œØÚšYX™[Â‚š]H™XXÚ[ˆÚYNˆYH\šÛ0é[™È]\ÜÈÚXÚ]YˆYHX™ÙXš[][ˆ›ÝÜÈ™^šYZ[ˆ[™›ÛÝ0é™YÈ[\œØÚšYX™[ˆÙZ[‹ˆÚ™HYH\™›Ü™\›XÚH[\œØÚšYX™[™H\šÛ0é[™Èðí››™[ˆÚ\ˆYH™]™Y™™[™[ˆ›ÝÜÈšXÚ\ˆÙZ]\›Z][™ÈÙ\ˆ™\°í™™™[XÚ[™È™X\˜™Z][‹˜œ^Ü\œÜÙN˜KˆYZ[™H›ÝÜÈ0ï™™[ˆ°ïˆY\ÙHY[[™È™\Ù[™][™[ˆ\Ý0é™YÙHÝ[[ˆÙZ]\™Ù[Z]]Ù\™[‹˜ØÌ˜‹ˆXÚÙX™HYZ[™H›ÝÜÈ[\ˆÐÌKŒ[š]™\œÙ[\ˆœ™ZY[ˆ][™È\˜Ú™Y\›X[›ˆœ™ZK˜KXXÚ°é[YHX\šÈ]\œÙ[ˆ[È™]™ZX™\ˆ›Ûˆ™\™ÙYÜ™ˆÙ[YZ[œØ[HÛÝÚYH[H™^š\šÜØ[]™\™ÙYÜ™ˆ[™[ˆÙZ]\™[ˆ]ðéÚXÚ\Ý0é™YÙ[‹[ˆ\ˆ™X\˜™Z][™ÈY\Ù\ˆÛÛšÜ™][ˆY[[™È™]Z[YÝ[ˆÝ[[ˆZ[™˜XÚKšXÚ]\ÜØÚYpçÛXÚH][™ÜÜ™XÚH[ˆ[ˆ˜XÚ›ÛÙ[™X™ÙXš[][ˆ›ÝÜÈZ[‹ˆYH™XÚH[Y˜\ÜÙ[ˆYH[ÙYÙ[›˜ZYKXÚš\ØÚH™\˜\˜™Z][™ËØXÚ™\š[ËH[™\Ý0é™YÚÙZ]Ü°ï[™Ë[\›™H™YZÝ[Û™[H™X\˜™Z][™Ë\™›Ü™\›XÚHÚXÚ\™HÜZXÚ\[™ËXÚš\ØÚ›ÝÙ[™YÙHÜ°í°çÙ[‹H[™›Ü›X][œ\ÜÝ[™Ù[ˆÛÝÚYH\È[™\›™[ˆšXÚ\™›Ü™\›XÚ\ˆY]Y][ˆ[™YHÚÝ[Y[Y\HÙZ]\›Z][™Ëˆ[\˜[™Ù[™HÝ[[ˆ0ï™™[ˆYH›ÝÜÈ[›™\š[ˆ\ˆ˜XÚÙZ\ÛXÚ\™›Ü™\›XÚ[ˆ™X\˜™Z][™ÜËH[™\Ý0é™YÚÙZ]ÚÙ]H°ïˆY\Ù\ÈÛÛšÜ™]H[›YYÙ[ˆ[ˆÙZ]\™H\Ý0é™YÙHÝ[[ˆÙZ]\™ÙX™[‹ˆ[\°é™Ù\ˆpïÜÙ[ˆÛÛšÜ™]™[˜[›Ù\ˆ[š[™Z™\ˆ]ðéÚXÚ[ˆ[šÝ[Ûˆ[™™]Z[YÝ[™ÈZ[™]]YÈ™\Ý[[X˜\ˆÙZ[‹ˆ^Hðí››™[ˆ[X\™Ù\ˆY[œÝÝ[[‹˜XÚ™Z0íœ™[‹™^š\šÜðé]\‹\Ý0é™YÙH0í™™™[XÚHZ[œšXÚ[™Ù[ˆ[™[\›™ZY[ˆÛÝÚYH\ˆ™X\˜™Z][™È™\™XÚYÝH™X]Y˜YÝHY[œÝZ\Ý\ˆÙZ0íœ™[‹ˆZ[™H™[YXšYÙHÙZ]\™ØX™H[ˆ[˜™]Z[YÝKÙXÚÙœ™[YHÛÛ[Y\žšY[H][™ÈÙ\ˆ0í™™™[XÚH™\°í™™™[XÚ[™È\Ý[Z]šXÚÙ\Ý]]ˆYZ[ˆ\šX™\œ™XÚÚ\™šXÚ0ï™\˜YÙ[‹ˆZ[™H0í™™™[XÚH™\Ù[™[™È\™›Ü™\Z[™HÙ\ÛÛ™\H]\Ü™ZXÚ[™H™XÚZÛ0é[™Ë˜\XXÚÙ[™H]Yˆ]\ÜØÚYpçÛXÚYH[ˆY\Ù[HÚÝ[Y[Y[Yš^šY\[ˆZYÙ[™[ˆ›ÝÜÈÜ™X]]™HÛÛ[[ÛœÈÐÌKŒ[š]™\œÙ[[ˆ[™™\šÛ°ï™HY\ÙHÙ\šÙH]\Ù°ïÚÛXÚZ][H›ÛÝ0é™YÙ[‹[™\°é™\[ˆÐÌT™XÚÝ^[\ˆÎ‹ËØÜ™X]]™XÛÛ[[ÛœË›Ü™ËÜX›XÙÛXZ[‹Þ™\›ËÌKŒÛYØ[ÛÙK™KˆXpçÙÙX›XÚ\ÝY\Ù\ˆÝ[™\™\ÚY\H™XÚÝ^ÈYH›ÛÙ[™[ˆ[ÙZ\ÙHÚ[™ÙZ[™HZYÙ[™H^™[žˆ[™0é™\›ˆÐÌšXÚ˜ÜXÛÝÙZ]Ù\Ù]›XÚpí™ÛXÚðí››™[ˆYH›ÝÜÈÙ[ÙZ]]Y\šY[™ÛÜÝ[›ÜÈ\˜Ú™Y\›X[›ˆ]XÚÛÛ[Y\žšY[Ù[]ÛÜY\™\°é™\[™ÙZ]\™ÙYÙX™[ˆÙ\™[‹Ú™HZ[™HÙZ]\™H\›]X›š\È™ZHZ\ˆZ[žZÛ[‹ˆZ[™HÜ0é\™H°ïÚÛ˜ZYH™\™Z]ÈÚ\šÜØ[HZ[™Ù\°é[]\ˆ™XÚH\ÝÜ[™ðé›XÚšXÚ›Ü™Ù\ÙZ[‹ˆÛÈZ[ˆ™XÚÝ™\žšXÚšXÚÚ\šÜØ[H\ÝÙ[[ˆYH]Y™˜[™Ü™YÙ[[™Ù[ˆ\È›ÛÝ0é™YÙ[ˆÐÌT™XÚÝ^ËˆYH[ØÚZY[™È\Ýœ™Z]Ú[YÎÈZ[™HY[[™ÈZ]ÙXÚÙÙX[™[™\ˆ›ÝÙœ™ZYØX™H›ZXpí™ÛXÚ˜ÜXXÚØ[›ˆ\ˆ™XÚHœ™ZYÙX™[‹0ï™\ˆYHXÚ]ðéÚXÚ™\™°ïÙKˆ™XÚHš]\‹[œØ™\ÛÛ™\™H\œðí››XÚÙZ]ËH[™][œØÚ]œ™XÚH\šÙ[›˜˜\™\ˆ\œÛÛ™[ˆÛÝÚYHœ™[YHÙ\ØÚ0ïH[š[KX\šÙ[‹H[™][™XÚK›ZX™[ˆ[˜™\°ïˆ\šÙ[›˜˜\™H\œÛÛ™[‹Ù[›ž™ZXÚ[ˆ[™[™\™HÙ[œÚX›H[š[HÚ[™›ÜˆZ[™\ˆÙZ]\™ØX™H™^šYZ[™ÜÝÙZ\ÙH0í™™™[XÚ[ˆ™\™Z]Ý[[™ÈÙ\ÛÛ™\H°ï™[‹ˆYH\šÛ0é[™È\œÙ]Y\ÙH°ï[™ÈšXÚˆ]XÚÐÌ°ïHÙZ[™\ˆ]]ÛX]\ØÚ[ˆ™\°í™™™[XÚ[™È]Yˆ™\™ÙYÜ™ˆÙ[YZ[œØ[NÈ\°ï™\ˆÚ\™™YZÝ[Û™[Ù]™[›[ØÚYY[‹ˆYH[\œØÚšYX™[™H\šÛ0é[™ÈZ]\œðí››XÚ[ˆ[™ØX™[ˆ[™[\œØÚšYÚ\™šXÚ™\°í™™™[XÚ˜Ü^ØØ]YÛÜžN–Ø\\È[›YYÙ[œØLKÝXš™XÝ–Ø™]™Y™˜NK\ØÜš\[ÛŽ–Ø™[Ø˜XÚ]H]ØXÚ[ˆÈ™\ØÚ™ZX[™ØL™L×K\ÜÙ\ÜÛY[–Ø\œðí››XÚH™]Ù\[™ÈÈÙ]ðïœØÚH™\˜™\ÜÙ\[™ØL×KÝ™Y]–ØÝ˜pçÙXŒK™Y™\™[˜ÙN–Ø]\Û[[Y\ˆÈ°éÚÝ\ˆ™^YÜÜ[šÝŒKÜÝÛÙN–ØÜÝZ]˜Z
ÛÝÙZ]™ZØ[›
XWK]X\\Ž–ØÝYZ[LKØØ][ÛŽ–Ø\™ðéž™[™HÜØ™\ØÚ™ZX[™Ø™L×KØœÙ\™Y]N–Ø][H\ˆ™\ÝÝ[[™ØLKØœÙ\™Y[YN–ØZž™Z]
ÛÝÙZ]™ZØ[›
XWKÚ[˜ÙN–ØÙZ]Ø[›ˆ™\ÝZ\È›Ø›[OØLKÛÛXÝ˜[YN–ØÛÛZÝ˜[YH
œ™Z]Ú[YÊXMLKÛÛXÝ[XZ[–ØKSXZ[
œ™Z]Ú[YÊXŒKÛÛXÝÛ™N–Ø[Y›Ûˆ
œ™Z]Ú[YÊXLK\œÛÛŽ–Ø\šÛ0é™[™H\œÛÛŽˆ›ÛÝ0é™YÙ\ˆ˜[YXMLKÜ™Ø[š^˜][ÛŽ–ØÜ™Ø[š\Ø][Ûˆ
˜[È]™Y™™[™
XŒKY™\ÜÎ–Ø[œØÚšY\ˆ\šÛ0é™[™[ˆ\œÛÛ˜ÍLKXÙN–ØÜ\ˆ\šÛ0é[™ØMLKXÛ\˜][Û‘]N–Ø][H\ˆ\šÛ0é[™ØL_NÙ[˜Ý[Ûˆ\

^Ü™]\›žË‹‹“Øš™XÝ™œ›ÛQ[šY\ÊØš™XÝšÙ^\ÊÜ
K›X\
OO–ÙKJJKXÙ[œÙN˜ÝÛ”šYÚÎˆLKØÌ[™\œÝÛÙˆL__Y[˜Ý[Ûˆœ
KHLJ^Û]^ßNÙ›ÜŠ]ÝÜ‹WW[ÙˆØš™XÝ™[šY\ÊÜ
JJ\[ÙˆVÝHOXÝš[™ØVÝK›[™ÝšJI‰Š–ÝO\ŠØˆ0í˜ÚÝ[œÈ
ÚJØ™ZXÚ[‹˜
NÙ›ÜŠ]Ù–ØØ]YÛÜžXÝXš™XÝ\ØÜš\[Û˜JYVÝOËš[J
_
–ÝOXš]H
ÒÜÝVÌJØ[™ÙX™[‹˜
NÓœš[˜ÛY\ÊK˜Ø]YÛÜžJ_
‹˜Ø]YÛÜžOXš]HZ[™H›Üš[™[™HØ]YÛÜšYH]\Ýðé[‹˜
K
YKœ]X\\Ëš[J
_JKœÝ™Y]Ëš[J
_K›ØØ][ÛËš[J
JJI‰Š‹›ØØ][ÛXš]HÝYZ[[™Ý˜pçÙHÙ\ˆZ[™HÙ[˜]YHÜØ™\ØÚ™ZX[™È[™ÙX™[‹˜
KKœÜÝÛÙI‰ˆK×—Í_IË\Ý
KœÜÝÛÙJI‰Š‹œÜÝÛÙOXÜÝZ]˜Z]\ÜÈ]\È°ï™ˆšY™™\›ˆ™\ÝZ[‹˜
KK˜ÛÛXÝ[XZ[	‰ˆK×–×—ÐJÐ×—ÐJ×–×—ÐJÉË\Ý
K˜ÛÛXÝ[XZ[
I‰Š‹˜ÛÛXÝ[XZ[XðïYÙHKSXZ[PY™\ÜÙHZ[™ÙX™[ˆÙ\ˆœ™Z]Ú[YÙ\È™[Y\ˆ\ÜÙ[‹˜
NÙ›ÜŠ]Ù–ØØœÙ\™Y]XXÛ\˜][Û‘]XJYVÝI‰ŠK×—ÍKWÌŸKWÌŸIË\Ý
VÝJ_S[X™\‹š\Ñš[š]J]Kœ\œÙJVÝJJ_™]È]JVÝJKÒTÓÔÝš[™Ê
KœÛXÙJL
HOOYVÝJI‰Š–ÝOXš]HZ[ˆðïYÙ\È][H[™ÙX™[‹˜
NÚYŠK›ØœÙ\™Y[YI‰ˆK×ŠÌWW–ÌL×JN–ÌMWW	Ë\Ý
K›ØœÙ\™Y[YJI‰Š‹›ØœÙ\™Y[YOXš]HZ[™HðïYÙHZž™Z][™ÙX™[‹˜
K
^Ù›ÜŠ]Ù–Ø\œÛÛ˜Y™\ÜØXÙXXÛ\˜][Û‘]XJYVÝOËš[J
_
–ÝOX°ïˆYH\œðí››XÚH\šÛ0é[™È\™›Ü™\›XÚˆ
ÒÜÝVÌJØ˜
NÖØ\œÜÙXØÌKš[˜ÛY\ÊK›XÙ[œÙJ_
‹›XÙ[œÙOXš]H™]Ý\ÜÝpí™ÛXÚÙZ]HÙ\ˆˆ]\Ýðé[‹˜
KK›XÙ[œÙOOOXØÌ	‰™K˜ØÌ[™\œÝÛÙOOHL	‰Š‹˜ØÌXš]H[ˆ›ÛÝ0é™YÙ[ˆÐÌT™XÚÝ^[™YH›ÛÙ[ˆ™\Ý0éYÙ[‹˜
KK›ÝÛ”šYÚÈOOHL	‰Š‹›ÝÛ”šYÚÏXš]HYH\™›Ü™\›XÚ[ˆZYÙ[™[ˆ™XÚH[™[ÙZ\ÙHH™XÚ[ˆš]\ˆ°ï™[‹˜
_\™]\›ˆŸY[˜Ý[Ûˆ\
J^Û]^ÜÝ]\Î˜[œÜ™XÚ\™\ˆ›Ü™Ù\ØÚYÙ[ˆ8 $ÈZ[ž™[˜[[™Ù\°ïÚXÚÙY“ÛÝ\˜ÙN”œœ™\ÜÛœÚXš[]K™X\ÛÛŽ˜Ø]YÛÜšYH\ÝZ[™HÜšY[Y\[™ÎÈÜZYÙ[[H[™ÛÛšÜ™]H\Ý0é™YÚÙZ]Ú[™™YZÝ[Û™[H°ï™[‹˜NÜÝÚ]Ú
K˜Ø]YÛÜžJ^ØØ\ÙX™\œØÚ]][™È[™pïœ™]\›žË‹‹˜[YN˜ÝY™Z[šYÝ[™È[X\™Ø\›”œ˜ÛX[š[™ËÛÛXÝ˜Ý[™HØ]X™\™HÝYˆMÍ‹LLLLXNØØ\ÙXÝ˜pçÙ[˜™[]XÚ[™Øœ™]\›žË‹‹˜[YN˜[X\™È™\šÙZœØ[›YÙ[ˆÛX’\›”œ›YÚ[™ËÛÛXÝ˜Z[œØ]›Z]Ý[NˆŒLNØØ\ÙXØ\ÜÙ\ˆ[™XØ\ÜÙ\˜œ™]\›žË‹‹˜[YN˜SP•T‘ÈÐTÔÑT˜\›”œØ]\‹ÛÛXÝ˜[Ý0íœ™Y[œÝ°ïˆ0í™™™[XÚH[›YÙ[ŽˆÎÌÈÌÌØNØØ\ÙXÝ˜pçÙ[ˆ[™ÙZÙYÙX˜Ø\ÙX˜YÙYÙX˜Ø\ÙXÜ°ï˜[›YÙ[ˆ[™°é[YX˜Ø\ÙXÜY[0é™Xœ™]\›žË‹‹˜[YN˜™^š\šÜØ[]™\™ÙYÜ™ˆ8 $È˜XÚ[]X[˜YÙ[Y[\È0í™™™[XÚ[ˆ˜][Y\Ø\›”œ™\ÝšXÝÛÛXÝ˜[X\™ÔÙ\šXÙNˆŽŽLÈLMNÈT™\™ÙYÜ™‹š[X\™Ë™XÛÝ\˜ÙN”œ™\ÝšXÝNÙY˜][œ™]\›žË‹‹Ý]\Î˜\Ý0é™YÚÙZ]›ØÚ[™ÙZÛ0é˜[YN˜[X\™ÔÙ\šXÙH8 $È\Ý0é™YÚÙZ]\™œ˜YÙ[˜\›”œœÝXÝ\™KÛÛXÝ˜ŽŽLÈLMXÛÝ\˜ÙN”œœÝXÝ\™K™X\ÛÛŽ˜ÙZ[™HÙ\ÚXÚ\H[Ü™[™Ëˆ\\ˆ[›YÙKZYÙ[[H[™ØXÚ™\š[pïÜÙ[ˆÙ\°ïÙ\™[ŽÈ[œØ™\ÛÛ™\™H0é›H[™™\šÙZœÜÚXÚ\šZ]ðí››™[ˆYZ™\™HÝ[[ˆ™]™Y™™[‹˜__Y[˜Ý[Ûˆ
J^Û]YH[œÝ[˜Ù[ÙˆZ[\œ˜^OÙN›™]ÈZ[\œ˜^JJNÜ™]\›ˆÌOOOLMI‰ÌWOOOLŒM‰‰Ì—OOOLMOØ[XYÙKÚœYØ–ÌLÍËÎÌKLËL‹LK™]™\žJ
KŠOOÛ—OOOYJOØ[XYÙKÜ™Ø”Ýš[™Ë™œ›ÛPÚ\ÛÙJ‹‹œÛXÙJ
JOOOX’Q‘˜	‰”Ýš[™Ë™œ›ÛPÚ\ÛÙJ‹‹œÛXÙJLŠJOOOXÑP”Ø[XYÙKÝÙXœ”Ýš[™Ë™œ›ÛPÚ\ÛÙJ‹‹œÛXÙJJJOOOX	T‹XØ\XØ][Û‹Ü˜›[Y[˜Ý[Ûˆœ
KXÝØ
^Û][OOXÝØÒ\œÝÜÎ’\œØØ[”YÙ\ËO[OOXÝØÒ\œÝÐž]\Î’\œØØ[ž]\ÎÚYŠK›[™Ý
Ý›[™ÝœŠ]›ÝÈ\œ›ÜŠOOXÝØØ0í˜ÚÝ[œÈ™ZH›ÝÜËˆš]HY\œÝZ[ˆ›Üš[™[™\È›ÝÈ[™\›™[‹˜˜0í˜ÚÝ[œÈ™ZˆØØ[‹Q]ZY[ŽÈZ[ˆˆ\™ˆYZ™\™HÙZ][ˆ[[[‹˜
NÙ›ÜŠ]HÙˆ
^ÚYŠS[X™\‹š\ÔØY™R[YÙ\ŠKœÚ^™J_KœÚ^™OLKœÚ^™OšJ]›ÝÈ\œ›ÜŠ]ZH\ÝY\ˆÙ\ˆHÜ›ðçËˆ\›]Xˆ
ÚKÌLÌL
ØZPˆ™H]ZK˜
NÚYŠJOOXÝØÖØ[XYÙKÚœYØ[XYÙKÜ™Ø[XYÙKÝÙXœN–Ø\XØ][Û‹Ü˜[XYÙKÚœYØ[XYÙKÜ™ØJKš[˜ÛY\ÊK\JJ]›ÝÈ\œ›ÜŠOOXÝØØ›ÝÜÈ\ˆ[È”QË‘ÈÙ\ˆÙX”ˆRPËÒRQˆš]H›Üš\ˆ™]Ý\ÜÝ[ˆ”QÈ[]Ø[™[‹˜˜\šÛ0é[™Ù[ˆ\ˆ[È‹”QÈÙ\ˆ‘Ë˜
_\™]\›ˆLY[˜Ý[Ûˆ\
K
^Ü™]\›ˆ”ÓÓ‹œÝš[™ÚYžJÙšY[Î™KÝÜÎ›X\

ÚY™KÜšYÚ[˜[\Ú™[™\™Y\Ú›‹\ØÜš\[ÛŽœ‹ØØ][ÛŽš_JOOŠÚY™KÜšYÚ[˜[\Ú™[™\™Y\Ú›‹\ØÜš\[ÛŽœ‹ØØ][ÛŽš_JJ_J_Y[˜Ý[Ûˆ	
ÜÝÜÎ™OV×KXÛ\˜][ÛŽ[[š[Y›HLKØØ[œÎœV×_O^ßJ^Ü™]\›žÜÝÔÝ]\Î™K›[™ÝØ›ÝÜÈ]\ÙÙ]ðé˜Y[[™ÈÚ™H›ÝÜØXÛ\˜][Û”Ý]\Î™K›[™ÝÝÛØ]\ÙXÚÈÙ[œÝ™\Ý0éYÝ8 $ÈšXÚXÚš\ØÚ˜XÚÙ]ÚY\Ù[˜˜\šÛ0é[™È\œÝ[È]ðéÚXÚ\ˆ]\ÙXÚÈšXÚ™\Ý0éYÝ˜\šÛ0é[™È›ØÚšXÚ\œÝ[˜ÙZ[™H›ÝÙ\šÛ0é[™È\™›Ü™\›XÚÚYÛ˜]\™TÝ]\Îœ‹›[™ÝØ[\œØÚšYX™[™H\šÛ0é[™ÈÚØ[Z[™ÙY°ïÝ8 $È[š[[\œØÚšY[™[Ü™[™È[™Ù\°ï˜[\œØÚšYX™[™H\šÛ0é[™È›ØÚšXÚØÚÙ[Y[˜™]šY]ÔÝ]\Î˜šXÚ\ˆ°ï[™ÈZ[™ÙYØ[™Ù[ŽÈÙZ[™HÙ\™\œÙZ]YÙH0ç™\›Z][™ØšYÚÔÝ]\Î˜][™ÜÜ™XÚHšXÚÙ\°ï›ÜØ\™Ý]\Î˜šXÚÙZ]\™Ù[Z]]™XÙZ\Ý]\Î˜ÙZ[ˆ™Z0íœ™XÚ\ˆZ[™Ø[™È™\Ý0éYÝ_]˜\ˆ[OX\Þ[˜ÈOO\œ˜^K™œ›ÛJ™]ÈZ[\œ˜^J]ØZ]Üž\ËœÝXK™YÙ\Ý
ÒKLM˜JJJK›X\
OO™KÔÝš[™ÊMŠKœYÝ\
‹
JKš›Ú[Š
NØ\Þ[˜È[˜Ý[ÛˆJJ^Öœ
×KÙWJNÛ]X]ØZ]K˜\œ˜^PY™™\Š
KV

NÚYŠˆOOYK\J]›ÝÈ\œ›ÜŠ]ZZ[š[[™š[›Ü›X]\ÜÙ[ˆšXÚ\Ø[[Y[‹˜
NÛ]X]ØZ]Ü™X]R[XYÙPš]X\
™]È›ØŠÝKÝ\N›ŸJJNÝž^ÚYŠ\‹ÚY\‹šZYÚ‹ÚY
œ‹šZYÚ’\œ^[Ê]›ÝÈ\œ›ÜŠš[HÜ›ðçÎˆX^[X[YYØ\^[ˆš]H›Üš\ˆZ[™HÛZ[™\™HÛÜYH\œÝ[[‹˜
NÛ]SX]›Z[ŠKÓX]›X^
‹ÚY‹šZYÚ
JKOYØÝ[Y[˜Ü™X]Q[[Y[
Ø[˜\Ø
NÚKÚYSX]›X^
KX]œ›Ý[™
‹ÚY
›ŠJKKšZYÚSX]›X^
KX]œ›Ý[™
‹šZYÚ
›ŠJNÛ]OZK™Ù]ÛÛ^
™
NÚYŠXJ]›ÝÈ\œ›ÜŠš[™\˜\˜™Z][™È[ˆY\Ù[Hœ›ÝÜÙ\ˆšXÚ™\™°ïØ˜\‹˜
NØK™š[Ý[OXÙ™™˜K™š[™XÝ
KÚYKšZYÚ
KK™˜]Ò[XYÙJ‹KÚYKšZYÚ
NÛ]ÏZKÑ]UT“
[XYÙKÚœYØŽM
KÏUZ[\œ˜^K™œ›ÛJ]ØŠËœÜ]

VÌWJKOO™K˜Ú\ÛÙP]

JNÜ™]\›žÚY˜Üž\Ëœ˜[™ÛUURQ

K˜[YN™K›˜[YKÜšYÚ[˜[\Ú˜]ØZ][J
K™[™\™Y\Ú˜]ØZ][JÊKÜ˜Î›ËÚYšKÚYZYÚšKšZYÚ\ØÜš\[ÛŽ˜ØØ][ÛŽ˜_Yš[˜[^Ü‹˜ÛÜÙJ
__X\Þ[˜È[˜Ý[Ûˆ›JJ^Öœ
×KÙWKØØ[˜
NÛ]X]ØZ]K˜\œ˜^PY™™\Š
KV

NÚYŠˆOOYK\J]›ÝÈ\œ›ÜŠ]ZZ[š[[™ØØ[™›Ü›X]\ÜÙ[ˆšXÚ\Ø[[Y[‹˜
NÚYŠOOX\XØ][Û‹Ü˜
^Û][™]È^XÛÙ\Š][ŒX
K™XÛÙJ
NÚYŠ×ÊÎ’˜]˜TØÜš\”ßÜ[XÝ[ÛŸ][˜Ú[X™YYš[_šXÚYYX_[˜Üž\
W‹Ë\Ý
ŠJ]›ÝÈ\œ›ÜŠˆZ]\šÙ[›˜˜\™[ˆZÝ]™[‹Z[™ÙX™]][ˆÙ\ˆ™\œØÚ0ïÜÙ[[ˆ[š[[ˆšXÚ[™Ù[›Û[Y[‹ˆš]HZ[™[ˆZ[™˜XÚ[ˆØØ[ˆ™\Ù[™[‹˜
NÜ™]\›žÚY˜Üž\Ëœ˜[™ÛUURQ

K˜[YN™K›˜[YK\Ú˜]ØZ][J
KÜ˜Î•T“˜Ü™X]SØš™XÝT“
™]È›ØŠÝKÝ\N›ŸJJK\N›Ÿ_[]X]ØZ]Ü™X]R[XYÙPš]X\
™]È›ØŠÝKÝ\N›ŸJJNÝž^ÚYŠ\‹ÚY\‹šZYÚ‹ÚY
œ‹šZYÚ’\œ^[Ê]›ÝÈ\œ›ÜŠØØ[˜š[HÜ›ðçÎˆX^[X[YYØ\^[˜
NÜ™]\›žÚY˜Üž\Ëœ˜[™ÛUURQ

K˜[YN™K›˜[YK\Ú˜]ØZ][J
KÜ˜Î•T“˜Ü™X]SØš™XÝT“
™]È›ØŠÝKÝ\N›ŸJJK\N›Ÿ_Yš[˜[^Ü‹˜ÛÜÙJ
__]˜\ˆ›OYOO”Ýš[™ÊOÏØ
Kœ™\XÙJÖÉˆ‰×KÙËOOŠÈ‰ˆŽ˜	˜[\ØŽ˜	›ØˆŽ˜	™ÝØ	È‰Î˜	œ][ÝØ‰ÈŽ˜	ˆÌÎNØJVÙWJK[OYOO˜˜
Ü›JJKœ™\XÙJ×‹ÙËœ˜
JØÜ˜[OYOOžÚYŠK×™]Nš[XYÙWÚœYÎØ˜\ÙMÐKV˜K^ŒNJË×JÏJ‰Ë\Ý
KœÜ˜ß
J]›ÝÈ\œ›ÜŠ\ˆÚØ[Ù\°ïHš[ÛÜY[ˆ[HÚÝ[Y[˜
NÜ™]\›˜[YÈÛ\ÜÏHœÝÈˆÜ˜ÏH˜
ÙKœÜ˜ÊØˆ[H˜
Ü›JK™\ØÜš\[ÛŸ]\ÙÙ]ðé\È›ÝØ
JØ˜KÛOXYÙ^ÜÚ^™NMÛX\™Ú[ŽŒM›[HM[HN[_JžØ›Þ\Ú^š[™Î˜›Ü™\‹X›ÞZ[›Ù^ÛX\™Ú[ŽŒØÛÛÜŽˆÌM˜ÌNÙ›ÛŒL\ÌKŒÍH\šX[Ø[œË\Ù\šYŽØ˜XÚÙÜ›Ý[™ˆÙ™™ŸX›Ù^ÛÝ™\™›ÝË]Ü˜\˜[ž]Ú\™_KœÚY]ÜÜÚ][ÛŽœ™[]]™NÜY[™ÎŒ[NØœ™XZËXY\ŽœYÙNÜYÙKXœ™XZËXY\Ž˜[Ø^\ÎÛX^]ÚYŒN›[NÛX\™Ú[Ž˜]]ßKœÚY]›\ÝXÚ[Øœ™XZËXY\Ž˜]]ÎÜYÙKXœ™XZËXY\Ž˜]]ßZXY\žØ›Ü™\‹X›ÝÛNŒ\ÛÛYÍNMÙM˜ÎÜY[™ÎŒÛ[NÙ›Û\Ú^™NŽ\Z^Ù›Û\Ú^™NŒN\ÛX\™Ú[Ž[[HZžÙ›Û\Ú^™NŒMÛX\™Ú[Ž[H›[_\ÛX\™Ú[ŽŒ‹[[HYÛX\™Ú[ŽŒÛ[HYÙ›Û]ÙZYÚ˜›ÛYÛX\™Ú[ŽŒ›[NÝÚ]K\ÜXÙNœ™K]Ü˜\K››Ý^ÜY[™ÎŒÛ[NØ›Ü™\ŽŒ\ÛÛYØXX™ŒŽØ˜XÚÙÜ›Ý[™ˆÙŒ™™Œ_KœÝÞÙ\Ü^N˜›ØÚÎÝÚYŒL	NÚZYÚŒML[NÛØš™XÝYš]˜ÛÛZ[ŽÛØš™XÝ\ÜÚ][ÛŽ˜Ù[\ŽØ˜XÚÙÜ›Ý[™ˆÙ˜Y˜Y˜NØœ™XZËZ[œÚYN˜]›ÚYKš\ÚÙ›ÛŽÌK[Û›ÜÜXÙNÛÝ™\™›ÝË]Ü˜\˜[ž]Ú\™_KœÚYÛ˜]\™^ÛX\™Ú[‹]ÜŒL›[NÜY[™ÎŒL[HÛ[NØ›Ü™\‹X›ÝÛNŒ\ÛÛYÌÌÌÎØœ™XZËZ[œÚYN˜]›ÚYY›ÛÝ\žÛX\™Ú[‹]Ü[[NØ›Ü™\‹]ÜŒ\ÛÛYØXX™ŒŽÜY[™Ë]ÜŒ›[NÙ›Û\Ú^™NŽK›XÙ[œÙ^Ù›Û]ÙZYÚ˜›ÛX^ØÛÛÜŽˆÌMŒØßPYYXHØÜ™Y[žØ›Ù^ÜY[™ÎŒLœKœÚY]ÛX\™Ú[ŽŒ]]ÈŒœÜY[™ÎŒMœØ›Ü™\ŽŒ\ÛÛYØØÙÙNÝÚYŒL	NÛX^]ÚYÍŒKœÝÞÚZYÚ˜]]ÎÛX^ZZYÚ_PYYXHš[Ø^Ý^YXÛÜ˜][ÛŽ››Û™_KœÚY]ÝÚYŒL	_KœÝÞÚZYÚŒML[__XÙ[˜Ý[ÛˆÛJK
^Ü™]\›˜˜
Ý™š[\ŠO™VÝJK›X\
O˜˜
Ü›JÜÝVÌJJØÙ˜
Ü›JVÝJJØÙ˜
Kš›Ú[Š
JØÙ˜Y[˜Ý[ÛˆÛJKŠ^Ü™]\›˜O‘›ÝÈ
Ê
ÌJJØ›Ûˆ
ÛŠØÚO˜
Ø[JJJÚ[JK™\ØÜš\[ÛŸÙZ[™H\ðé›XÚHš[™\ØÚ™ZX[™Ø
JÚ[J]Y›˜ZY[Üˆ
ÊK›ØØ][ÛŸšXÚÙ\ÛÛ™\[™ÙYÙX™[˜
JJØÛ\ÜÏHš\Ú“ÜšYÚ[˜[ÒKLMŽˆ
Ü›JK›ÜšYÚ[˜[\Ú
JØœX™ÙXš[]HÛÜYHÒKLMŽˆ
Ü›JKœ™[™\™Y\Ú
JØÜ•›ÛÝ0é™YÙ\Èš[Ú™H™\ØÚš]ˆYHÚXÚ˜\™HÛÜYHÝ\™HÚØ[ÚØ[Y\[™[È”QÈÚ™H\œÜ°ï™ÛXÚHY]Y][ˆ\ž™]YÝˆXpçÙÙX›XÚÚ[™YH[HÚÝ[Y[]ðéÚXÚX™ÙXš[][ˆ›ÝÜËÜ˜Y[˜Ý[ÛˆJKLN
^Û]V×NÙ›ÜŠÙK›[™ÝÊ^Û]SX]›Z[ŠK›[™Ý
NÚYŠK›[™Ý
^Û]YK›\Ý[™^ÙŠŠNÛÌ‰‰Š[ŠÌJ_[‹œ\Ú
KœÛXÙJŠJKOYKœÛXÙJŠ_\™]\›ˆ‹›[™ÝÛŽ–Ø_Y[˜Ý[Ûˆ[JÜ™\Ü™KÝÜÎV×KY›‹Ü™X]Y]œ‹Ú[™šOXšYÚØJ^ÚYŠ›[™ÝŒÊ]›ÝÈ\œ›ÜŠ0í˜ÚÝ[œÈ™ZH›ÝÜÈ[HÚÝ[Y[˜
NÚYŠØš™XÝšÙ^\Êœ
KOOOXšYÚØ
JK›[™Ý
]›ÝÈ\œ›ÜŠ[›ÛÝ0é™YÙHÙ\ˆ[™ðïYÙHÚÝ[Y[[™ØX™[‹˜
NÚYŠK×‘ÌLËVÐKVŒNKW^ÌKIË\Ý
Ÿ
_\Š]›ÝÈ\œ›ÜŠÚÝ[Y[Ù[›[™È[™\œÝ[[™ÜÙ][H\™›Ü™\›XÚ˜
NÛ]OV\
JKÏV×NÚYŠOOOXšYÚØ
^ÚYŠ]›[™ÝUœÙK›XÙ[œÙWJ]›ÝÈ\œ›ÜŠ]\ÙÙ]ðéH›ÝÜÈ[™™]Ý\ÜÝH™XÚX]\ÝØZ\™›Ü™\›XÚ˜
NÛËœ\Ú
O‘›ÝËT™XÚY\šÛ0é[™ÏÚOÛ\ÜÏH››ÝH‘ZYÙ[™H\šÛ0é[™È\ˆ[˜Xš0é™ÚYÙ[ˆ]›Ü›H™\™ÙYÜ™ˆÙ[YZ[œØ[H8 $ÈÙZ[ˆ[]XÚ\È›Ü›][\‹ˆXÚš\ØÚHÚØ[H›ÜœØÚ]NÈ\ˆ\ÙZ]\HÛÜ]]\Ý›ØÚšXÚ°ïˆ›ÙZÝ]™H™\Ù[™[™È™XÚXÚœ™ZYÙYÙX™[‹Ü˜
ÜÛJKØ\œÛÛ˜Ü™Ø[š^˜][Û˜Y™\ÜØXÙXXÛ\˜][Û‘]XJJÚ[JÛÛšÜ™]HY[[™Îˆ
ÙKœÝXš™XÝ
JØÛ\ÜÏH›XÙ[œÙH˜
Ü›JœÙK›XÙ[œÙWJJØÜ˜
Ú[JK›XÙ[œÙOOOXØÌÕ\’
JÊK›XÙ[œÙOOOXØÌÚ[JÜ
JØ•›ÛÝ0é™YÙ\ˆÐÌLKŒT™XÚÝ^ˆH™YH˜
Ô
Ø˜
Ô
ØØOœ“Ù™š^šY[H\›0é]\[™Ù[ŽˆH™YH˜
Ñœ
Ø˜
Ñœ
ØØOÜ˜˜
JØ‘YH[ØÚZY[™ÈÚ[]\ÜØÚYpçÛXÚ°ïˆYH›ÛÙ[™[ˆ
Ý›[™Ý
Ø[[Y\šY\[ˆ›ÝÜËˆZ[™H][™ÜÙ\›]X›š\È\œÙ]ÙZ[™H°ï[™È\ˆÛÛšÜ™][ˆ[\°é™Ù\ˆÙ\ˆ›Ûˆ™XÚ[ˆš]\‹ˆ\ˆ™]™ZX™\ˆ\š0éÙZ[™H]\ØÚ[H™\°í™™™[XÚ[™ÜØ™YYÛš\È]\Èpí™ÛXÚÙZ]KÜ˜
K™›Ü‘XXÚ

KŠOO›Ëœ\Ú
ÛJK‹›[™Ý
JJKËœ\Ú
O•[\œØÚšY\ˆ›ÝËT™XÚY\šÛ0é[™ÏÚOÛ\ÜÏH›XÙ[œÙH˜
Ü›JœÙK›XÙ[œÙWJJØÜ˜
Ú[J\šÛ0é™[™H\œÛÛŽˆ
ÙKœ\œÛÛŠJÚ[JÛÛšÜ™]HY[[™Îˆ
ÙKœÝXš™XÝ
JÚ[JY\ÙH[\œØÚšYÙZ0íœ]\ÜØÚYpçÛXÚ\ˆÚÝ[Y[Ù[›[™È
ÛŠØ[™H[ˆ[ˆ[ˆš[XœØÚš][ˆˆš\È
Ê›[™Ý
ÌJJØX™ÙXš[][ˆ›ÝÜËˆ™ZH›ÝËK™ZZ[™›ÛÙKK^HÙ\ˆ™XÚpé™\[™Ù[ˆ\ÝZ[™H™]YH\šÛ0é[™ÈH\œÝ[[ˆ[™ZYÙ[š0é™YÈH[\œØÚ™ZX™[‹˜
JØÛ˜
Ý›X\

K
OO˜O‘›ÝÈ
Ê
ÌJJØˆ
Ü›JK™\ØÜš\[ÛŸÚ™Hš[™\ØÚ™ZX[™Ø
JØ]ˆÛ\ÜÏHš\Ú“ÜšYÚ[˜[ˆ
Ü›JK›ÜšYÚ[˜[\Ú
JØœ’ÛÜYNˆ
Ü›JKœ™[™\™Y\Ú
JØÙ]ÛO˜
Kš›Ú[Š
JØÛÛ˜
Ú[JÜ
JÊK›XÙ[œÙOOOXØÌØ’XÚX™H[ˆ›ÛÝ0é™YÙ[ˆ[™\°é™\[ˆÐÌT™XÚÝ^Ù[\Ù[ˆ[™™\œÝ[™[‹ˆXpçÙÙX›XÚˆH™YH˜
Ô
Ø˜
Ô
ØØO‹ˆYHÛÛ[Y\žšY[H][™È[™0á™\[™Ù[ˆ\˜Úš]HÛÝÚYHYHÜ[™ðé›XÚšXÚ›Ü™Ù\ÙZ[™H°ïÚÛ˜ZYHÚ\šÜØ[HZ[™Ù\°é[]\ˆ™XÚHÚ[™Z\ˆ™]Ý\ÜÝÜ˜˜
JØ“Üˆ
Ü›JKœXÙJJØ0­È][Nˆ
Ü›JK™XÛ\˜][Û‘]JJØÜ]ˆÛ\ÜÏHœÚYÛ˜]\™H‘ZYÙ[š0é™YÙH[\œØÚšYˆ×××××××××××××××××××××××××××××××××ÏÙ][HÙZ][ˆ›ÛÝ0é™YÈ]\ÙXÚÙ[‹[™ØÚšYXÚ[\œØÚ™ZX™[ˆ[™›ÛÝ0é™YÈZ[œØØ[›™[‹ˆZ[™H[™ÙZÛXÚÝH˜KP™\Ý0éYÝ[™È\ÝÙZ[™H[\œØÚšYÜ˜
_Y[Ù^ÛËœ\Ú
O“Y[[™ÈÚØ[›Ü˜™\™Z]]ÚO˜
Ú[Jœ
JØÛ\ÜÏH››ÝH“šXÚ™\œÙ[™]ˆÙZ[™H™Z0íœ™XÚHZ[™Ø[™ÜËHÙ\ˆ™X\˜™Z][™ÜØ™\Ý0éYÝ[™Ëˆ™[Ø˜XÚ[™Ù[ˆ[™\œðí››XÚH™]Ù\[™Ù[ˆÚ[™Ù]™[›\™˜\ÜÝÜ˜
ÜÛJKØØ]YÛÜžXÝXš™XÝÝ™Y]™Y™\™[˜ÙXÜÝÛÙX]X\\˜ØØ][Û˜ØœÙ\™Y]XØœÙ\™Y[YXÚ[˜ÙXÛÛXÝ˜[YXÛÛXÝ[XZ[ÛÛXÝÛ™XJJØ•›Ü™Ù\ØÚYÙ[™\ˆY[]ÙYÏÚ˜
Ú[JKœÝ]\ÊJÚ[JK›˜[YJØ0­È
ØK˜ÛÛXÝ
JØ˜
Ü›JKœ™X\ÛÛŠJØœ”]Y[KÙ\°ï[H
Ü›JK˜ÚXÚÙY
JØˆH™YH˜
ØK\›
Ø˜
Ü›JK\›
JØØOÜ‘\ˆÙ™š^šY[HY[KSZXÚ[ZÞ™\Y\˜XÚÙZ[™[HTHZ[ˆ›ÝÈš\ÈZP‹ˆY\ÙHÚØ[H›Ü˜™\™Z][™ÈZ]š\ÈH™ZH›ÝÜÈ\ÙZ]\\ÜÙ[ˆ\ØYpí™ÛXÚÙZ][ˆšXÚÜ˜
NÙ›ÜŠ]Ù–Ø\ØÜš\[Û˜\ÜÙ\ÜÛY[JZYŠVÝJY›ÜŠ]Û‹—[ÙˆJVÝJK™[šY\Ê
J[Ëœ\Ú
O˜
Ü›JÜÝVÌJJÊØ0­È›ÜÙ][™Ø˜
JØÚO˜
Ú[JŠJNÝ™›Ü‘XXÚ

KŠOO›Ëœ\Ú
ÛJK‹›[™Ý
JJ_[]ÏXYÙ^ÐÜ\šYÚØÛÛ[ˆ‰ÛŸHŽÙ›ÛŽ\šX[Ø[œË\Ù\šYŸP›ÝÛKXÙ[\žØÛÛ[ˆ‘ÚÝ[Y[	ÛŸH0­ÈÙZ]HˆÛÝ[\ŠYÙJHˆ›ÛˆˆÛÝ[\ŠYÙ\ÊNÙ›ÛŽ\šX[Ø[œË\Ù\šYŸ_XÜ™]\›˜YØÝ\H[[[™ÏH™HXYY]HÚ\œÙ]H]‹NY]H˜[YOHšY]ÜÜˆÛÛ[HÚYY]šXÙK]ÚY[š]X[\ØØ[OLHY]HY\]Z]HÛÛ[TÙXÝ\š]KTÛXÞHˆÛÛ[H™Y˜][\Ü˜È	ˆÌÎNÛ›Û™IˆÌÎNÎÈ[YË\Ü˜È]NŽÈÝ[K\Ü˜È	ˆÌÎNÝ[œØY™KZ[›[™IˆÌÎNÎÈ˜\ÙK]\šH	ˆÌÎNÛ›Û™IˆÌÎNÎÈ›Ü›KXXÝ[Ûˆ	ˆÌÎNÛ›Û™IˆÌÎNÈ]O˜
Ü›JOOOXšYÚØØ›ÝËT™XÚY\šÛ0é[™Ø˜›Ü˜™\™Z]]HY[[™Ø
JØÝ]OÝ[O˜
ÛÛJÜÊØÜÝ[OÚXY›ÙO˜
ÛË›X\

JOO˜ÙXÝ[ÛˆÛ\ÜÏHœÚY]XY\™\™ÙYÜ™ˆÙ[YZ[œØ[H0­È
Ü›JŠJØœ‘\œÝ[ˆ
Ü›JŠJØ0­È
ÊOOOXšYÚØÜ›JK›XÙ[œÙOOOXØÌØÐÌKŒ[š]™\œÙ[˜ÙXÚÙÙX[™[™H][™ÈX
N˜ÚØ[HY[[™Ø
JØÚXY\˜
Ý
Ø›ÛÝ\‘ÚÝ[Y[
Ü›JŠJØ0­ÈXœØÚš]
ÊJÌJJØ›Ûˆ
ÛË›[™Ý
Ø0­È
ÊOOOXšYÚØØ\ˆYH]ðéÚXÚX™ÙXš[][ˆ›ÝÜÈÚ[™YÙ[Ü™™]˜˜šXÚ™\œÙ[™]È\Ý0é™YÚÙZ][HZ[ž™[˜[[™Ù\°ï˜
JØÙ›ÛÝ\ÜÙXÝ[Û˜
Kš›Ú[Š
JØØ›ÙOÚ[˜]˜\ˆOXØ™\™ÙYÜ™‹YÙ[YZ[œØ[KØÙ[˜Ý[Ûˆ›J
^Û]OJ\ÙT™YŠJ[
KJ\ÙT™YŠJ[
KJ\ÙT™YŠJ[
KJ\ÙT™YŠJ[
KOJ\ÙT™YŠJLJKØK×OJ\ÙTÝ]JJ\
KÜË×OJ\ÙTÝ]JJ×JKÛWOJ\ÙTÝ]JJ×JKÙ‹OJ\ÙTÝ]JJ[
KÛK×OJ\ÙTÝ]JJ[
K×Ë—OJ\ÙTÝ]JJ™\Ü
KÞK—OJ\ÙTÝ]JJLJKÞ×OJ\ÙTÝ]JJLJKÐË×OJ\ÙTÝ]JJ
KÕWOJ\ÙTÝ]JJßJKT\
KÊKÏJ\ÙT™YŠJ
KÏJ\ÙT™YŠJ
KOJ\ÙT™YŠJ
NÓË˜Ý\œ™[QK˜Ý\œ™[[™JË›[™ÝŒØš™XÝ˜[Y\ÊJKœÛÛYJOO™OOOHL\[ÙˆOOXÝš[™Ø	‰™K›[™ÝŒ
JK
\ÙQY™™XÝ
J

OOŠ
OOžÙ›ÜŠ]HÙˆK˜Ý\œ™[
YKœÜ˜ËœÝ\ÕÚ]
›ØŽ˜
I‰•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜Ê_K×JNÙ[˜Ý[ÛˆŠ
^ÚK˜Ý\œ™[HLK
[
KÊ[
KŠLJKJOOŠK™›Ü‘XXÚ
OOžÙKœÜ˜ËœÝ\ÕÚ]
›ØŽ˜
I‰•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜Ê_JK×JJ_Y[˜Ý[ÛˆJK
^ÚŠ
KÊOŠË‹‹›‹ÙWN‹‹™OOOXXÙ[œÙXÞØØÌ[™\œÝÛÙˆL_Nžß_JJKJßJKÊ[™ØX™[ˆÙpé™\ˆœ°ï\™HXÚÙ˜\ÜÝ[™Ù[ˆ[™[\œØÚšYX™[™H[Ü™[™Ù[ˆÚ[™šXÚYZˆZÝY[ÈÙYÙX™[™[™˜[È™]H\œÝ[[ˆ[™[\œØÚ™ZX™[‹˜
_Y[˜Ý[ÛˆŠ
^ÙK˜Ý\œ™[Ë˜ÛÜÙJ
K‹˜Ý\œ™[Ë™›ØÝ\Ê
_Y[˜Ý[Ûˆ

^ÙK˜Ý\œ™[ËœÚÝÓ[Ù[

KÊÚØ[H›Ü˜™\™Z][™ÎˆZ[™ØX™[ˆ›ZX™[ˆ™Z[HØÚYpçÙ[ˆ[™\›™]][ˆ0å™™›™[ˆY\Ù\ÈX[ÙÜÈ[ˆY\Ù\ˆ[œÚXÚ\š[[‹ˆ™Z[H™\›\ÜÙ[ˆÙ\ˆ™][Y[ˆÙZ[ˆÚYH™\›Ü™[‹ˆšXÚÈÚ\™[ˆZ[™[ˆÙ\™\ˆ0ï™\›Z][˜
_X\Þ[˜È[˜Ý[ÛˆŠJ^ÝÊ
NÛ]JÊÚË˜Ý\œ™[Ýž^Öœ
ËJKÊL
NÛ]V×NÙ›ÜŠ]ÙˆJ[‹œ\Ú
]ØZ]J
JNÚYŠOOZË˜Ý\œ™[
\™]\›ŽÚYŠ™]ÈÙ]
Ë‹‹œË‹‹›—K›X\
OO™K›ÜšYÚ[˜[\Ú
JKœÚ^™HOO\Ë›[™Ý
Û‹›[™Ý
]›ÝÈ\œ›ÜŠ\ÜÙ[™HÜšYÚ[˜[›ÝÈ\Ý™\™Z]È]\ÙÙ]ðéˆš]H™Y\È›ÝÈ\ˆZ[›X[[žY°ïÙ[‹˜
NÚŠ
KÊOO–Ë‹‹™K‹‹›—JKÊ›ÝÜÈ]\ÜØÚYpçÛXÚÚØ[Z[™Ù[\Ù[‹ˆYHÚXÚ˜\™[ˆÛÜY[ˆÚ[™Ú™H™\ØÚš]]Yˆ0í˜ÚÝ[œÈ‹^[Ø[[›0é™ÙHÚØ[Y\[™[È”QÈÚ™H\œÜ°ï™ÛXÚHVQ‹KÑÔËSY]Y][ˆ\ž™]YÝˆšXÚÈÝ\™H0ï™\˜YÙ[‹˜
_XØ]Ú
J^ÝÊK›Y\ÜØYÙJ_Yš[˜[^ÔÊLJ__Y[˜Ý[ÛˆYJJ^ÚË˜Ý\œ™[
ÊËŠ
KÊJKÊ›ÝØ]\ÝØZ™ZZ[™›ÛÙHÙ\ˆ[™ØX™[ˆÙpé™\ˆYHš\Ú\šYÙH\šÛ0é[™È[™ØØ[‹V[Ü™[™ÈÚ[™[™ðïYÎÈš]H™]H\œÝ[[ˆ[™[\œØÚ™ZX™[‹˜
_Y[˜Ý[ÛˆJJ^Ü™]\›ˆK›X\
OOŠšœÞÊJX™[Ú[›ÜŽ˜]]Üš]KX
ÙKÚ[™[Ž–ÒÜÙWVÌKØÝXš™XÝ\ØÜš\[Û˜]X\\˜Kš[˜ÛY\ÊJOØ
˜˜Ø\œÛÛ˜Y™\ÜØXÙXXÛ\˜][Û‘]XKš[˜ÛY\ÊJOØ
\ˆ™ZH›ÝÙ\šÛ0é[™È\™›Ü™\›XÚ
X˜Ø\ØÜš\[Û˜\ÜÙ\ÜÛY[ØØ][Û˜Ú[˜ÙXY™\ÜØKš[˜ÛY\ÊJOÊšœÞ
J^\™XXÚY˜]]Üš]KX
ÙKX^[™Ý’ÜÙWVÌWK˜[YN˜VÙWKÛÚ[™ÙNO“JK\™Ù]˜[YJK˜\šXKZ[˜[YŽˆHUÙWK˜\šXKY\ØÜšX™YžHŽ•ÙWOØ]]Üš]KY\œ›Ü‹X
ÙN›ÚYJNŠšœÞ
J[œ]ÚY˜]]Üš]KX
ÙK\N™OOOXØœÙ\™Y]XOOOXXÛ\˜][Û‘]XØ]X™OOOXØœÙ\™Y[YXØ[YX™OOOXÛÛXÝ[XZ[Ø[XZ[˜^X^[™Ý’ÜÙWVÌWK˜[YN˜VÙWKÛÚ[™ÙNO“JK\™Ù]˜[YJK˜\šXKZ[˜[YŽˆHUÙWK˜\šXKY\ØÜšX™YžHŽ•ÙWOØ]]Üš]KY\œ›Ü‹X
ÙN›ÚYJKÙWI‰ŠšœÞ
JÜ[˜ÚY˜]]Üš]KY\œ›Ü‹X
ÙKÛ\ÜÓ˜[YN˜\œ›Ü‹]^Ú[™[Ž•ÙW_JW_KJJ_X\Þ[˜È[˜Ý[ÛˆJ
^ÝÊ
NÛ]Rœ
KOOXšYÚØ
NÚYŠOOXšYÚØ	‰ˆ\Ë›[™Ý	‰Š‹œÝÜÏX°ïˆZ[™H›ÝÙ\šÛ0é[™Èš]HZ[™\Ý[œÈZ[ˆ›ÝÈ]\Ýðé[‹˜
KJŠKØš™XÝšÙ^\ÊŠK›[™Ý
^ÝÊš]HYH[™ÙYÙX™[™[ˆ™[\ˆ°ï™[‹ˆZ™HZ[™ØX™[ˆ›ZX™[ˆ\š[[‹˜
KK˜Ý\œ™[Ëœ]Y\žTÙ[XÝÜŠØ\šXKZ[˜[YHYH—X
OË™›ØÝ\Ê
NÜ™]\›ŸTÊL
NÛ]QÝž^Û]OX‘ÌLËX
Ê]ØZ][J™]È^[˜ÛÙ\Š
K™[˜ÛÙJŠJJKœÛXÙJMŠKÕ\\Ø\ÙJ
K[™]È]J
KÒTÓÔÝš[™Ê
KÏ^ÚY™KÙ^Nœ‹Ü™X]Y]›‹[[JÜ™\Ü˜KÝÜÎœËY™KÜ™X]Y]›‹Ú[™JKXÙ[œÙN˜K›XÙ[œÙKÝÒ\Ú\ÎœË›X\
OO™K›ÜšYÚ[˜[\Ú
_NÚYŠË˜Ý\œ™[OO\Š]›ÝÈ\œ›ÜŠ[™ØX™[ˆðé™[™\ˆ\œÝ[[™ÈÙpé™\ˆš]H™]H\ž™]YÙ[‹˜
NÝOOXšYÚØÊ
ÊKŠLJKK˜Ý\œ™[HLKJOOŠK™›Ü‘XXÚ
OOžÙKœÜ˜ËœÝ\ÕÚ]
›ØŽ˜
I‰•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜Ê_JK×JJJN™ÊÊKŠ
KÊOOXšYÚØØ\šÛ0é[™ÈZ][[ˆ]\ÙÙ]ðé[ˆ›ÝÜÈ\œÝ[ˆ›ØÚšXÚ[\œØÚšYX™[ˆÙ\ˆZ[™Ù\™ZXÚ˜˜Y[[™ÈÚØ[›Ü˜™\™Z]]ˆ[œÜ™XÚ\™\ˆ\ˆ›Ü™Ù\ØÚYÙ[ŽÈšXÚÈÝ\™H™\œÙ[™]˜
_XØ]Ú
J^ÝÊK›Y\ÜØYÙJ_Yš[˜[^ÔÊLJ__X\Þ[˜È[˜Ý[Ûˆ™JJ^ÚYŠY_KšÙ^HOOQ
^ÝÊÙZ[™HZÝY[HXÚÙ˜\ÜÝ[™Ëˆš]H™]H\ž™]YÙ[‹˜
NÜ™]\›Ÿ[]]Ú[™ÝË›Ü[ŠØ›[šØ
NÚYŠ]
^ÝÊXÚÙ™[œÝ\ˆ›ÛHœ›ÝÜÙ\ˆ›ØÚÚY\ˆš]HÜ]\È°ïˆY\Ù[ˆ]\ÙXÚÈ[\ÜÙ[ŽÈZ™HZ[™ØX™[ˆ›ZX™[ˆ\š[[‹˜
NÜ™]\›Ÿ]›Ü[™\[[™ØÝ[Y[Üš]JKš[
K™ØÝ[Y[˜ÛÜÙJ
NÝž^Ø]ØZ]›ÛZ\ÙK˜[
Ë‹‹™ØÝ[Y[š[XYÙ\×K›X\
OO™K™XÛÙJ
JJK™›ØÝ\Ê
Kœš[

KÊXÚÙX[ÙÈÙpí™™›™]ˆÜðí››™[ˆÚYHXÚÙ[ˆÙ\ˆ[ÈˆÜZXÚ\›‹ˆZ[ˆ]ðéÚXÚ\ˆ]\ÙXÚÈÙ\ˆZ[™H[\œØÚšY\Ý[Z]šXÚ™\Ý0éYÝ˜
_XØ]ÚÝÊš[\ˆ[HXÚÙ™[œÝ\ˆšXÚ›ÛÝ0é™YÈÙ[Y[‹ˆš]HšXÚ[›ÛÝ0é™YÈXÚÙ[ˆ[™YHXÚÙ˜\ÜÝ[™È\›™]]0í™™›™[‹˜
__Y[˜Ý[Ûˆ™J
^ÚYŠYŸ‹šÙ^HOOQ
^ÝÊš]HY\œÝYHZÝY[H\šÛ0é[™È\ž™]YÙ[‹˜
NÜ™]\›ŸZK˜Ý\œ™[HLK˜Ý\œ™[ËœÚÝÓ[Ù[

_X\Þ[˜È[˜Ý[Ûˆ
J^Û]Y‹QÚYŠZK˜Ý\œ™[]šÙ^HOO[Š^ÝÊ›Üˆ[HZ[™°ïÙ[ˆš]HYH[\œØÚšYÙ\š[›™\[™È™X[ÛÜ[‹˜
NÜ™]\›ŸZK˜Ý\œ™[HLKÊL
NÛ]V×NÝž^Öœ
KØØ[˜
NÙ›ÜŠ]HÙˆJ\‹œ\Ú
Ë‹‹˜]ØZ]›JJKXÛ\˜][Û’YšYš[™Ù\œš[›‹XÙ[œÙN˜K›XÙ[œÙ_JNÚYŠË˜Ý\œ™[OO[Š]›ÝÈ\œ›ÜŠYH\šÛ0é[™ÈÝ\™H[žÚ\ØÚ[ˆÙpé™\ˆ]ZY[ˆðí››™[ˆZˆšXÚYZˆYÙ[Ü™™]Ù\™[‹˜
NÝJOO–Ë‹‹™K‹‹œ—JKÊ[\œØÚšYX™[™H\šÛ0é[™È\ˆÚØ[Z[™ÙY°ïÝˆÙZ[™H0ç™\›Z][™Ëˆ›ÛÝ0é™YÚÙZ]]ðéÚXÚH[\œØÚšY[™0ç™\™Z[œÝ[[][™È\ˆ›ÝÜÈÚ[™šXÚÙ\°ï˜
_XØ]Ú
J^Ü‹™›Ü‘XXÚ
OOžÙKœÜ˜ËœÝ\ÕÚ]
›ØŽ˜
I‰•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜Ê_JKÊK›Y\ÜØYÙJ_Yš[˜[^ÔÊLJ__[]YOV\
JKI
ÜÝÜÎœËXÛ\˜][ÛŽ™‹š[YžKØØ[œÎ›JKYOWÏOOXšYÚØÙŽ›NÜ™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜]]Üš]KY[žXÚ[™[Ž–ÊšœÞ
J]Û˜Ü™YŽ›‹\N˜]Û˜Û\ÜÓ˜[YN˜š[X\žXÛÛXÚÎ”Ú[™[Ž˜Y[[™È[ˆ\È™^š\šÜØ[]›Ü˜™\™Z][˜JK
šœÞ
JØÚ[™[Ž˜™\™ÙYÜ™ˆÙ[YZ[œØ[H\ÝZ[™H[˜Xš0é™ÚYÙH°ï™Ù\œ]›Ü›H[™ÙZ[ˆ[™ÙX›Ý\È™^š\šÜØ[]È™\™ÙYÜ™‹ˆÚ\ˆ[™[ˆZ™[ˆX™ZKZˆ[›YYÙ[ˆZ[ž[Ü™™[ˆ[™[ˆ\Ý0é™YÙ[ˆ[œÜ™XÚ\™\ˆHš[™[‹˜JK
šœÞ
JØÚ[™[Ž˜ÚØ[H›ÜœØÚ]HZ]š\ÈH™ZH›ÝÜËˆÙZ[™HÜZXÚ\[™ÈÙ\ˆÙZ]\›Z][™È\˜ÚY\ÙHÙXœÚ]K˜JK
šœÞ
JX[ÙØÜ™YŽ™KÛ\ÜÓ˜[YN˜]]Üš]KYX[ÙØ˜\šXK[X™[YžHŽ˜]]Üš]K\™\Ü]]XÛØ[˜Ù[™OOžÙKœ™]™[Y˜][

KŠ
_KÚ[™[ŽŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]]Üš]KYX[ÙËZ[›™\˜Ú[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]]Üš]KYX[ÙË]ÜÚ[™[Ž–ÊšœÞ
JÜ[˜ØÚ[™[Ž˜ÒÐSH“Ô‘T‘RUS‘È0­ÈÑRSˆSUPÒTÈÔ•SJK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™HÛX[ÛÛXÚÎ“‹Ú[™[Ž˜X[ÙÈØÚYpçÙ[ˆ8 $ÈZ[™ØX™[ˆ™Z[[˜JW_JK
šœÞ
J˜ÚY˜]]Üš]K\™\Ü]]XÚ[™[Ž˜Y[[™È›Ü˜™\™Z][ˆ8 $È\Ý0é™YÙHÝ[H\›Z][˜JK
šœÞ
JØÚ[™[ŽžœJK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]]Üš]K[›ÝXÙXÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜ÙZ[ˆ›ÝYœÞ\Ý[K˜JK™ZHZÝ]\ˆÙY˜ZŽˆ
šœÞ
JXÚ™YŽ˜[ŒLLÚ[™[Ž˜Û^™ZHLLJKÙ\ˆ
šœÞ
JXÚ™YŽ˜[ŒLL˜Ú[™[Ž˜™]Y\ÙZˆÈ™][™ÜÙY[œÝLL˜JKˆÙZ[™H[™\ž°ïÛXÚH™XZÝ[Ûˆ\˜ÚYH]›Ü›HYÙ\ÚXÚ\˜_JK
šœÞ
JØÚ[™[Ž˜Z[™ØX™[ˆ[™]\ÙÙ]ðéH]ZY[ˆ›ZX™[ˆ]\ÜØÚYpçÛXÚ[H\˜™Z]ÜÜZXÚ\ˆY\Ù\ˆ[œÚXÚˆ™Z[HØÚYpçÙ[ˆ\ÈX[ÙÜÈ›ZX™[ˆÚYH\š[[‹™Z[H™\›\ÜÙ[ˆÙ\ˆ™][Y[ˆÙZ[ˆÚYH™\›Ü™[‹ˆÙZ[ˆ]]ÛX]\ØÚ\ÈÜZXÚ\›‹ÙZ[ˆÙ\™\\ØYÙZ[™H]]ÛX]\ØÚHÙZ]\›Z][™Ëˆ™]Ý\ÜÝÙ\ÜZXÚ\HXÚÙ]ZY[ˆYYÙ[ˆ[˜XÚ]YˆZ™[HÙ\°é[™pïÜÙ[ˆÜ›ÛˆZ™[ˆÙ\ØÚ0ï[™™ZH™Y\™ˆÙ[0íœØÚÙ\™[‹˜JK
šœÞÊJÛØÛ\ÜÓ˜[YN˜]]Üš]K\Ý\ØÚ[™[Ž–ÊšœÞ
JXØÚ[™[Ž˜›Ø›[H™\ØÚ™ZX™[˜JK
šœÞ
JXØÚ[™[Ž˜Ü[™ÙX™[˜JK
šœÞ
JXØÚ[™[Ž˜š\ÈH™ZH›ÝÜÈ]\Ýðé[˜JK
šœÞ
JXØÚ[™[Ž˜™XÚH[™\šÛ0é[™È°ï™[˜JK
šœÞ
JXØÚ[™[Ž˜\Ø[[Y[™˜\ÜÝ[™È[œÙZ[˜JK
šœÞ
JXØÚ[™[Ž˜Y[]ÙYÈÛ0é™[˜JK
šœÞ
JXØÚ[™[Ž˜XÚÙ[ˆÈ[ÈˆÜZXÚ\›˜JW_JK
šœÞÊJ›Ü›XÛÛ”ÝX›Z]™OO™Kœ™]™[Y˜][

KÚ[™[Ž–ÊšœÞÊJšY[Ù]Ù\ØX›YžÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜Kˆ›Ø›[H™\ØÚ™ZX™[˜JK
šœÞ
JX™[Ú[›ÜŽ˜]]Üš]KXØ]YÛÜžXÚ[™[Ž˜\\È[›YYÙ[œÈ
˜JK
šœÞÊJÙ[XÝÚY˜]]Üš]KXØ]YÛÜžX˜\šXK[X™[Ž˜\\È[›YYÙ[œØ˜[YN˜K˜Ø]YÛÜžKÛÚ[™ÙN™OO“JØ]YÛÜžXK\™Ù]˜[YJK˜\šXKZ[˜[YŽˆHU˜Ø]YÛÜžKÚ[™[Ž–ÊšœÞ
JÜ[Û˜Ý˜[YN˜Ú[™[Ž˜š]H]\Ýðé[˜JKœ›X\
OOŠšœÞ
JÜ[Û˜ØÚ[™[Ž™_KJJW_JKJØÝXš™XÝ\ØÜš\[Û˜\ÜÙ\ÜÛY[JK
šœÞ
JØÚ[™[Ž˜™\ØÚ™ZX™[ˆÚYKØ\È™[Ø˜XÚ]Ý\™KÙZ]Ø[›ˆ\È›Ø›[H™\ÝZÙZ[™H]\ÝÚ\šÝ[™Ù[ˆ[™Ø\È0ï™\œ°ïÙ\™[ˆÛÛˆZ™H\œðí››XÚH™]Ù\[™ÈÙZ0íœ[œÈÙ]™[›H™[ˆZ[™HY[[™È™[YÝ›ØÚÙZ[™[ˆZ\ÜÜÝ[™[™ÙZ[™H™XÚÝ™\›][™Ë˜JW_JK
šœÞÊJšY[Ù]Ù\ØX›YžÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜‹ˆ™]›Ù™™[™[ˆÜ[™™Z][šÝ[™ÙX™[˜JKJØÝ™Y]™Y™\™[˜ÙXÜÝÛÙX]X\\˜ØØ][Û˜ØœÙ\™Y]XØœÙ\™Y[YXÚ[˜ÙXJK
šœÞ
JØÚ[™[Ž˜ÝYZ[[™Ý˜pçÙHÙ\ˆZ[™HÙ[˜]YHÜØ™\ØÚ™ZX[™ÈÚ[™\™›Ü™\›XÚˆÙZ[™HÝ[™Üœ™ZYØX™HÚ\™[™ÙY›Ü™\[™ÙZ[™HØ\[œÜÚ][Ûˆ]]ÛX]\ØÚÙ\Ù]˜JK
šœÞÊJ]Z[ØØÚ[™[Ž–ÊšœÞ
JÝ[[X\žXØÚ[™[Ž˜œ™Z]Ú[YÙHÛÛZÝ][ˆ°ïˆZ™HZYÙ[™HXÚÙ˜\ÜÝ[™ØJK
šœÞ
JØÚ[™[Ž˜°ïˆYHÚØ[H›Ü˜™\™Z][™ÈšXÚ\™›Ü™\›XÚˆ\ˆZ[˜YÙ[‹Ù[›ˆÚYHÚYH™]Ý\ÜÝ[ˆZ™\ˆZYÙ[™[ˆY[[™È™\Ù[™[ˆpí˜Ú[‹˜JKJØÛÛXÝ˜[YXÛÛXÝ[XZ[ÛÛXÝÛ™XJW_JW_JK
šœÞÊJšY[Ù]Ù\ØX›YžÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜Ëˆ›ÝÜÈ]\Ýðé[ˆ8 $ÈX^[X[™ZXJK
šœÞÊJX™[ØÚ[™[Ž–Ø›ÝÜÈÚØ[]\Ýðé[˜
šœÞ
J[œ]Ý\N˜š[XXØÙ\˜[XYÙKÚœYË[XYÙKÜ™Ë[XYÙKÝÙXœ][\NˆLÛÚ[™ÙN™OOžÛ]P\œ˜^K™œ›ÛJK\™Ù]™š[\ß×JNÙK\™Ù]˜[YOX›[™Ý	‰‘Š
__JW_JK
šœÞ
JØÚ[™[Ž˜”QË‘È[™ÙX”0í˜ÚÝ[œÈZPˆ[™YYØ\^[™H›ÝËˆRPËÒRQˆš]H›Üš\ˆ[ˆZ[™HÛZ[™\™H”QËRÛÜYH[]Ø[™[‹ˆÙZ[™H]ZHÚ\™™\œÙ[™]ˆYH›ÜœØÚ]H™ZYÝYH›ÛÝ0é™YÙK]Yˆ0í˜ÚÝ[œÈ‹^[ÚØ[Y\H”QËRÛÜYHÚ™H\œÜ°ï™ÛXÚHY]Y][ŽÈÜšYÚ[˜[°ïÙ\H[[ˆYH[Ü™[™È™\ÝˆÙZ[™HZ[[XÚH™\ØÚ™ZY[™Ëˆ]XÚš[\ˆÚ™HÔÈðí››™[ˆÚXÚ˜\™H\œðí››XÚH[™ØX™[ˆ[[[‹˜JK
šœÞÊJØÚ[™[Ž–ÜË›[™Ý›ÛˆÈ›ÝÜÈ]\ÙÙ]ðéˆZ[™HY[[™ÈÚ™H›ÝÜÈ›ZXpí™ÛXÚ˜_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜]]Üš]K\ÝÜØÚ[™[ŽœË›X\

K
OOŠšœÞÊJ\XÛXØÚ[™[Ž–ÊšœÞÊJØØÚ[™[Ž–Ø›ÝÈ
ÌW_JK
šœÞ
J[YØÜÜ˜Î™KœÜ˜Ë[™K™\ØÜš\[ÛŸ›ÜœØÚ]H›ÝÈ
Ê
ÌJ_JK
šœÞ
JØÛ\ÜÓ˜[YN˜]]Üš]KYš[[˜[YXÚ[™[Ž™K›˜[Y_JK
šœÞÊJX™[ØÚ[™[Ž–Øš[™\ØÚ™ZX[™È›ÝÈ
ÌK
šœÞ
J[œ]ÛX^[™ÝŒÌ˜[YN™K™\ØÜš\[Û‹ÛÚ[™ÙN™OO™YJË›X\

‹ŠOOœOO]ÞË‹‹›‹\ØÜš\[ÛŽ™K\™Ù]˜[Y_N›ŠJ_JW_JK
šœÞÊJX™[ØÚ[™[Ž–Ø]Y›˜ZY[Ü›ÝÈ
ÌK
Ü[Û˜[
X
šœÞ
J[œ]ÛX^[™ÝŒÌ˜[YN™K›ØØ][Û‹ÛÚ[™ÙN™OO™YJË›X\

‹ŠOOœOO]ÞË‹‹›‹ØØ][ÛŽ™K\™Ù]˜[Y_N›ŠJ_JW_JK
šœÞÊJØÛ\ÜÓ˜[YN˜]]Üš]KZ\ÚÚ[™[Ž–ØÜšYÚ[˜[ÒKLMŽˆK›ÜšYÚ[˜[\Ú_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]Û‹\›ÝØÚ[™[Ž–ÊšœÞÊJ]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™HÛX[\ØX›YOOLÛÛXÚÎŠ
OOžÛ]OVË‹‹œ×NÖÙVÝLWKVÝWOVÙVÝKVÝLWWKYJJ_KÚ[™[Ž–Ø›ÝÈ
ÌK˜XÚØ™[˜_JK
šœÞÊJ]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™HÛX[\ØX›YOO\Ë›[™ÝLKÛÛXÚÎŠ
OOžÛ]OVË‹‹œ×NÖÙVÝKVÝ
ÌWWOVÙVÝ
ÌWKVÝWKYJJ_KÚ[™[Ž–Ø›ÝÈ
ÌK˜XÚ[[˜_JK
šœÞÊJ]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™HÛX[ÛÛXÚÎŠ
OO™YJË™š[\ŠOšYOOYKšY
JKÚ[™[Ž–Ø›ÝÈ
ÌK[™\›™[˜_JW_JW_KKšY
J_JW_JK
šœÞÊJšY[Ù]Ù\ØX›YžË›[™ÝOOLÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜ˆ›ÝËT™XÚZÛ0é[™È[™\œðí››XÚH\šÛ0é[™ØJK\Ë›[™Ý	‰ŠšœÞ
JØÚ[™[Ž˜Ú™H›ÝÜÈ\ÝÙZ[™H›ÝËT™XÚY\šÛ0é[™È\™›Ü™\›XÚ˜JK
šœÞ
JØÚ[™[Ž˜ÙZHZ[™]]YÙH[\›˜]]™[‹ˆÙZ[™H\Ý›Ü˜]\ÙÙ]ðéˆÐÌ\Ýœ™Z]Ú[YÎÈpí™ÛXÚÙZ]HÙ[°ïÝ°ïˆYHÙXÚÙÙX[™[™H™X\˜™Z][™ËˆZ[™H0í™™™[XÚH][™È\Ý™ZHHšXÚ\›]X[™™[°íYÝZ[™HÙ\ÛÛ™\H]\Ü™ZXÚ[™H™XÚZÛ0é[™Ë˜JKØš™XÝ™[šY\Êœ
K›X\

ÙKJOOŠšœÞÊJX™[ØÛ\ÜÓ˜[YN˜]]Üš]KXÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜˜Y[Ø˜[YN˜]]Üš]K\ÝË[XÙ[œÙX˜[YN™KÚXÚÙY˜K›XÙ[œÙOOOYKÛÚ[™ÙNŠ
OO“JXÙ[œÙXJ_JK
šœÞ
JÜ[˜ØÚ[™[ŽJW_KJJKK›XÙ[œÙOOOX\œÜÙX	‰ŠšœÞ
JØÚ[™[Ž˜Z[™˜XÚ\ËšXÚ]\ÜØÚYpçÛXÚ\È][™ÜÜ™XÚ°ïˆ[ÙYÙ[›˜ZYK°ï[™Ë[\›™H™X\˜™Z][™Ë\™›Ü™\›XÚHÚXÚ\™HÜZXÚ\[™ËXÚš\ØÚH[œ\ÜÝ[™È[™ÚÝ[Y[Y\HÙZ]\›Z][™ÈY\Ù\ˆÛÛšÜ™][ˆY[[™È[ˆ]ðéÚXÚ\Ý0é™YÙHÝ[[‹Z[œØÚYpçÛXÚ›ÝÙ[™YÙ\ˆÙZ]\™\ˆ™X\˜™Z][™ÜÜØÚš]H[›™\š[ˆ\ˆ˜XÚÙZ\ÛXÚ[ˆ\Ý0é™YÚÙZ]ÚÙ]KˆÙZ[™H™[YXšYÙHÙZ]\™ØX™KÙZ[™H0ç™\˜YÝ[™È\È\šX™\œ™XÚÈ[™ÙZ[™H]\ØÚ[H™\°í™™™[XÚ[™Ë˜JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]]Üš]K[›ÝXÙXÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž˜ÐÌKŒ[š]™\œÙ[ˆÙZ]™ZXÚ[™H[™Ü[™ðé›XÚ]Y\šYHœ™ZYØX™XJK
šœÞ
JØÚ[™[Ž•ÜJK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ‘œ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ù™š^šY[HÐÌR[™›Ü›X][Û™[˜JK0­È
šœÞ
JXÚ™YŽ”\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜›ÛÝ0é™YÙ\‹[™\°é™\\ˆÐÌT™XÚÝ^JW_JKK›XÙ[œÙOOOXØÌ	‰ŠšœÞÊJX™[ØÛ\ÜÓ˜[YN˜]]Üš]KXÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY˜K˜ØÌ[™\œÝÛÙÛÚ[™ÙN™OO“JØÌ[™\œÝÛÙK\™Ù]˜ÚXÚÙY
_JK
šœÞ
JÜ[˜ØÚ[™[Ž˜XÚX™H[ˆ›ÛÝ0é™YÙ[ˆÐÌT™XÚÝ^[™YH›ÛÙ[ˆÙ[\Ù[ˆ[™™\œÝ[™[‹[œØ™\ÛÛ™\™HÛÛ[Y\žšY[H][™Ë0á™\[™Ù[ˆ\˜Úš]H[™YHÜ[™ðé›XÚšXÚ›Ü™Ù\ÙZ[™HÜ0é\™H°ïÚÛ˜ZYHÚ\šÜØ[HZ[™Ù\°é[]\ˆ™XÚK˜JW_JW_JK
šœÞ
JØÚ[™[Ž‘ÜJK
šœÞÊJX™[ØÛ\ÜÓ˜[YN˜]]Üš]KXÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY˜K›ÝÛ”šYÚËÛÚ[™ÙN™OO“JÝÛ”šYÚØK\™Ù]˜ÚXÚÙY
_JK
šœÞ
JÜ[˜ØÚ[™[Ž˜XÚ™\™°ïÙH0ï™\ˆYH\™›Ü™\›XÚ[ˆ™XÚH[ˆY\Ù[ˆ›ÝÜÈ[™X™HYH[ÙZ\ÙHH\šÙ[›˜˜\™[ˆ\œÛÛ™[‹Ù[›ž™ZXÚ[‹™\˜][XÚ[ˆ[™ØX™[ˆ[™ÙZ]\™[ˆ™XÚ[ˆš]\ˆÙ[\Ù[‹ˆY\È\œÙ]ÙZ[™HÜ0é\™H°ï[™Ë˜JW_JKJØ\œÛÛ˜Ü™Ø[š^˜][Û˜Y™\ÜØXÙXXÛ\˜][Û‘]XJK
šœÞ
JØÚ[™[Ž˜˜[YK[œØÚšYÜ[™][HÙ\™[ˆ°ïˆYH\œðí››XÚH\šÛ0é[™È™[°íYÝ[™\ˆÚØ[[ˆ\È\ž™]YÝHÚÝ[Y[0ï™\››Û[Y[‹ˆYH™]YH\šÛ0é[™È\ÝZ[ˆÙ\ÛÛ™\\ˆ]›Ü›Y[Ý\™‹ÙZ[ˆX™Ù\Ý[[]\È™Z0íœ™[™›Ü›][\‹ˆ\ˆ[™ðïYÙHÛÜ]][™YH™\˜\˜™Z][™È›ZX™[ˆ›Üˆ›ÙZÝ]™\ˆ™\Ù[™[™È™XÚXÚ[™][œØÚ]œ™XÚXÚH°ï™[‹˜JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™XÛÛXÚÎŠ
OOJšYÚØ
KÚ[™[Ž˜\šÛ0é[™ÈZ]›ÝÜÈ\ž™]YÙ[˜JW_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜]]Üš]KYØÝ[Y[Ú[™[Ž–ÊšœÞ
JØØÚ[™[Ž˜›ÝÜÈ]\Ýðé[ˆ8¡¤ˆ\šÛ0é[™È\ž™]YÙ[ˆ8¡¤ˆ]\ÙXÚÙ[ˆ8¡¤ˆ[\œØÚ™ZX™[ˆ8¡¤ˆZ[œØØ[›™[ˆ8¡¤ˆ[\œØÚšYX™[™H\šÛ0é[™ÈØÚY[˜JK
šœÞ
JØÚ[™[Ž˜[H[[Y\šY\[ˆ›ÝÜÈ\œØÚZ[™[ˆ[›Z][˜\ˆ[HÚÝ[Y[ˆÚÝ[Y[Ù[›[™ËÜšYÚ[˜[H[™ÛÜY[œ°ïÙ\HÛÝÚYHXœØÚš]ËH[™XÚÜÙZ][˜[™ØX™[ˆ™\˜š[™[ˆš[ÙZ][ˆ[™[\œØÚšYÜÙZ]Kˆ0á™\[™Ù[ˆ[ˆš[\›‹™ZZ[™›ÛÙK[™ØX™[ˆÙ\ˆ™XÚX]\ÝØZXXÚ[ˆYH[Ü™[™È[™ðïYÎˆ™]H\ž™]YÙ[ˆ[™ZYÙ[š0é™YÈ[\œØÚ™ZX™[‹˜JK‰‰ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞÊJØÚ[™[Ž–ØZÝY[H\šÛ0é[™Îˆ
šœÞ
JÝ›Û™ØØÚ[™[Ž™‹šYJK0­ÈK›XÙ[œÙOOOXØÌØÐÌKŒ[š]™\œÙ[˜ÙXÚÙÙX[™[™H][™ÈX_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]Û‹\›ÝØÚ[™[Ž–ÊšœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™XÛÛXÚÎŠ
OOŠšYÚØ
KÚ[™[Ž˜\šÛ0é[™È[œÙZ[˜JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜š[X\žXÛÛXÚÎŠ
OO›™JŠKÚ[™[Ž˜\šÛ0é[™ÈXÚÙ[ˆÈ[ÈˆÜZXÚ\›˜JW_JK
šœÞÊJX™[ØÛ\ÜÓ˜[YN˜]]Üš]KXÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙYžKÛÚ[™ÙN™OO˜ŠK\™Ù]˜ÚXÚÙY
_JK
šœÞ
JÜ[˜ØÚ[™[Ž˜XÚX™H[HÙZ][ˆ]\ÙÙYXÚÝ
ZYÙ[™H[™ØX™KÙZ[ˆXÚš\ØÚ\ˆ˜XÚÙZ\ÊK˜JW_JW_JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™X\ØX›YžY‹ÛÛXÚÎœ™KÚ[™[Ž˜[\œØÚšYX™[™H\šÛ0é[™ÈØÚY[˜JK
šœÞ
J[œ]Ü™YŽœ‹Û\ÜÓ˜[YN˜]]Üš]KZY[‹Z[œ]\N˜š[XXØÙ\˜\XØ][Û‹Ü‹[XYÙKÚœYË[XYÙKÜ™Ø][\NˆL˜\šXK[X™[Ž˜[\œØÚšYX™[™H\šÛ0é[™ÈÚØ[]\Ýðé[˜ÛÚ[™ÙN™OOžÛ]P\œ˜^K™œ›ÛJK\™Ù]™š[\ß×JNÙK\™Ù]˜[YOX›[™Ý	‰“

__JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜\ˆÚØ[Z[™°ïÙ[ˆ8 $ÈÙZ[™H0ç™\›Z][™Ë˜JKˆ
]XÚYZœÙZ]YÊK”QÈÙ\ˆ‘Ë0í˜ÚÝ[œÈŒZPˆ™HØØ[‹Q]ZKYYØ\^[™HØØ[˜š[[™™Zˆ]ZY[ˆ›È\šÛ0é[™ËˆYHÚØ[[ˆØØ[œÈ›ZX™[ˆ[™\°é™\È]XÚZ™Hš]˜][ˆY]Y][ˆÙ\™[ˆšXÚ0ï™\˜YÙ[‹ˆZ[ˆØØ[ˆ\ÝÙZ[ˆšY\\ÈØXÚ™\š[Ù›ÝËˆÜ°í°çÙ[‹KÑ›Ü›X]ÚXÚÜÈÚ[™ÙZ[™H›ÛÝ0é™YÙHØÚYÛÙKHÙ\ˆ[\œØÚšYÜ°ï[™Ëˆ[HÙZ][ˆpïÜÙ[ˆ[[[ˆÙZ[‹˜_JK›X\

K
OOŠšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜]]Üš]K\ØØ[˜Ú[™[Ž–ÊšœÞÊJØÚ[™[Ž–Ø\šÛ0é[™ÜÜØØ[ˆ
ÌK8 $È[™Ù\°ï_JK
šœÞ
JØÛ\ÜÓ˜[YN˜]]Üš]KYš[[˜[YXÚ[™[Ž™K›˜[Y_JK
šœÞÊJØÚ[™[Ž–Ø[Ü™[™ÎˆK™XÛ\˜][Û’Y0­ÈK›XÙ[œÙOOOXØÌØÐÌ˜ÙXÚÙÙX[™[˜_JKK\KœÝ\ÕÚ]
[XYÙKØ
I‰ŠšœÞ
J[YØÜÜ˜Î™KœÜ˜Ë[˜ÚØ[Z[™ÙY°ïÝ\ˆ\šÛ0é[™ÜÜØØ[ˆ
Ê
ÌJ_JK
šœÞ
JXÚ™YŽ™KœÜ˜Ë\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Z[™ÙY°ïÝ\ÈÚÝ[Y[ÚØ[[œÙZ[˜JK
šœÞÊJØÛ\ÜÓ˜[YN˜]]Üš]KZ\ÚÚ[™[Ž–ØØØ[ˆÒKLMŽˆKš\Ú_JK
šœÞÊJ]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™HÛX[ÛÛXÚÎŠ
OOžÙKœÜ˜ËœÝ\ÕÚ]
›ØŽ˜
I‰•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜ÊKJO™š[\ŠOšYOOYKšY
JKÊØØ[ˆ[™\›ˆ[H\œÙ]™[ˆ\›™]]YH[\œØÚšYÙ\š[›™\[™È™X[ÛÜ[‹˜
_KÚ[™[Ž–ØØØ[ˆ
ÌK[™\›™[ˆÈ\œÙ]™[˜_JW_KKšY
JW_JK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜]]Üš]K\™Y™\™[˜ÙXÚ[™[Ž–ÊšœÞ
JÝ[[X\žXØÚ[™[Ž˜[™\°é™\H™^š\šÜØ[]Ý›Ü›YÙH[™YÚ][H]\Ù°ï[™XJK
šœÞ
JØÚ[™[Ž˜YH0ï™\™ÙX™[™H›Ü›YÙH™]šY™Z[™H™\Ý[[]HX›ZØ][Ûˆ\È™^š\šÜØ[]ËÙ[ÙZ]H[™™Z]XÚ[˜™YÜ™[žH[\›™]H[™XÚÝ™\°í™™™[XÚ[™ÈÛÝÚYHZ[™Hœ™ZZ[[™È›Ûˆ[œÜ°ïÚ[ˆš]\‹ˆÚYHÚ\™šXÚ[ˆZ[™H]\ØÚ[HY[Y\›]X›š\È[YÙY]]][™šXÚÙ[™\™[°ïˆ™YHY[[™È›Ü™Ù\ØÚšYX™[‹˜JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ™JØ™Y™\™[˜ÙKØ™^š\šÜØ[]]\šX™\œ™XÚ[ÜšYÚ[˜[œ˜\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜[™\°é™\HÜšYÚ[˜[›Ü›YÙH[œÙZ[˜JK0­È
šœÞ
JXÚ™YŽ™JØ™Y™\™[˜ÙKØ™^š\šÜØ[]]\šX™\œ™XÚX]\ÙY[[™Kœ˜\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜YÚ][H]\Ù°ï[™H\ˆÜšYÚ[˜[›Ü›YÙH0í™™›™[˜JW_JK
šœÞ
JØÚ[™[Ž˜YH]\Ù°ï[™H\™ðéž]\ÜØÚYpçÛXÚ°ï™ˆYÚ][H^™[\Žˆ\šÛ0é™[™H\œÛÛ‹Ü™Ø[š\Ø][Û‹[œØÚšY][[™ÛÛœÝYÙH[™ØX™[ˆ\ˆX›ZØ][Û‹ˆ[\œØÚšY[™][H›ZX™[ˆ[™ØÚšYXÚˆš]˜]\œÛÛ™[ˆ°ï[ˆ\ÈÜ™Ø[š\Ø][ÛœÙ™[\ˆÛÝÙZ]]™Y™™[™]\ÎÈYHX›ZØ][Ûˆ[™0ïœšYÙH\™›Ü™\›XÚH[™ØX™[ˆÚ[™Z]\ˆ[\˜[™Ù[™[ˆÝ[HHÛ0é™[‹ˆYH™]YH]›Ü›KQ\šÛ0é[™ÈZ]›ÝÜÈ\Ý]›ÛˆÙ]™[›ˆZÝY[H[]XÚH˜\ÜÝ[™Ë™Z0íœ™XÚH[›˜ZYH\ˆ]\Ù°ï[™H[™ZYÛ[™È\ˆœ™ZZ[[™ÜÜ™YÙ[[™ÈÚ[™šXÚ™\Ý0éYÝ˜JW_JK
šœÞÊJšY[Ù]Ù\ØX›YžÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜Kˆ\Ø[[Y[™˜\ÜÝ[™È[™‹ˆÙYZYÛ™][ˆY[]ÙYÈ°ï™[˜JK
šœÞ
JØØÚ[™[ŽšYK›˜[Y_JK
šœÞ
JØÚ[™[ŽŠšœÞ
JÝ›Û™ØØÚ[™[ŽšYKœÝ]\ßJ_JK
šœÞ
JØÚ[™[ŽšYKœ™X\ÛÛŸJK
šœÞ
JØÚ[™[ŽšYK˜ÛÛXÝJK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽšYK\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ù™š^šY[HÝ[HÈÛÛZÝ[™›Ü›X][Û™[ˆ0í™™›™[˜JK0­È
šœÞ
JXÚ™YŽšYKœÛÝ\˜ÙK\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜]Y[H\ˆÜšY[Y\[™ØJK0­È°ï™][Nˆ_JK
šœÞ
JØÚ[™[Ž˜ÙZ[™H™YZÝ[Û™[0ï™\œ°ïH\Ý0é™YÚÙZ]°ïˆZ™HZ[ž™[™HY[[™ËˆÙZ[™HØ\˜[Y\H™X\˜™Z][™ÈÙ\ˆœš\Ýˆ™ZH[šÛ\šZ]š]H[ˆ[X\™ÔÙ\šXÙH[\ˆLMH™^šYZ[™ÜÝÙZ\ÙHŽŽL˜XÚ\ˆ\Ý0é™YÙ[ˆÝ[Hœ˜YÙ[‹˜JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ”œ›ZXÚ[\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ù™š^šY[[ˆY[KSZXÚ[0í™™›™[˜JK0­È
šœÞ
JXÚ™YŽ”œ™˜\K\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ù™š^šY[H›ÝËH[™™\™˜Z™[œÚ[ÙZ\ÙXJW_JK
šœÞ
JØÚ[™[Ž˜\ˆY[KSZXÚ[\ÝZ[ˆZYÙ[œÝ0é™YÙ\ˆÙ™š^šY[\ˆY[]ÙYÈ°ïˆ0í™™™[XÚH[™œ˜\ÝZÝ\‹ˆ\ˆZÞ™\Y\˜XÚ[HÙ\°ï[ˆTHZ[ˆ›ÝÈZ]0í˜ÚÝ[œÈZP‹ˆY\ÙH›Ü˜™\™Z][™ÈZ]™ZH›ÝÜÈ\ÙZ]\\ÈšXÚˆ[™\™HÙYZYÛ™]H0ç™\›Z][™ÜÝÙYÙH[™\™[ˆ[›YÙ[˜™Y[™Ý[™Ù[ˆpïÜÙ[ˆÛÛšÜ™]Ù\°ïÙ\™[‹ˆÙZ[™H]]ÛX]\ØÚHØÚš]Ý[H[HY[KSZXÚ[˜JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜š[X\žXÛÛXÚÎŠ
OOJ™\Ü
KÚ[™[Ž˜Y[[™ÜÞ\Ø[[Y[™˜\ÜÝ[™È\ž™]YÙ[˜JKI‰ŠšœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™XÛÛXÚÎŠ
OO›™JJKÚ[™[Ž˜Y[[™ÈXÚÙ[ˆÈ[ÈˆÜZXÚ\›˜JW_JW_JKØš™XÝšÙ^\Ê
K›[™ÝŒ	‰ŠšœÞÊJ]˜Ü›ÛN˜[\Ú[™[Ž–ÊšœÞ
JØØÚ[™[Ž˜š]H°ï™[˜JK
šœÞ
J[ØÚ[™[Ž“Øš™XÝ™[šY\Ê
K›X\

ÙKJOOŠšœÞ
JXØÚ[™[ŽKJJ_JW_JK
šœÞ
JØÛ\ÜÓ˜[YN˜]]Üš]K[Y\ÜØYÙX›ÛN˜Ý]\Ø˜\šXK[]™HŽ˜Û]XÚ[™[ŽžØ]ZY[ˆÙ\™[ˆ]\ÜØÚYpçÛXÚÚØ[Ù\°ï8 )˜ßJKYI‰ŠšœÞÊJÙXÝ[Û˜ØÚ[™[Ž–ÊšœÞÊJØØÚ[™[Ž–×ÏOOXšYÚØØ›ÝËT™XÚY\šÛ0é[™Ø˜ØXÚXÚHY[[™Ø8 $ÈZÝY[HÚØ[HXÚÝ›ÜœØÚ]X_JK
šœÞ
JØÚ[™[Ž˜ÙZHÙ]™[›HÚÝ[Y[\[‹ˆZ[™H\ž™]YÝH\šÛ0é[™È\ÝšXÚ[\œØÚšYX™[ŽÈÙZ[™HY[[™È\Ý™\œÙ[™]˜JK
šœÞ
JYœ˜[YXÝ]N—ÏOOXšYÚØØXÚÝ›ÜœØÚ]H\ˆ›ÝËT™XÚY\šÛ0é[™Ø˜XÚÝ›ÜœØÚ]H\ˆY[[™ØØ[™›Þ˜Ü˜ÑØÎ˜YKš[JW_JK
šœÞÊJÙXÝ[Û˜ØÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž˜]ðéÚXÚ\ˆ™X\˜™Z][™ÜÜÝ[™JK
šœÞ
JØÛ\ÜÓ˜[YN˜]]Üš]K\Ý]\ØÚ[™[Ž“Øš™XÝ˜[Y\ÊŠK›X\

K
OOŠšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞÊJØÚ[™[Ž–ØØÚš]
ÌW_JK
šœÞ
JØÚ[™[Ž™_JW_K
J_JK
šœÞ
JØÚ[™[Ž˜8 '‘\šÛ0é[™È\ˆ°ï[™ÈZ[™ÙYØ[™Ù[¸ '8 '•›ÛÝ0é™YÚÙZ]Ù\°ï8 '8 '“][™ÜÜ™XÚH]\Ü™ZXÚ[™ÚÝ[Y[Y\8 '8 'ž\ˆÙZ]\›Z][™È™\™Z]8 '8 'ÙZ]\™Ù[Z]]8 '[™8 '™Z0íœ™[™Z[™Ø[™È™\Ý0éYÝ8 '\™›Ü™\›ˆ™]ÙZ[È]ðéÚXÚH˜XÚÙZ\ÙKˆYHÚØ[H›ÜœØÚ]HØ[›ˆÙZ[™[ˆY\Ù\ˆ\Ý0é™H™\Ý0éYÙ[‹˜JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™X\ØX›YˆLÚ[™[Ž˜›ÙZÝ]™H0ç™\›Z][™È›ØÚšXÚœ™ZYÙYÙX™[˜JK
šœÞ
JØÚ[™[Ž˜Ù\ØÚ0ï\È˜XÚÙ[™]Z\ÜZXÚ\‹Ù\™\œÙZ]YÙH]Z\°ï[™ËYÜšY™œÜØÚ]‹0íœØÚœš\Ý[‹ÛÛšÜ™]H\Ý0é™YÚÙZ]Ü°ï[™Ë™XÚXÚ\ˆ\šÛ0é[™ÜÝÛÜ]][™]\Ù°ïÚÛXÚHœ™ZYØX™H™Z[ˆ›ØÚˆÚ™H\™›Ü™\›XÚHÙ\°ïH[\œØÚšY[™›ÝÞ[Ü™[™ÈÙZ[™HÙZ]\›Z][™ÈÙ\ˆ™\°í™™™[XÚ[™È\ˆ›ÝÜËˆZ[ˆ[›YYÙ[ˆÚ™H›ÝÜÈ›ZXpí™ÛXÚ˜JW_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]Û‹\›ÝØÚ[™[Ž–ÊšœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™X\ØX›YžÛÛXÚÎŠ
OOžÝÚ[™ÝË˜ÛÛ™š\›J[HÚØ[[ˆ[™ØX™[‹›ÝÜËXÚÙ˜\ÜÝ[™Ù[ˆ[™ØØ[œÈ]\ÈY\Ù\ˆ[œÚXÚ[™\›™[È™\™Z]È]YˆZ™[HÙ\°éÙ\ÜZXÚ\H]ZY[ˆÙ\ˆ]\ÙXÚÙH›ZX™[ˆÜ™\ÝZ[‹˜
I‰ŠË˜Ý\œ™[
ÊËŠ
KÊ\

JKÊ×JKJßJKÊÚØ[H[™ØX™[ˆ[™]Z\™Y™\™[ž™[ˆ]\ÈY\Ù\ˆ[œÚXÚ[™\›ˆšXÚÈ]YˆZ[™[HÙ\™\ˆÙ\ÜZXÚ\˜
J_KÚ[™[Ž˜ÚØ[H[™ØX™[ˆ[™]ZY[ˆ™\Ù\™™[˜JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™XÛÛXÚÎ“‹Ú[™[Ž˜X[ÙÈØÚYpçÙ[ˆ8 $ÈZ[™ØX™[ˆ™Z[[˜JW_JW_J_JK
šœÞ
JX[ÙØÜ™YŽÛ\ÜÓ˜[YN˜]]Üš]K\™[Z[™\˜˜\šXK[X™[YžHŽ˜]]Üš]K\ÚYÛ˜]\™K]]XÛØ[˜Ù[Š
OOžÚK˜Ý\œ™[HL_KÚ[™[ŽŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]]Üš]KYX[ÙËZ[›™\˜Ú[™[Ž–ÊšœÞ
J˜ÚY˜]]Üš]K\ÚYÛ˜]\™K]]XÚ[™[Ž˜\š[›™\[™È[ˆYHZYÙ[š0é™YÙH[\œØÚšYJK
šœÞ
JÜÝ[NžÝÚ]TÜXÙN˜™K[[™XKÚ[™[ŽœJK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜YH˜KP™\Ý0éYÝ[™È\œÙ]YH[\œØÚšYšXÚ˜JK\ˆZ[™HÚØ[H]ZX]\ÝØZÚ\™Ùpí™™›™]ÈšXÚÈÚ\™0ï™\›Z][˜_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]Û‹\›ÝØÚ[™[Ž–ÊšœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜š[X\žXÛÛXÚÎŠ
OOžÚK˜Ý\œ™[HL˜Ý\œ™[Ë˜ÛÜÙJ
K‹˜Ý\œ™[Ë˜ÛXÚÊ
_KÚ[™[Ž˜˜H8 $ÈXÚX™HYH\šÛ0é[™ÈÙ[\Ù[ˆ[™[\œØÚšYX™[‹˜JK
šœÞ
J]Û˜Ý\N˜]Û˜Û\ÜÓ˜[YN˜Ý][™XÛÛXÚÎŠ
OOžÚK˜Ý\œ™[HLK˜Ý\œ™[Ë˜ÛÜÙJ
KŠšYÚØ
KÊÙZ[ˆ\ØYÙpí™™›™]ˆš]HYH\šÛ0é[™È\›™]][œÙZ[‹›ÛÝ0é™YÈ]\ÙXÚÙ[ˆ[™ZYÙ[š0é™YÈ[\œØÚ™ZX™[‹˜
_KÚ[™[Ž˜™Z[ˆ8 $ÈYH\šÛ0é[™È\Ý›ØÚšXÚ[\œØÚšYX™[‹˜JW_JW_J_JW_J_Y[˜Ý[ÛˆJÙ[žN™Kœ›ÛNXÛÜ™Ø[š\Ø][Û˜YÚYÚY›HL_J^Û]YK›X]ÚYÙ™™\œÏË–ÌKOPZJÙWK
KœÚ[ÖÌKO[YJKš™Y‹œÜ]
Ø
VÌKÞÛÙ™™\Žœ‹šYNžßJNÜ™]\›ŠšœÞÊJ\XÛXÚY˜\™XÝÜžKX
ÙKšYÛ\ÜÓ˜[YN˜ÛÛ[XØ\™\™XÝÜžK\Ý[[X\žX
ÊØX\[\Ý\Ù[XÝY˜
KX’[™^‹LKÚ[™[Ž–ÊšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN™K›ÜšYÚ[OOX\ÝØ\Ý[X™[˜[Ü™Y[˜Ú[™[Ž™K›X™[JK
šœÞÊJ˜ØÚ[™[Ž–ÙKÚY[ÚZ\•Ú[]	‰ŠšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜ØË\›Ùš[KZXÛÛ˜[™Ù\›Ý\ÛTÙ][›™\’Sž××Ú[˜Ý™È[œÏHš‹ËÝÝÝËÌË›Ü™ËÌŒÜÝ™ÈˆšY]Ð›ÞHŒˆÚYHŒˆZYÚHŒˆ\šXKZY[HYH™XÝHŒHˆOHŒHˆÚYHŒÎˆZYÚHŒÎˆžHÈˆš[HˆÌŽXMˆÝ›ÚÙOHˆÙ™™ˆˆÝ›ÚÙK]ÚYHŒˆ‹Ï^HŒŒˆOHŒLˆˆ^X[˜ÚÜH›ZYHˆ›ÛY˜[Z[OH\šX[Ø[œË\Ù\šYˆˆ›Û\Ú^™OHŽHˆ›Û]ÙZYÚH˜›Ûˆš[HÚ]H•ÐÏÝ^Èš[H››Û™HˆÝ›ÚÙOHÚ]HˆÝ›ÚÙK]ÚYHŒ‹ŒHˆÝ›ÚÙK[[™XØ\Hœ›Ý[™ˆÝ›ÚÙK[[™Z›Ú[Hœ›Ý[™Ú\˜ÛHÞHŒNˆÞOHŒMÈˆHŒˆˆš[HÚ]H‹Ï]H“LNŒ]šÛÈ“LNŒÚÓLMMˆˆH‹ÏÙÏÜÝ™Ï˜_JK
šœÞ
JXÚ™YŽ˜KÚ[™[Ž™K]_JW_JK
šœÞÊJÛX[ØÚ[™[Ž–ÙK˜Ø]YÛÜžK0­ÈKœXÙKKœ]X\\’Y	‰˜0­È
ÛJKœ]X\\’Y
OË›˜[YW_JK
šœÞ
JØÚ[™[Ž™K˜Y™\ÜßJK
šœÞÊJØÚ[™[Ž–Ð\œ˜^K™œ›ÛJK™\ØÜš\[ÛŸ
KœÛXÙJN
Kš›Ú[Š
K\œ˜^K™œ›ÛJK™\ØÜš\[ÛŸ
K›[™ÝŒNØ8 )˜˜_JK
šœÞÊJXØÛ\ÜÓ˜[YN˜›Ùš[K[[šØ™YŽ˜KÚ[™[Ž–Ø›Ùš[[œÙZ[˜Ø0­È
Ü‹]N˜8¡¤˜_JKI‰ŠšœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜^X]ÛˆÚÝË[Û‹[X\ÛÛXÚÎŠ
OO’ZJKšY
KÚ[™[Ž˜]YˆØ\H™ZYÙ[˜JW_J_Y[˜Ý[Ûˆ[JÙ[žN™_J^Ü™]\›ŠšœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜›Ùš[K\ÛÝ\˜Ù\ØÚ[™[Ž–ÊšœÞ
JÝ[[X\žXØÚ[™[Ž˜]Y[[ˆ[™°ïœÝ[™JKKœÛÝ\˜ÙI‰ŠšœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ™KœÛÝ\˜ÙK\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž™K™^\›˜[]]Üš]I‰™KœÛÝ\˜ÙKš[˜ÛY\Ê[X\™Ë™X
OØÙ™š^šY[HÛÛZÝÙZ]H]Yˆ[X\™Ë™H0í™™›™[˜˜\ÜÙ[™HÜšYÚ[˜[]Y[H0í™™›™[˜J_JKK™^˜TÛÝ\˜ÙI‰ŠšœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ™K™^˜TÛÝ\˜ÙK\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÙZ]\™H[˜šY]\˜[™ØX™[ˆ0í™™›™[˜J_JK
KœÛÝ\˜Ù\ß×JK™š[\ŠO\›OOYKœÛÝ\˜ÙJK›X\
OOŠšœÞ
JØÚ[™[ŽŠšœÞÊJXÚ™YŽ™K\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž–ÙK›X™[K›ØØ]ÜØ0­È
ÙK›ØØ]ÜŽ˜_J_KK\›
JKK˜ÛÛÜ™[˜]TÛÝ\˜ÙI‰ŠšœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ™K˜ÛÛÜ™[˜]TÛÝ\˜ÙK\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜]Y[H\ÈØ\[œ[šÝØJK
šœÞ
Jœ˜ßJKYKÚY[ÚZ\•Ú[]	‰™K˜ÛÛÜ™[˜]S›ÝW_JKS[X™\‹š\Ñš[š]JK›]
I‰ŠšœÞ
JØÚ[™[Ž˜›ØÚÙZ[ˆÙ\°ï\ˆØ\[œ[šÝˆYH[œØÚšY\Ý[ˆ\ˆ\ÝH™\™°ïØ˜\‹˜JK
šœÞÊJØÚ[™[Ž–ÙK›ØØ][ÛÚXÚÙY	‰ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ØYÙKKÑÙ[˜]ZYÚÙZ]Ü°ï[™ÎˆÜŠK›ØØ][ÛÚXÚÙY
KˆYH[™ÙYÙX™[™HÙ[˜]ZYÚÙZ]ÜÝY™H›ZXXpçÙÙX›XÚ˜
šœÞ
Jœ˜ßJW_JK]Y[[œ°ï[™ÎˆKœÛÝ\˜ÙTÝ]\ÏOOXÚXÚÙYØ™YZÝ[Û™[Ù\°ï˜šXÚ[ÈÙ\°ï™\Ý0éYÝK˜ÚXÚÙYØ0­ÈÝ[™
ØÜŠK˜ÚXÚÙY
N˜ˆÙZ[™H™\™°ïØ˜\šÙZ]ËHÙ\ˆXÚ[™ÜÙØ\˜[YK˜_JKK˜›ÛÚÚ[™É‰ˆYK™^\›˜[]]Üš]I‰ŠšœÞ
JXÚ™YŽ™K˜›ÛÚÚ[™Ë\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜[™œ˜YÙHÙ\ˆ[™›Ü›X][Û™[ˆ™Z[H[˜šY]\ˆ0í™™›™[˜JW_J_Y[˜Ý[ÛˆJÙ[žN™_J^Ü™]\›ˆKÚY[ÚZ\•Ú[]ÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž™K˜Y™\ÜßJK
šœÞÊJÛX[ØÚ[™[Ž–ÙKœXÙK0­ÈK˜Ø]YÛÜžW_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ØËXXØÙ\ÜËY]Z[ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜0å™™™[XÚH]˜˜\šÙZ][™YØ[™ØJK
šœÞ
JØÚ[™[Ž”ÊJK›X\

ÙKJOOŠšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž™_JK
šœÞ
JØÚ[™[ŽJW_KJJ_JK
šœÞ
JØÚ[™[Ž˜™YZÝ[Û™[HÛ›[™KT™XÚ\˜ÚNÈšXÚ›ÜˆÜÙ\°ïˆZÝY[H™]šYXœÜÝ0íœ[™Ù[ˆÚ[™šXÚ\™˜\ÜÝ˜JW_JK
šœÞ
J[KÙ[žN™_JK
šœÞ
JÛKÙ[žN™_JW_JNŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÙK™^\›˜[]]Üš]I‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜^\›˜[X]]Üš]XÚ[™[Ž™K˜]]Üš]SX™[^\›™HZ[œšXÚ[™È\ˆœ™ZY[ˆ[™[œÙ\ÝY[X\™ØJKK›ÜšYÚ[˜[]I‰ŠšœÞ
JØÚ[™[Ž™K›ÜšYÚ[˜[]_JKK›\ÝÛÛ™š\›YY]	‰ŠšœÞÊJØÚ[™[Ž–Ø[™ØX™[ˆ[]™\Ý0éYÝˆÜŠK›\ÝÛÛ™š\›YY]
W_JKK˜ÛÛ™š\›X][Û“Ý™\™YI‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜[K[›ÝXÚ[™[Ž˜[™ØX™[ˆpí™ÛXÚ\ÙZ\ÙH™\˜[]JK
šœÞ
JØÚ[™[Ž™K™\ØÜš\[ÛŸJKK›ØØ][Û•]I‰ŠšœÞÊJ˜ØÚ[™[Ž–ØÝ[™ÜˆK›ØØ][Û•]W_JK
šœÞ
JØÚ[™[Ž™K˜Y™\ÜßJK
šœÞÊJÛX[ØÚ[™[Ž–ÙKœXÙK0­ÈK˜Ø]YÛÜžKK™[]U\OØ0­È
ÙK™[]U\N˜_JKKÙXœÚ]I‰ŠšœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ™KÙXœÚ]K\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ù™š^šY[HÙXœÙZ]H0í™™›™[˜J_JK
šœÞ
JØÚ[™[Ž“Øš™XÝ™[šY\ÊK™]Z[ßßJK›X\

ÙKJOOŠšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž™_JK
šœÞ
JØÚ[™[ŽJW_KJJ_JKKœ]X\\’Y	‰ŠšœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜XÙKZ[™›ØÚ[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–Ø0åœXÚH™^™ZXÚ[™ÎˆJKœ]X\\’Y
OË›˜[YW_JK
šœÞ
JØKÛØØ[X™[ÎˆL[žN›JKœ]X\\’Y
_JKKœ]X\\”ÛÝ\˜ÙI‰ŠšœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ™Kœ]X\\”ÛÝ\˜ÙK\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜]Y[H\ˆZ[œšXÚ[™ÜÞ[Ü™[™ØJKKœ]X\\“ØØ]ÜØ0­È
ÙKœ]X\\“ØØ]ÜŽ˜Kœ]X\\ÚXÚÙYØ0­È]Y[HÙ\°ï[H
ØÜŠKœ]X\\ÚXÚÙY
N˜_JW_JK
šœÞ
J[KÙ[žN™_JK
šœÞ
JÛKÙ[žN™_JW_J_Y[˜Ý[ÛˆÛJÙ[žN™_J^Û]ÜÝ]NØ[›‹\ÞNœŸOUÊ
KÚKWOJ\ÙTÝ]JJ
KÛË×OJ\ÙTÝ]JJ
KÏP\œ˜^K™œ›ÛJJK›[™ÝÜ™]\›ˆ™JHZJK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜\™XÝÜžK\›ÜÜØ[Ú[™[Ž–ÊšœÞ
JÝ[[X\žXØÚ[™[Ž™OØ[™ØX™HÛÜœšYÚY\™[˜˜™Z[™HZ[œšXÚ[™È›ÜœØÚYÙ[˜JKœ\›Z\ÜÚ[ÛœÏË˜Ø[”\XÚ\]OOOHLOÊšœÞ
JØÚ[™[Ž˜›ÜœØÚ0éÙH™[°íYÙ[ˆ\È›ØÚšXÚ[™Ù\ØÚÜÜÙ[™H˜XÚÙ[™[™Z[™[ˆZ[™ZY\žYØ[™Ë˜JNŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜\ˆ[ÙZ\ÈÙZ\ˆX[Y[[ˆ[\›™[ˆ°ï[™Ëˆš]H™[›™[ˆÚYH0í™™™[XÚHZ[œšXÚ[™ÜØ[™ØX™[ˆ[™]Y[[ŽÈ˜YÙ[ˆÚYHÙZ[™Hš]˜][ˆÙ\ˆÙ[œÚX›[ˆ][ˆZ[‹ˆ\È\™›ÛÝÙZ[™H]]ÛX]\ØÚH™\°í™™™[XÚ[™ÈÙ\ˆÙZ]\™ØX™K˜JK
šœÞÊJX™[ØÚ[™[Ž–ÙOØÙ[ÚH[™ØX™HÛÛÙ\°ïÙ\™[Ø˜˜[YKÜ[™]Y[[š[ÙZ\Ø
šœÞ
J^\™XXÝ˜[YNšKÛÚ[™ÙN™OO˜JK\™Ù]˜[YJK˜\šXKZ[˜[YŽˆYI‰˜ÏŒML˜\šXKY\ØÜšX™YžHŽ™OÝ›ÚY˜[œÝ]][Û‹\›ÜÜØ[[[Z]JW_JKYI‰ŠšœÞÊJÚY˜[œÝ]][Û‹\›ÜÜØ[[[Z]Û\ÜÓ˜[YN˜ÏŒMLØ\œ›Ü‹]^˜Ú[™[Ž–ØX^[X[KL™ZXÚ[ˆZ[œØÚYpçÛXÚY\ž™ZXÚ[ˆ0­È
šœÞÊJÝ]]È˜\šXK[]™HŽ˜Û]XÚ[™[Ž–ØËÈKL™ZXÚ[˜_JW_JK
šœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[\ØX›YˆZKš[J
_‹ÛÛXÚÎ˜\Þ[˜Ê
OOžÚYŠYI‰˜ÏŒML
^ÜÊ\ˆ›ÜœØÚYÈ\ÝH[™Ëˆš]Hðïž™[ˆÚYHZˆ]Yˆ0í˜ÚÝ[œÈKL™ZXÚ[ˆZ[œØÚYpçÛXÚY\ž™ZXÚ[‹ˆZ™HZ[™ØX™H›ZX\š[[‹˜
NÜ™]\›ŸX]ØZ]ŠOØØ\ÙX˜[œÝ]][Û‹\›ÜÜØ[OÞÚÚ[™˜]Y[[™™Z\˜‹‹™K›ÜšYÚ[OOXY]ÜšX[K™ØÝ[Y[YÞÚY™K™ØÝ[Y[YKšYNžßK™X\ÛÛŽ˜Z[œšXÚ[™ÜØ[™ØX™H
ÙK]JØˆ
Ú_NžÝ^š_JOÊJ
KÊ[ÙZ\È\ˆ[\›™[ˆ°ï[™ÈÙ\ÜZXÚ\ˆ\ÈÝ\™HšXÚÈ™\°í™™™[XÚÙ\ˆ^\›ˆ™\œØ[™˜
JNœÊ\ˆ[ÙZ\ÈÝ\™HšXÚÙ\ÜZXÚ\ˆš]H™XXÚ[ˆÚYHYH™Z\›Y[[™ËˆZ™HZ[™ØX™H›ZX\š[[‹˜
_KÚ[™[Ž˜[ÙZ\È\ˆ°ï[™ÈZ[œ™ZXÚ[˜JK
šœÞ
JØÛ\ÜÓ˜[YN˜ØØ[\Ý]\Ø›ÛN˜Ý]\ØÚ[™[Ž›ßJW_JW_J_Y[˜Ý[ÛˆÛJÙ[šY\Î™KX\HLKÚÝÛŽ›LL‹Û“[Ü™Nœ‹Û”™]™X[ÚÝÛŽšKœ›ÛN˜OXÛÜ™Ø[š\Ø][Û˜›ØÝ\ÒY›ÏX›Ùš[P˜XÚÎœÏXJ^Û]ÏPZJKKœ™\XÙJ×ŠÊÎ›Ü™Ø[š\Ø][ÛŸ™\ž™ZXÚš\ÊJJÎ—ÊÎ›\Ý_Ø\JJOÊÏWß	
KË	KÚØ\X
JKÛWOJ\ÙTÝ]JJŠKÙ‹OJ\ÙTÝ]JJ
KÛK×OJ\ÙTÝ]JJ
K×Ë—OJ\ÙTÝ]JJ
KOJ\ÙT™YŠJ[
NÊ\ÙQY™™XÝ
J

OOžÝ	‰ŠL
_KÝJNÛ]ZOÛŽ“X]›X^
‹
KYKœÛXÙJŠNÙ[˜Ý[ÛˆÊ
^Û]ZšJKŠNÛ‰‰Š
‹šY
KÊOO™JÌJK‹œÚÝÛ˜‰‰ŠOÚJ‹œÚÝÛŠNJ‹œÚÝÛŠJJ_\™]\›Š\ÙQY™™XÝ
J

OOžÚYŠYŠ\™]\›ŽÛ]O\™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÛ]O^K˜Ý\œ™[Ëœ]Y\žTÙ[XÝÜŠØ
ÐÔÔË™\ØØ\J\™XÝÜžKX
ÙŠJNÙOËœØÜ›Û[ÕšY]ÊØ›ØÚÎ˜Ù[\˜™Z]š[ÜŽ˜Û[ÛÝJKOË™›ØÝ\ÊÜ™]™[ØÜ›ÛˆLJ_JNÜ™]\›Š
OO˜Ø[˜Ù[[š[X][Û‘œ˜[YJJ_KÙ‹‹WJK
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊÊI‰ŠšœÞÊJ]˜ÚY[Žˆ]Ú[™[Ž–ÊšœÞ
JØËÙ[šY\Î˜ËœÚ[ËÛ”™]™X[”Ë›ØÝ\ÒY›Ë›Ùš[P˜XÚÎœßJKË[›ØØ]Y›[™ÝŒ	‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜X\XÛÝ™\˜YÙXÚ[™[Ž–ØË[›ØØ]Y›[™Ý\ˆK›[™Ý]\ÙÙ]ðé[ˆZ[œšXÚ[™Ù[ˆX™[ˆ›ØÚÙZ[™[ˆÙ\°ï[ˆØ\[œ[šÝˆÚYH›ZX™[ˆ[ˆ\ˆ\ÝHZ]Y™\ÜÙH\œ™ZXÚ˜\‹˜_JW_JK
šœÞ
J]˜Ü™YŽžKÛ\ÜÓ˜[YN˜Ø\™È\™XÝÜžK\™\Ý[Ø™]K\Ù[XÝ[ÛˆŽ™K›X\
OO™KšY
Kš›Ú[Š
K™]K[X\\Ú[ÈŽ˜ËœÚ[Ë›X\
OO™KšY
Kš›Ú[Š
K™]K]š\ÚX›HŽž›X\
OO™KšY
Kš›Ú[Š
KÚ[™[Žž›X\
OOŠšœÞ
JKÙ[žN™Kœ›ÛN˜KYÚYÚY™OOYKšYKKšY
J_JK
šœÞÊJØÚ[™[Ž–Þ›[™Ý›ÛˆK›[™Ý\ÜÙ[™[ˆZ[œšXÚ[™Ù[ˆ[™Ù^™ZYÝ˜_JK›[™ÝK›[™Ý	‰ŠšœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[ÛÛXÚÎœŸ


OOJŠÌLŠJKÚ[™[Ž˜ÙZ]\™HZ[œšXÚ[™Ù[ˆ[ž™ZYÙ[˜JW_J_Y[˜Ý[Ûˆ›JÙ[žN™KÙ™™\’YXJ^Û]ÜÝ]N›‹Ø[œ‹\ÞNš_OUÊ
KOVYJ
KÛË×OJ\ÙTÝ]JJ
KØËOJ\ÙTÝ]JJ
KÝK—OJ\ÙTÝ]JJ
KJ\ÙT™YŠJ[
NÖ™JHJßÊJK
\ÙQY™™XÝ
J

OOžÛ]O]Kœ\˜[\Ë›Ù™™\ŽÙI‰œ˜Ý\œ™[Ëœ]Y\žTÙ[XÝÜŠÙ]K[Ù™™\H˜
ÐÔÔË™\ØØ\JJJØ—X
OËœØÜ›Û[ÕšY]ÊØ›ØÚÎ˜Ý\J_KÝKœ\˜[\Ë›Ù™™\‹KšYJNÛ]O[‹™ØÝ[Y[Ë™š[™
OšYOOYK™ØÝ[Y[Y
_ÚY™KšY™\œÚ[ÛŽ™K™\œÚ[ÛŸKX›\ÚYžÝ]N™K]__KÏYK™ØÝ[Y[YKšYÏ[‹œ™XXÝ[ÛœË™š[\ŠOœ\™[OOYÉ‰™\œÚ[ÛOOJK™\œÚ[ÛŸJJK\JKœ\˜[\Ë™œ›ÛKKœYÙOOOX™\ž™ZXÚš\ØØÝ™\ž™ZXÚš\Ø˜ÛÜ™Ø[š\Ø][Û˜
NÜ™]\›ŠšœÞÊJÙXÝ[Û˜Ü™YŽœÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[[œÝ]][Û‹\›Ùš[XÚ[™[Ž–ÊšœÞ
JXÚ™YŽ‹Ú[™[Ž˜8¡¤\ˆ›Üš\šYÙ[ˆ0ç™\œÚXÚJK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[œÝ]][Û‹Y[Ú[™[Ž–ÊšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN™K›ÜšYÚ[OOX\ÝØ\Ý[X™[˜[Ü™Y[˜Ú[™[Ž™K›X™[JK
šœÞÊJXØÚ[™[Ž–ÙKÚY[ÚZ\•Ú[]	‰ŠšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜ØË\›Ùš[KZXÛÛ˜[™Ù\›Ý\ÛTÙ][›™\’Sž××Ú[˜Ý™È[œÏHš‹ËÝÝÝËÌË›Ü™ËÌŒÜÝ™ÈˆšY]Ð›ÞHŒˆÚYHŒˆZYÚHŒˆ\šXKZY[HYH™XÝHŒHˆOHŒHˆÚYHŒÎˆZYÚHŒÎˆžHÈˆš[HˆÌŽXMˆÝ›ÚÙOHˆÙ™™ˆˆÝ›ÚÙK]ÚYHŒˆ‹Ï^HŒŒˆOHŒLˆˆ^X[˜ÚÜH›ZYHˆ›ÛY˜[Z[OH\šX[Ø[œË\Ù\šYˆˆ›Û\Ú^™OHŽHˆ›Û]ÙZYÚH˜›Ûˆš[HÚ]H•ÐÏÝ^Èš[H››Û™HˆÝ›ÚÙOHÚ]HˆÝ›ÚÙK]ÚYHŒ‹ŒHˆÝ›ÚÙK[[™XØ\Hœ›Ý[™ˆÝ›ÚÙK[[™Z›Ú[Hœ›Ý[™Ú\˜ÛHÞHŒNˆÞOHŒMÈˆHŒˆˆš[HÚ]H‹Ï]H“LNŒ]šÛÈ“LNŒÚÓLMMˆˆH‹ÏÙÏÜÝ™Ï˜_JKK]W_JK
šœÞ
J˜KÚ][N›‹™ØÝ[Y[Ë™š[™
OšYOOYK™ØÝ[Y[Y
_Ý\]Y™K\]YXÚYY]™K™XÚYY]K[\NˆLJK
šœÞ
J\ËÙ[žN™K›Ùš[N›YJKš™Y‹œÜ]
Ø
VÌK‹Ë‹‹Kœ\˜[\Ë›Ù™™\ÞÛÙ™™\ŽKœ\˜[\Ë›Ù™™\ŸNžß_J_JK
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÙK›X\Ú[ØÛÜOOOXZ[[™Ø	‰ˆYKÚY[ÚZ\•Ú[]	‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜[K[›ÝXÚ[™[Ž˜YHØ\H™ZYÝ[ˆ™[YÝ[ˆÙX°éY\Ý[™Ü[ÈÜšY[Y\[™ËšXÚ[ˆÙ[˜]Y[ˆÐËQZ[™Ø[™Ëˆ[ˆYØ[™ÜÝÙYÈ[™ZY[ˆÚYH[ˆ[™ØX™[ˆ[[ŽÈÙ™™[™HZ[ž™[Z][ˆÚ[™[È[˜™ZØ[›ÙZÙ[›ž™ZXÚ™]˜JK
šœÞ
JKÙ[žN™_JKKšYOOXY]ÜšX[X™^š\šÜØ[]	‰™K˜Ø][ÙÒYOOX™^š\šÜØ[]	‰ŠšœÞ
J›KßJW_JK
Kœ™[]YYß×JK›X\
OOžÊŠK™š[™
O˜Ø][ÙÒYOOYJJK™š[\Š›ÛÛX[ŠK›[™ÝŒ	‰ŠšœÞÊJÙXÝ[Û˜ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™\˜[™[™HÜH[™Z[œšXÚ[™Ù[˜JK
Kœ™[]YYß×JK›X\
OOžÊŠK™š[™
O˜Ø][ÙÒYOOYJJK™š[\Š›ÛÛX[ŠK›X\
OOŠšœÞ
JØÚ[™[ŽŠšœÞÊJXÚ™YŽ›YJKš™Y‹ŠKÚ[™[Ž–ÙK]K0­È›Ùš[[œÙZ[˜_J_KKšY
JW_JKK›Ù™™\œÏË›[™ÝŒ	‰ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜[œÝ]][Û‹[Ù™™\œØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜[™ÙX›ÝHY\Ù\ˆZ[œšXÚ[™ØJKK›Ù™™\œË›X\
OŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜[œÝ]][Û‹[Ù™™\˜™]K[Ù™™\ˆŽšYÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž]_JK
šœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ›YJKš™Y‹‹ÛÙ™™\ŽšYJKÚ[™[Ž˜\™ZÝ[šÈHY\Ù[H[™ÙX›ÝJ_JK
šœÞ
JKÙ[žNJW_KšY
JW_JW_JKK›ÜšYÚ[OOXY]ÜšX[	‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜[K[›ÝXÚ[™[Ž˜™YZÝ[Û™[\Ø[[Y[™Ù\Ý[ˆÙZ[™H™\Ý0éYÝHÙ[œÝ\œÝ[[™È[™ÙZ[™HÛÛÜ\˜][ÛˆZ]\ˆ°ï™Ù\œ]›Ü›K˜JK‹œ\›Z\ÜÚ[ÛœÏË˜Ø[]]Ü‰‰ŠšœÞ
JØÚ[™[ŽŠšœÞ
JXØÛ\ÜÓ˜[YN˜Ý][™HÛX[™YŽ˜ÛYZ[™KÛÜ™Ø[š\Ø][ÛÚ[œÝ]][ÛX
Ù[˜ÛÙUT’PÛÛ\Û™[
K˜Ø][ÙÒY
KÚ[™[Ž˜[™ØX™[ˆY\Ù\ˆZ[œšXÚ[™È\™ðéž™[˜J_JK
šœÞ
JØÚ[™[Ž˜YH[Ü™[™È\œÙ]ÙZ[™[ˆ™\™][™ÜÛ˜XÚÙZ\Ëˆ\™ðéž[™Ù[ˆÙ\™[ˆÙ\\˜]Ù\°ï[™™\°é™\›ˆY\Ù\È\Ù\œ›Ùš[\œÝ˜XÚœ™ZYØX™K˜JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜\XÛK\\XÚ\][Û˜Ú[™[Ž–ÊšœÞÊJÙXÝ[Û˜ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜ÜÚ]]™H™XZÝ[Û˜JK
šœÞ
JØÚ[™[Ž˜0í˜ÚÝ[œÈZ[™HÜÚ]]™H™XZÝ[Ûˆ™HZ[™ZY\žYØ[™È[™˜\ÜÝ[™ËˆZ[™H™XZÝ[Ûˆ™\Ý0éYÝÙZ[™H˜XÚXÚH]X[]0éÙ\ˆšXÚYÚÙZ]˜JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜™XXÝ[ÛœØÚ[™[Ž–ÖØ\<'äcX][Y[ˆØÚKØX\8¦iX\ž˜KØÛZ[X8¦.˜0éÚ[˜WK›X\

ÙK—JOOŠšœÞÊJ]Û˜È˜\šXK[X™[Ž›‹˜\šXK\™\ÜÙYŽ—ËœÛÛYJO›Z[™I‰œÞ[X›ÛOOYJK\ØX›YˆL]N˜™XZÝ[Û™[ˆ™[°íYÙ[ˆ˜XÚÙ[™ÛÛXÚÎ˜\Þ[˜Ê
OOžÛ]X]ØZ]Š™XXÝÚY™ËÞ[X›Û™_JNÝ	‰™Š›Y\ÜØYÙJ_KÚ[™[Ž–ÝË™š[\ŠOœÞ[X›ÛOOYJK›[™Ý_KJJ_JW_JK‹œ\›Z\ÜÚ[ÛœÏË˜Ø[ÛÛ[Y[	‰ŠšœÞÊJÙXÝ[Û˜ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™\˜™\ÜÙ\[™ÜÝ›ÜœØÚYÈÙ\\˜]Z[œ™ZXÚ[˜JK
šœÞ
JØÚ[™[Ž˜ÙZ[™HÙ]ðíš›XÚ[ˆÛÛ[Y[\™HÙ\ˆ[ÛÜ[‹ˆ›ÜœØÚ0éÙHÙ\™[ˆ]\ÜØÚYpçÛXÚ[\›ˆÙ\°ï[™šXÚ]]ÛX]\ØÚÙZ]\™ÙYÙX™[‹ˆ™YÝ[0é™H0íœØÚ[™ÈÙXÚÈØ[[™\›[Û˜]H˜XÚZ[™Ø[™ËÚ™H]Y\šYH]\Û˜ZYKˆYHYZ[š\Ý˜][Ûˆ°ïYH™\™Z[šYÝ[™ÈX[Y[]\ÎÈZ[ˆ™YÙ[pé0çÚYÙ\ˆ]]ÛX]\ØÚ\ˆ0íœØÚ]Yˆ\Ý›ØÚšXÚZ[™Ù\šXÚ]ˆš]H™\Ù[™[ˆÚYH°ïˆY\Ù[ˆ\ÝX›]Yˆ]\ÜØÚYpçÛXÚ\™[™[™H\Ý[™ØX™[‹˜JK
šœÞÊJX™[ØÚ[™[Ž–ØÙ]ðïœØÚH0á™\[™Ø
šœÞ
JØKÚY˜ÝYÙÙ\Ý[Û‹XÚ[™ÙX˜[YN˜Ú[™ÙX˜[YN›ËÛÚ[™ÙNœßJW_JK
šœÞÊJX™[ØÚ[™[Ž–ØÛÛšÜ™]\ˆ]™[˜
šœÞ
JØKÚY˜ÝYÙÙ\Ý[Û‹X™[™Yš]˜[YN˜™[™Yš]˜[YN˜ËÛÚ[™ÙN›JW_JK
šœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[\ØX›Yˆ[Ëš[J
_XËš[J
_KÛÛXÚÎ˜\Þ[˜Ê
OOžÛ]O[XJÚ[™ÙXÊ_XJ™[™Yš]ÊNÚYŠJ^ÙŠJNÜ™]\›Ÿ[]X]ØZ]ŠÝYÙÙ\Ý[Û˜ÚY™ËÚ[™ÙN›Ë™[™Yš]˜ßJNÝ	‰ŠÊ
K

KŠ›Y\ÜØYÙJJ_KÚ[™[Ž˜™\˜™\ÜÙ\[™ÜÝ›ÜœØÚYÈ[\›ˆ\ˆ°ï[™ÈZ[œ™ZXÚ[˜JW_JK
šœÞ
J˜KÙØÎ›_JK
šœÞ
J˜KÙØÎ›_JK
šœÞ
JØÛ\ÜÓ˜[YN˜ØØ[\Ý]\Ø›ÛN˜Ý]\ØÚ[™[Ž_JW_JW_J_Y[˜Ý[Ûˆ[JÛÜ™Ø[š\Ø][ÛœÎ™OHL_O^ßJ^Û]ÜÝ]NOUÊ
KVYJ
KÝ˜[Y\Îœ‹\]NšK[™\[™Î˜K\Ú›ßOIJ
KÏYOØÜ™Ø[š\Ø][Û˜˜™\ž™ZXÚš\ØÏYOÛ‹XˆOOX\ÝX›‹XOOXØ\X^Ê
KOQ[ÊÜ]Y\žNœ‹œKXÙNœ‹œXÙK]X\\Žœ‹œ]X\\‹Ø]YÛÜžNœ‹˜Ø]YÛÜžKÛÜœ‹œÛÜJKVÜ‹œXÙK‹œ]X\\‹‹˜Ø]YÛÜžK‹œÛÜOOX™]ØK™š[\Š›ÛÛX[ŠK›[™ÝPZJKÊKOPÛÊ‹šY
KÏJ\ÙT™YŠJ[
KÏJ\ÙT™YŠJ[
NÊ\ÙS^[Ý]Y™™XÝ
J

OOžÛ]OWË˜Ý\œ™[ÚYŠOOO[[
\™]\›Ž×Ë˜Ý\œ™[[[Û]J
OOžÛ]YË˜Ý\œ™[Ý	‰Ú[™ÝËœØÜ›ÛÊÝÜÚ[™ÝËœØÜ›ÛJÝ™Ù]›Ý[™[™ÐÛY[™XÝ

KÜYK™Z]š[ÜŽ˜[œÝ[J_NÝ

NÛ]\™\]Y\Ý[š[X][Û‘œ˜[YJ
NÜ™]\›Š
OO˜Ø[˜Ù[[š[X][Û‘œ˜[YJŠ_KØ×JNÙ[˜Ý[ÛˆŠJ^Û]XØ
ÜÊØØ
ÙJÊ‹œ]Y\žOØØ
Û‹œ]Y\žN˜
NÙOOOXØ\XOOXÉ‰ŠË˜Ý\œ™[YË˜Ý\œ™[Ë™Ù]›Ý[™[™ÐÛY[™XÝ

KÜÏÛ[YJÜØÜ›ÛˆL_JKØØ][Û‹š\ÚOO]	‰ŠË˜Ý\œ™[[[
J_ZYŠ
\ÙQY™™XÝ
J

OOžÛ]OJ
OOžØßYJØ
ÜÊØÚØ\X
Ê‹œ]Y\žOØØ
Û‹œ]Y\žN˜
J_NÜ™]\›ˆÚ[™ÝË˜Y]™[\Ý[™\Š™Ë[X\Y›ØÝ\ØJK

OOÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Š™Ë[X\Y›ØÝ\ØJ_KØËË‹œ]Y\žWJK
\ÙQY™™XÝ
J

OOžÚYŠ‹XˆOOXØ\X
\™]\›ŽÛ]O\™\]Y\Ý[š[X][Û‘œ˜[YJ

OO™ØÝ[Y[™Ù][[Y[žRY
\™XÝÜžK[X\Y\™XÝ]\™Ù]
OËœØÜ›Û[ÕšY]ÊØ›ØÚÎ˜Ý\™Z]š[ÜŽ˜[œÝ[JJNÜ™]\›Š
OO˜Ø[˜Ù[[š[X][Û‘œ˜[YJJ_KÛ‹œYÙK‹X—JK‹XOOXÝ[™Ü
^Û]OPZJ
KœÚ[Ë™š[™
OO™KšYOO[‹šY
K]Ê‹œ\˜[\Ëœ›Ùš[JNÜ™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[›Ùš[K[ØØ][Û‹\YÙXÚ[™[Ž–Ý	‰ŠšœÞ
JXØÛ\ÜÓ˜[YN˜Ý][™HÛX[™YŽÚ[™[Ž˜8¡¤\°ïÚÈ[H›Ùš[JK
šœÞ
JXØÚ[™[Ž™OØÝ[™Üˆ
ÙK]N˜Ý[™ÜšXÚ™\™°ïØ˜\˜JKOÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž™K˜Y™\ÜßJK
šœÞ
JØÚ[™[Ž˜°ïˆY\Ù[ˆ\™ZÝ[ˆÝ[™Ü]YœYˆÙ[[ˆÙZ[™HÝXÚš[\‹ˆZ™H›Üš\šYÙH]\ÝØZ›ZX0ï™\ˆ\È›Ùš[\œ™ZXÚ˜\‹˜JK
šœÞ
JÛKÙ[šY\Î›X\ˆL›ØÝ\ÒY™KšY›Ùš[P˜XÚÎJW_JNŠšœÞ
JØÚ[™[Ž˜°ïˆY\Ù[ˆÝ[™ÜYYÝ›ØÚÙZ[ˆÙ\°ï\ˆØ\[œ[šÝ›Ü‹˜JK
šœÞ
JXÚ™YŽ˜ÛÜ™Ø[š\Ø][Û‹ÚØ\XÚ[™[Ž˜[HZ[œšXÚ[™Ù[ˆ]Yˆ\ˆØ\XJW_J_ZYŠ‹XOOXZ[˜YØ
\™]\›ˆK™[žOÊšœÞ
J›KÙ[žN›K™[žKÙ™™\’Y›K›Ù™™\ËšYJNŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[Ú[™[Ž–ÊšœÞ
JXØÚ[™[Ž˜›Ùš[šXÚ™\™°ïØ˜\˜JK
šœÞ
JXÚ™YŽœJ‹œ\˜[\Ë™œ›ÛKØ
ÜÊKÚ[™[Ž˜\ˆ0ç™\œÚXÚJW_JNÙ[˜Ý[ÛˆJ
^ÚJÜN˜XÙN˜]X\\Ž˜Ø]YÛÜžN˜ÛÜ˜™]ØÚ[™˜[XÚÝÛŽŒLŸJ_\™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[\™XÝÜžK\YÙXÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž™OØRS”’PÒS‘ÑSˆÑS“‘S“T“‘S˜˜S‘ÑP“ÕHÑV’QS’S‘S˜JK
šœÞ
JXØÚ[™[Ž™OØÜ™Ø[š\Ø][Û™[ˆÝ[[ˆÚXÚ›Ü˜˜™\™ÙYÜ™™\ˆ™\ž™ZXÚš\ØJK
šœÞ
JØÚ[™[Ž™OØ\›™[ˆÚYHZ[œšXÚ[™Ù[ˆ[H™^š\šÈÙ[›™[‹\Ù[ˆÚYH]\Ù°ï›XÚH›Ùš[KˆZYÙ[™HÜ™Ø[š\Ø][ÛœØ[™ØX™[ˆðí››™[ˆ\œÝ˜XÚ[œØÚ\ÜÈ\È˜XÚÙ[™ÈZ[™Ù\™ZXÚÙ\™[‹˜˜ÝXÚ[ˆÚYHÙ^šY[˜XÚZ[œšXÚ[™Ù[‹\Ý0é™YÙ[ˆY[œÝÝ[[ˆ[™[™ÙX›Ý[ˆ[H™^š\šÈ™\™ÙYÜ™‹˜JK‹˜Ø]YÛÜžOOOXÚY[ÚZ\‹]Ú[]Ø	‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜[K[›ÝXÚ[™[Ž˜›ÛÝZ]\ÜÝ][™È]][ˆ™\›[šÝ[ˆÜšYÚ[˜[]Y[[‹šXÚ›ÜˆÜÙ\°ïˆ0å™™›[™ÜÞ™Z][‹YØ[™ÜØ™Y[™Ý[™Ù[ˆ[™Ý0íœ[™Ù[ˆ›ÜˆZ[™[H™\ÝXÚ°ï™[‹ˆ[™ÙZÛ0éHØ[™Y][ˆ\œØÚZ[™[ˆšXÚ[ˆY\Ù[Hš[\ŽÈYH\™˜\ÜÝ[™È\Ý›ØÚšXÚ›ÛÝ0é™YË˜JKI‰œ\›Z\ÜÚ[ÛœÏË˜Ø[]]Ü‰‰ŠšœÞ
JØÚ[™[ŽŠšœÞ
JXØÛ\ÜÓ˜[YN˜Ý][™HÛX[™YŽ˜ÛYZ[™KÛÜ™Ø[š\Ø][Û˜Ú[™[Ž˜ZYÙ[™\ÈÜ™Ø[š\Ø][ÛœÜ›Ùš[\ˆ°ï[™ÈZ[œ™ZXÚ[˜J_JK
šœÞÊJX™[ØÛ\ÜÓ˜[YN˜\™XÝÜžK\š[X\žK\ÙX\˜ÚÚ[™[Ž–ØÜ™Ø[š\Ø][Û™[ˆ[™Z[œšXÚ[™Ù[ˆ\˜ÚÝXÚ[˜
šœÞ
J[œ]Ý\N˜ÙX\˜Ú˜[YNœ‹œKÛ›\Ž˜KÛ’Ù^QÝÛŽ™OOžÙKšÙ^OOOX[\˜	‰˜J
_KÛÚ[™ÙN™OOšJÜN™K\™Ù]˜[YKÚÝÛŽŒLŸKL
KXÙZÛ\Ž˜˜[YK[™ÙX›ÝÙ\ˆY™\ÜÙXJW_JK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜\™XÝÜžKXY˜[˜ÙYYš[\œØÚ[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–ØÙZ]\™HÝXÚš[\˜Ø
	ÙŸH]\ÙÙ]ðé
X˜_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜\™XÝÜžKYš[\œØÚ[™[Ž–ÊšœÞÊJX™[ØÚ[™[Ž–ØÝYZ[
šœÞÊJÙ[XÝÝ˜[YNœ‹œXÙKÛÚ[™ÙN™OOšJÜXÙN™K\™Ù]˜[YK]X\\Ž˜ÚÝÛŽŒLŸJKÚ[™[Ž–ÊšœÞ
JÜ[Û˜Ý˜[YN˜Ú[™[Ž˜[HÝYZ[XJKÛ‹›X\
OOŠšœÞ
JÜ[Û˜Ý˜[YN™KÚ[™[Ž™JJ_KJJW_JW_JK
šœÞÊJX™[ØÚ[™[Ž–Ø0åœXÚH™^™ZXÚ[™Ø
šœÞ
J˜KÛØØ[X™[ÎˆLXÙNœ‹œXÙK˜[YNœ‹œ]X\\‹ÛÚ[™ÙN™OOšJÜ]X\\Ž™KÚÝÛŽŒLŸJ_JW_JK
šœÞÊJX™[ØÚ[™[Ž–ØØ]YÛÜšYX
šœÞ
JKØ\™XN˜™\ž™ZXÚš\Ø˜[YNœ‹˜Ø]YÛÜžK[ˆLÛÚ[™ÙN™OOšJØØ]YÛÜžN™KÚÝÛŽŒLŸJ_JW_JK
šœÞÊJX™[ØÚ[™[Ž–ØÛÜY\[™Ø
šœÞÊJÙ[XÝÝ˜[YNœ‹œÛÜOOX˜[YKY\ØØØ˜[YKY\ØØ˜™]ØÛÚ[™ÙN™OOšJÜÛÜ™K\™Ù]˜[YKÚÝÛŽŒLŸJKÚ[™[Ž–ÊšœÞ
JÜ[Û˜Ý˜[YN˜™]ØÚ[™[Ž˜˜[YHx $Ö˜JK
šœÞ
JÜ[Û˜Ý˜[YN˜˜[YKY\ØØÚ[™[Ž˜˜[YH¸ $ÐXJW_JW_JW_JW_JK‹œ]X\\‰‰ŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]X\\‹Yš[\‹[›ÝXÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜\ˆš[\ˆ°ïˆ0íœXÚH™^™ZXÚ[™Ù[ˆ™ZYÝ\ˆ]\Ù°ïÚÛXÚYÙ[Ü™™]HZ[œšXÚ[™Ù[‹ˆ›ØÚšXÚYÙ[Ü™™]HZ[œšXÚ[™Ù[ˆ›ZX™[ˆ[\ˆ8 '[H0íœXÚ[ˆ™^™ZXÚ[™Ù[¸ ']Y™š[™˜\‹˜JK
šœÞÊJ]Z[ØØÚ[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–ÛJ‹œ]X\\ŠOË›˜[Y_ÜØ]\ÝØZ\šÛ0é_JK
šœÞ
JØKÛØØ[X™[ÎˆL[žN›J‹œ]X\\Š_JW_JW_JK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜\™XÝÜžK\XÙKYÝZYXÚ[™[Ž–ÊšœÞ
JÝ[[X\žXØÚ[™[Ž˜ÝYZ[H[™0íœXÚH™^™ZXÚ[™Ù[ˆ\šÛ0éJK
šœÞ
JXKÛØØ[X™[ÎˆLJW_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜\™XÝÜžK]ÛÛ˜\˜Ú[™[Ž–ÊšœÞÊJ]˜Ü™YŽ™ËÛ\ÜÓ˜[YN˜XœÈX\]šY]ËXÛÛ›ÛØ˜\šXK[X™[Ž˜™\ž™ZXÚš\Ù\œÝ[[™ØÚ[™[Ž–ÊšœÞ
J]Û˜È˜\šXK\™\ÜÙYŽˆXËÛÛXÚÎŠ
OOŠ\ÝX
KÚ[™[Ž˜\ÝH[ž™ZYÙ[˜JK
šœÞÊJ]Û˜È˜\šXK\™\ÜÙYŽ˜ËÛÛXÚÎŠ
OOŠØ\X
KÚ[™[Ž–ÊšœÞ
JÜ[˜È˜\šXKZY[ˆŽ˜YXÚ[™[Ž˜<'åî˜JKØ\H[ž™ZYÙ[˜_JW_JK
šœÞÊJÜ›ÛN˜Ý]\ØÚ[™[Ž–ÜÝ[\ÜÙ[™HÝ[OOLOØZ[œšXÚ[™Ø˜Z[œšXÚ[™Ù[˜0­È›ØØ]YZ]Ù\°ï[HØ\[œ[šÝ_JK
‹œ_‹œXÙ_‹œ]X\\Ÿ‹˜Ø]YÛÜž_‹œÛÜOOX™]Ø‹œÚÝÛˆOOLLŠI‰ŠšœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜^X]Û˜ÛÛXÚÎžKÚ[™[Ž˜š[\ˆ\°ïÚÜÙ]™[˜JW_JKK›[™ÝÏÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JÛKÙ[šY\ÎKX\˜ËÚÝÛŽœ‹œÚÝÛ‹Û“[Ü™NŠ
OOšJÜÚÝÛŽœ‹œÚÝÛŠÌLŸJKÛ”™]™X[ÚÝÛŽ™OOšJÜÚÝÛŽ™_JKœ›ÛN›ßJK]K›[™Ý	‰ŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜[\XÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜ÙZ[™H\ÜÙ[™[ˆZ[œšXÚ[™Ù[ˆÙY[™[‹ˆYHØ\H[™YHËP˜Z‹TÝ][ÛœØ]\ÝØZ›ZX™[ˆ]˜˜\‹˜JK
šœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[ÛÛXÚÎžKÚ[™[Ž˜š[\ˆ\°ïÚÜÙ]™[˜JW_JW_JNŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜[\XÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜ÙZ[™H\ÜÙ[™[ˆZ[œšXÚ[™Ù[ˆÙY[™[‹˜JK
šœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[ÛÛXÚÎžKÚ[™[Ž˜š[\ˆ\°ïÚÜÙ]™[˜JW_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜\™XÝÜžKXYÚ[™[ŽŠšœÞ
JÛKßJ_JW_J_Y[˜Ý[Ûˆ›JÙØÝ[Y[Î™Kœ›ÛNXÜÛ]ZËÝ[Y[˜J^Ü™]\›ŠšœÞ
J]˜ØÛ\ÜÓ˜[YN˜Ø\™ØÚ[™[Ž™K›X\
OOŠšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜ÛÛ[XØ\™Ú[™[Ž–ÊšœÞÊJÜ[˜ØÛ\ÜÓ˜[YN˜\Ý[X™[Ú[™[Ž–ÙK›ÜšYÚ[OOX\ÝØT‘•S‘S‘TˆTÕS’S0­È˜’UU”‘RQÑQÑP‘S˜_JK
šœÞÊJÛX[ØÚ[™[Ž–ÙKœX›\ÚYœXÙ_™^š\šÈ™\™ÙYÜ™˜0­ÈÛ]ZØ_JK
šœÞ
JØØÚ[™[ŽŠšœÞ
JXÚ™YŽ›YJØ™Z]˜YËØ
Ù[˜ÛÙUT’PÛÛ\Û™[
KšY
K
KÚ[™[Ž™KœX›\ÚY]_J_JK
šœÞ
JØÛ\ÜÓ˜[YN˜Ø\™Y^Ù\œÚ[™[ŽÛŠKœX›\ÚY˜›Ù_KœX›\ÚYœ›ÜÜØ[ŒŒ
_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Ø\™][YKY]Z[Ø˜\šXK[X™[Ž˜™Z][™ØX™[ˆ[H™Z]˜YØÚ[™[ŽŠšœÞ
J˜KÚ][NžØÜ™X]Y™K˜Ü™X]YX›\ÚY]™KœX›\ÚY]š\œÝX›\ÚY]›[ÊJK™\œÚ[ÛŽ™K™\œÚ[ÛŸK[\NˆLJ_JK
šœÞ
JXÚ™YŽ›YJØ™Z]˜YËØ
Ù[˜ÛÙUT’PÛÛ\Û™[
KšY
K
KÚ[™[Ž˜›ÛÝ0é™YÙ[ˆ™Z]˜YÈ\Ù[ˆ8¡¤˜JW_KKšY
J_J_Y[˜Ý[ÛˆJÚÛYN™OHL_J^Û]ÜÝ]NOUÊ
KVYJ
KJ\ÙT™YŠJ[
KÝ˜[Y\ÎšK\]N˜K[™\[™Î›Ë\ÚœßOIJ
KÏX›ÊÚÛYN™_JKYOØÎ›ÜÊËK
NÊ\ÙQY™™XÝ
J

OOžÈYI‰›‹œYÙOOOXÛ]ZØ	‰›‹XOOX[Y[˜	‰œ‹˜Ý\œ™[ËœØÜ›Û[ÕšY]ÊØ›ØÚÎ˜Ý\J_KÙK‹œYÙK‹X—JNÛ]OHH]œ\›Z\ÜÚ[ÛœÏË˜Ø[]]ÜŽÜ™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆÛ]XØ[]ÜXÜØY˜Û]\ØÚKXY\™Ù\[Y[˜™YŽœ‹Ú[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜ÙXÝ[Û‹ZXY[™ØÚ[™[Ž–ÊšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜‘QRÕSÓˆS‘°ç‘ÑT’S“‘SˆS‘°ç‘ÑT˜JK
šœÞ
J˜ØÚ[™[Ž™OØZÝY[HÛ]\ØÚH[Y[˜˜Û]\ØÚH[Y[˜JW_JKI‰ŠšœÞ
JXÚ™YŽ˜ÜÛ]ZËÝ[Y[˜Ú[™[Ž˜[HÛ]\ØÚ[ˆ[Y[ˆ8¡¤˜JW_JKYI‰ŠšœÞ
JØÚ[™[Ž˜Û]\ØÚH[Y[‹œ˜YÙ[ˆ[™›ÜœØÚ0éÙH›Ûˆ°ï™Ù\š[›™[ˆ[™°ï™Ù\›‹ˆY\ÙH™Z]°éÙHÚ[™ÙY\ˆ[]XÚH[\›YÙ[ˆ›ØÚ™\ØÚ0ïÜÙK˜JK
šœÞ
JÛ‹ßJK
šœÞ
JËØ\™XN˜Û]ZØJKYI‰ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞÊJX™[ØÚ[™[Ž–ØÛ]\ØÚH™Z]°éÙH\˜ÚÝXÚ[˜
šœÞ
J[œ]Ý\N˜ÙX\˜Ú˜[YNšKœKÛ›\Ž›ËÛ’Ù^QÝÛŽ™OOžÙKšÙ^OOOX[\˜	‰›Ê
_KÛÚ[™ÙN™OO˜JÜN™K\™Ù]˜[Y_KL
_JW_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜™XY\‹Yš[\œØÚ[™[ŽŠšœÞ
JÜËØ\™XN˜Û]ZØ˜[Y\ÎšK\]N˜_J_JK
Kœ_KœXÙ_Kœ]X\\ŸK˜Ø]YÛÜž_KœÛÜOOX™]Ø
I‰ŠšœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜^X]Û˜ÛÛXÚÎŠ
OO˜JÜN˜XÙN˜]X\\Ž˜Ø]YÛÜžN˜ÛÜ˜™]ØÚ[™˜[XÚÝÛŽŒLŸJKÚ[™[Ž˜š[\ˆ\°ïÚÜÙ]™[˜JW_JK›[™ÝÊšœÞ
J›KÙØÝ[Y[Î›œ›ÛN™OØÜÛ]ZËÝ[Y[˜œßJNŠšœÞÊJØÚ[™[Ž–ØHY\Ù\ˆ]\ÝØZYYÙ[ˆ›ØÚÙZ[™Hœ™ZYÙYÙX™[™[ˆ™Z]°éÙH›Ü‹˜OØœš[™Ù[ˆÚYHZ[ˆZYÙ[™\È[XHZ[‹˜˜_JKOÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]Û‹\›ÝØÚ[™[Ž–ÊšœÞ
JXØÛ\ÜÓ˜[YN˜Ý][™HÛX[™YŽ˜ÜÛ]ZËÝ[Y[˜Ú[™[Ž˜[HÛ]\ØÚ[ˆ[Y[˜JKI‰ŠšœÞ
JXØÛ\ÜÓ˜[YN˜š[X\žHÛX[™YŽ˜ÛYZ[™KÛ™]KÜÛ]ZØÚ[™[Ž˜Û]\ØÚ\È[XH\œÝ[[˜JW_JNŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜[™[Û]XØ[Z[š]][Û˜Ú[™[Ž–ÊšœÞ
JØØÚ[™[Ž˜X™[ˆÚYHZ[ˆÛ]\ØÚ\È[XH°ïˆ™\™ÙYÜ™ØJK
šœÞ
JØÚ[™[Ž˜œš[™Ù[ˆÚYHZ[ˆ[XHZ[‹\ÈÚYH[ˆ™\™ÙYÜ™ˆÛ]\ØÚ™\ØÚ0éYÝˆ™\ØÚ™ZX™[ˆÚYHØXÚXÚÛÜ[H\ÈÙZ[™Ø\ÈÚYH\ÚÝ]Y\™[ˆÙ\ˆ™\˜™\ÜÙ\›ˆpí˜Ú[‹˜JKI‰ŠšœÞ
JXØÛ\ÜÓ˜[YN˜š[X\žHÛX[™YŽ˜ÛYZ[™KÛ™]KÜÛ]ZØÚ[™[Ž˜Û]\ØÚ\È[XH\œÝ[[˜JW_JK
šœÞ
J\ËØ\™XN˜Û]ZØ˜[Y\ÎšKœ›ÛNœßJW_JW_J_Y[˜Ý[ÛˆÛJ
^Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[Û˜˜\šXK[X™[YžHŽ˜[X\™Ú\ØÚKXY\™Ù\œØÚYZXY[™ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜ÙXÝ[Û‹ZXY[™ØÚ[™[ŽŠšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜S‘TÔT“SQS•0­ÈVT“‘HS‘“Ô“PUSÓ‘S˜JK
šœÞ
J˜ÚY˜[X\™Ú\ØÚKXY\™Ù\œØÚYZXY[™ØÚ[™[Ž˜[Y[ˆ]\È\ˆ[X\™Ú\ØÚ[ˆ°ï™Ù\œØÚYJW_J_JK
šœÞ
JØÚ[™[Ž˜YH[X\™Ú\ØÚH°ï™Ù\œØÚY\Ý\È[™\Ü\›[Y[ˆY\ˆš[™[ˆÚYHZÝY[HÛ]\ØÚH[Y[ˆÛÝÚYH[°éÙH[™\›[Y[\š\ØÚHÚÝ[Y[Kˆ°ïˆ[œÙ\™H]›Ü›HÝZ[ˆ[Y[ˆZ]™^YÈH™\™ÙYÜ™ˆ[HZ][[šÝ˜JK
šœÞ
JØÚ[™[Ž˜YH™\›[šÝ[ˆ^\›™[ˆ0ç™\œÚXÚ[ˆ™]™Y™™[ˆØ[žˆ[X\™È[™Ú[™šXÚ]Yˆ™\™ÙYÜ™ˆÙYš[\˜JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜]Û‹\›ÝØÚ[™[Ž–ÊšœÞ
JXØÛ\ÜÓ˜[YN˜Ý][™HÛX[™YŽ˜Î‹ËÝÝÝËš[X\™Ú\ØÚKXY\™Ù\œØÚY™KØZÝY[\ËÛ˜XÚšXÚ[˜\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ZÝY[H[Y[ˆ\ˆ[X\™Ú\ØÚ[ˆ°ï™Ù\œØÚYJK
šœÞ
JXØÛ\ÜÓ˜[YN˜Ý][™HÛX[™YŽ˜Î‹ËÝÝÝËš[X\™Ú\ØÚKXY\™Ù\œØÚY™KÜ™XÚ\˜ÚKZ[™›ËÜ\›[Y[Ù][˜˜[šØ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜[°éÙKXÚÜØXÚ[ˆ[™›ÝÚÛÛH™XÚ\˜ÚY\™[˜JW_JW_J_]˜\ˆÛOXŒ‹LLKLŒXÛOVÞÚY˜ÙZ[œÝÝY\™YÚÙZ][˜X™[˜Ù\ØÚXÚH	ˆÙZ[œÝðï™YÚÙZ][˜ÚÜ˜Ù\ØÚXÚXKÚY˜˜]\˜X™[˜˜]\‹\šÜÈ	ˆ]\Ù›YÜÞšY[XÚÜ˜˜]\˜KÚY˜[™ØY[™ÙXX™[˜ÝY[™ðé™ÙH	ˆ™\ÝXÚÝ›ÜœØÚ0éÙXÚÜ˜[™ðé™ÙXKÚY˜Ý[\˜X™[˜™\˜[œÝ[[™Ù[‹Ý[\ˆ	ˆ°ï[™Ù[˜ÚÜ˜Ý[\˜KÚY˜[\šÝ[™X™[˜Ý[Ë[œÚ[Û™[ˆ	ˆ0ç™\›˜XÚ[™Ù[˜ÚÜ˜0ç™\›˜XÚ[˜KÚY˜Ø\Ý›Û›ÛZYXX™[˜Ø\Ý›Û›ÛZYKØY°ê\È	ˆZ[šÙZ˜ÚÜ˜\ÜÙ[ˆ	ˆš[šÙ[˜KÚY˜˜YX™[˜˜Y˜Z™[‹Ø[™\›ˆ	ˆ[Øš[]0éÚÜ˜˜Y	ˆØ[™\›˜KÚY˜Ø[\[™ØX™[˜ÛÚ›[Øš[KØ[\[™È	ˆÝ[0é™XÚÜ˜Ø[\[™ØKÚY˜Ø\ÜÙ\˜X™[˜ØÚY™™˜ZÜÜ›ÛÝH	ˆØ\ÜÙ\œÜÜÚÜ˜Ø\ÜÙ\˜KÚY˜˜[Z[YXX™[˜˜[Z[Y[ˆ	ˆ]\Ù›0ïÙHZ]Ú[™\›˜ÚÜ˜˜[Z[Y[˜KÚY˜[Øš[]Y]X™[˜[œ™Z\ÙK™\šÙZˆ	ˆ˜Zž™]YÝ™\›ZY][™ØÚÜ˜[œ™Z\ÙXKÚY˜˜ZÝ\ØÚX™[˜˜ZÝ\ØÚH[™›Ü›X][Û™[ˆ	ˆÝ\š\ÝR[™›Ü›X][Û˜ÚÜ˜˜ZÝ\ØÚ\ØWKOVÞÚY˜šY\‹[X\œØÚ[™KZYÚYÚ]N˜šY\‹H[™X\œØÚ[™X][RYÎ–ØšY\‹[X\œØÚ[™KZYÚYÚKÚ[™˜\™XXKÚY˜›Û[œÜYZÙ\˜]N˜›Û[œÜYZÙ\ˆ°éš]\ÈZ]\ˆ[›[™ØÚY][RYÎ–Ø›Û[œÜYZÙ\˜KÚ[™˜Ú[KÚY˜Ý\›Ø\X]N˜[X\™Ù\ˆÝ\›Ø\X][RYÎ–ØÝ\›Ø\XKÚ[™˜Ú[KÚY˜›Ø™\™Ù\‹[šYY\[™Ø]N˜›Ø™\™Ù\ˆšYY\[™ÈZ]›Ø™\™Ù\ˆ0ï™[˜][RYÎ–Ø›Ø™\™Ù\‹[šYY\[™ØY[™[š]\ØKÚ[™˜\™XXKÚY˜šYXÚÚ]\Ø]N˜œ™Z[XÚ]\Ù][HšYXÚÈ]\Ø][RYÎ–ØšYXÚÚ]\ØKÚ[™˜Ú[KÚY˜ØÚÜÜØ]N˜™\™ÙYÜ™™\ˆØÚÜÜØ][RYÎ–ØØÚÜÜØKÚ[™˜Ú[KÚY˜Ý™KY[™X]N˜Ø\ÜÙ\™\›X›š\È]YˆÝ™KQ[™KÛÜÙKQ[™H[™š[X][RYÎ–ØÝ™KY[™XÛÜÙKY[™XØ\ÜÙ\œ\šØKÚ[™˜Ø]\˜KÚY˜ÙY[šÜÝY]X]N˜Ö‹QÙY[šÜÝ0éH™]Y[™Ø[[YX][RYÎ–ØÙY[šÜÝY]XKÚ[™˜Ú[KÚY˜[ÝY]N˜\ÝÜš\ØÚ\ˆÝYÙ\›ˆ™\™ÙYÜ™œØ][RYÎ–Ø[ÝY\ÜÙZ]\ØÚ[™]YZXKÚ[™˜\™XXKÚY˜Ù‹YYÙÙ\œØ]N˜ÙˆYÙÙ\œÈ[ˆ\ˆÚX][RYÎ–ØÙ‹YYÙÙ\œØKÚ[™˜Ú[WK[OVÞÚY˜YÚYÚØX™[˜LYÚYÚØKÚY˜ÚYÚØX™[˜ÙZ[œÝðï™YÚÙZ][˜KÚY˜›Ý]\ØX™[˜˜YÝ\™[ˆ[™˜YÙYÙXKÚY˜šZÙK\Ý^\ØX™[˜˜Zœ˜Yœ™][™XÚH[\šðï™XKÚY˜ÜXÚX[\Ý^\ØX™[˜™\ÛÛ™\™H0ç™\›˜XÚ[™Ù[˜KÚY˜XØÛÛ[[Ù][Û˜X™[˜Ý[È[™[œÚ[Û™[˜KÚY˜Ý[\™XX™[˜Ý[\›ÜXKÚY˜]™[ØX™[˜™\˜[œÝ[[™ÜÛÜXKÚY˜Z\Ý\™XX™[˜œ™Z^™Z][™˜[Z[YXKÚY˜Ø]\˜X™[˜ÜÜ›ÛÝ0é™[ˆ[™Ø\ÜÙ\œÜÜKÚY˜˜]\™XX™[˜˜]\‹H[™ØÚ]™ÙXšY]XKÚY˜Ü™Y[˜X™[˜\šÜËÙZ0í›™H[™œšYY0í™™XKÚY˜X\šÙ]ØX™[˜ÛØÚ[›péšÝH[™Z[šØ]YœØ™\™ZXÚXKÚY˜˜Z[ØX™[˜[Y[ÙYÙH[™Zœ˜YXWKOJK
OO˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÉÙ_KÉÝXÛOJK
OOŠÝ\›™KX™[JK	JK‹‹KKËËÏ^ßJOOŠÚY™K˜[YNØ]YÛÜžN›‹\ØÜš\[ÛŽœ‹XÙNšKY™\ÜÎ˜KÛÝ\˜ÙN“ÛJËÊKÚXÚÙYÛŽÛKÝ]\Î˜]Y[H[HŒKŒLKŒŒˆÙ\°ï‹‹˜ßJKÛOJK‹ŠOOŠÛ]›‹ÛŽœ‹ÛÛÜ™[˜]TÛÝ\˜ÙN‘JK
_JK[OVÉ
ØÚÜÜØ™\™ÙYÜ™™\ˆØÚÜÜÈ	ˆ™\™ÙYÜ™ˆ]\Ù][XÙZ[œÝÝY\™YÚÙZ][˜\ÈØÚÜÜÈ™Z\˜™\™Ý\È™YÚ[Û˜[]\Ù][H\ˆÙ\ØÚXÚH\È™^š\šÜÈ[™\ˆšY\›[™Kˆ°ïˆ]\ÜÝ[[™Ù[‹Z[š]ZÝY[H0å™™›[™ÜÞ™Z][ˆ[™[ˆYØ[™Èš]HYH]\Ù][\Û[™ØÚY°ï™[‹˜™\™ÙYÜ™˜™\™ÙYÜ™™\ˆØÚðçÜÝ˜pçÙHŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™™\‹[]\Ù][\Û[™ØÚY™KÜÙ\šXÙKÜ™Z\ÙK^™Z][˜™\™ÙYÜ™™\ˆ]\Ù][\Û[™ØÚYË‹‹šÛJ™[][Û˜ŒŒLÍMØLËMMLËLŒŒLŒÌÊKœ™YN˜ØÚÜÜÝ[Y™[[™]pçÙ[˜[œÚXÚœ™ZHYðé™ÛXÚÈ]\Ù][HÛÜÝ[œ›XÚYË˜JK	
ØÚÜÜÜ\šØØÚÜÜÜ\šÈ™\™ÙYÜ™˜ÙZ[œÝÝY\™YÚÙZ][˜0å™™™[XÚHÜ°ï˜[›YÙH[HØÚÜÜËˆ\ˆ\šÈZYÛ™]ÚXÚ°ïˆZ[™[ˆÜ^šY\™Ø[™ÎÈ0å™™›[™Ù[ˆZ[ž™[™\ˆZ[œšXÚ[™Ù[ˆ[™™\˜[œÝ[[™Ù[ˆÚ[™Ù\\˜]H°ï™[‹˜™\™ÙYÜ™˜ØÚÜÜÙØ\[‹ŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÝ[\ÛÛœÝY˜]\ÜÙ[˜™\™ÙYÜ™‹UÝ\š\Û]\ØÙœ™YN˜0å™™™[XÚ\ˆ\šÎÈÙZ[™HZ[š]Ø[™ØX™K˜JK	
Ý\]šXÝˆ]šH[™][XÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚHÚ\˜ÚH[H™[[Kˆ™\ÚXÚYÝ[™ÜÛpí™ÛXÚÙZ][ˆšXÚ[ˆÚXÚ˜XÚÛÝ\ÙY[œÝ[ˆ[™[HZÝY[[ˆ™\ÝXÚØ[™ÙX›Ý\ˆÚ\˜Ú[™Ù[YZ[™K˜™\™ÙYÜ™˜™\™ÙYÜ™™\ˆØÚðçÜÝ˜pçÙKŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÚ\ÝÜš\ØÚK\ÙZ[œÝÝY\™YÚÙZ][˜™\™ÙYÜ™‹UÝ\š\Û]\Ø
K	
[ÝY\ÝÜš\ØÚ\ˆÝYÙ\›‹ØXÚÙ[Üˆ	ˆ[HÛÝ[œÝ˜pçÙXÙZ[œÝÝY\™YÚÙZ][˜˜XÚÙ\šËH[™°ï™Ù\š0é\Ù\‹Z[šØ]YœÜ\ÜØYÙ[ˆ[™\ÝÜš\ØÚHÝ˜pçÙ[ž°ïÙH°éÙ[ˆ[ˆ[[ˆÜÚÙ\›‹ˆYH0é\Ù\ˆÙ\™[ˆ0ï™\ÚYYÙ[™[™\ÙZ]YÈÙ[][™Ú[™›Ûˆ]pçÙ[ˆH™\ÚXÚYÙ[‹˜™\™ÙYÜ™˜ØXÚÙ[ÜˆÈ[HÛÝ[œÝ˜pçÙKŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÚ\ÝÜš\ØÚK\ÙZ[œÝÝY\™YÚÙZ][˜™\™ÙYÜ™‹UÝ\š\Û]\ØÙœ™YN˜0å™™™[XÚ\ˆÝ˜pçÙ[œ˜][NÈY[°í™™›[™ÜÞ™Z][ˆÚ[™šXÚZ[\È[™Ø[™ÜË˜JK	
Ù\œ˜Z˜Ù\œ˜Z‹RY™[ˆ	ˆÝ\™\šÙ\œ˜\ÜÙ[˜ÙZ[œÝÝY\™YÚÙZ][˜Y™[˜™\™ZXÚ[™›ÛY[˜YH[HYØ[™È\ˆ™\™ÙYÜ™™\ˆ[ÝYˆY\ˆÝ\[ˆ]]Ý\š\Û]\Ü]Y[H™\œØÚYY[™H˜Z[ˆ[™\ˆ™\™ÙYÜ™™\ˆÜ^šY\™Ø[™Ë˜™\™ÙYÜ™˜Ù\œ˜ZœÝ˜pçÙKŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÙœ™Z^™Z]ZÝ]š]Y][˜™\™ÙYÜ™‹UÝ\š\Û]\ØÙœ™YN˜›ÛY[˜YH0í™™™[XÚYðé™ÛXÚÈØÚY™œÙ˜Z[ˆÛÜÝ[œ›XÚYË˜JK	
Ú[™]YZX™\™ÙYÜ™™\ˆÚ[™pïXÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚHpïH[H[Y™[\È[™Ø[™ÜËˆ[›™[˜™\ÚXÚYÝ[™Ù[ˆ[™\›Z[™Hš]H™ZH\ˆpï[™\™Z[šYÝ[™È™^šYZ[™ÜÝÙZ\ÙH™\™ÙYÜ™‹UÝ\š\Û]\È°ï™[‹˜™\™ÙYÜ™˜Úž\Ø[™\œÝ˜pçÙHL˜KŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÚ\ÝÜš\ØÚK\ÙZ[œÝÝY\™YÚÙZ][˜™\™ÙYÜ™‹UÝ\š\Û]\ØË‹‹šÛJØ^XŒÎMLLËLÌŒNLŒŒMLŒÍÍŠ_JK	
˜]]\Ø˜]]\È™\™ÙYÜ™ˆ	ˆš[[šY\[ÙZ[œÝÝY\™YÚÙZ][˜\ˆ™\™ZXÚZ]˜]]\È[™š[[ˆ\ÝZ[\ˆ›Ûˆ™\™ÙYÜ™‹UÝ\š\Û]\È[\›Ú[™[ˆ\ÝÜš\ØÚ[ˆÜšY[Y\[™Ëˆ[›™[žYØ[™È[™™\ÚXÚYÝ[™Ù[ˆÚ[™šXÚ]\ØÚ[YÙ\ÚXÚ\˜™\™ÙYÜ™˜Ù[Ü™™\ˆÝ˜pçÙHÎŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÚ\ÝÜš\ØÚK\ÙZ[œÝÝY\™YÚÙZ][˜™\™ÙYÜ™‹UÝ\š\Û]\Ø
K	
\ÜÙZ]\Ø\ÜÙKR]\ØÙZ[œÝÝY\™YÚÙZ][˜˜XÚÙ\šÚ]\È]\È\ˆ™Z][HMŒÌ[™ÙX\Ú]\È›Ú[›ˆYÛˆ\ÜÙ\Ëˆ[H]\È™Yš[™[ˆÚXÚ\È\ÜÙKR[œÝ]][™YHÝ\š\ÝR[™›Ü›X][ÛŽÈYHÝ\š\ÝR[™›Ü›X][Ûˆ\ÝšXÚÛZXÚ™Y]][™Z]œ™ZHYðé™ÛXÚ\ˆ]\Ø™\ÚXÚYÝ[™Ë˜™\™ÙYÜ™˜›Ú[›‹PYÛ‹R\ÜÙKT]ˆKŒLŽH[X\™ØÎ‹ËØ™\™ÙYÜ™‹™KÚÝ[\‹Û]\ÙY[‹Ú\ÜÙKZ]\Ø™\™ÙYÜ™ˆÈ\ÜÙKR]\ØË‹‹šÛJØ^XŒMÎMÍÍM˜LËLLÍËLŒŒLŠ_JK	
Ý\›Ø\X[X\™Ù\ˆÝ\›Ø\H	ˆ\Ý›Û›ÛZY\\šØÙZ[œÝÝY\™YÚÙZ][˜[šÛX[Ù\ØÚ0ï\È[œÙ[X›H\ˆ[š]™\œÚ]0é[X\™Ëˆ\ˆ\šÈ\Ý]][š]™\œÚ]0é0éÛXÚÙpí™™›™]È\ÝÜš\ØÚH[\ÚÛÜÝ\[ˆÚ[™[H˜ZY[ˆ\ˆ[™ÙZðï™YÝ[ˆ°ï[™Ù[ˆYðé™ÛXÚˆ˜]X\˜™Z][ˆðí››™[ˆ[ˆØ[\\Èš\È[™HŒˆ™YZ[°éÚYÙ[‹˜™\™ÙYÜ™˜ÛÚ™[˜™\™ÜÝÙYÈLL‹ŒLŽH[X\™ØÎ‹ËÝÝÝËœ\ÚZË[šKZ[X\™Ë™KÚËÜÝXœÚ]KKK[Ü[‹[ØœÙ\˜]ÜžKš[[š]™\œÚ]0é[X\™ØØ˜\œšY\Ž˜YH[\ÚÛÜÝ\[ˆÚ[™]][š]™\œÚ]0éšXÚ˜\œšY\™Yœ™ZK˜JK	
šYXÚÚ]\Øœ™Z[XÚ]\Ù][HšYXÚÈ]\ØÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚ\È˜]Y\›š]\ÈZ]]\ÜÝ[[™È\ˆÝ[\™Ù\ØÚXÚH\ˆšY\‹H[™X\œØÚ[™Kˆ0å™™›[™ÜÞ™Z][ˆÚ[™ØZ\ÛÛ˜[ÈZÝY[H™Z\ÙK\›Z[™H[™YØ[™È›Üˆ[H™\ÝXÚ]Yˆ\ˆ]\Ù][\ÜÙZ]H°ï™[‹˜Ý\œÛXÚØÝ\œÛXÚÙ\ˆZXÚŽŒLÎH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™™\‹[]\Ù][\Û[™ØÚY™KÜÙ\šXÙKÜ™Z\ÙK^™Z][˜™\™ÙYÜ™™\ˆ]\Ù][\Û[™ØÚYË‹‹šÛJØ^XMMŒLŒ˜LËNLÍLŒŒMLŠKØ]YÛÜžS[šÜÎ–Ø˜[Z[YXÝ[\˜Kœ™YN˜\ˆ]\Ù][\Ø™\ÝXÚ\ÝÛÜÝ[œ›XÚYÎÈ]pçÙ[˜™\™ZXÚH\ˆ[H˜ZY[ˆ\ˆ™]ÙZ[YÙ[ˆ0å™™›[™Ë˜JK	
šY\[˜\™Ù\‹[]YZXšY\[˜\™Ù\ˆpïXÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚHpïH[ˆÚ\˜ÚÙ\™\‹ˆ\ˆ™]™ZX™\ˆ™[›0å™™›[™ÜÝYÙH›Ûˆ™XœX\ˆš\È^™[X™\ˆ[™šY]]Ü\[™°ï[™Ù[ˆ˜XÚ\›Z[™\™Z[˜˜\[™È[ŽÈ]Z[È›Üš\ˆ°ï™[‹˜Ú\˜ÚÙ\™\˜Ú\˜ÚÙ\™\ˆpï[™[[HÍXKŒLÍÈ[X\™ØÎ‹ËÝÝÝËœšY\[˜\™Ù\‹[]YZK™KÚ[™^œØ™\ÚXÚYÝ[™ØšY\[˜\™Ù\ˆpïXÙœ™YN˜\ˆ™]™ZX™\ˆ™[›œ™ZY[ˆZ[š][ˆ0å™™›[™ÜÝYÙ[ŽÈÜ\[™°ï[™Ù[ˆÚ[™ÛÜÝ[œ›XÚYË˜JK	
Ú\˜Ú[‹]šY\›[™X\ÝÜš\ØÚHÜ™šÚ\˜Ú[ˆ\ˆšY\›[™XÙZ[œÝÝY\™YÚÙZ][˜YHÙ™š^šY[HšY\›0é™\ˆÚ\˜Ú[Ý\ˆ™\˜š[™]ÝˆÙ]™\š[šHHÚ\˜ÚÙ\™\‹Ýˆ›Ú[›š\ÈH™]Y[™Ø[[YKÝˆšXÛÛZHH[[™Ø[[YH[™Ýˆ›Ú[›š\ÈHÝ\œÛXÚËˆ[›™[˜™\ÚXÚYÝ[™Ù[ˆšXÚ[ˆÚXÚ˜XÚ\ˆ™]ÙZ[YÙ[ˆÙ[YZ[™K˜šY\›[™XÚ\˜ÚÙ\™\‹™]Y[™Ø[[YK[[™Ø[[YH[™Ý\œÛXÚØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[XÚÙ\œ›Ý][˜™\™ÙYÜ™‹UÝ\š\Û]\Ø
K	
›Û[œÜYZÙ\˜›Û[œÜYZÙ\ˆ°éš]\È	ˆ[™ZXÚÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚ\ˆ]\Ù›YÜÛÜ[HðïXÚ[ˆ[Y™\‹ˆ°é™KØ\Ý›Û›ÛZYH[™™\ÝXÚÛpí™ÛXÚÙZ][ˆX™[ˆZYÙ[™H™]™ZX™\š[™›Ü›X][Û™[ŽÈYH[™°é˜™]šYXˆ›Üˆ[H™\ÝXÚ°ï™[‹˜Ú\˜ÚÙ\™\˜›Û[œÜYZÙ\‹R]\ZXÚMËŒLÍÈ[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÚ\ÝÜš\ØÚK\ÙZ[œÝÝY\™YÚÙZ][˜™\™ÙYÜ™‹UÝ\š\Û]\ØË‹‹šÛJØ^XÌMŽMNXLËŒÎNÌLKLŒNŒŽMÊKØ]YÛÜžS[šÜÎ–Ø˜]\˜˜YØ\ÜÙ\˜Ø\Ý›Û›ÛZYXKœ™YN˜ZXÚ[™0í™™™[XÚ\ˆ™\™ZXÚœ™ZHYðé™ÛXÚÈ°é°ï™\™˜Z[™Ø\Ý›Û›ÛZYHÛÜÝ[œ›XÚYË˜JK	
˜ZšÙ‹X[\ÝÜš\ØÚ\ˆ˜ZšÙˆ™\™ÙYÜ™‹™]Y\ˆÙYÈMÙZ[œÝÝY\™YÚÙZ][˜\È\ÝÜš\ØÚH˜ZšÙœÙÙX°éYHÚ\™[ˆ\ˆÝ\š\Û]\ðï™\œÚXÚ[È\š[[™\ÈÙX°éYH›ÛˆNˆ™\ØÚšYX™[‹ˆ\È\ÝšXÚZ][H]]YÙ[ˆËP˜ZšÙˆH™\ÙXÚÙ[ŽÈ[›™[žYØ[™ÈšXÚYÙ\ÚXÚ\˜™\™ÙYÜ™˜™]Y\ˆÙYÈMŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÚ\ÝÜš\ØÚK\ÙZ[œÝÝY\™YÚÙZ][˜™\™ÙYÜ™‹UÝ\š\Û]\Ø
K	
ÙY[šÜÝY]XÖ‹QÙY[šÜÝ0éH™]Y[™Ø[[YXÙZ[œÝÝY\™YÚÙZ][˜ZYÙ[œÝ0é™YÙ\ˆÙY[šËH[™š[[™ÜÛÜ]Yˆ[HÙ[0é™H\ÈZ[X[YÙ[ˆÛÛž™[˜][ÛœÛYÙ\œËˆYHÙY[šÜÝ0éHÚÝ[Y[Y\™\™›ÛÝ[™ËØ[™ÜØ\˜™Z][™YHÙ\ØÚXÚH\ÈÜ\ËˆÚYH\ÝÙZ[ˆœ™Z^™Z][™ÙX›Ýˆ]\ÜÝ[[™Ù[ˆÚ[™™ZHœ™ZY[HZ[š]Ùpí™™›™]È[™˜Z[™ZÝY[HYðé™ÛXÚÙZ]š]H\ˆÙY[šÜÝ0éH[™ZY[‹˜™]Y[™Ø[[YX™X[‹QÛYY\‹UÙYÈÍKŒLÎH[X\™ØÎ‹ËÝÝÝËšÞ‹YÙY[šÜÝY]K[™]Y[™Ø[[YK™KÜÙ\šXÙKØ[™˜ZØÖ‹QÙY[šÜÝ0éH™]Y[™Ø[[YXË‹‹šÛJØ^XŒLÌL˜LËÍÍËLŒŒÌŽM
Kœ™YN˜Z[š]œ™ZK˜Û™N˜ÙY[šÛÜJK	
›Ø™\™Ù\‹[šYY\[™Ø›Ø™\™Ù\ˆšYY\[™È	ˆ›Ø™\™Ù\ˆ0ï™[˜˜]\˜˜]\œØÚ]™ÙXšY]Z]0ï™[‹K[ÛÜ‹KÚY\Ù[‹H[™\œ˜\ÜÙ[›[™ØÚYˆš]H]YˆX\šÚY\[ˆÙYÙ[ˆ›ZX™[ˆ[™0íœXÚHØÚ]œ™YÙ[ˆ™XXÚ[‹ˆ\ˆ[X\™ËQÝZYH™\ØÚ™ZXšY\ˆ]\ÙÙ]ÚY\Ù[™H[™ÙYÙK˜Úœ°ïÙÙX›Ø™\™Ù\ˆ\È›Ø™\™Ù\ˆšYY\[™ËŒLÌÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÙœ™Z^™Z]Ø›Ø™\™Ù\‹YY[™[‹LÍMÍŒœ™ZYH[™[œÙ\ÝY[X\™ØØØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜Y[™ØY[™ÙXKœ™YN˜ÙXšY][™X\šÚY\HÙYÙHœ™ZHYðé™ÛXÚÈ°ï[™Ù[ˆðí››™[ˆÛÜÝ[œ›XÚYÈÙZ[‹˜JK	
Y[™[š]\Ø›Ø™\™Ù\ˆ0ï™[š]\Ø˜]\˜[™›Ü›X][ÛœÚ]\È\ˆÚÚKTØÚZYTÝY[™È\ˆ›Ø™\™Ù\ˆšYY\[™Ëˆ\ˆ]pçÙ[˜™\ÝXÚ[™YHÙpí™™›™][ˆ[™›Ü›X][ÛœÜ°é[YHÚ[™H[\œØÚZY[ŽÈ0å™™›[™ÜÝYÙH[™°ï[™Ù[ˆ]Yˆ\ˆ™]™ZX™\œÙZ]H°ï™[‹˜Úœ°ïÙÙX›Ø™\™Ù\ˆ\LŒLÌÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹Û˜]\œØÚ]‹ÜÝ\Z[™›ËX›Ø™\™ËLMÌŽLM•RÑPH[X\™ØË‹‹šÛJØ^XŽMÎMØLËLÍÌKLŒMŒMÌLNJKØ]YÛÜžS[šÜÎ–Ø˜[Z[YX[™ØY[™ÙXKœ™YN˜œ™ZYHÙYÙH[HØÚ]™ÙXšY]È0å™™›[™È\È[™›Ü›X][ÛœÚ]\Ù\È[™°ï[™Ù[ˆÙ\ÛÛ™\°ï™[‹˜JK	
Ú\˜ÚÙ\™\‹]ÚY\Ù[˜˜]\œØÚ]™ÙXšY]Ú\˜ÚÙ\™\ˆÚY\Ù[˜˜]\˜Ü›ðçÙ\È™]XÚÚY\Ù[‹TØÚ]™ÙXšY][ˆÚ\˜ÚÙ\™\‹ˆ™\ÝXÚ\ˆ]Yˆœ™ZYÙYÙX™[™[ˆÙYÙ[ŽÈÙ[œÚX›H›0éÚ[ˆšXÚ™]™][ˆ[™Y\™HšXÚÝ0íœ™[‹˜Ú\˜ÚÙ\™\˜Ú\˜ÚÙ\™\ˆÚY\Ù[‹ŒLÍÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÛ˜]\œØÚ]™ÙXšY]KZ[KX™^š\šËX™\™ÙYÜ™‹NL•RÑPH[X\™ØÙœ™YN˜0å™™™[XÚHÙYÙNÈØÚ]œ™YÙ[ˆ™XXÚ[‹˜JK	
œÞ™Ë^›Û[œÜYZÙ\˜˜]\œØÚ]™ÙXšY]›Û[œÜYZÙ\˜˜]\˜›Ü™ZXÚ›0éÚ[ˆ\ˆ[™HZ]™\ÛÛ™\œÈØÚ0ï™[œÝÙ\[ˆ™]XÚš[ÝÜ[‹ˆYH\œÝ[[™È[\šYZÙZ[™H][™ÈXœÙZ]Èœ™ZYÙYÙX™[™\ˆÙYÙK˜Ú\˜ÚÙ\™\˜›Û[œÜYZÙ\‹ŒLÍÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÛ˜]\œØÚ]™ÙXšY]KZ[KX™^š\šËX™\™ÙYÜ™‹NL•RÑPH[X\™ØÙœ™YN˜0å™™™[XÚHÙYÙNÈØÚ]œ™YÙ[ˆ™XXÚ[‹˜JK	
YK\™Z]˜]\œØÚ]™ÙXšY]YH™Z]˜]\˜šYY\›[ÛÜ™ÙXšY]Z]œXÚðé\›ˆ[™ØÚ[™›0éÚ[ˆ[H\Ø[[Y[™›\ÜÈ›ÛˆÛÜÙKH[™Ý™KQ[™KˆYH™Z0íœ™H™\ØÚ™ZXYðé™ÙH[™ÙYÙNÈ\Ø™YY[[™È\ÝZ[™Ù\ØÚ°éšÝ˜™Z]œ›ÛÚØ™Z]œ›ÛÚÙ\ˆÙ\Ý\™ZXÚÈ™Z]ØÚ]\ÙKŒLÍÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹Û˜]\œØÚ]‹Û˜]\œØÚ]™ÙXšY]KÙYK\™Z]LMÌÌL˜•RÑPH[X\™ØÙœ™YN˜ØÚ]™ÙXšY]È\ˆ[0éÜÚYÙHÙYÙH]™[‹˜JK	
Ý™KY[™XÝ™KQ[™X˜]\˜Ø\ÜÙ\›]Yˆ[™[™ØÚYÜ˜][H[ˆ[ˆšY\‹H[™X\œØÚ[™[‹ˆY™\ÙYÙKØÚY™™˜Z[™Ø\ÜÙ\œÜÜÙ\™[ˆÙ]™[›™\ØÚšYX™[ŽÈØ\ÜÙ\žYØ[™È\ÝšXÚ0ï™\˜[0í™™™[XÚ˜[\›píšHÈšY\‹H[™X\œØÚ[™XÝ™KQ[™K[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËØZÝ]‹Z[K][™X[K]Ø\ÜÙ\˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜YØ\ÜÙ\˜_JK	
ÛÜÙKY[™XÛÜÙKQ[™X˜]\˜™X™[˜\›H\ˆ[™H[ˆ[ˆšY\‹H[™X\œØÚ[™[‹ˆ[È˜]\‹H[™Ø\ÜÙ\œ˜][HÙYZYÛ™]È™Y˜Z˜˜\šÙZ][™Yðé™ÙHšXÚ[ˆÚXÚ˜XÚÙ]ðéÜÙ\‹][™È[™0íœXÚ[ˆ™YÙ[‹˜™Z]œ›ÛÚÈÈšY\‹H[™X\œØÚ[™XÛÜÙKQ[™K[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËØZÝ]‹Z[K][™X[K]Ø\ÜÙ\˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜YØ\ÜÙ\˜_JK	
Ø\ÜÙ\œ\šØØ\ÜÙ\œ\šÈÝ™KQ[™H	ˆ™YØ]\Ý™XÚÙH[\›píšX˜]\˜™YØ]\Ý™XÚÙH°ïˆY\‹H[™Ø[\ÜÜ[H[\›píš\ˆZXÚˆšXÚZ]Z[™[Hœ™ZHYðé™ÛXÚ[ˆ˜YYÙ]ðéÜÙ\ˆÛZXÚÙ]™[ŽÈÙ]ðé\™H[™][™ÜÜ™YÙ[ˆ™XXÚ[‹˜[\›píšX[\›píš\ˆZXÚÍ‹ŒLÍÈ[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËØZÝ]‹Z[K][™X[K]Ø\ÜÙ\˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–ØØ\ÜÙ\˜˜[Z[YX_JK	
ZXÚ˜][\ÙYXZXÚ˜][\ÙYX˜]\˜\šÛ[™ÜÙÙXšY][ˆ[ÛÜ™›Y]ˆYH[X\™Ù\ˆ™Z0íœ™HÙZ\Ý]YˆZ[™H™Z]ÙZ\ÙHÜ\œ[™È\È˜Y[œÈ[™YHZÝY[[ˆ™\ØÚ[\[™Ù[ˆ[‹ˆ›ÜˆZ[™[H˜YX™\ÝXÚ[ˆÙ™š^šY[[ˆÝ[™°ï™[‹˜[ÛÜ™›Y][ÛÜ™›Y]\ˆZXÚ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹ÝØ\ÜÙ\‹Ø˜YYÙ]ØY\ÜÙ\‹Ü™XÚÙÜ[™YÙKLMLÎLN•RÑPH[X\™ØØØ]YÛÜžS[šÜÎ–Ø˜[Z[YXØ\ÜÙ\˜Kœ™YN˜]pçÙ[˜™\™ZXÚNÈ˜YYœ™ZYØX™H\ÝØZ\ÛÛ‹H[™YÙXXš0é™ÚYË˜JK	
Ú[™ZXÚ\‹\ÙYXÚ[™ZXÚ\ˆÙYHÈÛÜØ][™\ˆÙYX˜]\˜˜YKH[™Ý\™œÙYH[ˆ[ˆšY\‹H[™X\œØÚ[™[‹ˆYH™Z0íœ™[ˆY[[ˆØZ\ÛÛ˜[H˜Y^™Z][ŽÈ\ÈÚXÙZ[™[ˆšXÚØÚÚ[[Y\˜™\™ZXÚ[™ÙZ[™H˜YX]YœÚXÚˆY™\šØ[[ˆðí››™[ˆXœ\YYˆÙ\™[‹˜Ú\˜ÚÙ\™\˜Ý™\Ù\™\ˆ]\ZXÚŒLÍÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹ÝØ\ÜÙ\‹Ø˜YYÙ]ØY\ÜÙ\‹ÚÚ[™ZXÚ\œÙYK]Ù\ÝLMÍ•RÑPH[X\™ØØØ]YÛÜžS[šÜÎ–Ø˜[Z[YXØ\ÜÙ\˜Ø[\[™ØKœ™YN˜0å™™™[XÚH˜Y\Ý[[ˆ[›™\š[ˆ\ˆ›Ûˆ\ˆ™Z0íœ™H]\ÙÙ]ÚY\Ù[™[ˆØZ\ÛÛŽÈ[ÙZ\ÙH™XXÚ[‹˜JK	
[\›[ÙZ\‹\ÙYX[\›píš\ˆÙYX˜]\˜˜YKH[™œ™Z^™Z]™\™ZXÚ[ˆ™]X[\›píšKˆYHÝY™[›Ý˜[™[™™Z]ÙZ\ÙH˜YX]YœÚXÚ[ˆ[ˆÛÛ[Y\™™\šY[ˆ[™[ˆÛØÚ[™[™[ŽÈZÝY[HØZ\ÛÛ˜[™ØX™[ˆ°ï™[‹˜™]X[\›píšX™[^RYTš[™ËŒLÍH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËØZÝ]‹Z[K][™X[K]Ø\ÜÙ\‹Ø˜Y\ÙY[‹Xš[KX˜Y™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜[Z[YXKœ™YN˜0å™™™[XÚ\ˆ]pçÙ[˜™\™ZXÚÈ˜YX™]šYXˆØZ\ÛÛ˜Xš0é™ÚYË˜JK	
›Ü™ÚÜœÝ\˜›Ü™ÚÜœÝ\ˆ[›[™ØÚY˜]\˜ØÚ]™ÙXšY][ˆ\ˆYX™YZ[™›\ÜÝ[ˆ[\™[™Kˆ°ïˆ˜]\˜™[Ø˜XÚ[™È\ˆ]\ÙÙ]ÚY\Ù[™HÙYÙH[™Yðé™ÙH™[]™[‹˜[[™Ø[[YX›Ü™ÚÜœÝŒLÎH[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÛ˜]\œØÚ]™ÙXšY]KZ[KX™^š\šËX™\™ÙYÜ™‹NL•RÑPH[X\™ØÙœ™YN˜ØÚ]™ÙXšY]ÈÙYÙKH[™™]™][™ÜÜ™YÙ[ˆ™XXÚ[‹˜JK	
Ü^šY\™Ø[™Ø™\™ÙYÜ™™\ˆÜ^šY\™Ø[™Ø[™ØY[™ÙXÙ™š^šY[™\ØÚšYX™[™\ˆ[™Ø[™ÈZ]LˆÝ][Û™[ˆ[™]ØHÈÛNˆ›ÛHÙ\œ˜Zˆ0ï™\ˆÛÜ›Ø\ÜÙ\›pïKÝˆ]šH[™][KØÚÜÜÈ[™ØÚÜÜÙØ\[ˆš\È\ˆÚ[™pïNÈ°ïÚÝÙYÈ[[™È\ˆš[H[H˜ZšÙ‹ˆYHÙYÙ°ï[™È\ˆÝ\š\Û]\Ü]Y[H\ÝXpçÙÙX›XÚ˜™\™ÙYÜ™˜Ý\ˆÙ\œ˜Zˆ[H˜ZšÙˆ™\™ÙYÜ™˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÙœ™Z^™Z]ZÝ]š]Y][‹Ü[™ØY[™ÙK]Ø[™\›˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜Ø\Ý›Û›ÛZYXKœ™YN˜]pçÙ[œ›Ý]Hœ™ZNÈ]\Ù][\ÙZ[š]HÙ\\˜]˜JK	
[XÚÙ\‹\›Ý][˜°ï™ˆ™\™ÙYÜ™™\ˆ[XÚÙ\”›Ý][˜˜YYHÙ™š^šY[H˜YØ\H™\ØÚ™ZX°ï™ˆ›Ý][‹\[\ˆ›ÜÙ[Ý\ˆ
ØKˆHÛJKÝ\ˆ[\ˆ[ˆZXÚ[ˆ
ØKˆLÈÛJK[šÚYZÙ\‹UÝ\ˆ
ØKˆÌÛJKšY\›0é™\ˆÚ\˜Ú[Ý\ˆ
ØKˆŽÛJH[™›Ø™\™Ù\ˆ0ï™[œ›Ý]Kˆ›Ý][™]Z[È[™Ø\[›X]\šX[™Z[H[˜šY]\ˆ°ï™[‹˜™^š\šÈ™\™ÙYÜ™˜™\œØÚYY[™HÝ\[šÝXÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[XÚÙ\œ›Ý][˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXKœ™YN˜›Ý][š[™›Èœ™ZNÈpí™ÛXÚHÛÜÝ[ˆ[\ÙYÜÈÙ\\˜]˜JK	
›ÜÙ[Ý\˜›Ý]HH8 $È˜][ZYH›ÜÙ[Ý\˜˜Y]ØHHÛH›ÛHËP˜ZšÙˆš[Ù\™\‹S[ÛÜ™›Y]0ï™\ˆ][˜™\™Ù\ˆØÚ]\ÙKÝ™KQ[™K™YØ]\Ý™XÚÙH[\›píšH[™ÛÜÙKQ[™H[ˆ›[Y[™™[\›ˆ[™›ÜÙ[™ðé™\™ZY[ˆ›Ü˜™ZNÈ0ï™\ˆ[ˆX\œØÚ˜Z™[[H[H˜ZšÙˆ™\™ÙYÜ™‹ˆYHÙ™š^šY[H˜YØ\H\Ý°ïˆ[ˆ^ZÝ[ˆ™\›]YˆXpçÙÙX›XÚ˜š[Ù\™\‹S[ÛÜ™›Y]ÈšY\‹H[™X\œØÚ[™XÝ\ˆËP˜ZšÙˆš[Ù\™\‹S[ÛÜ™›Y]0­ÈšY[ˆ˜ZšÙˆ™\™ÙYÜ™˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[XÚÙ\œ›Ý][˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXK›Ý]S[X™\ŽŒK›Ý]S[™ÝÛNŒ_JK	
›Ø™\™Ë\[™ÙYÙXšY\ˆX\šÚY\HÙYÙH\˜ÚYH›Ø™\™Ù\ˆšYY\[™Ø[™ØY[™ÙX0ï™[ÙYË[ÛÜÙYËÚY\Ù[ÙYÈ[™\œ˜\ÜÙ[ÙYÈÚ[™X\šÚY\H›Ý][‹ˆ™\™ÙYÜ™‹UÝ\š\Û]\È™[›™H˜XÚ[™ÙYÈ]ØHø $ÍHÛKˆš]HØÚ]™ÙXšY]Ü™YÙ[ˆZ[š[[‹˜Úœ°ïÙÙXÝ\[H›Ø™\™Ù\ˆ0ï™[š]\ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹Û˜]\œØÚ]‹ÜÝ\Z[™›ËX›Ø™\™ËLMÌŽLM•RÑPH[X\™ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXKœ™YN˜ÛÜÝ[›ÜÈ]Yˆ]\ÙÙ]ÚY\Ù[™[ˆÙYÙ[‹˜Ý\[Y[[\ØÜš\[ÛŽ˜YHðå”Q˜[›0é\ˆ™[›™[ˆ[HZ[ž™[™[Žˆ0ï™[ÙYÈËˆÛH
ØKˆKHÝ[™[ŠK[ÛÜÙYÈ‹ÈÛH
ØKˆHÝ[™JK\œ˜\ÜÙ[ÙYÈËÈÛH
ØKˆKHÝ[™[ŠH[™ÚY\Ù[ÙYÈˆÛH
ØKˆˆÝ[™[ŠKˆ™Z[H[ÛÜÙYÈ\ÝYH[[Z][™È]\ÙÙ]ÚY\Ù[ŽÈØˆYH0é™Ù[˜[™ØX™H°ïˆYH[[Z][™ÈÚ[\ÝšXÚ™\Ý0éYÝ˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÛÚÚK\ØÚZY\ÝY[™Ë™KØ\ÜÙ]ËÓÔËÛYYXKÔ‹ËKÙÛÙ\Ñ›Y\—ÑÛ™[ÙY×Ñš[˜[œ˜X™[˜ðå”8 $È0ï™[ÙYÈ
ÜšYÚ[˜[˜[›]
XKÝ\›˜Î‹ËÛÚÚK\ØÚZY\ÝY[™Ë™KØ\ÜÙ]ËÓÔËÛYYXKÔ‹ËKÙÛÙ\Ñ›Y\—Ó[ÛÜÙY×Ý[\Ü—Ü—Ñš[˜[œ˜X™[˜ðå”8 $È[ÛÜÙYÈZ]Ùpé™\\ˆÙYÙ°ï[™È
ÜšYÚ[˜[˜[›]
XKÝ\›˜Î‹ËÛÚÚK\ØÚZY\ÝY[™Ë™KØ\ÜÙ]ËÓÔËÛYYXKÔ‹ËKÙÛÙ\Ñ›Y\—Õ\˜\ÜÙ[ÙY×Ñš[˜[œ˜X™[˜ðå”8 $È\œ˜\ÜÙ[ÙYÈ
ÜšYÚ[˜[˜[›]
XKÝ\›˜Î‹ËÛÚÚK\ØÚZY\ÝY[™Ë™KØ\ÜÙ]ËÓÔËÛYYXKÔ‹ËKÙÛÙ\Ñ›Y\—ÕÚY\Ù[ÙY×Ñš[˜[œ˜X™[˜ðå”8 $ÈÚY\Ù[ÙYÈ
ÜšYÚ[˜[˜[›]
XW_JK	
Ú\˜Ú[Ý\˜šY\›0é™\ˆÚ\˜Ú[Ý\˜˜Y]ØHŽÛH[™ÙH[™Ý\ˆX‹Øš\È˜ZšÙˆ™\™ÙYÜ™ˆ\˜ÚšY\ˆÜ™šÚ\˜Ú[‹ˆYH˜YÙYÙY°ï[™È[™ZYÛ[™Èš]H\ˆÙ™š^šY[[ˆØ\H[™ZY[ŽÈÙZ[™HY[šY[œ›Ý]K˜™\™ÙYÜ™ˆÈšY\›[™XÝ\[™[™Nˆ˜ZšÙˆ™\™ÙYÜ™˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[XÚÙ\œ›Ý][˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜K›Ý]S[X™\Ž›Ý]S[™ÝÛNŒŽJK	
][˜™\™Ë\›Ý]XÝ\ˆ[\ˆ[ˆZXÚ[˜˜Y]ØHLÈÛH[H][˜™\™È[™ÜY[›[™Z]ÜÚÙ\›ˆØÚÙ[Ù\™\ŽÈ]\ÙØ[™ÜÜ›Ý]H]]™\™ÙYÜ™‹UÝ\š\Û]\ËˆÙYÙH[™™\šÙZœÜÚ]X][Ûˆ›Üˆ\ˆ˜Z°ï™[‹˜][˜™\™ÈÈÜY[›[™ÈØÚÙ[Ù\™\˜›Ý]H]]˜YØ\XÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[XÚÙ\œ›Ý][˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜K›Ý]S[X™\ŽŒ‹›Ý]S[™ÝÛNŒLßJK	
[šÚYZÙ\Ý\˜Ü[›™[™H[šÚYZÙ\‹UÝ\˜˜Y]ØHÌÛH[[™È\È[™ZXÚÈ›ÛHÜY[›[™˜XÚ›Û[œÜYZÙ\ˆÙ\ˆ[YÙZÙZˆÝ™XÚÙ[™\›]Y‹]Y\[™Ù[ˆ[™ÚØ[HÜ\œ[™Ù[ˆ\ˆÙ™š^šY[[ˆÝ\™[šØ\H[™ZY[‹˜ÜY[›[™ÈÚ\˜ÚÙ\™\˜›Ý]H]]˜YØ\XÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[XÚÙ\œ›Ý][˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜Ø\ÜÙ\˜K›Ý]S[X™\ŽŒË›Ý]S[™ÝÛNŒÌJK	
X\œØÚ˜Z™[[XX\œØÚ˜Z™[[X˜YZ[X[YÙH˜Z˜\ÜÙKYH™\™ÙYÜ™‹UÝ\š\Û]\È[È0ï™\ÚYYÙ[™]]Ùœ™ZYH˜Y›Ý]H\›ÜšXˆYHÙ[˜]YHZYÛ[™ÈZ[ž™[™\ˆXœØÚš]H[™ZÝY[H[[Z][™Ù[ˆš]H°ï™[‹˜™^š\šÈ™\™ÙYÜ™˜™\™ÙYÜ™ˆš\È›Û[œÜYZÙ\˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXK˜Z[›Ý]RY˜X\œØÚ˜Z™[[X˜Z[›Ý]S[™ÝY]\œÎŒŒŽL›Ý]QÙ[ÛY]žTÝ]\Î˜LÈÔÓKUÙYÙH]\È™[][ÛˆÍNNKÝ[™\ˆ™[][ÛˆŒ‹ŒKŒŒˆ
™\œÚ[ÛˆŠK\Ø[[Y[ˆŒ‹HÛKˆ\ˆ]\Ù°ïÚÛXÚ[È][˜™\™Ù\‹ØÚÙ[Ù\™\‹Ú\˜ÚÙ\™\‹™]Y[™Ø[[Y\ˆÙ\ˆ[[™Ø[[Y\ˆX\œØÚ˜Z™[[H™[˜[›HÙYÙNÈÙZ[™H\™ðéž[ˆ™\˜š[™[™ÜÛ[šY[‹ˆY\ÙHØ\[›[šYH\ÝšXÚYH›ÛÝ0é™YÙH\ÝÜš\ØÚH˜ZœÝ™XÚÙNÈÚØ[H\œÝ[[™Ù[ˆ™[›™[ˆ[™ÌÈÛHÙ\Ø[]Ý™XÚÙK[X\™ÜÈÝ\š\Ý\ØÚH˜YØ\H]ØHHÛH°ïˆ[ˆ\™Ù\Ý[[ˆ[™\˜YÙYËPXœØÚš]˜Ý\[Y[[\ØÜš\[ÛŽ˜YHØ\H™ZXÚ™]]\ÜØÚYpçÛXÚYHLÈ[ˆ\ˆÜ[”Ý™Y]X\T˜Y›Ý]H8 '•šY\ˆ[™X\œØÚ[™x ']\Ù°ïÚÛXÚ[ÈX\œØÚ˜Z™[[H™[˜[›[ˆÙYÜÝ0ïÚÙH˜XÚˆ\™[ˆYÚ][H[šY[›0é™ÙH™]°éÝŒ‹HÛKˆYHÚØ[H[™ØX™H›Ûˆ]ØHÌÈÛH[™YHÝ\š\Ý\ØÚH[X\™Ù\ˆ[™ØX™H›Ûˆ]ØHHÛH™^šYZ[ˆÚXÚ]Yˆ[™\™HX™Ü™[ž[™Ù[ŽÈÙZ[™HY\Ù\ˆ0é™Ù[ˆÚ\™[ÈY[\ØÚZ]\ˆY\ˆÙ[Y\ÜÙ[™[ˆÙ[ÛY]šYH\™Ù\Ý[˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÎÍNNXX™[˜Ü[”Ý™Y]X\ˆ˜YÙYÈ8 '•šY\ˆ[™X\œØÚ[™x '™[][ÛˆÍNNH
™\œÚ[ÛˆŠXKÝ\›˜Î‹ËØ\K›Ü[œÝ™Y]X\›Ü™ËØ\KÌ‹Ü™[][Û‹ÎÍNNKÙ[X™[˜Ü[”Ý™Y]X\SÜšYÚ[˜[Ù[ÛY]šYH\ˆ™[][Ûˆ[™Z™\ˆÙYÙH
Ñ“
XKÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜ™\ÛÝ\˜ÙKØ›Ø‹ÌÍÌÌMÍÎLL™ÎNLŒ˜ÙY™LÙMŽLLYMÍŒÍYL‹ÌË\˜Y\›X›š\ËX™\™ÙYÜ™‹]šY\‹][™[X\œØÚ[™KY]Kœ˜X™[˜[X\™Îˆ˜Y\›X›š\È™\™ÙYÜ™‹šY\‹H[™X\œØÚ[™NÈX\œØÚ˜Z™[[KÑ[™\˜YÙYÈØKˆHÛXKÝ\›˜Î‹ËÝÝÝËšY\›[™[‹™KÜYÙ\ËÎË[X\œØÚ˜Z™[[XX™[˜šY\›[™[‹™Nˆ\ÝÜš\ØÚHÙ\Ø[]\œÝ[[™ÈZ]ØKˆÌÈÛXKÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÙœ™Z^™Z]ØZÝ]š]Y][‹Ù˜Zœ˜YÝ\™[‹Ù˜Zœ˜YÝ\‹Xš[Ù\™\‹X™\™ÙYÜ™‹]šY\›[™KXÚ]KLLÌMŽNX™[˜[X\™Ë™Nˆ˜Zœ˜YÝ\ˆZ]Ù]™[›\ˆ›ÛÙHšY\›0é™\ˆZ\Ù[˜˜Z™[[H[™™]Y[™Ø[[Y\‹ÒÚ\˜ÚÙ\™\ˆX\œØÚ˜Z™[[XW_JK	
›Ø™\™Ë\›Ý]X›Ý]HH8 $ÈÝ\ˆ›Ø™\™Ù\ˆ0ï™[˜˜Y˜]\š\ÝÜš\ØÚH›Ý]H\˜ÚYH›Ø™\™Ù\ˆšYY\[™ÈZ]0ï™[š]\ËÙYÙ[›YÜ]ˆ[™ÙZ]\™[ˆ0íœXÚ[ˆšY[[‹ˆ\ˆÙ[˜]YH™\›]Yˆ\Ý\ˆÙ™š^šY[[ˆ˜YØ\HH[™ZY[ŽÈZ[™H™\›0éÜÛXÚHX\ØÚ[™[›\Ø˜\™H[šY[™Ù[ÛY]šYH\Ý°ïˆY\ÙHÙXœÚ]HšXÚ™[YÝ˜Úœ°ïÙÙHÈ›Ø™\™ØÝ\[™™\›]Yˆ]]Ù™š^šY[\ˆ˜YØ\XÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[XÚÙ\œ›Ý][˜™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXK›Ý]S[X™\Ž_JK	
šY\‹[X\œØÚ[™KZYÚYÚšY\‹H[™X\œØÚ[™H8 $ÈÝ[\›[™ØÚY˜]\˜YHÜ›ðçÙ›0éÚYÙHÝ[\›[™ØÚY\Ý\˜Ú[™Ú\ØÚY[™Ø\[˜˜]KØ\ÜÙ\›0éY™K˜YÙYÙK˜XÚÙ\šÚ0é\Ù\‹pï[ˆ[™Ü™šÚ\˜Ú[ˆÙ\°éÝˆY\Ù\ˆZ[˜YÈ™\ØÚ™ZXZ[™[ˆ[™ØÚYÜ˜][H[™\š0é™]Ý\ÜÝÙZ[™[ˆ[šÝÙ[˜]Y[ˆØ\[›X\šÙ\‹˜šY\‹H[™X\œØÚ[™XšY\›[™H[™X\œØÚ[™K[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÌLZYÚYÚØ™\™ÙYÜ™‹™XÚYÚYÚˆLÝ\[Y[[\ØÜš\[ÛŽ˜Z[™\È\ˆLYÚYÚÈ›Ûˆ™\™ÙYÜ™‹™K˜Ù[ÛY]žU\N˜\™XXØ]YÛÜžS[šÜÎ–Ø˜Y[™ØY[™ÙXÙZ[œÝÝY\™YÚÙZ][˜KY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝšY\‹][™[X\œØÚ[™KÚ[™›Ü›X]]™\ËØX™[˜šY\‹H[™X\œØÚ[™XW_JK	
]™[ËXØ[[™\˜ZÝY[H™\˜[œÝ[[™Ù[ˆ[ˆ™\™ÙYÜ™˜Ý[\˜\ˆ›Üš[™[™H™\˜[œÝ[[™ÜÚØ[[™\ˆ›Ûˆ™\™ÙYÜ™ˆÙ[YZ[œØ[H›ZXYHÙ[YZ[œØ[YH0ç™\œÚXÚˆ\ˆÚ\™Y\ˆ™\›[šÝÝ]\˜ÚZ[™HÙZ]H\›Z[›\ÝH\^šY\˜™^š\šÈ™\™ÙYÜ™˜™\œØÚYY[™HÜXÎ‹ËÛX\šØ™\™ÙYÜ™‹™Ú]X‹š[ËØ™\™ÙYÜ™‹YÙ[YZ[œØ[KÈÝ™\˜[œÝ[[™Ù[˜™\™ÙYÜ™ˆÙ[YZ[œØ[XÚ™YŽ˜Ý™\˜[œÝ[[™Ù[˜Ý]\Î˜[\›™H™\šÛ°ï[™È[H™\ÝZ[™[ˆØ[[™\˜Ø]YÛÜžS[šÜÎ–Ø˜ZÝ\ØÚ_JK	
ÛÙ\˜™\š]\Øðíœ˜™\’]\È	ˆXÚØ\šÕX]\˜Ý[\˜Ù™™[™\ˆ™Y™œ[šÝ[™™\˜[œÝ[[™ÜÛÜZ]Ý[\‹Kš[[™ÜËH[™™YÙYÛ[™ÜØ[™ÙX›Ý[‹ˆ\ˆØ[[™\ˆ[™YH[ÙZ\ÙHH˜\œšY\™Yœ™ZY[HYØ[™ÈÚ[™]Yˆ\ˆ™]™ZX™\œÙZ]HZÝY[Z[œÙZ˜\‹˜™\™ÙYÜ™˜ÛšYHKŒLŽH[X\™ØÎ‹ËÚÛÙ\˜™\‹\ÝY[™Ë™KÙYK\ÝY[™ËÚÛÙ\˜™\š]\ËØðíœ˜™\‹TÝY[™ØË‹‹šÛJØ^XLLÍÌÌMXLËÌMLËLŒŒÌÊKØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜ZÝ\ØÚ_JK	
ÛXÓHÝ[\ž™[[XÝ[\˜Ý[\ž™[[HZ]ÙXÚÙ[™[H›ÙÜ˜[[KÝ\œÙ[ˆ[™™\˜[œÝ[[™Ù[‹ˆZ[ž™[\›Z[™H[™Z[›\ÜØ™Y[™Ý[™Ù[ˆÝZ[ˆ[HZÝY[[ˆ™\˜[œÝ[[™ÜÜ›ÙÜ˜[[K˜Úœ°ïÙÙXÚœ°ïÙÙ\ˆ[™Ý˜pçÙHŒLÌH[X\™ØÎ‹ËÛÛKZ™KØÓHÝ[\ž™[[XØØ]YÛÜžS[šÜÎ–Ø˜[Z[YX_JK	
™\™Ë[]\Ù][\Û[™ØÚY™\™ÙYÜ™™\ˆ]\Ù][\Û[™ØÚYÝ[\˜ZÝY[H]\ÜÝ[[™Ù[‹°ï[™Ù[‹™\˜[œÝ[[™Ù[ˆ[™ØZ\ÛÛ˜[H[™ÙX›ÝH°ïˆ™\™ÙYÜ™ˆ]\Ù][H[™šYXÚÈ]\ËˆÙZ[™H\›Z[™HÙ\™[ˆ[˜Xš0é™ÚYÈ›ÛHÙ™š^šY[[ˆØ[[™\ˆ›ÜÙ\ØÚšYX™[‹˜™\™ÙYÜ™ˆÈÝ\œÛXÚØØÚÜÜÜÝ˜pçÙHžËˆÝ\œÛXÚÙ\ˆZXÚŽÎ‹ËÝÝÝË˜™\™ÙYÜ™™\‹[]\Ù][\Û[™ØÚY™KØ™\™ÙYÜ™™\ˆ]\Ù][\Û[™ØÚYØØ]YÛÜžS[šÜÎ–Ø˜[Z[YXÙZ[œÝÝY\™YÚÙZ][˜KÝ\[Y[[\ØÜš\[ÛŽ˜YHÙ™š^šY[H›ÙÜ˜[[\ÙZ]H°ï]pçÙ\™[HYH™ZZH\ˆ™\™ÙYÜ™™\ˆØÚÜÜÚÛÛž™\H]Y‹ˆÛÛšÜ™]H\›Z[™H[™XÚÙ][™›Ü›X][Û™[ˆš]HÜZÝY[°ï™[‹˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË˜™\™ÙYÜ™™\‹[]\Ù][\Û[™ØÚY™KÜ›ÙÜ˜[[KÚÛÛž™\XX™[˜™\™ÙYÜ™™\ˆ]\Ù][\Û[™ØÚY8 $ÈÛÛž™\H[™ØÚÜÜÚÛÛž™\XW_JK	
Ý\›Ø\KYYZ[™Ø0å™™™[XÚH°ï[™Ù[ˆ[ˆ\ˆ[X\™Ù\ˆÝ\›Ø\XÝ[\˜YH[š]™\œÚ]0é[X\™È™[›0í™™™[XÚH°ï[™Ù[ˆÛÛ›YÜÈ[HMZ‹]ØHLZ[][‹Z]XÚÙ]™Z\È[™[\œËKÐ˜\œšY\™Z[ÙZ\Ù[‹ˆ›Üˆ[H™\ÝXÚZÝY[H\›Z[™H[™˜]X\˜™Z][ˆ°ï™[‹˜™\™ÙYÜ™˜™Y™œ[šÝÛÛ›™[˜˜]KÛÚ™[˜™\™ÜÝÙYÈLL˜Î‹ËÝÝÝËœ\ÚZË[šKZ[X\™Ë™KÚËÜÝXœÚ]KKK[Ü[‹[ØœÙ\˜]ÜžKÙYZ[™Ù[‹[YZ‹š[[š]™\œÚ]0é[X\™ØØØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜˜[Z[YX_JK	
šYXÚËYYZ[™Ù[˜°ï[™Ù[ˆ[™˜[Z[Y[˜[™ÙX›ÝH[HšYXÚÈ]\ØÝ[\˜\È]\Ù][Hðï™YÝ™YÙ[pé0çÚYÙH[™ðé™ÙH[™[Û˜]XÚHÚ[™\œ›ÙÜ˜[[YH[‹ˆ\›Z[™H[™[›Y[[™ÈÙXÚÙ[ŽÈ›Üˆ[H™\ÝXÚYH]\Ù][\ÜÙZ]H]YœY™[‹˜Ý\œÛXÚØÝ\œÛXÚÙ\ˆZXÚŽŒLÎH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™™\‹[]\Ù][\Û[™ØÚY™KÜÙ\šXÙKÙYZ[™Ù[˜™\™ÙYÜ™™\ˆ]\Ù][\Û[™ØÚYØØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜˜[Z[YX_JK	
]YZ[‹YYZ[™Ù[˜°ï[™Ù[ˆ[ˆ\ˆšY\[˜\™Ù\ˆpïXÝ[\˜°ï[™Ù[ˆ\˜ÚYHpïHðí››™[ˆ]]™]™ZX™\ˆ˜XÚ\›Z[™\™Z[˜˜\[™ÈÙXXÚÙ\™[‹ˆ0å™™›[™ËÛÜÝ[ˆ[™Ü\[šÛÛ™][Û™[ˆ›Ü˜Xˆ\™ZÝ\™œ˜YÙ[‹˜Ú\˜ÚÙ\™\˜Ú\˜ÚÙ\™\ˆpï[™[[HÍXKŒLÍÈ[X\™ØÎ‹ËÝÝÝËœšY\[˜\™Ù\‹[]YZK™KÚ[™^œØ™\ÚXÚYÝ[™ØšY\[˜\™Ù\ˆpïXØØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜˜[Z[YX_JK	
ZÝ[Ý[[X\™È™\™ÙYÜ™˜[\šÝ[™Ý[[™ÙX›ÝZ]XÚ[™ÜËH[™ÛÛZÝ[™›Ü›X][Û™[ˆ]Yˆ\ˆÙ™š^šY[[ˆ™]™ZX™\œÙZ]Kˆ™Z\ÙK™\™°ïØ˜\šÙZ]]\ÜÝ][™È[™ÝÜ››Ø™Y[™Ý[™Ù[ˆ›ÜˆZ[™\ˆ™Z\ÙHÜ°ï™[‹˜™\™ÙYÜ™˜ÛšYH‹ŒLŽH[X\™ØÎ‹ËÝÝÝËšZÝ[Ë˜ÛÛKÙKÚÚÝ[ËÚZÝ[Z[X\™ËX™\™ÙYÜ™˜RÝ[ØØÛÛ[Y\˜ÚX[ˆLJK	
Ý[\ØXÚÙ[Ü˜Ý[ØXÚÙ[Ü˜[\šÝ[™˜[Z[Y[™ÙY°ï\ÈÝ[[H\ÝÜš\ØÚ[ˆ™[[H]]™]™ZX™\œÙZ]Kˆ™Z\ÙK™\™°ïØ˜\šÙZ]]\ÜÝ][™ÜÛY\šÛX[H[™˜\œšY\™Yœ™ZZZ]š]H\™ZÝ™Z[HÝ[°ï™[‹˜™\™ÙYÜ™˜™\™ÙYÜ™™\ˆØÚðçÜÝ˜pçÙHLŒLŽH[X\™ØÎ‹ËÚÝ[ØXÚÙ[Ü‹™KØÝ[ØXÚÙ[Ü˜ØÛÛ[Y\˜ÚX[ˆLJK	
Ý[Z[œÙX]Ý[[œÙX][\šÝ[™\È[X\™Ù\ˆœ˜[˜Ú[˜XÚ°ï\ÈÝ[[ˆY\Ù\ˆY™\ÜÙKˆ[™ØX™[ˆHZÝY[[H™]šYX‹]\ÜÝ][™Ë™Z\Ù[ˆ[™XÚ[™ÜÛpí™ÛXÚÙZ][ˆš]H™Z[H[˜šY]\ˆ0ï™\ˆ[ˆÛÛZÝ]Yˆ\ˆÙ™š^šY[[ˆ™\ž™ZXÚš\ÜÙZ]H°ï™[‹˜Úœ°ïÙÙX™\™ÙYÜ™™\ˆÝ˜pçÙHKŒLÌÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KØœ˜[˜Ú[˜XÚÚ[X\™ËÙZ[˜YËÌLŒLËØœ™ZYH[™[œÙ\ÝY[X\™È8 $Èœ˜[˜Ú[˜XÚØÛÛ[Y\˜ÚX[ˆLJK	
]\ËX[›˜KY[™X]\È[›˜H[™H8 $È™\šY[ÛÚ[™Ù[ˆ[™Ø[0ï[˜[\šÝ[™\ˆ™]™ZX™\ˆšY]]™\šY[ÛÚ[™Ù[ˆÛÝÚYHØ[0ï[ˆ[™Z[™[ˆ™[]ˆ[‹ˆ\È[™[ÚXÚ]][˜šY]\ˆ[HZ[™[ˆ™\ÛÛ™\™[ˆÙ[œÝ™\œÛÜ™Ù\‹P]Y™[[šXÚ[HZ[ˆÛ\ÜÚ\ØÚ\ÈÝ[ˆ[™ÙX›ÝK™Y[™Ý[™Ù[ˆ[™™\™°ïØ˜\šÙZ]\™ZÝ°ï™[‹˜[[™Ø[[YX[[™Ø[[Y\ˆ]\ZXÚ‹ŒLÎH[X\™ØÎ‹ËÝÝÝËš]\ËX[›˜KY[™K™KØ]\È[›˜H[™XË‹‹šÛJØ^XŒLLŒMLËÍÌŒKLŒÌŒŠKÛÛ[Y\˜ÚX[ˆLÜXÚX[Ý^NˆLšZÙQœšY[™NˆLšZÙQ™X]\™\Î–Ø˜Zœ°é\ˆ]][˜šY]\˜KÝ]\Î˜™\™ÙYÜ™‹UÝ\š\Û]\È™\ÙZ\Ý]Yˆ˜][^™[NÈYHZÝY[H™]™ZX™\‹U[\šÝ[™ÜÙZ]H™\Ý0éYÝY\ÙH[\šÝ[™Ù›Ü›HšXÚ˜Ø]YÛÜžS[šÜÎ–Ø˜[Z[YX˜YØ\Ý›Û›ÛZYXKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝËš]\ËX[›˜KY[™K™KÝ[\šÝY[™KØX™[˜[\šÝ[™Ø\[ˆ[™™]™ZX™\˜[™ØX™[˜KÝ\›˜Î‹ËÝÝÝËš]\ËX[›˜KY[™K™KØX™[˜]\È[›˜H[™H8 $È˜Zœ°é\ˆ[™ÙZ]\™H]\ÜÝ][™ØKÝ\›˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[™\˜YÙYØX™[˜™\™ÙYÜ™‹UÝ\š\Û]\È8 $È˜][^™[™\ÙZ\ØW_JK	
[œ\›NM[œ\›NM8 $È™\šY[ÛÚ[™Ù[˜[\šÝ[™\ˆ™]™ZX™\ˆ™[›™ZH™\šY[ÛÚ[™Ù[‹pí˜›Y\\ÈÛÚ™[‹\šÜ]ˆ[™Ø\[›Z]™[][™Ëˆ™Y[™Ý[™Ù[ˆ[™™\™°ïØ˜\šÙZ]\™ZÝ™Z[H[˜šY]\ˆ°ï™[‹˜[\›píšX[\›píš\ˆZXÚMŒLÍÈ[X\™ØÎ‹ËÙ[œ\›NM™KØ[œ\›NMØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜YØ\ÜÙ\˜_JK	
™\šY[ÛÚ[™ËXÝ\œÛXÚØ™\šY[ÛÚ[™Ù[ˆÝ\œÛXÚØ[\šÝ[™YH™]™ZX™\œÙZ]H°ï™\šY[ÛÚ[™Ù[ˆ[™ðéÝ^š[[Y\ˆ[ˆÝ\œÛXÚËˆ]\ÜÝ][™ËZÝY[H™\™°ïØ˜\šÙZ][™™Z\ÙHÜ°ï™[ŽÈY\ÙH[™ØX™[ˆÙ\™[ˆY\ˆšXÚ›ÜÙ\ØÚšYX™[‹˜Ý\œÛXÚØÝ\œÛXÚÙ\ˆY\ÙYÈNMŒLÎH[X\™ØÎ‹ËÙ™\šY[ÛÚ[™ËXÝ\œÛXÚË™KØ™\šY[ÛÚ[™Ù[ˆÝ\œÛXÚØØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜Y˜]\˜_JK	
™][˜\™Ø™][˜\™ÈÝ[[X\™Ø[\šÝ[™Ý[Z]Z[ž™[H[™Ü[š[[Y\›ˆÛÝÚYH\\Y[È]]™]™ZX™\œÙZ]Kˆœ°ïÝ0ïÚË]\ÜÝ][™ËÚXÚËZ[ˆ[™\šÙ[ˆš]H\™ZÝ™ZH\ˆ[\šÝ[™ZÝY[°ï™[ŽÈ™Z\ÙH[™™\™°ïØ˜\šÙZ]Ù\™[ˆY\ˆšXÚ›ÜÙ\ØÚšYX™[‹˜™]X[\›píšXØ™\™\ˆ[™ÙYÈËŒLÌÈ[X\™ØÎ‹ËÝÝÝË˜™][˜\™ËZÝ[™KÚÝ[Z[™›Ø™][˜\™ÈÝ[ØÛÛ[Y\˜ÚX[ˆLJK	
X[[ØPSSÈÝ[[X\™ËP™\™ÙYÜ™˜[\šÝ[™Ý[™]šYXˆZ]š[[Y\‹H[™Ý[™Ü[™›Ü›X][Û™[ˆ]Yˆ\ˆZYÙ[™[ˆÙXœÚ]Kˆœ™ZYHš[[Y\‹™Z\ÙH[™™Y[™Ý[™Ù[ˆðí››™[ˆ\ˆ\ˆ™]™ZX™\ˆZÝY[™\Ý0éYÙ[‹˜™\™ÙYÜ™˜ÙZY[˜˜][\ÝÙYÈKŒLŽH[X\™ØÎ‹ËÝÝÝËšX[[Ë˜ÛÛKØPSSÈÝ[Ë‹‹šÛJ›ÙXLÌŽMLŒMÌXLËMLŒŒM
KÛÛ[Y\˜ÚX[ˆLšZÙQœšY[™NˆLšZÙQ™X]\™\Î–Ø\Ý[™È]Yˆ\ˆ™]
ÐšZÙKU[\šÝ[™Ü]›Ü›X˜Zœ˜Y™\›ZZ[™KPšZÙKU™\›ZZÛÛÜ\˜][ÛˆZ]Z[™\ˆ˜Zœ˜YÙ\šÜÝ][˜ÚZÙ]XÛÜÝ[™œ™ZY\ÈÓS˜KÝ\[Y[[\ØÜš\[ÛŽ˜\ˆ™\™Z]Ù\Ý[H]Y˜YÜÝ^ÚXZ[™[ˆ™]
ÐšZÙKT‹P]\ÙXÚÈZ]Ý[™Œ‹ŒLKŒŒˆÚYY\‹ˆYHÜÙ[˜[›[ˆ˜Zœ˜YÙ\šXÙ\ÈÚ[™[È[˜šY]\˜[™ØX™[ˆH™\œÝZ[‹ˆZ[™HÙ\ÛÛ™\H™Z]XÚðïYÙH™\Yš^šY\[™ÈÚ\™[Z]šXÚ™Z]\]˜Ý]\Î˜™]
ÐšZÙKS\Ý[™È[™˜Zœ˜YÙ\šXÙ\È]]™\™Z]Ù\Ý[[H˜XÚÙZ\ÎÈ™\Yš^šY\[™ÜÞ™Z]˜][HšXÚ[˜Xš0é™ÚYÈ™[YÝY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË˜™][™šZÙK™KÝ[\šÝ[™ÚX[[ËZÝ[Z[X\™ËX™\™ÙYÜ™‹LLMNMX™[˜™]
ÐšZÙH8 $ÈPSSÈÝ[[X\™ËP™\™ÙYÜ™˜W_JK	
[[ÚœYYÙÙ\‹ZÙ˜[Úœ°ïÙÙ\ˆÙ˜[\šÝ[™Ý[[ˆÚœ°ïÙÙKˆYHÙ™š^šY[H™]™ZX™\œÙZ]HšY]]ÛÛZÝ[™[™›Ü›X][Û™[ˆ[H]\ÎÈš[[Y\œ™Z\ÙH[™™\™°ïØ˜\šÙZ]š]H\™ZÝÜ°ï™[‹˜Úœ°ïÙÙX]\ØÚ™\œÝ˜pçÙHÍ‹ŒLÌH[X\™ØÎ‹ËØ[ÚœYYÙÙ\šÙ‹™KØ[Úœ°ïÙÙ\ˆÙ˜ØÛÛ[Y\˜ÚX[ˆLJK	
Ý[[YY]\œ˜[˜Ý[	ˆ™\Ý]\˜[YY]\œ˜[˜[\šÝ[™ÛÛXš[šY\\ˆÝ[H[™™\Ý]\˜[™]šYX‹ˆYH™]™ZX™\œÙZ]H°ïÛÛZÝ[™š[[Y\˜XÚ[™ÜØ[™œ˜YÙ[ŽÈœ™ZYHØ\^š]0é[ˆšXÚ]YˆY\Ù\ˆ]›Ü›H\™Ù\Ý[˜™\™ÙYÜ™˜›Ý[š]\ØÚ]\ÜÙYHÌ‹ŒLŽH[X\™ØÎ‹ËÚÝ[[YY]\œ˜[‹™KØÝ[YY]\œ˜[˜ØÛÛ[Y\˜ÚX[ˆLJK	
[œÚ[Û‹[[Ú[›[Ú[˜[œÚ[Ûˆ[Ú[ˆ[Ú[˜[\šÝ[™˜[Z[Y[™ÙY°ïH[œÚ[Ûˆ[ˆ[ˆšY\‹H[™X\œØÚ[™[‹ˆYHZYÙ[™HÙZ]H™[›š[[Y\˜\[ˆ[™ÛÛZÝÈ™Z\ÙH[™™\™°ïØ˜\šÙZ]›Ü˜XˆZ][H[˜šY]\ˆÛ0é™[‹˜[\›píšX[\›píš\ˆZXÚLKŒLÍÈ[X\™ØÎ‹ËÝÝÝËœ[œÚ[Û‹[[Ú[›[Ú[‹™KØ[œÚ[Ûˆ[Ú[ˆ[Ú[˜ØÛÛ[Y\˜ÚX[ˆLJK	
šY\›Y[™\™ZK][\šÝ[™šY\›0é™\™ZH8 $ÈØY°êK™\Ý]\˜[[™[œÚ[Û˜[\šÝ[™ðéÝ^š[[Y\ˆ[™™\šY[ÛÚ[™Ù[ˆ[ˆÚ\˜ÚÙ\™\ˆ]]™]™ZX™\œÙZ]KˆØ\^š]0é™Z\ÙH[™ZÝY[H™\™°ïØ˜\šÙZ]\™ZÝ[™œ˜YÙ[‹˜Ú\˜ÚÙ\™\˜Ú\˜ÚÙ\™\ˆ[™ZXÚLŒ‹ŒLÍÈ[X\™ØÎ‹ËÝÝÝËœ[œÚ[ÛšÚ\˜ÚÙ\™\‹™KØšY\›0é™\™ZXØÛÛ[Y\˜ÚX[ˆLJK	
ØY™KXÚž\Ø[™\˜ØY°êHÚž\Ø[™\˜Ø\Ý›Û›ÛZYXØY°êH[H™\™ÙYÜ™™\ˆØÚÜÜÜ\šÈZ]œ°ïÝ0ïÚÜØ[™ÙX›Ý[™ÙXÚÙ[™\ˆØ\H]]ZYÙ[™\ˆÙXœÚ]KˆZÝY[H0å™™›[™ÜÞ™Z][ˆ[™›ÙÜ˜[[HÜ°ï™[‹˜™\™ÙYÜ™˜Úž\Ø[™\œÝ˜pçÙHŒKŒLŽH[X\™ØÎ‹ËÝÝÝË˜ØY™KXÚž\Ø[™\‹™KØØY°êHÚž\Ø[™\˜ØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX[™ØY[™ÙX_JK	
K\]]K\YXØY°êHH]]HYXØ\Ý›Û›ÛZYXØY°êH[ˆ\ˆØXÚÙ[Ü‹T\ÜØYÙHZ]œ°ïÝ0ïÚËØY™™YH[™ÝXÚ[ˆ]]™]™ZX™\œÙZ]KˆØZ\ÛÛ˜[H0å™™›[™ÜÞ™Z][ˆ0é™\›ˆÚXÚÈZÝY[H™Z][ˆ[™™ZY\YÙH°ï™[‹˜™\™ÙYÜ™˜ØXÚÙ[Ü‹T\ÜØYÙKŒLŽH[X\™ØÎ‹ËÝÝÝË˜ØY™[\]]\YK™KØØY°êHH]]HYXØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø[™ØY[™ÙX_JK	
ØY™K[›Ý\š\ÚØY°êH›Ý\š\ÚØ\Ý›Û›ÛZYXØY°êHZ]Ù[œÝÙ[XXÚ[ˆ[™ÙX›Ý[ˆ[™]\ÙÙ]ÚY\Ù[™[ˆ™YØ[™[ˆÛÝÚYHÛ][™œ™ZY[ˆÜ[Û™[ˆ]]ZYÙ[™\ˆÙZ]Kˆ0å™™›[™ÜÞ™Z][ˆ[™ðïÚ[ž™Z][ˆ\™ZÝ°ï™[‹˜™\™ÙYÜ™˜™Y]Ù\™\ˆ˜KŒLŽH[X\™ØÎ‹ËÝÝÝË˜ØY™K[›Ý\š\Ú™KØØY°êH›Ý\š\ÚØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX_JK	
œ[˜ÚY˜XÝÜžXœ[˜Ú˜XÝÜžH™\™ÙYÜ™˜Ø\Ý›Û›ÛZYXœ°ïÝ0ïÚÜËH[™œ[˜Ú[™ÙX›Ý[HØÚ[œ\šËˆ™]™ZX™\œÙZ]H™[›Y™\ÜÙKÛÛZÝ[™ÙXÚÙ[™HØ\[‹ˆ™Z\ÙH[™0å™™›[™ÜÞ™Z][ˆÚ[™™\°é™\›XÚÈÜšYÚ[˜[ÙZ]H°ï™[‹˜™\™ÙYÜ™˜[HØÚ[œ\šÈ‹ŒLŽH[X\™ØÎ‹ËØœ[˜Ú˜XÝÜžK™KØœ[˜Ú˜XÝÜžXØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX_JK	
Ø\Ø\™XØÚ[ØØY°êHš\Ý›ÈØ\Ø\™XØÚ[ØØ\Ý›Û›ÛZYX][Y[š\ØÚ\ˆ˜[Z[Y[˜™]šYXˆ[HÚœ°ïÙÙ\ˆX\šÝˆZYÙ[™HÙZ]H°ïÜZ\Ù[‹0å™™›[™ÜÞ™Z][ˆ[™ÛÛZÝ][ŽÈ[™ØX™[ˆðí››™[ˆÚXÚ0é™\›‹˜Úœ°ïÙÙXÚœ°ïÙÙ\ˆX\šÝKŒLÌH[X\™ØÎ‹ËØØ\Ø\™XØÚ[Ë™X]K˜ÛÛKÏÛ[™ÏYXØY°êHš\Ý›ÈØ\Ø\™XØÚ[ØØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX_JK	
š[XXš[XHØY°êH	ˆ™Z[šÛÜÝØ\Ý›Û›ÛZYXØY°êH[™™Z[šÛÜÝ[ˆ\ˆ[[ˆÛÝ[œÝ˜pçÙHZ]›XÚÜšXÚ[™ÈY™[ˆ]][˜šY]\œ›Ùš[ˆYHÙZ]H\È[˜šY]\œÈ°ïÛÛZÝ[™ZÝY[H™Z][‹˜™\™ÙYÜ™˜[HÛÝ[œÝ˜pçÙH‹ŒLŽH[X\™ØÎ‹ËÝÝÝË›YX›[™ÜØY™\ÜÙ[‹™KÜ›Ùš[Ùš[XKXØY™K][™Y™Z[šÛÜÝZ[X\™ËX™\™ÙYÜ™˜š[XHØY°êH	ˆ™Z[šÛÜÝØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø[™ØY[™ÙX_JK	
ØY™K[[Û[˜XØY°êH[Û[˜XØ\Ý›Û›ÛZYXØY°êH[HÚ\˜ÚÙ\™\ˆpï[™[[Kˆ™]™ZX™\œÙZ]H™[›œ°ïÝ0ïÚÜËH[™0å™™›[™ÜÝYÙNÈØZ\ÛÛ˜[H[™™ZY\YÜØXÙZXÚ[™Ù[ˆ›Üš\ˆ°ï™[‹˜Ú\˜ÚÙ\™\˜Ú\˜ÚÙ\™\ˆpï[™[[HÍXKŒLÍÈ[X\™ØÎ‹ËÝÝÝË˜ØY™[[Û[˜K™KØØY°êH[Û[˜XØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜Y[™ØY[™ÙX_JK	
[™]\Ë]›ÚYÝ[™]\È›ÚYÝØ\Ý›Û›ÛZYX™\Ý]\˜[[ˆØÚÙ[Ù\™\ˆZ]™YÚ[Û˜[]\ÙÙ\šXÚ]\ˆðïÚH[™]pçÙ[˜™\™ZXÚ]]™]™ZX™\œÙZ]Kˆ™\Ù\šY\[™È[™0å™™›[™ÜÞ™Z][ˆ\™ZÝ°ï™[‹˜ØÚÙ[Ù\™\˜ØÚÙ[Ù\™\ˆ›Ü™\™ZXÚLLËŒLÍÈ[X\™ØÎ‹ËÝÝÝË›[™]\Ë]›ÚYÝ™KØ[™]\È›ÚYÝØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜Y˜[Z[YXØ\ÜÙ\˜_JK	
šY\›Y[™\™ZKY\ÜÙ[˜šY\›0é™\™ZH8 $ÈØY°êH[™™\Ý]\˜[Ø\Ý›Û›ÛZYXØY°êH[™™\Ý]\˜[[ˆZ[™[H\ÝÜš\ØÚ[ˆ°éÚÙ\™ZYÙX°éYNÈYH™]™ZX™\œÙZ]H™[›ØZ\ÛÛ˜[H™Z][‹ÝXÚ[ˆ[™™\˜[œÝ[[™Ù[‹˜Ú\˜ÚÙ\™\˜Ú\˜ÚÙ\™\ˆ[™ZXÚLŒ‹ŒLÍÈ[X\™ØÎ‹ËÝÝÝËœ[œÚ[ÛšÚ\˜ÚÙ\™\‹™KØšY\›0é™\™ZXØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø[\šÝ[™˜Y˜[Z[YX_JK	
[KYZXÚØ]X[HZXÚØ]XØ\Ý›Û›ÛZYXØY™™Y\ÝX™H[™ÛZ[™\È™\Ý]\˜[[ˆš[Ù\™\‹ˆ\È[X\™Ù\ˆœ˜[˜Ú[˜XÚ[™\ˆ™]™ZX™\ˆ°ï™[ˆÛÛZÝ[™0å™™›[™ÜÞ™Z][ŽÈ›Üˆ\ˆ[™˜ZZÝY[H™Z][ˆ°ï™[‹˜š[Ù\™\˜š[Ù\™\ˆš[ZXÚM‹ŒLÌÈ[X\™ØÎ‹ËØ[YZXÚØ]K™KØ[HZXÚØ]XØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜Y˜[Z[YX_JK	
Ü˜][\‹ZÜ›ÛÙØHÜ˜][\ˆÜ›ÛÙØØ\Ý›Û›ÛZYX]\Ù›YÜÛÚØ[[ˆÚ\˜ÚÙ\™\‹ˆ\ˆZÝY[HZ[˜YÈ[H[X\™Ù\ˆœ˜[˜Ú[˜XÚ°ïY™\ÜÙH[™ÛÛZÝÈ0å™™›[™ÜÞ™Z][ˆ™Z[H™]šYXˆ™\Ý0éYÙ[‹˜Ú\˜ÚÙ\™\˜Ü˜]Y[\ˆ]\ZXÚKŒLÍÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KØœ˜[˜Ú[˜XÚÚ[X\™ËÙZ[˜YËÌLMŒKØ[X\™Ë™Hœ˜[˜Ú[˜XÚØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜YØ\ÜÙ\˜_JK	
˜YÝ][Û˜˜YÝ][Ûˆ™\™ÙYÜ™˜˜Y[H˜ZšÙŽˆ˜Zœ˜Y\šÚ]\ËÙ\šÜÝ]ÚÜ[™˜Zœ˜Y™\›ZZZ[œØÚYpçÛXÚKPšZÙ\È]]™]™ZX™\œÙZ]Kˆ™\™°ïØ˜\šÙZ]0å™™›[™ÜÞ™Z][ˆ[™™Z\ÙHÜ°ï™[‹˜™\™ÙYÜ™˜[H˜ZšÙˆKŒLŽH[X\™ØÎ‹ËÝÝÝËœ˜YÝ][Û™[‹[›Ü™™KØ™\™ÙYÜ™‹Ý™\›ZZØ˜YÝ][Û™[ˆ›Ü™ØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø[Øš[]Y]_JK	
ÝY˜YÝYQTÝ][Û™[ˆ[ˆ™\™ÙYÜ™˜˜YYHÝYQQTH°ïÝ][Û™[ˆ[H˜ZšÙˆ™\™ÙYÜ™‹ÛÜ˜XÚÝ˜pçÙHÈ[]]R0ï™[™\‹UÙYÈ[™[œšY]KR\ž‹Tš[™ÈÈÜ˜XÚ[œ]‹ˆ™\™°ïØ˜\šÙZ][™™]šYXœÜÝ]\È[ˆ\ˆÝYQP\°ï™[‹˜™\™ÙYÜ™ˆÈÚœ°ïÙÙHÈ™]X[\›píšXYZ™\™HÝ][Û™[˜Î‹ËÜÝY˜Yš[X\™Ë™KÙKÙœ˜YÙ[‹][™X[ÛÜ[˜ÝYQ[X\™ØØØ]YÛÜžS[šÜÎ–Ø[Øš[]Y]_JK	
[™\˜YÙYØ[™\˜YÙYÈ[H™^š\šÈ™\™ÙYÜ™˜˜Y\ˆ[™\˜YÙYÈ\ÝZ[ˆ™\›œ˜YÙYÎÈ°ïˆ[ˆ™\™ÙYÜ™™\ˆXœØÚš][™ZÝY[H˜]KHÙ\ˆ[[Z][™ÜÚ[™›Ü›X][Û™[ˆš]HÙ™š^šY[HÝ™XÚÙ[š[™›Ü›X][Û™[ˆ™\Ù[™[‹˜[[™Ø[[YHÈÚ\˜ÚÙ\™\ˆÈšY\‹H[™X\œØÚ[™X[™ZXÚH[™]\ÙÙ]ÚY\Ù[™HXœØÚš]XÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËØZÝ]‹Z[K][™X[K]Ø\ÜÙ\˜™\™ÙYÜ™‹UÝ\š\Û]\ØÜÝ\[Y[[\ØÜš\[ÛŽ˜YH™\™ÙYÜ™‹TÙZ]H™\ØÚ™ZX[™ÛH[[™È\ˆ[™H[™\ÈX\œØÚ˜Z™[[\È›Ûˆ[X\™ËP[[™Ø[[YH0ï™\ˆ›Û[œÜYZÙ\ˆH[ˆ[™[™ÜØœ°ïÚÙ[‹ˆšY[H[ˆ[™˜ZH\ˆ›Ý]HYYÙ[ˆ[ˆ[ˆšY\‹H[™X\œØÚ[™[‹ˆ\ˆÙ[˜]YHÝ™XÚÙ[™\›]Yˆ[™ZÝY[HÜ\œ[™Ù[ˆÚ[™[ˆÙ™š^šY[[ˆ›Ý][œ]Y[[ˆH[™ZY[‹ˆ\ÈÚ\™ÙZ[™HY[šY[œ›Ý]H[È˜YÙYÈ\™Ù\Ý[˜Ø]YÛÜžS[šÜÎ–Ø˜]\˜Ø\ÜÙ\˜KY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[™\˜YÙYØX™[˜™\™ÙYÜ™‹UÝ\š\Û]\È8 $È[™\˜YÙYØKÝ\›˜Î‹ËÝÝÝË™[™\˜YÙYË™KØX™[˜[™\˜YÙYÈ8 $ÈÙ™š^šY[H™\›œ˜YÙYÜÙZ]XW_JK	
‹\˜YZ]˜Zœ˜Y[™•ˆ[œ™Z\Ù[˜˜Y˜Zœ0é™K˜Zœ˜YZ]˜ZYX™Y[™Ý[™Ù[ˆ[™pí™ÛXÚHZ[œØÚ°éšÝ[™Ù[ˆÚ[™™\°é™\›XÚˆYH˜Zœ[˜]\ÚÝ[™[™[ÙZ\ÙH\È•ˆÚ[™°ïˆ[ˆ™Z\Ù]YÈXpçÙÙX›XÚ˜™^š\šÈ™\™ÙYÜ™˜˜ZšÙˆ™\™ÙYÜ™ˆ[™ËP˜Z‹TÝ][Û™[˜Î‹ËÝÝÝËš‹™KØ˜ØØ]YÛÜžS[šÜÎ–Ø[Øš[]Y]_JK	
Ù\™X[\›[ÙZXÙ\™[\›píšXØ[\[™Ø\ˆ™]™ZX™\ˆšY]]Z[™[ˆÛÚ›[Øš[Ý[]ˆ°ïˆ˜Zž™]YÙHš\ÈHK˜XÚZYÙ[™\ˆ[™ØX™HØZ\ÛÛ˜[›ÛHKˆXZHš\ÈËˆÚÝØ™\‹ˆÙ[˜[›Ù\™[ˆØ[š]0é˜[›YÙ[‹œš\ØÚØ\ÜÙ\ˆ[™Ý›ÛHš\ÈMˆNÈYÙ\ËKÓ˜XÚ™Z\È]]™]™ZX™\œÙZ]HXˆH]\›È[šÛ\Ú]™H\ØÚH[™Ý›ÛKˆ[Y›Ûš\ØÚH[›Y[[™È\™›Ü™\›XÚÈ›Üˆ\ˆ[™˜ZØZ\ÛÛ‹™Z\È[™™Y[™Ý[™Ù[ˆ\›™]]°ï™[‹˜[\›píšX[\›píš\ˆZXÚL‹ŒLÍÈ[X\™ØÎ‹ËÝÙ\™[\›[ÙZK™KÝÛÚ›[Øš[Kš[Ù\™[\›píšXØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–ØØ\ÜÙ\˜˜Y_JK	
Ø[\[™ËZÚ[™ZXÚØ[\[™È[HÚ[™ZXÚ\ˆÙYXØ[\[™Ø[H0íœÝXÚ[ˆY™\ˆ™Yš[™]ÚXÚ]][X\™Ë™HZ[ˆØ[\[™Ü]‹ˆ[0éÜÚYÙH˜Zž™]YÙK]\ÜÝ][™ËØZ\ÛÛ‹ÛÜÝ[ˆ[™™\™°ïØ˜\šÙZ]Ú[™›ÜˆZ[™\ˆ˜Z™Z[H™]™ZX™\ˆH™\Ý0éYÙ[‹˜Ú\˜ÚÙ\™\˜Ú[™ZXÚ\ˆÙYKŒLÍÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹ÝØ\ÜÙ\‹Ø˜YYÙ]ØY\ÜÙ\‹ÚÚ[™ZXÚ\œÙYK]Ù\ÝLMÍ•RÑPH[X\™ØØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXØ\ÜÙ\˜_JK	
ØÚY™™˜ZÛ[šYX™\™ÙYÜ™™\ˆØÚY™™˜ZÛ[šYXØ\ÜÙ\˜YH™]™ZX™\œÙZ]H°ïØZ\ÛÛ˜[H˜Z[ˆXˆ™\™ÙYÜ™™\ˆY™[‹ÔÙ\œ˜Z‹\[\ˆšY\›[™[‹H[™Y™[™˜Z[‹ˆ˜Zœ[‹ØZ\ÛÛ‹œ™ZYH0é™H[™XÚÙ]È]\ÜØÚYpçÛXÚÜZÝY[°ï™[‹˜™\™ÙYÜ™˜[HÛÝ[œÝ˜pçÙHÈ™\™ÙYÜ™™\ˆY™[‹ŒLŽH[X\™ØÎ‹ËØ˜\šØ\ÜÙ[™˜Z™KÜØÚY™™˜ZY˜Zœ[‹LŒ‹Ø™\™ÙYÜ™™\ˆØÚY™™˜ZÛ[šYXØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜˜[Z[YX_JK	
]ØšY\›[™[‹Q˜Z\ˆ[Ý\‹UÝ\š\ÝZÈ
UÊXØ\ÜÙ\˜UÈ™\°í™™™[XÚ˜Z[ˆÚ\ØÚ[ˆ[™Ù™\›œÝYYÈ[™™\™ÙYÜ™‹RY™[‹ÔÙ\œ˜Z‹ˆØZ\ÛÛ‹\›Z[™KX™˜Z[™™\™°ïØ˜\šÙZ]™Z[H[˜šY]\ˆ°ï™[‹˜™\™ÙYÜ™ˆÈ[X\™ËSZ]X[›YÙ\ˆ™\™ÙYÜ™™\ˆY™[ˆÈÙ\œ˜Z˜Î‹ËÝÝÝË˜[Ý\Ý\š\ÝZË™KØ[Ý\‹UÝ\š\ÝZØØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜_JK	
šY\›Y[™\‹Y]Ù\˜šY\›0é™\ˆ]Ù\ˆ8 '•[œÈ]Ù\¸ 'Ø\ÜÙ\˜\ÝÜš\ØÚ\ˆ]Ù\‹S˜XÚ˜]H[™˜Z[ˆXˆ™\™ÙYÜ™™\ˆY™[ˆ]]°éÙ\œÙZ]Kˆ\›Z[™KÜ\[˜[™ÙX›ÝH[™™Y[™Ý[™Ù[ˆZÝY[™Z[H[˜šY]\ˆ\™œ˜YÙ[‹˜™\™ÙYÜ™˜™\™ÙYÜ™™\ˆY™[ˆÈÙ\œ˜ZœÝ˜pçÙKŒLŽH[X\™ØÎ‹ËÝÝÝËšY\›[™[‹Y]Ù\‹™KØšY\›0é™\ˆ]Ù\˜ØØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜Ý[\˜_JK	
\›X›š\Ë\™YY\™ZX°é™H›Û[œÜYZÙ\¸ $ÒÛÜH	ˆ˜Z™Ø\ÝØÚY™™XØ\ÜÙ\˜°é™\˜š[™[™ÈÚ\ØÚ[ˆ›Û[œÜYZÙ\ˆ[™ÛÜHÛÝÚYHØZ\ÛÛ˜[H˜Z™Ø\Ý[™ÙX›ÝH]]™]™ZX™\‹ˆ˜Zœ[ˆ[™™]šYXˆðí››™[ˆ›ÛˆØZ\ÛÛ‹Ø\ÜÙ\œÝ[™[™Ù]\ˆXš0é™Ù[ŽÈ›Ü˜Xˆ°ï™[‹ˆÛÜHYYÝ]pçÙ\š[ˆ™\™ÙYÜ™œÈ[ˆšYY\œØXÚÙ[‹˜Ú\˜ÚÙ\™\ˆÈÛÜH
[[[™
X°é˜[›YÙ\ˆ›Û[œÜYZÙ\‹ŒLÍÈ[X\™ØÎ‹ËÙ\›X›š\Ë\™YY\™ZK™KØ\›X›š\ËT™YY\™ZXØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜Y˜[Z[YXKÝ]ÚYN˜YH°é™\˜š[™[™È°ï]XÚ[ˆ\ÈšYY\œðéÚÚ\ØÚH[[[™˜JK	
›ÛÝÝÙ\™[™]Y[™Ø[[YX›ÛÝÝÙ\™™]Y[™Ø[[YXØ\ÜÙ\˜\ˆ™\™ÙYÜ™™\ˆÝ\š\Û]\Ù°ï™\ˆ™[›YH›ÛÝÝÙ\™[È[˜šY]\ˆ›ÛˆØ\ÝYYÙ\0é™[ˆ[™[ZÝ›Ø›ÛÝ™\›ZZˆYYÙ\0é™K›ÛÝÛXpçÙKÙX°ï™[‹ØÚ]\Ù[ˆ[™™\™°ïØ˜\šÙZ]›Üˆ[™˜Z\™ZÝ™\Ý0éYÙ[‹˜™]Y[™Ø[[YXÝ\œÛXÚÙ\ˆœ°ïÚÙ[™[[HLËŒLÎH[X\™ØÎ‹ËØ›ÛÝÝÙ\™[™]Y[™Ø[[YK™KØ›ÛÝÝÙ\™™]Y[™Ø[[YXØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–ØØ[\[™Ø_JK	
ÜÜ›ÛÝY™[‹[[Ù[\˜ÜÜ›ÛÝY™[ˆpí›\˜Ø\ÜÙ\˜\ˆÝ\š\Û]\Ù°ï™\ˆ°ï[ˆY™[ˆ[H][˜™\™Ù\ˆZXÚZ]Ø\ÝYYÙ\0é™[ˆ[™Û\pí™ÛXÚÙZ]ˆXpçÙH[™œ™ZYHYYÙ\0é™HÚ[™ÚXÚ\šZ]ËH[™™Z]Üš]\ØÚÈ\™ZÝ™Z[HY™[˜™]™ZX™\ˆ™\šYš^šY\™[‹˜][˜™\™Ø][˜™\™Ù\ˆZXÚN‹ŒLÍÈ[X\™ØÎ‹ËÝÝÝËœÜÜ›ÛÝY™[‹Z[X\™Ë™KØÜÜ›ÛÝY™[ˆpí›\˜ØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–ØØ[\[™Ø_JK	
XXÚÛX˜[X\™Ù\ˆXXÚPÛXˆ[HQPØØ\ÜÙ\˜\ˆÝ\š\Û]\Ù°ï™\ˆ™[›[ˆÝ[™Ü[H][˜™\™Ù\ˆZXÚ[™Ø\ÝYYÙ\0é™Kˆ™\™°ïØ˜\šÙZ]›ÛÝÙ[Y[œÚ[Û™[‹[›Y[[™È[™ÙX°ï™[ˆ\™ZÝ™Z[H™\™Z[ˆ™\Ý0éYÙ[‹˜][˜™\™Ø][˜™\™Ù\ˆZXÚMŒLÍÈ[X\™ØÎ‹ËÝÝÝËš[X\™Ù\‹^XXÚXÛX‹™]KØ[X\™Ù\ˆXXÚPÛX˜ØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–ØØ[\[™Ø_JK	
›ÛÝÚ]\Ø›ÛÝÚ]\È™\™ÙYÜ™˜Ø\ÜÙ\˜\ˆÝ\š\Û]\Ù°ï™\ˆ™[›Ø[KKØZ˜ZËKÕTH[™™]›ÛÝ[™ÙX›ÝH[HØÚ[\Y™\‹ˆØZ\ÛÛ‹ØÚÚ[[]Ù\Ý[‹™Z\ÙH[™]\ÛZZH\™ZÝ™Z[H™]™ZX™\ˆ°ï™[‹˜™\™ÙYÜ™˜ØÚ[\Y™\ˆKŒLŽH[X\™ØÎ‹ËØ›ÛÝÚ]\ËX™\™ÙYÜ™‹˜ÛÛKØ›ÛÝÚ]\È™\™ÙYÜ™˜ØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜]\˜_JK	
Ø[KZY™[˜Ø[KRY™[ˆ[X\™ØØ\ÜÙ\˜\ˆÝ\š\Û]\Ù°ï™\ˆ°ïØ[KH[™ØZ˜ZÝ™\›ZZ[HÝ\œÛXÚÙ\ˆZXÚˆØZ\ÛÛ‹™\™°ïØ˜\šÙZ]Z[™\Ý[\ˆ[™Z[ÙZ\Ý[™È™Z[H[˜šY]\ˆ°ï™[‹˜Ý\œÛXÚØÝ\œÛXÚÙ\ˆZXÚÍÍKŒLÎH[X\™ØÎ‹ËÚØ[KZY™[‹™KØØ[KRY™[ˆ[X\™ØØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜]\˜_JK	
Y[[YZY\˜Y[SYZY\ˆ›ÛÝÝ™\›ZY][™ØØ\ÜÙ\˜\ˆ[˜šY]\ˆÚ\™[HÝ\š\Û]\Ù°ï™\ˆZ]Ø[KKØZ˜ZËH[™ÕTP[™ÙX›Ý[ˆÙ[˜[›ˆ™\›ZY][™È[™™Y[™Ý[™Ù[ˆZÝY[™Z[H™]™ZX™\ˆ°ï™[‹˜[\›píšXZ[œšXÚSÜÝ\˜]TÝ˜pçÙHM‹ŒLÍÈ[X\™ØÎ‹ËÝÝÝËœY[[YZY\‹™KØY[SYZY\˜ØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜]\˜_JK	
Ú[™Ý\™š[™ËZ[X\™ØÚ[™Ý\™š[™È[X\™È[HÛÜØ][œÙYXØ\ÜÙ\˜\ˆÝ\š\Û]\Ù°ï™\ˆ°ïÚ[™Ý\™š[™È[HÛÜØ][œÙYKˆØZ\ÛÛ‹Ý\œÙK]\Ü°ïÝ[™È[™[0éÜÚYÚÙZ][HÙYH›Ü˜Xˆ™Z[H™]™ZX™\ˆ™^šYZ[™ÜÝÙZ\ÙH™ZH\ˆ™Z0íœ™H°ï™[‹˜Ú\˜ÚÙ\™\˜ÛÜØ][Y™\ˆL‹ŒLÍÈ[X\™ØÎ‹ËÝÝÝËÚ[™Ý\™š[™ËZ[X\™Ë™KØÚ[™Ý\™š[™È[X\™ØØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YX_JK	
Ù‹YYÙÙ\œØÙˆYÙÙ\œÈ[ˆ\ˆÚX˜[Z[YX\ÝÜš\ØÚ\ˆÙˆ[ˆÚ\˜ÚÙ\™\‹ˆ\ˆÝ\š\Û]\Ù°ï™\ˆ™[›Ù›Y[‹Ù˜ØY°êK™\šY[ÛÚ[™Ù[ˆÛÝÚYH°ï[™Ù[ˆ˜XÚ[›Y[[™ÎÈZÝY[H0í™™™[XÚH[™ÙX›ÝH™Z[HÙˆ°ï™[‹˜Ú\˜ÚÙ\™\˜Ú\˜ÚÙ\™\ˆpï[™[[HKŒLÍÈ[X\™ØÎ‹ËÝÝÝËšÙ‹YYÙÙ\œË™KØÙˆYÙÙ\œØË‹‹šÛJØ^XMÌŒLŒÍÌLËLÍ‹LŒŒNNN
KÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜Ø\Ý›Û›ÛZYX[\šÝ[™˜Y_JK	
\Ù[ZXYH\Ù[ZX˜[Z[YX˜[Z[Y[˜[™ÙX›ÝHZ]\Ù[Ø[™\[™Ù[ˆÙ\™[ˆ[ˆ\ˆÝ\š\Û]\ðï™\œÚXÚÙY°ïˆ\›Z[™KZ[™\Ý[\‹]Y\ˆ[™ÛÜÝ[ˆ\ˆ[š[™\ˆ™]ÙZ[YÙ[ˆ[˜šY]\š[™›Ü›X][Û™[ˆXÚ[‹˜™^š\šÈ™\™ÙYÜ™˜\›Z[™H[™™Y™œ[šÝ]][˜šY]\˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÛZ]ZÚ[™\›‹][\ÙYÜØ™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜_JK	
ÜY[ØÚ][™XÜY[ØÚ][™H\ˆÙ\ØÚXÚ[˜˜[Z[YXÙ]\[˜Xš0é™ÚYÙ\ÈÚ[™\˜[™ÙX›Ý\ÈYHÝ\š\Û]\ðï™\œÚXÚ°ïˆ™YÙ[YÙH™[›ˆ0å™™›[™ÜÞ™Z][‹Z[š][™[\œØ™Y[™Ý[™Ù[ˆ\™ZÝ™Z[H™]™ZX™\ˆ°ï™[‹˜™]X[\›píšXX\šYKR[›š[™ËUÙYÈKŒLÍH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÛZ]ZÚ[™\›‹][\ÙYÜØ™\™ÙYÜ™‹UÝ\š\Û]\Ø
K	
š[X˜Yš[KP˜Y˜[Z[YXØÚÚ[[X˜Y[ˆ\ˆš[HZ]ØÚÚ[[Y[ˆ[™ÙZ]\™[ˆ[™ÙX›Ý[ˆ]]™]™ZX™\‹ˆ˜Y^™Z][‹Z[›\ÜË™Z\ÙH[™Yðé™ÛXÚÙZ]]Yˆ\ˆ°é\›[™TÙZ]H°ï™[‹˜™\™ÙYÜ™˜™Y]Ù\™\ˆKŒLŽH[X\™ØÎ‹ËÝÝÝË˜˜YY\›[™™KØ˜YY\‹Ø[KX˜YY\‹Øš[X˜YØ°é\›[™[X\™ØØØ]YÛÜžS[šÜÎ–Ø˜ZÝ\ØÚ_JK	
ÛÛ[Y\˜˜YX[[™Ø[[YXÛÛ[Y\˜˜Y[[™Ø[[YX˜[Z[YXœ™ZX˜YZ]ØZ\ÛÛ˜[[H™]šYXˆ[ˆ[[™Ø[[YKˆ˜Y\ØZ\ÛÛ‹0å™™›[™ËZ[š][™˜YX]YœÚXÚÚ[™ØZ\ÛÛ˜Xš0é™ÚYÈ[™pïÜÙ[ˆ\ˆ™]™ZX™\œÙZ]H[›Û[Y[ˆÙ\™[‹˜[[™Ø[[YXÜœÝ\ˆ[[HÎŒLÎH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËØZÝ]‹Z[K][™X[K]Ø\ÜÙ\‹Ø˜Y\ÙY[‹Xš[KX˜Y™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜]\˜_JK	
X\œØÚ˜Z‹Y˜[Z[Y[˜X\œØÚ˜Z™[[HZ]Ú[™\›˜˜[Z[YXYHÝ\š\Û]\Ü]Y[H[\šYZ[ˆ0ï™\ÚYYÙ[™]]Ùœ™ZY[ˆX\œØÚ˜Z™[[H[È˜Y›Ý]H[™™\ØÚ™ZXZ[™[ˆÜY[]ˆ[HÛZ\Ù™ZYXÚËˆ\ˆÛÛšÜ™]H›Ý][™\›]Yˆ]\ÜÈ\ˆ˜YØ\H[›Û[Y[ˆÙ\™[‹˜šY\‹H[™X\œØÚ[™XX\œØÚ˜Z™[[XÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÛZ]ZÚ[™\›‹][\ÙYÜØ™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–Ø˜Y˜]\˜Kœ™YN˜]pçÙ[œ›Ý]Hœ™ZNÈÜY[0é™H0í™™™[XÚ]˜˜\ˆ˜XÚ0íœXÚ[ˆ™YÙ[‹˜JK	
‹X\œš]˜[˜Zˆ[™\È˜XÚ™\™ÙYÜ™˜[Øš[]Y]™\™ÙYÜ™ˆ\Ý\ˆËP˜Zˆ[™™YÚ[Û˜[™\šÙZˆ\œ™ZXÚ˜\ŽÈ˜Zœ0é™H[™˜]X™Y[™ÝH0á™\[™Ù[ˆÚ[™YÙ\ØZÝY[™Z[H•ˆH°ï™[‹ˆÙZ][H˜Zœ[ÙXÚÙ[ŒKÌˆ0é™\›ˆÚXÚ[šY[˜™^™ZXÚ[™Ù[ˆ[™[šY[›0éY™K˜™^š\šÈ™\™ÙYÜ™˜˜ZšÙˆ™\™ÙYÜ™ˆ[™ÙZ]\™H[\Ý[[˜Î‹ËÝÝÝËš‹™KØ˜ØØ]YÛÜžS[šÜÎ–Ø˜ZÝ\ØÚ_JK	
Ø[Xš[ËX™\™ÙYÜ™˜Ø\œÚ\š[™È[H˜ZšÙˆ™\™ÙYÜ™˜[Øš[]Y]Ø[Xš[È°ïZ[™HÝ][Ûˆ8 '™\™ÙYÜ™ˆˆÝÚ]ÚÈ›Ú[›‹SY^Y\‹TÝ˜pçÙx '[ˆ\ˆ˜ZšÙœÜ°ïÚÜÙZ]Kˆ™YÚ\ÝšY\[™Ë™YY[[™ÜÙÙXšY]™\™°ïØ˜\šÙZ][™XÚ[™ÜØ™Y[™Ý[™Ù[ˆ™Z[H™]™ZX™\ˆ°ï™[‹˜™\™ÙYÜ™˜
Ôˆ™\™ÙYÜ™‹YØ[™È›Ú[›‹SY^Y\‹TÝ˜pçÙXÎ‹ËÝÝÝË˜Ø[Xš[ËXØ\œÚ\š[™Ë™KÜÝ][Û™[‹ÜÝ][Û‹Ø™\™ÙYÜ™‹Z‹\ÝÚ]ÚLÌKLNØ[Xš[ØØÛÛ[Y\˜ÚX[ˆLJK	
Ú^X™\™ÙYÜ™˜ÒV]]Ý™\›ZY][™È[X\™ËP™\™ÙYÜ™˜[Øš[]Y]YH™]™ZX™\œÙZ]H°ïZ[™HZY]ØYÙ[œÝ][Ûˆ[ˆ\ˆ™\™ÙYÜ™™\ˆÝ˜pçÙHLKˆ˜Zž™]YØ™\Ý[™0å™™›[™ÜÞ™Z][ˆ[™°ïÚÙØX™\™YÙ[ˆ[HXÚ[™ÜÝYÈ°ï™[ŽÈY\ÙH]›Ü›H™\›Z][ÙZ[™H˜Zž™]YÙK˜™\™ÙYÜ™˜™\™ÙYÜ™™\ˆÝ˜pçÙHLKŒLŽH[X\™ØÎ‹ËÝÝÝËœÚ^™KÛZY]ØYÙ[‹Ù]]ØÚ[™Ú[X\™ËÚ[X\™ËX™\™ÙYÜ™‹ØÒVØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜ZÝ\ØÚ_JK	
Ý\š\ÝZ[™›ØÝ\š\ÝR[™›Ü›X][Ûˆ[H\ÜÙKR]\Ø˜ZÝ\ØÚ^\›™HÝ\š\Ý\ØÚH[›]YœÝ[H[H\ÜÙKR]\ËˆYHÙ™š^šY[HÛÛZÝÙZ]H™[›Y™\ÜÙK[Y›Û‹KSXZ[[™\ž™Z]YÙH0å™™›[™ÜÞ™Z][ŽÈ›Üˆ[H™\ÝXÚ°ï™[‹ˆ™\™ÙYÜ™ˆÙ[YZ[œØ[H\ÝÙZ[™H[]XÚHÝ\š\Û]\ÜÝ[K˜™\™ÙYÜ™˜›Ú[›‹PYÛ‹R\ÜÙKT]ˆKŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËÚÛÛZÝ™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜_JK	
ØËY\™XÝÜžX0å™™™[XÚHÚ[][ˆ[™Z[œšXÚ[™Ù[ˆ[H™\ž™ZXÚš\Ø˜ZÝ\ØÚ°ïˆZÝY[HÝ[™ÜH™\ÝZ[™HZ[°éÙH[H™\™ÙYÜ™™\ˆ™\ž™ZXÚš\È]™[‹ˆYðé™ÛXÚÙZ]0å™™›[™ÜÞ™Z][ˆ[™]ðéÚXÚH]˜˜\šÙZ]Ú[™™HÜH°ï™[‹˜™^š\šÈ™\™ÙYÜ™˜™\œØÚYY[™HÝ[™ÜXÎ‹ËÛX\šØ™\™ÙYÜ™‹™Ú]X‹š[ËØ™\™ÙYÜ™‹YÙ[YZ[œØ[KÈÝ™\ž™ZXÚš\Ø™\™ÙYÜ™ˆÙ[YZ[œØ[XÚ™YŽ˜Ý™\ž™ZXÚš\ØJK	
Ý\š\ÛKZ[™›ØÙ™š^šY[H™\™ÙYÜ™‹UÝ\š\Û]\ÜÙZ]X˜ZÝ\ØÚYH^\›™HÝ\š\ÝR[™›Ü›X][Ûˆ\ÝZ[ˆÙ\šXÙH›Ûˆ™\™ÙYÜ™‹UÝ\š\Û]\È[HÚ\ØÚYËH[™ÝYX\šÙ][™È°ïˆYH™YÚ[Ûˆ™\™ÙYÜ™ˆK•‹ˆY\ÙH[˜Xš0é™ÚYÙH]›Ü›H\ÝšXÚ\™[ˆÙ™š^šY[\ˆ]Yš]˜™\™ÙYÜ™˜›Ú[›‹PYÛ‹R\ÜÙKT]ˆKŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËÚÛÛZÝ™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜˜YØ\ÜÙ\˜_JK	
ÙZ[™˜\ÜØ0ç™\›˜XÚ[ˆ[HÙZ[™˜\ÜÈ8 $ÈÙZ[‹H	ˆœšY\Ù[œÝX™X[\šÝ[™\ˆ™]™ZX™\ˆšY]]™ZZ^˜˜\™HØÚ[[Y\™°éÜÙ\ˆ[È™\ÛÛ™\™H0ç™\›˜XÚ[™ÜÛpí™ÛXÚÙZ][‹ˆYH™]™ZX™\œÙZ]H™\ØÚ™ZXØÚYšÛÛY›Ü[™YHpí™ÛXÚÙZ]Z[™\ˆÛÛXš[˜][ÛˆZ]Z[™[HØ[™KSYÚQ[›™\ˆ[™œ°ïÝ0ïÚÎÈZÝY[HXÚ˜\šÙZ]™Y[™Ý[™Ù[ˆ[™™Z\ÙHš]H\™ZÝ°ï™[‹ˆ\È[™ÙX›Ý\Ý[ˆ\ˆ™]™ZX™\š[™›Ü›X][ÛˆZ][HÝ[™ÜØÚÙ[Ù\™\ˆ™\˜[™[‹˜ØÚÙ[Ù\™\˜ØÚÙ[Ù\™\ˆÚ\˜Ú[™ZXÚLŒLÍÈ[X\™ØÎ‹ËÙœšY\Ù[œÝX™Kš[X\™ËÝYX™\›˜XÚ[‹Z[K]ÙZ[™˜\ÜËØÙZ[‹H	ˆœšY\Ù[œÝX™XØÛÛ[Y\˜ÚX[ˆLÜXÚX[Ý^NˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YXØ\Ý›Û›ÛZYX˜YKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÜ˜YÝ\™[‹Ù[™\˜YÙYØX™[˜™\™ÙYÜ™‹UÝ\š\Û]\È8 $È[™\˜YÙYØW_JK	
[X\™Ø›Ø]Ø]\Ø›ÛÝ0ï™\›˜XÚ[™Ù[ˆ8 $È[X\™Ð›Ø]Ø[\šÝ[™[X\™Ð›Ø]È™\ØÚ™ZXYH]\Ø›ÛÝHÝ]™K0ï™H[™°í™H[ÈØÚÚ[[Y[™H™\šY[[\šðï™H[H™\Ý™\˜[šÙ\[ˆYYÙ\]ˆ[ˆ[ÛÜ™›Y]ˆ\È[™[ÚXÚ[HÝ][Û°é™H0ç™\›˜XÚ[™Ù[ŽÈZ[™H˜ZZ][H]\Ø›ÛÝÚ\™Y\ˆšXÚ[™ÙX›Ý[‹ˆ™\™°ïØ˜\šÙZ]ØZ\ÛÛˆ[™XÚ[™ÜØ™Y[™Ý[™Ù[ˆš]H™Z[H™]™ZX™\ˆ°ï™[‹˜[ÛÜ™›Y][ÛÜ™›Y]\ˆZXÚÍM‹ŒŒLLÈ[X\™ØÎ‹ËÚ[X\™Ø›Ø]Ë™KÚ]\Ø›ÛÝX[X\™Ð›Ø]ØØÛÛ[Y\˜ÚX[ˆLÜXÚX[Ý^NˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜YØ\ÜÙ\˜KY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÚ[X\™Ø›Ø]Ë™KØX™[˜[X\™Ð›Ø]È8 $È[˜šY]\˜W_JK	
Y˜Ë]Ý\™[˜ÙY°ïHQËT˜YÝ\™[ˆ[ˆ[™[H™\™ÙYÜ™˜˜Y\ˆQÈ™\°í™™™[XÚZÝY[H˜YÝ\™[ˆ[™™\˜[œÝ[[™Ù[ˆ[ˆÙZ[™[HÙ™š^šY[[ˆÝ\™[œÜ[ˆ\›Z[™KÝ\ÜKZ[˜ZYX™Y[™Ý[™Ù[ˆ[™[›Y[\Ý]\È0é™\›ˆÚXÚÈY\ÙHÙZ]H™\›[šÝYH]Y™[™H0ç™\œÚXÚÝ]Z[™[ˆZ[ž™[\›Z[ˆ]Y\šY[ÈZÝY[HÙ[›ž™ZXÚ™[‹ˆ\ÈÝ\™HÙZ[™H™\›0éÜÛXÚKÙ™š^šY[[\œÝ0ïHÝ]\ØÚHØÚš]Ý[H°ïˆYH™YÙ[pé0çÚYÙH0ç™\›˜ZYH›Ûˆ\›Z[™[ˆ™\ÝÙ\Ý[˜™\™ÙYÜ™ˆ[™[YÙX[™Ø™Y™œ[šÝH™H™\˜[œÝ[[™ØÎ‹ËÝÝ\™[‹]\›Z[™K˜Y˜Ë™KØQËUÝ\™[œÜ[ØØ]YÛÜžS[šÜÎ–ØÝ[\˜˜ZÝ\ØÚKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÚ[X\™Ë˜Y˜Ë™KÝ™\˜[œÝ[[™Ù[˜X™[˜QÈ[X\™È8 $È™\˜[œÝ[[™Ù[˜W_JK	
ÙYÙ[›YÜ]‹X›Ø™\™ØÙYÙ[›YÜ]ˆ›Ø™\™Ø˜[Z[YX[HÙYÙ[›YÙÙ[0é™H›Ø™\™ÈÚ[™\ˆ[X\™Ù\ˆY\›ËPÛXˆ›Ø™\™È[™\ÈÙYÙ[›YÞ™[[H[X\™È›Ø™\™ÈZÝ]‹ˆ\ˆPÈ™[›Ø\Ý›0ïÙH[™™\ÝXÚ\ˆðé™[™\ˆ›YÜØZ\ÛÛˆpéžˆš\ÈÚÝØ™\ŽÈ™Z[H“Ù\™[ˆÙ[›™[›\›™›0ïÙH™\ØÚšYX™[‹ˆ™\ÝXÚÞ™Z][‹Ù]\›YÙKXÚ[™È[™ÚXÚ\šZ]Ü™YÙ[ˆ]\ÜØÚYpçÛXÚ™ZH[ˆ™\™Z[™[ˆZÝY[°ï™[‹˜Úœ°ïÙÙHÈ›Ø™\™ØÙZY[[ÛÜˆŒH[™ŒËŒLÌÈ[X\™ØÎ‹ËÝÝÝËšXËX›Ø™\™Ë™KØ[X\™Ù\ˆY\›ËPÛXˆ›Ø™\™ØØÛÛ[Y\˜ÚX[ˆLKØ]YÛÜžS[šÜÎ–Ø˜]\˜˜Y˜ZÝ\ØÚKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝËšXËX›Ø™\™Ë™KÛZ]›YËš[X™[˜PÈ›Ø™\™È8 $ÈØ\Ý›0ïÙXKÝ\›˜Î‹ËÝÝÝËšXËX›Ø™\™Ë™KÚÛÛZÝš[X™[˜PÈ›Ø™\™È8 $È™\ÝXÚ[™›YÜØZ\ÛÛ˜KÝ\›˜Î‹ËÝÝÝËš›X›Ø™\™Ë™KÙ›YYË[Z]X™[˜“›Ø™\™È8 $ÈÙ[›™[›\›™›0ïÙXW_JK	
ÛÚØ\ZÙ˜ÛÚØ\™\›ZZ[HÛÚØ\Ù˜˜[Z[YX™\™ÙYÜ™‹UÝ\š\Û]\È°ï[ˆÛÚØ\™\›ZZ[H™]Y[™Ø[[Y\ˆ]\ÙZXÚˆZÝY[\ˆ™]šYX‹[\œËH[™][™ÜØ™Y[™Ý[™Ù[‹\›Z[™H[™ÛÜÝ[ˆÚ[™\™ZÝ™Z[H[˜šY]\ˆH°ï™[‹˜™]Y[™Ø[[YX™]Y[™Ø[[Y\ˆ]\ÙZXÚLKŒLÎH[X\™ØÎ‹ËÝÝÝË™ÛÚØ\Ù‹™KØÛÚØ\Ù˜ØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜Y˜ZÝ\ØÚ_JK	
Ý]ØÚ˜Z[‹X\›Y\Ý\˜Ý]ØÚH[™[ØYÙ[™˜Z[ˆ\›Y\Ý\˜˜[Z[YX\ˆ\›X›š\Ø˜]Y\›šÙˆ\›Y\Ý\ˆ°ïÝ]ØÚH[™[ØYÙ[™˜Z[ˆ[È[™ÙX›Ýˆ\›Z[™KÜ\[™Ü°í°çÙKYðé™ÛXÚÙZ]X™˜Z[™ÛÜÝ[ˆš]H™Z[H[˜šY]\ˆ™\Ý0éYÙ[‹˜[ÛÜ™›Y][ÛÜ™›Y]\ˆZXÚÍÌËŒŒLLÈ[X\™ØÎ‹ËÝÝÝË™\›X›š\Ø˜]Y\›šÙ‹X\›Y\Ý\‹™KØ\›X›š\Ø˜]Y\›šÙˆ\›Y\Ý\˜ØÛÛ[Y\˜ÚX[ˆLØ]YÛÜžS[šÜÎ–Ø˜]\˜˜Y_JK	
YYØX˜[ØYYØX˜[ÈÈØ\ÜÙ\˜°éX˜[Z[YX™\™ÙYÜ™‹UÝ\š\Û]\È™[›Ø\ÜÙ\˜°éH[ÈÙ[YÙ[XÚ\ÈØZ\ÛÛ˜[\Èœ™Z^™Z][™ÙX›ÝˆZ[ˆ]Y\šYÙpí™™›™]\ˆ™]šYXˆÙ\ˆ™YÙ[pé0çÚYÙH\›Z[™HÛÛ›[ˆ[ˆ[ˆYðé™ÛXÚ[ˆZÝY[[ˆ™]™ZX™\œ]Y[[ˆšXÚ™\Ý0éYÝÙ\™[‹ˆ›ÜˆZ[™[H™\ÝXÚ]\ÜØÚYpçÛXÚZÝY[H[šðï™YÝ[™Ù[ˆ°ï™[‹˜™\™ÙYÜ™ˆ
™\˜[œÝ[[™ÜÛÜ]]ZÝY[\ˆ[šðï™YÝ[™ÊXÙZ[ˆ]Y\šY™\Ý0éYÝ\ˆÝ[™ÜÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÙœ™Z^™Z]ZÝ]š]Y][‹ÝÙZ]\™K]\Ø™\™ÙYÜ™‹UÝ\š\Û]\ØØØ]YÛÜžS[šÜÎ–ØØ\ÜÙ\˜KÝ]\Î˜ØZ\ÛÛ˜[\ËÙÙ[YÙ[XÚ\È[™ÙX›ÝÈZÝY[\ˆ\›Z[ˆšXÚ™\Ý0éYÝJK	
[\›[ÙZ\‹]ÚY\Ù[˜[\›píš\ˆÚY\Ù[˜˜]\˜˜]\œØÚ]™ÙXšY]\ˆšY\‹H[™X\œØÚ[™K\È[ˆ\ˆ0ç™\œÚXÚ\ˆ[X\™Ù\ˆØÚ]™ÙXšY]H[H™^š\šÈ™\™ÙYÜ™ˆ]Y™ÙY°ï\Ýˆ°ïˆ™\ÝXÚHÙ[[ˆYH0íœXÚ[ˆØÚ]‹H[™ÙYÙYÙX›ÝNÈÙZ[™Hœ™ZHÙ\ØÚ0éHZ][[šÝÛÛÜ™[˜]HÚ\™[™Ù^™ZYÝ˜[\›píšX[\›píš\ˆÚY\Ù[‹[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÛ˜]\œØÚ]™ÙXšY]KZ[KX™^š\šËX™\™ÙYÜ™‹NL•RÑPH[X\™ØÙÙ[ÛY]žU\N˜\™XXœ™YN˜ØÚ]™ÙXšY]È\ˆ[0éÜÚYÙHÙYÙH]™[‹˜JK	
[\‹ZÛšY™[˜[\ˆÛšY™[˜˜]\˜\ˆ[HÛšY™[ˆÙZ0íœH[ˆ[ˆ™\™ÙYÜ™ˆ™[˜[›[ˆ˜]\‹H[™ØÚ]™ÙXšY][‹ˆYØ[™È[™ØÚ]›Ü™ØX™[ˆ›ÜˆÜ™XXÚ[ŽÈX[™Ù[È™\šYš^šY\\ˆÛYÛÛ™Ù[ÛY]šYHÚ\™ÙZ[™H›0éÚHZ[™Ù^™ZXÚ™]˜[ÛÜ™›Y]Èš[Ù\™\˜[\ˆÛšY™[‹[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÛ˜]\œØÚ]™ÙXšY]KZ[KX™^š\šËX™\™ÙYÜ™‹NL•RÑPH[X\™ØÙÙ[ÛY]žU\N˜\™XXœ™YN˜ØÚ]™ÙXšY]È0íœXÚH™]™][™ÜÜ™YÙ[ˆ™XXÚ[‹˜JK	
ÜY[›Y[™\‹\Ü]™XÜY[›0é™\ˆÜ]™X˜]\˜[™ØÚYËH[™˜]\œ˜][H[ˆ\ˆ›Ü™\™[™K[ˆ™\™ÙYÜ™‹UÝ\š\Û]\È[ÈØÚ]™ÙXšY]]Y™°ïˆYHÙ[˜]YHX™Ü™[ž[™È\Ý\ˆ[]XÚ[ˆÙ[Ù][œ]Y[HH[™ZY[ŽÈY\ˆÚ\™ÙZ[ˆÙ\ØÚ0é\ÈÙXšY]ÜÛYÛÛˆ\™Ù\Ý[˜ÜY[›[™ÜY[›0é™\ˆÜ]™K[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÛ˜]\œØÚ]™ÙXšY]KZ[KX™^š\šËX™\™ÙYÜ™‹NL•RÑPH[X\™ØÙÙ[ÛY]žU\N˜\™XXØ]YÛÜžS[šÜÎ–Ø˜Y˜[Z[YXKœ™YN˜ØÚ]™ÙXšY]È0íœXÚH™]™][™ÜÜ™YÙ[ˆ™XXÚ[‹˜JK	
™\™ÙYÜ™™\‹YÙZÙ[˜™\™ÙYÜ™™\ˆÙZ0í›ˆ[™ØÚÜÜË^KTØÚÜÜËTÜ^šY\™Ø[™Ø˜]\˜0å™™™[XÚHØ[H[™\šÛ[™ÜÙ›0éÚKˆ™\™ÙYÜ™‹UÝ\š\Û]\È™\ØÚ™ZXZ[™[ˆÜ^šY\™Ø[™È›ÛH™\™ÙYÜ™™\ˆØÚÜÜÈ[ˆšXÚ[™È™Z[˜™ZÎÈY\Ù\ˆ°ïZ[ÙZ\ÙH0ï™\ˆYH™^š\šÜÙÜ™[ž™H[˜]\ËˆZ[™H›Ý]HÚ\™X[™Ù[È0ï™\œ°ï\ˆÙYÙÙ[ÛY]šYHšXÚ[È[šYHZ[™Ù^™ZXÚ™]˜™\™ÙYÜ™ˆÈ™Z[˜™ZÈ
[[[™
X™\™ÙYÜ™™\ˆÙZ0í›˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÛ˜]\‹Y[XÚÙ[‹Ø™\™ÙYÜ™™\‹YÙZÙ[‹Ø™\™ÙYÜ™‹UÝ\š\Û]\ØÙÙ[ÛY]žU\N˜\™XXØ]YÛÜžS[šÜÎ–Ø[™ØY[™ÙX˜[Z[YXKœ™YN˜0å™™™[XÚHÙYÙNÈ\ˆÙZ]\™°ï™[™HÜ^šY\™Ø[™È™ZXÚ[ˆ\È[[[™˜JK	
Ø\›Û[™X\ÝÜš\ØÚHZ\Ù[˜˜Zˆ8 '’Ø\›Û[™x '˜XÚÙY\ÝXÚ˜[Z[YXYH\˜™Z]ÙÙ[YZ[œØÚYÙY\ÝXÚ\ˆZ\Ù[˜˜ZˆšY]][ˆYZ™\™[ˆÛØÚ[™[™[ˆ[H˜Zˆ]\Ù][\Ù˜Z[ˆ[‹ˆYH\ÝÜš\ØÚH˜Z™YÚ[›[ˆ™\™ÙYÜ™‹Tðï[™°ï0ï™\ˆ°íœ›œÙ[ˆ[™\ØÚX\™È˜XÚÙY\ÝXÚZ[ÙZ\ÙHÙZ]\ˆ˜XÚÜ°ï[Y[ˆ\È\ÝZ[ˆÙ[YÙ[XÚ\È]\Ù][\Ø[™ÙX›ÝÙZ[ˆ™YÝ[0é™\ˆ0í™™™[XÚ\ˆ™\šÙZ‹ˆ\›Z[™H[™™]šYXˆ™Z[H™\˜[œÝ[\ˆ°ï™[ŽÈÙY\ÝXÚYYÝ]pçÙ\š[ˆ\È™^š\šÜË˜™\™ÙYÜ™‹TðïÈÙY\ÝXÚ
[[[™
X˜ZšÙˆ™\™ÙYÜ™ˆðïÎ‹ËÝÝÝËš[X\™Ë™KÝ™\šÙZ‹Ø\ËX˜Z‹Ø˜Z‹ÚØ\›Û[™KYZ\Ù[˜˜Z‹YÙY\ÝXÚLÍÌŒLŽœ™ZYH[™[œÙ\ÝY[X\™ØÛÝ]ÚYN˜šY[[™Ý™XÚÙ[˜XœØÚš]HYYÙ[ˆZ[ÙZ\ÙH]pçÙ\š[ˆ\È™^š\šÜÈ™\™ÙYÜ™‹˜Ø]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜˜ZÝ\ØÚKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË™ÙY\ÝXÚ]Ý\š\Û]\Ë™KÜÚKÛ]\Ù][\ÙZ\Ù[˜˜Z‹ZØ\›Û[™XX™[˜ÙY\ÝXÚÝ\š\Û]\È8 $È]\Ù][\ÙZ\Ù[˜˜Z˜W_JK	
ÛØÚ[›XY\šÝKX™\™ÙYÜ™˜ÛØÚ[›péšÝH[H™^š\šÈ™\™ÙYÜ™˜˜ZÝ\ØÚYHœ™ZYH[™[œÙ\ÝY[X\™È™\°í™™™[XÚZ[™HZÝY[H0ç™\œÚXÚ\ˆÛØÚ[›péšÝH[H™^š\šËˆÝ[™ÜKX\šÝYÙKZž™Z][‹™\›YÝ[™Ù[ˆ[™]\Ù°éHðí››™[ˆÚXÚ0é™\›ˆ[™Ú[™›Üˆ[H™\ÝXÚ]Yˆ\ˆÙ™š^šY[[ˆX\šÝÙZ]HH°ï™[‹ˆ\ÈÙ\™[ˆY\ˆÙZ[™HÙ\ØÚ0é[ˆX\šÝZ][[šÝHØ\Y\˜YZ™\™HÝYZ[XZÝY[HÝ[™ÜH[™™Z][ˆÚYZHÙ™š^šY[H0ç™\œÚXÚÎ‹ËÝÝÝËš[X\™Ë™KÙœ™Z^™Z]ÛXY\šÝK][™[Y\ÜÙ[‹ÝÛØÚ[›XY\šÝKØ™\™ÙYÜ™‹LÌÎMLœ™ZYH[™[œÙ\ÝY[X\™ØÛX\šÙ]ˆLØ]YÛÜžS[šÜÎ–ØØ\Ý›Û›ÛZYX[Øš[]Y]_JK	
™\™ÙYÜ™™\‹\ÝY™\Ý™\™ÙYÜ™™\ˆÝY™\Ý8 $È™\˜[œÝ[[™ÜÚ[™›Ü›X][Û˜Ý[\˜Ù™š^šY[H™\˜[œÝ[\œÙZ]H°ïˆ\È™\™ÙYÜ™™\ˆÝY™\Ýˆ\ÈÚ\™ÙZ[ˆZðï™YÙ\ˆ\›Z[ˆ]\Èœ°ï\™[ˆ]\ÙØX™[ˆX™Ù[Z]]ˆ][K›ÙÜ˜[[K™\˜[œÝ[\ˆ[™™\˜[œÝ[[™ÜÙ›0éÚ[ˆÙ[[ˆ\œÝ˜XÚZÝY[\ˆ™\°í™™™[XÚ[™È]Yˆ\ˆÙ™š^šY[[ˆÙZ]H[È™\Ý0éYÝ˜™\™ÙYÜ™˜™\˜[œÝ[[™ÜÙ›0éÚH]]ZÝY[\ˆ]\ÙØX™XÎ‹ËÝÝÝË˜™\™ÙYÜ™™\‹\ÝY™\Ý˜ÛÛKØ™\™ÙYÜ™™\ˆÝY™\ÝØØ]YÛÜžS[šÜÎ–Ø˜ZÝ\ØÚK]™[™[YNˆLÝ]\Î˜ZÝY[H\›Z[™H]\ÜØÚYpçÛXÚ˜XÚ™\˜[œÝ[\˜[šðï™YÝ[™ØJK	
™\™ÙYÜ™™\‹]ÙZZ˜XÚÛX\šÝ™\™ÙYÜ™™\ˆÙZZ˜XÚÛX\šÝ8 $È™\˜[œÝ[[™ÜÚ[™›Ü›X][Û˜Ý[\˜Ù™š^šY[H[™›Ü›X][ÛœÜÙZ]H\ÈÙZZ˜XÚÛX\šÝËˆY\ÙHÙZ]HÜZXÚ\ÙZ[™[ˆ°é›XÚÚYY\šÙZ™[™[ˆ\›Z[ˆ[È™\Ý0éYÝÈZÝY[H0å™™›[™ÜÞ™Z][‹›ÙÜ˜[[H[™™\˜[œÝ[[™ÜÙ›0éÚHš]H™Z[H™\˜[œÝ[\ˆ°ï™[‹˜™\™ÙYÜ™˜™\˜[œÝ[[™ÜÙ›0éÚH]]ZÝY[\ˆ]\ÙØX™XÎ‹ËØ™\™ÙYÜ™™\‹]ÙZZ˜XÚÛX\šÝ™KØ™\™ÙYÜ™™\ˆÙZZ˜XÚÛX\šÝØØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜ZÝ\ØÚK]™[™[YNˆLÝ]\Î˜ZÝY[H\›Z[™H]\ÜØÚYpçÛXÚ˜XÚ™\˜[œÝ[\˜[šðï™YÝ[™ØJK	
Ý]œ›ØÚØÝ]œ›ØÚÈ8 $È™\Ý]˜[[™›Ü›X][Û˜Ý[\˜Ù™š^šY[H™\Ý]˜[ÙXœÚ]HZ][™›Ü›X][Û™[ˆH›ÙÜ˜[[H[™™\˜[œÝ[[™ÜÛÜˆÛÛšÜ™]H\›Z[™H[™›0éÚ[ˆÙ\™[ˆ\ˆ[ÈZÝY[™Z[™[Ù[›ˆÚYHÜ°ïˆYH™]™Y™™[™H]\ÙØX™H[™ÙZðï™YÝÚ[™˜[ÛÜ™›Y]ÈZXÚ˜][\ÙYX™\Ý]˜[›0éÚH]]ZÝY[\ˆ]\ÙØX™XÎ‹ËÝÝ]œ›ØÚË™KØÝ]œ›ØÚÈK•‹˜ØØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜]\˜K]™[™[YNˆLÝ]\Î˜ZÝY[H\›Z[™H]\ÜØÚYpçÛXÚ˜XÚ™\˜[œÝ[\˜[šðï™YÝ[™ØJK	
X[\‹[XÚÚY\™\‹[]\Ù][X]]ØÚ\ÈX[\‹H[™XÚÚY\™\‹S]\Ù][XÙZ[œÝÝY\™YÚÙZ][˜\È]\Ù][H[H[HMŒ\œšXÚ][ˆÛØÚÙ[š]\ÈÚÝ[Y[Y\YHÙ\ØÚXÚH\ÈX[\š[™Ù\šÜÈZ]Ù\šÞ™]YÙ[‹YÛY[[‹[™™ZXÚ[ˆ[™]\Ý\Ø[™[‹ˆYH™]™ZX™\œÙZ]H™[›™YÝ[0é™H™\ÝXÚH[HÛØÚ[™[™HÛÝÚYHÜ\[˜™\ÝXÚH˜XÚ›Üš\šYÙ\ˆ[›Y[[™ÎÈZÝY[H0å™™›[™ÜÞ™Z][ˆ[™™Z\ÙHš]HÜ°ï™[‹˜š[Ù\™\˜š[Ù\™\ˆš[ZXÚÌ‹ŒŒLLÈ[X\™ØÎ‹ËÝÝÝË›X[\›]\Ù][K™KØ™\ÝXÚØ]]ØÚ\ÈX[\‹H[™XÚÚY\™\‹S]\Ù][XË‹‹šÛJ›ÙXNLNLÍØLËLŒÌLŒLNMŽN
KØ]YÛÜžS[šÜÎ–ØÝ[\˜˜[Z[YXKÛÛ[Y\˜ÚX[ˆLKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›X[\›]\Ù][K™KÙÙ\ØÚXÚWÙÛØÚÙ[š]\Ëš[X™[˜]\Ù][H8 $ÈÙ\ØÚXÚH\ÈÛØÚÙ[š]\Ù\ØKÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÛ›ÙKÌNLNLÍØX™[˜Ü[”Ý™Y]X\8 $È]\Ù][\ÜÝ[™ÜW_JK	
™Z]œ›ÛÚÙ\‹[]YZX™Z]œ›ÛÚÙ\ˆpïXÙZ[œÝÝY\™YÚÙZ][˜\ˆØ[\šYZÛ0é™\ˆÝ[[]]\È[H˜ZˆNÌÈ[™™\Ú]˜XÚ\ˆ[X\™Ù\ˆÝYZ[[™›Ü›X][Ûˆ[ÈZ[žšYÙH[X\™Ù\ˆpïHÜšYÚ[˜[Ù]™]YHÚ[™pï[™›0ïÙ[ˆ[HÙX°éYH\˜™Z]]]]HZ[ˆ]\‹H[™0ï™Ù[Z][™]šYX‹ˆZ[ˆ™YÝ[0é™\È0í™™™[XÚ\È]\Ù][HÙ\ˆ™\ÚXÚYÝ[™ÜØ[™ÙX›Ý\ÝšXÚ™[YÝÈšXÚZ]Z[™\ˆœ™ZHYðé™ÛXÚ[ˆpïH™\ÙXÚÙ[ˆ[™Z[™[ˆ™\ÝXÚ›Ü˜Xˆ™Z[H™]šYXˆÛ0é™[‹˜™Z]œ›ÛÚØ›Ü™\™ZXÚLHÈ™Z]œ›ÛÚÙ\ˆpï[˜œ°ïÚÙHKŒLÍÈ[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÚ\ÝÜš\ØÚK\ÙZ[œÝÝY\™YÚÙZ][‹ÝÚ[™]YZ[˜™\™ÙYÜ™‹UÝ\š\Û]\ØË‹‹šÛJØ^XŽLMÍÍXLËÌNŒËLŒMÌNLMÊKØ]YÛÜžS[šÜÎ–Ø˜YKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌŽLMÍÍXX™[˜Ü[”Ý™Y]X\8 $Èpï[™ÙX°éYXWKÝ]\Î˜Ù]Ù\˜›XÚ\ˆpï[œÝ[™ÜÈ0í™™™[XÚH™\ÚXÚYÝ[™ÈšXÚ™\Ý0éYÝJK	
Ù\ØÚXÚÚÛÛÜ˜Ý[\‹H	ˆÙ\ØÚXÚÚÛÛÜˆ™\™ÙYÜ™˜Ý[\˜YHÙ\ØÚXÚÝÙ\šÜÝ]°ïˆ™\™ÙYÜ™‹Úœ°ïÙÙH[™YHšY\‹H[™X\œØÚ[™HšY]]]\ÜÝ[[™Ù[‹ÚØ[HÙ\ØÚXÚÙ›ÜœØÚ[™È[™[™ÙZðï™YÝH\ÝÜš\ØÚH[™ðé™ÙKˆ\ðé›XÚ\ÝZ[™HT‹PÛÙKP]Y[ÝÝ\ˆ[™[H[ˆÙ\œ˜Zˆ™\ØÚšYX™[‹ˆ™Y™œ[šÝK[›Y[[™Ë\›Z[™H[™™Z\ÙHÙ[[ˆ™H[™ÙX›Ý[™Ú[™]Yˆ\ˆ›ÙÜ˜[[\ÙZ]HH°ï™[‹˜™\™ÙYÜ™˜™Y]Ù\™\ˆ
]\ÜÝ[[™Ù[‹Õ™\šØ]YŠNÈ™Y]Ù\™\ˆMÈ
\˜Ú]‹ÑÙ\ØÚ0éÜ°é[YJKŒLŽH[X\™ØÎ‹ËÙÙ\ØÚXÚËZÛÛÜ‹™KÜ[™ØY[™ÙKØÝ[\‹H	ˆÙ\ØÚXÚÚÛÛÜ˜Ë‹‹šÛJØ^XŒLÎŒXLËLÌLL‹LŒŒMÌMŒÊKØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜[™ØY[™ÙXKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÙÙ\ØÚXÚËZÛÛÜ‹™KÚÛÛZÝZ[\™\ÜÝ[KØX™[˜Ù\ØÚXÚÚÛÛÜˆ8 $ÈÛÛZÝ[™[œØÚšY[˜KÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌŒLÎŒXX™[˜Ü[”Ý™Y]X\8 $È™Y]Ù\™\ˆW_JK	
ÝY[œÝ\š]\ËX™\™ÙYÜ™˜ðïœÝ\š]\È[X\™ËP™\™ÙYÜ™˜Ý[\˜\ÈðïœÝ\š]\È\ÝÙZ]NNM[Hpí°íœšÙ[ÙYÈ[œðéÜÚYÈ[™™\°í™™™[XÚÙXÚÙ[™H]\ÜÝ[[™Ù[ˆZ]™Z]Ù[°íœÜÚ\ØÚ\ˆÝ[œÝˆ\È›ÙÜ˜[[H]Yˆ\ˆÙ™š^šY[[ˆÙZ]H[0é]\ÜÝ[[™Ù[ˆ\È˜Z™\ÈŒŽÈY\ÙH™\™Ø[™Ù[™[ˆ\›Z[™HÙ\™[ˆšXÚ[Èðï™YÙH™\ÝXÚÞ™Z][ˆ\™Ù\Ý[ˆZÝY[H0å™™›[™È[™]\ÜÝ[[™Ù[ˆ›Üˆ[H™\ÝXÚ°ï™[‹˜™\™ÙYÜ™˜pí°íœšÙ[ÙYÈN¸ $ÙËŒLŽH[X\™ØÎ‹ËÚÝY[œÝ\š]\ËX™\™ÙYÜ™‹™KØ[KX]\ÜÝ[[™Ù[‹ÙÙ\[KX]\ÜÝ[[™Ù[‹ØðïœÝ\š]\È[X\™ËP™\™ÙYÜ™˜Ë‹‹šÛJ›ÙXMŒŒMLËMLNLLKLŒŒNLNMÊKØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜KY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÚÝY[œÝ\š]\ËX™\™ÙYÜ™‹™KÚÛÛZÝØX™[˜ðïœÝ\š]\È8 $ÈÛÛZÝKÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÛ›ÙKÌMŒŒMX™[˜Ü[”Ý™Y]X\8 $Èpí°íœšÙ[ÙYÈN˜W_JK	
Ú]KXÝX™KX™\™ÙYÜ™˜Ú]HÝX™H™\™ÙYÜ™˜Ý[\˜Ý[\™\™Z[ˆ[™™\˜[œÝ[[™ÜÛÜ[ˆ™\™ÙYÜ™‹UÙ\ÝˆYH›ÙÜ˜[[\ÙZ]H™\°í™™™[XÚ˜^ž‹H[™ÙZ]\™HÝ[\\›Z[™NÈÛÛšÜ™]H™\˜[œÝ[[™Ù[ˆÙ\™[ˆ\ˆ˜XÚ[šðï™YÝ[™È[È\›Z[šY\™Z[™[ˆYØ[™ÜØ™Y[™Ý[™Ù[ˆ[™XÚÙ]Èš]H™Z[H™\˜[œÝ[\ˆ°ï™[‹˜™\™ÙYÜ™‹UÙ\ÝÝ\PK‹Rðíœ˜™\‹PÚ]\ÜÙYHÌËŒLÌÈ[X\™ØÎ‹ËÝÚ]XÝX™KX™\™ÙYÜ™‹™KÚ[™^œÚYLØÚ]HÝX™H™\™ÙYÜ™˜Ë‹‹šÛJØ^XÌÍØLËLLŒ‹LŒNLŒÎNÊKØ]YÛÜžS[šÜÎ–Ø˜[Z[YXK]™[™[YNˆLY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÚ]XÝX™KX™\™ÙYÜ™‹™KÚ[™^œÚYNX™[˜Ú]HÝX™H8 $ÈÛÛZÝKÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌÌÍØX™[˜Ü[”Ý™Y]X\8 $ÈÙX°éYH[ˆ\ˆ[œØÚšYW_JK	
[œØKYš[\ÝY[Ø[œØKQš[\ÝY[ØÝ[\˜\È[œØKQš[\ÝY[È\ÝZ[ˆÚ[›È[ˆ\ˆ[[ˆÛÝ[œÝ˜pçÙKˆ\ÈZÝY[HÚ[›Ü›ÙÜ˜[[H[™YH™\ÝXÚÚ[™›Ü›X][Û™[ˆÙ\™[ˆ]Yˆ\ˆ™]™ZX™\ÙXœÚ]HÙY°ï˜Úœ°ïÙÙX[HÛÝ[œÝ˜pçÙHMø $ÌNKŒLÌH[X\™ØÎ‹ËØ™\™ÙYÜ™‹ZÚ[›Ë™KÜ›ÙÜ˜[[X[œØKQš[\ÝY[ØË‹‹šÛJ›ÙXNMNMLÍXLËLÍÎLŒŒÌÍŽLÊKØ]YÛÜžS[šÜÎ–Ø˜[Z[YXK]™[™[YNˆLY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËØ™\™ÙYÜ™‹ZÚ[›Ë™KÚÛÛZÝØY™\ÜÙK][Y›Û›[[Y\˜X™[˜[œØKQš[\ÝY[È8 $ÈY™\ÜÙH[™[Y›Û›[[Y\˜KÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÛ›ÙKÌNMNMLÍXX™[˜Ü[”Ý™Y]X\8 $ÈÚ[›ØW_JK	
ÝÚ[™ÛÛ‹Z[X\™ØÝÚ[‘ÛÛˆ[™pçØ˜[ÛÛˆ[X\™Ø˜[Z[YX\ˆ™]™ZX™\ˆ°ïZ[™HÝÚ[‘ÛÛ‹H[™pçØ˜[ÛÛ˜[›YÙHZ]Y[[˜ØY°êH[™\œ˜\ÜÙH[ˆØÚÙ[Ù\™\‹ˆ˜XÚ™]™ZX™\˜[™ØX™H\ÝÙY\ˆ]œ™ZY™H›ØÚÛX›Z]ÛYYØÚY\™›Ü™\›XÚÈÜY[X]\šX[ÙZ0íœ[H[™ÙX›ÝˆYHØZ\ÛÛˆŒˆ\Ý™Y[™]ÈYHÙXœÚ]H™[›[ˆËˆ\š[ŒÈ[ÈØZ\ÛÛœÝ\ˆXÚ[™Ë™Z\ÙH[™0å™™›[™È[H™\ÝXÚÝYÈ™Z[H™]™ZX™\ˆ°ï™[‹˜ØÚÙ[Ù\™\˜Ø]Y\\ˆ]\ZXÚLKŒLÍÈ[X\™ØÎ‹ËÜÝÚ[™ÛÛ‹Z[X\™Ë™KØÝÚ[™ÛÛˆ[X\™ØË‹‹šÛJØ^XÎÎŒXLËŒNL‹LŒÎMÌÍÊKØ]YÛÜžS[šÜÎ–Ø˜YØ\Ý›Û›ÛZYXKÛÛ[Y\˜ÚX[ˆLY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÜÝÚ[™ÛÛ‹Z[X\™Ë™KÙ\ÜØ˜[ÛÛ˜X™[˜ÝÚ[™ÛÛˆ[X\™È8 $ÈpçØ˜[ÛÛ˜KÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌÎÎŒXX™[˜Ü[”Ý™Y]X\8 $È[›YÙXW_JK	
ÛÛ‹[Ý[™ÙK[[ÛÜ™›Y]ÛÛˆÝ[™ÙH™\ÛÜ[ÛÜ™›Y]
Z[X[È™YÛÛˆ[ÛÜ™›Y]
X˜[Z[YX\ˆ™]™ZX™\ˆ°ï[ˆÝ[™Ü[ˆ[ÛÜ™›Y]]]H[ÈÛÛˆÝ[™ÙH™\ÛÜ[X\™ËS[ÛÜ™›Y]ˆYH™]™ZX™\š[™›Ü›X][Ûˆ™[›Z[™[ˆ‹SØÚRÝ\žœ]‹˜Z[š[™ÜËH[™[™ÛÜ˜[™ÙX›ÝNÈ›ÜšÙ[›š\ÜÙHÚ[™]]œ™Z^™Z]\šXÚ\™›Ü™\›XÚˆ™\™°ïØ˜\šÙZ]][™ÜÝ›Ü˜]\ÜÙ][™Ù[ˆ[™™Z\ÙHš]H›Üˆ[H™\ÝXÚ\™ZÝ°ï™[‹˜[ÛÜ™›Y]›Ü›[™š[™ÈM‹ŒŒLLÈ[X\™ØÎ‹ËÝÝÝË™ÛÛ›Ý[™ÙK™KÙKØ›ÙËÝÚ[ÛÛ[Y[‹Z[‹[[ÛÜ™›Y]ÛÛˆÝ[™ÙH™\ÛÜË‹‹šÛJ™[][Û˜ÍL˜LËLMÌLŒÌÌÍMÍ
KØ]YÛÜžS[šÜÎ–Ø˜YKÛÛ[Y\˜ÚX[ˆLY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË™ÛÛ›Ý[™ÙK™KÙKÚÛÛZÝX™[˜ÛÛˆÝ[™ÙH™\ÛÜ8 $ÈÛÛZÝ[™[œØÚšYKÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÌÍL˜X™[˜Ü[”Ý™Y]X\8 $ÈÛÛ˜[›YÙH[ÛÜ™›Y]W_JK	
Z[šYÛÛ‹YÜY[™\Ë^™[[XZ[šYÛÛ˜[›YÙH[HÜ°ï™[ˆ™[[HÚœ°ïÙÙX˜[Z[YXYH[X\™Ù\ˆ[]Ù[™Z0íœ™H™\ØÚ™ZX[HÜ°ï™[ˆ™[[HZ[™HZ[šYÛÛ˜[›YÙKˆ\ˆ™“Úœ°ïÙÙH™\°í™™™[XÚðéÝZ[™›Ü›X][Û™[ˆ[™Z[™[ˆÛÛZÝ\ˆ[›YÙKˆØZ\ÛÛ‹]ðéÚXÚ\ˆ™]šYX‹™Z\ÙH[™0å™™›[™Èš]H›Üˆ[H™\ÝXÚ™Z[H™\™Z[ˆ°ï™[‹˜Úœ°ïÙÙXÜ°ï™\È™[[HÚœ°ïÙÙK°éHØ[\ÙYËŒLÍH[X\™ØÎ‹ËÝÝÝË™›[ÚœYYÙÙ]ŒNL‹™KÜÜÜ\[‹ÛZ[šYÛÛ˜™“Úœ°ïÙÙXØØ]YÛÜžS[šÜÎ–Ø˜]\˜KÛÛ[Y\˜ÚX[ˆLKÝ]\Î˜ÙZ[™H™\šYš^šY\H°éš\ÙH[›YÙ[šÛÛÜ™[˜]NÈZ\ˆÙZ[ˆØ\[œ[šÝY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹Ú[X\™ÜËYÜY[‹Ü\šØ[›YÙ[‹ÙÜY[™\Ë^™[[K[ÚœYYÙÙKLÍLÎX™[˜•RÑPH8 $ÈÜ°ï™\È™[[HÚœ°ïÙÙXKÝ\›˜Î‹ËÛZ[šYÛÛ‹]™›ÚœYYÙÙK™KÙØY\ÝKZ[™›ÜËØX™[˜Z[šYÛÛˆ™“Úœ°ïÙÙH8 $ÈðéÝZ[™›Ü›X][Û™[˜W_JK	
˜XÚ[›Xž\š[˜XÚ[›Xž\š[™\™ÙYÜ™‹UÙ\Ý8 $È[[[ÛšXX˜[Z[YXYH™]™ZX™\œÙZ]H°ïYHX™[]Y\Ù[8 '’[[[ÛšXx '[HœšYYšXÚQœ˜[šËP›ÙÙ[ˆH[ˆŒLÌÈ[X\™ËP™\™ÙYÜ™ˆ[™™\›[šÝ0å™™›[™ÜÞ™Z][‹™Z\ÙKTKÜ\[˜[™ÙX›ÝH[™XÚ[™ËˆYÙ\Ø™\ÝXÚ[\œØ[™Ù[Y\ÜÙ[šZ][™œ™ZYH0é™Hš]H›Ü˜Xˆ[š[™\ˆ™]ÙZ[YÙ[ˆ™]™ZX™\š[™›Ü›X][Û™[ˆ°ï™[ŽÈ\ˆÝ[™Ü\Ý›Ûˆ[™\™[ˆ˜XÚ[›Xž\š[SÜ[ˆH[\œØÚZY[‹˜™\™ÙYÜ™‹UÙ\ÝœšYYšXÚQœ˜[šËP›ÙÙ[ˆKŒLÌÈ[X\™ØÎ‹ËÝÝÝË™˜XÚ[›Xž\š[™KØ[™˜Zš[˜XÚ[›Xž\š[Ë‹‹šÛJ›ÙXLŽNÌÎNNLËMŒÌ‹LŒNLŒŒÎ
KØ]YÛÜžS[šÜÎ–ØÙZ[œÝÝY\™YÚÙZ][˜KÛÛ[Y\˜ÚX[ˆLÝ]\Î˜Ý[™Ü\˜Ú™]™ZX™\œÙZ]H™\Ý0éYÝÈZÝY[H0å™™›[™ÜÞ™Z][‹ÐXÚ[™È™H™\ÝXÚ°ï™[˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË™˜XÚ[›Xž\š[™KÜ™Z\ÙKš[X™[˜˜XÚ[›Xž\š[8 $È™Z\ÙXKÝ\›˜Î‹ËÝÝÝË™˜XÚ[›Xž\š[™KÙ˜\Kš[X™[˜˜XÚ[›Xž\š[8 $ÈTXKÝ\›˜Î‹ËÝÝÝË™˜XÚ[›Xž\š[™KØXÚ[™Ëš[X™[˜˜XÚ[›Xž\š[8 $ÈXÚ[™ØKÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÛ›ÙKÌLŽNÌÎNNX™[˜Ü[”Ý™Y]X\8 $È[[[ÛšXKTÝ[™ÜW_JK	
›Ø™\™Ù\‹\™Z]™\™Z[˜›Ø™\™Ù\ˆ™Z]™\™Z[ˆ8 $È™Z][\œšXÚ˜[Z[YX\ˆ™\™Z[ˆ™\ØÚ™ZX[\œšXÚ°ïˆ™\œØÚYY[™HZ\Ý[™ÜÜÝY™[‹\[\ˆÛ™Ù[œÝ[™[ˆÛÝÚYH™\ÜÝ\‹H[™Üš[™Ý[\œšXÚˆ\È\ÝZ[ˆÜ™Ø[š\ÚY\\È™Z][™ÙX›ÝÈÜÛ[™HÝ\š\Ý\ØÚHØ\ÝÝ[™[ˆÙ\ˆZ[™Hœ™ZYH™\ÚXÚYÝ[™ÈÚ[™šXÚYÙ\ÚXÚ\ˆ™\™°ïØ˜\šÙZ][›Y[[™È[™YØ[™È™Z[H™\™Z[ˆ\™œ˜YÙ[‹˜Úœ°ïÙÙHÈ›Ø™\™Ø[X\™ËP›Ø™\™ÎÈ[œØÚšY[™Ø\ÝYØ[™È›Ü˜Xˆ™Z[H™\™Z[ˆ™\Ý0éYÙ[˜Î‹ËÝÝÝË˜›Ø™\™Ù\‹\™Z]™\™Z[‹™KÝ[\œšXÚØ›Ø™\™Ù\ˆ™Z]™\™Z[˜ØÛÛ[Y\˜ÚX[ˆLKÝ]\Î˜™\™Z[œØ[™ÙX›ÝÈ0í™™™[XÚHØ\ÝXÚ[™ÈšXÚ™[YÝJK	
\›X›š\Ø˜]Y\›šÙ‹X\›Y\Ý\‹\™Z][˜\›X›š\Ø˜]Y\›šÙˆ\›Y\Ý\ˆ8 $ÈÙXXÚH™Z]H[™˜[Z[Y[˜[™ÙX›ÝX˜[Z[YX\ˆ™]™ZX™\ˆ™[›™Z][\œšXÚ[ZØ]Ø[™\[™Ù[ˆ[™Ú[™\™ÙX\ÝYÙKˆ\ˆÙZ\Ý]\Ù°ïÚÛXÚ\˜]Yˆ[‹\ÜÈ\ˆÙˆÙZ[ˆ0í™™™[XÚ\ˆ›ÛÈ\Ý[™YÙ\Ø™\ÝXÚHÚ™HXÚ[™ÈšXÚpí™ÛXÚÚ[™ˆZ[ˆ[™ÙX›Ý\ÝZ\ˆ\ˆ˜XÚ\™ZÝ\ˆXÚ[™È[™™\Ý0éYÝ[™È\˜Ú[ˆ™]šYXˆH]™[‹˜[ÛÜ™›Y][ÛÜ™›Y]\ˆZXÚÍÌËŒŒLLÈ[X\™ØÎ‹ËÝÝÝË™\›X›š\Ø˜]Y\›šÙ‹X\›Y\Ý\‹™KÜ™Z][‹Ø\›X›š\Ø˜]Y\›šÙˆ\›Y\Ý\˜ØØ]YÛÜžS[šÜÎ–Ø˜]\˜KÛÛ[Y\˜ÚX[ˆLÝ]\Î˜ÙZ[ˆ0í™™™[XÚ\ˆ›ÛÎÈYÙ\Ø™\ÝXÚHÚ™HXÚ[™È]\ÙÙ\ØÚÜÜÙ[˜JK	
Z[ÚÙ‹\™Z]œ›ÛÚØZ[ÚÙˆ™Z]œ›ÛÚÈ8 $È™YÚ[Û˜[HZ[Ú›ÙZÝX˜ZÝ\ØÚ\ˆ™]šYXˆ™\ØÚ™ZXYH\ž™]YÝ[™È[™]\ÛYY™\[™È›Ûˆœš\ØÚ\ˆ[™Z[Ú[™›ÜžYÜÛZ[Ú[ˆ]\Ú[H[ˆ[X\™È[™ØÚ\ÝÚYËRÛÝZ[‹ˆYH™]™ZX™\œÙZ]HÝ[[ˆ›ÙZÝ™^YÈ\ŽÈÙ›Y[‹Y\˜™\ÝXÚK°ï[™Ù[ˆÙ\ˆ[Ù[YZ[™HÙ˜™\ÚXÚYÝ[™Ù[ˆÚ[™[Z]šXÚ™\Ý0éYÝˆXšÛH[™YY™\›pí™ÛXÚÙZ][ˆš]H\™ZÝ°ï™[‹˜™Z]œ›ÛÚØ›Ü™\™ZXÚÍKŒLÍÈ[X\™ØÎ‹ËÝÝÝË›Z[ÚÙ‹\™Z]œ›ÛÚË™KØZ[ÚÙˆ™Z]œ›ÛÚØË‹‹šÛJ›ÙXÍMLÌÌLËÍMŒNMKLŒLÍNŒJKØ]YÛÜžS[šÜÎ–ØØ\Ý›Û›ÛZYXKÛÛ[Y\˜ÚX[ˆLY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÛ›ÙKÍÍMLÌÌX™[˜Ü[”Ý™Y]X\8 $ÈZ[ÚÙ˜W_JK	
XÚÙ\œ\›[˜XÚÙ\œ\›[ˆ8 $È\›XZÝ[\šÙˆ[™Ù™™[™\ˆØ\[˜˜[Z[YX\ˆ\›XZÝ[\šÙˆðï™YÝ›Ûˆ\š[š\ÈÚÝØ™\ˆZ[›X[[Û˜]XÚZ[™[ˆÙ™™[™[ˆØ\[ˆ[‹ˆX™ZHÙ\™[ˆØZ\ÛÛ˜[\ÈÙ[pïÙKZ]XXÚ[™ÙX›ÝH[™™H˜XÚ\›Z[ˆÙZ]\™H™\˜[œÝ[[™Ù[ˆ™\ØÚšYX™[‹ˆYHZÝY[H™\˜[œÝ[[™Üðï™\œÚXÚ™ZYÝH™Z[H™XÚ\˜ÚXXœYˆÙZ[™H[œÝZ[™[ˆZ[°éÙNÈÛÛšÜ™]H\›Z[™H›ÜˆZ[™[H™\ÝXÚ™Z[H™]™ZX™\ˆ°ï™[‹˜ÜY[›[™[ˆ\ˆÙZYHÈXÚÙHÙœØÚ0éÙ\ˆZXÚŒLÍÈ[X\™ØÎ‹ËØXÚÙ\œ\›[‹™KÝ™\˜[œÝ[[™Ù[‹ØXÚÙ\œ\›[˜ØØ]YÛÜžS[šÜÎ–Ø˜]\˜Ø\Ý›Û›ÛZYXKÛÛ[Y\˜ÚX[ˆLY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËØXÚÙ\œ\›[‹™KØX™[˜XÚÙ\œ\›[ˆ8 $È\›XZÝ[\šÙ˜KÝ\›˜Î‹ËÝÝÝË[K\]Y\˜™Y]™KÛZ]XXÚ\‹ØXÚÙ\œ\›[˜X™[˜šY\‹H[™X\œØÚ[™H]Y\˜™Y]8 $ÈXÚÙ\œ\›[˜W_JK	
š[ÚÙ‹\ÛÛ[Y\™™[š[ÚÙˆÛÛ[Y\™™[8 $ÈX\šÝ™\šØ]YˆÝ]Ù›Y[˜˜ZÝ\ØÚ\ˆš[ÚÙˆ\ÝZ[ˆ™]šYXˆ[ˆØÚÙ[Ù\™\‹ˆ[ˆ\ˆ™]™ZX™\š[™›Ü›X][ÛˆÝZ]\Ù°ïÚÛXÚ\ÜÈ\ÈÜÙZ[™[ˆÙ›Y[ˆÚXÈ\ˆ™]šYXˆ™[›ÙZ[™[ˆš[ËQÙ[pïÙ]™\šØ]Yˆ]YˆÛØÚ[›péšÝ[ˆ[ˆÝ[œÙ[‹ˆY\ÙHpéšÝHYYÙ[ˆ]pçÙ\š[ˆ™\™ÙYÜ™œËˆZ[ˆ0í™™™[XÚ\ÈÙ˜™\ÝXÚØ[™ÙX›Ý\ÝšXÚ™[YÝ˜ØÚÙ[Ù\™\ˆÈX\šÝ™\šØ]Yˆ[ˆÝ[œÙ[ˆ
]pçÙ\š[ˆ™\™ÙYÜ™œÊXØÚÙ[Ù\™\ˆ›Ü™\™ZXÚÌ‹ŒLÍÈ[X\™ØÎ‹ËØš[ÚÙœÛÛ[Y\™™[™KÝYX™\‹][œËØš[ÚÙˆÛÛ[Y\™™[ØÛÛ[Y\˜ÚX[ˆLÝ]ÚYN˜YH[ˆ\ˆ™]™ZX™\œ]Y[HÙ[˜[›[ˆÛØÚ[›péšÝHYYÙ[ˆ[ˆÝ[œÙ[‹]pçÙ\š[ˆ\È™^š\šÜÈ™\™ÙYÜ™‹˜Ý]\Î˜ÙZ[ˆÙ›Y[ˆ[™ÙZ[™H0í™™™[XÚ[ˆ™\ÚXÚYÝ[™ÜÞ™Z][ˆ]]Ù\°ï\ˆ™]™ZX™\œÙZ]XJK	
šY\‹[X\œØÚ[™K\]Y\˜™Y]šY\‹H[™X\œØÚ[™H]Y\˜™Y]8 $È™YÚ[Û˜[\ÈÙ›™]Ù\šØ˜ZÝ\ØÚ\È™]Ù\šÈ°ï™[[™›Ü›X][Û™[ˆH™]šYX™[ˆ[™™YÚ[Û˜[[ˆ[™ÙX›Ý[ˆ[ˆ[ˆšY\‹H[™X\œØÚ[™[‹ˆ\È\ÝÙZ[ˆZ[ž™[™\ˆÙˆ[™™\Ú]Z\ˆÙZ[™[ˆ™\°éÙ[]]™[ˆZ[ž™[Ø\[œ[šÝˆ0å™™™[™HÙYÙK™\˜[œÝ[[™Ù[‹™\šØ]YœÛÜH[™™\ÝXÚÛpí™ÛXÚÙZ][ˆÚ[™™]ÙZ[È[š[™\ˆZ[°éÙH\ˆ™]Z[YÝ[ˆ™]šYX™HH°ï™[‹˜šY\‹H[™X\œØÚ[™X™]Ù\šÈZ]YZ™\™[ˆ™]šYX™[ˆ[™Ü[˜Î‹ËÝÝÝË[K\]Y\˜™Y]™KØšY\‹H[™X\œØÚ[™H]Y\˜™Y]ØØ]YÛÜžS[šÜÎ–Ø˜]\˜Ø\Ý›Û›ÛZYXKÝ]\Î˜ÙZ[ˆZ[ž™[™\ˆÝ[™ÜÈÛÛšÜ™]H™\ÝXÚH\ˆ˜XÚ[™ÙX›ÝÜ°ï[™È™Z[H™]ÙZ[YÙ[ˆ™]šYX˜JK	
][˜™\™Ù\‹\ØÚ]\ÙX][˜™\™Ù\ˆØÚ]\ÙH8 $ÈØ\ÜÙ\˜˜]]Ù\šÈ[™ÜšY[Y\[™ÜÜ[šÝØ\ÜÙ\˜YH[X\™Ù\ˆÝYZ[[™›Ü›X][Ûˆ™[›YHØÚ]\ÙH[ÈX\šØ[[ˆÜ[ˆ\ˆÝ™KQ[™K[ˆœ™Z^™Z]›ÛÝH]Yˆ\ˆ˜ZÚ\ØÚ[ˆÝ™KQ[™H[™›Ü™\™[™H\ÜÚY\™[‹ˆ\È™\ØÚ™ZXYHØ\ÜÙ\œÝ˜pçÙH[™YHØZ›™Z][™È›ÛHØ\ÜÙ\ˆ]\ËÙZ[™[ˆœ™ZY[ˆYØ[™ÈH™]šYXœØ[›YÙ[‹ˆ™\ÚXÚYÝ[™ÈÙ\ˆ™Y˜Z™[ˆ\ˆ˜XÚÙ[[™[ˆ™]šYXœËH[™ÚXÚ\šZ]Ü™YÙ[‹˜][˜™\™Ø][˜™\™Ù\ˆØÚ]\ÙKÝ™KQ[™K[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÛX™[‹Z[‹Z[X\™ËØ™^š\šÙKZ[X\™ËÜÝYZ[KX™^š\šËX™\™ÙYÜ™‹Ý][˜™\™ËLÍÌŒ˜œ™ZYH[™[œÙ\ÝY[X\™ØØØ]YÛÜžS[šÜÎ–Ø˜Y˜]\˜KÝ]\Î˜™]šYXœØ[›YÙNÈÙZ[ˆYØ[™ÈHXÚš\ØÚ[ˆ™\™ZXÚ[ˆYÙ\ÚXÚ\JK	
ØÚÙ\Ù\šÙK]šY\‹[X\œØÚ[™XØÚ0íœÙ\šÙH\ˆšY\‹H[™X\œØÚ[™H8 $ÈØ\ÜÙ\Ú\ØÚYÙZ[œÝÝY\™YÚÙZ][˜YH[X\™Ù\ˆ[]Ù[™Z0íœ™H™\ØÚ™ZXÚYHÜ°é™[ˆ[™Ø[[Y[Ü°é™[ˆ0ï™\œØÚ0ïÜÚYÙ\ÈØ\ÜÙ\ˆ[HØÚ0íœÙ\šÈ[H™Z]œ›ÛÚÙ\ˆ[\™ZXÚ°ï™[ˆ[™[ˆYHÛÛÜÙKQ[™HX™ÙX™[‹ˆØÚ0íœÙ\šÙHY[™[ˆ[Z]\ˆ[ðéÜÙ\[™È\ˆYY›YYÙ[™[ˆX\œØÚˆY\Ù\ˆZ[˜YÈÜ™™]ÚYH[ÈXÚš\ØÚH[™œ˜\ÝZÝ\ˆZ[‹šXÚ[ÈÝ\š\Ý\ØÚH[›™[˜™\ÚXÚYÝ[™Ëˆ°ïˆZ[™[ˆ™\ÝXÚÙ\ˆœ™ZY[ˆYØ[™ÈH[ˆ™]šYXœØ[›YÙ[ˆÚX\ÈÙZ[™[ˆ˜XÚÙZ\ÎÈZ\ˆ\œØÚZ[™[ˆÚYHšXÚ[ÈZ[ž™[ˆØ\Y\Hœ™Z^™Z]šY[K˜šY\‹H[™X\œØÚ[™XYZ™\™H™]šYXœÜÝ[™ÜNÈÙZ[ˆZ[ž™[™\ˆ0í™™™[XÚ\ˆ™\ÝXÚ\œÝ[™ÜÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹ÝØ\ÜÙ\˜œ™ZYH[™[œÙ\ÝY[X\™ØØØ]YÛÜžS[šÜÎ–ØØ\ÜÙ\˜˜YKÝ]\Î˜ØXÚXÚ\ˆ0ç™\˜›XÚÎÈÛÛšÜ™]H0í™™™[XÚYðé™ÛXÚHÝ[™ÜHšXÚ™\Ý0éYÝY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹Ø›Ù[‹][™YÙ[ÛÙÚYKØ›Ù[œØÚ]‹Ø›Ù[›Zœ˜YKZ[‹Z[X\™ØX™[˜•RÑPH8 $È›Ù[›Zœ˜YH[™X\œØÚ[ðéÜÙ\[™ØKÝ\›˜Î‹ËÛY]›ÜÛ™YÚ[Û‹š[X\™Ë™KÛ˜]\‹][™ZÝ[\‹Y\›X™[‹Ú[™\ÝšYZÝ[\‹X[K]Ø\ÜÙ\‹ÜØÚÙ\Ù\šÙKÙ™[[ØY\ÜÙ\[™ÜÛ]YZKXÝ\œÛXÚËLLLÌL˜X™[˜Y]›ÜÛ™YÚ[Ûˆ[X\™È8 $È™[[ðéÜÙ\[™ÜÛpïHÝ\œÛXÚØW_JK	
ÚYXš]˜œ˜XÚØ˜]\œØÚ]™ÙXšY]ÚYXš]˜œ˜XÚØ˜]\˜[]XÚ\È˜]\œØÚ]™ÙXšY]Z]Z[™\ˆÜ\H›Ûˆœ˜XÚÜÈ[ˆ[ˆðï0íœÝXÚ[ˆšY\‹H[™X\œØÚ[™[‹ˆYH•RÑPHXYHÙZ]ÙZ[™\œÜ°ï™ÛXÚH[™ØÚY[™Ù\ØÚ0ïH\[ˆ\›Ü‹ˆ\ÈÙ[[ˆYHÙ[[™[ˆØÚ]‹H[™ÙYÙYÙX›ÝNÈ]\ÜØÚYpçÛXÚœ™ZYÙYÙX™[™HÙYÙH]™[‹ˆZ[™H™\šYš^šY\HÚØ[H›0éÚ[™Ù[ÛY]šYHÝ\™H[ˆY\Ù[H]Y˜YÈšXÚ\[\™Ù[Y[‹\Ú[ˆÚ\™ÙZ[™HÙXšY]Û[šYHÙ^™ZXÚ™]˜Ú\˜ÚÙ\™\ˆÈ™]Y[™Ø[[YXÚYXš]˜œ˜XÚËšY\‹H[™X\œØÚ[™XÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹Û˜]\œØÚ]‹Û˜]\œØÚ]™ÙXšY]KÛœÙËZÚYXš]˜œ˜XÚËLMÌÌÌ˜•RÑPH[X\™ØÙÙ[ÛY]žU\N˜\™XXœ™YN˜˜]\œØÚ]™ÙXšY]ÈØÚ]‹H[™ÙYÙYÙX›ÝH™XXÚ[‹˜Ý]\Î˜[]XÚHÙXšY]ÙÙ[ÛY]šYH[ˆY\Ù[H]Y˜YÈšXÚÚØ[Z[™ÙX[™[˜JK	
›Ù[›Zœ˜YX›Ø™\™Ø›Ù[›Zœ˜Y›Ø™\™È8 $È[ÛÜÙYË\œ˜\ÜÙ[ÙYÈ[™0ï™[ÙYØ[™ØY[™ÙX[]XÚH[X\™Ù\ˆÙ[Ù][ˆš[[ˆ™ZHÙ\\˜]HÙYÜÙYÛY[H\È›Ù[›Zœ˜YÈ›Ø™\™ÈXŽˆ[ÛÜÙYË\œ˜\ÜÙ[ÙYÈ[™0ï™[ÙYËˆ\ˆÚØ[HÙ[Ò”ÓÓ‹Q][œØ]ˆ[0é\ðé›XÚ™ZˆÙ[Ü™Y™\™[žšY\HY™[[šÝHZ]][Ý\ž^[™[šÈ\ˆ[X\™Ù\ˆ\›0é]\[™ÜÜÙZ]KˆYHÙYÙ°ï[™ÈÚ\™]\È[H[]XÚ[ˆÑÐËPTKQ^Ü0ï™\››Û[Y[ˆ[™šXÚÙ\ØÚ0éˆÙYÙ\™YÙ[ˆ\È˜]\œØÚ]™ÙXšY]È™XXÚ[‹˜Úœ°ïÙÙHÈ›Ø™\™Ø›Ø™\™Ù\ˆšYY\[™ËŒLÌÈ[X\™ØÎ‹ËÜÝXÚK˜[œÜ\™[ž‹š[X\™Ë™KÙ]\Ù]Ø›Ù[›Zœ˜YLÌœ™ZYH[™[œÙ\ÝY[X\™Ë•RÑPXØØ]YÛÜžS[šÜÎ–Ø˜Y˜]\˜KX\Ú[™Î–Ø˜Z[ØKÝ]\Î˜ÚØ[\ˆÙ[Ù][˜XœYˆŒ‹ŒLKŒŒŽÈ\œÜ[™ÜÙ\œÝ[[™È]]Y]U™\ˆMŒŒŒMNÈÙZ[™H]\ÜØYÙH0ï™\ˆ™]]™\›Y\ÜÝ[™ØY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÙÙ[ÜÜ[™KÚ[™›ËÌÌNQLLPKNPËMLKPNNQKQMÍLL‘QŒLØX™[˜Ù[ÜÜ[™H8 $È[]XÚHY]Y][˜KÝ\›˜Î‹ËØ\Kš[X\™Ë™KÙ]\Ù]ËÝŒKØ›Ù[›Zœ˜YKØÛÛXÝ[ÛœØX™[˜[X\™ÈÑÐÈTH™X]\™\È8 $ÈØ[[[[™Ù[˜KÝ\›˜Î‹ËÝÝÝË™ÛÝ™]K™KÙYKØžKL‹LX™[˜][›^™[žˆ]]ØÚ[™8 $È˜[Y[œÛ™[›[™È‹ŒW_JK	
Y[™[ÙYËX›Ø™\™Ø0ï™[ÙYÈ8 $È˜]\‹R[™›ÝÙYÈ›Ø™\™Ù\ˆšYY\[™Ø[™ØY[™ÙX\ˆÜ˜[™ÙHX\šÚY\H0ï™[ÙYÈ[\[™]YH™[˜[HØ[™0ï™H[™°ï[ˆZYY›0éÚ[ˆÛÝÚYHXYÙ\‹H[™›ØÚÙ[œ˜\Ù[ˆ›Ü˜™ZKˆ\Èðå”Q˜[›]™[›ËˆÛH[™]ØHKHÝ[™[‹ˆYHØ\H™ZYÝ[\ˆ[™\™[HX\ÙZYKX\ZXÚØÚ\ÚÙ‹[H\Ë[œËU[šXÚR0í›\‹UÙYËØ[\‹R[[Y\‹UÙYÈ[™›Ø™\™Ù\ˆ\ÈÙ[ÚHXœØÚš]H[›Z][˜\ˆ™\°ïÙ\™[‹\Ý\ˆÜšYÚ[˜[Ø\HH[™ZY[‹ˆYH\™Ù\Ý[H[šYHÝ[[]]\È\ˆÜ[”Ý™Y]X\UØ[™\ÙYÜ™[][ÛˆLŒLL[™Ý\™Hš\ÝY[Z]\ˆðå”SÜšYÚ[˜[Ø\HX™ÙYÛXÚ[ŽÈÚYH\ÝÙZ[™H[]XÚH™\›Y\ÜÝ[™ËˆYH•RÑPKP›Ù[›Zœ˜YQÙ[ÛY]šY[ˆ›ZX™[ˆ]›ÛˆÙ]™[›˜Úœ°ïÙÙHÈ›Ø™\™Ø™\›]Yˆ[™Z[œÝYYÜÜ[šÝNˆÚYZHÜšYÚ[˜[˜[›]Î‹ËÛÚÚK\ØÚZY\ÝY[™Ë™KØ\ÜÙ]ËÓÔËÛYYXKÔ‹ËKÙÛÙ\Ñ›Y\—ÑÛ™[ÙY×Ñš[˜[œ˜Ù\Ù[ØÚY°ïˆ0íšÛÛÙÚ\ØÚH[[™ÈKˆ‹ˆ
ðå”
XÛ˜]\™U˜Z[ˆLØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXK›Ý]S[™ÝÛNŒË‹›Ý]Q\˜][ÛŽ˜ØKˆKHÝ[™[˜›Ý]TÞ[X›Û˜ØÚY]\›[™Ø›Ý]PÛÛÜŽ˜ÙNŒŒ›Ý]QÙ[ÛY]žTÝ]\Î˜ÔÓKUØ[™\ÙYÜ™[][ÛˆLŒLL
™\œÚ[ÛˆKÝ[™ËŒËŒŒL
K[šY[›0é™ÙHËLÛNÈ™\›]Yˆš\ÝY[Z][Hðå”Q˜[›]X™ÙYÛXÚ[‹ˆÙZ[™H[]XÚH™\›Y\ÜÝ[™Ë˜X\Ú[™Î–Ø˜Z[ØKÙX\˜Ú\›\Î–ØØ[™0ï™XZYY›0éÚ[˜XYÙ\œ˜\Ù[˜›ØÚÙ[œ˜\Ù[˜KY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÌLŒLLX™[˜Ü[”Ý™Y]X\UØ[™\ÙYÜ™[][ÛˆLŒLL
™\œÚ[ÛˆNÈÝ[™ËŒËŒŒL
XKÝ\›˜Î‹ËÙÛÙ\š[X\™ËÛ˜]\œØÚ]‹Ø›Ø™\™Ù\—ÛšYY\[™ËœX™[˜ðå”8 $ÈÙYÙZÛÛž™\›Ø™\™Ù\ˆšYY\[™ØW_JK	
[ÛÜÙYËX›Ø™\™Ø[ÛÜÙYÈ8 $È˜]\‹R[™›ÝÙYÈ›Ø™\™Ù\ˆšYY\[™Ø[™ØY[™ÙX\ˆÙ[ˆX\šÚY\H[ÛÜÙYÈ°ï[H\ÈXÚ\›[ÛÜˆZ]ÛZ[™[H[™Ü›ðçÙ[H[ÛÜZXÚÛÝÚYH\˜ÚœXÚØ[[™[ÛÜ™›0éÚ[‹ˆ\Èðå”Q˜[›]™[›‹ÈÛH[™]ØHHÝ[™H[™™ZYÝZ[™H[[Z][™È[H›Ü™[ˆ0ï™\ˆ[ˆ™\™ZXÚ[\˜™\™ËˆYH•RÑPH™\Ý0éYÝÙZ]\š[ˆØ[šY\[™ÜØ\˜™Z][‹Z[™HXœÜ\œ[™È[™[ˆÙ\Ü\œ[ˆYØ[™È[H\šÜ]ˆ[\˜™\™ÎÈ]]™Z0íœ™H\Ý\ˆYØ[™È0ï™\ˆ[ˆ\šÜ]ˆØ[\‹R[[Y\‹UÙYÈpí™ÛXÚ[™\ˆpçÝÙYÈ[ˆ[ˆ˜Z™ÛZ\Ù[ˆH™[]™[‹ˆØˆYH[H˜[›]Z[™Ù^™ZXÚ™]H[[Z][™È[ˆ[[ˆZ[ž™[Z][ˆ\ˆ™Z0íœ™XÚœ™ZYÙYÙX™[™[ˆÙYÙY°ï[™È[ÜšXÚ[™ØˆYH‹ÈÛH°ïˆY\ÙH[[Z][™ÈÙ[[‹\ÝšXÚ™\Ý0éYÝˆYH\™Ù\Ý[H[šYHÝ[[]]\È\ˆÜ[”Ý™Y]X\UØ[™\ÙYÜ™[][ÛˆLŒLÈ[™Ý\™Hš\ÝY[Z]\ˆðå”RØ\HX™ÙYÛXÚ[‹X™\ˆšXÚ[]XÚ™\›Y\ÜÙ[‹ˆYHZÝY[HYØ[™ÜÜÜ\œ[™È\ÝÙ\ÛÛ™\H™XXÚ[‹˜Úœ°ïÙÙHÈ›Ø™\™Ø™\›]Yˆ[™œ™ZYÙYÙX™[™\ˆYØ[™Îˆ0íœXÚH™\ØÚ[\[™È[™•RÑPKR[ÙZ\È™XXÚ[˜Î‹ËÛÚÚK\ØÚZY\ÝY[™Ë™KØ\ÜÙ]ËÓÔËÛYYXKÔ‹ËKÙÛÙ\Ñ›Y\—Ó[ÛÜÙY×Ý[\Ü—Ü—Ñš[˜[œ˜Ù\Ù[ØÚY°ïˆ0íšÛÛÙÚ\ØÚH[[™ÈKˆ‹ˆ
ðå”
XÛ˜]\™U˜Z[ˆLØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXK›Ý]S[™ÝÛNŒ‹Ë›Ý]Q\˜][ÛŽ˜ØKˆHÝ[™X›Ý]TÞ[X›Û˜›ÙÙ[›Ý]PÛÛÜŽ˜ÙLÙL›Ý]QÙ[ÛY]žTÝ]\Î˜ÔÓKUØ[™\ÙYÜ™[][ÛˆLŒLÈ
™\œÚ[ÛˆNKÝ[™MŒËŒŒJK[šY[›0é™ÙH‹ŽÛNÈ™\›]Yˆš\ÝY[Z][Hðå”Q˜[›]X™ÙYÛXÚ[‹ˆYHZÝY[H[ÛÜÙYËU[[Z][™È[™YØ[™ÜØ™\ØÚ°éšÝ[™È›ZX™[ˆ[š[™\ˆ•RÑPKR[ÙZ\ÙH[™0íœXÚ[ˆ™\ØÚ[\[™ÈH°ï™[‹ˆÙZ[™H[]XÚH™\›Y\ÜÝ[™Ë˜X\Ú[™Î–Ø˜Z[ØKÙX\˜Ú\›\Î–ØXÚ\›[ÛÜ˜ÛZ[™\ˆ[ÛÜZXÚÜ›ðçÙ\ˆ[ÛÜZXÚØÚ0ï›[ÛÜ˜ÙZY[›[ÛÜ˜[\˜™\™ØKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÌLŒLØX™[˜Ü[”Ý™Y]X\UØ[™\ÙYÜ™[][ÛˆLŒLÈ
™\œÚ[ÛˆNNÈÝ[™MŒËŒŒJXKÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKÝ[Y[‹Ø›Ù[‹][™YÙ[ÛÙÚYKØ[\Ý[‹Ý[\œÝXÚ[™Ù[‹X›Ø™\™ËØ›Ø™\™Ù\‹[šYY\[™ËLMMŒÍ˜X™[˜•RÑPH8 $ÈZÝY[HYðé™ÙH[™Ü\œ[™ÈÙYÙ[ˆØ[šY\[™ØKÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™ZÙ\™[‹ØZÙXKØZÝY[\ËÜ™\ÜÙ[Y[[™Ù[‹Ù[Þ[˜™[\Ý[™ËZ[‹Y\‹X›Ø™\™Ù\‹[šYY\[™Ë\Ø[šY\[™Ë\ØÚ™Z]]Z[K^™Z][‹]›Ü˜[‹LLNMŒX™[˜•RÑPH8 $ÈØ[šY\[™ÜÜÝ[™›ÛHLŒ‹ŒŒ˜W_JK	
\œ˜\ÜÙ[ÙYËX›Ø™\™Ø\œ˜\ÜÙ[ÙYÈ8 $È˜]\‹R[™›ÝÙYÈ›Ø™\™Ù\ˆšYY\[™Ø[™ØY[™ÙX\ˆ[šÈX\šÚY\H\œ˜\ÜÙ[ÙYÈ°ï\˜Ú[ˆ0íœÝXÚ[ˆZ[\ˆ›Ø™\™Ù\ˆšYY\[™È[™™\˜š[™]Ü˜ÚYY[\œ˜\ÜÙ[‹[™Ýðé\‹›ØÚÙ[œ˜\Ù[ˆ[™[ˆÙY\Ý[™Ëˆ\Èðå”Q˜[›]™[›ËÈÛH[™]ØHKHÝ[™[‹ˆYHÜšYÚ[˜[Ø\H™ZYÝÜ›Ý[ˆY\Ù[‹Ø[\‹R[[Y\‹UÙYËY[˜™ZÈ[™Z[™[ˆZXÚ[ÈÜšY[Y\[™ÜÜ[šÝKˆYH\™Ù\Ý[H[šYHÝ[[]]\È\ˆÜ[”Ý™Y]X\UØ[™\ÙYÜ™[][ÛˆMMH[™Ý\™Hš\ÝY[Z]\ˆðå”SÜšYÚ[˜[Ø\HX™ÙYÛXÚ[ŽÈÚYH\ÝÙZ[™H[]XÚH™\›Y\ÜÝ[™ËˆYH[]XÚH›Ù[›Zœ˜YQÙ[ÛY]šYH›ZX[ÈZYÙ[™\ˆ][œØ]ˆÙZÙ[›ž™ZXÚ™]˜Úœ°ïÙÙHÈ›Ø™\™Ø™\›]Yˆ[™Z[œÝYYÜÜ[šÝNˆÚYZHÜšYÚ[˜[˜[›]Î‹ËÛÚÚK\ØÚZY\ÝY[™Ë™KØ\ÜÙ]ËÓÔËÛYYXKÔ‹ËKÙÛÙ\Ñ›Y\—Õ\˜\ÜÙ[ÙY×Ñš[˜[œ˜Ù\Ù[ØÚY°ïˆ0íšÛÛÙÚ\ØÚH[[™ÈKˆ‹ˆ
ðå”
XÛ˜]\™U˜Z[ˆLØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXK›Ý]S[™ÝÛNŒËŒË›Ý]Q\˜][ÛŽ˜ØKˆKHÝ[™[˜›Ý]TÞ[X›Û˜›[YX›Ý]PÛÛÜŽ˜ÙNÙNX˜›Ý]QÙ[ÛY]žTÝ]\Î˜ÔÓKUØ[™\ÙYÜ™[][ÛˆMMH
™\œÚ[ÛˆLKÝ[™ËŒ‹ŒŒJK[šY[›0é™ÙHËÈÛNÈ™\›]Yˆš\ÝY[Z][Hðå”Q˜[›]X™ÙYÛXÚ[‹ˆÙZ[™H[]XÚH™\›Y\ÜÝ[™Ë˜X\Ú[™Î–Ø˜Z[ØKÙX\˜Ú\›\Î–ØÜ›Ý[ˆY\Ù[˜Ø[\‹R[[Y\‹UÙYØY[˜™ZØÙY\Ý[™ØKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÌMMXX™[˜Ü[”Ý™Y]X\UØ[™\ÙYÜ™[][ÛˆMMH
™\œÚ[ÛˆLNÈÝ[™ËŒ‹ŒŒJXKÝ\›˜Î‹ËÙÛÙ\š[X\™ËÛ˜]\œØÚ]‹Ø›Ø™\™Ù\—ÛšYY\[™ËœX™[˜ðå”8 $ÈÙYÙZÛÛž™\›Ø™\™Ù\ˆšYY\[™ØW_JK	
ÚY\Ù[ÙYËX›Ø™\™ØÚY\Ù[ÙYÈ8 $È˜]\‹R[™›ÝÙYÈ›Ø™\™Ù\ˆšYY\[™Ø[™ØY[™ÙX\ˆ›]YHÚY\Ù[ÙYÈ°ï\˜ÚX\œØÚÚY\Ù[ˆ[™[[™È\ˆš[K\È›Ø™\™Ù\ˆÙY\È[™ÙZ]\™\ˆÙ]ðéÜÙ\‹ˆ\Èðå”Q˜[›]™[›ˆÛH[™]ØHˆÝ[™[ŽÈ[ÈÜšY[Y\[™ÜÜ[šÝHÚ[™š[Ù\™\ˆÚ\˜Ú[˜œ°ïÚÙKš[Ù\™\ˆÚ\˜Ú[œÝYYË[™Ø™\™Ë[œËU[šXÚR0í›\‹UÙYÈ[™YHš[HZ[™Ù^™ZXÚ™]ˆYH\™Ù\Ý[H[šYHÝ[[]]\È\ˆÜ[”Ý™Y]X\UØ[™\ÙYÜ™[][ÛˆLŒŒH[™Ý\™Hš\ÝY[Z]\ˆðå”SÜšYÚ[˜[Ø\HX™ÙYÛXÚ[‹ˆYHYÚ][H[šY[›0é™ÙHÙZXÚ›Ûˆ\ˆ›Y\˜[™ØX™HXŽÈY\È\Ý[HØ\[™Z[˜YÈ]\ÙÙ]ÚY\Ù[‹˜š[Ù\™\ˆÈÚœ°ïÙÙXÝ\]]ðå”Q˜[›]ˆš[Ù\™\ˆÚ\˜Ú[˜œ°ïÚÙXÎ‹ËÛÚÚK\ØÚZY\ÝY[™Ë™KØ\ÜÙ]ËÓÔËÛYYXKÔ‹ËKÙÛÙ\Ñ›Y\—ÕÚY\Ù[ÙY×Ñš[˜[œ˜Ù\Ù[ØÚY°ïˆ0íšÛÛÙÚ\ØÚH[[™ÈKˆ‹ˆ
ðå”
XÛ˜]\™U˜Z[ˆLØ]YÛÜžS[šÜÎ–Ø˜]\˜˜[Z[YXK›Ý]S[™ÝÛN‹›Ý]Q\˜][ÛŽ˜ØKˆˆÝ[™[˜›Ý]TÞ[X›Û˜\ÙX›Ý]PÛÛÜŽ˜ÌÎ›Ý]QÙ[ÛY]žTÝ]\Î˜ÔÓKUØ[™\ÙYÜ™[][ÛˆLŒŒH
™\œÚ[ÛˆÝ[™ÌKŒLŒŒŒÊK[šY[›0é™ÙHÌHÛHÙYÙ[°ï™\ˆˆÛH[Hðå”Q˜[›]È™\›]Yˆš\ÝY[Z]\ˆØ\HX™ÙYÛXÚ[‹0é™Ù[˜XÙZXÚ[™È]\Ù°ïÚÛXÚÚÝ[Y[Y\ˆÙZ[™H[]XÚH™\›Y\ÜÝ[™Ë˜X\Ú[™Î–Ø˜Z[ØKÙX\˜Ú\›\Î–Øš[Ù\™\ˆÚ\˜Ú[˜œ°ïÚÙXš[Ù\™\ˆÚ\˜Ú[œÝYYØ›Ø™\™Ù\ˆÙYX˜YÙÙ\œÙYX[™Ø™\™Ø[œËU[šXÚR0í›\‹UÙYØš[XKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÌLŒŒXX™[˜Ü[”Ý™Y]X\UØ[™\ÙYÜ™[][ÛˆLŒŒH
™\œÚ[ÛˆÈÝ[™ÌKŒLŒŒŒÊXKÝ\›˜Î‹ËÙÛÙ\š[X\™ËÛ˜]\œØÚ]‹Ø›Ø™\™Ù\—ÛšYY\[™ËœX™[˜ðå”8 $ÈÙYÙZÛÛž™\›Ø™\™Ù\ˆšYY\[™ØW_JK	
Ü›ÜÜÙKX™\™ÙYÜ™™\‹\[™XÜ›ðçÙH™\™ÙYÜ™™\ˆ[™H8 $Èš\ÈH[ˆÝ\›™[˜[™ØY[™ÙXYH[XÚÙ\”›Ý][‹TÙZ]H™\ØÚ™ZXZ[™[ˆ]ØHÚYX™[ˆÚ[ÛY]\ˆ[™Ù[ˆ[™ÙYÈXˆËP˜Zˆ™\™ÙYÜ™ˆZ]LÈ[™›Ü›X][ÛœÜÝ][Û™[ˆ0ï™\ˆÙ\œ˜Z‹ØÚÜÜËØXÚÙ[Ü‹˜]]\ËÚÝ[\™[“[™ØÚYÝ\›Ø\H[™™\™ÙYÜ™™\ˆÙZ0í›‹ˆÚYH\Ý›ÛH]ØH™ZHÚ[ÛY]\ˆ[™Ù[ˆ™\™ÙYÜ™™\ˆÜ^šY\™Ø[™ÈH[\œØÚZY[‹ˆ°ïˆYHÜ›ðçÙH[™HÝ\™HÙZ[™HÙ™š^šY[HX\ØÚ[™[›\Ø˜\™HÔHÙ\ˆÙ[Ò”ÓÓ‹S[šYH˜XÚÙ]ÚY\Ù[ŽÈ\Ú[ˆÚ\™]YˆYHÙ™š^šY[HØ\KÔ›Ý][˜™\ØÚ™ZX[™È™\›[šÝ[™ÙZ[™HÝ™XÚÙ[›[šYHÙ\ØÚ0é˜™\™ÙYÜ™˜[™ÙYÈXˆËP˜Z‹TÝ][Ûˆ™\™ÙYÜ™˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËØ™\™ÙYÜ™‹YÜ›ÜÜÙK\[™KØ[XÚÙ\”›Ý][˜ØØ]YÛÜžS[šÜÎ–Ø˜]\˜ÙZ[œÝÝY\™YÚÙZ][˜K›Ý]S[™ÝÛNË›Ý]TÝ][ÛœÎ–Ø\ˆÙ\œ˜Z˜™\™ÙYÜ™™\ˆØÚÜÜØØXÚÙ[Ü˜™\™ÙYÜ™™\ˆ˜]]\Ø˜]]\Ü\šØÚÝ[\™[“[™ØÚYÛZ[™Ø\[šÛÛÛšY[˜™\™ÙYÜ™™\ˆÝ\›Ø\XÝ[™\ˆØ[[H™\™ÙYÜ™™\ˆÙZ0í›˜Z\Ù[™Þ[[˜\Ú][Xš[[šY\[™Y]Ù\™\˜KÝ]\Î˜ÙZ[™HÙ\°ïH›Ý][™Ù[ÛY]šYH°ïˆY\ÙH[™HÙY[™[˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÙKØ™\™ÙYÜ™‹ØZÝY[\ËÜ™\ÜÙ[Z]Z[[™Ù[‹Û™]YK]Ø[™\œ›Ý]K]™\›ÙY™™[XÚMŒŒX™[˜[X\™Ë™H8 $È™\°í™™™[XÚ[™È\ˆØ[™\œ›Ý]XKÝ\›˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËÙÝÛ›ØY][K\›Ý]KM‹ØX™[˜[XÚÙ\”›Ý][ˆ8 $Èðïž™\™\ˆ™\™ÙYÜ™™\ˆÜ^šY\™Ø[™È
ÈÛKØ\H[™Ô
XKÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÍMMŒLŒ˜X™[˜Ü[”Ý™Y]X\8 $ÈšYXÚÈ]\È[ÈÙ\\˜]HÙZ[œÝðï™YÚÙZ]W_JK	
šY\›Y[™\‹]›ÛÜË\ØÚY]™[™™\ÝšY\›0é™\ˆ›ÛÜËH[™ØÚ0ï™[™™\Ý8 $È™\˜[œÝ[\š[™›Ü›X][Û˜Ý[\˜YHšY\›0é™\ˆØÚ0ï™[™Ù\Ù[ØÚY™\°í™™™[XÚ]YˆZ™\ˆÙXœÚ]H[™›Ü›X][Û™[ˆ[H›ÛÜËH[™ØÚ0ï™[™™\Ý[™œ°ï\™H™^šYZ[™ÜÝÙZ\ÙHZÝY[H]\ÙØX™[‹ˆZ[ˆðï™YÙ\ˆ\›Z[ˆÚ\™Y\ˆ\œÝ˜XÚZ[™\ˆÛÛšÜ™][ˆ[šðï™YÝ[™È0ï™\››Û[Y[‹ˆ™\˜[œÝ[[™ÜÛÜ›ÙÜ˜[[H[™YØ[™È\ˆ™]ÙZ[YÙ[ˆ]\ÙØX™H™Z[H™\˜[œÝ[\ˆ°ï™[‹˜šY\‹H[™X\œØÚ[™X™\˜[œÝ[[™ÜÛÜ™H]\ÙØX™H™Z[H™\˜[œÝ[\˜Î‹ËÝÝÝËœÙË\ØÚY]™[‹™KØšY\›0é™\ˆØÚ0ï™[™Ù\Ù[ØÚY›ÛˆMNLˆKˆ‹˜Ù]™[™[YNˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YXKÝ]\Î˜ÙZ[™HZðï™YÙH]\ÙØX™H]\È™\™Ø[™Ù[™[ˆ™\˜[œÝ[[™ÜÝ\›Z[™[ˆX™Ù[Z]]JK	
šY\›Y[™\‹Y\™™Y\™™\ÝšY\›0é™\ˆ\™™Y\™™\Ý[HšYXÚÈ]\È8 $È™\˜[œÝ[[™ÜÚ[™›Ü›X][Û˜Ý[\˜\È[X\™Ù\ˆ™\˜[œÝ[[™ÜÜÜ[™\ØÚ™ZX\È\™™Y\™™\Ý[Hœ™Z[XÚ]\Ù][HšYXÚÈ]\ÈZ]™YÚ[Û˜[[ˆ›ÙZÝ[ˆ[™Ý[\™[[H›ÙÜ˜[[KˆYH]Y[H\Ý]YH]\ÙØX™H[HŒ‹ÌŒKˆ[šHŒŽÈY\ÙH\›Z[™HÚ[™™\™Ø[™Ù[ˆ[™Ù\™[ˆšXÚ[È°éÚÝ\ˆ\›Z[ˆ\™Ù\Ý[ˆðï™YÙH][ˆ\ˆ˜XÚ™]Y\ˆ™\˜[œÝ[\˜[šðï™YÝ[™Ë˜Ý\œÛXÚØœ™Z[XÚ]\Ù][HšYXÚÈ]\ËÝ\œÛXÚÙ\ˆZXÚŽŒLÎH[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÙœ™Z^™Z]ÜÝ˜\ÜÙ[™™\ÝKÝšY\›Y[™\‹Y\™™Y\™™\ÝLÌLÎLœ™ZYH[™[œÙ\ÝY[X\™ØÙ]™[™[YNˆLØ]YÛÜžS[šÜÎ–Ø˜[Z[YX˜ZÝ\ØÚKÝ]\Î˜]\ÙØX™HŒˆ\Ý™\™Ø[™Ù[ŽÈðï™YÙ\ˆ\›Z[ˆšXÚ™\Ý0éYÝY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË˜™\™ÙYÜ™™\‹[]\Ù][\Û[™ØÚY™KÜ›ÙÜ˜[[KÚÛÛž™\XX™[˜™\™ÙYÜ™™\ˆ]\Ù][\Û[™ØÚY8 $ÈØÚÜÜÚÛÛž™\H[™›ÙÜ˜[[XW_JWK›OJK
OOžÛ]P[K™š[™
OšYOOYJNÚYŠ[Š]›ÝÈ\œ›ÜŠ[šÛ›ÝÛˆÝ\š\ÛH™XÛÜ™ˆ	Ù_X
NÜ™]\›ˆÝ\š\ÛQÜ›Ý\OOXÙ\ØÚXÚX	‰Š^Ë‹‹Ø]YÛÜžS[šÜÎ–Ë‹‹›™]ÈÙ]
Ë‹‹˜Ø]YÛÜžS[šÜß‹˜Ø]YÛÜžS[šÜß×KÙZ[œÝÝY\™YÚÙZ][˜JW_JKØš™XÝ˜\ÜÚYÛŠ‹
KŸNÚ›JÝ\]šXÛ˜[YN˜Ýˆ]šH[™][XY™\ÜÎ˜™\™ÙYÜ™™\ˆØÚðçÜÝ˜pçÙHKŒLŽH[X\™Ø\ØÜš\[ÛŽ˜\ÝÜš\ØÚHÚ\˜ÚH[H™[[H™\™ÙYÜ™œËˆ™\ÚXÚYÝ[™ÜÛpí™ÛXÚÙZ][ˆšXÚ[ˆÚXÚ˜XÚÛÝ\ÙY[œÝ[ˆ[™[HZÝY[[ˆ™\ÝXÚØ[™ÙX›Ý\ˆÚ\˜Ú[™Ù[YZ[™K˜Ý\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË››Ü™Ú\˜ÚK™KØY™\ÜÙ[‹Ú[œÝ]][Û™[‹Ù]Z[[œÚXÚÚ[œÝ]][Û‹ÜÝ\]šK][™\][XX™[˜›Ü™Ú\˜ÚH8 $ÈÝˆ]šH[™][KÚ\˜Ú[˜[œØÚšYKÝ\›˜Î‹ËÜÙ\šXÙ\Ü[šÚ\˜ÚKZ[X\™Ë™KÙÙ[YZ[™[‹Ù]‹[]ZÚ\˜Ú[™Ù[YZ[™K\Ý\]šK][™\][K^KX™\™ÙYÜ™‹ÚÛÛZÝKš[X™[˜Ú\˜ÚH[X\™È8 $ÈÝˆ]šH[™][HH™\™ÙYÜ™˜W_JK›J[ÝYÛ˜[YN˜\ÝÜš\ØÚ\ˆÝYÙ\›ˆ™\™ÙYÜ™˜\ØÜš\[ÛŽ˜\ˆ\ÝÜš\ØÚHÝYÙ\›ˆ[Y˜\ÜÝYHÝ˜pçÙ[ž°ïÙH[™[HØXÚÙ[Üˆ[™[HÛÝ[œÝ˜pçÙHZ]˜XÚÙ\šËH[™°ï™Ù\š0é\Ù\›‹Z[šØ]YœÜ\ÜØYÙ[ˆ[™\ÝÜš\ØÚ[ˆÜÛYÙ[‹ˆ\ˆØ\[œ[šÝ[H0í™™™[XÚ[ˆpçÙðé™Ù\˜™\™ZXÚY[\ˆ\ˆÜšY[Y\[™È[™Ü™[ž\È\ÝÜš\ØÚHÝYÙXšY]šXÚÙ[ÛY]š\ØÚX‹˜Ý\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜JK›JÙ\œ˜Z˜Û˜[YN˜™\™ÙYÜ™™\ˆY™[ˆ8 $ÈÙ\œ˜Z˜\ØÜš\[ÛŽ˜\ˆÙ\œ˜Zˆ\Ý\ˆ[H™\™ÙYÜ™™\ˆY™[‹ˆ\ÈY™[˜™XÚÙ[‹ÙZ[™HY™\™˜\ÜÝ[™Ù[ˆ[™\ˆ\š[[™H™ZÜ˜[ˆÚ[™™]YÛš\ÜÙH\ˆÝYH[™[™\ÝšYYÙ\ØÚXÚKˆ]]H\Ý\È0í™™™[XÚYðé™ÛXÚHY™\ˆZ[ˆ]Y™[[ÛÜÈY\ˆ™YÚ[›™[ˆ˜Z[ˆ[™\ˆ™\™ÙYÜ™™\ˆÜ^šY\™Ø[™Ë˜Y™\ÜÎ˜Ù\œ˜ZœÝ˜pçÙKŒLŽH[X\™ØÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÙKØ™\™ÙYÜ™‹Ý[Y[‹Ü[™[‹X˜]Y[‹]ÛÚ™[‹ÜÝY[[™ËØ™\™ÙYÜ™™\‹ZY™[‹\Ù\œ˜Z‹NMÌX™[˜™^š\šÜØ[]™\™ÙYÜ™ˆ8 $È™\™ÙYÜ™™\ˆY™[‹ÔÙ\œ˜Zˆ[™\š[[™ÜÝ™\›Ü™[™ØKÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜ™\ÛÝ\˜ÙKØ›Ø‹ÍMŒMÌMÍ˜MÙY™ŽÌXXŒXX™LMŒÍNÌÜÙ\œ˜Z‹LŒÌY]Kœ˜X™[˜[šÛX[ØÚ]˜[][X\™È8 $ÈÙ\œ˜ZˆŒÌˆ[šÛX[›YÙ\š\ØÚHZ[›Ü™[™ØKÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÙKØ™\™ÙYÜ™‹Ý[Y[‹Ü[™[‹X˜]Y[‹]ÛÚ™[‹ÜÝY[[™ËÝ[YÙ\Ý[[™Ë\Ù\œ˜ZœÝ˜\ÜÙK]YX™\˜›XÚËLLLÌM˜X™[˜™^š\šÜØ[]™\™ÙYÜ™ˆ8 $È[YÙ\Ý[[™È\ˆÙ\œ˜ZœÝ˜pçÙXKÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÛ›ÙKÍNÌMØX™[˜Ü[”Ý™Y]X\8 $È\ÝÜš\ØÚ\ˆY™[šÜ˜[ˆ[HÙ\œ˜Z˜W_JK›J˜]]\ØÛ˜[YN˜˜]]\È™\™ÙYÜ™˜\ØÜš\[ÛŽ˜\È[šÛX[Ù\ØÚ0ïH˜]]\È[ˆ\ˆÙ[Ü™™\ˆÝ˜pçÙH\ÝZ[ˆZYÙ[œÝ0é™YÙ\È\ÝÜš\ØÚ\ÈÙX°éYKˆ[›™[˜™\ÚXÚYÝ[™Ù[ˆ[™0å™™›[™ÜÞ™Z][ˆšXÚ[ˆÚXÚ˜XÚ[ˆZÝY[[ˆ[™›Ü›X][Û™[ˆ\È™^š\šÜØ[]Ë˜Ý\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌŒÍÎMÍLŒNX™[˜Ü[”Ý™Y]X\8 $È™\™ÙYÜ™™\ˆ˜]]\ØW_JK›JÝ\›Ø\XÛ˜[YN˜[X\™Ù\ˆÝ\›Ø\X\ØÜš\[ÛŽ˜[šÛX[Ù\ØÚ0ï\È[œÙ[X›H\ˆ[š]™\œÚ]0é[X\™È[HÛÚ™[˜™\™ÜÝÙYËˆ\ˆ\Ý›Û›ÛZY\\šÈ\Ý™\Ý[™Z[\ÈÝ\›Ø\[™Ù[0é™\È[™Ú\™šXÚ[ÈZYÙ[œÝ0é™YÙ\ˆ\ðé›XÚ\ˆÜÙ^°éˆ\ˆ\šÈ\Ý]][š]™\œÚ]0é0éÛXÚÙpí™™›™]È\ÝÜš\ØÚH[\ÚÛÜÝ\[ˆÚ[™[H˜ZY[ˆ[™ÙZðï™YÝ\ˆ°ï[™Ù[ˆYðé™ÛXÚˆ˜]X\˜™Z][ˆðí››™[ˆ[ˆØ[\\Èš\È[™HŒˆ™YZ[°éÚYÙ[‹ˆYH[\ÚÛÜÝ\[ˆÚ[™]][š]™\œÚ]0éšXÚ˜\œšY\™Yœ™ZK˜Ý\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÍLÎMXX™[˜Ü[”Ý™Y]X\8 $È™\ÝXÚ\ž™[[H[X\™Ù\ˆÝ\›Ø\XW_JK›JšY\[˜\™Ù\‹[]YZXÝÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÛ›ÙKÌNLŒŒÍÍÍ˜X™[˜Ü[”Ý™Y]X\8 $ÈšY\[˜\™Ù\ˆpïXW_JK›JÚ\˜Ú[‹]šY\›[™XÛ˜[YN˜\ÝÜš\ØÚHÜ™šÚ\˜Ú[ˆ\ˆšY\›[™H8 $È0ç™\˜›XÚØÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜\ØÜš\[ÛŽ˜0ç™\˜›XÚÈ0ï™\ˆšY\ˆZYÙ[œÝ0é™YÙH\ÝÜš\ØÚHÜ™šÚ\˜Ú[ŽˆÝˆÙ]™\š[šH[ˆÚ\˜ÚÙ\™\‹Ýˆ›Ú[›š\È[ˆ™]Y[™Ø[[YKÝˆšXÛÛZH[ˆ[[™Ø[[YH[™Ýˆ›Ú[›š\È[ˆÝ\œÛXÚËˆ™YHÚ\˜ÚH\š0éZ[™[ˆZYÙ[™[ˆZ[˜YÈ[™Ø\[œ[šÝˆ[›™[˜™\ÚXÚYÝ[™Ù[ˆšXÚ[ˆÚXÚ˜XÚ[ˆ™]ÙZ[YÙ[ˆÙ[YZ[™[‹˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝËšÚ\˜ÚKZ[‹]šY\›[™[‹™KØX™[˜Ú\˜ÚH[ˆšY\›[™[ˆ8 $ÈÙ[YZ[™[ˆ[™Ú\˜Ú[˜W_JK›J˜ZšÙ‹X[Û˜[YN˜\ÝÜš\ØÚ\ˆ˜ZšÙˆ™\™ÙYÜ™˜\ØÜš\[ÛŽ˜\š[[™\È\ÝÜš\ØÚ\È˜ZšÙœÙÙX°éYH[H™]Y[ˆÙYÈMˆY\Ù\ˆÜ\ÝšXÚ\ˆ]]YÙH˜ZšÙˆ™\™ÙYÜ™ŽÈ\ˆX\šÙ\ˆ™ZYÝ]\ÜØÚYpçÛXÚ\È\ÝÜš\ØÚHÙX°éYK˜Ý\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌŒÍNLMXX™[˜Ü[”Ý™Y]X\8 $È[\ˆ˜ZšÙˆ™\™ÙYÜ™˜W_JK›JÜ^šY\™Ø[™ØÙ\ØÜš\[ÛŽ˜Ù™š^šY[™\ØÚšYX™[™\ˆ[™Ø[™È\˜ÚYH™\™ÙYÜ™™\ˆ[ÝYZ]ðí›ˆÝ][Û™[ˆ[™Z[™\ˆ™\°í™™™[XÚ[ˆ0é™ÙH›Ûˆ]ØHÈÛKˆ™\ØÚ™ZX[™ËØ\H[™ÔQ]ZHÝ[\ˆ\˜]\ÙÙX™\ˆ]YˆÙZ[™\ˆ›Ý][œÙZ]H™\™Z]˜Ý\š\ÛQÜ›Ý\˜Ù\ØÚXÚX›Ý]TÝ][ÛœÎ–Ø\ˆÙ\œ˜Z˜\È\ÜÙKR]\Ø[HØ\ÜÙ\›pï[˜Ú\˜ÚHÝˆ]šH[™][X™\™ÙYÜ™™\ˆØÚÜÜØ[HØÚÜÜÙÜ˜X™[˜ØZ\Ù\‹UÚ[[KT]˜™\™ÙYÜ™™\ˆX\šÝ[HØÚÜÜÙØ\[˜Ø™\™Hš[X™\™ÙYÜ™™\ˆÚ[™pïX™Y]Ù\™\˜K[šÓÛ›T›Ý]U\›˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËÙÝÛ›ØY][K\›Ý]KM‹ØY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËÝšY\‹][™[X\œØÚ[™K\›Ý]KM‹ØX™[˜[XÚÙ\”›Ý][ˆ8 $È™\™ÙYÜ™™\ˆÜ^šY\™Ø[™ÈZ]ðí›ˆÝ][Û™[˜KÝ\›˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËÙÝÛ›ØY][K\›Ý]KM‹ØX™[˜[XÚÙ\”›Ý][ˆ8 $ÈÜšYÚ[˜[Ø\H[™ÔQÝÛ›ØYW_JK›JÚ\˜Ú[Ý\˜Ù\ØÜš\[ÛŽ˜Ù™š^šY[™\ØÚšYX™[™H˜Y[™Ý\ˆXˆ[™š\È˜ZšÙˆ™\™ÙYÜ™ˆ0ï™\ˆÝ\œÛXÚË™]Y[™Ø[[YKÚ\˜ÚÙ\™\ˆ[™[[™Ø[[YKˆ™\™ÙYÜ™‹UÝ\š\Û]\È™[›[™ŽÛKˆYH›Ý]H°ïH[ˆšY\ˆÜ™šÚ\˜Ú[ˆ[ˆÝ\œÛXÚË™]Y[™Ø[[YKÚ\˜ÚÙ\™\ˆ[™[[™Ø[[YK˜Ý\š\ÛQÜ›Ý\˜Ù\ØÚXÚX›Ý]S[X™\Ž›Ý]S[™ÝÛNŒŽX\›Ý]RY˜šY\›Y[™\‹ZÚ\˜Ú[Ý\˜›Ý]TXÙRYÎ–ØÝZ›Ú[›š\ËXÝ\œÛXÚØÝZ›Ú[›š\Ë[™]Y[™Ø[[YXÝ\Ù]™\š[šKZÚ\˜ÚÙ\™\˜Ý[šXÛÛZKX[[™Ø[[YXK[šÓÛ›T›Ý]U\›˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËÙÝÛ›ØYË][K\›Ý]KMØY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËÝšY\‹][™[X\œØÚ[™K\›Ý]KMØX™[˜[XÚÙ\”›Ý][ˆ8 $È™\ØÚ™ZX[™È[™Ý][Û™[ˆ\ˆšY\›0é™\ˆÚ\˜Ú[Ý\˜KÝ\›˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËÙÝÛ›ØYË][K\›Ý]KMØX™[˜[XÚÙ\”›Ý][ˆ8 $ÈÜšYÚ[˜[Ø\H[™ÔQÝÛ›ØYKÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÍÌÎNŽX™[˜Ü[”Ý™Y]X\8 $ÈšY\›0é™\ˆÚ\˜Ú[Ý\‹˜Y›Ý]H
Ñ“
XW_JK›JÝ\›Ø\KYYZ[™ØÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›JšYXÚËYYZ[™Ù[˜ÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›J]YZ[‹YYZ[™Ù[˜ÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›J™\™Ë[]\Ù][\Û[™ØÚYÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›JØÚY™™˜ZÛ[šYXÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›J]ØÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›JšY\›Y[™\‹Y]Ù\˜ÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›JÝ\š\ÝZ[™›ØÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›JÝ\š\ÛKZ[™›ØÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›JØ\›Û[™XÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK›JÙ\ØÚXÚÚÛÛÜ˜ÝÝ\š\ÛQÜ›Ý\˜Ù\ØÚXÚXJK[Kœ\Ú
	
Ý\™\šÙ\œ˜\ÜÙ[˜Ý\™\šÙ\œ˜\ÜÙ[˜ÙZ[œÝÝY\™YÚÙZ][˜0å™™™[XÚH™\[‹H[™]Y™[[Ø[›YÙH[HÝ\™\šÙ‹ˆ\È™^š\šÜØ[]™\™ÙYÜ™ˆ™\ØÚ™ZXYHŒŒ™\YÙÙ\Ý[H[›YÙH[È™X[\ÚY\[™ÜÝ›ÜšX™[ˆ]\È\ˆÝYÙ\šÜÝ][H™\™ÙYÜ™™\ˆY™[ˆ[™[HZÝ[™Øš[8 '”Ù\œ˜ZˆŒÌ8 '˜™\™ÙYÜ™˜Ý\™\šÙ‹ŒLŽH[X\™ØÎ‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÙKØ™\™ÙYÜ™‹Ý[Y[‹Ü[™[‹X˜]Y[‹]ÛÚ™[‹ÜÝY[[™ËÚÝ\™\šÙ\œ˜\ÜÙ[‹]YX™\˜›XÚËLLLÎ™^š\šÜØ[]™\™ÙYÜ™˜Ë‹‹šÛJØ^XLLMLLLËŒNLKLŒŒLÍLNJKÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜œ™YN˜0å™™™[XÚYðé™ÛXÚH[›YÙK˜Y][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌLLMLLX™[˜Ü[”Ý™Y]X\8 $ÈÝ\™\šÙ‹U\œ˜\ÜÙ[ˆ
Ñ“
XKÝ\›˜Î‹ËÝÝÝËš[X\™Ë™KÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÙKØ™\™ÙYÜ™‹Ý[Y[‹Ü[™[‹X˜]Y[‹]ÛÚ™[‹ÜÝY[[™ËØ™\™ÙYÜ™™\‹ZY™[‹ZÝ\™\šÙ\œ˜\ÜÙ[‹LLÌLÍX™[˜™^š\šÜØ[]™\™ÙYÜ™ˆ8 $ÈÝYÙ\šÜÝ]™\™ÙYÜ™™\ˆY™[˜W_JK	
š[[šY\[\ÝÜš\ØÚ\Èš[[šY\[™\™ÙYÜ™˜ÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚ\ÈÛÚ™ÙXšY]Z]š[[ˆ]\È\ˆÜ°ï™\ž™Z]ˆ\ÈÚ\™[ÈÝY™\™ZXÚ™\ØÚšYX™[ŽÈZ[™H™[YÝH[]XÚHÙXšY]ÙÜ™[ž™HÙ\ˆZ[ˆZ[ž™[™\ˆ[Ù[YZ[ˆYðé™ÛXÚ\ˆÜšY[Y\[™ÜÜ[šÝÝ\™HšXÚ™\ÝÙ\Ý[ˆ\ˆZ[˜YÈÜ™[ž\ÈÙXšY]šXÚÙ[ÛY]š\ØÚX‹˜™\™ÙYÜ™˜Ù[Ü™™\ˆÝ˜pçÙH[™[™Ü™[ž™[™HÝ˜pçÙ[‹ŒLŽH[X\™ØÎ‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝÝ\š\Û]\ËØ]\Ù›YÝ\ËÚ\ÝÜš\ØÚK\ÙZ[œÝÝY\™YÚÙZ][˜™\™ÙYÜ™‹UÝ\š\Û]\ØÝÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Ù[ÛY]žU\N˜\™XXÝ]\Î˜ÙXšY]Ø™^™ZXÚ[™ÈÚ™H™\šYš^šY\HØ\[˜X™Ü™[ž[™ÈÙ\ˆZ[™]]YÙ[ˆZ[ž™[X\šÙ\˜JK	
ÝZ›Ú[›š\Ë[™]Y[™Ø[[YXÝˆ›Ú[›š\È8 $È™]Y[™Ø[[YXÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚHÜ™šÚ\˜ÚH[ˆ™]Y[™Ø[[YKˆYHÚ\˜Ú[™Ù[YZ[™H™\°í™™™[XÚZÝY[H[™›Ü›X][Û™[ˆHÛÝ\ÙY[œÝ[‹™\ÚXÚYÝ[™Ù[ˆ[™™\˜[œÝ[[™Ù[‹˜™]Y[™Ø[[YX™[ÝYÙ[NŒLÎH[X\™ØÎ‹ËÝÝÝË››Ü™Ú\˜ÚK™KØY™\ÜÙ[‹Ú[œÝ]][Û™[‹Ù]Z[[œÚXÚÚ[œÝ]][Û‹Û™]Y[™Ø[[YKZ›Ú[›š\Ø›Ü™Ú\˜ÚXË‹‹šÛJØ^XÍÍŒLËLLÌÍ‹LŒŒŒNLÍÎJKÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Ø]YÛÜžS[šÜÎ–Ø˜YKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌÍÍŒX™[˜Ü[”Ý™Y]X\8 $ÈÝˆ›Ú[›š\È™]Y[™Ø[[YH
Ñ“
XKÝ\›˜Î‹ËÝÝÝËšÚ\˜ÚKZ[‹]šY\›[™[‹™KÙÙ[YZ[™[‹ÜÝZ›Ú[›š\Ë^K[™]Y[™Ø[[YXX™[˜Ú\˜ÚH[ˆšY\›[™[ˆ8 $ÈÝˆ›Ú[›š\È™]Y[™Ø[[YXW_JK	
ÝZ›Ú[›š\ËXÝ\œÛXÚØÝˆ›Ú[›š\È8 $ÈÝ\œÛXÚØÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚHÜ™šÚ\˜ÚH[ˆÝ\œÛXÚËˆ[›™[˜™\ÚXÚYÝ[™Ù[ˆ[™ZÝY[H™\ÝXÚÛpí™ÛXÚÙZ][ˆšXÚ[ˆÚXÚ˜XÚ[ˆ[™›Ü›X][Û™[ˆ\ˆÚ\˜Ú[™Ù[YZ[™K˜Ý\œÛXÚØÝ\œÛXÚÙ\ˆZXÚM‹ŒLÎH[X\™ØÎ‹ËÝÝÝË››Ü™Ú\˜ÚK™KØY™\ÜÙ[‹Ú[œÝ]][Û™[‹Ù]Z[[œÚXÚÚ[œÝ]][Û‹ÚÚ\˜ÚK\ÝZ›Ú[›š\Ë^KXÝ\œÛXÚØ›Ü™Ú\˜ÚXË‹‹šÛJØ^XÌŽNMÍ˜LËM‹LŒŒÍÎMÊKÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Ø]YÛÜžS[šÜÎ–Ø˜YKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÎÌŽNMÍ˜X™[˜Ü[”Ý™Y]X\8 $ÈÝˆ›Ú[›š\ÈÝ\œÛXÚÈ
Ñ“
XW_JK	
Ý[šXÛÛZKX[[™Ø[[YXÝˆšXÛÛZH8 $È[[™Ø[[YXÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚHÜ™šÚ\˜ÚH[ˆ[[™Ø[[YKˆYHÚ\˜Ú[™Ù[YZ[™H™\°í™™™[XÚZÝY[H[™›Ü›X][Û™[ˆHÛÝ\ÙY[œÝ[ˆ[™™\ÚXÚYÝ[™Ù[‹˜[[™Ø[[YXÚ\˜Ú[œÝYÙ[LKŒLÎH[X\™ØÎ‹ËÜÙ\šXÙ\Ü[šÚ\˜ÚKZ[X\™Ë™KÙÙ[YZ[™[‹ÜÝ[šXÛÛZK^KX[[™Ø[[YKš[Ú\˜ÚH[X\™ØË‹‹šÛJØ^XLMMNÍŒ˜LËŽMMÌKLŒÌMLJKÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Ø]YÛÜžS[šÜÎ–Ø˜YKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌLMMNÍŒ˜X™[˜Ü[”Ý™Y]X\8 $ÈÝ‹SšXÛÛZKRÚ\˜ÚH[[™Ø[[YH
Ñ“
XW_JK	
Ý\Ù]™\š[šKZÚ\˜ÚÙ\™\˜ÝˆÙ]™\š[šH8 $ÈÚ\˜ÚÙ\™\˜ÙZ[œÝÝY\™YÚÙZ][˜\ÝÜš\ØÚHÜ™šÚ\˜ÚH[ˆÚ\˜ÚÙ\™\‹ˆYHÚ\˜Ú[™Ù[YZ[™H™\°í™™™[XÚZÝY[H[™›Ü›X][Û™[ˆHÛÝ\ÙY[œÝ[ˆ[™™\ÚXÚYÝ[™Ù[‹˜Ú\˜ÚÙ\™\˜Ú\˜Ú[šY\ÙYÈL‹ŒLÍÈ[X\™ØÎ‹ËÜÙ\šXÙ\Ü[šÚ\˜ÚKZ[X\™Ë™KÙÙ[YZ[™[‹Ù]‹[]ZÚ\˜Ú[™Ù[YZ[™KZÚ\˜ÚÙ\™\‹ÚÛÛZÝKš[Ú\˜ÚH[X\™ØË‹‹šÛJØ^XLŒÌÎL˜LËNMÌNKLŒNNÍŒJKÝ\š\ÛQÜ›Ý\˜ÙZ[œÝÝY\™YÚÙZ][˜Ø]YÛÜžS[šÜÎ–Ø˜YKY][Û˜[ÛÝ\˜Ù\Î–ÞÝ\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌLŒÌÎL˜X™[˜Ü[”Ý™Y]X\8 $ÈÝ‹TÙ]™\š[šKRÚ\˜ÚHÚ\˜ÚÙ\™\ˆ
Ñ“
XW_JJNÝ˜\ˆ[O^ÈœÝ\]šHŽ–ØØ^XLŒNNLÌLËLŒËLŒŒLLWK[ÝY–ØØ^XŒÍÌN˜LËMŒËLŒŒLÌÌŽKÙ\œ˜ZŽ–Ø›ÙXNÌMØLËLKLŒŒÌLWK˜]]\Î–ØØ^XŒÍÎMÍLŒNLËÌMÍMËLŒŒŒÍNWKÝ\›Ø\N–Ø›ÙXÎŒLM˜LËŒÍLŒŒÎLÎNKœšY\[˜\™Ù\‹[]YZHŽ–Ø›ÙXNLŒŒÍÍÍ˜LËL‹LŒŒŽMÍ×K˜˜ZšÙ‹X[Ž–ØØ^XŒÍNLMXLË‹LŒŒLNLŒ—K˜ØY™KXÚž\Ø[™\ˆŽ–ØØ^XMÎMÌLMNLËMŒŒËLŒŒMLŽM—K˜ØY™K[›Ý\š\ÚŽ–Ø›ÙXLNLÍLÌLËL‹LŒŒLLWK˜œ[˜ÚY˜XÝÜžHŽ–Ø›ÙXLÍÌLÎNXLËÍÍLLŒŒMLNNKØ\Ø\™XØÚ[Î–ØØ^XŒNÌÌMLLËMLLÍÎKLŒŒŒŒM×Kš[XN–ØØ^XŒMÎMÍÍMLØLËMLKLŒŒMNM—K›[™]\Ë]›ÚYÝŽ–ØØ^XLÍÌÌNŒŒLËÍLŒMNLŒLŒNMWK˜[KYZXÚØ]HŽ–ØØ^XÌŽÌMØLËLÌMËLŒLÎNMK˜YÝ][ÛŽ–ØØ^XÌLLÍLŒ˜LËNLKLŒŒÌÍLWKšZÝ[Ž–ØØ^XLŒÌÌMXLËLŒŒMNWKšÝ[\ØXÚÙ[ÜˆŽ–Ø›ÙXLÌŽLMŽXLËNLËLŒŒMŒŽKšÝ[Z[œÙX]Ž–ØØ^XŒÍNNML˜LËLÍKLŒNMÎLÎLWK[œ\›NM–ØØ^XLŒÍNNXLËËLŒLÌK™™\šY[ÛÚ[™ËXÝ\œÛXÚÈŽ–ØØ^XMLÌŒÍ˜LËÍMÍKLŒŒÍÍŒÌWK™][˜\™Î–Ø™[][Û˜ŒŽMMŒLËÎMŒŽKLŒNÌŽML—K˜[[ÚœYYÙÙ\‹ZÙˆŽ–ØØ^XLLLÍMLÌXLËLŒÍËLŒŒŒMÌŒ—KšÝ[[YY]\œ˜[ˆŽ–ØØ^XMÌÎNLÌÌŽXLËÍÍNKLŒÍLWKœ[œÚ[Û‹[[Ú[›[Ú[ˆŽ–ØØ^XLŒÎÍŒ˜LËËLŒLÌÍÍLWKšY\›Y[™\™ZK][\šÝ[™Ž–ØØ^XŒŽÌŒŽXLËMMŒ‹LŒMŽÌWK˜ØY™K[[Û[˜HŽ–Ø›ÙXNLŒŒÍÍÍ˜LËL‹LŒŒŽMÍ×KšÜ˜][\‹ZÜ›ÛÙÈŽ–ØØ^XŒÍŒLŒŒXLËŒÎNMÌLŒŒMMÌNK›ÛÝÚ]\Î–ØØ^XNÍŒNXLËLŽMÍŒKLŒŒMLŽWKœY[[YZY\ˆŽ–ØØ^XŒÌLÍMŽLËNŒ‹LŒLÎNLLL×KÚ[™Ý\™š[™ËZ[X\™ÈŽ–ØØ^XŒÌÍÍMŒŒXLËŒLŒLLLKÜY[ØÚ][™N–ØØ^XMÌŒMÍ˜LËMÎKLŒMMMÎKÝ\š\ÝZ[™›ÈŽ–ØØ^XŒMÎMÍÍM˜LËLLÍËLŒŒL—KÝ\š\ÛKZ[™›ÈŽ–ØØ^XŒMÎMÍÍM˜LËLLÍËLŒŒL—KÙZ[™˜\ÜÎ–ØØ^XÌMLŽMØLËÍMÍNLŒŽMN×K[X\™Ø›Ø]Î–ØØ^XLŒLŒŒXLËML‹LŒLLÎMWKšÝ]ØÚ˜Z[‹X\›Y\Ý\ˆŽ–ØØ^XMÎŒNXLËLÌŒÍ‹LŒLNL—K™\›X›š\Ø˜]Y\›šÙ‹X\›Y\Ý\‹\™Z][ˆŽ–ØØ^XMÎŒNXLËLÌŒÍ‹LŒLNL—K˜š[ÚÙ‹\ÛÛ[Y\™™[Ž–ØØ^XŽÎMMLÌØLËŒÍÍLÌËLŒLŒMŒÍWK™ÛÚØ\ZÙˆŽ–ØØ^XŒÎLMŒØLËÌLŽNL‹LŒLÍÍKÛN–ØØ^XŒNÌÌMMLLËMMÍLKLŒŒNLÌLWKœšYXÚËYYZ[™Ù[ˆŽ–ØØ^XMMŒLŒ˜LËNLÍLŒŒML—K›]YZ[‹YYZ[™Ù[ˆŽ–Ø›ÙXNLŒŒÍÍÍ˜LËL‹LŒŒŽMÍ×KœÜÜ›ÛÝY™[‹[[Ù[\ˆŽ–ØØ^XŽLÍLN˜LËMÌÍÎKLŒMÌNWKXXÚÛXŽ–ØØ^XŽLÍLNØLËLÎLŒKLŒNM×KœÚ^X™\™ÙYÜ™ˆŽ–Ø›ÙXLNMLŒŒÌLMXLËKLŒŒMMÍÍ—_NÙ›ÜŠ]ÙKÝ‹‹WW[ÙˆØš™XÝ™[šY\Ê[JJ^Û]OP[K™š[™
OšYOOYJNØI‰ŠK›]\‹K›ÛZKK˜ÛÛÜ™[˜]TÛÝ\˜ÙOQJŠJ_Y›ÜŠ]HÙˆØš™XÝšÙ^\Ê[JK˜ÛÛ˜Ø]
Ý\™\šÙ\œ˜\ÜÙ[‹š[[šY\[œÝZ›Ú[›š\Ë[™]Y[™Ø[[YKœÝZ›Ú[›š\ËXÝ\œÛXÚËœÝ[šXÛÛZKX[[™Ø[[YKœÝ\Ù]™\š[šKZÚ\˜ÚÙ\™\‹œÝ\]šK˜[ÝYœÙ\œ˜Z‹œ˜]]\ËœÝ\›Ø\KšÚ\˜Ú[‹]šY\›[™K˜˜ZšÙ‹X[œÜ^šY\™Ø[™ËšÚ\˜Ú[Ý\‹œÝ\›Ø\KYYZ[™ËœšYXÚËYYZ[™Ù[‹›]YZ[‹YYZ[™Ù[‹˜™\™Ë[]\Ù][\Û[™ØÚYœØÚY™™˜ZÛ[šYK˜]ËšY\›Y[™\‹Y]Ù\‹Ý\š\ÝZ[™›ËÝ\š\ÛKZ[™›ËšØ\›Û[™K™Ù\ØÚXÚÚÛÛÜ˜œÜ]
˜
JJ^Û]P[K™š[™
OšYOOYJNÝ	‰Š˜ÚXÚÙYÛXŒ‹LLKLŒØœÝ]\ÏOOX]Y[H[HŒKŒLKŒŒˆÙ\°ï	‰ŠœÝ]\ÏX]Y[H[HŒËŒLKŒŒˆÙ\°ï
J_]˜\ˆ›O[™]ÈÙ]
›ÜÙ[Ý\‹˜›Ø™\™Ë\›Ý]KšY\‹[X\œØÚ[™KZYÚYÚÙZ[™˜\ÜËš[X\™Ø›Ø]Ë˜Y˜Ë]Ý\™[‹œÙYÙ[›YÜ]‹X›Ø™\™Ë™ÛÚØ\ZÙ‹šÝ]ØÚ˜Z[‹X\›Y\Ý\‹›YYØX˜[Ë˜[\›[ÙZ\‹]ÚY\Ù[‹˜[\‹ZÛšY™[‹œÜY[›Y[™\‹\Ü]™K˜™\™ÙYÜ™™\‹YÙZÙ[‹šØ\›Û[™KÛØÚ[›XY\šÝKX™\™ÙYÜ™‹˜™\™ÙYÜ™™\‹\ÝY™\Ý˜™\™ÙYÜ™™\‹]ÙZZ˜XÚÛX\šÝÝ]œ›ØÚËšX[[Ëš]\ËX[›˜KY[™K™[™\˜YÙYË›X[\‹[XÚÚY\™\‹[]\Ù][Kœ™Z]œ›ÛÚÙ\‹[]YZK™Ù\ØÚXÚÚÛÛÜ‹˜™\™Ë[]\Ù][\Û[™ØÚYšÝY[œÝ\š]\ËX™\™ÙYÜ™‹Ú]KXÝX™KX™\™ÙYÜ™‹š[œØKYš[\ÝY[ËœÝÚ[™ÛÛ‹Z[X\™Ë™ÛÛ‹[Ý[™ÙK[[ÛÜ™›Y]›Z[šYÛÛ‹YÜY[™\Ë^™[[K™˜XÚ[›Xž\š[˜›Ø™\™Ù\‹\™Z]™\™Z[‹™\›X›š\Ø˜]Y\›šÙ‹X\›Y\Ý\‹\™Z][‹›Z[ÚÙ‹\™Z]œ›ÛÚË˜XÚÙ\œ\›[‹˜š[ÚÙ‹\ÛÛ[Y\™™[šY\‹[X\œØÚ[™K\]Y\˜™Y]][˜™\™Ù\‹\ØÚ]\ÙKœØÚÙ\Ù\šÙK]šY\‹[X\œØÚ[™KšÚYXš]˜œ˜XÚË˜›Ù[›Zœ˜YX›Ø™\™Ë™Ü›ÜÜÙKX™\™ÙYÜ™™\‹\[™KšY\›Y[™\‹]›ÛÜË\ØÚY]™[™™\ÝšY\›Y[™\‹Y\™™Y\™™\Ý™Y[™[ÙYËX›Ø™\™Ë›[ÛÜÙYËX›Ø™\™Ë\œ˜\ÜÙ[ÙYËX›Ø™\™ËÚY\Ù[ÙYËX›Ø™\™ØœÜ]
˜
JNÙ›ÜŠ]HÙˆ[JS›Kš\ÊKšY
I‰ŠK˜ÚXÚÙYÛXŒ‹LLKLŒ˜KœÝ]\ÏOOX]Y[H[HŒKŒLKŒŒˆÙ\°ï	‰ŠKœÝ]\ÏX]Y[H[HŒ‹ŒLKŒŒˆÙ\°ï
JNÙ›ÜŠ]HÙˆJY›ÜŠ]ÙˆKš][RYÊ^Û]P[K™š[™
OO™KšYOO]
NÛ‰‰Š‹šYÚYÚYÏVË‹‹›‹šYÚYÚYß×KKšYK‹šYÚYÚHL
_]˜\ˆOYOO[K™š[™
OšYOOYJ_[Ð[K™š[\ŠOO“[X™\‹š\Ñš[š]JK›]
I‰“[X™\‹š\Ñš[š]JK›ÛŠI‰™K˜ÛÛÜ™[˜]TÛÝ\˜ÙJNÙ[˜Ý[Ûˆ›JÜ]Y\žN™OXØ]YÛÜžRYÎ]ÛK›X\
OO™KšY
Kœ™YSÛ›N›HLKšZÙQœšY[™SÛ›NœHL_O^ßJ^Û]O[™]ÈÙ]

KOTÝš[™ÊJKš[J
KÓØØ[SÝÙ\Ø\ÙJX
NÜ™]\›ˆ[K™š[\ŠOO–ÙK˜Ø]YÛÜžK‹‹™K˜Ø]YÛÜžS[šÜß×WKœÛÛYJOOšKš\ÊJJI‰Š[ŸHYK™œ™YJI‰Š\ŸHYK˜šZÙQœšY[™JI‰ŠX_ÙK›˜[YKK™\ØÜš\[Û‹KœÝ\[Y[[\ØÜš\[Û‹KœXÙKK˜Y™\ÜËK˜Ø]YÛÜžKKœÝ]\Ë‹‹™KœÙX\˜Ú\›\ß×KÛK™š[™
OšYOOYK˜Ø]YÛÜžJOË›X™[K™š[\Š›ÛÛX[ŠKš›Ú[Š
KÓØØ[SÝÙ\Ø\ÙJX
Kš[˜ÛY\ÊJJJ_Y[˜Ý[Ûˆ[JJ^Û]VÙK˜Ø]YÛÜžK‹‹™K˜Ø]YÛÜžS[šÜß×WKV×NÜ™]\›ˆKšYÚYÚYÏË›[™Ý	‰›‹œ\Ú
YÚYÚØ
Kš[˜ÛY\ÊÙZ[œÝÝY\™YÚÙZ][˜
I‰›‹œ\Ú
ÚYÚØ
Kš[˜ÛY\Ê˜Y
I‰›‹œ\Ú
›Ý]\Ø
K
š[˜ÛY\Ê[\šÝ[™
_š[˜ÛY\ÊØ[\[™Ø
JI‰›‹œ\Ú
XØÛÛ[[Ù][Û˜
KKœÜXÚX[Ý^I‰›‹œ\Ú
ÜXÚX[\Ý^\Ø
KK˜šZÙQœšY[™I‰›‹œ\Ú
šZÙK\Ý^\Ø
Kš[˜ÛY\ÊÝ[\˜
I‰›‹œ\Ú
Ý[\™X
KK™]™[™[YI‰›‹œ\Ú
]™[Ø
Kš[˜ÛY\Ê˜[Z[YX
I‰›‹œ\Ú
Z\Ý\™X
Kš[˜ÛY\ÊØ\ÜÙ\˜
I‰›‹œ\Ú
Ø]\˜
Kš[˜ÛY\Ê˜]\˜
I‰›‹œ\Ú
˜]\™X
K
K™Ù[ÛY]žU\OOOX\™XXK™Ü™Y[”ÜXÙJI‰›‹œ\Ú
Ü™Y[˜
KK›X\šÙ]	‰›‹œ\Ú
X\šÙ]Ø
KK›X\Ú[™ÏË›[™Ý	‰›‹œ\Ú
‹‹™K›X\Ú[™ÊKË‹‹›™]ÈÙ]
ŠW_]˜\ˆORŠYK\™Z]
K›OTJØÚÜÜØ
K›OVÞÚY˜\ÝÜžKX
ÓKšYÚ[™˜Ù\ØÚXÚH[™\š[›™\[™Ù[˜]N“K›˜[YK›ÙN“K›Ý™\šY]ÖÌK^XÙN“K™\ÝšXÝËš›Ú[Š0­È
K™YŽ–ŠKšY
_KÚY˜Ý\š\ÛKX
Ô›KšYÚ[™˜™\™ÙYÜ™ˆ[XÚÙ[˜]N”›K›˜[YK›ÙN”›K™\ØÜš\[Û‹XÙN”›KœXÙKÚXÚÙYÛŽ”›K˜ÚXÚÙYÛ‹™YŽ˜ÝÝ\š\Û]\ËØ
Ô›KšYWK›O^ÜÛ]ZÎ˜Û]\ØÚ\È[XX[›YYÙ[Ž˜[›YYÙ[˜\™˜Z[™Î˜\™˜Z[™ÜØ™\šXÚÙ\ØÚXÚN˜Ù\ØÚXÚH[™\š[›™\[™Ø™]ÜÎ˜˜XÚšXÚ™\šXÚ˜™YZÝ[Û™[\ˆ™\šXÚ™YZÝ[ÛŽ˜™YZÝ[Û™[\ˆ™Z]˜YØNÙ[˜Ý[Ûˆ›J
^Û]ÜÝ]N™_OUÊ
KV\ÊK™]È]JNÜ™]\›ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆÛY\YÙKXÝ\œ™[˜\šXK[X™[YžHŽ˜ÛY\YÙKXÝ\œ™[ZXY[™ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜ÙXÝ[Û‹ZXY[™ØÚ[™[ŽŠšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜ÑT°ç•HS‘‘RUPÒRS‘ÑSÔ‘‘UHS’SXJK
šœÞ
J˜ÚY˜ÛY\YÙKXÝ\œ™[ZXY[™ØÚ[™[Ž˜ZÝY[\È]\È™\™ÙYÜ™˜JW_J_JK›[™ÝÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[YÜšYÚ[™[Ž›X\
OOŠšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[XØ\™Ú[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[[Y]XÚ[™[Ž–ÊšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[ZÚ[™Ú[™[Ž™K\OOOX]™[Ø™\˜[œÝ[[™Ø›VÙKšÚ[™_ZÝY[\È[XXJKKšYÚYÚY	‰ŠšœÞÊJÜ[˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[ZYÚYÚÚ[™[Ž–Ø™YZÝ[Û™[\›Ü™ÙZØ™[ˆ\˜ÚKœÝ]\ËšYÚYÚ]šX]YË0­Èš\ÈÊKœÝ]\Ë™^\™\ÓÛŠØLŽŒŒ
ÌNŒ
K0­ÈKœÝ]\ËšYÚYÚ™X\ÛÛ—_JW_JK
šœÞ
JØØÚ[™[ŽŠšœÞ
JXÚ™YŽ™Kš™Y‹Ú[™[Ž™K]_J_JK
šœÞ
JØÚ[™[ŽÛŠK˜›ÙKŒL
_JK
šœÞ
JØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[\XÙXÚ[™[Ž™KœXÙ_JKK\OOOX]™[ÊšœÞÊJØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[Y]XÚ[™[Ž–ÊšœÞÊJÝ›Û™ØØÚ[™[Ž–ÖœÊKœÝ\Ð]
K0­È\ÊKœÝ\Ð]K™[™Ð]
W_JK
šœÞ
Jœ˜ßJK™YZÝ[Û™[Ù\°ï[HÊK˜ÚXÚÙYÛŠØLŽŒŒ
ÌNŒ
Kˆ
šœÞ
JXÚ™YŽ™KœÛÝ\˜ÙU\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜™Y™\œ™\”ÛXÞN˜›Ë\™Y™\œ™\˜Ú[™[Ž˜™\˜[œÝ[[™ÜÜ]Y[XJW_JNŠšœÞÊJØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[Y]XÚ[™[Ž–Ø™\°í™™™[XÚ[HÊKœX›\ÚY]
KK\]Y]	‰™K\]Y]OOYKœX›\ÚY]ÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–Ø0­ÈÙ\Ù[XÚZÝX[\ÚY\[HÊK\]Y]
W_JN›[_JK
šœÞ
JXØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[[[šØ™YŽ™Kš™Y‹Ú[™[Ž˜›ÛÝ0é™YÙ[ˆ™Z]˜YÈ[œÙZ[ˆ8¡¤˜JW_KKšY
J_JNŠšœÞ
JØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[Y[\XÚ[™[Ž˜\ž™Z]Ú[™ÙZ[™H™YZÝ[Û™[™\Ý0éYÝ[ˆZÝY[[ˆ™Z]°éÙH›Üš[™[‹˜JW_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆÛY\YÙKY\ØÛÝ™\˜˜\šXK[X™[YžHŽ˜ÛY\YÙKY\ØÛÝ™\‹ZXY[™ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜ÙXÝ[Û‹ZXY[™ØÚ[™[ŽŠšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜ÑTÐÒPÒH0­ÈÓURÈ0­ÈÕT’TÓUTØJK
šœÞ
J˜ÚY˜ÛY\YÙKY\ØÛÝ™\‹ZXY[™ØÚ[™[Ž˜ÙZ]\™H[Y[ˆ[XÚÙ[˜JW_J_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[YÜšYÛY\YÙKY\ØÛÝ™\žKYÜšYÚ[™[Ž–Þ›K›X\
OOŠšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[XØ\™Ú[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[[Y]XÚ[™[ŽŠšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[ZÚ[™Ú[™[Ž™KšÚ[™J_JK
šœÞ
JØØÚ[™[ŽŠšœÞ
JXÚ™YŽ™Kš™Y‹Ú[™[Ž™K]_J_JK
šœÞ
JØÚ[™[ŽÛŠK˜›ÙKŒL
_JK
šœÞ
JØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[\XÙXÚ[™[Ž™KœXÙ_JKK˜ÚXÚÙYÛ‰‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[Y]XÚ[™[Ž–Ø]Y[H™YZÝ[Û™[Ù\°ï[HK˜ÚXÚÙYÛ‹œÜ]
X
Kœ™]™\œÙJ
Kš›Ú[Š˜
W_JK
šœÞ
JXØÛ\ÜÓ˜[YN˜ÛY\YÙKXÝ\œ™[[[šØ™YŽ™Kš™Y‹Ú[™[Ž˜›ÛÝ0é™YÙ[ˆZ[˜YÈ[œÙZ[ˆ8¡¤˜JW_KKšY
JK
šœÞ
JÛ‹ßJW_JW_JW_J_Y[˜Ý[ÛˆJ
^Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[Ú[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜UQSSˆ	ˆ‘PÒXJK
šœÞ
JXØÚ[™[Ž˜š[˜XÚÙZ\ÙH[™]Y[[˜JK
šœÞ
JØÚ[™[Ž˜YHÙXœÚ]Xš[\ˆÚ[™ÚØ[Z[™ÙX[™[‹ˆ^\›™HØ\[š[š[HÙ\™[ˆ\œÝ˜XÚZ™\ˆYY[ØÚZY[™È[™ÙY›Ü™\˜JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[šYÚØÚ[™[Ž–ÊšœÞ
JœßJK
šœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™\™ÙYÜ™™\ˆØ\[˜JK
šœÞ
JØÚ[™[Ž˜8 '‘UH[X\™ËP™\™ÙYÜ™ˆÓÐKœÝ™ø 'ˆ\šX™\ˆ]]]Z\ÙZ]NˆX^Ú\ØÚÈÕ‘ËQ]Z]™\œÚ[Ûˆ›ÛHL‹ŒŒŒŒ‹ÚZÚ[YYXKS]™\ˆ™[›‹SË[X[šPËˆ\œÝ[[™È›ÛˆNLËˆYHÛÛ[[ÛœËQ]Z\ÙZ]HÙ[›ž™ZXÚ™]\È[]XÚHØ\[ˆ˜XÚ0©ÈHXœØ]ˆH\šÈ[ÈÙ[YZ[™œ™ZK˜JK
šœÞ
JØÚ[™[Ž˜Y\ÙH\šX™\œ™XÚXÚHÙ[›ž™ZXÚ[™È\ÝÙZ[™HXœØÚYpçÙ[™H\›]X›š\È°ïˆ™YH0í™™™[XÚHØ\[™\Ù[™[™Ëˆ0å™™™[XÚ\™XÚXÚH][™ÜØ™\ØÚ°éšÝ[™Ù[ˆÚ[™Ù\ÛÛ™\H°ï™[‹ˆ\ÈØ\[ˆ›ZX[ˆ\ˆ0í™™™[XÚ[ˆÝ]\ØÚ[ˆ\Ý˜\ÜÝ[™È[™\°é™\ÈZ[™H]ØH\™›Ü™\›XÚH[]XÚH\›]X›š\ÈÚ\™šXÚ™Z]\]˜JK
šœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽÜË˜Ü™\Ý\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜\šÝ[™[™™XÚZ[ÙZ\È]YˆÚZÚ[YYXHÛÛ[[ÛœØJ_JK
šœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Î‹ËØÛÛ[[ÛœËÚZÚ[YYXK›Ü™ËÝËÚ[™^œÝ]OQš[N‘UWÒ[X\™ËP™\™ÙYÜ™—ÐÓÐKœÝ™É›ÛYLLNNÌŽLÎX\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜]Y\šYHÚÝ[Y[Y\HÙZ][™\œÚ[Ûˆ\ÈØ\[œØJ_JK
šœÞ
JØÚ[™[Ž˜™^YÎˆNŒLŒŒ‹ˆ™\Ù[™[™È]Yˆ\ˆÙXœÚ]HÙZ]NŒLŒŒ‹ˆ™XÚX™[YÈ[H›Ú™ZÝÙZ]NŒLŒŒˆÙ\ÚXÚ\È\›™]][HŒKŒLŒŒˆ[š[™\È›Üš[™[™[ˆ™[YÜÈÙ\°ïˆ\È0á™\[™ÜÙ][H\ˆÚZÚ[YYXKTÙZ]H\ÝÙZ[ˆ][H[œÙ\™\ˆ™[YÜÚXÚ\[™Ëˆ0á™\[™Ù[ˆ[HÕ‘ÎˆÙZ[™K˜JW_JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[šYÚØÚ[™[Ž–ÊšœÞ
J[YØÜÜ˜Î˜Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËÜØÚÜÜËšœØ[˜™\™ÙYÜ™™\ˆØÚÜÜË›ÝÈ][KT\˜]JK
šœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™\™ÙYÜ™™\ˆØÚÜÜÈ[ˆ[X\™ËP™\™ÙYÜ™˜JK
šœÞ
JØÚ[™[Ž˜\šX™\Žˆ][KT\˜]ˆ]Y›˜ZYH]]]Z\ÙZ]Nˆ‹ŒKŒŒŒˆ^™[žŽˆÜ™X]]™HÛÛ[[ÛœÈ˜[Y[œÛ™[›[™È8 $ÈÙZ]\™ØX™H[\ˆÛZXÚ[ˆ™Y[™Ý[™Ù[ˆŒ[\›˜][Û˜[˜JK
šœÞÊJØÚ[™[Ž–ÊšœÞ
JXÚ™YŽÜËœÝË\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ZÝY[HÚZÚ[YYXKPš[ÙZ]XJK0­È
šœÞ
JXÚ™YŽ˜Î‹ËØÛÛ[[ÛœËÚZÚ[YYXK›Ü™ËÝËÚ[™^œÝ]OQš[N™\™ÙYÜ™™\—ÔØÚÜÜ×Ú[—Ò[X\™ËP™\™ÙYÜ™‹šœÉ›ÛYNŒMLMÌ˜\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜]Y\šYHÚÝ[Y[Y\HÙZ][™\œÚ[Ûˆ\ÈØÚÜÜÙ›ÝÜØJK0­È
šœÞ
JXÚ™YŽ˜Î‹ËØÜ™X]]™XÛÛ[[ÛœË›Ü™ËÛXÙ[œÙ\ËØžK\ØKÍŒÙYY™X\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÐÈ–KTÐHŒJW_JK
šœÞ
JØÚ[™[Ž˜™^YÎˆNŒLŒŒ‹ˆ™\Ù[™[™ÈÙZ]NŒLŒŒ‹ˆ™XÚX™[YÈ[H›Ú™ZÝÙZ]NŒLŒŒˆÙ\ÚXÚ\È\›™]][HŒKŒLŒŒˆ[š[™\È›Üš[™[™[ˆ™[YÜÈÙ\°ïˆ™X\˜™Z][™Îˆ™\šÛZ[™\[™VQˆ[™\›È]Yˆ\ˆÝ\ÙZ]H[Èš[]\ÜØÚš]\™Ù\Ý[ˆYH™X\˜™Z]]H˜\ÜÝ[™ÈÝZ[\ˆÐÈ–KTÐHŒ˜JW_JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜Ø\[œ]Y[[ˆ[™^™[ž™[˜JK
šœÞ
JØÚ[™[Ž˜YH[\˜ZÝ]™[ˆÙ\ØÚXÚËKÜ™Ø[š\Ø][ÛœËH[™™\ž™ZXÚš\ÚØ\[ˆÛÝÚYHYHÝ[™Ü›ÜœØÚ]H™\Ù[™[ˆ˜XÚÙ\ÛÛ™\\ˆYYœ™ZYØX™H[ˆÜ[‘œ™YSX\SX™\KU™ZÝÜš[\™Ü[™Z]Ü[“X\[\ËRØ\[™][‹ˆØ\[™][Žˆ0ªHÜ[”Ý™Y]X\SZ]Ú\šÙ[™KÑ“ˆÜ[‘œ™YSX\Ú\™›Ûˆ\\šÛ›ÝÛÙØ\™HÙˆ™]šYX™[‹ˆ™^š\šÜËH[™ÝYZ[Ù[ÛY]šY[ˆÝ[[Y[ˆ›ÛHÕˆ[X\™È™^šYZ[™ÜÝÙZ\ÙH]\ÈSÒTÎÈZ™H][›^™[žˆ\Ý]]ØÚ[™8 $È˜[Y[œÛ™[›[™È‹ŒˆYH™]ÙZ[YÙ[ˆØ\[ˆ™ZYÙ[ˆZ™H]Y[[˜[™ØX™[ˆ\ðé›XÚ\™ZÝ[‹˜JK
šœÞÊJ[ØÚ[™[Ž–ÊšœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËØÛÜ\šYÚ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ü[”Ý™Y]X\ˆ][\šX™\ˆ[™Ñ“J_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Î‹ËÛÜ[™œ™Y[X\›Ü™ËÜš]˜XÞKØ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ü[‘œ™YSX\ˆ][œØÚ]˜J_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Î‹ËÛÜ[™œ™Y[X\›Ü™ËÝÜËØ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ü[‘œ™YSX\ˆ][™ÜØ™Y[™Ý[™Ù[˜J_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Î‹ËÙÚ]X‹˜ÛÛKÚ\\šÛ›ÝÛÜ[™œ™Y[X\\Ý[\ËØ›Ø‹ÛXZ[‹ÓPÑS”ÑK›Y\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ü[‘œ™YSX\X™\HÈÜ[“X\[\ÎˆÝ[[™^™[ž™[˜J_JK
šœÞ
JXØÚ[™[ŽŠšœÞ
JXÚ™YŽ˜Î‹ËÝÝÝË™ÛÝ™]K™KÙYKØžKL‹L\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜][›^™[žˆ]]ØÚ[™8 $È˜[Y[œÛ™[›[™È‹ŒJ_JW_JK
šœÞ
JØÚ[™[Ž˜Ü[”Ý™Y]X\Ø\È[™[K›Ü[œÝ™Y]X\›Ü™ÈØ\™[ˆœ°ï\™HØ\[™Y[œÝNÈÚYHÙ\™[ˆY\ˆšXÚ[ÈZÝY[H[\™Ü[™Ø\H]\ÙÙ]ÚY\Ù[‹˜JK
šœÞÊJØÚ[™[Ž–Ø™^š\šÜÙÜ™[ž™H[™[X\™ËP]\ÜØÚš]ˆœ™ZYH[™[œÙ\ÝY[X\™Ë[™\Ø™]šYXˆÙ[Ú[™›Ü›X][Ûˆ[™™\›Y\ÜÝ[™È
ÕŠK]YˆÜ[™YÙH\ˆ[]XÚ[ˆ™\Ø[[™ÜÙÜ™[ž™[ˆ™^šYZ[™ÜÝÙZ\ÙHSÒTË°ïˆYH0ç™\œÚXÚ™\™Z[™˜XÚˆ
šœÞ
JXÚ™YŽ˜Î‹ËÝÝÝË™ÛÝ™]K™KÙYKØžKL‹L\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜][›^™[žˆ]]ØÚ[™8 $È˜[Y[œÛ™[›[™È‹ŒJKˆYH\šÝ[™Z[ž™[™\ˆÝ[™ÜÛÛÜ™[˜][ˆÝZ[H™]ÙZ[YÙ[ˆ›Ùš[ˆYHØ\HØ\˜[Y\ÙY\ˆZÝY[H0å™™›[™È›ØÚYðé™ÛXÚÙZ]˜_JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜Ý˜pçÙ[šØ\H°ïˆÙ\ØÚXÚH[™\š[›™\[™Ù[˜JK
šœÞ
JØÚ[™[Ž˜Ü[‘œ™YSX\X™\HÈÜ[“X\[\ÎÈØ\[™][ˆ0ªHÜ[”Ý™Y]X\SZ]Ú\šÙ[™KÑ“ˆ\ˆ™\YÙHX™\KTÝ[YY™\Ý˜pçÙ[™\›0éY™K[[™È\ˆÝ˜pçÙ[ˆÙ\Ù]H˜[Y[‹ÜÛ˜[Y[ˆ[™ÜšY[Y\[™ÜÙ[[Y[Kˆ0á™\[™Ù[Žˆš[\ˆ\ˆ›Üš[™[™[ˆÜÙX™[™[ˆ\ˆ™\ØÚ°éšÝ[™È]Yˆ0í™™™[XÚHÜšY[Y\[™ÜÜ[šÝNÈœ°ï\™H[™0éYšYÙ\™H\œÝ[[™È\ˆ›Üš[™[™[ˆ™\ØÚšY[™ÈÛZ[™\ˆÝ˜pçÙ[‹ˆÙZ[™HZYÙ[™[ˆÝ˜pçÙ[˜™\ØÚšY[™Ù[‹˜JK
šœÞÊJØÚ[™[Ž–ØÝ[Ù\Ý[[™ÈÐÈ–HŒÈÝ[ÛÙH”ÑLËPÛ]\ÙNÈÜ[‘œ™YSX\P[œ\ÜÝ[™Ù[ˆRUˆØ\[œØÚšY[ˆ›ÝÈØ[œÈ
ÒSÑ“KŒJKXZÚKTÞ[X›ÛHÐÌÈ˜]\˜[X\Ù[YZ[™œ™ZKˆYH›ÛÝ0é™YÙ[ˆZ]Ù[YY™\[ˆ^™[ž^HÝZ[ˆ[\ˆ
šœÞ
JXÚ™YŽ˜Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËÚ\ÝÜžK[X\[XÙ[œÙ\ËÚ[™[Ž˜Ø\[›^™[ž™[˜JKˆ
šœÞ
JXÚ™YŽ˜Î‹ËÙÚ]X‹˜ÛÛKÚ\\šÛ›ÝÛÜ[™œ™Y[X\\Ý[\ËØ›Ø‹ÛXZ[‹ÓPÑS”ÑK›Y\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÜšYÚ[˜[]Y[[ˆ[™^™[ž°ï™\œÚXÚJK0­È
šœÞ
JXÚ™YŽ˜Î‹ËÛÜ[™œ™Y[X\›Ü™ËØ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ü[‘œ™YSX\JK0­È
šœÞ
JXÚ™YŽ˜Î‹ËÛÜ[›X\[\Ë›Ü™ËØ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜Ü[“X\[\ØJK0­È
šœÞ
JXÚ™YŽ˜Î‹ËØÜ™X]]™XÛÛ[[ÛœË›Ü™ËÛXÙ[œÙ\ËØžKÍŒØ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÐÈ–HŒJK˜_JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜\ÝÜš\ØÚHš[\ˆ[™]Y[[˜JK
šœÞÊJØÚ[™[Ž–ØYH\ÝÜš\ØÚHš[H[™]Y[[œØ[[[[™È\Ý[H™\™ZXÚZ[œØ[ZÙZ][™™YÙYÛ[™ÈZ][ˆ™]ÙZ[YÙ[ˆÜØ™Z]°éÙ[ˆ™\šÛ°ïˆ
šœÞ
JXÚ™YŽ˜ÙZ[œØ[ZÙZ]ÜÝYZ[KÝLM˜Ú[™[Ž˜\ÝÜš\ØÚHØ[[[[™ÈZ]›ÝÜÈ[™]Y[[ˆ0í™™›™[˜JKˆYHÜYÙ[ˆZ[ž™[˜XÚÙZ\ÙH[™™XÚZ[™›Ü›X][Û™[ˆ›ZX™[ˆ™ZH[ˆ™]ÙZ[YÙ[ˆ™Z]°éÙ[ˆ\š[[‹˜_JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™YZÝ[Û™[H]Y[[˜JKØš™XÝ™[šY\ÊÜÊK™š[\Š
ÙWJOOˆVØÝØÜ™\ÝKš[˜ÛY\ÊJJK›X\

ÙKJOOŠšœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[ŽžÙ\ÝšXÝÎ˜[]XÚHÝYZ[0ï™\œÚXÚÛ]XÜÎ˜™^š\šÜÝ™\œØ[[[[™È[™ÛÛZÝ[\Î˜Ù\ØÚ0éÛÜ™[™È™\™ÙYÜ™ˆ0­È0©ÈŒØØ[[™\Ž˜[]XÚ\ˆÚ][™ÜÙY[œÝ\Y\Î˜[]XÚHœ˜ZÝ[Ûœðï™\œÚXÚVÙW_J_KJJK
šœÞ
JØÚ[™[Ž˜°ïœÝ[™Y\Ù\ˆ™YZÝ[Û™[[ˆÜ[™YÙ[ŽˆNŒLŒŒ‹ˆÙZ]\™H]Y[[ˆ[™Zˆ™]ÙZ[YÙ\ˆ°ïœÝ[™ÝZ[ˆ™ZH[ˆ™Z]°éÙ[ˆ[™Z[œšXÚ[™ÜÜ›Ùš[[‹ˆZ[™H™\›[šÝ[™È™YÜ°ï™]ÙZ[™HÛÛÜ\˜][Û‹˜JW_JW_J_]˜\ˆ[O^Ø[›YYÙ[Ž˜™\ØÚ™ZX™[ˆÚYH\È›Ø›[KYHÙ]ðïœØÚH0á™\[™È[™[ˆ]™[ˆ°ïˆYH[Ù[YZ[šZ]ˆZ[™Hœ™ZYØX™HY\ˆ\ÝÙZ[™H[]XÚHZ[™ØX™K˜\™˜Z[™Î˜\œðí››XÚH\™˜Z[™Ù[ˆÚ™HY[Yš^šY\™[™Hš]˜]H[™ØX™[‹ˆÙZ[™HÛÛ[Y[\™HÙ\ˆ[ÛÜ[ŽÈÜÚ]]™H™XZÝ[Û™[ˆ[™Y[[™Ù[ˆÚ[™pí™ÛXÚ˜Ù\ØÚXÚN˜ZYÙ[™H\š[›™\[™Ù[‹pï™XÚH0ç™\›YY™\[™È[™ÚÝ[Y[Y\HÙ\ØÚXÚHÚ[™Ú[ÛÛ[Y[‹ˆ\ÝÜš\ØÚ\ˆ™Z]˜][H[™œ™ZYØX™Y][HÙ\™[ˆÙ]™[›\™Ù\Ý[˜Û]ZÎ˜ZYÙ[™HÛ]\ØÚH[Y[ˆ[™\ÚÝ\ÜÚ[Û™[ˆH[]XÚ[ˆ[\›YÙ[ˆÚ[™Ú[ÛÛ[Y[‹ˆ]ØXÚ[ˆ[™\œðí››XÚH›ÜœØÚ0éÙH›ZX™[ˆ[\œØÚZY˜\ŽÈ™Z]°éÙH[™ÛÛ[Y[\™HÚ[™ÙZ[™H[]XÚ[ˆZ[™ØX™[‹˜Ü™Ø[š\Ø][ÛŽ˜›Ùš[HÝ[[ˆ[™ÙX›ÝH]\È[H™^š\šÈ›Ü‹ˆZ[™Hš]˜]H\Ýœ™ZYØX™H™\Ý0éYÝÙZ[™HXÚHÜ™Ø[š\Ø][ÛœÝ™\šYš^šY\[™Ë˜NÙ[˜Ý[ÛˆÛJÚ™YŽ™KÚ[™[ŽJ^Ü™]\›ŠšœÞ
JXÚ™YŽ™K\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[ŽJ_Y[˜Ý[ÛˆÛJÙ^YXœ›ÝÎ™K]N^›ŸJ^Ü™]\›ŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜YÙKZXY[™ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž™_JK
šœÞ
JXØÚ[™[ŽJK
šœÞ
JØÚ[™[Ž›ŸJW_J_Y[˜Ý[ÛˆÛJÜYÙN™_J^Û]ÜÝ]NOUÊ
NÜ™]\›ˆOOOXÛ]ZØÊšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[Ú[™[Ž–ÊšœÞ
JÛKÙ^YXœ›ÝÎ˜‘T”ÕRSˆ	ˆ‘URSQÑS˜]N˜Û]ZÈ›ÜˆÜ˜XÚ›ÛšYZ[˜^˜Ù™š^šY[H[\›YÙ[ˆš[™[‹™\˜][™Ù[ˆ™\œÝZ[ˆ[™™]Z[YÝ[™ÜÛpí™ÛXÚÙZ][ˆÙ[›™[›\›™[‹ˆY\ÙH]›Ü›H\ÝÙZ[ˆ[™ÙX›Ý\È™^š\šÜØ[]Ë˜JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Û]XÜËYÜšYÚ[™[Ž–ÊšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J™‹ØÛ\ÜÓ˜[YN˜™X]\™KZXÛÛ˜JK
šœÞ
J˜ØÚ[™[Ž˜™^š\šÜÝ™\œØ[[[[™È	ˆ™^š\šÜØ[]JK
šœÞ
JØÚ[™[Ž˜YH™^š\šÜÝ™\œØ[[[[™È™\ØÚYpçÝ[ˆ™^š\šÜØ[™Ù[YÙ[šZ][ˆ[™ÛÛ›ÛY\YH™\Ø[[™ÎÈ˜XÚ]\ÜØÚ0ïÜÙH™X\˜™Z][ˆ[Y[‹ˆ\È™^š\šÜØ[]š[[]™\Ø[[™ÜØ]Y™ØX™[ˆØZ‹˜JK
šœÞ
JÛKÚ™YŽÜËœÛ]XÜËÚ[™[Ž˜]Y™ØX™[ˆ[™]\ÜØÚ0ïÜÙH0­È[]XÚH]Y[XJK
šœÞ
JØÛ\ÜÓ˜[YN˜]]YÚ[™[Ž˜Ù\°ïˆNŒLŒŒ‹ˆÙZ[ˆ]]ÛX]\ØÚZÝX[\ÚY\\ˆÚ][™ÜÙ™YY˜JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J™‹ØÛ\ÜÓ˜[YN˜™X]\™KZXÛÛ˜JK
šœÞ
J˜ØÚ[™[Ž˜Z[™HÚ][™È™\ÝXÚ[˜JK
šœÞ
JØÚ[™[Ž˜YH™^š\šÜÝ™\œØ[[[[™È™\™ÙYÜ™ˆYÝ[ˆ\ˆ™YÙ[[H][ˆÛ›™\œÝYÈ\È[Û˜]È[HNZˆ[H™\™ÙYÜ™™\ˆ˜]]\ËÙ[Ü™™\ˆÝ˜pçÙHÎˆXÙZXÚ[™Ù[ˆ[™Ú][™ÜÜ]\Ù[ˆÚ[™pí™ÛXÚˆ°ï™[ˆÚYH›ÜˆZ™[H™\ÝXÚ[ˆ[]XÚ[ˆÚ][™ÜÚØ[[™\ˆ[™YH™]ÙZ[YÙHZ[›Y[™Ë˜JK
šœÞ
JÛKÚ™YŽ˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÝYX™\‹][œËÜÛ]ZË][™]™\Ø[[™ËØ™^š\šÜÝ™\œØ[[[[™ØÚ[™[Ž˜™YÙ[pé0çÚYÙ\ˆÚ][™ÜÝ\›Z[ˆ0­È]Y[H™\™ÙYÜ™‹™XJK
šœÞ
JÛKÚ™YŽÜË˜Ø[[™\‹Ú[™[Ž˜[]XÚ\ˆÚ][™ÜÚØ[[™\ˆ	ˆ[\›YÙ[˜JK
šœÞ
JØÛ\ÜÓ˜[YN˜]]YÚ[™[Ž˜YØ[™Ë›ÛÝZ0é™H[™[\œÝ0ï[™ÜØ[›Y[[™ÈÚ[™›ØÚZ]\ˆÙ\ØÚ0éÜÝ[HHÛ0é™[‹ˆ[\Ý[Nˆ˜]]\È™\™ÙYÜ™‹˜JK
šœÞ
JÛKÚ™YŽ˜Î‹ËÝÝÝËš‹™KÙKÙ˜ZœY[™XÚ[™[Ž˜ZÝY[H•‹Q˜Zœ[˜]\ÚÝ[™JW_JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[]Y\Ý[Û‹YÝZYXÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜ÐÒ’U°çˆÐÒ’UJK
šœÞ
J˜ØÚ[™[Ž˜Z[™Hœ˜YÙH[ˆ\ˆ°ï™Ù\™œ˜YÙ\Ý[™HÝ[[˜JK
šœÞÊJÛØÚ[™[Ž–ÊšœÞÊJXØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜Ü™[Z][H[™Ú][™Èðé[‹˜JKYH™YÙ[Ú[šXÚ°ïˆÝY[ÚXÚÛ[™Ë˜]H[™[ˆ[\˜]\ÜØÚ\ÜÈ˜]K˜_JK
šœÞÊJXØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜Ý\ž™KØXÚ™^›ÙÙ[™Hœ˜YÙH›Ü˜™\™Z][‹˜JK[Y[ˆÛÛ[ˆš\È[HÙZ][ˆ›Üš\™ÙZ[™[ˆÙ\šÝYÈ[™ÙZðï™YÝÙ\™[‹˜_JK
šœÞÊJXØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜ØÚšYXÚÙ\ˆpï™XÚœ˜YÙ[‹˜JKØÚšYXÚH›Ü›YÙH›Üˆ™YÚ[›ˆÙ\ˆpï™XÚHœ˜YÙHðé™[™\ˆœ˜YÙ\Ý[™HÚ[™›Ü™Ù\ÙZ[‹˜_JK
šœÞÊJXØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™Y^™Z]™XXÚ[‹˜JK™]ÙZ[È™ZHZ[][ŽÈ[œÙÙ\Ø[]ÌZ[][ˆ[ˆ\ˆ™^š\šÜÝ™\œØ[[[[™ËMHZ[][ˆ[ˆ˜XÚ]\ÜØÚ0ïÜÙ[‹ˆZ[™H\Ø]™œ˜YÙHØ[›ˆYÙ[\ÜÙ[ˆÙ\™[‹˜_JW_JK
šœÞÊJØÚ[™[Ž–Ø™ZH[šÛ\šZ][Žˆ
šœÞ
JXÚ™YŽ˜XZ[Î˜™^š\šÜÝ™\œØ[[[[™Ð™\™ÙYÜ™‹š[X\™Ë™XÚ[™[Ž˜™^š\šÜÝ™\œØ[[[[™Ð™\™ÙYÜ™‹š[X\™Ë™XJK0­È
šœÞ
JXÚ™YŽ˜[ŠÍMŽLLÚ[™[Ž˜ŽLKLJK˜_JK
šœÞ
JÛKÚ™YŽÜËœ[\ËÚ[™[Ž˜Ù\ØÚ0éÛÜ™[™ËÝ[™ŒKŒŒŒH0­È0©ÈŒËÙZ]HL˜JK
šœÞ
JÛX[ØÚ[™[Ž˜ZYÙ[™H\Ø[[Y[™˜\ÜÝ[™È0­È[]XÚH]Y[H[HNŒLŒŒˆÙ\°ïˆ8 '”ÛÛ[¸ '™Y]]]Y\ˆÙZ[™H›Ûˆ[œÈ™Z]\]H]\ÜØÚ\ÜÙœš\Ý˜JW_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜\ZY[ˆ[ˆ\ˆ™^š\šÜÝ™\œØ[[[[™ØJK
šœÞ
JØÚ[™[Ž˜YH\ZY[ˆ[H™^š\šÈ™\™ÙYÜ™ˆ8 $ÈZ][šÜÈHZ™[ˆ™]ÙZ[YÙ[ˆ\Z]ÙXœÙZ][‹˜JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜\KYÜšYÚ[™[Ž•Ë›X\

ÙKJOOŠšœÞ
JÛKÚ™YŽÚ[™[Ž™_KJJ_JK
šœÞ
JÛKÚ™YŽÜËœ\Y\ËÚ[™[Ž˜[]XÚH0ç™\œÚXÚ	ˆ™\ÙZ\ÈH[[ˆX™Ù[Ü™™][˜JK
šœÞ
JÛX[ØÚ[™[Ž˜\Z]ÙXœÙZ][ˆÙ\°ï[HNŒLŒŒ‹˜JW_JW_JN™OOOX˜XÚÙZ\ÙXÊšœÞ
JKßJN–Ø[\™\ÜÝ[X][œØÚ]˜™YÙ[˜[Ù\˜][Û˜˜\œšY\™Yœ™ZZZ]Kš[˜ÛY\ÊJOÊšœÞ
J›ÜYÙN™_JN›[]˜\ˆ[OVÞÚY˜X\œØÚ˜Z™[[X\™XÝÜžR][RY˜X\œØÚ˜Z™[[X˜[YN˜X\œØÚ˜Z™[[XÛÛÜŽ˜ÎLÙŒ[™S[™ÝY]\œÎŒŒŽL\ØÜš\[ÛŽ˜˜YH[™Ø[™\ÙYÈ]Yˆ\ˆZ[X[YÙ[ˆ[X\™Ù\ˆX\œØÚ˜Z‹ˆYHÙ[ÛY]šYH™ZYÝ\ˆ]\Ù°ïÚÛXÚ[È][˜™\™Ù\‹ØÚÙ[Ù\™\‹Ú\˜ÚÙ\™\‹™]Y[™Ø[[Y\ˆÙ\ˆ[[™Ø[[Y\ˆX\œØÚ˜Z™[[H™[˜[›HÜ[”Ý™Y]X\UÙYÙKˆÚYH[0éÙZ[™HÙ\ØÚ0é[ˆ™\˜š[™[™ÜÛ[šY[‹˜Ý]\Î˜LÈÔÓKUÙYÙH]\È™[][ÛˆÍNNK™\œÚ[Ûˆˆ›ÛHŒ‹ŒKŒŒŽÈYÚ][H[šY[›0é™ÙHŒ‹HÛKˆ\È\ÝšXÚYH›ÛÝ0é™YÙH\ÝÜš\ØÚHÝ™XÚÙKˆÚØ[H\œÝ[[™Ù[ˆ™[›™[ˆ[™ÌÈÛHÙ\Ø[]Ý™XÚÙNÈ[X\™ÜÈ˜YØ\H™[›]ØHHÛH°ïˆ[ˆÝ\š\Ý\ØÚ[ˆXœØÚš]ˆY\ÙH[™ØX™[ˆX™[ˆ[\œØÚYYXÚHX™Ü™[ž[™Ù[‹˜ÜÛU\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÎÍNNXÜÛSX™[˜Ü[”Ý™Y]X\T˜YÙYÈ8 '•šY\ˆ[™X\œØÚ[™x '™[][ÛˆÍNNH
Ñ“
XÙ™šXÚX[\›˜Î‹ËÝÝÝËš[X\™Ë™KÙœ™Z^™Z]ØZÝ]š]Y][‹Ù˜Zœ˜YÝ\™[‹Ù˜Zœ˜YÝ\‹Xš[Ù\™\‹X™\™ÙYÜ™‹]šY\›[™KXÚ]KLLÌMŽNÙ™šXÚX[X™[˜[X\™Ë™Nˆ˜Zœ˜YÝ\ˆZ]Ù]™[›™[˜[›[HšY\›0é™\ˆZ\Ù[˜˜Z™[[H[™X\œØÚ˜Z™[[XKÚY˜šY\›Y[™\‹X˜Z™[[X˜[YN˜šY\›0é™\ˆZ\Ù[˜˜Z™[[H0­ÈZ[XœØÚš]ÛÙ¸ $ÐÝ\œÛXÚØÛÛÜŽ˜ÌÌØØ\Ú\œ˜^N˜HX[™S[™ÝY]\œÎŒŒÍL‹\ØÜš\[ÛŽ˜ZYÙ[œÝ0é™YÙ\ˆXœØÚš]\ˆœ°ï\™[ˆšY\›0é™\ˆZ\Ù[˜˜Z‹Ù]™[››Ûˆ\ˆ[X\™Ù\ˆX\œØÚ˜Z‹ˆ\ˆ\™Ù\Ý[HÔÓKUÙYÈ\Ý]\Ù°ïÚÛXÚ8 '•šY\›0é™\ˆZ\Ù[˜˜Z™[[x '™[˜[›[™[È]Y™ÙYÙX™[™H˜Z˜\ÜÙHÙZÙ[›ž™ZXÚ™]˜Ý]\Î˜ÔÓKUÙYÈŒÌÌŒÌÎ™\œÚ[ÛˆN›ÛHŽŒKŒŒNÈ[šY[›0é™ÙH‹ÍHÛKˆ[X\™Ë™H™\ØÚ™ZXYH˜Y›Ý]H0ï™\ˆœ›ÛÚÙZXÚÛÙ‹šY\›0é™\ˆZ\Ù[˜˜Z™[[H[™Ý\œÛXÚËˆ\ˆ0ïœšYÙH\ÝÜš\ØÚHÝ™XÚÙ[™\›]Yˆš\È›Û[œÜYZÙ\ˆÚ\™Y\ˆšXÚZ[™Ù^™ZXÚ™]˜ÜÛU\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÝØ^KÌŒÌÌŒÌÎÜÛSX™[˜Ü[”Ý™Y]X\UÙYÈŒÌÌŒÌÎ
Ñ“
XÙ™šXÚX[\›˜Î‹ËÝÝÝËš[X\™Ë™KÙœ™Z^™Z]ØZÝ]š]Y][‹Ù˜Zœ˜YÝ\™[‹Ù˜Zœ˜YÝ\‹Xš[Ù\™\‹X™\™ÙYÜ™‹]šY\›[™KXÚ]KLLÌMŽNÙ™šXÚX[X™[˜[X\™Ë™Nˆ˜YÝ\ˆ0ï™\ˆÛÙ‹šY\›0é™\ˆZ\Ù[˜˜Z™[[H[™Ý\œÛXÚØWK›OVÞÚY˜šY\›Y[™\‹ZÚ\˜Ú[Ý\˜][RY˜Ú\˜Ú[Ý\˜˜[YN˜šY\›0é™\ˆÚ\˜Ú[Ý\˜ÛÛÜŽ˜ØÍÌ˜LÍXÙ™šXÚX[[™ÝÛNŒŽ[™S[™ÝY]\œÎŒÌŒËÙ[ÛY]žQš[N˜šY\›Y[™\‹ZÚ\˜Ú[Ý\‹™Ù[ÚœÛÛ˜ÛÝ\˜ÙU\›˜Î‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËÜ™[][Û‹ÍÌÎNŽÛÝ\˜ÙSX™[˜Ü[”Ý™Y]X\T˜Y›Ý]H
Ñ“KŒ
XÙ™šXÚX[\›˜Î‹ËÝÝÝË™[XÚÙ\œ›Ý][‹›Ü™ËÝšY\‹][™[X\œØÚ[™K\›Ý]KMØÙ™šXÚX[X™[˜ÜšYÚ[˜[™\ØÚ™ZX[™È[™Ô™Z[H\˜]\ÙÙX™\˜WK[OYOOÛK™š[™
OšYOOYJOË›X™[KOYOO–ÙK˜Ø]YÛÜžK‹‹™K˜Ø]YÛÜžS[šÜß×WK›OYOOŠÜÙZ[œÝÝY\™YÚÙZ][Ž˜ÍÍMÎX˜˜]\Ž˜ÌÌMÍMM[™ØY[™ÙN˜ØŒMØLÝ[\Ž˜ÌÌMYŽM˜[\šÝ[™˜ÎXMLÍØ\Ý›Û›ÛZYN˜ØŒYØ˜Y˜Ì™ØNØØ[\[™Î˜Í˜MÍLÌØØ\ÜÙ\Ž˜ÌÍNX˜˜[Z[YN˜ØŒMLÍÎ[Øš[]Y]˜ÍMY™˜ZÝ\ØÚ˜Í˜ÌJVÙW_ÌÌMYL˜[OYOO™K›˜]\™U˜Z[ÙK™\ØÜš\[Û‹œ™\XÙJ×Ê‘YH\™Ù\Ý[H[šYHÝ[[]]\È\ˆÜ[”Ý™Y]X\UØ[™\ÙYÜ™[][Ûˆ×‹—J—‹ÙË
Kœ™\XÙJ×Ê‘YHYÚ][H[šY[›0é™ÙHÙZXÚ›Ûˆ\ˆ›Y\˜[™ØX™HXŽÈY\È\Ý[HØ\[™Z[˜YÈ]\ÙÙ]ÚY\Ù[—‹ÙË
N™K™\ØÜš\[ÛŽÙ[˜Ý[Ûˆ	JÚ][\Î™KÙ[XÝY›ØÝ\ÒY›‹Û‘›ØÝ\ÎœŸJ^Û]OJ\ÙT™YŠJ[
KOJ\ÙT™YŠJ[
KÏJ\ÙT™YŠJ[
KÏJ\ÙT™YŠJ

OOžßJKJ\ÙT™YŠJJKOJ\ÙT™YŠJ
KJ\ÙT™YŠJ™]ÈÙ]
KJ\ÙT™YŠJ™]ÈX\
KOJ\ÙT™YŠJ™]ÈX\
KÏJ\ÙT™YŠJ™]ÈX\
KÏJ\ÙT™YŠJ
KJ\ÙT™YŠJ™]ÈÙ]
KJ\ÙT™YŠJ™]ÈÙ]
KJ\ÙT™YŠJ™]ÈÙ]
NÛ˜Ý\œ™[YKK˜Ý\œ™[]Û]ÔË×OJ\ÙTÝ]JJLJKÝËOJ\ÙTÝ]JJLJKÑKOJ\ÙTÝ]JJ
KÓË×OJ\ÙTÝ]JJ

OO›™]ÈÙ]
[K›X\
OO™KšY
JJKÐK—OJ\ÙTÝ]JJ

OO›™]ÈÙ]
[K™š[\ŠOO™K›˜]\™U˜Z[
K›X\
OO™KšY
JJKÓK—OJ\ÙTÝ]JJ

OO›™]ÈÙ]
[K›X\
OO™KšY
JJKÔ—OJ\ÙTÝ]JJ

OO›™]ÈÙ]
›K›X\
OO™KšY
JJNÝ‹˜Ý\œ™[PK‹˜Ý\œ™[SK˜Ý\œ™[TÛ]YO[JÜ[™œ™Y[X\

OOÊL
JKOYK™š[\ŠOO“[X™\‹š\Ñš[š]JK›]
I‰“[X™\‹š\Ñš[š]JK›ÛŠI‰™K˜ÛÛÜ™[˜]TÛÝ\˜ÙI‰–JJKœÛÛYJOOš\ÊJJI‰’[JJKœÛÛYJOO“Ëš\ÊJJJNÜ™]\›Š\ÙQY™™XÝ
J

OOžÛ]OHL‹[[[[Ï[[Ï[[ÚYŠJTßZK˜Ý\œ™[
J\™]\›ˆ

K›ÛZ\ÙK˜[
ÞJ

OOš[\Ü
‹ÛXY›]\Ü˜ËMÖLÑ×ÓšœØ
K[ŠOO˜ÊK™Y˜][JJK×JKJ

OOš[\Ü
‹Ú\ÝÜžK][\ËV•žœNMËšœØ
K×Ýš]W×ÛX\\ÊÌËJJWJK[Š\Þ[˜ÊØËWJOOžÚYŠY_ZK˜Ý\œ™[
\™]\›ŽÝXË›X\
K˜Ý\œ™[ÜØÜ›ÛÚY[›ÛÛNˆL›ÛÛTÛ˜\‹ŒK›ÛÛQ[NŒKX^›ÛÛNŒN_JKK˜Ý\œ™[]Û]ÏQJ‹K˜Ý\œ™[˜ÛY[ÚYK˜Ý\œ™[˜ÛY[ZYÚŽ
NÝœÙ]šY]ÊÔË›]Ë›Û—KËž›ÛÛKØ[š[X]NˆL_JKKš\ÝÜžU[\ÊËO™I‰‘

KØ˜\ÙU\›˜Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØJK˜YÊ
NÛ]ÏX]ØZ]™]Ú
Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËØ™\™ÙYÜ™‹\ÝYZ[K™Ù[ÚœÛÛ˜
K[ŠOO™K›ÚÏÙKšœÛÛŠ
N›[
K˜Ø]Ú


OO›[
NÚYŠY_
ÏØË™Ù[Ò”ÓÓŠËÜÝ[NžØÛÛÜŽ˜ÌŽXMÙZYÚŒKŒMKš[ÛÛÜŽ˜Í˜N˜Xš[ÜXÚ]N‹ŒKÜXÚ]N‹ŽŸK[\˜XÝ]™NˆL_JK˜YÊ
N‘
YHÚØ[[ˆÝYZ[Ü™[ž™[ˆÛÛ›[ˆšXÚÙ[Y[ˆÙ\™[‹ˆØ\[œ[šÝH[™\ÝH›ZX™[ˆ]˜˜\‹˜
KX]ØZ]™]Ú
Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËØ›Ù[›Zœ˜YX›Ø™\™Ë™Ù[ÚœÛÛ˜
K[ŠOO™K›ÚÏÙKšœÛÛŠ
N›[
K˜Ø]Ú


OO›[
KYJ_

YHÚØ[HÙ[ÛY]šYH\È›Ù[›Zœ˜YÈÛÛ›HšXÚÙ[Y[ˆÙ\™[‹ˆYHZ[˜YÜÛ\ÝH›ZX]˜˜\‹˜
KX]ØZ]™]Ú
Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËÙÛÙ\[˜]\ÙYÙKX›Ø™\™Ë™Ù[ÚœÛÛ˜
K[ŠOO™K›ÚÏÙKšœÛÛŠ
N›[
K˜Ø]Ú


OO›[
KYJJ\™]\›ŽÚ
YHÚØ[[ˆðå”UÙYÛ[šY[ˆÛÛ›[ˆšXÚÙ[Y[ˆÙ\™[‹ˆYHZ[°éÙH[™ÜšYÚ[˜[˜[›0é\ˆ›ZX™[ˆ™\™°ïØ˜\‹˜
NÛ]OX]ØZ]›ÛZ\ÙK˜[
ØX\œØÚ˜Z™[[K\›Ý]K™Ù[ÚœÛÛ˜šY\›Y[™\‹X˜Z™[[K\›Ý]K™Ù[ÚœÛÛ˜K›X\
OO™™]Ú
Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËÉÙ_X
K[ŠOO™K›ÚÏÙKšœÛÛŠ
N›[
K˜Ø]Ú


OO›[
JJNÚYŠYJ\™]\›Ž×Ï^Ý\N˜™X]\™PÛÛXÝ[Û˜™X]\™\Î‘K™›]X\
OO™OË™™X]\™\ß×J_KKœÛÛYJOOˆYJI‰‘
Z[™\Ý[œÈZ[™HÙ\°ïH˜Z˜\ÜÙ[™Ù[ÛY]šYHÛÛ›HšXÚÙ[Y[ˆÙ\™[‹ˆYHÜÛ\ÝH[™0ïœšYÙ[ˆØ\[™X™[™[ˆ›ZX™[ˆ]˜˜\‹˜
KÏX]ØZ]™]Ú
Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËÝšY\›Y[™\‹ZÚ\˜Ú[Ý\‹™Ù[ÚœÛÛ˜
K[ŠOO™K›ÚÏÙKšœÛÛŠ
N›[
K˜Ø]Ú


OO›[
Kß
YHÙ\°ïHÔÓKS[šYH\ˆšY\›0é™\ˆÚ\˜Ú[Ý\ˆÛÛ›HšXÚÙ[Y[ˆÙ\™[‹ˆ\ˆZ[˜YÈ[™YH[˜šY]\œ]Y[H›ZX™[ˆ™\™°ïØ˜\‹˜
NÛ]ÏXË›^Y\‘Ü›Ý\

K˜YÊ
KÏXË›^Y\‘Ü›Ý\

K˜YÊ
KOXË›^Y\‘Ü›Ý\

K˜YÊ
KXË›^Y\‘Ü›Ý\

K˜YÊ
NÛË˜Ý\œ™[SÎÛ]OJ
OOžÚYŠYJ\™]\›ŽÓË˜ÛX\“^Y\œÊ
KË˜ÛX\“^Y\œÊ
KK˜ÛX\“^Y\œÊ
K‹˜ÛX\“^Y\œÊ
KK˜Ý\œ™[[™]ÈX\Ë˜Ý\œ™[[™]ÈX\Û][™]ÈX\Ù›ÜŠ]HÙˆ˜Ý\œ™[
^ÚYŠS[X™\‹š\Ñš[š]JK›]
_S[X™\‹š\Ñš[š]JK›ÛŠ_YK˜ÛÛÜ™[˜]TÛÝ\˜Ù_VJJKœÛÛYJOOK˜Ý\œ™[š\ÊJJ_R[JJKœÛÛYJOO™‹˜Ý\œ™[š\ÊJJJXÛÛ[YNÛ]X	ÙK›]Ñš^Y
J_N‰ÙK›Û‹Ñš^Y
J_XÝš\ÊŠ_œÙ]
‹×JK™Ù]
ŠKœ\Ú
J_Y›ÜŠ]HÙˆ˜[Y\Ê
J^Û]YVÌKYØÝ[Y[˜Ü™X]Q[[Y[
]˜
NÙ›ÜŠ]ÙˆJ^Û]OYØÝ[Y[˜Ü™X]Q[[Y[
\XÛX
KOYØÝ[Y[˜Ü™X]Q[[Y[
Ø
KOYØÝ[Y[˜Ü™X]Q[[Y[

KÏYØÝ[Y[˜Ü™X]Q[[Y[
X
NÚK^ÛÛ[]›˜[YKK^ÛÛ[X	Ö[J˜Ø]YÛÜžJ_H0­È	ÝœXÙ_IÝ˜Y™\ÜÏØ0­È
Ý˜Y™\ÜÎ˜XËš™Y]˜ÛÛÜ™[˜]TÛÝ\˜ÙKË\™Ù]XØ›[šØËœ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ë^ÛÛ[XÛÛÜ™[˜][œ]Y[XÛ]ÏYØÝ[Y[˜Ü™X]Q[[Y[
X
NÚYŠËš™YXÝÝ\š\Û]\Ë\™\Ý[ØË^ÛÛ[X[H\Ý[™Z[˜YØË˜Y]™[\Ý[™\ŠÛXÚØOOžÙKœ™]™[Y˜][

KŠšY
KØÝ[Y[œ]Y\žTÙ[XÝÜŠÙ]K]Ý\š\ÛKZYW‰ÝšYW—X
OËœØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽ˜Û[ÛÝ›ØÚÎ˜Ù[\˜J_JKK˜\[™
KKËÊKšYÚYÚ
^Û]YØÝ[Y[˜Ü™X]Q[[Y[

NÝ^ÛÛ[XZ[™\È\ˆLYÚYÚÈ›Ûˆ™\™ÙYÜ™‹™XK˜\[™Ú[

_[‹˜\[™Ú[
J_[]OYKœÛÛYJOO™KšYÚYÚ
NØË˜Ú\˜ÛSX\šÙ\ŠÝ›]›Û—KÜ˜Y]\ÎšOÌLŽÛÛÜŽšOØÙXÎ˜˜Ù™™˜ÙZYÚšOÍŒ‹š[ÛÛÜŽ–›J˜Ø]YÛÜžJKš[ÜXÚ]NŒ_JK˜YÊÊK˜š[™ÛÛ\
K›[™ÝŒOØ	ÙK›[™ÝHÜXœÚÜ˜[Y_›˜[YKÙ\™XÝ[ÛŽ˜ÜJK˜š[™Ü\
‹ÛX^ÚYŒÌÌJ_ZYŠ˜Ý\œ™[œÛÛYJOO™KšYOOX›Ù[›Zœ˜YX›Ø™\™Ø	‰–JJKœÛÛYJOOK˜Ý\œ™[š\ÊJJJI‰™‹˜Ý\œ™[š\Ê˜Z[Ø
I‰™
^Û]O^Ó[ÛÜÙYÎ˜ÎXMMY˜\œ˜\ÜÙ[ÙYÎ˜ÍÌŽXX0ï™[ÙYÎ˜ÌMÍ˜XNØË™Ù[Ò”ÓÓŠÙš[\Ž™OO™OËœ›Ü\Y\ÏË›Zœ˜YOOX›Ø™\™ØÝ[NOŠØÛÛÜŽ™VÝËœ›Ü\Y\ÏË\_ÌXLÙZYÚKÜXÚ]N‹Ž_JKÚ[Ó^Y\ŽŠK
OO˜Ë˜Ú\˜ÛSX\šÙ\ŠÜ˜Y]\ÎËÛÛÜŽ˜Ù™™˜ÙZYÚŒ‹š[ÛÛÜŽ˜ÌXÍŒš[ÜXÚ]NŒ_JKÛ‘XXÚ™X]\™NŠK
OOžÛ]YKœ›Ü\Y\ßßNÚYŠ‹›Øš™ZÝ\OOX›Ý]X
]˜š[™ÛÛ\
›Ù[›Zœ˜Y›Ø™\™È0­È	Û‹\XÜÝXÚÞNˆLJK˜š[™Ü\
Ý›Û™Ï›Ù[›Zœ˜Y›Ø™\™È8 $È	Û‹\OÜÝ›Û™Ïœ[]XÚHÙYÙÙ[ÛY]šYH\ˆœ™ZY[ˆ[™[œÙ\ÝY[X\™Ë•RÑPK˜
NÙ[ÙHYŠ‹›Øš™ZÝ\OOXY™[
^Û]OYØÝ[Y[˜Ü™X]Q[[Y[
]˜
KYØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KOYØÝ[Y[˜Ü™X]Q[[Y[

KOYØÝ[Y[˜Ü™X]Q[[Y[
X
NÜ‹^ÛÛ[XÝ][Ûˆ	Û‹œ[šÝØ™^ŸNˆ	Û‹][XK^ÛÛ[[‹šÝ\ž^Kš™YTÝš[™Ê‹›[š×Ø\ZÙ[
Kœ™\XÙJ×š‹ËÎ˜
KK\™Ù]XØ›[šØKœ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜K^ÛÛ[X\›0é]\[™È™ZH[X\™Ë™H0í™™›™[˜K˜\[™
‹KJK˜š[™Ü\
J___JK˜YÊÊ_\˜Ý\œ™[[™]ÈX\Û][™]ÈÙ]
˜Ý\œ™[™š[\ŠOO™K›˜]\™U˜Z[	‰–JJKœÛÛYJOOK˜Ý\œ™[š\ÊJJJK›X\
OO™KšY
JNÙ‹˜Ý\œ™[š\Ê˜Z[Ø
I‰š	‰˜Ë™Ù[Ò”ÓÓŠÙš[\Ž™OO›‹š\ÊOËœ›Ü\Y\ÏËšY
I‰‹˜Ý\œ™[š\ÊOËœ›Ü\Y\ÏËšY
KÝ[N™OOŠØÛÛÜŽ™OËœ›Ü\Y\ÏË˜ÛÛÜŸÌÌMYL˜ÙZYÚKÜXÚ]N‹ŽM‹[™PØ\˜›Ý[™[™R›Ú[Ž˜›Ý[™JKÛ‘XXÚ™X]\™NŠK
OOžÛ]YKœ›Ü\Y\ßßKO[˜Ý\œ™[™š[™
OO™KšYOO[‹šY
NÚYŠI‰œ˜Ý\œ™[œÙ]
‹šY
K\œ˜^Kš\Ð\œ˜^J‹›X™[ÜÚ][ÛŠI‰›‹›X™[ÜÚ][Û‹›[™ÝOOLŠ^Û]OYØÝ[Y[˜Ü™X]Q[[Y[
Ü[˜
NÙK˜Û\ÜÓ˜[YOXÝ\š\ÛK\›Ý]K[X™[×Ý^Ý\š\ÛK\›Ý]K[X™[×Ý^KIÛ‹šYœ™\XÙJÖ×˜K^ŒNKWKÙÚK
_XK^ÛÛ[X	Û‹œÞ[X›ÛH0­È	Û‹›˜[Y_XË˜Y^Y\ŠËÛÛ\
Ü\›X[™[ˆL\™XÝ[ÛŽ˜Ù[\˜Ù™œÙ]–ÌLL—KÛ\ÜÓ˜[YN˜Ý\š\ÛK\›Ý]K[X™[ÜXÚ]NŒ_JKœÙ]]™ÊÛ‹›X™[ÜÚ][Û–ÌWK‹›X™[ÜÚ][Û–ÌWJKœÙ]ÛÛ[
JJ_[]OYØÝ[Y[˜Ü™X]Q[[Y[
]˜
KÏYØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KÏYØÝ[Y[˜Ü™X]Q[[Y[

KOYØÝ[Y[˜Ü™X]Q[[Y[

KYØÝ[Y[˜Ü™X]Q[[Y[
X
KYØÝ[Y[˜Ü™X]Q[[Y[
X
KOYØÝ[Y[˜Ü™X]Q[[Y[
X
NÛË^ÛÛ[X	Û‹œÞ[X›ÛH0­È	Û‹›˜[Y_XË^ÛÛ[Xðå”Q˜[›]ˆ	Ó[X™\Š‹œX›\ÚY[™ÝÛJKÓØØ[TÝš[™ÊKQX
_HÛH0­È	Û‹™\˜][ÛŸK˜‹›˜[YOOOX[ÛÜÙYØ	‰ŠK^ÛÛ[X[H°íœ™XÚ[ˆXœØÚš]™ZYÝ\Èðå”Q˜[›]Z[™H[[Z][™ËˆYHZÝY[HYØ[™ÜÜÜ\œ[™È[™YH0íœXÚH™\ØÚ[\[™È\ˆ•RÑPH™XXÚ[‹˜
Kš™Y[‹›ÜÛT™[][Û•\›\™Ù]XØ›[šØœ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜^ÛÛ[XÜ[”Ý™Y]X\UØ[™\ÙYÜ™[][Û˜‹š™YZOËœÛÝ\˜ÙOË\›Ø‹\™Ù]XØ›[šØ‹œ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜‹^ÛÛ[Xðå”SÜšYÚ[˜[˜[›]0í™™›™[˜Kš™YXÝÝ\š\Û]\Ë\™\Ý[ØK^ÛÛ[X[H\Ý[™Z[˜YØK˜Y]™[\Ý[™\ŠÛXÚØOOžÙKœ™]™[Y˜][

KI‰ŠŠKšY
KØÝ[Y[œ]Y\žTÙ[XÝÜŠÙ]K]Ý\š\ÛKZYH‰ÚKšYH—X
OËœØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽ˜Û[ÛÝ›ØÚÎ˜Ù[\˜JJ_JKK˜\[™
ËËK‹JK˜š[™Ü\
J__JK˜YÊÊNÛ]O[™]ÈÙ]
[K™š[\ŠOO˜‹˜Ý\œ™[š\ÊKšY
I‰™‹˜Ý\œ™[š\Ê›Ý]\Ø
I‰ŠYK™\™XÝÜžR][RY˜Ý\œ™[œÛÛYJOšYOOYK™\™XÝÜžR][RY	‰–J
KœÛÛYJOOK˜Ý\œ™[š\ÊJJI‰’[J
KœÛÛYJOO™‹˜Ý\œ™[š\Ê›Ý]\Ø
JJJJK›X\
OO™KšY
JNÚYŠ‹˜Ý\œ™[š\Ê›Ý]\Ø
I‰—ÊY›ÜŠ]HÙˆJ^Û]\[K™š[™
OšYOOYJK[˜Ý\œ™[™š[™
OO™KšYOO]Ë™\™XÝÜžR][RY
NÚYŠ]
XÛÛ[YNÛ]O^ØÛÛÜŽ˜ÛÛÜ‹ÙZYÚ‹ÜXÚ]N‹ŽM‹\Ú\œ˜^N™\Ú\œ˜^K[™PØ\˜›Ý[™[™R›Ú[Ž˜›Ý[™KOXË™Ù[Ò”ÓÓŠËÙš[\ŽOËœ›Ü\Y\ÏËœ›Ý]RYOOYKÝ[NšKÛ‘XXÚ™X]\™NŠKJOOžÚK˜š[™ÛÛ\
›˜[YKÜÝXÚÞNˆLJNÛ]OYØÝ[Y[˜Ü™X]Q[[Y[
]˜
KÏYØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KÏYØÝ[Y[˜Ü™X]Q[[Y[

KÏYØÝ[Y[˜Ü™X]Q[[Y[

KYØÝ[Y[˜Ü™X]Q[[Y[

KOYØÝ[Y[˜Ü™X]Q[[Y[
X
KYØÝ[Y[˜Ü™X]Q[[Y[
X
KYØÝ[Y[˜Ü™X]Q[[Y[
X
NÛË^ÛÛ[]›˜[YKË^ÛÛ[]™\ØÜš\[Û‹Ë^ÛÛ[XYÚ][H[šY[›0é™ÙHY\Ù\È\™Ù\Ý[[ˆXœØÚš]Îˆ	Ê›[™S[™ÝY]\œËÌYLÊKÓØØ[TÝš[™ÊKQXÛZ[š[][Qœ˜XÝ[Û‘YÚ]ÎŒ‹X^[][Qœ˜XÝ[Û‘YÚ]ÎŒŸJ_HÛK˜^ÛÛ[]œÝ]\ËKš™Y]›Ù™šXÚX[\›K\™Ù]XØ›[šØKœ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜K^ÛÛ[]›Ù™šXÚX[X™[š™Y]›ÜÛU\›\™Ù]XØ›[šØœ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜^ÛÛ[]›ÜÛSX™[K˜\[™
ËËËKØÝ[Y[˜Ü™X]U^›ÙJ0­È
K
K‰‰Š‹š™YXÝÝ\š\Û]\Ë\™\Ý[Ø‹^ÛÛ[X[H\Ý[™Z[˜YØ‹˜Y]™[\Ý[™\ŠÛXÚØOOžÙKœ™]™[Y˜][

KŠ‹šY
KØÝ[Y[œ]Y\žTÙ[XÝÜŠÙ]K]Ý\š\ÛKZYH‰Û‹šYH—X
OËœØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽ˜Û[ÛÝ›ØÚÎ˜Ù[\˜J_JKK˜\[™
ØÝ[Y[˜Ü™X]Q[[Y[
œ˜
KŠJKK˜š[™Ü\
KÛX^ÚYŒÍŒJ__JK˜YÊJNÛK˜Ý\œ™[œÙ]
KJ_[]OR›K™š[\ŠOOž˜Ý\œ™[š\ÊKšY
I‰™‹˜Ý\œ™[š\Ê›Ý]\Ø
I‰›˜Ý\œ™[œÛÛYJOšYOOYKš][RY	‰–J
KœÛÛYJOOK˜Ý\œ™[š\ÊJJJJNÚYŠÊY›ÜŠ]HÙˆJ^Û][˜Ý\œ™[™š[™
OšYOOYKš][RY
KXË™Ù[Ò”ÓÓŠËÙš[\ŽOËœ›Ü\Y\ÏËœ›Ý]RYOOYKšYÝ[NžØÛÛÜŽ™K˜ÛÛÜ‹ÙZYÚ‹ÜXÚ]N‹ŽM‹[™PØ\˜›Ý[™[™R›Ú[Ž˜›Ý[™KÛ‘XXÚ™X]\™NŠ‹JOOžÚK˜š[™ÛÛ\
	ÙK›˜[Y_H0­È	ÙK›Ù™šXÚX[[™ÝÛ_HÛXÜÝXÚÞNˆLJNÛ]OYØÝ[Y[˜Ü™X]Q[[Y[
]˜
KÏYØÝ[Y[˜Ü™X]Q[[Y[
Ý›Û™Ø
KÏYØÝ[Y[˜Ü™X]Q[[Y[

KÏYØÝ[Y[˜Ü™X]Q[[Y[
X
KYØÝ[Y[˜Ü™X]Q[[Y[
X
KOYØÝ[Y[˜Ü™X]Q[[Y[
X
NÛË^ÛÛ[YK›˜[YKË^ÛÛ[X™\™ÙYÜ™‹UÝ\š\Û]\È™[›[™	ÙK›Ù™šXÚX[[™ÝÛ_HÛKˆYH\™Ù\Ý[HÜ[”Ý™Y]X\QÙ[ÛY]šYH\ÝYÚ][	ÊK›[™S[™ÝY]\œËÌYLÊKÓØØ[TÝš[™ÊKQXÛZ[š[][Qœ˜XÝ[Û‘YÚ]ÎŒ‹X^[][Qœ˜XÝ[Û‘YÚ]ÎŒŸJ_HÛH[™Ë˜Ëš™YYK›Ù™šXÚX[\›Ë\™Ù]XØ›[šØËœ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ë^ÛÛ[YK›Ù™šXÚX[X™[š™YYKœÛÝ\˜ÙU\›\™Ù]XØ›[šØœ™[X›ÛÜ[™\ˆ›Ü™Y™\œ™\˜^ÛÛ[YKœÛÝ\˜ÙSX™[K˜\[™
ËËËØÝ[Y[˜Ü™X]U^›ÙJ0­È
K
K	‰ŠKš™YXÝÝ\š\Û]\Ë\™\Ý[ØK^ÛÛ[X[H\Ý[™Z[˜YØK˜Y]™[\Ý[™\ŠÛXÚØOOžÙKœ™]™[Y˜][

KŠšY
KØÝ[Y[œ]Y\žTÙ[XÝÜŠÙ]K]Ý\š\ÛKZYH‰ÝšYH—X
OËœØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽ˜Û[ÛÝ›ØÚÎ˜Ù[\˜J_JKK˜\[™
ØÝ[Y[˜Ü™X]Q[[Y[
œ˜
KJJKK˜š[™Ü\
KÛX^ÚYŒÍŒJ__JK˜YÊŠNÙË˜Ý\œ™[œÙ]
KšYŠ__NÜË˜Ý\œ™[SKJ
K
L
K[™]È™\Ú^™SØœÙ\™\Š

OOš[˜[Y]TÚ^™JÜ[ŽˆL_JJK‹›ØœÙ\™JK˜Ý\œ™[
_JK˜Ø]Ú


OO™I‰‘
YHÝ\š\Ý\ØÚHØ\HÛÛ›HšXÚÙ\Ý\]Ù\™[‹ˆYH™\›[šÝHÜÛ\ÝH›ZX™\™°ïØ˜\‹˜
JK

OOžÙOHLKË™\ØÛÛ›™XÝ

K
LJKK˜Ý\œ™[	‰ŠK˜Ý\œ™[œ™[[Ý™J
KK˜Ý\œ™[[[Ë˜Ý\œ™[[[
KË˜Ý\œ™[J
OOžßKË˜Ý\œ™[[™]ÈX\_KÔ×JK
\ÙQY™™XÝ
J

OOžÜË˜Ý\œ™[

_KÝKËKKJK
\ÙQY™™XÝ
J

OOžÚYŠ[Š\™]\›ŽÛ]YK™š[™
OO™KšYOO[ŠKXK˜Ý\œ™[ÚYŠTÊ^×Ë˜Ý\œ™[[‹YK˜\ÚÊ
NÜ™]\›ŸZYŠ]ß\Š^×Ë˜Ý\œ™[[ŽÜ™]\›ŸWË˜Ý\œ™[XÛ]O[™]ÈÙ]
Ë‹‹™‹˜Ý\œ™[‹‹’[JßJWJNÚYŠKœÚ^™HOOY‹˜Ý\œ™[œÚ^™I‰Š‹˜Ý\œ™[ZKÊJKË˜Ý\œ™[

JKË›X\›Ý]RY
^ÑŠOO™Kš\Ê›X\›Ý]RY
OÙN›™]ÈÙ]
Ë‹‹™K›X\›Ý]RYJJNÛ]OYË˜Ý\œ™[™Ù]
›X\›Ý]RY
NÚYŠJ^Ü‹™š]›Ý[™ÊK™Ù]›Ý[™Ê
KÜY[™Î–ÌÌ‹Ì—_JNÛ]HLNÙK™XXÚ^Y\ŠOOžÈ]	‰™K›Ü[”Ü\	‰ŠK›Ü[”Ü\

KHL
_J_Y[Ù^×Ë˜Ý\œ™[[ŽÜ™]\›Ÿ_Y[ÙHYŠË›˜]\™U˜Z[
^Û]O\˜Ý\œ™[™Ù]
ŠNÙI‰ŠŠOO™Kš\ÊŠOÙN›™]ÈÙ]
Ë‹‹™K—JJK‹™š]›Ý[™ÊK™Ù]›Ý[™Ê
KÜY[™Î–ÌŽŽ_JKK›Ü[”Ü\

J_Y[ÙHYŠËœ˜Z[›Ý]RY
^ÓŠOO™Kš\Êœ˜Z[›Ý]RY
OÙN›™]ÈÙ]
Ë‹‹™Kœ˜Z[›Ý]RYJJKÊOO™Kš\Ê›Ý]\Ø
OÙN›™]ÈÙ]
Ë‹‹™K›Ý]\ØJJK‹˜Ý\œ™[[™]ÈÙ]
Ë‹‹™‹˜Ý\œ™[›Ý]\ØJNÛ]O[K˜Ý\œ™[™Ù]
œ˜Z[›Ý]RY
NÚYŠJ^Ü‹™š]›Ý[™ÊK™Ù]›Ý[™Ê
KÜY[™Î–ÌÌ‹Ì—_JNÛ]HLNÙK™XXÚ^Y\ŠOOžÈ]	‰™K›Ü[”Ü\	‰ŠK›Ü[”Ü\

KHL
_J__Y[ÙHË˜ÛÛÜ™[˜]TÛÝ\˜ÙI‰“[X™\‹š\Ñš[š]J›]
I‰“[X™\‹š\Ñš[š]J›ÛŠI‰Š‹œÙ]šY]ÊÝ›]›Û—KX]›X^
M‹‹™Ù]›ÛÛJ
JJKË˜Ý\œ™[Ë™XXÚ^Y\ŠOOžÚYŠ\[ÙˆK™Ù]]™ÈOX[˜Ý[Û˜
\™]\›ŽÛ]YK™Ù]]™Ê
NÓX]˜XœÊ‹›]]›]
OYKMI‰“X]˜XœÊ‹›™Ë]›ÛŠOYKMI‰™K›Ü[”Ü\

_JJ_KÛ‹KKKËË×JK‹˜Ý\œ™[SË™]ÈÙ]
K›X\
OO˜	ÙK›]Ñš^Y
J_N‰ÙK›Û‹Ñš^Y
J_X
JKœÚ^™K
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK[X\[™[˜\šXK[X™[YžHŽ˜Ý\š\ÛK[X\]]XÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜X\ZXY[™ØÚ[™[ŽŠšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜ÑSÑÔQ’TÐÒHÔ’QS•QT•S‘ØJK
šœÞ
J˜ÚY˜Ý\š\ÛK[X\]]XÚ[™[Ž˜Ý\š\Ý\ØÚHÜH[H™^š\šØJW_J_JK
šœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛK[X\[YÙ[™Ú[™[Ž–ÊšœÞÊJÜ[˜ØÚ[™[Ž–ÊšœÞ
JXØÛ\ÜÓ˜[YN˜Ý\š\ÛK[X\\ÝØ]Ú˜\šXKZY[ˆŽ˜YXJK˜\˜šYÙ\ˆ[šÝˆš[pé™H[Y[šØ]YÛÜšYX_JK
šœÞÊJÜ[˜ØÚ[™[Ž–ÊšœÞ
JXØÛ\ÜÓ˜[YN˜Ý\š\ÛK[X\\ÝØ]ÚYÚYÚ˜\šXKZY[ˆŽ˜YXJKÛÛ[™\ˆš[™ÎˆZ[™\È\ˆLYÚYÚØ_JW_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]][Û˜˜\šXK[X™[Ž˜šY\ˆ˜]\‹R[™›ÝÙYÙH\ˆðå”Ú[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜šY\ˆðå”S˜]\‹R[™›ÝÙYÙH[ˆ›Ø™\™ØJK
šœÞ
J[ØÚ[™[Ž[K™š[\ŠOO™K›˜]\™U˜Z[
K›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞÊJX™[ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\›Ý]K[Ü[Û˜Ú[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙYKš\ÊKšY
KÛÚ[™ÙNŠ
OOšŠOžÛ][™]ÈÙ]

NÜ™]\›ˆ‹š\ÊKšY
OÛ‹™[]JKšY
N›‹˜Y
KšY
KŸJ_JK
šœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\›Ý]KZÙ^X˜\šXKZY[ˆŽ˜YXÝ[NžØ˜XÚÙÜ›Ý[™ÛÛÜŽ™Kœ›Ý]PÛÛÜŸ_JK
šœÞÊJÜ[˜ØÚ[™[Ž–ÙK›˜[YKœ™\XÙJ8 $È˜]\‹R[™›ÝÙYÈ›Ø™\™Ù\ˆšYY\[™Ø
K0­ÈKœ›Ý]S[™ÝÛKÓØØ[TÝš[™ÊKQX
KÛH0­ÈKœ›Ý]Q\˜][Û‹0­ÈKœ›Ý]TÞ[X›Û_JW_JK8 %
šœÞ
JXÚ™YŽ™KœÛÝ\˜ÙK\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÜšYÚ[˜[˜[›]JW_KKšY
J_JW_JK
šœÞÊJšY[Ù]ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\˜Z[\›Ý]KXÛÛ›ÛØÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜Ù]™[›HZ[X[YÙH˜Z˜\ÜÙ[ˆ0­È˜YÙYÙXJK[K›X\
OOŠšœÞÊJX™[ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\›Ý]K[Ü[Û˜Ú[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY“Kš\ÊKšY
KÛÚ[™ÙNŠ
OO“ŠOžÛ][™]ÈÙ]

NÜ™]\›ˆ‹š\ÊKšY
OÛ‹™[]JKšY
N›‹˜Y
KšY
KŸJ_JK
šœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\›Ý]KZÙ^HÝ\š\ÛK\›Ý]KZÙ^KKX
ÙKšY˜\šXKZY[ˆŽ˜YXJK
šœÞÊJÜ[˜ØÚ[™[Ž–ÙK›˜[YK0­È
K›[™S[™ÝY]\œËÌYLÊKÓØØ[TÝš[™ÊKQXÛZ[š[][Qœ˜XÝ[Û‘YÚ]ÎŒ‹X^[][Qœ˜XÝ[Û‘YÚ]ÎŒŸJKÛX_JW_KKšY
JW_JK
šœÞÊJšY[Ù]ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\›Ý]KXÛÛ›ÛØÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜Ý\š\Ý\ØÚH[™ðé™ÙH[™˜Y›Ý][˜JK›K›X\
OOŠšœÞÊJX™[ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\›Ý]K[Ü[Û˜Ú[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY”š\ÊKšY
KÛÚ[™ÙNŠ
OO‘ŠOžÛ][™]ÈÙ]

NÜ™]\›ˆ‹š\ÊKšY
OÛ‹™[]JKšY
N›‹˜Y
KšY
KŸJ_JK
šœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\›Ý]KZÙ^HÝ\š\ÛK\›Ý]KZÙ^KKZÚ\˜Ú[Ý\˜˜\šXKZY[ˆŽ˜YXJK
šœÞÊJÜ[˜ØÚ[™[Ž–ÙK›˜[YK0­ÈÙ™š^šY[ØKˆK›Ù™šXÚX[[™ÝÛKÛH0­ÈÔÓKS[šYH
K›[™S[™ÝY]\œËÌYLÊKÓØØ[TÝš[™ÊKQXÛZ[š[][Qœ˜XÝ[Û‘YÚ]ÎŒ‹X^[][Qœ˜XÝ[Û‘YÚ]ÎŒŸJKÛX_JW_KKšY
JW_JK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜Ý\š\ÛK[X\XØ]YÛÜžKYš[\˜Ú[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–ØØ\[šØ]YÛÜšY[ˆ
ËœÚ^™K›Ûˆ[K›[™Ý
X_JK
šœÞÊJšY[Ù]ØÛ\ÜÓ˜[YN˜Ý\š\ÛK[X\Yš[\œØÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜Ø\[šØ]YÛÜšY[˜JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKYš[\‹XÚ\ØÚ[™[Ž‘[K›X\
OOŠšœÞÊJX™[ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXÚ\Ú[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY“Ëš\ÊKšY
KÛÚ[™ÙNŠ
OOšÊOžÛ][™]ÈÙ]

NÜ™]\›ˆ‹š\ÊKšY
OÛ‹™[]JKšY
N›‹˜Y
KšY
K‹˜Ý\œ™[[‹ŸJ_JKK›X™[_KKšY
J_JW_JW_JKÏÊšœÞÊJ]˜ÚY˜Ý\š\ÛK[X\XXØÙ\ÜØÛ\ÜÓ˜[YN˜Ý\š\ÛK[X\XXØÙ\ÜØÚ[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜X\]ÛÛ˜\˜Ú[™[Ž–ÊšœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[\N˜]Û˜ÛÛXÚÎŠ
OOžÛ]OQJ‹K˜Ý\œ™[Ë˜ÛY[ÚYK˜Ý\œ™[Ë˜ÛY[ZYÚŒ
NØK˜Ý\œ™[ËœÙ]šY]ÊÙK›]K›Û—KKž›ÛÛJ_KÚ[™[Ž˜™^š\šÈ™\™ÙYÜ™ˆ[ž™ZYÙ[˜JK
šœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜^X]Û˜\N˜]Û˜ÛÛXÚÎŠ
OOžÐÊLJK

_KÚ[™[Ž˜Ø\H[Y[˜JW_JK
šœÞ
J]˜Ü™YŽšKÛ\ÜÓ˜[YN˜š]˜]K[X\Ý\š\ÛK[X\XØ[˜\Ø›ÛN˜\XØ][Û˜X’[™^Œ˜\šXK[X™[Ž˜Ý\š\Ý\ØÚHØ\H°ïˆ™\™ÙYÜ™ˆZ]]\ÙÙ]ðé[ˆÜ[‹›Ý][‹ÝYZ[Ü™[ž™[‹›Ù[›Zœ˜Y[™˜]\‹R[™›ÝÙYÙ[˜JKI‰ŠšœÞ
JÜ›ÛN˜Ý]\ØÚ[™[Ž‘_JW_JNŠšœÞ
J]˜ÚY˜Ý\š\ÛK[X\XXØÙ\ÜØÛ\ÜÓ˜[YN˜Ý\š\ÛK[X\XXØÙ\ÜØÚ[™[ŽŠšœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[\N˜]Û˜ÛÛXÚÎ™YK˜\ÚËÚ[™[Ž˜Ý\š\Ý[šØ\HY[˜J_JKYK™X[ÙË
šœÞ
JØÛ\ÜÓ˜[YN˜]]YÚ[™[Ž˜Ø\[™Ü[™YÙH[™][œØÚ]ŽˆÜ[‘œ™YSX\ÈÜ[“X\[\ÈÈÜ[”Ý™Y]X\ˆÙ[Ù][ˆÙ\™[ˆ\ˆ˜XÚ\Ý[[][™ÈÙ[Y[‹ˆÛÛÜ™[˜][š\šÝ[™ÝZ[H™]ÙZ[YÙ[ˆØ\[œ[šÝ˜JW_J_Y[˜Ý[ÛˆZ

^Û]OVYJ
KÝ—OJ\ÙTÝ]JJ
KÜ‹WOJ\ÙTÝ]JJ

OO›™]ÈÙ]
ÛK›X\
OO™KšY
JJKØK×OJ\ÙTÝ]JJLJKÜË×OJ\ÙTÝ]JJLJKÛWOJ\ÙTÝ]JJ
KÙ‹OJ\ÙTÝ]JJ
KOJ\ÙSY[[ÊJ

OO‘›JÜ]Y\žNØ]YÛÜžRYÎ–Ë‹‹œ—Kœ™YSÛ›N˜KšZÙQœšY[™SÛ›NœßJKÝ‹K×JNÙ[˜Ý[ÛˆÊJ^ÚJOžÛ][™]ÈÙ]

NÜ™]\›ˆ‹š\ÊJOÛ‹™[]JJN›‹˜Y
JKŸJ_Y[˜Ý[ÛˆÊK
^ÙKœ™]™[Y˜][

KŠ
KÊLJKÊLJKJ™]ÈÙ]
ÛK›X\
OO™KšY
JJK

_\™]\›Š\ÙQY™™XÝ
J

OOžÙKœYÙOOOXÝ\š\Û]\Ø	‰[KœÛÛYJOšYOOYKXŠI‰œ
KXŠ_KÙKœYÙKKX—JK
\ÙQY™™XÝ
J

OOžÙKœYÙOOOXÝ\š\Û]\Ø	‰™KXOOXØ\X	‰œ
Ø\X
_KÙKœYÙKKX—JK
\ÙQY™™XÝ
J

OOžÚYŠYŠ\™]\›ŽÛ]OYOOXØ\XÙØÝ[Y[™Ù][[Y[žRY
Ý\š\ÛK[X\XXØÙ\ÜØ
N™OOXÙY[šÜÝY]XÙØÝ[Y[œ]Y\žTÙ[XÝÜŠÙ]K]Ý\š\ÛKZYH™ÙY[šÜÝY]H—X
N™ØÝ[Y[œ]Y\žTÙ[XÝÜŠÙ]K]Ý\š\ÛKZYH‰ÙŸH—X
_ØÝ[Y[™Ù][[Y[žRY
Ý\š\Û]\ËX
ÙŠNÙI‰ŠKœØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽ˜[œÝ[›ØÚÎ˜Ý\JK

J_KÙ‹‹WJK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\YÙXÚ[™[Ž–ÊšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[Ý\š\ÛKZ[›ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜SP’0á‘ÒQÑHÔ’QS•QT•S‘È°çˆðáÕXJK
šœÞ
JXØÚ[™[Ž˜™\™ÙYÜ™ˆ[XÚÙ[ˆ8 $ÈðéÝH	ˆÝ\š\Û]\ØJK
šœÞ
JØÚ[™[Ž˜ÙZ[œÝðï™YÚÙZ][‹˜]\‹Ý[\‹0ç™\›˜XÚ[™Ë\ÜÙ[ˆ[™ÙYÙH\˜Ú[HZ[H\È™^š\šÜÈ8 $È›ÛH™\™ÙYÜ™™\ˆ™[[H[™Úœ°ïÙÙHš\È™]X[\›píšH[™[ˆYHšY\‹H[™X\œØÚ[™K˜JK
šœÞ
J˜]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]YÛÜžK[˜]˜˜\šXK[X™[Ž˜[Y[ˆ[H™\™ZXÚðéÝH[™Ý\š\Û]\ØÚ[™[ŽÛK›X\
OOŠšœÞ
JXÚ™YŽ˜ÝÝ\š\Û]\ËIÙKšYXÛÛXÚÎO—ÊKšY
KÚ[™[Ž™KœÚÜKKšY
J_JW_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆÝ\š\ÛKXÛÛ[Ú[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKZ[›ËYÜšYÚ[™[Ž–ÊšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜°ïˆ[ˆ\œÝ[ˆ™\ÝXÚJK
šœÞ
JØÚ[™[Ž˜°ïˆZ[™[ˆÛÛ\ZÝ[ˆ[™Ø[™È™[›™\™ÙYÜ™‹UÝ\š\Û]\ÈZ[™H]ØHÈÛH[™ÙHÝ™XÚÙHZ]LˆÝ][Û™[ˆXˆÙ\œ˜ZŽˆ[ÝYÛÜ›Ø\ÜÙ\›pïKÝˆ]šH[™][KØÚÜÜËØÚÜÜÙØ\[ˆ[™Ú[™pïKˆ[›™[˜™\ÝXÚH[™0å™™›[™ÜÞ™Z][ˆÙ\\˜][™[‹˜JK
šœÞ
JXÚ™YŽ˜ÝÝ\š\Û]\Ë\[™ØY[™ÙXÛÛXÚÎ™OO—ÊK[™ØY[™ÙX
KÚ[™[Ž˜[™ðé™ÙH[™›Ý][ˆ[œÙZ[ˆ8¡¤˜JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜ÙY[šËH[™š[[™ÜÛÜJK
šœÞ
JØÚ[™[Ž˜YHÖ‹QÙY[šÜÝ0éH™]Y[™Ø[[YH\ÝZ[ˆZYÙ[œÝ0é™YÙ\ˆ\ÝÜš\ØÚ\ˆÙY[šËH[™š[[™ÜÛÜˆÚYHÚ\™Y\ˆ]\Ù°ïÚÛXÚšXÚ[Èœ™Z^™Z]]˜ZÝ[ÛˆZ[™Ù[Ü™™]˜JK
šœÞ
JXÚ™YŽ˜ÝÝ\š\Û]\Ë\ÙZ[œÝÝY\™YÚÙZ][˜ÛÛXÚÎ™OO—ÊKÙY[šÜÝY]X
KÚ[™[Ž˜[™›Ü›X][Û™[ˆ[™Ù™š^šY[H™\ÝXÚÜÙZ]H8¡¤˜JW_JK
šœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜[™[Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜™\˜[œÝ[[™Ù[˜JK
šœÞ
JØÚ[™[Ž˜\ÈÚXÙZ[™[ˆÙZ][ˆØ[[™\Žˆ°ïˆZÝY[H\›Z[™H°ïY\Ù\ˆ™\™ZXÚ[H™\ÝZ[™[ˆ™\˜[œÝ[[™ÜÚØ[[™\ˆ›Ûˆ™\™ÙYÜ™ˆÙ[YZ[œØ[K˜JK
šœÞ
JXÚ™YŽ˜Ý™\˜[œÝ[[™Ù[˜Ú[™[Ž˜[H™\˜[œÝ[[™ÜÚØ[[™\ˆ8¡¤˜JW_JW_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKZYÚYÚÈ[™[˜\šXK[X™[YžHŽ˜Ý\š\ÛKZYÚYÚË]]XÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜UTÕÐR“Óˆ‘T‘ÑQÔ‘‹‘XJK
šœÞ
J˜ÚY˜Ý\š\ÛKZYÚYÚË]]XÚ[™[Ž˜LYÚYÚÈ[ˆ™\™ÙYÜ™˜JK
šœÞ
JØÚ[™[Ž˜YH›ÛÙ[™H]\ÝØZ0ï™\›š[[]YH™Zˆ›Ûˆ™\™ÙYÜ™‹™H™\°í™™™[XÚ[ˆYÚYÚËˆÚYH\ÝÙZ[™H˜[™Ù›ÛÙH[™ÙZ[™HZYÙ[œÝ0é™YÙH™]Ù\[™È›Ûˆ8 '™\™ÙYÜ™ˆÙ[YZ[œØ[x '˜JK
šœÞ
J[ØÚ[™[Ž•K›X\
OOŠšœÞÊJXØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜ÝÝ\š\Û]\Ë\™\Ý[ØÛÛXÚÎO—ÊKš][RYÖÌJKÚ[™[Ž™K]_JKKšÚ[™OOX\™XXÊšœÞ
JÜ[˜ØÚ[™[Ž˜0­È[™ØÚYËKÑÙXšY]Ø™^™ZXÚ[™ØJN›[_KKšY
J_JK
šœÞ
JXÚ™YŽ˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÌLZYÚYÚØ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜]\ÝØZ]Yˆ™\™ÙYÜ™‹™H0í™™›™[ˆ8¡¤˜JW_JK
šœÞ
JÜ]Y\žNÙ]]Y\žN›‹Ù[XÝYœ‹ÙÙÛN™Ëœ™YSÛ›N˜KÙ]œ™YSÛ›N›ËšZÙQœšY[™SÛ›NœËÙ]šZÙQœšY[™SÛ›N˜Ë™\Ý[ÛÝ[›K›[™ÝJK
šœÞ
J	KÚ][\Î›KÙ[XÝYœ‹›ØÝ\ÒY›Û‘›ØÝ\Î_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXÜ›ÜÜÛ[šÜØÚ[™[Ž–ÊšœÞ
JXÚ™YŽ˜ÙÙ\ØÚXÚXÚ[™[Ž˜Ù\ØÚXÚH[™\š[›™\[™Ù[˜JK
šœÞ
JXÚ™YŽ˜ÙÙ\ØÚXÚKÛÜXÚ[™[Ž˜ÜH[™Z™HÙ\ØÚXÚXJK
šœÞ
JXÚ™YŽ˜Ý™\ž™ZXÚš\ØÚ[™[Ž˜™\™ÙYÜ™™\ˆ™\ž™ZXÚš\ØJK
šœÞ
JXÚ™YŽ˜ÛÜ™Ø[š\Ø][Û˜Ú[™[Ž˜Ü™Ø[š\Ø][Û™[ˆ[H™^š\šØJK
šœÞ
JXÚ™YŽ˜Ý™\˜[œÝ[[™Ù[˜Ú[™[Ž˜™\˜[œÝ[[™ÜÚØ[[™\˜JW_JK
šœÞÊJÙXÝ[Û˜ÚY˜Ý\š\Û]\Ë\™\Ý[ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\™\Ý[ØÚ[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\™\Ý[ËZXY[™ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜ÜH[™[™ÙX›ÝXJK
šœÞÊJÈ˜\šXK[]™HŽ˜Û]XÚ[™[Ž–ÛK›[™Ý\ÜÙ[™HZ[°éÙX_JW_JKÛK™š[\ŠOOœ‹š\ÊKšY
JK›X\
OOžÛ][K™š[\ŠO–J
Kš[˜ÛY\ÊKšY
JNÚYŠ]›[™Ý
\™]\›ˆ[Û]]O›X\
OŠšœÞ
JšÚ][NØ]YÛÜžRY™KšYÛ‘›ØÝ\ÎŠ
OOžÝJšY
KØÝ[Y[™Ù][[Y[žRY
Ý\š\ÛK[X\]]X
OËœØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽ˜Û[ÛÝ›ØÚÎ˜Ù[\˜J__KšY
ØX
ÙKšY
JNÜ™]\›ŠšœÞ
JÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]YÛÜžK\ÙXÝ[Û˜Y˜Ý\š\Û]\ËIÙKšYXÚ[™[Ž™KšYOOXÙZ[œÝÝY\™YÚÙZ][˜ÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜Ù\ØÚXÚH	ˆÙZ[œÝðï™YÚÙZ][˜JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\ÝXœÙXÝ[Û˜Y˜Ý\š\Û]\ËYÙ\ØÚXÚXÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž˜Ù\ØÚXÚXJK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ\™YÜšYÚ[™[Ž›Š™š[\ŠOO™KÝ\š\ÛQÜ›Ý\OOXÙ\ØÚXÚX
J_JW_JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\ÝXœÙXÝ[Û˜Y˜Ý\š\Û]\Ë[ÜXÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž˜ÙZ[œÝðï™YÚÙZ][˜JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ\™YÜšYÚ[™[Ž›Š™š[\ŠOO™KÝ\š\ÛQÜ›Ý\OOXÙ\ØÚXÚX
J_JW_JW_JNŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž™K›X™[JKKšYOOX˜]\˜	‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]][Û˜Ú[™[Ž˜[ˆØÚ]™ÙXšY][ˆ\ˆ]\ÙÙ]ÚY\Ù[™HÙYÙH]™[ˆ[™ÚØ[H˜]\œØÚ]œ™YÙ[ˆ™XXÚ[‹ˆ˜YYœ™ZYØX™[‹ØZ\ÛÛ˜[H0å™™›[™Ù[ˆ[™ZÝY[HØ\›[™Ù[ˆðí››™[ˆÚXÚ0é™\›‹˜JKKšYOOXØ\ÜÙ\˜	‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]][Û˜Ú[™[Ž˜YYÙ\0é™KØÚ]\Ù[‹\˜Ú˜ZÚ0íš[ˆ[™YY™ðé™ÙHÚ[™Y\ˆšXÚ[È™\Ý0éYÝZ[™Ù]˜YÙ[‹ˆ™\˜š[™XÚH˜]]\ØÚH[™ØX™[ˆ›ÜˆZ[™\ˆ˜Z™Z[H\Ý0é™YÙ[ˆ™]™ZX™\ˆÙ\ˆ\ˆØÚY™™˜ZÝ™\Ø[[™ÈZ[šÛ[‹˜JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ\™YÜšYÚ[™[Ž›Š
_JW_J_KKšY
_JW_JKK›[™ÝOOL	‰ŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKY[\H[™[›ÛN˜Ý]\ØÚ[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜ÙZ[™H\ÜÙ[™[ˆZ[°éÙXJK
šœÞ
JØÚ[™[Ž˜0á™\›ˆÚYHYHÝXÚHÙ\ˆðé[ˆÚYHÙZ]\™H[Y[ˆ]\Ë˜JW_JK
šœÞ
JØÛ\ÜÓ˜[YN˜Ý\š\ÛK\ÛÝ\˜ÙK[›ÝXÚ[™[Ž˜]Y[[š[ÙZ\ÙH[™ZÝX[]0éÙ][HÝZ[ˆ[ˆ™Y[HZ[˜YËˆ°ïˆYHÙ[ÙÜ˜Yš\ØÚHÜšY[Y\[™ÈÙ\™[ˆ\ˆØ\Y\H[šÝHZ]ÛÛÜ™[˜][š\šÝ[™[™Ù^™ZYÝˆÜ[”Ý™Y]X\Q][Žˆ0ªHÜ[”Ý™Y]X\SZ]Ú\šÙ[™KÑ“KŒÈ[]XÚHØÚ]™ÙXšY]ËH[™˜YZ[ÙZ\ÙNˆœ™ZYH[™[œÙ\ÝY[X\™Ë˜JW_JW_J_Y[˜Ý[Ûˆ
Ü]Y\žN™KÙ]]Y\žNÙ[XÝY›‹ÙÙÛNœ‹œ™YSÛ›NšKÙ]œ™YSÛ›N˜KšZÙQœšY[™SÛ›N›ËÙ]šZÙQœšY[™SÛ›NœË™\Ý[ÛÝ[˜ßJ^Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKYš[\œÈ[™[˜\šXK[X™[Ž˜Ý\š\Û]\Ø[™ÙX›ÝHš[\›˜Ú[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKYš[\‹\ÙX\˜ÚÚ[™[Ž–ÊšœÞ
JX™[Ú[›ÜŽ˜Ý\š\ÛK\ÙX\˜ÚÚ[™[Ž˜ÝXÚH˜XÚÜ[™ÙX›ÝÙ\ˆÝYZ[JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK\ÙX\˜Ú›ÞÚ[™[Ž–ÊšœÞ
J‹ÜÚ^™NŒN_JK
šœÞ
J[œ]ÚY˜Ý\š\ÛK\ÙX\˜Ú\N˜ÙX\˜Ú˜[YN™KÛÚ[™ÙN™OO
K\™Ù]˜[YJKXÙZÛ\Ž˜[H™Z\ÜY[šY\›[™KØÚÜÜË˜Y8 )˜JW_JW_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKYš[\‹\›ÝØÚ[™[Ž–ÊšœÞÊJX™[ØÛ\ÜÓ˜[YN˜ÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙYšKÛÚ[™ÙN™OO˜JK\™Ù]˜ÚXÚÙY
_JK\ˆ[ÈÛÜÝ[›ÜÈÙZÙ[›ž™ZXÚ™]H[™ÙX›ÝX_JK
šœÞÊJX™[ØÛ\ÜÓ˜[YN˜ÚXÚØÚ[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY›ËÛÚ[™ÙN™OOœÊK\™Ù]˜ÚXÚÙY
_JK˜Zœ˜Yœ™][™XÚH[\šðï™H
™[YÝH[˜šY]\›Y\šÛX[JX_JK
šœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜^X]Û˜\N˜]Û˜ÛÛXÚÎŠ
OO

KÚ[™[Ž˜ÝXÚHY\™[˜JK
šœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜^X]Û˜\N˜]Û˜ÛÛXÚÎŠ
OOžÝ

KJLJKÊLJKÛK™›Ü‘XXÚ
OOžÛ‹š\ÊKšY
_ŠKšY
_J_KÚ[™[Ž˜[Hš[\ˆ\°ïÚÜÙ]™[˜JK
šœÞÊJÜ[˜ØÚ[™[Ž–ØË™Y™™\˜_JW_JK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜Ý\š\ÛK]ÜXËYš[\œØÚ[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–Ø[Y[ˆ]\Ýðé[ˆ
‹œÚ^™K›ÛˆÛK›[™Ý
X_JK
šœÞÊJšY[Ù]ØÚ[™[Ž–ÊšœÞ
JYÙ[™ØÚ[™[Ž˜Ý\š\Û]\Ý[Y[˜JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKYš[\‹XÚ\ØÚ[™[ŽÛK›X\
OOŠšœÞÊJX™[ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXÚ\Ú[™[Ž–ÊšœÞ
J[œ]Ý\N˜ÚXÚØ›ÞÚXÚÙY›‹š\ÊKšY
KÛÚ[™ÙNŠ
OOœŠKšY
_JKKœÚÜ_KKšY
J_JW_JW_JW_J_Y[˜Ý[Ûˆš
Ú][N™KØ]YÛÜžRYÛ‘›ØÝ\Î›ŸJ^Û]JK˜Ø]YÛÜžS[šÜß×JK™š[\ŠOOOYK˜Ø]YÛÜžJNÜ™]\›ŠšœÞÊJ\XÛXÈ™]K]Ý\š\ÛKZYŽ™KšYÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ\™
ÊKÛ™OOOXÙY[šÛÜØY[[ÜšX[XØ\™˜
KÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž™KÛ™OOOXÙY[šÛÜØÑQS’ËHS‘’SS‘ÔÓÔ•™K˜ÛÛ[Y\˜ÚX[ØÓÓSQT–’QSTˆS’QUT˜–[JK˜Ø]YÛÜžJ_JKKšYÚYÚ	‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛKZYÚYÚX˜YÙXÚ[™[Ž–ØZ[™\È\ˆLYÚYÚÈ›Ûˆ
šœÞ
JXÚ™YŽ˜Î‹ËÝÝÝË˜™\™ÙYÜ™‹™KÌLZYÚYÚØ\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜™\™ÙYÜ™‹™XJW_JK
šœÞ
JØØÚ[™[Ž™K›˜[Y_JK
šœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛK\XÙXÚ[™[Ž–ÊšœÞ
JY‹ÜÚ^™NŒM_JKKœXÙKK˜Y™\ÜÏØ0­È
ÙK˜Y™\ÜÎ˜_JK
šœÞ
JØÚ[™[Ž”[JJ_JKKœÝ\[Y[[\ØÜš\[Û‰‰ŠšœÞ
JØÛ\ÜÓ˜[YN˜Ý\š\ÛK\Ý\[Y[[Ú[™[Ž™KœÝ\[Y[[\ØÜš\[ÛŸJKKœ›Ý]TÝ][ÛœÏË›[™ÝŒ	‰ŠšœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜Ý\š\ÛK\Ý][ÛœØÚ[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–ÙKœ›Ý]TÝ][ÛœË›[™ÝÝ][Û™[ˆ\ˆ›Ý]X_JK
šœÞ
JÛØÚ[™[Ž™Kœ›Ý]TÝ][ÛœË›X\
OOŠšœÞ
JXØÚ[™[Ž™_KJJ_JW_JKKœ›Ý]TXÙRYÏË›[™ÝŒ	‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛK\™[]YÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜Ú\˜Ú[ˆ[[™È\ˆ›Ý]N˜JKKœ›Ý]TXÙRYË›X\

K
OOžÛ]P[K™š[™
OšYOOYJNÜ™]\›ˆÊšœÞÊJÜ[˜ØÚ[™[Ž–ÝØ˜
šœÞ
JXÚ™YŽ˜ÝÝ\š\Û]\Ë\™\Ý[ØÛÛXÚÎOžÝœ™]™[Y˜][

KØÝ[Y[œ]Y\žTÙ[XÝÜŠÙ]K]Ý\š\ÛKZYH‰Ù_H—X
OËœØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽ˜Û[ÛÝ›ØÚÎ˜Ù[\˜J_KÚ[™[Ž›‹›˜[Y_JW_KJN›[JW_JKK˜šZÙQœšY[™I‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛKYœ™YXÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜˜Zœ˜Y[™ÙX›Ý]]™]™ZX™\Ž˜JKK˜šZÙQ™X]\™\Ëš›Ú[Š
K˜_JKK™œ™YI‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛKYœ™YXÚ[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜Z[›Ü™[™Î˜JKK™œ™YW_JKK›Ý]ÚYI‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]][Û˜Ú[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜Ù[ÙÜ˜Yš\ØÚHZ[›Ü™[™Î˜JKK›Ý]ÚYW_JKKœ›Ý]QÙ[ÛY]žTÝ]\É‰ˆYK›˜]\™U˜Z[	‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]][Û˜Ú[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜Ø\[›[šYN˜JKKœ›Ý]QÙ[ÛY]žTÝ]\×_JKK˜˜\œšY\‰‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]][Û˜Ú[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜˜\œšY\™Yœ™ZZZ]˜JKK˜˜\œšY\—_JKKœÝ]\É‰™KœÝ]\ÈOOX]Y[H[HŒKŒLKŒŒˆÙ\°ï	‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ]][Û˜Ú[™[Ž–ÊšœÞ
JÝ›Û™ØØÚ[™[Ž˜ZÝX[]0é˜JKKœÝ]\×_JK
šœÞ
JØÛ\ÜÓ˜[YN˜Ý\š\ÛK\ÛÝ\˜ÙXÚ[™[ŽŠšœÞÊJÛX[ØÚ[™[Ž–Ø]Y[NˆKœÛÝ\˜ÙK›X™[0­ÈÙ\°ïK˜ÚXÚÙYÛ—_J_JKK˜Y][Û˜[ÛÝ\˜Ù\ÏË›X\
OOŠšœÞ
JØÛ\ÜÓ˜[YN˜Ý\š\ÛK\ÛÝ\˜ÙXÚ[™[ŽŠšœÞÊJÛX[ØÚ[™[Ž–ØÙZ]\™H]Y[Nˆ
šœÞ
JXÚ™YŽ™K\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž™K›X™[JW_J_KK\›
JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛKXØ\™XXÝ[ÛœØÚ[™[Ž–ÙK›˜]\™U˜Z[Kœ˜Z[›Ý]RYK›X\›Ý]RYÊšœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[\N˜]Û˜ÛÛXÚÎ›‹Ú[™[Ž˜ÙYÈ]Yˆ\ˆØ\H™ZYÙ[˜JN“[X™\‹š\Ñš[š]JK›]
I‰™K˜ÛÛÜ™[˜]TÛÝ\˜ÙOÊšœÞ
J]Û˜ØÛ\ÜÓ˜[YN˜Ý][™HÛX[\N˜]Û˜ÛÛXÚÎ›‹Ú[™[Ž˜]Yˆ\ˆØ\H™ZYÙ[˜JNŠšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜Ý\š\ÛK[›ËXÛÛÜ™[˜]XÚ[™[Ž™K™Ù[ÛY]žU\OOOX\™XXØ›0éÚ[™Ù[ÛY]šYHšXÚ™\šYš^šY\˜ÙZ[ˆ™[YÝ\ˆØ\[œ[šÝJKK›[šÓÛ›T›Ý]U\›ÊšœÞ
JXÚ™YŽ™K›[šÓÛ›T›Ý]U\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž˜ÜšYÚ[˜[›Ý]H[™Ô™Z[H\˜]\ÙÙX™\˜JN›[Kš™YÊšœÞÊJXÚ™YŽ™Kš™Y‹Ú[™[Ž–Ø[H™\ÝZ[™[ˆ™\™ZXÚ
šœÞ
J™‹ÜÚ^™NŒM_JW_JN›[
šœÞÊJXÚ™YŽ™KœÛÝ\˜ÙK\›\™Ù]˜Ø›[šØ™[˜›ÛÜ[™\ˆ›Ü™Y™\œ™\˜Ú[™[Ž–ØÜšYÚ[˜[]Y[H
šœÞ
JÙ‹ÜÚ^™NŒMJW_JW_JK‹›[™ÝŒ	‰ŠšœÞÊJØÛ\ÜÓ˜[YN˜Ý\š\ÛK\™[]YÚ[™[Ž–Ø]XÚ\ÜÙ[™ˆ‹›X\

K
OOŠšœÞÊJÜ[˜ØÚ[™[Ž–ÝØ˜[JJW_KJJW_JW_J_]˜\ˆšVÞÚY˜Ù\ØÚXÚX]N˜Ù\ØÚXÚH[XÚÙ[˜\ØÜš\[ÛŽ˜[XÚÙH™\™ÙYÜ™œÈ™\™Ø[™Ù[šZ]\ÝÜš\ØÚHÜK[H›ÝÙÜ˜YšY[ˆ[™\œðí››XÚH\š[›™\[™Ù[‹˜[šÜÎ–ÞÛX™[˜Ù\ØÚXÚH[™\š[›™\[™Ù[˜™YŽ˜ÙÙ\ØÚXÚXW_KÚY˜Ý\š\Û]\Ø]N˜™\™ÙYÜ™ˆ\›X™[˜\ØÜš\[ÛŽ˜[XÚÙHÙZ[œÝðï™YÚÙZ][‹]\Ù›YÜÞšY[KÜ^šY\™ðé™ÙH[™YHšY[˜[[œÙ\™\ˆÝYZ[K˜[šÜÎ–ÞÛX™[˜ðéÝH[™Ý\š\Û]\Ø™YŽ˜ÝÝ\š\Û]\ØW_KÚY˜ZÝY[\Ø]N˜ZÝY[\È\™˜Z™[˜\ØÜš\[ÛŽ˜[™›Ü›ZY\™HXÚ0ï™\ˆ˜XÚšXÚ[‹Û]ZË™\˜[œÝ[[™Ù[ˆ[™[ÚXÚÛ[™Ù[ˆ[H™^š\šË˜[šÜÎ–ÞÛX™[˜˜XÚšXÚ[ˆ]\È™\™ÙYÜ™˜™YŽ˜Û˜XÚšXÚ[˜KÛX™[˜Û]ZØ™YŽ˜ÜÛ]ZØKÛX™[˜ZÝY[H™\˜[œÝ[[™Ù[˜™YŽ˜Ý™\˜[œÝ[[™Ù[˜W_KÚY˜Z]Ù\Ý[[˜]N˜Ù[YZ[œØ[HZ]Ù\Ý[[˜\ØÜš\[ÛŽ˜Z[HZ[™H\™˜Z[™Ù[‹œš[™ÙHYY[ˆZ[ˆ[™XXÚH]Yˆ[›YYÙ[ˆ[ˆ™\™ÙYÜ™ˆ]Y›Y\šÜØ[K˜[šÜÎ–ÞÛX™[˜[›YYÙ[ˆ[™™\˜™\ÜÙ\[™Ù[˜™YŽ˜Ø[›YYÙ[˜KÛX™[˜\™˜Z[™ÜØ™\šXÚX™YŽ˜Ù\™˜Z[™ØW_WKZVÞÚY˜Ù\ØÚXÚX]N˜Ù\ØÚXÚÚØ\X\ØÜš\[ÛŽ˜œ™ZYÙYÙX™[™HÙ\ØÚXÚØ™Z]°éÙH[™\œðí››XÚH\š[›™\[™Ù[ŽÈZ]]\Ýðé˜\™[ˆ0í™™™[XÚ[ˆ\šÛ[™ÜÛÜ[‹˜™YŽ˜ÙÙ\ØÚXÚOÝšY]Ï[X\\™XN˜Ù\ØÚXÚH[™\š[›™\[™Ù[˜KÚY˜™YÙYÛ[™ÜÛÜX]N˜\ÝÜš\ØÚHØ\H\ˆ™YÙYÛ[™ÜÛÜX\ØÜš\[ÛŽ˜Z[X[YÙHØ\ÝÝ0é[ˆ[™\ÝÜš\ØÚH™Y™œ[šÝH[ˆ™\™ÙYÜ™ˆ[™Úœ°ïÙÙK˜™YŽ˜ÙZ[œØ[ZÙZ]ÜÝYZ[KÝLMØ[œÚXÚZØ\X\™XN˜\ÝÜš\ØÚ\È™\ž™ZXÚš\È\ˆ™YÙYÛ[™ÜÛÜXKÚY˜Ý\š\Û]\Ø]N˜Ý\š\Û]\ÚØ\X\ØÜš\[ÛŽ˜ÙZ[œÝðï™YÚÙZ][‹]\Ù›YÜÞšY[KÜ^šY\™ðé™ÙH[™Ø\Y\HÙYÙH[H™^š\šË˜™YŽ˜ÝÝ\š\Û]\ËÚØ\X\™XN˜ðéÝH[™Ý\š\Û]\ØKÚY˜™\ž™ZXÚš\Ø]N˜Ø\H\È™\™ÙYÜ™™\ˆ™\ž™ZXÚš\ÜÙ\Ø\ØÜš\[ÛŽ˜Ù\°ïHÝ[™ÜH›ÛˆZ[œšXÚ[™Ù[‹Y[œÝÝ[[ˆ[™[™ÙX›Ý[ˆ[H™\ž™ZXÚš\Ë˜™YŽ˜Ý™\ž™ZXÚš\ËÚØ\X\™XN˜™\™ÙYÜ™™\ˆ™\ž™ZXÚš\ØKÚY˜Ü™Ø[š\Ø][Û™[˜]N˜Ü™Ø[š\Ø][ÛœÚØ\X\ØÜš\[ÛŽ˜Ý[™ÜH\ˆ›Ü™Ù\Ý[[ˆÜ™Ø[š\Ø][Û™[ˆ[™Z[œšXÚ[™Ù[ˆ[H™^š\šË˜™YŽ˜ÛÜ™Ø[š\Ø][Û‹ÚØ\X\™XN˜Ü™Ø[š\Ø][Û™[ˆÝ[[ˆÚXÚ›Ü˜WNÙ[˜Ý[ÛˆZ
J^Ü™]\›ŠšœÞ
J\Ë‹‹™_J_Y[˜Ý[ÛˆÚ
ØØ[]]ÜŽ™_J^Ü™]\›ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜\›ØÚ[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜\›ËXÛÜXÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜°çˆSˆÐS–‘Sˆ‘V’T’ØJK
šœÞÊJXØÚ[™[Ž–Ø[œÙ\ˆ™\™ÙYÜ™‹˜
šœÞ
Jœ˜ßJK[œÙ\™HÙ\ØÚXÚ[‹˜
šœÞ
Jœ˜ßJK
šœÞ
J[XØÚ[™[Ž˜[œÙ\™Hpí™ÛXÚÙZ][‹˜JW_JK
šœÞ
JØÚ[™[Ž˜YY[ˆZ[˜œš[™Ù[‹\™˜Z[™Ù[ˆ[™\š[›™\[™Ù[ˆZ[[‹[™ÙX›ÝH[XÚÙ[ˆ[™Û]ZÈ›ÜˆÜ˜XÚ›ÛšYZ[‹˜JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜\›ËX]ÛœØÚ[™[Ž–ÊšœÞÊJXØÛ\ÜÓ˜[YN˜š[X\žX™YŽ˜Ø™Z]˜YYÙXÚ[™[Ž–Ø™Z]°éÙH[XÚÙ[ˆ
šœÞ
J™‹ÜÚ^™NŒNJW_JKI‰ŠšœÞ
JXØÛ\ÜÓ˜[YN˜Ý][™X™YŽ˜ÛYZ[™KÛ™]KØ[›YYÙ[˜Ú[™[Ž˜™Z]˜YÈ\œÝ[[˜JW_JK
šœÞ
JØÛ\ÜÓ˜[YN˜\›Ë[›ÝXÚ[™[Ž˜[˜Xš0é™ÚYËˆØXÚXÚˆ°ïˆZ[ˆÝ]\ÈZ]Z[˜[™\‹˜JW_JK
šœÞÊJšYÝ\™XØÛ\ÜÓ˜[YN˜\›Ë\ÝØÚ[™[Ž–ÊšœÞ
J[YØÜÜ˜Î˜Ø™\™ÙYÜ™‹YÙ[YZ[œØ[KØ\ÜÙ]ËÜØÚÜÜËšœØ[˜\È™\™ÙYÜ™™\ˆØÚÜÜË]Y›˜ZYH›ÛH‹ˆXZHŒŒJK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜ÝËXØ\[Û˜Ú[™[Ž–ÊšœÞ
JY‹ÜÚ^™NŒM_JK
šœÞ
JÜ[˜ØÚ[™[Ž˜™\™ÙYÜ™™\ˆØÚÜÜØJW_JK
šœÞ
JXØÛ\ÜÓ˜[YN˜Ü™Y]™YŽ˜Û˜XÚÙZ\ÙXÚ[™[Ž˜›ÝÎˆ][KT\˜]0­ÈÐÈ–KTÐHŒJW_JW_JK
šœÞ
JØÛ\ÜÓ˜[YN˜ÛYKY\ÝšXÝ[›ÝXÚ[™[Ž˜›ÛˆÚœ°ïÙÙHš\ÈÚ\˜ÚÙ\™\ˆÙZ0íœ™[ˆ[HM[]XÚ[ˆÝYZ[H[H™^š\šË˜JK
šœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆÛY\YÙK[ÜšY[][Û˜˜\šXK[X™[YžHŽ˜ÛY\YÙK[ÜšY[][Û‹]]XÚ[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKZ[›ÙXÝ[Û˜Ú[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜SP’0á‘ÒQÑH°ç‘ÑT”U“Ô“XJK
šœÞ
J˜ÚY˜ÛY\YÙK[ÜšY[][Û‹]]XÚ[™[Ž˜™\™ÙYÜ™ˆÙ[YZ[œØ[H8 $È[XÚÙ[‹[™›Ü›ZY\™[ˆ[™Z]Ù\Ý[[˜JK
šœÞ
JØÚ[™[Ž˜™\™ÙYÜ™ˆÙ[YZ[œØ[H\ÝZ[™H[˜Xš0é™ÚYÙH°ï™Ù\œ]›Ü›H°ïˆ[ˆÙ\Ø[][ˆ™^š\šÈ™\™ÙYÜ™‹ˆÚYH™\˜š[™]Ù\ØÚXÚKZÝY[H[™›Ü›X][Û™[‹\™˜Z[™Ù[ˆ[™YY[‹[H[ˆ™^š\šÈ™\ÜÙ\ˆÙ[›™[ž[\›™[ˆ[™\ÈZ]Z[˜[™\ˆHÝ0éšÙ[‹˜JW_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙK]ÜXËYÜšY˜\šXK[X™[Ž˜[Y[ˆØÚ™[[XÚÙ[˜Ú[™[Žœš›X\
OOŠšœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜ÛY\YÙKY\ØÛÜÝ\™HÛY\YÙK]ÜXËY\ØÛÜÝ\™XÚ[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–ÊšœÞ
JØØÚ[™[Ž™K]_JK
šœÞ
J‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒŒJW_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙKY\ØÛÜÝ\™KXÛÛ[Ú[™[Ž–ÊšœÞ
JØÚ[™[Ž™K™\ØÜš\[ÛŸJK
šœÞ
J˜]˜È˜\šXK[X™[Ž™K]KÚ[™[Ž™K›[šÜË›X\
OOŠšœÞÊJXÚ™YŽ™Kš™Y‹Ú[™[Ž–ÙK›X™[
šœÞ
JÜ[˜È˜\šXKZY[ˆŽ˜YXÚ[™[Ž˜8¡¤˜JW_KKš™YŠJ_JW_JW_KKšY
J_JK
šœÞÊJ]Z[ØØÛ\ÜÓ˜[YN˜ÛY\YÙK[X\Y\™XÝÜžHÛY\YÙKY\ØÛÜÝ\™X˜\šXK[X™[YžHŽ˜ÛY\YÙK[X\Ë]]XÚ[™[Ž–ÊšœÞÊJÝ[[X\žXØÚ[™[Ž–ÊšœÞÊJÜ[˜ØÛ\ÜÓ˜[YN˜ÛY\YÙK[X\\Ý[[X\žXÚ[™[Ž–ÊšœÞ
JÜ[˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜ÐT•SˆS‘°áSSPÒHÔ’QS•QT•S‘ØJK
šœÞ
JØÚY˜ÛY\YÙK[X\Ë]]XÚ[™[Ž˜™\™ÙYÜ™ˆ]Yˆ[™Ø\[ˆ[XÚÙ[˜JW_JK
šœÞ
J‹È˜\šXKZY[ˆŽ˜YXÚ^™NŒŒŸJW_JK
šœÞÊJ]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙK[X\Y\™XÝÜžKXÛÛ[Ú[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜ÛY\YÙK[X\YÜšYÚ[™[ŽšZ›X\
OOŠšœÞÊJ\XÛXØÛ\ÜÓ˜[YN˜ÛY\YÙK[X\XØ\™Ú[™[Ž–ÊšœÞ
JØÚ[™[Ž™K]_JK
šœÞ
JØÚ[™[Ž™K™\ØÜš\[ÛŸJK
šœÞÊJXÚ™YŽ™Kš™Y‹Ú[™[Ž–Ø\™ZÝ\ˆØ\H
šœÞ
JÜ[˜È˜\šXKZY[ˆŽ˜YXÚ[™[Ž˜8¡¤˜JW_JW_KKšY
J_JK
šœÞ
JØÛ\ÜÓ˜[YN˜ÛY\YÙK[X\\š]˜XÞXÚ[™[Ž˜^\›™HØ\[™][ˆÙ\™[ˆ\œÝ˜XÚ\ˆ™]ÙZ[YÙ[ˆZ[Ú[YÝ[™ÈÙ[Y[‹˜JW_JW_JW_JK
šœÞ
J›KßJW_J_Y[˜Ý[ÛˆÚ

^Ü™]\›ŠšœÞÊJ›ÛÝ\˜ØÛ\ÜÓ˜[YN˜Ú]KY›ÛÝ\˜Ú[™[Ž–ÊšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜›ÛÝ\‹Z[›™\˜Ú[™[Ž–ÊšœÞÊJ]˜ØÚ[™[Ž–ÊšœÞÊJXØÛ\ÜÓ˜[YN˜›ÛÝ\‹Xœ˜[™™YŽ˜ÜÝ\Ú[™[Ž–Ø™\™ÙYÜ™ˆÙ[YZ[œØ[X
šœÞ
JÜ[˜ØÚ[™[Ž˜Z[ˆ™^š\šËˆšY[H\œÜZÝ]™[‹˜JW_JK
šœÞÊJØÚ[™[Ž–Ø[˜Xš0é™ÚYÙH°ï™Ù\œ]›Ü›H°ïˆ[ˆ™^š\šÈ™\™ÙYÜ™‹˜
šœÞ
Jœ˜ßJKÙZ[™H[]XÚH°éÙ\œØÚY˜_JW_JK
šœÞ
J]˜ØÛ\ÜÓ˜[YN˜›ÛÝ\‹[[šÜØÚ[™[Ž–ÖØ[\™\ÜÝ[X[\™\ÜÝ[XKØ][œØÚ]˜][œØÚ]˜KØ™YÙ[˜Z[˜ZY\™YÙ[˜KØ[Ù\˜][Û˜[Ù\˜][Ûˆ	ˆ™\ØÚÙ\™[˜KØ˜XÚÙZ\ÙXš[˜XÚÙZ\ÙH	ˆ]Y[[˜KØ˜\œšY\™Yœ™ZZZ]˜\œšY\™Yœ™ZZZ]KØ[\œÝY][™Ø[\œÝ0ï™[ˆÚYH[œØKØYX™\˜0ç™\ˆ[œØWK›X\

ÙKJOOŠšœÞ
JXÚ™YŽ˜Ø
ÙKÚ[™[ŽKJJ_JW_JK
šœÞ
JßJK
šœÞ
J›ßJW_J_Y[˜Ý[ÛˆÚ

^Û]OJ\ÙPÛÛ^
JÙJKVYJ
K]œYÙNÊ\ÙQY™™XÝ
J

OOžÛ]OTJØØ][Û‹š\Ú
NÙI‰œYJKÜ™\XÙNˆLJ_KÝJNÛ]ÜÝ]NœŸOUÊ
KO\‹œ\›Z\ÜÚ[ÛœßßKOTÜË™š[™
OO™KšYOO[ŠKÏ[OOX™^š\šØÝXŽ–Ø™Z]˜YØYZ[™XKš[˜ÛY\ÊŠI‰Š‹™ØÝ[Y[Ë™š[™
OO™KšYOOJOOX™Z]˜YØÝXŽšY
JOË™\ÝšXÝYœ\˜[\Ë™\ÝšXÝ
_™\™ÙYÜ™˜Ü™]\›ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JXØÛ\ÜÓ˜[YN˜ÚÚ\™YŽ˜ÛXZ[˜ÛÛXÚÎ™OOžÙKœ™]™[Y˜][

KØÝ[Y[™Ù][[Y[žRY
XZ[˜
OË™›ØÝ\Ê
KØÝ[Y[™Ù][[Y[žRY
XZ[˜
OËœØÜ›Û[ÕšY]Ê
_KÚ[™[Ž˜[H[š[Üš[™Ù[˜JK
šœÞ
JZÜYÙN›‹XŽX‹\›Z\ÜÚ[ÛœÎ›ÈOOX™\™ÙYÜ™˜	‰ˆTŠ‹ÊI‰œ\˜[\Ëœ™]šY]ÈOOXXÞË‹‹šKØ[]]ÜŽˆL_NšK\ÝšXÝY›ßJK
šœÞ
J]ßJK
šœÞÊJXZ[˜ÚY™OØÝ\Ü[™YXYZ[‹[XZ[˜˜XZ[˜X’[™^‹LKÛ\ÜÓ˜[YN›ÏOOX™\™ÙYÜ™˜	‰œ‹œÙ][™ÜËØ]\›X\šÏØÚ]]Ø]\›X\šØ˜Ý[NžÈ‹KXÜ™\Ý]\›Ž˜\›
‰Ü‹œÙ][™ÜË˜Ü™\ÝœÜ˜ßHŠX‹KXÜ™\Ý[ÜXÚ]HŽ\˜˜XÚÙÜ›Ý[™›ÜXÚ]_KÚ[™[Ž–ÛOOXÛ]ZØ	‰XOOX™YÙYÛ[™ÜÛÜX	‰ˆ]šY	‰ŠšœÞ
J‹ßJKOOXÛ]ZØ	‰XOOX™YÙYÛ[™ÜÛÜX	‰šYÊšœÞ
JÛ‹ßJN›OOX™^š\šØÊšœÞ
JÛßJN–Ø™Z]˜YYÙX™Z]˜YØYZ[™X™\Ø[[™ØÙ\šÜÝ]Kš[˜ÛY\ÊŠOÊšœÞ
JØËßJN–Ø[›Y[[˜™YÚ\ÝšY\™[˜ÛÛØKš[˜ÛY\ÊŠOÊšœÞ
JKßJN›OOX[\œÝY][™ØÊšœÞ
J˜ËÜYÙN˜[\œÝY][™ØJNœ‹œÙ][™ÜË˜\™X\ÖÛ—OËœÝ]\ÏOOX[˜XÝ]™XÊšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[Ú[™[Ž–ÊšœÞ
JXØÚ[™[Ž˜OË›X™[JK
šœÞ
JËØ\™XN›ŸJW_JN›OOXÝ\ÊšœÞ
JÚØØ[]]ÜŽˆHZK˜Ø[]]ÜŸJN›OOX˜XÚšXÚ[˜ÊšœÞ
JÙßJN›OOX™\˜[œÝ[[™Ù[˜ÊšœÞ
JßJN›OOXÝ\š\Û]\ØÊšœÞ
JZßJN›OOXÛ]ZØ	‰XOOX™YÙYÛ[™ÜÛÜXÊšœÞ
JÛ‹ßJN›OOXZY]ÛÜÝ[˜ÊšœÞ
JÝßJN›OOXZ[œØ[ZÙZ]ÊšœÞ
J\ßJN›OOXÜ™Ø[š\Ø][Û˜ÊšœÞ
J[KÛÜ™Ø[š\Ø][ÛœÎˆLJN›OOX™\ž™ZXÚš\ØÊšœÞ
J[KßJN›OOXYX™\˜ÊšœÞ
J[ßJN–ØÛ]ZØ˜XÚÙZ\ÙX[\™\ÜÝ[X][œØÚ]˜™YÙ[˜[Ù\˜][Û˜˜\œšY\™Yœ™ZZZ]Kš[˜ÛY\ÊŠOÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JÛKÜYÙN›ŸJKOOXÛ]ZØ	‰ŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JKßJK
šœÞ
J›Ø\™XN›ŸJK
šœÞ
JÛKßJW_JW_JN›OOXÙ\ØÚXÚX	‰XOOX\ZÙ[ÊšœÞ
JKßJN›OOXÙ\ØÚXÚX	‰XOOXÜXÊšœÞ
JœËßKšY[™^
N˜OÊšœÞ
JØ\™XN›‹Ø[]]ÜŽˆHZK˜Ø[]]ÜŸJNŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[Ú[™[Ž–ÊšœÞ
JXØÚ[™[Ž˜[œÚXÚšXÚÙY[™[˜JK
šœÞ
JXÚ™YŽ˜ÜÝ\Ú[™[Ž˜\ˆÝ\ÙZ]XJW_JW_JKÛ‹œÛÛYJOO™KšYOOX™\™ÙYÜ™˜	‰”Š‹KšY
JI‰ŠšœÞÊJ\ÚYXØÛ\ÜÓ˜[YN˜ÙXÝ[Û˜Ú[™[Ž–ÊšœÞ
J˜ØÚ[™[Ž˜ZÝ]šY\H™^š\šÜÜÙZ][˜JKÛ‹™š[\ŠOO”Š‹KšY
JK›X\
OOŠšœÞ
JØÚ[™[ŽŠšœÞ
JXÚ™YŽ™KšYOOX™\™ÙYÜ™˜ØÜÝ\˜Ø™^š\šËØ
ÙKšYÚ[™[Ž™K]_J_KKšY
JW_JK
šœÞ
JÚßJK
šœÞ
JßJK
šœÞ
JØËßJK
šœÞ
J]KßJW_J_Y[˜Ý[Ûˆ
Ø\™XN™KØ[]]ÜŽJ^Û]VYJ
KTÜË™š[™
OšYOOYJNÜ™]\›ˆVØ[›YYÙ[˜\™˜Z[™ØÙ\ØÚXÚXKš[˜ÛY\ÊJ_\Û[ŠšœÞÊJ]˜ØÛ\ÜÓ˜[YN˜Ú]^™[‹X\™XX™]KX\™XHŽ™KÚ[™[Ž–ÊšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[Ú]^™[‹X\™XKZ[›ØÚ[™[Ž–ÊšœÞ
J]˜ØÛ\ÜÓ˜[YN˜^YXœ›ÝØÚ[™[Ž˜‘RU°áÑHUTÈSH‘V’T’ØJK
šœÞ
JXØÚ[™[Žœ‹›X™[JK
šœÞ
JØÚ[™[Ž•[VÙW_JKOOOXÙ\ØÚXÚX	‰ŠšœÞ
JØÚ[™[Ž˜]XÚ[™Ù\ØÚšYX™[™HÙ\ØÚXÚH™\™Y[˜][Kˆ[\œØÚYYXÚHÚXÚÙZ\Ù[ˆ›ZX™[ˆ[ÈÛÛÚH\šÙ[›˜˜\‹˜JK
šœÞ
JËØ\™XN™_JK	‰ŠšœÞ
JXØÛ\ÜÓ˜[YN˜š[X\žHÛX[™YŽ™OOOXÙ\ØÚXÚXÑYJÙÙ\ØÚXÚX
Ê‹œ]Y\žOØØ
Û‹œ]Y\žN˜
JN˜ÛYZ[™KÛ™]KØ
ÙKÚ[™[Ž˜™Z]˜YÈ\œÝ[[˜JW_JK
šœÞ
JXËØ\™XN™_JKHOOXÙ\ØÚXÚX	‰ŠšœÞ
J›Ø\™XN™_JW_J_Y[˜Ý[ÛˆZ
Üš]˜XÞN™OHL_J^Ü™]\›ŠšœÞÊJÙXÝ[Û˜ØÛ\ÜÓ˜[YN˜ÙXÝ[ÛˆYÙKXÛÛ[˜\œ›ÝØÚ[™[Ž–ÊšœÞ
JXØÚ[™[Ž™OÐÏØ][œØÚ]˜˜][œØÚ]ˆ\ˆÝ]\ØÚ[ˆ\Ý˜\ÜÝ[™Ø˜[\™\ÜÝ[XJKOÊšœÞ
JKßJNŠšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JØÚ[™[Ž˜š]˜]\ˆ™]™ZX™\ˆ\ˆ°ï™Ù\œ]›Ü›H8 '™\™ÙYÜ™ˆÙ[YZ[œØ[x '˜JK
šœÞÊJY™\ÜØØÚ[™[Ž–ØX\šÈ]\œÙ[˜
šœÞ
Jœ˜ßJKœš]‹S[™[X[›‹UÙYÈÈX
šœÞ
Jœ˜ßJKŒLÌH[X\™Ø
šœÞ
Jœ˜ßJK
šœÞ
JXÚ™YŽ˜XZ[Î˜™\™ÙYÜ™‹™Ù[YZ[œØ[PÝ]ÛÚË™XÚ[™[Ž˜™\™ÙYÜ™‹™Ù[YZ[œØ[PÝ]ÛÚË™XJW_JK
šœÞ
JØÚ[™[Ž˜™\˜[ÛÜXÚ°ïˆYH›Ý\›˜[\Ý\ØÚ\™YZÝ[Û™[[ˆ[š[NˆX\šÈ]\œÙ[‹[œØÚšYÚYHØ™[‹˜JW_JK
šœÞ
JXÚ™YŽ˜ÜÝ\Ú[™[Ž˜\ˆÝ\ÙZ]XJW_J_Y[˜Ý[Ûˆ

^Û]OVYJ
NÜ™]\›Š\ÙQY™™XÝ
J

OOžÐÉ‰ŠØÝ[Y[]OX™\™ÙYÜ™ˆÙ[YZ[œØ[H8 $È[˜Xš0é™ÚYÙH°ï™Ù\œ]›Ü›X
_K×JK
šœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÈPÉ‰ŠšœÞ
J\ÚYXØÛ\ÜÓ˜[YN˜YÙ\Ë]\ÝX˜[›™\˜Ú[™[Ž˜Ý]\ØÚH\Ý˜\ÜÝ[™È0­È[›Y[[™Ë™Z]°éÙH[™[\˜ZÝ[Û™[ˆ™[°íYÙ[ˆZ[ˆ˜XÚÙ[™ˆÙZ[™H0í™™™[XÚHœ™ZYØX™H\™›ÛÝ˜JKØ[\™\ÜÝ[X][œØÚ]˜Kš[˜ÛY\ÊKœYÙJOÊšœÞÊJ‘œ˜YÛY[ØÚ[™[Ž–ÊšœÞ
JZÜYÙN™KœYÙ_JK
šœÞ
JXZ[˜ÚY˜XZ[˜X’[™^‹LKÚ[™[ŽŠšœÞ
JZÜš]˜XÞN™KœYÙOOOX][œØÚ]˜J_JK
šœÞ
JÚßJW_JNŠšœÞ
JÚßJW_J_JYK˜Ü™X]T›ÛÝ
JØÝ[Y[™Ù][[Y[žRY
›ÛÝ
JKœ™[™\Š
šœÞ
JXËØÚ[™[ŽŠšœÞ
J‹ØÚ[™[ŽŠšœÞ
JßJ_J_JJNÙ^ÜÝZH\È‹È\È‹È\ÈN