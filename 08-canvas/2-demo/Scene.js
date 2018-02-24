/**
 * Created by codeMaker on 2017/1/26.
 */
function StageScene(option){
    this.stage = option.stage || [new Konva.Stage()];

    this.init = option.init || StageScene.voidFn;

    this.pre = option.pre || StageScene.voidFn;

    this.post = option.post || StageScene.voidFn;

    this.layers = option.layers || [new Konva.Layer()];

    this.name = option.name || '';

    this.init();
}
StageScene.prototype = {
    constructor:StageScene,
    voidFn:function(){},
    CurrentScene:null,
    play: function () {
        var _this = this;
        // doPre函数的作用其实就是执行入场动画，跟出场动画没有半毛钱关系，而且恒定为执行调用者的入场动画
        // 出场动画全部在下边的if判断里边
            // 如果是第一个场景只执行入场动画不执行出场动画
            // 如果不是第一个场景执行当前的场景的出场动画和调用者的入场动画
        var doPre = function(){

            console.log(_this);

            //_this.layers.forEach(function (val) {
            //// 注意这个forEach方法，forEach是用来遍历数组的，如果传进来的层不是数组会报错。
            //    _this.stage.add(val);
            //    console.log(val);   // val在这里就是一个层
            //});

            StageScene.CurrentScene = _this;

            // _this.pre(),即调用本函数的入场动画
            _this.pre();
        };
        if( StageScene.CurrentScene ){
        // 如果当前场景是第一个场景，直接执行入场动画，
            // 否则执行当前场景的出场动画，并传出doPre函数(doPre函数负责)
            StageScene.CurrentScene.post(doPre);
        }else{
            doPre();
        }
    }
};