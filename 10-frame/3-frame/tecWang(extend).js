/**
 * Created by codeMaker on 2017/2/7.
 **/

// 基础框架
var $ = function(){

};
$.prototype = {
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
    }
};
var $$ = new $();

// 要注意此处调用extend方法时，是在给$的实例对象$$添加方法，而不是给$添加
// 选择器框架
/*
* 1. $id $class $tag
* 2. $g $c
* 3. $all
* */
$$.extend($$,{
    // 选择器
    $id: function (id) {
        return document.getElementById(id);
    },
    $class: function (cname,id) {
        // 判断id是否存在
        if(id){
            /*有一点需要注意：
            *   只要id传进来的不是一个字符串，id就不需要被限制为id性质，
            *   可以是任意的dom对象，就比如层次选择器中的案例中的使用一样
            *   传进来的pipe[x]一般就是一个dom对象而不是一个id字符串。
            *
            *   而且，所谓的id对象也就是dom对象，就是一个引用类型而已，跟一个
            *   class对象，或者tag对象没有区别，脑袋不要太死板*/

            // 判断id的数据类型
            if(typeof id == 'string'){
                id = document.getElementById(id);
            }
            
            // 考虑兼容性
            if(id.getElementsByClassName){
                return id.getElementsByClassName(cname);
            }else{
                return getEle(cname,id);
            }
        } else {
            if(document.getElementsByClassName){
                return document.getElementsByClassName(cname);
            }else{
                return getEle(cname);
            }
        }

        function getEle(cname,id){
            // 获取所有节点
            var eles = [];
            if(id){
                eles = id.getElementsByTagName('*');
            }else {
                eles = document.getElementsByClassName('*');
            }

            // 筛选出制定cname的节点
            var arr = [];
            for(var x = 0, len = eles.length;x < len; x++){
                if(eles[x].className == cname)
                    arr.push(eles[x]);
            }
            return arr;
        }

    },
    $tag: function (tag,id) {
        // 缩小搜索范围(依靠id)
        // 完美法则--提前预防，想要使用一个属性，先要检测属性是否可以使用
            // 1. 检测是否存在
            // 2. 检测数据类型
        if(id) {
            if(typeof id == 'string'){
                id = $$.$id(id);
            }
            return id.getElementsByTagName(tag);
        } else {
            return document.getElementsByTagName(tag);
        }
    },

    // 多组选择器
    $g:function (str) {
        var result = [],
            arr = [],
            list = [];
        // 清除字符两边的空格并根据','号分割创建数组
        arr = $$.trim(str).split(',');
        for(var x = 0 ;x < arr.length; x++){
            var index = arr[x].charAt(0);
            var query;
            if(index == '.'){
                query = arr[x].slice(1);
                list = $$.$class(query);
                pushArr(list);
            }else if(index == '#'){
                query = arr[x].slice(1);
                // id必然是唯一的，所以此处不能赋值给list，直接用result去push比较好
                result.push($$.$id(query));
            }else{
                query = arr[x].slice(0);
                list = $$.$tag(query);
                pushArr(list);
            }
        }
        return result;
        function pushArr(arr){
            for(var k = 0 ;k < arr.length; k++){
                result.push(arr[k]);
            }
        }
    },
    // 层次选择器
    $c:function (str) {
        /*
            arr:用来放置分割后的字符串
            pipe:管道数组。用来存储本次的查询终点作为下一次的查询起点
        */
        var arr = [],
            pipe = [];
        arr = $$.trim(str).split(' ');

        // 循环分割后的字符串，并且利用管道理论来实现类似于迭代的效果
        for(var x = 0, len = arr.length; x < len; x++){
            var index = arr[x].charAt(0);   // 获取数组的各个元素的首字母，用于判断是id,class还是tag
            var query;  // 查询字符串
            var length; // 存放管道数组的长度

            if(index == '#'){
                query = arr[x].slice(1);
                pipe = [$$.$id(query)];
            }else if(index == '.'){
                query = arr[x].slice(1);
                length = pipe.length;
                if(length > 0){
                    for(var k = 0; k < length ; k++){
                        pipe = $$.$class(query,pipe[k]);
                    }
                }else {
                    pipe = $$.$class(query);
                }
            }else {
                query = arr[x].slice(0);
                /* 为什么要单独把length属性提出来？
                    因为当每一次循环完成后，因为循环内部会对pipe进行赋值，
                所以在循环头部的pipe.length的值会反复的变化。导致循环的次数
                发生变化，造成错误
                */
                length = pipe.length;
                // 为什么要判断？
                    // 为了判断是否标签名写在字符串的最左边
                    // 如：'i span #container',如果不判断，因为pipe为0，不会执行循环内的语句
                if(length > 0){
                    for(var i = 0; i < length ; i++){
                        pipe = $$.$tag(query,pipe[i]);
                    }
                }else {
                    pipe = $$.$tag(query);
                }

            }
        }
        return pipe;
    },
    // 多组 + 层次
    $:function (str) {
        var arr = [],
            result = [];
        arr = $$.trim(str).split(',');
        console.log(arr);
        for(var x = 0; x < arr.length; x++){
            // 每一个arr[x]就是一个层次选择字符串
            pushArr($$.$c(arr[x]),result);
        }
        return result;

        function pushArr(arr,list){
            for(var k = 0 ;k < arr.length; k++){
                list.push(arr[k]);
            }
        }
    },
    // h5选择器
    $all:function (str, context) {
        context = context || document;
        return context.querySelectorAll(str);
    }
});

// 数据类型框架
/*
 * 1. isNumber
 * 2. isString
 * 3. isObj
 * 4. isNull
 * 5. isBoolean
 * 6. isUndefined
 * 7. isArray*/
$$.extend($$,{
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
});

// 字符串框架
/*
 * 1. ltrim rtrim trim
 * 2. formatString artTemplate
 * 3. queryString */
$$.extend($$,{
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
    }
});

// 事件框架
/*
* 1. getEvent getTarget
* 2. on delegate un
* 3. click mouseenter mouseleave hover
* 4. stopPropagation preventDefault
* */
$$.extend($$,{
    // 获取事件对象
    getEvent:function (e) {
        return e? e: window.event;
    },
    // 获取目标对象
    getTarget:function (e) {
        var event = $$.getEvent(e);
        // event.target如果存在则返回一个对象，
        // 否则会返回null，即造成短路，返回后边的内容
        return event.target || event.srcElement;
    },
    // 事件绑定
    on:function (id, type, fn) {
        // 判断传进来的id是一个字符串还是一个dom对象
        var dom = $$.isString(id)? $$.$all(id): id;
        if(dom.addEventListener)
            dom.addEventListener(type,fn);
        else if(dom.attachEvent)
        // 为什么要写成'on'+type?
        // 因为ie使用onclick的形式绑定事件，而传进来的type不带on
            dom.attachEvent('on'+type,fn)
    },
    // 事件移除
    un:function (id,type,fn) {
        var dom = $$.isString(id)? document.getElementById(id): id;
        if(dom.removeEventListener)
            dom.removeEventListener(type,fn);
        else if(dom.detachEvent)
            dom.detachEvent(type,fn);
    },
    // 事件委托
    delegate:function (pid, eventType, selector, fn) {
        //参数处理
        var parent = $$.$id(pid);
        function handle(e){
            var target = $$.GetTarget(e);
            if(target.nodeName.toLowerCase() === selector || target.id === selector || target.className.indexOf(selector) != -1){
                // 在事件冒泡的时候，回以此遍历每个子孙后代，如果找到对应的元素，则执行如下函数
                // 为什么使用call，因为call可以改变this指向
                // 大家还记得，函数中的this默认指向window，而我们希望指向当前dom元素本身
                fn.call(target);
            }
        }
        //当我们给父亲元素绑定一个事件，他的执行顺序：先捕获到目标元素，然后事件再冒泡
        //这里是是给元素对象绑定一个事件
        parent[eventType] = handle;
    },
    
    // 具体事件
    click:function (id, fn) {
        $$.on(id,'click',fn);
    },
    mouseenter:function (id, fn) {
        $$.on(id,'mouseover',fn);
    },
    mouseleave:function (id, fn) {
        $$.on(id,'mouseout',fn);
    },
    hover:function (id,fnIn,fnOut) {
        if(fnIn)
            $$.on(id,'mouseenter',fnIn);
        if(fnOut)
            $$.on(id,'mouseout',fnOut);
    },

    // 阻止默认行为
    preventDefault:function (e) {
        var event = $$.getEvent(e);
        if(event.preventDefault)
            event.preventDefault();
        else
            event.returnValue = false;
    },
    // 阻止冒泡
    stopPropagation:function (e) {
        var event = $$.getEvent(e);
        if(event.stopPropagation)
            event.stopPropagation();
        else
            event.cancelBubble = true;
    }
});

// css框架----为了解决浏览器的不兼容性
/*
* 1. css
* 2. height width
* 3. scrollTop scrollLeft
* 4. show hide
* */
$$.extend($$,{
    // css样式
    css:function(context,key,value) {
        // 判断context是一个字符串还是一个对象
        var nodes = $$.isString(context)? $$.$all(context): context;
        if(nodes.length){
            // 如果nodes是一个数组..
            if (value) {
                setMultipleStyle(nodes,key,value);
            } else {
                /*
                    这个地方比较有趣，getComputedStyle中有return方法，并不代表
                    此处的if语句就不需要return了，此处需要再return一次才能被外界
                    接收到需要的值。
                */
                return getMultipleStyle(nodes,key);
            }
        }else{
            // 如果nodes是单个元素
            if(value){
                setSingleStyle(nodes,key,value);
            }else{
                return getSingleStyle(nodes,key);
            }
        }
        // 设置样式
        function setSingleStyle(node,key,value){
            node.style[key] = value;
        }
        function setMultipleStyle(nodes,key,value){
            // 如果有value参数，执行设置样式的操作
            for(var x = 0; x < nodes.length; x++){
                nodes[x].style[key] = value;
            }
        }
        // 获取样式
        function getSingleStyle(node,key){
            // 处理兼容性
            if(node.currentStyle){
                return node.currentStyle[key];
            }else{
                return window.getComputedStyle(node)[key];
            }
        }
        function getMultipleStyle(nodes,key){
            // 如果没有value参数则执行获取样式的操作，此处的if...else为了处理兼容性
            // 仅返回数组的第一个元素的当前样式
            if(nodes[0].currentStyle){
                return nodes[0].currentStyle[key];
            }else{
                return window.getComputedStyle(nodes[0])[key];
            }
        }

    },
    // 高度与宽度
    /*
    * 高度与宽度的值有三种：
    *   1. 元素的宽高
    *       - 不考虑滚动条(实际可视区域)----clientWidth,所有浏览器都兼容
    *       - 考虑滚动条----scrollWidth
    *   2. 窗口的宽高
    *       - 不考虑滚动条(实际可视区域)
    *           - 火狐，谷歌，欧朋----window.innerWidth
    *                           ----document.documentElement.clientWidth
    *           - IE6以上----document.documentElement.clientWidth
    *           - IE6以下----document.body.clientWidth
    *
    *           因此统一采用document.documentElement.clientWidth来获取宽高
    *
    *       - 考虑滚动条----document.body.scrollWidth
    *   3. 屏幕的宽高
    *       - window.screen.width
    *   */
    // 元素可视区域宽高
    width:function (id){
        return $$.$id(id).clientWidth
    },
    height:function (id){
        return $$.$id(id).clientHeight
    },
    // 元素加滚动条宽高
    scrollWidth:function (id){
        return $$.$id(id).scrollWidth
    },
    scrollHeight:function (id){
        return $$.$id(id).scrollHeight
    },
    // 元素滚动的时候 如果出现滚动条 相对于左上角的偏移量
    scrollTop:function (id){
        return $$.$id(id).scrollTop
    },
    scrollLeft:function (id){
        return $$.$id(id).scrollLeft
    },



    // 文档视口的宽高
    docWidth:function (){
        return document.documentElement.clientWidth
    },
    docHeight:function (){
        return document.documentElement.clientHeight
    },
    // 文档滚动区域的整体的高和宽
    docScrollHeight:function () {
        return document.body.scrollHeight
    },
    docScrollWidth:function () {
        return document.body.scrollWidth
    },
    // 滚动条相对于其顶部的偏移
    docScrollTop:function () {
        return  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    },
    //获取滚动条相对于其左边的偏移
    docScrollLeft:function () {
        return  document.body.scrollLeft || (document.documentElement && document.documentElement.scrollLeft);
    },



    // 屏幕的宽高
    screenHeight:function (){
        return  window.screen.height
    },
    screenWidth:function (){
        return  window.screen.width
    },

    // show hide 元素的显示与隐藏
    show:function (context) {
        var nodes = $$.isString(context)? $$.$all(context): context;
        for(var x = 0; x < nodes.length; x++){
            $$.css(nodes[x],'display','block');
        }
    },
    hide:function (context) {
        var nodes = $$.isString(context)? $$.$all(context): context;
        for(var x = 0; x < nodes.length; x++){
            $$.css(nodes[x],'display','none');
            console.log('donw');
        }
    }

});

// DOM操作
/*
* 1. html
* 2. attr
* 3. addClass removeClass
* 4. hasClass getClass
* */
$$.extend($$,{
    // attr设置属性
    // $$.$id(id).attr[key] = value // 错误用法
    // $$.$id(id)[key] = value;
    attr:function (context, key, value) {
        var nodes = $$.createNodes(context);
        if(value){
            // 设值模式
            for(var x = 0; x < nodes.length; x++){
                nodes[x].setAttribute(key,value);
            }
        }else{
            // 获取模式：返回第一个属性值
            return nodes[0].getAttribute(key);
        }
    },
    // 设置innerHTML
    html:function (context, value) {
        var nodes = $$.createNodes(context);
        if(value){
            // 设值模式
            for(var x = 0; x < nodes.length; x++){
                nodes[x].innerHTML = value;
            }
        }else{
            // 获取模式
            return nodes[0].innerHTML;
        }
    },
    // 添加类名
    addClass:function (context,className) {
        var nodes = $$.createNodes(context);
        for(var x = 0; x < nodes.length; x++){
            // 给单个元素添加类名
            addSingleClassName(nodes[x]);
        }

        // 给单个元素添加类名
        function addSingleClassName(node){
            node.className += ' ' + className;
        }
    },
    // 移除类名
    removeClass:function (context,className) {
        var nodes = $$.createNodes(context);
        for(var x = 0; x < nodes.length; x++){
            removeSingleClassName2(nodes[x]);
        }

        // 移除单个元素的指定类名(自己写的)
        function removeSingleClassName(node){
            var names = node.className.split(' ');
            console.log(names);
            var tarName = '';
            for(var x = 0; x < names.length; x++){
                if(names[x] == className ){
                    names[x] = '';
                }
                tarName += ' ' + names[x];
            }
            node.className = tarName;
        }
        // 移除单个类名(老师写的)(值得学习)
        function removeSingleClassName2(node){
            node.className = node.className.replace(className,'');
        }
    },
    // 判断是否拥有类名
    hasClass:function(context,name){
        var doms = $$.$all(context);
        var flag = true;
        for(var i= 0,len=doms.length;i<len;i++){
            flag = flag && check(doms[i],name);
        }

        return flag;
        //判定单个元素
        function check(element,name){
            return -1<(" "+element.className+" ").indexOf(" "+name+" ");
        }
    },
    // 获取指定元素的类名
    getClass:function (id){
        var doms = $$.$all(id);
        return $$.trim(doms[0].className).split(" ");
    }
});

// 日期框架
/*
* 1. dateFormat
* */
$$.extend($$,{
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
    }
});

// ajax框架
/*
* 1. ajax
* */
$$.extend($$,{
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
    }
});

// 缓存框架
$$.extend($$,{

});

// 附加函数框架
/*
* 1. createNodes 检验传递的参数是字符串还是节点，是字符串的话自动转换成节点
* */
$$.extend($$,{
    // 检验context的数据类型：
        // String: 调用$all选中节点
        // Object: 直接返回
    createNodes:function (context) {
        return $$.isString(context)? $$.$all(context): context;
    }
});

// 动画框架
function Animate(){
    // 对象队列
    this.queue = [];

    // 默认值
    this.config = {
        timer:null,
        interval:20
    };
}
Animate.prototype = {
    // 初始化函数。
    start:function (ele,option,duration) {
        // 队列中添加新的需要的数据
        this.queue.push(this.adapter(ele,option,duration));

        // 动起来
        this.moveMany(this.queue);

        console.log(this);  // 此处的this，指的是animate对象，所以在下边的多个地方，可以使用this调用其方法
    },
    // 适配器，负责转换原始数据为可以使用的数据,返回一个json，其中包含了对象需要的一切属性
    // 包括：name, time, styles...
    adapter:function (ele,option,duration) {
        var json = {};
        json.name = ele;

        json.beginTime = +new Date();
        json.nowTime = +new Date();
        json.totalTime = duration;
        json.tween = 0;

        $$.extend(json,this.config);

        json.styles = getStyles(ele,option);
        return json;

        // 获取每个属性的状态：
        // 1. key 2. value 3. originalValue
        function getStyles(ele,option){
            var arr = [];
            for(var key in option){
                var styles = {};

                styles['key'] = key;
                styles['totalChange'] = option[key];
                styles['originalValue'] = parseInt($$.css(ele,key));
                arr.push(styles);
            }
            return arr;
        }
    },
    // 核心函数，负责控制一个元素的运动
    move:function (obj) {
        var self = this;
        obj.timer = setInterval(function () {
            obj.nowTime = +new Date();
            // tween属于对象的一个共有属性 ，不应该放在style里边
            obj.tween = getTween(obj.beginTime,obj.nowTime,obj.totalTime);

            if(obj.tween >= 1){
                self.stop(obj);
            }else{
                setProperty(obj);
            }
        },obj.interval);

        // 获取从开始到现在的总的时间进程
        function getTween(beginTime,now,totalTime){
            return ( now - beginTime ) / totalTime;
        }

        // 给目标设置属性
        function setSingleProperty(ele,key,value){
            /*
             * 单属性运动公式：
             *   起始距离 + 动画时间进程 * 总距离
             *   value = start + tween * totalLength
             * */
            ele.style[key] = value;
        }
        function setProperty(obj){
            var ele = obj.name;
            var option = obj.styles;
            for(var x = 0; x< option.length; x++){
                for(var k in option[x]){
                    var key = option[x].key;
                    var value = option[x].originalValue + option[x].totalChange * obj.tween + 'px';
                    setSingleProperty(ele,key,value);
                }
            }
        }
    },
    // 控制多个元素的运动
    moveMany:function (queue) {
        for(var x = 0; x < queue.length; x++){
            this.move(queue[x]);
        }
    },
    // 停止定时器
    stop:function (obj) {
        clearInterval(obj.timer);
    },
    // 内存回收
    clean:function () {

    },
    // 设置默认值
    setConfig:function (json) {
        $$.extend(this.config,json);
    }
};

$$.animate = new Animate();

