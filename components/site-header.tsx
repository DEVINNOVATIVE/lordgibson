'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isHome = pathname === '/'
  const overlay = isHome && !scrolled && !open

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setScrolled(window.scrollY > 24)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-500',
        overlay
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-border/60 glass',
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.75rem] sm:px-8 lg:px-12">
        <Logo inverted={overlay} />

        <nav
          className={cn(
            'hidden items-center rounded-full border p-1 backdrop-blur-sm md:flex',
            overlay
              ? 'border-primary-foreground/15 bg-primary-foreground/5'
              : 'border-border/50 bg-card/50',
          )}
          aria-label="Primary"
        >
          {links.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors',
                  overlay
                    ? active
                      ? 'bg-accent text-accent-foreground shadow-sm'
                      : 'text-primary-foreground/70 hover:text-primary-foreground'
                    : active
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            className="h-11 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30"
            render={<Link href="/contact" />}
          >
            Get in touch
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border backdrop-blur-sm md:hidden',
            overlay
              ? 'border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground'
              : 'border-border/50 bg-card/50 text-foreground',
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border/60 glass md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
