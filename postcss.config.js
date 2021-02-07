const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    'postcss-nested': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: PROD ? {} : false
  }
};
