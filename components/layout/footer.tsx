import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-4">
        <div>
          <h4 className="font-semibold text-white">Envox</h4>
          <p className="mt-2 text-sm text-slate-400">AI-native virtual production for LED and live broadcast teams.</p>
        </div>
        {['Product', 'Company', 'Resources'].map((col) => (
          <div key={col}>
            <h5 className="text-sm font-medium text-white">{col}</h5>
            <ul className="mt-2 space-y-2 text-sm text-slate-400">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/docs">Docs</Link></li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
