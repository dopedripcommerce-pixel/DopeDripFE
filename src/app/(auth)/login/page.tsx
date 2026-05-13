'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useToastStore } from '@/store'
export default function LoginPage() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const showToast=useToastStore(s=>s.show)
  function handleSubmit(e:React.FormEvent){e.preventDefault();showToast('Welcome back! ⚡')}
  return (
    <div style={{background:'#2A2A2A',border:'1px solid #3A3A3A'}} className="w-full max-w-md p-10">
      <div className="text-center mb-8">
        <Link href="/" className="font-display text-4xl text-white tracking-[0.15em]">
          DOPE<span style={{color:'#D4FF00'}}>DRIP</span>
        </Link>
        <p className="text-[#888] text-sm mt-2">Login to your account</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button onClick={()=>showToast('Google login coming soon!')} className="btn-outline py-3 flex items-center justify-center gap-2 text-xs">G&nbsp;Google</button>
        <button onClick={()=>showToast('OTP login coming soon!')} className="btn-outline py-3 flex items-center justify-center gap-2 text-xs">📱&nbsp;Phone OTP</button>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <div style={{background:'#3A3A3A'}} className="flex-1 h-px"/>
        <span className="text-xs text-[#888]">or</span>
        <div style={{background:'#3A3A3A'}} className="flex-1 h-px"/>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-mono text-[11px] tracking-widest uppercase font-bold text-white block mb-1.5">Email / Phone</label>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@email.com" required className="input-base"/>
        </div>
        <div>
          <label className="font-mono text-[11px] tracking-widest uppercase font-bold text-white block mb-1.5">Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required className="input-base"/>
        </div>
        <button type="submit" className="btn-lime w-full py-4 mt-2">Login ⚡</button>
      </form>
      <div className="text-center mt-4 space-y-2">
        <p className="text-sm text-[#888]">Don't have an account?&nbsp;<Link href="/signup" style={{color:'#D4FF00'}} className="hover:underline">Sign Up</Link></p>
        <button className="font-mono text-xs text-[#555] tracking-widest hover:text-white transition-colors">Forgot Password?</button>
      </div>
    </div>
  )
}
