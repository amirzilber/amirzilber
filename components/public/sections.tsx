'use client';

import { motion } from 'framer-motion';
import { environments, pricingTiers } from '@/lib/data/mock';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-2 text-sm text-blue-300">Broadcast-first virtual production platform</p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Go from concept to LED-ready environment in hours.</h1>
        <p className="mt-4 text-slate-300">Envox combines AI generation, a curated marketplace, and live broadcast tooling to ship production-ready virtual sets without Unreal specialists.</p>
        <div className="mt-6 flex gap-3"><Button>Start building</Button><Button variant="outline">Watch product tour</Button></div>
      </motion.div>
      <Card className="h-72 bg-gradient-to-br from-blue-900/40 to-slate-900">
        <p className="text-sm text-slate-300">LED Preview Monitor</p>
        <div className="mt-4 flex h-56 items-center justify-center rounded-xl border border-dashed border-white/20 text-slate-500">Cinematic environment preview placeholder</div>
      </Card>
    </section>
  );
}

export function FeatureGrid() {
  const blocks = [
    ['AI Environment Generator', 'Transform prompts into Unreal-ready scenes with camera-safe compositions and lighting presets.'],
    ['Marketplace', 'Browse production-tested environments by genre, use case, and technical fit.'],
    ['Broadcast-Ready Layer', 'Enable NDI, overlays, lower thirds, and OBS/vMix/Singular compatibility out of the box.']
  ];
  return <section className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">{blocks.map(([t,d]) => <Card key={t}><h3 className="font-semibold text-white">{t}</h3><p className="mt-2 text-sm text-slate-300">{d}</p></Card>)}</section>;
}

export function HowItWorks() {
  return <section className="mx-auto max-w-6xl px-6 py-16"><h2 className="text-2xl font-semibold">How Envox works</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{['Describe your show format and visual direction.','Generate or select a validated environment package.','Push to broadcast with overlays and output checks.'].map((s,i)=><Card key={s}><Badge>Step {i+1}</Badge><p className="mt-3 text-slate-200">{s}</p></Card>)}</div></section>;
}

export function SocialProof() {
  return <section className="mx-auto max-w-6xl px-6 py-8"><p className="text-center text-sm text-slate-400">Trusted by forward-thinking stream studios, ad agencies, and event producers</p><div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">{['Orbit Studios','PixelPeak Media','Northline Live','Arcade Network','MotionFrame'].map((x)=><Card key={x} className="py-4 text-center text-sm text-slate-300">{x}</Card>)}</div></section>;
}

export function PricingPreview() {
  return <section className="mx-auto max-w-6xl px-6 py-12"><h2 className="text-2xl font-semibold">Simple tiers for every production stage</h2><div className="mt-4 grid gap-4 md:grid-cols-3">{pricingTiers.map((tier)=><Card key={tier.name} className={tier.highlighted ? 'shadow-glow':''}><p className="text-sm text-blue-200">{tier.name}</p><p className="mt-2 text-3xl font-semibold">{tier.price}<span className="text-sm text-slate-400">/mo</span></p><p className="mt-2 text-sm text-slate-300">{tier.blurb}</p></Card>)}</div></section>;
}

export function MarketplaceGrid() {
  return <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{environments.map((env)=><Card key={env.id}><div className="h-28 rounded-lg bg-slate-800"/><h3 className="mt-3 font-medium">{env.title}</h3><p className="text-sm text-slate-400">{env.genre} • {env.useCase}</p><div className="mt-2 flex flex-wrap gap-2">{env.compat.map((c)=><Badge key={c}>{c}</Badge>)}</div><p className="mt-3 text-sm text-blue-300">{env.priceLabel}</p></Card>)}</div>;
}
