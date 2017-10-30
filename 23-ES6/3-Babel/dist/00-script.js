'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES6
// var fruit = ['apple','pear'];
// var food = [...fruit,'bread','rice'];   
// // 在ie8里边es6显示语法错误

// console.log(food);


// react
_reactDom2.default.render(_react2.default.createElement(
    'h1',
    null,
    'hello react'
), document.getElementById('app')); // jsx语法
// import在chrome就不能使用了