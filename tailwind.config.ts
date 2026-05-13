import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        bg:       '#1E1E1E',
        surface:  '#2A2A2A',
        border:   '#3A3A3A',
        lime:     '#D4FF00',
        offwhite: '#F0F0F0',
        gray:     '#888888',
        darkgray: '#555555',
        dark:     '#1E1E1E',
        accent:   '#D4FF00',
        muted:    '#888888',
      },
      animation: {
        marquee:      'marquee 18s linear infinite',
        'fade-up':    'fadeUp 0.5s ease-out forwards',
        'pulse-lime': 'pulseLime 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseLime: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,255,0,0)' },
          '50%':      { boxShadow: '0 0 20px 4px rgba(212,255,0,0.25)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
