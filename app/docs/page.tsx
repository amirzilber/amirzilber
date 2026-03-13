import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { docSections } from '@/lib/data/mock';
import { Card } from '@/components/ui/card';

export default function DocsPage() {
  return <div><Navbar/><main className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-[260px_1fr]"><aside className="rounded-2xl border border-white/10 p-4">{docSections.map((s)=><div key={s.title} className="mb-4"><p className="font-medium">{s.title}</p><ul className="mt-1 text-sm text-slate-400">{s.items.map((i)=><li key={i}>{i}</li>)}</ul></div>)}</aside><section><h1 className="text-3xl font-semibold">Documentation</h1><Card className="mt-4"><h2 className="font-semibold">Getting started with Envox</h2><p className="mt-2 text-slate-300">Provision your first workspace, connect output tools, and publish your first broadcast-ready environment.</p></Card></section></main><Footer/></div>;
}
