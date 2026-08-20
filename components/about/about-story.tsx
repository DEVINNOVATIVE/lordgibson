import Image from 'next/image'
import { Calendar, MapPin, Landmark } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

const facts = [
  { Icon: Calendar, label: 'Born', value: 'September 10th, 1963' },
  { Icon: MapPin, label: 'Location', value: 'West Yorkshire, England' },
  { Icon: Landmark, label: 'Style', value: 'Palladian, built 1767' },
  { Icon: Landmark, label: 'Estate', value: '26-acre island lake' },
]

export function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.04),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border lg:sticky lg:top-28">
            <Image
              src="/waltonhall.png"
              alt="Walton Hall, birthplace connection of Lord Neil Gibson"
              fill
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

            {/* <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              {facts.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-primary/40 px-3 py-2.5 backdrop-blur-md"
                >
                  <Icon className="size-4 shrink-0 text-accent" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[0.65rem] font-medium uppercase tracking-wider text-primary-foreground/60">
                      {label}
                    </span>
                    <span className="text-xs font-semibold text-primary-foreground">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              About Us
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Walton Hall&apos;s connection to Lord Neil Gibson, Warter Priory and
              Wheldrake
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
            <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
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
                the early 1950s and early 1960s the Hall was a maternity home.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
