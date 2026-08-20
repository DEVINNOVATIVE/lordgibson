import Link from 'next/link'
import { ArrowRight, Building2, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'

const stats = [
  { Icon: Building2, label: 'IBC Registered', value: 'International Business Company' },
  { Icon: TrendingUp, label: 'Alternative Funding', value: 'Simple, fast & results-driven' },
  { Icon: Users, label: 'Client Focused', value: 'Streamlined process, positive outcomes' },
]

export function CeoIntro() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-dotted opacity-[0.4]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="LNBG International Investments"
            title="CEO & Founder of LNBG International Investment"
          />
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-muted-foreground">
            <p>
              LNBG International Investments is an IBC (International Business
              Company), also known by the acronym &ldquo;LNBG&rdquo;. It is a
              company offering an alternative to traditional funding.
            </p>
            <p>
              As did the United Kingdom of Great Britain from Europe, people are
              forced to follow guidelines which are long, tedious and
              overwhelming. LNBG streamlines the process — making it simple, easy
              and quick, while assuring positive results for our clients.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-14">
          <div className="grid gap-5 sm:grid-cols-3">
            {stats.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center card-glow card-glow-hover hover:-translate-y-1"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                  <Icon className="size-6" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {label}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-12">
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-primary/20 bg-transparent px-8 text-foreground hover:bg-secondary hover:border-accent/40"
              render={<Link href="/about" />}
            >
              View More
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
