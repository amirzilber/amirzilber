import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  return <div><Navbar/><main className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2"><Card><h1 className="text-3xl font-semibold">Contact sales</h1><p className="mt-2 text-slate-300">Tell us about your workflows and show cadence.</p><div className="mt-4 space-y-3"><input placeholder="Full name"/><input placeholder="Work email"/><textarea rows={4} placeholder="Project details"/><Button className="w-full">Send request</Button></div></Card><Card><h2 className="font-semibold">Company info</h2><p className="mt-2 text-slate-300">hello@envox.ai</p><p className="text-slate-300">San Francisco + Tel Aviv</p><p className="mt-4 text-sm text-slate-400">Support response within 24 hours for all paid plans.</p></Card></main><Footer/></div>;
}
