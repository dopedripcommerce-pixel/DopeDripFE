// ──────────────────────────────────────────────
//  Dope Drip — Global State (Zustand)
//  Cart · Wishlist · Toast
// ──────────────────────────────────────────────
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product, ProductColor, WishlistItem, UserContent } from '@/types'

// ── Cart ──────────────────────────────────────
interface CartState {
  items:        CartItem[]
  addItem:      (product: Product, size: string, color: ProductColor, qty?: number) => void
  removeItem:   (productId: number, size: string, colorName: string) => void
  updateQty:    (productId: number, size: string, colorName: string, qty: number) => void
  clearCart:    () => void
  totalItems:   () => number
  totalPrice:   () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem(product, size, color, qty = 1) {
        set(state => {
          const idx = state.items.findIndex(
            i => i.product.id === product.id && i.size === size && i.color.name === color.name
          )
          if (idx !== -1) {
            const updated = [...state.items]
            updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + qty }
            return { items: updated }
          }
          return { items: [...state.items, { product, size, color, quantity: qty }] }
        })
      },

      removeItem(productId, size, colorName) {
        set(state => ({
          items: state.items.filter(
            i => !(i.product.id === productId && i.size === size && i.color.name === colorName)
          ),
        }))
      },

      updateQty(productId, size, colorName, qty) {
        if (qty < 1) {
          get().removeItem(productId, size, colorName)
          return
        }
        set(state => ({
          items: state.items.map(i =>
            i.product.id === productId && i.size === size && i.color.name === colorName
              ? { ...i, quantity: qty }
              : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () => get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    }),
    { name: 'dope-drip-cart' }
  )
)

// ── Wishlist ──────────────────────────────────
interface WishlistState {
  items:       WishlistItem[]
  toggle:      (product: Product) => void
  isWished:    (productId: number) => boolean
  totalItems:  () => number
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      toggle(product) {
        set(state => {
          const exists = state.items.some(i => i.product.id === product.id)
          return {
            items: exists
              ? state.items.filter(i => i.product.id !== product.id)
              : [...state.items, { product }],
          }
        })
      },

      isWished: (productId) => get().items.some(i => i.product.id === productId),

      totalItems: () => get().items.length,
    }),
    { name: 'dope-drip-wishlist' }
  )
)

// ── Toast / Notifications ─────────────────────
interface ToastState {
  message:    string
  visible:    boolean
  show:       (msg: string) => void
  hide:       () => void
}

export const useToastStore = create<ToastState>()(set => ({
  message: '',
  visible: false,
  show(msg) {
    set({ message: msg, visible: true })
    setTimeout(() => set({ visible: false }), 2800)
  },
  hide: () => set({ visible: false }),
}))

// ── Email Subscriptions ───────────────────────
interface EmailSubscription {
  email:        string
  subscribed:   boolean
  preferences:  {
    drops:      boolean
    trends:     boolean
    orders:     boolean
    flash:      boolean
  }
  subscribedAt: Date
}

interface EmailStore {
  subscription:   EmailSubscription | null
  subscribe:      (email: string) => void
  unsubscribe:    () => void
  updatePrefs:    (prefs: Partial<EmailSubscription['preferences']>) => void
}

export const useEmailStore = create<EmailStore>()(
  persist(
    (set, get) => ({
      subscription: null,

      subscribe(email) {
        set({
          subscription: {
            email,
            subscribed: true,
            preferences: { drops: true, trends: true, orders: true, flash: false },
            subscribedAt: new Date(),
          },
        })
        const subs = JSON.parse(localStorage.getItem('email_subscribers') || '[]')
        subs.push({ email, subscribedAt: new Date() })
        localStorage.setItem('email_subscribers', JSON.stringify(subs))
      },

      unsubscribe() {
        set(state => state.subscription ? { subscription: { ...state.subscription, subscribed: false } } : {})
      },

      updatePrefs(prefs) {
        set(state =>
          state.subscription
            ? { subscription: { ...state.subscription, preferences: { ...state.subscription.preferences, ...prefs } } }
            : {}
        )
      },
    }),
    { name: 'dope-drip-email' }
  )
)

// // ── UGC / User Content ────────────────────────
// interface UGCStore {
//   items:    UserContent[]
//   addItem:  (item: Omit<UserContent, 'id' | 'createdAt'>) => void
//   getByProduct: (productId: number) => UserContent[]
//   likeItem: (id: string) => void
// }

// export const useUGCStore = create<UGCStore>()(
//   persist(
//     (set, get) => ({
//       items: [],

//       addItem(item) {
//         const newItem: UserContent = {
//           ...item,
//           id: `ugc_${Date.now()}`,
//           createdAt: new Date(),
//         }
//         set(state => ({ items: [newItem, ...state.items] }))
//       },

//       getByProduct(productId) {
//         return get().items.filter(item => item.products.includes(productId))
//       },

//       likeItem(id) {
//         set(state => ({
//           items: state.items.map(item =>
//             item.id === id ? { ...item, likes: item.likes + 1 } : item
//           ),
//         }))
//       },
//     }),
//     { name: 'dope-drip-ugc' }
//   )
// )

// ── UGC / User Content ────────────────────────
import type { UserContent } from '@/types'

interface UGCStore {
  items:    UserContent[]
  addItem:  (item: Omit<UserContent, 'id' | 'createdAt'>) => void
  getByProduct: (productId: number) => UserContent[]
  likeItem: (id: string) => void
}

export const useUGCStore = create<UGCStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem(item) {
        const newItem: UserContent = {
          ...item,
          id: `ugc_${Date.now()}`,
          createdAt: new Date(),
        }
        set(state => ({ items: [newItem, ...state.items] }))
      },

      getByProduct(productId) {
        return get().items.filter(item => item.products.includes(productId))
      },

      likeItem(id) {
        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, likes: item.likes + 1 } : item
          ),
        }))
      },
    }),
    { name: 'dope-drip-ugc' }
  )
)
