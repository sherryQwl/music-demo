const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      // extensions that are used
      alias: {
        'api': path.resolve(__dirname, './src/api/'),
        'utils':path.resolve(__dirname, './src/utils/')
      }
    }
  }
};
