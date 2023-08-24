import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Dancing_Script} from 'next/font/google'
import { Footer } from './partials/Footer/Footer';

const fontMain = Roboto({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-main',
})

const fontCursive = Dancing_Script({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-cursive',
});

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
      </body>
    </html>
  )
}
