<template>
	<div class="app">
		<v-top class="top" @savedFromHead="refresh"></v-top>
		<div class="cards-wrapper" ref="cardWrapper">
			<div>
				<div class="card-wrapper" v-for="(card, index) in cards" :key="card.id">
					{{card.id}}
					<v-card :card="card" :index="index"></v-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import top from './components/top/top.vue'
import card from './components/card/card.vue'


// 处理静态数据为本地存储
import data from './common/data/data.json'
if(!localStorage.getItem('dataPrivate')){
	localStorage.setItem('dataPrivate', JSON.stringify(data));
}


export default {
	name: 'app',
	data(){
		return {
			cards: [],
			dataGeted: JSON.parse(localStorage.getItem('dataPrivate'))
		}
	},
	created(){
		// 初始化数据
		this.cards = this.dataGeted.cards;
	},
	methods:{
		refresh(obj){
			console.log(this);
			this.cards = JSON.parse(localStorage.getItem('dataPrivate')).cards;
			this.$forceUpdate();
		}
	},
	components: {
		'v-top': top,
		'v-card': card
	}
}
</script>

<style>
	/* 此文件在index.html引入时会报错，所以移到了此处 */
	@import "./common/css/font-awesome.css";
</style>
<style lang="stylus" scoped>
.app 
	position relative
	height 100%
	overflow hidden
	.top
		position absolute
		left 0
		top 0
		width 100%
		z-index 10
	.cards-wrapper
		position relative
		left 0
		top 60px
		padding-top 60pxs
		bottom 0
		width 100%
		height 100%
		min-width 400px
		overflow-y scroll
		.card-wrapper
			display inline-block
			width 50%
			box-sizing border-box
			padding-top 10px
			vertical-align top
			background-color rgb(220,220,220)
			// background-color rgb(220,220,220)
		.card-wrapper:nth-of-type(n)
			padding-left 10px
			padding-right 5px
		.card-wrapper:nth-of-type(2n)
			padding-left 5px
			padding-right 10px
		.card-wrapper:nth-last-child(2),
		.card-wrapper:last-child
			// padding-bottom 10px
			// margin-bottom 60px
</style>



