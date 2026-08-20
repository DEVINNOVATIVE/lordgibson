export function BlogCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="aspect-[16/10] animate-pulse bg-secondary" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-3 w-20 animate-pulse rounded bg-secondary" />
          <div className="h-1 w-1 animate-pulse rounded-full bg-secondary" />
          <div className="h-3 w-14 animate-pulse rounded bg-secondary" />
        </div>
        <div className="h-6 w-full animate-pulse rounded bg-secondary" />
        <div className="mt-2 h-6 w-4/5 animate-pulse rounded bg-secondary" />
        <div className="mt-4 h-4 w-full animate-pulse rounded bg-secondary" />
        <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-secondary" />
        <div className="mt-6 h-4 w-28 animate-pulse rounded bg-secondary" />
      </div>
    </div>
  )
}

export function FeaturedPostSkeleton() {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
      <div className="aspect-[16/10] animate-pulse bg-secondary lg:aspect-auto" />
      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-6 w-24 animate-pulse rounded-full bg-secondary" />
          <div className="h-4 w-16 animate-pulse rounded bg-secondary" />
        </div>
        <div className="h-9 w-full animate-pulse rounded bg-secondary" />
        <div className="mt-3 h-9 w-3/4 animate-pulse rounded bg-secondary" />
        <div className="mt-6 h-5 w-full animate-pulse rounded bg-secondary" />
        <div className="mt-2 h-5 w-5/6 animate-pulse rounded bg-secondary" />
        <div className="mt-6 h-3 w-32 animate-pulse rounded bg-secondary" />
        <div className="mt-8 h-12 w-40 animate-pulse rounded-full bg-secondary" />
      </div>
    </div>
  )
}

export function ArticleSkeleton() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 sm:pt-36">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-8 h-10 w-36 animate-pulse rounded-full bg-primary-foreground/10" />
        <div className="mb-5 h-7 w-28 animate-pulse rounded-full bg-primary-foreground/10" />
        <div className="h-10 w-full animate-pulse rounded bg-primary-foreground/10" />
        <div className="mt-3 h-10 w-4/5 animate-pulse rounded bg-primary-foreground/10" />
        <div className="mt-3 h-10 w-2/3 animate-pulse rounded bg-primary-foreground/10" />
        <div className="mt-8 flex items-center gap-4 border-t border-primary-foreground/10 pt-6">
          <div className="h-4 w-24 animate-pulse rounded bg-primary-foreground/10" />
          <div className="h-4 w-20 animate-pulse rounded bg-primary-foreground/10" />
          <div className="h-4 w-20 animate-pulse rounded bg-primary-foreground/10" />
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-4xl px-5 sm:px-8">
        <div className="aspect-[16/9] animate-pulse rounded-3xl bg-primary-foreground/10" />
      </div>
    </section>
  )
}
