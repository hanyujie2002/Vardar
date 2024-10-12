const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      animation: {
        spinSlow: 'spin 10s linear infinite',
      },
      keyframes: {},
      colors: {
        themeColor: colors.rose,
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('scrollbar', '&::-webkit-scrollbar');
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
      addVariant('scrollbar-corner', '&::-webkit-scrollbar-corner');
    }),
    require('tailwindcss-animate'),
  ],
};
