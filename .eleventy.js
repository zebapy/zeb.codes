module.exports = function (config) {
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('src/favicon.ico');

  config.setBrowserSyncConfig({
    open: true
  });

  return {
    dir: {
      input: 'src'
    }
  };
};
