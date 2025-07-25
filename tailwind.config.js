/** @type {import('tailwindcss').Config} */
const { heroui } = require('@heroui/react');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: '#fd5545',
        secondary: '#000000',
        gray: '#eeeeee',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), heroui()], // eslint-disable-line
};
