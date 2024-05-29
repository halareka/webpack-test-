// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/scripts/index.js'),
    },
        output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ]
}