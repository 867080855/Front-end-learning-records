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
        rules: [{
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },{   
                test: /\.scss$/,
                use: extractSCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },{
                test: /\.js$/,
                use: ['babel-loader']
            },{
                test: /\.string$/,
                use: ['string-loader']
            }  
        ]
    },devServer: {
        contentBase: __dirname + '/dist/',
        port: 80,
        inline: true
    },plugins: [
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