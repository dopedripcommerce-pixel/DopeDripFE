import Link from 'next/link'
export default function NotFound() {
  return (
    <div style={{background:'#1E1E1E',minHeight:'80vh'}} className="flex flex-col items-center justify-center text-center px-4">
      <p className="font-display text-[120px] text-[#2A2A2A] leading-none tracking-widest">404</p>
      <h1 className="font-display text-4xl text-white tracking-widest mb-3">PAGE NOT FOUND</h1>
      <p className="text-[#888] text-sm mb-8 max-w-xs">This page took an L. Let's get you back to the drip.</p>
      <Link href="/" className="btn-lime">Back to Home ⚡</Link>
    </div>
  )
}
