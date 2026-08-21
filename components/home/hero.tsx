'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const scenes = [
  {
    src: '/estate-hero.png',
    alt: 'A grand English stately home at dusk, reflected in still water',
    place: 'West Yorkshire',
    region: 'England',
    tone: 'from-primary/82 via-primary/48 to-primary/18',
  },
  {
    src: '/walton-hall.png',
    alt: 'Walton Hall on its island lake, ancestral English setting',
    place: 'Walton Hall',
    region: 'Heritage',
    tone: 'from-primary/78 via-primary/42 to-primary/16',
  },
  {
    src: '/bahamas-island.png',
    alt: 'Aerial view of a tropical island in The Bahamas',
    place: 'The Bahamas',
    region: '700+ Acres',
    tone: 'from-primary/80 via-primary/40 to-cyan-950/20',
  },
  {
    src: '/dubai-skyline.png',
    alt: 'Dubai marina skyline at golden hour',
    place: 'Dubai',
    region: 'UAE',
    tone: 'from-primary/80 via-primary/38 to-amber-950/15',
  },
]

const stats = [
  { value: '700+', label: 'Acres in The Bahamas' },
  { value: '27', label: 'Years in the USA' },
  { value: '3', label: 'Continents Reached' },
]

const SCENE_MS = 7500

function Corner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M70 2H22C10.95 2 2 10.95 2 22V70"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M70 12H30C16.75 12 12 16.75 12 30V70"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.45"
      />
      <circle cx="2" cy="2" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [spot, setSpot] = useState({ x: 72, y: 38 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.58], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  useEffect(() => {
    if (reduceMotion || paused) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % scenes.length)
    }, SCENE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, paused, active])

  const scene = scenes[active]

  return (
    <section
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        setSpot({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        })
      }}
      className="relative -mt-[4.5rem] flex min-h-svh flex-col overflow-hidden bg-primary sm:-mt-[4.75rem]"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        {scenes.map((item, i) => (
          <motion.div
            key={item.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={cn('absolute inset-0', i === active && !reduceMotion && 'hero-ken')}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-[center_30%] sm:object-cover"
              />
            </div>
          </motion.div>
        ))}

        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-r transition-colors duration-1000',
            scene.tone,
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-transparent to-transparent" />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden transition-[background] duration-300 sm:block"
        style={{
          background: `radial-gradient(520px circle at ${spot.x}% ${spot.y}%, rgba(201,168,106,0.18), transparent 46%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.035]" />
      <div className="pointer-events-none absolute inset-0 grain" />

      <Corner className="pointer-events-none absolute left-8 top-28 hidden size-16 text-accent/70 sm:block lg:left-10" />
      <Corner className="pointer-events-none absolute right-8 top-28 hidden size-16 rotate-90 text-accent/70 sm:block lg:right-10" />
      <Corner className="pointer-events-none absolute bottom-32 left-8 hidden size-16 -rotate-90 text-accent/50 sm:block lg:left-10" />
      <Corner className="pointer-events-none absolute bottom-32 right-8 hidden size-16 rotate-180 text-accent/50 sm:block lg:right-10" />

      <div className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="block origin-center -rotate-90 whitespace-nowrap text-[0.62rem] font-semibold uppercase tracking-[0.55em] text-accent/55">
          Established 1963 · West Yorkshire
        </span>
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-32 lg:px-12"
      >
        <div className="w-full max-w-3xl">
          <motion.div
            custom={0.12}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/35 bg-primary/30 px-3 py-1.5 backdrop-blur-md sm:mb-6 sm:gap-3 sm:px-4 sm:py-2"
          >
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-accent sm:text-[0.7rem] sm:tracking-[0.32em]">
              Lord of Wheldrake &amp; Warter Priory
            </span>
          </motion.div>

          <motion.p
            custom={0.22}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary-foreground/50 sm:mb-4 sm:text-xs sm:tracking-[0.42em]"
          >
            Official Heritage · United Kingdom
          </motion.p>

          <motion.h1
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-[2.15rem] font-semibold leading-[1.08] text-balance text-primary-foreground sm:text-6xl lg:text-7xl xl:text-[5.35rem] xl:leading-[0.98]"
          >
            The History of Lord Neil Benjamin Gibson
          </motion.h1>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 h-px w-16 bg-gradient-to-r from-accent via-accent/70 to-transparent sm:mt-7 sm:w-24"
          />

          <motion.p
            custom={0.46}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-primary-foreground/80 sm:mt-7 sm:text-xl"
          >
            A businessman, international investor and philanthropist who built
            his family&apos;s legacy from Leeds, England into an enterprise
            reaching across the world — from the western hemisphere to Dubai,
            UAE.
          </motion.p>

          <motion.div
            custom={0.56}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Button
              size="lg"
              className="group h-12 w-full rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/35 sm:h-13 sm:w-auto"
              render={<Link href="/about" />}
            >
              Explore the Legacy
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-primary-foreground/25 bg-primary-foreground/8 px-8 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/16 hover:text-primary-foreground sm:h-13 sm:w-auto"
              render={<Link href="/contact" />}
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            custom={0.68}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 grid grid-cols-3 gap-3 border-t border-primary-foreground/12 pt-6 sm:mt-12 sm:gap-5 sm:pt-8 lg:max-w-lg"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-serif text-xl font-semibold text-accent sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[0.58rem] font-medium uppercase leading-snug tracking-wider text-primary-foreground/55 sm:text-[0.62rem]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 mt-auto pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-7xl border-t border-primary-foreground/10 px-2 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {scenes.map((item, i) => {
              const isActive = i === active
              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    'relative min-h-14 px-3 py-3 text-left touch-manipulation transition-colors sm:min-h-0 sm:px-4 sm:py-4',
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-primary-foreground/45',
                  )}
                >
                  <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-accent/80 sm:text-[0.6rem] sm:tracking-[0.28em]">
                    0{i + 1}
                  </span>
                  <span className="mt-0.5 block font-serif text-[0.95rem] font-semibold leading-tight sm:mt-1 sm:text-xl">
                    {item.place}
                  </span>
                  <span className="mt-0.5 block text-[0.6rem] uppercase tracking-wider sm:text-[0.65rem]">
                    {item.region}
                  </span>
                  <span className="absolute inset-x-3 bottom-0 h-px bg-primary-foreground/10 sm:inset-x-4" />
                  {isActive && (
                    <span className="absolute inset-x-3 bottom-0 h-0.5 overflow-hidden bg-accent/25 sm:inset-x-4">
                      <motion.span
                        key={`progress-${active}-${paused}`}
                        className="block h-full origin-left bg-accent"
                        initial={{ scaleX: paused || reduceMotion ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: paused || reduceMotion ? 0 : SCENE_MS / 1000,
                          ease: 'linear',
                        }}
                      />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
