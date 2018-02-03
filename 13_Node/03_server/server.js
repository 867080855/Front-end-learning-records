var http = require('http');
var router = require('./router');


// 创建server
function create(port = 3000) {
    http.createServer(_onRequest).listen(port);
    console.info('the port is ' + port);
}

// 处理请求
function _onRequest(request, response) {
    // 路由
    var res = router.route(request.url);
    console.log(request.url);
    // 状态码
    response.writeHead(res.code, {});
    // 响应内容

    res.content = 'as';
    response.write(res.content);
    response.end();
}

exports.create = create;