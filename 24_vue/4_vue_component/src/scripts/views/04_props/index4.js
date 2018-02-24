const Vue = require("../../libs/vue");

// 通过props传递数据
Vue.component('child', {
    props: ['msg'],
    template: '<div>{{msg}}</div>'
});

// 当使用大写字母命名属性时，如myMessage，html中的因为不区分大小写，
// 所以需要在html中改写成my-message

// 通过动态属性传递数据
Vue.component('child2',{
    props: ['myMessage'],
    template: '<div>{{myMessage}}</div>'
});

new Vue({
    el: '#example4'
});