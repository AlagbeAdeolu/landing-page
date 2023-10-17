/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cormorant', 'sans'],
        Mooli: ['Mooli', 'sans'],
        dancingScript: ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}