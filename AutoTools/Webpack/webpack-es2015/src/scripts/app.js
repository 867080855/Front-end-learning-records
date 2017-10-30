var str = require('./name');
console.log(str);

import "../styles/app.css";
import "../styles/index2.css";
// require('../styles/index2.css');

require('../styles/index.scss');
// import "../styles/index.scss";

// 验证babel-es2015是否生效
let arr = [1, 2];
let brr = [...arr,3];
console.log(brr);
