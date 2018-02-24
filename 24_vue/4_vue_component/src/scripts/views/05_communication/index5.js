// 准备工作
const indexTpl = require("./index5.string");
const Vue = require("../../libs/vue");

import commonUtil from "../../utils/commonUtil";
commonUtil.render("#example5",indexTpl);

// 核心代码

// 注册子模块， 名字为child，内容为 #child-template的内容
// 自带notify方法
Vue.component('child', {
    template: "#child-template",    // .string文件中的id选择中的盒子中的内容作为模板
    data: function(){
        return {msg2: 'hello'}       // 设置默认显示
    },
    methods: {                      // 模板内的方法
        notify: function(){
            // this指的是child这个作用域？
            // console.log(this);   // Child对象
            // console.log(this.$dispatch);
            if(this.msg2.trim()){
                // this.$dispatch('child-msg', this.msg2);  // error
                this.$dispatch('child-msg2', this.msg2);
                this.msg = '';
            }
        }
    }
});

var parent = new Vue({
    el: '#event-example',
    data: {
        message: []                 // 双向绑定数据message
    },
    events: {
        'child-msg2': function(msg){
            this.message.push(msg);
        }
    }
});
