export function publicAssetUrl(path, baseUrl='/', pageUrl=globalThis.location?.href||'http://localhost/'){
 const base=new URL(baseUrl||'/',pageUrl);
 if(!base.pathname.endsWith('/'))base.pathname+='/';
 return new URL(String(path).replace(/^\/+/,''),base).href;
}
