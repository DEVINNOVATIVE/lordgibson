import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { Journey } from '@/components/home/journey'
import { CeoIntro } from '@/components/home/ceo-intro'
import { WarterPriory } from '@/components/home/warter-priory'
import { Philanthropy } from '@/components/home/philanthropy'
import { ImperialDeal } from '@/components/home/imperial-deal'
import { DubaiExpansion } from '@/components/home/dubai-expansion'
import { ProjectSnh } from '@/components/home/project-snh'
import { BelizeInvestmentsBrief } from '@/components/home/belize-investments-brief'
import { HomeCta } from '@/components/home/home-cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Journey />
        <WarterPriory />
        <CeoIntro />
        <BelizeInvestmentsBrief />
        <Philanthropy />
        <ImperialDeal />
        <DubaiExpansion />
        <ProjectSnh />
        <HomeCta />
      </main>
      <SiteFooter />
    </>
  )
}
