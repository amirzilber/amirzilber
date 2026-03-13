import { environments } from '@/lib/data/mock';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function MyEnvironmentsPage() {
  return <div><h1 className="text-3xl font-semibold">My environments</h1><div className="mt-4 grid gap-3 md:grid-cols-4"><input placeholder="Search"/><select><option>Status</option></select><select><option>Type</option></select><Button variant="outline">Table / Card toggle</Button></div><div className="mt-5 space-y-3">{environments.map((env)=><Card key={env.id} className="flex flex-wrap items-center justify-between gap-3"><div><p className="font-medium">{env.title}</p><p className="text-sm text-slate-400">{env.genre} • {env.useCase}</p></div><Badge>{env.status}</Badge><div className="flex gap-2"><Button variant="outline">Open</Button><Button variant="outline">Duplicate</Button><Button variant="outline">Export</Button><Button variant="outline">Delete</Button></div></Card>)}</div></div>;
}
