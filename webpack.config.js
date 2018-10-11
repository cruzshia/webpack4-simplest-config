var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    /* if entry is not set, default is ./src/index.js */
    // entry: {
    //     main: path.resolve(__dirname, 'src/index.js'),
    //     entry2: path.resolve(__dirname, 'src/entry2.js'),
    // },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'src/'),
            path.resolve(__dirname, 'node_modules/'),
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: ['@babel/env'],
                plugins: [
                    '@babel/proposal-object-rest-spread',
                    '@babel/proposal-class-properties']
            }
        }
        ]
    },
    devServer: {
        compress: true,
        port: 8686
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: "./index.html"
        })
    ]
};