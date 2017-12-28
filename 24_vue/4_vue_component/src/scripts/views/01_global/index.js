const Vue = require("../../libs/vue");
var myComponent = Vue.extend({
    template: '<div>A custom component!</div>'
});

Vue.component('my-component', myComponent);

new Vue({
    el: "#example"
});