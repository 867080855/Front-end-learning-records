// 加载
import commonUtils from '../../utils/commonUtil';
const indexTpl = require('./index2.string');
commonUtils.render(indexTpl);

// 加载vue
const Vue = require('../../libs/vue');
// 遇到了一个问题，当一个页面加载了两个app时，最先加载的app中的v-model生效，另一个失去绑定效果，仅限于input
new Vue({
    el: '#app2',
    data: {
        message: '<b>text</b>',
        tec: 'tecwang',
        show: true,
        url: 'https://www.tecwang.cn'
    },
    methods: {

    }
});