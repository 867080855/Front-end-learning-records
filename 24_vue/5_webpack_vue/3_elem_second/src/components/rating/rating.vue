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
					</div>
				</div>
			</div>
		</div>
		


		<div class="rating-wrapper border-1px"></div>
	</div>
</template>

<script>
import data from "../../common/json/data.json"


export default {
	name: 'rating',
	data(){
		return {
			seller: {}
		}
	},
	created(){
		this.seller = data.seller;
	}
}
</script>

<style lang="stylus" scoped>
	@import "./rating.styl"
</style>
