const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );

const paths = require( './paths' );

module.exports = {
  entry: {
    interactiveFront: `${paths.appSrc}/index.js`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin( {
        sourceMap: true
      } ),
      new OptimizeCSSAssetsPlugin( {} )
    ]
  },
  output: {
    path: paths.appDist,
    publicPath: '/',
    filename: '[name].min.js'
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'interactive.min.css'
    } )
  ],
  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  }
};
