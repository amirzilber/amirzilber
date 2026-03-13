import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { FeatureGrid, Hero, HowItWorks, PricingPreview, SocialProof } from '@/components/public/sections';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <SocialProof />
      <PricingPreview />
      <section className="mx-auto max-w-6xl px-6 py-16 text-center"><h2 className="text-3xl font-semibold">Launch your next virtual production this week.</h2><p className="mt-3 text-slate-300">Replace setup-heavy pipelines with Envox and deliver broadcast-grade output fast.</p><div className="mt-5"><Button>Book demo</Button></div></section>
      <Footer />
    </div>
  );
}
