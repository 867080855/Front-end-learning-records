#日期对象(Date)
##声明
    var date = new Date();
        //也可以在new的日期对象内加入时间得到指定时间。
##使用
    1.得到毫秒数(ms)(32的系统可以用毫秒数表达68年.)：
        //获得的是从1970年1月1日到现在的毫秒数
        1.方法1。( 提倡使用。但是需要创建对象。)
            var date = new Date();
                date.getTime();
                date.valueOf();
                getMilliseconds();
        2.方法2。(可直接使用，不需要创建对象。)
            console.log(Date().now())
            console.log(+new Date())
    2.获取时间单元(年,月,日,时,分,秒)
        getDate();  //获取日[1-31]
        getDay();   //获取星期[0-6]
        getMonth(); //获取月份[0-11]
        getFullYear();  //获取完整年份
        getHours(); //获取小时[0-23]
        getMinutes():   //获取分钟[0-59]
    3.获取此时本地时间的两个方法
        1.toLocaleTimeString();
            把本地时间转换为字符串
        2.toLocaleDateString();
            把本地日期转换为字符串
        注意：Locale不是Local。不要拼写错误。
            