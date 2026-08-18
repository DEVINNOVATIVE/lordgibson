import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { AboutStory } from '@/components/about/about-story'
import { SuccessStories } from '@/components/about/success-stories'
import { LegacyBand } from '@/components/about/legacy-band'

export const metadata: Metadata = {
  title: 'About | Lord Gibson UK',
  description:
    'The story of Lord Neil Benjamin Gibson — his birth at Walton Hall, his titles of Wheldrake and Warter Priory, and his rise as an international businessman and philanthropist.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="About Us"
          subtitle="The heritage, titles and remarkable journey of Lord Neil Benjamin Gibson."
          image="/estate-hero.png"
          imageAlt="A grand English stately home"
        />
        <AboutStory />
        <SuccessStories />
        <LegacyBand />
      </main>
      <SiteFooter />
    </>
  )
}
