import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return <div><Navbar/><main className="mx-auto max-w-5xl space-y-6 px-6 py-14"><h1 className="text-4xl font-semibold">About Envox</h1><Card><h2 className="font-semibold">Mission</h2><p className="mt-2 text-slate-300">Democratize cinematic virtual production for every creator and studio.</p></Card><Card><h2 className="font-semibold">Founder Story</h2><p className="mt-2 text-slate-300">Built by a team of broadcast engineers and Unreal pipeline operators who saw the same setup pain in every live production.</p></Card><Card><h2 className="font-semibold">Product Philosophy</h2><p className="mt-2 text-slate-300">Broadcast-first reliability, AI-native acceleration, and practical workflows measured by time-to-value.</p></Card></main><Footer/></div>;
}
