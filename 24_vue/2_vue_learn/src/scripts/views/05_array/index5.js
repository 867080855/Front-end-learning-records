import commonUtils from '../../utils/commonUtil';
let indexTpl = require('./index5.string');
commonUtils.render(indexTpl);

let Vue = require('../../libs/vue');
let vm = new Vue({
    el: '#app5',
    data: {
        title: 'array',
        items: ['a','b','c','d']
    }
});


// 更改数组值
// vm.items[1] = 'e';  // 并不能改变页面渲染
// 可以用$set()实现
vm.items.$set(1, 'e');  // 生效 


// 清空数组
// vm.items.length = 0;    // 生效
vm.items.splice(0, vm.items.length);    // 生效