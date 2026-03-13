import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { blogPosts } from '@/lib/data/mock';
import { Card } from '@/components/ui/card';

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return <div><Navbar/><main className="mx-auto max-w-6xl px-6 py-14"><h1 className="text-4xl font-semibold">Envox Journal</h1><Card className="mt-6"><p className="text-sm text-blue-300">Featured • {featured.category}</p><h2 className="mt-2 text-2xl font-semibold">{featured.title}</h2><p className="mt-2 text-slate-300">{featured.excerpt}</p></Card><div className="mt-6 grid gap-4 md:grid-cols-3">{rest.map((post)=><Card key={post.id}><p className="text-sm text-slate-400">{post.date} • {post.readTime}</p><h3 className="mt-2 font-semibold">{post.title}</h3><p className="mt-2 text-sm text-slate-300">{post.excerpt}</p></Card>)}</div></main><Footer/></div>;
}
