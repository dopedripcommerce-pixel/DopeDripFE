import Hero from '@/components/home/Hero'
import NewArrivals from '@/components/home/NewArrivals'
import CategoriesSection from '@/components/home/CategoriesSection'
import TrendingSection from '@/components/home/TrendingSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <CategoriesSection />
      <TrendingSection />
      <ReviewsSection />
      <NewsletterSection />
    </>
  )
}
