import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import type { BlogPost } from '@/lib/blog'

function NavItem({
  post,
  direction,
}: {
  post: BlogPost
  direction: 'previous' | 'next'
}) {
  const isPrevious = direction === 'previous'

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-primary/5 ${
        isPrevious ? 'sm:text-left' : 'sm:text-right'
      }`}
    >
      <div className="flex flex-col gap-3 p-5 pb-4">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-accent ${
            isPrevious ? '' : 'sm:ml-auto'
          }`}
        >
          {isPrevious ? (
            <>
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
              Previous Article
            </>
          ) : (
            <>
              Next Article
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </span>

        <h3 className="font-serif text-base font-semibold leading-snug text-balance text-foreground transition-colors group-hover:text-accent sm:text-lg">
          {post.title}
        </h3>
      </div>

      <div className="relative mt-auto aspect-[16/9] w-full overflow-hidden">
        <Image
          src={post.image || '/placeholder.svg'}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </Link>
  )
}

export function ArticleNavigation({
  previous,
  next,
}: {
  previous: BlogPost | null
  next: BlogPost | null
}) {
  if (!previous && !next) return null

  return (
    <Reveal className="mx-auto mt-16 max-w-5xl px-5 sm:mt-20 sm:px-8">
      <div className="mb-6 flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Continue Reading
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div
        className={`grid gap-5 ${previous && next ? 'sm:grid-cols-2' : 'sm:max-w-md'}`}
      >
        {previous && <NavItem post={previous} direction="previous" />}
        {next && <NavItem post={next} direction="next" />}
      </div>
    </Reveal>
  )
}
