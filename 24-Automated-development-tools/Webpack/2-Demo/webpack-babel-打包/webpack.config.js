module.exports = {
    entry: './entry.js',
    // entry: 'entry.js',   // 不加路径会报错
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    }
}