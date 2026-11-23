import test from 'node:test';
import assert from 'node:assert/strict';
import {installPageDrag,pageDragAllowed} from '../lib/page-drag.mjs';

function harness(){
 const listeners=new Map(),classes=new Set(),scrolls=[];let cleared=0,prevented=0;
 const body={parentElement:null,childNodes:[]},root={parentElement:body,childNodes:[],classList:{add:x=>classes.add(x),remove:x=>classes.delete(x),toggle:(x,on)=>on?classes.add(x):classes.delete(x)}};
 const target={parentElement:body,childNodes:[],closest:()=>null,setPointerCapture(){},hasPointerCapture:()=>false};
 const document={body,documentElement:root,hidden:false,addEventListener(){},removeEventListener(){}};
 const env={document,scrollY:100,performance:{now:()=>1000},addEventListener:(n,f)=>listeners.set(n,f),removeEventListener:n=>listeners.delete(n),getComputedStyle:()=>({overflowY:'visible',overflowX:'visible'}),getSelection:()=>({isCollapsed:true,removeAllRanges:()=>cleared++}),scrollTo:o=>scrolls.push(o)};
 return {listeners,classes,scrolls,target,env,document,root,cleared:()=>cleared,prevented:()=>prevented,prevent:()=>prevented++};
}

test('freigegebene Hintergrundfläche verhindert Textauswahl und zieht die Seite erst ab der Bewegungsschwelle',()=>{
 const h=harness(),dispose=installPageDrag(h.env);
 h.listeners.get('pointerdown')({pointerType:'mouse',button:0,isPrimary:true,pointerId:7,clientX:40,clientY:60,target:h.target,preventDefault:h.prevent});
 assert.equal(h.prevented(),1,'native selection must not begin on an eligible drag surface');
 h.listeners.get('pointermove')({pointerType:'mouse',pointerId:7,buttons:1,clientX:41,clientY:62,target:h.target,preventDefault:h.prevent});
 assert.equal(h.scrolls.length,0,'movement below the threshold remains a click');
 h.listeners.get('pointermove')({pointerType:'mouse',pointerId:7,buttons:1,clientX:41,clientY:72,target:h.target,preventDefault:h.prevent});
 assert.equal(h.scrolls.at(-1).top,88);
 assert.equal(h.cleared(),1,'any incidental browser selection is cleared when the drag actually starts');
 assert.ok(h.classes.has('page-drag-active'));
 h.listeners.get('pointerup')({});assert.ok(!h.classes.has('page-drag-active'));
 dispose();
});

test('ordinary text and an existing text selection are excluded from page dragging',()=>{
 const h=harness();
 h.target.closest=selector=>selector.includes('p,')?h.target:null;
 assert.equal(pageDragAllowed(h.target,h.env),false);
 h.target.closest=()=>null;h.env.getSelection=()=>({isCollapsed:false});
 assert.equal(pageDragAllowed(h.target,h.env),false);
});
