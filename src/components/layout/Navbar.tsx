'use client'
import Link from 'next/link'
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react'
import { useCartStore, useWishlistStore } from '@/store'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Tees',      href: '/collections/tees' },
  { label: 'Hoodies',   href: '/collections/hoodies' },
  { label: 'New Drops', href: '/collections/all' },
  { label: 'Sale',      href: '/collections/all?filter=sale' },
]

export default function Navbar() {
  const totalCart     = useCartStore(s => s.totalItems)()
  const totalWishlist = useWishlistStore(s => s.totalItems)()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header style={{background:'#1E1E1E',borderBottom:'1px solid #2A2A2A'}} className="sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 md:px-10 h-16">
        <Link href="/" className="font-display text-3xl text-white tracking-[0.15em]">
          DOPE<span style={{color:'#D4FF00'}}>DRIP</span>
        </Link>

        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link href={link.href}
                className="text-[#888] hover:text-white font-mono text-xs tracking-widest uppercase transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-[#888] hover:text-white transition-colors">
            <Search size={18} />
          </button>
          <Link href="/wishlist" className="relative text-[#888] hover:text-white transition-colors" aria-label="Wishlist">
            <Heart size={18} />
            {totalWishlist > 0 && (
              <span style={{background:'#D4FF00',color:'#1E1E1E'}} className="absolute -top-2 -right-2 text-[10px] font-mono w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalWishlist}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative text-[#888] hover:text-white transition-colors" aria-label="Cart">
            <ShoppingBag size={18} />
            {totalCart > 0 && (
              <span style={{background:'#D4FF00',color:'#1E1E1E'}} className="absolute -top-2 -right-2 text-[10px] font-mono w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalCart}
              </span>
            )}
          </Link>
          <Link href="/login" aria-label="Login" className="text-[#888] hover:text-white transition-colors">
            <User size={18} />
          </Link>
          <button className="md:hidden text-[#888] hover:text-white" onClick={() => setMobileOpen(v=>!v)} aria-label="Toggle menu">
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{background:'#1E1E1E',borderTop:'1px solid #2A2A2A'}} className="md:hidden px-6 pb-6">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              style={{borderBottom:'1px solid #2A2A2A'}}
              className="block py-3 text-[#888] hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
