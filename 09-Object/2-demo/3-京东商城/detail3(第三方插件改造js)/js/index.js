/**
 * Created by codeMaker on 2017/1/30.
 */
/*
 * jQuery��ں���(������ʽ)��
 $(document).ready(function(){});
 $(function(){});
 * */
$(document).ready(function () {
    // ����ʵ������----��Ʒ
    var p = new Product();
    p.name = 'ssssss';
    p.price = 23;
    p.image = [
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ];

    // ��Ԫ��
    p.bindBasic();
    p.bindImage();


    // ����ʵ������----���ﳵ
    var c = new Cart();
    c.products = [p,p];
    console.log(c.products);
    // ��Ԫ��
    c.bindBasic();
    c.bindProductsList();


    // ���ﳵ����
    $('#btnaddcart').on('click', function () {
        // ��Ҫ��ɵ�����
            // 1. ����һ����ǰ�Ķ���
            c.products.push(p);
            // 2. ���°��б�
            c.bindProductsList();
            // 3. ���°󶨻�����Ϣ���ܼۣ�������
            c.bindBasic();
            // 4. ҳ�����������
            /*$(window).scrollTop(0);*/ // ҳ���ͻ�䵽����
                // ��Ϊ����������
                $('html,body').animate({scrollTop:0},1000);
                // ��������htmlû��Ч������������body��Ч�������߶�����Ҳ��Ч��
    });
});