// Every style, metadata, sprite and tile request belongs to one live layer.
export function createHistoryRequestScope(){const controller=new AbortController();return {request(url){return new Request(url,{signal:controller.signal})},close(){controller.abort()},get closed(){return controller.signal.aborted}}}
