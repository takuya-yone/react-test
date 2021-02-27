const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'fonts/[name].[ext]',
            },
          }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv()],
};