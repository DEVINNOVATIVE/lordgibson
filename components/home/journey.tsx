'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const chapters = [
  {
    href: '#heritage',
    image: '/waltonhall.png',
    imageAlt: 'Walton Hall, West Yorkshire',
    eyebrow: '01 — Heritage',
    title: 'Warter Priory & Wheldrake',
    copy: 'Titles, Walton Hall and the English beginning.',
  },
  {
    href: '#enterprise',
    image: '/blog/imperial-capital.png',
    imageAlt: 'International investment partnership',
    eyebrow: '02 — Enterprise',
    title: 'LNBG International',
    copy: 'An IBC built to simplify capital and results.',
  },
  {
    href: '#bahamas',
    image: '/bahamas-island.png',
    imageAlt: 'Tropical coastline in The Bahamas',
    eyebrow: '03 — Bahamas',
    title: 'Imperial Capital Deal',
    copy: '700 acres and a multi-million dollar landmark.',
  },
  {
    href: '#dubai',
    image: '/dubai-skyline.png',
    imageAlt: 'Dubai skyline at golden hour',
    eyebrow: '04 — Dubai',
    title: 'Global Expansion',
    copy: 'From Leeds and the USA to the UAE.',
  },
]

const path = [
  'Leeds, England',
  'West Yorkshire',
  'United States',
  'The Bahamas',
  'Belize',
  'Dubai, UAE',
]

export function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-background py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.07),transparent_58%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.3em]">
                The Journey
              </span>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-balance sm:text-5xl">
                Four chapters of a global legacy
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Heritage in England. Capital across the Atlantic. Land in The
                Bahamas. A strategic hub in Dubai. Follow the story as it unfolds.
              </p>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:mx-12 lg:block" />
          </div>
        </Reveal>

        <StaggerGroup className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {chapters.map((chapter) => (
            <StaggerItem key={chapter.href} className="h-full">
              <a
                href={chapter.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card card-glow card-glow-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-primary/40 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-[0.65rem] sm:tracking-[0.22em]">
                    {chapter.eyebrow}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl font-semibold leading-snug text-foreground">
                      {chapter.title}
                    </h3>
                    <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {chapter.copy}
                  </p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div className="relative mt-12 overflow-hidden border-y border-border/70 bg-secondary/50 py-3 sm:mt-16 sm:py-4">
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {[...path, ...path].map((place, i) => (
            <span
              key={`${place}-${i}`}
              className="inline-flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground"
            >
              {place}
              <span className="size-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
