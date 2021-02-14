const path = require('path')

const DEFAULT_OPTIONS = {
  domain: 'https://images.socialsplash.xyz'
}

module.exports = function socialSplashModule (moduleOptions) {
  const options = Object.assign({}, DEFAULT_OPTIONS, this.options.socialsplash, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.js'),
    ssr: true,
    options
  })
}

module.exports.meta = require('../package.json')
