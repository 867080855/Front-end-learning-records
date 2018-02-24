// 准备工作
const indexTpl = require("./index6.string");
const Vue = require("../../libs/vue");

import commonUtil from "../../utils/commonUtil";
commonUtil.render("#example5", indexTpl);

Vue.component('my-component',{
    template:   `<div>
                    <h1>This is my component!</h1>
                    <slot name="one">
                        This will only be displayed if there is no content
                        to be distributed.
                    </slot>

                    <!-- 渲染的顺序和此处模板的顺序一致  -->
                    <slot></slot>

                    <!-- name是slot的属性  -->
                    <slot name="two">
                        slot two
                    </slot>
                </div>`
});
// 组件slot中的内容在 <my-component></my-component> 之间正常显示
// 当<my-component></my-component>带有别的内容时， slot中的内容消失

new Vue({
    el: '#example5'
});