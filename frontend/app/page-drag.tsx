'use client';
import {useEffect,useState} from 'react';
// @ts-ignore shared pointer controller
import {installPageDrag} from '../lib/page-drag.mjs';
export function PageDragControl(){const [enabled,setEnabled]=useState(true);useEffect(()=>{try{setEnabled(localStorage.getItem('bg-page-drag')!=='off')}catch{}},[]);useEffect(()=>enabled?installPageDrag(window):undefined,[enabled]);return <div className="page-drag-setting"><label className="check"><input type="checkbox" checked={enabled} onChange={e=>{setEnabled(e.target.checked);try{localStorage.setItem('bg-page-drag',e.target.checked?'on':'off')}catch{}}}/>Seite durch Ziehen bewegen</label><small>Auf freien Hintergrundflächen die linke Maustaste halten und nach oben oder unten ziehen. Texte und Bedienelemente bleiben ausgenommen.</small></div>}
