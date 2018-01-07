<template>
	<div class="good">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<!-- <li v-for="(item, index) in goods" class="menu-item border-1px" :class="'current': currentIndex === index" @click="selectMenu(index, $event)"> -->
				<li v-for="(item, index) in goods" class="menu-item border-1px"  @click="selectMenu(index, $event)">
					<span class="text">
						<span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
						{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodWrapper"></div>
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
		selectMenu(index, event){
			alert('clicked');
		},
		_calculateHeight(){

		},
		_initScroll(){
			this.menuScroll = new BScroll(this.$refs.menuWrapper,{
				click: true
			});
		}
	},
	computed: {
		currentIndex(){
			for(let i = 0; i < this.listHeight.length; i++){
				let height = this.listHeight[i];
				let height2 = this.listHeight[i+1];
				if(!height2 || (this.scrolly >= height) && this.scrolly < height2){
					return i;
				}
				return 0;
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import "./good.styl"
</style>
