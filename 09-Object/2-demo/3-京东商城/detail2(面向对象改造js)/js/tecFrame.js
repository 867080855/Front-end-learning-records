/**
 * Created by codeMaker on 2017/2/1.
 */
// ����������
function $$$(){}

// �����ܷ���
$$$.prototype = {
    // ѡ����
    $id: function (str) {
        return document.getElementById(str);
    },
    $class: function (str) {
        return document.getElementsByClassName(str);
    },
    $tag: function (str) {
        return document.getElementsByTagName(str);
    },
    // trim����
    ltrim: function (str) {
        return str.replace(/(^\s*)/g,'');
    },
    rtrim: function (str) {
        return str.replace(/(\s*$)/g,'');
    },
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g,'');
            // ��|��֮�䲻�ܼӿո񣬷���ᱨ��
    },
    // ajax
    ajax: function (option) {
        // 1. ���� xhr����
        var xhr = null;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
             xhr = ActiveXObject('Mircosoft.XMLHTTP');
        }

        // 2. ����xhr��Ҫ׼��������
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

        // 4. xhr�ص�����
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

        // 3. xhrִ������
        if(type == 'get'){
            xhr.send();
        }else if(type == 'post'){
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            xhr.send(option.data);
        }
    },
    // ���ڸ�ʽת��
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
        // ����boolean
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

    // �ַ���ƴ��
    formatString: function (str,data) {
        return str.replace(/@(\w+)/g, function (match,key) {
            return data[key];
        });
    }
};

// ���ʵ����
var $$ = new $$$();