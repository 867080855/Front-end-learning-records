// 加上图片？
module.exports = {
    entry: {
        bundle_image: './main-image.js',
        bundle_css: './main-css.js',
        bundle1: './main.js',
        bundle2: './main2.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
        // loaders: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                // loader:'style-loader!css-loader'
            },
            {
                test:/\.(jpg|png)/,
                // 错误的格式(多了空格了)： test:/\.(jpg | png)/,
                loader:'url-loader?limit=500000'
                // 小图会以data:image/jpg形式引入，减少请求，但是不能缓存
                // 超过尺寸范围的图片会生成新文件： 2ddfc682d7cc99e77e1bcc32766e2812.jpg
            }
        ]
    }
};



// 开始引入css文件
// module.exports = {
//     entry: {
//         bundle_css: './main-css.js',
//         bundle1: './main.js',
//         bundle2: './main2.js'
//     },
//     output: {
//         filename: '[name].js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.css$/,
//                 loader:'style-loader!css-loader'
//             }
//         ]
//     }
// };  // bundle1.js && bundle2.js && bundle_css.js


// 多入口文件打包
// module.exports = {
//     entry: {
//         bundle1: './main.js',
//         bundle2: './main2.js'
//     },
//     output: {
//         filename: '[name].js'
//     }
// };  // bundle1.js && bundle2.js



// 单文件打包
// module.exports = {
//     entry: "./main.js",
//     output: {
//         filename:'bundle.js'
//     }
// };   // bundle.js