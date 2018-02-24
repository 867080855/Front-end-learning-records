/**
 * Created by codeMaker on 2017/2/4.
 */
$$.ajax({
    url:'data/product.json',
    type:'get',
    success:function (data) {
        // 文本数据转换成json对象
        var json = JSON.parse(data);
        console.log(json);
        var product = new Product(json);
        /*使用对象中的方法属性*/
        product.bindDOMDetail();
        product.bindDOMImage();
    },
    fail:function (data) {
        console.log('fail');
    }
});

$$.ajax({
    url:'data/cart.json',
    type:'get',
    success:function (data) {
        var json = JSON.parse(data);
        console.log(json);
        var cart = new Cart(json);
        // 使用对象中的方法属性
        cart.bindBasic();
        cart.bindList();
    },
    fail:function () {
        console.log('fail');
    }
});