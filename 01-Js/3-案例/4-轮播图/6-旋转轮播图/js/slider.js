/**
 * Created by geowang on 2016/12/31.
 */
function $id(id){return document.getElementById(id);}
window.onload = function () {
    var json = [{width:800,height:500,opacity:100,top:300,left:200,zIndex:5},
        {width:550,height:300,opacity:80,top:140,left:630,zIndex:3},
        {width:400,height:300,opacity:60,top:20,left:580,zIndex:2},
        {width:400,height:300,opacity:20,top:20,left:205,zIndex:0},
        {width:550,height:300,opacity:80,top:140,left:20,zIndex:3}];
    var w = $id("w");
    var slider_main= $id("slider_main");
    var imgs = slider_main.children;
    var arrows = $id("arrow").children;
    change();   //提前调用一次函数保证初始化布局。

    var ctrlStop = true;    //利用回调函数实现函数节流
    //arrow单击事件
    for(var k in arrows){
        arrows[k].onclick = function () {
            if(this.className == "slider-arrow-next"){
                if(ctrlStop) {
                    change(true);
                    ctrlStop = false;
                }
            }else{
                if(ctrlStop) {
                    change(false);
                    ctrlStop = false;
                }
            }
        }
    }
    //利用交换json来实现动画
    function change(flag){
        if(flag){
            //点击next,json最后一个属性变到第一个属性的位置。
            json.unshift(json.pop());
        }else{
            json.push(json.shift());
        }
        //json数据实体化为css
        for(var x = 0;x<imgs.length;x++){
            animate(imgs[x],{
                width:json[x].width,
                height:json[x].height,
                opacity:json[x].opacity,
                top:json[x].top,
                left:json[x].left,
                zIndex:json[x].zIndex
            }, function () {
                ctrlStop = true;
            })
        }
    }
};
