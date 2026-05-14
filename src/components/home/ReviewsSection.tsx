'use client'
import { useEffect, useRef } from 'react'
import { REVIEWS } from '@/lib/products'

export default function ReviewsSection() {
  const picks = REVIEWS.slice(0, 3)
  const scrollRef = useRef<HTMLDivElement>(null)
  const indexRef  = useRef(0)
  const paused    = useRef(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const advance = () => {
      if (paused.current) return
      indexRef.current = (indexRef.current + 1) % picks.length
      const cards = el.querySelectorAll<HTMLElement>('[data-review-card]')
      const target = cards[indexRef.current]
      if (target) el.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
    }

    const id = setInterval(advance, 3000)
    return () => clearInterval(id)
  }, [picks.length])

  return (
    <section
      style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A' }}
      className="px-6 md:px-10 xl:px-16 py-12 md:py-14"
    >
      <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#444] mb-8">
        From the streets
      </p>

      <div
        ref={scrollRef}
        onPointerEnter={() => { paused.current = true }}
        onPointerLeave={() => { paused.current = false }}
        onTouchStart={() => { paused.current = true }}
        onTouchEnd={() => { paused.current = false }}
        className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
      >
        {picks.map((r) => (
          <div
            key={r.id}
            data-review-card
            className="p-6 md:p-8 rounded-xl shrink-0 md:shrink"
            style={{
              background: '#141414',
              border: '1px solid #1A1A1A',
              width: 'min(80vw, 300px)',
              scrollSnapAlign: 'start',
            }}
          >
            <p className="font-body text-[#999] text-sm leading-relaxed mb-6 italic">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 flex items-center justify-center font-mono text-[9px] text-[#0D0D0D] font-bold shrink-0"
                style={{ background: '#D4FF00' }}
              >
                {r.avatarInitials}
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#666] tracking-widest">
                  {r.author} · {r.city}
                </p>
                <p className="font-mono text-[9px] text-[#3A3A3A] tracking-widest mt-0.5">
                  {r.product}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
