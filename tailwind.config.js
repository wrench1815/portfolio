/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    configViewer: {
      fonts: [
        'https://fonts.googleapis.com/css2?family=Fira+Code&family=Mansalva&family=Nanum+Pen+Script&display=swap',
      ],
    },
    fontFamily: {
      sans: ['Mansalva', 'cursive'],
      serif: ['"Nanum Pen Script"', 'cursive'],
      mono: ['"Fira Code"', 'monospace'],
    },

    // overide height
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),

    // overide min-height
    minHeight: {
      0: '0px',
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },

    // overide max-height
    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  // daisyUI config
  daisyui: {
    themes: ['pastel', 'dracula'],
    darkTheme: 'dracula',
  },
};
