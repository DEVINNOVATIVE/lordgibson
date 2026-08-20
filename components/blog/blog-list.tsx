import { BlogListClient } from '@/components/blog/blog-list-client'
import type { BlogPost } from '@/lib/blog'

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const featured = posts.find((p) => p.featured) ?? posts[0]

  return <BlogListClient posts={posts} featured={featured} />
}
