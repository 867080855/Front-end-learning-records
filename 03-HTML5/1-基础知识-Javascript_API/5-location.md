#location
    1.获取当前网页地址值
        window.location;
        //location不是一个简单的字符串，是一个对象
    2.http劫持
        window.location = "http://www.baidu.com";
            //网页将只能访问百度
    3.获取url后获取后边的t参数
        window.location.search;
            //如果地址值中有中文，会一URL编码的形式呈现，可以通过decodeURI呈现