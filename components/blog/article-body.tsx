import Link from 'next/link'
import { Reveal } from '@/components/motion/reveal'
import { BlogCard } from '@/components/blog/blog-card'
import { SectionHeading } from '@/components/section-heading'
import type { BlogPost } from '@/lib/blog'

export function ArticleBody({
  post,
  related,
}: {
  post: BlogPost
  related: BlogPost[]
}) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <article className="flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p
                className={
                  i === 0
                    ? 'text-lg leading-relaxed text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-accent'
                    : 'leading-relaxed text-muted-foreground'
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </article>

        <Reveal className="mt-12">
          <div className="rounded-xl border border-border bg-secondary/60 p-8 text-center">
            <p className="font-serif text-xl text-balance text-foreground">
              Interested in partnering with LNBG International Investments?
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Keep Reading"
            title="Related Articles"
            align="left"
            className="mb-10"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
