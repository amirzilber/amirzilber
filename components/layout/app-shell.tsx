'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, UserCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const nav = [
  ['Dashboard', '/app/dashboard'],
  ['Generator', '/app/generator'],
  ['Marketplace', '/app/marketplace'],
  ['My Environments', '/app/my-environments'],
  ['Broadcast', '/app/broadcast'],
  ['Settings', '/app/settings'],
  ['Admin', '/app/admin']
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="min-h-screen bg-background text-slate-100 md:grid md:grid-cols-[250px_1fr]">
      <aside className="border-r border-white/10 p-4">
        <p className="mb-6 text-xl font-semibold">Envox OS</p>
        <div className="space-y-1">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={cn('block rounded-lg px-3 py-2 text-sm', path === href ? 'bg-accent text-white' : 'text-slate-300 hover:bg-white/10')}>
              {label}
            </Link>
          ))}
        </div>
      </aside>
      <main>
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-400"><Search size={14}/>Search or quick action</div>
          <div className="flex items-center gap-2 text-sm"><UserCircle2 size={18}/> amir@envox.io</div>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
