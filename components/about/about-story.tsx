import Image from 'next/image'

export function AboutStory() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border lg:sticky lg:top-28">
          <Image
            src="/walton-hall.png"
            alt="Walton Hall, birthplace connection of Lord Neil Gibson"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            About Us
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-balance sm:text-4xl">
            Walton Hall&apos;s connection to Lord Neil Gibson, Warter Priory and
            Wheldrake
          </h2>
          <span className="mt-5 block h-px w-16 bg-accent" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Lord Neil B. Gibson&apos;s journey started off at his birth in
              Walton Hall. He was born on September 10th, 1963. Later on in life,
              through accession of lands, Lord Neil B. Gibson retained his title
              as seen today. Lord of Wheldrake and Warter Priory — this was
              under the Assignor asset, claimed incorporeal rights to the said
              style and title pursuant to the Law of Property Act 1925.
            </p>
            <p>
              Wheldrake and Warter Priory are within a 25-mile radius as the
              crow flies of each other. Walton Hall is a stately home in the
              county of West Yorkshire, England, near Wakefield. It was built in
              the Palladian style in 1767 on an island within a 26-acre (11 ha)
              lake, on the site of a former moated medieval hall.
            </p>
            <p>
              It was the ancestral home of the naturalist and traveller Charles
              Waterton, who made Walton Hall into the world&apos;s first
              wildfowl and nature reserve. Waterton&apos;s son, Edmund, sold the
              estate.
            </p>
            <p>
              The Waterton Collection is now in Wakefield Museum. Walton Hall is
              now part of the Waterton Park Hotel. In the 1940s, and again in
              the early 1950s and early 1960s, the Hall was a maternity home.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
