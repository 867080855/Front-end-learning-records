/**
 * Created by geowang on 2016/12/27.
 */
function $id(id){return document.getElementById(id);}
function show(obj){ obj.style.display = "block";}
function hide(obj){ obj.style.display = "";}
function scroll(){
    if(window.pageYOffset != null){
        return {    //ie9及其他浏览器
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }else if(document.compatMode == "CSS1Compat"){
        //声明了dtd格式的,css标准格式。谷歌特例，不支持。其他的只要声明了dtd的都支持。
        //检测是不是怪异模式的浏览器，即没有dtd声明的。
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    return {
        //剩下的肯定是怪异模式的
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }
}