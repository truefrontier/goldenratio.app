let path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `$environment: '${process.env.NODE_ENV}';`,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
