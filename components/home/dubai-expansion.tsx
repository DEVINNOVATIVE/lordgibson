// import Image from 'next/image'
// import { Quote } from 'lucide-react'
// import { Reveal } from '@/components/motion/reveal'

// export function DubaiExpansion() {
//   return (
//     <section className="relative overflow-hidden bg-secondary/40 py-28">
//       <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
//         <Reveal direction="right" delay={0.15} className="order-2 lg:order-1">
//           <div>
//             <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
//               Global Reach
//             </span>
//             <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
//               Lord Neil B. Gibson expands business to Dubai, UAE
//             </h2>
//             <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
//             <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
//               <p>
//                 Lord Neil Gibson shifted his family&apos;s business from Leeds,
//                 England, turning his real estate projects into successful
//                 international businesses — all the way from the western hemisphere
//                 to the Middle East. After spending 27 years living in the United
//                 States of America, Lord Neil Gibson took his established business
//                 resume to the UAE.
//               </p>
//               <p>
//                 His resume involved real estate projects, restaurant and club
//                 ownership and online gaming businesses, establishing him as a
//                 financial mogul. This allowed Lord Gibson to take his
//                 philanthropic ambitions across all nations.
//               </p>
//             </div>

//             <div className="mt-8 flex flex-wrap gap-6">
//               {[
//                 { value: 'Leeds', label: 'England Origin' },
//                 { value: '27 yrs', label: 'In the USA' },
//                 { value: 'Dubai', label: 'UAE Expansion' },
//               ].map((stat) => (
//                 <div key={stat.label} className="flex flex-col">
//                   <span className="font-serif text-2xl font-semibold text-foreground">
//                     {stat.value}
//                   </span>
//                   <span className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
//                     {stat.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Reveal>

//         <Reveal direction="left" className="order-1 lg:order-2">
//           <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
//             <Image
//               src="/dubai-skyline.jpg"
//               alt="Modern Dubai skyline at golden hour"
//               fill
//               className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

//             <div className="absolute bottom-6 left-6 right-6">
//               <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-primary/40 p-5 backdrop-blur-md">
//                 <Quote className="size-6 shrink-0 text-accent" />
//                 <blockquote className="text-sm italic leading-relaxed text-primary-foreground/90">
//                   &ldquo;My inspiration for all these accomplishments came to me
//                   from my late father, Wilfred Gibson. The best piece of advice I
//                   got from him was: if opportunity doesn&apos;t knock, build a
//                   door.&rdquo;
//                 </blockquote>
//               </div>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   )
// }
'use client'

import Image from 'next/image'
import { MapPin, Sparkles, Building2, Globe2, Compass, Award } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

const keyMilestones = [
  {
    icon: Compass,
    title: 'Heritage Roots',
    location: 'Leeds, England',
    detail: 'Transitioned the family foundation into dynamic cross-border enterprises.',
  },
  {
    icon: Building2,
    title: 'Transatlantic Scale',
    location: 'United States',
    detail: '27-year tenure expanding commercial real estate, nightlife, and gaming platforms.',
  },
  {
    icon: Globe2,
    title: 'Middle East Hub',
    location: 'Dubai, UAE',
    detail: 'Strategic capital center fueling international operations and global philanthropy.',
  },
]

export function DubaiExpansion() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 sm:py-32">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[450px] w-[550px] rounded-full bg-primary/5 blur-[120px]"
      />
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Storytelling & Editorial Copy */}
          <div className="lg:col-span-6">
            <Reveal direction="right">
              <div className="space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent backdrop-blur-md">
                  <Sparkles className="size-3.5" />
                  International Portfolio
                </div>

                {/* Main Heading */}
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                  Global Reach &amp; Enterprise Expansion to Dubai
                </h2>

                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent/30" />

                {/* Narrative Description */}
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Lord Neil Gibson transitioned his family&apos;s commercial enterprise
                    from Leeds, England, scaling local real estate assets into
                    thriving ventures spanning the Western Hemisphere and the
                    Middle East.
                  </p>
                  <p>
                    Following a 27-year presence in the United States developing
                    residential projects, premier hospitality venues, and digital
                    platforms, Lord Gibson expanded operations into the UAE, creating
                    a strategic capital base to advance international initiatives and
                    philanthropic commitments worldwide.
                  </p>
                </div>

                {/* Structured Horizontal Milestones */}
                <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                  {keyMilestones.map(({ icon: Icon, title, location, detail }) => (
                    <div
                      key={title}
                      className="group rounded-2xl border border-border/70 bg-card/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-card/80"
                    >
                      <div className="flex size-9 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                        <Icon className="size-4.5" />
                      </div>
                      <div className="mt-3 font-semibold text-foreground text-sm">
                        {location}
                      </div>
                      <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-accent">
                        {title}
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual & Editorial Quote */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delay={0.15}>
              <div className="space-y-6">
                
                {/* Clean Aspect Image Frame */}
                <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] border border-border/80 bg-muted shadow-2xl transition-all duration-500 hover:shadow-accent/5">
                  <Image
                    src="/dubai-skyline.jpg"
                    alt="Modern Dubai skyline at golden hour"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                    priority
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle inner highlight border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/15" />
                  
                  {/* Floating Location Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <MapPin className="size-3.5 text-accent" />
                    Dubai, United Arab Emirates
                  </div>
                </div>

                {/* Quote Box */}
                <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-accent/5 to-card/50 p-6 shadow-sm backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Award className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <blockquote className="text-sm font-medium italic leading-relaxed text-foreground/95 sm:text-[0.95rem]">
                        &ldquo;My inspiration for all these accomplishments came to me from my late father, Wilfred Gibson. The best piece of advice I got from him was: if opportunity doesn&apos;t knock, build a door.&rdquo;
                      </blockquote>
                      <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                        &mdash; Lord Neil Benjamin Gibson
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}