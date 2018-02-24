/**
 * Created by codeMaker on 2017/2/4.
 */
$$.ajax({
    url:'data/product.json',
    type:'get',
    success:function (data) {
        // �ı�����ת����json����
        var json = JSON.parse(data);
        console.log(json);
        var product = new Product(json);
        /*ʹ�ö����еķ�������*/
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
        // ʹ�ö����еķ�������
        cart.bindBasic();
        cart.bindList();
    },
    fail:function () {
        console.log('fail');
    }
});