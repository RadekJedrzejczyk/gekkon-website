/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparrnt: 'transparent',
      current: 'current',
      marshland: {
        50: '#f6f7f7',
        100: '#e2e5e3',
        200: '#c5cac7',
        300: '#a1a7a3',
        400: '#7c8580',
        500: '#626a65',
        600: '#4d5450',
        700: '#404543',
        800: '#363938',
        900: '#2f3231',
        950: '#171918'
      }
    }
  },
  plugins: []
}
