/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#9B7FD4',
          dark:    '#6B4FA8',
          text:    '#9B7FD4',
          mid:     '#2A1660',
        },
        pink: {
          DEFAULT: '#C084FC',
        },
        bg: {
          dark: '#1C1030',
          mid:  '#2A1660',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #9B7FD4, #C084FC)',
      },
    },
  },
  plugins: [],
};
