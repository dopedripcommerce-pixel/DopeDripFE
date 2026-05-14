'use client'
import { useEffect } from 'react'
import { X } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
  category: string
}

const TEE_SIZES = [
  { size: 'XS', chest: '34–36', length: '26', shoulder: '16' },
  { size: 'S',  chest: '36–38', length: '27', shoulder: '17' },
  { size: 'M',  chest: '38–40', length: '28', shoulder: '18' },
  { size: 'L',  chest: '40–42', length: '29', shoulder: '19' },
  { size: 'XL', chest: '42–44', length: '30', shoulder: '20' },
  { size: 'XXL',chest: '44–46', length: '31', shoulder: '21' },
]

const HOODIE_SIZES = [
  { size: 'S',   chest: '38–40', length: '26', shoulder: '18' },
  { size: 'M',   chest: '40–42', length: '27', shoulder: '19' },
  { size: 'L',   chest: '42–44', length: '28', shoulder: '20' },
  { size: 'XL',  chest: '44–46', length: '29', shoulder: '21' },
  { size: 'XXL', chest: '46–48', length: '30', shoulder: '22' },
]

export default function SizeGuideModal({ open, onClose, category }: Props) {
  const rows = category === 'Hoodies' ? HOODIE_SIZES : TEE_SIZES

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl overflow-hidden"
        style={{ background: '#1E1E1E', border: '1px solid #2A2A2A' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid #2A2A2A' }}>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#666] mb-1">Dope Drip</p>
            <h2 className="font-display text-2xl text-white tracking-widest">SIZE GUIDE</h2>
          </div>
          <button onClick={onClose} className="text-[#555] hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Table */}
        <div className="px-6 py-5">
          <p className="font-mono text-[11px] text-[#555] tracking-widest uppercase mb-4">
            {category} — All measurements in inches
          </p>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #2A2A2A' }}>
                {['Size', 'Chest', 'Length', 'Shoulder'].map(h => (
                  <th key={h} className="text-left pb-3 font-mono text-[10px] tracking-widest uppercase text-[#555]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.size}
                  style={{ borderBottom: '1px solid #1A1A1A', background: i % 2 === 0 ? 'transparent' : '#242424' }}
                >
                  <td className="py-3 font-mono text-sm font-bold" style={{ color: '#D4FF00' }}>{r.size}</td>
                  <td className="py-3 font-mono text-sm text-white">{r.chest}"</td>
                  <td className="py-3 font-mono text-sm text-white">{r.length}"</td>
                  <td className="py-3 font-mono text-sm text-white">{r.shoulder}"</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="px-6 pb-5">
          <p className="font-mono text-[10px] text-[#444] tracking-wide leading-relaxed">
            All Dope Drip pieces are cut oversized by design. When in doubt, size down.
          </p>
        </div>
      </div>
    </div>
  )
}
