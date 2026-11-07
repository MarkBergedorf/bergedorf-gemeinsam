// Universal Maps URL. No SDK, embed, API key, geolocation or network request.
export function satelliteMapUrl(view){
 const valid=view&&Number.isFinite(view.lat)&&Number.isFinite(view.lon)&&Number.isFinite(view.zoom)&&Math.abs(view.lat)<=90&&Math.abs(view.lon)<=180;
 const p=valid?view:{lat:53.488,lon:10.212,zoom:14};
 const query=new URLSearchParams({api:'1',map_action:'map',center:p.lat.toFixed(7)+','+p.lon.toFixed(7),zoom:String(Math.max(0,Math.min(21,Math.round(p.zoom)))),basemap:'satellite'});
 return 'https://www.google.com/maps/@?'+query.toString();
}
