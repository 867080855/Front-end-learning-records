/**
 * Created by codeMaker on 2017/1/30.
 */
/**
 * Created by codeMaker on 2017/1/30.
 */
function Product(){
    // 产品名称 价格 描述 图片
    this.name = 'xxx';
    this.price = 3334;
    this.desc = 'asdfasf';
    this.image = '';
}
// 原型方法
Product.prototype = {
    bindDom: function () {
        var str = '';
        str += '<dl>';
        str += '<dt><a href="javascript:;"><img src="'+this.image+'" width="384" height="225" /></a></dt>';
        str += '<dd>';
        str += '<span>';
        str += '<a href="javascript:;">';
        str += '<em>4.02折/</em>' + this.desc;
        str += '</a>';
        str += '</span>';
        str += '</dd>';
        str += '<dd class="price">';
        str += '<em>'+ this.price +'</em>';
        str += '<del>?52.20</del>';
        str += '<i>销量：0天2时19分6秒</i>';
        str += '</dd>';
        str += '</dl>';

        return str;
    }
};



window.onload = function () {
    // 定义对象数组
    var products = [];

    // 实例化对象
    var product1 = new Product();
    var product2 = new Product();
    var product3 = new Product();
    var product4 = new Product();
    var product5 = new Product();

    // 对象数组赋值
    products = [product1,product2,product3,product4,product5];

    // 给各个实例化对象添加属性
    product1.name = '兰蔻小黑瓶1';
    product1.price = 8888;
    product1.desc = '美白肌肤就在一瞬间';
    product1.image = 'img/1_04739600602743182_420.jpg';

    product2.name = '兰蔻小黑瓶2';
    product2.price = 8888;
    product2.desc = '美白肌肤就在一瞬间';
    product2.image = 'img/1_04739600602743182_420.jpg';


    product3.name = '兰蔻小黑瓶3';
    product3.price = 8888;
    product3.desc = '美白肌肤就在一瞬间';
    product3.image = 'img/1_04739600602743182_420.jpg';


    product4.name = '兰蔻小黑瓶4';
    product4.price = 8888;
    product4.desc = '美白肌肤就在一瞬间';
    product4.image = 'img/1_04739600602743182_420.jpg';


    product5.name = '兰蔻小黑瓶5';
    product5.price = 8888;
    product5.desc = '美白肌肤就在一瞬间';
    product5.image = 'img/1_04739600602743182_420.jpg';


    // 拿到产品对象
    var pro = document.getElementById('container');
    pro.innerHTML = '';

    for(var x = 0; x < products.length; x++){
        pro.innerHTML += products[x].bindDom();
    }

};