/**
 *
 * Created by codeMaker on 2017/1/26.
 */
// 创建总舞台，用于放置各个场景及切换
var stage = new Konva.Stage({
    container:container,
    width:window.innerWidth,
    height:window.innerHeight
});

var cenX = stage.width()/2;
var cenY = stage.height()/2;

var scenes = [HTML5Scene,HistogramChartScene];

function HTML5Scene(){
// 创建一个方法的时候，先定义好之后要用的变量，再开始写方法。

    // 创建层
    var layer = new Konva.Layer();

    // 创建形状
    var rect = new Konva.Rect({
        x:-100,
        y:-100,
        width:100,
        height:100,
        fill:'red',
        opacity:0
    });
    return new StageScene({
        stage: stage,
        layers: [layer],
        name: 'HTML5',
        init: function () {
            stage.add(layer);
            layer.add(rect);
            layer.draw();
            //console.log(rect);
        },
        // 定义入场动画
        pre: function () {
            rect.to({
                x:cenX - rect.width(),
                y:cenY - rect.height(),
                opacity:0.7,
                scaleX:2,
                scaleY:2,
                duration:3
            });
        },
        // 定义出场动画
        // 出场动画什么时候执行？
        // 出场动画的执行是需要在play函数内进行判断的。只有确定不是第一场景时才会去执行
        post: function (doPre) {
            var self = this;
            rect.to({
                x:stage.width(),
                y:stage.height(),
                scaleX:1,
                scaleY:1,
                opacity:0,
                onFinish: function () {
                    self.layers.forEach(function(item) {
                        item.destroy();//把所有层销毁
                    });
                    doPre();
                }
            });
        }
    });
}
function HistogramChartScene(){
    var data = [
        { name: '前端', value: '.8', color: 'green'},
        { name: 'PHP', value: '.3', color: 'blue'},
        { name: 'Java', value: '.7', color: 'red'},
        { name: 'UI', value: '.9', color: 'orange'},
        { name: 'IOS', value: '.4', color: 'purple'},
        { name: 'Android', value: '.9', color: 'pink'}
    ];


    var layer1 = new Konva.Layer();

    var x0 = 1/8 * window.innerWidth;
    var y0 = 3/4 * window.innerHeight;
    var width = 3/4 * window.innerWidth;
    var height = 3/5 * window.innerHeight;

    var histogramChart = new HistogramChart({
        x:x0,
        y:y0,
        w:width,
        h:height,
        data:data,
        opacity:0
    });
    histogramChart.addToGroupOrLayer(layer1);

    return new StageScene({
        stage:stage,
        name:'HistogramChart',
        layers:[layer1],
        init: function () {
            console.log(this);
            stage.add(layer1);
            layer1.draw();
        },
        pre: function () {
            // histogramChart.to is not a function?
                // 因为histogramChart是一个对象不是一个canvas对象。
                // 这个地方应该想办法获得shape属性
            //for(var x = 1; x < histogramChart.totalGroup.children.length; x++){
            //    for( var i = 0;i < histogramChart.totalGroup.children[x].children.length;i++){
            //        histogramChart.totalGroup.children[x].children[i].to({
            //            opacity:1
            //        });
            //    }
            //}
            stage.find('.h').each(function (item) {
                item.to({
                    opacity:1,
                    duration:2
                });
            });
        },
        post: function (doPre) {
            var self = this;
            stage.find('.h').each(function (item) {
                item.to({
                    opacity:0,
                    duration:2,
                    onFinish: function () {
                        self.layers.forEach(function(item) {
                            item.destroy();//把所有层销毁
                        });
                        doPre();
                    }
                });
            });

        }
    })
}


var sceneIndex = 0;
scenes[sceneIndex]().play();

function changeScene(){
    var startX = 0,
        endX = 0;
    stage.on('contentMousedown contentTouchstart', function (e) {
        if(e.type == 'contentMousedown'){
            startX = e.evt.screenX;
        }else if(e.type == 'contentTouchstart'){
            startX = e.evt.touches[0].screenX;
        }
        //console.log(startX);
    });
    stage.on('contentMousemove contentTouchmove', function (e) {
        if(e.type == 'contentMousemove'){
            endX = e.evt.screenX;
        }else if(e.type == 'contentTouchmove'){
            endX = e.evt.touches[0].screenX;
        }
        //console.log(endX);
    });
    stage.on('contentMouseup contentTouchend', function () {
        if(startX < endX){
            sceneIndex = sceneIndex <= 0? 0: sceneIndex- 1;
            scenes[sceneIndex]().play();
        }else{
            sceneIndex = sceneIndex >= scenes.length-1? sceneIndex: sceneIndex +1;
            console.log(sceneIndex);
            scenes[sceneIndex]().play();
        }
    });
}
changeScene();


