/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    configViewer: {
      fonts: [
        'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      ],
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['Rubik', 'sans-serif'],
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
    themes: [
      {
        nordLight: {
          primary: '#88C0D0',

          secondary: '#81A1C1',

          accent: '#B48EAD',

          neutral: '#2E3440',

          'base-100': '#D8DEE9',

          info: '#5E81Ac',

          success: '#A3BE8C',

          warning: '#D08770',

          error: '#BF616A',
        },
      },
      {
        nordDark: {
          primary: '#88C0D0',

          secondary: '#81A1C1',

          accent: '#B48EAD',

          neutral: '#D8DEE9',

          'base-100': '#2E3440',

          info: '#5E81Ac',

          success: '#A3BE8C',

          warning: '#D08770',

          error: '#BF616A',
        },
      },
    ],
    darkTheme: 'nordDark',
  },
};
