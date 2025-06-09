import { Roboto, Dancing_Script } from 'next/font/google';

export const fontMain = Roboto({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-main',
})

export const fontCursive = Dancing_Script({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-cursive',
});