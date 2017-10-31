/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7); // 初始页面

__webpack_require__(2); // 初始页面样式

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _commonUtil = __webpack_require__(9);

var _commonUtil2 = _interopRequireDefault(_commonUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexTpl = __webpack_require__(8); // 加载模板

_commonUtil2.default.render(indexTpl);

// 加载vue
var Vue = __webpack_require__(11);

// 定义 view 和 module
new Vue({
    // 相当于选择器
    el: '#app',
    // 数据
    data: {
        newTodo: '',
        todos: [{ text: 'Add some todos' }]
    },
    methods: {
        addTodo: function addTodo() {
            var text = this.newTodo.trim();
            if (text) {
                this.todos.push({ text: text });
                this.newTodo = '';
            }
        },
        removeTodo: function removeTodo(index) {
            console.log(index);
            this.todos.splice(index, 1);
        }
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<!-- todo list --><div id=\"app\">    <!-- 数据绑定： 又是数据绑定这一套... -->    {{newTodo}} <br>    <input type=\"text\" v-model=\"newTodo\" v-on:keyup.enter=\"addTodo\">    <!-- v-model 的 v 代表 vue -->    <!-- 渲染列表 -->    <ul>        <li v-for=\"todo in todos\">            <span>{{todo.text}}</span>            <button v-on:click=\"removeTodo($index)\">X</button>        </li>    </ul></div>"

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var commonUtil = {
    //把*.string渲染到html
    render: function render(str) {
        var container = document.querySelector('#football-container');
        container.innerHTML = str + container.innerHTML;
    }
};

exports.default = commonUtil;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'e:\\Code\\Html\\24_vue\\footballSNS\\src\\scripts\\libs\\vue.js'\n    at Error (native)");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map