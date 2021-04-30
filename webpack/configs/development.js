const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('../utils/paths');
const basicLightbox = require('basiclightbox');


module.exports = env => ({
    devtool: 'cheap-eval-source-map',
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),

    ],
    devServer: {
        contentBase: paths.BUILD_DIR,
        historyApiFallback: true,
        compress: true,
        port: 4040,
        noInfo: true,
        quiet: true,
        clientLogLevel: 'warning',
        stats: 'errors-only',
        open: true,
    },
});