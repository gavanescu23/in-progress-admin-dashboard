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
  },
  plugins: [],
}