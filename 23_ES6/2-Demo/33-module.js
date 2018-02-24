// export 导出变量
// 导出常量，变量
export const str = 'This sentence comes from a module.';


// 导出函数
var goFunc = (place) => {
    return `I want to go to ${place}`;
}
export {goFunc};
export function Buy(thing){
    return `I want buy a ${thing}`;
};

// export输出的变量就是本来的名字，但是可以使用as关键字重命名
var a = 10;
var b = 20;
export {
    a as item1,
    b as item2
}

// export default 导出变量
var sayHi = (name) => {
    return `Hi, ${name}`;
}
var sayBye = (name) => {
    return 'GoodBye, ${name}'
}
export default {sayHi, sayBye};

// export & export default
    // 导出
    // export 可以由多个
    // export default 只能有一个

    // 导入
    // export的内容导入要带花括号 
        // import {str} from './33-module.js'
        // The requested module does not provide an export named 'default'
    // export default 的内容导入不带花括号直接导入
        // import item from './33-module.js'
    // 通过加不加花括号，可以清晰的知道导入的是什么内容
