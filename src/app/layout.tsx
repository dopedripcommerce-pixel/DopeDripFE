import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, Space_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Toast from '@/components/ui/Toast'
// import AnnouncementBar from '@/components/layout/AnnouncementBar'
import LoaderWrapper from '@/components/ui/LoaderWrapper'
import HeaderContainer from '@/components/layout/HeaderContainer'

const bebasNeue = Bebas_Neue({ weight:'400', subsets:['latin'], variable:'--font-bebas', display:'swap' })
const dmSans    = DM_Sans({ subsets:['latin'], variable:'--font-dm-sans', display:'swap' })
const spaceMono = Space_Mono({ weight:['400','700'], subsets:['latin'], variable:'--font-space-mono', display:'swap' })

export const metadata: Metadata = {
  title: { default:'Dope Drip — Wear What\'s Now', template:'%s | Dope Drip' },
  description:'Capture the zeitgeist. Wear evolving cultural trends before they fade. Drops that define your era.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body style={{background:'#1E1E1E'}}>
        {/* Synchronously restore site-ready for returning visitors before first paint */}
        <script dangerouslySetInnerHTML={{__html:"if(sessionStorage.getItem('loaderShown'))document.body.classList.add('site-ready')"}} />
        <LoaderWrapper />
        <HeaderContainer>
          {/* <AnnouncementBar/> */}
          <Navbar/>
        </HeaderContainer>
        <main className="page-enter">{children}</main>
        <Footer/>
        <Toast/>
      </body>
    </html>
  )
}
