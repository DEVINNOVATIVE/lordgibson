// import Image from 'next/image'
// import { Calendar, MapPin, Landmark } from 'lucide-react'
// import { Reveal } from '@/components/motion/reveal'

// const facts = [
//   { Icon: Calendar, label: 'Born', value: 'September 10th, 1963' },
//   { Icon: MapPin, label: 'Location', value: 'West Yorkshire, England' },
//   { Icon: Landmark, label: 'Built', value: 'Palladian style, 1767' },
// ]

// export function WarterPriory() {
//   return (
//     <section className="relative overflow-hidden bg-secondary/40 py-28">
//       <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
//         <Reveal direction="left">
//           <div className="group relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
//             <Image
//               src="/waltonhall.png"
//               alt="Walton Hall, a Palladian mansion on an island lake in West Yorkshire"
//               fill
//               className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

//             <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
//               {facts.map(({ Icon, label, value }) => (
//                 <div
//                   key={label}
//                   className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-primary/40 px-3.5 py-2.5 backdrop-blur-md"
//                 >
//                   <Icon className="size-4 shrink-0 text-accent" />
//                   <div className="flex flex-col leading-tight">
//                     <span className="text-[0.65rem] font-medium uppercase tracking-wider text-primary-foreground/60">
//                       {label}
//                     </span>
//                     <span className="text-xs font-semibold text-primary-foreground">
//                       {value}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Reveal>

//         <Reveal direction="right" delay={0.15}>
//           <div>
//             <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
//               Heritage
//             </span>
//             <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
//               Warter Priory &amp; Wheldrake
//             </h2>
//             <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
//             <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
//               <p>
//                 Lord Neil B. Gibson&apos;s journey started at his birth in Walton
//                 Hall. He was born on September 10th, 1963. Later in life, through
//                 accession of lands, Lord Neil B. Gibson retained his title as seen
//                 today — Lord of Wheldrake and Warter Priory, pursuant to the Law
//                 of Property Act 1925.
//               </p>
//               <p>
//                 Wheldrake and Warter Priory are within a 25-mile radius as the
//                 crow flies of each other. Walton Hall is a stately home in the
//                 county of West Yorkshire, England, near Wakefield. It was built in
//                 the Palladian style in 1767 on an island within a 26-acre lake, on
//                 the site of a former moated medieval hall.
//               </p>
//               <p>
//                 It was the ancestral home of the naturalist and traveller Charles
//                 Waterton, who made Walton Hall into the world&apos;s first
//                 wildfowl and nature reserve. The Waterton Collection is now in
//                 Wakefield Museum, and Walton Hall is today part of the Waterton
//                 Park Hotel.
//               </p>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   )
// }
import Image from 'next/image'
import { Calendar, MapPin, Landmark, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

const facts = [
  { 
    Icon: Calendar, 
    label: 'Born', 
    value: 'September 10th, 1963' 
  },
  { 
    Icon: MapPin, 
    label: 'Location', 
    value: 'West Yorkshire, England' 
  },
  { 
    Icon: Landmark, 
    label: 'Built', 
    value: 'Palladian style, 1767' 
  },
]

export function WarterPriory() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Image & Quick Stats */}
          <div className="lg:col-span-6">
            <Reveal direction="left">
              <div className="space-y-6">
                <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-2xl transition-all duration-500 hover:shadow-accent/5">
                  <Image
                    src="/waltonhall.png"
                    alt="Walton Hall, a Palladian mansion on an island lake in West Yorkshire"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {facts.map(({ Icon, label, value }) => (
                    <div
                      key={label}
                      className="group flex flex-col gap-1.5 rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-card"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="size-4 text-accent transition-transform group-hover:scale-110" />
                        <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                          {label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold tracking-tight text-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Full Historical Content */}
          <div className="lg:col-span-6">
            <Reveal direction="right" delay={0.15}>
              <div className="flex flex-col">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  <Sparkles className="size-3.5" />
                  Historical Heritage
                </div>

                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                  Warter Priory &amp; Wheldrake
                </h2>

                <div className="mt-4 h-1 w-16 rounded-full bg-accent" />

                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Lord Neil B. Gibson&apos;s journey started off at his birth in
                    Walton Hall. He was born on September 10th 1963. Later on in
                    life through acquisition of lands, Lord Neil B. Gibson retained
                    his title as seen today — Lord of Wheldrake and Warter Priory.
                    This was under the Assignor asset claimed incorporeal rights
                    to the said style and title pursuant to the Law of Property
                    ACT 1925.
                  </p>

                  <p>
                    Wheldrake and Warter Priory are within a 25 mile radius as
                    the crow flies of each other. Walton Hall is a stately home
                    in the county of West Yorkshire, England, near Wakefield. It
                    was built in the Palladian style in 1767 on an island within
                    a 26-acre (11 ha) lake, on the site of a former moated
                    medieval hall.
                  </p>

                  <div className="rounded-xl border-l-2 border-accent bg-accent/5 p-4 text-sm text-foreground/90">
                    <p className="italic">
                      It was the ancestral home of the naturalist and traveller
                      Charles Waterton, who made Walton Hall into the world&apos;s
                      first wildfowl and nature reserve. Waterton&apos;s son,
                      Edmund, sold the estate.
                    </p>
                  </div>

                  <p>
                    The Waterton Collection is now in Wakefield Museum. Walton
                    Hall is now part of the Waterton Park Hotel. In the 1940s and
                    again in the early 1950s and early 1960s, the Hall served as a
                    maternity home.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}