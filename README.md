# 🔥 Dope Drip — Frontend

> Streetwear for the chronically online. Built with Next.js 14, Tailwind CSS, and Zustand.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build && npm start
```

---

## 📁 Project Structure

```
dope-drip/
│
├── src/
│   │
│   ├── app/                          # Next.js App Router — all pages live here
│   │   ├── layout.tsx                # Root layout: fonts, navbar, footer, toast
│   │   ├── page.tsx                  # Homepage (assembles all home sections)
│   │   ├── not-found.tsx             # Custom 404 page
│   │   │
│   │   ├── (auth)/                   # Auth route group (no shared header/footer layout)
│   │   │   ├── layout.tsx            # Centered card layout for auth pages
│   │   │   ├── login/page.tsx        # Login page
│   │   │   └── signup/page.tsx       # Signup page
│   │   │
│   │   ├── cart/
│   │   │   └── page.tsx              # Cart page with order summary
│   │   │
│   │   ├── wishlist/
│   │   │   └── page.tsx              # Wishlist page
│   │   │
│   │   ├── collections/
│   │   │   └── [category]/
│   │   │       └── page.tsx          # Product Listing Page — /collections/tees, /collections/hoodies, /collections/all
│   │   │
│   │   └── products/
│   │       └── [slug]/
│   │           └── page.tsx          # Product Detail Page — /products/touch-grass-tee
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx   # ✏️ Edit MESSAGES array to change promo text
│   │   │   ├── Navbar.tsx            # Sticky nav with cart/wishlist badge counts
│   │   │   └── Footer.tsx            # Footer with links + social icons
│   │   │
│   │   ├── home/                     # Homepage sections — one file per section
│   │   │   ├── Hero.tsx              # Full-height hero with product float
│   │   │   ├── MarqueeBanner.tsx     # ✏️ Edit ITEMS array to change scrolling text
│   │   │   ├── CategoryStrip.tsx     # 4-tile category grid
│   │   │   ├── FeaturedDrops.tsx     # Featured products grid
│   │   │   ├── MemeBanner.tsx        # Brand manifesto + 4 pillars
│   │   │   ├── TrendingSection.tsx   # Ranked list + large featured product
│   │   │   ├── HoodiesSection.tsx    # Hoodies product grid (dark bg)
│   │   │   ├── ReviewsSection.tsx    # Customer reviews
│   │   │   └── NewsletterSection.tsx # Email signup
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.tsx           # Reusable card (used in all grids)
│   │   │   ├── ProductImagePlaceholder.tsx  # ✏️ Replace with <Image> when you have real photos
│   │   │   ├── CollectionsClient.tsx     # Full PLP with filters, sort, search
│   │   │   └── ProductDetailClient.tsx   # Full PDP with size/color selector, add to cart
│   │   │
│   │   ├── cart/                     # (cart UI lives in app/cart/page.tsx directly)
│   │   ├── wishlist/                 # (wishlist UI lives in app/wishlist/page.tsx directly)
│   │   ├── auth/                     # (auth UI lives in app/(auth)/*/page.tsx)
│   │   │
│   │   └── ui/
│   │       └── Toast.tsx             # Global toast notification
│   │
│   ├── lib/
│   │   └── products.ts               # ✏️ MAIN DATA FILE — add/edit products here
│   │                                 #    Also exports helper functions (getProductBySlug, etc.)
│   │
│   ├── store/
│   │   └── index.ts                  # Zustand stores: cart, wishlist, toast
│   │                                 #    Cart + Wishlist persist to localStorage
│   │
│   ├── types/
│   │   └── index.ts                  # All TypeScript interfaces (Product, CartItem, etc.)
│   │
│   └── styles/
│       └── globals.css               # Tailwind base + custom CSS (marquee, animations, btn classes)
│
├── public/
│   └── images/
│       └── products/                 # ✏️ Drop product photos here as JPG/WebP
│                                     #    Name them matching Product.images[] paths
│
├── tailwind.config.ts                # ✏️ Edit brand colors + fonts here
├── next.config.ts                    # Image domains, etc.
└── package.json
```

---

## ✏️ Common Edits

### Add a new product
Open `src/lib/products.ts` and add an object to the `PRODUCTS` array. Copy an existing one and update the fields.

### Change brand colors
Open `tailwind.config.ts` → update the `colors` object under `theme.extend`.

### Change announcement bar text
Open `src/components/layout/AnnouncementBar.tsx` → edit the `MESSAGES` array.

### Change marquee text
Open `src/components/home/MarqueeBanner.tsx` → edit the `ITEMS` array.

### Add real product images
1. Drop your images into `public/images/products/`
2. Update `images: ['/images/products/your-image.jpg']` in the product data
3. Replace `<ProductImagePlaceholder>` in `ProductCard.tsx` with Next.js `<Image>`

### Add a new page
Create a file at `src/app/your-page/page.tsx` — Next.js will auto-route it to `/your-page`.

---

## 🛒 State Management (Zustand)

| Store          | Persisted? | What it does                         |
|----------------|-----------|---------------------------------------|
| `useCartStore` | ✅ Yes     | Cart items, add/remove/update qty     |
| `useWishlistStore` | ✅ Yes | Wishlist toggle                      |
| `useToastStore` | ❌ No    | Show temporary toast notifications   |

---

## 🔌 Backend / API (Next Steps)

The data layer is currently static (`src/lib/products.ts`). To connect a real backend:

1. **Shopify** — Use `@shopify/hydrogen` or the Storefront API
2. **Strapi / Sanity** — Replace `PRODUCTS` with a `fetch()` call in Server Components
3. **Supabase / Firebase** — Add auth + orders database
4. **Razorpay** — Wire up the checkout button in `app/cart/page.tsx`

---

## 📦 Key Dependencies

| Package       | Purpose                        |
|---------------|-------------------------------|
| `next` 14     | React framework, App Router    |
| `zustand`     | Lightweight state management   |
| `tailwindcss` | Utility-first CSS              |
| `lucide-react`| Icon library                   |
| `framer-motion` | Animations (ready to use)   |

---

Made with 🔥 in India
