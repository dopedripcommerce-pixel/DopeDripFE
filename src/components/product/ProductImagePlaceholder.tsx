// ✏️  Replace with <Image> when you have real product photos.
//     Drop photos in /public/images/products/
interface Props { color: string; emoji: string; type: string; size?: number }

export default function ProductImagePlaceholder({ color, emoji, type, size = 120 }: Props) {
  const h = Math.round(size * 1.1)
  if (type === 'Hoodies') return (
    <svg width={size} height={h} viewBox="0 0 200 220" fill="none">
      <path d="M65 25 Q100 0 135 25 L195 65 L165 85 L155 200 L45 200 L35 85 L5 65 Z" fill={color}/>
      <path d="M65 25 Q100 55 135 25 Q120 65 100 65 Q80 65 65 25Z" fill="rgba(0,0,0,0.35)"/>
      <text x="100" y="145" fontFamily="serif" fontSize="38" textAnchor="middle">{emoji}</text>
    </svg>
  )
  return (
    <svg width={size} height={h} viewBox="0 0 200 220" fill="none">
      <path d="M60 20 L0 60 L30 80 L20 200 L180 200 L170 80 L200 60 L140 20 Q120 40 100 40 Q80 40 60 20Z" fill={color}/>
      <text x="100" y="130" fontFamily="serif" fontSize="38" textAnchor="middle">{emoji}</text>
    </svg>
  )
}
