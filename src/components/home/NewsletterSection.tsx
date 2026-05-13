'use client'
import { useState } from 'react'
import { useToastStore } from '@/store'
export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const showToast = useToastStore(s => s.show)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    showToast('Subscribed! First drops coming your way ⚡')
    setEmail('')
  }
  return (
    <section style={{background:'#D4FF00',color:'#1E1E1E'}} className="px-8 md:px-16 py-20 text-center">
      <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3 opacity-60">Stay Ahead</p>
      <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-[0.15em] mb-2">FIRST TO THE MOMENT</h2>
      <p className="text-sm mb-8 max-w-md mx-auto opacity-70">
        Get early access to drops that capture the zeitgeist. Exclusive trends before they peak.
      </p>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
          placeholder="your@email.com" required
          style={{background:'#1E1E1E',border:'none',color:'white'}}
          className="flex-1 px-5 py-4 text-sm font-body placeholder:text-[#888] focus:outline-none"/>
        <button type="submit"
          style={{background:'#1E1E1E',color:'#D4FF00'}}
          className="font-mono text-xs tracking-widest uppercase px-6 hover:bg-[#2A2A2A] transition-colors whitespace-nowrap">
          Join Now ⚡
        </button>
      </form>
    </section>
  )
}
