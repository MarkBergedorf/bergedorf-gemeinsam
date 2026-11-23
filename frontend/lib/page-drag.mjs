export const dragThreshold=6;

const excluded='a,button,input,textarea,select,option,label,summary,details,dialog,iframe,video,audio,canvas,img,svg,[contenteditable]:not([contenteditable="false"]),[draggable="true"],[role="button"],[role="link"],[role="menuitem"],[role="textbox"],[role="slider"],[role="dialog"],[data-no-page-drag],.leaflet-container,.private-map';

const textElements='p,h1,h2,h3,h4,h5,h6,li,dt,dd,pre,code,span,small,strong,b,em,blockquote,table';

function pointHitsText(x,y,env){
 const doc=env.document;
 let caret;
 try{caret=doc.caretPositionFromPoint?.(x,y)}catch{}
 if(caret?.offsetNode?.nodeType===3){
  const node=caret.offsetNode,offset=caret.offset||0,length=node.textContent?.length||0;
  const range=doc.createRange?.();
  if(range){
   for(const index of [offset-1,offset]){
    if(index<0||index>=length)continue;
    try{
     range.setStart(node,index);range.setEnd(node,index+1);
     for(const rect of range.getClientRects())if(x>=rect.left-1.5&&x<=rect.right+1.5&&y>=rect.top-1.5&&y<=rect.bottom+1.5)return true;
    }catch{}
   }
  }
  return false;
 }
 let legacy;
 try{legacy=doc.caretRangeFromPoint?.(x,y)}catch{}
 if(legacy?.startContainer?.nodeType===3){
  const node=legacy.startContainer,offset=legacy.startOffset||0,length=node.textContent?.length||0,range=doc.createRange?.();
  if(range)for(const index of [offset-1,offset]){
   if(index<0||index>=length)continue;
   try{range.setStart(node,index);range.setEnd(node,index+1);for(const rect of range.getClientRects())if(x>=rect.left-1.5&&x<=rect.right+1.5&&y>=rect.top-1.5&&y<=rect.bottom+1.5)return true}catch{}
  }
  return false;
 }
 // Older engines without caret hit-testing only allow starts on non-text elements.
 return Boolean(doc.caretPositionFromPoint||doc.caretRangeFromPoint)?false:Boolean(env.target?.closest?.(textElements));
}

export function pageDragAllowed(target,env,x,y){
 if(!target?.closest||target.closest(excluded)||env.getSelection?.()?.isCollapsed===false)return false;
 if(Number.isFinite(x)&&Number.isFinite(y)&&pointHitsText(x,y,env))return false;
 for(let node=target;node&&node!==env.document.body&&node!==env.document.documentElement;node=node.parentElement){
  const style=env.getComputedStyle(node);
  if((/(auto|scroll|overlay)/.test(style.overflowY)&&node.scrollHeight>node.clientHeight)||(/(auto|scroll|overlay)/.test(style.overflowX)&&node.scrollWidth>node.clientWidth))return false;
 }
 return true;
}

// Pointer events cover mouse and pen uniformly; this controller deliberately opts into mouse only.
// Capture-phase down handling prevents nested handlers and native selection from winning the race.
export function installPageDrag(env){
 const {document}=env,root=document.documentElement;let down=null,suppressUntil=0,suppressTarget=null;const bindings=[];
 const on=(type,fn,options)=>{env.addEventListener(type,fn,options);bindings.push([type,fn,options])};
 function releaseCapture(){try{if(down?.captured&&down.target.hasPointerCapture?.(down.id))down.target.releasePointerCapture(down.id)}catch{}}
 function stop(){if(down?.active){suppressUntil=env.performance.now()+500;suppressTarget=down.target}releaseCapture();down=null;root.classList.remove('page-drag-active','page-drag-ready')}
 on('pointerdown',e=>{
  if(e.pointerType!=='mouse'||e.button!==0||e.isPrimary===false||!pageDragAllowed(e.target,env,e.clientX,e.clientY))return;
  down={id:e.pointerId,x:e.clientX,y:e.clientY,scroll:env.scrollY,target:e.target,active:false,captured:false};
  e.preventDefault();
  try{e.target.setPointerCapture?.(e.pointerId);down.captured=Boolean(e.target.setPointerCapture)}catch{}
 },{capture:true,passive:false});
 on('pointermove',e=>{
  if(e.pointerType!=='mouse')return;
  if(!down){root.classList.toggle('page-drag-ready',pageDragAllowed(e.target,env,e.clientX,e.clientY));return}
  if(e.pointerId!==down.id)return;
  if(e.buttons!==1){stop();return}
  const dy=e.clientY-down.y,dx=e.clientX-down.x;
  if(!down.active){if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>=dragThreshold){stop();return}if(Math.abs(dy)<dragThreshold)return;down.active=true;root.classList.add('page-drag-active');env.getSelection?.()?.removeAllRanges?.()}
  e.preventDefault();env.scrollTo({top:down.scroll-dy,behavior:'instant'});
 },{capture:true,passive:false});
 for(const event of ['pointerup','pointercancel','lostpointercapture','blur'])on(event,stop,true);
 on('pointerout',e=>{if(e.relatedTarget===null)stop()},true);on('keydown',e=>{if(e.key==='Escape')stop()},true);
 const visibility=()=>{if(document.hidden)stop()};document.addEventListener('visibilitychange',visibility);
 on('click',e=>{if(e.detail>0){if(suppressTarget&&(e.composedPath?.().includes(suppressTarget)||e.target===suppressTarget)&&env.performance.now()<suppressUntil){e.preventDefault();e.stopImmediatePropagation()}suppressUntil=0;suppressTarget=null}},true);
 return()=>{stop();for(const args of bindings)env.removeEventListener(...args);document.removeEventListener('visibilitychange',visibility)};
}
