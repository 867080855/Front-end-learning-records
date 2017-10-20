/**
 * @Author:codeMaker
 * @Date:2017/1/16
 */
$(function () {
    $(".list").on("mouseenter mouseleave",function(e) {
        var that = $(this);
        var w = $(this).width(); // 得到盒子宽度
        var h = $(this).height();// 得到盒子高度
        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        // 获取x值
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        // 获取y值
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
        if(e.type == 'mouseenter'){
            switch (direction){
                case 0:{
                    comeon('top');
                    break;
                }
                case 1:{
                    comeon('right');
                    break;
                }
                case 2:{
                    comeon('bottom');
                    break;
                }
                case 3:{
                    comeon('left');
                    break;
                }
            }
        }else{
            switch (direction){
                case 0:{
                    out('top');
                    break;
                }
                case 1:{
                    out('right');
                    break;
                }
                case 2:{
                    out('bottom');
                    break;
                }
                case 3:{
                    out('left');
                    break;
                }
            }
        }
        function comeon(str) {
            that.addClass("current");
            //that.children(".wrap-box").addClass(str);
            that.children(".wrap-box").removeClass().addClass(str).addClass('wrap-box');
        }
        function out(str){
            that.removeClass("current");
            that.children("div").removeClass().addClass(str).addClass('wrap-box');
        }
    });
});
