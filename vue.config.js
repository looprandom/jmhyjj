const webpack = require('webpack')
    // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
module.exports = {
    configureWebpack: (config) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                'window.Quill': 'quill/dist/quill.js',
                'Quill': 'quill/dist/quill.js'
            }),
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
            new HardSourceWebpackPlugin(),
            new ImageminWebpackPlugin()
        )
    }
}