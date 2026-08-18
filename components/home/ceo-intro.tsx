import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

export function CeoIntro() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="LNBG International Investments"
          title="CEO &amp; Founder of LNBG International Investment"
        />
        <div className="mt-10 space-y-6 text-center text-lg leading-relaxed text-muted-foreground">
          <p>
            LNBG International Investments is an IBC (International Business
            Company), also known by the acronym &ldquo;LNBG&rdquo;. It is a
            company offering an alternative to traditional funding.
          </p>
          <p>
            As did the United Kingdom of Great Britain from Europe, people are
            forced to follow guidelines which are long, tedious and
            overwhelming. LNBG streamlines the process — making it simple, easy
            and quick, while assuring positive results for our clients.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="h-11 rounded-full border-primary/25 bg-transparent px-6 text-foreground hover:bg-secondary"
            render={<Link href="/about" />}
          >
            View More
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
