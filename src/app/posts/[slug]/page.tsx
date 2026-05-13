import { getBlogPostBySlug, getRelatedPosts } from '@/lib/content'
import { getProductBySlug, PRODUCTS } from '@/lib/products'
import ProductCard from '@/components/product/ProductCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  return {
    title: post ? `${post.title} | Dope Drip` : 'Post Not Found',
  }
}

export default function PostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return notFound()

  const relatedPosts = getRelatedPosts(params.slug)
  const relatedProducts = post.relatedProducts
    ? PRODUCTS.filter(p => post.relatedProducts?.includes(p.id)).slice(0, 4)
    : []

  return (
    <main style={{background:'#1E1E1E',minHeight:'100vh'}}>
      {/* Hero */}
      <section style={{background:'#141414',borderBottom:'1px solid #2A2A2A'}} className="px-8 md:px-16 py-16">
        <Link href="/posts" className="text-[#D4FF00] font-mono text-xs tracking-widest mb-4 inline-block">
          ← Back to Posts
        </Link>
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-widest mt-4">{post.title}</h1>
        <p className="text-[#888] mt-4">
          By {post.author} • {post.publishedAt.toLocaleDateString()} • 5 min read
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-8 md:px-0 py-16">
        {/* Content */}
        <article className="prose prose-invert max-w-none mb-16">
          {post.content.split('\n\n').map((para, i) => (
            <p key={i} className="text-[#CCC] leading-relaxed mb-6">{para}</p>
          ))}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 py-8 border-t border-b border-[#2A2A2A]">
          {post.tags.map(tag => (
            <span key={tag} className="font-mono text-xs px-3 py-1 bg-[#2A2A2A] text-[#D4FF00]">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl text-white tracking-widest mb-8">In This Article</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#2A2A2A]">
            <h2 className="font-display text-3xl text-white tracking-widest mb-8">More From This Topic</h2>
            <div className="space-y-4">
              {relatedPosts.map(rp => (
                <Link key={rp.id} href={`/posts/${rp.slug}`}
                  className="block p-4 bg-[#2A2A2A] hover:bg-[#3A3A3A] transition-colors">
                  <p className="font-display text-white">{rp.title}</p>
                  <p className="text-sm text-[#888] mt-1">{rp.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
