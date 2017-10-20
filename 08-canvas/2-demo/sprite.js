/**
 * Created by codeMaker on 2017/1/24.
 */
function Sprite(option){
    this._init(option);
}

Sprite.prototype = {
    _init: function (option) {
        this.x = option.x === 0? 0: (option.x || 0);
        this.y = option.y === 0? 0: (option.y || 0);

        this.w = option.w || 40;    // 小精灵的宽高
        this.h = option.h || 65;
        this.originW = option.oW;  // 原始图片的宽高
        this.originH = option.oH;

        this.fps = option.fps || 10;
        // fps:frame per second

        this._dirIndex = 0;
        this._imgSrc = option.src || '';
    },
    render: function (ctx) {
        // 加载图片到浏览器
        var _this = this;
        var img = new Image();
        img.src = this._imgSrc;
        var timer = null;
        img.onload = function () {
            clearInterval(timer);
            var frameIndex = 0;
            // 启动一个定时器，持续渲染动画
            timer = setInterval(function () {
                ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
                ctx.drawImage(img
                        ,frameIndex*_this.originW
                        ,_this._dirIndex*_this.originH
                        ,_this.originW
                        ,_this.originH
                        ,_this.x
                        ,_this.y
                        ,_this.w
                        ,_this.h);
                frameIndex++;
                frameIndex %= 4;
            },1000/_this.fps);
        };

    },
    changeDir: function (dir) {
        if(dir == 'left'){
            this._dirIndex = 1;
        }else if(dir == 'right'){
            this._dirIndex = 2;
        }else if(dir == 'up'){
            this._dirIndex = 3;
        }else{
            this._dirIndex = 0;
        }
    }
};