/**
 * Created by codeMaker on 2017/2/2.
 */
function Xingzuo(data,num){
    this.index = num ;
    this.data = data;
    this.box = $('<div></div>').addClass('item num-' + num);
    this.config = {
        jqueryContainer:$('.xingzuo').eq(0)
    };
}
Xingzuo.prototype = {
    init: function () {
        this.bindDOM();
        this.appendBox();
        this.bindEvent();
    },
    bindDOM: function () {
        var self = this;
        var str = '<div class="image"></div>' +
            '<div class="description">' +
            '<p class="name">@name</p>' +
            '<p class="time">@time</p>' +
            '<div class="mark"></div>' +
            '</div>';
        var con = $$.formatString(str,self.data);
        $(self.box).html(con);
    },
    appendBox: function () {
        var self = this;
        this.config.jqueryContainer.append(self.box);
    },
    bindEvent: function () {
        var self = this;
        this.box
            .on('mouseenter', function () {
                self.box.addClass('is-hover');
            })
            .on('mouseleave', function () {
                self.box.removeClass('is-hover');
            })
            .on('click', function () {
                window.location = 'detail.html?index=' + self.index;
            });
    }
};
