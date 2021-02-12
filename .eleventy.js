module.exports = function (config) {
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy({ 'src/blog/**/*.{png,jpg,svg}': 'img/blog' });
  config.addPassthroughCopy('src/css/styles.css');
  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('src/favicon.ico');

  config.addWatchTarget('src/blog/**/*');

  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  config.setBrowserSyncConfig({
    open: true
  });

  return {
    dir: {
      input: 'src'
    }
  };
};
