import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { CeoIntro } from '@/components/home/ceo-intro'
import { WarterPriory } from '@/components/home/warter-priory'
import { Philanthropy } from '@/components/home/philanthropy'
import { ImperialDeal } from '@/components/home/imperial-deal'
import { DubaiExpansion } from '@/components/home/dubai-expansion'
import { ProjectSnh } from '@/components/home/project-snh'
import { BelizeInvestmentsBrief } from '@/components/home/belize-investments-brief'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <CeoIntro />
        <BelizeInvestmentsBrief />
        <WarterPriory />
        <Philanthropy />
        <ImperialDeal />
        <DubaiExpansion />
        <ProjectSnh />
      </main>
      <SiteFooter />
    </>
  )
}
