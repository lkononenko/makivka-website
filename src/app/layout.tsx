import './globals.css'
import type { Metadata } from 'next'
import { Footer } from './partials/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { fontMain, fontCursive } from './fonts';

export const metadata: Metadata = {
  title: 'Makivka',
  description: 'Ukrainian Ensemble',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontMain.className} ${fontCursive.variable}`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
