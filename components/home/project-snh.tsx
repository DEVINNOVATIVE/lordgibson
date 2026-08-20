'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Container, Sun, Wind } from 'lucide-react'

const features = [
  { Icon: Container, label: '40ft Modular Units', desc: 'Standard high-cube shipping containers' },
  { Icon: Sun, label: 'Solar Powered', desc: 'Rooftop panels for off-grid capability' },
  { Icon: Wind, label: 'Independent Water', desc: 'Self-sustaining water source per unit' },
]

export function ProjectSnh() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale }}
      >
        <Image
          src="/bahamas-island.png"
          alt="Pristine tropical island in The Bahamas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary/90" />
      </motion.div>

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <motion.div
        className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
        style={{ y: textY }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent backdrop-blur-sm"
        >
          Vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-4xl font-semibold text-balance text-primary-foreground sm:text-5xl lg:text-6xl"
        >
          Project SNH-INC Bahamas
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30"
        />

        <div className="mt-10 space-y-5 text-left leading-relaxed text-primary-foreground/80 sm:text-center sm:text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Our vision is to build a city composed of modular units that can be
            readily added to or removed from a framework to meet rising demand,
            accommodate the social mobility of owners who wish to upgrade their
            living spaces, and simplify the moving process. Each single modular
            unit is based on a standard 40ft high-cube shipping container.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Units can be combined in a cohesive manner to provide the desired
            living space for each owner. All units will be off-grid capable
            through the use of rooftop solar panels or wind turbines, providing
            their own independent water source — and for tract-home models, a
            virtual marketplace enables owners to seek or advertise available
            space in a particular locale.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {features.map(({ Icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-primary-foreground/5 p-6 backdrop-blur-md transition-colors hover:bg-primary-foreground/10"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="size-6" />
              </span>
              <span className="text-sm font-semibold text-primary-foreground">
                {label}
              </span>
              <span className="text-xs leading-relaxed text-primary-foreground/60">
                {desc}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
