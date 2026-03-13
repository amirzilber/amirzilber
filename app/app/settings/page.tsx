import { Card } from '@/components/ui/card';

export default function SettingsPage() {
  return <div className="space-y-4"><h1 className="text-3xl font-semibold">Settings</h1><div className="grid gap-4 md:grid-cols-2">{['Profile','Billing','API','Team','Notifications'].map((s)=><Card key={s}><h2 className="font-semibold">{s}</h2><p className="mt-2 text-sm text-slate-300">Manage your {s.toLowerCase()} configuration.</p></Card>)}</div></div>;
}
