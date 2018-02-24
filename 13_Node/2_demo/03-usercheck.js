/**
 * Created by lenovo on 2017/2/25.
 */

// 引入模块
var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function (request,response) {
    var requestUrl = request.url;
    switch(requestUrl) {
        case '/post':
                post(request,response);
                break;
        case '/login':
                login(request,response);
                break;
        default:
                response.writeHead(404,{});
                response.end();
                break;
    }
    function post(request,response){
        var postDate = '';
        request.on('data',function (part) {
            postDate += part;
        });
        request.on('end',function () {
            console.log(postDate);
            var obj = querystring.parse(postDate);
            console.log(obj);
        });
        response.end();
    }
    function login(requset,response){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        response.write('<!DOCTYPE html>');
        response.write('<html lang="en">');
        response.write('');
        response.write('<head>');
        response.write('  <meta charset="UTF-8">');
        response.write('  <title>登陆表单</title>');
        response.write('</head>');
        response.write('');
        response.write('<body>');
        response.write('  <form action="/post" method="post">');
        response.write('    <table border="1">');
        response.write('      <tr>');
        response.write('        <td>用户名</td>');
        response.write('        <td>');
        response.write('          <input type="text" name="username">');
                                                    // 此处如果不加name属性，就无法获得part的值
        response.write('        </td>');
        response.write('      </tr>');
        response.write('      <tr>');
        response.write('        <td>密码</td>');
        response.write('        <td>');
        response.write('          <input type="password" name="password">');
        response.write('        </td>');
        response.write('      </tr>');
        response.write('      <tr>');
        response.write('        <td></td>');
        response.write('        <td>');
        response.write('          <input type="submit">');
        response.write('        </td>');
        response.write('      </tr>');
        response.write('    </table>');
        response.write('  </form>');
        response.write('</body>');
        response.write('');
        response.write('</html>');
        response.end();
    }
});

// 监听
server.listen(8080,function (error) {
    console.log('8080端口已监听');
});