'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useToastStore } from '@/store'
export default function SignupPage() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const showToast=useToastStore(s=>s.show)
  function handleSubmit(e:React.FormEvent){e.preventDefault();showToast('Account created! Welcome to the drip ⚡')}
  return (
    <div style={{background:'#2A2A2A',border:'1px solid #3A3A3A'}} className="w-full max-w-md p-10">
      <div className="text-center mb-8">
        <Link href="/" className="font-display text-4xl text-white tracking-[0.15em]">DOPE<span style={{color:'#D4FF00'}}>DRIP</span></Link>
        <p className="text-[#888] text-sm mt-2">Create your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-mono text-[11px] tracking-widest uppercase font-bold text-white block mb-1.5">Full Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" required className="input-base"/>
        </div>
        <div>
          <label className="font-mono text-[11px] tracking-widest uppercase font-bold text-white block mb-1.5">Email</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@email.com" required className="input-base"/>
        </div>
        <div>
          <label className="font-mono text-[11px] tracking-widest uppercase font-bold text-white block mb-1.5">Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Min 8 characters" required className="input-base"/>
        </div>
        <button type="submit" className="btn-lime w-full py-4 mt-2">Create Account ⚡</button>
      </form>
      <p className="text-center text-sm text-[#888] mt-4">Already have an account?&nbsp;<Link href="/login" style={{color:'#D4FF00'}} className="hover:underline">Login</Link></p>
    </div>
  )
}
