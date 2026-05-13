// ──────────────────────────────────────────────
//  Dope Drip — Shared TypeScript Types
// ──────────────────────────────────────────────

export type ProductCategory = 'Tees' | 'Hoodies'

export type ProductBadge = 'New' | 'Trending' | 'Sale' | ''

export type ProductVibe =
  | 'Meme Culture'
  | 'Vintage Retro'
  | 'Streetwear'
  | 'Minimal'

export type TrendVelocity = 'rising' | 'peaking' | 'dying' | 'dead'

export type ContentType = 'drop' | 'article' | 'report' | 'capsule'

export type UGCType = 'fitpic' | 'reel' | 'outfit'

export interface ProductColor {
  name: string
  hex:  string
}

export interface Product {
  id:          number
  slug:        string
  name:        string
  subtitle:    string
  description: string
  price:       number
  oldPrice?:   number
  badge:       ProductBadge
  category:    ProductCategory
  vibe:        ProductVibe
  colors:      ProductColor[]
  sizes:       string[]
  images:      string[]
  emoji:       string
  inStock:     boolean
  rating:      number
  reviewCount: number
  isFeatured:  boolean
  isTrending:  boolean
  trendVelocity: TrendVelocity
  daysUntilDead: number
  stockScarcity: number
  weeklyWearCount: number
}

export interface CartItem {
  product:  Product
  size:     string
  color:    ProductColor
  quantity: number
}

export interface WishlistItem {
  product: Product
}

export interface Review {
  id:         number
  author:     string
  city:       string
  rating:     number
  text:       string
  product:    string
  avatarInitials: string
}

export interface NavLink {
  label: string
  href:  string
}

export interface BlogPost {
  id: string
  slug: string
  type: ContentType
  title: string
  excerpt: string
  content: string
  heroImage: string
  author: string
  publishedAt: Date
  tags: string[]
  relatedProducts?: number[]
}

export interface UserContent {
  id: string
  userId: string
  type: UGCType
  imageUrl: string
  instagramUrl?: string
  products: number[]
  caption: string
  likes: number
  createdAt: Date
}

export interface Collection {
  id: string
  name: string
  description: string
  icon: string
  vibes: ProductVibe[]
}

export interface ReferralCode {
  code: string
  userId: string
  referrals: number
  createdAt: Date
  discount: number
}
