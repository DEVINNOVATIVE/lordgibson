import { MapPin, Phone, Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const details = [
  {
    Icon: MapPin,
    label: 'Address',
    lines: ['Jessups, Jessups Estate, P.O. Box 590, Nevis St Kitts.'],
  },
  {
    Icon: Phone,
    label: 'Phone Number',
    lines: ['+1 818 575 0663'],
    href: 'tel:+18185750663',
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
    <section className="relative overflow-hidden bg-background py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.04),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-5 lg:gap-20">
        <div className="lg:col-span-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Get in Touch
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              We&apos;d love to hear from you
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30" />
            <p className="mt-8 leading-relaxed text-muted-foreground">
              For business enquiries, investment opportunities or philanthropic
              partnerships with the office of Lord Neil Benjamin Gibson, reach out
              using the details below or send a message directly.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 space-y-6">
            {details.map(({ Icon, label, lines, href }) => (
              <StaggerItem key={label}>
                <div className="group flex gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {label}
                    </p>
                    <div className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {href ? (
                        <a href={href} className="transition-colors hover:text-accent">
                          {lines.join(' ')}
                        </a>
                      ) : (
                        lines.map((line) => <p key={line}>{line}</p>)
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal direction="left" delay={0.2} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
