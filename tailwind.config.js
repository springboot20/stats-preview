const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    fontFamily: {
      inter: '"Inter", sans-serif',
    },
    colors: {
      'very-dark-blue': 'hsl(233, 47%, 7%)',
      'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
      'soft-violet-accent': 'hsl(277, 64%, 61%)',
      'neutral-white': 'hsl(0, 0%, 100%)',
      'slightly-transparent-white-p': 'hsla(0, 0%, 100%, 0.75)',
      'slightly-transparent-white-h': 'hsl(0, 0%, 100%, 0.6)',
      ...colors,
    },
    extend: {
      backgroundImage: {
        'sm-bg': 'url(./../images/image-header-mobile.jpg)',
        'md-bg': 'url(./../images/image-header-desktop.jpg)',
      },
      ...defaultTheme,
    },
  },
  plugins: [require('autoprefixer')],
};
