//�����Ʒ����
function Product(data){
    /*��Ʒ����*/
    this.name = data.name;
    /*��Ʒ����*/
    this.description = data.description;
    /*��ͨ�۸�*/
    this.normalPrice = data.price;
    /*�Ź��۸�*/
    this.youhuijia = data.youhuijia;
    /*�Ѿ����������*/
    this.buySum = data.sum;
    /*�ֲ�ͼƬ�б�*/
    this.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]
}
Product.prototype={
    /*��ͨ����*/
    buy:function(){},
    /*��ͼƬ�б�*/
    bindDOMImage:function(){
        var str='';
        for(var i= 0,len=this.images.length;i<len;i++) {
            str+='<li>';
            str+='<img class="etalage_thumb_image" src="'+ this.images[i].small+'" class="img-responsive" />';
            str+='<img class="etalage_source_image" src="'+ this.images[i].small+'" class="img-responsive" />';
            str+='</li>';
        }
        $('#etalage').html(str);

        /*jquery���ʵ�ֵĻõ�Ƭ��Ч*/
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    /*����ϸ��Ϣ*/
    bindDOMDetail:function(){
        /*��Ԫ��*/
        $('#pname').html(this.name)
        $('#description').html(this.description)
        $('#price').html(this.normalPrice)
        $('#groupPrice').html(this.youhuijia)
        $('#buyCount').html(this.buySum)
    },
    /*���¼�*/
    bindEvents:function(){
        /*���¼�*/
        $('#btnaddcart').onclick=function(){

        };
        $('#btnbuy').onclick=function(){}
    },
    /*�Ź�*/
    groupBuy:function(){},
    /*��ӵ����ﳵ*/
    addCart:function(){

    }
};