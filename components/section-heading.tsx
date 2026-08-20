import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  inverted = false,
  className,
}: {
  eyebrow?: string
  title: string
  align?: 'center' | 'left'
  inverted?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl',
          inverted ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      <span
        className={cn(
          'mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent/30',
          align === 'center' && 'mx-auto',
        )}
      />
    </div>
  )
}
