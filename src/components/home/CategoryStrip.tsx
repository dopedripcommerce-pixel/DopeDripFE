import Link from 'next/link'

const CATEGORIES = [
  {
    label: 'Late Night Tees',
    count: '48 emotional fits',
    href: '/collections/tees',
    emoji: '🖤',
  },
  {
    label: 'Main Character Hoodies',
    count: '24 oversized pieces',
    href: '/collections/hoodies',
    emoji: '🎬',
  },
  {
    label: 'Fresh Internet Drops',
    count: 'culture updated weekly',
    href: '/collections/all',
    emoji: '⚡',
  },
  {
    label: 'Emotionally Discounted',
    count: 'pieces with history',
    href: '/collections/all',
    emoji: '🥀',
  },
]

export default function CategoryStrip() {
  return (
    <section
      style={{ background: '#111111' }}
      className="px-6 md:px-16 py-20"
    >
      {/* Heading */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#777] mb-3">
            CULTURE ARCHIVE
          </p>

          <h2 className="section-title text-white leading-none">
            Shop By <span style={{ color: '#D4FF00' }}>Vibe</span>
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES.map((cat, i) => (
          <Link
            key={cat.label}
            href={cat.href}
            style={{
              background: '#171717',
              border: '1px solid #2A2A2A',
            }}
            className="aspect-square flex flex-col justify-end p-6 relative overflow-hidden group transition-all duration-300 hover:border-[#D4FF00] hover:-translate-y-1"
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'radial-gradient(circle at bottom left, rgba(212,255,0,0.08), transparent 60%)',
              }}
            />

            {/* Emoji */}
            <span className="absolute top-4 right-4 text-5xl opacity-[0.08] group-hover:opacity-[0.14] transition-opacity">
              {cat.emoji}
            </span>

            {/* Large number */}
            <span className="font-display text-7xl absolute top-2 left-4 opacity-[0.04] text-white select-none">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Tiny floating text */}
            <span className="absolute top-5 left-5 font-mono text-[9px] tracking-[0.3em] uppercase text-[#555]">
              DOPE DRIP
            </span>

            {/* Content */}
            <div className="relative z-10">
              <p className="font-display text-2xl md:text-3xl text-white tracking-wide leading-tight group-hover:text-[#D4FF00] transition-colors duration-300">
                {cat.label}
              </p>

              <p className="font-mono text-[10px] text-[#777] tracking-[0.25em] uppercase mt-2">
                {cat.count}
              </p>

              <span
                style={{ color: '#D4FF00' }}
                className="font-mono text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 mt-5 inline-block"
              >
                Enter Archive →
              </span>
            </div>

            {/* Bottom subtle line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4FF00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </section>
  )
}