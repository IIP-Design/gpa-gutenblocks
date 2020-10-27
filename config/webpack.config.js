const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const paths = require( './paths' );

module.exports = {
  entry: {
    admin: `${paths.interfaceSrc}/index.js`,
    blockSettings: `${paths.interfaceSrc}/blockSettings.js`,
    embeds: `${paths.adminSrc}/embeds.js`,
    front: `${paths.adminSrc}/front.js`,
    interactive: `${paths.adminSrc}/interactive.js`,
    interactiveFront: `${paths.publicSrc}/index.js`,
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
          MiniCssExtractPlugin.loader,
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
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: 'gpalab-gut-[name].min.js',
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'gpalab-gut-[name].min.css',
    } ),
  ],
  resolve: {
    extensions: [
      '*', '.js', '.jsx',
    ],
  },
};
