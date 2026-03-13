import { Card } from '@/components/ui/card';

export default function AdminPage() {
  return <div className="space-y-5"><h1 className="text-3xl font-semibold">Admin Console</h1><div className="grid gap-4 md:grid-cols-4">{['Total users: 2,184','MRR: $186,000','Pending approvals: 19','Flagged assets: 3'].map((x)=><Card key={x}>{x}</Card>)}</div><div className="grid gap-4 md:grid-cols-2"><Card><h2 className="font-semibold">Marketplace moderation</h2><p className="mt-2 text-sm text-slate-300">Review submissions, enforce quality standards, and resolve IP flags.</p></Card><Card><h2 className="font-semibold">Environment approvals</h2><p className="mt-2 text-sm text-slate-300">Approve AI-generated environments before public listing.</p></Card></div></div>;
}
