'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { FeaturedPost } from '@/components/blog/featured-post'
import { BlogCard } from '@/components/blog/blog-card'
import { BlogCardSkeleton, FeaturedPostSkeleton } from '@/components/blog/blog-skeleton'
import type { BlogPost } from '@/lib/blog'
import { POSTS_PER_PAGE } from '@/lib/blog'
import { cn } from '@/lib/utils'

type Props = {
  posts: BlogPost[]
  featured: BlogPost
}

function getPageList(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | 'ellipsis')[] = [1]

  if (current > 3) pages.push('ellipsis')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (current < total - 2) pages.push('ellipsis')

  pages.push(total)

  return pages
}

export function BlogListClient({ posts, featured }: Props) {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const rest = posts.filter((p) => p.slug !== featured.slug)
  const totalPages = Math.ceil(rest.length / POSTS_PER_PAGE)
  const start = (page - 1) * POSTS_PER_PAGE
  const pageItems = rest.slice(start, start + POSTS_PER_PAGE)

  const simulateLoad = useCallback(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const cleanup = simulateLoad()
    return cleanup
  }, [page, simulateLoad])

  const goToPage = (p: number) => {
    setPage(Math.max(1, Math.min(p, totalPages)))
    if (typeof window !== 'undefined') {
      document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {loading ? (
          <FeaturedPostSkeleton />
        ) : (
          <FeaturedPost post={featured} />
        )}

        <div id="blog-grid" className="mt-24 scroll-mt-28">
          <Reveal>
            <SectionHeading
              eyebrow="Latest Insights"
              title="News & Stories"
              align="left"
              className="mb-12"
            />
          </Reveal>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
                  <BlogCardSkeleton key={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`page-${page}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {pageItems.map((post) => (
                    <StaggerItem key={post.slug} className="h-full">
                      <BlogCard post={post} />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </motion.div>
            )}
          </AnimatePresence>

          {totalPages > 1 && !loading && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent/40 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="size-5" />
              </button>

              {getPageList(page, totalPages).map((item, i) =>
                item === 'ellipsis' ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="inline-flex size-11 items-center justify-center text-muted-foreground"
                  >
                    &hellip;
                  </span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goToPage(item)}
                    className={cn(
                      'inline-flex size-11 items-center justify-center rounded-full border text-sm font-semibold transition-all',
                      item === page
                        ? 'border-primary bg-primary text-primary-foreground shadow-md'
                        : 'border-border bg-card text-muted-foreground hover:border-accent/40 hover:bg-secondary hover:text-foreground',
                    )}
                  >
                    {item}
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent/40 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
