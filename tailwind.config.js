/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        neutral: {
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        serif:   ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',   { lineHeight: '1.06', letterSpacing: '-0.03em',  fontWeight: '700' }],
        'display-xl':  ['3.75rem',  { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-lg':  ['3rem',     { lineHeight: '1.1',  letterSpacing: '-0.02em',  fontWeight: '700' }],
        'display-md':  ['2.25rem',  { lineHeight: '1.18', letterSpacing: '-0.018em', fontWeight: '600' }],
        'display-sm':  ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-xs':  ['1.5rem',   { lineHeight: '1.3',  letterSpacing: '-0.012em', fontWeight: '600' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.025em',
        tight:    '-0.015em',
        normal:   '0em',
        wide:     '0.025em',
        wider:    '0.06em',
        widest:   '0.12em',
      },
      lineHeight: {
        'heading': '1.08',
        'snug':    '1.3',
        'normal':  '1.5',
        'relaxed': '1.65',
        'loose':   '1.85',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'xs':        '0 1px 2px rgba(0,0,0,0.05)',
        'sm':        '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card':      '0 2px 8px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover':'0 12px 36px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
        'bento':     '0 1px 4px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)',
        'glass':     '0 4px 24px rgba(0,0,0,0.07)',
        'premium':   '0 24px 64px rgba(0,0,0,0.10), 0 6px 20px rgba(0,0,0,0.05)',
        'float':     '0 8px 28px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        'hero-img':  '0 40px 100px rgba(0,0,0,0.14), 0 12px 32px rgba(0,0,0,0.07)',
      },
      animation: {
        'float':      'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '6px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
