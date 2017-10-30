# 基础

## 1. webpack配置

```javascript
// 在webpack.config.js中怎么配置呢？
// 单入口打包
module.exports = {
    entry: "./main.js",
    output: {
        filename:'bundle.js'
    }
};

// 多入口打包
module.exports = {
    entry: {
        bundle1: './main.js',
        bundle2: './main2.js'
    },
    output: {
        filename: '[name].js'
    }
};
```

## 2. 加载器

```javascript
// css加载器
// 1. 通过npm安装
npm install xxx-loader --save[-dev]
// 2. 正则表达式
loaders: [
    {
        test: /\.css$/,
        loader:'style-loader!css-loader'
    }
]
// 3. loader打包
webpack
// 4. loader解析

// 图片加载器

```