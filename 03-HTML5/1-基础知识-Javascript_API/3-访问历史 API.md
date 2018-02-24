#访问历史
    起因：浏览器的js操作是不会被浏览器记录的。故而需要想办法让某些事件被出
    发并且反映出来。
##方法：
    1.window.history.go(url);
        //url不写表示为刷新，否则为跳转
    2.window.history.forward();
        //前进
    3.window.history.back();
        //后退
    4.window.history.pushState();
        //给url添加参数。
        参见五环之歌、访问历史、pushState-demo.html
        
##知识点
    1.当我们在伪造的访问历史中前进或后退时，可以执行一个事件(popstate)。
        //可以通过添加监听是前进后退时出发一个方法达到网页同步
        var con = document.querySelector("#content");
        window.addEventListener("popstate", function (e) {
            con.innerHTML = data[e.state];
        });