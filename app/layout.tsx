import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Bodoni_Moda, Stint_Ultra_Condensed, Instrument_Serif, Inter, Indie_Flower } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
})

const bodoniModa = Bodoni_Moda({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni-moda",
})

const stintUltraCondensed = Stint_Ultra_Condensed({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint-ultra-condensed",
})

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-indie-flower",

});


export const metadata: Metadata = {
  title: 'Edina Bajric Portfolio',
  description: 'Building at the intersection of engineering, AI, and human-centered design. Transforming complex problems into elegant solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${bodoniModa.variable} ${stintUltraCondensed.variable} ${instrumentSerif.variable} ${inter.variable} ${indieFlower.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

