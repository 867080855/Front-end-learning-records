/**
 * Created by lenovo on 2017/3/15.
 */
function Create_title(option){
    this.id = option.id;
    this.data = option.data;
    this.init();
}
Create_title.prototype = {
    init:function () {
        var str = this.create();
        this.insert(this.id,str);
        this.bind();
    },
    create:function () {

        var result = '';
        result += '<div class="umh-circle ub ub-f1 tx-c" >';
            result += '<div class="tx-c ub ub-ver" style="margin:0 auto;">';
                result += '<div class="ub-img ub-f1 border-circle ub-pc" style="background-image: url(http://www.zhizhaojob.cn/Application/Mobile/View/default/public/images/08.png);background-repeat: no-repeat"></div>';
                result += '<div id="" class="tx-c">行业发展</div>';
            result += '</div>';
        result += '</div>';

        return result;
    },
    insert:function (id,str) {
        $(id).html(str);
    },
    bind:function () {

    }
};