'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Heart, ShieldCheck, RotateCcw, Truck, Star } from 'lucide-react'
import type { Product, ProductColor } from '@/types'
import ProductImagePlaceholder from './ProductImagePlaceholder'
import ProductCard from './ProductCard'
import { useCartStore, useWishlistStore, useToastStore } from '@/store'
import SizeGuideModal from '@/components/ui/SizeGuideModal'

interface Props { product: Product; related: Product[] }

export default function ProductDetailClient({ product, related }: Props) {
  const [selectedSize,  setSelectedSize]  = useState(product.sizes[2]??product.sizes[0])
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0])
  const [qty,           setQty]           = useState(1)
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)

  const addItem   = useCartStore(s=>s.addItem)
  const toggle    = useWishlistStore(s=>s.toggle)
  const isWished  = useWishlistStore(s=>s.isWished)(product.id)
  const showToast = useToastStore(s=>s.show)

  const discount = product.oldPrice ? Math.round((1-product.price/product.oldPrice)*100) : 0

  return (
    <div style={{background:'#1E1E1E',minHeight:'100vh'}}>
      {/* Breadcrumb */}
      <nav style={{borderBottom:'1px solid #2A2A2A'}} className="px-8 md:px-16 py-4 font-mono text-xs text-[#555] tracking-widest flex gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/collections/${product.category.toLowerCase()}`} className="hover:text-white transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-white">{product.name}</span>
      </nav>

      {/* PDP Grid */}
      <section className="grid md:grid-cols-2">
        {/* Gallery */}
        <div style={{background:'#141414',borderRight:'1px solid #2A2A2A'}} className="flex">
          {/* Thumbs */}
          <div style={{borderRight:'1px solid #2A2A2A'}} className="flex flex-col gap-2 p-4">
            {product.colors.map((c,i)=>(
              <button key={i} onClick={()=>setSelectedColor(c)}
                style={{background:c.hex+'20',border:`2px solid ${selectedColor.name===c.name?'#D4FF00':'transparent'}`}}
                className="w-[68px] h-[82px] flex items-center justify-center rounded-lg transition-all">
                <ProductImagePlaceholder color={c.hex} emoji={product.emoji} type={product.category} size={48}/>
              </button>
            ))}
          </div>
          {/* Main */}
          <div style={{background:selectedColor.hex+'14'}} className="flex-1 flex items-center justify-center p-8">
            <ProductImagePlaceholder color={selectedColor.hex} emoji={product.emoji} type={product.category} size={220}/>
          </div>
        </div>

        {/* Info */}
        <div className="p-8 md:p-14">
          <p className="overline-label mb-2">Dope Drip</p>
          <h1 className="font-display text-5xl text-white tracking-widest mb-2 leading-tight">
            {product.name.toUpperCase()}
          </h1>
          {/* Stars */}
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_,i)=>(
              <Star key={i} size={13} style={{fill:i<Math.floor(product.rating)?'#D4FF00':'transparent',color:'#D4FF00'}}/>
            ))}
            <span className="font-mono text-xs text-[#555] tracking-widest ml-1">({product.reviewCount} reviews)</span>
          </div>
          {/* Price */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-2xl font-bold text-white">₹{product.price.toLocaleString('en-IN')}</span>
            {product.oldPrice && (
              <>
                <span className="font-mono text-base text-[#555] line-through">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                <span style={{background:'#D4FF00',color:'#1E1E1E'}} className="text-xs px-2 py-0.5 font-bold rounded-full">{discount}% OFF</span>
              </>
            )}
          </div>
          {/* Description */}
          <p style={{borderBottom:'1px solid #2A2A2A'}} className="text-sm text-[#888] leading-relaxed mb-6 pb-6">{product.description}</p>

          {/* Color */}
          <div className="mb-5">
            <p className="font-mono text-xs tracking-widest uppercase font-bold text-white mb-2">
              Color: <span className="text-[#888] font-normal normal-case">{selectedColor.name}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map(c=>(
                <button key={c.name} title={c.name} onClick={()=>setSelectedColor(c)}
                  style={{background:c.hex,border:`2px solid ${selectedColor.name===c.name?'#D4FF00':'transparent'}`}}
                  className="w-7 h-7 rounded-full transition-all"/>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-mono text-xs tracking-widest uppercase font-bold text-white">Size</p>
              <button onClick={() => setSizeGuideOpen(true)} style={{color:'#D4FF00'}} className="font-mono text-xs tracking-widest hover:opacity-70 transition-opacity">Size Guide →</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(s=>(
                <button key={s} onClick={()=>setSelectedSize(s)}
                  style={{border:`1px solid ${selectedSize===s?'#D4FF00':'#3A3A3A'}`,
                    background:selectedSize===s?'#D4FF00':'transparent',
                    color:selectedSize===s?'#1E1E1E':'white'}}
                  className="px-4 py-2 font-mono text-xs rounded-lg transition-all duration-150">{s}</button>
              ))}
            </div>
          </div>

          {/* Qty + Actions */}
          <div className="flex items-center gap-3 mb-4">
            <div style={{border:'1px solid #3A3A3A'}} className="flex items-center rounded-lg overflow-hidden">
              <button onClick={()=>setQty(q=>Math.max(1,q-1))} style={{background:'#2A2A2A'}} className="w-10 h-11 text-lg text-white hover:bg-[#3A3A3A] transition-colors">−</button>
              <span className="w-12 text-center font-mono text-sm text-white">{qty}</span>
              <button onClick={()=>setQty(q=>q+1)} style={{background:'#2A2A2A'}} className="w-10 h-11 text-lg text-white hover:bg-[#3A3A3A] transition-colors">+</button>
            </div>
            <button onClick={()=>{addItem(product,selectedSize,selectedColor,qty);showToast(`${product.name} added to cart! ⚡`)}}
              className="btn-primary flex-1 py-3">Add to Cart</button>
            <button onClick={()=>{toggle(product);showToast(isWished?'Removed from wishlist':'Added to wishlist ♥')}}
              style={{border:`1px solid ${isWished?'#ef4444':'#3A3A3A'}`,background:'#2A2A2A'}}
              className="w-12 h-11 flex items-center justify-center rounded-lg transition-all">
              <Heart size={16} className={isWished?'fill-red-500 text-red-500':'text-white'}/>
            </button>
          </div>
          <button onClick={()=>showToast('Checkout coming soon! 🚀')} className="btn-lime w-full py-4 mb-6">Buy Now ⚡</button>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {[{icon:ShieldCheck,label:'Secure Payment'},{icon:Truck,label:'Free Shipping ₹999+'},{icon:RotateCcw,label:'7 Day Returns'}].map(({icon:Icon,label})=>(
              <div key={label} className="flex items-center gap-2 font-mono text-[10px] text-[#555] tracking-widest uppercase">
                <Icon size={13} style={{color:'#D4FF00'}}/> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{background:'#141414',borderTop:'1px solid #2A2A2A'}} className="px-8 md:px-16 py-16">
        <h2 className="section-title mb-10">You Might <span>Also Like</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {related.map(p=><ProductCard key={p.id} product={p}/>)}
        </div>
      </section>

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} category={product.category} />
    </div>
  )
}
