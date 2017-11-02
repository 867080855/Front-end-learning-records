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
        attr: 'div-attr'
    },
    methods: {
        alertTip: function(){
            alert('You have clicked the div');
        }
    }
});