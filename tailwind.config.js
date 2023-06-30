/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '18':'72px',
        '23': '92px',
        '26': '102px',
        '39': '158px',
        '42': '164px',
        '54': '222px',
        '84': '335px',
        '142': '570px',
      }
    },
  },
  plugins: [],
}

