<template>
  	<div id="app">
		<!-- 顶部栏组件 -->
		<!-- <v-Header></v-Header> -->
		<!-- 注意上边和下边的区别，v-bind:seller才是父子组件传递数据的关键桥梁 -->
		<v-Header :seller="seller"></v-Header>

		<!-- tab栏组件 -->
		<div class="tab border-1px">
			<div class="tab-item" tag="a">
				<router-link v-bind:to="'/good'">商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/rating">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/seller">商家</router-link>
			</div>
		</div>

		<!-- 核心内容路由 -->
		<keep-alive>
			<!-- 注意此处的seller的数据绑定，否则子组件无从接收数据 -->
			<router-view :seller="seller"></router-view>
		</keep-alive>
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

<style lang="stylus" scoped>
	.tab {
		position: relative;
		display: flex;
		height: 40px;
		width: 100%;
		line-height: 40px;
	}
	.border-1px {
		border-bottom 1px solid rgba(7,17,27,0.1);
	}
	.tab-item {
		flex: 1;
		text-align: center;
	}
	.tab .tab-item a {
		display: block;
		font-size: 14px;
		color: rgb(77, 85, 93);
	}
	.tab .tab-item .router-link-active {
		color: rgb(240, 20, 20);
	}
</style>



