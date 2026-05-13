import type { Product } from '@/types'

interface EmailTemplate {
  subject: string
  html: string
}

function generateDropAlert(product: Product): EmailTemplate {
  return {
    subject: `🔥 New Drop Just Landed: ${product.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #D4FF00; font-size: 24px;">NEW DROP ALERT</h1>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p style="font-size: 18px; font-weight: bold;">₹${product.price}</p>
        <a href="https://dopedrip.com/products/${product.slug}"
           style="background: #D4FF00; color: #1E1E1E; padding: 12px 24px; text-decoration: none; display: inline-block;">
          Shop Now ⚡
        </a>
      </div>
    `,
  }
}

function generateTrendDying(product: Product, daysLeft: number): EmailTemplate {
  return {
    subject: `⏰ Trend Dying Soon: ${product.name} (${daysLeft}d left)`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #D4FF00;">TREND DYING SOON</h1>
        <p>${product.name} is losing cultural relevance in ${daysLeft} days.</p>
        <p style="font-size: 16px;">Grab it while it's still culturally relevant.</p>
        <a href="https://dopedrip.com/products/${product.slug}"
           style="background: #D4FF00; color: #1E1E1E; padding: 12px 24px; text-decoration: none; display: inline-block;">
          Cop Before It Dies ⚡
        </a>
      </div>
    `,
  }
}

function generateWishlistReminder(product: Product): EmailTemplate {
  return {
    subject: `📌 Your Saved Tee Is Low Stock: ${product.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>You Saved This</h1>
        <h2>${product.name}</h2>
        <p>Only ${product.stockScarcity}% stock remaining. Don't sleep.</p>
        <a href="https://dopedrip.com/products/${product.slug}"
           style="background: #D4FF00; color: #1E1E1E; padding: 12px 24px; text-decoration: none; display: inline-block;">
          Get It Now ⚡
        </a>
      </div>
    `,
  }
}

export const emailService = {
  async sendDropAlert(email: string, product: Product) {
    const template = generateDropAlert(product)
    console.log(`📧 [DROP ALERT] Sending to ${email}:`, template)
    // Mock: save to localStorage
    const sent = JSON.parse(localStorage.getItem('sent_emails') || '[]')
    sent.push({ to: email, type: 'drop_alert', product: product.name, timestamp: new Date() })
    localStorage.setItem('sent_emails', JSON.stringify(sent))
  },

  async sendTrendDying(email: string, product: Product) {
    const template = generateTrendDying(product, product.daysUntilDead)
    console.log(`⏰ [TREND DYING] Sending to ${email}:`, template)
    const sent = JSON.parse(localStorage.getItem('sent_emails') || '[]')
    sent.push({ to: email, type: 'trend_dying', product: product.name, timestamp: new Date() })
    localStorage.setItem('sent_emails', JSON.stringify(sent))
  },

  async sendWishlistReminder(email: string, product: Product) {
    const template = generateWishlistReminder(product)
    console.log(`📌 [WISHLIST REMINDER] Sending to ${email}:`, template)
    const sent = JSON.parse(localStorage.getItem('sent_emails') || '[]')
    sent.push({ to: email, type: 'wishlist_reminder', product: product.name, timestamp: new Date() })
    localStorage.setItem('sent_emails', JSON.stringify(sent))
  },

  // Batch send for cron jobs
  async sendBatchTrendAlerts() {
    console.log('🔄 Running batch trend alerts...')
    const subscribers = JSON.parse(localStorage.getItem('email_subscribers') || '[]')
    console.log(`Sending to ${subscribers.length} subscribers`)
  },
}
