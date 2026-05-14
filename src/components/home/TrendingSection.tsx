import Link from 'next/link'
import ProductImagePlaceholder from '@/components/product/ProductImagePlaceholder'
import { getTrendingProducts } from '@/lib/products'

export default function TrendingSection() {
  const trending = getTrendingProducts()

  return (
    <section
      style={{ background: '#111111', borderTop: '1px solid #1A1A1A' }}
      className="py-14 md:py-16"
    >
      {/* Header */}
      <div className="px-6 md:px-10 xl:px-16 flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#555] mb-3">
            Currently Everywhere
          </p>
          <h2 className="font-display text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            WORN ON <span style={{ color: '#D4FF00' }}>REPEAT</span>
          </h2>
        </div>
        <Link
          href="/collections/all"
          className="hidden md:inline-flex font-mono text-[11px] uppercase tracking-[0.25em] text-[#555] hover:text-[#D4FF00] transition-colors duration-200"
        >
          View All →
        </Link>
      </div>

      {/* Card strip */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-10 xl:px-16 pb-2">
        {trending.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}`}
            style={{ border: '1px solid #1E1E1E', background: '#161616', minWidth: '260px', maxWidth: '260px', borderRadius: '12px', overflow: 'hidden' }}
            className="group shrink-0 flex flex-col hover:border-[#D4FF00] transition-colors duration-300"
          >
            {/* Image area */}
            <div
              className="relative flex items-center justify-center h-[260px]"
              style={{ background: p.colors[0].hex + '12' }}
            >
              {p.badge ? (
                <span
                  className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.28em] uppercase px-2.5 py-1"
                  style={{ background: '#D4FF00', color: '#0D0D0D', borderRadius: '9999px' }}
                >
                  {p.badge}
                </span>
              ) : null}
              <ProductImagePlaceholder
                color={p.colors[0].hex}
                emoji={p.emoji}
                type={p.category}
                size={130}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1 p-4" style={{ borderTop: '1px solid #1E1E1E' }}>
              <p className="font-display text-white text-xl leading-tight tracking-tight mb-2">
                {p.name}
              </p>
              <p className="font-mono text-[11px] text-[#555] leading-relaxed flex-1 mb-4">
                {p.story}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-white">
                  ₹{p.price.toLocaleString('en-IN')}
                </span>
                <span
                  className="font-mono text-[9px] tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: '#D4FF00' }}
                >
                  Shop →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile view-all */}
      <div className="md:hidden mt-6 px-6">
        <Link
          href="/collections/all"
          className="font-mono text-xs uppercase tracking-[0.25em] text-[#555] hover:text-[#D4FF00] transition-colors"
        >
          View All Drops →
        </Link>
      </div>
    </section>
  )
}
