// 准备工作
const indexTpl = require("./index8.string");
const Vue = require("../../libs/vue");

import commonUtil from "../../utils/commonUtil";
commonUtil.render("#example5", indexTpl);

Vue.component('my-component',{
    template: `
        <div>
            <slot></slot>
        </div>`
});

new Vue({
    el: '#example5',
    data: {
        items: [1,2,3,4,5,6]
    }
});