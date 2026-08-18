import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lord Gibson UK | The History of Lord Neil Benjamin Gibson',
  description:
    'The official heritage site of Lord Neil Benjamin Gibson — Lord of Wheldrake and Warter Priory, philanthropist, international investor and founder of LNBG International Investments.',
  generator: 'v0.app',
  icons: {
    icon: '/gibson-crest.webp',
    apple: '/gibson-crest.webp',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a1f36',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
