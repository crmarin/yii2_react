const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: path.resolve(__dirname,'src/js/main.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './web/dist'),
    filename: 'js/[name].js'
  },
  // devServer: {
  //   port: 80, // use any port suitable for your configuration
  //   host: '0.0.0.0', // to accept connections from outside container
  //   watchOptions: {
  //       aggregateTimeout: 500, // delay before reloading
  //       poll: 1000 // enable polling since fsevents are not supported in docker
  //   }
  // },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ]
      },
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    //   chunkFilename: 'css/[id].css'
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'webpack-dev-server',
    //   template: path.resolve(__dirname, 'yii.php')
    // }),
  ],
};