const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: PROD ? {} : false
  }
};
