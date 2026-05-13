import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import { getHoodies } from '@/lib/products'
export default function HoodiesSection() {
  const hoodies = getHoodies()
  return (
    <section style={{background:'#1E1E1E',borderTop:'1px solid #2A2A2A'}} className="px-8 md:px-16 py-16">
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="font-display text-5xl text-white tracking-widest">
          NEW <span style={{color:'#D4FF00'}}>HOODIES</span>
        </h2>
        <Link href="/collections/hoodies" style={{color:'#D4FF00',borderBottom:'1px solid #D4FF00'}}
          className="font-mono text-xs tracking-widest uppercase pb-0.5 hover:opacity-70 transition-opacity">See All →</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hoodies.map(p => <ProductCard key={p.id} product={p}/>)}
      </div>
    </section>
  )
}
