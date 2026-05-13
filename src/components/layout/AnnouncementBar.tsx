'use client'

const MESSAGES = [
  '⚡ FREE SHIPPING ABOVE ₹999',
  '🖤 WEARABLE INTERNET CULTURE',
  '🎬 NEW DROPS EVERY FRIDAY',
  '📡 BUILT FOR THE CHRONICALLY ONLINE',
  '💛 USE CODE DRIP10 FOR 10% OFF',
]

export default function AnnouncementBar() {
  return (
    <div
      style={{
        background: '#D4FF00',
        color: '#0D0D0D',
      }}
      className="relative overflow-hidden border-b border-black/10"
    >
      {/* Gradient fade left */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#D4FF00] to-transparent pointer-events-none" />

      {/* Gradient fade right */}
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#D4FF00] to-transparent pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex whitespace-nowrap animate-marquee py-3">
        {[...MESSAGES, ...MESSAGES].map((msg, i) => (
          <div
            key={i}
            className="flex items-center shrink-0 font-mono text-[10px] md:text-xs tracking-[0.28em] uppercase font-bold"
          >
            <span className="mx-8 opacity-90">
              {msg}
            </span>

            <span className="opacity-30 text-sm">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}