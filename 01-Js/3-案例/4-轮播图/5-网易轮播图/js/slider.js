/**
 * Created by geowang on 2016/12/31.
 */
function $id(id){return document.getElementById(id);}
window.onload = function () {
    var w = $id("w");
    var slider = $id("slider");
    var slider_ctrl = $id("slider_ctrl");
    var slider_main = slider.children[0];
    var spans = slider_ctrl.children;

    //动态生成span
    var imgs = slider_main.children;
    for(var x = 0;x<imgs.length;x++){
        var span = document.createElement("span");
        span.innerHTML = imgs.length - x;
        span.className = "slider-ctrl-con";
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
    }
    slider_ctrl.children[1].className = "slider-ctrl-con current";


    //写左右箭头和底部事件的单击事件
    var boxWidth = slider.offsetWidth;
    //让第一张图片置于顶上，其他img往右移动
    for(var x =1;x<imgs.length;x++){
        imgs[x].style.left = boxWidth + "px";
    }
    var imgNow = 0;
    for(var k in spans){    //k在此处为索引值
        spans[k].onclick = function () {
            if(this.className == "slider-ctrl-pre"){
                animate(imgs[imgNow],{left:boxWidth});
                --imgNow<0 ?imgNow=5 :imgNow;
                imgs[imgNow].style.left = -boxWidth + "px";
                animate(imgs[imgNow],{left:0});
                setCurrent();
            }else if(this.className == "slider-ctrl-next"){
                autoPlay();
                setCurrent();
            }else{
                var spanIndex = this.innerHTML -1;
                if(imgNow < spanIndex){
                    animate(imgs[imgNow],{left:-boxWidth});
                    imgs[spanIndex].style.left = boxWidth + "px";
                    animate(imgs[spanIndex],{left:0});
                }else if(imgNow > spanIndex){
                    //当前图片索引号大于点击span所对应的索引号，从左往右滑动
                    animate(imgs[imgNow],{left:boxWidth});
                    imgs[spanIndex].style.left = -boxWidth + "px";
                    animate(imgs[spanIndex],{left:0});
                }
                //为什么这句话很重要？这句话相当于是每次点击下部的小盒子以后
                    //把被点击的小盒子的索引值赋值为当前图片的索引值。
                    //如果没有它的话，当前图片的索引值在点击小盒子时一直为0
                    //imgNow<spanIndex还好。可以在固定定位下盖住先前图片，
                        //但是当imgNow>spanIndex时，盒子的移动功能就会失效。
                imgNow = spanIndex;
                setCurrent();
            }
        }
    }


    //使span盒子与图片同步
    function setCurrent(){
        for(var x = 0;x<imgs.length;x++){
            spans[x+1].className = "slider-ctrl-con";
        }
        spans[imgNow+1].className = "slider-ctrl-con current";
    }


    //添加自动播放定时器
    var timer = null;
    timer = setInterval(autoPlay,2000);
    function autoPlay(){
        animate(imgs[imgNow],{left:-boxWidth});
        ++imgNow==6 ?imgNow=0 :imgNow;
        imgs[imgNow].style.left = boxWidth + "px";
        animate(imgs[imgNow],{left:0});
        setCurrent();
    }
    //鼠标移动控制定时器开关
    w.onmouseover = function () {
        clearInterval(timer);
    };
    w.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(autoPlay,2000);
    };
    //console.log(spans);

};




