'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { COLLECTIONS } from '@/lib/collections'
import CollectionCard from './CollectionCard'

export default function CollectionsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [autoScroll, setAutoScroll] = useState(true)

  const CARD_WIDTH = 296

  // Auto scroll
  useEffect(() => {
    if (!autoScroll) return

    const container = scrollRef.current
    if (!container) return

    const interval = setInterval(() => {
      container.scrollBy({
        left: CARD_WIDTH,
        behavior: 'smooth',
      })

      // reset
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - CARD_WIDTH
      ) {
        setTimeout(() => {
          container.scrollTo({
            left: 0,
            behavior: 'smooth',
          })
        }, 800)
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [autoScroll])

  // Manual scroll
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return

    setAutoScroll(false)

    container.scrollBy({
      left: direction === 'right' ? CARD_WIDTH : -CARD_WIDTH,
      behavior: 'smooth',
    })
  }

  return (
    <section
      style={{ background: '#0D0D0D' }}
      className="relative overflow-hidden py-14 md:py-16"
    >
      {/* Ambient glow */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[400px]
          md:w-[600px]
          h-[400px]
          md:h-[600px]
          rounded-full
          blur-3xl
          opacity-[0.04]
          pointer-events-none
        "
        style={{
          background: '#D4FF00',
        }}
      />

      {/* Main wrapper */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          xl:flex-row
          xl:items-center
          gap-12
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            w-full
            xl:w-[32%]
            px-6
            md:px-10
            xl:pl-16
            shrink-0
          "
        >
          {/* Label */}
          <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#666] mb-4">
            DOPE DRIP ARCHIVE
          </p>

          {/* Heading */}
          <h2 className="font-display text-white leading-[0.9] tracking-[-0.05em] mb-6">
            <span
              style={{
                fontSize: 'clamp(2.7rem,7vw,5rem)',
              }}
            >
              SHOP
            </span>

            <br />

            <span
              style={{
                color: '#D4FF00',
                fontSize: 'clamp(2.7rem,7vw,5rem)',
              }}
            >
              BY VIBE
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#777] text-sm md:text-[15px] leading-relaxed max-w-md mb-8">
            Collections inspired by internet culture,
            emotional chaos, cinema references,
            anime energy, and chronically online behavior.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              'Cinema',
              'Poetic',
              'Internet',
              'Anime',
            ].map(tag => (
              <span
                key={tag}
                className="
                  border
                  border-[#222]
                  bg-[#111]
                  px-3
                  py-1.5
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-[#666]
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            relative
            w-full
            xl:w-[68%]
            flex
            items-center
            overflow-hidden
          "
        >

          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="
              hidden
              md:flex
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              z-20
              h-11
              w-11
              items-center
              justify-center
              border
              border-[#222]
              bg-[#111111]/90
              backdrop-blur-md
              text-[#777]
              transition-all
              duration-300
              hover:border-[#D4FF00]
              hover:text-[#D4FF00]
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="
              hidden
              md:flex
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              z-20
              h-11
              w-11
              items-center
              justify-center
              border
              border-[#222]
              bg-[#111111]/90
              backdrop-blur-md
              text-[#777]
              transition-all
              duration-300
              hover:border-[#D4FF00]
              hover:text-[#D4FF00]
            "
          >
            <ChevronRight size={18} />
          </button>

          {/* Left fade */}
          <div className="hidden md:block absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />

          {/* Right fade */}
          <div className="hidden md:block absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none" />

          {/* Rail */}
          <div
            ref={scrollRef}
            className="
              flex
              items-stretch
              gap-5
              overflow-x-auto
              scrollbar-hide
              scroll-smooth
              px-6
              md:px-16
              xl:px-14
              w-full
            "
          >
            {COLLECTIONS.map(collection => (
              <div
                key={collection.id}
                className="
                  min-w-[85%]
                  sm:min-w-[340px]
                  md:min-w-[280px]
                  md:max-w-[280px]
                  shrink-0
                "
              >
                <CollectionCard collection={collection} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}