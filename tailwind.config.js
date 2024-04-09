/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef

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
      },
      accent: {
        500: '#1468C5'
      }
    },
    FontFamily: {
      'robtronika': ["Robtronika"],
      'conthrax': ["Conthrax"]
    }
  },
  plugins: []
}
