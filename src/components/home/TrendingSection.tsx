'use client'

import Link from 'next/link'
import { useState } from 'react'

import ProductImagePlaceholder from '@/components/product/ProductImagePlaceholder'
import { getTrendingProducts } from '@/lib/products'

export default function TrendingSection() {
  const trending = getTrendingProducts()

  const [activeIdx, setActiveIdx] = useState(0)

  const active = trending[activeIdx]

  return (
    <section
      style={{ background: '#111111' }}
      className="relative overflow-hidden py-12 md:py-14"
    >
      {/* Ambient glow */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[420px]
          h-[420px]
          rounded-full
          blur-3xl
          opacity-[0.04]
          pointer-events-none
        "
        style={{
          background: '#D4FF00',
        }}
      />

      <div className="relative z-10 px-6 md:px-10 xl:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-7">

          <div>
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#666] mb-3">
              CURRENTLY EVERYWHERE
            </p>

            <h2 className="font-display text-white leading-[0.92] tracking-[-0.05em]">
              <span
                style={{
                  fontSize: 'clamp(2.5rem,6vw,4.5rem)',
                }}
              >
                WORN
              </span>

              <br />

              <span
                style={{
                  color: '#D4FF00',
                  fontSize: 'clamp(2.5rem,6vw,4.5rem)',
                }}
              >
                ON REPEAT
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
            View Archive →
          </Link>
        </div>

        {/* Main layout */}
        <div
          className="
            grid
            xl:grid-cols-[320px_1fr]
            gap-4
            items-stretch
          "
        >

          {/* LEFT LIST */}
          <div className="flex flex-col gap-3">

            {trending.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(i)}
                className={`
                  group
                  relative
                  overflow-hidden
                  border
                  text-left
                  px-4
                  py-4
                  transition-all
                  duration-300

                  ${
                    activeIdx === i
                      ? 'border-[#D4FF00] bg-[#171717]'
                      : 'border-[#1F1F1F] bg-[#131313] hover:border-[#333]'
                  }
                `}
              >
                {/* Glow */}
                {activeIdx === i && (
                  <div
                    className="absolute inset-0 opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle at top right, rgba(212,255,0,0.06), transparent 50%)',
                    }}
                  />
                )}

                <div className="relative z-10 flex items-start gap-4">

                  {/* Number */}
                  <span
                    className={`
                      font-display
                      text-[32px]
                      leading-none
                      tracking-[-0.05em]
                      min-w-[38px]

                      ${
                        activeIdx === i
                          ? 'text-[#D4FF00]'
                          : 'text-[#2F2F2F]'
                      }
                    `}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div>

                    <p
                      className={`
                        font-display
                        text-[22px]
                        leading-[0.95]
                        tracking-[-0.04em]
                        transition-colors
                        duration-300

                        ${
                          activeIdx === i
                            ? 'text-white'
                            : 'text-[#B0B0B0]'
                        }
                      `}
                    >
                      {p.name}
                    </p>

                    <p className="mt-1.5 text-[12px] text-[#666] leading-relaxed">
                      {p.subtitle}
                    </p>

                    <div className="flex items-center gap-3 mt-3">

                      <span className="font-mono text-sm text-white">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.22em] text-[#555]">
                        {p.vibe}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT VISUAL */}
          {active && (
            <Link
              href={`/products/${active.slug}`}
              className="
                group
                relative
                overflow-hidden
                bg-[#151515]
                h-[420px]
                md:h-[460px]
                flex
                items-center
                justify-center
              "
              style={{
                background:
                  active.colors[0].hex + '08',
              }}
            >
              {/* Ambient glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
                style={{
                  background:
                    'radial-gradient(circle at top right, rgba(212,255,0,0.08), transparent 45%)',
                }}
              />

              {/* Product */}
              <ProductImagePlaceholder
                color={active.colors[0].hex}
                emoji={active.emoji}
                type={active.category}
                size={180}
              />

              {/* Bottom overlay */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  bg-gradient-to-t
                  from-black
                  via-black/80
                  to-transparent
                  px-5
                  py-5
                "
              >
                <div className="flex items-end justify-between gap-5">

                  <div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#666] mb-2">
                      CURRENT FAVORITE
                    </p>

                    <h3
                      className="
                        font-display
                        text-[30px]
                        md:text-[34px]
                        leading-[0.9]
                        tracking-[-0.05em]
                        text-white
                      "
                    >
                      {active.name}
                    </h3>

                    <p className="mt-2 text-[13px] text-[#777] max-w-sm leading-relaxed line-clamp-2">
                      {active.description}
                    </p>
                  </div>

                  <div className="text-right shrink-0">

                    <p className="font-mono text-base text-[#D4FF00]">
                      ₹{active.price.toLocaleString('en-IN')}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[#555]">
                      {active.vibe}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}