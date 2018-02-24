// 准备工作
const indexTpl = require("./index9.string");
const Vue = require("../../libs/vue");

import commonUtil from "../../utils/commonUtil";
commonUtil.render("#example5", indexTpl);

Vue.component('my-component', {
    template: `
        <div>
            <slot name="icon"></slot>
            <slot name="main-text"></slot>
        </div>`
});

/*
    1. Props allow the external environment to feed data to the component;

    2. Events allow the component to trigger actions in the external environment;

    3. Slots allow the external environment to insert content into the component’s view structure.
*/

new Vue({
    el: '#example5',
    data: {
        path: './images/image1.jpg',
        content: 'Hello'
    },
    methods: {
        doThis: function(){
            alert("this");
        },
        doThat: function(){
            alert("that");
        }
    }
});