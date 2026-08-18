import { MapPin, Phone, Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'

const details = [
  {
    Icon: MapPin,
    label: 'Address',
    lines: ['Arawak Chamber, Mandar House, 3rd Floor', 'Johnsons Ghut, Tortola Central, VG1110, BVI'],
  },
  {
    Icon: Phone,
    label: 'Phone Number',
    lines: ['+44 7887 447527'],
    href: 'tel:+447887447527',
  },
  {
    Icon: Mail,
    label: 'Email',
    lines: ['lnbg@lordgibson.co.uk'],
    href: 'mailto:lnbg@lordgibson.co.uk',
  },
]

export function ContactSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Get in Touch
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-balance sm:text-4xl">
            We&apos;d love to hear from you
          </h2>
          <span className="mt-5 block h-px w-16 bg-accent" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            For business enquiries, investment opportunities or philanthropic
            partnerships with the office of Lord Neil Benjamin Gibson, reach out
            using the details below or send a message directly.
          </p>

          <ul className="mt-10 space-y-6">
            {details.map(({ Icon, label, lines, href }) => (
              <li key={label} className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </p>
                  <div className="mt-1 text-sm leading-relaxed text-foreground">
                    {href ? (
                      <a href={href} className="transition-colors hover:text-accent">
                        {lines.join(' ')}
                      </a>
                    ) : (
                      lines.map((line) => <p key={line}>{line}</p>)
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
