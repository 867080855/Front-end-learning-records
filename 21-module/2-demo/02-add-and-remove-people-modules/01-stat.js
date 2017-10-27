var Stat = function(){
    var length = 0;

    // bind Dom
    var $box = $('.stat');
    var $bull = $('.stat').find('.bull');
    var $template = $('#stat_template').html();

    // bind Events
    Events.on('peopleChange',setPeople);

    // render
    _render();
    function _render(){
        $bull.html(Mustache.render($template,{length: length}));
    }

    // 更改人数
    function setPeople(newLength){
        length = newLength;
        _render();
    }

    // 销毁模块
    function destory(){ //  结果：{peopleChange: Array(0)}
        $box.remove();
        Events.off('peopleChange',setPeople);
    }
    return {
        destory: destory
    }
}();