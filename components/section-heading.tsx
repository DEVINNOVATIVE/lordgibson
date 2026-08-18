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
        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-serif text-3xl font-semibold text-balance sm:text-4xl',
          inverted ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      <span
        className={cn(
          'mt-5 h-px w-16 bg-accent',
          align === 'center' && 'mx-auto',
        )}
      />
    </div>
  )
}
