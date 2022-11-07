/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-blue': '#6199F9',
        'main-gray': '#828993',
        'main-orange': '#E37D61',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
