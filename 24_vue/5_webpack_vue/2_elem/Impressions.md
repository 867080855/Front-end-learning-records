## Impressions

### vue中的常用缩写

1. :src === v-bind:src
1. @click === v-on:click

### 生命周期

![生命周期](https://cn.vuejs.org/images/lifecycle.png)

### 组件与路由

并不是说每个组件都会去对应一个路由，因为一个路由意为这一个页面，但是一个页面通常是由多个组件组成的

因此说，页面数 === 路由数 ！= 组件数

### better-scroll的初始化

```javascript
// better-scroll的初始化有时候可能会不生效，初始化时要注意容器内部应该有一个盒子并使其包裹所有内容。如下所示
// 其中.box盒子就是容器，ul就是那个包裹所有内容的盒子。如果没有 ul 的话，better-scroll无法完成其初始化工作
<div class="box">
    <ul>
        <li v-for="item in lists">{{item}}</li>
    </ul>
</div>
```