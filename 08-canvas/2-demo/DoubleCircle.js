/**
 * Created by codeMaker on 2017/1/25.
 */
function DoubleCircle(option){
    this._init(option);
}
DoubleCircle.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;

        // 内圆半径和外圆半径
        this.innerRadius = option.innerRadius || 20;
        this.outerRadius = option.outerRadius || 40;

        // 填充色
        this.innerFill = option.innerFill || 'black';
        this.outerFill = option.outerFill || 'gray';
        this.text = option.text || '';

        // 创建双圈的组
        this.group = new Konva.Group({
            x:this.x,
            y:this.y
        });

        // 创建内圆
        var innerCircle = new Konva.Circle({
            x:0,
            y:0,
            radius:this.innerRadius,    // 此处的this？
                //
            fill:this.innerFill
        });

        // 创建外圆
        var outerRing = new Konva.Ring({
            x:0,
            y:0,
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,    // 此处的this？
            //
            fill:this.outerFill
        });

        // 创建文字填充
        var text = new Konva.Text({
            x:-this.innerRadius,
            y:-8,
            text:this.text,
            fontSize:16,
            align:'center',
            fontFamily:'Microsoft Yahei',
            width:this.innerRadius*2
        });

        this.group.add(innerCircle);
        this.group.add(outerRing);
        this.group.add(text);

        var a = function(){
            console.log(this);
        }
    },
    addToGroupOrLayer: function (args) {
        args.add(this.group);
    }
};