const webpack = require('webpack');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const plugins = [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].min.css',
        chunkFilename: '[id].min.css',
    }),
    new ExtraWatchWebpackPlugin({
        files: ['**/*.php', '*.php'],
    }),
];


module.exports = {
    mode: 'production',
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000, // Check for changes every second
    },
    entry: {
        main: `${__dirname}/src/js/main.js`,
        style: `${__dirname}/src/scss/main.scss`,
    },
    target: 'web',
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].min.js'
    },
    resolve: {
        extensions: ["", ".js"]
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};