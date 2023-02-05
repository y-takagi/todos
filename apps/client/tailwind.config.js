/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['apps/client/src/**/*.{html,ts,css,scss}'],
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {},
    screens: {
      xs: { max: '599px' },
      'gt-xs': { min: '600px' },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
