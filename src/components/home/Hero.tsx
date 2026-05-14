import Link from 'next/link'
import ProductImagePlaceholder from '@/components/product/ProductImagePlaceholder'

export default function Hero() {
  return (
    <section
      style={{ background: '#0D0D0D', minHeight: 'calc(100vh - 56px)' }}
      className="relative flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#D4FF00 1px,transparent 1px),linear-gradient(90deg,#D4FF00 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top-left ambient glow */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: '#D4FF00', opacity: 0.07 }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full px-5 md:px-14 lg:px-20 py-10 md:py-0">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-8 lg:gap-12 w-full">

          {/* ── LEFT: text ── */}
          <div className="flex flex-col">
            {/* Label */}
            <p className="flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] uppercase mb-6"
              style={{ color: '#D4FF00' }}>
              <span style={{ width: 28, height: 1, background: '#D4FF00', display: 'inline-block' }} />
              DOPE DRIP
            </p>

            {/* Headline */}
            <h1
              className="font-display text-white leading-[0.84] tracking-[-0.03em] mb-5"
              style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)' }}
            >
              CLOTHES
              <br />THAT
              <br /><span style={{ color: '#D4FF00' }}>SPEAK</span>
            </h1>

            {/* Description — hidden on small phones, show from sm up */}
            <p className="hidden sm:block text-[#666] text-sm leading-relaxed max-w-sm mb-7">
              Built for people who feel too much and joke about it anyway —
              cinema refs, anime energy, poetic internet chaos.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8 lg:mb-0">
              <Link href="/collections/all" className="btn-lime inline-flex items-center gap-2">
                Enter The Archive ⚡
              </Link>
              <Link href="#collections" className="btn-outline">
                Shop By Vibe
              </Link>
            </div>
          </div>

          {/* ── RIGHT: product card — visible on all sizes, adapts ── */}
          <div className="flex justify-center lg:justify-end items-center">

            {/* Glow behind card */}
            <div
              className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full blur-3xl pointer-events-none"
              style={{ background: '#D4FF00', opacity: 0.06 }}
            />

            {/* Card */}
            <div
              className="relative overflow-hidden lime-glow"
              style={{
                background: '#171717',
                border: '1px solid #222',
                width: 'min(72vw, 300px)',
                height: 'min(90vw, 380px)',
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom right, rgba(212,255,0,0.08), transparent 60%)' }}
              />

              {/* Product placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ProductImagePlaceholder
                  color="#2A2A2A"
                  emoji="🖤"
                  type="Late Night Thoughts"
                  size={180}
                />
              </div>

              {/* Price badge */}
              <span
                className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.18em] px-3 py-1.5 font-bold uppercase"
                style={{ background: '#D4FF00', color: '#0D0D0D' }}
              >
                ₹799
              </span>

              {/* Brand label top-left */}
              <p className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] uppercase"
                style={{ color: '#444' }}>
                DOPE DRIP
              </p>

              {/* Product info bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display text-xl text-white tracking-tight leading-tight mb-1">
                  Late Night Thoughts
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: '#555' }}>
                  New Archive Drop ↗
                </p>
              </div>

              {/* Bottom lime sweep */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: '#D4FF00' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
