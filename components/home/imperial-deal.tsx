'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

export function ImperialDeal() {
  return (
    <section className="relative overflow-hidden bg-primary py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,106,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-5 lg:gap-20">
        <Reveal direction="left" className="lg:col-span-2">
          <div className="relative mx-auto max-w-xs lg:mx-0">
            <div className="absolute inset-0 animate-float">
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
            </div>
            <motion.div
              whileHover={{ rotate: [0, -3, 3, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/gibson-crest.webp"
                alt="Gibson coat of arms"
                width={180}
                height={210}
                className="relative mx-auto h-auto w-40 drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15} className="lg:col-span-3">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <TrendingUp className="size-3.5" />
              Milestone
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance text-primary-foreground sm:text-5xl">
              Lord Neil Benjamin Gibson signs deal with Imperial Capital LLC
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
            <div className="mt-8 space-y-5 leading-relaxed text-primary-foreground/75">
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

            <div className="mt-10 flex flex-wrap gap-8 border-t border-primary-foreground/10 pt-8">
              {[
                { value: '700+', label: 'Acres in The Bahamas' },
                { value: '$MM', label: 'Multi-Million Dollar Deal' },
                { value: '2022', label: 'Contract Signed April 29' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-serif text-3xl font-semibold text-accent">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
