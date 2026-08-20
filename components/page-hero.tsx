'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
}: {
  title: string
  subtitle: string
  image: string
  imageAlt: string
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative min-h-[56vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </motion.div>

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <motion.div
        className="relative mx-auto flex min-h-[56vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
        }}
      >
        <motion.nav
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          aria-label="Breadcrumb"
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70 backdrop-blur-sm"
        >
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <span className="text-accent">/</span>
          <span className="text-accent">{title}</span>
        </motion.nav>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="font-serif text-5xl font-semibold text-balance text-primary-foreground sm:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
          }}
          className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/75"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  )
}
