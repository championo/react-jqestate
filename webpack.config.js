const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    open: 'chrome',
    port: 9000,
    hot: true,
    stats: 'errors-warnings',
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, '.stylelintrc'),
      context: path.resolve(__dirname, 'src'),
      files: ['**/*.{html, scss}'],
    }),
    new HtmlWebpackPlugin({
      title: 'JQ Estate',
      template: './src/index.html',
      favicon: 'favicon.png',
    }),
  ],
};
