'use client'
import { useState } from 'react'
import { useToastStore } from '@/store'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const showToast = useToastStore(s => s.show)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    showToast('You\'re in. First drops coming your way ⚡')
    setEmail('')
  }

  return (
    <section
      style={{ background: '#111', borderTop: '1px solid #1A1A1A' }}
      className="px-6 md:px-10 xl:px-16 py-10 md:py-12"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-white tracking-tight leading-none" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            FIRST TO THE DROP.
          </p>
          <p className="font-mono text-[11px] text-[#444] mt-1.5 tracking-widest">
            No spam. Just early access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full md:w-auto md:min-w-[380px] rounded-lg overflow-hidden">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              background: '#161616',
              border: '1px solid #2A2A2A',
              borderRight: 'none',
              color: 'white',
            }}
            className="flex-1 px-4 py-3 text-sm font-mono placeholder:text-[#333] focus:outline-none focus:border-[#D4FF00]"
          />
          <button
            type="submit"
            style={{ background: '#D4FF00', color: '#0D0D0D' }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase px-5 font-bold hover:bg-white transition-colors whitespace-nowrap"
          >
            Join ⚡
          </button>
        </form>
      </div>
    </section>
  )
}
