'use client';
import {useWorkspace} from '../app/workspace';
import {branding} from '../lib/branding';
export default function Crest(){const ws=useWorkspace();const c=ws?.state.settings.crest||branding.crest;return <img src={c.src} alt={c.alt}/>}
