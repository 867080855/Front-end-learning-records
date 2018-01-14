<template>
	<!-- <v-header>as</v-header> -->
	<div class="card">
		<div class="top">
			<div class="title">{{cardPrivate.title}}</div>
			<div class="right">
				<div class="edit fa fa-edit" @click="edit"></div>
				<div class="close fa fa-close" @click="close"></div>
			</div>
		</div>
		<div class="content">
			<v-scroll>
				<div v-html="compiledMarkdown"></div>
			</v-scroll>
		</div>

		<transition name="fade">
			<div @click="toggleMask">
				<v-masker v-show="maskShow" class="mask" >
					<v-writer :typeOut="2" :card="cardPrivate" :index="currentIndex"></v-writer>
				</v-masker>
			</div>
		</transition>
	</div>
</template>


<script>
import Scroll from "../scroll/scroll.vue"
import Writer from "../writer/writer.vue"
import Masker from "../mask/mask.vue"
import Marked from "marked"

export default {
	name: 'card',
	props: {
		card: {
			type: Object,
			default(){
				return {title: 'title', desc: 'desc'}
			}
		},
		index: Number
	},
	data(){
		return {
			cardPrivate: {},	// 主要数据
			currentIndex: 0,	// 当前内容在cards数组的索引值
			markedDesc: '',		// 编译后的内容

			maskShow: false
		}
	},
	created(){
		this.cardPrivate = this.card;
		this.currentIndex = this.index;
	},
	computed: {
		compiledMarkdown(){
			// Synchronous highlighting with highlight.js

			return Marked(this.cardPrivate.desc,{
				highlight: function (code) {
					return require('highlight.js').highlightAuto(code).value;
				}
			})
		}
	},
	methods:{
		toggleMask(){
			this.maskShow = !this.maskShow;
		},
		// 编辑便签
		edit(){
			// console.log(this.$parent);
			this.toggleMask();
		},
		// 删除便签
		close(){
			let flag = true;
			
			if(flag){
				// console.log(this.currentIndex);
				let arr = JSON.parse(localStorage.getItem('dataPrivate')).cards;
				// 删除指定索引的元素
				console.log(arr);
				arr.splice(this.currentIndex, 1);	
				
				localStorage.setItem('dataPrivate', JSON.stringify({
					cards: arr
				}));

				// console.log(this.$el);	// vue
				// console.log(this.$parent);	// vue
				// console.log(this.$el.parentNode);	// dom
				// 使用js原生方法移除card组件及其父盒子
				this.$el.parentNode.remove();
			}
		}
	},
	components: {
		'v-scroll': Scroll,
		'v-writer': Writer,
		'v-masker': Masker
	}
}
</script>

<style lang="stylus" scoped>
	@import "./card.styl"
</style>

<style>
	@import "./card.css"
</style>
