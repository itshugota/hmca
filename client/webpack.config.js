var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })﻿
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HMCA Home',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'app.bundle.css',
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    modules: [
      path.resolve('./src/resources/components'),
      path.resolve('./src/resources/components/firstComponent'),
      path.resolve('./src/resources/components/secondComponent'),
      path.resolve('./src/resources/containers'),
      path.resolve('./src/resources/utils'),
      path.resolve('./src/resources/services'),
      path.resolve('./src/vendors'),
      path.resolve('./node_modules')
    ]
  },
};
