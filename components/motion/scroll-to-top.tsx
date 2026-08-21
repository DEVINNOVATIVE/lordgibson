'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function ScrollToTop() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    if (window.location.hash) return
    scrollToTop()
  }, [pathname])

  return null
}
