import Link from 'next/link'
import type { Collection } from '@/types'

export default function CollectionCard({
  collection,
}: {
  collection: Collection
}) {
  return (
    <Link
      href={`/collections/${collection.id}`}
      className="
        group
        relative
        flex
        flex-col
        justify-between
        h-[190px]
        overflow-hidden
        border
        border-[#1F1F1F]
        bg-[#111111]
        px-5
        py-5
        transition-all
        duration-300
        hover:border-[#D4FF00]
        hover:-translate-y-[2px]
      "
    >
      {/* Subtle hover glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
        "
        style={{
          background:
            'radial-gradient(circle at top right, rgba(212,255,0,0.06), transparent 45%)',
        }}
      />

      {/* Small icon */}
      <div
        className="
          absolute
          top-5
          right-5
          text-[42px]
          opacity-[0.07]
          transition-all
          duration-300
          group-hover:opacity-[0.12]
          group-hover:scale-105
          select-none
        "
      >
        {collection.icon}
      </div>

      {/* TOP */}
      <div className="relative z-10">
        {/* Tiny label */}
        <p
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-[#555]
            mb-5
          "
        >
          DOPE DRIP
        </p>

        {/* Title */}
        <h3
          className="
            font-display
            text-[26px]
            leading-[0.92]
            tracking-[-0.04em]
            text-white
            max-w-[85%]
            transition-colors
            duration-300
            group-hover:text-[#D4FF00]
          "
        >
          {collection.name}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            text-[13px]
            leading-relaxed
            text-[#777]
            line-clamp-2
            max-w-[92%]
          "
        >
          {collection.description}
        </p>
      </div>

      {/* BOTTOM */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
          mt-5
        "
      >
        {/* Minimal metadata */}
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.22em]
            text-[#555]
          "
        >
          {collection.vibes.slice(0, 2).join(' • ')}
        </p>

        {/* Arrow */}
        <span
          className="
            text-[#D4FF00]
            text-sm
            opacity-0
            translate-x-[-4px]
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-x-0
          "
        >
          ↗
        </span>
      </div>
    </Link>
  )
}