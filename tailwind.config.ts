import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Syne"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#FAFAF7',
          50: '#FAFAF7',
          100: '#F4F3EF',
          200: '#E8E6E1',
          300: '#D4D1CB',
          400: '#9E9A93',
          500: '#6B6862',
          600: '#4A4843',
          700: '#35332F',
          800: '#25231F',
          900: '#1A1917',
          950: '#0F0E0D',
        },
        accent: {
          DEFAULT: '#C3B1E1',
          muted: 'rgba(195, 177, 225, 0.15)',
          dim: 'rgba(195, 177, 225, 0.08)',
          ceruleo: '#98C1D9',
          beige: '#E0D8B0',
        },
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up-delay-1': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards',
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'line-reveal': 'lineReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        lineReveal: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      letterSpacing: {
        'tighter-2': '-0.04em',
      },
    },
  },
  plugins: [],
}
