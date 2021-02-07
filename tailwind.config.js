module.exports = {
  purge: {
    layers: ['utilities', 'components'],
    content: ['./src/**/*.html', './src/js/*.js', './src/_includes/icons/*.svg']
  },
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'white'
          }
        }
      }
    }
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last']
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    textOpacity: false,
    borderOpacity: false,
    backgroundOpacity: false,
    keyframes: false
  }
};
