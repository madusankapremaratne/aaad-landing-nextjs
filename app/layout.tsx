import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aaad.app'),
  title: {
    default: 'AAAD - Android Auto Apps Downloader | Install Third-Party Apps Without Root',
    template: '%s | AAAD - Android Auto Apps Downloader'
  },
  description: 'AAAD (Android Auto Apps Downloader) is the original app for downloading and installing third-party apps for Android Auto without root access. Install CarStream, Fermata Auto, Screen2Auto, and more. No PC required, no developer options needed.',
  keywords: [
    'AAAD',
    'Android Auto Apps Downloader',
    'Android Auto third party apps',
    'Android Auto sideload apps',
    'install apps Android Auto',
    'Android Auto CarStream',
    'Android Auto Fermata',
    'Android Auto Screen2Auto',
    'Android Auto mirror',
    'Android Auto YouTube',
    'Android Auto video',
    'Android Auto no root',
    'Android Auto apps without root',
    'Android Auto custom apps',
    'AA AIO Tweaker alternative',
    'Android Auto app installer',
    'Android Auto APK downloader',
    'third party apps for car',
    'car infotainment apps',
    'Android Auto hacks',
    'Android Auto mods',
    'sideload Android Auto',
  ],
  authors: [{ name: 'shmykelsa' }],
  creator: 'shmykelsa',
  publisher: 'AAAD',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aaad.app',
    siteName: 'AAAD - Android Auto Apps Downloader',
    title: 'AAAD - Install Third-Party Apps on Android Auto Without Root',
    description: 'The original application for downloading and installing apps made specifically for Android Auto outside of Google Play Store. No root required. Active since 2021.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AAAD - Android Auto Apps Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAAD - Android Auto Apps Downloader',
    description: 'Install third-party apps on Android Auto without root. CarStream, Fermata Auto, Screen2Auto and more.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://aaad.app',
  },
  category: 'technology',
  classification: 'Android Apps',
  other: {
    'google-site-verification': 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3DDC84" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'AAAD - Android Auto Apps Downloader',
              operatingSystem: 'Android',
              applicationCategory: 'UtilitiesApplication',
              description: 'The original application for downloading and installing apps made specifically for Android Auto outside of Google Play Store.',
              url: 'https://aaad.app',
              downloadUrl: 'https://github.com/shmykelsa/AAAD/releases',
              softwareVersion: '2.4.3',
              datePublished: '2021-05-01',
              author: {
                '@type': 'Person',
                name: 'shmykelsa',
                url: 'https://github.com/shmykelsa'
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free with optional Pro upgrade'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.7',
                ratingCount: '2200',
                bestRating: '5',
                worstRating: '1'
              },
              featureList: [
                'No root required',
                'No PC needed',
                'No developer options',
                'One-tap installation',
                'Regular updates',
                'Multiple app support'
              ]
            })
          }}
        />
      </head>
      <body className="antialiased noise-bg grid-pattern">
        {children}
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PV9Q5SX7SX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PV9Q5SX7SX');
          `}
        </Script>
      </body>
    </html>
  )
}
