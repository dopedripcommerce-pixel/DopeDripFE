import { REVIEWS } from '@/lib/products'
export default function ReviewsSection() {
  return (
    <section style={{background:'#141414'}} className="px-8 md:px-16 py-16">
      <div className="mb-10">
        <h2 className="section-title">Real <span>Reviews</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {REVIEWS.map(r => (
          <div key={r.id} style={{background:'#2A2A2A',border:'1px solid #3A3A3A',borderLeft:'3px solid #D4FF00'}} className="p-6">
            <div style={{color:'#D4FF00'}} className="text-sm tracking-widest mb-3">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
            <p className="text-sm text-[#ccc] italic leading-relaxed mb-4">"{r.text}"</p>
            <p className="font-mono text-[11px] text-[#555] tracking-widest">— {r.author}, {r.city}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
