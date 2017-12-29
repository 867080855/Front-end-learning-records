// 准备工作
const indexTpl = require("./index7.string");
const Vue = require("../../libs/vue");

import commonUtil from "../../utils/commonUtil";
commonUtil.render("#example5", indexTpl);

// 核心代码
new Vue({
    el: '#example5',
    data: {
        currentView: 'template1',
        view: 'v-a'
    },
    components: {
        template1: {
            template: '<div>111</div>'
        },
        template2: {
            template: '<div>222</div>'
        },
        template3: {
            template: '<div>333</div>'
        },
        'v-a': {
            template: '<div>Component A</div>'
        },
        'v-b': {
            template: '<div>Component B</div>'
        }
    }
});
