'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'

interface Props {
  open: boolean
  onClose: () => void
}

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim().length > 0
    ? PRODUCTS.filter(p => {
        const q = query.toLowerCase()
        return (
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.vibe.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        )
      }).slice(0, 6)
    : []

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <div
        className="w-full"
        style={{ background: '#111', borderBottom: '1px solid #2A2A2A' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Input row */}
        <div className="flex items-center gap-4 px-6 md:px-14 h-16">
          <Search size={18} style={{ color: '#D4FF00', flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search drops, vibes, categories…"
            className="flex-1 bg-transparent text-white text-base font-mono tracking-wide placeholder:text-[#444] focus:outline-none"
          />
          <button onClick={onClose} className="text-[#555] hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div style={{ borderTop: '1px solid #1A1A1A' }}>
            {results.map(p => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                onClick={onClose}
                className="flex items-center gap-5 px-6 md:px-14 py-4 hover:bg-[#1A1A1A] transition-colors"
                style={{ borderBottom: '1px solid #1A1A1A' }}
              >
                <span className="text-2xl w-8 text-center">{p.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{p.name}</p>
                  <p className="text-[#555] font-mono text-[11px] tracking-widest uppercase mt-0.5">{p.category} · {p.vibe}</p>
                </div>
                <span className="font-mono text-sm font-bold" style={{ color: '#D4FF00', flexShrink: 0 }}>
                  ₹{p.price.toLocaleString('en-IN')}
                </span>
              </Link>
            ))}
          </div>
        )}

        {query.trim().length > 1 && results.length === 0 && (
          <div
            className="px-6 md:px-14 py-8 text-center"
            style={{ borderTop: '1px solid #1A1A1A' }}
          >
            <p className="text-[#444] font-mono text-sm tracking-widest">NO DROPS FOUND FOR "{query.toUpperCase()}"</p>
          </div>
        )}

        {query.trim().length === 0 && (
          <div
            className="px-6 md:px-14 py-5 flex flex-wrap gap-2"
            style={{ borderTop: '1px solid #1A1A1A' }}
          >
            <span className="font-mono text-[10px] text-[#444] tracking-widest uppercase mr-2 self-center">Try:</span>
            {['hoodies', 'cinema', 'poetic', 'anime', 'tees'].map(tag => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="border border-[#2A2A2A] rounded-full px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase text-[#666] hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
