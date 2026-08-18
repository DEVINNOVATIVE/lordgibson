import { HeartHandshake, Zap, Landmark } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

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
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Giving Back"
          title="Philanthropist &amp; Humanitarian"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
