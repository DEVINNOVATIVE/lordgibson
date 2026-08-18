import Image from 'next/image'

export function WarterPriory() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
          <Image
            src="/walton-hall.png"
            alt="Walton Hall, a Palladian mansion on an island lake in West Yorkshire"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Heritage
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-balance sm:text-4xl">
            Warter Priory &amp; Wheldrake
          </h2>
          <span className="mt-5 block h-px w-16 bg-accent" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Lord Neil B. Gibson&apos;s journey started at his birth in Walton
              Hall. He was born on September 10th, 1963. Later in life, through
              accession of lands, Lord Neil B. Gibson retained his title as seen
              today — Lord of Wheldrake and Warter Priory, pursuant to the Law
              of Property Act 1925.
            </p>
            <p>
              Wheldrake and Warter Priory are within a 25-mile radius as the
              crow flies of each other. Walton Hall is a stately home in the
              county of West Yorkshire, England, near Wakefield. It was built in
              the Palladian style in 1767 on an island within a 26-acre lake, on
              the site of a former moated medieval hall.
            </p>
            <p>
              It was the ancestral home of the naturalist and traveller Charles
              Waterton, who made Walton Hall into the world&apos;s first
              wildfowl and nature reserve. The Waterton Collection is now in
              Wakefield Museum, and Walton Hall is today part of the Waterton
              Park Hotel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
