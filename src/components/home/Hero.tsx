import Link from 'next/link'
import ProductImagePlaceholder from '@/components/product/ProductImagePlaceholder'

export default function Hero() {
  return (
    <section
      style={{ background: '#0D0D0D', minHeight: '92vh' }}
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

      {/* Ambient glow */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08]"
        style={{
          background: '#D4FF00',
        }}
      />

      {/* Main content wrapper */}
      <div className="relative z-10 w-full px-6 md:px-14 lg:px-20 py-24 flex items-center">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-20 w-full">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            {/* Top label */}
            <p
              className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.32em] uppercase mb-8"
              style={{ color: '#D4FF00' }}
            >
              <span
                style={{
                  width: 32,
                  height: 1,
                  background: '#D4FF00',
                  display: 'inline-block',
                }}
              />
              DOPE DRIP 
            </p>

            {/* Headline */}
            <h1
              className="font-display text-white leading-[0.84] tracking-[-0.03em] mb-8"
              style={{
                fontSize: 'clamp(4rem, 9vw, 8rem)',
              }}
            >
              CLOTHES
              <br />
              THAT
              <br />
              <span style={{ color: '#D4FF00' }}>
                SPEAK
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#8A8A8A] text-[15px] md:text-lg leading-relaxed max-w-xl mb-10">
              Poetry, internet culture, cinema references, anime energy,
              emotional damage, and oversized silhouettes.
              <br />
              <br />
              Built for people who feel too much and joke about it anyway.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/collections/all"
                className="btn-lime inline-flex items-center gap-2"
              >
                Enter The Archive ⚡
              </Link>

              <Link
                href="/collections/all"
                className="btn-outline"
              >
                Explore Collections
              </Link>
            </div>

            {/* Bottom tags */}
            <div className="flex flex-wrap gap-3 mt-12">
              {[
                'Poetic Streetwear',
                'Cinema Core',
                'Chronically Online',
                'Anime Inspired',
              ].map(tag => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs uppercase tracking-[0.22em] border border-[#2A2A2A] text-[#666] px-3 py-2 bg-[#111]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:flex relative justify-center items-center">
            {/* Floating accent */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full blur-3xl opacity-[0.08]"
              style={{
                background: '#D4FF00',
              }}
            />

            {/* Product card */}
            <div
              style={{
                background: '#171717',
                border: '1px solid #2A2A2A',
              }}
              className="relative w-[360px] h-[470px] flex items-center justify-center overflow-hidden lime-glow"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    'linear-gradient(to bottom right, rgba(212,255,0,0.08), transparent 60%)',
                }}
              />

              {/* Product */}
              <ProductImagePlaceholder
                color="#2A2A2A"
                emoji="🖤"
                type="Late Night Thoughts"
                size={210}
              />

              {/* Price */}
              <span
                style={{
                  background: '#D4FF00',
                  color: '#0D0D0D',
                }}
                className="absolute top-5 right-5 font-mono text-xs tracking-[0.18em] px-4 py-2 font-bold uppercase"
              >
                ₹799
              </span>

              {/* Bottom content */}
              <div className="absolute bottom-5 left-5">
                <p className="font-display text-2xl text-white tracking-tight mb-1">
                  Late Night Thoughts
                </p>

                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#777]">
                  New Archive Drop ↗
                </p>
              </div>

              {/* Tiny floating text */}
              <div className="absolute top-5 left-5">
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#555]">
                  DOPE DRIP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}