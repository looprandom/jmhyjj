const webpack = require('webpack')
module.exports = {
    configureWebpack: (config) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                'window.Quill': 'quill/dist/quill.js',
                'Quill': 'quill/dist/quill.js'
            })
        )
    }
}