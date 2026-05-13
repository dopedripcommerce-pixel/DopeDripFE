// FeaturedDrops.tsx

import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import { getFeaturedProducts } from '@/lib/products'

export default function FeaturedDrops() {
  const products = getFeaturedProducts()

  return (
    <section
      style={{ background: '#0D0D0D' }}
      className="relative overflow-hidden py-14 md:py-16"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{
          background: '#D4FF00',
        }}
      />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-end justify-between px-6 md:px-10 xl:px-16 mb-10">

          <div>
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#666] mb-3">
              CURRENTLY EVERYWHERE
            </p>

            <h2 className="font-display text-white leading-[0.92] tracking-[-0.05em]">
              <span
                style={{
                  fontSize: 'clamp(2.7rem,6vw,5rem)',
                }}
              >
                MOST
              </span>

              <br />

              <span
                style={{
                  color: '#D4FF00',
                  fontSize: 'clamp(2.7rem,6vw,5rem)',
                }}
              >
                SAVED
              </span>
            </h2>
          </div>

          <Link
            href="/collections/all"
            className="
              hidden
              md:inline-flex
              items-center
              gap-2
              font-mono
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-[#888]
              transition-colors
              duration-300
              hover:text-[#D4FF00]
            "
          >
            Explore Archive →
          </Link>
        </div>

        {/* Product rail */}
        <div
          className="
            flex
            gap-5
            overflow-x-auto
            scrollbar-hide
            px-6
            md:px-10
            xl:px-16
          "
        >
          {products.map(product => (
            <div
              key={product.id}
              className="
                min-w-[78%]
                sm:min-w-[340px]
                md:min-w-[300px]
                md:max-w-[300px]
                shrink-0
              "
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}