'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'

export function HomeCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.14),transparent_62%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.3em]">
            Private Office
          </span>
          <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight text-balance text-primary-foreground sm:text-5xl">
            Begin a conversation with the office of Lord Gibson
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            For investment enquiries, heritage matters or philanthropic
            partnerships — the office of Lord Neil Benjamin Gibson welcomes
            considered correspondence.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button
              size="lg"
              className="group h-12 w-full rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90 sm:h-13 sm:w-auto"
              render={<Link href="/contact" />}
            >
              Get in Touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-primary-foreground/25 bg-primary-foreground/5 px-8 text-base text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground sm:h-13 sm:w-auto"
              render={<Link href="/about" />}
            >
              About Lord Gibson
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
