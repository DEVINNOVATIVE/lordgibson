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
      className={cn('group flex min-w-0 items-center gap-2 sm:gap-3', className)}
      aria-label="Lord Gibson UK — home"
    >
      <Image
        src="/logo.png"
        alt="Lord Gibson UK"
        width={44}
        height={52}
        className="h-9 w-auto shrink-0 drop-shadow-sm sm:h-11"
        priority
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            'font-serif text-lg font-semibold tracking-wide sm:text-xl',
            inverted ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          Lord Gibson
        </span>
        <span className="mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-accent sm:text-[0.65rem] sm:tracking-[0.35em]">
          United Kingdom
        </span>
      </span>
    </Link>
  )
}
