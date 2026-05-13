import CollectionsClient from '@/components/product/CollectionsClient'
import type { Metadata } from 'next'

interface Props {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = params.category === 'all' ? 'All Drops' : params.category
  return { title: cat }
}

export default function CollectionsPage({ params }: Props) {
  return <CollectionsClient initialCategory={params.category} />
}
