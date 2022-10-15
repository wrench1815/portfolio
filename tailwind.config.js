/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Mansalva', 'cursive'],
      serif: ['"Nanum Pen Script"', 'cursive'],
      mono: ['"Fira Code"', 'monospace'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  // daisyUI config
  daisyui: {
    themes: ['pastel', 'dracula'],
    darkTheme: 'dracula',
  },
};
