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
    fontSize: {
      xs: '0.5rem',
      sm: '0.8rem',
      sm1: '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  darkMode: 'class',
  plugins: [],
}
