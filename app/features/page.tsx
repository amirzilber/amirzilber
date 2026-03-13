import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Card } from '@/components/ui/card';

export default function FeaturesPage() {
  const items = [
    ['AI Environment Generation', 'Prompt-driven creation of camera-safe, Unreal-ready environments with lighting and scene logic.'],
    ['Marketplace Environments', 'Production-tested sets with metadata across genre, LED specs, and use-case fit.'],
    ['Broadcast-Ready Workflows', 'Built-in NDI output, chroma, overlays, and lower-thirds for immediate live operation.'],
    ['Compatibility Layer', 'Works with OBS, vMix, NDI routing, and Singular.live graphics from day one.'],
    ['Why Envox is Faster', 'Weeks of technical setup collapse to hours using a closed, validated production pipeline.']
  ];
  return <div><Navbar/><main className="mx-auto max-w-6xl px-6 py-14"><h1 className="text-4xl font-semibold">Product features built for live teams</h1><div className="mt-8 grid gap-4 md:grid-cols-2">{items.map(([t,d])=><Card key={t}><h2 className="font-semibold">{t}</h2><p className="mt-2 text-slate-300">{d}</p></Card>)}</div></main><Footer/></div>;
}
