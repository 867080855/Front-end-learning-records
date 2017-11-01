Created By tecWang
#Web Storage
    1.Session Storage
        方法示例：
        1.1.设置内存值
            if(window.sessionStorage){
                sessionStorage.setItem("key1",txt_value.value);
                //sessionStorage["key1"] = txt_value.value;
            }
        1.2.获取内存值
            if(window.sessionStorage){
                txt_value.value = sessionStorage.getItem("key1");
                //txt_value.value = sessionStorage["key1"];
            }
    2.Local Storage
        使用方法同上。
#两者的区别
        Session Storage，会话缓存，临时缓存，在网页关闭后救会清空。
        Local Storage，本地缓存，永久缓存，在网页关闭后依旧会保存下来，可以用
    来做离线网页。
##Storage.getItem("key")和Storage["key"]
        前者是h5专门为网页存储所写的方法。推荐使用。
        取值的时候，若不存在某键值，前者返回为空，后者返回为undefined。