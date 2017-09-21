// webpack.config.js
module.exports = {
  // entry point of application
  entry: './main.js',
  // where to place the compiled bundle
  output: {
    path: __dirname,
    filename: 'build.js'
  },

  module: {

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        sass: 'style!css!sass?indentedSyntax',
        scss: 'style!css!sass'
      }
    ]
  }
}
