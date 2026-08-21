'use client'

import Image from 'next/image'
import { TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

const stats = [
  { value: '700+', label: 'Acres in The Bahamas' },
  { value: '$MM', label: 'Multi-Million Dollar Deal' },
  { value: '2022', label: 'Contract Signed April 29' },
]

export function ImperialDeal() {
  return (
    <section id="bahamas" className="relative overflow-hidden bg-primary py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,106,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <Reveal direction="left" className="lg:col-span-5">
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl sm:rounded-[2rem]">
            <div className="relative aspect-[4/5] sm:aspect-[5/6]">
              <Image
                src="/blog/imperial-capital.png"
                alt="Landmark investment agreement with Imperial Capital LLC"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
            </div>
            <div className="absolute inset-x-3 bottom-3 hidden sm:inset-x-6 sm:bottom-6 sm:block">
              <div className="rounded-2xl border border-white/15 bg-primary/50 p-5 backdrop-blur-md">
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <span className="font-serif text-2xl font-semibold text-accent">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-[0.62rem] font-medium uppercase tracking-wider text-primary-foreground/60">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-primary-foreground/5 p-3"
              >
                <span className="font-serif text-lg font-semibold text-accent">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[0.55rem] font-medium uppercase leading-snug tracking-wider text-primary-foreground/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15} className="lg:col-span-7">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.3em]">
              <TrendingUp className="size-3.5" />
              Milestone
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-balance text-primary-foreground sm:text-5xl">
              Lord Neil Benjamin Gibson signs deal with Imperial Capital LLC
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
            <div className="mt-8 space-y-5 leading-relaxed text-primary-foreground/75 sm:text-lg">
              <p>
                April 29th was a significant day for Lord Neil Benjamin Gibson and
                LNBG Investment LLC. On that date, Lord Gibson signed contracts
                with Imperial Capital Investments LLC. This multi-million dollar
                deal is in relation to land owned by Gibson in The Bahamas,
                totalling over 700 acres.
              </p>
              <p>
                The land in The Bahamas was purchased by Gibson several years ago
                and is further proof of his entrepreneurial spirit and his uncanny
                ability to see potential where others may overlook. This particular
                piece of land has a storied past and is now ripe for development —
                and Lord Gibson is excited about what is coming in the very near
                future.
              </p>
            </div>

            <div className="mt-10 hidden items-center gap-6 rounded-2xl border border-accent/20 bg-accent/5 p-5 sm:flex">
              <Image
                src="/gibson-crest.webp"
                alt=""
                width={48}
                height={56}
                className="h-12 w-auto"
              />
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                A defining chapter for LNBG Investment LLC — land, vision and a
                partnership built for the next era of Bahamian development.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
