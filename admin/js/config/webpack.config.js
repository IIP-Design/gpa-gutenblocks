const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );

const paths = require( './paths' );

module.exports = {
  entry: {
    admin: paths.interfaceIndex,
    blockSettings: `${paths.interfaceSrc}/blockSettings.js`,
    embeds: paths.embedsIndex,
    front: `${paths.blocksSrc}/front.js`,
    interactive: `${paths.blocksSrc}/interactive.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin( {
        sourceMap: true,
      } ),
      new OptimizeCSSAssetsPlugin( {} ),
    ],
  },
  output: {
    path: paths.appDist,
    publicPath: '/',
    filename: 'iip-gut-[name].min.js',
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'iip-gut-[name].min.css',
    } ),
  ],
  resolve: {
    extensions: [
      '*', '.js', '.jsx',
    ],
  },
};
