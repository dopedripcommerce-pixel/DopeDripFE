'use client'
import Link from 'next/link'
import { useState } from 'react'

const CATS = [
  {
    id: 'men',
    href: '/collections/men',
    label: 'MEN',
    sub: 'Tees · Oversized · Hoodies · Sweatshirts',
    tag: 'Unisex drops',
    glow: 'radial-gradient(circle at top left, rgba(212,255,0,0.08), transparent 60%)',
    bg: '#161616',
  },
  {
    id: 'women',
    href: '/collections/women',
    label: 'WOMEN',
    sub: 'Tees · Oversized · Hoodies · Sweatshirts · Crop Tops',
    tag: "Women’s cuts",
    glow: 'radial-gradient(circle at top right, rgba(212,255,0,0.08), transparent 60%)',
    bg: '#181616',
  },
]

export default function CategoriesSection() {
  const [hovered, setHovered] = useState<'men' | 'women' | null>(null)

  return (
    <section
      style={{ background: '#111', borderTop: '1px solid #1A1A1A' }}
      className="px-6 md:px-10 xl:px-16 py-14 md:py-16"
    >
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#555] mb-3">
          Browse
        </p>
        <h2
          className="font-display text-white leading-[0.9] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          SHOP BY <span style={{ color: '#D4FF00' }}>CATEGORY</span>
        </h2>
      </div>

      {/* Tiles */}
      <div
        className="flex flex-col md:flex-row gap-4"
        onMouseLeave={() => setHovered(null)}
      >
        {CATS.map(cat => {
          const isWomen   = cat.id === 'women'
          const flexBasis = hovered === null
            ? (isWomen ? '40%' : '60%')
            : hovered === 'women'
              ? (isWomen ? '60%' : '40%')
              : (isWomen ? '40%' : '60%')

          return (
            <Link
              key={cat.id}
              href={cat.href}
              onMouseEnter={() => setHovered(cat.id as 'men' | 'women')}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl"
              style={{
                flexBasis,
                flexShrink: 0,
                flexGrow: 0,
                minHeight: '220px',
                background: cat.bg,
                border: '1px solid #1E1E1E',
                transition: 'flex-basis 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: cat.glow }}
              />

              {/* Bottom lime sweep */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                style={{ background: '#D4FF00' }}
              />

              {/* Content */}
              <div className="relative z-10">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#444] mb-4">
                  {cat.tag}
                </p>
                <h3
                  className="font-display text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
                >
                  {cat.label}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="font-mono text-[11px] text-[#555] tracking-wide leading-relaxed mb-4">
                  {cat.sub}
                </p>
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: '#D4FF00' }}
                >
                  Shop {cat.label} →
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
