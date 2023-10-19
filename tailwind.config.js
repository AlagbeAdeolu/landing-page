/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomOut: {
          'from': {
            transform: 'scale(1.1)',
          },
          'to': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'zoom-out': 'zoomOut 1s ',
      },

      fontFamily: {
        sans: ['Cormorant', 'sans'],
        Mooli: ['Mooli', 'sans'],
        dancingScript: ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}