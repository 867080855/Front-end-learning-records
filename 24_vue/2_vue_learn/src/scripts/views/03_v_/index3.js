import commonUtils from '../../utils/commonUtil';
let indexTpl = require('./index3.string');
commonUtils.render(indexTpl);

let Vue = require('../../libs/vue');
new Vue({
    el: '#app3',
    data: {
        // title
        title: '指令 & 参数 & 修饰符',
        // v-if
        show: true,
        message: 'message',
        // v-bind
        attr: 'div-attr',
        // key modifiers
        keyup_text: '输入内容并按下回车会弹出消息'
    },
    methods: {
        alertTip: function(){
            alert('You have clicked the div');
        },
        showInfo: function (event) {
            // event是js原生对象
            console.log(event.target.tagName);
        },
        say: function(msg,event){
            console.log(event);
            // alert(event.preventDefault());
        },
        sayHi:function(msg){
            alert('Hi, ' + msg);
        },
        // 默认事件  冒泡
        doThis: function(){
            alert('bubble');
        },
        do: function(){
            alert('do');
        },
        // 按键修饰符
        enterHandler: function(){
            alert(this.keyup_text);
        }
    }
});