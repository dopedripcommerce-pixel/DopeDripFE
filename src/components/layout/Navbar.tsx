'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Heart, User, Search, X, ArrowRight } from 'lucide-react'
import { useCartStore, useWishlistStore } from '@/store'
import { useState, useEffect } from 'react'
import SearchOverlay from '@/components/ui/SearchOverlay'

type MenuTab = 'Men' | 'Women' | 'All Drops'

const TABS: MenuTab[] = ['Men', 'Women', 'All Drops']

const CATEGORIES: Record<MenuTab, { label: string; emoji: string; href: string }[]> = {
  Men: [
    { label: 'Tees',          emoji: '👕', href: '/collections/men' },
    { label: 'Oversized',     emoji: '🖤', href: '/collections/men' },
    { label: 'Hoodies',       emoji: '🧥', href: '/collections/men' },
    { label: 'Sweatshirts',   emoji: '🌑', href: '/collections/men' },
  ],
  Women: [
    { label: 'Tees',          emoji: '👕', href: '/collections/women' },
    { label: 'Oversized',     emoji: '🖤', href: '/collections/women' },
    { label: 'Hoodies',       emoji: '🧥', href: '/collections/women' },
    { label: 'Sweatshirts',   emoji: '🌑', href: '/collections/women' },
    { label: 'Crop Tops',     emoji: '🌸', href: '/collections/women' },
    { label: 'All Women',     emoji: '✨', href: '/collections/women' },
  ],
  'All Drops': [
    { label: 'New Drops',     emoji: '⚡', href: '/collections/all' },
    { label: 'Trending',      emoji: '🔥', href: '/collections/all' },
    { label: 'Limited',       emoji: '💎', href: '/collections/all' },
    { label: 'Archive',       emoji: '📦', href: '/collections/all' },
  ],
}

const DESKTOP_LINKS = [
  { label: 'Men',       href: '/collections/men' },
  { label: 'Women',     href: '/collections/women' },
  { label: 'New Drops', href: '/collections/all' },
]

export default function Navbar() {
  const pathname        = usePathname()
  const totalCart       = useCartStore(s => s.items.reduce((sum, i) => sum + i.quantity, 0))
  const totalWishlist   = useWishlistStore(s => s.items.length)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeTab, setActiveTab]   = useState<MenuTab>('Men')

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function close() { setMobileOpen(false) }

  return (
    <>
      <header
        style={{ background: '#111', borderBottom: '1px solid #1E1E1E' }}
        className="sticky top-0 z-50"
      >
        <nav className="relative flex items-center h-14 px-4 md:px-8">

          {/* LEFT: hamburger (mobile) + nav links (desktop) */}
          <div className="flex items-center gap-6 flex-1">
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className="md:hidden text-[#888] hover:text-white transition-colors"
            >
              {/* Three-bar icon */}
              <div className="flex flex-col gap-[5px]">
                <span style={{background:'#888', width:20, height:1.5, display:'block', borderRadius:1}}/>
                <span style={{background:'#888', width:14, height:1.5, display:'block', borderRadius:1}}/>
                <span style={{background:'#888', width:20, height:1.5, display:'block', borderRadius:1}}/>
              </div>
            </button>

            <ul className="hidden md:flex items-center gap-7">
              {DESKTOP_LINKS.map(link => {
                const active = pathname.startsWith(link.href) && link.href !== '/collections/all'
                return (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="font-mono text-[11px] tracking-widest uppercase transition-colors duration-200 pb-1"
                      style={{
                        color: active ? '#D4FF00' : '#777',
                        borderBottom: active ? '2px solid #D4FF00' : '2px solid transparent',
                      }}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* CENTER: logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="font-display text-2xl md:text-3xl text-white tracking-[0.15em]">
              DOPE<span style={{ color: '#D4FF00' }}>DRIP</span>
            </Link>
          </div>

          {/* RIGHT: icons */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <button onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 transition-colors hover:border-[#D4FF00]"
              style={{ border: '1px solid #222', background: '#161616' }}>
              <Search size={12} style={{ color: '#555' }} />
              <span className="font-mono text-[11px] text-[#444] tracking-wide whitespace-nowrap">
                Search drops…
              </span>
            </button>

            <button onClick={() => setSearchOpen(true)} aria-label="Search"
              className="md:hidden text-[#666] hover:text-white transition-colors">
              <Search size={17} />
            </button>

            <Link href="/login" aria-label="Account" className="text-[#666] hover:text-white transition-colors">
              <User size={17} />
            </Link>

            <Link href="/wishlist" aria-label="Wishlist" className="relative text-[#666] hover:text-white transition-colors">
              <Heart size={17} />
              {totalWishlist > 0 && (
                <span style={{ background: '#D4FF00', color: '#111' }}
                  className="absolute -top-2 -right-2 text-[9px] font-mono w-3.5 h-3.5 rounded-full flex items-center justify-center font-black">
                  {totalWishlist}
                </span>
              )}
            </Link>

            <Link href="/cart" aria-label="Cart" className="relative text-[#666] hover:text-white transition-colors">
              <ShoppingBag size={17} />
              {totalCart > 0 && (
                <span style={{ background: '#D4FF00', color: '#111' }}
                  className="absolute -top-2 -right-2 text-[9px] font-mono w-3.5 h-3.5 rounded-full flex items-center justify-center font-black">
                  {totalCart}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </header>

      {/* ── Mobile full-screen menu ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60] flex flex-col" style={{background:'#0D0D0D'}}>

          {/* Menu header */}
          <div className="flex items-center justify-between px-5 h-14 shrink-0"
            style={{borderBottom:'1px solid #1A1A1A'}}>
            <Link href="/" onClick={close}
              className="font-display text-xl text-white tracking-[0.15em]">
              DOPE<span style={{color:'#D4FF00'}}>DRIP</span>
            </Link>
            <button onClick={close} className="text-[#555] hover:text-white transition-colors p-1">
              <X size={20}/>
            </button>
          </div>

          {/* Tab bar */}
          <div className="flex shrink-0" style={{borderBottom:'1px solid #1A1A1A'}}>
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="flex-1 py-3.5 font-mono text-[10px] tracking-[0.2em] uppercase transition-all"
                style={{
                  color: activeTab === tab ? '#D4FF00' : '#555',
                  borderBottom: activeTab === tab ? '2px solid #D4FF00' : '2px solid transparent',
                  background: 'transparent',
                }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Category cards grid */}
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {CATEGORIES[activeTab].map(cat => (
                <Link key={cat.label} href={cat.href} onClick={close}
                  className="flex flex-col items-start justify-between rounded-xl p-4 active:scale-95 transition-transform"
                  style={{
                    background: '#161616',
                    border: '1px solid #1E1E1E',
                    minHeight: 100,
                  }}>
                  <span style={{fontSize:28}}>{cat.emoji}</span>
                  <div>
                    <p className="font-mono text-[11px] font-bold text-white tracking-wide mt-2">{cat.label}</p>
                    <p className="font-mono text-[9px] text-[#444] tracking-wider uppercase mt-0.5">Shop now</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Browse all link */}
            <Link
              href={activeTab === 'Men' ? '/collections/men' : activeTab === 'Women' ? '/collections/women' : '/collections/all'}
              onClick={close}
              className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl transition-colors active:opacity-70"
              style={{background:'rgba(212,255,0,0.07)', border:'1px solid rgba(212,255,0,0.15)'}}>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold" style={{color:'#D4FF00'}}>
                Browse All {activeTab}
              </span>
              <ArrowRight size={14} color="#D4FF00"/>
            </Link>

            {/* Divider + extras */}
            <div className="mt-6 space-y-1" style={{borderTop:'1px solid #1A1A1A', paddingTop: '1.25rem'}}>
              {[
                {label:'Wishlist',  href:'/wishlist'},
                {label:'Cart',      href:'/cart'},
                {label:'Blog',      href:'/posts'},
                {label:'Login',     href:'/login'},
              ].map(l => (
                <Link key={l.href} href={l.href} onClick={close}
                  className="flex items-center justify-between py-3 px-1 transition-colors"
                  style={{borderBottom:'1px solid #161616'}}>
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#555]">{l.label}</span>
                  <ArrowRight size={12} color="#333"/>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
