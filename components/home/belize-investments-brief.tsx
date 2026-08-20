'use client'

import { useState } from 'react'
import { 
  FileText, 
  Quote, 
  ShieldCheck, 
  ArrowUpRight, 
  Radio, 
  MessageSquareQuote,
  Building,
  CheckCircle2
} from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

const reports = [
  {
    id: 'media',
    tabLabel: 'Media Discourse',
    badge: 'Public Scrutiny',
    icon: Radio,
    headline: 'Social Media & Cross-Border Capital Scrutiny',
    description:
      'Lord Neil Benjamin Gibson, Minister of Trade and Investment Erwin Contreras, and novice U.D.P. politician Ralph Huang dominated social media coverage, intensifying after Huang was elected U.D.P. Standard Bearer in Cayo South amid public discussion and online reports regarding Gibson\'s investor credentials.',
    metadata: [
      { label: 'Key Figures', value: 'Gibson, Contreras, Huang' },
      { label: 'Electoral Focus', value: 'Cayo South District' },
      { label: 'Channel', value: 'Digital & Broadcast Media' },
    ],
  },
  {
    id: 'official',
    tabLabel: 'Official Response',
    badge: 'Ministerial Confirmation',
    icon: ShieldCheck,
    headline: 'Government Trade & Investment Affirmation',
    description:
      'By Minister Contreras\' own assertion, Gibson and Huang are valued partners and significant investors across key development projects in Belize, with Lord Gibson providing major financial backing for Huang\'s campaign in Cayo South.',
    quote: {
      author: 'Hon. Erwin Contreras',
      title: 'Minister of Trade & Investment',
    },
    metadata: [
      { label: 'Portfolio', value: 'Foreign Direct Investment' },
      { label: 'Standing', value: 'Valued Project Partner' },
      { label: 'Backing', value: 'Private Campaign Funding' },
    ],
  },
]

export function BelizeInvestmentsBrief() {
  const [activeTab, setActiveTab] = useState<'media' | 'official'>('media')
  const current = reports.find((r) => r.id === activeTab) || reports[0]

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 sm:py-32">
      {/* Subtle architectural grid & ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-rgb,201_168_106),0.12),transparent_65%)]" 
      />
      <div className="absolute inset-0 bg-grid opacity-[0.015]" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* Section Eyebrow & Navigation */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                <Building className="size-3.5" />
                Case File &bull; Belize Chapter
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Cayo South &amp; Public Record
              </h2>
            </div>

            {/* Pill Switcher */}
            <div className="inline-flex rounded-2xl border border-border/80 bg-muted/30 p-1.5 backdrop-blur-md">
              {reports.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'media' | 'official')}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-foreground text-background shadow-md'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="size-3.5" />
                    {tab.tabLabel}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Main Visual Board */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* Left: Narrative & Key Statements */}
            <div className="flex flex-col justify-between space-y-8 lg:col-span-7">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                  <span className="size-2 rounded-full bg-accent animate-pulse" />
                  {current.badge}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                  {current.headline}
                </h3>

                {current.quote ? (
                  <div className="relative pl-6 border-l-2 border-accent">
                    <Quote className="pointer-events-none absolute -left-3 -top-2 size-8 text-accent/20" />
                    <p className="text-lg font-medium leading-relaxed italic text-foreground/95 sm:text-xl">
                      &ldquo;{current.description}&rdquo;
                    </p>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      &mdash; {current.quote.author}, {current.quote.title}
                    </div>
                  </div>
                ) : (
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {current.description}
                  </p>
                )}
              </div>

              {/* Status footer link */}
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <FileText className="size-4 text-accent" />
                <span>Archive Reference: Standard Bearer Candidacy Records</span>
              </div>
            </div>

            {/* Right: Data Breakdown & Fact Sheet */}
            <div className="flex flex-col justify-between rounded-3xl border border-border/70 bg-card/40 p-6 backdrop-blur-xl sm:p-8 lg:col-span-5">
              <div>
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Record Summary
                  </span>
                  <MessageSquareQuote className="size-4 text-accent" />
                </div>

                <div className="mt-6 space-y-5">
                  {current.metadata.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1 border-b border-border/40 pb-3">
                      <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-accent/5 px-4 py-3 border border-accent/15">
                <div className="flex items-center gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="size-4 text-accent" />
                  <span>Publicly Documented Statement</span>
                </div>
                <ArrowUpRight className="size-4 text-accent" />
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}