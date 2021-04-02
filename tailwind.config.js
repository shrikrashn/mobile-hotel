module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('tailwind-forms')(),],
}
