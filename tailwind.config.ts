import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8860B',
          light: '#C9A84C',
          dark: '#8B6508',
        },
        navy: {
          DEFAULT: '#0D1F3C',
          light: '#1A3157',
          dark: '#081526',
        },
        cream: '#FAF8F4',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      fontSize: {
        h1: ['56px', { lineHeight: '1.15', fontWeight: '700' }],
        h2: ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        h3: ['24px', { lineHeight: '1.3', fontWeight: '600' }],
      },
      boxShadow: {
        nav: '0 2px 12px rgba(13, 31, 60, 0.08)',
        card: '0 4px 20px rgba(13, 31, 60, 0.08)',
        dropdown: '0 8px 30px rgba(13, 31, 60, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
