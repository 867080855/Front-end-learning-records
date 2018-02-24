// This is a easier way to declare a local component
const Vue = require("../../libs/vue");

// 子组件
// 把组件声明和注册合并到一起
Vue.component('my-component',{
    template: '<div style="background-color:red;">A custom component!</div>'
});

// 父组件
// 仍然可以起到声明局部组件的作用
var parent = Vue.extend({
    components: {
        'my-component': {
            template: '<div style="background-color:red;">A custom component!</div>'
        }
    }
});


new Vue({
    el: "#example3"
});