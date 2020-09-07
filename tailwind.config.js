module.exports = {
  purge: {
    layers: ['utilities', 'components'],
    content: ['./src/**/*.html', './src/js/*.js']
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
  plugins: [],
  corePlugins: {
    textOpacity: false,
    borderOpacity: false,
    backgroundOpacity: false,
    keyframes: false
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
