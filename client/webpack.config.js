var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js', 'script-loader!foundation-sites/dist/js/foundation.min.js', './src/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    externals: {
        jquery: 'jQuery'
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
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'HMCA Home',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({filename: 'app.bundle.css', disable: false, allChunks: true}),
        new webpack.ProvidePlugin({'$': 'jquery'})
    ],
    resolve: {
        modules: [
            path.resolve('./src/resources/components'),
            path.resolve('./src/resources/components/MainContent'),
            path.resolve('./src/resources/components/Sidebar'),
            path.resolve('./src/resources/components/Titlebar'),
            path.resolve('./src/resources/views'),
            path.resolve('./src/resources/utils'),
            path.resolve('./src/resources/services'),
            path.resolve('./src/vendors'),
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    }
};
