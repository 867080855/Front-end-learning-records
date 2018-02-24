/**
 * Created by codeMaker on 2017/1/25.
 */
function HistogramChart(option){
    this._init(option);
}
HistogramChart.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0; //柱状图的原点坐标
        this.w = option.w || 0; //柱状图的总宽度
        this.h = option.h || 0; //柱状图高度

        this.opacity = option.opacity == 0? 0: ( option.opacity || 0.5);

        this.data = option.data || [];

        // 创建总组
        this.totalGroup = new Konva.Group({
        /* 这一定要写this.group不能写var的group,
            否则执行下边的addToGroupOrLayer方法时，
            因为this指向调用者即对象HistogramChart，
            而该对象内部并没有group对象，
            所以没法实现添加的这个动作
        */
            x:this.x,
            y:this.y
        });

            // 绘制基线
            var baseLine = new Konva.Line({
                points:[0,0,this.w,0],
                strokeWidth:1,
                stroke:'green',
                opacity:this.opacity,
                name:'h'
            });

        this.totalGroup.add(baseLine);

            // 创建矩形组
            var rectGroup = new Konva.Group({
                x:0,
                y:0
            });
            var self = this;
            var rectWidth = this.w / this.data.length;
            this.data.forEach(function (item, index) {
                var rect = new Konva.Rect({
                    width: 1/2 * rectWidth,
                    height: item.value * self.h,
                    x: (index + 1/4) * rectWidth,
                    y: - item.value * self.h,
                    fill:item.color,
                    cornerRadius:1/16 * rectWidth,
                    opacity:self.opacity,
                    name:'h'
                });
                rectGroup.add(rect);
            });

        this.totalGroup.add(rectGroup);

            // 创建百分比文字组
            var percentageText = new Konva.Group({
                x:0,
                y:0
            });
            this.data.forEach(function (item, index) {
                var text = new Konva.Text({
                    text:item.value * 100 + '%',
                    fill:item.color,
                    fontSize:14,
                    x: index * rectWidth,
                    y: - item.value * self.h - 14,
                    width:rectWidth,
                    align:'center',
                    opacity:self.opacity,
                    name:'h'
                });
                percentageText.add(text);
            });
        this.totalGroup.add(percentageText);

            // 创建底部文字组
            var bottomText = new Konva.Group({
                x:0,
                y:0
            });
            this.data.forEach(function (item, index) {
                var text = new Konva.Text({
                    text:item.name,
                    fill:item.color,
                    fontSize:14,
                    x: (index + 1/4) * rectWidth,
                    y: 0,
                    width:rectWidth,
                    rotation:30,
                    opacity:self.opacity,
                    name:'h'
                    //align:'center'
                });
                bottomText.add(text);
            });
        this.totalGroup.add(bottomText);


    },
    addToGroupOrLayer: function( arg ) {
        arg.add( this.totalGroup );
    },
    animate: function () {
        //console.log(this.totalGroup.children[1]);


        var self = this;
        // 使矩形移动
        this.totalGroup.children[1].getChildren().each(function (item,index) {
            //console.log(this);  // window

            //console.log(item.height);
                /*
                *  //    setting
                         if (arguments.length) {
                         this[setter](arguments[0]);
                         return this;
                         }
                         // g…
                * */
            item.y(0);
            item.height(0);
            item.to({
                y: - self.data[index].value * self.h,
                height: self.data[index].value * self.h,
                duration:2
            });

        });

        // 使百分比文字移动
        this.totalGroup.children[2].getChildren().each(function (item, index) {
            item.y(-14);
                // 这边不适合设置为0，会让文字藏在矩形后边。
            item.to({
                y: - self.data[index].value * self.h - 14,
                duration:2
            });
        });
    }
};