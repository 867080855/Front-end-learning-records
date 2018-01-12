<template>
	<!-- <v-header>as</v-header> -->
	<div class="card">
		<div class="title">{{card.title}}</div>
		<div class="content">
			<v-scroll>{{card.desc}}</v-scroll>
		</div>
	</div>
</template>


<script>
import Scroll from "../scroll/scroll.vue"

export default {
	name: 'card',
	props: {
		card: {
			type: Object,
			default(){
				return {title: '标题', desc: '内容'}
			}
		}
	},
	data(){
		return {
			content: 'card content'
		}
	},
	components: {
		'v-scroll': Scroll
	}
}
</script>

<style lang="stylus" scoped>
	@import "./card.styl"
</style>
