/**
 * Created by codeMaker on 2017/1/25.
 */
function ProgressBar(option){
    this._init(option);
}

ProgressBar.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.w = option.w || 0;
        this.h = option.h || 0;
        this.opacity = option.opacity || 1;

        this.fill = option.fill || 'red';
        this.stroke = option.stroke || 'black';

        this.cornerRadius = option.cornerRadius || 0;


        // innerRect 前边究竟是用this还是用var？
            // 貌似用var 的话可以节省空间？
            // 暂定用var
        //this.innerRect = new Konva.Rect({
        var innerRect = new Konva.Rect({
            x:this.x,
            y:this.y,
            width:0,
            height:this.h,
            opacity:this.opacity,
            fill:this.fill,
            cornerRadius:this.cornerRadius,
            id:'innerRect',
            name:'innerRect'
        });
        var outRect = new Konva.Rect({
            x:this.x,
            y:this.y,
            width:this.w,
            height:this.h,
            opacity:this.opacity,
            stroke:this.stroke,
            cornerRadius:this.cornerRadius
        });
        this.group = new Konva.Group({
            x:0,
            y:0
        });
        this.group.add(innerRect);
        this.group.add(outRect);
    },
    changeValue: function (val) {
        if (val > 1) {
            val = val / 100;
        }
        var innerRect = this.group.findOne('#innerRect');
        var tarWidth = val * this.w;
        innerRect.to({
            width:tarWidth,
            duration:1.5
        });
    },
    addToGroupOrLayer: function (arg) {
        arg.add(this.group);
    }
};