'use client';
import {useEffect,useId,useRef,useState} from 'react';
import {Menu,X} from 'lucide-react';
import {sections} from '../lib/data';
import {boroughById} from '../lib/boroughs.mjs';
import {historyCreateHref} from '../lib/history-navigation.mjs';
import {newsRoute} from '../lib/home-news.mjs';
import {navigationTabLayout} from '../lib/navigation-tab-layout.mjs';
import {navigate} from './navigation';
import {useFirebaseAuth} from './firebase-auth';
import Crest from '../components/crest';

export function SiteHeader({page,permissions={},districtId='bergedorf'}:{page:string,tab?:string,permissions?:any,districtId?:string}){
 const account=useFirebaseAuth();
 const [mobile,setMobile]=useState(false),[layout,setLayout]=useState<any>(undefined),navigationId=useId(),menuButton=useRef<HTMLButtonElement>(null),headerRoot=useRef<HTMLElement>(null),navList=useRef<HTMLDivElement>(null);
 const districtNavigation=districtId==='bergedorf';
 const items:any[]=[
  ...(districtNavigation?sections.filter(s=>s.id!=='ueber'&&s.short!=='Über uns').map(s=>({id:s.id,label:s.id==='start'?'Startseite':s.short,lines:s.id==='anliegen'?['Anliegen &','Verbesserungen']:s.id==='geschichte'?['Geschichte und','Erinnerungen']:s.id==='organisation'?['Organisationen','stellen sich vor']:undefined,target:s.id})):[]),
  ...(districtNavigation?[
   {id:'nachrichten',label:'Nachrichten aus Bergedorf',lines:['Nachrichten aus','Bergedorf'],target:newsRoute},
   {id:'veranstaltungen',label:'Aktuelle Veranstaltungen',lines:['Aktuelle','Veranstaltungen'],target:'#veranstaltungen'},
   {id:'einsamkeit',label:'Einsamkeit in Bergedorf',lines:['Einsamkeit in','Bergedorf'],target:'#einsamkeit'},
   {id:'mietkosten',label:'Mietkosten bei Grundsicherung',lines:['Mietkosten bei','Grundsicherung'],target:'#mietkosten'},
   {id:'tourismus',label:'Gäste und Tourismus',lines:['Gäste und','Tourismus'],target:'#tourismus'}
  ]:[])
 ];
 const itemKey=items.map(item=>item.id).join('|');
 const menuToggleLabel=mobile?'Themenübersicht schließen':`Alle ${items.length} Themen öffnen`;
 useEffect(()=>{
  const root=navList.current,header=headerRoot.current;
  if(!root||!header)return;
  if(!items.length){setLayout(null);return;}
  const canvas=document.createElement('canvas'),context=canvas.getContext('2d');
  if(!context){setLayout(null);return;}
  const measure=()=>{
   const css=getComputedStyle(root),width=header.clientWidth-parseFloat(css.paddingLeft||'0')-parseFloat(css.paddingRight||'0');
   context.font='600 14px Arial, Helvetica, sans-serif';
   const widths=items.map(item=>Math.max(...(item.lines||[item.label]).map((line:string)=>context.measureText(line).width))+14);
   const next=navigationTabLayout(widths,width);
   setLayout(previous=>previous&&next&&previous.fontSize===next.fontSize&&previous.totalWidth===next.totalWidth&&previous.height===next.height?previous:previous===null&&next===null?previous:next);
  };
  let frame=0,disposed=false;const retries:number[]=[];
  const schedule=()=>{
   if(frame)cancelAnimationFrame(frame);
   frame=requestAnimationFrame(()=>{frame=requestAnimationFrame(()=>{frame=0;if(!disposed)measure()})});
   retries.forEach(window.clearTimeout);retries.length=0;
   for(const delay of [140,320,650])retries.push(window.setTimeout(()=>{if(!disposed)measure()},delay));
  };
  measure();
  const observer=new ResizeObserver(schedule);observer.observe(header);observer.observe(root);observer.observe(document.documentElement);
  window.addEventListener('resize',schedule);window.addEventListener('orientationchange',schedule);window.visualViewport?.addEventListener('resize',schedule);
  const fontsReady=()=>{if(!disposed)schedule()};document.fonts?.ready.then(fontsReady);
  return()=>{disposed=true;observer.disconnect();retries.forEach(window.clearTimeout);if(frame)cancelAnimationFrame(frame);window.removeEventListener('resize',schedule);window.removeEventListener('orientationchange',schedule);window.visualViewport?.removeEventListener('resize',schedule)};
 },[itemKey]);
 useEffect(()=>{if(layout!==undefined&&layout!==null&&mobile)setMobile(false)},[layout,mobile]);
 function go(target:string){navigate(target);setMobile(false)}
 return <header ref={headerRoot} className={'site-header'+(layout===undefined?' navigation-measuring':layout===null?' navigation-compact':'')}>
  <div className="header-inner">
   <a className="brand" href={districtId==='bergedorf'?'#start':'#bezirk/'+districtId} aria-label={(boroughById(districtId)?.name||'Bergedorf')+' gemeinsam – Unabhängige Bürgerplattform'}>{districtId==='bergedorf'&&<Crest/>}<span>{boroughById(districtId)?.name||'Bergedorf'} <strong>gemeinsam</strong><small>Unabhängige Bürgerplattform</small></span></a>
   <div className="header-actions">
    <a href={districtId==='bergedorf'?'#beitraege':'#bezirk/'+districtId+'/anliegen'}>{districtId==='bergedorf'?'Alle Beiträge':'Beiträge im Bezirk'}</a>
    {account.user?<><a className="desktop-signin-link" href="#konto">Mein Konto</a><button className="header-signout" onClick={()=>account.signOut()}>Abmelden</button></>:<><a className="desktop-signin-link" href="#anmelden">Anmelden</a><a className="desktop-signin-link" href="#registrieren">Registrieren</a></>}
    {permissions.canAuthor&&<><a href="#meine">Meine Beiträge &amp; Entwürfe</a><a className="primary small" href={page==='geschichte'?historyCreateHref(typeof window==='undefined'?'#geschichte':location.hash):'#meine/neu/anliegen'+(districtId==='bergedorf'?'':'?district='+districtId)}>Beitrag erstellen</a></>}
    {permissions.canAdmin&&<a className="admin-link" href="#verwaltung">Administration</a>}
    <button ref={menuButton} className="menu-toggle" aria-label={menuToggleLabel} aria-controls={navigationId} aria-expanded={mobile} onClick={()=>setMobile(!mobile)} onKeyDown={e=>{if(e.key==='Escape'&&mobile){setMobile(false);menuButton.current?.focus()}}}>{mobile?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}<span>{menuToggleLabel}</span></button>
   </div>
  </div>
  <nav id={navigationId} aria-label="Hauptnavigation" className={mobile?'open':''}  onKeyDown={e=>{if(e.key==='Escape'&&mobile){setMobile(false);menuButton.current?.focus()}}}>
   <div ref={navList} className={'primary-nav-list'+(layout?' is-ready':'')} style={layout?{height:layout.height+'px'}:undefined}>
    {items.map((item,index)=>{
     const slot=layout?.slotWidths[index]??150,base=layout?.baseWidths[index]??175;
     return <span className="nav-tab-slot" key={item.id} style={{width:slot+'px',flexBasis:slot+'px',height:(layout?.height??150)+'px'}}><button aria-label={item.label} style={layout?{width:base+'px',height:layout.tabHeight+'px',fontSize:layout.fontSize+'px'}:undefined} aria-current={page===item.id?'page':undefined} onClick={()=>go(item.target)}><span className="nav-tab-label" aria-hidden="true">{(item.lines||[item.label]).map((line:string,lineIndex:number)=><span key={lineIndex}>{line}</span>)}</span></button></span>;
    })}
    <div className="mobile-auth-links">{account.user?<><a href="#konto">Mein Konto</a><button onClick={()=>account.signOut()}>Abmelden</button></>:<><a href="#anmelden">Anmelden</a><a href="#registrieren">Registrieren</a></>}</div>
   </div>
  </nav>
 </header>;
}
