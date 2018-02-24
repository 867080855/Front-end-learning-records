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
								<v-cartctrl :food="food" class="clearfix"></v-cartctrl>
								<!-- <v-cartctrl :food="food" class="clearfix" @change="changeList"></v-cartctrl> -->
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<!-- 购物车 -->
		<v-shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" ></v-shopcart>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import data from '../../common/json/data.json'

import shopcart from "../shopcart/shopcart.vue"
import cartctrl from "../cartctrl/cartctrl.vue"

export default {
	name: 'good',
	props: {
		seller: Object,
	},
	data(){
		return {
			goods: [],
			// selectFoods: []
		}
	},
	created(){
		this.goods = data.goods;
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		// console.log(this.goods);


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
		},
		changeList(data, el){
			// 能打印东西，说明此时父组件已经收到了子组件的消息
			// console.log(data);
			// console.log(el);

			// 那么关键问题就是父组件此时如果锁定需要改动的内容
				// 需要改动的是selectFoods 而不是原始数据的 data，这很关键
			function addNew(arr){
				let newFood = {};
				newFood.name = data.name;
				newFood.price = data.price;
				newFood.count = 1;
				arr.push(newFood);
			}

			if(this.selectFoods.length == 0){
				addNew(this.selectFoods);
			}else{
				let modify = false;
				let length = this.selectFoods.length;
				this.selectFoods.forEach((food)=>{
					// console.log(food.name);
					if(food.name == data.name){
						// console.log('done true');
						food.count++;
					}else{
						length--;
					}
				});
				// 如果length等于0，说明列表中没有任何一项可以匹配到
				if(length == 0){
					addNew(this.selectFoods);
				}
			}
			// console.log(this.selectFoods);
		}
	},
	computed: {
		selectFoods(){
			let foods = [];
			// 注意 this.goods 和 item.foods 都是数组， 即子组件改变数据父组件也会被改变。
				// 不受到vue2 单向数据绑定的影响
			// 除此之外，如果数据是对象，也会和数组一样受到影响
			this.goods.forEach((item)=>{
				item.foods.forEach((food)=>{
					if(food.count)
						foods.push(food);
				});
			});
			// console.log(foods);
			return foods;
		}
	},
	components: {
		'v-cartctrl': cartctrl,
		'v-shopcart': shopcart
	}
}
</script>

<style lang="stylus" scoped>
	@import "./good.styl"
</style>
