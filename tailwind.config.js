module.exports = {
  purge: {
    layers: ['utilities', 'components'],
    content: ['./src/**/*.html', './src/js/*.js', './src/_includes/icons/*.svg']
  },
  theme: {
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last']
  },
  corePlugins: {
    textOpacity: false,
    borderOpacity: false,
    backgroundOpacity: false,
    keyframes: false
  }
};
