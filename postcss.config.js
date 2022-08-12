const tailwindConfig = require('@abds/styles/tailwind.resolve.config');

const tw = {
  ...tailwindConfig,
  content: ['./src/**/*.{html,js}'],
  darkMode: 'media',
  theme: {
    ...tailwindConfig.theme,
    textColor: {
      ...tailwindConfig.theme.textColor,
      'brand-new': {
        DEFAULT: '#2A669F',
        50: '#E4F7F8',
        100: '#CCEEF2',
        200: '#9CD7E5',
        300: '#6CB9D8',
        400: '#3B94CB',
        500: '#2A669F',
        600: '#234B83',
        700: '#1B3366',
        800: '#14204A',
        900: '#0C102E',
      },
    },
  },
};

const config = {
  // add postcss plugins, required to extend apollo tailwind config
  plugins: [require('tailwindcss')(tw)],
};

module.exports = config;
