'use client'
import type { Product } from '@/types'

export default function TrendBadges({ product }: { product: Product }) {
  const badges: { label: string; color: string }[] = []

  const daysLeft = product.daysUntilDead ?? product.daysUntilArchive
  if (daysLeft !== undefined && daysLeft <= 7) {
    badges.push({ label: `Dying in ${daysLeft}d`, color: '#FF6B6B' })
  } else if (daysLeft !== undefined && daysLeft <= 14) {
    badges.push({ label: `${daysLeft}d left`, color: '#FFA500' })
  }

  if (product.stockScarcity < 20) {
    badges.push({ label: `${Math.round(product.stockScarcity)}% left`, color: '#D4FF00' })
  } else if (product.stockScarcity < 50) {
    badges.push({ label: `${Math.round(product.stockScarcity)}% stock`, color: '#D4FF00' })
  }

  if (product.weeklyWearCount > 300) {
    badges.push({ label: `Most worn 🔥`, color: '#D4FF00' })
  }

  if (badges.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {badges.map((badge, i) => (
        <span
          key={i}
          className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded"
          style={{ background: badge.color, color: badge.color === '#D4FF00' ? '#1E1E1E' : 'white' }}
        >
          {badge.label}
        </span>
      ))}
    </div>
  )
}
