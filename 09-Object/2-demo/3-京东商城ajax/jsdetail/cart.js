/*���幺�ﳵ����*/
function Cart(data){
    this.products = data.products;
    this.images = {
        small:'images/s11.jpg',big:'images/s11.jpg'
    };

    this.sum = data.sum;
    this.allPrice = data.sumprice;

    console.log(this.products);
}
Cart.prototype={
    bindBasic:function(){
        //��
        $('.cartsum').html(this.getSum());
        $('#cartprice').html(this.allPrice);
    },
    //�󶨲�Ʒ�б�,ÿ�ε�������ﳵִ�еķ���
    bindList:function(){
        var str='';
        for(var i= 0,len=this.products.length;i<len;i++){
            str+='<div class="cart_box">';
            str+='<div class="message">';
            str+=' <div class="alert-close"> </div>';
            str+=' <div class="list_img"> <img src="'+this.images.small+'" class="img-responsive" alt=""/> </div>';
            str+=' <div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4><span class="actual">'+ this.products[i].price+'</span></div>';
            str+=' <div class="clearfix"></div>';
            str+='  <div class="clearfix"></div>';
            str+='  </div>';
            str+='   </div>'
        }
        $('.shopping_cart').html(str)

    },
    /*��ȡ��Ʒ����*/
    getSum:function(){
        this.sum = this.products.length;
        return this.sum;
    }
};