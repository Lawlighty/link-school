const withCss = require("@zeit/next-css");
const withLess = require('@zeit/next-less');
const path = require('path');

// config.resolve.alias = {
//   ...config.resolve.alias,
//   '@components': path.resolve(__dirname, './components'),
//   '@page': path.join(__dirname, '.', 'page'),
//   '@server': path.join(__dirname, '.', 'server'),
//   '@public': path.join(__dirname, '.', 'public'),
//   '@utils': path.join(__dirname, '.', 'utils'),
// };
if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, './components'),
      '@server': path.resolve(__dirname, '.', 'server'),
      '@page': path.resolve(__dirname, '.', 'page'),
      '@public': path.resolve(__dirname, '.', 'public'),
      '@utils': path.resolve(__dirname, '.', 'utils'),
      '@store': path.resolve(__dirname, '.', 'store'),
      '@styles': path.resolve(__dirname, '.', 'styles'),
      '@config': path.resolve(__dirname, '.', 'config'),
    };
    return config;
  },
};

// module.exports = withCss({});
module.exports = withLess(withCss({}));
