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
        popup: 'popup 0.1s ease-out',
        fadeOut: 'fadeOut 0.1s ease-in',
      },
      keyframes: {
        popup: {
          '0%': { transform: 'scale(0.5)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
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
  ],
};
