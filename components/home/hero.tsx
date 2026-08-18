'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/estate-hero.png"
          alt="A grand English stately home at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
      </motion.div>

      <motion.div
        className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={item}
          className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent"
        >
          <motion.span
            className="h-px bg-accent"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          Lord of Wheldrake &amp; Warter Priory
        </motion.span>
        <motion.h1
          variants={item}
          className="max-w-3xl font-serif text-5xl font-semibold leading-[1.05] text-balance text-primary-foreground sm:text-6xl lg:text-7xl"
        >
          The History of Lord Neil Benjamin Gibson
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80"
        >
          A businessman, international investor and philanthropist who built his
          family&apos;s legacy from Leeds, England into an enterprise reaching
          across the world — from the western hemisphere to Dubai, UAE.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button
            size="lg"
            className="group h-12 rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90"
            render={<Link href="/about" />}
          >
            Read the Story
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-primary-foreground/30 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            render={<Link href="/contact" />}
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-primary-foreground/40 p-1.5"
          aria-hidden="true"
        >
          <motion.span
            className="h-2 w-1 rounded-full bg-accent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
