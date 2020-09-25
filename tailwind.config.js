const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'TeXGyrePagella'", ...defaultTheme.fontFamily.serif],
        hand: ["'CalligraPhillip'", defaultTheme.fontFamily.serif],
      },
    },
  },
};
