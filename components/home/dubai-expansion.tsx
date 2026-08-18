import Image from 'next/image'

export function DubaiExpansion() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Global Reach
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-balance sm:text-4xl">
            Lord Neil B. Gibson expands business to Dubai, UAE
          </h2>
          <span className="mt-5 block h-px w-16 bg-accent" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Lord Neil Gibson shifted his family&apos;s business from Leeds,
              England, turning his real estate projects into successful
              international businesses — all the way from the western hemisphere
              to the Middle East. After spending 27 years living in the United
              States of America, Lord Neil Gibson took his established business
              resume to the UAE.
            </p>
            <p>
              His resume involved real estate projects, restaurant and club
              ownership and online gaming businesses, establishing him as a
              financial mogul. This allowed Lord Gibson to take his
              philanthropic ambitions across all nations.
            </p>
            <blockquote className="border-l-2 border-accent pl-5 text-foreground italic">
              &ldquo;My inspiration for all these accomplishments came to me
              from my late father, Wilfred Gibson. He was my biggest teacher in
              life. The best piece of advice I got from him was: if opportunity
              doesn&apos;t knock, build a door.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border lg:order-2">
          <Image
            src="/dubai-skyline.png"
            alt="Modern Dubai skyline at golden hour"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
