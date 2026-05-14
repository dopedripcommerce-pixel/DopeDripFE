import Link from 'next/link'
import { getFeaturedProducts } from '@/lib/products'
import ProductCard from '@/components/product/ProductCard'

export default function CuratedForYou() {
  const picks = getFeaturedProducts().slice(0, 4)

  return (
    <section
      style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A' }}
      className="px-6 md:px-10 xl:px-16 py-14 md:py-16"
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#555] mb-3">
            The Archive Selects
          </p>
          <h2
            className="font-display text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            CURATED <span style={{ color: '#D4FF00' }}>FOR YOU</span>
          </h2>
        </div>
        <Link
          href="/collections/all"
          className="hidden md:inline-flex font-mono text-[11px] uppercase tracking-[0.25em] text-[#555] hover:text-[#D4FF00] transition-colors duration-200 pb-0.5 border-b border-transparent hover:border-[#D4FF00]"
        >
          Full Archive →
        </Link>
      </div>

      {/* Asymmetric grid: 1 large left + 3 stacked right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured pick — large */}
        {picks[0] && (
          <Link
            href={`/products/${picks[0].slug}`}
            className="group relative flex flex-col overflow-hidden rounded-xl"
            style={{ border: '1px solid #1E1E1E', background: picks[0].colors[0].hex + '10' }}
          >
            <div className="relative flex items-center justify-center" style={{ height: '340px' }}>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at top right, rgba(212,255,0,0.08), transparent 50%)' }}
              />
              {picks[0].badge && (
                <span
                  className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.28em] uppercase px-2.5 py-1"
                  style={{ background: '#D4FF00', color: '#0D0D0D', borderRadius: '9999px' }}
                >
                  {picks[0].badge}
                </span>
              )}
              <span className="text-[100px] select-none">{picks[0].emoji}</span>
            </div>
            <div className="p-5" style={{ borderTop: '1px solid #1E1E1E' }}>
              <h3 className="font-display text-white text-2xl leading-tight tracking-tight mb-1 group-hover:text-[#D4FF00] transition-colors">
                {picks[0].name}
              </h3>
              <p className="font-mono text-[11px] text-[#555] mb-3">{picks[0].subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-white">
                  ₹{picks[0].price.toLocaleString('en-IN')}
                </span>
                {picks[0].oldPrice && (
                  <span className="font-mono text-xs text-[#444] line-through">
                    ₹{picks[0].oldPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>
          </Link>
        )}

        {/* 3 smaller picks */}
        <div className="flex flex-col gap-4">
          {picks.slice(1, 4).map(p => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 hover:border-[#D4FF00]"
              style={{ border: '1px solid #1E1E1E', background: '#161616' }}
            >
              <div
                className="flex items-center justify-center shrink-0 w-16 h-16"
                style={{ background: p.colors[0].hex + '18' }}
              >
                <span className="text-3xl">{p.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-white text-lg leading-tight truncate group-hover:text-[#D4FF00] transition-colors">
                  {p.name}
                </p>
                <p className="font-mono text-[10px] text-[#555] mt-0.5 truncate">{p.subtitle}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-mono text-sm font-bold text-white">
                  ₹{p.price.toLocaleString('en-IN')}
                </p>
                {p.badge && (
                  <p className="font-mono text-[9px] uppercase tracking-widest mt-1" style={{ color: '#D4FF00' }}>
                    {p.badge}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
