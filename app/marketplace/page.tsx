'use client';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { MarketplaceGrid } from '@/components/public/sections';
import { Card } from '@/components/ui/card';

export default function MarketplacePage() {
  return <div><Navbar/><main className="mx-auto max-w-6xl px-6 py-14"><h1 className="text-4xl font-semibold">Environment marketplace</h1><div className="mt-6 grid gap-3 md:grid-cols-4"><input placeholder="Search environments"/><select><option>Genre</option></select><select><option>Technical specs</option></select><select><option>Use case</option></select></div><MarketplaceGrid/><Card className="mt-6 text-sm text-slate-300">Click any card to open a detail modal in the integrated app experience.</Card></main><Footer/></div>;
}
