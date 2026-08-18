import Image from 'next/image'

export function LegacyBand() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        <Image
          src="/dubai-skyline.png"
          alt="Dubai skyline representing international business expansion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-balance text-primary-foreground sm:text-4xl">
          Lord Neil B. Gibson expands business to Dubai, UAE
        </h2>
        <span className="mx-auto mt-6 block h-px w-16 bg-accent" />
        <div className="mt-8 space-y-5 leading-relaxed text-primary-foreground/85">
          <p>
            Lord Neil Benjamin Gibson is one of the UK&apos;s most successful
            businessmen around the globe. He shifted his family&apos;s business
            from Leeds, England, turning his real estate projects into
            successful international businesses — all the way from the western
            hemisphere to the Middle East. After 27 years living in the United
            States of America, he took his established business resume to Dubai,
            UAE, developing online gaming businesses and becoming a financial
            mogul.
          </p>
          <blockquote className="mx-auto max-w-2xl border-t border-accent/40 pt-6 font-serif text-xl italic text-primary-foreground">
            &ldquo;My inspiration for all these accomplishments came from my
            late father, Wilfred Gibson. He was my biggest teacher in life, and
            I often think in times of decisions, what would my father do? The
            best piece of advice I got from him was: if opportunity doesn&apos;t
            knock, build a door.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
