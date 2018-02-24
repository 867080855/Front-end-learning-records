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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// scss引入
__webpack_require__(2);
// js引入
__webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// 本文件专门负责引入模块的 scss文件
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// 引入React
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(7);
// header
var header_1 = __webpack_require__(8);
ReactDOM.render(React.createElement(header_1.Header, { left: "I", middle: "am", right: "tecwang" }), document.getElementById("header"));
// aside
var aside_1 = __webpack_require__(9);
ReactDOM.render(React.createElement(aside_1.Aside, { left: "I", middle: "am", right: "tecwang" }), document.getElementById("aside"));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// export const Hello = (props: HelloProps) => 
//     <h1>Hello from {props.compiler} and {props.framework} ! </h1>
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // render() {
    //     return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    // }
    Header.prototype.render = function () {
        return React.createElement("div", { id: "header_component" },
            React.createElement("div", { className: "left" }, this.props.left),
            React.createElement("div", { className: "middle" }, this.props.middle),
            React.createElement("div", { className: "right" }, this.props.right));
    };
    return Header;
}(React.Component));
exports.Header = Header;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// export const Hello = (props: HelloProps) => 
//     <h1>Hello from {props.compiler} and {props.framework} ! </h1>
var Aside = /** @class */ (function (_super) {
    __extends(Aside, _super);
    function Aside() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // render() {
    //     return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    // }
    Aside.prototype.render = function () {
        return React.createElement("div", { id: "aside_component" },
            React.createElement("div", { className: "title" }, "title"),
            React.createElement("div", { className: "content" }, "content"));
    };
    return Aside;
}(React.Component));
exports.Aside = Aside;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map