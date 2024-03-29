const withCSS = require("@zeit/next-css");
const withSass = require('@zeit/next-sass');

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = withCSS(withSass());
