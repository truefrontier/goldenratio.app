let path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `$environment: '${process.env.NODE_ENV}';`,
      },
    },
  },

  devServer: {
    proxy: 'http://________SOME_URL_________.test/app',
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../../../public/assets/app',

  publicPath: process.env.NODE_ENV === 'production' ? '/assets/app/' : '/',

  // modify the location of the generated HTML file.
  indexPath:
    process.env.NODE_ENV === 'production' ? '../../../resources/views/app.blade.php' : 'index.html',

  configureWebpack: {
    resolve: {
      alias: {
        '@@': path.join(__dirname, '../../../'),
      },
    },
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();

    // add replacement loader(s)
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
};
