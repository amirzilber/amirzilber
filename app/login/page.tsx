import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  return <main className="flex min-h-screen items-center justify-center p-6"><Card className="w-full max-w-md"><h1 className="text-2xl font-semibold">Welcome back</h1><p className="mt-2 text-sm text-slate-400">Mock authentication for MVP demo.</p><div className="mt-5 space-y-3"><input placeholder="Email"/><input type="password" placeholder="Password"/><Link href="/app/dashboard"><Button className="w-full">Log in</Button></Link></div><p className="mt-4 text-sm text-slate-400">No account? <Link href="/signup" className="text-blue-300">Create one</Link></p></Card></main>;
}
