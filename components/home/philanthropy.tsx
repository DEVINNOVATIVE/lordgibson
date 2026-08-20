import { HeartHandshake, Zap, Landmark } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const pillars = [
  {
    Icon: HeartHandshake,
    title: 'Humanity',
    body: 'Lord Neil Gibson has always felt that if you impact the children of the world in need, in any region in a positive way, that this can have a direct result to a better future. Many of these children have no voice — we believe the best way to protect them is to provide the best possible living conditions for their families through housing, food, medicine, education and jobs.',
  },
  {
    Icon: Zap,
    title: 'Energy',
    body: 'Lord Gibson and LNBG, LLC are currently working with their partners on the construction of spherical valve engine head technology, which will allow the use of natural gas to power generators and create low-cost electricity on site. This timely project taps the existing gas fields, bringing economic sense back to low-priced natural gas.',
  },
  {
    Icon: Landmark,
    title: 'Financial Institutions',
    body: 'The Central Bank of Lesotho has released the Financial Institutions Money Transfer Regulations. The regulations seek to clarify procedures of registering, licensing and supervising the money transfer institutions, in an effort to ensure more control of the sector and protect consumers.',
  },
]

export function Philanthropy() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Giving Back"
            title="Philanthropist & Humanitarian"
          />
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map(({ Icon, title, body }) => (
            <StaggerItem key={title} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 card-glow card-glow-hover hover:-translate-y-1.5">
                <div className="absolute -right-8 -top-8 size-32 rounded-full bg-accent/5 transition-all duration-500 group-hover:bg-accent/10 group-hover:scale-150" />

                <span className="relative mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="size-7" />
                </span>
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
