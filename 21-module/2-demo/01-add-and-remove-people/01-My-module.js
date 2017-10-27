(function(){
    var people = {
        people: ['shell','tecWang'],
        init: function(){
            this.bindDom();
            this.bindEvents();
            this.render();
        },
        bindDom: function(){
            this.$box = $('.content');
            this.$input = this.$box.find('input');
            this.$button = this.$box.find('.button');
            this.$ul = this.$box.find('ul');
            this.$template = this.$box.find('#template').html();
        },
        bindEvents: function(){
            this.$button.on('click',this.addPerson.bind(this));
            this.$ul.delegate('.close','click',this.removePerson.bind(this));
            // 如果removePerson这里不加bind(this),函数调用中，this是span，即点击的那个小叉号
        },
        render:function(){
            var data = {
                people: this.people
            };
            this.$ul.html(Mustache.render(this.$template,data));
        },
        addPerson: function(name){
            this.people.push(this.$input.val() || name);
            this.render();
            this.$input.val('');
        },
        removePerson: function(e){
            var $remove = $(e.target).closest('li');
            var index = this.$ul.find('li').index($remove);
        
            $remove.remove();
            this.people.slice(index,1);  // 有啥用？
        }
    };

    people.init();
})();

// var myModule = {
//     name:'tecWang',
//     age:23,
//     sayName:function(){
//         alert(this.name);
//     },
//     setName:function(newName){
//         this.name = newName;
//     }
// };
// myModule.setName("wiki");
// myModule.sayName();

// var people = [];
// var template = $('#template').html();
// // button click
// $('.content').find('.button').on('click',function(){
//     people.push($('.content').find('input').val());
//     $('.content').find('input').val(''); // clear
//     var data = {
//         people: people
//     };
//     $('.content').find('ul').html(Mustache.render(template,data));
// });
// // button close
// $('.content').find('ul').delegate('.close','click',function(e){
//     var $remove = $(e.target).closest('li');
//     var index = $('content').find('ul').find('li').index($remove);

//     $remove.remove();
//     people.slice(index,1);  // 有啥用？
// });