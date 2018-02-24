/**
 * Created by codeMaker on 2017/2/7.
 */
var $ = function(){};
$.prototype = {
    // 选择器
    $id: function (str) {
        return document.getElementById(str);
    },
    $class: function (str) {
        return document.getElementsByClassName(str);
    },
    $tag: function (str) {
        return document.getElementsByTagName(str);
    },

    // trim函数
    ltrim: function (str) {
        return str.replace(/(^\s*)/g,'');
    },
    rtrim: function (str) {
        return str.replace(/(\s*$)/g,'');
    },
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g,'');
        // ‘|’之间不能加空格，否则会报错
    },

    // ajax
    ajax: function (option) {
        // 1. 创建 xhr对象
        var xhr = null;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = ActiveXObject('Mircosoft.XMLHTTP');
        }

        // 2. 交代xhr需要准备的事务
        var type = option.type || 'post';
        var data = option.data || '';
        var url = '';
        if(option.url){
            url = option.url;
            if(type == 'get'){
                url += '?' + data + '&t=' + new Date().getTime();
            }
        }
        var flag = option.flag || 'true';

        xhr.open(type,url,flag);

        // 4. xhr回调函数
        xhr.onreadystatechange = function () {
            if(this.readyState == 4){
                if(this.status == 200){
                    if(typeof option.success == 'function'){
                        var d = option.dataType == 'xml'? xhr.responseXML: xhr.responseText;
                        option.success(d);
                    }
                }else{
                    if(typeof option.fail == 'function'){
                        option.fail();
                    }
                }
            }
        };

        // 3. xhr执行事务
        if(type == 'get'){
            xhr.send();
        }else if(type == 'post'){
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            xhr.send(option.data);
        }
    },

    // 日期格式转化
    dateFormat: function (date,format) {
        var o = {
            "M+" : date.getMonth()+1, //month
            "d+" : date.getDate(),    //day
            "h+" : date.getHours(),   //hour
            "m+" : date.getMinutes(), //minute
            "s+" : date.getSeconds(), //second
            "q+" : Math.floor((date.getMonth()+3)/3),  //quarter
            "S" : date.getMilliseconds() //millisecond
        };
        // RegExp.prototype.test()
        // 返回boolean
        if(/(y+)/.test(format)){
            format = format.replace(RegExp.$1,(date.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o){
            if(new RegExp("("+ k +")").test(format)){
                format = format.replace(RegExp.$1,
                    RegExp.$1.length == 1? o[k]: ("00"+ o[k]).substr((""+ o[k]).length));
            }
        }
        return format;
    },

    // 字符串拼接
    formatString: function (str,data) {
        return str.replace(/@(\w+)/g, function (match,key) {
            return data[key];
        });
    },
    artTemplate: function (obj,data) {
        // 封装artTemplate的template函数
        var render = template.compile(str);
        return render(data);
        // data为数据源
    },

    // extend拷贝
    extend: function (tar,source) {
        for(var k in source){
            tar[k] = source[k];
        }
        return tar;
    },
    extendMany:function () {
        var key,
            i = 0,
            len = arguments.length,
            target = null,
            copy;
        if(len === 0){
            return;
        }else if(len === 1){
            target = this;
        }else{
            i++;
            target = arguments[0];
        }
        for( ; i < len; i++){
            // i起始等于1
            for(key in arguments[i]){
                // arguments[i]表示一个json对象
                copy = arguments[i][key];
                target[key] = copy;
            }
        }
        return target;
    },

    // query查询字符串
    queryString:function () {
        var str = window.location.search.substring(1);
        var arr = str.split("&");
        var json = {};
        for(var i=0;i<arr.length;i++)
        {
            var c = arr[i].indexOf("=");  // 获取‘=’的索引值
            if(c==-1) continue;
            var d = arr[i].substring(0,c);  // 获取属性
            json[d] = arr[i].substring(c+1);  // 获取值
        }
        return json;
    },

    //数据类型检测
    isNumber:function (val){
        return typeof val === 'number' && isFinite(val)
    },
    isBoolean:function (val) {
        return typeof val ==="boolean";
    },
    isString:function (val) {
        return typeof val === "string";
    },
    isUndefined:function (val) {
        return typeof val === "undefined";
    },
    isObj:function (str){
        if(str === null || typeof str === 'undefined'){
            return false;
        }
        return typeof str === 'object';
    },
    isNull:function (val){
        return  val === null;
    },
    isArray:function (arr) {
        if(arr === null || typeof arr === 'undefined'){
            return false;
        }
        return arr.constructor === Array;
    }
};

var $$ = new $();

// 创建事件对象
var Event = function(){};
Event.prototype = {
    // 事件添加
    on:function (id, type, fn) {
        var dom = document.getElementById(id);
        if(dom.addEventListener)
            dom.addEventListener(type,fn);
        else if(dom.attachEvent)
            // 为什么要写成'on'+type?
            // 因为ie使用onclick的形式绑定事件，而传进来的type不带on
            dom.attachEvent('on'+type,fn)
    },
    // 事件移除
    un:function (id,type,fn) {
        var dom = document.getElementById(id);
        if(dom.removeEventListener)
            dom.removeEventListener(type,fn);
        else if(dom.detachEvent)
            dom.detachEvent(type,fn);
    }
};
// 添加event到$$
$$.event = new Event();