'use client'

import { ArticleHeader } from '@/components/blog/article-header'
import { ArticleBody } from '@/components/blog/article-body'
import type { BlogPost } from '@/lib/blog'

export function ArticleClient({
  post,
  related,
  previous,
  next,
}: {
  post: BlogPost
  related: BlogPost[]
  previous: BlogPost | null
  next: BlogPost | null
}) {
  return (
    <>
      <ArticleHeader post={post} />
      <ArticleBody
        post={post}
        related={related}
        previous={previous}
        next={next}
      />
    </>
  )
}
