const webpack = require( 'webpack' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );

const paths = require( './paths' );

module.exports = {
  entry: paths.appIndex,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin ( {
  //       sourceMap: true
  //     } ),
  //   ],
  // },
  output: {
    path: paths.appDist,
    publicPath: '/',
    filename: 'interactive.min.js'
  }
}