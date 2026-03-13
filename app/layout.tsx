import type { Metadata } from 'next'
import { Playfair_Display, Instrument_Serif, Inter, Indie_Flower } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
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
    icon: '/EB.png',
    apple: '/EB.png',
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
        className={`${playfair.variable} ${instrumentSerif.variable} ${inter.variable} ${indieFlower.variable} font-sans antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

