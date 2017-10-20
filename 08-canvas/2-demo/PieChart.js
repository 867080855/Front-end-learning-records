/**
 * Created by codeMaker on 2017/1/26.
 */
function PieChart(option){
    this._init(option);
    console.log(this);
}

PieChart.prototype = {
    _init: function (option) {
        // 圆心点坐标
        this.x = option.x || 0;
        this.y = option.y || 0;

        // 饼状图半径
        this.radius = option.radius || 10;

        // 数据
        this.data = option.data || [];

        // 创建总组
        this.totalGroup = new Konva.Group({
            x:this.x,
            y:this.y
        });

        //var line = new Konva.Line({
        //    points:[0,0,100,0],
        //    stroke:'red',
        //    strokeWidth:4
        //});
        //this.totalGroup.add(line);

        // 创建扇形组
        var wedgeGroup = new Konva.Group({
            x:0,
            y:0
        });
        var textGroup = new Konva.Group({
            x:0,
            y:0
        });
        var self = this;
        var tempAngle = -90;
        this.data.forEach(function (item,index){
            var angle = item.value * 360;
            var wedge = new Konva.Wedge({
                x:0,
                y:0,
                angle:angle,
                rotation:tempAngle,
                radius:self.radius,
                fill:item.color
            });
            wedgeGroup.add(wedge);

            var textAngle = tempAngle + 1/2 * angle;
            var text = new Konva.Text({
                x: ( self.radius + 20 ) * Math.cos( textAngle * Math.PI / 180 ),
                y: ( self.radius + 20 ) * Math.sin( textAngle * Math.PI / 180 ),
                fontSize:14,
                text: item.name,
                fill: item.color
            });
            if( textAngle > 90 && textAngle < 270 ){
                text.x( text.x() - text.width() );
            }
            textGroup.add(text);

            tempAngle += angle;

        });
        this.totalGroup.add(wedgeGroup);
        this.totalGroup.add(textGroup);

        this.animate_index = 0;
    },
    addToGroupOrLayer: function (args) {
        args.add(this.totalGroup);
    },
    play: function () {
        var self = this;
        // 清除所有扇形的角度
        if(this.animate_index == 0){
            this.totalGroup.children[0].getChildren().each(function (item,index) {
                item.angle(0);
            });
        }

        console.log(self.data[this.animate_index]);

        var item = this.totalGroup.children[0].getChildren()[this.animate_index];
        var duration = 5;
        item.to({
            angle: self.data[self.animate_index].value * 360,
            duration: self.data[self.animate_index].value * duration,
            onFinish: function () {
                self.animate_index ++;
                if( self.animate_index > self.data.length ){
                    self.animate_index = 0;
                    return;
                }
                self.play();
            }
        });

    }
};