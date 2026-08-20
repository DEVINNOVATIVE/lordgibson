import { Quote } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

export function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-primary py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,106,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            In the Spotlight
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance text-primary-foreground sm:text-5xl">
            Success Stories
          </h2>
          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="space-y-6 leading-relaxed text-primary-foreground/75">
            <p>
              We now take a closer look at Lord Neil B. Gibson. Lord Gibson came
              into the spotlight earlier this year when, as a foreign investor, he
              provided financial support and an online endorsement for Ralph
              Huang&apos;s political campaign in Cayo South.
            </p>
            <p>
              It created quite a stir in the public as Lord Gibson claimed that,
              with that victory, he awaited Ralph Huang&apos;s appointment to a
              ministerial position within government. Another development that
              soon evolved was the extent of the relationship between Lord Gibson
              and the Minister.
            </p>
            <p>
              Lord Gibson&apos;s work proudly boasts that the partnership has been
              working closely with the Honourable Erwin Rafael Contreras — Trade
              Investment, Private Sector Development and Consumer Protection.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-12">
          <div className="flex items-start gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm">
            <Quote className="size-8 shrink-0 text-accent" />
            <p className="font-serif text-lg italic leading-relaxed text-primary-foreground/90">
              The partnership has been working closely with the Honourable Erwin
              Rafael Contreras — Trade Investment, Private Sector Development and
              Consumer Protection.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
