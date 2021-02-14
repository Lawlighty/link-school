const withCss = require("@zeit/next-css");
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
// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname),
//       components: path.resolve(__dirname, 'components'),
//       server: path.resolve(__dirname, 'server'),
//     };
//     return config;
//   },
// };

module.exports = withCss({});
