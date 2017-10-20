/**
 * Created by lenovo on 2017/3/11.
 */
// 由于appcan是基于zepto开发的，所以此处也会引入zepto文件，但是appcan中不需要，自带。。。
// 用于首页list的引入
function CreateList_index (option){
    this.id = option.id || 'work_detail';
    this.bg = option.bg || '#fff';
    this.data = option.data ;
    this.init();
}
CreateList_index.prototype = {
    init:function () {
        // 处理id
        var id = this.birthId(this.id);
        // 创建并插入预制组件
        this.insert(id,this.create(this.data));

        // 执行css
        this.css(id);
    },
    birthId:function (id) {
         var query = '#' + id;
         return query;
    },
    create:function (data) {
        /*定义组件字符串*/
        var result = '';
        // 立即执行函数，只是为了可以点击折叠按钮而已，没有实际功能。里边放置的是result(职位详细信息字符串)
        (function(data){
            console.log('done');

            result += '<div class="ub c-gra ubb b-bla umh5 uinn-my" style="border-top:none;">';
            // 图片
            result += '<div class="ub-f3 ub">';
            result += '<div id="" class="ub-f1 ub uinn3 uc-a" style="padding:0.4em;">';
            result += '<div class="ub-img1 ub ub-f1 uc-a" style="background-image: url(' + 'http://www.zhizhaojob.cn/data/upload/images/1701/17/587d87e18e13a.jpg' + ');">/</div>';
            result += '</div>';
            result += '</div>';

            // 详细信息(循环后小标签会出现问题，失去间距)
            result += '<div class="ub-f4 ">';
            result += '<div class="b-gra c-wh">';
            // 第一行
            result += '<div ontouchstart="zy_touch('+'btn-act'+')" class="ub  b-gra t-bla ub-ac  umh7">';
            result += '<div class="ub-f1 ut-s" style="font-weight:700;">海信集团</div>';
            result += '</div>';
            // 第二行
            result += '<div ontouchstart="zy_touch('+'btn-act'+')" class="ub b-gra t-bla ub-ac  umh7" style="position: relative;">';
            result += '<div class="ub-f1 ut-s">操作工</div>';
            result += '<div class="tx-r t-blu" style="color:#ff7113;font-size:1.5em;position:absolute;right:0;top:0;">Old Phone</div>';
            result += '</div>';
            // 第三行
            result += '<div ontouchstart="zy_touch('+'btn-act'+')" class="uc-b ub t-bla ub-ac  umh7" style="position:relative;">';
                result += '<div class="ub-f1 ut-s">';
                    result += '<span id="" class="umar-r" style="display: inline-block;border:1px solid #5cb7e6;color:#5cb7e6;font-weight: 500;">恒温车间</span>';
                    result += '<span id="" class="umar-r" style="display: inline-block;border:1px solid #5cb7e6;color:#5cb7e6;font-weight: 500;">五险</span>';
                    result += '<span id="" class="umar-r" style="display: inline-block;border:1px solid #5cb7e6;color:#5cb7e6;font-weight: 500;">有福利</span>';
                result += '</div>';
                    result += '<div class="tx-r t-blu ulev-1 umh7" style="position: absolute;right:0;bottom:0;">青岛市/黄岛区</div>';
            result += '</div>';




            result += '</div>';
            result += '</div>';
            result += '</div>';
        })(data);
        return result;
    },
    insert:function (id,result) {
        $(id).append(result);
    },
    css:function (id) {
        if(this.bg){
            $(id).css({
                background : this.bg
            });
        }
    }
};