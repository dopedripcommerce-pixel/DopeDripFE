'use client'
import Link from 'next/link'
import type { BlogPost } from '@/types'

export default function BlogPostCard({ post }: { post: BlogPost }) {
  const typeLabel = {
    drop: '⚡ Drop',
    article: '✍ Thoughts',
    report: '📡 Culture Report',
    capsule: '🖤 Late Night Archive',
  }[post.type]

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group block overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#171717',
        border: '1px solid #2A2A2A',
      }}
    >
      {/* Hero image */}
      <div
        className="aspect-[16/9] overflow-hidden relative"
        style={{
          background: `linear-gradient(135deg, #1A1A1A, #0D0D0D)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(circle at center, rgba(212,255,0,0.12), transparent 70%)',
          }}
        />

        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">
          🖤
        </div>

        {/* Floating quote vibe */}
        <div className="absolute bottom-4 left-4 z-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4FF00]">
            DOPE DRIP ARCHIVE
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: '#D4FF00' }}
          >
            {typeLabel}
          </span>

          <span className="font-mono text-[10px] text-[#666]">
            {post.publishedAt.toLocaleDateString()}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg text-white mb-2 tracking-wide leading-snug group-hover:text-[#D4FF00] transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#8A8A8A] line-clamp-2 leading-relaxed mb-4">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider text-[#777] bg-[#111] border border-[#2A2A2A] px-2 py-1 transition-colors group-hover:border-[#3A3A3A]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[11px] text-[#555] italic">
            wear what you feel
          </span>

          <span className="text-[#D4FF00] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}