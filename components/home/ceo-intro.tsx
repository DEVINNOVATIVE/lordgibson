import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'

const stats = [
  { Icon: Building2, label: 'IBC Registered', value: 'International Business Company' },
  { Icon: TrendingUp, label: 'Alternative Funding', value: 'Simple, fast & results-driven' },
  { Icon: Users, label: 'Client Focused', value: 'Streamlined process, positive outcomes' },
]

export function CeoIntro() {
  return (
    <section id="enterprise" className="relative overflow-hidden bg-secondary/40 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(201,168,106,0.06),transparent_55%)]" />
      <div className="absolute inset-0 bg-dotted opacity-[0.35]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="left" className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/10 bg-primary p-7 text-center shadow-2xl sm:rounded-[2rem] sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.16),transparent_60%)]" />
              <div className="absolute inset-0 bg-grid opacity-[0.06]" />
              <div className="relative">
                <Image
                  src="/gibson-crest.webp"
                  alt="Gibson family coat of arms"
                  width={140}
                  height={164}
                  className="mx-auto h-auto w-28 drop-shadow-2xl"
                />
                <div className="mx-auto mt-7 h-px w-16 bg-accent/50" />
                <p className="mt-6 font-serif text-3xl font-semibold text-primary-foreground">
                  LNBG
                </p>
                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-accent">
                  International Investments
                </p>
                <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
                  CEO &amp; Founder — Lord Neil Benjamin Gibson. An International
                  Business Company offering a modern alternative to traditional
                  funding.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-accent sm:px-4 sm:text-xs sm:tracking-[0.3em]">
                LNBG International Investments
              </span>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-balance sm:text-5xl">
                CEO &amp; Founder of LNBG International Investment
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
                <p>
                  LNBG International Investments is an IBC (International Business
                  Company), also known by the acronym &ldquo;LNBG&rdquo;. It is a
                  company offering an alternative to traditional funding.
                </p>
                <p>
                  As did the United Kingdom of Great Britain from Europe, people
                  are forced to follow guidelines which are long, tedious and
                  overwhelming. LNBG streamlines the process — making it simple,
                  easy and quick, while assuring positive results for our clients.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22} className="mt-10">
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 card-glow card-glow-hover hover:-translate-y-1"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
                      {label}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.32} className="mt-10">
              <Button
                variant="outline"
                size="lg"
                className="group h-12 w-full rounded-full border-primary/20 bg-transparent px-8 text-foreground hover:border-accent/40 hover:bg-secondary sm:w-auto"
                render={<Link href="/about" />}
              >
                View More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
