const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './app/index.js'
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader', 'postcss-loader'],
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'file-loader?limit=8192&name=assets/[name].[ext]?[hash]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.ejs'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './app/favicon.ico' },
                { from: './app/assets', to: 'assets' }
            ],
        })
    ],
    devtool: 'eval'
};
