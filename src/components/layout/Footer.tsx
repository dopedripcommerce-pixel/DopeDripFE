import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Tees', href: '/collections/tees' },
  { label: 'Hoodies', href: '/collections/hoodies' },
  { label: 'New Drops', href: '/collections/all' },
  { label: 'Size Guide', href: '#' },
  { label: 'Returns', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A' }}>
      <div className="px-6 md:px-10 xl:px-16 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

        {/* Brand */}
        <div className="font-display text-2xl text-white tracking-[0.12em] shrink-0">
          DOPE<span style={{ color: '#D4FF00' }}>DRIP</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map(l => (
            <Link
              key={l.label}
              href={l.href}
              className="font-mono text-[11px] text-[#555] hover:text-[#D4FF00] transition-colors tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-4 shrink-0">
          <a href="#" aria-label="Instagram" className="text-[#444] hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" aria-label="X / Twitter" className="text-[#444] hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="text-[#444] hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: '1px solid #1A1A1A' }}
        className="px-6 md:px-10 xl:px-16 py-4 flex flex-col md:flex-row justify-between items-center gap-1"
      >
        <p className="font-mono text-[10px] text-[#333] tracking-widest">
          © {new Date().getFullYear()} DOPE DRIP. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-[10px] text-[#333] tracking-widest">
          MADE WITH ⚡ IN INDIA
        </p>
      </div>
    </footer>
  )
}
