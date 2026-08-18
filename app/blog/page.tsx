import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { BlogList } from '@/components/blog/blog-list'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Lord Gibson UK',
  description:
    'News, insights, and stories from Lord Neil Benjamin Gibson and LNBG International Investments.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Blog"
          subtitle="News, insights, and stories from Lord Neil Benjamin Gibson and LNBG International Investments."
          image="/blog-hero.png"
          imageAlt="Elegant dark library study with leather-bound books"
        />
        <BlogList posts={posts} />
      </main>
      <SiteFooter />
    </>
  )
}
