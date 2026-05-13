'use client'
import Link from 'next/link'
import { Trash2, ShoppingBag } from 'lucide-react'
import { useCartStore, useToastStore } from '@/store'
import ProductImagePlaceholder from '@/components/product/ProductImagePlaceholder'
import { useState } from 'react'

export default function CartPage() {
  const items      = useCartStore(s=>s.items)
  const removeItem = useCartStore(s=>s.removeItem)
  const updateQty  = useCartStore(s=>s.updateQty)
  const totalPrice = useCartStore(s=>s.totalPrice)()
  const showToast  = useToastStore(s=>s.show)
  const [coupon, setCoupon] = useState('')

  const shipping   = totalPrice>=999 ? 0 : 99
  const grandTotal = totalPrice+shipping

  if (items.length===0) return (
    <div style={{background:'#1E1E1E',minHeight:'70vh'}} className="flex flex-col items-center justify-center text-center px-4">
      <ShoppingBag size={48} className="text-[#3A3A3A] mb-4"/>
      <h1 className="font-display text-5xl text-white tracking-widest mb-2">YOUR CART IS EMPTY</h1>
      <p className="text-[#888] text-sm mb-8">Looks like you haven't added anything yet.</p>
      <Link href="/collections/all" className="btn-lime">Start Shopping ⚡</Link>
    </div>
  )

  return (
    <div style={{background:'#1E1E1E',minHeight:'100vh'}} className="px-6 md:px-16 py-12">
      <h1 className="font-display text-6xl text-white tracking-widest mb-8">YOUR CART ⚡</h1>
      <div className="grid md:grid-cols-[1fr_380px] gap-8 items-start">
        <div className="space-y-3">
          {items.map(item=>(
            <div key={`${item.product.id}-${item.size}-${item.color.name}`}
              style={{background:'#2A2A2A',border:'1px solid #3A3A3A'}}
              className="grid grid-cols-[90px_1fr_auto] gap-5 p-5 items-center">
              <div style={{background:item.color.hex+'18'}} className="flex items-center justify-center h-24">
                <ProductImagePlaceholder color={item.color.hex} emoji={item.product.emoji} type={item.product.category} size={65}/>
              </div>
              <div>
                <p className="font-medium text-white text-sm mb-1">{item.product.name}</p>
                <p className="text-xs text-[#888] mb-3">Size: {item.size} · Color: {item.color.name}</p>
                <div className="flex items-center gap-4">
                  <div style={{border:'1px solid #3A3A3A'}} className="flex items-center">
                    <button onClick={()=>updateQty(item.product.id,item.size,item.color.name,item.quantity-1)}
                      style={{background:'#1E1E1E'}} className="w-9 h-9 text-white text-lg hover:bg-[#3A3A3A] transition-colors">−</button>
                    <span className="w-10 text-center font-mono text-sm text-white">{item.quantity}</span>
                    <button onClick={()=>updateQty(item.product.id,item.size,item.color.name,item.quantity+1)}
                      style={{background:'#1E1E1E'}} className="w-9 h-9 text-white text-lg hover:bg-[#3A3A3A] transition-colors">+</button>
                  </div>
                  <span className="font-mono text-sm font-bold text-white">₹{(item.product.price*item.quantity).toLocaleString('en-IN')}</span>
                </div>
              </div>
              <button onClick={()=>{removeItem(item.product.id,item.size,item.color.name);showToast('Removed from cart')}}
                className="text-[#555] hover:text-white transition-colors" aria-label="Remove">
                <Trash2 size={15}/>
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{background:'#2A2A2A',border:'1px solid #3A3A3A'}} className="p-6 sticky top-20">
          <h2 className="font-display text-3xl text-white tracking-widest mb-5">ORDER SUMMARY</h2>
          <div style={{borderBottom:'1px solid #3A3A3A'}} className="space-y-3 text-sm pb-4 mb-4">
            <div className="flex justify-between text-white">
              <span>Subtotal ({items.length} items)</span>
              <span className="font-mono font-bold">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#888]">Shipping</span>
              <span className={`font-mono font-bold ${shipping===0?'text-[#D4FF00]':'text-white'}`}>
                {shipping===0?'FREE':`₹${shipping}`}
              </span>
            </div>
          </div>
          <div className="flex justify-between font-mono font-bold text-base text-white mb-5">
            <span>Total</span><span>₹{grandTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex mb-5">
            <input value={coupon} onChange={e=>setCoupon(e.target.value)} placeholder="Coupon code"
              style={{background:'#1E1E1E',border:'1px solid #3A3A3A',borderRight:'none',color:'white'}}
              className="flex-1 px-4 py-3 text-sm placeholder:text-[#555] focus:outline-none focus:border-[#D4FF00]"/>
            <button onClick={()=>showToast('Coupon applied! 💛')}
              style={{background:'#D4FF00',color:'#1E1E1E'}}
              className="font-mono text-xs tracking-widest uppercase px-4 hover:bg-white transition-colors">Apply</button>
          </div>
          <button onClick={()=>showToast('Checkout coming soon! 🚀')} className="btn-lime w-full py-4 text-center block mb-3">
            Checkout →
          </button>
          <Link href="/collections/all" className="block text-center font-mono text-xs text-[#555] tracking-widest uppercase hover:text-white transition-colors">
            ← Continue Shopping
          </Link>
          <div className="flex justify-center gap-5 mt-5">
            {['🔒 Secure','📦 Free Returns','✅ Authentic'].map(t=>(
              <span key={t} className="text-[10px] text-[#555] font-mono">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
