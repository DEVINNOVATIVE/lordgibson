import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact/contact-section'

export const metadata: Metadata = {
  title: 'Contact | Lord Gibson UK',
  description:
    'Get in touch with the office of Lord Neil Benjamin Gibson for business enquiries, investment opportunities and philanthropic partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Contact"
          subtitle="Reach the office of Lord Neil Benjamin Gibson for enquiries and partnerships."
          image="/dubai-skyline.png"
          imageAlt="Dubai skyline"
        />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
