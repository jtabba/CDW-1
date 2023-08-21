const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const dotenv = require('dotenv')
dotenv.config()

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                API_URL: JSON.stringify(process.env.API_URL),
                ENCRYPTION_PASSPHRASE: JSON.stringify(
                    process.env.ENCRYPTION_PASSPHRASE
                )
            }
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true
                    }
                }
            }),
            new TerserPlugin({
                parallel: 4
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
})
