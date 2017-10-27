/**
 * Created by lenovo on 2017/2/25.
 */
/*
*   使用node来管理请求时与php是很不同的，对于php而言，是请求某个具体的文件来获取
* 数据，而对于node而言，只要你请求这个网址，那么所有的请求都必须先经过node才可以。
* 可以通过node实现一个请求的分配服务。
* */

// 1. 可以用来创建一个http服务器
var http = require('http');

// 2. 创建一个服务，核心步骤，负责书写响应头和响应体
// 只要有人来了就会执行这个函数
var server = http.createServer(function (request,response) {
    console.log(request.url);
    //  处理请求
    response.writeHead(200,{
        // 告知客户端返回的是text/html格式的文档
        'Content-Type':'text/html',
        'key1':'value1'
    });
    // 往响应体中放数据
    // http不管是服务端给客户端还是客户端给服务端都只能传输文字
    response.write('<h1>hahahahaha</h1>');
    response.end(); // 告知响应体已经书写完毕，可以返回了。
});

// 3. 启动服务
server.listen(8080,function (error) {
    // 回调函数，用来监听成功后返回一定的内容告知发布任务者已经成功监听端口，除此之外貌似没有什么别的作用
    console.log('成功监听8080端口');
});

/*
地址栏输入www.baidu.com的请求头
    Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,(..此处删除了一些东西)
    Accept-Encoding:gzip, deflate, sdch, br
    Accept-Language:zh-CN,zh;q=0.8,en;q=0.6
    Connection:keep-alive
    DNT:1
***    Host:www.baidu.com
    Upgrade-Insecure-Requests:1
    User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36
地址栏输入localhost:8080的请求头
    Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,
    Accept-Language:zh-CN,zh;q=0.8,en;q=0.6
    Cache-Control:max-age=0
    Connection:keep-alive
    DNT:1
***    Host:localhost:8080
    Upgrade-Insecure-Requests:1
    User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36

注意观察发现，貌似除了host不同之外，其他的的内容都是相似的。
当然我删除了cookie项，可能该项两者也不一定一样。
据此推测，host的地址就是远程的url地址。在地址栏输入它，就相当于请求了这个地址。
只不过区别在于，输入百度返回了一个正式的百度页面，输入localhost返回了hahahahaha。
性质是一样的，都是自动把返回的东西进行了渲染。

所以，如上的三个步骤就相当于创建了一个监视器，负责监视 所有请求本地址的请求，并给以一定的回复。
*/
