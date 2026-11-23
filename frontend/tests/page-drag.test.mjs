import test from 'node:test';
import assert from 'node:assert/strict';
import {installPageDrag,pageDragAllowed} from '../lib/page-drag.mjs';

function harness(){
 const listeners=new Map(),classes=new Set(),scrolls=[];let cleared=0,prevented=0,captured=0,released=0;
 const body={parentElement:null,childNodes:[]},root={parentElement:body,childNodes:[],classList:{add:x=>classes.add(x),remove:x=>classes.delete(x),toggle:(x,on)=>on?classes.add(x):classes.delete(x)}};
 const target={parentElement:body,childNodes:[],closest:()=>null,setPointerCapture(){captured++},hasPointerCapture:()=>captured>released,releasePointerCapture(){released++}};
 const textNode={nodeType:3,textContent:'A nearby heading'};
 const document={body,documentElement:root,hidden:false,addEventListener(){},removeEventListener(){},caretPositionFromPoint:(x)=>({offsetNode:textNode,offset:x<100?0:5}),createRange(){let start=0;return {setStart(_n,x){start=x},setEnd(){},getClientRects(){return start===0?[{left:10,right:50,top:10,bottom:30}]:[]}}}};
 const env={document,scrollY:100,performance:{now:()=>1000},addEventListener:(n,f,o)=>listeners.set(n,{fn:f,options:o}),removeEventListener:n=>listeners.delete(n),getComputedStyle:()=>({overflowY:'visible',overflowX:'visible'}),getSelection:()=>({isCollapsed:true,removeAllRanges:()=>cleared++}),scrollTo:o=>scrolls.push(o)};
 const prevent=()=>prevented++;
 return {listeners,classes,scrolls,target,env,document,root,textNode,cleared:()=>cleared,prevented:()=>prevented,prevent,captured:()=>captured,released:()=>released};
}

test('free pixel space beside text is draggable while an actual glyph start is reserved for selection',()=>{
 const h=harness();
 assert.equal(pageDragAllowed(h.target,h.env,70,20),true,'outside the glyph box, a text-containing region stays draggable');
 assert.equal(pageDragAllowed(h.target,h.env,20,20),false,'a point over the actual glyph stays selectable');
});

test('eligible pointerdown prevents selection in capture phase and vertical drags keep scrolling across text',()=>{
 const h=harness(),dispose=installPageDrag(h.env);
 h.listeners.get('pointerdown').fn({pointerType:'mouse',button:0,isPrimary:true,pointerId:7,clientX:70,clientY:60,target:h.target,preventDefault:h.prevent});
 assert.equal(h.prevented(),1,'native selection is prevented before nested handlers run');
 assert.equal(h.listeners.get('pointerdown').options.capture,true);
 assert.equal(h.captured(),1,'the original surface captures the pointer from pointerdown');
 h.listeners.get('pointermove').fn({pointerType:'mouse',pointerId:7,buttons:1,clientX:71,clientY:62,target:h.target,preventDefault:h.prevent});
 assert.equal(h.scrolls.length,0,'movement below the threshold remains a click');
 h.listeners.get('pointermove').fn({pointerType:'mouse',pointerId:7,buttons:1,clientX:71,clientY:72,target:h.textNode,preventDefault:h.prevent});
 assert.equal(h.scrolls.at(-1).top,88,'the drag continues after crossing adjacent text');
 assert.equal(h.cleared(),1,'any incidental browser selection is cleared when dragging starts');
 assert.ok(h.classes.has('page-drag-active'));
 h.listeners.get('pointerup').fn({});assert.ok(!h.classes.has('page-drag-active'));assert.equal(h.released(),1);
 dispose();
});

test('normal text selection, existing selections, controls, maps, and scrollable areas are excluded',()=>{
 const h=harness();
 assert.equal(pageDragAllowed(h.target,h.env,20,20),false,'text glyphs remain available to normal native selection');
 h.env.getSelection=()=>({isCollapsed:false});assert.equal(pageDragAllowed(h.target,h.env,70,20),false);
 h.env.getSelection=()=>({isCollapsed:true});h.target.closest=()=>h.target;assert.equal(pageDragAllowed(h.target,h.env,70,20),false,'interactive targets are excluded');
 h.target.closest=()=>null;h.target.parentElement={parentElement:h.document.body,scrollHeight:200,clientHeight:100,scrollWidth:100,clientWidth:100};
 h.env.getComputedStyle=node=>node===h.target.parentElement?{overflowY:'auto',overflowX:'visible'}:{overflowY:'visible',overflowX:'visible'};
 assert.equal(pageDragAllowed(h.target,h.env,70,20),false,'nested scrolling containers are excluded');
});
