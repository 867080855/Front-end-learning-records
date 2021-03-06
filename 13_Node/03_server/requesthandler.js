var fs = require('fs');

// 默认检索文件，可以修改为配置项
var default_files = [
    'index.htm',
    'index.html'
];

function handle(url_path) {
    // 文件路径构造
    var file_path = '.' + url_path;
    // 判断路径是否存在
    var f_path = _findFile(file_path);

    if (!f_path) {
        return 'the path "' + file_path + '" is not exist';
    } else {
        var content = fs.readFileSync(f_path);
        return content;
    }
}
/**
 * 检索目录下的不同文件名是否存在，建立优先级
 * @return {[type]} [description]
 */
function _findFile(file_path) {
    var is_file = _isFile(file_path);
    // 如果文件存在，直接返回路径
    if (is_file) {
        return file_path;
    }
    // 文件不存在，构造路径寻找文件
    var regex = /^\.\/[\w]*([\/][\w]+)?/;
    var regex_res = file_path.match(regex);
    // 匹配出目录路径 ./vue/test/s => ./vue/test
    if (!regex_res) {
        return '';
    } else {
        // 这里没有使用forEach，因为会遍历所有的值
        for (var i = 0; i < default_files.length; i++) {
            var new_path = regex_res[0] + '/' + default_files[i];
            if (_isFile(new_path)) {
                return new_path;
            }
        }
    }
}
/**
 * 文件是否存在
 * @param  {[type]}  file_path [description]
 * @return {Boolean}           [description]
 */
function _isFile(file_path) {
    try {
        // 同步会抛出异常，所以用try来保证正常执行
        var stat = fs.statSync(file_path);
        // 返回是否是文件
        return stat.isFile();
    } catch (e) {
        console.info(e.message);
    }


}

exports.handle = handle;