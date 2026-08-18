import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { FeaturedPost } from '@/components/blog/featured-post'
import { BlogCard } from '@/components/blog/blog-card'
import type { BlogPost } from '@/lib/blog'

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured.slug)

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FeaturedPost post={featured} />

        <div className="mt-20">
          <SectionHeading
            eyebrow="Latest Insights"
            title="News & Stories"
            align="left"
            className="mb-10"
          />

          <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
