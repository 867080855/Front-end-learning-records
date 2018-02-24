<template>
	<div class="seller">
		<div class="seller-box">
			<!-- 第一部分，商家外卖信息 -->
			<div class="seller-detail">
				<div class="detail-top">
					<div class="line-one">{{seller.name}}</div>
					<div class="line-two">
						<!-- size 是star 组件提供的接口，分别有三个选项，24,36,48，代表星星的大小 -->
						<v-star :score="seller.score" :size="24"></v-star>
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
			<v-split></v-split>
			<!-- 第三部分，商家实景 -->
			<div class="seller-image">
				<div class="title">商家实景</div>
				<div class="images">
					<div class="image-box">
						<img v-for="item in seller.pics" :src="item" alt="">
					</div>
				</div>
			</div>
			<v-split></v-split>
			<!-- 第四部分，商家信息 -->
			<div class="seller-detail-2">
				<div class="title">商家信息</div>
				<div class="supports">
					<ul>
						<li class="item" v-for="item in seller.infos">
							<span class="desc">{{item}}</span>
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
import star from "../star/star.vue"

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
			if(!this.sellerScroll){
				this.sellerScroll = new BScroll(this.$el,{
					click: true
				});
			}else{
				this.sellerScroll.refresh();
			}
				

			if(!this.picScroll){
				this.picScroll = new BScroll('.seller-image .images',{
					scrollX: true,
					eventPassthrough: 'vertical'
				});
			}else{
				this.picScrll.refresh();
			}
		});
	},
	components: {
		'v-split': split,
		'v-star': star
	}
}
</script>

<style lang="stylus" scoped>
	@import "./seller.styl"
</style>
