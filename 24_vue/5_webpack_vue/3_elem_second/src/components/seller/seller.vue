<template>
	<div class="seller">
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

	</div>
</template>

<script>
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
	components: {
		'v-split': split
	}
}
</script>

<style lang="stylus" scoped>
	@import "./seller.styl"
</style>
