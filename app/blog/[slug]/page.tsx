import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleClient } from '@/components/blog/article-client'
import {
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from '@/lib/blog'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Article Not Found | Lord Gibson UK' }
  return {
    title: `${post.title} | Lord Gibson UK`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const related = getRelatedPosts(slug)
  const { previous, next } = getAdjacentPosts(slug)

  return (
    <>
      <SiteHeader />
      <main>
        <ArticleClient
          post={post}
          related={related}
          previous={previous}
          next={next}
        />
      </main>
      <SiteFooter />
    </>
  )
}
