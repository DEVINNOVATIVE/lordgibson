import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
]

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.55.45-1 1-1z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.42c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2h3.3l-7.2 8.24L23.5 22h-6.6l-5.18-6.77L5.8 22H2.5l7.7-8.8L2 2h6.77l4.68 6.19L18.9 2zm-1.16 18h1.83L7.02 3.9H5.06z" />
    </svg>
  )
}

const socials = [
  { href: '#', label: 'Facebook', Icon: FacebookIcon },
  { href: '#', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: '#', label: 'Twitter / X', Icon: TwitterIcon },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Lord Neil Benjamin Gibson is one of the UK&apos;s most successful
            businessmen around the globe. He shifted his family&apos;s business
            from Leeds, England, turning his real estate projects into a
            successful international enterprise spanning the western hemisphere
            to the Middle East and, after 27 years in the United States, on to
            Dubai, UAE.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-accent">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-accent">
            Get In Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                Arawak Chamber, Mandar House, 3rd Floor, Johnsons Ghut, Tortola
                Central, VG1110, BVI
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href="tel:+447887447527" className="hover:text-primary-foreground">
                +44 7887 447527
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a
                href="mailto:lnbg@lordgibson.co.uk"
                className="hover:text-primary-foreground"
              >
                lnbg@lordgibson.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-primary-foreground/55 sm:px-8">
          © {new Date().getFullYear()} All Rights Reserved · Lord Gibson UK
        </div>
      </div>
    </footer>
  )
}
