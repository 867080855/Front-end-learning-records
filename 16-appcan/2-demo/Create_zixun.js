/**
 * Created by lenovo on 2017/3/15.
 */
function Create_zixun(option){
    this.id = option.id;
    this.data = option.data;
    this.init();
}
Create_zixun.prototype = {
    init:function () {
        var str = this.create();
        this.insert(this.id,str);
        this.bind();
    },
    create:function () {
            var result = '';
            result += '<li class="ubb ub bc-border t-bla ub-ac lis" onclick="goZixun()">';
                // 图片
                result += '<div class="ub ub ub-ver umar-r">';
                    result += '<div class="lis-icon ub-img uc-a" style="background-image:url(news_content/css/myImg/busImg.png)"></div>';
                result += '</div>';
                // 详细信息
                result += '<ul class="ub-f1 ub ub-ver marg-l">';
                    // 第一行
                    result += '<li class="bc-text ub ub-ver ut-m line1">';
                        result += '<div class="ub ub-ac">';
                        result += '<div class="ub ub-ac" style="font-weight: 700;  ">职场寓言故事</div>';
                        result += '</div>';
                    result += '</li>';
                    // 第二行
                    result += '<li class="ub ub-ver ub-ae umar-r">';
                        result += '<div class="ulev-1 sc-text1 uinn3">122</div>';
                    result += '</li>';
                    // 第三行
                    result += '<li class="ulev-1 sc-text1 uinn3">2017-2-14</li>';
                result += '</ul>';
            result += '</li>';
            return result;
    },
    insert:function (id,str) {
        $(id).html(str);
    },
    bind:function () {

    }
};