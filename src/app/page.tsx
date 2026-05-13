import Hero from '@/components/home/Hero'
import MarqueeBanner from '@/components/home/MarqueeBanner'
import CategoryStrip from '@/components/home/CategoryStrip'
import CollectionsGrid from '@/components/home/CollectionsGrid'
import FeaturedDrops from '@/components/home/FeaturedDrops'
import MemeBanner from '@/components/home/MemeBanner'
import TrendingSection from '@/components/home/TrendingSection'
import HoodiesSection from '@/components/home/HoodiesSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      {/* <CategoryStrip /> */}
      
      <CollectionsGrid />
      {/* <FeaturedDrops /> */}
      <MemeBanner />
      {/* <HoodiesSection /> */}
      <TrendingSection />
      <ReviewsSection />
      <NewsletterSection />
    </>
  )
}

