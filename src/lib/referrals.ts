import type { ReferralCode } from '@/types'

export const referralService = {
  generateCode(userId: string): string {
    return `DRIP${userId.toUpperCase().slice(0, 3)}${Math.random().toString(36).substring(2, 7).toUpperCase()}`
  },

  getUserCode(userId: string): ReferralCode | null {
    const codes = JSON.parse(sessionStorage.getItem('referral_codes') || '[]')
    return codes.find((c: ReferralCode) => c.userId === userId) ?? null
  },

  createUserCode(userId: string, discount = 10): ReferralCode {
    const code = this.generateCode(userId)
    const referralCode: ReferralCode = {
      code,
      userId,
      referrals: 0,
      createdAt: new Date(),
      discount,
    }
    const codes = JSON.parse(sessionStorage.getItem('referral_codes') || '[]')
    codes.push(referralCode)
    sessionStorage.setItem('referral_codes', JSON.stringify(codes))
    return referralCode
  },

  addReferral(code: string): boolean {
    const codes = JSON.parse(sessionStorage.getItem('referral_codes') || '[]')
    const referral = codes.find((c: ReferralCode) => c.code === code)
    if (referral) {
      referral.referrals += 1
      sessionStorage.setItem('referral_codes', JSON.stringify(codes))
      return true
    }
    return false
  },

  getLeaderboard(limit = 10): ReferralCode[] {
    const codes = JSON.parse(sessionStorage.getItem('referral_codes') || '[]')
    return codes.sort((a: ReferralCode, b: ReferralCode) => b.referrals - a.referrals).slice(0, limit)
  },

  trackClick(code: string) {
    const clicks = JSON.parse(sessionStorage.getItem('referral_clicks') || '{}')
    clicks[code] = (clicks[code] || 0) + 1
    sessionStorage.setItem('referral_clicks', JSON.stringify(clicks))
  },
}
