import { environments } from '@/lib/data/mock';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function AppMarketplacePage() {
  return <div><h1 className="text-3xl font-semibold">Marketplace</h1><div className="mt-4 grid gap-3 md:grid-cols-5"><input placeholder="Search"/><select><option>Genre</option></select><select><option>Use case</option></select><select><option>Sort</option></select><Button>Saved only</Button></div><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{environments.map((env)=><Card key={env.id}><div className="h-24 rounded bg-slate-800"/><h3 className="mt-3 font-semibold">{env.title}</h3><p className="text-sm text-slate-400">{env.unrealVersion} • {env.resolution}</p><div className="mt-2 flex gap-1">{env.compat.map((c)=><Badge key={c}>{c}</Badge>)}</div><div className="mt-3 flex gap-2"><Button>Use</Button><Button variant="outline">Favorite</Button></div></Card>)}</div></div>;
}
