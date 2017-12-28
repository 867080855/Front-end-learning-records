const Vue = require("../../libs/vue");

// 子组件
var child = Vue.extend({
    template: '<div style="background-color:red;">A custom component!</div>'
});

var child2 = Vue.extend({
    template: '<div style="background-color:red;">I am child2 && I am a template</div>'
});

// 父组件
var parent = Vue.extend({
    template: `
        <div>I am father box</div>
            <my-component></my-component>
            <my-component2></my-component2>
        <div>I am end of father box</div>`,
    components: {
        'my-component': child,
        'my-component2': child2
    } 
});

Vue.component('parent-component', parent);

new Vue({
    el: "#example2"
});