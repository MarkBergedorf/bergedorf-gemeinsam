'use client';
import {useEffect,useId,useRef,useState} from 'react';
import {Menu,X} from 'lucide-react';
import {sections} from '../lib/data';
import {boroughById} from '../lib/boroughs.mjs';
import {historyCreateHref} from '../lib/history-navigation.mjs';
import {newsRoute} from '../lib/home-news.mjs';
import {navigationTabLayout} from '../lib/navigation-tab-layout.mjs';
import {MobileAccessStatus} from './mobile-access-status';
import {navigate} from './navigation';
import Crest from '../components/crest';

export function SiteHeader({page,permissions={},districtId='bergedorf'}:{page:string,tab?:string,permissions?:any,districtId?:string}){
 const [mobile,setMobile]=useState(false),[layout,setLayout]=useState<any>(null),navigationId=useId(),menuButton=useRef<HTMLButtonElement>(null),navList=useRef<HTMLDivElement>(null);
 const districtNavigation=districtId==='bergedorf';
 const items:any[]=[
  ...(districtNavigation?sections.filter(s=>s.id!=='ueber'&&s.short!=='Über uns').map(s=>({id:s.id,label:s.short,target:s.id})):[]),
  ...(districtNavigation?[
   {id:'nachrichten',label:'Nachrichten aus Bergedorf',target:newsRoute},
   {id:'veranstaltungen',label:'Aktuelle Veranstaltungen in Bergedorf',target:'#veranstaltungen'},
   {id:'einsamkeit',label:'Einsamkeit in Bergedorf',target:'#einsamkeit'},
   {id:'mietkosten',label:'Mietkosten & Grundsicherung',target:'#mietkosten'},
   {id:'tourismus',label:'Bergedorf entdecken (Gäste & Tourismus)',target:'#tourismus'}
  ]:[])
 ];
 const itemKey=items.map(item=>item.id).join('|');
 useEffect(()=>{
  const root=navList.current;
  if(!root||!items.length)return;
  const canvas=document.createElement('canvas'),context=canvas.getContext('2d');
  if(!context)return;
  const measure=()=>{
   const css=getComputedStyle(root),width=root.clientWidth-parseFloat(css.paddingLeft||'0')-parseFloat(css.paddingRight||'0');
   context.font='600 12px Arial, Helvetica, sans-serif';
   const widths=items.map(item=>context.measureText(item.label).width+item.label.length*.12);
   setLayout(navigationTabLayout(widths,width));
  };
  measure();
  const observer=new ResizeObserver(measure);observer.observe(root);
  return()=>observer.disconnect();
 },[itemKey]);
 function go(target:string){navigate(target);setMobile(false)}
 return <header className={'site-header'+(!layout?' navigation-compact':'')}>
  <div className="header-inner">
   <a className="brand" href={districtId==='bergedorf'?'#start':'#bezirk/'+districtId} aria-label={(boroughById(districtId)?.name||'Bergedorf')+' gemeinsam – Unabhängige Bürgerplattform'}>{districtId==='bergedorf'&&<Crest/>}<span>{boroughById(districtId)?.name||'Bergedorf'} <strong>gemeinsam</strong><small>Unabhängige Bürgerplattform</small></span></a>
   <span className="private-preview">Statische Testfassung</span>
   <div className="header-actions">
    <a href={districtId==='bergedorf'?'#beitraege':'#bezirk/'+districtId+'/anliegen'}>{districtId==='bergedorf'?'Alle Beiträge':'Beiträge im Bezirk'}</a>
    <a className="desktop-signin-link" href="#anmelden">Anmeldung (noch nicht verfügbar)</a>
    {permissions.canAuthor&&<><a href="#meine">Meine Beiträge &amp; Entwürfe</a><a className="primary small" href={page==='geschichte'?historyCreateHref(typeof window==='undefined'?'#geschichte':location.hash):'#meine/neu/anliegen'+(districtId==='bergedorf'?'':'?district='+districtId)}>Beitrag erstellen</a></>}
    {permissions.canAdmin&&<a className="admin-link" href="#verwaltung">Administration</a>}
    <button ref={menuButton} className="menu-toggle" aria-label={mobile?'Menü schließen':'Menü öffnen'} aria-controls={navigationId} aria-expanded={mobile} onClick={()=>setMobile(!mobile)}>{mobile?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}<span>Menü</span></button>
    <MobileAccessStatus permissions={permissions}/>
   </div>
  </div>
  <nav id={navigationId} aria-label="Hauptnavigation" className={(mobile?'open ':'')+(!layout?'compact':'')}  onKeyDown={e=>{if(e.key==='Escape'&&mobile){setMobile(false);menuButton.current?.focus()}}}>
   <div ref={navList} className={'primary-nav-list'+(layout?' is-ready':'')} style={layout?{height:layout.height+'px'}:undefined}>
    {items.map((item,index)=>{
     const slot=layout?.slotWidths[index]??150,base=layout?.baseWidths[index]??175;
     return <span className="nav-tab-slot" key={item.id} style={{width:slot+'px',flexBasis:slot+'px',height:(layout?.height??150)+'px'}}><button style={layout?{width:base+'px',height:layout.tabHeight+'px',fontSize:layout.fontSize+'px'}:undefined} aria-current={page===item.id?'page':undefined} onClick={()=>go(item.target)}>{item.label}</button></span>;
    })}
   </div>
  </nav>
 </header>;
}
