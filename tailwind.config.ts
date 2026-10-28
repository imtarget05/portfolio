import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: '#fcf3ed',
          100: '#f8e4d8',
          200: '#edc3aa',
          300: '#e5ad91',
          400: '#dc9677',
          500: '#ba6044',
          600: '#a54630',
          700: '#8f392a',
          800: '#763126',
          900: '#602c24',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-foreground': 'rgb(var(--primary-foreground) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'rgb(var(--secondary-foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-foreground': 'rgb(var(--accent-foreground) / <alpha-value>)',
        neon: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        'surface-glass': 'rgba(255 255 255 / 0.55)',
        'surface-glass-dark': 'rgba(255 255 255 / 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'tilt-x': 'tilt-x 4s ease-in-out infinite',
        'tilt-y': 'tilt-y 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'tilt-x': {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(2deg)' },
          '50%': { transform: 'rotateX(5deg) rotateY(-2deg)' },
        },
        'tilt-y': {
          '0%, 100%': { transform: 'rotateY(0deg) rotateX(2deg)' },
          '50%': { transform: 'rotateY(6deg) rotateX(-4deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;