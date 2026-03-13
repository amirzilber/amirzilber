'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const links = ['features', 'pricing', 'marketplace', 'docs', 'blog', 'about', 'contact'];

export function Navbar() {
  return (
    <motion.header initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-white">Envox</Link>
        <nav className="hidden gap-5 md:flex">
          {links.map((link) => (
            <Link key={link} href={`/${link}`} className="text-sm capitalize text-slate-300 hover:text-white">{link}</Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Link href="/login"><Button variant="ghost">Log in</Button></Link>
          <Link href="/signup"><Button>Start free</Button></Link>
        </div>
      </div>
    </motion.header>
  );
}
