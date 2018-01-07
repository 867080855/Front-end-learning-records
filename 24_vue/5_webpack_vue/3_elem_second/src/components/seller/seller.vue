<template>
	<div class="seller">
		<div>
			<!-- 第一部分，商家信息 -->
			<div class="seller-detail">
				<div class="detail-top">
					<div class="line-one">{{seller.name}}</div>
					<div class="line-two">
						({{seller.ratingCount}})
						<span class="sale-count">月售{{seller.sellCount}}单</span>
					</div>
				</div>
				<div class="detail-bottom">
					<div class="bottom-item">
						<span>起送价</span>
						<span class="number">{{seller.minPrice}}<span class="suffix">元</span></span>
					</div>
					<div class="bottom-item">
						<span>商家配送</span>
						<span class="number">{{seller.deliveryPrice}}<span class="suffix">元</span></span>
					</div>
					<div class="bottom-item">
						<span>平均配送时间</span>
						<span class="number">{{seller.deliveryTime}}<span class="suffix">分钟</span></span>
					</div>
				</div>
			</div>
			<v-split></v-split>
			<!-- 第二部分，公告与活动 -->
			<div class="bulletin">
				<div class="title">公告与活动</div>
				<div class="content">{{seller.bulletin}}</div>
				<!-- 优惠活动 -->
				<div class="supports">
					<ul>
						<li class="item" v-for="(item, index) in seller.supports">
							<span class="icon" :class="classMap[seller.supports[index].type]"></span>
							<span class="desc">{{seller.supports[index].description}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll"
import split from "../split/split.vue"

export default {
	name: 'seller',
	props: {
		seller: Object
	},
	data(){
		return {
			
		}
	},
	created(){
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		this.$nextTick(()=>{
			this.sellerScroll = new BScroll(this.$el,{
				click: true
			});
		});
	},
	components: {
		'v-split': split
	}
}
</script>

<style lang="stylus" scoped>
	@import "./seller.styl"
</style>
