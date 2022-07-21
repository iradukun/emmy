/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonGray: 'rgb(235, 235, 235)',
      }
    },
  },
  plugins: [],
}
