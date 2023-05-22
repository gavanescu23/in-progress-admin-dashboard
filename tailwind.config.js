/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'milky-way': "url(../src/components/milkyWay2.jpg)",
      },
    },
    screens: {
      'xs': '300px',
      'sm': '768px',
      'md': '960px',
      'lg': '1440px',
      'xl': '1441px'
    },
  },
  plugins: [],
}