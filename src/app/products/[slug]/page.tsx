import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, getRelatedProducts } from '@/lib/products'
import ProductDetailClient from '@/components/product/ProductDetailClient'

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Not Found' }
  return {
    title: product.name,
    description: product.description,
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getRelatedProducts(product.id, 4)

  return <ProductDetailClient product={product} related={related} />
}
