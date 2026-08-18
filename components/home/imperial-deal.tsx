import Image from 'next/image'

export function ImperialDeal() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <Image
            src="/gibson-crest.webp"
            alt="Gibson coat of arms"
            width={180}
            height={210}
            className="mx-auto h-auto w-40 drop-shadow-2xl lg:mx-0"
          />
        </div>

        <div className="lg:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Milestone
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-balance text-primary-foreground sm:text-4xl">
            Lord Neil Benjamin Gibson signs deal with Imperial Capital LLC
          </h2>
          <span className="mt-5 block h-px w-16 bg-accent" />
          <div className="mt-6 space-y-4 leading-relaxed text-primary-foreground/80">
            <p>
              April 29th was a significant day for Lord Neil Benjamin Gibson and
              LNBG Investment LLC. On that date, Lord Gibson signed contracts
              with Imperial Capital Investments LLC. This multi-million dollar
              deal is in relation to land owned by Gibson in The Bahamas,
              totalling over 700 acres.
            </p>
            <p>
              The land in The Bahamas was purchased by Gibson several years ago
              and is further proof of his entrepreneurial spirit and his uncanny
              ability to see potential where others may overlook. This
              particular piece of land has a storied past and is now ripe for
              development — and Lord Gibson is excited about what is coming in
              the very near future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
