'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const LINES = [
  { text: 'Movies became personalities.',      tag: 'Cinema Core' },
  { text: 'Memes became coping mechanisms.',   tag: 'Internet Culture' },
  { text: 'Playlists became diaries.',         tag: 'Poetic Internet' },
]

export default function MemeBanner() {
  const ref     = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVis(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      style={{ background: '#0A0A0A', borderTop: '1px solid #1A1A1A' }}
      className="px-6 md:px-10 xl:px-16 py-16 md:py-24"
    >
      <div ref={ref}>
        {LINES.map((l, i) => (
          <div
            key={l.text}
            className="flex items-baseline justify-between py-5 transition-all duration-700"
            style={{
              borderBottom: '1px solid #1A1A1A',
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: `${i * 110}ms`,
            }}
          >
            <p
              className="font-display text-white tracking-tight leading-none"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
            >
              {l.text}
            </p>
            <span className="hidden sm:block font-mono text-[9px] tracking-[0.3em] uppercase text-[#383838] shrink-0 ml-6">
              {l.tag}
            </span>
          </div>
        ))}

        {/* Final lime line — CTA */}
        <div
          className="flex items-baseline justify-between py-5 transition-all duration-700"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '330ms',
          }}
        >
          <p
            className="font-display tracking-tight leading-none"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)', color: '#D4FF00' }}
          >
            We made them wearable.
          </p>
          <Link
            href="/collections/all"
            className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase shrink-0 ml-6 transition-all duration-200 hover:gap-3"
            style={{ color: '#D4FF00' }}
          >
            Enter Archive →
          </Link>
        </div>
      </div>
    </section>
  )
}
