const STATS = [
  { value: '5,000+', label: 'Drops Shipped' },
  { value: '4.8★',   label: 'Avg Rating' },
  { value: '₹999+',  label: 'Free Shipping' },
  { value: '7-Day',  label: 'Free Returns' },
  { value: '100%',   label: 'Gen Z Approved' },
]

export default function MarqueeBanner() {
  return (
    <div
      style={{ background: '#111', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}
      className="py-4 px-6"
    >
      <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-2">
        {STATS.map((s, i) => (
          <div key={s.label} className="flex items-center gap-6">
            <div className="text-center">
              <span className="font-display text-white text-base tracking-wide">{s.value}</span>
              <span className="font-mono text-[10px] text-[#555] tracking-[0.25em] uppercase ml-2">{s.label}</span>
            </div>
            {i < STATS.length - 1 && (
              <span className="hidden sm:block" style={{ color: '#2A2A2A' }}>|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
