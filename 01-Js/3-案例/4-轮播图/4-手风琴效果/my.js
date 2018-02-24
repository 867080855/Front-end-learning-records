/**
 * Created by geowang on 2016/12/30.
 */
//根据id获得对象
function $id(id){
    return document.getElementById(id);
}
//减速运动函数(多个属性)
function animate(obj,json){
    clearInterval(obj.timer);
    obj.timer = setInterval(slide,10);
    function slide(){
        var flag = true;
        //遍历json
        for(var attr in json){
            var curAttr = parseInt(getStyle(obj,attr));
            var step = (json[attr]-curAttr)/10;
            step = step>0 ?Math.ceil(step) :Math.floor(step);
            //添加opacity属性
            if(attr == "opacity"){  //判断json中是否有opacity属性
                if("opacity" in obj.style){     //判断是否支持opacity
                    obj.style.opacity = json[attr];
                }else{      //ie专用
                    obj.style.filter = "alpha(opacity = "+json[attr]*100+")";
                }
            }else if(attr == "zIndex"){     //添加zIndex属性
                obj.style.zIndex = json[attr];
            }else{
                obj.style[attr] = curAttr + step + "px";
            }
            if(json[attr] != curAttr){flag=false;}
        }
        if(flag){clearInterval(obj.timer);console.log("done");}
    }
}
//获取对象样式
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}