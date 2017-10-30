# css-loader更新之后出大问题啦

## 问题1

路径不能以数字开头,因为存在一个24-AutoTools导致css-loader加载失败，去掉25和-就好了

## 问题2

webpack.config.js的配置方式也变了，详见该文件，注释着的内容是更新之前的方式