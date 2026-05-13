const ITEMS = [
  'NEW DROP','DOPE DRIP','STREETWEAR','GEN Z APPROVED',
  'WEAR THE MEME','FREE SHIPPING ₹999+','NEW DROP','DOPE DRIP',
  'STREETWEAR','GEN Z APPROVED','WEAR THE MEME','FREE SHIPPING ₹999+',
]
export default function MarqueeBanner() {
  return (
    <div style={{background:'#D4FF00',color:'#1E1E1E'}} className="py-3 overflow-hidden">
      <div className="marquee-track flex gap-0 whitespace-nowrap">
        {ITEMS.map((item,i) => (
          <span key={i} className="font-display text-lg tracking-[0.2em] px-6">
            {item}<span className="mx-2 opacity-30">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
