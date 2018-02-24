/**
 * Created by codeMaker on 2017/1/30.
 */
/*
 * jQuery入口函数(两种样式)：
 $(document).ready(function(){});
 $(function(){});
 * */
$(document).ready(function () {
    // 创建实例对象----产品
    var p = new Product();
    p.name = 'ssssss';
    p.price = 23;
    p.image = [
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ];

    // 绑定元素
    p.bindBasic();
    p.bindImage();


    // 创建实例对象----购物车
    var c = new Cart();
    c.products = [p,p];
    console.log(c.products);
    // 绑定元素
    c.bindBasic();
    c.bindProductsList();


    // 购物车交互
    $('#btnaddcart').on('click', function () {
        // 需要完成的任务：
            // 1. 创建一个当前的对象
            c.products.push(p);
            // 2. 重新绑定列表
            c.bindProductsList();
            // 3. 重新绑定基本信息：总价，总数量
            c.bindBasic();
            // 4. 页面滚动到顶部
            /*$(window).scrollTop(0);*/ // 页面会突变到顶部
                // 改为缓动到顶部
                $('html,body').animate({scrollTop:0},1000);
                // 单纯设置html没有效果，单纯设置body有效果，两者都设置也有效果
    });
});