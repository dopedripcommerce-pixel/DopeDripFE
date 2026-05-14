'use client'

export default function AnnouncementBar() {
  return (
    <div
      style={{ background: '#D4FF00', color: '#0D0D0D' }}
      className="py-2 px-4 flex items-center justify-center gap-6 flex-wrap"
    >
      <span className="font-mono text-[10px] tracking-[0.28em] uppercase font-bold">
        ⚡ Free Shipping on orders ₹999+
      </span>
      <span className="hidden sm:block opacity-30 text-xs">✦</span>
      <span className="font-mono text-[10px] tracking-[0.28em] uppercase font-bold">
        7-Day Free Returns
      </span>
    </div>
  )
}
