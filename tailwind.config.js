module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main': 'var(--main)',
        'keypad': 'var(--keypad)',
        'screen': 'var(--screen)',
        'function-key': 'var(--function-key)',
        'function-key-shadow': 'var(--function-key-shadow)',
        'result-key': 'var(--result-key)',
        'result-key-shadow': 'var(--result-key-shadow)',
        'key': 'var(--key)',
        'key-shadow': 'var(--key-shadow)',
        'text': 'var(--text)',
      },
      fontFamily: {
        sans: ['Spartan', 'sans-serif'],
      },
      fontSize: {
        '3.5xl': ['2rem', '2.25rem']
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}