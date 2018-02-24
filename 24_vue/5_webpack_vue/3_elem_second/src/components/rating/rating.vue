<template>
	<div class="ratings">
		<div>
			<div class="ratings-content">
				<div class="overview">
					<div class="overview-left">
						<h1 class="score">{{seller.score}}</h1>
						<div class="title">综合评分</div>
						<div class="rank">高于周边商家{{seller.rankRate}}%</div>
					</div>
					<div class="overview-right">
						<div class="score-wrapper">
							<div class="title">
								服务态度
								<v-star :score="seller.serviceScore" :size="36"></v-star>
								{{seller.serviceScore}}
							</div>
						</div>
						<div class="score-wrapper">
							<div class="title">
								商品评分
								<v-star :score="seller.foodScore" :size="36"></v-star>
								{{seller.foodScore}}
							</div>
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
			<!-- 具体评价 -->
			<div class="rating-wrapper border-1px">
				<ul>
					<li v-for="rating in ratings" class="rating-item">
						<div class="avatar">
							<img :src="rating.avatar" alt="">
						</div>
						<div class="rating-right">
							<div class="line-one">
								<div class="username">{{rating.username}}</div>
								<div class="datetime clearfix">{{rating.rateTime}}</div>
							</div>
							<div class="line-two">
								<div class="delivery-time">{{rating.deliveryTime}}分钟</div>
							</div>
							<div class="line-third">
								<div class="text">{{rating.text}}</div>
							</div>
							<div class="line-four">
								<i class="iconfont icon-damuzhi"></i>
								<span class="item" v-for="item in rating.recommend">{{item}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll"
import data from "../../common/json/data.json"
import split from "../split/split.vue"
import star from "../star/star.vue"
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
		this.$nextTick(()=>{
			// console.log(this);
			// console.log(this.$el);	// ratings
			this._initScroll();
		});
	},
	components: {
		'v-split': split,
		'v-star': star,
		'v-ratingselect': ratingselect
	},
	methods: {
		incrementTotal(type, data) {
			// this[type] = data;
			// 	this.$nextTick(() => {
			// 	this.scroll.refresh();
        	// });
      	},
		_initScroll(){
			console.log(this.$el);
			this.ratingScroll = new BScroll(this.$el, {
				click: true
			});
		}
	}

}
</script>

<style lang="stylus" scoped>
	@import "./rating.styl"
</style>
