/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'load-buble-1': 'load-buble-1 1.5s linear infinite',
        'load-buble-2': 'load-buble-2 1.5s linear infinite',
        'load-buble-3': 'load-buble-3 1.5s linear infinite',
        'load-buble-4': 'load-buble-4 1.5s linear infinite',
      },
      keyframes: {
        'load-buble-1': {
          '0%, 25%': { transform: 'scale(0)', opacity: 1 },
          '38%, 100%': { transform: 'scale(1.2)' },
          '100%': { opacity: 0, transform: 'scale(0)' },
        },
        'load-buble-2': {
          '0%, 38%': { transform: 'scale(0)', opacity: 1 },
          '50%, 100%': { transform: 'scale(1.2)' },
          '100%': { opacity: 0, transform: 'scale(0)' },
        },
        'load-buble-3': {
          '0%, 50%': { transform: 'scale(0)', opacity: 1 },
          '63%, 100%': { transform: 'scale(1.2)' },
          '100%': { opacity: 0, transform: 'scale(0)' },
        },
        'load-buble-4': {
          '0%, 63%': { transform: 'scale(0)', opacity: 1 },
          '75%, 100%': { transform: 'scale(1.2)' },
          '100%': { opacity: 0, transform: 'scale(0)' },
        },
      },
    },
  },
  plugins: [],
}
