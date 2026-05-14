import Link from 'next/link'
import { getNewArrivals } from '@/lib/products'
import ProductCard from '@/components/product/ProductCard'

export default function NewArrivals() {
  const products = getNewArrivals(6)

  return (
    <section
      style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A' }}
      className="px-6 md:px-10 xl:px-16 py-14 md:py-16"
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#555] mb-3">
            Just Dropped
          </p>
          <h2
            className="font-display text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            NEW <span style={{ color: '#D4FF00' }}>ARRIVALS</span>
          </h2>
        </div>
        <Link
          href="/collections/all"
          className="hidden md:inline-flex font-mono text-[11px] uppercase tracking-[0.25em] text-[#555] hover:text-[#D4FF00] transition-colors duration-200 pb-0.5 border-b border-transparent hover:border-[#D4FF00]"
        >
          View All →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Mobile view-all */}
      <div className="md:hidden mt-8 text-center">
        <Link
          href="/collections/all"
          className="btn-lime inline-flex"
        >
          View All Drops ⚡
        </Link>
      </div>
    </section>
  )
}
