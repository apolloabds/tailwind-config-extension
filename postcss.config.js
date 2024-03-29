// Apollo Tailwind config
const tailwindConfig = require('@abds/styles/tailwind.resolve.config');

const tw = {
  ...tailwindConfig,
  /**
    * Content array includes any file containing Tailwind utility classes.
    * See: https://tailwindcss.com/docs/content-configuration
    */
  content: ['./src/**/*.{html,js}'],
  darkMode: 'media',
  theme: {
    ...tailwindConfig.theme,
    textColor: {
      // Extending existing text colors below
      ...tailwindConfig.theme.textColor,
      // Overriding existing `brand-new` color below
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
  // Add postcss plugins, required to extend apollo tailwind config
  plugins: [require('tailwindcss')(tw)],
};

module.exports = config;
