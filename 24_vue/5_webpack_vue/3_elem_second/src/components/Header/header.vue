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
		<div class="bulletin-wrapper" @click="showDetail">
			<!-- 公告内容 -->
			<span class="bulletin-title"></span> <span class="bulletin-text">{{seller.bulletin}}</span>
			<!-- 右侧小箭头 -->
			<i class="icon iconfont icon-zuoyoujiantou"></i>
		</div>

		<!-- 背景 -->
		<div class="background">
			<img :src="seller.avatar" alt="" class="" width="100%" height="100%">
		</div>

		<!-- 跳出/隐藏的活动页 -->
		<transition name="fade">
			<!-- transition内部只能有一个主要容器，其余的内容都要放在其容器内部，否则会报错 -->
			<div v-show="detailShow" class="detail" @click="hideDetail" transition="fade">
				<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
				</div>
				<div class="star-wrapper"></div>
				<!-- 非常巧妙的布局。。。 -->
				<div class="title">
					<div class="line"></div>
					<div class="text">优惠信息</div>
					<div class="line"></div>
				</div>
				<ul v-if="seller.supports" class="supports">
					<li class="support-item" v-for="(item, index) in seller.supports">
						<span class="icon" :class="classMap[seller.supports[index].type]"></span>
						<span class="text">{{seller.supports[index].description}}</span>
					</li>
				</ul>
				<div class="title">
					<div class="line"></div>
					<div class="text">商家公告</div>
					<div class="line"></div>
				</div>
				<ul class="bulletin">
					<p class="content">{{seller.bulletin}}</p>
				</ul>

				<!-- 关闭按钮 -->
				<div class="detail-close" @click="hideDetail">
					<i class="iconfont icon-cha"></i>
				</div>

			</div>
			<div class="detail-close" @click="hideDetail"></div>
			</div>
		</transition>
	</div>
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