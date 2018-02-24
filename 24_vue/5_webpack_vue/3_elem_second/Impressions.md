## Impressions

### vue中的常用缩写

1. 属性绑定
	
	```
	:src === v-bind:src	
	```
1. 事件绑定
	```
	@click === v-on:click
	```
	


### 路由

1. 注意

	路由与组件的关系： 路由与组件并非一一对应的，因为一个路由意为着一个页面(或局部的页面)，但是一个页面(或局部的页面)通常是由多个组件组成的

	路由页面访问时以/#/作为起始，形如：localhost:8080/#/

1. 常用组件

	keep-alive组件——可以保持页面始终保存在内存中，不用重复请求
	
	router-view组件——主要负责路由定义的页面的渲染工作，定义的路由会在此处显示。就像是填格子

### 组件

1. 组件的定义

	组件定义的方式有很多，此处主要着眼于项目中组件的定义。即全部以component的形式分布于components目录中。并酌情根据样式的多少决定是否单独分离出样式文件。如下所示
	```
	├─build
	├─config
	├─node_modules
	│  ├─...
	├─src
	│  ├─common
	│  ├─components
	│  │  ├─cartctrl
	│  │  │	 ├─cartctrl.vue
	│  │  │  └─cartctrl.styl
	│  │  ├─...
	│  │  └─good
	│  └─router
	└─static
	    └─css
	```	

1. 父子组件的通信
	
	在vue2中，父子之间取消了双向绑定的功能。主要依靠 props 和 emit 实现父子之间的通信。即由props使数据由父亲传递给儿子，由emit触发事件告知父组件自己已经更改了数据。

	当然，一切都有特例啦，数组和对象除外，这两类数据在子组件更改后，父组件也会同时更改。此处的项目就是依靠这个原理实现的购物车组件之间的相互关联

	同时也不得不感慨，对于一个萌新而言，第一次略微认识到了数据耦合性复杂的可怕性。最后贴上一张父子交互的示意图。关于相关代码详见[此处](https://www.cnblogs.com/daiwenru/p/6694530.html)

<div align="center"><img src="https://cn.vuejs.org/images/props-events.png" width="400px"></div>

1. 样式穿刺
	
	在父组件中引用子组件时，由于各组件一般会添加scoped限定导致样式只是局部有效，当父组件想要修改子组件样式时，需要采用特殊的手法。主要有两种方式
	```
	// 方法一
	.father >>> .son .item{
		color: blue;
	}
	
	// 方法二
	.father /deep/ .son .item{
		color: blue;
	}	

	```
### v-for两个参数的情况

```vue2
<!-- v-for的第二个参数可以作为数组中的索引使用 -->
<li v-for="(item, index) in items" class="item">
	<span class="text">{{item}}</span>
	<span class="text">{{index}}</span>
</li>
```

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


### 生命周期

<img src="https://cn.vuejs.org/images/lifecycle.png" width="500px">