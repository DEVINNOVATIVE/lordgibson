import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleHeader } from '@/components/blog/article-header'
import { ArticleBody } from '@/components/blog/article-body'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'

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

  return (
    <>
      <SiteHeader />
      <main>
        <ArticleHeader post={post} />
        <ArticleBody post={post} related={related} />
      </main>
      <SiteFooter />
    </>
  )
}
