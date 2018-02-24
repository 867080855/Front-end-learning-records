# let 和 const 命令

## 1. let

### let是真正的局部变量

```javascript
{
    var c = 100;
    let d = 200;
    console.log(d); // 200
}
console.log(c);
// console.log(d);     // d is not defined
```

### let不存在变量提升

```javascript
var e = [];
for(var i = 1; i <= 5; i++){
    var f = i;
    e[i] = function(){
        console.log("var in func: " + f);
    }// 数组里堆了一堆的方法
};
e[4](); // 5
e[2](); // 5

var g = [];
for(var i = 1; i <= 5; i++){
    let h = i;
    g[i] = function(){
        console.log("var in func: " + h);
    }// 数组里堆了一堆的方法
};
g[4](); // 4
g[2](); // 2
// 不再像之前一样到5了
```

### let暂时性死区

```javascript
var a = 200;
{
    // 感觉这才是不存在变量提升哦...
    console.log("in block: a = " + a);    // undefined
    let a = 100;
    console.log("in block: a = " + a);    // 100
}
console.log("out block: var a = " + a);
```

### let不允许重复声明

```javascript
// 几种错误定义方式
// 第一种
{
    var m = 100;
    // let m = 200;    // Duplicate declaration, m
}
// 第二种
{
    // let n = 100;    // Duplicate declaration, n
    var n = 200;
}
// 第三种
{
    let x = 100;
    // let x = 200;    // Duplicate declaration, x
    console.log("in block: x = " + x);  // 100
}
```

### let的作用域

块级作用域之间，let可以重复定义，不会互相影响

```javascript
{
    var z = 100;
    var z = 200;
    console.log("in first block: z = " + z);    // 200
}
{
    let z = 300;
    console.log("in another block: z = " + z);  // 300
}
```

## 2. const

### 性质

```javascript
// 1. 不可以赋值
const PI = 3.141592653;
// PI = 3;  // error: PI is read-only,程序终止
console.log(PI);

// 2. 存在块级作用域
if(true){
    const MAXSIZE = 100;
}
// console.log(MAXSIZE);   // error: MAXSIZE is not defined

// 3. 存在暂时性死区
{
    console.log("DEAD ZONE: " + DEADZONE);  // undefined
    // var DEADZONE = 888; // error:  Duplicate declaration, DEADZONE
    const DEADZONE = 999;
    console.log("DEAD ZONE: " + DEADZONE);  // 999
}
```

### const对象

cosnt所定义的对象的属性可以重新赋值，但是const所定义的对象不能被重新赋值。因为const定义的对象指向一个固定的地址，不能改变地址

```javascript
const person = {};
person.name = 'tecwang';
person.age = 30;

person.age = 40;

console.log('person.name = ' + person.name);
console.log('person.age = ' + person.age);
console.log(person);

// person = {};    // person is read-only
```

### const数组

同const对象，可以修改属性，不能修改地址

### 如何放置const对象/数组修改其属性？----const对象冻结

```javascript
const object = Object.freeze({
    desc: 'freezed object'
});
object.size = 100;
object.name = 'box';
console.log("object.desc: " + object.desc); // freezed object
console.log("object.name: " + object.name); // undefined
console.log("object.size: " + object.size); // undefined
console.log("object: " + object);
```