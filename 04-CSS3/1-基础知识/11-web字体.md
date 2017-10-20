Created By tecWang
###Web字体

        开发人员可以为自已的网页指定特殊的字体，无需考虑用户电脑上是否安装了此
    特殊字体，从此把特殊字体处理成图片的时代便成为了过去。支持程度比较好，
    甚至IE低版本浏览器也能支持。
- 字体格式
    1. TureTpe(.ttf)格式
    
            .ttf字体是Windows和Mac的最常见的字体，是一种RAW格式，支持这种字
            体的浏览器有IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、
            iOS Mobile、Safari4.2+；
    2. OpenType(.otf)格式
    
            .otf字体被认为是一种原始的字体格式，其内置在TureType的基础上，
            支持这种字体的浏览器有Firefox3.5+、Chrome4.0+、Safari3.1+、
            Opera10.0+、iOS Mobile、Safari4.2+；
    3. Web Open Font Format(.woff)格式
       
             woff字体是Web字体中最佳格式，他是一个开放的TrueType/OpenType
             的压缩版本，同时也支持元数据包的分离，支持这种字体的浏览器有
             IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+；
    4. Embedded Open Type(.eot)格式
        
            .eot字体是IE专用字体，可以从TrueType创建此格式字体，支持这种
            字体的浏览器有IE4+；
    5. SVG(.svg)格式
        
            .svg字体是基于SVG字体渲染的一种格式，支持这种字体的浏览器有
            Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+；
- 字体图片

            可以把文字理解成是一种特殊形状的图片，反之我们是不是也可以把图片
        制作成字体呢？
            答案是肯定的。
            常见的是把网页常用的一些小的图标，借助工具帮我们生成一个字体库，
        然后就可以像使用文字一样使用图标了。
    1. 优点：
        - 将所有图标打包成字体库，减少请求；
        - 具有矢量性，可保证清晰度；
        - 使用灵活，便于维护；
            
                字体图标库
                    http://fontawesome.dashgame.com/
                定制自已的字体图标库
                    http://iconfont.cn/
                    https://icomoon.io/
                SVG
                    http://www.iconsvg.com/

    