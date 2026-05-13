import Link from 'next/link'
import { Instagram, Twitter, Youtube } from 'lucide-react'

const SHOP_LINKS    = ['T-Shirts','Hoodies','New Drops','Sale']
const HELP_LINKS    = ['Size Guide','Shipping Info','Returns & Exchanges','Track Order']
const COMPANY_LINKS = ['About Us','Blog','Careers','Contact']

export default function Footer() {
  return (
    <footer style={{background:'#141414'}}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 md:px-16 pt-16 pb-10">
        <div>
          <div className="font-display text-4xl text-white tracking-[0.15em] mb-4">
            DOPE<span style={{color:'#D4FF00'}}>DRIP</span>
          </div>
          <p className="text-[#888] text-sm leading-relaxed">
            Streetwear for the culturally online. Dropping heat since 2026.
          </p>
          <div className="flex gap-4 mt-6">
            {[Instagram,Twitter,Youtube].map((Icon,i) => (
              <a key={i} href="#" className="text-[#555] hover:text-white transition-colors" aria-label="social">
                <Icon size={18}/>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="overline-label mb-4">Shop</h4>
          {SHOP_LINKS.map(l => (
            <Link key={l} href="/collections/all" className="block text-[#888] hover:text-white text-sm mb-2 transition-colors">{l}</Link>
          ))}
        </div>
        <div>
          <h4 className="overline-label mb-4">Help</h4>
          {HELP_LINKS.map(l => (
            <a key={l} href="#" className="block text-[#888] hover:text-white text-sm mb-2 transition-colors">{l}</a>
          ))}
        </div>
        <div>
          <h4 className="overline-label mb-4">Company</h4>
          {COMPANY_LINKS.map(l => (
            <a key={l} href="#" className="block text-[#888] hover:text-white text-sm mb-2 transition-colors">{l}</a>
          ))}
        </div>
      </div>
      <div style={{borderTop:'1px solid #2A2A2A'}} className="px-8 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-mono text-[11px] text-[#555] tracking-widest">© {new Date().getFullYear()} DOPE DRIP. ALL RIGHTS RESERVED.</p>
        <p className="font-mono text-[11px] text-[#555] tracking-widest">MADE WITH ⚡ IN INDIA</p>
      </div>
    </footer>
  )
}
