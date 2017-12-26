// 加载
import commonUtils from '../../utils/commonUtil';
const indexTpl = require('./index6.string');
commonUtils.render(indexTpl);

// 加载vue
const Vue = require('../../libs/vue');
// 遇到了一个问题，当一个页面加载了两个app时，最先加载的app中的v-model生效，另一个失去绑定效果，仅限于input
new Vue({
    el: '#app6',
    data: {
        title: '表单控件绑定',
        // input 
        msg: '',
        info: '',
        // checkbox:数组中的值跟checkbox的value相等时，该项被选中
        checkedNames: ['Mike'],
        // radio
        picked: '男',
        // select
        selected: 'Mike',
        selected2: '1',
        selected3: ['020'],
        items: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'},
        ],
        selected4: 'B',
        // 三个参数
        age: 0,
        toDebounce: '',
        toLazy: ''
    },
    methods: {
    },
    computed: {
        info: function(){
            return `{\"msg\": \"${this.msg}\" }`;
        }
    }
});