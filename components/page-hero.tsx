import Image from 'next/image'
import Link from 'next/link'

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
}: {
  title: string
  subtitle: string
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
      </div>

      <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70"
        >
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span className="text-accent">/</span>
          <span className="text-accent">{title}</span>
        </nav>
        <h1 className="font-serif text-5xl font-semibold text-balance text-primary-foreground sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/80">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
