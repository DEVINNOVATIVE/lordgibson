'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/estate-hero.png"
          alt="A grand English stately home at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/82 to-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
        <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Lord of Wheldrake &amp; Warter Priory
          </span>
        </div>

        <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-balance text-primary-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
          The History of{' '}
          <span className="text-shimme">Lord Neil Benjamin Gibson</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75 sm:text-xl">
          A businessman, international investor and philanthropist who built his
          family&apos;s legacy from Leeds, England into an enterprise reaching
          across the world — from the western hemisphere to Dubai, UAE.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="group h-13 rounded-full bg-accent px-8 text-base text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
            render={<Link href="/about" />}
          >
            Read the Story
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-13 rounded-full border-primary-foreground/25 bg-primary-foreground/5 px-8 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 hover:text-primary-foreground"
            render={<Link href="/contact" />}
          >
            Get in Touch
          </Button>
        </div>

        <div className="mt-16 hidden items-center gap-10 border-t border-primary-foreground/10 pt-8 sm:flex">
          {[
            { value: '700+', label: 'Acres in The Bahamas' },
            { value: '27', label: 'Years in the USA' },
            { value: '3', label: 'Continents Reached' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-accent">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
                {stat.label}
              </span>
            </div>
          ))}
      </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary-foreground/40">
            Scroll
          </span>
          <ChevronDown className="size-5 animate-bounce text-accent/60" />
        </div>
      </div>
    </section>
  )
}
