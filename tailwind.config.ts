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
        'plum': {
          DEFAULT: '#1A0A12',
          light: '#2A1020',
        },
        'ivory': {
          DEFAULT: '#FAF5EE',
          dark: '#E8DCD0',
        },
        'gold': {
          DEFAULT: '#C9A84C',
          light: '#D4B86E',
          dark: '#A89040',
        },
        'rose': {
          DEFAULT: '#D4A5A5',
          light: '#E0B8B8',
          dark: '#C09090',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': 'url("/images/noise.png")',
      },
    },
  },
  plugins: [],
};

export default config;
