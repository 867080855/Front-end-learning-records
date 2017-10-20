/**
 * Created by geowang on 2016/12/30.
 */
//运动框架
//减速运动函数(多个属性)
function animate(obj,json,fn) {  // 给谁    json
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;  // 用来判断是否停止定时器   一定写到遍历的外面
        for(var attr in json){   // attr  属性     json[attr]  值
            var current = 0;
            if(attr == "opacity") {
                current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
            }else {
                current = parseInt(getStyle(obj,attr));
            }
            var step = ( json[attr] - current) / 10;  // 步长  用目标位置 - 现在的位置 / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //判断透明度
            if(attr == "opacity")  // 判断用户有没有输入 opacity
            {
                if("opacity" in obj.style)  // 判断 我们浏览器是否支持opacity
                {
                    obj.style.opacity = (current + step) /100;
                }
                else
                {
                    obj.style.filter = "alpha(opacity = "+(current + step)* 10+")";
                }
            }
            else if(attr == "zIndex")
            {
                obj.style.zIndex = json[attr];
            }
            else
            {
                obj.style[attr] = current  + step + "px" ;
            }

            if(current != json[attr])  // 只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
            {
                flag =  false;
            }
        }
        if(flag)  // 用于判断定时器的条件
        {clearInterval(obj.timer);if(fn) {fn();}}
    },10)
}
//获取对象样式
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];     //标准浏览器
    }else{
        return obj.currentStyle[attr];      //ie浏览器
    }
}