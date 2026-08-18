import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-3', className)}
      aria-label="Lord Gibson UK — home"
    >
      <Image
        src="/gibson-crest.webp"
        alt="Gibson family coat of arms"
        width={44}
        height={52}
        className="h-11 w-auto drop-shadow-sm"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-xl font-semibold tracking-wide',
            inverted ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          Lord Gibson
        </span>
        <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-accent">
          United Kingdom
        </span>
      </span>
    </Link>
  )
}
