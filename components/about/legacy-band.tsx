'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

export function LegacyBand() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3])

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <Image
          src="/dubai-skyline.png"
          alt="Dubai skyline representing international business expansion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary/90" />
      </motion.div>

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl font-semibold leading-tight text-balance text-primary-foreground sm:text-5xl"
        >
          Lord Neil B. Gibson expands business to Dubai, UAE
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30"
        />

        <div className="mt-10 space-y-6 leading-relaxed text-primary-foreground/80 sm:text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Lord Neil Benjamin Gibson is one of the UK&apos;s most successful
            businessmen around the globe. He shifted his family&apos;s business
            from Leeds, England, turning his real estate projects into
            successful international businesses — all the way from the western
            hemisphere to the Middle East. After 27 years living in the United
            States of America, he took his established business resume to Dubai,
            UAE, developing online gaming businesses and becoming a financial
            mogul.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-10 flex max-w-2xl items-start gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm"
        >
          <Quote className="size-8 shrink-0 text-accent" />
          <blockquote className="text-left font-serif text-xl italic leading-relaxed text-primary-foreground/90">
            &ldquo;My inspiration for all these accomplishments came from my
            late father, Wilfred Gibson. He was my biggest teacher in life, and
            I often think in times of decisions, what would my father do? The
            best piece of advice I got from him was: if opportunity doesn&apos;t
            knock, build a door.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
