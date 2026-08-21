import { HeartHandshake, Zap, Landmark } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const pillars = [
  {
    Icon: HeartHandshake,
    index: '01',
    title: 'Humanity',
    body: 'Lord Neil Gibson has always felt that if you impact the children of the world in need, in any region in a positive way, that this can have a direct result to a better future. Many of these children have no voice — we believe the best way to protect them is to provide the best possible living conditions for their families through housing, food, medicine, education and jobs.',
  },
  {
    Icon: Zap,
    index: '02',
    title: 'Energy',
    body: 'Lord Gibson and LNBG, LLC are currently working with their partners on the construction of spherical valve engine head technology, which will allow the use of natural gas to power generators and create low-cost electricity on site. This timely project taps the existing gas fields, bringing economic sense back to low-priced natural gas.',
  },
  {
    Icon: Landmark,
    index: '03',
    title: 'Financial Institutions',
    body: 'The Central Bank of Lesotho has released the Financial Institutions Money Transfer Regulations. The regulations seek to clarify procedures of registering, licensing and supervising the money transfer institutions, in an effort to ensure more control of the sector and protect consumers.',
  },
]

export function Philanthropy() {
  return (
    <section id="philanthropy" className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.3em]">
              Giving Back
            </span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-balance sm:text-5xl">
              Philanthropist &amp; Humanitarian
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Causes that reach beyond capital — children, energy and financial
              access for communities that need a stronger foundation.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">
          {pillars.map(({ Icon, index, title, body }) => (
            <StaggerItem key={title} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 card-glow card-glow-hover hover:-translate-y-1.5 sm:p-8">
                <div className="absolute -right-8 -top-8 size-32 rounded-full bg-accent/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent/10" />
                <div className="relative mb-6 flex items-center justify-between">
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-7" />
                  </span>
                  <span className="font-serif text-4xl font-semibold text-accent/25 transition-colors group-hover:text-accent/45">
                    {index}
                  </span>
                </div>
                <h3 className="relative font-serif text-2xl font-semibold">{title}</h3>
                <div className="relative mt-3 h-px w-12 bg-accent/40 transition-all duration-300 group-hover:w-20" />
                <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
