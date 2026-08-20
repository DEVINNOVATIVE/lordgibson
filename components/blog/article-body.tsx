import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { ArticleNavigation } from '@/components/blog/article-navigation'
import { BlogCard } from '@/components/blog/blog-card'
import { SectionHeading } from '@/components/section-heading'
import type { BlogPost } from '@/lib/blog'

export function ArticleBody({
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
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <article className="flex flex-col gap-7 border-t border-border/60 pt-12 sm:gap-8 sm:pt-14">
          {post.content.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p
                className={
                  i === 0
                    ? 'border-l-2 border-accent/40 pl-5 text-lg leading-[1.85] text-foreground sm:pl-6 sm:text-xl'
                    : 'leading-[1.85] text-muted-foreground'
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </article>

        <Reveal className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/50 via-card to-card p-8 text-center card-glow sm:rounded-3xl sm:p-10">
            <div className="absolute -right-12 -top-12 size-48 rounded-full bg-accent/5 blur-2xl" />
            <p className="relative font-serif text-xl text-balance text-foreground sm:text-2xl">
              Interested in partnering with LNBG International Investments?
            </p>
            <Link
              href="/contact"
              className="group relative mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              Get in touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>

      <ArticleNavigation previous={previous} next={next} />

      {related.length > 0 && (
        <div className="mx-auto mt-20 max-w-6xl px-5 pb-20 sm:mt-24 sm:px-8 sm:pb-24">
          <Reveal>
            <SectionHeading
              eyebrow="Keep Reading"
              title="Related Articles"
              align="left"
              className="mb-10 sm:mb-12"
            />
          </Reveal>
          <StaggerGroup className="grid gap-8 sm:grid-cols-2">
            {related.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <BlogCard post={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      )}
    </section>
  )
}
