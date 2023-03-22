/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'dark-xl' : '#161A25',
        'dark-xxl' : '#0B0B0E',
        'dark-m' : '#272E40',
        'dark-s' : '#4F6481'
      },
      fontFamily: {
        'satoshi': ['"Satoshi"','sans-serif']
      }
    },
  },
  plugins: [],
}


