/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        glass: {
          bg: 'rgba(255 255 255 / 0.55)',
          border: 'rgba(255 255 255 / 0.65)',
          shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        },
        dark: {
          glass: {
            bg: 'rgba(17 24 39 / 0.55)',
            border: 'rgba(255 255 255 / 0.1)',
            shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
