module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        borderColor: '#F7DF94',
        authorColorDark: '#4F4F4F',
        authorColorLight: '#F2F2F2',
        genreColor: '#828282',
        bgDark: '#333333',
      },
      maxWidth: {
        custom: '724px',
        authorWidth: '672px',
      },
      lineHeight: {
        custom: '120%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
