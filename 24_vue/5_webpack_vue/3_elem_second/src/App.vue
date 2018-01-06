<template>
  	<div id="app">
		<!-- 顶部栏组件 -->
		<!-- <v-Header></v-Header> -->
		<!-- 注意上边和下边的区别，v-bind:seller才是父子组件传递数据的关键桥梁 -->
		<v-Header :seller="seller"></v-Header>

		<!-- tab栏组件 -->
		<div class="tab">

		</div>

		<!-- 核心内容路由 -->
		<!-- <keep-alive>
			<router-view></router-view>
		</keep-alive> -->
  	</div>
</template>

<script>
// 加载数据及插件
import data from "./common/json/data.json"

// 加载组件
import Header from "./components/Header/header.vue"


export default {
  	name: 'app',
	components: {
		'v-Header': Header
	},
	data(){
		return {
			seller: {1:2},
			// 此处是一个立即执行函数
			id: (() => {
				// let queryParam = urlParse();
				// console.log(queryParam);
				// return queryParam.id;
			})()
		}
	},
	created(){
		this.seller = data.seller;
		console.log(data);
	}
}
</script>


