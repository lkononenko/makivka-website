import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //   },
    // },
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        main: ['var(--font-main)', 'sans-serif'],
        cursive: ['var(--font-cursive)', 'cursive'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ba332f",
          "secondary": "#302B31",
          "accent": "#625967",
          "neutral": "#DCD6D8",
          "base-100": "#ffffff",

          "--rounded-btn": "0.3rem",
          "--rounded-box": "0.5rem",
          // "--btn-text-case": "uppercase",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
export default config
