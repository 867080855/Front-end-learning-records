import commonUtils from '../../utils/commonUtil';
let indexTpl = require('./index4.string');
commonUtils.render(indexTpl);

let Vue = require('../../libs/vue');
let vm = new Vue({
    el: '#app4',
    data: {
        // title
        title: '计算属性',
        a: 1,
        // $watch
        firstName: '',
        lastName: '',
        fullName: ''
    },
    methods: {},
    computed: {
        b: function(){
            // parseInt把string转换成数字，只对字符串有效
            return parseInt(this.a) + 2;
        },
    }
});

vm.$watch('firstName', function(value){
    let vm = this;
    vm.fullName = value + ' ' + vm.lastName;    
});
vm.$watch('lastName', function(value){
    let vm = this;
    vm.fullName = vm.firstName + ' ' + value;
});
