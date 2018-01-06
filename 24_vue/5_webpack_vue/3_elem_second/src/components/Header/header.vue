<template>
	<!-- 首页的顶部栏 -->
	<div class="header">
		<!-- 店家图标 + 描述 -->
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" width="64" height="64" alt="">
			</div>
			<div class="content">
				<!-- 第一行 -->
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<!-- 第二行 -->
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<!-- 第三行 -->
				<div v-if="seller.supports" class="support">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
				<!-- 第三行右侧的活动详情 -->
				<div v-if="seller.supports" class="supports-count" @click="showDetail">
					<span class="count">{{seller.supports.length}}个</span>
					<i class="icon iconfont icon-zuoyoujiantou"></i>
				</div>
			</div>
		</div>
		<!-- 公告 -->
		<div class="bulletin-wrapper"></div>


		<!-- 背景 -->
		<div class="background"></div>
	</div>

	<!-- 跳出/隐藏的活动页 -->
</template>

<script>
export default {
	name: 'Header',
	props: {
		//	此处涉及到 props 的作用，他可以将父组件的数据传送到当前的子组件中
		seller: {type: Object}
	},
	data() {
		return {
			detailShow:false
		};
	},
	created() {
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		console.log(this.classMap);  
	},
	methods: {
		showDetail(){
			this.detailShow = true;
		},
		hideDetail(){
			this.detailShow = false;
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import "./header.styl";
</style>