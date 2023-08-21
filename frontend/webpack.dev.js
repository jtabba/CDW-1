const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
// const webpack = require('webpack')
// const dotenv = require('dotenv')
const path = require('path')

module.exports = merge(common, {
    target: 'web',
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        static: path.join(__dirname, 'src/'),
        port: 3000,
        hot: 'only',
        compress: true
    },
    module: {
        rules: [
            {
                test: /(\.css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
})
