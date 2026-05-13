import { BLOG_POSTS, getBlogPostsByType } from '@/lib/content'
import BlogPostCard from '@/components/content/BlogPostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Culture & Trends — Blog | Dope Drip',
}

export default function PostsPage() {
  const articles = getBlogPostsByType('article')
  const reports = getBlogPostsByType('report')
  const drops = getBlogPostsByType('drop')

  return (
    <main style={{background:'#1E1E1E',minHeight:'100vh'}}>
      {/* Hero */}
      <section style={{background:'#141414',borderBottom:'1px solid #2A2A2A'}} className="px-8 md:px-16 py-20 text-center">
        <h1 className="font-display text-7xl text-white tracking-[0.2em] uppercase mb-4">What's Cultural</h1>
        <p className="text-[#888] max-w-2xl mx-auto">Trend reports, culture drops, and articles on why everything you wear matters.</p>
      </section>

      {/* Posts Grid */}
      <div className="px-8 md:px-16 py-16">
        {/* Drops */}
        {drops.length > 0 && (
          <div className="mb-20">
            <h2 className="font-display text-4xl text-[#D4FF00] tracking-widest mb-8">🔥 Recent Drops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drops.map(post => <BlogPostCard key={post.id} post={post} />)}
            </div>
          </div>
        )}

        {/* Articles */}
        {articles.length > 0 && (
          <div className="mb-20">
            <h2 className="font-display text-4xl text-[#D4FF00] tracking-widest mb-8">✍️ Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map(post => <BlogPostCard key={post.id} post={post} />)}
            </div>
          </div>
        )}

        {/* Reports */}
        {reports.length > 0 && (
          <div>
            <h2 className="font-display text-4xl text-[#D4FF00] tracking-widest mb-8">📊 Trend Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map(post => <BlogPostCard key={post.id} post={post} />)}
            </div>
          </div>
        )}

        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#888]">No posts yet. Check back soon.</p>
          </div>
        )}
      </div>
    </main>
  )
}
