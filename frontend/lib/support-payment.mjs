import {financeSummary} from './support-finance.mjs';
export function supportPaymentResponse(state,now=new Date().toISOString()){
 const summary=financeSummary(state.finance?.real,now);
 if(!summary.paymentEnabled)return new Response('Die Sammlung ist derzeit nicht geöffnet. Bitte kehren Sie zur Unterstützungsseite zurück und laden Sie den aktuellen Finanzstand neu.',{status:409,headers:{'content-type':'text/plain; charset=utf-8','cache-control':'no-store'}});
 // Only the configured single-payment link. No payment record, subscription or success receipt.
 return new Response(null,{status:302,headers:{location:state.finance.real.provider.url,'cache-control':'no-store','referrer-policy':'no-referrer'}});
}
