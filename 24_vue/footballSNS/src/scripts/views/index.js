// 加载模板
import commonUtil from '../utils/commonUtil';
let indexTpl = require('./index.string');
commonUtil.render(indexTpl);

// 加载vue
var Vue = require('../libs/vue');

// 定义 view 和 module
new Vue({
    // 相当于选择器
    el: '#app',
    // 数据
    data: {
        newTodo: '',
        todos: [
            { text: 'Add some todos' },
        ]
    },
    methods: {
        addTodo: function(){
            var text = this.newTodo.trim();
            if(text){
                this.todos.push({text: text});
                this.newTodo = '';
            }
        },
        removeTodo: function (index) {
            console.log(index);
            this.todos.splice(index,1)
        }
    }
});