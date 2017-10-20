/**
 * Created by codeMaker on 2017/1/30.
 */

var Cart = Class.extend({
    constructor:function () {
        // 属性：产品列表 结算总结 结算总数量
        this.products = [{},{}];
        this.totalPrice = 0;
        this.totalCount = 0;
    },
    bindBasic: function () {
        $('.cartsum').html(this.getTotalCount());
        $('.total_left').html(this.getTotalCount());
        $('.total_right').html(this.getTotalPrice());
    },
    bindProductsList: function () {
        var str = '';
        var self = this;
        for(var x = 0; x < this.products.length; x++){
            str += '<div class="cart_box">';
            str += '<div class="message">';
            str += '<div class="alert-close"> </div>';
            str += '<div class="list_img"><img src="'+self.products[x].image[0].small+'" class="img-responsive" alt=""/></div>';
            str += '<div class="list_desc"><h4><a href="#">'+self.products[x].name+'</a></h4>1 x<span class="actual">'+self.products[x].price+'</span></div>';
            str += '<div class="clearfix"></div>';
            str += '</div>';
            str += '</div>';
        }
        $('.shopping_cart').html(str);
    },
    getTotalPrice: function () {
        var sum = 0;
        var self = this;
        for(var x = 0; x < this.products.length; x++){
            sum += self.products[x].price;
        }
        return sum;
    },
    getTotalCount: function () {
        return this.products.length;
    }
});