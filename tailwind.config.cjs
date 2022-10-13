/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**.tsx'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      
      white: '#FFFFFF',
      black: '#000000',
      
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },
      orange: {
        500: '#F76808',
        300: '#EF853E'
      }
    },
    fontSize: {
      'xs':  14,
      'sm':  16,
      'md':  18,
      'lg':  20,
      'xl':  24,
      '2xl': 32,
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      }
    },
  },
  plugins: [],
}
