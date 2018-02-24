var People = function(){
    var people = ['shell','tecwang'];

    // bind Doms
    var $box = $('.content');
    var $input = $box.find('input');
    var $button = $box.find('.button');
    var $ul = $box.find('ul');
    var $template = $box.find('#template').html();

    // bind Events
    $button.on('click',addPerson);
    $ul.delegate('.close','click',removePerson);

    // render
    _render();
    function _render(){
        $ul.html(Mustache.render($template,{people:people}));
        // Stat.setPeople(people.length);
        Events.emit('peopleChange',people.length);
    }

    // 每次执行完addPerson或者removePerson后，people[]都会发生变化，所以要重新render
    function addPerson(value){
        var name = (typeof value === 'String') ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function removePerson(e){
        var i;
        if(typeof e === 'number'){
            i = event;
        }else {
            var $remove = $(e.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i,1);
        _render();
    }

    return {
        addPerson: addPerson,
        removePerson: removePerson
    };
}();