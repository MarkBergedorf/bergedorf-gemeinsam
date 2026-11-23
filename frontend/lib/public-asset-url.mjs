export function publicAssetUrl(path, baseUrl='/', pageUrl=globalThis.location?.href||'http://localhost/'){
 const base=new URL(baseUrl||'/',pageUrl);
 return new URL(String(path).replace(/^\/+/,''),base).href;
}
