import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function SignupPage() {
  return <main className="flex min-h-screen items-center justify-center p-6"><Card className="w-full max-w-md"><h1 className="text-2xl font-semibold">Create your Envox workspace</h1><div className="mt-5 space-y-3"><input placeholder="Full name"/><input placeholder="Work email"/><input type="password" placeholder="Password"/><Link href="/app/dashboard"><Button className="w-full">Create account</Button></Link></div><p className="mt-4 text-sm text-slate-400">Already have an account? <Link href="/login" className="text-blue-300">Log in</Link></p></Card></main>;
}
