'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GeneratorPage() {
  const [status, setStatus] = useState('Idle');
  return <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]"><Card><h1 className="text-2xl font-semibold">AI Environment Generator</h1><div className="mt-4 grid gap-3 md:grid-cols-2"><input placeholder="Project name"/><select><option>Genre</option></select><input placeholder="Visual style"/><input placeholder="Lighting mood"/><input placeholder="Camera use case"/><select><option>Output type</option></select><input placeholder="Broadcast needs"/><select><option>Unreal version</option></select></div><textarea className="mt-3" rows={4} placeholder="Extra notes / prompt"/><div className="mt-4 flex gap-2"><Button onClick={()=>setStatus('Generating')}>Generate environment</Button><Button variant="outline">Save preset</Button></div><div className="mt-4 flex flex-wrap gap-2">{['Esports arena with hero product stage','Financial newsroom with modular overlays','Luxury auto reveal with reflective floor'].map((p)=><Badge key={p}>{p}</Badge>)}</div></Card><Card><h2 className="font-semibold">Generation status</h2><p className="mt-2 text-blue-300">{status}</p><div className="mt-4 space-y-2 text-sm text-slate-300"><p>1. Prompt parsed</p><p>2. Layout + camera blocks</p><p>3. Lighting + materials</p><p>4. Broadcast layer injection</p></div><div className="mt-4 h-56 rounded-lg border border-dashed border-white/20 text-center text-slate-500 grid place-items-center">Result preview panel</div></Card></div>;
}
