import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { pricingTiers } from '@/lib/data/mock';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  return <div><Navbar/><main className="mx-auto max-w-6xl px-6 py-14"><h1 className="text-4xl font-semibold">Pricing for creators to studios</h1><p className="mt-3 text-slate-300">Marketplace purchases include a commission fee. Enterprise plans support custom procurement.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{pricingTiers.map((tier)=><Card key={tier.name}><h2 className="text-xl font-semibold">{tier.name}</h2><p className="mt-2 text-3xl">{tier.price}<span className="text-sm text-slate-400">/month</span></p><p className="mt-2 text-sm text-slate-300">{tier.blurb}</p><ul className="mt-4 space-y-1 text-sm text-slate-200">{tier.features.map((f)=><li key={f}>• {f}</li>)}</ul><Button className="mt-4 w-full">{tier.cta}</Button></Card>)}</div><Card className="mt-8"><h3 className="font-semibold">Need enterprise controls?</h3><p className="text-slate-300">Talk to our team about on-prem rendering, white-glove onboarding, and custom SLAs.</p></Card></main><Footer/></div>;
}
