'use client';
import {useLayoutEffect} from 'react';
import {useRoute} from './navigation';
import {encounterNavigationTarget,encounterOverviewHref,encounterReturnLabel} from '../lib/encounter-navigation.mjs';
import './encounter-supplements.css';
export function EncounterReturn(){return <p className="encounter-return"><a href={encounterOverviewHref}>{encounterReturnLabel}</a></p>}
export function EncounterNavigationFocus(){const route=useRoute();useLayoutEffect(()=>{
 const hash=location.hash,selector=encounterNavigationTarget(hash);if(!selector)return;
 let frame=0,cancelled=false;
 // Wait until route subscribers have committed and their focus effects have run.
 frame=requestAnimationFrame(()=>{frame=requestAnimationFrame(()=>{
  if(cancelled||location.hash!==hash)return;
  const target=document.querySelector<HTMLElement>(selector)||document.querySelector<HTMLElement>('#encounter-supplement-heading');
  if(!target)return;
  target.tabIndex=-1;target.focus({preventScroll:true});target.scrollIntoView({block:'start',behavior:'instant'});
 })});return()=>{cancelled=true;cancelAnimationFrame(frame)};
},[route]);return null}
