<template>
	<div class="ratings">
		<div class="ratings-content">
			<div class="overview">
				<div class="overview-left">
					<h1 class="score">{{seller.score}}</h1>
					<div class="title">综合评分</div>
					<div class="rank">高于周边商家{{seller.rankRate}}%</div>
				</div>
				<div class="overview-right">
					<div class="score-wrapper">
						<div class="title">服务态度</div>
					</div>
					<div class="score-wrapper">
						<div class="title">商品评分</div>
					</div>
					<div class="score-wrapper">
						<div class="title">送达时间</div>
						<span class="delivery">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
		</div>

		<!-- 分割线 -->
		<v-split></v-split>

		<!-- 评价分类 -->
		<v-ratingselect :ratings="ratings"></v-ratingselect>

		<!-- 偷懒环节结束，又需要自己写了 -->
		<div class="rating-wrapper border-1px">
		</div>
	</div>
</template>

<script>
import data from "../../common/json/data.json"
import split from "../split/split.vue"
import ratingselect from "../ratingselect/ratingselect.vue"

export default {
	name: 'rating',
	props: {
		seller: Object
	},
	data(){
		return {
			ratings: []
		}
	},
	created(){
		this.ratings = data.ratings;
	},
	components: {
		'v-split': split,
		'v-ratingselect': ratingselect
	},
	methods: {
		incrementTotal(type, data) {
			// this[type] = data;
			// 	this.$nextTick(() => {
			// 	this.scroll.refresh();
        	// });
      	}
	}

}
</script>

<style lang="stylus" scoped>
	@import "./rating.styl"
</style>
