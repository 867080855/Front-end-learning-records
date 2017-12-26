// 加载模板
const indexTpl = require('./index7.string');
import commonUtil from "../../utils/commonUtil"
commonUtil.render(indexTpl);

// 加载vue
const Vue = require('../../libs/vue');
const vueResource = require('../../../../node_modules/vue-resource/dist/vue-resource');
Vue.use(vueResource);   // !important

const vm = new Vue({
    el: '#football-container',  // 找父盒子， 不等于其模板内的id
    data: {
        list: [], // 页面模板
    },

    ready: function(){
        // console.log(this.$http);    // undefined
        // vue-resource 属于vue的插件，想要使用需要 use 一下
        this.$http.get('/mock/list.json')
            .then(
                response => {
                    // console.log(response.data.data);
                    console.log(this.list);  // enable
                    this.list = response.data.data;
                },response  => {
                    console.log(response);
                }
            )
    }
});