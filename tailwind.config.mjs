/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#A855F7',
          dark:    '#5B21B6',
          text:    '#7C3AED',
          mid:     '#2D1057',
        },
        pink: {
          DEFAULT: '#EC4899',
        },
        bg: {
          dark: '#1A0A2E',
          mid:  '#2D1057',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #A855F7, #EC4899)',
      },
    },
  },
  plugins: [],
};
