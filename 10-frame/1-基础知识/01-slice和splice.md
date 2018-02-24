# Array.slice() && Array.splice()

## Array.slice()

### 1.Desc

slice()函数并不会改变数组本身，它会创建一个复制品，把新的数组复制到那里去

### 2.Demo

```Javascript
var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, 3);

console.log(a);      // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']
```

## Array.splice()

### 1. Desc

splice()函数直接作用于数组本身

### 2. Demo

```Javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
```