var webpack = require('webpack');
var ExtractWebpackPlugin = require('extract-text-webpack-plugin');
const extractSCSS = new ExtractWebpackPlugin('bundle.css');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /.scss$/,
                use: extractSCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     use: 'souce-map-loader'
            // }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
        // "react-dom": "ReactDom" // wrong synatx
    },
    devServer: {
        // contentBase设置好服务器初始路径
        contentBase: __dirname,
        port: 80,
        inline: true
    },
    plugins: [
        extractSCSS
    ]
}