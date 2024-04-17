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
        50: '#f1f7fe',
        100: '#e3edfb',
        200: '#c0daf7',
        300: '#88bcf1',
        400: '#4899e8',
        500: '#207cd7',
        600: '#1468c5',
        700: '#104d94',
        800: '#12437a',
        900: '#143966',
        950: '#0d2444'
      }
    },
    FontFamily: {
      robtronika: ['Robtronika'],
      conthrax: ['Conthrax']
    }
  },
  plugins: []
}
