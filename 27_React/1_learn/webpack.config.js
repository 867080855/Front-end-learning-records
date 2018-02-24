var webpack = require('webpack');


module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    // webpack-dev-server
    devServer: {
        // contentBase设置好服务器初始路径
        contentBase: __dirname,
        port: 8080,
        inline: true
    }
}