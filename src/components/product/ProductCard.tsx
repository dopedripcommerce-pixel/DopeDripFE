// ProductCard.tsx

'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

import type { Product } from '@/types'
import {
  useWishlistStore,
  useToastStore,
} from '@/store'

import ProductImagePlaceholder from './ProductImagePlaceholder'

interface Props {
  product: Product
}

export default function ProductCard({
  product,
}: Props) {
  const toggle = useWishlistStore(s => s.toggle)

  const isWished = useWishlistStore(
    s => s.isWished
  )(product.id)

  const showToast = useToastStore(
    s => s.show
  )

  function handleWishlist(
    e: React.MouseEvent
  ) {
    e.preventDefault()

    toggle(product)

    showToast(
      isWished
        ? 'Removed from archive'
        : 'Saved to archive 🖤'
    )
  }

  return (
    <Link
      href={`/products/${product.slug}`}
      className="
        group
        block
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          aspect-[3/4]
          overflow-hidden
          rounded-xl
          bg-[#151515]
        "
        style={{
          background:
            product.colors[0].hex + '10',
        }}
      >
        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
          style={{
            background:
              'radial-gradient(circle at top right, rgba(212,255,0,0.08), transparent 40%)',
          }}
        />

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          aria-label="Wishlist"
          className="
            absolute
            top-4
            right-4
            z-10
            h-9
            w-9
            flex
            items-center
            justify-center
            rounded-full
            bg-black/40
            backdrop-blur-sm
            text-white
            transition-all
            duration-300
            hover:bg-black/60
          "
        >
          <Heart
            size={14}
            className={
              isWished
                ? 'fill-red-500 text-red-500'
                : ''
            }
          />
        </button>

        {/* Product visual */}
        <div className="h-full flex items-center justify-center">
          <ProductImagePlaceholder
            color={product.colors[0].hex}
            emoji={product.emoji}
            type={product.category}
            size={120}
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute bottom-4 left-4">
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#D4FF00]
              "
            >
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="pt-5">

        {/* Title */}
        <h3
          className="
            font-display
            text-[26px]
            leading-[0.95]
            tracking-[-0.04em]
            text-white
            transition-colors
            duration-300
            group-hover:text-[#D4FF00]
          "
        >
          {product.name}
        </h3>

        {/* Subtitle */}
        <p
          className="
            mt-2
            text-[13px]
            text-[#777]
            leading-relaxed
          "
        >
          {product.subtitle}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-5">

          {/* Price */}
          <div className="flex items-center gap-2">

            <span
              className="
                font-mono
                text-sm
                text-white
              "
            >
              ₹{product.price.toLocaleString('en-IN')}
            </span>

            {product.oldPrice && (
              <span
                className="
                  font-mono
                  text-xs
                  text-[#555]
                  line-through
                "
              >
                ₹{product.oldPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Metadata */}
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[#555]
            "
          >
            {product.vibe}
          </span>
        </div>
      </div>
    </Link>
  )
}