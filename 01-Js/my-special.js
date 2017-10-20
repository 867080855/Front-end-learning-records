/**
 * Created by geowang on 2016/12/27.
 */
function client(){
    //可以得到
    if(window.innerWidth != null){
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){
        return {
            width:documemt.documentElement.clientWidth,
            height:documemt.documentElement.clientHeight
        }
    }return {
        width:documemt.body.clientWidth,
        height:document.body.clientHeight
    }
}