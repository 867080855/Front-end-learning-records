var webpack = require('webpack');

// extract multiple instances
var ExtractWebpackPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractWebpackPlugin('bundle1.css');
const extractSCSS = new ExtractWebpackPlugin('bundle2.css');


module.exports = {
    entry: __dirname + '/src/scripts/app.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // scss loader
            {   
                test: /\.scss$/,
                use: extractSCSS.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
                // 从后往前加载loader
                // loader:'style-loader!css-loader!'
                // 文件以css结尾
                // 两个loader的顺序一定不能换
            },
            // js loader
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            // string loader
            {
                test: /\.string$/,
                use: ['string-loader']
            }  
        ]
    },
    // webpack-dev-server
    devServer: {
        // contentBase设置好服务器初始路径
        contentBase: __dirname + '/dist/',
        port: 80,
        inline: true
    },
    // extract css && scss
    plugins: [
        // new ExtractTextWebpackPlugin(
        //     __dirname + '/dist/bundle.css'
        // )
        extractCSS,
        extractSCSS
    ]
    // compress js
    // plugins:[
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         }
    //     })
    // ]
}