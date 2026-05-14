// ──────────────────────────────────────────────
//  Dope Drip — Emotional Internet Streetwear
//  Product Architecture
// ──────────────────────────────────────────────

import type { Product, Review } from '@/types'

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'late-night-thoughts-tee',
    name: 'Late Night Thoughts',
    subtitle: 'Oversized Fit • Heavyweight Cotton',
    description:
      'Built for people who disappear into playlists after midnight and overthink conversations from three weeks ago. Heavyweight oversized cotton with a washed finish that feels lived-in from day one. Designed for night drives, unread messages, and pretending life has cinematic lighting.',
    price: 799,
    oldPrice: 999,
    badge: 'New Drop',
    category: 'Tees',
    vibe: 'Poetic Internet',
    gender: 'unisex',
    themes: ['Poetic', 'Late Night', 'Cinema'],
    moods: ['Overthinking', 'Detached'],
    colors: [
      { name: 'Midnight Black', hex: '#0D0D0D' },
      { name: 'Washed Charcoal', hex: '#2A2A2A' },
      { name: 'Concrete Gray', hex: '#8A8A8A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/late-night-thoughts-1.jpg'],
    emoji: '🌙',
    inStock: true,
    rating: 4.9,
    reviewCount: 124,
    isFeatured: true,
    isTrending: true,
    trendState: 'everywhere',
    daysUntilArchive: 14,
    stockScarcity: 45,
    weeklyWearCount: 342,
    story:
      'Inspired by doomscrolling at 2:14 AM while convincing yourself you are emotionally fine.',
  },

  {
    id: 2,
    slug: 'emotionally-unavailable-hoodie',
    name: 'Emotionally Unavailable',
    subtitle: 'Oversized Hoodie • French Terry',
    description:
      'Minimal graphics. Maximum emotional damage. Heavy 320 GSM French terry hoodie with a relaxed oversized silhouette made for cold nights, cancelled plans, and selective replies.',
    price: 1499,
    oldPrice: 1899,
    badge: 'Trending',
    category: 'Hoodies',
    vibe: 'Minimal Emotional',
    gender: 'unisex',
    themes: ['Minimal', 'Poetic'],
    moods: ['Distant', 'Comfort'],
    colors: [
      { name: 'Deep Black', hex: '#111111' },
      { name: 'Smoke Gray', hex: '#4B4B4B' },
      { name: 'Muted Olive', hex: '#4A523C' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/emotionally-unavailable-1.jpg'],
    emoji: '🖤',
    inStock: true,
    rating: 4.8,
    reviewCount: 96,
    isFeatured: true,
    isTrending: true,
    trendState: 'emerging',
    daysUntilArchive: 21,
    stockScarcity: 28,
    weeklyWearCount: 287,
    story:
      'Inspired by people who type paragraphs mentally but send “lol”.',
  },

  {
    id: 3,
    slug: 'chronically-online-tee',
    name: 'Chronically Online',
    subtitle: 'Drop Shoulder • Screen Print',
    description:
      'Your screen time already exposed you. Oversized drop-shoulder tee inspired by internet brainrot, doomscrolling, niche memes, and the inability to leave the group chat alone.',
    price: 799,
    oldPrice: undefined,
    badge: 'Culture Pick',
    category: 'Tees',
    vibe: 'Internet Culture',
    gender: 'unisex',
    themes: ['Internet', 'Meme Culture'],
    moods: ['Chaotic', 'Detached'],
    colors: [
      { name: 'Acid Black', hex: '#161616' },
      { name: 'Terminal Gray', hex: '#727272' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/chronically-online-1.jpg'],
    emoji: '📱',
    inStock: true,
    rating: 4.7,
    reviewCount: 56,
    isFeatured: true,
    isTrending: false,
    trendState: 'fading',
    daysUntilArchive: 5,
    stockScarcity: 12,
    weeklyWearCount: 156,
    story:
      'Inspired by opening Instagram for 2 minutes and accidentally losing 3 hours.',
  },

  {
    id: 4,
    slug: 'main-character-syndrome',
    name: 'Main Character Syndrome',
    subtitle: 'Relaxed Fit • Bio Washed',
    description:
      'For people who walk with soundtrack energy. Relaxed bio-washed cotton tee made for city lights, solo walks, dramatic exits, and treating every moment like a coming-of-age film.',
    price: 749,
    oldPrice: 999,
    badge: 'Editor Pick',
    category: 'Tees',
    vibe: 'Cinema Core',
    gender: 'unisex',
    themes: ['Cinema', 'Streetwear'],
    moods: ['Confident', 'Dreamy'],
    colors: [
      { name: 'Vintage Black', hex: '#1A1A1A' },
      { name: 'Film Gray', hex: '#666666' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: ['/images/products/main-character-1.jpg'],
    emoji: '🎬',
    inStock: true,
    rating: 4.8,
    reviewCount: 81,
    isFeatured: true,
    isTrending: true,
    trendState: 'everywhere',
    daysUntilArchive: 11,
    stockScarcity: 38,
    weeklyWearCount: 401,
    story:
      'Inspired by neon reflections on rainy roads and pretending the universe is filming you.',
  },

  {
    id: 5,
    slug: 'social-battery-low',
    name: 'Social Battery Low',
    subtitle: 'Oversized Hoodie • Fleece Lined',
    description:
      'Soft oversized fleece hoodie for disappearing from the world for a while. Built for comfort days, ignored calls, and wanting silence without explaining yourself.',
    price: 1599,
    oldPrice: undefined,
    badge: 'Most Saved',
    category: 'Hoodies',
    vibe: 'Comfort Core',
    gender: 'unisex',
    themes: ['Comfort', 'Minimal'],
    moods: ['Exhausted', 'Safe'],
    colors: [
      { name: 'Shadow Black', hex: '#0F0F0F' },
      { name: 'Muted Ash', hex: '#545454' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/social-battery-low-1.jpg'],
    emoji: '🔋',
    inStock: true,
    rating: 5.0,
    reviewCount: 31,
    isFeatured: false,
    isTrending: true,
    trendState: 'emerging',
    daysUntilArchive: 28,
    stockScarcity: 67,
    weeklyWearCount: 412,
    story:
      'Inspired by cancelling plans and feeling relieved instantly.',
  },

  {
    id: 6,
    slug: 'cinema-archive-tee',
    name: 'Cinema Archive',
    subtitle: 'Acid Wash • Relaxed Fit',
    description:
      'Vintage-inspired relaxed tee influenced by films that permanently altered personalities. Acid washed for a worn-in feel with minimal front typography and oversized back artwork.',
    price: 849,
    oldPrice: 1099,
    badge: 'Limited',
    category: 'Tees',
    vibe: 'Vintage Cinema',
    gender: 'unisex',
    themes: ['Cinema', 'Vintage'],
    moods: ['Nostalgic', 'Introspective'],
    colors: [
      { name: 'Film Grain', hex: '#3A3A3A' },
      { name: 'Washed Gray', hex: '#727272' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/cinema-archive-1.jpg'],
    emoji: '🎞️',
    inStock: true,
    rating: 4.6,
    reviewCount: 43,
    isFeatured: false,
    isTrending: false,
    trendState: 'everywhere',
    daysUntilArchive: 10,
    stockScarcity: 35,
    weeklyWearCount: 198,
    story:
      'Inspired by movies that become part of your personality afterwards.',
  },

  {
    id: 7,
    slug: 'too-aware-tee',
    name: 'Too Aware',
    subtitle: 'Oversized Fit • 220 GSM',
    description:
      'For people who think too deeply about everything and somehow still joke about it. Heavyweight oversized tee with minimal typography and subtle neon detailing.',
    price: 899,
    oldPrice: undefined,
    badge: 'Trending',
    category: 'Tees',
    vibe: 'Poetic Streetwear',
    gender: 'unisex',
    themes: ['Poetic', 'Internet'],
    moods: ['Aware', 'Detached'],
    colors: [
      { name: 'Neon Black', hex: '#101010' },
      { name: 'Acid Gray', hex: '#676767' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/too-aware-1.jpg'],
    emoji: '⚡',
    inStock: true,
    rating: 4.8,
    reviewCount: 62,
    isFeatured: false,
    isTrending: true,
    trendState: 'everywhere',
    daysUntilArchive: 18,
    stockScarcity: 52,
    weeklyWearCount: 301,
    story:
      'Inspired by realizing self-awareness does not automatically fix your life.',
  },

  {
    id: 8,
    slug: 'villain-arc-hoodie',
    name: 'Villain Arc',
    subtitle: 'Drop Shoulder • Heavy Fleece',
    description:
      'Heavy fleece oversized hoodie for moments of silent character development. Minimal front branding with oversized back graphic inspired by anime transformations and cinematic rage.',
    price: 1699,
    oldPrice: 2099,
    badge: 'Archive Favorite',
    category: 'Hoodies',
    vibe: 'Anime Cinema',
    gender: 'unisex',
    themes: ['Anime', 'Cinema', 'Streetwear'],
    moods: ['Driven', 'Unhinged'],
    colors: [
      { name: 'Midnight Black', hex: '#0D0D0D' },
      { name: 'Muted Olive', hex: '#3B4333' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/villain-arc-1.jpg'],
    emoji: '⚔️',
    inStock: true,
    rating: 4.9,
    reviewCount: 77,
    isFeatured: false,
    isTrending: true,
    trendState: 'emerging',
    daysUntilArchive: 22,
    stockScarcity: 41,
    weeklyWearCount: 267,
    story:
      'Inspired by anime protagonists becoming terrifyingly locked in.',
  },

  // ── Oversized Tees ──────────────────────────

  {
    id: 9,
    slug: 'detached-oversized-tee',
    name: 'Detached',
    subtitle: 'Oversized Tee • 240 GSM Boxy Fit',
    description:
      'Boxy drop-shoulder cut in heavyweight cotton for people who operate at their own frequency. Washed finish, zero graphics, maximum presence.',
    price: 899,
    oldPrice: 1099,
    badge: 'New Drop',
    category: 'Oversized Tees',
    vibe: 'Minimal Emotional',
    gender: 'unisex',
    themes: ['Minimal', 'Poetic'],
    moods: ['Detached', 'Calm'],
    colors: [
      { name: 'Washed Black', hex: '#131313' },
      { name: 'Stone', hex: '#9A9A8A' },
      { name: 'Cream', hex: '#E8E4DC' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/detached-1.jpg'],
    emoji: '🌫️',
    inStock: true,
    rating: 4.8,
    reviewCount: 38,
    isFeatured: true,
    isTrending: true,
    trendState: 'everywhere',
    daysUntilArchive: 30,
    stockScarcity: 55,
    weeklyWearCount: 210,
    story: 'Inspired by existing quietly in a loud world.',
  },

  {
    id: 10,
    slug: 'signal-lost-oversized-tee',
    name: 'Signal Lost',
    subtitle: 'Oversized Tee • Pigment Dyed',
    description:
      'Pigment-dyed boxy tee that looks like it has been through three emotional eras. Front micro-text, back graphic. Hits different in natural light.',
    price: 949,
    badge: 'Trending',
    category: 'Oversized Tees',
    vibe: 'Internet Culture',
    gender: 'unisex',
    themes: ['Internet', 'Poetic'],
    moods: ['Chaotic', 'Aware'],
    colors: [
      { name: 'Faded Black', hex: '#1C1C1C' },
      { name: 'Washed Olive', hex: '#5A5A40' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/signal-lost-1.jpg'],
    emoji: '📡',
    inStock: true,
    rating: 4.7,
    reviewCount: 29,
    isFeatured: false,
    isTrending: true,
    trendState: 'emerging',
    daysUntilArchive: 20,
    stockScarcity: 40,
    weeklyWearCount: 180,
    story: 'Inspired by being reachable but unresponsive.',
  },

  // ── Sweatshirts ─────────────────────────────

  {
    id: 11,
    slug: 'archive-mode-sweatshirt',
    name: 'Archive Mode',
    subtitle: 'Crewneck Sweatshirt • 320 GSM Fleece',
    description:
      'Heavyweight crewneck for going dark and getting things done. Minimal branding, structured silhouette, built to outlast every phase you go through.',
    price: 1299,
    oldPrice: 1599,
    badge: 'New Drop',
    category: 'Sweatshirts',
    vibe: 'Minimal Emotional',
    gender: 'unisex',
    themes: ['Minimal', 'Streetwear'],
    moods: ['Focused', 'Withdrawn'],
    colors: [
      { name: 'Jet Black', hex: '#0A0A0A' },
      { name: 'Graphite', hex: '#3D3D3D' },
      { name: 'Off White', hex: '#EBEBEB' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/archive-mode-1.jpg'],
    emoji: '🗂️',
    inStock: true,
    rating: 4.9,
    reviewCount: 54,
    isFeatured: true,
    isTrending: true,
    trendState: 'everywhere',
    daysUntilArchive: 45,
    stockScarcity: 60,
    weeklyWearCount: 290,
    story: 'Inspired by turning notifications off and actually getting somewhere.',
  },

  {
    id: 12,
    slug: '404-motivation-sweatshirt',
    name: '404: Motivation',
    subtitle: 'Crewneck Sweatshirt • French Terry',
    description:
      'French terry crewneck for days when effort is simply not available. Relaxed fit with a washed finish. The print says what you are already thinking.',
    price: 1199,
    badge: 'Culture Pick',
    category: 'Sweatshirts',
    vibe: 'Internet Culture',
    gender: 'unisex',
    themes: ['Internet', 'Meme Culture'],
    moods: ['Exhausted', 'Ironic'],
    colors: [
      { name: 'Washed Black', hex: '#161616' },
      { name: 'Smoke', hex: '#525252' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/images/products/404-motivation-1.jpg'],
    emoji: '💀',
    inStock: true,
    rating: 4.8,
    reviewCount: 41,
    isFeatured: false,
    isTrending: true,
    trendState: 'emerging',
    daysUntilArchive: 25,
    stockScarcity: 35,
    weeklyWearCount: 220,
    story: 'Inspired by opening your laptop and immediately closing it again.',
  },

  // ── Crop Tops (Women only) ───────────────────

  {
    id: 13,
    slug: 'soft-chaos-crop-top',
    name: 'Soft Chaos',
    subtitle: "Women's Crop Top • Ribbed Cotton",
    description:
      'Fitted ribbed crop top for people who are simultaneously falling apart and thriving. Clean cut, minimal design, hits at the perfect length.',
    price: 699,
    oldPrice: 899,
    badge: 'New Drop',
    category: 'Crop Tops',
    vibe: 'Poetic Internet',
    gender: 'women',
    themes: ['Poetic', 'Minimal'],
    moods: ['Chaotic', 'Confident'],
    colors: [
      { name: 'Black', hex: '#0D0D0D' },
      { name: 'Chalk White', hex: '#F0EDE8' },
      { name: 'Dusty Mauve', hex: '#9E7D7D' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: ['/images/products/soft-chaos-1.jpg'],
    emoji: '🌸',
    inStock: true,
    rating: 4.9,
    reviewCount: 66,
    isFeatured: true,
    isTrending: true,
    trendState: 'everywhere',
    daysUntilArchive: 18,
    stockScarcity: 50,
    weeklyWearCount: 310,
    story: 'Inspired by being the most put-together disaster in the room.',
  },

  {
    id: 14,
    slug: 'cinema-girl-crop-top',
    name: 'Cinema Girl',
    subtitle: "Women's Crop Top • Jersey Cotton",
    description:
      'Jersey cotton crop top inspired by the girl who quotes films nobody has seen. Vintage graphic front, clean back, worn best with high-waist anything.',
    price: 749,
    badge: 'Trending',
    category: 'Crop Tops',
    vibe: 'Cinema Core',
    gender: 'women',
    themes: ['Cinema', 'Vintage'],
    moods: ['Dreamy', 'Confident'],
    colors: [
      { name: 'Washed Black', hex: '#1A1A1A' },
      { name: 'Vintage Cream', hex: '#EDE8DF' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: ['/images/products/cinema-girl-1.jpg'],
    emoji: '🎞️',
    inStock: true,
    rating: 4.8,
    reviewCount: 48,
    isFeatured: false,
    isTrending: true,
    trendState: 'emerging',
    daysUntilArchive: 22,
    stockScarcity: 42,
    weeklyWearCount: 240,
    story: 'Inspired by having a Letterboxd account and strong opinions.',
  },
]

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Arjun S.',
    city: 'Hyderabad',
    rating: 5,
    text: 'Wore this during a night drive and suddenly felt like the main character in an indie film.',
    product: 'Late Night Thoughts',
    avatarInitials: 'AS',
  },

  {
    id: 2,
    author: 'Ananya T.',
    city: 'Bangalore',
    rating: 5,
    text: 'The fit, the vibe, the washed texture — this feels like something pulled straight out of a saved Pinterest board.',
    product: 'Emotionally Unavailable',
    avatarInitials: 'AT',
  },

  {
    id: 3,
    author: 'Zaid K.',
    city: 'Mumbai',
    rating: 5,
    text: 'This hoodie feels like disappearing from the world for a while. Genuinely one of the best oversized fits I own.',
    product: 'Social Battery Low',
    avatarInitials: 'ZK',
  },

  {
    id: 4,
    author: 'Rhea M.',
    city: 'Pune',
    rating: 4,
    text: 'The back graphic on Villain Arc is insane. Feels like anime rage energy in hoodie form.',
    product: 'Villain Arc',
    avatarInitials: 'RM',
  },
]

// ── Helpers ──────────────────────────────────

export function getProductBySlug(slug: string) {
  return PRODUCTS.find(p => p.slug === slug) ?? null
}

export function getProductsByCategory(cat: string) {
  if (cat === 'all') return PRODUCTS

  return PRODUCTS.filter(
    p => p.category.toLowerCase() === cat.toLowerCase()
  )
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.isFeatured)
}

export function getTrendingProducts() {
  return PRODUCTS.filter(p => p.isTrending)
}

export function getHoodies() {
  return PRODUCTS.filter(p => p.category === 'Hoodies')
}

export function getRelatedProducts(currentId: number, limit = 4) {
  return PRODUCTS.filter(p => p.id !== currentId).slice(0, limit)
}

export function getNewArrivals(limit = 4) {
  return PRODUCTS.filter(p => p.badge === 'New Drop' || p.badge === 'Trending').slice(0, limit)
}

