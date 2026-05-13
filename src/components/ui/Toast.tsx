'use client'
import { useToastStore } from '@/store'
export default function Toast() {
  const { message, visible } = useToastStore()
  return (
    <div
      style={{background:'#2A2A2A',borderLeft:'4px solid #D4FF00'}}
      className={`fixed bottom-6 right-6 z-[999] text-white font-mono text-xs
        tracking-widest px-6 py-4 shadow-2xl
        transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
      role="alert" aria-live="polite"
    >
      {message}
    </div>
  )
}
