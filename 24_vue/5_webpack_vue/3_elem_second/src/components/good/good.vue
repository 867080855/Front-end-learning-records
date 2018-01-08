<template>
	<div class="good">
		<!-- 注意到定义了两个 ref 参数，方便调用 -->
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<!-- <li v-for="(item, index) in goods" class="menu-item border-1px" :class="'current': currentIndex === index" @click="selectMenu(index, $event)"> -->
				<!-- v-for 支持一个可选的第二个参数为当前项的索引 -->
				<li v-for="(item, index) in goods" class="menu-item border-1px"  @click="selectMenu(index, $event)">
					<span class="text">
						<span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
						{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodWrapper">
			<ul class="item-wrapper">
				<li class="item" v-for="item in goods">
					<div class="title">{{item.name}}</div>
					<div class="item-content" v-for="food in item.foods">
						<div class="content-left">
							<img :src="food.image" alt="">
						</div>
						<div class="content-right">
							<div class="line-one line">{{food.name}}</div>
							<!-- 我在这里加了一个空格保证占位 -->
							<div class="line-two line">{{food.description}}&nbsp</div>
							<div class="line-third line">月售{{food.sellCount}}份<span class="good-rating">好评率{{food.rating}}%</span></div>
							<div class="line-forth line">
								￥{{food.price}}<span class="delete" v-if="food.oldPrice != 0">￥{{food.oldPrice}}</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import data from '../../common/json/data.json'

export default {
	name: 'good',
	props: {
		seller: Object,
	},
	data(){
		return {
			goods: [],
			scrolly: 0,
			listHeight: []
		}
	},
	created(){
		this.goods = data.goods;
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		console.log(this.goods);


		// 注意此处的 this.$refs.menuWrapper
			// $refs 只在组件渲染完成后才填充，并且它是非响应式的。
			// 此处是延迟调用才可以拿到的，否则是 undefined
		this.$nextTick(()=>{
			// console.log(this);
			// console.log(this.$refs.menuWrapper);
			this._initScroll();
		});
	},
	methods: {
		// 选中左侧栏目 让右侧栏目跳转
		selectMenu(index, event){
			// 去掉自带click事件的点击
			if (!event._constructed) {
				return;
        	}

			// 点击左侧选项时，选中右侧所有食物项
			let foodlist = this.$refs.foodWrapper.querySelectorAll('.item');
			let el = foodlist[index];
			// console.log(foodlist);	[item, item, item, ...]
			// console.log(index);	// 3

			// 此处调用了 better scroll 的 api
			// scrollToElement(el, time, offsetX, offsetY, easing)
			this.foodScroll.scrollToElement(el,500);
		},
		// 初始化scroll组件
		_initScroll(){
			this.menuScroll = new BScroll(this.$refs.menuWrapper,{
				click: true
			});
			this.foodScroll = new BScroll('.foods-wrapper',{
				click: true
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import "./good.styl"
</style>
