import type { BlogPost } from '@/types'

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'why-delulu-won',
    type: 'article',
    title: 'Why Delulu Culture Actually Won',
    excerpt: 'Manifesting isn\'t just spiritual—it\'s a entire fashion movement. Here\'s how we got here.',
    content: `Delulu isn't just a meme anymore. It's a way of life. From dating app manifestations to career delusions, the internet has collectively agreed to fake it till we make it—and the fashion is following suit.

This season, we're seeing an explosion of confident, almost aggressively optimistic aesthetics. Oversized fits that say "I take up space." Colors that scream "I\'m the main character." Prints that whisper "this is my era."

The paradox? It actually works. When you dress like the protagonist, you start acting like one. Delulu might be unhinged, but it gets results.`,
    heroImage: '/images/posts/delulu-hero.jpg',
    author: 'Adit Writes',
    publishedAt: new Date('2026-05-10'),
    tags: ['culture', 'trends', 'dating', 'vibe'],
    relatedProducts: [4, 5],
  },
  {
    id: '2',
    slug: 'chronically-online-fashion',
    type: 'article',
    title: 'The Chronically Online Aesthetic Is Becoming Mainstream',
    excerpt: 'What started as ironic internet culture has become actual fashion. We traced the evolution.',
    content: `Remember when looking perpetually tired was a joke? Now it's a vibe.

The chronically online aesthetic—characterized by oversized silhouettes, dark colors, and an almost aggressive "I haven't touched grass" energy—has officially moved from meme to mainstream. TikTok is full of people dressing like they just woke up from a 12-hour doomscroll session.

And honestly? It slaps. There's something authentically relatable about fashion that acknowledges reality: we're all a little unhinged, we're all online too much, and our clothes should probably reflect that.`,
    heroImage: '/images/posts/online-hero.jpg',
    author: 'Adit Writes',
    publishedAt: new Date('2026-05-08'),
    tags: ['internet', 'trends', 'aesthetic', 'authenticity'],
    relatedProducts: [3, 7],
  },
  {
    id: '3',
    slug: 'what-internet-wore-week',
    type: 'report',
    title: 'What Internet Wore This Week',
    excerpt: 'A weekly breakdown of what\'s trending in the trenches of fashion.',
    content: `This week, we saw three major movements:

1. **Peak Cozy Energy** — Oversized hoodies are having a MOMENT. Not just comfortable, but intentionally oversized. The bigger the fit, the bigger the energy.

2. **Delulu Summer Started Early** — Bright colors, confident prints. Main character energy is at an all-time high. Everyone's manifesting something.

3. **Vintage Nostalgia** — Early 2000s is bleeding into late 2020s fashion. Acid wash is back, distressed prints are everywhere, and honestly? We're here for it.

**Most worn this week:** Oversized hoodies (46% spike), followed by vintage-washed tees (34% spike). Summer delusion is winning.`,
    heroImage: '/images/posts/weekly-hero.jpg',
    author: 'Trend Intelligence',
    publishedAt: new Date('2026-05-12'),
    tags: ['weekly', 'trends', 'data'],
    relatedProducts: [5, 1, 6],
  },
  {
    id: '4',
    slug: 'new-collection-cozy-era',
    type: 'drop',
    title: 'COZY ERA — The New Drop',
    excerpt: 'You\'ve entered your cozy era. We have the pieces to prove it.',
    content: `Welcome to the era where comfort meets culture.

We\'ve designed a collection that acknowledges what we all know: life is chaos, so why not wrap yourself in the softest, most oversized fits possible?

Every piece in COZY ERA is built for:
- Actual comfort (not performative)
- Multiple wear scenarios (from bed to street)
- Maximum cultural relevance
- That "I just woke up but make it fashion" vibe

This isn't about trying hard. It's about not trying at all, but doing it *intentionally*.`,
    heroImage: '/images/posts/cozy-era-hero.jpg',
    author: 'Dope Drip Team',
    publishedAt: new Date('2026-05-11'),
    tags: ['drop', 'new', 'cozy'],
    relatedProducts: [5, 8],
  },
  {
    id: '5',
    slug: 'how-to-manifest-fashion',
    type: 'capsule',
    title: 'How to Manifest Fashion (And Actual Life Things)',
    excerpt: 'Delulu works best when you dress the part. Here\'s the formula.',
    content: `Manifestation isn't about spirituality. It's about psychology. And psychology says: **dress like the person you're manifesting into.**

The science is simple. When you wear clothes that align with your intentions, two things happen:

1. You *feel* different (neurological)
2. Others *perceive* you differently (social psychology)

Combined? That's manifesting.

Our Delulu Club collection is specifically designed for this. Confident cuts. Statement colors. Prints that scream "main character." Not because you're trying to be someone else, but because you're giving your brain permission to believe it.

The delusion isn't the destination—it's the transportation.`,
    heroImage: '/images/posts/manifest-hero.jpg',
    author: 'Adit Writes',
    publishedAt: new Date('2026-05-09'),
    tags: ['culture', 'psychology', 'delulu'],
    relatedProducts: [4, 1],
  },
]

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find(p => p.slug === slug) ?? null
}

export function getBlogPostsByType(type: string) {
  return BLOG_POSTS.filter(p => p.type === type)
}

export function getLatestBlogPosts(limit = 3) {
  return [...BLOG_POSTS].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()).slice(0, limit)
}

export function getRelatedPosts(currentSlug: string, limit = 3) {
  const current = getBlogPostBySlug(currentSlug)
  if (!current) return []
  return BLOG_POSTS.filter(p => p.slug !== currentSlug && p.tags.some(t => current.tags.includes(t))).slice(0, limit)
}
