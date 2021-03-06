var url = require('url');
var querystring = require('querystring');
var requesthandler = require('./requesthandler');

// todo 后期可以扩展路由部分

function route(request_url) {
    // 解析地址
    var url_parse = url.parse(request_url);
    var url_path = url_parse['path'];

    var res = {};
    var code = 200;
    // 判断路径是否存在
    var content = requesthandler.handle(url_path);

    return {
        'code': code,
        'content': content
    }
}

exports.route = route;