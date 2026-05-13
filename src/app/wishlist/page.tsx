'use client'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useWishlistStore } from '@/store'
import ProductCard from '@/components/product/ProductCard'
export default function WishlistPage() {
  const items = useWishlistStore(s=>s.items)
  if (items.length===0) return (
    <div style={{background:'#1E1E1E',minHeight:'70vh'}} className="flex flex-col items-center justify-center text-center px-4">
      <Heart size={48} className="text-[#3A3A3A] mb-4"/>
      <h1 className="font-display text-5xl text-white tracking-widest mb-2">WISHLIST IS EMPTY</h1>
      <p className="text-[#888] text-sm mb-8">Heart the things you love and find them here.</p>
      <Link href="/collections/all" className="btn-lime">Browse Products ⚡</Link>
    </div>
  )
  return (
    <div style={{background:'#1E1E1E',minHeight:'100vh'}} className="px-6 md:px-16 py-12">
      <h1 className="font-display text-6xl text-white tracking-widest mb-1">YOUR WISHLIST ♡</h1>
      <p className="font-mono text-xs text-[#888] tracking-widest uppercase mb-10">
        {items.length} items saved&nbsp;•&nbsp;
        <span style={{color:'#D4FF00'}}>Don't let them sell out!</span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {items.map(({product})=><ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}
