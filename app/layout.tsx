import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { ScrollProgress } from '@/components/motion/scroll-progress'

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

const siteTitle = 'Lord Gibson UK | The History of Lord Neil Benjamin Gibson'
const siteDescription =
  'The official heritage site of Lord Neil Benjamin Gibson — Lord of Wheldrake and Warter Priory, philanthropist, international investor and founder of LNBG International Investments.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lordgibson.co.uk'),
  title: {
    default: siteTitle,
  },
  description: siteDescription,
  applicationName: 'Lord Gibson UK',
  manifest: '/favicon_io/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon_io/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon_io/android-chrome-512x512.png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Lord Gibson UK',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Lord Gibson UK — Lord Neil Benjamin Gibson',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-banner.png'],
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
        <ScrollProgress />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
